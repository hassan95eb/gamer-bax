import fs from 'fs';
import path from 'path';

function getKeys(obj, prefix = '') {
  let keys = [];
  for (const key of Object.keys(obj)) {
    const fullPath = prefix ? `${prefix}.${key}` : key;
    const value = obj[key];
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      keys = keys.concat(getKeys(value, fullPath));
    } else {
      keys.push(fullPath);
    }
  }
  return keys.sort();
}

const faPath = path.join(process.cwd(), 'src/messages/fa.json');
const enPath = path.join(process.cwd(), 'src/messages/en.json');

const faJson = JSON.parse(fs.readFileSync(faPath, 'utf-8'));
const enJson = JSON.parse(fs.readFileSync(enPath, 'utf-8'));

const faKeys = getKeys(faJson);
const enKeys = getKeys(enJson);

const missingInEn = faKeys.filter((k) => !enKeys.includes(k));
const missingInFa = enKeys.filter((k) => !faKeys.includes(k));

if (missingInEn.length > 0 || missingInFa.length > 0) {
  console.error('❌ i18n validation failed! Messages files key sets diverge.');
  if (missingInEn.length > 0) {
    console.error('Keys in fa.json missing in en.json:', missingInEn);
  }
  if (missingInFa.length > 0) {
    console.error('Keys in en.json missing in fa.json:', missingInFa);
  }
  process.exit(1);
}

console.log('✅ i18n validation passed! All message keys match perfectly across fa.json and en.json.');

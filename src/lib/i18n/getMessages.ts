import faMessages from '@/messages/fa.json';
import enMessages from '@/messages/en.json';
import { Locale } from './config';

type Messages = typeof faMessages;

const messagesMap: Record<Locale, Messages> = {
  fa: faMessages,
  en: enMessages,
};

export function getMessages(locale: Locale): Messages {
  return messagesMap[locale] || messagesMap.fa;
}

export function getTranslation(locale: Locale, key: string): string {
  const msgs = getMessages(locale);
  const parts = key.split('.');
  let current: unknown = msgs;

  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return key; // Fallback to key name if missing
    }
  }

  return typeof current === 'string' ? current : key;
}

export function createTranslator(locale: Locale) {
  return (key: string) => getTranslation(locale, key);
}

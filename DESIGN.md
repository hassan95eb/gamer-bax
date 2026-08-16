# DESIGN.md — Gamer Bax Design System Specification

## Visual Direction
A near-black page with a faint green cast, an acid-lime accent used sparingly, thin hairline borders, and generous vertical space. Contrast is driven by scale rather than multiple colors. Depth comes strictly from surface values and border contrast—**no drop shadows**.

---

## Color Tokens

Defined in `@theme` block inside `src/app/globals.css`:

| Token | Hex Value | Intended Usage |
|---|---|---|
| `--color-bg` | `#080B08` | Page background |
| `--color-bg-deep` | `#050705` | Alternating darker sections |
| `--color-surface` | `#0E140D` | Cards, panels, modal backgrounds |
| `--color-surface-2` | `#121A10` | Nested areas inside cards (subtle top gradient) |
| `--color-border` | `#1D2A1B` | Default hairline borders |
| `--color-border-strong` | `#2A3B26` | Hover and active border states |
| `--color-text` | `#EDF1E8` | Primary text |
| `--color-text-muted` | `#8E9B88` | Body copy, descriptions |
| `--color-text-dim` | `#5E6A59` | Metadata, disabled text |
| `--color-accent` | `#C8E870` | Rare acid-lime accent |
| `--color-accent-dim` | `#9DB84F` | Small labels, icons |
| `--color-glow` | `#163312` | Ambient radial glow blur background |

---

## Typography Scale & Font Sources

### Self-Hosted Local Fonts (`public/fonts/`)

| Role | Persian (`fa`) | English (`en`) | License Source |
|---|---|---|---|
| Display | Vazirmatn (900) | Inter Tight (800) | OFL (Fontsource / GitHub rastikerdar/vazirmatn) |
| Body / UI | Vazirmatn (400 / 500 / 700) | Inter (400 / 500 / 700) | OFL (Fontsource) |
| Mono | JetBrains Mono (400) | JetBrains Mono (400) | OFL (Fontsource) |

### Typography Scale Table

| Role | Size | Weight | Line Height (`fa`) | Line Height (`en`) |
|---|---|---|---|---|
| Display | `clamp(2.5rem, 5vw, 4rem)` | 900 / 800 | 1.25 | 1.1 |
| H2 | `clamp(1.75rem, 3vw, 2.5rem)` | 800 | 1.35 | 1.2 |
| H3 | `1.25rem` | 700 | 1.5 | 1.4 |
| Body | `0.9375rem` | 400 | 1.85 | 1.7 |
| Small | `0.8125rem` | 400 | 1.7 | 1.6 |
| Eyebrow | `0.75rem` | 500 | 1 | 1 |
| Mono label | `0.6875rem` | 400 | 1 | 1 |

---

## Component Snippets

### Button
```tsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="md">Subscribe</Button>
<Button variant="ghost" size="sm">Read Article →</Button>
<Button variant="icon" size="md">→</Button>
```

### Card
```tsx
import { Card } from '@/components/ui/Card';

<Card monoIndex="01" monoLabel="ARCH // LUDOLOGY">
  <h3>Card Title</h3>
  <p>Description text</p>
</Card>
```

### SectionHeading & Eyebrow
```tsx
import { SectionHeading } from '@/components/ui/SectionHeading';

<SectionHeading
  eyebrow="SYSTEM // SPECIFICATION"
  headingPrefix="Precision Engineering for "
  headingAccent="Modern Gaming"
  headingSuffix=" Culture"
  locale="fa"
/>
```

### SignalDivider
```tsx
import { SignalDivider } from '@/components/ui/SignalDivider';

<SignalDivider />
```

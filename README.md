# K. Vignesh & M. Kumutha — Digital Tamil Wedding Invitation

A mobile-only, modern-traditional Tamil digital wedding invitation built with **Next.js (App Router)**, **Tailwind CSS**, and inline SVG Tamil motifs.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000` on your phone (or use Chrome DevTools mobile device emulation).  
Note: Desktop/laptop browsers are intentionally blocked and shown a QR code prompt to open the invitation on a mobile phone.

### Production Build

```bash
npm run build
npm start
```

## Editing Wedding Content

All text, Tamil/English dates, Tamil panchangam day fields, venue details, Google Maps links, WhatsApp RSVP phone number, and optional sections are stored in a single file:

- `src/config/wedding.ts`

### Key fields to customize before sharing:
1. **`rsvp.whatsappNumber`**: Replace `"919876543210"` with the host family's WhatsApp number in international format (no `+` or spaces).
2. **`hero.tamilDay` & `events[].tamilDay`**: Leave empty (`""`) or enter the exact கார்த்திகை மாதம் day number from your panchangam.
3. **`optional`**: Add parent profiles/photos, gallery photos, or a story video in `weddingConfig.optional` whenever ready (hidden automatically when empty).
4. **Guest personalization**: Share personalized links using `?to=GuestName` (e.g., `https://your-domain.com/?to=Karthik`).

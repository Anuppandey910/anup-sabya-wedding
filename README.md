# Anup & Sabya — Premium Indian Wedding Invitation

A responsive React + TypeScript wedding invitation with a cinematic mandap hero, physical invitation intro, traditional scroll, couple profile, editable events, interactive pull seal, live countdown, petals, parallax and RSVP.

## Run locally
1. Install Node.js 20 LTS or later.
2. In this folder run: `npm install`
3. Run: `npm run dev`
4. Open the local URL shown by Vite.

## Production build
Run `npm run build`, then preview with `npm run preview`. The deployable output is created in `dist/`.

## Deploy (free or low cost)
- **Vercel:** Import the Git repository, framework preset Vite, build command `npm run build`, output directory `dist`.
- **Netlify:** Import the repository, build command `npm run build`, publish directory `dist`.
- **GitHub Pages:** Build with Vite and deploy `dist`; set Vite `base` if publishing under a repository subpath.

## RSVP data integration
The included RSVP works immediately and stores each response in the guest browser's `localStorage`. This is useful for demonstration, but it does not collect responses centrally.

For production, use Formspree:
1. Create a form at https://formspree.io and copy its endpoint.
2. In `src/App.tsx`, replace the `submit` handler in `RSVP` with a POST to that endpoint, or set `<form action="YOUR_FORMSPREE_ENDPOINT" method="POST">` and remove the React submit handler.
3. Keep the existing field names: `name`, `guests`, `attendance`, and `message`.

Alternatives: Netlify Forms (when hosted on Netlify) or Supabase (for a custom dashboard and exports).

## Customize event details
In `src/App.tsx`, edit the `events` array and the placeholder date, time, venue, address, and map link inside the `Events` component. No dates or venues were invented.

## Wedding countdown
The countdown target is `2027-01-29T10:00:00+05:30` (India Standard Time). Change the time once the ceremony time is confirmed.

## Test checklist
- Desktop and mobile section flow
- Touch and mouse pull-down seal
- Countdown updates every second
- RSVP validation and success state
- Responsive couple and event grids
- Reduced-motion accessibility behavior

Visual in this website was generated with Microsoft Copilot.

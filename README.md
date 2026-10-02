# ETC website

Website of ETC, ENSIA Tech Community, the first scientific club of ENSIA (National School of Artificial Intelligence, Algiers). Live at https://etc-club.vercel.app.

## Stack

- Next.js 15 (App Router), React 18, TypeScript
- Tailwind CSS 3
- Supabase: registrations and Discord OAuth only
- Listmonk: FOSS Flash newsletter, called from `src/app/api/tx`

## Getting started

```bash
cp .env.example .env.local   # fill in Supabase and Listmonk values
npm install
npm run dev
```

The package manager is npm (`package-lock.json`). Do not add a second lockfile.

## Editing content

All site content lives in `src/data/`, one file per topic. Edit the file, commit, and Vercel redeploys.

| File | What it holds |
|---|---|
| `club.ts` | Name, contact links, hero numbers, nav, registration switch (`REGISTRATION.open`) |
| `events.ts` | Jellyfish events (`SEASON_EVENTS`) and "Beyond the season" (`OTHER_EVENTS`) |
| `projects.ts` | Project cards, Tech Days list, featured ETCast episode |
| `cells.ts` | The cells and which ones applicants can rank (`apply`) |
| `crew.ts` | President, the three key people, managers. Portraits go in `public/crew/` |
| `partners.ts` | "They trusted us" logos. Files go in `public/companies/` (transparent background) |
| `feed.ts` | Instagram highlight grid |

## Structure

```
src/app            routes: / (home), /events/etcode, /registrations, /auth/callback, /api/tx
src/data           all site content (see above)
src/components     ui (icons, mascot), sections (home), interactive (client widgets), register
src/lib            crew helper, Supabase clients, generated database types
public             logos, icons, fonts (Azonix), photos, crew portraits
```

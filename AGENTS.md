# Solarfig Project Notes for Agents

## Media Source of Truth
- Master pack: `/Users/tommybutcher/Downloads/Solarfig Media Resources`
- This pack contains the approved site media (116 files total).
- Do not reference Downloads paths in code. Copy selected files into this repo under `public/assets/...`.

## Quick Asset Map
- `Logo Files/All Files/`: logo variants (`.svg/.png/.jpg/.ai`) + favicon files. Prefer `.svg` for UI logos.
- `Install Gallery/`: real installation photos for gallery/project sections.
- Root diagrams and section graphics: net metering, battery backup, equipment, service/reviews/referrals visuals.
- Root lifestyle/product images: roof, Powerwall, installer visuals for hero/supporting sections.
- `PS Source/`: editable Photoshop sources (`.psd`) to export new web-ready assets.
- `Office Mockups/` + `Solarfig Sales Presentation (2026).pdf`: collateral/reference assets, not default website content.

## Usage Rules
1. Copy needed media into `public/assets/<section>/` and rename to kebab-case.
2. Optimize before commit (photos to WebP/JPG when possible; PNG for transparency/text-heavy graphics).
3. Reference assets with web paths like `/assets/install-gallery/install-01.jpg`.
4. Keep descriptive alt text.
5. Never edit or move the master files in Downloads.

## Already Imported in Repo
- `public/assets/solarfig logo.svg`
- `public/assets/install-gallery/*`
- `public/assets/Solar installers at sunset.png`

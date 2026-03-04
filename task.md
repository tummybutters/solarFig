# Solarfig Task Tracker

Date: 2026-03-04
Scope: Client ideation PDF implementation + typography/readability consistency audit.

## Completed In This Pass
- [x] Home hero trust bar added with 5 trust items and purple check markers (`src/sections/HeroGlacial.tsx` line 198).
- [x] Home editorial updates: `Products` section label, `Advanced Inverters` naming, map heading/copy tweaks, review sources changed to `Google · Trustpilot · Yelp`, reviews expanded to 6 cards, bottom cards reordered + normalized style (`src/sections/HomeEditorial.tsx`).
- [x] Navbar IA/copy pass: `Plans & Services`, `Inverters`, `Energy Storage`, removed `Explore {Category}` labels, removed Projects from Explore, mobile quick action now Contact (`src/components/Navbar.tsx`).
- [x] Footer pass: `Solarfig` branding, text-logo image in footer, removed Projects link, Contact Us now routes to `/contact` (`src/sections/Footer.tsx`).
- [x] `/contact` route enabled and `/projects` + `/transactions` redirected home (`src/App.tsx`).
- [x] Global quote form updated to `Start your solar plan`, added transactional + marketing consent checkboxes and payload flags (`src/sections/GlobalQuoteSection.tsx`).
- [x] Trusted partners strip spacing/size normalized (`src/components/LogoScroll.tsx`).
- [x] Pricing page content pass aligned closer to client copy structure (`src/pages/PricingCosts.tsx`).
- [x] Installation page copy/step structure aligned to client process framing (`src/pages/Installation.tsx`).
- [x] Home page image replacements completed from `Downloads/Website Images/2. Home Page`:
  - under-hero product cards updated for `Solar Panels` + `Advanced Inverters`,
  - wide image above bottom CTA cards (`Products, Plans & Services, Process`) replaced and optimized to WebP.
- [x] Solar Panels page image replacements completed from `Downloads/Website Images/3. Solar Panels` (MP4 intentionally excluded):
  - `Header Image`,
  - `Premium Efficiency`,
  - `All-Climate Performance`,
  - `25-Year Warranty Protection`,
  - `Designed for What's Next`.
- [x] Installation page image replacement completed from `Downloads/Website Images/8. Installation Process`:
  - `Header Image` mapped to hero image,
  - MP4 intentionally excluded (no active video slot on page).
- [x] Educational Articles image replacement completed from `Downloads/Website Images/12. Educational Articles`:
  - all 7 article card/detail images mapped by title,
  - MP4 intentionally excluded (no active video slot on articles pages).
- [x] Navbar popout featured images replaced from `Downloads/Website Images/1. Nav Bar`:
  - Products, Plans & Services, Locations, and Explore all mapped in provided order,
  - file naming normalized without numeric prefixes (per folder note intent).
- [x] Non-home H1 typography normalization pass completed:
  - sentence-case text updates for static H1s,
  - explicit `font-medium` on all routed non-home H1s,
  - improved hero readability with consistent `leading-[1.02]` and shadow treatment on image/dark hero sections.
- [x] Legacy/non-routed page H1 normalization pass completed for future-proof consistency:
  - `src/pages/Careers.tsx`
  - `src/pages/ProjectsShowcase.tsx`
  - `src/pages/WholeHomeSolar.tsx`
  - `src/pages/SmartElectricalPanels.tsx`
  - `src/pages/Services.tsx`

## High Priority Pending (Content/Design Decisions Needed)
- [ ] Replace hero videos with final approved clips (remove tropical/CA-only feel) and verify seamless transitions visually.
- [ ] Final client-approved partner logos (exact files + ordering).
- [ ] Confirm if Project Portfolio should be permanently deleted (file removal) vs hidden via redirect.
- [ ] Confirm if home bottom CTA section should be 3 cards or 4 cards (client asked for "another box").
- [ ] Confirm final image assets for Solar Panels/Inverters/Battery/EV sections where client said "will send better photos".

## Typography + Readability Audit (All Routed Pages)

### Target Rules To Enforce
- H1 casing standard: sentence case (capitalize first word and proper nouns only).
- H1 readability standard: explicit font weight (`font-medium` minimum on hero/image pages).
- H1 legibility standard on image heroes: shadow or stronger overlay for white text.
- Heading punctuation/casing should be consistent across primary pages.

### Findings (Pre-fix Baseline)

1) H1 casing is inconsistent across routed pages.
- Title case examples:
  - `Smarter Solar Starts With Solarfig.` (`src/sections/HeroGlacial.tsx:177`)
  - `Battery Backup` (`src/pages/Battery.tsx:77`)
  - `Solar Pricing & Costs` (`src/pages/PricingCosts.tsx:47`)
  - `California Service Areas` (`src/pages/Locations.tsx:35`)
- Sentence case examples:
  - `Smarter energy begins with home EV chargers` (`src/pages/EVChargers.tsx:73`)
  - `Share solar, get rewarded` (`src/pages/Referrals.tsx:28`)
  - `Get in touch` (`src/pages/Contact.tsx:51`)

2) Most non-home H1s do not declare explicit weight class.
- This can make curved characters (like "s") feel soft/thin on high-res displays.
- Affected examples:
  - `src/pages/SolarPanels.tsx:75`
  - `src/pages/Battery.tsx:77`
  - `src/pages/PricingCosts.tsx:47`
  - `src/pages/About.tsx:30`
  - `src/pages/Locations.tsx:35`
  - `src/pages/OregonLocations.tsx:35`

3) White H1 text over photography is not uniformly protected.
- Some pages use strong overlays but no text shadow, which can reduce glyph clarity in bright image areas.
- Affected hero pages:
  - `src/pages/SolarPanels.tsx:64-75`
  - `src/pages/Battery.tsx:66-77`
  - `src/pages/EVChargers.tsx:62-74`
  - `src/pages/About.tsx:19-30`
  - `src/pages/Locations.tsx:24-35`
  - `src/pages/OregonLocations.tsx:24-35`

4) Tight H1 line-height (`leading-[0.95]`) appears repeatedly and may reduce readability on long H1s.
- Affected:
  - `src/pages/About.tsx:30`
  - `src/pages/Battery.tsx:77`
  - `src/pages/EVChargers.tsx:73`
  - `src/pages/PricingCosts.tsx:47`
  - `src/pages/SolarPanels.tsx:75`

5) H1 style system is fragmented (different sizing/weight/tracking logic by page).
- Example contrast:
  - Home H1 has `font-medium` and drop-shadow (`src/sections/HeroGlacial.tsx:177`)
  - Most other hero H1s lack explicit font-weight and shadow.

## Typography Normalization Result
- [x] Applied sentence case to static routed non-home H1s where appropriate.
- [x] Added `font-medium` to routed non-home H1s for stronger glyph readability.
- [x] Added/normalized text shadow for routed non-home hero H1s on image/dark backgrounds.
- [x] Relaxed tight hero H1 line-height to `1.02` across routed non-home hero pages.
- [ ] Remaining intentional exception: `ArticleDetail` H1 uses dynamic article titles and preserves source casing.

## Page-by-Page H1 Fix Checklist
- [x] `/solar-panels` (`src/pages/SolarPanels.tsx:75`)
- [x] `/microinverters` (`src/pages/Microinverters.tsx:76`)
- [x] `/battery` (`src/pages/Battery.tsx:77`)
- [x] `/ev-chargers` (`src/pages/EVChargers.tsx:73`)
- [x] `/pricing-costs` (`src/pages/PricingCosts.tsx:47`)
- [x] `/installation` (`src/pages/Installation.tsx:48`)
- [x] `/about` (`src/pages/About.tsx:30`)
- [x] `/locations` (`src/pages/Locations.tsx:35`)
- [x] `/locations/oregon` (`src/pages/OregonLocations.tsx:35`)
- [x] `/articles` (`src/pages/Articles.tsx:20`)
- [x] `/referrals` (`src/pages/Referrals.tsx:28`)
- [x] `/contact` (`src/pages/Contact.tsx:51`)

## Legacy Page H1 Fix Checklist (Currently Not Active Routes)
- [x] `src/pages/Careers.tsx:29`
- [x] `src/pages/ProjectsShowcase.tsx:340`
- [x] `src/pages/WholeHomeSolar.tsx:50`
- [x] `src/pages/SmartElectricalPanels.tsx:49`
- [x] `src/pages/Services.tsx:55`

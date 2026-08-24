# ARCANIUM — Engineering & Visual Craft Invariants

## 1. Minimalist UI & Warm Obsidian Design Tokens (`/minimalist-ui`)
- **Color Surface Hierarchy**:
  - Background/Canvas: `#0c0a09` (Warm Obsidian Charcoal).
  - Primary Container Panels: `#141210` with subtle 1px border `#292524`.
  - Elevated Bento Cards & Tiles: `#1c1917` with hover accent borders `#78716c`.
  - High-Contrast Text: `#f5f5f4` for headings/prompts, `#a8a29e` for body prose, `#78716c` for monospace metadata.
- **Elemental Spot Pastels**: Use calibrated, muted spot accents instead of loud neon glows:
  - Fire: Rose `#fca5a5` / Amber `#fde047`
  - Water: Blue `#93c5fd` / Cyan `#67e8f9`
  - Air: Emerald `#86efac` / Mint `#a7f3d0`
  - Earth: Amber `#fcd34d` / Warm Stone `#d6d3d1`
  - Spirit / Aether: Violet `#d8b4fe` / Purple `#c084fc`
- **Negative Design Constraints**:
  - Eliminate multi-colored rainbow gradients, noisy saturated backdrops, and heavy blurred drop shadows.
  - Ban emoji bullet soup in section headers; use typographic glyphs (`✦`) and monospace badges.
  - Wrap keyboard shortcut hints in physical `<kbd>` micro-UI badges (`font-mono text-[10px] bg-[#1c1917] border border-[#292524] px-1.5 py-0.5 rounded`).

## 2. High-End Animated SVG Standards
- Store standalone vector animations in `public/animations/`.
- Use self-contained `<style>` tags with hardware-accelerated CSS `@keyframes` (animate only `transform` and `opacity`).
- Explicitly declare `transform-origin` around geometric coordinate centers for planetary orbits, astrolabe dials, and oculus pupils.
- Avoid cliché or misplaced religious iconography (e.g., crucifixes on sacred hearts); favor celestial orbits, crystal twin-flames, 24K gold light sweeps, and sacred geometry astrolabes.

## 3. Double-Bezel Hardware Architecture (Doppelrand) & Nested CTAs
- Wrap major interactive cards, tiles, and status containers in concentric double-bezel enclosures:
  - Outer machined shell (`.craft-bezel-outer`) with refined hairline borders and diffused ambient shadows.
  - Inner content core (`.craft-bezel-inner`) with top specular light highlight (`inset 0 1px 0 rgba(255,255,255,0.08)`).
- Enclose trailing CTA icons in dedicated circular micro-button shells with kinetic hover physics.

## 4. Mobile Spatial Clearance & Fan Bounds
- Never hardcode desktop card fan dimensions or step counts on mobile screens.
- Use dynamic viewport width listeners with minimum `>50px` horizontal clearance margins and container `overflow-visible`.

## 5. Astrological Synastry & Partner Attunement
- For interpersonal/love readings, gatekeep spread draw until counterpart profile (Zodiac sign or DOB) is attuned.
- Compute elemental chemistry, compatibility %, and composite numerological soul keys across all hermeneutic analytical lenses.

## 6. Authentic A.E. Waite 1910 & Esoteric Correspondences
- Ground card interpretations in authentic Arthur Edward Waite *The Pictorial Key to the Tarot* (1910) commentaries, Hebrew letter attributions, 22 Kabbalistic Tree of Life paths, Golden Dawn titles, and Astrological Decanates.

## 7. Dedicated Spread Syntheses & Dual Quintessence
- Provide dedicated structural syntheses for major spread formats (Celtic Cross 10-Card, 7-Chakra Kundalini Axis, 2-Path Decision Fork, Relationship Mirror).
- Always compute both Primary Master Quintessence and complementary Shadow Quintessence (`(22 - Primary) % 22`).


# ARCANIUM — Engineering & Visual Craft Invariants

## 1. High-End Animated SVG Standards
- Store standalone vector animations in `public/animations/`.
- Use self-contained `<style>` tags with hardware-accelerated CSS `@keyframes` (animate only `transform` and `opacity`).
- Explicitly declare `transform-origin` around geometric coordinate centers for planetary orbits, astrolabe dials, and oculus pupils.
- Avoid cliché or misplaced religious iconography (e.g., crucifixes on sacred hearts); favor celestial orbits, crystal twin-flames, 24K gold light sweeps, and sacred geometry astrolabes.

## 2. Double-Bezel Hardware Architecture (Doppelrand) & Nested CTAs
- Wrap major interactive cards, tiles, and status containers in concentric double-bezel enclosures:
  - Outer machined shell (`.craft-bezel-outer`) with gold border hairlines and diffused ambient shadows.
  - Inner content core (`.craft-bezel-inner`) with top specular light highlight (`inset 0 1px 0 rgba(255,255,255,0.12)`).
- Enclose trailing CTA icons in dedicated circular micro-button shells (`rounded-full bg-white/[0.05] border border-white/[0.08]`) with kinetic hover physics.

## 3. Mobile Spatial Clearance & Fan Bounds
- Never hardcode desktop card fan dimensions or step counts on mobile screens.
- Use dynamic viewport width listeners with minimum `>50px` horizontal clearance margins and container `overflow-visible`.

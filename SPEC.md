# FlagMap — Spec

Learn where every country is and recognise its flag, starting from zero.

## The problem with existing apps

- They test before they teach: "tap Slovenia" when you've never been shown Slovenia.
- They treat flags as 195 unrelated pictures. Many flags actually come in **families** that share an origin (Nordic crosses, Pan-Arab colours, Pan-African colours…). Learn the family once and a dozen flags make sense.
- Map and flag are learned separately, so nothing links "this shape, here" with "this flag".

## Core idea

**Teach first, then quiz, in small regional chunks.** The flag always shows up *on the map, in its place*, so where a country is and what its flag looks like get learned together.

Three rules drive the whole app:

1. **Never quiz something you haven't been shown.**
2. **Start easy and narrow.** Pick between 2 options inside a small region before you tap on a whole continent.
3. **Group by pattern.** Neighbours and flag families get learned together, and lookalikes get compared side by side.

---

## 1. Content structure

### Regions → Chunks
The world is split into regions, and each region into **chunks of 4–8 neighbouring countries**. A chunk is the unit you learn.

Example, Europe:
| Chunk | Countries |
|---|---|
| Nordic | Denmark, Sweden, Norway, Finland, Iceland |
| British Isles & Benelux | UK, Ireland, Netherlands, Belgium, Luxembourg |
| Western | France, Spain, Portugal, Andorra, Monaco |
| Central | Germany, Poland, Czechia, Austria, Switzerland, Liechtenstein |
| Baltics & East | Estonia, Latvia, Lithuania, Belarus, Ukraine, Moldova |
| Balkans 1 | Slovenia, Croatia, Bosnia, Serbia, Montenegro |
| Balkans 2 | Albania, N. Macedonia, Greece, Bulgaria, Romania, Kosovo |
| Italy & Med | Italy, Malta, San Marino, Vatican, Cyprus, Hungary, Slovakia |

The other regions follow the same pattern: Africa (North / West / Central / East / Southern), Middle East, Asia (Central / South / East / Southeast), the Americas (North / Central / Caribbean / South), Oceania.

### Flag families
Each country is tagged with zero or more families. Each family has a short origin story (1–2 sentences) and a "how to tell them apart" tip.

| Family | Members (examples) | Origin hook |
|---|---|---|
| Nordic cross | Denmark, Sweden, Norway, Finland, Iceland | All copy Denmark's Dannebrog, the oldest national flag still in use |
| Pan-Slavic | Russia, Serbia, Slovakia, Slovenia, Croatia, Czechia | White-blue-red, taken from Russia's flag |
| Pan-Arab | Egypt, Iraq, Syria, Yemen, Jordan, Palestine, UAE, Kuwait, Sudan | Red-white-black-green from the 1916 Arab Revolt |
| Pan-African (Ethiopian) | Ghana, Senegal, Mali, Guinea, Cameroon, Benin, Togo, Burkina Faso | Green-yellow-red of Ethiopia, which was never colonised |
| Pan-African (Garvey) | Kenya, Malawi, South Sudan | Red-black-green, Marcus Garvey's flag |
| Gran Colombia | Colombia, Ecuador, Venezuela | Yellow-blue-red, all three were once one country |
| Central American | Guatemala, Honduras, El Salvador, Nicaragua, Costa Rica | Blue-white-blue of the old Federal Republic of Central America |
| Union Jack canton | Australia, New Zealand, Fiji, Tuvalu | Former British colonies |
| Southern Cross | Australia, New Zealand, Samoa, Papua New Guinea, Brazil | The star pattern seen in the southern sky |
| Crescent & star | Turkey, Tunisia, Algeria, Pakistan, Azerbaijan, Malaysia, Mauritania | Islamic / Ottoman symbol |
| Tricolour (French-style) | France, Italy, Ireland, Belgium, Romania, Mexico | Inspired by the French Revolution |

### Lookalike pairs ("twins")
Flags that are easy to mix up get explicit comparison cards:
Chad / Romania · Indonesia / Monaco (/ Poland, upside down) · Ireland / Côte d'Ivoire · Netherlands / Luxembourg · Australia / New Zealand · Senegal / Mali · Slovenia / Slovakia · Colombia / Ecuador / Venezuela · Norway / Iceland · Egypt / Iraq / Syria / Yemen · Haiti / Liechtenstein

Each twin card: both flags side by side, with the difference called out ("NZ has red stars, Australia has white ones plus a big 7-point star").

### Per-country data
`iso2, name, region, chunk, families[], twins[], hook` — `hook` is a one-line memory tip ("Italy's the boot, the flag is pizza: basil, mozzarella, tomato").

---

## 2. Learning flow (per chunk)

### Step 1 — Explore (teach)
- Map zooms into the chunk's area; neighbouring countries you already know show faded for context.
- Each country is introduced one at a time: it highlights, its **flag fades in on top of the country shape**, and the name + hook show underneath.
- If it belongs to a family you haven't seen yet, a family card pops up: "Meet the Nordic Cross: 5 flags, 1 idea."
- After the intro, **free-explore**: tap any country to see its flag and name. Nothing is scored.

### Step 2 — Practice (guided quiz)
Questions get harder per country, one rung at a time. You only move up a rung after answering right on the one below it.

| Rung | Question | Answer from |
|---|---|---|
| 1 | Flag shown → which country? | 2 names |
| 2 | Country highlighted on map → which flag? | 3 flags |
| 3 | Name shown → tap it on the map | chunk only, other countries greyed out |
| 4 | Flag shown → tap it on the map | chunk only |
| 5 | Twin challenge: tell lookalikes apart | twin flags |
| 6 | Flag or name → tap it | the whole region, no hints |

Wrong-answer behaviour (the most important part):
- Never just show a red X. Show **what you picked next to what was right**: both flags, both locations highlighted, and the twin tip if one exists.
- The missed country comes back again 2–3 questions later in the same session.

### Step 3 — Master
A chunk is "mastered" when every country in it has passed rung 4. The map then **paints that country with its flag**. Over time your world map literally fills in with flags. That's the main reward and progress view.

### Review (spaced repetition)
- Each country keeps two scores: **location** and **flag**.
- Simple Leitner boxes (1 → 2 → 4 → 7 → 14 → 30 days). A right answer moves it up a box, a wrong one drops it back to box 1.
- The home screen shows **"Daily review: 12 countries · ~3 min"**. Due countries come from every chunk you've learned, mixed together, using rungs 4–6.

---

## 3. Game modes (unlock once you've learned content)

- **Family Sort**: flags drop in and you swipe them into their family bucket. Teaches the patterns directly.
- **Twin Duel**: fast-fire "which one is it?" with lookalike pairs only.
- **Neighbours**: a country is shown, tap all the countries that border it.
- **Speed Run**: name/flag → tap, 60 seconds, within your learned regions. Personal best only.

Every mode only uses countries you've already learned (rule 1).

---

## 4. Screens

1. **Home**: world map coloured by progress (flag-painted = mastered, tinted = in progress, grey = not started). "Daily review" button, current streak, "Continue: Balkans 1".
2. **Region picker**: continents, then chunks, each with a star rating (0–3).
3. **Chunk lesson**: Explore → Practice → result screen (stars, newly mastered countries).
4. **Families gallery**: every family with its members and origin story. Tap a flag to jump to it on the map.
5. **Country card**: big flag, map location, families, twins, hook.
6. **Games**: the 4 modes above.

---

## 5. Map & interaction details

- Pan and pinch-zoom; quizzes auto-zoom to the area being tested.
- **Small countries** (Vatican, Monaco, Caribbean and Pacific islands) get a tappable circle marker so they can be hit with a finger. A tap counts if it lands inside the shape or within N px of the marker.
- Generous hit tolerance in early rungs, exact in rung 6.
- Colour-blind check: never rely on red/green alone for feedback; use icons as well.

---

## 6. Session design (keep it fun, keep it short)

- One lesson is about **3–5 minutes**.
- Streak counter (days with at least one review or lesson).
- Light sound and haptics on right/wrong answers, which can be turned off.
- No lives, no timers in learning mode. Timers only in Speed Run.

---

## 7. Tech (v1)

- **Web app (PWA)**: runs in the phone browser, can be installed to the home screen, works offline. No app store, no backend.
- Map: `world-atlas` TopoJSON + `d3-geo` for rendering and hit-testing.
- Flags: `flag-icons` SVGs (bundled, so they work offline).
- Data: one `countries.json` (fields from §1) + `families.json`.
- Progress: `localStorage` (Leitner box + rung per country, streak, stars).
- No accounts, no sync, no server.

---

## 8. Milestones

1. **M1 — Europe end to end**: map, Explore, Practice rungs 1–6, families + twins for Europe, mastery painting, localStorage. *Goal: actually learn Europe with it.*
2. **M2 — Daily review**: Leitner scheduling + home screen.
3. **M3 — Whole world**: all regions, chunks, families, twins, hooks.
4. **M4 — Games**: Family Sort, Twin Duel, Neighbours, Speed Run.
5. **M5 — Polish**: PWA install/offline, sounds, streaks, colour-blind pass.

## Out of scope (v1)
Capitals, accounts/sync, leaderboards/multiplayer, territories (Greenland, Puerto Rico…), native app-store builds.

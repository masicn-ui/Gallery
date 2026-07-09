Create a new showcase screen for the component or block named $ARGUMENTS.

## Existing showcase screens:
!`find src/app/screens -name "*Screen.tsx" 2>/dev/null | grep -v node_modules | head -20`

## Component/block source (installed via `masicn add`, flat file — no per-item subdirectory):
!`find src/shared/components src/shared/blocks -iname "$ARGUMENTS*" 2>/dev/null`

## Registry metadata (props, examples, category):
!`find /Users/varun/Dev/masicn-ui/registry/components/$ARGUMENTS /Users/varun/Dev/masicn-ui/registry/blocks/$ARGUMENTS -type f 2>/dev/null`

If the component/block isn't installed yet, run `npx masicn add $ARGUMENTS` first.

Create the screen at `src/app/screens/components/<Name>Screen.tsx` — components, blocks, and layouts all share this one directory (there is no separate `screens/blocks/` or `screens/layouts/` split for new items; the existing `screens/layouts/` directory only holds the three legacy layout screens ported from Playground). The screen should:

1. Show **every variant** the component supports (size, variant, state props) using `VariantRow` from `src/app/shared/VariantRow`
2. Show a **realistic composition** — how this component looks in a real app screen, not just isolated variant rows
3. Use `ShowcaseSection` (`src/app/shared/ShowcaseSection`) to structure each section, and `ScreenLayout` (`src/app/shared/ScreenLayout`) as the screen wrapper
4. Import the component directly from its flat file, e.g. `import { Button } from '../../../shared/components/Button'` or `import { CodeInput } from '../../../shared/blocks/CodeInput'` — never via the `shared/components` or `shared/blocks` barrel
5. Use tokens/theme from `../../masicn` for any custom spacing or colors — never magic numbers or raw hex

After creating the file, register it in two places:
- `src/app/navigation/AppNavigator.tsx` — add the import and a `<PascalName>: <PascalName>Screen` entry to `SCREEN_MAP`
- `src/app/screens/HomeScreen.tsx` — add `'<PascalName>'` to the matching category section's `data` array in `ALL_SECTIONS` (Display, Feedback, Actions, Forms, Navigation, Overlays, Blocks, or Layouts)

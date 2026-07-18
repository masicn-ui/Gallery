# CLAUDE.md — Gallery

## What This Is

`Gallery` (`com.masicn.gallery`) is the **public showcase app** for the masicn ecosystem. It exists to demonstrate every registry component in realistic, composed contexts — real-looking screens, not isolated demos. Screenshots and recordings from Gallery are embedded in the docs site (`masicn.manishh.in`).

This is a React Native app. It is **never published** — it is an internal development tool.

## Role in the Monorepo

```
Playground  →  builds components, tests edge cases
Gallery     →  showcases components in real compositions, feeds docs visuals
```

Gallery does **not** author components. It consumes the design system and registry component source the same way an end user would: `@masicn/ui` is a **local copy** at `src/masicn/` (`masicn.json` → `localDesignSystem: true`, `designSystemDir: "src/masicn"`), not an npm dependency or workspace symlink, and every component/block was written to `src/shared/{components,blocks}/` via `npx masicn add <name>` — flat files (`src/shared/components/Button.tsx`), not the per-item subdirectory layout Playground uses for authoring.

## Commands

```bash
npm start              # Start Metro dev server
npm run android        # Build & run on Android
npm run ios            # Build & run on iOS (run `pod install` in ios/ first)
npm run lint           # ESLint
npm test               # Jest
```

## Structure

```
App.tsx                          # Providers + NavigationContainer + AppNavigator
src/masicn/                      # Local @masicn/ui copy (written by `masicn init`)
src/shared/components/           # Flat component files (written by `masicn add`)
src/shared/blocks/                # Flat block/layout files (written by `masicn add`)
src/app/navigation/AppNavigator.tsx  # SCREEN_MAP + Stack.Navigator
src/app/screens/HomeScreen.tsx   # Sectioned list of all 73 registry items
src/app/screens/components/      # One showcase screen per component/block
src/app/screens/layouts/         # Showcase screens for the 3 layout-category blocks
src/app/shared/                  # ScreenLayout, ShowcaseSection, VariantRow, ComponentListItem
```

## What Goes Here

- **Showcase screens** — one per registry component/block, showing all variants in a realistic composition
- **Example UIs** — full-screen flows (e.g. a "verify your phone number" screen using `Phone` + `CodeInput` + `Button`)
- **Composition examples** — card lists, form layouts, navigation patterns using multiple components together

## What Does NOT Go Here

- New component authoring (that belongs in `Playground/src/shared/`)
- Design system primitives (those live in `masicn/src/`)
- Registry templates (those live in `registry/`)

## Key Dependencies

- `@masicn/ui` — local copy at `src/masicn/`, not linked/symlinked
- `@react-navigation/native` + `@react-navigation/native-stack` — screen navigation
- `react-native-reanimated` — for all animated components
- `react-native-gesture-handler` — for gesture-driven components
- `react-native-safe-area-context` — for layout

## Source of Truth

The monorepo-wide architecture doc is in `Playground/CLAUDE.md`. Read that for the full sync flow, component guidelines, and design patterns.

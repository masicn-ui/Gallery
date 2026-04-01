# CLAUDE.md — Gallery

## What This Is

`Gallery` (`com.masicn.gallery`) is the **public showcase app** for the masicn ecosystem. It exists to demonstrate every registry component in realistic, composed contexts — real-looking screens, not isolated demos. Screenshots and recordings from Gallery are embedded in the docs site (`masicn.dev`).

This is a React Native app. It is **never published** — it is an internal development tool.

## Role in the Monorepo

```
Playground  →  builds components, tests edge cases
Gallery     →  showcases components in real compositions, feeds docs visuals
```

Gallery does **not** author components. It consumes them from `@masicn/ui` (design system) and copies/imports registry component source for display purposes.

## Commands

```bash
npm start              # Start Metro dev server
npm run android        # Build & run on Android
npm run ios            # Build & run on iOS
npm run lint           # ESLint
npm test               # Jest
```

## What Goes Here

- **Showcase screens** — one per registry component, showing all variants in a realistic composition
- **Example UIs** — full-screen flows (e.g. a login screen using PhoneInput + OTPInput + Button)
- **Composition examples** — card lists, form layouts, navigation patterns using multiple components together

## What Does NOT Go Here

- New component authoring (that belongs in `Playground/src/shared/`)
- Design system primitives (those live in `masicn/src/`)
- Registry templates (those live in `registry/`)

## Key Dependencies

- `@masicn/ui` — linked locally (symlink / workspace)
- `react-native-reanimated` — for all animated components
- `react-native-gesture-handler` — for gesture-driven components
- `react-native-safe-area-context` — for layout

## Source of Truth

The monorepo-wide architecture doc is in `Playground/CLAUDE.md`. Read that for the full sync flow, component guidelines, and design patterns.

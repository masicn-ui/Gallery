# masicn/ui Gallery

The public showcase app for [masicn/ui](https://github.com/masicn-ui) — the copy-paste React Native UI ecosystem.

Gallery demonstrates all 73 registry items (54 components + 19 blocks/layouts) in realistic, composed contexts — not isolated demos. Screenshots and recordings captured here are intended for the [docs site](../docs/) and the org's marketing surfaces. Gallery is **never published** — it's an internal development/showcase tool, not an npm package.

**Built from scratch by [Manish Kumar](https://manishh.in) ([@lordofthemind](https://github.com/lordofthemind))**

## Role in the Monorepo

```
Playground  →  builds components, tests edge cases (source of truth for component code)
Gallery     →  showcases components in real compositions, feeds docs visuals
```

Gallery does **not** author components on its own — nearly every component/block source file here
was installed via the `masicn` CLI (`npx masicn add <name>`) from the [registry](../registry/), the
same way an end user would — Gallery deliberately dogfoods the real install path rather than
symlinking Playground's source directly.

**Exception:** under the [contributing model](https://masicn.manishh.in/docs/contributing),
external contributors proposing a brand-new component may build it directly inside
`src/shared/components/<name>/` here, following Playground's authoring conventions (tokens,
accessibility, tests, a demo screen), as both the reference implementation and its own showcase.
Until such a PR is merged into `registry/`, that one component is a deliberate, clearly-scoped
exception to "everything here came from a real install" — it's a new addition under review, not
yet an installed package.

## Consuming the Design System

Gallery's `masicn.json` sets `localDesignSystem: true` — the design system (`@masicn/ui`) is a **local copy** at `src/masicn/`, written by `npx masicn init`, not an npm dependency or a workspace symlink. `src/shared/components/` and `src/shared/blocks/` are similarly local copies written by `masicn add`, one flat file per item (no per-item subdirectory — that nested-folder convention is a Playground-only authoring pattern, not how the CLI installs into a real project).

## Getting Started

> **Node.js requirement**: `>= 22.11.0` (see `engines` in `package.json`)

```bash
npm start              # Start Metro dev server
npm run android        # Build & run on Android
npm run ios            # Build & run on iOS (run `pod install` in ios/ first)
npm run lint           # ESLint
npm test               # Jest
```

## Project Structure

```
Gallery/
├── App.tsx                          # Root: providers + NavigationContainer + AppNavigator
├── src/
│   ├── masicn/                      # Local copy of @masicn/ui (written by `masicn init`)
│   ├── shared/
│   │   ├── components/               # Flat component files, installed via `masicn add`
│   │   └── blocks/                   # Flat block/layout files, installed via `masicn add`
│   └── app/
│       ├── navigation/
│       │   ├── types.ts              # RootStackParamList
│       │   └── AppNavigator.tsx      # SCREEN_MAP + Stack.Navigator
│       ├── screens/
│       │   ├── HomeScreen.tsx        # Sectioned list of all 73 items
│       │   ├── ComingSoonScreen.tsx  # Fallback for any unregistered screen name
│       │   ├── components/           # One showcase screen per component/block
│       │   └── layouts/              # Showcase screens for the 3 layout-category blocks
│       └── shared/                   # ScreenLayout, ShowcaseSection, VariantRow, ComponentListItem
```

## Adding a New Showcase Screen

Use `/add-showcase <name>` (see `.claude/commands/add-showcase.md`), or manually:

1. `npx masicn add <name>` if not already installed
2. Create `src/app/screens/components/<Name>Screen.tsx` using `ScreenLayout` + `ShowcaseSection` + `VariantRow`
3. Register it in `src/app/navigation/AppNavigator.tsx` (`SCREEN_MAP`) and `src/app/screens/HomeScreen.tsx` (`ALL_SECTIONS`)

## Related Repos

| Repo | Package | Description |
|------|---------|-------------|
| [masicn-ui/masicn](https://github.com/masicn-ui/masicn) (public) | `@masicn/ui` | Core design system library |
| [masicn-ui/registry](https://github.com/masicn-ui/registry) (public) | `@masicn/registry` | Component registry / source of truth |
| [npmjs.com/package/masicn](https://www.npmjs.com/package/masicn) (private source, public npm package) | `masicn` (npm bin) | CLI tool — 17 commands |
| masicn-ui/Playground (private) | `com.masicn.playground` | Reference/testing app — where components are authored |
| [masicn-ui/docs](https://github.com/masicn-ui/docs) (public) | — | Documentation site |
| `../manishhXyz/` | `ink.manishh.xyz` | Example consumer app |

## Contributing

See [masicn.manishh.in/docs/contributing](https://masicn.manishh.in/docs/contributing) for the full
model — bug fixes and showcase improvements PR directly against this repo; brand-new components go
through an issue on [registry](https://github.com/masicn-ui/registry) first.

## License

[MIT](./LICENSE) — free to use, modify, and distribute. Copyright © 2026 [Manish Kumar](https://manishh.in).

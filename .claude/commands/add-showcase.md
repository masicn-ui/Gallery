Create a new showcase screen for the component named $ARGUMENTS.

## Existing showcase screens:
!`find src -name "*Showcase*" -o -name "*Screen*" 2>/dev/null | grep -v node_modules | head -20`

## Component source from Playground registry:
!`find /Users/varun/Dev/masicn-ui/registry/components/$ARGUMENTS -type f 2>/dev/null`

Create a showcase screen at `src/screens/$ARGUMENTS/$ARGUMENTS Showcase.tsx` (or match the existing naming pattern) that:

1. Shows **every variant** the component supports (size, variant, state props)
2. Shows a **realistic composition** — how this component looks in a real app screen
3. Uses `ShowcaseSection` wrapper if that pattern exists in this project
4. Uses tokens from `@masicn/ui` for any custom spacing or colors
5. Labels each section clearly so it's useful for docs screenshots

After creating the file, add it to the navigation if this project has a navigator.

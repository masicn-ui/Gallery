Review the current changes in the Gallery showcase screens.

## Git diff:
!`git diff HEAD --stat`

!`git diff HEAD -- src/`

Review the showcase changes above:

**1. Coverage** — does the showcase screen demonstrate all meaningful variants? (size sm/md/lg, disabled, loading, error states where applicable)

**2. Realistic compositions** — are the examples realistic usage (like they'd appear in a real app), or are they just `<Component />` in isolation?

**3. Token usage** — are any magic numbers or hardcoded colors used in the showcase? Everything should use tokens or props.

**4. Screen structure** — does the showcase use `ShowcaseSection` from the shared showcase layout?

**5. Missing variants** — based on the component's props API, which variants are not yet shown?

Be specific with file and line references. This is a visual review aid, not a strict linter.

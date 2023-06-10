# Validating SCI Source Code Methodology

We created SCI by hand to test our methodology.

## Link Component Example

### Static Analysis

**File Context**

```yaml
package: '@fluentui/react-link'
path: packages/react-components/react-link/src/components/Link/Link.tsx
imports:
  - from: react
    name: * as React
  - from: ./useLink
    name: useLink_unstable
  - from: ./useLinkStyles.styles
    name: useLinkStyles_unstable
  - from: ./renderLink
    name: renderLink_unstable
  - from: ./Link.types
    type: LinkProps
  - from: '@fluentui/react-utilities';
    type: ForwardRefComponent
exports:
    - name: Link
      type: ForwardRefComponent<LinkProps>
      description: A Link is a reference to data that a user can follow by clicking or tapping it.
definitions:
  - type: ForwardRefComponent<LinkProps>
    name: Link
dependants:
  - name: @fluentui/react-components
    path: packages/react-components/react-components
  - name: @fluentui/react-breadcrumb
    path: packages/react-components/react-breadcrumb
  - name: @fluentui/vr-tests-react-components
    path: apps/vr-tests-react-components
referenced_in:
  - rfcs/react-components/convergence/fixed-versions-for-prerelease.md
contributors:
git_history_summary:
  - commit: "871192b67e"
    message: "chore: enforce files naming to use .styles.ts [cxe-red files] (#27710)"
    name: "Oleksandr Fediashov"
    datetime: "Thu Apr 27 18:10:19 2023"
    changes: "+0200"
  - commit: "88fa8f2795"
    message: "(chore) Move react-input, react-label, react-link to react-components subfolder (#22694)"
    name: "Tristan Watanabe"
    datetime: "Fri Apr 29 08:36:01 2022"
    changes: "-0400"
changes_with: "TODO: a list of files that tend to change with this file"
changelog:
todo_tools: |
  Which tools are involved with this file? Example:
  typescript - because tsconfig includes this file's package name
  nx - because nx's workspace.json incldues this file's package name
todo_configs: |
  What configuration files are involved with this file? Examples:
  tsconfig.base.json - because this package name is included in the file, and its file is included in the tsconfig's include list or pattern when executing
```

**Package context**

In may be enough to include the package.json as the context:

```yaml
part_of: @fluentui/react-components
todo_name: '@fluentui/react-link'
todo_path: packages/react-components/react-link/package.json
scripts:
```

TODO

### Natural Language Analysis

**Why: Summary (1-2 sentences)**

**Why: Description (~200-300 words)**

**How: Summary of logic (functional description)**

**Meaningful contributors**

- Churn

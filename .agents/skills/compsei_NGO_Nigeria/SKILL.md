```markdown
# compsei_NGO_Nigeria Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `compsei_NGO_Nigeria` repository, a TypeScript-based Next.js application. You'll learn how to structure files, write imports and exports, follow commit message patterns, and understand the project's approach to testing. This guide also provides suggested commands for common workflows.

## Coding Conventions

### File Naming
- Use **camelCase** for file and folder names.
  - Example: `userProfile.ts`, `eventManager.tsx`

### Import Style
- Use **relative imports** for referencing modules within the project.
  - Example:
    ```typescript
    import { fetchData } from '../utils/apiHelper';
    ```

### Export Style
- Use **named exports** for all modules.
  - Example:
    ```typescript
    // In userProfile.ts
    export function getUserProfile(id: string) { ... }
    ```

    ```typescript
    // In another file
    import { getUserProfile } from './userProfile';
    ```

### Commit Messages
- **Freeform** style, sometimes with prefixes.
- Average length: ~48 characters.
  - Example: `fix: update event handler for registration form`

## Workflows

_No automated workflows detected in the repository._

## Testing Patterns

- **Test File Pattern:** Files are named with `*.test.*` (e.g., `userProfile.test.ts`).
- **Testing Framework:** Not explicitly specified.
- **Test Example:**
  ```typescript
  // userProfile.test.ts
  import { getUserProfile } from './userProfile';

  test('should fetch user profile by ID', () => {
    const profile = getUserProfile('123');
    expect(profile.id).toBe('123');
  });
  ```

## Commands

| Command      | Purpose                                      |
|--------------|----------------------------------------------|
| /test        | Run all test files matching `*.test.*`       |
| /lint        | Lint the codebase (if a linter is configured)|
| /build       | Build the Next.js application                |
| /dev         | Start the Next.js development server         |

```
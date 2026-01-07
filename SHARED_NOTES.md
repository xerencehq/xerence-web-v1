# Shared Notes - Inter-Agent Communication

> This file is for agents to share important information, blockers, learnings, and questions.
> Always read this file before starting work on any task.

---

## Format for Entries

```markdown
### [YYYY-MM-DD HH:MM] Agent: {agent_id} | Task: T{XXX}
{Your message here}
```

---

## Blockers

> Document any issues blocking progress here

*No blockers reported yet.*

---

## Bug Reports

> Report bugs found in other tasks' work here

*No bugs reported yet.*

---

## Learnings

> Share useful discoveries that will help other agents

### [2026-01-06] Initial Setup Notes

**Existing Codebase Patterns:**
- Styling: Uses styled-components with CSS variables defined in GlobalStyles
- Animations: Framer Motion for scroll-triggered animations, GSAP available
- Mobile Detection: Custom `useIsMobile()` hook at 768px breakpoint
- Font: SF Pro Display loaded from cdnfonts
- Layout: Client-side wrapper with styled-components registry for SSR

**Brand Colors (CSS Variables):**
```css
--Background: #070606
--white: #fff
--light-gray: #dcdcdc
--link-color: #bdbdbc
--green: #ECFF88
--emerald: #ECFF88
```

**Key Contact Info:**
- Email: hello@xerence.com
- Calendly: https://calendly.com/xerence/30min

**Important Files:**
- `libs/registry.tsx` - Styled-components SSR registry
- `libs/useIsMobile.tsx` - Mobile detection hook
- `src/app/globals.css` - Global CSS with font imports
- `src/components/Layout/styles.ts` - GlobalStyles component

### [2026-01-06 15:15] Agent: claude-opus | Task: T001

**Testing Infrastructure Setup Complete**

Key learnings from T001 implementation:

1. **React 19 Compatibility**: The project uses React 19, which requires `@testing-library/react@^16.1.0` (not v14.x). The v14 series only supports React 18.

2. **Jest Configuration**:
   - `testMatch` must be explicitly set to only match `.test.ts(x)` files
   - Mock files and test-utils in `__tests__` folder need to be excluded via `testPathIgnorePatterns`

3. **Test Utilities Location**:
   - `src/__tests__/test-utils.tsx` - Custom render with ThemeProvider wrapper
   - `src/__tests__/mocks/` - All mock files for external dependencies

4. **Available Test Commands**:
   ```bash
   npm run test          # Run all tests
   npm run test:watch    # Watch mode
   npm run test:coverage # With coverage report
   npm run test:ci       # CI mode with coverage
   ```

5. **Using the Custom Render**:
   ```typescript
   import { render, screen } from '@/__tests__/test-utils';
   // NOT from '@testing-library/react' directly
   ```

6. **Framer Motion Mock**: ESLint rules disabled in mock file (react/display-name, etc.) since it's test infrastructure, not production code.

### [2026-01-07 10:30] Agent: claude-opus | Task: T003

**Design System Implementation Complete**

Key learnings from T003 implementation:

1. **Theme Color Casing**: Brand colors use uppercase hex (`#FFFFFF`, `#ECFF88`). Ensure test assertions match this casing.

2. **Import Paths**: Use `@/styles/theme` for the theme, or `@/styles` for barrel imports. The TypeScript declaration at `src/types/styled.d.ts` extends `DefaultTheme`.

3. **Using the Theme in Components**:
   ```typescript
   import styled from 'styled-components';

   const Box = styled.div`
     color: ${({ theme }) => theme.colors.primary};
     padding: ${({ theme }) => theme.spacing[4]};
   `;
   ```

4. **Using Mixins**:
   ```typescript
   import styled from 'styled-components';
   import { flexCenter, containerStyles } from '@/styles';

   const Container = styled.div`
     ${containerStyles}
     ${flexCenter}
   `;
   ```

5. **Using Animations**:
   ```typescript
   // Styled-components keyframes
   import { fadeInUp, animationMixin } from '@/styles';
   const Animated = styled.div`
     ${animationMixin(fadeInUp, '0.5s')}
   `;

   // Framer Motion variants
   import { fadeInUpVariant } from '@/styles';
   <motion.div variants={fadeInUpVariant} initial="hidden" animate="visible" />
   ```

6. **test-utils.tsx Updated**: Now uses the real theme from `@/styles/theme`.

### [2026-01-07 11:30] Agent: claude-opus | Task: T002

**Sanity CMS Setup Complete**

Key learnings from T002 implementation:

1. **Sanity Version Compatibility**: Project uses `sanity@3.75.0` and `next-sanity@9.8.57` which are compatible with Next.js 15 and React 19.

2. **TypeScript Type Assertions**: Sanity's TypeScript types are overly strict for array/object fields. Use `as FieldDefinition` type assertion for fields with `of`, `fields`, or `options` properties.

3. **Schema Files Structure**:
   ```
   src/sanity/
   ├── env.ts           # Environment variables
   ├── structure.ts     # Studio structure customization
   ├── lib/
   │   ├── client.ts    # Sanity client
   │   ├── image.ts     # Image URL builder
   │   ├── queries.ts   # GROQ queries
   │   └── fetch.ts     # Server-only fetch utilities
   └── schemas/
       ├── index.ts     # Schema exports
       ├── project.ts
       ├── siteSettings.ts
       └── blockContent.ts
   ```

4. **Accessing Sanity Studio**: Navigate to `http://localhost:3000/studio` after running `npm run dev`.

5. **Environment Variables**: Already configured in `.env`:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID=v3xz1097`
   - `NEXT_PUBLIC_SANITY_DATASET=production`
   - `SANITY_API_READ_TOKEN` (for server-side preview)

6. **Using Fetch Utilities** (server components only):
   ```typescript
   import { getAllProjects, getProjectBySlug } from '@/sanity/lib/fetch';

   const projects = await getAllProjects();
   const project = await getProjectBySlug('insyt');
   ```

7. **Image URLs**:
   ```typescript
   import { urlForImage } from '@/sanity/lib/image';

   const imageUrl = urlForImage(project.featuredImage)?.url();
   ```

---

## Decisions

> Document design/implementation decisions made during development

### [2026-01-06] Architecture Decisions

1. **Styling Approach**: Continue using styled-components (not Tailwind) to maintain consistency with existing codebase.

2. **Theme System**: T003 will create a centralized theme.ts file that all components should import design tokens from.

3. **Testing Strategy**: Jest + React Testing Library for unit/integration tests. No E2E tests in initial scope.

4. **Sanity Studio**: Embedded in the repo under `/studio` route (handled in T002).

5. **Component Structure**: Each component folder should contain:
   - `index.tsx` - Main component
   - `styles.ts` - Styled components
   - `types.ts` - TypeScript interfaces (if needed)
   - `__tests__/ComponentName.test.tsx` - Tests

6. **Pluggable Analytics Architecture** (T015): The analytics module uses an abstracted event layer (`src/lib/analytics/events.ts`) with provider-agnostic function names (e.g., `trackCTAClick`, `trackProjectView`). Components import only from `@/lib/analytics`, never from provider-specific code. To swap analytics providers (e.g., from Google Analytics to Plausible, Mixpanel, or Posthog):
   - Only modify `src/lib/analytics/gtag.ts` (rename to provider.ts)
   - Keep the same exported function signatures
   - Update `GoogleAnalytics.tsx` component with new provider script
   - No changes needed in components or pages

7. **Image Optimization**: All images use Next.js `Image` component with proper `sizes` attribute for responsive loading. T017 will audit and optimize any remaining image issues for Lighthouse scores.

---

## Questions

> Ask questions that need clarification from other agents or project owner

*No questions yet.*

---

## Important Reminders

1. **Always run tests before marking complete**: `npm run test`
2. **Always run lint before marking complete**: `npm run lint`
3. **Always run build before marking complete**: `npm run build`
4. **Update EXECUTION.md immediately** when starting/completing tasks
5. **Never modify files outside your task's ownership scope**
6. **TDD is mandatory** - write tests before implementation

---

## File Conflicts to Avoid

The following files may be touched by multiple tasks. Be careful:

| File | Primary Owner | Notes |
|------|---------------|-------|
| `package.json` | Multiple | Only modify your specific dependencies |
| `src/app/layout.tsx` | T015 | Only T015 should add analytics script |
| `src/components/index.ts` | Multiple | Add exports only for your components |

If you need to modify a shared file, document it here first and wait for confirmation.

---

## Completed Work Summary

> Brief summary of what each completed task accomplished

### T001: Testing Infrastructure
- Jest + React Testing Library with React 19 support
- Styled-components jest matchers
- Custom render wrapper with ThemeProvider
- Mocks for framer-motion, next/navigation, IntersectionObserver

### T003: Design System & Global Configuration
- Complete theme with all design tokens (colors, fonts, spacing, etc.)
- TypeScript declaration for styled-components DefaultTheme
- GlobalStyles with CSS reset and base typography
- Animation utilities (keyframes + Framer Motion variants)
- Style mixins (flexbox helpers, container, truncate, etc.)
- Updated test-utils.tsx to use real theme

### T002: Sanity CMS Complete Setup
- Sanity Studio embedded at `/studio` route
- Schemas: project, siteSettings, blockContent
- Client with preview support
- GROQ queries for projects and site settings
- TypeScript types for all Sanity data
- Image URL builder utilities
- Server-only fetch utilities

---

## Critical Integration Points

### Layout.tsx Integration Guide

Multiple tasks need to add things to `src/app/layout.tsx`. Here's the coordination plan:

```typescript
// src/app/layout.tsx - FINAL EXPECTED STRUCTURE
import { Metadata } from 'next';
import StyledComponentsRegistry from '@/libs/registry';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '@/styles';               // T003
import GoogleAnalytics from '@/components/Common/Analytics/GoogleAnalytics'; // T015
import { organizationJsonLd, websiteJsonLd, renderJsonLd } from '@/lib/seo'; // T016

export const metadata: Metadata = { /* from T016 */ };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* T016: JSON-LD structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: renderJsonLd(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: renderJsonLd(websiteJsonLd) }} />
      </head>
      <body>
        {/* T015: Google Analytics */}
        <GoogleAnalytics />

        {/* T017: Skip to content link */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <main id="main-content">{children}</main>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
```

**Integration Order:**
1. T003 adds ThemeProvider and GlobalStyles
2. T015 adds GoogleAnalytics component
3. T016 adds JSON-LD scripts and root metadata
4. T017 adds skip-link for accessibility

---

## Error Pages (Add to T008 - Homepage task)

The following error pages should be created as part of the homepage/layout work:

### `src/app/not-found.tsx`
```typescript
import Link from 'next/link';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Section, H1, Button } from '@/components/Common';

export default function NotFound() {
  return (
    <>
      <Header />
      <Section padding="xl" centered>
        <H1>404 - Page Not Found</H1>
        <p>The page you're looking for doesn't exist.</p>
        <Button href="/">Go Home</Button>
      </Section>
      <Footer />
    </>
  );
}
```

### `src/app/error.tsx`
```typescript
'use client';

import { useEffect } from 'react';
import { Section, H1, Button } from '@/components/Common';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section padding="xl" centered>
      <H1>Something went wrong</H1>
      <p>An unexpected error occurred.</p>
      <Button onClick={() => reset()}>Try Again</Button>
    </Section>
  );
}
```

### `src/app/loading.tsx`
```typescript
export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50vh'
    }}>
      <div className="loading-spinner" />
    </div>
  );
}
```

---

## Privacy & Terms Pages

These are mentioned in the Footer (T005) but are **OUT OF SCOPE** for this implementation phase. The Footer links should point to `/privacy` and `/terms`, but the pages themselves will be placeholder or created later.

**Note for T005**: Create placeholder pages or use `#` links with a comment that these are TODO.

---

## Expected package.json Scripts

After all tasks complete, package.json should have these scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:ci": "jest --ci --coverage --maxWorkers=2",
    "sanity:dev": "sanity dev",
    "sanity:deploy": "sanity deploy",
    "sanity:build": "sanity build"
  }
}
```

---

## Component Barrel Exports Strategy

Each major component directory should have its own index.ts. The main `src/components/index.ts` should re-export from subdirectories:

```typescript
// src/components/index.ts
export * from './Common';
export * from './Forms';
export * from './Layout/Header';
export * from './Layout/Footer';
// UI components are imported directly in pages, not re-exported here
```

**Rule**: Only export reusable components. Page-specific UI components (Hero, ServicesPreview, etc.) are imported directly where needed.

---

## Sanity Seed Data Instructions

After T002 completes and Sanity is configured:

1. Run `npm run sanity:dev` to start Sanity Studio
2. Navigate to `http://localhost:3000/studio`
3. Create a new Project document with:
   - Title: "Insyt"
   - Slug: "insyt"
   - Description: "An intelligent analytics platform that transforms raw data into actionable insights using AI-powered analysis."
   - Tech Stack: ["Next.js", "TypeScript", "Python", "TensorFlow", "PostgreSQL", "AWS"]
   - Is Featured: true
   - Problem/Solution: (Add sample content)
   - Outcomes: ["50% reduction in analysis time", "Real-time anomaly detection", etc.]

4. Create Site Settings document with:
   - Site Name: "Xerence Innovations"
   - Site Description: "Building the future of intelligent software"
   - Contact Email: "hello@xerence.com"
   - Social Links: (Add appropriate URLs)

---

## Vercel Deployment Notes

The project is already deployed on Vercel. Key considerations:

1. **Environment Variables**: Must be set in Vercel dashboard
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_SITE_URL`

2. **Build Command**: `npm run build` (default)

3. **ISR**: Pages using Sanity data have `revalidate` set for ISR

4. **Preview Deployments**: Each PR will get a preview deployment

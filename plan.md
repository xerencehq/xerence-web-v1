# Xerence Web Development Plan

## Project Overview

**Objective**: Transform the existing Xerence Innovations landing page into a top-notch, premium, conversion-focused marketing website with excellent performance, strong SEO, and a clear pathway for visitors to book a free consultation via Calendly.

**Company**: Xerence Innovations, Ltd. - A tech company that builds in-house products (e.g., Insyt) and delivers custom software for clients.

**Primary CTA**: Book a free consultation via Calendly (https://calendly.com/xerence/30min)

---

## Technical Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.1.0 | React framework (App Router) |
| React | 19.0.0 | UI library |
| TypeScript | 5.x | Type safety |
| Styled Components | 6.1.13 | CSS-in-JS styling |
| Framer Motion | 11.11.11 | Animations |
| Sanity | Latest | Headless CMS |
| Jest | Latest | Unit/Integration testing |
| React Testing Library | Latest | Component testing |
| Google Analytics 4 | Latest | Analytics |

---

## Site Architecture

### Pages
| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | High-impact landing page with value proposition, services preview, credibility, process |
| Services | `/services` | Complete list of all services with details |
| Projects | `/projects` | Searchable/filterable project listing |
| Project Detail | `/projects/[slug]` | Individual project showcase |
| About | `/about` | Company story, team, values, milestones |
| Contact | `/contact` | Contact form, email, social links |
| Book Consultation | `/book-consultation` | Calendly embed with lead qualifier |

### Navigation Structure
```
[Logo] Home | Services | Projects | About | Contact | [Book a Consultation Button]
```

---

## Design System

### Brand Colors
| Name | Value | Usage |
|------|-------|-------|
| Background | #070606 | Primary background |
| White | #FFFFFF | Primary text |
| Light Gray | #DCDCDC | Secondary text |
| Link Color | #BDBDBC | Inactive links |
| Green/Emerald | #ECFF88 | Primary accent, CTAs |

### Typography
- Primary Font: SF Pro Display
- Responsive scaling with clamp()

### Breakpoints
- Mobile: < 768px
- Desktop: >= 768px

---

## Phase Overview

### Phase 1: Foundation (Sequential)
Tasks that establish the infrastructure. Must be completed before other work begins.

| Task | Description | Estimated Complexity |
|------|-------------|---------------------|
| T001 | Testing Infrastructure & Project Configuration | High |
| T002 | Sanity CMS Complete Setup | High |
| T003 | Design System & Global Configuration | Medium |

### Phase 2: Core Components (Parallel)
Reusable components that pages depend on. Can be worked on in parallel after Phase 1.

| Task | Description | Dependencies |
|------|-------------|--------------|
| T004 | Navigation System (Header) | T001, T003 |
| T005 | Footer Component | T001, T003 |
| T006 | Shared UI Components | T001, T003 |
| T007 | Form Components | T001, T003 |

### Phase 3: Pages (Parallel with Dependencies)
Individual page implementations. Can be worked on in parallel after their dependencies.

| Task | Description | Dependencies |
|------|-------------|--------------|
| T008 | Homepage | T004, T005, T006 |
| T009 | Services Page | T004, T005, T006 |
| T010 | About Page | T004, T005, T006 |
| T011 | Contact Page | T004, T005, T006, T007 |
| T012 | Book Consultation Page | T004, T005, T006, T007 |
| T013 | Projects Listing Page | T002, T004, T005, T006 |
| T014 | Project Detail Page | T002, T004, T005, T006 |

### Phase 4: Integrations (Parallel)
Third-party integrations. Can be worked on after core pages exist.

| Task | Description | Dependencies |
|------|-------------|--------------|
| T015 | Google Analytics Integration | T001 |
| T016 | SEO Implementation | T008-T014 |

### Phase 5: Finalization (Sequential)
Final polish and optimization.

| Task | Description | Dependencies |
|------|-------------|--------------|
| T017 | Performance Optimization & Lighthouse Audit | All previous tasks |

---

## Dependency Graph

```
T001 (Testing) ─────────────────────────────────────────┐
      │                                                  │
      v                                                  │
T002 (Sanity) ──────────────────────────┐               │
      │                                  │               │
      v                                  │               │
T003 (Design System) ───────────────────┼───────────────┤
      │                                  │               │
      ├──────────┬──────────┬──────────┐│               │
      v          v          v          v│               │
    T004       T005       T006       T007               │
   (Header)  (Footer)    (UI)      (Forms)             │
      │          │          │          │                │
      └──────────┴──────────┴──────────┘                │
                      │                                  │
      ┌───────────────┼───────────────┐                 │
      │               │               │                 │
      v               v               v                 │
    T008           T009           T010                  │
   (Home)       (Services)      (About)                 │
      │               │               │                 │
      │               v               v                 │
      │            T011           T012                  │
      │          (Contact)    (Consultation)            │
      │               │               │                 │
      │       ┌──────┴───────────────┘                 │
      │       │                                         │
      │       │  T002 (Sanity) ─────┐                  │
      │       │       │              │                  │
      │       │       v              v                  │
      │       │     T013          T014                  │
      │       │  (Projects)   (Project Detail)          │
      │       │       │              │                  │
      v       v       v              v                  │
    T015 (Analytics) ←──────────────────────────────────┤
                                                        │
      └─────────────────────────────────────────────────┤
                                                        v
                              T016 (SEO) ───────────> T017 (Performance)
```

---

## File Ownership Matrix

Each task owns specific files to prevent conflicts.

### T001 - Testing Infrastructure
```
OWNS (Create/Modify):
- jest.config.js
- jest.setup.js
- src/__tests__/test-utils.tsx
- src/__tests__/mocks/*
- package.json (test scripts only)
- tsconfig.json (jest paths only)
```

### T002 - Sanity CMS
```
OWNS (Create/Modify):
- sanity.config.ts
- sanity.cli.ts
- src/sanity/*
- src/lib/sanity/*
- src/types/sanity.ts
- package.json (sanity deps only)
```

### T003 - Design System
```
OWNS (Create/Modify):
- src/styles/theme.ts
- src/styles/GlobalStyles.ts
- src/styles/animations.ts
- src/styles/mixins.ts
- src/types/styled.d.ts
```

### T004 - Navigation (Header)
```
OWNS (Create/Modify):
- src/components/Layout/Header/*
- src/components/Layout/Navigation/*
- src/components/Layout/MobileMenu/*
```

### T005 - Footer
```
OWNS (Create/Modify):
- src/components/Layout/Footer/*
```

### T006 - Shared UI Components
```
OWNS (Create/Modify):
- src/components/Common/Button/*
- src/components/Common/Card/*
- src/components/Common/Section/*
- src/components/Common/Typography/*
- src/components/Common/Image/*
- src/components/Common/Badge/*
- src/components/Common/Tag/*
```

### T007 - Form Components
```
OWNS (Create/Modify):
- src/components/Forms/*
- src/lib/validation.ts
```

### T008 - Homepage
```
OWNS (Create/Modify):
- src/app/(home)/page.tsx
- src/components/UI/Hero/*
- src/components/UI/ValueProposition/*
- src/components/UI/ServicesPreview/*
- src/components/UI/ProcessSection/*
- src/components/UI/ProjectsShowcase/*
- src/components/UI/Testimonials/*
- src/components/UI/CTASection/*
- src/components/UI/FAQ/* (enhance existing)
```

### T009 - Services Page
```
OWNS (Create/Modify):
- src/app/services/page.tsx
- src/components/UI/ServicesPage/*
- src/data/services.ts
```

### T010 - About Page
```
OWNS (Create/Modify):
- src/app/about/page.tsx
- src/components/UI/AboutPage/*
- src/data/team.ts
- src/data/milestones.ts
```

### T011 - Contact Page
```
OWNS (Create/Modify):
- src/app/contact/page.tsx
- src/components/UI/ContactPage/*
```

### T012 - Book Consultation Page
```
OWNS (Create/Modify):
- src/app/book-consultation/page.tsx
- src/components/UI/ConsultationPage/*
- src/components/Common/CalendlyEmbed/*
- src/components/Common/LeadQualifier/*
```

### T013 - Projects Listing Page
```
OWNS (Create/Modify):
- src/app/projects/page.tsx
- src/components/UI/ProjectsPage/*
```

### T014 - Project Detail Page
```
OWNS (Create/Modify):
- src/app/projects/[slug]/page.tsx
- src/components/UI/ProjectDetail/*
```

### T015 - Google Analytics
```
OWNS (Create/Modify):
- src/lib/analytics/*
- src/components/Common/Analytics/*
- src/app/layout.tsx (analytics script only)
```

### T016 - SEO
```
OWNS (Create/Modify):
- src/app/sitemap.ts
- src/app/robots.ts
- src/lib/seo/*
- src/app/*/metadata (page metadata exports)
```

### T017 - Performance
```
OWNS (Create/Modify):
- next.config.js (optimization settings)
- Any file for performance fixes (with documentation)
```

---

## Services List

The following services should be showcased:

1. **Custom Software Development**
   - Bespoke software solutions tailored to business needs

2. **Mobile App Development**
   - iOS and Android applications

3. **AI/ML Solutions**
   - Intelligent automation and machine learning integration

4. **Cloud Infrastructure**
   - Scalable cloud architecture and DevOps

5. **Web Application Development**
   - Modern, responsive web applications

6. **API Development & Integration**
   - RESTful APIs and third-party integrations

7. **UI/UX Design**
   - User-centered design and prototyping

8. **Technical Consulting**
   - Architecture review and technology strategy

---

## Sanity Schemas

### Project Schema
```typescript
{
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', required: true },
    { name: 'slug', type: 'slug', required: true },
    { name: 'description', type: 'text', required: true },
    { name: 'problem', type: 'blockContent' },
    { name: 'solution', type: 'blockContent' },
    { name: 'outcomes', type: 'array', of: [{ type: 'string' }] },
    { name: 'techStack', type: 'array', of: [{ type: 'string' }] },
    { name: 'featuredImage', type: 'image' },
    { name: 'gallery', type: 'array', of: [{ type: 'image' }] },
    { name: 'clientName', type: 'string' }, // Optional
    { name: 'clientLogo', type: 'image' }, // Optional
    { name: 'projectUrl', type: 'url' }, // Optional
    { name: 'isFeatured', type: 'boolean', default: false },
    { name: 'publishedAt', type: 'datetime' },
  ]
}
```

### Site Settings Schema
```typescript
{
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'siteName', type: 'string' },
    { name: 'siteDescription', type: 'text' },
    { name: 'logo', type: 'image' },
    { name: 'socialLinks', type: 'object', fields: [...] },
    { name: 'contactEmail', type: 'string' },
    { name: 'contactPhone', type: 'string' },
    { name: 'address', type: 'text' },
  ]
}
```

---

## Lead Qualifier Questions

For the Book Consultation page:

1. **Budget Range** (Select)
   - Under $10,000
   - $10,000 - $25,000
   - $25,000 - $50,000
   - $50,000 - $100,000
   - $100,000+

2. **Project Overview** (Text area)
   - Brief description of the project

---

## Lighthouse Targets

| Metric | Target |
|--------|--------|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 95+ |

---

## Task Summary

| Task ID | Name | Phase | Parallel Group |
|---------|------|-------|----------------|
| T001 | Testing Infrastructure & Project Configuration | 1 | A (Sequential) |
| T002 | Sanity CMS Complete Setup | 1 | A (Sequential) |
| T003 | Design System & Global Configuration | 1 | A (Sequential) |
| T004 | Navigation System (Header) | 2 | B |
| T005 | Footer Component | 2 | B |
| T006 | Shared UI Components | 2 | B |
| T007 | Form Components | 2 | B |
| T008 | Homepage | 3 | C |
| T009 | Services Page | 3 | C |
| T010 | About Page | 3 | C |
| T011 | Contact Page | 3 | C |
| T012 | Book Consultation Page | 3 | C |
| T013 | Projects Listing Page | 3 | C |
| T014 | Project Detail Page | 3 | C |
| T015 | Google Analytics Integration | 4 | D |
| T016 | SEO Implementation | 4 | D |
| T017 | Performance Optimization & Lighthouse Audit | 5 | E (Sequential) |

---

## Getting Started

1. Read `CLAUDE.md` for agent rules
2. Check `EXECUTION.md` for current state
3. Pick an available task based on dependencies
4. Update `EXECUTION.md` before starting
5. Follow TDD methodology
6. Update `SHARED_NOTES.md` with learnings
7. Mark task complete in `EXECUTION.md` when done

---

## Success Criteria

The project is complete when:
- [ ] All 17 tasks are marked complete
- [ ] All tests pass (`npm run test`)
- [ ] No lint errors (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Lighthouse scores meet targets
- [ ] All pages are responsive and functional
- [ ] Calendly integration works
- [ ] Sanity CMS is populated with seed data
- [ ] Google Analytics is tracking

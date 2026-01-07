# CLAUDE.md - Agent Rules for Xerence Web Development

## CRITICAL: Read Before Starting Any Work

Every agent MUST read and follow these rules before beginning any task.

---

## 1. First Steps (Mandatory)

1. **Read `EXECUTION.md`** - Check the current state of development, see what tasks are in progress, and identify what task to pick next.
2. **Read `SHARED_NOTES.md`** - Review any important notes, warnings, or learnings from other agents.
3. **Read your assigned task file** - e.g., `tasks/T001.md` for complete task details.
4. **Update `EXECUTION.md`** - Mark your task as "in_progress" with your agent ID before starting work.

---

## 2. Multi-Agent Coordination Rules

### Task Assignment
- **NEVER** work on a task that is already marked as `in_progress` by another agent.
- **ALWAYS** update `EXECUTION.md` immediately when you start or complete a task.
- If no tasks are available, wait or report the blocker in `SHARED_NOTES.md`.

### File Ownership
- Each task specifies which files it owns (can create/modify).
- **NEVER** modify files outside your task's ownership scope.
- If you need changes to files owned by another task, document the requirement in `SHARED_NOTES.md`.

### Conflict Prevention
- Check `EXECUTION.md` for any in-progress tasks that might conflict.
- If you discover a potential conflict, STOP and document it in `SHARED_NOTES.md`.
- Wait for the conflicting task to complete before proceeding.

---

## 3. Development Standards

### Test-Driven Development (TDD) - MANDATORY
Every task MUST follow TDD:
1. **Write tests FIRST** - Before any implementation code.
2. **Run tests** - Confirm they fail (red phase).
3. **Implement** - Write minimum code to pass tests.
4. **Run tests** - Confirm they pass (green phase).
5. **Refactor** - Clean up while keeping tests green.

### Testing Requirements
- **Unit tests**: Jest with React Testing Library
- **Test location**: `__tests__` folders adjacent to source files or `src/__tests__`
- **Naming**: `*.test.ts` or `*.test.tsx`
- **Coverage**: All components, utilities, and pages must have tests

### Code Quality
- TypeScript strict mode - no `any` types without justification.
- All components must be fully typed.
- Follow existing code style (styled-components, Framer Motion patterns).
- No ESLint errors or warnings.

### Styling
- Use **styled-components** exclusively (no Tailwind, no inline styles).
- Reference design tokens from `src/styles/theme.ts` (created in T003).
- All new styles must be responsive (mobile-first approach).
- Breakpoint: 768px for mobile/desktop switch.

### Brand Colors (Reference)
```
--Background: #070606 (Deep dark background)
--white: #fff
--light-gray: #dcdcdc
--link-color: #bdbdbc
--green: #ECFF88 (Primary accent - lime green)
--emerald: #ECFF88
```

---

## 4. File Structure Conventions

```
src/
├── app/                    # Next.js App Router pages
│   ├── (home)/            # Home page group
│   ├── services/          # Services page
│   ├── projects/          # Projects pages
│   │   └── [slug]/        # Dynamic project detail
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── book-consultation/ # Calendly booking page
│   └── studio/            # Sanity Studio (if embedded)
├── components/
│   ├── UI/                # Page sections
│   ├── Common/            # Reusable components
│   ├── Layout/            # Layout components
│   └── Forms/             # Form components
├── lib/
│   ├── sanity/            # Sanity client & queries
│   └── analytics/         # Analytics utilities
├── styles/
│   └── theme.ts           # Design tokens & theme
├── types/                 # TypeScript type definitions
└── __tests__/             # Global test utilities
```

---

## 5. Acceptance Criteria Standards

A task is ONLY complete when:
1. **All tests pass** - `npm run test` exits with 0 errors.
2. **No lint errors** - `npm run lint` exits with 0 errors.
3. **Build succeeds** - `npm run build` completes without errors.
4. **Functionality works** - All features described in the task are implemented.
5. **UI matches requirements** - Visual output matches task specifications.
6. **Documentation updated** - `EXECUTION.md` and `SHARED_NOTES.md` are updated.

### Completion Checklist
Before marking a task as complete:
- [ ] All acceptance criteria from the task file are met
- [ ] All tests are written and passing
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Tested on mobile viewport (375px) and desktop (1440px)
- [ ] `EXECUTION.md` updated with completion status
- [ ] Any learnings/notes added to `SHARED_NOTES.md`

---

## 6. Git Workflow

### Branching
- Each task should work on: `feature/T{XXX}-{short-description}`
- Example: `feature/T001-testing-infrastructure`

### Commits
- Commit frequently with clear messages.
- Format: `T{XXX}: {description}`
- Example: `T001: Add Jest configuration and test utilities`

### Before Completing Task
1. Ensure all changes are committed.
2. Run full test suite: `npm run test`
3. Run lint: `npm run lint`
4. Run build: `npm run build`

---

## 7. Dependencies Between Tasks

### Blocking Dependencies (Must Complete First)
- **T001** (Testing Infrastructure) → Blocks all other tasks
- **T002** (Sanity CMS) → Blocks T013, T014 (Project pages)
- **T003** (Design System) → Blocks T004-T017 (all UI tasks)
- **T004-T007** (Core Components) → Blocks T008-T014 (all pages)

### Dependency Resolution
- Check `EXECUTION.md` for dependency status.
- If your task's dependencies aren't complete, pick a different task or wait.
- Never start a task with incomplete dependencies.

---

## 8. Error Handling & Blockers

### If You Encounter a Blocker
1. Document it immediately in `SHARED_NOTES.md` under "Blockers".
2. Include: Task ID, description, what's needed to resolve.
3. If possible, switch to a non-blocked task.
4. Update `EXECUTION.md` with blocker status.

### If You Find a Bug in Another Task's Work
1. Do NOT fix it yourself (violates file ownership).
2. Document in `SHARED_NOTES.md` under "Bug Reports".
3. Include: Affected task, file, description, suggested fix.

### If Tests Fail
1. Do NOT skip or delete failing tests.
2. Fix the implementation to make tests pass.
3. If test is wrong, fix the test with justification in commit message.

---

## 9. Communication Protocol

### SHARED_NOTES.md Sections
- **Blockers**: Current blocking issues
- **Bug Reports**: Bugs found in other tasks' work
- **Learnings**: Useful discoveries for other agents
- **Decisions**: Design decisions made during implementation
- **Questions**: Questions for other agents or project owner

### Format for Entries
```markdown
### [YYYY-MM-DD HH:MM] Agent: {agent_id} | Task: T{XXX}
{Your message here}
```

---

## 10. Prohibited Actions

- **NEVER** modify files outside your task's ownership scope.
- **NEVER** skip writing tests.
- **NEVER** use `any` type without explicit justification.
- **NEVER** commit code with failing tests.
- **NEVER** work on a task already in progress by another agent.
- **NEVER** create summary, fix, results, or guide markdown files.
- **NEVER** take shortcuts or implement workarounds.
- **NEVER** mark a task complete if acceptance criteria aren't 100% met.

---

## 11. Quick Reference Commands

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run specific test file
npm run test -- path/to/file.test.tsx

# Run linter
npm run lint

# Run build
npm run build

# Run dev server
npm run dev

# Run Sanity Studio (after T002)
npm run sanity:dev
```

---

## 12. Key URLs & Resources

- **Calendly URL**: https://calendly.com/xerence/30min
- **Contact Email**: hello@xerence.com
- **Sanity Project**: (Configure in T002)
- **Vercel Deployment**: (Existing deployment)

---

## Remember

1. Quality over speed - never rush at the expense of quality.
2. TDD is mandatory - tests first, always.
3. Communicate via SHARED_NOTES.md - don't assume, document.
4. Update EXECUTION.md - keep the state accurate.
5. Follow the plan - each task has clear boundaries for a reason.

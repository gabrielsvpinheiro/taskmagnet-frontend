# TaskMagnet Front-end

This repository follows a branching and commit message strategy to manage different aspects of the development process.

## Branches

- `development`: Main development branch where ongoing work and features are integrated.
- `production`: Stable branch representing the production-ready code.

## Commit Patterns

- `feat`: Commits of this type indicate that the code changes are introducing a new feature (relates to the MINOR version in semantic versioning).
- `fix`: Commits of this type indicate that the code changes are fixing a problem (bug fix) (relates to the PATCH version in semantic versioning).
- `docs`: Commits of this type indicate changes in documentation, such as updates to the README (does not include code changes).
- `test`: Commits of this type are used when making changes to tests, whether creating, modifying, or deleting unit tests (does not include code changes).
- `build`: Commits of this type are used when making modifications to build files and dependencies.
- `perf`: Commits of this type are used to identify any code changes related to performance.
- `style`: Commits of this type indicate changes related to code formatting, semicolons, trailing spaces, linting, etc. (does not include code changes).
- `refactor`: Commits of this type refer to changes due to refactoring that does not alter functionality, such as changes in the processing format of a certain part of the code that maintained the same functionality or performance improvements identified in a code review.
- `chore`: Commits of this type indicate updates to build tasks, administrator configurations, packages, etc. For example, adding a package to the gitignore (does not include code changes).
- `ci`: Commits of this type indicate changes related to continuous integration.
- `raw`: Commits of this type indicate changes related to configuration files, data, features, parameters.

## Feature Branches

Feature branches are created for implementing new features or significant changes. They follow the naming convention:

- `ft__name_of_action`: Feature branch for implementing a specific action or feature.

### Feature Workflow

1. Create a new feature branch from `development`.
2. Implement the feature or action.
3. Commit messages should follow the pattern: `feat: implement name_of_action`.
4. Create a pull request (PR) from the feature branch to the `development` branch.
5. After review and validation, merge the feature branch into `development`.
6. The `development` branch will be periodically merged into `production`.

## User Story (US) Branches

US branches are created for implementing user stories. They follow the naming convention:

- `ft__us__name_of_card`: Branch for implementing a specific user story card.

### US Workflow

1. Create a new US branch from `development`.
2. Implement the user story.
3. Commit messages should follow the pattern: `feat(us): implement name_of_card`.
4. Create a pull request (PR) from the US branch to the corresponding `ft__name_of_action` feature branch.
5. After review and validation, merge the US branch into the feature branch.

## Fix/Bug Branches

Fix/bug branches are created for addressing issues or bugs. They follow the naming convention:

- `fix__name_of_fix`: Branch for fixing a specific issue.
- `bug__name_of_bug`: Branch for addressing a bug.

### Fix/Bug Workflow

1. Create a new fix/bug branch from `development`.
2. Implement the fix or bug resolution.
3. Commit messages should follow the pattern: `fix: resolve name_of_fix` or `bug: fix name_of_bug`.
4. Create a pull request (PR) from the fix/bug branch to the corresponding `ft__name_of_action` feature branch.
5. After review and validation, merge the fix/bug branch into the feature branch.

## Merging to Production

After a feature branch has been validated in the `development` branch, it can be merged into the `production` branch to release the changes to the production environment.

**Note:** Ensure proper testing and validation before merging into `production`.

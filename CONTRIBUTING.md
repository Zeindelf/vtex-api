# Contributing

Thanks for being willing to contribute 🙌
If you contribute to this project, you agree to release your work under the license of this project.

**Working on your first Pull Request?** You can learn how from this [First Contributions](https://github.com/firstcontributions/first-contributions)  guide.

## Project setup

1. Fork and clone the repo
1. Run `yarn install` to install dependencies
1. Create a branch for your PR with `git checkout -b pr/your-branch-name`

## Development

### Creating a new method

1. Create `src/yourNewMthod.ts`. You can run `yarn start` to start TS Watch and use [NPM Link](https://docs.npmjs.com/cli/link.html) to real-time test package
1. Create `tests/yourNewMthod.spec.ts`, run `yarn test:watch` to start the test runner in watch mode and start writing tests for your method
1. Create `src/docs/yourNewMthod.md` and create documentation for your method
1. Export your method from `src/index.ts` and add your method to `README.md`

You can also write your tests first if you prefer [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development).

### Updating an existing method

1. Run `yarn start` to start TS watches and start applying changes
2. Update tests according to your changes using `yarn test:watch`
3. Update documentation according to your changes

## Committing and Pushing changes

### Commit messages

This repo uses [semantic-release](https://github.com/semantic-release/semantic-release) and [conventional commit messages](https://conventionalcommits.org) so prefix your commits with `fix:` or `feat:` if you want your changes to appear in [release notes](https://github.com/zeindelf/vtex-api/blob/master/CHANGELOG.md).

### Git hooks

There are git hooks set up with this project that are automatically enabled
when you install dependencies. These hooks automatically test and validate your code when creating commits. They're really handy but can be temporarily disabled by adding a `--no-verify` flag to your commit command. This is useful when you want to commit and push to get feedback on uncompleted code.

## Help needed

Please have a look at the [open issues](https://github.com/zeindelf/vtex-api/issues) and respond to questions, bug reports and feature requests. Thanks!

We're also looking to improve the code coverage on this project. To easily know what methods need tests run `yarn test:coverage` to generate a code coverage report. You can see the report in your terminal or open `coverage/lcov-report/index.html` to see the HTML report.
/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/app/**",
    "!src/types/**",
    "!src/**/stories.tsx",
    "!src/styles/**",
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.js"],
  testEnvironment: "jsdom",
  passWithNoTests: true,
};

module.exports = createJestConfig(config);

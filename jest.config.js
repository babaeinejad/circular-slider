/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  resolver: "ts-jest-resolver",
  verbose: true,
  roots: ["src/slider/tests/"],
};

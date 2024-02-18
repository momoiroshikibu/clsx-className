/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    verbose: true,
    preset: "ts-jest",
    testMatch: ["**/lib/**/*.test.ts"],
  };
};

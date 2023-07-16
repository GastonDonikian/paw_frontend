module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testRegex: '/tests/.*\\.(test|spec)\\.(ts|tsx|js)$',
    modulePaths: ['<rootDir>/src'],
};

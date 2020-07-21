module.exports = {
    endpoint: 'https://github.com/',
    username: 'Monax111',
    password: '',
    gitAuthor: 'RenovateBot',
    platform: 'github',
    logFileLevel: 'debug',
    logLevel: 'debug',
    onboarding: true,
    onboardingConfig: {
        extends: ['@bpm-renovate:base-backend-kotlin']
    },
    repositories: ['Monax111/test']
};

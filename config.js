module.exports = {
    token: '***',
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    logFileLevel: 'debug',
    logLevel: 'debug',
    onboarding: true,
    onboardingConfig: {
        extends: ['@bpm-renovate:base-backend-kotlin']
    },
    repositories: ['Monax111/test'],
	encrypted: {
        npmToken: "***"
    },
    npmrc: "registry=https://nexus-new.tcsbank.ru/repository/npm-all/\nstrict-ssl=false\nca=''\n//nexus-new.tcsbank.ru/repository/npm-sme/:_authToken=${NPM_TOKEN}"
};

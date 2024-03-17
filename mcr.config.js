module.exports = {

    cdpPort: 9223,

    name: 'My TestCafe Coverage Reports',

    reports: [
        'console-details',
        'v8'
    ],

    entryFilter: {
        '**/jquery*': false,
        '**/*.js': true
    },

    outputDir: './coverage-reports'
};

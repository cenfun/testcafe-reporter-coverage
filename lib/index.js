const MCR = require('monocart-coverage-reports');
const Util = require('monocart-coverage-reports/util');

module.exports = () => {

    return {
        async reportTaskStart(startTime, userAgents, testCount) {

            const coverageReport = MCR({});
            coverageReport.cleanCache();
            await coverageReport.loadConfig();

            const coverageOptions = coverageReport.options;

            this.cdpPort = coverageOptions.cdpPort || 9223;
            // console.log('cdpPort', this.cdpPort);

            this.coverageReport = coverageReport;

            Util.logDebug(`[reportTaskStart] ${startTime}`);

        },

        async reportFixtureStart(name, path, meta) {

            const client = await MCR.CDPClient({
                port: this.cdpPort
            }).catch((e) => {
                console.log(e);
            });

            await client.startCoverage();

            this.client = client;
            Util.logDebug('[reportFixtureStart] start coverage');

        },

        reportTestStart(name, meta) {
            // console.log('reportTestStart');
        },

        async reportTestDone(name, testRunInfo, meta) {
            const coverageData = await this.client.stopCoverage();
            if (coverageData) {
                await this.coverageReport.add(coverageData);
            }
            Util.logDebug('[reportTestDone] add coverage data');

            await this.client.startCoverage();
        },

        async reportTaskDone(endTime, passed, warnings, result) {
            // This should run AFTER the last test -> no reporting the coverage needed
            await this.client.stopCoverage();
            Util.logDebug('[reportTaskDone] generate coverage reports');
            await this.coverageReport.generate();

        }
    };
};

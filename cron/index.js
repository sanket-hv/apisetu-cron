const { CronJob } = require('cron')
const { searchForSlot010, searchForSlot006 } = require('./FindSlot')

exports.findVaccinationAvaialbleSlot = new CronJob('0 */10 * * * *', function () {
    searchForSlot010();
    searchForSlot006();
    console.log('At 10 Minutes:', new Date().toLocaleTimeString());
});
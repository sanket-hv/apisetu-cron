const { CronJob } = require('cron')
const { searchForSlot } = require('./FindSlot')

exports.findVaccinationAvaialbleSlot = new CronJob('0 */10 * * * *', function () {
    searchForSlot();
    console.log('At 10 Minutes:', new Date().toLocaleTimeString());
});
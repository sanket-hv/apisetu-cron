const { CronJob } = require('cron')
const { searchForSlot } = require('./FindSlot')

exports.findVaccinationAvaialbleSlot = new CronJob('0 */1 * * * *', function () {
    searchForSlot();
    console.log('At 10 Minutes:', new Date());
});
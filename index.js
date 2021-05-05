const { findVaccinationAvaialbleSlot } = require('./cron')
findVaccinationAvaialbleSlot.start();

// client.messages.create({
//     from: 'whatsapp:+918347583112',
//     body: 'Ahoy world!',
//     to: 'whatsapp:+919879144023'
// }).then(message => console.log(message.sid))
//     .catch(err => console.log(err.message));
// searchForSlot010();
// searchForSlot006();
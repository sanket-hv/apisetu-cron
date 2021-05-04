const axios = require('axios');

exports.searchForSlot = async () => {
    try {
        console.log("coming")

        var today = new Date();
        var dd = String(today.getDate() + 1).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        tomorrow = dd + '-' + mm + '-' + yyyy;
        console.log(tomorrow)

        const sessionAvailable = await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=165&date=${tomorrow}`);

        const sessions = sessionAvailable.data.sessions
        if (sessions.length > 0) {
            sessions.forEach(element => {
                if (element.min_age_limit == 18) {
                    console.log("Slots available for 18+", element.name, element.address, new Date().toISOString())
                }
                console.log(element.min_age_limit)
            });
        }
    } catch (error) {
        console.log(error.message)
    }

}


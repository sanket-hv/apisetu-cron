const axios = require('axios');

exports.searchForSlot010 = async () => {
    try {
        console.log("coming")

        var today = new Date();
        var dd = String(today.getDate() + 1).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        var tomorrow = dd + '-' + mm + '-' + yyyy;
        console.log(tomorrow)

        const centers = await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=395010&date=${tomorrow}`);

        const centersList = centers.data.centers
        if (centersList.length > 0) {
            centersList.forEach(element => {
                element.sessions.forEach(ele => {
                    if (ele.min_age_limit == 18 && ele.available_capacity > 0) {
                        console.log("---------------age 18 slot available 395010----------------", element.name, element.address, new Date().toLocaleTimeString())
                    }
                    else {
                        console.log("Slot not available")
                    }
                })

            });
        }
    } catch (error) {
        console.log(error.message)
    }

}


exports.searchForSlot006 = async () => {
    try {
        console.log("coming")

        var today = new Date();
        var dd = String(today.getDate() + 1).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        var tomorrow = dd + '-' + mm + '-' + yyyy;
        console.log(tomorrow)

        const centers = await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=395006&date=${tomorrow}`);

        const centersList = centers.data.centers
        if (centersList.length > 0) {
            centersList.forEach(element => {

                element.sessions.forEach(ele => {
                    if (ele.min_age_limit == 18 && ele.available_capacity > 0) {
                        console.log("---------------age 18 slot available 395006----------------", element.name, element.address, "Availablity ", ele.available_capacity, new Date().toLocaleTimeString())
                    }
                    else {
                        console.log("Slot not available")
                    }
                })

            });
        }
    } catch (error) {
        console.log(error.message)
    }

}

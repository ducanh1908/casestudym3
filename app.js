const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(2);
            } else {
                reject(new Error("im am Sad"));
            }
        }, 2000);
    });
};
onMyBirthday(true)
    .then(function (result) {
        console.log(`I have ${result} cakes`);// In console: I have 2 cake
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("party")
    })
onMyBirthday(false)
    .then(function (result) {
        console.log(`I have ${result} cakes`);//does not run
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("party")
    })

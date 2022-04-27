//program for temperature monitoring

function temperatureCheck(temp) {
    //parseInt parseFloat isNaN
    const integerTemp = parseInt(temp);
    console.log(integerTemp);
    console.log(isNaN(integerTemp));
    if(isNaN(integerTemp) && integerTemp == 30) {
        console.log("Weather is hot")
    } else {
        console.log("Weather is cold")
    }
}
temperatureCheck("3jsddf3hjksfd");
// Write your solution in this file!
const driver = { name: "Bob"}
function updateDriverWithKeyAndValue(driver, key, value) {
    const updatedriver = { ...driver };

    updatedriver[key] = value;
  
    return updatedriver;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;

    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const newdriver = {...driver}
    delete newdriver[key];
    return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}
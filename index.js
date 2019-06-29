// Write your solution in this file!
let driver = {
  FirstName: 'Sid',
  LastName: 'Shah',
  Age: 25
}

function updateDriverWithKeyAndValue (driver, key, value) {
  let driverCopy = {...driver};
  driverCopy[key] = value;
  return driverCopy;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let driverCopy = {...driver};
  delete driverCopy[key];
  return driverCopy;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}







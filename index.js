let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return {...driver, [key]: value}
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  let copyOfDriver = {...driver}
  delete copyOfDriver[key]
  return copyOfDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}





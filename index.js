// Write your solution in this file!
let driver={
    firstName: 'Lisa',
    lastName:'Mao',
    age:23,
}

function updateDriverWithKeyAndValue(driver, key, value){
  let copydriver={...driver};
  copydriver[key]=value;
  return copydriver
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value;
  return driver;
}
function deleteFromDriverByKey(driver, key){
  let copydriver={...driver};
  delete copydriver[key];
  return copydriver;
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
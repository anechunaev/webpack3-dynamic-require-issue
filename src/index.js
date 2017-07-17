import { getFirstName, getSecondName, getThirdName } from './getModuleName';

// It works
const firstDirName = getFirstName();
const firstData = require('./' + firstDirName + '/index.json');

// It does not work
const secondData = require('./' + getSecondName() + '/index.json');
const thirdData = require(`./${getThirdName()}`/index.json);

console.log(firstData);
console.log(secondData);
console.log(thirdData);
// Code your solution here
function findMatching(drivers, str) {
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());
  }

function fuzzyMatch(drivers, query) {
    return drivers.filter(function(driver) {
      return driver.startsWith(query);
    });
  }
  
function matchName(drivers, query) {
    return drivers.filter(function(driver) {
      return driver.name === query;
    });
  }
  
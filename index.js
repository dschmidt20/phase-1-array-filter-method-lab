// Code your solution here
const findMatching = (driversArr, driver) =>{
  return driversArr.filter(human => {
        return human.toLowerCase() === driver.toLowerCase()
    })
}
const fuzzyMatch = (driversArr, firstLetters) => {
    return driversArr.filter(driver => {
        const testLength = firstLetters.length
        return driver.slice(0,testLength).toLowerCase() === firstLetters.toLowerCase()
    })
}
const matchName = (driversArr, driver) => {
    return driversArr.filter(driverObj => {
        return driverObj.name ===driver
    })
}


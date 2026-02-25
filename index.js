/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    return payable
}

function createEmployeeRecord(arr){
    let obj = {}
    obj.firstName = arr.at(0)
    obj.familyName = arr.at(1)
    obj.title = arr.at(2)
    obj.payPerHour = arr.at(3)
    obj.timeInEvents = []
    obj.timeOutEvents = []
    return obj
}

function createEmployeeRecords(arrOfArrays){
    return arrOfArrays.map(createEmployeeRecord)
}

function createTimeInEvent(dateStampSrting){
    let [date, hour] = dateStampSrting.split(' ')
    let timeInRecord = {}
    timeInRecord.type = "TimeIn"
    timeInRecord.hour = parseInt(hour, 10)
    timeInRecord.date = date
    this.timeInEvents.push(timeInRecord)
    return this
}
function createTimeOutEvent(dateStampSrting){
    let [date, hour] = dateStampSrting.split(' ')
    let timeOutRecord = {}
    timeOutRecord.type = "TimeOut"
    timeOutRecord.hour = parseInt(hour, 10)
    timeOutRecord.date = date
    this.timeOutEvents.push(timeOutRecord)
    return this
}

function hoursWorkedOnDate(dateStampSrting)
{
    let [date, hour] = dateStampSrting.split(' ')
    return ((this.timeOutEvents.find(element => element.date == date).hour - this.timeInEvents.find(element => element.date == date).hour) / 100)
}
function wagesEarnedOnDate(dateStampSrting){
    let houres = hoursWorkedOnDate.call(this, dateStampSrting)
    let amounOwed = houres * this.payPerHour
    return (amounOwed)
}

function findEmployeeByFirstName(collection, firstNameString){
    return collection.find(element => element.firstName == firstNameString)
}


function calculatePayroll(employeeRecords){
    return employeeRecords.reduce((acumm, element) => acumm += allWagesFor.call(element), 0)
}


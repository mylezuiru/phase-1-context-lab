/* Your Code Here *
 function createEmployeeRecord(array){
    const obj = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj
}
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons
}

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 function createTimeInEvent(dateStamp){
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0,10)
    })
    return this
}

function createTimeOutEvent(dateStamp){
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0,10)
    })
    return this
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
function hoursWorkedOnDate(date){
    const enter = this.timeInEvents.find(element => element.date === date)
    const leave = this.timeOutEvents.find(element => element.date === date)
    return (leave.hour - enter.hour) / 100
}

let wagesEarnedOnDate = function(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

let allWagesFor = function(){
    let eligibleDates = this.timeInEvents.map(function(e){
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    }.bind(this), 0)

    return payable
}

let findEmployeeByFirstName = function(array, firstName) {
  return array.find((obj) => {return obj.firstName === firstName})
}

let calculatePayroll = function(array){
    return  array.reduce((accumulator, currentValue) => { return(accumulator + allWagesFor.call(currentValue)) }, 0)
}

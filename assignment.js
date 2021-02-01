// https://github.com/MinhajSiam/Assignment-3




// Kilometer to Meter conversion.

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
// var result = kilometerToMeter(15);
// console.log(result);




// Budget Calculator. 

function budgetCalculator(clock, smartPhone, laptop) {
    var clockPrice = clock * 50;
    var smartPhonePrice = smartPhone * 100;
    var laptopPrice = laptop * 500;
    var total = clockPrice + smartPhonePrice + laptopPrice;
    return total;
}
// var totalBudget = budgetCalculator(1, 1, 1);
// console.log(totalBudget);




// Hotel cost.

function hotelCost(days) {
    var totalCost = 0;
    if (days <= 10) {
        totalCost = days * 100;
    } else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var secondfTenDays = remaining * 80;
        totalCost = firstTenDays + secondfTenDays;
    } else {
        var firstTenDays = 10 * 100;
        var secondfTenDays = 10 * 80;
        var remaining = days - 10;
        var remainingDays = remaining * 50;
        totalCost = firstTenDays + secondfTenDays + remainingDays;
    } return totalCost;
}
// var result = hotelCost(15);
// console.log(result);




// Mega Friend

function megaFriend(name) {
    var bigName;
    var element = 0;
    for (var i = 0; i < name.length; i++) {
        if (name[i].length > element) {
            element = name[i].length;
            bigName = name[i];
        }
    }
    return bigName;
}

var names = ["jahid", "william", "liam", "Benjamin", "jackson"];
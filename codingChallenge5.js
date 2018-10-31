var johnEatingOut = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++ )
        {
            //Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50){
                percentage = .2;
            } else if (bill >= 50 && bill < 200){
                percentage = .15;
            } else {
                percentage = .1;
            }
            //Add results to corresponding array
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

johnEatingOut.calcTips();
console.log(johnEatingOut);


//Same problem with switch method

var johnEatingOut = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++ ) {
            //Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
        
        switch(true){
            case bill < 50:
                percentage = .2;
                break;
            case bill >= 50 && bill < 200:
                percentage = .15;
                break;
            default:
                percentage = .1;
            }
        
            //Add results to corresponding array
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

johnEatingOut.calcTips();
console.log(johnEatingOut);


//Extra Challenge

//Marks tips
var markEatingOut = {
    fullName: 'Mark Miller',
    bills: [77, 375, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++ ) {
            //Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
        
        switch(true){
            case bill < 100:
                percentage = .2;
                break;
            case bill >= 100 && bill < 300:
                percentage = .1;
                break;
            default:
                percentage = .25;
            }
        
            //Add results to corresponding array
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

markEatingOut.calcTips();
console.log(markEatingOut);
console.log(markEatingOut.finalValues)

//Average tipping
function calcAverage (tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;

}
    
johnEatingOut.tipAverage = calcAverage(johnEatingOut.tips)
markEatingOut.tipAverage = calcAverage(markEatingOut.tips)

if (johnEatingOut.tipAverage > markEatingOut.tipAverage){
    console.log("John tips more than Mark on average.")
}else{
    console.log('Mark tips more than John on average.')
}



















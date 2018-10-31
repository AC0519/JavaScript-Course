var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBmi: function() {
        this.bmi = this.mass / (this.height**2);
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBmi: function(){
        this.bmi = this.mass / (this.height**2);
    }
}

john.calcBmi();
mark.calcBmi();

if (mark.bmi > john.bmi){
    console.log("Mark\'s BMI is higher than John\'s at " + mark.bmi);
}else if (john.bmi > mark.bmi) {
    console.log("John\'s BMI is higher than Mark\'s at " + john.bmi);
}else{
    console.log("Mark and John have the same BMI at " + mark.bmi)
}

console.log(mark.bmi, john.bmi)
/*var Person = function(name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}


Person.prototype.CalculateAge = function(){
    console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastname = 'boddupally'

var venkatesh = new Person('venki', 'engineer', 1996);
var venki = new Person('venkatesh', 'doctor', 1995);

venkatesh.CalculateAge();
venki.CalculateAge();
console.log(venkatesh.lastname);
console.log(venki.lastname);

*/


/*
var personProto = {
    CalculateAge: function(){
        console.log(2018 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1995;
john.job = 'engineer';

var mark = Object.create(personProto, {
    name: {value : "mark"},
    yearOfBirth: {value: 1993}
});

john.CalculateAge();
mark.CalculateAge();
*/


/* 
var years = [1990, 1996, 1995, 1887, 1991];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i=0; i<arr.length;i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(yearOfBirth){
    return 2018-yearOfBirth;
}

ages = arrayCalc(years, calculateAge);
console.log(ages);

*/

/*
function interviewQuestion(job){
    if(job==='teacher'){
        return function(name){
            console.log('what subjects do u teach, ' + name + '?');
        }
    }
    else if(job==='designer'){
        return function(name){
            console.log(name + ', tell me about ux design?');
        }
    }
    else{
        return function(name){
            console.log('What do you do' + name + '?');
        }
    }
}

question = interviewQuestion('teacher');
question('jane');

interviewQuestion('designer')('mark');
*/

/*
(function(){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/
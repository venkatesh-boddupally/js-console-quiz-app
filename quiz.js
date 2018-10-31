/*(function(){
    function Question(ques, answers, correctAnswer){
        this.ques = ques;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    
    q1 = new Question('which number comes after 1', [1, 2, 3, 4], 2);
    q2 = new Question('which number comes after 2', [1, 2, 3, 4], 3);
    q3 = new Question('which number comes after 3', [1, 2, 3, 4], 4);
    
    questions = [q1, q2, q3];
    
    n = Math.floor(Math.random() *questions.length);
    
    Question.prototype.displayQuestion= function(){
        console.log(this.ques);
        for(var i=0; i<this.answers.length;i++)
        {
            console.log((i+1) + '. '+ this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(answer){
        if(answer === this.correctAnswer){
            console.log('correct answer');
        }else{
            console.log('wrong answer');
        }
    }
    questions[n].displayQuestion();
    var ans = parseInt(prompt("Enter your answer"));
    
    questions[n].checkAnswer(ans);
})();*/


(function(){
    function Question(ques, answers, correctAnswer){
        this.ques = ques;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    
    q1 = new Question('which number comes after 1', [1, 2, 3, 4], 2);
    q2 = new Question('which number comes after 2', [1, 2, 3, 4], 3);
    q3 = new Question('which number comes after 3', [1, 2, 3, 4], 4);
    
    questions = [q1, q2, q3];
    
    
    
    Question.prototype.displayQuestion= function(){
        console.log(this.ques);
        for(var i=0; i<this.answers.length;i++)
        {
            console.log((i+1) + '. '+ this.answers[i]);
        }
    }

    Question.prototype.displayScore = function(score){
        console.log('current score is: '+ score);
        console.log('--------------------------------------');
    }
    
    Question.prototype.checkAnswer = function(answer, callback){
        if(answer === this.correctAnswer){
            console.log('correct answer');
            sc = callback(true);
        }else{
            console.log('wrong answer');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    function score(){
        var sc=0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion(){
        n = Math.floor(Math.random() *questions.length);
        questions[n].displayQuestion();
        var ans = prompt("Enter your answer");
        if(ans !== 'exit'){
            questions[n].checkAnswer(parseInt(ans), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
    
})();
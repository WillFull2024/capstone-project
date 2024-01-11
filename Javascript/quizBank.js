// Constructor function for questions, answers and the value(weight) of each answer
function Question(questionText, answers, weight) {
    this.questionText = questionText,
        this.answers = answers,
        this.weight = weight
};

// Question constructor
const quizBank = []

// Question and answer array with the push method to add the questions and answers to the random question variable.
let question1 = new Question("How would you save a cat in a tree?", [{ A: 'Fly up and get it, releasing it safely on the ground.', weight: 25 }, { B: 'Jump up, get it & release it safely on the ground.', weight: 20 }, { C: 'Use something to transport, etc., it out of the tree.', weight: 15 }, { D: 'Destroy the tree.', weight: 10 }, { E: 'Shoot the cat for bothering you with its whining.', weight: 5 }]);
quizBank.push(question1);

let question2 = new Question("What is the best weapon?", [{ A: 'Your mind.', weight: 20 }, { B: 'Yourself.', weight: 25 }, { C: 'A gun.', weight: 5 }, { D: 'Your handmade or custom weapon of choice.', weight: 15 }, { E: 'Anything you can get your hands on.', weight: 10 }]);
quizBank.push(question2);

let question3 = new Question("Who is the most important person to you?", [{ A: 'Your spouse.', weight: 25 }, { B: 'Your child(ren).', weight: 15 }, { C: 'Your parent(s).', weight: 20 }, { D: 'Your sibling/friend(s).', weight: 10 }, { E: 'Yourself.', weight: 5 }]);
quizBank.push(question3);

let question4 = new Question("If you were God, what would you do first?", [{ A: 'Punish the guilty.', weight: 20 }, { B: 'Create complete, worldwide peace.', weight: 25 }, { C: 'Create something new.', weight: 15 }, { D: 'Destroy life on an epic scale!', weight: 10 }, { E: 'Whatever you wanted!', weight: 5 }]);
quizBank.push(question4);

let question5 = new Question("What is your favorite pastime/hobby?", [{ A: 'Destroying things.', weight: 5 }, { B: 'Solving or making riddles/puzzles', weight: 10 }, { C: 'Improving your skills.', weight: 20 }, { D: 'Finding a solution no matter the cost.', weight: 15 }, { E: 'Flying.', weight: 25 }]);
quizBank.push(question5);

let question6 = new Question("Whom do you most admire?", [{ A: 'Oprah Winfrey.', weight: 25 }, { B: 'Steve Jobs', weight: 20 }, { C: 'Fidel Castro', weight: 10 }, { D: 'Larry Hoover', weight: 5 }, { E: 'Albert Einstein', weight: 15 }]);
quizBank.push(question6);

let question7 = new Question("If you had one wish, what would it be?", [{ A: 'To be the most powerful being possible.', weight: 5 }, { B: 'To be extremely rich.', weight: 10 }, { C: 'To be the smartest person there is.', weight: 15 }, { D: 'To have it that no one could lie to you.', weight: 20 }, { E: 'To be everywhere you needed to be when you need to be there.', weight: 25 }]);
quizBank.push(question7);

let question8 = new Question("What is your favorite drink?", [{ A: 'Water.', weight: 15 }, { B: 'Whiskey/Bourbon', weight: 20 }, { C: 'Milk', weight: 25 }, { D: 'Beer.', weight: 10 }, { E: 'Juice.', weight: 5 }]);
quizBank.push(question8);

let question9 = new Question("If you are walking home and you see 2 people fighting what do you do?", [{ A: 'Encourage them by giving them weapons.', weight: 15 }, { B: 'Ignore them and keep moving.', weight: 5 }, { C: 'Beat them both up and have them sit down and think about it.', weight: 10 }, { D: 'Distract them with a greater issue to bring them together.', weight: 20 }, { E: 'Get them to calm down and talk about it while separating them.', weight: 25 }]);
quizBank.push(question9);

let question10 = new Question("If you found a bag of money or jewels, what would you do?", [{ A: 'Turn it in for the reward.', weight: 15 }, { B: 'Turn it in expecting nothing.', weight: 25 }, { C: 'Take it and not worry about the chump who lost it!', weight: 5 }, { D: 'Leave it because it is not worth the trouble it would bring.', weight: 20 }, { E: 'Take some and turn the rest in.', weight: 10 }]);
quizBank.push(question10);




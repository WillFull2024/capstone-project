$(() => { // This contains all of the page elements. By containing everthing in here, your page is allowed to load smoothly before any of the code is activated.

    $('#gameDiv').hide(); // this hides the div holding the buttons until needed
    $('.breadcrumb').hide().fadeIn(3500); // This contains the game start and instructions buttons
    $('#newGame').hide();  // Game start button
    $('#gameOver').hide(); // Game over notification

    // Instructions Modal, shows after the button is clicked
    $('#instructionsBtn').click(function () {
        $('#instructionsModal').modal();
    });

    // Variables for the questions and buttons. 
    let questionDiv = document.querySelector('#questionDiv');
    let button1 = document.querySelector('#answerBtnNum1');
    let button2 = document.querySelector('#answerBtnNum2');
    let button3 = document.querySelector('#answerBtnNum3');
    let button4 = document.querySelector('#answerBtnNum4');
    let button5 = document.querySelector('#answerBtnNum5');

    // Start game play on click. Hides the instructions and start game buttons. Starts the ask questions function.
    $('#playBtn').click(function () {
        $('.breadcrumb').hide();
        $('#gameDiv').show();
        $('#nextBtn').hide();
        askQuestion();
    });

    // When the game is complete, this function starts a new game when clicked and hides the previous games results.
    $('#newGame').click(function () {
        $('#superhero-info').hide();
        location.reload();
    });

    // Ask question function
    function askQuestion() {

        // Randomly selcts the qestions from quizBank array.
        let randomIndex = Math.floor(Math.random() * quizBank.length);

        // Declaring random question variable and where it retrieves the questions from.
        let randomQuestion = quizBank[randomIndex];

        // How the questions, buttons and answers actually appear on the page. As well as assigning the value(weight) to each answer. And at the bottom, removing the answered question from the array so it won't be asked again within the same game. 
        questionDiv.textContent = randomQuestion.questionText;
        button1.textContent = randomQuestion.answers[0].A;
        $('#answerBtnNum1').val(randomQuestion.answers[0].weight);
        button2.textContent = randomQuestion.answers[1].B;
        $('#answerBtnNum2').val(randomQuestion.answers[1].weight);
        button3.textContent = randomQuestion.answers[2].C;
        $('#answerBtnNum3').val(randomQuestion.answers[2].weight);
        button4.textContent = randomQuestion.answers[3].D;
        $('#answerBtnNum4').val(randomQuestion.answers[3].weight);
        button5.textContent = randomQuestion.answers[4].E;
        $('#answerBtnNum5').val(randomQuestion.answers[4].weight);
        quizBank.splice(randomIndex, 1);
    }

    // Declaring the weightScore starting number which is how the game is ultimately scored and decides which hero the player is. 
    let weightScore = 0;

    // This function allows the user to click the answer button they choose, then disables the ability to choose from that group and shows the Next button to move to the next question. Also, to add the weightScore properly and not concatenate them, the parseInt equation was added. 
    $('.choice').click(function () {
        $('.choice').prop('disabled', true);
        $('#nextBtn').show();
        weightScore = weightScore + parseInt($(this).val());
        console.log(weightScore);
    });

    // Declare results variable. This variable is the position of the superhero in the superHeroArray. 
    let results;

    // This function inserts images and controls into the carousel based on the result of the choices the player made during the game once all choices are complete. 
    function appendImages() {

        // Because on the 1st image needs to be active, the 1st image is added separtely from the other images.
        $('.carousel-inner').append(`<div class="carousel-item active text-center"><img id="carouselPic" class="img-fluid" ${superheroArray[results].images[0]} alt="${superheroArray[0].name}"/></div>`)

        // This for loop cycles through the images showing the resulting pictures on a continuous loop, including the 1st image. As well as controls.
        for (let i = 1; i < superheroArray[results].images.length; i++) {
            $('.carousel-inner').append(`<div class="carousel-item text-center "><img id="carouselPic" class="img-fluid" ${superheroArray[results].images[i]} alt="${superheroArray[i].name}"/></div><a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>`)
        }
    }

    // This button continues the quiz on clicking it. Until there are no questions remaining. 
    $('#nextBtn').click(function () {
        console.log(quizBank.length, "length")

        // Once the button is clicked, the next question with it's choices being enabled while the Next button is hidden until that choice is selected. 
        if (quizBank.length > 0) {
            askQuestion();
            $(this).hide();
            $('.choice').prop('disabled', false);

            // Once the game is completed, the game questions are hidded along with the background carousel. The the Game Over notification is displayed for 8 seconds.  
        } else {
            $('#gameDiv').hide();
            $('#backgroundCarousel').hide();
            $('#gameOver').show().fadeOut(8000);

            // This is the if statement that declares the score needed to select that superhero/villain. The result relays the position within the array that holds the pictures of that superhero/villain. It then displays the information in the HTML id and appends the images. 
            if (weightScore == 250) {
                results = 0;
                $('#superhero-info').append('<div><h2>You are Superman!!!</h2><p>You are the greatest superhero ever! You can leap tall buildings in a single bound, faster than a locomotive, etc.! You are the at the top of the list of moral character with power unmatched by any other! Pat yourself on the back for being the best!!</p></div>');
                appendImages();
            }
            else if (weightScore > 239 && weightScore < 250) {
                results = 1;
                $('#superhero-info').append('<div><h2>You are Wonder Woman!!</h2><p>You are an Amazon goddess! The foremost female in the Justice League! You have power that is matched by hardly any! Your only limitation seems to be your own knowledge of your abilities!</p></div>');
                appendImages();
            }
            else if (weightScore > 229 && weightScore < 236) {
                results = 2;
                $('#superhero-info').append('<div><h2>You are Captain America!!</h2><p>Mr. America! The greatest patriot of all time! Hand to hand combat you have too few rivals to mention. Possibly the greatest super soldier in Marvel, DC or any platform worth mentioning, you make kicking butt and bein the greatest boyscott easy!</p></div>');
                appendImages();
            }
            else if (weightScore == 215) {
                results = 3;
                $('#superhero-info').append('<div><h2>You are the Black Panther!!</h2><p>Your Highness! The king of Wakanda by day and an Avenger by night or day, whenever the Wakanda or theworld needs you. With tech that rivals or outdoes Iron Man, Batman or even some space civilizations! Wakanda Forever!!</p></div>');
                appendImages();
            }
            else if (weightScore == 200) {
                results = 4;
                $('#superhero-info').append('<div><h2>You are Storm!</h2><p>Your power and prowess are of legend. Your leadership within the X-men keep it running like a well oiled machine. Without your balance of love and firmness, the team would be sure to fall apart. Your control over the elements is of legend and rivals even that of Thor!</p></div>');
                appendImages();
            }
            else if (weightScore == 210) {
                results = 5;
                $('#superhero-info').append('<div><h2>You are Supergirl!</h2><p>Kara Zor-el! Powergirl, one of your other names is very accurate. Your powers rival that of your cousin. Some even say they exceed his! With power like that, no one wants to get in your way! You are far too good to let it go to your head though!</p></div>');
                appendImages();
            }
            else if (weightScore > 219 && weightScore < 226) {
                results = 6;
                $('#superhero-info').append('<div><h2>You are Iron Man!!</h2><p>Tony Stark! One of the top minds in the Marvel universe! Brilliant and rich! You could probably make a suit of armor out of a toaster, lawnmower and a pair of rubber gloves! Your armor and brilliance puts you on par with almost any hero or villain!</p></div>');
                appendImages();
            }
            else if (weightScore == 205) {
                results = 7;
                $('#superhero-info').append('<div><h2>You are Batman!!</h2><p>The greatest mind in DC,hands down! Even Superman has to take 2nd to you in this area! Villains fear you sometimes more than Superman! You can defeat anyone given prep time! Physically, you can hang with just about anyone, even the super powered! Your kung fu is just that damn good!! Dunnanananananananah, Batman!!</p></div>');
                appendImages();
            }
            else if (weightScore == 190) {
                results = 8;
                $('#superhero-info').append('<div><h2>You are Captain Marvel!!</h2><p>Ms. Marvel. Your power is of legend. You took a headbutt from Thanos and looked him in the eye like, was that it?! You are often described as the strongest Avenger for good reason. Even Thor or Hulk would have to take a long rest and eat some extra Wheaties to be able to get in the ring with you!</p></div>');
                appendImages();
            }
            else if (weightScore > 149 && weightScore < 156) {
                results = 9;
                $('#superhero-info').append('<div><h2>You are Black Widow!</h2><p>Natasha Romanoff,possibly the greatest spy ever! James Bond aint got nothin on you! You hang with the most powerful in the world on a regular without batting an eye! No shame in your game,you are about business and the mission so do not get in your way!</p></div>');
                appendImages();
            }
            else if (weightScore > 179 && weightScore < 186) {
                results = 10;
                $('#superhero-info').append('<div><h2>You are Batgirl!</h2><p>The 2nd to don the legendary cowl and cape, but make no mistake, you hold your own! Probably the top female vigilante of all time!! You have taken down the super powered, such as Supergirl, nearly killing her! Chip off the old cowl...</p></div>');
                appendImages();
            }
            else if (weightScore == 195) {
                results = 11;
                $('#superhero-info').append('<div><h2>You are Thor!!</h2><p>The God of Thunder! The Lord of Lightning! With Mjolnir or Stormbreaker there are not many of any kind that can stand against you! Truly you are the greatest of Asgard and could drink any other hero under the table! Odin!</p></div>');
                appendImages();
                $('#gameDiv').hide();
            }        
            else if (weightScore > 159 && weightScore < 166) {
                results = 12;
                $('#superhero-info').append('<div><h2>You are Scarlet Witch!!</h2><p>The limits of your power is unknown! When Hulk and Thor are missing, you come in to replace one of them as a HEAVY HITTER on the Avengers team! Big shoes to fill, but you do it without fail! Magic and a mutant! One dangerous combo!</p></div>');
                appendImages();
            }
            else if (weightScore > 169 && weightScore < 176) {
                results = 13;
                $('#superhero-info').append('<div><h2>You are Spider-Man!!</h2><p>One of the smartest and most capable of the superheroes! Nothings seems to be outside of your ability to solve and workout. You beat all kinds of enemies that are much stronger than you and still have time to go to school! You go Spidey!</p></div>');
                appendImages();
            }
            else if (weightScore > 119 && weightScore < 126) {
                results = 14;
                $('#superhero-info').append('<div><h2>You are Green Lantern!!</h2><p>The only limit you have is your own will! You are talked about at times as the most powerful hero in the DC universe because your will is your only limit. Oh and if your ring needs to be charged! I will take it! Sign me up!!</p></div>');
                appendImages();
            }
            else if (weightScore > 139 && weightScore < 146) {
                results = 15;
                $('#superhero-info').append('<div><h2>You are Catwoman!!</h2><p>The best cat burglar period. Even Batman has issue with stopping you! Bad or good, that depends on your mood that day... If I need something, I am calling you! I saw a nice watch Bill Gates was wearing, can you help me out with that?!</p></div>');
                appendImages();
            }
            else if (weightScore > 129 && weightScore < 139) {
                results = 16;
                $('#superhero-info').append('<div><h2>You are Raven!!</h2><p>Your dad is the demon Trigon. His mission is to use you to come and conquer Earth. You are at constant war with losing control of your emotions and bringing about the end. You are a 2 sided coin of darkness and light, a bad-ass empath that can do most what you want... Please, just keep your cool...</p></div>');
                appendImages();
            }
            else if (weightScore >101  && weightScore < 120) {
                results = 17;
                $('#superhero-info').append('<div><h2>You are The Hulk!!</h2><p>The strongest there is! The madder you get, the stronger you get! With the power to leap miles at a time and a constant growth in strength, you are one of the greatest heroes of all time! With the brilliance of Banner to add, who can beat the Hulk?!?!!</p></div>');
                appendImages();
            }
            else if (weightScore > 89 && weightScore < 101) {
                results = 18;
                $('#superhero-info').append('<div><h2>You are Thanos!!</h2><p>The Titan! Even gods fear you! You make everyone you meet kneel or shriek away in fear! Your goal to either find the Anti-Life equation or as a mercy eliminate half of all life in the universe for the betterment of all life. You truly are the bringer of mercy or is it terror... Thanos or Darkseid(Hard to tell apart at times...), neither would you want to be in the way of.</p></div>');
                appendImages();
            }
            else if (weightScore > 74 && weightScore < 86) {
                results = 19;
                $('#superhero-info').append('<div><h2>You are Harley Quinn!!</h2><p>One of the favs of the DC universe and thoroughly sadistic, Harleen Quinzel, is a maniac who is also a brilliant psychologist! Corrupted by the Joker and dropped in the same goo that made him more psychotic, you are almost as insane as him!... Almost!</p></div>');
                appendImages();
            }
            else if (weightScore > 49 && weightScore < 71) {
                results = 20;
                $('#superhero-info').append('<div><h2>You are The Joker!!</h2><p>Probably the most insane of any criminal in any universe, you are the thorn in the side of Batman. Each criminal venture more psychotic than the previous, you make Manson look normal. Master of mischief, you give Loki a run for his money. Maybe the greatest villain of all time! Definitely top 5!</p></div>');
                appendImages();
            }

            // Shows the New Game button and hides the game title.
            $('#newGame').fadeIn(3500);
            $('h1').hide();
        }
    })
});

//  If I had more time, I'd have liked to add a male/female or both selector for the superheroes so that if the player wanted to only get a male superhero or only a female superhero result, they'd be able to. Or as it is now, would be within their power. Also, I'd like to work on the results a little more to get a better result. Maybe spend a little more time working on the questions and answers to get a more controlled result. Also, some animation and a transition effect from the point of completion to showing the results. 


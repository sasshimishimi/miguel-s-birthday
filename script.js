
// ==================================
// GET HTML ELEMENTS
// ==================================

const startButton = document.getElementById("start-button");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");

const froakie = document.getElementById("froakie");
const treasureBox = document.getElementById("treasure-box");

const dialogueName = document.getElementById("dialogue-name");
const dialogueText = document.getElementById("dialogue-text");
const nextButton = document.getElementById("next-button");

const letterScreen = document.getElementById("letter-screen");
const letterText = document.getElementById("letter-text");
const evolveButton = document.getElementById("evolve-button");

const evolutionScreen = document.getElementById("evolution-screen");
const evolutionMessage = document.getElementById("evolution-message");
const evolutionCharacter = document.getElementById("evolution-character");
const evolutionTitle = document.getElementById("evolution-title");

const surpriseLink = document.getElementById("surprise-link");

// ==================================
// POKEMON SPRITES
// ==================================

const froakieSprite =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/656.png";

const greninjaSprite =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/658.png";


// ==================================
// START GAME
// ==================================

startButton.addEventListener("click", function() {

    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

});


// ==================================
// DIALOGUES AND FROAKIE MOVEMENT
// ==================================

let dialogueStep = 0;

function updateDialogue(name, message) {

    dialogueName.textContent = name;
    dialogueText.textContent = message;

}

nextButton.addEventListener("click", function() {

    // DIALOGUE 1: Froakie starts its adventure

    if (dialogueStep === 0) {

        dialogueStep = 1;

        updateDialogue(
            "FROAKIE",
            "Oh? What's that over there? I think I see something!"
        );

        // Froakie walks toward the treasure chest

        froakie.style.left = "65%";

        // Prevent clicking while Froakie is walking

        nextButton.disabled = true;
        nextButton.style.opacity = "0.5";

        setTimeout(function() {

            // Open the treasure chest

            treasureBox.classList.add("open");

            // Show the next dialogue

            dialogueStep = 2;

            updateDialogue(
                "FROAKIE",
                "Look! There's something inside! I think this is for you kasi birthaday mo na lol. haha tanda mo na bb ♡"
            );

            nextButton.disabled = false;
            nextButton.style.opacity = "1";

        }, 3000);

    }

    // DIALOGUE 2: Froakie discovers the surprise

    else if (dialogueStep === 2) {

        dialogueStep = 3;

        updateDialogue(
            "FROAKIE",
            "A special message just for someone special like you. Go ahead and read it!"
        );

    }

    // DIALOGUE 3: Open the birthday letter

    else if (dialogueStep === 3) {

        gameScreen.classList.add("hidden");
        letterScreen.classList.remove("hidden");

    }

});


// ==================================
// BIRTHDAY LETTER
// ==================================

letterText.innerHTML = `Happy Birthday, bb! ♡

Ever since my heart and mind lingered onto your presence, I couldn’t stop but to love and fall for you even more—every day. 

You’re the bestest person to ever come to my life and you made my existence whole despite how much burden I am carrying just to survive. 

I lived for you, migi. 

I love you for every little things you do to make me feel this way. I love you for who you are, for what you love, and for what you are living for. I love your family, how you love your friends, your faith, and your ways of making me part of your life — not just by being your women, but as somebody you actually wanna take care. 

Mahal kita.

In my every day, you are one of the people I looked forward to be with, to talk with, and to love wholly. Gusto ko pa malaman ang buong buhay mo, at sana kasama mo ako sa mga oras na ‘yon.

Mamahalin kita sa lahat ng paraan na kaya ko.

I think you deserved to read all of my thoughts throughout our relationship as a birthday gift. This is gonna be the first time that you’ll celebrate your birthday na “tayo” na. It’s funny how excited I am to write every thoughts I have about you even hindi pa tayo. Na kahit na madilim sa jeep pauwi, sinusulat ko na sa phone ko lahat ng naiisip ko tungkol sayo. Kahit bago ako matulog, isusulat ko lahat ng bagay na minahal ko sayo at kung ano ang nakita ko sayo. Doon ko ata na-realize na gustong gusto kita. Although, I may have uncertainties with our relationship, you stayed and loved me unconditionally. 

Those uncertainties i felt were the times when im losing myself and my faith in our relationship. But despite that, i chose to stay because i loved you more than i wanted to give up on us. 

Enjoy reading baby ko. Happy 21st birthday!

Thank you for being someone special.

Enjoy your day! You deserve it. ♡

Your Girlfriend,
Sas`;

// ==================================
// FROAKIE EVOLUTION
// ==================================

evolveButton.addEventListener("click", function() {

    // Hide the letter
    letterScreen.classList.add("hidden");

    // Show the evolution screen
    evolutionScreen.classList.remove("hidden");

    // Reset evolution screen
    evolutionCharacter.src = froakieSprite;

    evolutionMessage.textContent = "FROAKIE IS EVOLVING!";
    evolutionTitle.textContent = "...";

    // Hide surprise link until evolution is complete
    surpriseLink.classList.add("hidden");

    // Start flashing animation
    evolutionCharacter.classList.add("evolution-flash");

    // Wait for evolution animation
    setTimeout(function() {

        // Greninja appears!
        evolutionCharacter.src = greninjaSprite;

        evolutionCharacter.classList.remove("evolution-flash");

        evolutionMessage.textContent = "CONGRATULATIONS!";
        evolutionTitle.textContent = "GRENINJA!";

        // Reveal the Google Drive link
        surpriseLink.classList.remove("hidden");

    }, 2500);

});


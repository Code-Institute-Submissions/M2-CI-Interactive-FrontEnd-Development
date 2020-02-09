// new instance

class hPFun {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining') // set game to 60 seconds play
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
}

// start game

startGame() {
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.cardToCheck = null; // not allow clicking on card already face up
    this.matchedCards = []; // array to push matched cards
    this.busy = true; // not allowed clicking 
        
    setTimeout(() => {
        this.audioController.startMusic();
        this.shuffleCards(this.cardsArray);
        this.countdown = this.startCountdown();
        this.busy = false;
    }, 500)
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
}

startCountdown() {
    return setInterval(() => {
        this.timeRemaining--;
        this.timer.innerText = this.timeRemaining;
        if(this.timeRemaining === 0)
        this.gameOver();
    }, 1000);
}

gameOver() {
    clearInterval(this.countdown);
    this.audioController.gameOver();
    document.getElementById('game-over-text').classList.add('visible');
}

success() {
    clearInterval(this.countdown);
    this.audioController.success();
    document.getElementById('success-text').classList.add('visible');
}

hideCards() {
     this.cardsArray.forEach(card => {
        card.classList.remove('visible');
        card.classList.remove('matched');
    });
}

flipCard(card) {
    if(this.canFlipCard(card)) {
        this.audioController.flip();
        this.totalClicks++;
        this.ticker.innerText = this.totalClicks;
        card.classList.add('visible');

    if(this.cardToCheck) {
        this.checkForCardMatch(card);
    } else {
        this.cardToCheck = card;
    }
    }
}

checkForCardMatch(card) {
    if(this.getCardType(card) === this.getCardType(this.cardToCheck))
        this.cardMatch(card, this.cardToCheck);
    else 
        this.cardMismatch(card, this.cardToCheck);

        this.cardToCheck = null;
}

cardMatch(card1, card2) {
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);
    card1.classList.add('matched');
    card2.classList.add('matched');
    this.audioController.match();
        if(this.matchedCards.length === this.cardsArray.length)
        this.success();
}

cardMismatch(card1, card2) {
    this.busy = true;
    setTimeout(() => {
        card1.classList.remove('visible');
        card2.classList.remove('visible');
        this.busy = false;
    }, 1000);
}

// fisher-yates shuffle
    
shuffleCards(cardsArray) { 
    for (let i = cardsArray.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        cardsArray[randIndex].style.order = i;
        cardsArray[i].style.order = randIndex;
    }
}

getCardType(card) {
    return card.getElementsByClassName('card-value')[0].src;
}

canFlipCard(card) { // boolean
    return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
}
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

// arrays from the HTML collections

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay'));
    let cards = Array.from(document.getElementsByClassName('card'));
    
// new instance of hpFun

    let game = new hPFun(60, cards);

// lop and event listener

    overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
    overlay.classList.remove('visible');

// once overlay not visible (click) start game
    game.startGame();
    });
});

cards.forEach(card => {
    card.addEventListener('click', () => {
        game.flipCard(card);
    });
    });
}

//constructor for audio controls

class AudioController {
    constructor() {
        this.music = new Audio('./assets/audio/quiz.mp3');
        this.flipSound = new Audio('./assets/audio/wand.mp3');
        this.matchSound = new Audio('./assets/audio/magic.mp3');
        this.successSound = new Audio('./assets/audio/success.mp3');
        this.gameOverSound = new Audio('./assets/audio/gameover.mp3');
        this.music.volume = 0.2;
        this.gameOverSound.volume = 0.2;
        this.music.loop = true;
    }

startMusic() {
    this.music.play();
    setTimeout(() => {
        this.music.play()
    }, 3000);
}
    
stopMusic() {
    this.music.pause();
    this.music.currentTime = 0;
}

flip() {
    this.flipSound.play();
}

match() {
    this.matchSound.play();
}

success() {
    this.stopMusic();
    this.successSound.play();
}

gameOver() {
    this.stopMusic();
    this.gameOverSound.play();
    }
}

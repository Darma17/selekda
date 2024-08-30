document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play-button');
    const usernameInput = document.getElementById('username');
    const welcomeScreen = document.getElementById('welcome-screen');
    const gameScreen = document.getElementById('game-screen');
    const instructions = document.getElementById('instructions');
    const closeInstructionsButton = document.getElementById('close-instructions');
    const instructionsButton = document.getElementById('instructions-button');
    const countdown = document.getElementById('countdown');
    const pauseScreen = document.getElementById('pause-screen');
    const gameOverScreen = document.getElementById('game-over-screen');
    const resumeButton = document.getElementById('resume-button');
    const restartButton = document.getElementById('restart-button');
    const playerScoreElement = document.getElementById('player-score');
    const opponentScoreElement = document.getElementById('opponent-score');
    const timerElement = document.getElementById('timer');
    const player = document.getElementById('player');
    const opponent = document.getElementById('opponent');
    const ball = document.getElementById('ball');
    let gameInterval, aiInterval, isPaused = false;
    let playerScore = 0, opponentScore = 0;
    let timeLeft = 30;

    // Initialize hidden states for all popups
    instructions.style.display = 'none';
    pauseScreen.style.display = 'none';
    gameOverScreen.style.display = 'none';
    countdown.style.display = 'none';

    // Enable play button when username is entered
    usernameInput.addEventListener('input', () => {
        playButton.disabled = usernameInput.value.trim() === '';
    });

    // Start game logic
    playButton.addEventListener('click', () => {
        welcomeScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        startCountdown();
    });

    // Instructions logic
    instructionsButton.addEventListener('click', () => {
        instructions.style.display = 'block';
    });

    closeInstructionsButton.addEventListener('click', () => {
        instructions.style.display = 'none';
    });

    // Pause logic
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (!isPaused) {
                pauseGame();
            } else {
                resumeGame();
            }
        }
    });

    resumeButton.addEventListener('click', resumeGame);

    // Countdown before the game starts
    function startCountdown() {
        countdown.style.display = 'block';
        let count = 3;
        countdown.textContent = count;
        const countdownInterval = setInterval(() => {
            count--;
            if (count > 0) {
                countdown.textContent = count;
            } else {
                clearInterval(countdownInterval);
                countdown.style.display = 'none';
                startGame();
            }
        }, 1000);
    }

    // Game start logic
    function startGame() {
        gameInterval = setInterval(updateGame, 16); // ~60 fps
        aiInterval = setInterval(moveAI, 100);
        startTimer();
    }

    // Pause the game
    function pauseGame() {
        clearInterval(gameInterval);
        clearInterval(aiInterval);
        isPaused = true;
        pauseScreen.style.display = 'block';
    }

    // Resume the game
    function resumeGame() {
        startGame();
        isPaused = false;
        pauseScreen.style.display = 'none';
    }

    // Timer logic
    function startTimer() {
        const timerInterval = setInterval(() => {
            if (!isPaused) {
                timeLeft--;
                timerElement.textContent = timeLeft;

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    gameOver();
                }
            }
        }, 1000);
    }

    // Update game logic
    function updateGame() {
        // Implement player and ball movement logic here
        handlePlayerMovement();
        checkCollisions();
    }

    // Player movement logic
    function handlePlayerMovement() {
        document.addEventListener('keydown', (event) => {
            const key = event.key;

            if (key === 'a') {
                movePlayer(-5); // Move left
            } else if (key === 'd') {
                movePlayer(5);  // Move right
            } else if (key === 'w') {
                jumpPlayer();   // Jump
            } else if (key === ' ') {
                kickBall();     // Kick ball
            }
        });
    }

    function movePlayer(dx) {
        const currentLeft = parseInt(window.getComputedStyle(player).left);
        player.style.left = currentLeft + dx + 'px';
    }

    function jumpPlayer() {
        // Implement jump logic (e.g., vertical movement)
    }

    function kickBall() {
        // Implement ball kicking logic
    }

    // Check collisions
    function checkCollisions() {
        // Implement collision detection between player/opponent and ball
    }

    // AI movement logic
    function moveAI() {
        const aiPosition = opponent.offsetLeft;
        const ballPosition = ball.offsetLeft;

        if (ballPosition > aiPosition + 20) {
            opponent.style.left = aiPosition + 5 + 'px';
        } else if (ballPosition < aiPosition - 20) {
            opponent.style.left = aiPosition - 5 + 'px';
        }
    }

    // Game over logic
    function gameOver() {
        clearInterval(gameInterval);
        clearInterval(aiInterval);
        gameOverScreen.style.display = 'block';
        document.getElementById('final-score').textContent = `${playerScore} - ${opponentScore}`;
    }

    // Restart game
    restartButton.addEventListener('click', () => {
        window.location.reload();
    });
});

import React, { useEffect, useRef, useState } from 'react';

const JumpingGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const gameLoopRef = useRef<number>();
  const playerRef = useRef({
    y: 0,
    velocity: 0,
    isJumping: false
  });
  const obstaclesRef = useRef<{ x: number; width: number; height: number }[]>([]);

  const initGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    playerRef.current = {
      y: canvas.height - 50,
      velocity: 0,
      isJumping: false
    };
    obstaclesRef.current = [];
    setScore(0);
    setGameOver(false);
  };

  const startGame = () => {
    if (!gameStarted) {
      setGameStarted(true);
      initGame();
      gameLoop();
    }
  };

  const resetGame = () => {
    initGame();
    setGameStarted(true);
    gameLoop();
  };

  const handleClick = () => {
    if (gameOver) {
      resetGame();
    } else if (!playerRef.current.isJumping && gameStarted) {
      playerRef.current.velocity = -12;
      playerRef.current.isJumping = true;
    } else if (!gameStarted) {
      startGame();
    }
  };

  const gameLoop = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw ground
    ctx.fillStyle = 'rgba(124, 58, 237, 0.2)';
    ctx.fillRect(0, canvas.height - 20, canvas.width, 20);

    // Update player
    playerRef.current.velocity += 0.6;
    playerRef.current.y += playerRef.current.velocity;

    if (playerRef.current.y > canvas.height - 50) {
      playerRef.current.y = canvas.height - 50;
      playerRef.current.velocity = 0;
      playerRef.current.isJumping = false;
    }

    // Draw player
    ctx.fillStyle = 'rgb(124, 58, 237)';
    ctx.fillRect(50, playerRef.current.y, 30, 30);

    // Update obstacles
    if (gameStarted && !gameOver) {
      if (Math.random() < 0.02) {
        obstaclesRef.current.push({
          x: canvas.width,
          width: 20,
          height: 40 + Math.random() * 20
        });
      }

      for (let i = obstaclesRef.current.length - 1; i >= 0; i--) {
        const obstacle = obstaclesRef.current[i];
        obstacle.x -= 5;

        // Draw obstacle
        ctx.fillStyle = 'rgb(124, 58, 237)';
        ctx.fillRect(
          obstacle.x,
          canvas.height - obstacle.height,
          obstacle.width,
          obstacle.height
        );

        // Collision detection
        if (
          50 < obstacle.x + obstacle.width &&
          50 + 30 > obstacle.x &&
          playerRef.current.y + 30 > canvas.height - obstacle.height
        ) {
          setGameOver(true);
          setGameStarted(false);
          return;
        }

        // Remove off-screen obstacles and update score
        if (obstacle.x < -obstacle.width) {
          obstaclesRef.current.splice(i, 1);
          setScore(prev => prev + 1);
        }
      }
    }

    gameLoopRef.current = requestAnimationFrame(gameLoop);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.addEventListener('click', handleClick);
    
    // Draw initial state
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(124, 58, 237, 0.2)';
      ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
      ctx.fillStyle = 'rgb(124, 58, 237)';
      ctx.fillRect(50, canvas.height - 50, 30, 30);
    }

    return () => {
      canvas.removeEventListener('click', handleClick);
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, []);

  return (
    <div className="relative max-w-lg mx-auto">
      <canvas
        ref={canvasRef}
        width={400}
        height={200}
        className="w-full bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border cursor-pointer"
      />
      <div className="absolute top-4 left-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
        Score: {score}
      </div>
      {!gameStarted && !gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
          <button
            onClick={startGame}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium"
          >
            Start Game
          </button>
        </div>
      )}
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
          <div className="text-center bg-light-card dark:bg-dark-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Game Over!</h3>
            <p className="mb-4">Final Score: {score}</p>
            <button
              onClick={resetGame}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JumpingGame;
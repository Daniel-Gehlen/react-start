import "./GameOverWords.css";

const GameOverWords = ({ retry, score }) => {
  return (
    <div className="gameover_words">
      <h1>End of the game!</h1>
      <h2>
      Your score was: <span>{score}</span>!
      </h2>
      <button onClick={retry}>Restart</button>
    </div>
  );
};

export default GameOverWords;
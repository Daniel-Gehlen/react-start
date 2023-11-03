import "./StartScreenWords.css";

const GameStartWords = ({ startGameWords }) => {
  return (
    <div className="start_words">
      <h1>Secret Word</h1>
      <p>Click the button below to start playing.</p>
      <button onClick={startGameWords}>Start game</button>
    </div>
  );
};

export default GameStartWords;
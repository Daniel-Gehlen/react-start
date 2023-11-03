import { useState, useRef } from "react";

// styles
import "./GameWords.css";

const GameWords = ({
  verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");

    letterInputRef.current.focus();
  };

  return (
    <div className="game_words">
      <p className="points">
        <span>Punctuation</span>: {score}
      </p>
      <h1>Guess the word:</h1>
      <h3 className="tip">
      Word tip: <span>{pickedCategory}</span>
      </h3>
      <p>You still have {guesses} try(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span className="letter" key={i}>
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Try to guess one letter of the word:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            onChange={(e) => setLetter(e.target.value)}
            required
            value={letter}
            ref={letterInputRef}
          />
          <button>To play!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letters already used:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};

export default GameWords
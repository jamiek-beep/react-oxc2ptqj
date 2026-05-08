import React, { useEffect, useMemo, useState } from "react";
import bryanPhoto from "./Bryan.jpg";

const BRYAN_PHOTO_URL = bryanPhoto;

const WORDS = [
  "apple", "banana", "orange", "grape", "strawberry", "watermelon", "pineapple",
  "peach", "pear", "carrot", "potato", "tomato", "onion", "broccoli", "corn",
  "rice", "bread", "pizza", "hamburger", "hotdog", "taco", "sandwich", "cookie",
  "cake", "donut", "candy", "milk", "water", "juice", "soda", "coffee", "tea",
  "chicken", "egg", "cheese", "salad", "soup", "cereal", "pancake", "popcorn",
  "horse", "dog", "cat", "rabbit", "fish", "bird", "cow", "pig", "duck", "goat",
  "elephant", "lion", "tiger", "monkey", "zebra", "bear", "giraffe", "bus",
  "car", "bike", "train", "airplane", "boat", "truck", "van", "taxi", "subway",
  "scooter", "motorcycle", "school", "home", "park", "church", "library",
  "restaurant", "hospital", "zoo", "museum", "beach", "bathroom", "kitchen",
  "bedroom", "playground", "doctor", "dentist", "store", "mall", "camping",
  "fishing", "hiking", "shopping", "shirt", "pants", "socks", "shoes", "hat",
  "jacket", "shorts", "glasses", "boots", "gloves", "scarf", "belt", "watch",
  "helmet", "hoodie", "Walmart", "Target", "Lowes", "Ross", "TJ Maxx", "HEB",
  "Costco", "Walgreens", "CVS", "McDonalds", "Burger King", "Starbucks",
  "Home Depot", "Dollar Tree", "Dollar General", "Olive Garden", "Don Pedro",
  "Bryan", "mom", "dad", "baby", "friend", "teacher", "student", "computer",
  "phone", "television", "window", "door", "table", "chair", "pillow", "blanket",
  "toothbrush", "toothpaste", "soap", "shampoo", "backpack", "notebook",
  "pencil", "marker", "scissors", "basketball", "soccer", "football",
  "baseball", "tennis", "swimming", "music", "movie", "YouTube", "tablet",
  "keyboard", "mouse",
];

const VERBS = [
  { sentence: "I _ apple", answer: "eat" },
  { sentence: "I _ pizza", answer: "eat" },
  { sentence: "I _ rice", answer: "eat" },
  { sentence: "I _ noodles", answer: "eat" },
  { sentence: "I _ bread", answer: "eat" },
  { sentence: "I _ soup", answer: "eat" },
  { sentence: "I _ banana", answer: "eat" },
  { sentence: "I _ strawberry", answer: "eat" },
  { sentence: "I _ chicken", answer: "eat" },
  { sentence: "I _ cookie", answer: "eat" },
  { sentence: "I _ cake", answer: "eat" },
  { sentence: "I _ candy", answer: "eat" },
  { sentence: "I _ hamburger", answer: "eat" },
  { sentence: "I _ hotdog", answer: "eat" },
  { sentence: "I _ taco", answer: "eat" },
  { sentence: "I _ salad", answer: "eat" },
  { sentence: "I _ cheese", answer: "eat" },
  { sentence: "I _ egg", answer: "eat" },
  { sentence: "I _ carrot", answer: "eat" },
  { sentence: "I _ watermelon", answer: "eat" },
  { sentence: "I _ cereal", answer: "eat" },
  { sentence: "I _ pancake", answer: "eat" },
  { sentence: "I _ donut", answer: "eat" },
  { sentence: "I _ popcorn", answer: "eat" },
  { sentence: "I _ sandwich", answer: "eat" },

  { sentence: "I _ milk", answer: "drink" },
  { sentence: "I _ water", answer: "drink" },
  { sentence: "I _ juice", answer: "drink" },
  { sentence: "I _ soda", answer: "drink" },
  { sentence: "I _ coffee", answer: "drink" },
  { sentence: "I _ tea", answer: "drink" },
  { sentence: "I _ lemonade", answer: "drink" },
  { sentence: "I _ smoothie", answer: "drink" },
  { sentence: "I _ orange juice", answer: "drink" },
  { sentence: "I _ chocolate milk", answer: "drink" },
  { sentence: "I _ apple juice", answer: "drink" },
  { sentence: "I _ grape juice", answer: "drink" },
  { sentence: "I _ coconut water", answer: "drink" },
  { sentence: "I _ hot chocolate", answer: "drink" },
  { sentence: "I _ yogurt drink", answer: "drink" },
  { sentence: "I _ bubble tea", answer: "drink" },
  { sentence: "I _ iced tea", answer: "drink" },
  { sentence: "I _ protein shake", answer: "drink" },
  { sentence: "I _ strawberry milk", answer: "drink" },
  { sentence: "I _ mango juice", answer: "drink" },

  { sentence: "I _ socks", answer: "wear" },
  { sentence: "I _ pants", answer: "wear" },
  { sentence: "I _ shoes", answer: "wear" },
  { sentence: "I _ hat", answer: "wear" },
  { sentence: "I _ jacket", answer: "wear" },
  { sentence: "I _ shirt", answer: "wear" },
  { sentence: "I _ shorts", answer: "wear" },
  { sentence: "I _ glasses", answer: "wear" },
  { sentence: "I _ pajamas", answer: "wear" },
  { sentence: "I _ boots", answer: "wear" },
  { sentence: "I _ gloves", answer: "wear" },
  { sentence: "I _ scarf", answer: "wear" },
  { sentence: "I _ backpack", answer: "wear" },
  { sentence: "I _ watch", answer: "wear" },
  { sentence: "I _ helmet", answer: "wear" },

  { sentence: "I _ bus", answer: "ride" },
  { sentence: "I _ bike", answer: "ride" },
  { sentence: "I _ horse", answer: "ride" },
  { sentence: "I _ train", answer: "ride" },
  { sentence: "I _ scooter", answer: "ride" },
  { sentence: "I _ skateboard", answer: "ride" },
  { sentence: "I _ subway", answer: "ride" },
  { sentence: "I _ motorcycle", answer: "ride" },
  { sentence: "I _ airplane", answer: "ride" },
  { sentence: "I _ taxi", answer: "ride" },
  { sentence: "I _ boat", answer: "ride" },
  { sentence: "I _ truck", answer: "ride" },

  { sentence: "I _ Walmart", answer: "go" },
  { sentence: "I _ Target", answer: "go" },
  { sentence: "I _ Lowes", answer: "go" },
  { sentence: "I _ Dollar General", answer: "go" },
  { sentence: "I _ Dollar Tree", answer: "go" },
  { sentence: "I _ HEB", answer: "go" },
  { sentence: "I _ Ross", answer: "go" },
  { sentence: "I _ TJ Maxx", answer: "go" },
  { sentence: "I _ Olive Garden", answer: "go" },
  { sentence: "I _ Don Pedro", answer: "go" },
  { sentence: "I _ Costco", answer: "go" },
  { sentence: "I _ Home Depot", answer: "go" },
  { sentence: "I _ McDonalds", answer: "go" },
  { sentence: "I _ Burger King", answer: "go" },
  { sentence: "I _ Starbucks", answer: "go" },
  { sentence: "I _ Walgreens", answer: "go" },
  { sentence: "I _ CVS", answer: "go" },
  { sentence: "I _ bathroom", answer: "go" },
  { sentence: "I _ school", answer: "go" },
  { sentence: "I _ church", answer: "go" },
  { sentence: "I _ park", answer: "go" },
  { sentence: "I _ zoo", answer: "go" },
  { sentence: "I _ library", answer: "go" },
  { sentence: "I _ restaurant", answer: "go" },
  { sentence: "I _ beach", answer: "go" },
];

const LETTER_WORDS = WORDS.filter((word) => /^[A-Za-z]+$/.test(word) && word.length >= 3);

function speak(text) {
  if (!text || typeof window === "undefined" || !("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}

function pickRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function makeLetterQuestion() {
  const word = pickRandomItem(LETTER_WORDS).toLowerCase();
  const possibleIndexes = [];

  for (let i = 1; i < word.length - 1; i += 1) {
    possibleIndexes.push(i);
  }

  const missingIndex = pickRandomItem(possibleIndexes);

  return {
    word,
    missingIndex,
    answer: word[missingIndex],
  };
}

function makeFullSentence(question) {
  return question.sentence.replace("_", question.answer);
}

function Button({ children, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "10px 12px",
        borderRadius: 14,
        border: active ? "3px solid #2563eb" : "2px solid #bfdbfe",
        background: active ? "#dbeafe" : "white",
        color: "#111827",
        fontSize: 18,
        fontWeight: 800,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function BryanPhoto({ small }) {
  return (
    <img
      src={BRYAN_PHOTO_URL}
      alt="Bryan"
      style={small ? styles.smallBryanPhoto : styles.photo}
    />
  );
}

function BryanTyping() {
  const [text, setText] = useState("");
  const [spokenText, setSpokenText] = useState("");

  const words = spokenText.trim() ? spokenText.trim().split(/\s+/) : [];
  const hasIWord = words.some((word) => word.toLowerCase() === "i");

  function handleSubmit(event) {
    event.preventDefault();

    const value = text.trim();

    if (!value) {
      setSpokenText("");
      return;
    }

    setSpokenText(value);
    speak(value);
  }

  return (
    <section style={styles.card}>
      <h2 style={styles.title}>Bryan Typing</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="I go home"
          autoComplete="off"
          style={styles.input}
        />
      </form>

      <div style={styles.sentencePreviewBox}>
        {words.map((word, index) =>
          word.toLowerCase() === "i" ? (
            <BryanPhoto key={`${word}-${index}`} small />
          ) : (
            <span key={`${word}-${index}`} style={styles.previewWord}>
              {word}
            </span>
          )
        )}
      </div>

      <div style={styles.photoBox}>{hasIWord ? <BryanPhoto /> : null}</div>
    </section>
  );
}

function LetterGame() {
  const [question, setQuestion] = useState(() => makeLetterQuestion());
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setAnswer("");
    setMessage("");
    speak(question.word);
  }, [question]);

  function nextQuestion() {
    setQuestion(makeLetterQuestion());
  }

  function checkAnswer(event) {
    event.preventDefault();

    const value = answer.trim().toLowerCase();

    if (value === question.answer) {
      setMessage("Good job");
      speak("Good job");
      setTimeout(nextQuestion, 900);
    } else {
      setMessage("Try again");
      speak("Try again");
      setAnswer("");
    }
  }

  return (
    <section style={styles.card}>
      <h2 style={styles.title}>Letter Game</h2>

      <div style={styles.wordRow}>
        {question.word.split("").map((letter, index) => {
          const isMissing = index === question.missingIndex;

          return (
            <span key={`${letter}-${index}`} style={styles.letterBox}>
              {isMissing ? answer.slice(0, 1).toLowerCase() || "_" : letter}
            </span>
          );
        })}
      </div>

      <form onSubmit={checkAnswer}>
        <input
          value={answer}
          onChange={(event) => setAnswer(event.target.value.slice(0, 1))}
          placeholder=""
          autoComplete="off"
          autoFocus
          style={styles.answerInput}
        />
      </form>

      <p style={styles.message}>{message}</p>
    </section>
  );
}

function VerbGame() {
  const [question, setQuestion] = useState(() => pickRandomItem(VERBS));
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [locked, setLocked] = useState(false);

  const sentenceParts = question.sentence.split("_");

  function nextQuestion() {
    setQuestion(pickRandomItem(VERBS));
    setAnswer("");
    setMessage("");
    setLocked(false);
  }

  function checkAnswer(event) {
    event.preventDefault();

    if (locked) return;

    const value = answer.trim().toLowerCase();

    if (value === question.answer) {
      const fullSentence = makeFullSentence(question);

      setLocked(true);
      setMessage("Good job");
      speak("Good job");

      setTimeout(() => {
        speak(fullSentence);
      }, 700);

      setTimeout(nextQuestion, 2500);
    } else {
      setMessage("Try again");
      speak("Try again");
      setAnswer("");
    }
  }

  return (
    <section style={styles.card}>
      <h2 style={styles.title}>Verb Game</h2>

      <form onSubmit={checkAnswer}>
        <div style={styles.verbSentenceRow}>
          <span style={styles.verbWord}>{sentenceParts[0].trim()}</span>

          <input
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            disabled={locked}
            placeholder=""
            autoComplete="off"
            autoFocus
            style={styles.verbInput}
          />

          <span style={styles.verbWord}>{sentenceParts[1].trim()}</span>
        </div>
      </form>

      <p style={styles.message}>{message}</p>
    </section>
  );
}

export default function BryanApp() {
  const [screen, setScreen] = useState("typing");

  const currentGame = useMemo(() => {
    if (screen === "letter") return <LetterGame />;
    if (screen === "verb") return <VerbGame />;
    return <BryanTyping />;
  }, [screen]);

  return (
    <main style={styles.app}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Bryan Learning App</h1>

        <nav style={styles.nav}>
          <Button active={screen === "typing"} onClick={() => setScreen("typing")}>
            Bryan Typing
          </Button>
          <Button active={screen === "letter"} onClick={() => setScreen("letter")}>
            Letter Game
          </Button>
          <Button active={screen === "verb"} onClick={() => setScreen("verb")}>
            Verb Game
          </Button>
        </nav>

        {currentGame}
      </div>
    </main>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "#eff6ff",
    padding: 10,
    fontFamily: "Arial, sans-serif",
    color: "#111827",
  },
  container: {
    maxWidth: 420,
    margin: "0 auto",
  },
  heading: {
    fontSize: 34,
    textAlign: "center",
    margin: "8px 0 14px",
    lineHeight: 1.05,
  },
  nav: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 14,
  },
  card: {
    background: "white",
    borderRadius: 22,
    padding: 18,
    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.12)",
    border: "2px solid #bfdbfe",
  },
  title: {
    fontSize: 28,
    marginTop: 0,
    marginBottom: 14,
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    fontSize: 24,
    padding: "13px 14px",
    borderRadius: 16,
    border: "2px solid #93c5fd",
    outline: "none",
  },
  answerInput: {
    width: "100%",
    boxSizing: "border-box",
    fontSize: 28,
    fontWeight: 800,
    padding: "10px 14px",
    borderRadius: 16,
    border: "2px solid #93c5fd",
    outline: "none",
    textAlign: "center",
  },
  sentencePreviewBox: {
    minHeight: 74,
    marginTop: 16,
    padding: 12,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
    borderRadius: 18,
    background: "#f8fafc",
    border: "2px dashed #cbd5e1",
  },
  previewWord: {
    fontSize: 25,
    fontWeight: 800,
    padding: "7px 10px",
    borderRadius: 13,
    background: "white",
    border: "2px solid #bfdbfe",
  },
  smallBryanPhoto: {
    width: 76,
    height: 56,
    borderRadius: 13,
    objectFit: "cover",
    border: "3px solid #2563eb",
    background: "white",
  },
  photoBox: {
    height: 220,
    marginTop: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    background: "#f8fafc",
    border: "2px dashed #cbd5e1",
  },
  photo: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 18,
    objectFit: "contain",
  },
  wordRow: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    margin: "8px 0 16px",
    width: "100%",
  },
  letterBox: {
    width: 30,
    height: 38,
    minWidth: 30,
    borderRadius: 10,
    border: "2px solid #60a5fa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 21,
    fontWeight: 800,
    background: "#f8fafc",
    boxSizing: "border-box",
  },
  verbSentenceRow: {
    display: "grid",
    gridTemplateColumns: "auto 86px minmax(0, 1fr)",
    alignItems: "center",
    gap: 7,
    width: "100%",
    marginTop: 8,
  },
  verbWord: {
    fontSize: 24,
    fontWeight: 800,
    lineHeight: 1.1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  verbInput: {
    width: 86,
    height: 50,
    fontSize: 25,
    fontWeight: 800,
    padding: "0 8px",
    borderRadius: 14,
    border: "3px solid #60a5fa",
    textAlign: "center",
    outline: "none",
    boxSizing: "border-box",
  },
  message: {
    minHeight: 34,
    margin: "16px 0 0",
    fontSize: 27,
    fontWeight: 900,
    color: "#1d4ed8",
  },
};
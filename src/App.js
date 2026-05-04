import React, { useEffect, useState } from "react";

function speak(text) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.8;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

const API_KEY = "jJ66RGLNdmuMYMSrTLLdiQ8W4GB4Zskpn7Ohf2RjmCMD0cDixdfvXivr";

export default function App() {
  const [text, setText] = useState("I ride horse");
  const [images, setImages] = useState({});

  useEffect(() => {
    const words = text
      .split(" ")
      .filter((w) => w.trim() !== "" && w.toLowerCase() !== "i");

      words.forEach(async (word) => {
        if (images[word]) return;
      
        let query = word.toLowerCase();
      
        if (query === "go") query = "person walking";
        if (query === "ride") query = "child riding horse";
        if (query === "run") query = "person running";
        if (query === "eat") query = "person eating food";
        if (query === "wear") query = "person wearing clothes";
        if (query === "drink") query = "person drinking water";
        if (query === "sleep") query = "person sleeping";
        if (query === "wash") query = "person washing hands";
        if (query === "read") query = "child reading book";
        if (query === "write") query = "child writing";
        if (query === "lowes") query = "lowes logo";
if (query === "walmart") query = "walmart logo";
if (query === "target") query = "target logo";
if (query === "dollar") query = "dollar general logo";
if (query === "costco") query = "costco logo";
if (query === "amazon") query = "amazon logo";
        try {
        const res = await fetch(
          `https://api.pexels.com/v1/search?query=${query}&per_page=1`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );

        const data = await res.json();

        if (data.photos && data.photos.length > 0) {
          setImages((prev) => ({
            ...prev,
            [word]: data.photos[0].src.medium,
          }));
        }
      } catch (e) {
        console.error(e);
      }
    });
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Bryan Visual Words App</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          fontSize: 24,
          width: "100%",
          padding: 10,
        }}
      />

      <button
        onClick={() => speak(text)}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: 10,
          marginTop: 10,
        }}
      >
        Speak
      </button>

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        {text.split(" ").map((word, i) => (
          <div key={i}>
            <img
              src={
                word.toLowerCase() === "i"
                  ? "https://i.imgur.com/4T7emz9.jpeg"
                  : images[word]
              }
              alt=""
              width={120}
              height={100}
            />
            <div>{word}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
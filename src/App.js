import React, { useState } from "react";

function App() {

  const [selectedTheme, setSelectedTheme] = useState("Santa");
const [selectedEmoji, setSelectedEmoji] = useState("🎅");
const christmasThemes = {
  Santa: ["🎅", "🤶", "🛷", "🍪", "🎁"],
  Tree: ["🎄", "⭐", "🔔", "🎀", "❄️"],
  Gift: ["🎁", "🎉", "✨", "❤️", "🎊"],
  Reindeer: ["🦌", "❄️", "🌟", "🎄", "🎅"],
};
const buttonStyle = {
  background: "rgba(255,255,255,0.08)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.15)",
  padding: "12px 22px",
  borderRadius: "15px",
  cursor: "pointer",
  backdropFilter: "blur(10px)",
  fontSize: "16px",
};
 

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #06130A, #0F3D2E, #7F1D1D)",
        color: "white",
        textAlign: "center",
        paddingTop: "60px",
      }}
    >
    

      {/* Header Emojis */}
      <div
        style={{
          fontSize: "60px",
          marginBottom: "20px",
        }}
      >
        🎅 🎄 ⭐
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: "55px",
          color: "#FACC15",
          textShadow:
            "0 0 15px #FACC15, 0 0 30px #FACC15",
          marginBottom: "10px",
        }}
      >
        Christmas Blessing Creator
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "20px",
          color: "#e2e8f0",
        }}
      >
        Create and share beautiful Christmas cards 🎁
      </p>

     <div
  style={{
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  }}
><button
  onClick={() => setSelectedTheme("Santa")}
  style={buttonStyle}
>
  🎅 Santa
</button>

<button
  onClick={() => setSelectedTheme("Tree")}
  style={buttonStyle}
>
  🎄 Tree
</button>

<button
  onClick={() => setSelectedTheme("Gift")}
  style={buttonStyle}
>
  🎁 Gift
</button>

<button
  onClick={() => setSelectedTheme("Reindeer")}
  style={buttonStyle}
>
  🦌 Reindeer


</button>

</div>
<div
  style={{
    marginTop: "40px",
    width: "80%",
    maxWidth: "900px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "30px",
    borderRadius: "30px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(255,255,255,0.15)",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  }}

>
  {christmasThemes[selectedTheme].map(
    (emoji, index) => (
      <button
        key={index}
        onClick={() =>
          setSelectedEmoji(emoji)
        }
        style={{
          width: "70px",
          height: "70px",
          fontSize: "35px",
          borderRadius: "20px",
          border:
            selectedEmoji === emoji
              ? "2px solid #FACC15"
              : "1px solid rgba(255,255,255,0.15)",
          background:
            selectedEmoji === emoji
              ? "#FACC15"
              : "rgba(255,255,255,0.08)",
          cursor: "pointer",
        }}
      >
        {emoji}
      </button>
    )
  )}
</div>

<h2
  style={{
    marginTop: "25px",
    fontSize: "50px",
  }}
>
  {selectedEmoji}
</h2>
</div>

    
  );
}

export default App;
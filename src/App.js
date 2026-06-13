import React, { useState } from "react";
import html2canvas from "html2canvas";

function App() {
  const [selectedTheme, setSelectedTheme] = useState("Santa");
  const [selectedEmoji, setSelectedEmoji] = useState("🎅");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showCard, setShowCard] = useState(false);

  const saveCard = () => {
  if (!name.trim()) {
    alert("Please enter your name 🎅");
    return;
  }

  if (!message.trim()) {
    alert("Please enter your Christmas blessing 🎄");
    return;
  }

  setShowCard(true);
};

  const christmasThemes = {
    Santa: ["🎅", "🤶", "🛷", "🍪", "🎁"],
    Tree: ["🎄", "⭐", "🔔", "🎀", "❄️"],
    Gift: ["🎁", "🎉", "✨", "❤️", "🎊"],
    Reindeer: ["🦌", "❄️", "🌟", "🎄", "🎅"],
  };

 const buttonStyle = {
  background: "rgba(255,255,255,0.08)",
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.15)",
  padding: "12px 22px",
  borderRadius: "15px",
  cursor: "pointer",
  backdropFilter: "blur(10px)",
  fontSize: "16px",
  fontWeight: "600",
};
const downloadCard = () => {
  const card = document.getElementById("card-preview");

  html2canvas(card).then((canvas) => {
    const link = document.createElement("a");
    link.download = `ChristmasCard-${name || "Guest"}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
};
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #06130A, #0F3D2E, #7F1D1D)",
        color: "white",
        textAlign: "center",
        paddingTop: "60px",
      }}
    >
      {/* Header */}
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

      <p
  style={{
    fontSize: "24px",
    color: "#FACC15",
    fontWeight: "bold",
    marginTop: "20px",
    textShadow: "0 0 10px #FACC15",
  }}
>
  ✨ Select Your Card Theme ✨
</p>

      {/* Theme Buttons */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <button
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

      {/* Emoji Selection Box */}
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
      ><div
  style={{
    width: "100%",
    textAlign: "center",
    marginBottom: "20px",
    color: "#FACC15",
    fontSize: "22px",
    fontWeight: "bold",
  }}
>
  ✨ Select an Emoji for Your Christmas Card ✨
</div>
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

      {/* Blessing Form */}
      <div
        style={{
          marginTop: "30px",
          width: "80%",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "35px",
          borderRadius: "30px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <h2
          style={{
            color: "#FACC15",
            marginBottom: "25px",
          }}
        >
          Create Your Blessing ✨
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={{
            width: "80%",
            maxWidth: "500px",
            padding: "15px",
            borderRadius: "15px",
            border: "none",
            marginBottom: "20px",
            fontFamily: "'Poppins', sans-serif",
fontSize: "18px",
          }}
        />

        

        <textarea
          placeholder="Write your Christmas blessing..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          rows="5"
          style={{
            width: "80%",
            maxWidth: "600px",
            padding: "15px",
            borderRadius: "15px",
            border: "none",
            marginBottom: "20px",
            fontFamily: "'Poppins', sans-serif",
fontSize: "18px",
          }}
        />
        <br />

       <button
  onClick={saveCard}
  style={{
    marginTop: "25px",
    background: "#FACC15",
    color: "#111",
    border: "none",
    padding: "15px 30px",
    borderRadius: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "18px",
  }}
>
  Generate Card 🎄
</button>

{showCard && (
  <>
    <div
      id="card-preview"
      style={{
        marginTop: "40px",
        maxWidth: "650px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "50px",
        borderRadius: "30px",
        background:
          "linear-gradient(135deg,#fff7ed,#fef3c7,#fde68a)",
        boxShadow:
          "0 25px 60px rgba(0,0,0,0.18)",
        border: "none",
        color: "#1e293b",
      }}
    >
      <div
        style={{
          fontSize: "170px",
          marginBottom: "20px",
        }}
      >
        {selectedEmoji}
      </div>

      <h2
        style={{
          color: "#DC2626",
          fontSize: "52px",
          marginBottom: "20px",
          fontWeight: "800",
          textShadow:
            "0 4px 10px rgba(220,38,38,0.2)",
        }}
      >
        Merry Christmas ✨
      </h2>

      <p
        style={{
          fontSize: "24px",
          lineHeight: "1.8",
          color: "#334155",
          fontStyle: "italic",
        }}
      >
        "{message}"
      </p>

      <h3
        style={{
          color: "#0F3D2E",
          fontSize: "28px",
          marginTop: "25px",
        }}
      >
        — {name}
      </h3>

      <p
        style={{
          color: "#DC2626",
          fontSize: "20px",
          fontWeight: "bold",
          marginTop: "15px",
          letterSpacing: "2px",
        }}
      >
        ✨ Peace • Joy • Love ✨
      </p>
    </div>

    <button
      onClick={downloadCard}
      style={{
        marginTop: "25px",
        background:
          "linear-gradient(135deg,#FACC15,#FDE68A)",
        color: "#111827",
        border: "none",
        padding: "16px 40px",
        borderRadius: "50px",
        fontSize: "18px",
        fontWeight: "700",
        cursor: "pointer",
        boxShadow:
          "0 8px 20px rgba(250,204,21,0.35)",
      }}
    >
      Download Card ⬇️
    </button>
  </>
)}

      </div>


<footer
  style={{
    marginTop: "80px",
    padding: "30px",
    textAlign: "center",
    color: "#d1d5db",
  }}
>
  <div
    style={{
      color: "#FACC15",
      fontSize: "20px",
      marginBottom: "15px",
    }}
  >
    ━━━━━━━━━━ 🎄 ━━━━━━━━━━
  </div>

  <p
    style={{
      fontSize: "18px",
      marginBottom: "10px",
    }}
  >
    ✨ Merry Christmas & Happy New Year ✨
  </p>

  <p
    style={{
      fontSize: "14px",
      opacity: 0.8,
    }}
  >
    © 2026 Isumi Kumarasinghe. All Rights Reserved.
  </p>
</footer>


    </div>
  );
}

export default App;
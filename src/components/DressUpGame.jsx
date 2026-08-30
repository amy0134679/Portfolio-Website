import { useState } from "react";
import "./DressUpGame.css";

const BACKGROUND_COLORS = [
  { name: "Blueberry", value: "#94E4F7" },
  { name: "Taro", value: "#E5D9FA" },
  { name: "Matcha", value: "#D0E6C1" },
  { name: "Strawberry", value: "#FFEBF0" },
];

function DressUpGame() {
  const [outfit, setOutfit] = useState(0);
  const [background, setBackground] = useState(BACKGROUND_COLORS[0].value);

  const changeOutfit = () => {
    setOutfit((outfit + 1) % 3);
  };

  const changeBackground = () => {
    const randomColor =
      BACKGROUND_COLORS[Math.floor(Math.random() * BACKGROUND_COLORS.length)].value;
    setBackground(randomColor);
  };

  return (
    <div className="dress-up-game">
        
      <div
        className="game-display"
        style={{ backgroundColor: background }}
        onClick={changeBackground}
      >
        <div className="cloud cloud-1" aria-hidden="true">
          <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30" cy="35" rx="20" ry="15" />
            <ellipse cx="55" cy="24" rx="24" ry="19" />
            <ellipse cx="78" cy="35" rx="18" ry="14" />
            <rect x="14" y="30" width="72" height="20" rx="10" />
          </svg>
        </div>
        <div className="cloud cloud-2" aria-hidden="true">
          <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30" cy="35" rx="20" ry="15" />
            <ellipse cx="55" cy="24" rx="24" ry="19" />
            <ellipse cx="78" cy="35" rx="18" ry="14" />
            <rect x="14" y="30" width="72" height="20" rx="10" />
          </svg>
        </div>
        <div className="cloud cloud-3" aria-hidden="true">
          <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30" cy="35" rx="20" ry="15" />
            <ellipse cx="55" cy="24" rx="24" ry="19" />
            <ellipse cx="78" cy="35" rx="18" ry="14" />
            <rect x="14" y="30" width="72" height="20" rx="10" />
          </svg>
        </div>

        <svg className="character" viewBox="0 0 200 350" xmlns="http://www.w3.org/2000/svg">
          {/* SHADOW */}
          <ellipse cx="100" cy="315" rx="100" ry="25" fill="rgba(0,0,0,0.2)" />

          {/* BACK HAIR */}
          <path d="M 10 70 A 90 90 0 0 1 190 80" fill="#4D3629" />
          <rect x="10" y="65" width="180" height="180" fill="#4D3629" />

          {/* ARMS (bare, behind sleeves) */}
          <line x1="50" y1="160" x2="30" y2="230" stroke="#FFD1BF" strokeWidth="25" strokeLinecap="round" />
          <line x1="150" y1="160" x2="180" y2="230" stroke="#FFD1BF" strokeWidth="25" strokeLinecap="round" />
        
          {/* BODY / OUTFITS */}
          {outfit === 0 && (
            <>
              <rect x="50" y="140" width="100" height="110" fill="white" />
              <line x1="50" y1="154" x2="30" y2="230" stroke="white" strokeWidth="25" strokeLinecap="round" />
              <line x1="150" y1="154" x2="180" y2="230" stroke="white" strokeWidth="25" strokeLinecap="round" />
              {/* HANDS drawn after sleeves — pie slices matching Java's
                  fillArc(x+16, y+220, 25, 25, 155°, 180°) / fillArc(x+170, y+220, 25, 25, 200°, 180°) */}
              <path d="M 17.17 227.22 A 12.5 12.5 0 0 0 39.83 237.78 Z" fill="#FFD1BF" />
              <path d="M 170.75 236.78 A 12.5 12.5 0 0 0 194.25 228.23 Z" fill="#FFD1BF" />
              <line x1="100" y1="140" x2="100" y2="250" stroke="#C4B7AD" strokeWidth="3" />
              <circle cx="92" cy="170" r="3" fill="#C4B7AD" />
              <circle cx="92" cy="190" r="3" fill="#C4B7AD" />
              <circle cx="92" cy="210" r="3" fill="#C4B7AD" />
              <rect x="50" y="250" width="40" height="60" fill="#FFD1BF" />
              <rect x="110" y="250" width="40" height="60" fill="#FFD1BF" />
              <rect x="50" y="230" width="100" height="35" fill="black" />
              <rect x="50" y="290" width="40" height="20" fill="white" />
              <rect x="110" y="290" width="40" height="20" fill="white" />
            </>
          )}

          {outfit === 1 && (
            <>
              <rect x="50" y="140" width="100" height="110" fill="black" />
              <rect x="55" y="140" width="90" height="20" fill="#FFD1BF" />
              <rect x="50" y="230" width="100" height="20" fill="#29381E" />
              <rect x="50" y="250" width="40" height="60" fill="#29381E" />
              <rect x="110" y="250" width="40" height="60" fill="#29381E" />
            </>
          )}

          {outfit === 2 && (
            <>
              <rect x="50" y="250" width="40" height="60" fill="#FFD1BF" />
              <rect x="110" y="250" width="40" height="60" fill="#FFD1BF" />
              <rect x="50" y="140" width="100" height="110" fill="#D199F0" />
              <rect x="50" y="230" width="100" height="35" fill="#D199F0" />
              <rect x="55" y="140" width="90" height="20" fill="#FFD1BF" />
              <g stroke="#745C9E" strokeWidth="3">
                <line x1="55" y1="195" x2="65" y2="195" />
                <line x1="75" y1="195" x2="85" y2="195" />
                <line x1="95" y1="195" x2="105" y2="195" />
                <line x1="115" y1="195" x2="125" y2="195" />
                <line x1="135" y1="195" x2="145" y2="195" />
              </g>
              <g stroke="#745C9E" strokeWidth="2" fill="none">
                <ellipse cx="50" cy="163" rx="5" ry="3.5" />
                <ellipse cx="60" cy="163" rx="5" ry="3.5" />
                <line x1="55" y1="163" x2="36" y2="175" />
                <line x1="55" y1="163" x2="67" y2="175" />
              </g>
              <g stroke="#745C9E" strokeWidth="2" fill="none">
                <ellipse cx="140" cy="163" rx="5" ry="3.5" />
                <ellipse cx="150" cy="163" rx="5" ry="3.5" />
                <line x1="145" y1="163" x2="126" y2="175" />
                <line x1="145" y1="163" x2="156" y2="175" />
              </g>
            </>
          )}

          {/* FACE */}
          <ellipse cx="100" cy="80" rx="70" ry="70" fill="#FFD1BF" />

          {/* BLUSH */}
          <ellipse cx="50" cy="107" rx="15" ry="12" fill="pink" />
          <ellipse cx="150" cy="107" rx="15" ry="12" fill="pink" />

          {/*
            BANGS — pie slices matching Java's fillArc exactly.
            fillArc(x,y,w,h,start,extent) draws a pie wedge: two radii
            from the circle's CENTER out to the arc, not a wedge that
            meets at a single shared bottom point. That's the mistake
            in the previous version.

            Left bang:  circle center (70,50) r=50, sweep 45°→225°
            Right bang: circle center (130,50) r=50, sweep 325°→145° (through 0°)
            (Java angles are CCW from 3 o'clock; screen y is flipped,
            so x = cx + r*cos(θ), y = cy - r*sin(θ))
          */}
          <path
            d="M 70 50 L 105.36 14.64 A 50 50 0 0 0 34.64 85.36 Z"
            fill="#4D3629"
          />
          <path
            d="M 130 50 L 170.96 78.68 A 50 50 0 0 0 89.04 21.32 Z"
            fill="#4D3629"
          />

          {/* EYES */}
          <circle cx="68" cy="90" r="3.5" fill="#4D3629" />
          <circle cx="133" cy="90" r="3.5" fill="#4D3629" />

          {/* EYEBROWS */}
          <line x1="60" y1="80" x2="70" y2="80" stroke="#4D3629" strokeWidth="2" />
          <line x1="130" y1="80" x2="140" y2="80" stroke="#4D3629" strokeWidth="2" />

          {/* NOSE */}
          <circle cx="100" cy="100" r="2.5" fill="#8F6859" />

          {/* MOUTH */}
          <line x1="90" y1="120" x2="110" y2="120" stroke="#8F6859" strokeWidth="2" strokeLinecap="round" />

          {/* SHOES */}
          <ellipse cx="70" cy="307" rx="20" ry="7.5" fill="black" />
          <ellipse cx="130" cy="307" rx="20" ry="7.5" fill="black" />
        </svg>
      </div>

      <div className="game-controls">
        <h2>DRESS UP GAME</h2>

        <button className="outfit-button" onClick={changeOutfit}>
         Change Outfit
        </button>

        <div className="pearl-picker">
          <div className="pearl-picker-header">
            <span className="pearl-picker-label">Pick a sky</span>
            <button type="button" className="shuffle-button" onClick={changeBackground}>
              🔀
            </button>
          </div>
          <div className="pearl-row">
            {BACKGROUND_COLORS.map((color) => (
              <button
                key={color.value}
                type="button"
                className={`pearl${background === color.value ? " active" : ""}`}
                style={{ backgroundColor: color.value }}
                onClick={() => setBackground(color.value)}
                aria-label={color.name}
                title={color.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DressUpGame;
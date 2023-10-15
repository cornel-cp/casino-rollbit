import React from "react";
import { StyleTraits } from "./styles";

const traitValues = [
  { title: "Dart", value: "Green Pattern Dart" },
  { title: "Quiver", value: "ETH Pattern Quiver" },
  { title: "T-Shirt", value: "Green & Purple T-Shirt" },
  { title: "Background", value: "Orange" },
  { title: "Body", value: "Electric Space Skin" },
  { title: "Eyes", value: "VR Eyes" },
  { title: "Sport", value: "Darts" },
  { title: "Teeth", value: "Silver Lips Mouth" },
];

const Traits = () => {
  return (
    <StyleTraits>
      {traitValues.map((trait, index) => (
        <div className="trait" key={index}>
          <div className="trait-container">
            <div className="title">
              <div className="text">{trait.title}</div>
            </div>
            <div className="value">{trait.value}</div>
          </div>
        </div>
      ))}
    </StyleTraits>
  );
};

export default Traits;

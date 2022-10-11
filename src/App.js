import { useState } from "react";
import "./styles.css";

export default function App() {
  let [input1, setInput1] = useState();
  let [input2, setInput2] = useState();
  let [area, setArea] = useState("");
  let [visi, setVisi] = useState("flex");
  let [invisi, setInvisi] = useState("none");
  let [shape, setShape] = useState("");
  let [formula, setFormula] = useState("");

  function shapeArea() {
    setVisi("none");
    setInvisi("block");
  }

  function previous() {
    setVisi("flex");
    setInvisi("none");
  }

  const shapeSelect = {
    square: () => square(input1, input2),
    rectangle: () => rectangle(input1, input2),
    rhombus: () => rhombus(input1, input2),
    parallelogram: () => parallelogram(input1, input2),
  };

  function refresh() {
    setInput1("");
    setInput2("");
    setArea("");
  }

  function square(input1, input2) {
    if (input1 === input2 && input1 > 0 && input2 > 0) {
      let area = Number(input1) * Number(input2);
      setArea(`Area is ${area} square units.`);
    } else {
      setArea("Both input should be positive and same since it is a square.");
    }
  }

  function rectangle(input1, input2) {
    if (input1 > 0 && input2 > 0) {
      let area = Number(input1) * Number(input2);
      setArea(`Area is ${area} square units.`);
    } else {
      setArea("Both input should be positive.");
    }
  }

  function rhombus(input1, input2) {
    if (input1 > 0 && input2 > 0) {
      let area = 0.5 * Number(input1) * Number(input2);
      setArea(`Area is ${area} square units.`);
    } else {
      setArea("Both input should be positive.");
    }
  }

  function parallelogram(input1, input2) {
    if (input1 > 0 && input2 > 0) {
      let area = Number(input1) * Number(input2);
      setArea(`Area is ${area} square units.`);
    } else {
      setArea("Both input should be positive and filled .");
    }
  }

  return (
    <div className="App">
      <nav style={{ display: `${invisi}` }}>
        <button
          onClick={previous}
          style={{
            display: "block",
            margin: "1rem",
            padding: "0.5rem 1rem",
            fontSize: "1.5rem",
            boxShadow: "4px 4px #888888",
            borderRadius: "0.5rem",
            border: "none",
            backgroundColor: "#ffafcc",
          }}
        >
          ⬅ Go Back
        </button>
      </nav>
      <div
        style={{
          display: `${visi}`,
          flexDirection: "column",
          width: "100vw",
          backgroundColor: "#fefae0",
          paddingBottom: "2rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <p
          style={{ fontSize: "2rem", marginBottom: "1rem", fontWeight: "600" }}
        >
          Find area of
        </p>
        <section
          style={{
            display: `grid`,
            gridTemplateRows: "150px 150px",
            gridTemplateColumns: "250px 250px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={(square) => {
              setShape("square");
              refresh();
              shapeArea();
              setFormula("(side) × (side)");
            }}
            style={{
              display: "block",
              margin: "2rem auto",
              padding: "1rem",
              fontSize: "1.5rem",
              borderRadius: "0.5rem",
              backgroundColor: "#390099",
              color: "#fff",
              boxShadow: "4px 4px #888888",
              border: "none",
            }}
          >
            Square
          </button>
          <button
            onClick={(rectangle) => {
              setShape("rectangle");
              refresh();
              shapeArea();
              setFormula("(length) × (breadth)");
            }}
            style={{
              display: "block",
              margin: "2rem auto",
              padding: "1rem",
              fontSize: "1.5rem",
              borderRadius: "0.5rem",
              backgroundColor: "#008000",
              color: "#fff",
              boxShadow: "4px 4px #888888",
              border: "none",
            }}
          >
            Rectangle
          </button>
          <button
            onClick={(rhombus) => {
              setShape("rhombus");
              refresh();
              shapeArea();
              setFormula("0.5 * (diagonal1) × (diagonal2)");
            }}
            style={{
              display: "block",
              margin: "2rem auto",
              padding: "1rem",
              fontSize: "1.5rem",
              borderRadius: "0.5rem",
              backgroundColor: "#ff7d00",
              color: "#fff",
              boxShadow: "4px 4px #888888",
              border: "none",
            }}
          >
            Rhombus
          </button>
          <button
            onClick={(parallelogram) => {
              setShape("parallelogram");
              refresh();
              shapeArea();
              setFormula("(base) × (height)");
            }}
            style={{
              display: "block",
              margin: "2rem auto",
              padding: "1rem",
              fontSize: "1.5rem",
              borderRadius: "0.5rem",
              backgroundColor: "#660708",
              color: "#fff",
              boxShadow: "4px 4px #888888",
              border: "none",
            }}
          >
            Parallelogram
          </button>
        </section>
      </div>

      <div style={{ display: `${invisi}`, backgroundColor: "#fefae0" }}>
        <h1 style={{ padding: "3rem 3rem 2rem" }}>
          Area of {shape} = {formula}
        </h1>
        <input
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          style={{
            padding: "0.5rem",
            fontSize: "1.5rem",
            display: "block",
            width: "300px",
            margin: "2rem auto",
          }}
          type="number"
          placeholder="Put your input here"
        />
        <input
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          style={{
            padding: "0.5rem",
            fontSize: "1.5rem",
            display: "block",
            width: "300px",
            margin: "2rem auto",
          }}
          type="number"
          placeholder="Put your input here"
        />
        <button
          onClick={(e) => {
            shapeSelect[shape]();
          }}
          style={{
            display: "inline-block",
            margin: "2rem 1rem 3rem",
            padding: "1rem",
            fontSize: "1.5rem",
            borderRadius: "0.5rem",
            backgroundColor: "#a8dadc",
            boxShadow: "4px 4px #888888",
            border: "none",
          }}
        >
          Calculate
        </button>

        <button
          onClick={refresh}
          style={{
            display: "inline-block",
            margin: "2rem 1rem 3rem",
            padding: "1rem",
            fontSize: "1.5rem",
            borderRadius: "0.5rem",
            backgroundColor: "#cdb4db",
            boxShadow: "4px 4px #888888",
            border: "none",
          }}
        >
          Refresh
        </button>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            paddingBottom: "1rem",
          }}
        >
          {area}
        </div>
      </div>
    </div>
  );
}

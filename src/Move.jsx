import { useState } from "react";
function Move() {
  let [Xvalue, setXvalue] = useState(50);
  let [Yvalue, setYvalue] = useState(50);
  const picstyle = {
    width: "400px",
    height: "400px",
    transform: `translate(${Xvalue}px, ${Yvalue}px)`,
  };
  const btnstyle = {
    border: "2px solid grey",
    borderRadius: "10px",
    padding: "10px",
    margin: "5px",
  };
  return (
    <>
      <div>
        <img style={picstyle} src="/public/1.jpg"></img>
      </div>
      <div style={{ bottom: "20px", position: "absolute", left: "50%" }}>
        <button style={btnstyle} onClick={() => setYvalue(Yvalue - 5)}>
          up⬆️
        </button>
        <div style={{ marginLeft: "-10px" }}>
          <button style={btnstyle} onClick={() => setXvalue(Xvalue - 5)}>
            left⬅️
          </button>

          <button style={btnstyle} onClick={() => setXvalue(Xvalue + 5)}>
            right➡️
          </button>
        </div>
        <button style={btnstyle} onClick={() => setYvalue(Yvalue + 5)}>
          down⬇️
        </button>
      </div>
    </>
  );
}
export default Move;

const bgPicker = (id) => {
  switch (id) {
    case 0:
      return "#3a3a3c";
    case 1:
      return "#538d4e";
    case 2:
      return "#b59f3b";
  }
};

const Cell = (props) => {
  return (
    <div
      style={{
        textTransform: "uppercase",
        border: "2px solid #6a6a6a",
        color: "lightgrey",
        fontFamily: "sans-serif",
        width: "70px",
        height: "70px",
        fontSize: "2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "3px",
        fontWeight: "bolder",
        cursor: "pointer",
        userSelect: "none",
        background: bgPicker(props.pattern),
      }}>
      {props.value}
    </div>
  );
};

export default Cell;

import React from "react";

const Note = () => {
  const separatorStyle = {
    width: "100%",
    flexShrink: "0",
    marginTop: "35px"
  };

  const noteStyle = {
    padding: "0px",
    margin: "0px",
    overflowWrap: "break-word",
    fontWeight: "300",
    color: "rgb(75, 40, 109)",
    fontSize: "0.85rem",
    lineHeight: "1.50",
    background: "rgb(242, 230, 255)",
    padding: "10px"
  };

  return (
    <div>
      <hr style={separatorStyle}></hr>
      <p style={noteStyle}>
        TELUS Easy Payment and Bring-It-Back applied. Read legal footnote Taxes
        due upfront.
      </p>
    </div>
  );
};

export default Note;

import React from "react";
import ReactDOM from "react-dom";
import ReactWordcloud from "react-wordcloud";
import words from "./words";

const options = {
    colors: ["#EA9635", "#53B9EA", "#EEF11B", "#23D7A1", "#979797", "#F9440B","#9D9F11","#C9EDFF"],
    enableTooltip: false,
    deterministic: false,
    fontFamily: "inter",
    fontSizes: [10, 60],
    fontStyle: "normal",
    fontWeight: 500,
    padding: 3,
    rotations: 3,
    rotationAngles: [0],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
};

const index = () => {
    return (
        <>
            <ReactWordcloud options={options} words={words} />
        </>
    )
}

export default index
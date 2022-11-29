import React from "react";
import "./PreviousNext.scss";

export const PreviousNextBTN = () => {
    return (
        <div className="prevNxtBtn__sect">
            <div className="prevNxtBtn">
            <button className="prevBtn btnHover" id="prev">&#8592;Previous</button>
            <div className="btn_one btnHover" id="btn_1"><button>1</button></div>
            <div className="btn_two btnHover" id="btn_2"><button>2</button></div>
            <div className="btn_three btnHover" id="btn_3"><button>3</button></div>
            <button className="nxtBtn btnHover" id="nxt">Next&#8594;</button>
        </div>
        </div>
    )
}
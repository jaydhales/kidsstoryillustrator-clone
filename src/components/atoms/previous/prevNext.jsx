import React from "react";
import { ReactDOM } from "react";
import { click } from "@testing-library/user-event/dist/click";


let x = 1;
let y = 2;
let z = 3;

let prev = document.getElementById("prev");
let btn1 = document.getElementById("btn_1");
let btn2 = document.getElementById("btn_2");
let btn3 = document.getElementById("btn_3");
let next = document.getElementById("nxt");

function Condition(){
    btn1.innerHTML = (`<button id="btn-${x}">${x}</button>`)
    btn2.innerHTML = (`<button id="btn-${y}">${y}</button>`)
    btn3.innerHTML = (`<button id="btn-${z}">${z}</button>`)
}

next.addEventListener("click", function(){
    x++;
    y++;
    z++;
    Condition();
})

export default Condition;
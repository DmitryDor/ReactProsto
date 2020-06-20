import React from 'react';
import './App.css';
import {log} from "util";

// function daclaration

function App() {
    // что-то полезное делает по необходимости
    // обязана вернуть JSX
    console.log("App rendering")
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log("Title rendering")
    return (
        <>This is App component</> //фрагмент
    )
}

function Rating() {
    console.log("Raiting rendering")
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Accordion() {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle />
            <AccordionBody />
        </div>
    )

}

function Star() {
    console.log("Star rendering")
    return <div>star</div>
}

function AccordionTitle() {
    console.log("AccordionTitle rendering")
    return (
        <h2>Menu</h2>
    )
}
function AccordionBody() {
    console.log("AccordionBody rendering")
return (
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
)
}

export default App;

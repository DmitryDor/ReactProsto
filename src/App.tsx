import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {Rating, ValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledRaiting} from "./components/Rating/UncotrolledRating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    console.log("App rendering")
    let [ratingValue, setRatingValue] = useState<ValueType>(0)
    let [onChange, setOnchange] = useState<boolean>(false)
    function onChangeAccordion() {
        setOnchange(!onChange)
    }
    let [switctOn, setSwitchOn] = useState<boolean>(true)


    return (

        <div className="App">
            <OnOff on={switctOn} onChange={setSwitchOn}/>
            <UncontrolledOnOff />
            <Accordion title={"Probuy"} collapsed={onChange} onChange={onChangeAccordion}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRaiting/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1> {props.title} </h1>
}

export default App;

import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/onOff/OnOff";
import Accordion from "./components/Accordion/Accordion";
import UnControlledOnOff from "./components/onOff/UnControlledOnOff";
import UnControlledAccordion from "./components/Accordion/UnControlledAccordion";

// function daclaration

function App() {
    // что-то полезное делает по необходимости
    // обязана вернуть JSX
    console.log("App rendering")
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            <UnControlledOnOff onChange={setSwitchOn}/> { switchOn.toString() }
            <UnControlledAccordion title={"Dimonnnnn"}/>
            {/*<OnOff on={switchOn} onChange={ setSwitchOn} />*/}
            {/*<Accordion title={"Menu"} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>*/}
        </div>
    );
}

type PageTitlepropsType = {
    title: string
}

function PageTitle(props: PageTitlepropsType) {
    console.log("Title rendering")
    return (
        <h1>{props.title}</h1>
    )
}

export default App;

import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import OnOff from "./components/onOff/OnOff";

// function daclaration

function App() {
    // что-то полезное делает по необходимости
    // обязана вернуть JSX
    console.log("App rendering")
    return (
        <div className="App">
           {/* <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={"Menu"} collapsed={true}/>
            <Accordion title={"Users"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <OnOff  />
            <OnOff  />
            <OnOff  />
           {/* <OnOff on={true} />
            <OnOff on={false} />*/}
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

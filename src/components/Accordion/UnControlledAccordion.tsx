import React, {useState} from "react";

type AccordionPropsType = {
    title: string

    // collapsed: boolean
}

function UnControlledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    console.log("Accordion rendering")
    debugger
    return (
        <div>
            <AccordionTitle   titleValue={props.title}/> <button onClick={ ()=> { setCollapsed (!collapsed)} }>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    titleValue: string

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h2>{props.titleValue}</h2>
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

export default UnControlledAccordion;
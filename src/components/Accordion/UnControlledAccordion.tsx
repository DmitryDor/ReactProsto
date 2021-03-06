import React, {useState} from "react";

type PropsAccordionType = {
    title: string
}


export function UnContolledAccordion(props: PropsAccordionType) {
    console.log("Accordion rendering")

    let [collapsed, setCollapsed] = useState(true)
    return (
        <div>
            <AccotdionTitle title={props.title} onClick={ () => {setCollapsed(!collapsed)
            }}/>

            {!collapsed && <AccotdionBody/>}
        </div>
    )
}

type AccotdionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccotdionTitle(props: AccotdionTitlePropsType) {
    console.log("AccotdionTitle rendering")
    return <h3 onClick={ () => {props.onClick()} }>{props.title}</h3>
}

function AccotdionBody() {
    console.log("AccotdionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

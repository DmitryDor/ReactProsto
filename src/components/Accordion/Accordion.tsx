import React from "react";

type PropsAccordionType = {
    title: string
    collapsed: boolean
    onChange: () => void
}


export function Accordion(props: PropsAccordionType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccotdionTitle title={props.title} onChange={props.onChange} />
            {!props.collapsed && <AccotdionBody/> }
        </div>
    )
}

type AccotdionTitlePropsType = {
    title: string
    onChange: () => void

}

function AccotdionTitle(props: AccotdionTitlePropsType) {
    console.log("AccotdionTitle rendering")
    return <h3 onClick={ (e)=> props.onChange() }>{props.title}</h3>
}

function AccotdionBody() {
    console.log("AccotdionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

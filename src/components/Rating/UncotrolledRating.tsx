import React, {useState} from "react";
import {ValueType} from "./Rating";



type PropsRaitingType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
    defaultValue?: ValueType
    onChange: (value: ValueType) => void
}

export function UncontrolledRaiting(props: PropsRaitingType) {
    console.log("Rating rendering")
    let [value, setValue] = useState<ValueType>(props.defaultValue ? props.defaultValue : 0)
    return (
        <div>
            <Star selected={value > 0} setValue={ () => {setValue(1); props.onChange(1)}}/>
            <Star selected={value > 1} setValue={ () => {setValue(2); props.onChange(2)}}/>
            <Star selected={value > 2} setValue={ () => {setValue(3); props.onChange(3)}}/>
            <Star selected={value > 3} setValue={ () => {setValue(4); props.onChange(4)}}/>
            <Star selected={value > 4} setValue={ () => {setValue(5); props.onChange(5)}}/>
        </div>
    )
}

type PropsType = {
    selected: boolean
    setValue: () => void

}

function Star(props: PropsType) {

    return (
        <span onClick={ () => {props.setValue()} }>{props.selected ? <b>star </b>  : "star "}</span>
    )
}
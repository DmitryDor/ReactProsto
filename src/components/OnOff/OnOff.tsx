import React, {useState} from "react";

type PropsType = {
    on: boolean
    onChange: (value: boolean) => void
}

export function OnOff(props: PropsType) {


    const onStyle = {
        width: '30px',
        height: '20px',
        border: "2px solid black",
        marginLeft: '2px',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: "2px solid black",
        padding: '2px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        border: "2px solid black",
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? "green" : "red"
    }


    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.onChange(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                props.onChange(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
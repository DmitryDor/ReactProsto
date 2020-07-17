import React, {useState} from "react";

type PropsType = {
    defaultOn?: boolean
}

export function UncontrolledOnOff(props: PropsType) {

    let [on, setOn] = useState<boolean>(props.defaultOn ? props.defaultOn : false)



    const onStyle = {
        width: '30px',
        height: '20px',
        border: "2px solid black",
        marginLeft: '2px',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: "2px solid black",
        padding: '2px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        border: "2px solid black",
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? "green" : "red"
    }

    const onCkicked = () => {
        setOn(true)
    }
    const offCkicked = () => {
        setOn(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onCkicked}>On
            </div>
            <div style={offStyle} onClick={offCkicked}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
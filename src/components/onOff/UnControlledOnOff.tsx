import React, {useState} from "react";

type PropsType = {
    onChange: (on: boolean) => void
}


function UnControlledOnOff(props: PropsType) {
    console.log("OnOff rendering")
    let [on, setOn] = useState(false)
    console.log('On: ' + on)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1.5px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "greenYellow" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1.5px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "10px",
        border: "1.5px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "greenYellow" : "red"
    };

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default UnControlledOnOff;
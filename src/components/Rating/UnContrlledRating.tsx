import React, {useState} from "react";

type RatingPropsType = {
   // value: 0 | 1 | 2 | 3 | 4 | 5
}

function UnControlledRating(props: RatingPropsType) {
    console.log("Raiting rendering")
    let [value, setValue] = useState< 0 | 1 | 2 | 3 | 4 | 5>(0)
    return (
        <div>
            <Star selected={value > 0} setValue={() => {setValue(1)}} />
            <Star selected={value > 1} setValue={() => {setValue(2)}} />
            <Star selected={value > 2} setValue={() => {setValue(3)}} />
            <Star selected={value > 3} setValue={() => {setValue(4)}} />
            <Star selected={value > 4} setValue={() => {setValue(5)}} />
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void

}

function Star(props: StarPropsType) {
    console.log("Star rendering")
   /* if (props.selected === true) {
        return <span> <b>star </b> </span>
    } else {
        return <span>star  </span>
    }*/  //ниже записано тернарным выражение

   //return props.selected ?  <span > <b>star </b> </span>:  <span>star  </span>   // ещё упростили
    return <span onClick={ () => {props.setValue()}}>{props.selected ? <b> star </b> : " star "}</span>
}

export default UnControlledRating;
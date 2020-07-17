import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';

import {OnOff} from "./OnOff";
import {Rating, ValueType} from "../Rating/Rating";


export default {
    title: 'OnOff ',
    component: OnOff,
};


export const OnMode = () => <OnOff onChange={action('on or off clicked')} on={true} />
export const OffMode = () => <OnOff onChange={action('on or off clicked')} on={false} />
export const ModeChanging = () => {
    let [value, setValue] = useState<boolean> (true)
    return <OnOff  on={value}  onChange={setValue}/>
}

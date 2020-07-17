import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';

import {OnOff} from "./OnOff";
import {UncontrolledOnOff} from "./UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff ',
    component: UncontrolledOnOff,
};


export const OnMode = () => <UncontrolledOnOff defaultOn={true}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false}/>

import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion ',
    component: Accordion,
};


export const CollapsedMode = () => <Accordion onChange={action('Collapsed')} collapsed={true} title={'Menu'} />
export const UncollapsedMode = () => <Accordion onChange={action('Uncollapsed')} collapsed={false} title={'Menu'}/>
export const ModeChanging = () => {
    let [value, setValue] = useState<boolean> (true)
    return <Accordion  collapsed={value} title={'Menu'} onChange={ () => setValue(!value) }/>
}

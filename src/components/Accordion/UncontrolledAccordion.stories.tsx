import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {UnContolledAccordion} from "./UnControlledAccordion";


export default {
    title: 'UncontrolledAccordeon ',
    component: UnContolledAccordion,
};


export const ModeChanging = () => {
    return <UnContolledAccordion title={"Users"} />
}

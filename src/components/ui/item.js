import React from 'react';
import { Checkbox } from 'antd';
import './item.css';

export function Item (props) {
    // no need to render in ReactComponent, just return the jsxTemplate..
    return (
        <li className='item' >
            <Checkbox  key='' className='check' 
                type='checkbox' onChange={props.onclick} checked={props.todo.completed}>
                {props.todo.text}
                </Checkbox>
        </li>
    )
}
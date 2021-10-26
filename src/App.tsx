import React, {useState} from 'react';
import './App.css';
import {Title} from './title';
import {Body} from "./body";
import {Select} from "./Select";

export type stateType = {
    title: string
    item: Array<string>
    collapsed: boolean
}

export function App() {
    // const [state, setState] = useState<stateType>(
    //     {
    //         title: 'name',
    //         item: ['John', 'Nick','Peter'],
    //         collapsed: true
    //     }
    // )
    //
    // const collapsedHandler = (collapsed: boolean) => {
    //     setState({...state, collapsed: collapsed})
    // }
    // const callback = (item: string, collapsed: boolean) => {
    //     setState({...state, title: item, collapsed: collapsed})
    //
    // }
    const [value, setValue] = useState('2')

    return (
        <div className="App">
            {/*<Title title={state.title}*/}
            {/*       collapsed={state.collapsed}*/}
            {/*       collapsedHandler={collapsedHandler}/>*/}

            {/*{!state.collapsed && <Body item={state.item}*/}
            {/*                           callback={callback}*/}
            {/*                           collapsed={state.collapsed}/>}*/}

            <Select value={value}
                    setValue = {setValue}
                    items={[
                        {value: '1', title: 'Moscow'},
                        {value: '2', title: 'Minsk'},
                        {value: '3', title: 'Izhevsk'}
                    ]}/>
        </div>
    );
}





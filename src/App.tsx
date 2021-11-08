import React, {useMemo, useState} from 'react';
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
    const Array = [
        {value: '1', title: 'Moscow', country:'Russia'},
        {value: '2', title: 'Minsk', country:'Belarus'},
        {value: '3', title: 'Izhevsk', country:'Russia'},
        {value: '4', title: 'Kiev', country:'Uraine'},
        {value: '5', title: 'St. Peterburg', country:'Russia'},
        {value: '6', title: 'Samara', country:'Russia'},
        {value: '7', title: 'Keninsburg', country:'Russia'}
    ]

    const UseMemoArray = useMemo(()=>{
        return Array.filter(el=>el.country==='Russia')

    },[Array])
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
                    items={UseMemoArray}/>
            <Select value={value}
                    setValue = {setValue}
                    items={Array}/>
        </div>
    );
}





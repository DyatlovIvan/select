import s from './/Select.module.css'
import React, {KeyboardEvent, useEffect, useState} from "react";

type SelectType = {
    value?: any
    setValue: (value: any) => void
    items: ItemType[]
}

export type ItemType = {
    value: any
    title: string
    country:string
}


export const SelectMemo = (props: SelectType) => {
    const [counter,setCounter] = useState(1)
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementvalue] = useState(props.value)

    useEffect(()=>{
        setHoveredElementvalue(props.value)
    },[props.value])
    const selectItem = props.items.find(i => i.value === props.value)
   // const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const ItemClicked = (value: any) => {
        props.setValue(value)
    }
    const showItems = () => setActive(!active)

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key ==='ArrowDown'||'ArrowUp') {

            for (let i = 0; props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretindent = e.key=== 'ArrowDown'? props.items[i + 1]:props.items[i - 1]
                    if (pretindent) {
                        ItemClicked(pretindent.value)
                    }
                    break
                }
            }
        }

    }
    return (
        <div className={s.select} tabIndex={0} onKeyUp={onKeyUp}>
            {counter}
            <span className={s.main} onClick={showItems}>{selectItem && selectItem.title}</span>
            {
                active &&
                <div className={s.items}>
                    {props.items.map(i => <div
                        onMouseEnter={() => setHoveredElementvalue(i.value)}
                        className={s.item + ' ' + (hoveredElementValue === i.value ? s.selected : '')} key={i.value}
                        onClick={() => {
                            ItemClicked(i.value);
                            showItems()
                        }}
                    >{i.title}</div>)}
                </div>
            }
        </div>
    )
}

export let Select = React.memo(SelectMemo)
'use client'

import React, { useState, CSSProperties } from 'react'
import style from './ToggleSwitch.module.css'

interface Props {
    className?: string
    textIsOn?: string
    textIsOff?: string
    isOn?: boolean
    onChange?: (isOn: boolean) => void
    styleToggleSwitch?: {
        fontSize?: CSSProperties['fontSize']
        fontColor?: string
    }
}

const ToggleSwitch: React.FC<Props> = (props) => {
    const [isOn, setIsOn] = useState<boolean>(props.isOn)

    const toggleSwitch = () => {
        setIsOn(!isOn)
        if (props.onChange) props.onChange(!isOn)
    }

    const stylesText = { fontSize: props.styleToggleSwitch?.fontSize, color: props.styleToggleSwitch?.fontColor }

    if (!props.textIsOn || !props.textIsOff) {
        return null
    }

    return (
        <label className={style.toggle}>
            <input type="checkbox" checked={isOn} onChange={toggleSwitch} className={style.toggle__input} />
            <div style={stylesText} className={isOn ? style.toggle__is_on : style.toggle__is_off}>
                {props.textIsOn}
            </div>
            <div style={stylesText} className={isOn ? style.toggle__is_off : style.toggle__is_on}>
                {props.textIsOff}
            </div>
        </label>
    )
}

export default ToggleSwitch

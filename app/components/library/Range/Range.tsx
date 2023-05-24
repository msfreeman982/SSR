"use client";

import React, {useEffect, useRef} from "react";
import styles from "./Range.module.css";

type RangeProps = {
    className?: string,
    min?: number,
    max?: number,
    val?: number,
    step?: number,
    defaultValue?: number,
    onChange?: (value: number) => void,
    mode?: 'default' | 'buttons' | 'text'
    text?: [string, string, string]
    disabled?: boolean
    hideThumb?: boolean;
}

const Range = (props: RangeProps) => {

    const rangeRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (rangeRef.current) {
            rangeRef.current.style.setProperty(
                "--thumb-display",
                props.hideThumb ? "none" : "block"
            );
        }
    }, [props.hideThumb]);

    useEffect(() => {
        props.val && onHandleChange()
    }, [props.val])

    const onHandleChange = () => {
        let target = rangeRef.current
        const min = props.min || parseFloat(target.min)
        const max = props.max || parseFloat(target.max)
        const val = props.val || parseFloat(target.value)

        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'


        if (props.onChange) props.onChange(parseInt(target.value));
    }

    const onHandleClick = (subtract: boolean) => {
        const target = rangeRef.current
        const min = props.min || parseFloat(target.min)
        const max = props.max || parseFloat(target.max)
        const val = props.val || parseFloat(target.value)
        const step = props.step || parseFloat(target.step)

        if (subtract) {
            if (val - step >= min) {
                target.value = (val - step).toString()
                target.style.backgroundSize = (val - step - min) * 100 / (max - min) + '% 100%'
            } else {
                target.value = min.toString()
                target.style.backgroundSize = '0% 100%'
            }
        } else {
            if (val + step <= max) {
                target.value = (val + step).toString()
                target.style.backgroundSize = (val + step - min) * 100 / (max - min) + '% 100%'
            } else {
                target.value = max.toString()
                target.style.backgroundSize = '100% 100%'
            }
        }

        if (props.onChange) props.onChange(parseInt(target.value));
    }

    return (
        <div className={props.className}>
            <input type="range"
                   min={props.min || 0}
                   max={props.max || 100}
                   step={props.step || 1}
                   value={props.val}
                   defaultValue={props.defaultValue || props.max / 2 || 50}
                   onChange={onHandleChange}
                   disabled={props.disabled}
                   ref={rangeRef}
                   className={`${styles.range} ${props.hideThumb ? styles.hideThumb : ""}`}
            />

            {!props.hideThumb && ( // Условный рендеринг кружка ползунка
                <style>{`
          .${styles.range} input[type="range"]::-webkit-slider-thumb {
            display: none;
          }

          .${styles.range} input[type="range"]::-moz-range-thumb {
            display: none;
          }
        `}</style>
            )}

            {props.mode === 'buttons' &&
                <div className={styles.range__buttons}>
                    <button className={styles.range__button_minus} onClick={() => onHandleClick(true)}>
                        <span className="icon-minusIcon"></span>
                    </button>
                    <button className={styles.range__button_plus} onClick={() => onHandleClick(false)}>
                        <span className="icon-plusIcon"></span>
                    </button>
                </div>
            }
            {props.mode === 'text' &&
                <div className={styles.range__text}>
                    <span className={styles.range__text__start}>{(props.text && props.text[0]) || 0}</span>
                    <span className={styles.range__text__middle}>{(props.text && props.text[1]) || 50}</span>
                    <span className={styles.range__text__end}>{(props.text && props.text[2]) || 100}</span>
                </div>
            }
        </div>
    )
}

export default Range;


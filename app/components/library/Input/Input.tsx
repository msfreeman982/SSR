"use client";

import React, { useState, useEffect, ChangeEvent, CSSProperties } from "react";
import "./Input.css";

type FormFieldProps = {
    className?: string;
    name?: string;
    sublabel?: string;
    type: string;
    error?: string;
    onSubmit?: () => any;
    onChange? : (value: string) => void;
    placeholder?: string;
    info?: string;
    isTextArea?: boolean;
    styleInput?: {
        label?: CSSProperties;
        input?: CSSProperties;
        info?: CSSProperties;
    };
    validator?: (value: string) => string | undefined;
    value?: string;
};

const Input: React.FC<FormFieldProps> = (props) => {
    const InputOrTextArea = props.isTextArea ? "textarea" : "input";
    const containerInput = props.isTextArea ? "container-textarea" : "input";

    const [value, setValue] = useState(props.value || "");

    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (props.validator) {
            const errorMessage = props.validator(value);
            setError(errorMessage);
        }
    }, [value, props.validator]);

    const handleBlur = () => {
        if (props.validator) {
            const errorMessage = props.validator(value);
            setError(errorMessage);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(event.target.value);
        if (props.onChange) props.onChange(event.target.value);
    };

    return (
        <div className={containerInput}>
            <div className={`${containerInput}__description`}>
                <label className={`${containerInput}__label`} htmlFor={props.name} style={props.styleInput?.label}>{props.name}</label>
                {props.info ? <span className={`${containerInput}__info`} style={props.styleInput?.info}>{props.info}</span> : null}
            </div>
            <InputOrTextArea
                className={`${containerInput}__field ${props.className}`}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                style={props.styleInput?.input}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {props.sublabel &&
              <span className={"input__sublabel"}>CFH</span>
            }
            {error && <div className={`${containerInput}__error`}>{error}</div>}
        </div>
    );
};

export default Input;
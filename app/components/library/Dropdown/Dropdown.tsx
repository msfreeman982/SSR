"use client";

import React, {CSSProperties, useState} from "react";
import "../Dropdown/Dropdown.css";

type Option = {
    label: string;
    value: string;
};

type DropdownProps = {
    name: string;
    options: Option[];
    placeholder?: string;
    selectedOption: Option;
    onOptionSelect: (option: Option) => void;
    info?: string;
    error?: string;
    styleDropdown?: {
        label?: CSSProperties;
        select?: CSSProperties;
        containerOption?: CSSProperties;
        option?: CSSProperties;
        info?: CSSProperties;
        error?: CSSProperties;
        arrow?: CSSProperties;
    };
};

const Dropdown = (props: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsChecked(!isChecked);
        setError('');
    };

    const handleOptionSelect = (option: Option) => {
        setIsOpen(false);
        setIsChecked(false);
        setError('');
        props.onOptionSelect(option);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isChecked) {
            setError('Please select an option');
            return;
        }
    };

        return (
            <form onSubmit={handleSubmit}>
                <div className="dropdown">
                    <div className="dropdown__label" style={props.styleDropdown?.label}>
                        {props.name}
                        {props.info && (
                            <span className={`dropdown__info`} style={props.styleDropdown?.info}>
            {props.info}
          </span>
                        )}
                    </div>
                    <div className="dropdown__select" onClick={toggleDropdown} style={props.styleDropdown?.select}>
                    <span
                        className="dropdown__select-label"
                        style={props.styleDropdown?.option}>{props.selectedOption?.label}
                    </span>
                        <span className="icon-arrowDown" style={props.styleDropdown?.arrow}></span>
                    </div>

                    {isOpen && (
                        <div className="dropdown__options-container" style={props.styleDropdown?.containerOption}>
                            {props.options.map((option) => (
                                <div
                                    key={option.value}
                                    className="dropdown__option"
                                    onClick={() => handleOptionSelect(option)}
                                    style={props.styleDropdown?.option}
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="custom-date-selector__error">
                        {error && <div style={props.styleDropdown?.error}>{error}</div>}
                    </div>

                    {/*<button type="submit">Submit</button>*/}

                </div>
            </form>
        );
    };

    export default Dropdown;
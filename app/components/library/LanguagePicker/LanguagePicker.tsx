"use client";

import React, {useState} from "react";
import styles from "./LanguagePicker.module.css";

type LanguageType = {
  name?: string
  value?: number
}

export const defaultLanguages = [
  {
    name: "EN",
    value: 0
  },
  {
    name: 'FR',
    value: 1
  },
  {
    name: 'DE',
    value: 2
  }
]

type LanguagePickerProps = {
  fields?: LanguageType[]
  onChange?: () => void
}

const LanguagePicker = (props: LanguagePickerProps) => {
  const [isOpened, setIsOpened] = useState(false)
  const [activeField, setActiveField] = useState(defaultLanguages[0])

  const onHandleClick = () => {
    setIsOpened(!isOpened)
  }

  const renderFields = () => {
    const fields = defaultLanguages.map((field) => {
      return (
        <div onClick={() => onHandleChange(field.value)}
             className={styles.languagePicker__value}
             key={field.value}
        >
          {field.name}
        </div>
      )
    })
    return (
      <div className={styles.languagePicker__valuesContainer}>
        {fields}
      </div>
    )
  }

  const onHandleChange = (value: number) => {
    if (value === activeField.value) return;
    
    setActiveField(defaultLanguages[value])
    if (props.onChange) props.onChange()
  }

    return (
      <div className={styles.languagePicker} onClick={onHandleClick}>
        <div className={styles.languagePicker__chosenValue}>{activeField.name}</div>
        <div className={`${styles.arrow} ${isOpened && styles.opened}`}>
          <span className={`icon-arrowDown`}></span>
        </div>
        {isOpened && renderFields()}
      </div>
    )
}

export default LanguagePicker
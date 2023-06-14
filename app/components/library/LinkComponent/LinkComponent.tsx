import styles from './LinkComponent.module.css'
import React, { MouseEventHandler, CSSProperties } from 'react'

type Props = {
    title?: string
    item?: Array<string>
    styleLink?: {
        fontSizeTitle?: CSSProperties['fontSize']
        fontColorTitle?: string
        fontSizeItem?: CSSProperties['fontSize']
        fontColorItem?: string
    }
}

const LinkComponent: React.FC<Props> = (props) => {
    const stylesTitle = { fontSize: props.styleLink?.fontSizeTitle, color: props.styleLink?.fontColorTitle }
    const stylesItem = { fontSize: props.styleLink?.fontSizeItem, color: props.styleLink?.fontColorItem }

    if (!props.title || !props.item) {
        return null
    }

    return (
        <div className={styles.link}>
            <div style={stylesTitle} className={styles.link__title}>
                {props.title}
            </div>
            {props.item?.map((value) => {
                return (
                    <a style={stylesItem} className={styles.link__item}>
                        {value}
                    </a>
                )
            })}
        </div>
    )
}
export default LinkComponent

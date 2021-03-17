import { FC } from 'react';
import s from './Button.module.css';

const Button: FC<{type: string, isDisabled?: boolean, icon?: any, content: string}> = ({type, isDisabled, icon, content}) => {
    let classes = `
        ${s[type]}
        ${isDisabled ? (' ' + s[`${type}--disabled`]) : ''}
    `;

    if (icon) {
        return (
            <button className={s["button-w-icon"] + ' ' + classes}>
                <span className={s["button-w-icon__icon"]}><img src={icon} /></span>
                <span>{content}</span>
            </button>
        )
    } else {
        return (
            <button className={s["button-primary"] + ' ' + classes}>
                <span>{content}</span>
            </button>
        )
    }
};

export default Button;
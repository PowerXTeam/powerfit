import { FC } from 'react';
import s from './Label.module.scss';

type labelProps = {
    icon: any,
    value: string,
    href?: string,
    notif?: number,
}

const Label: FC<labelProps> = ({ icon, value, href = '#', notif }) => {
    if (notif) {
        const menuNotifClass: string = notif  ? '' : 'label__count-now--dissabled';

        return (
            <li className={s["label"]}>
                <span className={s["label__icon"]}>
                    <img src={icon}/>
                </span>
                <a href={href}>{value}<span className={`${s[menuNotifClass]} ${s["label__count-new"]}`}>{notif}</span></a>
            </li>
        );
    } else {
        return (
            <li className={s["label"]}>
                <span className={s["label__icon"]}>
                    <img src={icon} alt=""/>
                </span>
                <a href={href}>{value}</a>
            </li>
        );
    }
};

export default Label;
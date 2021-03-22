import { FC } from 'react';
import s from './AboveInput.module.scss';

type aboveInputProps = {
    label?: string,
    options?: string
}

const AboveInput: FC<aboveInputProps> = ({ label = '', options = '' }) => {
    if (label) {
        if (options) {
            return (
                <div className={s['above-input']}>
                    <div className={s["input-label"]}>
                        <span>{label}</span>
                    </div>

                    <div className={s["input-options"]}>
                        <span>{options}</span>
                    </div>
                </div>
            ); 
        } else {
            return (
                <div className={s['above-input']}>
                    <div className={s["input-label"]}>
                        <span>{label}</span>
                    </div>
                </div>
            );
        }
    } else {
        if (options) {
            return (
                <div className={s['above-input']}>
                    <div className={s["input-options"]}>
                        <span>{options}</span>
                    </div>
                </div>
            ); 
        } else {
            return (
                <div></div>
            );
        }
    }
};

export default AboveInput;
import { FC } from 'react';
import ElmtrInput from './SubComponents/ElmtrInput/ElmtrInput';
import AboveInput from './SubComponents/AboveInput/AboveInput';
import s from './Input.module.scss';

type inputProps = {
    options?: string,
    dataIsValid?: boolean,
    label?: string,
    type?: string,
    placeholder?: string,
}


const Input: FC<inputProps> = ({ options, dataIsValid, placeholder, label, type }) => {

    return (
        <div className={s["input-container"]}>
            <AboveInput options={options}  label={label}/>
            <ElmtrInput placeholder={placeholder} dataIsValid={dataIsValid} type={type} />
        </div>
    );
};

export default Input;  
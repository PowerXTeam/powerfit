import { FC } from 'react';
import s from './ElmtrInput.module.scss';

type elmtrInputProps = {
    type?: string,
    dataIsValid?: boolean
    placeholder?: string,
    options?: string,
    id?: string,
}

const ElmtrInput: FC<elmtrInputProps> = ({ type = 'text', dataIsValid = true, placeholder = '', options = '', id = '' }) => {
    let _modif = options && type === 'password' ? 'input--position-right' : '';

    return (
        <div className={`${s['input']} ${s[_modif] || ''}`} data-isvalid={dataIsValid}><input type={type} id={id} placeholder={placeholder} /></div>
    );
};

export default ElmtrInput;
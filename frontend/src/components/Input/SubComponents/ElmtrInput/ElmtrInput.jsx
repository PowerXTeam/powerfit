import s from './ElmtrInput.module.css';

const ElmtrInput = ({type, dataIsValid = true, placeholder, options, id=''}) => {
    let _modif = options && type === 'password' ? 'input--position-right' : '';

    return (
        <div className={`${s['input']} ${s[_modif] || ''}`} data-isvalid={dataIsValid}><input type={type} id={id} placeholder={placeholder}/></div>
    );
};

export default ElmtrInput;
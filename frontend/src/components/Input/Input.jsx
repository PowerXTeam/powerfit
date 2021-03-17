import ElmtrInput from './SubComponents/ElmtrInput/ElmtrInput.jsx';
import AboveInput from './SubComponents/AboveInput/AboveInput';
import s from './Input.module.css';


const Input = ({ options, dataIsValid, placeholder = '', label, type = 'text' }) => {

    return (
        <div className="input-container">
            <AboveInput options={options}  label={label}/>
            <ElmtrInput placeholder={placeholder} dataIsValid={dataIsValid} type={type} />
        </div>
    );
};

export default Input;  
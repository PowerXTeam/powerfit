import s from './AboveInput.module.css';

const AboveInput = ({ label, options }) => {
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
                ''
            );
        }
    }
};

export default AboveInput;
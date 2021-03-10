import s from './Header.module.scss'
import header_logo from '../../assets/images/header_logo.svg'
import nav_icon from '../../assets/images/nav_icon.svg';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.titleBlock}>
                <img src={header_logo} alt="Header logo" className={s.titleBlock__logo}/>
                <h1 className={s.titleBlock__title}>Power X</h1>
            </div>
            <div className={s.buttonGroup}>
                <button className={s.buttonGroup__signInButton}>Войти</button>
                <button className={s.buttonGroup__signUpButton}>Регистрация</button>
                <img className={s.buttonGroup__menuIcon} src={nav_icon} alt="Menu icon"/>
            </div>
        </div>
        )
}

export default Header;
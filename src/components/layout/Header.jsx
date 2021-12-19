import style from './Header.module.css'
import logo from '../../assets/logo.webp'

const Header = ({ children }) => {
    return (
        <header className={style.headerContainer}>
            <img src={logo} alt="NNergix" className={style.brand} />
            {children}
        </header>
    )
}

export default Header
import PropTypes from 'prop-types'
import style from './SideMenuItem.module.css'

const SideMenuItem = ({ text, link, icon = 'category', active = false, disabled = false }) => {

    const container_classes = [
        style.sidemenuItemContainer,
        active ? style.active : null,
    ].join(' ')

    return (
        <li className={container_classes} disabled={disabled} >
            <a href={link} className={style.link} tabIndex={disabled ? -1 : null}>
                <span className={`material-icons ${style.icon}`}>{icon}</span>
                <span className={style.iconText} >{text}</span>
            </a>
        </li>
    )
}

export default SideMenuItem

SideMenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    active: PropTypes.bool,
}
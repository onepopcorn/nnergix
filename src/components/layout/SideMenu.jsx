import PropTypes from 'prop-types'
import style from './SideMenu.module.css'
import SideMenuItem from './SideMenuItem.jsx'

const SideMenu = ({ items = [] }) => {
    const menu_items = items.map((data, idx) => <SideMenuItem key={idx} {...data} />)
    return (
        <aside className={style.sidemenuContainer}>
            <ul>
                {menu_items}
            </ul>
        </aside>
    )
}

export default SideMenu

SideMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        icon: PropTypes.string,
    }))
}
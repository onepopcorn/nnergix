import PropTypes from 'prop-types'
import style from './WidgetArea.module.css'

const WidgetArea = ({ title, icon, children }) => {
    return (
        <div className={style.widgetareaContainer}>
            <div className={style.breadcrumbs}>
                <span className={`material-icons ${style.icon}`}>{icon}</span>
                <h1>{title}</h1>
            </div>
            <div className={style.content}>{children}</div>
        </div>
    )
}

export default WidgetArea

WidgetArea.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}
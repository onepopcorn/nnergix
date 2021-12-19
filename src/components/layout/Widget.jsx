import PropTypes from 'prop-types'
import style from './Widget.module.css'

const Widget = ({ title, icon, children }) => {
    return (
        <section className={style.widgetContainer}>
            <div className={style.widgetInnerContainer}>
                {
                    (title || icon) &&
                    <header className={style.widgetHeader}>
                        {icon && <span className={`material-icons ${style.widgetIcon}`}>{icon}</span>}
                        <h2>{title}</h2>
                    </header>
                }
                <div className={style.widgetContent}>{children}</div>
            </div>
        </section>
    )
}

export default Widget

Widget.propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
}
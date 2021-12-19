import PropTypes from 'prop-types'
import style from './Widget.module.css'

const Widget = ({ title, children }) => {
    return (
        <section className={style.widgetContainer}>
            <div className={style.widgetInnerContainer}>
                {
                    title &&
                    <header className={style.widgetHeader}>
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
    children: PropTypes.any.isRequired
}
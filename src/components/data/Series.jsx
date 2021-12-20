import PropTypes from 'prop-types'
import style from './Series.module.css'
import useSeries from '../../hooks/useSeries.js'
import Loading from './Loading.jsx'
import LoadingError from './LoadingError'

const Series = ({ id, onChange }) => {
    const { loading, error, data } = useSeries()

    if (error) return <LoadingError />
    if (loading) return <Loading />

    const idx = data.findIndex(d => d.name === id)
    const series = data.map((serie, i) => <option key={i} value={serie.name}>{serie.name}</option>)
    return (
        <div className={style.seriesContainer}>
            <div className={style.seriesActions}>
                <span>Serie</span>
                <select name="series" id="series" value={id} onChange={(e) => onChange(e.target.value)}>
                    {series}
                </select>
            </div>
            <div className={style.seriesData}>
                <div className={style.seriesDataAlt}>
                    <div className={style.seriesDataHeader}>Altitude</div>
                    {data[idx].altitude}
                </div>

                <div className={style.seriesDataLatLng}>
                    <div>
                        <div className={style.seriesDataHeader}>latitude</div>
                        {data[idx].lat}
                    </div>
                    <div>
                        <div className={style.seriesDataHeader}>longitude</div>
                        {data[idx].lng}
                    </div>
                </div>

                <div className={style.seriesCreatedBy} >
                    created by {data[idx].created_by}
                </div>
            </div>
        </div>
    )
}

export default Series

Series.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
import PropTypes from 'prop-types'
import useTableData from '../../hooks/useTableData.js'
import Loading from './Loading.jsx'
import LoadingError from './LoadingError.jsx'
import style from './Table.module.css'

const Table = ({ id }) => {
    const { error, loading, fields, data } = useTableData(id)

    if (error) return <LoadingError />
    if (loading) return <Loading />

    return (
        <div className={style.tableContainer}>
            <table className={style.table}>
                <thead>
                    <tr>
                        {
                            fields.map((f, idx) => <th key={idx}>{f.name}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row, idx) => (
                            <tr key={idx}>
                                {
                                    Object.values(row).map((value, idx) => <td key={idx}>{value}</td>)
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table

Table.propTypes = {
    id: PropTypes.string.isRequired,
}
import PropTypes from 'prop-types'
import style from './Table.module.css'

const Table = ({ fields = [], data = [] }) => {
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
    fields: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    }))
}
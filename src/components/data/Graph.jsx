import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import Plot from 'react-plotly.js'
import useGraphData from '../../hooks/useGraphData.js'
import style from './Graph.module.css'
import Loading from './Loading.jsx'
import LoadingError from './LoadingError.jsx'

const Graph = ({ id }) => {
    const [enabled, setEnabled] = useState(true)
    const xRef = useRef()
    const yRef = useRef()
    const { loading, error, layout, data, addPoints, resetPoints } = useGraphData(id)

    const inputChange = () => {
        setEnabled(xRef.current.value !== '' && yRef.current.value !== '')
    }

    const onAdd = e => {
        e.preventDefault()
        addPoints(e.target.elements.xValue.value, e.target.elements.yValue.value)
    }

    if (error) return <LoadingError />
    if (loading) return <Loading />

    return (
        <div className={style.graphContainer}>
            <form className={style.graphControls} onSubmit={onAdd}>
                <div className={style.graphInputGroup}>
                    <label htmlFor="xValue">X:</label>
                    <input ref={xRef} id="xValue" name='xValue' type='number' defaultValue={8} onChange={inputChange} />
                </div>

                <div className={style.graphInputGroup}>
                    <label htmlFor="yValue">Y:</label>
                    <input ref={yRef} id="yValue" name='yValue' type='number' defaultValue={150} onChange={inputChange} />
                </div>

                <button disabled={!enabled}>ADD</button>
            </form>
            <div className={style.plotWrapper}>
                <Plot layout={layout} data={data} />
            </div>
            <div className={style.graphControls}>
                <button onClick={() => resetPoints()}>RESET</button>
            </div>
        </div >
    )
}

export default Graph

Graph.propTypes = {
    id: PropTypes.string.isRequired,
}
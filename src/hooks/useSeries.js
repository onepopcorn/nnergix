import { useEffect, useState } from 'react'
import { getSeriesData } from '../utils/api.js'

const useSeries = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const getData = async (controller) => {
        try {
            setLoading(true)
            const res = await getSeriesData(controller)
            setData(res)
        } catch (e) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const controller = new AbortController()
        getData(controller)
    }, [])

    return { loading, error, data }
}

export default useSeries
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { getGraphData } from '../utils/api.js'

const useGraphData = (id = null) => {
    const [layout, setLayout] = useState(null)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const loadData = async (controller) => {
        try {
            setLoading(true)
            const res = await getGraphData(id, controller)
            setLayout(res.layout)
            setData(res.data)
        } catch (e) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (id === null) return

        const controller = new AbortController()
        loadData(controller)

        return () => controller.abort()
    }, [id])

    return { loading, error, layout, data }
}

export default useGraphData
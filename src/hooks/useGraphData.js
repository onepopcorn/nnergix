import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { getGraphData } from '../utils/api.js'

const useGraphData = (id = null) => {
    const [layout, setLayout] = useState(null)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [addedIndex, setAddedIndex] = useState(-1)

    const loadData = async (controller) => {
        try {
            setLoading(true)
            const res = await getGraphData(id, controller)
            setLayout(res.layout)
            setData(res.data)
            setAddedIndex(res.data[0].x.length)
        } catch (e) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    /**
     * NOTE: For the purpose of this test we will only 
     * care about the first chart plot but in a real worl app
     * we should care about all possible charts
     * 
     */
    const addPoints = (x, y) => {
        setData([
            {
                ...data[0],
                x: [...data[0].x, x],
                y: [...data[0].y, y],
            }
        ])

    }

    const resetPoints = () => {
        setData([
            {
                ...data[0],
                x: data[0].x.slice(0, addedIndex),
                y: data[0].y.slice(0, addedIndex),
            }
        ])
    }

    useEffect(() => {
        if (id === null) return

        const controller = new AbortController()
        loadData(controller)

        return () => controller.abort()
    }, [id])

    return { loading, error, layout, data, addPoints, resetPoints }
}

export default useGraphData
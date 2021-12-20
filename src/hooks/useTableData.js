import { useState, useEffect } from 'react'
import { getTableData } from '../utils/api.js'

const useTableData = (id = null) => {
    const [fields, setFields] = useState(null)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = async (controller) => {
        try {
            setLoading(true)
            const res = await getTableData(id, controller)
            setFields(res.schema.fields)
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
        fetchData(controller)

        return () => controller.abort()
    }, [id])

    return { loading, error, fields, data }
}

export default useTableData
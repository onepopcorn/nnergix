import { renderHook, act } from '@testing-library/react-hooks'
import useGraphData from '../useGraphData.js'

test('useGraphData should load default values', async () => {
    const test_data = {
        layout: 'layout-stub',
        data: 'data-stub',
    }
    fetch.mockResponseOnce(JSON.stringify(test_data));
    const { result, waitForNextUpdate } = renderHook(() => useGraphData('endpoint'))

    // loading
    expect(result.current.loading).toBe(true)
    await waitForNextUpdate()

    // loaded data
    expect(result.current.layout).toEqual(test_data.layout)
    expect(result.current.data).toEqual(test_data.data)

})

test('useGraphData should return error when endpoint is not reached', async () => {
    fetch.mockReject(() => Promise.reject('file not found'))
    const { result, waitForNextUpdate } = renderHook(() => useGraphData('endpoint'))

    await waitForNextUpdate()
    expect(result.current.error).toBe(true)
})
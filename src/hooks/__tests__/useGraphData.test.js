import { renderHook, act } from '@testing-library/react-hooks'
import useGraphData from '../useGraphData.js'

test('useGraphData should load default values', async () => {
    const test_data = {
        layout: 'layout-stub',
        data: [{ x: [], y: [] }],
    }
    fetch.mockResponseOnce(JSON.stringify(test_data));
    const { result, waitForNextUpdate } = renderHook(() => useGraphData('testid'))

    // loading
    expect(result.current.loading).toBe(true)
    await waitForNextUpdate()

    // loaded data
    expect(result.current.layout).toEqual(test_data.layout)
    expect(result.current.data).toEqual(test_data.data)

})

test('useGraphData should return error when endpoint is not reached', async () => {
    fetch.mockReject(() => Promise.reject('file not found'))
    const { result, waitForNextUpdate } = renderHook(() => useGraphData('testid'))

    await waitForNextUpdate()
    expect(result.current.error).toBe(true)
})

test('useGraphData should be able to add points', async () => {
    const test_data = {
        layout: 'layout-stub',
        data: [{
            x: [1, 2, 3],
            y: [1, 2, 3],
        }],
    }
    fetch.mockResponseOnce(JSON.stringify(test_data));
    const { result, waitForNextUpdate } = renderHook(() => useGraphData('testid'))
    await waitForNextUpdate()

    // default data
    expect(result.current.data[0].x).toEqual(test_data.data[0].x)
    expect(result.current.data[0].y).toEqual(test_data.data[0].y)

    // add data
    act(() => {
        result.current.addPoints(4, 4)
    })

    expect(result.current.data[0].x).toEqual([...test_data.data[0].x, 4])
    expect(result.current.data[0].y).toEqual([...test_data.data[0].y, 4])

    // reset data
    act(() => {
        result.current.resetPoints()
    })

    expect(result.current.data.x).toEqual(test_data.data.x)
    expect(result.current.data.y).toEqual(test_data.data.y)

})
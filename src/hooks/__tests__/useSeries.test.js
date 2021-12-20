import { renderHook, act } from '@testing-library/react-hooks'
import useSeries from '../useSeries.js'

test('useSeries should load data', async () => {
    const test_data = [
        { name: 'test-stub-1' },
        { name: 'test-stub-2' },
    ]
    fetch.mockResponseOnce(JSON.stringify(test_data));
    const { result, waitForNextUpdate } = renderHook(() => useSeries())

    // loading
    expect(result.current.loading).toBe(true)
    await waitForNextUpdate()

    // loaded data
    expect(result.current.data).toEqual(test_data)

})

test('useSeries should return error when endpoint is not reached', async () => {
    fetch.mockReject(() => Promise.reject('file not found'))
    const { result, waitForNextUpdate } = renderHook(() => useSeries())

    await waitForNextUpdate()
    expect(result.current.error).toBe(true)
})
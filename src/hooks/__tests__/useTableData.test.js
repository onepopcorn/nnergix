import { renderHook } from '@testing-library/react-hooks'
import useTableData from '../useTableData'

beforeEach(() => {
    fetch.resetMocks()
})

test('useTableData should load data', async () => {
    const test_data = {
        schema: {
            fields: [
                {
                    "name": "test",
                    "type": "string"
                },
            ]
        },
        data: 'data-stub'
    }

    fetch.mockResponseOnce(JSON.stringify(test_data));
    const { result, waitForNextUpdate } = renderHook(() => useTableData('endpoint'))

    // loading
    expect(result.current.loading).toBe(true)
    await waitForNextUpdate()

    // loaded data
    expect(result.current.fields).toEqual(test_data.schema.fields)
    expect(result.current.data).toEqual(test_data.data)
})

test('useTableData should return error if endpoint is not reached', async () => {
    fetch.mockReject(() => Promise.reject('file not found'))
    const { result, waitForNextUpdate } = renderHook(() => useTableData('endpoint'))

    await waitForNextUpdate()
    expect(result.current.error).toBe(true)
})
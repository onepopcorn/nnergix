import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Series from '../Series'

test('Series should load data', async () => {
    const test_data = [
        {
            'name': 'ts1',
            'altitude': 'test-alt',
            'created_by': 'test-created',
            'lat': 'test-lat',
            'lng': 'test-lng',
        },
        {
            'name': 'ts2',
            'altitude': 'test2-alt',
            'created_by': 'test2-created',
            'lat': 'test2-lat',
            'lng': 'test2-lng',
        }
    ]

    fetch.mockResponseOnce(JSON.stringify(test_data))
    const mockedCallback = jest.fn()
    render(<Series id='ts1' onChange={mockedCallback} />)

    await screen.findByText(/loading/i)


    // Data is printed
    screen.getByText(/test-alt/i)
    screen.getByText(/test-created/i)
    screen.getByText(/test-lat/i)
    screen.getByText(/test-lng/i)

    // Interactivity
    expect((await screen.findAllByRole('option')).length).toBe(2)
    await screen.findByRole('option', { name: /ts1/i })
    await screen.findByRole('option', { name: /ts2/i })

    userEvent.selectOptions(screen.getByRole('combobox'), ['ts2'])
    expect(mockedCallback.mock.calls.length).toBe(1)
})
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Graph from '../Graph.jsx'
import useGraphData from '../../../hooks/useGraphData.js'

test('Graph should show error when data can\'t be loaded', async () => {
    fetch.mockReject(() => Promise.reject('file not found'))
    render(<Graph id='test-id' />)

    await screen.findByText(/something went wrong/i)
})

test('Graph should load data', async () => {
    const test_data = {
        data: [{
            x: [10, 20, 30],
            y: [10, 20, 30],
        }]
    }

    fetch.mockResponseOnce(JSON.stringify(test_data))
    const { container } = render(<Graph id='test-id' />)

    // loading
    await screen.findByText(/loading/i)

    // loaded data. NOTE: it's not this test responsability to test third party components functioniality 
    // that's why we only test a SVG has been added after data loading and nothing else
    await waitFor(() => {
        expect(container.querySelector('svg')).toBeInTheDocument()
    })

    // Interactivity without crashing
    screen.getByRole('button', { name: /add/i })
    const xInput = screen.getByRole('spinbutton', { name: /x:/i })
    expect(xInput).toHaveValue(10)

    const yInput = screen.getByRole('spinbutton', { name: /y:/i })
    expect(yInput).toHaveValue(110)

    userEvent.clear(xInput)
    userEvent.clear(yInput)

    userEvent.type(xInput, '40')
    userEvent.type(yInput, '200')

    userEvent.click(screen.getByRole('button', { name: /add/i }))

    // Reset controls
    userEvent.click(screen.getByRole('button', { name: /reset/i }))
})
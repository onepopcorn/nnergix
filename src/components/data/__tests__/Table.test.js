import { render, screen } from '@testing-library/react'
import Table from '../Table.jsx'

beforeEach(() => {
    fetch.resetMocks()
})

test('Table should be mounted without crashing', async () => {
    render(<Table id='testid' />)
    await screen.findByText(/loading/i)
})


test('Table should print rows correctly for given data', async () => {
    const test_data = {
        schema: {
            fields: [
                {
                    name: 'field one',
                    type: 'string',
                },
                {
                    name: 'field two',
                    type: 'number',
                },
            ]
        },
        data: [
            {
                "field one": "first row content",
                "field two": 1
            },
            {
                "field one": "second row content",
                "field two": 2
            },
            {
                "field one": "third row content",
                "field two": 1
            },
        ]
    }

    fetch.mockResponseOnce(JSON.stringify(test_data));

    render(<Table id='testid' />)

    // headers
    await screen.findByRole('columnheader', { name: /field one/i })
    await screen.findByRole('columnheader', { name: /field two/i })

    // content string
    await screen.findByRole('row', { name: /first row content/i })
    await screen.findByRole('row', { name: /second row content/i })
    await screen.findByRole('row', { name: /third row content/i })
})
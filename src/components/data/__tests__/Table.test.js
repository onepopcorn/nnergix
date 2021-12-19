import { render, screen } from '@testing-library/react'
import Table from '../Table.jsx'

test('Table should be mounted without crashing', () => {
    render(<Table />)
})


test('Table should print rows correctly for given data', () => {
    const fields = [
        {
            name: 'field one',
            type: 'string',
        },
        {
            name: 'field two',
            type: 'number',
        },
    ]

    const data = [
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

    render(<Table fields={fields} data={data} />)

    // headers
    screen.getByRole('columnheader', { name: /field one/i })
    screen.getByRole('columnheader', { name: /field two/i })

    // content string
    screen.getByRole('row', { name: /first row content/i })
    screen.getByRole('row', { name: /second row content/i })
    screen.getByRole('row', { name: /third row content/i })

})
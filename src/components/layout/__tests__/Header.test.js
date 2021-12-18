import { render, screen } from '@testing-library/react'

import Header from '../Header.jsx'

test('Should mount Header without errors', () => {
    render(<Header />)
})

test('Header should print passed children', () => {
    render(<Header>test content</Header>)
    screen.getByText(/test content/i)
})
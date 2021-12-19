import { render, screen } from '@testing-library/react'
import Widget from '../Widget.jsx'

test('Widget should render without crashing', () => {
    render(<Widget>test content</Widget>)
})

test('Widget should render passed content as-is', () => {
    render(<Widget>test content</Widget>)
    screen.getByText(/test content/i)
})
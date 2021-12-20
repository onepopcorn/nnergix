import { render } from '@testing-library/react'
import LoadingError from '../LoadingError.jsx'

test('LoadingError should render without crashing', () => {
    render(<LoadingError />)
})
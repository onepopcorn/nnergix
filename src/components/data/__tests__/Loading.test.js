import { render } from '@testing-library/react'
import Loading from '../Loading.jsx'

test('Loading should render without crashing', () => {
    render(<Loading />)
})
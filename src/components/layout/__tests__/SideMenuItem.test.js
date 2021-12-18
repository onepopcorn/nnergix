import { render } from '@testing-library/react'
import SideMenuItem from '../SideMenuItem.jsx'

test('SideMenuItem should render without crashing', () => {
    render(<SideMenuItem text='test' link='#' />)
})
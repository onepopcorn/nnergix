import { render } from '@testing-library/react'
import SideMenu from '../SideMenu'

test('SideMenu should render without crashing', () => {
    render(<SideMenu />)
})
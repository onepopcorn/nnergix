import { render } from '@testing-library/react'
import WidgetArea from '../WidgetArea.jsx'

test('WidgetArea should render without crashing', () => {
    render(<WidgetArea title='test' icon='test_icon' />)
})
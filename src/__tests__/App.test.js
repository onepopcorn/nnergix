import { render } from '@testing-library/react'

import App from '../App.jsx'

test('App should mount without crashing', () => {
    render(<App />)
})
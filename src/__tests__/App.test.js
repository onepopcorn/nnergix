import { render, screen } from '@testing-library/react'

import App from '../App.jsx'

test('App should mount without crashing', async () => {
    render(<App />)
    await screen.findByAltText('NNergix')
})
// Make these available everywhere within test context
import "@testing-library/jest-dom"
import React from 'react'
import fetchMock from "jest-fetch-mock";

global.React = React
fetchMock.enableMocks();

// Plotly issue see: https://github.com/plotly/react-plotly.js/issues/115
window.URL.createObjectURL = jest.fn();

// see: https://stackoverflow.com/questions/48828759/unit-test-raises-error-because-of-getcontext-is-not-implemented
HTMLCanvasElement.prototype.getContext = () => { };
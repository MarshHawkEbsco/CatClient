import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { } from './actions/index.js'
import combinedReducer from './reducers/combinedReducer'
import FileDialogContainer from './containers/fileDialogContainer'

let initialState = {}
let store = createStore(combinedReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <FileDialogContainer />
    </Provider>,
    document.getElementById('app')
);
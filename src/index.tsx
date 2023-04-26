import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {RecoilRoot} from 'recoil'
import {Atoms} from './examples/Atoms'
import {BeforeAtoms} from './examples/BeforeAtoms'
import {Selectors} from './examples/Selectors'
import {BasicSelectors} from './examples/BasicSelector'
import {Async} from './examples/Async1'
import {Async2} from './examples/Async2'

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <ChakraProvider>
                <Router>
                    <Switch>
                        <Route path="/examples/atoms">
                            <Atoms />
                        </Route>
                        <Route path="/examples/beforeatoms">
                            <BeforeAtoms />
                        </Route>
                        <Route path="/examples/selectors">
                            <Selectors />
                        </Route>
                        <Route path="/examples/basicselectors">
                            <BasicSelectors />
                        </Route>
                        <Route path="/examples/async1">
                            <Async />
                        </Route>
                        <Route path="/examples/async2">
                            <Async2 />
                        </Route>
                        <Route>
                            <Atoms />
                        </Route>
                    </Switch>
                </Router>
            </ChakraProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root'),
)

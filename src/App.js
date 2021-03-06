import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux';
import Header from './component/Header';
import store from './store';
import {Route, BrowserRouter} from'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
class App extends Component{
    render(){
        return (
        <Provider store={store}>
            <Fragment>
                <Header></Header>
                <BrowserRouter>
                    <Fragment>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/detail" exact component={Detail}></Route>
                    </Fragment>
                </BrowserRouter>
            </Fragment>
        </Provider>);
    }
};
export default App;
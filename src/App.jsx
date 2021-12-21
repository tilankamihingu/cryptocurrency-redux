import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {Navbar, HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News} from './components';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <HomePage />
                            </Route>
                            <Route path="/exchanges">
                                <Exchanges />
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies />
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails />
                            </Route>
                            <Route path="/news">
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
            
            <div className="footer">
                <Typography.Title  level={5} style={{color: 'white', textAlign: 'center'}}>
                    Cryp<br />
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to="/home">Home</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/news">News</Link>
                </Space>
            </div>
            </div>
        </div>
    )
}

export default App

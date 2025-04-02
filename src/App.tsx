import { Layout, Space } from 'antd';
import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes, Route, Link, BrowserRouter
} from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Articles from './components/Articles'
import DetailArticle from './components/DetailArticle';
import NewArticle from './components/NewAritcles';

const { Header, Content, Footer } = Layout;
const App = () => {
    return (
        <BrowserRouter>
            <Header>
                <nav>
                    <Space>
                        <Link to="/NewAritcles">New Article</Link>
                        <Link to="/">Home</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/about">About</Link>
                        <Link to="/articles">Article</Link>
                    </Space>
                </nav>
            </Header>
            <Content>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/NewAritcles" element={<NewArticle />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/articles" element={<Articles/>} />
                    <Route path="/detail/:aid" element={<DetailArticle/>} />
                </Routes>
            </Content>
            <Footer>
                <p>VT6003CEM Demo</p>
            </Footer>

        </BrowserRouter>
    );
}
export default App;
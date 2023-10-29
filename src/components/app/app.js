import React from 'react';
import { BrowserRouter as Router, Routes, Route, redirect, useNavigate } from 'react-router-dom';
import LazyLoadComponent from '../lazyLoudComponent/lazyLoudComponent';
import Layout from '../layout/layout';
import tabs from '../../tabs/tabs.json';

const App = () => {

  return (
    <Router >
      <Routes>
        <Route path="/" element={ <Layout tabs={tabs} />} >
        <Route index element={<LazyLoadComponent path={tabs[0].path} />}/>
            {tabs.map( tab => (
                <Route key={tab.id} path={`${tab.id}`} element={<LazyLoadComponent path={tab.path} />} />
            ))}   
        </Route>
      </Routes>
    </Router>
  );
};

export default App;



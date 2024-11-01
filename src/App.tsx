import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Work } from './pages/work';
import { Connect } from './pages/connect';
import { Layout } from './layout';
import { LayoutConnect } from './layoutConnect';
import { BMA } from './pages/bma';
import { GMs } from './pages/gms';
import { DaysOfDes } from './pages/30dod';
import { KingsAndQueens } from './pages/kqt';
import { UnfinishedNFTs } from './pages/unfinishedNFTs';
import { Misc } from './pages/misc';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Work />} />
          <Route path="/bma" element={<BMA />} />
          <Route path="/gms" element={<GMs />} />
          <Route path="/30dod" element={<DaysOfDes />} />
          <Route path="/kqt" element={<KingsAndQueens />} />
          <Route path="/unfinishedNFTs" element={<UnfinishedNFTs />} />
          <Route path="/misc" element={<Misc />} />
        </Route>
      </Routes>
      <Routes>
        <Route element={<LayoutConnect />}>
          <Route path="/connect" element={<Connect />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

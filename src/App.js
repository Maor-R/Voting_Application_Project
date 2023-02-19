import { useState, useEffect } from 'react';

import { PAGES } from './constants';
import {partiesVotesAmount} from './data';

import { Admin, Login, Voting } from './pages';

import './styles/App.css'

const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;
localStorage.setItem('partiesVotesAmount', JSON.stringify(partiesVotesAmount));

const App = () => {
  const [page, setPage] = useState('login');

  const [ login, admin, voting] = PAGES;

  useEffect(() => {
    if (!userData) {
      setPage(login);
    } else {
      setPage(voting);
    }
  }, [login, voting]);

  switch (page) {
    case login:
      return <Login setPage={setPage} />;
    case admin:
      return <Admin setPage={setPage} />;
    case voting:
      return <Voting setPage={setPage} />;
    default:
      return <Login setPage={setPage} />;
  }

};

export default App;

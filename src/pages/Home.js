import React from 'react';
import Greeting from '../components/greetings/Greeting';
import { useContext } from 'react';
import {CounterContext} from '../context/CounterContext';
import ChangeCounterContext from '../components/buttons/ChangeCounterContext';


const Home = () => {
  const { counter } = useContext(CounterContext);


  return (
    <div>
          <Greeting name="world" />
          <h1>Welcome to my app</h1>
          <p>Permanent counter value: {counter}</p>
          <ChangeCounterContext />
    </div>
  );
};

export default Home;

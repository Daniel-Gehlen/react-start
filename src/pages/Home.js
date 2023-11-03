import React from 'react';
import Greeting from '../components/greetings/Greeting';


function Home() {
  return (
    <div>
          <Greeting name="world" />
          <h1>Welcome to my app</h1>
    </div>
  );
}

export default Home;

// TodoListProfile2.js (ou TodoListProfile2.tsx)
import React from 'react';

const person2 = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoListProfile2() {
  return (
    <div style={person2.theme}>
      <h1>{person2.name}'s Profile</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>  {/* Adicione mais informações do perfil aqui */}
    </div>
  );
}

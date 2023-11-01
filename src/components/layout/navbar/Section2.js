import React from 'react';
import Clock from '../../clocks/Clock'; // O caminho relativo pode variar dependendo da estrutura do seu projeto

function Section2() {
  return (
    <div>
      <h2>Clock</h2>
      <Clock color="red" time="12:30 PM" />
      {/* Outros componentes ou conteúdo da Section2 */}
    </div>
  );
}

export default Section2;

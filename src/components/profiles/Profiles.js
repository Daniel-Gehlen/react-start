import React from 'react';
import Card from '../cards/Card';

export default function Profile(props) {

  // Defina valores padrão se as propriedades não estiverem definidas

  return (
    <div>
      <h2>Profiles</h2>
      <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
    </div>
  );
}

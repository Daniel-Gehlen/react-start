import React from 'react';
import Avatar from '../avatars/Avatar';
import Card from '../cards/Card';

export default function Profile(props) {

  // Defina valores padrão se as propriedades não estiverem definidas

  return (
    <div>
      <h2>Profiles</h2>
      <Card name="Aklilu Lemma">
        <Avatar
          person={{
            name: 'Aklilu Lemma',
            imageId: 'OKS67lh'
          }}
        />
      </Card>
      <Card name="Lin Lanying">
        <Avatar
          person={{
            name: 'Lin Lanying',
            imageId: '1bX5QH6'
          }}
        />
      </Card>
    </div>
  );
}

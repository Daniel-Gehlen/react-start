import React from 'react';
import Card from '../cards/Card';
import Avatar from '../avatars/Avatar';
import styles from './Gallery.module.css'; // Importe o arquivo CSS Module


const cards = [
  {
    name: 'Aklilu Lemma',
    imageId: 'OKS67lh',
    details: [
      { title: 'Profession', content: 'doctor and scientist' },
      { title: 'Awards', content: 'Right Livelihood together with Legesse Wolde-Yohannes' },
      { title: 'Discovered', content: 'than Endod, extracted from the plant Phytolacca dodecandra, Sapindus acts as a powerful molluscicide against gastropods involved on the bilharzia parasitic cycle.' }
    ]
  },
  {
    name: 'Lin Lanying',
    imageId: '1bX5QH6',
    details: [
      { title: 'Profession', content: 'materials engineering scientist' },
      { title: 'Awards', content: 'Academician of the Chinese Academy of Sciences (1980)' },
      { title: 'Discovered', content: 'produced the first germanium and silicon single crystals in China.'}
    ]
  },

  {
    name: 'Maria Skłodowska-Curie',
    imageId: 'szV5sdG',
    details: [
      { title: 'Profession', content: 'physicist and chemist' },
      { title: 'Awards', content: '4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)' },
      { title: 'Discovered', content: 'polonium (element)' }
    ]
  },

  {
    name: 'Katsuko Saruhashi',
    imageId: 'YfeOqp2',
    details: [
      { title: 'Profession', content: 'geochemist' },
      { title: 'Awards', content: '2 (Miyake Prize for geochemistry, Tanaka Prize)' },
      { title: 'Discovered', content: 'a method for measuring carbon dioxide in seawater' }
    ]
  },
  // Adicione outros cards conforme necessário, cada um com suas próprias informações de pessoa e detalhes
];

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <div className={styles.gallery}> {/* Aplicando o estilo do Gallery.module.css */}
        {cards.map((card, index) => (
          <Card key={index} name={card.name}>
            <Avatar person={{ name: card.name, imageId: card.imageId }} details={card.details} />
          </Card>
        ))}
      </div>
    </section>
  );
}

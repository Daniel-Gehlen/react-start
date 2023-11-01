// Card.js
import React from 'react';
import styles from './Card.module.css';

function Card({ children, name }) {
  return (
    <div className={styles.card}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          // Adicione a propriedade 'name' a cada filho (Avatar)
          return React.cloneElement(child, { name });
        }
        return child;
      })}
    </div>
  );
}

export default Card;

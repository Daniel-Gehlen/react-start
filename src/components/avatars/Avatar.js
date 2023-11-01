// Avatar.js
import React from 'react';
import styles from './Avatar.module.css';
import { getImageUrl } from '../utils/getImageUrl';

function Avatar({ person, size = 100, name = 'Nome Padrão', details }) {
  return (
    <div>
      <img
        className={styles.avatar}
        src={getImageUrl(person)}
        alt={name}
        width={size}
        height={size}
      />
      <p>{name}</p>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>
            <b>{detail.title}: </b>
            {detail.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Avatar;

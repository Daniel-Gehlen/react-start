import styles from '../profiles/Profile.module.css';

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoListProfile1() {
    return (
      <>
        <h1>Hedy Lamarr's Profile</h1>
        <img
          className={styles.avatar}
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
        />
        <h2>To Do List for {formatDate(today)}</h2>
        <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve spectrum technology</li>
        </ul>
      </>
    );
  }
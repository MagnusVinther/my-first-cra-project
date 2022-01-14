import styles from './header.module.scss';
export const Header = (props) => {

    return (
      <header className={styles.headerMain}>
        <h1>{(props.pagetitle) ? props.pagetitle : 'My First React App Header Title'}</h1>
      </header>
    )
  }
    
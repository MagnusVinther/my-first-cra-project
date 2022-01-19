import styles from './footer.module.scss';

export const FooterNav = props => {
  return (
      <nav className={styles.footerNav}>
          <ul className={styles.footerUl}>
          {props && props.data && props.data.map((value, index) => {
                return (
                  <li key={index}><a href={value.path}>{value.name}</a></li>
                )
              })}
          </ul>
      </nav>
  )
}

export const Footer = () => {
    return (
      <>
      <footer className={styles.footerMain}>
        <h2>My First React App Footer</h2>
      </footer>
      </>
    )
  }



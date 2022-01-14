import styles from './footer.module.scss';
import { Nav } from '../Nav/nav.js';
import { navArr } from '../Nav/nav.js';

export const FooterNav = (props) => {
  return (
      <nav className={styles.footerNav}>
          <ul className={styles.footerUl}>
          {props.data.map(navArr => {
              return (
                <li className={styles.footerLi}>
                  {navArr}
                </li>
              )
            })}
          </ul>
      </nav>
  )
}

export const Footer = () => {
    return (
      <footer className={styles.footerMain}>
        <h2>My First React App Footer</h2>
        
      </footer>
    )
  }



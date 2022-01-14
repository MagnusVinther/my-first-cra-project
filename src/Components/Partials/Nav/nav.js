import styles from './nav.module.scss'



export const navArr = [
    'Forside',
    'Produkter',
    'Om os',
    'Ledige stillinger',
    'Kontakt os'
]

export const Nav = (props) => {
    return (
        <nav className={styles.navMain}>
            <ul>
            {props.data.map(navArr => {
                return (
                  <li>
                    {navArr}
                  </li>
                )
              })}
            </ul>
        </nav>
    )
}

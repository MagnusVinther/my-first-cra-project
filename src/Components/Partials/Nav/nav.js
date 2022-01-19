import styles from './nav.module.scss'





export const Nav = props => {
  console.log(props);
    return (
        <nav className={styles.navMain}>
            <ul>
            {props && props.data && props.data.map((value, index) => {
                return (
                  <li key={index}><a href={value.path}>{value.name}</a></li>
                )
              })}
            </ul>
        </nav>
    )
}

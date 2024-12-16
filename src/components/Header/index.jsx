import Logo from '../../Assets/Logo.svg'
import styles from "./style.module.scss"


export const Header = () => {
    return (
        <header className={styles.flexbox} >
            <img src={Logo} alt="Logo do site" />
        </header>
    )
}

//export default Batatinha;
import styles from "./style.module.scss"
export const Footer = () => {
    console.log(styles)
    return(
        <footer className={styles.footer}>
            <p className="paragraph">Todos os direitos reservados - Kenzie Academy Brasil</p>
        </footer>
    )
}
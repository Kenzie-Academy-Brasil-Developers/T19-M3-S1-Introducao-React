import styles from "./style.module.css"

export const Footer = () => {
    console.log(styles)
    return(
        <footer className={styles.footer}>
            <p className="paragraph">Todos os direitos reservados - Kenzie Academy Brasil</p>
        </footer>
    )
}
import { FormNewsletter } from "./FormNewsletter";
import styles from "./style.module.scss"

export const FormSection = () => {
    return (
        <div className="container sm">
            <section className={styles.newletterSection}>
                <h2 className="title2 center">INSCREVA-SE NA NEWSLETTER</h2>
                <FormNewsletter />
            </section>
        </div>
    );
}
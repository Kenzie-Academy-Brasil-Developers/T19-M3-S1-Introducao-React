import { Footer } from "../Footer"
import { Header } from "../Header"

export const DefaultTemplate = ({ children }) => {
    console.log(children)
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
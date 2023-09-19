//import Batatinha from "../../components/Header"
import { Header } from "../../components/Header"
import { BannerSection } from "../../components/BannerSection"
import { CategoriesSection } from "../../components/CategoriesSection"
import { Footer } from "../../components/Footer"
import { FormSection } from "../../components/FormSection"
import { ProductsSection } from "../../components/ProductsSection"

export const LadingPage = () => {
    return (
        <>
            <Header/>
            <BannerSection/>
            <CategoriesSection/>
            <ProductsSection/>
            <FormSection/>
            <Footer/>
        </>
    )
}
//import Batatinha from "../../components/Header"

import { DefaultTemplate } from "../../components/DefaultTemplate"
import { BannerSection } from "../../components/sections/BannerSection"
import { CategoriesSection } from "../../components/sections/CategoriesSection"
import { FormSection } from "../../components/sections/FormSection"
import { ProductsSection } from "../../components/sections/ProductsSection"

export const LadingPage = () => {
    return (
        <>
            <DefaultTemplate >
                {/* Isso é o valor children para o componente DefaultTemplate */}
                <BannerSection/>
                <CategoriesSection/>
                <ProductsSection/>
                <FormSection/>
            </DefaultTemplate>
        
        </>
    )
}
import { DefaultTemplate } from "../../components/DefaultTemplate"
import { BannerSection } from "../../components/Sections/BannerSection"
import { CategoriesSection } from "../../components/Sections/CategoriesSection"
import { FormSection } from "../../components/Sections/FormSection"
import { ProductsSection } from "../../components/Sections/ProductsSection"


export const LadingPage = () => {
    return (
        <>
            <DefaultTemplate>
                {/* Valor children para o componente DefaultTemplate */}
                <BannerSection />
                <CategoriesSection />
                <ProductsSection />
                <FormSection />
            </DefaultTemplate>
        </>
    )
}
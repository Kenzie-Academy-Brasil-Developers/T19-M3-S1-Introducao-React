import { CategoryCard } from "./CategoryCard"

export const CategoriesSection = () => {

    //categoryCard("Sapatos", "http://...")
    return (
        <section>
            <h2>CATEGORIAS</h2>
            <ul>
                <li><CategoryCard title="Sapatos" image="#"/></li>
                <li><CategoryCard title="Bolsas" image="#"/></li>
            </ul>
        </section>
    )
}
// import image1 from '../../../Assets/Category1.svg'
// import image2 from '../../../Assets/Category2.svg'
// import { CategoryCard } from "./CategoryCard"
import { categories } from "../../../data/categories"
import { CategoryCard } from "./CategoryCard"
import styles from "./style.module.scss"

export const CategoriesSection = () => {

    //categoryCard("Sapatos", "http://...")
    return (
        <div className='container'>
            <section className={styles.categoriesSection} >
                <div>
                    <h2 className='title2'>CATEGORIAS</h2>
                    <ul className={styles.categoriesList}>
                        {/* <li><CategoryCard title="Sapatos" image={image1} /></li>
                        <li><CategoryCard title="Bolsas" image={image2} /></li> */}

                            {
                                categories.map((category) =>{
                                    return(
                                        <li key={category.id}>
                                            <CategoryCard title={category.name} image={category.img} />
                                        </li>
                                    )
                                })
                            }
                    </ul>
                </div>
            </section>
        </div>
    )
}

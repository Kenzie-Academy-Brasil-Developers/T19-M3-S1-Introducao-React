import { CategoryCard } from "./CategoryCard";
import { categories } from "../../../data/categories";
export const CategoriesSection = () => {
  //categoryCard("Sapatos", "http://...")
  return (
    <div className="container">
      <section>
        <h2 className="title2">CATEGORIAS</h2>
        <ul>
            {categories.map((category) => {
                return (
                    <li key={category.id}>
                        <CategoryCard title={category.name} image={category.img}/>
                    </li>
                )
            })}
        </ul>
      </section>
    </div>
  );
};

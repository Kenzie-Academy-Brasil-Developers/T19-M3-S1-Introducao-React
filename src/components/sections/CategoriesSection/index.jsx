import { CategoryCard } from "./CategoryCard";
import Category1 from "../../../assets/category1.png";
import Category2 from "../../../assets/category2.png";

export const CategoriesSection = () => {
  //categoryCard("Sapatos", "http://...")
  return (
    <div className="container">
      <section>
        <h2 className="title2">CATEGORIAS</h2>
        <ul>
          <li>
            <CategoryCard title="Sapatos" image={Category1} />
          </li>
          <li>
            <CategoryCard title="Bolsas" image={Category2} />
          </li>
        </ul>
      </section>
    </div>
  );
};

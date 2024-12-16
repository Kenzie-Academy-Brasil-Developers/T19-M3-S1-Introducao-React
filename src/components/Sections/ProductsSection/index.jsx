// import Product1 from '../../../Assets/Product1.svg'
// import Product2 from '../../../Assets//Product2.svg'
// import Product3 from '../../../Assets/Product3.svg'
// import Product4 from '../../../Assets/Product4.svg'
import styles from "./style.module.scss"
import { ProductCard } from "./ProductCard"
import { products } from "../../../data/products"
export const ProductsSection = () => {
    // console.log(products)
    return (
        <div className="container">
            <section className={styles.productsSection}>
                <h2 className="title2">PRODUTOS EM DESTAQUE</h2>
                <ul  className={styles.productList}>

                    {/* <li><ProductCard title="Blazer Branco Elegante" price={490} image={Product1} /></li>
                    <li><ProductCard title="Sapatos Amarelos" price={490} image={Product2} /></li>
                    <li><ProductCard title="Blazer Laranja" price={320} image={Product3} /></li>
                    <li><ProductCard title="Calça Preta" price={140} image={Product4} /></li> */}

                    {
                        products.map((product) => {
                            return <li  key={product.id}>
                                <ProductCard title={product.name} price={product.price} image={product.img} />
                            </li>
                        })
                    }

                </ul>
            </section>
        </div>
    )
}
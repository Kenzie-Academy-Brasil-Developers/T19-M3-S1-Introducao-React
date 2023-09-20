import { ProductCard } from "./ProductCard"

export const ProductsSection = () => {
    return (
        <section>
            <h2 className="title2">PRODUTOS EM DESTAQUE</h2>
            <ul>
                <li><ProductCard title="Blazer Branco Elegante" price={490} image="#"/></li>
                <li><ProductCard title="Sapatos Amarelos" price={490} image="#"/></li>
                <li><ProductCard title="Blazer Laranja" price={320} image="#"/></li>
                <li><ProductCard title="Calça Preta" price={140} image="#"/></li>
            </ul>
        </section>
    )
}
export const ProductCard = ({title, image, price}) => {
    const priceFormated = price.toFixed(2).replace(".", ",");
    
    return (
        <>
            <img src={image} alt={`Produto ${title}`} />
            <h3>{title}</h3>
            <p>R${priceFormated}</p>  
            {/*<p>R${price.toFixed(2).replace(".", ",")}</p>*/}  
            
        </>
    )
}
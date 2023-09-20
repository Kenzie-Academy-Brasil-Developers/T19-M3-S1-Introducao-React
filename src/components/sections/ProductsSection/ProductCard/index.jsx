export const ProductCard = ({title, image, price}) => {
    const priceFormated = price.toFixed(2).replace(".", ",");
    
    return (
        <>
            <img src={image} alt={`Produto ${title}`} />
            <h3 className="title3">{title}</h3>
            <p className="price">R${priceFormated}</p>  
            {/*<p>R${price.toFixed(2).replace(".", ",")}</p>*/}  
            
        </>
    )
}
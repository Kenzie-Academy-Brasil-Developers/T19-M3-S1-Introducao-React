export const CategoryCard = ({title, image}) => {
    
    return (
        <>
            <img src={image} alt={`Categoria ${title}`} />
            <h3 className="title3 center">{title}</h3>
        </>
    )
}

//PROPS -> É SEMELHANTE A PARÂMETROS, MAS NÃO É UM PARÂMETRO

//function categoryCard(title, image) {
//    return { title, image };
//}


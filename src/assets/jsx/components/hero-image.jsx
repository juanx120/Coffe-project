export function HeroImage({title,srcImage,altImage}){
    return(
        <section className="hero-image">
            <figure className="hero-image__image">
                <img src={srcImage} alt={altImage} />
            </figure>
            <h1 className="hero-image__title">{title}</h1>
        </section>
    )
}
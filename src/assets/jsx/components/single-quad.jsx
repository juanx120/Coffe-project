export function SingleQuad ({id_item,bgcolor,title,srcImage,altImage,copy,btn,btn_label}){
    return(
        <section className={`single-quad bg-${bgcolor} flex aling-center`} id={id_item}>
            <div className="single-quad__container container flex aling-center justify-around">
                <div className="single-quad__left">
                    <figure className="single-quad__left-image">
                        <img src={srcImage} alt={altImage} />
                    </figure>
                </div>
                <div className="single-quad__right flex flex-column justify-evenly">
                    <h2 className="single-quad__right-title">{title}</h2>
                    <p className={`single-quad__right-copy id_copy_${id_item}`}>{copy}</p>
                    <a href={btn} className="btn">{btn_label}</a>
                </div>
            </div>
        </section>
    )
}
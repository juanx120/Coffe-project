export function SingleQuad ({lista}){
    const renderListItems = (items) => {
        return items.map((item, index) =>  
        <div key={index} className={`single-quad bg-${item.bg_color} flex aling-center`} id={index}>
            <div className="single-quad__container container flex aling-center justify-around">
                <div className="single-quad__left">
                    <figure className="single-quad__left-image">
                        <img src={item.image} alt={item.alt_image} />
                    </figure>
                </div>
                <div className="single-quad__right flex flex-column justify-evenly">
                    <h2 className="single-quad__right-title">{item.title}</h2>
                    <p className="single-quad__right-copy">{item.copy}</p>
                    <a href={item.btn_href} className="btn">{item.btn_label}</a>
                </div>
            </div>)
        </div>);
    }

    return(
        <section className="single-quad-section">
            {renderListItems(lista)}
        </section>
    )
}
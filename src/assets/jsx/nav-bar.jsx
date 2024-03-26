

export function NavBar (){
    return(
        <nav className="primary-nav">
            <div className="container flex justify-around">
                <div className="primary-nav__left flex justify-around aling-center">
                    <a href="">inicio</a>
                    <a href="">herramientas</a>
                </div>
                <div className="primary-nav__center">
                    <a href="/">
                        <img src="./src/assets/images/de-la-mata-a-la-taza-trasparente.png" alt="" />
                    </a>
                </div>
                <div className="primary-nav__right flex justify-around aling-center">
                    <a href="">recorrido</a>
                    <a href="">acerca del cafe</a>
                </div>
            </div>
        </nav>
    )
}
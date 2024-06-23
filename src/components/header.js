import React from "react";

const cvUrl = "https://drive.google.com/file/d/1Zz0RX59SPUqVH839iGk4nc-OU7lzCe8a/view";


function Header() {
    return (

        <div id="home" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-2"/>
                    <div className="col-md-8 wow fadeIn" data-wow-delay="0.9s">
                        <h3>José Ernesto Cortes</h3>
                        <br/>
                        <img className="p-4" src={"logo.png"} width={100} height={100} alt="portfolio img"/>
                        <br/>
                        <h1>CorteStudios</h1>
                        <h3 className="rotate">DESARROLLO MÓVIL, DESARROLLO DE SOFTWARE, DESARROLLO WEB</h3>
                        <p className="mt-3" style={{ color: 'white', marginTop: '30px' }}>Ingeniero de software con más de 4 años de experiencia, con ganas de
                            aprender cada día y superarme mediante nuevos desafíos</p>
                        <a href={cvUrl}  target="_blank" rel="noopener noreferrer" className="btn btn-default smoothScroll wow fadeInUp" data-wow-delay="1s">
                            Descargar CV</a>
                    </div>
                    <div className="col-md-2"/>
                </div>
            </div>
        </div>

    );
}

export default Header;

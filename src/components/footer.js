import React from "react";


function Footer() {

    const currentYear = new Date(Date.now()).getFullYear();
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 wow fadeIn" data-wow-delay="0.9s">
                        <p id="footer">Todos los derechos reservados
                            <img width="25px" height="25px" src={"logo.png"} alt="portfolio img"/>
                            CorteStudios &copy; {currentYear}
                        </p>
                        <ul className="social-icon">
                            <li><a href="https://linkedin.com/in/josé-ernesto-cortes-mendez-7bb8671b6 " target="_blank"
                                   rel="noreferrer" className="fa fa-linkedin"/></li>
                            <li><a href="https://twitter.com/Joshecm94" rel="noreferrer" target="_blank" className="fa fa-twitter"/></li>
                            <li><a href="https://www.instagram.com/josh.e.cortes.m94" target="_blank"
                                   rel="noreferrer" className="fa fa-instagram"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
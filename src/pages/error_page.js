import React from "react";
import AnimatorRender from "../components/animnationRender";
import errorPageJson from "../animations/error_page.json";


function ErrorPage() {

    return (
        <div id="error-page">
            <div className="container">
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-12 wow fadeInUp" data-wow-delay="0.4s">
                        <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                            <AnimatorRender animJson={errorPageJson} height={250} width={300} vis={"visible"}/>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-12 wow fadeInUp" data-wow-delay="0.4s">
                        <h4>Página no encontrada</h4>
                        <p>La pagina que busca no existe, o ha sido cambiada recientemente</p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="col-md-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="small">
                            <div className="media-object media-left media-body">
                                <a href={"/"} style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                                    <i className="fa fa-home fa-2x" title="Ir a casa"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;
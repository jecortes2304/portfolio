import React from "react";


function Skill(props) {
    return (
        <div>
            <span className="text-top">{props.skill}
                <small>{props.percent}%</small>
            </span>
            <div className="progress">
                <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60"
                     aria-valuemin="0" aria-valuemax="100" style={{width: props.percent + "%"}}/>
            </div>
        </div>
    );
}

function About() {
    return (

        <div>
            <div id="about" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 wow fadeInLeft" data-wow-delay="0.9s">
                            <img src="/images/portfolio-foto1.png" className="img-responsive center-block" width={150} alt="portfolio img"/>
                            <h2>ACERCA DE MÍ</h2>
                            <h4>DISEÑO & DESARROLLO</h4>
                            <p>Soy Ingeniero de Software con más de 4 años de experiencia en el desarrollo móvil para Android, desarrollo multiplataforma de aplicaciones de escritorio y desarrollo web Full Stack,
                                disfruto estudiar en solitario y aprender nuevas formas de hacer las cosas, nuevos retos que siempre me permitan poner en práctica cualquier conocimiento que haya
                                adquirido o esté aprendiendo. He desarrollado software mayormente con Java en varios entornos, aunque he usado otros lenguajes y frameworks como Javascript y ReactJs/NextJs/ExpressJs, Kotlin y Java
                                para Android, Python y FastApi, entre otros. No me dedico profesionalmente a desarrollar juegos, pero disfruto mucho aprendiendo como hobby C# y Unity. Pienso que las tecnologías son realmente negociables,
                                que debemos usarlas a conveniencia para solucionar nuestras tareas de la manera más eficiente, no es necesario aprenderlas todas, tampoco solo una que funcione como una navaja suiza,
                                debemos aprender la que se requiere para el proyecto dependiendo de sus requisitos funcionales.
                            </p>
                        </div>
                        <div className="col-md-3 wow fadeInRight" data-wow-delay="0.9s">
                            <Skill skill={"Java"} percent={86}/>
                            <Skill skill={"JavaScript"} percent={70}/>
                            <Skill skill={"Kotlin"} percent={52}/>
                            <Skill skill={"C#"} percent={50}/>
                            <Skill skill={"Typescript"} percent={65}/>
                            <Skill skill={"Python"} percent={75}/>
                        </div>
                        <div className="col-md-3 wow fadeInRight" data-wow-delay="0.9s">
                            <Skill skill={"Flask"} percent={56}/>
                            <Skill skill={"Odoo ERP"} percent={49}/>
                            <Skill skill={"Scraping Web"} percent={74}/>
                            <Skill skill={"Fast API"} percent={77}/>
                            <Skill skill={"Django"} percent={54}/>
                            <Skill skill={"Figma"} percent={70}/>
                        </div>
                        <div className="col-md-3 wow fadeInRight" data-wow-delay="0.9s">
                            <Skill skill={"Photoshop"} percent={76}/>
                            <Skill skill={"React Js"} percent={65}/>
                            <Skill skill={"Express JS"} percent={84}/>
                            <Skill skill={"Next Js"} percent={60}/>
                            <Skill skill={"Node Js"} percent={80}/>
                        </div>
                        <div className="col-md-3 wow fadeInRight" data-wow-delay="0.9s">
                            <Skill skill={"Android SDK"} percent={90}/>
                            <Skill skill={"Spring Boot"} percent={63}/>
                            <Skill skill={"JavaFx"} percent={80}/>
                            <Skill skill={"Java Swing"} percent={76}/>
                            <Skill skill={"Wordpress"} percent={80}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About
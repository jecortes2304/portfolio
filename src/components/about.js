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
                            <h2>ACERCA DE MÍ</h2>
                            <h4>DISEÑO & DESARROLLO</h4>
                            <p>Soy Ingeniero de Software desde hace 4 años, disfruto estudiar en solitario y aprender nuevas formas de hacer las cosas, nuevos retos que siempre me permitan poner en práctica cualquier conocimiento que haya
                                adquirido o esté aprendiendo. He desarrollado software mayormente con Java en varios entornos, aunque he usado otros lenguajes y frameworks como C# y .Net, Javascript y React, Kotlin
                                para Android, entre otros. No me dedico profesionalmente a desarrollar juegos, pero disfruto mucho aprendiendo como hobby C# y Unity. Pienso que las tecnologías son realmente negociables,
                                que debemos usarla a conveniencia para solucionar nuestras tareas de la manera mas eficiente, no es necesario aprenderlas todas, tampoco solo una que funcione como una navaja suiza,
                                debemos aprender la que se requiere para el proyecto dependiendo de sus requisitos funcionales.
                            </p>
                        </div>
                        <div className="col-md-3 wow fadeInRight" data-wow-delay="0.9s">
                            <Skill skill={"Java"} percent={86}/>
                            <Skill skill={"JavaScript"} percent={61}/>
                            <Skill skill={"Kotlin"} percent={52}/>
                            <Skill skill={"C#"} percent={50}/>
                        </div>
                        <div className="col-md-3 wow fadeInRight" data-wow-delay="0.9s">
                            <Skill skill={"Android SDK"} percent={90}/>
                            <Skill skill={"Spring Boot"} percent={63}/>
                            <Skill skill={"React Js"} percent={42}/>
                            <Skill skill={"JavaFx"} percent={80}/>
                        </div>
                        <div className="col-md-3 wow fadeInRight" data-wow-delay="0.9s">
                            <Skill skill={"Java Swing"} percent={76}/>
                            <Skill skill={".Net"} percent={41}/>
                            <Skill skill={"Wordpress"} percent={81}/>
                            <Skill skill={"Diseño"} percent={76}/>
                        </div>
                        <div className="col-md-3 wow fadeInRight" data-wow-delay="0.9s">
                            <Skill skill={"Python"} percent={75}/>
                            <Skill skill={"Flask"} percent={56}/>
                            <Skill skill={"Odoo"} percent={54}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About
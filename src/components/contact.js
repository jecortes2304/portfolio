import React, {useRef, useState, useEffect} from 'react';
import emailjs from 'emailjs-com';
import ENV_VARIABLES from './emailkey';


function Contact() {
    const form = useRef();
    const initialFormValues = {name: "", email: "", message: ""};
    const initialAlertValues = {isVisible: "hidden", alertClass: "alert-info", message: "Mensaje enviado con éxito"};
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [alertValues, setAlertValues] = useState(initialAlertValues);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            emailjs.sendForm(ENV_VARIABLES.SERVICE_ID, ENV_VARIABLES.TEMPLATE_ID, form.current, ENV_VARIABLES.USER_ID)
                .then((result) => {
                    console.log(result)
                    setAlertValues({...alertValues, isVisible: "visible",
                        alertClass:"alert-info",
                        message:"Mensaje enviado con éxito"
                    });
                    setFormValues(initialFormValues);
                    setIsSubmit(false);
                    setTimeout(
                        function() {
                            setAlertValues(initialAlertValues)
                        }, 2000);
                }, (error) => {
                    console.log(error)
                    setAlertValues({...alertValues, isVisible: "visible",
                        alertClass:"alert-danger",
                        message:"El mensaje no ha sido enviado"
                    });
                    setIsSubmit(false);
                    setTimeout(
                        function() {
                            setAlertValues(initialAlertValues)
                        }, 2000);
                });

        }
    },);


    const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z\d._-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/;
        if (!values.name) {
            errors.name = "Nombre es requerido!"
        }
        if (!values.email) {
            errors.email = "Correo es requerido!"
        } else if (!regex.test(values.email)) {
            errors.email = "Correo no es correcto!"
        }
        if (!values.message) {
            errors.message = "Mensaje es requerido!"
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    return (

        <div id="contact" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-lg-offset-1 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <address>
                            <p className="contact-title">CONTACTAR</p>
                            <p><i className="fa fa-phone"/> +34 643 52 1716</p>
                            <p><i className="fa fa-envelope-o"/> jecortes2304@gmail.com</p>
                            <p><i className="fa fa-map-marker"/> Calle Villabona #5, Madrid</p>
                        </address>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className={alertValues.alertClass} style={{visibility:alertValues.isVisible}}>{alertValues.message}</div>
                        <br/>
                        <form id="formContact" ref={form} method="post" onSubmit={handleSubmit}>

                            <input name="name" type="text" className="form-control" id="name"
                                   placeholder="Nombre" value={formValues.name} onChange={handleChange}/>
                            <p>{formErrors.name}</p>
                            <input name="email" type="email" className="form-control" id="email"
                                   placeholder="Correo electrónico" value={formValues.email}
                                   onChange={handleChange}/>
                            <p>{formErrors.email}</p>
                            <textarea name="message" rows="5" className="form-control" id="message"
                                      placeholder="Mensaje" value={formValues.message} onChange={handleChange}/>
                            <p>{formErrors.message}</p>

                            <input name="enviar" type="submit" className="form-control" id="send"
                                   value="ENVIAR"/>
                        </form>
                    </div>

                    <div className="col-md-1 col-sm-1"/>
                </div>
            </div>
        </div>

    );
}

export default Contact
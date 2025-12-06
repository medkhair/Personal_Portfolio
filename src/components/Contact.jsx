import Form from "../tools/form";
import Inner from "./Inner";
import { useState } from "react";


function Contact({person}) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        message: ""
    });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    const servicesName = person.services.map(service => service.title);

    return (
        <>
        
            <section id="contact" className="contact">
                <Inner className="section-header">
                    <div>
                        <h2 className="section-title">Get In Touch</h2>
                        <hr />
                        <p>
                            Feel free to reach out for collaborations or just a friendly hello!
                        </p>
                    </div>
                </Inner>
                <Inner className="contact-details">
                    <div className="form-group">
                        <Form services={servicesName} form={form} setForm={setForm} onSubmit={onSubmit} />
                    </div>
                </Inner>
            </section>
        
        </>
    );
}

export default Contact;
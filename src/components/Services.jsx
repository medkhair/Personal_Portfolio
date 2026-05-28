import Inner from "./Inner";
import ServiceItem from "./ServiceItem";

function Services({person}){
    return (
        <>
        
            <section id="services" className="services">
                <Inner className="section-header">
                    <div>
                        <h2 className="section-title">Services</h2>
                        <hr />
                        <p>
                            I help businesses build modern digital systems that improve operations, automate workflows, and create better customer experiences.
                        </p>
                    </div>
                </Inner>
                <Inner className="services-list">
                    {person.services.map((service, index) => (
                        <ServiceItem key={index} service={service} />
                    ))}
                </Inner>
            </section>
        
        </>
    );
}

export default Services;
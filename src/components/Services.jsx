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
                            I offer a range of services to help you achieve your web development goals, including:
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
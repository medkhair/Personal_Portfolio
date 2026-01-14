

function ServiceItem({ service}) {
    return (
        <div className="service-item">
            <img className={`service-icon ${service.icon}`} src={`/images/icons/${service.icon}`} />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
        </div>
    );
}

export default ServiceItem;
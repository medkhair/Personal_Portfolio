function Form({services, form, setForm, onSubmit, status}) {
    return (
        <form onSubmit={onSubmit} className="contact-form">
           <div className="form-group name">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" value={form.name} onChange={(e)=>{setForm({...form, name: e.target.value})}} required />
           </div>
           <div className="form-group email">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" value={form.email} onChange={(e)=>{setForm({...form, email: e.target.value})}} required />
           </div>
            <div className="form-group phone">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+1 234 567 8900" value={form.phone} onChange={(e)=>{setForm({...form, phone: e.target.value})}} required />
           </div>
           <div className="form-group service-type">
                <label htmlFor="service-type">Service Type</label>
                <select id="service-type" name="service-type" value={form.serviceType} onChange={(e)=>{setForm({...form, serviceType: e.target.value})}} required>
                    <option value="" disabled>Select a service</option>
                    {services.map((service, index) => (
                         <option key={index} value={service}>{service}</option>
                    ))}
               </select>
           </div>
           <div className="form-group message">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" placeholder="Tell us about your project..." rows="5" value={form.message} onChange={(e)=>{setForm({...form, message: e.target.value})}} required></textarea>
           </div>
           <button className="button secondary submit-btn" type="submit">
                Send Message
           </button>
           <div className="form-status">
                {status === "success" && <p className="success-message">Your message has been sent successfully!</p>}
           </div>
        </form>
    );
}

export default Form;
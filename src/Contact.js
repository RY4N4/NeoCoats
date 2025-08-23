import React, { useState } from 'react';

const ContactForm = ({ showNotification }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for the field as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateField = (name, value) => {
    let error = null;
    if (document.getElementById(name)?.hasAttribute('required') && !value.trim()) {
      error = 'This field is required';
    } else if (name === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Please enter a valid email address';
    } else if (name === 'phone' && value && !/^[\d\s\-\+\(\)]+$/.test(value) || (value && value.replace(/\D/g, '').length < 10)) {
      error = 'Please enter a valid phone number';
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    return !error;
  };

  const validateForm = () => {
    let isValid = true;
    for (const key in formData) {
      if (!validateField(key, formData[key])) {
        isValid = false;
      }
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        showNotification('Thank you! Your message has been sent. We\'ll get back to you soon.', 'success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
        setErrors({});
        setIsSubmitting(false);
      }, 1500);
    } else {
      showNotification('Please correct the form errors.', 'error');
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Ready to transform your spaces? Contact us for a free consultation</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Address</h3>
                <p>1st floor, Laxman Nivas,<br />Dr. Baba Saheb Ambedkar Road,<br />Parel, Mumbai, Maharashtra - 400012</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p><a href="tel:+919167453777">91674 53777</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p><a href="mailto:neocoats.sales@gmail.com">neocoats.sales@gmail.com</a></p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" id="name" name="name" className={`form-control ${errors.name ? 'error' : formData.name ? 'success' : ''}`} required value={formData.name} onChange={handleChange} onBlur={handleBlur} />
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" id="email" name="email" className={`form-control ${errors.email ? 'error' : formData.email ? 'success' : ''}`} required value={formData.email} onChange={handleChange} onBlur={handleBlur} />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" id="phone" name="phone" className={`form-control ${errors.phone ? 'error' : formData.phone ? 'success' : ''}`} required value={formData.phone} onChange={handleChange} onBlur={handleBlur} />
              {errors.phone && <div className="error-message">{errors.phone}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="service" className="form-label">Service Interest</label>
              <select id="service" name="service" className={`form-control ${errors.service ? 'error' : formData.service ? 'success' : ''}`} required value={formData.service} onChange={handleChange} onBlur={handleBlur}>
                <option value="">Select a service</option>
                <option value="quartz-plaster">Quartz Plaster</option>
                <option value="texture-coatings">Texture Coatings</option>
                <option value="exterior-textures">Exterior Textures</option>
                <option value="interior-solutions">Interior Solutions</option>
                <option value="polyurethane-flooring">Polyurethane Flooring</option>
                <option value="lime-materials">Lime Materials</option>
              </select>
              {errors.service && <div className="error-message">{errors.service}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" className={`form-control ${errors.message ? 'error' : formData.message ? 'success' : ''}`} rows="4" placeholder="Tell us about your project requirements..." value={formData.message} onChange={handleChange} onBlur={handleBlur}></textarea>
              {errors.message && <div className="error-message">{errors.message}</div>}
            </div>
            <button type="submit" className="btn btn--primary btn--full-width" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

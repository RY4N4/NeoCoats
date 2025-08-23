import React, { useState } from 'react';

const QuoteModal = ({ closeModal, showNotification }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    area: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateField = (name, value) => {
    let error = null;
    if (document.getElementById(`quote${name.charAt(0).toUpperCase() + name.slice(1)}`)?.hasAttribute('required') && !value.trim()) {
      error = 'This field is required';
    } else if (name === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Please enter a valid email address';
    } else if (name === 'phone' && value && (!/^[\d\s\-\+\(\)]+$/.test(value) || value.replace(/\D/g, '').length < 10)) {
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
      setTimeout(() => {
        showNotification('Quote request submitted! We\'ll send you a detailed quote within 24 hours.', 'success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          area: '',
          message: '',
        });
        setErrors({});
        setIsSubmitting(false);
        closeModal();
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
    <div className="modal" id="quoteModal">
      <div className="modal-overlay" id="modalOverlay" onClick={closeModal}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Get Free Quote</h3>
          <button className="modal-close" id="modalClose" onClick={closeModal}>&times;</button>
        </div>
        <div className="modal-body">
          <form id="quoteForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="quoteName" className="form-label">Full Name</label>
              <input type="text" id="quoteName" name="name" className={`form-control ${errors.name ? 'error' : formData.name ? 'success' : ''}`} required value={formData.name} onChange={handleChange} onBlur={handleBlur} />
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="quoteEmail" className="form-label">Email Address</label>
              <input type="email" id="quoteEmail" name="email" className={`form-control ${errors.email ? 'error' : formData.email ? 'success' : ''}`} required value={formData.email} onChange={handleChange} onBlur={handleBlur} />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="quotePhone" className="form-label">Phone Number</label>
              <input type="tel" id="quotePhone" name="phone" className={`form-control ${errors.phone ? 'error' : formData.phone ? 'success' : ''}`} required value={formData.phone} onChange={handleChange} onBlur={handleBlur} />
              {errors.phone && <div className="error-message">{errors.phone}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="quoteService" className="form-label">Service Interest</label>
              <select id="quoteService" name="service" className={`form-control ${errors.service ? 'error' : formData.service ? 'success' : ''}`} required value={formData.service} onChange={handleChange} onBlur={handleBlur}>
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
              <label htmlFor="quoteArea" className="form-label">Project Area (sq ft)</label>
              <input type="number" id="quoteArea" name="area" className="form-control" placeholder="e.g. 1000" value={formData.area} onChange={handleChange} onBlur={handleBlur} />
            </div>
            <div className="form-group">
              <label htmlFor="quoteMessage" className="form-label">Project Details</label>
              <textarea id="quoteMessage" name="message" className="form-control" rows="3" placeholder="Describe your project requirements..." value={formData.message} onChange={handleChange} onBlur={handleBlur}></textarea>
            </div>
            <button type="submit" className="btn btn--primary btn--full-width" disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : 'Get Quote'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;

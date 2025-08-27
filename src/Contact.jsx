import React, { useState } from 'react';

const Contact = ({ showNotification }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) tempErrors.email = 'Email is invalid';
    if (form.phone && !/^[\d\s-+()]+$/.test(form.phone)) tempErrors.phone = 'Phone is invalid';
    if (!form.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      showNotification('Please fix errors before submitting.', 'error');
      return;
    }
    setIsSubmitting(true);
    // Handle API sending here
    setTimeout(() => {
      setIsSubmitting(false);
      showNotification('Message sent successfully!', 'success');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1500);
  };

  return (
    <section className="contact-section container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} noValidate>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
        {errors.name && <small className="error">{errors.name}</small>}

        <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
        {errors.email && <small className="error">{errors.email}</small>}

        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
        {errors.phone && <small className="error">{errors.phone}</small>}

        <textarea name="message" placeholder="Your message" value={form.message} onChange={handleChange} />
        {errors.message && <small className="error">{errors.message}</small>}

        <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;

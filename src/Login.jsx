import React, { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username.trim() || !form.password.trim()) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    // TODO: Implement actual login logic
    alert('Login successful (simulated)');
  };

  return (
    <section className="login-section container">
      <h1>Login to Neocoats</h1>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" value={form.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
        {error && <small className="error">{error}</small>}

        <button className="btn btn--primary" type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;

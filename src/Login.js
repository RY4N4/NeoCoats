import React, { useState } from 'react';

const YourComponent = () => {
  const [modalOpen, setModalOpen] = useState(null);

  const openModal = (type) => {
    setModalOpen(type);
  };

  const closeModal = () => {
    setModalOpen(null);
  };

  return (
    <div>
      <button className="btn btn--primary" id="login" onClick={() => openModal('login')}>
        Login
      </button>

      {modalOpen === 'login' && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <h2>Login</h2>
            {/* Login form or content here */}
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default YourComponent;

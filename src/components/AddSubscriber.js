import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addSubscriber } from '../services/subscriberService';

function AddSubscriber() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subscribedToChannel: '',
    topic: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSubscriber(formData)
      .then(() => navigate('/'))  // Redirect to the list page after adding
      .catch((error) => {
        console.error('Error adding subscriber:', error);
        alert('Failed to add subscriber. Please check the form.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h3>Add New Subscriber</h3>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Subscribed Channel</label>
        <input
          type="text"
          name="subscribedToChannel"
          value={formData.subscribedToChannel}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Topic</label>
        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-success mt-3">
        Add Subscriber
      </button>
    </form>
  );
}

export default AddSubscriber;
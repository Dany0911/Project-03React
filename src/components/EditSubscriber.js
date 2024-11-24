import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSubscriberById, updateSubscriber } from '../services/subscriberService';

function EditSubscriber() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subscribedToChannel: '',
    topic: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    getSubscriberById(id).then((response) => {
      setFormData(response.data);
    }).catch((error) => {
      console.error('Error fetching subscriber data:', error);
    });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSubscriber(id, formData).then(() => navigate('/')).catch((error) => {
      console.error('Error updating subscriber:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h3>Edit Subscriber</h3>
      <div className="form-group">
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
      </div>
      <div className="form-group">
        <label>Subscribed Channel</label>
        <input type="text" name="subscribedToChannel" value={formData.subscribedToChannel} onChange={handleChange} className="form-control" required />
      </div>
      <div className="form-group">
        <label>Topic</label>
        <input type="text" name="topic" value={formData.topic} onChange={handleChange} className="form-control" />
      </div>
      <button type="submit" className="btn btn-success mt-3">Update Subscriber</button>
    </form>
  );
}

export default EditSubscriber;
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSubscriberById } from '../services/subscriberService';

function SubscriberDetails() {
  const { id } = useParams();
  const [subscriber, setSubscriber] = useState(null);

  useEffect(() => {
    getSubscriberById(id).then((response) => {
      setSubscriber(response.data);
    }).catch((error) => {
      console.error('Error fetching subscriber details:', error);
    });
  }, [id]);

  if (!subscriber) return <div className="text-center">Loading...</div>;

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{subscriber.name}</h4>
        <p><strong>Email:</strong> {subscriber.email}</p>
        <p><strong>Subscribed Channel:</strong> {subscriber.subscribedToChannel}</p>
        <p><strong>Topic:</strong> {subscriber.topic}</p>
        <Link to="/" className="btn btn-secondary">Back to List</Link>
      </div>
    </div>
  );
}

export default SubscriberDetails;
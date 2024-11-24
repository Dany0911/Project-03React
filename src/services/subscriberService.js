// src/services/subscriberService.js
import apiClient from './api';

// Get all subscribers
export const getAllSubscribers = () => apiClient.get('/');

// Get a subscriber by ID
export const getSubscriberById = (id) => apiClient.get(`/${id}`);

// Add a new subscriber
export const addSubscriber = (subscriberData) => apiClient.post('/', subscriberData);

// Update a subscriber
export const updateSubscriber = (id, updatedData) => apiClient.patch(`/${id}`, updatedData);

// Delete a subscriber
export const deleteSubscriber = (id) => apiClient.delete(`/${id}`);

// https://project02-restapi.onrender.com
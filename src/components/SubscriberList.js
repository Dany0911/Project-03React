import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllSubscribers, deleteSubscriber } from '../services/subscriberService';
import SearchBar from './SearchBar';

function SubscriberList() {
    const [subscribers, setSubscribers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getAllSubscribers().then((response) => {
            setSubscribers(response.data);
        }).catch((error) => {
            console.error('Error fetching subscribers:', error);
        });
    }, []);

    const handleDelete = (id) => {
        deleteSubscriber(id).then(() => {
            setSubscribers(subscribers.filter((subscriber) => subscriber._id !== id));
        });
    };

    const filteredSubscribers = subscribers.filter((subscriber) =>
        subscriber.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Subscriber List</h1>
            <Link to="/add" className="btn btn-primary mb-3">Add New Subscriber</Link>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Channel</th>
                        <th>Topic</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSubscribers.map((subscriber) => (
                        <tr key={subscriber._id}>
                            <td>{subscriber.name}</td>
                            <td>{subscriber.email}</td>
                            <td>{subscriber.subscribedToChannel}</td>
                            <td>{subscriber.topic}</td>
                            <td>
                                <Link to={`/subscriber/${subscriber._id}`} className="btn btn-info btn-sm">View</Link>{' '}
                                <Link to={`/edit/${subscriber._id}`} className="btn btn-warning btn-sm">Edit</Link>{' '}
                                <button onClick={() => handleDelete(subscriber._id)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SubscriberList;
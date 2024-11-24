import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubscriberList from './components/SubscriberList';
import AddSubscriber from './components/AddSubscriber';
import SubscriberDetails from './components/SubscriberDetails';
import EditSubscriber from './components/EditSubscriber';


function App() {
  return (
    <Router>
      <div className="container mt-5">
        <h1 className="text-center">Blog Subscriber Management</h1>
        <Routes>
          <Route path="/" element={<SubscriberList />} />
          <Route path="/add" element={<AddSubscriber />} />
          <Route path="/subscriber/:id" element={<SubscriberDetails />} />
          <Route path="/edit/:id" element={<EditSubscriber />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
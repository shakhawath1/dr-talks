import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-info m-3'>Blogs</h2>
            <div className='blog'>
                <h4>Difference between authorization and authentication.</h4>
                <p>Authentication verifies who the user is.	Authorization determines what resources a user can access.
                    Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.	Authorization works through settings that are implemented and maintained by the organization.
                    Authentication is the first step of a good identity and access management process.	Authorization always takes place after authentication.
                    Authentication is visible to and partially changeable by the user.	Authorization isn’t visible to or changeable by the user.</p>
            </div>
            <div className='blog'>
                <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            </div>
            <div className='blog'>
                <h4>What other services does firebase provide other than authentication?</h4>
                <p>1. Parse – Open Source Backend Platform;
                    2. Back4app – Parse Hosting Platform;
                    3. Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;
                    4. Backendless – Mobile Backend and API Services Platform;
                    5. Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects;
                    6. Pubnub – Real-time APIs and Global Messaging;
                    7. Kumulos – App Performance Management;
                </p>
            </div>
        </div>
    );
};

export default Blogs;
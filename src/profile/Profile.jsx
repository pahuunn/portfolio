import React from 'react';
import ProfileTable from './ProfileTable';
import ProfileHistory from './ProfileHistory';
import './Profile.css'

const Profile = (props) => {
    return (
        <section>
            <h1>Profile</h1>
            <ProfileTable />
            
            <h3>History</h3>
            <ProfileHistory />
        </section>
    );
};
export default Profile;
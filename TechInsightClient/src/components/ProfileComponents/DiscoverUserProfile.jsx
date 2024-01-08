import React, { useState, useEffect } from 'react';
import ProfileCard from '../../pages/Profile';

const DiscoverUsersPage = () => {
  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7265/api/discover/user-profiles', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setUserProfiles(data);
      })
      .catch(error => {
        console.error('Error fetching user profiles:', error);
      });
  }, []);

  const handleCardClick = userId => {
    // Directly navigate to the user's profile page
    window.location.href = `/profile/${userId}`;
  };

  return (
    <div>
      <h2>Discover Users</h2>
      <div className="profile-cards-container">
        {userProfiles.map(profile => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onCardClick={() => handleCardClick(profile.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscoverUsersPage;

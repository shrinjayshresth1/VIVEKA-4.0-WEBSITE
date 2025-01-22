import React, { useState } from 'react';
import './tabs.css';

const eventData = {
  'Feb 6': [
    { 
      time: '09:00 AM', 
      title: 'Registration & Welcome', 
      location: 'Main Lobby B1-007',
      icon: '👥',
      description: 'Registration and verification begins!'
    },
    { 
      time: '11:00 AM', 
      title: 'Opening Keynote', 
      location: 'Grand Hall B2-006',
      icon: '🏆',
      description: 'Kickoff presentation by industry leaders'
    },
    { 
      time: '02:00 PM', 
      title: 'Innovation Workshop', 
      location: 'Workshop Room B4-006',
      icon: '🧠',
      description: 'Interactive session on emerging technologies'
    },
  ],
  'Feb 7': [
    { 
      time: '10:00 AM', 
      title: 'Tech Challenges', 
      location: 'Innovation Lab B2-007',
      icon: '🧩',
      description: 'Hands-on problem-solving sessions'
    },
    { 
      time: '01:00 PM', 
      title: 'Networking Session', 
      location: 'Garden Area B1-104',
      icon: '👥',
      description: 'Connect with industry professionals'
    },
    { 
      time: '03:30 PM', 
      title: 'Project Showcase', 
      location: 'Exhibition Hall B4-006',
      icon: '🏆',
      description: 'Presentation of innovative projects'
    },
  ],
  'Feb 8': [
    { 
      time: '09:30 AM', 
      title: 'Expert Panel', 
      location: 'Conference Room B2-006',
      icon: '🧠',
      description: 'Industry experts share insights'
    },
    { 
      time: '12:00 PM', 
      title: 'Awards Ceremony', 
      location: 'Grand Hall B1-007',
      icon: '🏆',
      description: 'Recognition of outstanding achievements'
    },
    { 
      time: '02:00 PM', 
      title: 'Closing Event', 
      location: 'Main Hall B4-006',
      icon: '👥',
      description: 'Final networking and farewell'
    },
  ],
};

function Tabs() {
  const [activeTab, setActiveTab] = useState('Feb 6');

  return (
    <div className="schedule-container">
      <div className="schedule-wrapper">
        <div className="schedule-header">
          <h1 className="schedule-title">EVENT SCHEDULE</h1>
          <p className="schedule-subtitle">Here is our event schedule</p>
          <div className="schedule-divider"></div>
        </div>

        <div className="tabs-container">
          {Object.keys(eventData).map((date) => (
            <button
              key={date}
              onClick={() => setActiveTab(date)}
              className={`tab-button ${activeTab === date ? 'active' : ''}`}
            >
              <span>📅</span>
              <span>{date}</span>
            </button>
          ))}
        </div>

        {/* <p className="schedule-subtitle text-center italic mb-8">
          Gear up for your schedule!
        </p> */}

        <div className="events-container">
          {eventData[activeTab].map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-content">
                <div className="event-time">{event.time}</div>
                <div className="event-details">
                  <div className="event-header">
                    <div className="event-icon">{event.icon}</div>
                    <h3 className="event-title">{event.title}</h3>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <div className="event-location">
                    <span className="location-icon">📍</span>
                    <span>Location:- {event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
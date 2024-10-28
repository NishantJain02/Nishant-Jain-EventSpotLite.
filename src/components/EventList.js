import React from 'react';
import '../styles/EventList.css';

const EventList = ({ events, handleEventClick }) => {
  return (
    <div className="event-grid">
      {events.map((event) => (
        <div
          key={event.id}
          className="event-card"
          onClick={() => handleEventClick(event)}
        >
          <h3>{event.name}</h3>
          <p>{event.date}</p>
          <p>{event.location}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;

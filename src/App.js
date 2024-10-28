import React, { useState } from "react";
import Navbar from "./components/Navbar";
import EventList from "./components/EventList";
import EventModal from "./components/EventModal";
import mockEvents from "./data/mockEvents";
import "./styles/App.css";
import Navbarpage from "./components/navbarpage";
import Mainpage from "./components/mainpage";
import Subscribe from "./components/Subscribe";
import Contactus from "./components/contactus";
import Community from "./components/community";
import Terms from "./components/terms";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const filteredEvents = mockEvents.filter(
    (event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbarpage />
      <Mainpage />
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <EventList events={filteredEvents} handleEventClick={handleEventClick} />
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={handleCloseModal} />
      )}
      <Subscribe />
      <Contactus />
      <Community />
      <Terms />
    </div>
  );
};

export default App;

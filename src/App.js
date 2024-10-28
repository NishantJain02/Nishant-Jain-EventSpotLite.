import React, { useState } from "react";
import events from "./events";
import Modal from "react-modal";
import "./App.css";

Modal.setAppElement("#root");

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedEvent, setSelectedEvent] = useState(null);

    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const openModal = (event) => {
        setSelectedEvent(event);
    };

    const closeModal = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="App">
            <nav className="navbar">
                <h1>EventSpot Lite</h1>
                <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </nav>
            <div className="event-list">
                {filteredEvents.map(event => (
                    <div key={event.id} className="event-card" onClick={() => openModal(event)}>
                        <h2>{event.name}</h2>
                        <p>{event.date}</p>
                        <p>{event.location}</p>
                    </div>
                ))}
            </div>
            {selectedEvent && (
                <Modal
                    isOpen={!!selectedEvent}
                    onRequestClose={closeModal}
                    className="modal"
                    overlayClassName="overlay"
                >
                    <div className="modal-header">
                        <h2>{selectedEvent.name}</h2>
                        <span className="close-icon" onClick={closeModal}>&times;</span>
                    </div>
                    {selectedEvent.images && selectedEvent.images.length > 0 ? (
                        selectedEvent.images.map((image, index) => (
                            <img key={index} src={image} alt={`${selectedEvent.name} - ${index + 1}`} />
                        ))
                    ) : (
                        <p>No images available</p>
                    )}
                    <p>{selectedEvent.description}</p>
                </Modal>
            )}
        </div>
    );
}

export default App;


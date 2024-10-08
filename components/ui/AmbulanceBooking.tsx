import React, { useEffect, useState } from 'react';


const AmbulanceBooking = () => {
  const [position, setPosition] = useState<{ latitude: number, longitude: number } | null>(null);
  const [ambulanceStatus, setAmbulanceStatus] = useState('Unavailable');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
        // Fetch nearby ambulance data using position (integrate API here)
      });
    }
  }, []);

  const bookAmbulance = async () => {
    // Send geolocation and request to book an ambulance (You will need an API)
    const response = await fetch('/api/book-ambulance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ position }),
    });
    const data = await response.json();
    setAmbulanceStatus(data.status); // Available, Unavailable, Enroute
  };

  return (
    <div>
      <h2>Book an Ambulance</h2>
      <p>Ambulance Status: {ambulanceStatus}</p>
      <button onClick={bookAmbulance} disabled={!position}>Book Now</button>
    </div>
  );
};

export default AmbulanceBooking;
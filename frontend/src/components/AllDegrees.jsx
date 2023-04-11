import React, { useEffect, useState } from 'react';

export default function AllDegrees() {
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/degree")
      .then(response => response.json())
      .then((data) => setDegrees(data))
      .catch(err => console.log(err));
  }, []);

  function displayDegrees() {
    return (
      degrees.map((degree, index) => {
        return (
          <li key={index}>
            {degree.full_name}
          </li>
        );
      })
    );
  }

  return (
    <ul>
      {displayDegrees()}
    </ul>
  );
}

import React, { useEffect, useState, } from 'react';
import { useParams } from "react-router-dom";

export default function SingleDegree() {
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/degree/${id}")
      .then(response => response.json())
      .then((data) => setDegrees(data))
      .catch(err => console.log(err));
  }, [id]);

    return (
        <h2>degree.full_name</h2>
    );
}
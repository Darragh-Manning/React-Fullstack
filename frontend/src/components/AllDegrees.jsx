import React, { useEffect } from 'react';

const AllDegrees = () => {
    const [degrees, setDegrees] = useState([]);

const getDegree = () => {
    fetch("http://127.0.0.1:800/api/cohort/?degree=COMSCI")
    .then(response => response.json())
    .catch(err => console.log(err))
}

useEffect(() => {
    getDegree();
}, [])
    
  return (
    <div>AllDegrees</div>
  )}

export default AllDegrees;
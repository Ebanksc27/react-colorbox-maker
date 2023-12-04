import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
  // Initial state will be an empty array for boxes
  const [boxes, setBoxes] = useState([]);

  const addBox = newBox => {
    setBoxes(oldBoxes => [...oldBoxes, newBox]);
  };

  const removeBox = id => {
    setBoxes(oldBoxes => oldBoxes.filter(box => box.id !== id));
  };

  // Render the Box components and NewBoxForm
  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map(box => (
        <Box key={box.id} {...box} removeBox={removeBox} />
      ))}
    </div>
  );
}

export default BoxList;

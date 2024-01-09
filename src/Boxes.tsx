import React from 'react';

export type Box = {
    flex: number, 
    background: string
} 

type BoxesProps = {
    boxes: Box[]
}

function Boxes({ boxes }: BoxesProps) {
  return (
    <div className="boxes-wrapper">
      {boxes.map((boxStyles, index) => (
        <div
          key={index}
          className="box"
          style={boxStyles}
        />
      ))}
    </div>
  );
}

export default React.memo(Boxes);
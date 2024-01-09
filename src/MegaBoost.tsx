import React from 'react';

type MegaBoostProps = {
    handleClick: () => void
}

function MegaBoost({ handleClick }: MegaBoostProps) {
  console.log('Render MegaBoost');
  
  return (
    <button
      className="mega-boost-button"
      onClick={handleClick}
    >
      MEGA BOOST!
    </button>
  );
}

export default React.memo(MegaBoost);
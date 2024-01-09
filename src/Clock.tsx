import React from 'react';
import {format} from 'date-fns/format';

function Clock({ time }) {
  return (
    <p className="clock">
      {format(time, 'hh:mm:ss a')}
    </p>
  );
}

export default Clock;
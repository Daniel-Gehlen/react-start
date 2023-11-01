import React, { useState } from 'react';
import MirrorButton from '../../buttons/MirrorButton';

function Section5() {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

    return (
        <div>
            <h2>Counters that update together</h2>
            <MirrorButton count={count} onClick={handleClick} />
            <MirrorButton count={count} onClick={handleClick} />
        </div>
    );
}

export default Section5;

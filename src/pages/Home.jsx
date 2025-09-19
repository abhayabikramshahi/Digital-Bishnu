import React from 'react';

function Home() {
  const Log = () => {
    window.location.href = '/kk';
  };

  return (
    <div>
      <div>Home</div>
      <button onClick={Log}>Go to KK</button>
    </div>
  );
}

export default Home;

import React from 'react';

const Award = (props) => {
  const myAwards = (
    <div>
      {props.awards.map((cert) =>
        <div className='item' key={cert.name}>
          <h3>{cert.name} @ {cert.institution} <span>{cert.date}</span></h3>
          <p>{cert.description}</p>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-trophy'></i>
      <h2>Awards</h2>
      {myAwards}
    </div>
  )
};

export default Award;

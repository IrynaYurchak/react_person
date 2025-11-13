import React from 'react';
import classNames from 'classnames';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <div className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">
        {isMarried
          ? `My ${sex === 'm' ? 'wife' : 'husband'} is ${partnerName}`
          : 'I am not married'}
      </p>
    </div>
  );
};

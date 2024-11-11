import React from 'react';

const Button = ({ text = 'SHOP NOW', onClick, className }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`width-full height-[50px] rounded-[50%] bg-green ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

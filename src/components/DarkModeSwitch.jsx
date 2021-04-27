import React, { useEffect } from 'react';

const DarkModeSwitch = () => {
  //Comprueba la preferencia del usuario.
  useEffect(() => {
    const isDark = localStorage.getItem('dark');
    if (isDark == 1) {
      document.querySelector('body').className = 'dark';
    } else {
      document.querySelector('body').className = '';
    }
  }, []);

  const handleChange = (e) => {
    if (e.target.checked) {
      document.querySelector('body').className = 'dark';
      localStorage.setItem('dark', 1);
    } else {
      document.querySelector('body').className = '';
      localStorage.setItem('dark', 0);
    }
  };

  return (
    <div className='container-switch'>
      <label className="switch" onChange={handleChange}>
        <input type="checkbox" />
        <span className="slider round">
          <i className="fas fa-sun"></i>
          <i className="fas fa-moon"></i>
        </span>
      </label>
    </div>
  );
};

export default DarkModeSwitch;

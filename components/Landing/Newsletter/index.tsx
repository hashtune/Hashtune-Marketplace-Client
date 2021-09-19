import React, { useRef, useState } from 'react';

const Subscribe = () => {
  // fetch/clear input value   reference
  const emailInput: any = useRef(null);

  const [message, setMessage] = useState('');

  const subscribe = async (e: any) => {
    e.preventDefault();


    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: emailInput.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {

      setMessage(error);

      return;
    }


    emailInput.current.value = '';
    setMessage('Thank you! 🎉 Stay tuned for our upcoming Updates ');
  };

  return (

    <form onSubmit={subscribe}>
    <div className="input-group input-group-rounded">
       <input type="email" name="email" className="text-input" placeholder="Your Email" aria-label="Your Email"  ref={emailInput} required />
       <div className="input-group-append">
          <button className="btn btn-icon btn-black btn-rounded" type="submit" >
             <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-259-639)"><path fill="#5B5B5B" fillRule="evenodd" d="M8.12 1L5.99 3.121l8.939 8.94L5.99 21l2.12 2.12 11.06-11.06Z" transform="translate(259 639)"/></g></svg>   
          </button>
       </div>
    </div>
    <div className="mt-big">
       {message ? message : ``}
    </div>
  </form>
  );
}
export default Subscribe;
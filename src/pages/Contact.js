import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      name: name,
      email: email,
      phone: phone,
    };

    try {
      const response = await fetch('https://reactecom-post-default-rtdb.firebaseio.com/contacts.json', {
        method: 'POST',
        body: JSON.stringify(contactData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Data successfully posted to Firebase
        console.log('Data successfully posted to Firebase');
        // Clear the form after submission
        setName('');
        setEmail('');
        setPhone('');
      } else {
        console.log('Failed to post data to Firebase');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <h1>Contact page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Contact;

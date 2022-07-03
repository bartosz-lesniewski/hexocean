import { useState } from 'react';
import Form from './Form';

const Main = () => {
  const [select, setSelect] = useState('');
  let fetchData = {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.querySelector('form');
    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());
    fetchData = entries;

    if (fetchData.no_of_slices && fetchData.diameter) {
      fetchData.no_of_slices = parseInt(fetchData.no_of_slices);
      fetchData.diameter = parseInt(fetchData.diameter);
    } else if (fetchData.spiciness_scale) {
      fetchData.spiciness_scale = parseInt(fetchData.spiciness_scale);
    } else if (fetchData.slices_of_bread) {
      fetchData.slices_of_bread = parseInt(fetchData.slices_of_bread);
    }

    fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entries),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <main className="main d-flex">
      <Form handleSubmit={handleSubmit} select={select} setSelect={setSelect} />
    </main>
  );
};

export default Main;

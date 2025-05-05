// src/Countries/Countries.jsx
import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../api/api';
import styles from './Countries.module.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchCountries();
      setCountries(result);
    };

    getData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Country Flags and Names</h1>
      <div className={styles.grid}>
        {countries.map((country, index) => (
          <div className={styles.card} key={index}>
            <img
              src={country.flag}
              alt={`Flag of ${country.name}`}
              className={styles.flag}
            />
            <p>{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;

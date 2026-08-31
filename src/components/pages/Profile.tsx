import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import type { RootState, AppDispatch } from '../../../store';
import {
  FetchProfileThunk,
  UpdateProfileThunk,
  clearProfile,
} from '../../redux/features/ProfileSlices';
import styles from './Profile.module.css';
import greyprofile from '../../assets/greyprofile.png';

export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  
  
  const { id, name, surname, contact, email, password, isLoading, error } =
    useSelector((state: RootState) => state.profile);

 
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    contact: '',
    email: '',
    password: '',
  });

 
  const [isFormInitialized, setIsFormInitialized] = useState(false);

  
  useEffect(() => {
    dispatch(FetchProfileThunk());
  }, [dispatch]);

  
  if (id && !isFormInitialized) {
    setFormData({
      name: name || '',
      surname: surname || '',
      contact: contact || '',
      email: email || '',
      password: password || '',
    });
    setIsFormInitialized(true);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const back = () => {
    navigate('/homepage');
  };

  const handleLogOut = () => {
    localStorage.removeItem('user');
    dispatch(clearProfile());
    navigate('/login');
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await dispatch(UpdateProfileThunk(formData));
    if (UpdateProfileThunk.fulfilled.match(result)) {
      alert('Your Profile is updated!');
    } else {
      alert('Failed to update profile. Please try again.');
    }
  };

  if (isLoading && !isFormInitialized) {
    return <div className={styles.loading}>Iyaloda...</div>;
  }

  return (
    <form onSubmit={handleSave} className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <h1>Profile</h1>
        {error && <p className={styles.errorField}>{error}</p>}
        <img src={greyprofile} alt="greyprofile" className={styles.profileIcon} />
        <div className={styles.first}>
          <div className={styles.Name}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name..."
              className={styles.Name}
              required
            />
          </div>
          <div className={styles.surname}>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Surname..."
              className={styles.Surname}
              required
            />
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.email}>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact..."
              className={styles.Contact}
              required
            />
          </div>
          <div className={styles.email}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address..."
              className={styles.Email}
              required
            />
          </div>
        </div>
        <div className={styles.third}>
          <div className={styles.email}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password..."
              className={styles.Password}
              required
            />
          </div>
          <div className={styles.btns}>
            <button type="button" className={styles.delBtn} onClick={handleLogOut}>
              LogOut
            </button>
            <button type="submit" className={styles.editBtn} disabled={isLoading}>
              {isLoading ? 'Updating...' : 'Update'}
            </button>
            <button type="button" className={styles.backBtn} onClick={back}>
              Back
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

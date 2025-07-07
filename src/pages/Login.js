import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

function LoginPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('login.errors.name');
    if (!formData.surname.trim()) newErrors.surname = t('login.errors.surname');
    if (!formData.phone.trim()) newErrors.phone = t('login.errors.phone');
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert(`${t('login.alert')}:\n${JSON.stringify(formData, null, 2)}`);
      setErrors({});
    }
  };

  return (
    <div className="container">
    <Sidebar />
    <Header />
    <div className="login-container">
      <h2>{t('login.title')}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>{t('login.name')}  *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>{t('login.surname')} *</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
          {errors.surname && <span className="error">{errors.surname}</span>}
        </div>

        <div className="form-group">
          <label>{t('login.phone')} *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>{t('login.email')}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn">{t('login.submit')}</button>
      </form>
    </div>
      <Gallery />
      <Footer />
    </div>
  );
}

export default LoginPage;

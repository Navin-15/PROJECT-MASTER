import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!name.trim()) newErrors.name = "Name is required.";
        
        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email format.";
        }
        if (!password) {
            newErrors.password = "Password is required.";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        return newErrors;
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // Clear errors
        setErrors({});

        // Simulate login
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', name);

        const redirectTo = location.state?.redirectTo || '/';
        const bookingData = location.state?.bookingData || null;

        navigate(redirectTo, { state: bookingData });
    };

    return (
        <div className='bg-secondary py-5'>
            <div style={{
                maxWidth: '400px',
                margin: '50px auto',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: '#f8f9fa'
            }}>
                <h2 className="mb-4 text-center text-dark fw-bold">Login</h2>

                <form onSubmit={handleLogin} noValidate>
                    <div className="form-group mb-3">
                        <label className='text-dark'>Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>

                    <div className="form-group mb-3">
                        <label className='text-dark'>Email</label>
                        <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    <div className="form-group mb-3">
                        <label className='text-dark'>Password</label>
                        <input
                            type="password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;


import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Simple hardcoded credentials (replace with backend validation)
        const validEmail = 'user@gmail.com';
        const validPassword = 'password';

        if (email === validEmail && password === validPassword) {
            // Save login status
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', name); // Optional: store name if needed

            // Get redirect target and booking data if available
            const redirectTo = location.state?.redirectTo || '/';
            const bookingData = location.state?.bookingData || null;

            // Redirect after login
            navigate(redirectTo, { state: bookingData });
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className='bg-secondary py-5'>
            <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px',backgroundColor: ''}}>
                <h2 className="mb-4 text-center text-light fw-bold">Login</h2>
                {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="form-group mb-3">
                        <label className='text-light'>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className='text-light' >Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className='text-light' >Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;

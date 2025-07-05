import { Link, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/authActions';
import { Formik, Form, Field, ErrorMessage } from 'react-bootstrap';
import * as Yup from 'yup';

import logo from '../../assets/logo.png';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    return (
        <div className='singup-container'>
            <div className='singup-card shadow p-4'>
                <div className='text-center mb-4'>
                    <img src={logo} alt='Logo' style={{ width: '200px' }} />
                </div>

                <h1 className='mb-4 text-center'>Login</h1>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        // Handle login logic here
                        console.log('Login values:', values);
                        const success = dispatch(login(values));

                        if (success) {
                            resetForm();
                            navigate('/products');
                        }

                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div>
                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <Field type="password" name="password" />
                                <ErrorMessage name="password" component="div" />
                            </div>

                            <button type="submit" disabled={isSubmitting}>
                                Login
                            </button>
                        </Form>
                    )}
                </Formik>

                <div className='text-center mt-3'>
                    <span>Don't have an account?</span>
                    <Link to='/register'> Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/actions/authActions';
import { Link, useNavigate } from 'react-router-dom';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .required('Fullname is required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
        phone: Yup.string()
            .matches(/^[0-9]{10,15}$/, 'Phone number must be 10-15 digits')
            .required('Phone is required'),
        password: Yup.string()
            .min(6, 'Minimum 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm your password'),
        });

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className='w-fit-content'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Product_Hunt_Logo.svg/2560px-Product_Hunt_Logo.svg.png' 
                    alt='logo' 
                    width={200}
                />
            </div>

            <h3 className='text-center'>Signup</h3>

            <Formik
                className='mb-4 flex flex-col justify-center items-center'
                initialVlaues={{
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    console.log('Form values:', values);
                    const success = await dispatch(signup(values));

                    if (success) {
                        resetForm();
                        navigate('/products');
                    }

                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className='mb-3'>
                            <lable className='form-label'>Fullname</lable>
                            <Field type='text' name='name' className='form-control' />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className='mb-3 w-fit-content'>
                            <lable className='form-label'>Email</lable>
                            <Field type='text' name='email' className='form-control' />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className='mb-3'>
                            <lable className='form-label'>Phone</lable>
                            <Field type='text' name='phone' className='form-control' />
                            <ErrorMessage
                                name="phone"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className='mb-3'>
                            <lable className='form-label'>Password</lable>
                            <Field type='text' name='password' className='form-control' />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className='mb-3'>
                            <lable className='form-label'>Confirm Password</lable>
                            <Field type='text' name='confirmPassword' className='form-control' />
                            <ErrorMessage
                                name="confirmPassword"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <button
                            type="submit"
                            className='btn btn-primary w-100 mt-3'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Signing up...' : 'Sign Up'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Signup;
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
    const SignupSchema = Yup.object().shape({
        fullname: Yup.string()
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
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div></div>
            <div>
                <img alt='logo' width={200} />
            </div>
            <h3>Signup</h3>
            <Formik
                className='mb-4'
                initialVlaues={{
                    name: '',
                    email: '',
                    password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log('Form values:', values);
                    resetForm();
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <lable>Fullname</lable>
                            <Field></Field>
                            <ErrorMessage
                                name="fullname"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className='mb-3'>
                            <lable>Email</lable>
                            <Field></Field>
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className='mb-3'>
                            <lable>Phone</lable>
                            <Field></Field>
                            <ErrorMessage
                                name="phone"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className='mb-3'>
                            <lable>Password</lable>
                            <Field></Field>
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className='mb-3'>
                            <lable>Confirm Password</lable>
                            <Field></Field>
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
import React from 'react';

const Contact = () => {
    return(
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="py-4 h-fit-content bg-white text-center rounded shawdow" style={{ width: '23rem'}}>
                <h1 className="mb-4">Contact Us</h1>
                <p><strong>Adress: </strong>123 React Street, UI City, CA 90210</p>
                <p><strong>Email: </strong>hello@prodmanage.com</p>
                <p><strong>Phone: </strong>+1 (555) 123-4567</p>
            </div>
        </div>
    )
}

export default Contact;
import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (e) => {
        const enteredEmail = e.target.value;
        setEmail(enteredEmail);
    
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailError(emailRegex.test(enteredEmail) ? '' : 'Invalid email format');
    };
    
    
    
    const handleSubmit = async () => {
       
        if (!name || !email || !subject || !message) {
            console.error('Please fill in all the required fields.');
            return;
        }
    
       
        if (emailError) {
            console.error('Invalid email format. Please correct the email.');
            return;
        }
    
        const contactData = {
            Name: name,
            Email: email,
            Subject: subject,
            Message: message,
        };
    
        try {
            const response = await fetch('https://localhost:7265/api/User/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });
    
            console.log('Response status:', response.status);
    
            if (response.ok) {
                console.log('Contact form submitted successfully');
                
            } else {
                console.error('Error submitting contact form:', response.statusText);
                
            }
        } catch (error) {
            console.error('Error submitting contact form:', error);
            
        }
    };
    

    return (
        <div className="my-6">
            <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif] mt-40">
                <div>
                    <h1 className="text-3xl font-extrabold">Let's Talk</h1>
                    <p className="text-sm text-gray-400 mt-3">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.</p>
                    <div className="mt-12">
                        <h2 className="text-lg font-extrabold">Email</h2>
                        <ul className="mt-3">
                            <li className="flex items-center">
                                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff' viewBox="0 0 479.058 479.058">
                                        <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" data-original="#000000" />
                                    </svg>
                                </div>
                                <a href="/" className="text-[#007bff] text-sm ml-3">
                                    <small className="block">Mail</small>
                                    <strong>info@example.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-lg font-extrabold">Socials</h2>
                        <ul className="flex mt-3 space-x-4">
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://facebook.com">
                                    <FaFacebook size={20} color='#007bff' />
                                </a>
                            </li>
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://Linkedin.com">
                                    <FaLinkedin size={20} color='#007bff' />
                                </a>
                            </li>
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://instagram.com">
                                    <FaInstagram size={20} color='#007bff' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <form className="ml-auto space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => handleEmailChange(e)}
                        className={`w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff] ${emailError ? 'border-red-500' : ''}`}
                    />
                    {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}


                    <input
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                    />
                    <textarea
                        placeholder="Message"
                        rows="6"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
                    ></textarea>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
                    >
                    Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

import DynamicBanner from "./DynamicBanner";
import Features from "./Features";
import callImg from '../assets/callicon.png';
import clockImg from '../assets/clockIcon.png';
import locationImg from '../assets/locationIcon.png';
import { useActionState, useRef } from "react";
import Modal from "./Modal";


export default function Contact() {
    const modal = useRef();
    const [formState, formAction] = useActionState(handleSubmitContactForm, null)

    function handleSubmitContactForm(prevFormState, fd) {
        const name = fd.get('name');
        const email = fd.get('email');
        const subject = fd.get('subject');
        const message = fd.get('message');
 
        modal.current.open();

        return {enteredValues: {name, email, subject, message}}
    }
 
    return (
        <>
        <Modal ref={modal}>
            <p>We'll get back to you soon.</p>
        </Modal>
        <DynamicBanner title="Contact" />
        <div className="contactContainer">
            <p className="heading">Get In Touch With Us</p>
            <p className="heading-2">For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            <div className="details-form">
                <div className="details">
                    <div className="address-content">
                        <img src={locationImg} alt="Location Icon" />
                        <div className="address-details">
                            <p>Address</p>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>
                    <div className="phone-content">
                        <img src={callImg} alt="Call Icon" />
                        <div className="phone-details">
                            <p>Phone</p>
                            <p>Mobile: +(84) 546-6789</p>
                            <p>Hotline: +(84) 456-6789</p>
                        </div>
                    </div>
                    <div className="workingTime-content">
                        <img src={clockImg} alt="Clock Icon" />
                        <div className="workingTime-details">
                            <p>Working Time</p>
                            <p>Monday-Friday: 9:00 - 22:00</p>
                            <p>Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>
                <form action={formAction}>
                    <div className="name">
                        <label htmlFor="name">Your name</label>
                        <input id="name" type="text" name="name" placeholder="Abc" required defaultValue={formState?.enteredValues?.name} />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email address</label>
                        <input id="email" placeholder="Abc@def.com" name="email" type="email" required defaultValue={formState?.enteredValues?.email} />
                    </div>
                    <div className="subject">
                        <label htmlFor="subject">Subject</label>
                        <input id="subject" type="text" name="subject" placeholder="This is optional" defaultValue={formState?.enteredValues?.subject} />
                    </div>
                    <div className="message">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" placeholder="Hi! i'd like to ask about" required defaultValue={formState?.enteredValues?.message}></textarea>
                    </div>
                    <button className="contactBtn">Submit</button>
                </form>
            </div>
        </div>
        <Features />
        </>
    )
}
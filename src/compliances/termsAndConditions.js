// TermsAndConditions.js
import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="container">
            <h1>Terms and Conditions</h1>
            <p>
                Welcome to Meet Goti Software Development Services. By engaging our services, you agree
                to the following terms and conditions:
            </p>
            <h2>Service Description</h2>
            <p>
                We provide software development services as outlined in the project proposal or contract. Any changes
                to the scope may result in additional charges.
            </p>
            <h2>Payment Terms</h2>
            <ul>
                <li>A deposit of 30% is required before work commences.</li>
                <li>The remaining balance is due upon project completion.</li>
            </ul>
            <h2>Intellectual Property</h2>
            <p>
                Upon full payment, all intellectual property rights will be transferred to the client.
                We reserve the right to showcase the project in our portfolio unless an NDA has been signed.
            </p>
            <h2>Termination</h2>
            <p>
                Either party may terminate the agreement in writing. Refunds for incomplete work will be provided based on the work completed.
            </p>
            <h2>Contact</h2>
            <p>
                If you have any questions, please email <a href="mailto:meetgoti07@gmail.com">meetgoti07@gmail.com</a>.
            </p>
        </div>
    );
};

export default TermsAndConditions;

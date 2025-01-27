import TitleCard from "../../../components/Cards/TitleCard";

function TermsOfService() {
    return (
        <>
            <TitleCard title="Terms of Service" topMargin="mt-2">
                <div className="px-6 py-4">
                    <h2 className="text-xl font-bold mb-4">Terms and Conditions</h2>
                    <p className="mb-4">
                        By using our services, you agree to the following terms and conditions. Please read them carefully.
                    </p>

                    <h3 className="text-lg font-semibold mt-6 mb-2">Use of Services</h3>
                    <ul className="list-disc ml-6 mb-4">
                        <li>You must use our services in compliance with all applicable laws and regulations.</li>
                        <li>You are responsible for maintaining the confidentiality of your account and password.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 mb-2">Prohibited Activities</h3>
                    <p className="mb-4">
                        You agree not to engage in any activities that may harm our services or interfere with other users.
                        Prohibited activities include, but are not limited to, hacking, spamming, and unauthorized access.
                    </p>

                    <h3 className="text-lg font-semibold mt-6 mb-2">Intellectual Property</h3>
                    <p className="mb-4">
                        All content provided through our services, including text, graphics, and logos, is the property of our company
                        and is protected by intellectual property laws. You may not use our content without prior written permission.
                    </p>

                    <h3 className="text-lg font-semibold mt-6 mb-2">Termination</h3>
                    <p className="mb-4">
                        We reserve the right to terminate or suspend your access to our services at our discretion, without prior notice,
                        if you violate these terms.
                    </p>

                    <h3 className="text-lg font-semibold mt-6 mb-2">Changes to These Terms</h3>
                    <p className="mb-4">
                        We may update these terms of service from time to time. Continued use of our services constitutes your
                        acceptance of the updated terms.
                    </p>

                    <h3 className="text-lg font-semibold mt-6 mb-2">Contact Us</h3>
                    <p>
                        If you have any questions about these terms of service, please contact us at:
                        <br />
                        Email: <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>
                        <br />
                        Phone: +1-234-567-890
                    </p>
                </div>
            </TitleCard>
        </>
    );
}

export default TermsOfService;

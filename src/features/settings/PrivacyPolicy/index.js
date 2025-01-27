import TitleCard from "../../../components/Cards/TitleCard";

function PrivacyPolicy() {
    return (
        <>
            <TitleCard title="Privacy Policy" topMargin="mt-2">
                <div className="px-6 py-4">
                    <h2 className="text-xl font-bold mb-4">Our Commitment to Privacy</h2>
                    <p className="mb-4">
                        Your privacy is important to us. This privacy policy explains how we collect, use, and protect
                        your personal information when you use our services.
                    </p>

                    <h3 className="text-lg font-semibold mt-6 mb-2">Information We Collect</h3>
                    <ul className="list-disc ml-6 mb-4">
                        <li>Personal information you provide directly, such as your name, email address, and phone number.</li>
                        <li>Information collected automatically, such as your IP address, browser type, and usage data.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 mb-2">How We Use Your Information</h3>
                    <p className="mb-4">
                        We use your information to provide and improve our services, communicate with you, and comply with
                        legal requirements. We do not sell or share your information with third parties for marketing purposes.
                    </p>

                    <h3 className="text-lg font-semibold mt-6 mb-2">Your Rights</h3>
                    <p className="mb-4">
                        You have the right to access, update, or delete your personal information. If you have any concerns
                        about your data, please contact us at <a href="mailto:privacy@example.com" className="text-blue-500">privacy@example.com</a>.
                    </p>

                    <h3 className="text-lg font-semibold mt-6 mb-2">Changes to This Policy</h3>
                    <p className="mb-4">
                        We may update this privacy policy from time to time. We encourage you to review it periodically to
                        stay informed about how we are protecting the information we collect.
                    </p>

                    <h3 className="text-lg font-semibold mt-6 mb-2">Contact Us</h3>
                    <p>
                        If you have any questions about this privacy policy, please contact us at:
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

export default PrivacyPolicy;

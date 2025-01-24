import { useState } from 'react'
import { Link } from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon'

function ForgotPasswordOTP() {
    const INITIAL_USER_OBJ = {
        emailId: "",
        otp: ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [stage, setStage] = useState('email') // 'email', 'otp', 'success'
    const [userObj, setUserObj] = useState(INITIAL_USER_OBJ)
    const [generatedOTP, setGeneratedOTP] = useState("")

    // Generate OTP
    const generateOTP = () => {
        return Math.floor(100000 + Math.random() * 900000).toString()
    }

    const submitEmailForm = (e) => {
        e.preventDefault()
        setErrorMessage("")

        if (userObj.emailId.trim() === "") 
            return setErrorMessage("Email Id is required!")

        // Simulate OTP generation and sending
        setLoading(true)
        const otp = generateOTP()
        setGeneratedOTP(otp)
        
        // In a real scenario, you would call an API to send OTP
        console.log(`OTP sent to ${userObj.emailId}: ${otp}`)
        
        setLoading(false)
        setStage('otp')
    }

    const verifyOTP = (e) => {
        e.preventDefault()
        setErrorMessage("")

        if (userObj.otp.trim() === "") 
            return setErrorMessage("OTP is required!")

        if (userObj.otp !== generatedOTP) 
            return setErrorMessage("Invalid OTP. Please try again.")

        // OTP Verified Successfully
        setStage('success')
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setUserObj({ ...userObj, [updateType]: value })
    }

    const renderEmailStage = () => (
        <form onSubmit={submitEmailForm}>
            <p className='my-8 font-semibold text-center'>
                We will send a 6-digit OTP to your email
            </p>
            <div className="mb-4">
                <InputText 
                    type="NumberDon't have an account?Register"  // Changed to "email" for proper validation
                    defaultValue={userObj.emailId} 
                    updateType="emailId" 
                    containerStyle="mt-4" 
                    labelTitle="OTP" 
                    updateFormValue={updateFormValue}
                />
            </div>

            <ErrorText styleClass="mt-12">{errorMessage}</ErrorText>
          <Link to="/reset-password">  
          <button 
                type="submit" 
                className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}
            >
                Send OTP
            </button>
            </Link>
          
        </form>
    )

    const renderOTPStage = () => (
        <form onSubmit={verifyOTP}>
            <p className='my-8 font-semibold text-center'>
                Enter the 6-digit OTP sent to {userObj.emailId}
            </p>
            <div className="mb-4">
                <InputText 
                    type="number"  // Keep as number for OTP input
                    defaultValue={userObj.otp} 
                    updateType="otp" 
                    containerStyle="mt-4" 
                    labelTitle="Enter OTP" 
                    updateFormValue={updateFormValue}
                    maxLength={6}  // Ensure max length is respected
                />
            </div>

            <ErrorText styleClass="mt-12">{errorMessage}</ErrorText>
            <button 
                type="submit" 
                className="btn mt-2 w-full btn-primary"
            >
                Verify OTP
            </button>

            <div className='text-center mt-4'>
                <button 
                    type="button" 
                    onClick={() => setStage('email')} 
                    className="text-primary"
                >
                    Resend OTP
                </button>
            </div>
        </form>
    )

    const renderSuccessStage = () => (
        <>
            <div className='text-center mt-8'>
                <CheckCircleIcon className='inline-block w-32 text-success'/>
            </div>
            <p className='my-4 text-xl font-bold text-center'>
                OTP Verified Successfully
            </p>
            <p className='mt-4 mb-8 font-semibold text-center'>
                You can now reset your password
            </p>
            <div className='text-center mt-4'>
                <Link to="/reset-password">
                    <button className="btn btn-block btn-primary">
                        Reset Password
                    </button>
                </Link>
            </div>
        </>
    )

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-5xl shadow-xl">
                <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
                    <div>
                        <LandingIntro />
                    </div>
                    <div className='py-24 px-10'>
                        <h2 className='text-2xl font-semibold mb-2 text-center'>
                            Forgot Password (OTP Verify)
                        </h2>

                        {stage === 'email' && renderEmailStage()}
                        {stage === 'otp' && renderOTPStage()}
                        {stage === 'success' && renderSuccessStage()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordOTP;

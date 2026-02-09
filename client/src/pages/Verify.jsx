import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const Verify = () => {

    const [searchParams] = useSearchParams()

    const razorpay_order_id = searchParams.get("razorpay_order_id")

    const { backendUrl, loadCreditsData, token } = useContext(AppContext)

    const navigate = useNavigate()

    // Verify Razorpay payment
    const verifyPayment = async () => {

        try {

            const { data } = await axios.post(
                backendUrl + "/api/user/verify-razorpay",
                { razorpay_order_id },
                { headers: { token } }
            )

            if (data.success) {
                toast.success(data.message)
                loadCreditsData()
            } else {
                toast.error(data.message)
            }

            navigate("/")

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }

    }

    useEffect(() => {
        if (token && razorpay_order_id) {
            verifyPayment()
        }
    }, [token])

    return (
        <div className='min-h-[60vh] flex items-center justify-center'>
            <div className="w-20 h-20 border-4 border-gray-300 border-t-4 border-t-primary rounded-full animate-spin"></div>
        </div>
    )
}

export default Verify

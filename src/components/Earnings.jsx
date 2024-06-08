import React from 'react'
import './Earnings.css'
import profile from '../Assests/profile.gif'
import Cookies from 'js-cookie'
const Earnings = ({data}) => {
    const email = Cookies.get('user_email')
    return (
        <div className='earn-cont'>
            <div className='earn-name-div'>
                <img className='prof' alt='Profile' src={profile}></img>
                <div className='earn-name-text'>
                    <div className='earn-name'>{(data.studentName && data.studentName!=='null') ? data.studentName : email && email.split('@')[0]}</div>
                    {data.date_time !=='NaN-NaN-NaN' && <div className='earn-join'>You Joined On {data.date_time}</div>}
                </div>
            </div>
            <div className='earn-reward-cont'>
                <div className='earn-reward'>
                    <div className='earn-reward-head'>Total Refferals</div>
                    <div className='earn-reward-text'>{data.enrollers.length}</div>
                </div>
                <div className='earn-reward'>
                    <div className='earn-reward-head'>Total Earnings</div>
                    <div className='earn-reward-text'>₹{data.referralEarnings}</div>
                </div>
                <div className='earn-reward'>
                    <div className='earn-reward-head'>Wallet Balance</div>
                    <div className='earn-reward-text'>₹{data.walletBalance}</div>
                </div>
            </div>
            <div className='hrr'></div>
            <div className='earn-withdraw-cont' onClick={()=> data.walletBalance > 0 ? window.open(`https://api.whatsapp.com/send?phone=+917302182091&text=I want to withdraw my refferal balance. My email is ${email}`,"_blank") : alert("You Haven't Reffered Anyone yet")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_1846_60)">
                        <path d="M24 22.4992C24 22.897 23.842 23.2785 23.5607 23.5598C23.2794 23.8411 22.8978 23.9992 22.5 23.9992H1.5C1.10218 23.9992 0.720644 23.8411 0.43934 23.5598C0.158035 23.2785 0 22.897 0 22.4992C0 22.1014 0.158035 21.7198 0.43934 21.4385C0.720644 21.1572 1.10218 20.9992 1.5 20.9992H22.5C22.8978 20.9992 23.2794 21.1572 23.5607 21.4385C23.842 21.7198 24 22.1014 24 22.4992ZM0.37 9.34018C0.107748 8.85816 -0.0186779 8.31396 0.00421804 7.76569C0.027114 7.21742 0.198473 6.68566 0.5 6.22718C0.950951 5.53441 1.56354 4.96164 2.285 4.55818L9.444 0.651182C10.2274 0.221402 11.1065 -0.00390625 12 -0.00390625C12.8935 -0.00390625 13.7726 0.221402 14.556 0.651182L21.716 4.55818C22.4367 4.9614 23.0489 5.53342 23.5 6.22518C23.8023 6.6836 23.9745 7.21551 23.9981 7.76414C24.0217 8.31276 23.8958 8.8575 23.634 9.34018C23.377 9.82103 22.9987 10.2263 22.5366 10.5157C22.0745 10.8052 21.5448 10.9687 21 10.9902V15.9992H21.5C21.8978 15.9992 22.2794 16.1572 22.5607 16.4385C22.842 16.7198 23 17.1014 23 17.4992C23 17.897 22.842 18.2785 22.5607 18.5598C22.2794 18.8411 21.8978 18.9992 21.5 18.9992H2.5C2.10218 18.9992 1.72064 18.8411 1.43934 18.5598C1.15804 18.2785 1 17.897 1 17.4992C1 17.1014 1.15804 16.7198 1.43934 16.4385C1.72064 16.1572 2.10218 15.9992 2.5 15.9992H3V10.9902C2.45588 10.9681 1.92698 10.8042 1.46568 10.5148C1.00437 10.2254 0.62668 9.82047 0.37 9.34018ZM6 15.9992H8V10.9992H6V15.9992ZM11 10.9992V15.9992H13V10.9992H11ZM18 15.9992V10.9992H16V15.9992H18ZM3 7.88618C3.00602 7.91697 3.0222 7.94485 3.04596 7.96534C3.06971 7.98583 3.09966 7.99775 3.131 7.99918H20.869C20.9004 7.99681 20.9301 7.98431 20.9537 7.96357C20.9773 7.94282 20.9936 7.91496 21 7.88418C20.8176 7.5996 20.5706 7.36215 20.279 7.19118L13.119 3.28518C12.7763 3.09725 12.3918 2.99874 12.001 2.99874C11.6102 2.99874 11.2257 3.09725 10.883 3.28518L3.722 7.19118C3.42877 7.36119 3.18105 7.59964 3 7.88618Z" fill="#FFF6EC" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1846_60">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <div className='earn-withdraw-text'>Withdraw Amount</div>
            </div>
        </div>
    )
}

export default Earnings
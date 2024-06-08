import React from "react";
import "./Refer.css";
function Refer({data}) {
  return (
    <div className="refer-container">
      <div className="refer-top">
      <div className="ref-right-top-min">
                <div className="ref-right-top-left">
                <div className="ref-total-earn-cont">
                <div className="ref-tot-earn-icon-cont">₹</div>
                <div className="ref-tot-text">
                  <p>Total Earnings</p>
                  <p>₹{data.referralEarnings}</p>
                </div>
                </div>
                </div>
                <div className="ref-right-top-left">
                <div className="ref-total-earn-cont">
                <div className="ref-tot-earn-icon-cont">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M10.5 7C10.5 8.933 12.067 10.5 14 10.5C15.933 10.5 17.5 8.933 17.5 7C17.5 5.067 15.933 3.5 14 3.5C12.067 3.5 10.5 5.067 10.5 7Z" fill="#992E9D"/>
  <path d="M2.91666 21C2.91666 22.933 4.48366 24.5 6.41666 24.5C8.34965 24.5 9.91666 22.933 9.91666 21C9.91666 19.067 8.34965 17.5 6.41666 17.5C4.48366 17.5 2.91666 19.067 2.91666 21Z" fill="#992E9D"/>
  <path d="M21.5833 24.5C19.6503 24.5 18.0833 22.933 18.0833 21C18.0833 19.067 19.6503 17.5 21.5833 17.5C23.5163 17.5 25.0833 19.067 25.0833 21C25.0833 22.933 23.5163 24.5 21.5833 24.5Z" fill="#992E9D"/>
  <path d="M8.40545 8.82269C8.76776 8.50291 8.80224 7.94997 8.48246 7.58765C8.16268 7.22534 7.60973 7.19086 7.24742 7.51064C5.12955 9.3799 3.79166 12.1176 3.79166 15.1667C3.79166 15.6499 4.18341 16.0417 4.66666 16.0417C5.14991 16.0417 5.54166 15.6499 5.54166 15.1667C5.54166 12.6405 6.64798 10.3738 8.40545 8.82269Z" fill="#992E9D"/>
  <path d="M20.7526 7.51064C20.3902 7.19086 19.8373 7.22534 19.5175 7.58765C19.1977 7.94997 19.2322 8.50291 19.5945 8.82269C21.352 10.3738 22.4583 12.6405 22.4583 15.1667C22.4583 15.6499 22.8501 16.0417 23.3333 16.0417C23.8166 16.0417 24.2083 15.6499 24.2083 15.1667C24.2083 12.1176 22.8704 9.3799 20.7526 7.51064Z" fill="#992E9D"/>
  <path d="M11.8848 23.3586C11.4168 23.2382 10.9397 23.5199 10.8193 23.9879C10.6988 24.4559 10.9806 24.9329 11.4486 25.0534C12.265 25.2635 13.1201 25.375 14 25.375C14.8799 25.375 15.735 25.2635 16.5514 25.0534C17.0194 24.9329 17.3012 24.4559 17.1807 23.9879C17.0603 23.5199 16.5832 23.2382 16.1152 23.3586C15.4401 23.5324 14.7315 23.625 14 23.625C13.2685 23.625 12.5599 23.5324 11.8848 23.3586Z" fill="#992E9D"/>
</svg>
                </div>
                <div className="ref-tot-text">
                  <p>Total Referals</p>
                  <p>{data.enrollers.length}</p>
                </div>
                </div>
                </div>
            </div>
        <div className="refer-left">
          <div className="ref-left-one">
            <h1>Share the Referal code!</h1>
            <p>Short Description can be given here</p>
            <div className="refer-refcode-cont">
              <div className="refer-refcode">
                <input type="text" value={data.code} disabled={true} />
                <span
                onClick={()=>{
                        navigator.clipboard.writeText(data.code);
                        alert(`Code Copied: ${data.code}`);
                }}      
                >Copy code</span>
              </div>
              <div className="share-icon-cont">
                <svg
                  onClick={()=>{
                        navigator.clipboard.writeText(data.code);
                        alert(`Code Copied: ${data.code}`);
               }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="ref-left-two">
            <div className="ref-reward">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
              >
                <g clip-path="url(#clip0_198_236)">
                  <path
                    d="M16.9619 4.01791C16.1625 3.45143 15.3244 2.8562 14.4674 2.20442C14.0769 1.9062 13.6256 1.69742 13.1455 1.59285C12.6654 1.48828 12.1682 1.49047 11.6891 1.59927C11.2227 1.70223 10.7847 1.90627 10.4058 2.19698C10.027 2.48769 9.71651 2.858 9.49636 3.28177C8.686 4.91918 8.11986 6.66646 7.81597 8.46797C7.57318 8.1978 7.27352 7.9848 6.93857 7.84429C6.60361 7.70378 6.24167 7.63926 5.8788 7.65536C5.51592 7.67146 5.16112 7.76779 4.83992 7.93741C4.51873 8.10703 4.23912 8.34573 4.0212 8.63634C2.48362 10.511 1.7521 12.9189 1.98704 15.3321C2.17904 17.7853 3.18625 20.1036 4.8483 21.9181C6.51035 23.7326 8.73168 24.9389 11.1586 25.3449C12.1096 25.5001 13.0761 25.5369 14.0361 25.4545C15.4929 25.329 16.9106 24.9175 18.2082 24.2436C19.5058 23.5696 20.6577 22.6464 21.5981 21.5268C22.5385 20.4072 23.249 19.1131 23.6887 17.7187C24.1285 16.3242 24.289 14.8567 24.161 13.4002C23.7624 8.84357 20.6117 6.60967 16.9619 4.01791ZM18.6072 20.3226C18.3414 20.5668 18.0594 20.7927 17.7629 20.9987C17.9966 20.3768 18.0892 19.7107 18.034 19.0487C17.8661 17.129 16.3332 15.0176 14.5116 13.2084C14.3028 13.0034 14.0521 12.846 13.7767 12.7472C13.5012 12.6483 13.2077 12.6103 12.9161 12.6358C12.6246 12.6613 12.3421 12.7497 12.088 12.8949C11.8339 13.0401 11.6143 13.2386 11.4443 13.4768C9.34165 16.4293 8.13415 19.5283 9.71267 21.8175C8.3929 21.22 7.2575 20.2796 6.42479 19.0942C5.59208 17.9087 5.09254 16.5216 4.97823 15.0774C4.82367 13.6668 5.17832 12.2473 5.9782 11.0751C6.13922 11.2939 6.30986 11.5041 6.49012 11.7058C6.78813 12.0424 7.17823 12.2842 7.61219 12.4015C8.04616 12.5187 8.50497 12.5062 8.93191 12.3655C9.36548 12.2283 9.75025 11.9688 10.0401 11.6183C10.3299 11.2679 10.5125 10.8412 10.5659 10.3896C10.763 8.40217 11.3037 6.46404 12.1638 4.66155C12.1815 4.6257 12.2073 4.59444 12.2392 4.57023C12.271 4.54603 12.308 4.52952 12.3473 4.52202C12.3995 4.51052 12.4535 4.51056 12.5057 4.52212C12.5578 4.53368 12.6069 4.55649 12.6493 4.58895C13.5354 5.26329 14.4013 5.87816 15.2274 6.46239C18.6403 8.88214 20.8944 10.4838 21.1721 13.6577C21.2841 14.8911 21.1111 16.1339 20.6664 17.2899C20.2217 18.4458 19.5172 19.4841 18.6074 20.3245L18.6072 20.3226Z"
                    fill="#3B3B3E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_198_236">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 2.59131) rotate(-5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p>
                Your Friends's Reward:&nbsp;<span>{}</span>
              </p>
            </div>
            <div className="ref-reward">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
              >
                <g clip-path="url(#clip0_198_236)">
                  <path
                    d="M16.9619 4.01791C16.1625 3.45143 15.3244 2.8562 14.4674 2.20442C14.0769 1.9062 13.6256 1.69742 13.1455 1.59285C12.6654 1.48828 12.1682 1.49047 11.6891 1.59927C11.2227 1.70223 10.7847 1.90627 10.4058 2.19698C10.027 2.48769 9.71651 2.858 9.49636 3.28177C8.686 4.91918 8.11986 6.66646 7.81597 8.46797C7.57318 8.1978 7.27352 7.9848 6.93857 7.84429C6.60361 7.70378 6.24167 7.63926 5.8788 7.65536C5.51592 7.67146 5.16112 7.76779 4.83992 7.93741C4.51873 8.10703 4.23912 8.34573 4.0212 8.63634C2.48362 10.511 1.7521 12.9189 1.98704 15.3321C2.17904 17.7853 3.18625 20.1036 4.8483 21.9181C6.51035 23.7326 8.73168 24.9389 11.1586 25.3449C12.1096 25.5001 13.0761 25.5369 14.0361 25.4545C15.4929 25.329 16.9106 24.9175 18.2082 24.2436C19.5058 23.5696 20.6577 22.6464 21.5981 21.5268C22.5385 20.4072 23.249 19.1131 23.6887 17.7187C24.1285 16.3242 24.289 14.8567 24.161 13.4002C23.7624 8.84357 20.6117 6.60967 16.9619 4.01791ZM18.6072 20.3226C18.3414 20.5668 18.0594 20.7927 17.7629 20.9987C17.9966 20.3768 18.0892 19.7107 18.034 19.0487C17.8661 17.129 16.3332 15.0176 14.5116 13.2084C14.3028 13.0034 14.0521 12.846 13.7767 12.7472C13.5012 12.6483 13.2077 12.6103 12.9161 12.6358C12.6246 12.6613 12.3421 12.7497 12.088 12.8949C11.8339 13.0401 11.6143 13.2386 11.4443 13.4768C9.34165 16.4293 8.13415 19.5283 9.71267 21.8175C8.3929 21.22 7.2575 20.2796 6.42479 19.0942C5.59208 17.9087 5.09254 16.5216 4.97823 15.0774C4.82367 13.6668 5.17832 12.2473 5.9782 11.0751C6.13922 11.2939 6.30986 11.5041 6.49012 11.7058C6.78813 12.0424 7.17823 12.2842 7.61219 12.4015C8.04616 12.5187 8.50497 12.5062 8.93191 12.3655C9.36548 12.2283 9.75025 11.9688 10.0401 11.6183C10.3299 11.2679 10.5125 10.8412 10.5659 10.3896C10.763 8.40217 11.3037 6.46404 12.1638 4.66155C12.1815 4.6257 12.2073 4.59444 12.2392 4.57023C12.271 4.54603 12.308 4.52952 12.3473 4.52202C12.3995 4.51052 12.4535 4.51056 12.5057 4.52212C12.5578 4.53368 12.6069 4.55649 12.6493 4.58895C13.5354 5.26329 14.4013 5.87816 15.2274 6.46239C18.6403 8.88214 20.8944 10.4838 21.1721 13.6577C21.2841 14.8911 21.1111 16.1339 20.6664 17.2899C20.2217 18.4458 19.5172 19.4841 18.6074 20.3245L18.6072 20.3226Z"
                    fill="#3B3B3E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_198_236">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 2.59131) rotate(-5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p>
                Your Reward:&nbsp;<span>₹200</span>
              </p>
            </div>
          </div>
          <div className="ref-left-three">
            <div className="ref-money-cont">
              <div className="ref-bal-container">
                <div className="ref-wallet-icon-cont">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.6178 9.33746C24.5516 9.33328 24.4797 9.33331 24.405 9.33334L24.3864 9.33334H21.4598C19.0476 9.33334 16.9835 11.2322 16.9835 13.7083C16.9835 16.1845 19.0476 18.0833 21.4598 18.0833H24.3864L24.405 18.0833C24.4797 18.0834 24.5516 18.0834 24.6178 18.0792C25.5976 18.0174 26.4641 17.2506 26.537 16.1796C26.5418 16.1094 26.5417 16.0337 26.5417 15.9635L26.5417 15.9445V11.4722L26.5417 11.4532C26.5417 11.383 26.5418 11.3073 26.537 11.2371C26.4641 10.1661 25.5976 9.39933 24.6178 9.33746ZM21.2003 14.875C21.8214 14.875 22.3248 14.3527 22.3248 13.7083C22.3248 13.064 21.8214 12.5417 21.2003 12.5417C20.5793 12.5417 20.0758 13.064 20.0758 13.7083C20.0758 14.3527 20.5793 14.875 21.2003 14.875Z"
                      fill="#992E9D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.4043 19.8333C24.5782 19.8288 24.7099 19.99 24.6627 20.1574C24.4285 20.9886 24.0568 21.6971 23.4603 22.2935C22.5872 23.1666 21.4801 23.5541 20.1122 23.738C18.7831 23.9167 17.0849 23.9167 14.9409 23.9167H12.4759C10.3318 23.9167 8.6336 23.9167 7.30451 23.738C5.93669 23.5541 4.82958 23.1666 3.95649 22.2935C3.0834 21.4205 2.69593 20.3134 2.51203 18.9455C2.33334 17.6164 2.33336 15.9182 2.33337 13.7742V13.6425C2.33336 11.4985 2.33334 9.80022 2.51203 8.47114C2.69593 7.10332 3.0834 5.99621 3.95649 5.12312C4.82958 4.25003 5.93669 3.86256 7.30451 3.67866C8.6336 3.49997 10.3318 3.49998 12.4759 3.5L14.9409 3.5C17.0849 3.49998 18.7832 3.49997 20.1122 3.67866C21.4801 3.86256 22.5872 4.25003 23.4603 5.12312C24.0567 5.71961 24.4285 6.42803 24.6627 7.25921C24.7099 7.42671 24.5782 7.58785 24.4042 7.58334L21.4597 7.58334C18.1503 7.58334 15.2334 10.1977 15.2334 13.7083C15.2334 17.219 18.1503 19.8333 21.4597 19.8333L24.4043 19.8333ZM8.16671 18.0833C7.68346 18.0833 7.29171 17.6916 7.29171 17.2083V10.2083C7.29171 9.72508 7.68346 9.33333 8.16671 9.33333C8.64996 9.33333 9.04171 9.72508 9.04171 10.2083V17.2083C9.04171 17.6916 8.64996 18.0833 8.16671 18.0833Z"
                      fill="#992E9D"
                    />
                  </svg>
                </div>
                <div className="ref-bal-text">
                  <p>Wallet Balance</p>
                  <p>₹{data.walletBalance}</p>
                </div>


              </div>
              <button className="ref-withdraw-btn">Withdraw Amount</button>
            </div>
          </div>
        </div>
        <div className="refer-right">
            <div className="ref-right-top">
                <div className="ref-right-top-left">
                <div className="ref-total-earn-cont">
                <div className="ref-tot-earn-icon-cont">₹</div>
                <div className="ref-tot-text">
                  <p>Total Earnings</p>
                  <p>₹{data.referralEarnings}</p>
                </div>
                </div>
                </div>
                <div className="ref-right-top-left">
                <div className="ref-total-earn-cont">
                <div className="ref-tot-earn-icon-cont">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M10.5 7C10.5 8.933 12.067 10.5 14 10.5C15.933 10.5 17.5 8.933 17.5 7C17.5 5.067 15.933 3.5 14 3.5C12.067 3.5 10.5 5.067 10.5 7Z" fill="#992E9D"/>
  <path d="M2.91666 21C2.91666 22.933 4.48366 24.5 6.41666 24.5C8.34965 24.5 9.91666 22.933 9.91666 21C9.91666 19.067 8.34965 17.5 6.41666 17.5C4.48366 17.5 2.91666 19.067 2.91666 21Z" fill="#992E9D"/>
  <path d="M21.5833 24.5C19.6503 24.5 18.0833 22.933 18.0833 21C18.0833 19.067 19.6503 17.5 21.5833 17.5C23.5163 17.5 25.0833 19.067 25.0833 21C25.0833 22.933 23.5163 24.5 21.5833 24.5Z" fill="#992E9D"/>
  <path d="M8.40545 8.82269C8.76776 8.50291 8.80224 7.94997 8.48246 7.58765C8.16268 7.22534 7.60973 7.19086 7.24742 7.51064C5.12955 9.3799 3.79166 12.1176 3.79166 15.1667C3.79166 15.6499 4.18341 16.0417 4.66666 16.0417C5.14991 16.0417 5.54166 15.6499 5.54166 15.1667C5.54166 12.6405 6.64798 10.3738 8.40545 8.82269Z" fill="#992E9D"/>
  <path d="M20.7526 7.51064C20.3902 7.19086 19.8373 7.22534 19.5175 7.58765C19.1977 7.94997 19.2322 8.50291 19.5945 8.82269C21.352 10.3738 22.4583 12.6405 22.4583 15.1667C22.4583 15.6499 22.8501 16.0417 23.3333 16.0417C23.8166 16.0417 24.2083 15.6499 24.2083 15.1667C24.2083 12.1176 22.8704 9.3799 20.7526 7.51064Z" fill="#992E9D"/>
  <path d="M11.8848 23.3586C11.4168 23.2382 10.9397 23.5199 10.8193 23.9879C10.6988 24.4559 10.9806 24.9329 11.4486 25.0534C12.265 25.2635 13.1201 25.375 14 25.375C14.8799 25.375 15.735 25.2635 16.5514 25.0534C17.0194 24.9329 17.3012 24.4559 17.1807 23.9879C17.0603 23.5199 16.5832 23.2382 16.1152 23.3586C15.4401 23.5324 14.7315 23.625 14 23.625C13.2685 23.625 12.5599 23.5324 11.8848 23.3586Z" fill="#992E9D"/>
</svg>
                </div>
                <div className="ref-tot-text">
                  <p>Total Referals</p>
                  <p>{data.enrollers.length}</p>
                </div>
                </div>
                </div>
            </div>
            <div className="ref-right-bottom">
                <h1>How it Works?</h1>
                <div style={{display:"flex",gap:"20px",alignItems:"center"}}>
                    <div className="how-icon-cont">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M7.49998 9.99984C7.49998 11.1504 6.56724 12.0832 5.41665 12.0832C4.26605 12.0832 3.33331 11.1504 3.33331 9.99984C3.33331 8.84924 4.26605 7.9165 5.41665 7.9165C6.56724 7.9165 7.49998 8.84924 7.49998 9.99984Z" stroke="#992E9D" stroke-width="1.5"/>
  <path d="M11.6667 5.4165L7.5 8.33317" stroke="#992E9D" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M11.6667 14.5835L7.5 11.6668" stroke="#992E9D" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M15.8334 15.4168C15.8334 16.5674 14.9006 17.5002 13.75 17.5002C12.5994 17.5002 11.6667 16.5674 11.6667 15.4168C11.6667 14.2662 12.5994 13.3335 13.75 13.3335C14.9006 13.3335 15.8334 14.2662 15.8334 15.4168Z" stroke="#992E9D" stroke-width="1.5"/>
  <path d="M15.8334 4.58333C15.8334 5.73393 14.9006 6.66667 13.75 6.66667C12.5994 6.66667 11.6667 5.73393 11.6667 4.58333C11.6667 3.43274 12.5994 2.5 13.75 2.5C14.9006 2.5 15.8334 3.43274 15.8334 4.58333Z" stroke="#992E9D" stroke-width="1.5"/>
</svg>
                    </div>
                     <div>
                     <h2>Share Referal</h2>
                     <p>Give Tutedude code to friends</p>
                     </div>
                </div>
                <div style={{display:"flex",gap:"20px",alignItems:"center"}}>
                <div className="how-icon-cont">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M8.15228 2.91637C9.33646 2.36121 10.6635 2.36121 11.8477 2.91637L17.4237 5.53053C18.6366 6.09916 18.6366 8.06754 17.4237 8.63617L11.8478 11.2503C10.6636 11.8055 9.33653 11.8055 8.15236 11.2503L2.57635 8.63614C1.36346 8.0675 1.36347 6.09912 2.57636 5.53049L8.15228 2.91637Z" stroke="#992E9D" stroke-width="1.5"/>
  <path d="M1.66669 7.0835V11.6668" stroke="#992E9D" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M15.8334 9.5835V13.8547C15.8334 14.6947 15.4138 15.4812 14.6789 15.8881C13.4553 16.5658 11.4967 17.5002 10 17.5002C8.50335 17.5002 6.54477 16.5658 5.32113 15.8881C4.58627 15.4812 4.16669 14.6947 4.16669 13.8547V9.5835" stroke="#992E9D" stroke-width="1.5" stroke-linecap="round"/>
</svg>
                </div>
                <div>
                <h2>Course Purchase</h2>
                <p>Friends enter your code during checkout</p>
                </div>
                
                </div>
                <div style={{display:"flex",gap:"20px",alignItems:"center"}}>
                <div className="how-icon-cont">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_198_261)">
    <path d="M18.3334 10H1.66669" stroke="#992E9D" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M10 1.6665V18.3332" stroke="#992E9D" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M10.8333 10C10.8333 11.8409 12.3257 13.3333 14.1666 13.3333" stroke="#992E9D" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M9.16665 10C9.16665 11.8409 7.67426 13.3333 5.83331 13.3333" stroke="#992E9D" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M10 8.36272C10 7.12115 10.845 6.03891 12.0495 5.73779C13.3859 5.40367 14.5965 6.61423 14.2624 7.95067C13.9612 9.15517 12.879 10.0002 11.6374 10.0002H10V8.36272Z" stroke="#992E9D" stroke-width="1.5"/>
    <path d="M9.99997 8.36272C9.99997 7.12115 9.15498 6.03891 7.95049 5.73779C6.61404 5.40367 5.40349 6.61423 5.7376 7.95067C6.03873 9.15517 7.12097 10.0002 8.36254 10.0002H9.99997V8.36272Z" stroke="#992E9D" stroke-width="1.5"/>
    <path d="M1.66669 9.99984C1.66669 6.07147 1.66669 4.10728 2.88708 2.88689C4.10746 1.6665 6.07165 1.6665 10 1.6665C13.9284 1.6665 15.8926 1.6665 17.113 2.88689C18.3334 4.10728 18.3334 6.07147 18.3334 9.99984C18.3334 13.9282 18.3334 15.8924 17.113 17.1128C15.8926 18.3332 13.9284 18.3332 10 18.3332C6.07165 18.3332 4.10746 18.3332 2.88708 17.1128C1.66669 15.8924 1.66669 13.9282 1.66669 9.99984Z" stroke="#992E9D" stroke-width="1.5"/>
  </g>
  <defs>
    <clipPath id="clip0_198_261">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
                </div>
                <div>
                <h2>Earn Reward</h2>
                    <p>Receive your reward after their successful enrollment.</p>
                </div>
                
                </div>
            </div>
        </div>
      </div>
      <div className="refer-table">
            <th>
                <td>Name</td>
                <td>Courses Enrolled</td>
                <td>Date of Purchase</td>
                <td>Your Reward amount</td>

            </th>
            {data.enrollers.map((enroller)=>{
                return(
                    <tr>
                        <td>{enroller.studentName}</td>
                        <td>{enroller.courses.join(', ')}</td>
                        <td>{enroller.date_time}</td>
                        <td style={{color:"#6BB870"}}>₹{enroller.referralAmount}</td>
                    </tr>
                )
            })}
               
      </div>
    </div>
  );
}

export default Refer;

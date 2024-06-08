import React from "react";
import LeftBar from "./Leftbar";
import "./Mobnavbar.css";
function Mobnavbar({name,setPage,page,data}) {
    const [leftBarVisible, setLeftBarVisible] = React.useState(false);
  return (
    <div className="mob-navbar-container">
    {leftBarVisible && <LeftBar name={name} setPage={setPage} page={page} data={data} setOpened={setLeftBarVisible} />}
    <div className="mob-navbar">
      <svg
        onClick={() => setLeftBarVisible(true)}
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
      >
        <g clip-path="url(#clip0_322_547)">
          <path
            d="M24.1666 21.1457C24.6321 21.1459 25.0796 21.3252 25.4165 21.6464C25.7533 21.9676 25.9537 22.4061 25.9761 22.8711C25.9985 23.336 25.8411 23.7917 25.5366 24.1438C25.2321 24.4959 24.8039 24.7173 24.3406 24.7622L24.1666 24.7707H4.83325C4.36778 24.7704 3.92024 24.5911 3.58337 24.2699C3.24649 23.9487 3.04611 23.5102 3.02374 23.0453C3.00137 22.5803 3.15873 22.1246 3.46321 21.7726C3.76769 21.4205 4.19595 21.199 4.65925 21.1541L4.83325 21.1457H24.1666ZM24.1666 12.6873C24.6473 12.6873 25.1083 12.8783 25.4482 13.2182C25.7881 13.5581 25.9791 14.0191 25.9791 14.4998C25.9791 14.9805 25.7881 15.4416 25.4482 15.7815C25.1083 16.1214 24.6473 16.3123 24.1666 16.3123H4.83325C4.35255 16.3123 3.89153 16.1214 3.55162 15.7815C3.21171 15.4416 3.02075 14.9805 3.02075 14.4998C3.02075 14.0191 3.21171 13.5581 3.55162 13.2182C3.89153 12.8783 4.35255 12.6873 4.83325 12.6873H24.1666ZM24.1666 4.229C24.6473 4.229 25.1083 4.41996 25.4482 4.75987C25.7881 5.09978 25.9791 5.5608 25.9791 6.0415C25.9791 6.52221 25.7881 6.98323 25.4482 7.32313C25.1083 7.66304 24.6473 7.854 24.1666 7.854H4.83325C4.35255 7.854 3.89153 7.66304 3.55162 7.32313C3.21171 6.98323 3.02075 6.52221 3.02075 6.0415C3.02075 5.5608 3.21171 5.09978 3.55162 4.75987C3.89153 4.41996 4.35255 4.229 4.83325 4.229H24.1666Z"
            fill="#800080"
          />
        </g>
        <defs>
          <clipPath id="clip0_322_547">
            <rect width="29" height="29" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className="mobnav-right">
        <div className="mobnav-right-sub">
          <span>Upgarde Courses</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <g clip-path="url(#clip0_322_546)">
              <path
                d="M9.75 8.25L16.5 1.5M16.5 1.5H12.4922M16.5 1.5V5.50781"
                stroke="#992E9D"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 9C16.5 12.5355 16.5 14.3033 15.4017 15.4017C14.3033 16.5 12.5355 16.5 9 16.5C5.46447 16.5 3.6967 16.5 2.59835 15.4017C1.5 14.3033 1.5 12.5355 1.5 9C1.5 5.46447 1.5 3.6967 2.59835 2.59835C3.6967 1.5 5.46447 1.5 9 1.5"
                stroke="#992E9D"
                stroke-width="1.75"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_322_546">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="mobnav-right-sub">
          <span>Refer and Earn</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.7438 2.81262C10.6657 2.81252 10.5845 2.8125 10.5 2.8125L7.50004 2.8125C7.41561 2.8125 7.33441 2.81252 7.25626 2.81262C7.03253 3.91454 6.16458 4.78249 5.06267 5.00622C5.06256 5.08436 5.06255 5.16556 5.06255 5.25C5.06255 5.33444 5.06256 5.41564 5.06267 5.49379C6.16458 5.71751 7.03253 6.58547 7.25626 7.68738C7.33441 7.68749 7.41561 7.6875 7.50005 7.6875H10.5C10.5845 7.6875 10.6657 7.68749 10.7438 7.68738C10.9676 6.58547 11.8355 5.71752 12.9374 5.49379C12.9375 5.41564 12.9375 5.33444 12.9375 5.25C12.9375 5.16556 12.9375 5.08436 12.9374 5.00622C11.8355 4.78249 10.9676 3.91454 10.7438 2.81262ZM11.1972 1.68995C10.9913 1.68749 10.7718 1.68749 10.539 1.6875L7.46105 1.6875C7.22825 1.68749 7.00882 1.68749 6.80291 1.68995C6.7855 1.68833 6.76787 1.6875 6.75005 1.6875C6.7265 1.6875 6.70329 1.68895 6.6805 1.69176C6.34092 1.69779 6.04022 1.71234 5.77919 1.74744C5.30834 1.81074 4.88324 1.94999 4.54164 2.29159C4.20003 2.6332 4.06078 3.0583 3.99748 3.52914C3.96238 3.79018 3.94783 4.09088 3.9418 4.43046C3.93899 4.45325 3.93755 4.47646 3.93755 4.5C3.93755 4.51783 3.93837 4.53546 3.94 4.55286C3.93753 4.75877 3.93754 4.97821 3.93754 5.211V5.289C3.93754 5.5218 3.93753 5.74123 3.94 5.94714C3.93837 5.96455 3.93755 5.98218 3.93755 6C3.93755 6.02355 3.93899 6.04675 3.9418 6.06954C3.94783 6.40912 3.96238 6.70982 3.99748 6.97086C4.06078 7.44171 4.20003 7.86681 4.54164 8.20841C4.88324 8.55001 5.30834 8.68926 5.77919 8.75257C6.04022 8.78766 6.34092 8.80222 6.68051 8.80825C6.70329 8.81106 6.7265 8.8125 6.75005 8.8125C6.76787 8.8125 6.7855 8.81167 6.8029 8.81005C7.00882 8.81252 7.22825 8.81251 7.46105 8.8125H10.5391C10.7719 8.81251 10.9913 8.81252 11.1972 8.81005C11.2146 8.81167 11.2322 8.8125 11.25 8.8125C11.2736 8.8125 11.2968 8.81106 11.3196 8.80825C11.6592 8.80222 11.9599 8.78766 12.2209 8.75257C12.6918 8.68926 13.1169 8.55001 13.4585 8.20841C13.8001 7.86681 13.9393 7.44171 14.0026 6.97086C14.0377 6.70982 14.0523 6.40912 14.0583 6.06954C14.0611 6.04675 14.0625 6.02355 14.0625 6C14.0625 5.98218 14.0617 5.96455 14.0601 5.94715C14.0626 5.74123 14.0626 5.52179 14.0625 5.289V5.21101C14.0626 4.97821 14.0626 4.75877 14.0601 4.55286C14.0617 4.53546 14.0625 4.51783 14.0625 4.5C14.0625 4.47646 14.0611 4.45325 14.0583 4.43046C14.0523 4.09088 14.0377 3.79018 14.0026 3.52914C13.9393 3.0583 13.8001 2.6332 13.4585 2.29159C13.1168 1.94999 12.6918 1.81074 12.2209 1.74744C11.9599 1.71234 11.6592 1.69779 11.3196 1.69176C11.2968 1.68895 11.2736 1.6875 11.25 1.6875C11.2322 1.6875 11.2146 1.68833 11.1972 1.68995ZM11.9206 2.84547C12.0915 3.29844 12.4516 3.65857 12.9046 3.82944C12.8997 3.77697 12.8941 3.72693 12.8876 3.67905C12.8411 3.33295 12.7607 3.18483 12.663 3.08709C12.5652 2.98935 12.4171 2.90893 12.071 2.8624C12.0231 2.85597 11.9731 2.85036 11.9206 2.84547ZM12.9046 6.67057C12.4516 6.84143 12.0915 7.20156 11.9206 7.65453C11.9731 7.64965 12.0231 7.64404 12.071 7.6376C12.4171 7.59107 12.5652 7.51065 12.663 7.41291C12.7607 7.31518 12.8411 7.16705 12.8876 6.82096C12.8941 6.77307 12.8997 6.72303 12.9046 6.67057ZM6.07948 7.65453C5.90862 7.20156 5.54848 6.84143 5.09552 6.67057C5.1004 6.72303 5.10601 6.77307 5.11245 6.82096C5.15898 7.16705 5.2394 7.31518 5.33713 7.41291C5.43487 7.51065 5.58299 7.59107 5.92909 7.6376C5.97698 7.64404 6.02702 7.64965 6.07948 7.65453ZM5.09552 3.82944C5.54848 3.65857 5.90862 3.29844 6.07948 2.84547C6.02702 2.85036 5.97698 2.85597 5.92909 2.8624C5.58299 2.90894 5.43487 2.98935 5.33713 3.08709C5.2394 3.18483 5.15898 3.33295 5.11245 3.67905C5.10601 3.72693 5.1004 3.77697 5.09552 3.82944ZM9.00004 5.0625C8.89649 5.0625 8.81254 5.14645 8.81254 5.25C8.81254 5.35356 8.89649 5.4375 9.00004 5.4375C9.1036 5.4375 9.18754 5.35356 9.18754 5.25C9.18754 5.14645 9.1036 5.0625 9.00004 5.0625ZM7.68755 5.25C7.68755 4.52513 8.27517 3.9375 9.00004 3.9375C9.72492 3.9375 10.3125 4.52513 10.3125 5.25C10.3125 5.97488 9.72492 6.5625 9.00004 6.5625C8.27517 6.5625 7.68755 5.97488 7.68755 5.25ZM6.51298 10.8361C7.91235 10.565 9.41035 10.6259 10.6225 11.3488C10.7927 11.4504 10.9523 11.5769 11.0916 11.7333C11.3735 12.05 11.5191 12.4435 11.5259 12.838C11.6694 12.7455 11.8131 12.6428 11.9591 12.5325L13.3145 11.5086C13.9929 10.9961 14.9789 10.996 15.6574 11.5084C16.2843 11.9818 16.5343 12.8314 16.0855 13.5508C15.7665 14.0621 15.2861 14.7693 14.7972 15.2221C14.303 15.6798 13.5997 16.0647 13.0677 16.3215C12.4215 16.6333 11.7237 16.8057 11.0451 16.9156C9.65824 17.1401 8.21511 17.1057 6.84379 16.8232C6.14298 16.6788 5.41471 16.6038 4.695 16.6038H3.00005C2.68939 16.6038 2.43755 16.352 2.43755 16.0413C2.43755 15.7306 2.68939 15.4788 3.00005 15.4788H4.695C5.49158 15.4788 6.2959 15.5617 7.07079 15.7214C8.30983 15.9766 9.61512 16.0074 10.8654 15.805C11.4871 15.7044 12.0676 15.555 12.5786 15.3083C13.0912 15.0609 13.6675 14.7351 14.0328 14.3968C14.4022 14.0546 14.8156 13.4609 15.131 12.9553C15.2262 12.8027 15.213 12.5825 14.9795 12.4062C14.7022 12.1968 14.2698 12.1969 13.9926 12.4063L12.6372 13.4302C12.0961 13.8389 11.4301 14.2762 10.6041 14.4079C10.5207 14.4212 10.4339 14.4334 10.3438 14.4441C10.3009 14.4519 10.2561 14.457 10.2099 14.4587C9.78822 14.5006 9.29983 14.5104 8.76099 14.4595C8.45171 14.4303 8.22466 14.1559 8.25386 13.8466C8.28307 13.5373 8.55746 13.3103 8.86675 13.3395C9.33733 13.3839 9.75952 13.3741 10.1177 13.3373C10.125 13.3366 10.1322 13.3358 10.1394 13.335C10.1544 13.3263 10.1772 13.3105 10.2072 13.2843C10.4468 13.0752 10.4682 12.725 10.2513 12.4814C10.1963 12.4196 10.1287 12.3642 10.0462 12.315C9.16034 11.7867 7.97722 11.6984 6.72695 11.9406C5.48381 12.1814 4.24873 12.7362 3.32544 13.391C3.07203 13.5707 2.72092 13.511 2.54121 13.2576C2.3615 13.0042 2.42125 12.6531 2.67465 12.4734C3.72343 11.7296 5.10649 11.1086 6.51298 10.8361Z"
              fill="#992E9D"
            />
          </svg>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Mobnavbar;

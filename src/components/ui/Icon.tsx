interface IconProps {
  name:
    | "sunMoon"
    | "wave"
    | "cart"
    | "arrow"
    | "leaf"
    | "arrowLeft"
    | "arrowRight"
    | "star"
    | "water"
    | "lightning"
    | "checked"
    | "truck";
  width?: number;
  height?: number;
  strokeColor?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  width = 23,
  height = 23,
  strokeColor = "#15005B",
  className = "",
}) => {
  const icons = {
    sunMoon: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 23 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={`transition-colors duration-300 ${className}`}
      >
        <path
          d='M11.5 1.5V22'
          stroke={strokeColor}
          strokeWidth='1.1'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.4999 17.2694C8.4486 17.2694 5.98071 14.8015 5.98071 11.7502C5.98071 8.69884 8.4486 6.23096 11.4999 6.23096'
          stroke={strokeColor}
          strokeWidth='1.1'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M4.25391 4.50439L5.92545 6.17593'
          stroke={strokeColor}
          strokeWidth='1.1'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M1.25 11.75H3.61538'
          stroke={strokeColor}
          strokeWidth='1.1'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M4.25391 18.9962L5.92545 17.3247'
          stroke={strokeColor}
          strokeWidth='1.1'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.5 9.03C12.4462 7.35846 14.2438 6.23096 16.3017 6.23096C16.4279 6.23096 16.5462 6.23884 16.6723 6.24673C15.3556 6.94057 14.4646 8.32038 14.4646 9.90519C14.4646 12.1917 16.3175 14.0446 18.604 14.0446C19.8656 14.0446 20.9931 13.4769 21.75 12.586C21.34 15.2431 19.0613 17.2694 16.3017 17.2694C14.2438 17.2694 12.4462 16.1419 11.5 14.4704'
          stroke={strokeColor}
          strokeWidth='1.1'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    wave: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 14 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={`transition-colors duration-300 ${className}`}
      >
        <path
          d='M1.27847 3.30024C2.63721 1.98269 3.71052 0.940956 6.62322 2.79957C8.02241 3.69199 9.15093 4.02928 10.0897 4.02752C11.7346 4.02752 12.801 2.99457 13.7226 2.10127C13.8808 1.94585 13.9792 1.72696 13.9969 1.49101C14.0146 1.25506 13.9502 1.02059 13.8175 0.837309C13.7527 0.747372 13.6726 0.673016 13.582 0.618641C13.4913 0.564266 13.3919 0.530976 13.2897 0.520739C13.1875 0.510502 13.0844 0.523527 12.9867 0.559043C12.889 0.59456 12.7986 0.651846 12.7208 0.727513C11.3629 2.04681 10.2888 3.08855 7.37609 1.22818C3.52775 -1.22509 1.7249 0.522855 0.276718 1.92824C0.118639 2.08378 0.0204057 2.30273 0.00283814 2.53868C-0.0147295 2.77463 0.0497497 3.00903 0.182609 3.1922C0.247414 3.28198 0.327508 3.35617 0.418151 3.41038C0.508794 3.46458 0.608144 3.4977 0.710322 3.50778C0.812499 3.51785 0.915428 3.50467 1.01302 3.46902C1.11061 3.43338 1.20087 3.37598 1.27847 3.30024ZM12.7208 5.21331C11.3629 6.53086 10.2888 7.57435 7.37609 5.71398C3.52775 3.25895 1.7249 5.00778 0.276718 6.41228C0.118639 6.56782 0.0204057 6.78677 0.00283814 7.02272C-0.0147295 7.25867 0.0497497 7.49307 0.182609 7.67624C0.247302 7.76615 0.32731 7.84049 0.417897 7.89485C0.508484 7.94922 0.607808 7.98251 0.709989 7.99274C0.812171 8.00298 0.915132 7.98996 1.01278 7.95446C1.11043 7.91895 1.20077 7.86168 1.27847 7.78604C2.63721 6.46761 3.71052 5.42588 6.62322 7.28361C8.02241 8.17779 9.15093 8.51332 10.0897 8.51332C11.7346 8.51332 12.801 7.48037 13.7226 6.58532C13.8809 6.43017 13.9794 6.2114 13.9971 5.97553C14.0148 5.73966 13.9504 5.50528 13.8175 5.32223C13.7527 5.23225 13.6726 5.15788 13.5819 5.10351C13.4913 5.04915 13.3918 5.0159 13.2896 5.00574C13.1873 4.99558 13.0843 5.00872 12.9866 5.04438C12.8889 5.08003 12.7985 5.13748 12.7208 5.21331ZM12.7208 9.69823C11.3629 11.0175 10.2888 12.0593 7.37609 10.2007C3.52775 7.74563 1.7249 9.49358 0.276718 10.899C0.118639 11.0545 0.0204057 11.2734 0.00283814 11.5094C-0.0147295 11.7453 0.0497497 11.9797 0.182609 12.1629C0.24735 12.2528 0.327419 12.3271 0.418064 12.3814C0.508709 12.4356 0.608084 12.4688 0.710292 12.4789C0.812501 12.489 0.91546 12.4757 1.01306 12.44C1.11066 12.4043 1.20092 12.3468 1.27847 12.271C2.63721 10.9534 3.71052 9.91255 6.62322 11.7703C8.02241 12.6627 9.15093 13 10.0897 13C11.7346 13 12.801 11.9653 13.7226 11.072C13.8808 10.9166 13.9792 10.6977 13.9969 10.4617C14.0146 10.2258 13.9502 9.99131 13.8175 9.80803C13.7527 9.71819 13.6726 9.64393 13.5819 9.58963C13.4913 9.53532 13.3919 9.50207 13.2897 9.49184C13.1875 9.4816 13.0845 9.4946 12.9868 9.53004C12.8891 9.56549 12.7987 9.62268 12.7208 9.69823Z'
          fill={strokeColor}
        />
      </svg>
    ),
    cart: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 21 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={`transition-colors duration-300 ${className}`}
      >
        <path
          d='M6.34717 3.24034C6.34717 3.00909 6.54012 2.82167 6.7782 2.82167H16.855C16.9806 2.82167 17.1 2.87498 17.1819 2.9675C17.2638 3.06008 17.3 3.1828 17.2811 3.30347L16.8506 6.04613C16.818 6.25333 16.6343 6.40177 16.425 6.40177C16.4034 6.40177 16.3815 6.40024 16.3595 6.39694C16.1241 6.36209 15.9624 6.14852 15.9983 5.91992L16.3532 3.65902H6.7782C6.54012 3.65902 6.34717 3.47155 6.34717 3.24034ZM9.61959 10.3779H5.79966L4.20705 1.34797C4.17161 1.14696 3.99221 1 3.7822 1H1.43103C1.19296 1 1 1.18743 1 1.41868C1 1.64993 1.19296 1.83735 1.43103 1.83735H3.41875L5.01136 10.8673C5.04732 11.0713 5.22955 11.2154 5.43568 11.2154C5.45982 11.2153 5.48439 11.2134 5.50896 11.2093C5.51068 11.2089 5.51236 11.2087 5.51408 11.2083C5.53946 11.2129 5.56566 11.2152 5.59238 11.2152H9.61959C9.85767 11.2152 10.0506 11.0278 10.0506 10.7965C10.0506 10.5653 9.85767 10.3779 9.61959 10.3779ZM8.78646 13.3407V14.0837C8.78646 14.782 8.20155 15.3502 7.48259 15.3502C6.76364 15.3502 6.17873 14.782 6.17873 14.0837V13.3407C6.17873 12.6423 6.76359 12.0742 7.4825 12.0742C8.2015 12.0742 8.78646 12.6423 8.78646 13.3407ZM7.9244 13.3407C7.9244 13.1041 7.72622 12.9116 7.48259 12.9116H7.4825C7.23897 12.9116 7.04079 13.1041 7.04079 13.3407V14.0837C7.04079 14.3203 7.23897 14.5128 7.4825 14.5128C7.72617 14.5128 7.9244 14.3203 7.9244 14.0837V13.3407ZM19.9404 9.43574C19.6861 11.4206 18.6512 13.1904 17.0264 14.4192C15.659 15.4533 14.0115 16 12.3059 16C11.9848 16 11.6617 15.9806 11.3379 15.9414C11.0671 15.9086 10.7941 15.8611 10.5263 15.8003C10.3465 15.7595 10.2135 15.6121 10.1954 15.4336C10.1395 14.8812 10.147 14.3206 10.2179 13.7677C10.7431 9.6703 14.6023 6.75156 18.8205 7.26188C19.0916 7.29472 19.3646 7.34222 19.6321 7.40297C19.8118 7.44382 19.9448 7.59119 19.9629 7.76955C20.019 8.32174 20.0114 8.88234 19.9404 9.43574ZM19.1286 8.15571C18.9906 8.13063 18.8519 8.10961 18.7138 8.09286C14.9677 7.63994 11.5398 10.232 11.0733 13.8712C11.0467 14.0788 11.0302 14.2875 11.0236 14.4963L14.9669 11.1406C15.1458 10.9882 15.4182 11.0056 15.5751 11.1796C15.7319 11.3535 15.714 11.6181 15.5349 11.7704L11.5909 15.1267C13.3556 15.3036 15.0924 14.8204 16.4967 13.7584C17.9398 12.667 18.859 11.0951 19.0849 9.33224C19.1351 8.94161 19.1497 8.54712 19.1286 8.15571Z'
          fill={strokeColor}
          stroke={strokeColor}
          strokeWidth='0.3'
        />
      </svg>
    ),
    arrow: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 23 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M18.1072 10L23 5.00003L18.1072 0L16.6372 1.5022L19.0205 3.93781L0 3.93781V6.06226L19.0205 6.06226L16.6372 8.4978L18.1072 10Z'
          fill={strokeColor}
        />
      </svg>
    ),
    leaf: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 23 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M22.6772 19.8173C22.2798 19.4699 21.6744 19.5075 21.3243 19.9018C19.7161 21.7091 17.928 21.0519 17.0955 20.5778C18.8126 9.75761 14.9291 7.74379 9.58868 4.9742C7.34183 3.81003 4.79697 2.48626 2.22374 0.237728C1.97303 0.0170998 1.62773 -0.0533136 1.3108 0.0405708C0.993881 0.134455 0.74791 0.387943 0.662766 0.70715C-0.732647 5.97406 0.0904102 11.0955 2.99003 15.1231C5.83762 19.0803 10.3455 21.4979 15.6954 21.9532C16.4569 22.4836 17.6348 23 18.9403 23C20.1843 23 21.5419 22.5306 22.7623 21.1599C23.1076 20.7656 23.0745 20.1647 22.6772 19.8173ZM4.551 14.0153C2.25685 10.8326 1.43852 6.85658 2.18589 2.67872C4.48951 4.47661 6.70798 5.62669 8.6994 6.65942C13.5715 9.18491 16.4096 10.6589 15.3974 18.8738L12.9235 15.8789L13.4438 12.8088C13.5289 12.2925 13.1789 11.7996 12.6539 11.7151C12.1335 11.6306 11.6369 11.978 11.5517 12.4943L11.3105 13.9261L7.9804 9.89374L6.1167 7.0866C5.82816 6.64534 5.23215 6.52329 4.78751 6.81433C4.3476 7.10068 4.22462 7.69215 4.51316 8.12871L6.40051 10.9781C6.41943 11.0063 6.43835 11.0344 6.46201 11.0579L7.42697 12.2268L6.73163 12.2362C6.20184 12.2455 5.78086 12.6774 5.78559 13.1985C5.79505 13.7195 6.22077 14.1373 6.74582 14.1373C6.75055 14.1373 6.75528 14.1373 6.76001 14.1373L8.98321 14.1045L13.6283 19.7328C9.83465 18.9348 6.6654 16.9538 4.551 14.0153Z'
          fill={strokeColor}
        />
      </svg>
    ),
    arrowRight: (
      <svg
        fill={strokeColor}
        width={width}
        height={height}
        version='1.1'
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 330 330'
      >
        <path
          id='XMLID_222_'
          d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z'
        />
      </svg>
    ),
    arrowLeft: (
      <svg
        fill={strokeColor}
        width={width}
        height={height}
        version='1.1'
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 330 330'
        transform='rotate(180)'
      >
        <g
          id='SVGRepo_bgCarrier'
          strokeWidth='0'
        />
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <g id='SVGRepo_iconCarrier'>
          <path
            id='XMLID_222_'
            d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z'
          />
        </g>
      </svg>
    ),
    star: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 14 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M13.6069 4.9397C13.584 4.86877 13.5416 4.80571 13.4846 4.75765C13.4276 4.70958 13.3583 4.67846 13.2846 4.66779L9.06058 4.05402L7.17107 0.222795C7.13804 0.156049 7.087 0.0998647 7.02374 0.0605837C6.96046 0.0213028 6.88748 0.000488281 6.81301 0.000488281C6.73854 0.000488281 6.66555 0.0213028 6.60228 0.0605837C6.53901 0.0998647 6.48798 0.156049 6.45494 0.222795L4.56543 4.05113L0.34145 4.66491C0.267816 4.67573 0.198669 4.7069 0.141801 4.75491C0.0849324 4.80293 0.0426044 4.86587 0.0195874 4.93665C-0.00342967 5.00743 -0.00622073 5.08324 0.0115288 5.15552C0.0292782 5.2278 0.0668627 5.29369 0.120046 5.34575L3.17643 8.32519L2.45524 12.5329C2.44317 12.606 2.45163 12.6809 2.47968 12.7495C2.50774 12.818 2.55428 12.8774 2.61412 12.921C2.67396 12.9646 2.74474 12.9907 2.81857 12.9964C2.89239 13.0022 2.96635 12.9873 3.03219 12.9534L6.81337 10.9693L10.5917 12.9555C10.6576 12.9895 10.7316 13.0044 10.8055 12.9987C10.8794 12.9929 10.9503 12.9667 11.0101 12.923C11.07 12.8793 11.1165 12.8198 11.1445 12.7512C11.1725 12.6825 11.1808 12.6075 11.1686 12.5343L10.4474 8.32664L13.5045 5.3472C13.5578 5.29553 13.5956 5.23002 13.6137 5.15803C13.6318 5.08604 13.6295 5.01042 13.6069 4.9397Z'
          fill={strokeColor}
        />
      </svg>
    ),
    water: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 24 31'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12.5165 0.305368C12.3219 0.109133 12.0607 -0.00286684 11.7805 5.58086e-05C11.5042 0.000995231 11.2398 0.112682 11.0466 0.31017C10.6176 0.748671 0.539062 11.1468 0.539062 19.7561C0.539062 25.9565 5.58355 31.001 11.784 31.001C17.9844 31.001 23.0288 25.9565 23.0288 19.7561C23.0288 11.0068 12.9458 0.738129 12.5165 0.305368ZM11.784 28.9377C6.72109 28.9377 2.60235 24.8189 2.60235 19.7561C2.60235 13.2493 9.49333 5.08192 11.7883 2.54255C14.0869 5.05885 20.9657 13.1434 20.9657 19.7561C20.9656 24.8189 16.8468 28.9377 11.784 28.9377Z'
          fill={strokeColor}
        />
        <path
          d='M8.4502 16.4453C8.25094 16.4453 8.07913 16.5191 7.95356 16.6587C7.83175 16.7939 7.76996 16.9868 7.76996 17.2319V18.3796H6.11605V17.2319C6.11605 16.9835 6.05238 16.7891 5.9267 16.6543C5.79905 16.5175 5.62599 16.4453 5.4261 16.4453C5.22151 16.4453 5.04803 16.5197 4.92444 16.6606C4.80597 16.7956 4.74585 16.9879 4.74585 17.232V20.9556C4.74585 21.1999 4.8066 21.3928 4.92622 21.5286C5.05095 21.6705 5.22381 21.7454 5.4261 21.7454C5.624 21.7454 5.79654 21.6726 5.92514 21.5348C6.05175 21.3991 6.11605 21.2042 6.11605 20.9556V19.5725H7.76996V20.9556C7.76996 21.1999 7.83071 21.3928 7.95033 21.5286C8.07506 21.6705 8.24791 21.7454 8.4502 21.7454C8.64811 21.7454 8.82065 21.6726 8.94925 21.5348C9.07586 21.3991 9.14016 21.2042 9.14016 20.9556V17.232C9.14016 16.9836 9.07649 16.7892 8.95081 16.6544C8.82315 16.5175 8.65009 16.4453 8.4502 16.4453Z'
          fill={strokeColor}
        />
        <path
          d='M12.7489 23.5081C12.6493 23.4304 12.515 23.3909 12.3493 23.3909H11.6121C11.6773 23.3315 11.7613 23.2589 11.8694 23.1706C12.1042 22.9786 12.2673 22.8414 12.368 22.7509C12.4803 22.65 12.59 22.5118 12.6942 22.34C12.8074 22.1532 12.8649 21.9434 12.8649 21.7166C12.8649 21.5702 12.8372 21.4268 12.7824 21.2905C12.7279 21.1545 12.6503 21.0328 12.5518 20.9288C12.4532 20.8245 12.3369 20.7412 12.2039 20.6804C12.0132 20.5956 11.7838 20.5527 11.5223 20.5527C11.3031 20.5527 11.1068 20.5866 10.9389 20.6531C10.7693 20.7205 10.6258 20.8116 10.5122 20.924C10.3993 21.0361 10.3128 21.1637 10.255 21.3032C10.1975 21.4424 10.1684 21.5798 10.1684 21.712C10.1684 21.8907 10.2424 22.0022 10.3045 22.064C10.3934 22.1529 10.5096 22.2 10.6405 22.2C10.829 22.2 10.939 22.1142 10.9982 22.0419C11.0591 21.9676 11.1102 21.87 11.1548 21.7435C11.1946 21.6298 11.2098 21.6002 11.2096 21.6002H11.2095C11.2861 21.4829 11.3784 21.4305 11.5086 21.4305C11.5696 21.4305 11.6236 21.4435 11.6737 21.4702C11.721 21.4954 11.7572 21.5296 11.7844 21.5746C11.8116 21.6195 11.8246 21.6703 11.8246 21.7302C11.8246 21.7906 11.8095 21.8526 11.7785 21.9196C11.7443 21.9934 11.6926 22.0677 11.6246 22.1406C11.5511 22.2194 11.4567 22.2999 11.3475 22.3771C11.2675 22.431 11.1449 22.5344 10.9728 22.693C10.8067 22.8457 10.6187 23.0308 10.4125 23.245C10.3474 23.3141 10.2908 23.4026 10.2397 23.5155C10.1857 23.6347 10.1594 23.734 10.1594 23.8195C10.1594 23.9599 10.2139 24.0878 10.3169 24.1894C10.4207 24.2922 10.5597 24.3442 10.73 24.3442H12.4159C12.5748 24.3442 12.7009 24.2965 12.7905 24.2027C12.8768 24.1127 12.9223 23.9976 12.9223 23.8699C12.9221 23.7215 12.862 23.5965 12.7489 23.5081Z'
          fill={strokeColor}
        />
        <path
          d='M18.2039 17.7065C18.0057 17.3041 17.709 16.989 17.3225 16.7702C16.9414 16.5546 16.4825 16.4453 15.9588 16.4453C15.5731 16.4453 15.2222 16.5072 14.9154 16.6291C14.6042 16.7528 14.3361 16.9344 14.1183 17.1689C13.9016 17.4019 13.7345 17.6869 13.6214 18.0159C13.5102 18.3391 13.4539 18.6978 13.4539 19.0824C13.4539 19.4572 13.5077 19.8118 13.6141 20.1363C13.7226 20.4678 13.8861 20.7563 14.1001 20.9937C14.3157 21.2329 14.5873 21.4205 14.9072 21.5511C15.223 21.6799 15.5833 21.7453 15.9782 21.7453C16.3748 21.7453 16.7337 21.6818 17.0451 21.5562C17.361 21.4288 17.6317 21.2418 17.8497 21.0001C18.0657 20.7605 18.2298 20.4745 18.3373 20.1498C18.4427 19.8314 18.4961 19.4744 18.4961 19.0888C18.4959 18.565 18.3977 18.1 18.2039 17.7065ZM16.9506 19.9384C16.846 20.1585 16.7121 20.3152 16.5412 20.4172C16.3668 20.5213 16.1805 20.5719 15.9715 20.5719C15.81 20.5719 15.6608 20.542 15.5279 20.4832C15.3965 20.425 15.2777 20.3351 15.1749 20.2161C15.0705 20.0956 14.9878 19.9386 14.9289 19.7496C14.8677 19.5536 14.8367 19.329 14.8367 19.0825C14.8367 18.8383 14.8676 18.6169 14.9285 18.4242C14.9877 18.2376 15.0676 18.0844 15.1662 17.9685C15.2639 17.8538 15.377 17.769 15.5119 17.709C15.6471 17.6492 15.7974 17.6188 15.9587 17.6188C16.1898 17.6188 16.3876 17.6723 16.5631 17.7822C16.7363 17.8908 16.867 18.0492 16.9627 18.266C17.0624 18.4923 17.1128 18.7669 17.1128 19.0824C17.1128 19.4237 17.0582 19.7118 16.9506 19.9384Z'
          fill={strokeColor}
        />
      </svg>
    ),
    lightning: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 19 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11.8493 1.75247L9.81379 12.1408L17.1878 12.1649L7.15042 26.2479L9.18594 14.819L1.8124 14.7941L11.8493 1.75247ZM11.8507 6.76145e-07C11.802 6.76145e-07 11.7533 0.00172578 11.7055 0.00520339C11.387 0.0302038 11.1759 0.133601 10.9256 0.297021C10.7847 0.388298 10.6576 0.498315 10.5481 0.62386C10.5152 0.66154 10.4842 0.700724 10.4552 0.741277L0.346083 13.7373C-0.0530846 14.2688 -0.111719 14.9702 0.194985 15.5564C0.501239 16.1426 1.12051 16.5142 1.79932 16.519L7.00699 16.5558L5.36973 25.9259C5.21412 26.7312 5.65613 27.5338 6.43417 27.8572C6.66028 27.9516 6.90383 28.0002 7.14994 28C7.71689 28 8.18281 27.7424 8.53239 27.2771L18.6541 13.194C19.0533 12.6626 19.1115 11.9603 18.8052 11.3749C18.4989 10.7887 17.8797 10.4172 17.2009 10.4124L11.9932 10.4036L13.6129 2.16471C13.6472 2.02983 13.6645 1.89138 13.6643 1.75244C13.6643 0.80434 12.8871 0.0314908 11.9147 0.000822156C11.8931 -5.40901e-05 11.8718 6.76145e-07 11.8507 6.76145e-07Z'
          fill={strokeColor}
        />
      </svg>
    ),
    checked: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 18 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.35105 19C9.29278 19 9.23445 18.991 9.17828 18.973C7.29002 18.3681 5.68242 17.208 4.40004 15.5248C3.39045 14.1996 2.58206 12.5502 1.99747 10.6226C1.01133 7.37118 1 4.47469 1 4.353C1 4.06135 1.22153 3.81734 1.51187 3.7893C1.55559 3.78506 5.95379 3.33355 9.0183 1.10806C9.21673 0.963884 9.48544 0.964054 9.68387 1.10812C12.7475 3.33355 17.1463 3.78506 17.1903 3.78936C17.4805 3.81768 17.7019 4.06158 17.7019 4.353C17.7019 4.47469 17.6906 7.37118 16.7045 10.6226C16.1199 12.5503 15.3115 14.1996 14.302 15.5248C13.0196 17.208 11.412 18.3682 9.52378 18.9731C9.4676 18.991 9.40933 19 9.35105 19ZM2.14884 4.84981C2.1959 5.80028 2.37887 7.98924 3.08912 10.3197C4.30128 14.2966 6.40767 16.8248 9.351 17.8371C12.3012 16.8225 14.41 14.2858 15.6206 10.2939C16.3261 7.96789 16.5071 5.79558 16.5534 4.84986C15.2847 4.66474 11.9983 4.03825 9.35094 2.25708C6.70339 4.03808 3.41763 4.66468 2.14884 4.84981Z'
          fill={strokeColor}
          stroke={strokeColor}
          strokeWidth='0.4'
        />
        <path
          d='M9.0485 12.758C8.91418 12.758 8.78348 12.7102 8.68047 12.6221L6.63257 10.8708C6.3949 10.6675 6.36698 10.3101 6.57023 10.0723C6.77341 9.8346 7.13091 9.80663 7.36865 10.01L8.9613 11.372L12.118 7.23134C12.3076 6.98262 12.6629 6.9346 12.9117 7.12431C13.1604 7.31391 13.2083 7.66926 13.0187 7.91798L9.49888 12.535C9.40448 12.6588 9.2633 12.7383 9.10842 12.7548C9.08843 12.7569 9.06844 12.758 9.0485 12.758Z'
          fill={strokeColor}
          stroke={strokeColor}
          strokeWidth='0.4'
        />
      </svg>
    ),
    truck: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 26 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M2.8129 3H6.40717M2.8129 8.12064H6.40717M0 5.56032H6.40717'
          stroke={strokeColor}
          strokeWidth='1.1'
        />
        <path
          d='M17.7748 11.2459H12.841V10.4991H17.028V1.74677H7.74677V10.4991H9.3063V11.2459H7V1H17.7748V11.2459Z'
          fill={strokeColor}
          stroke={strokeColor}
          strokeWidth='0.5'
        />
        <path
          d='M24.9223 11.2462H22.5602V10.4995H24.1755V7.09331L20.9077 3.40396H17.7748V10.4995H19.0263V11.2462H17.0281V2.65723H21.2439L24.9223 6.81V11.2462Z'
          fill={strokeColor}
          stroke={strokeColor}
          strokeWidth='0.5'
        />
        <path
          d='M20.8156 13.6806C19.5868 13.6806 18.5874 12.681 18.5874 11.4524C18.5874 10.2237 19.5868 9.22412 20.8156 9.22412C22.0444 9.22412 23.0442 10.2237 23.0442 11.4524C23.0443 12.681 22.0445 13.6806 20.8156 13.6806ZM20.8156 9.97086C19.9989 9.97086 19.3341 10.6354 19.3341 11.4524C19.3341 12.2693 19.9989 12.9338 20.8156 12.9338C21.6328 12.9338 22.2975 12.2693 22.2975 11.4524C22.2975 10.6354 21.6328 9.97086 20.8156 9.97086Z'
          fill={strokeColor}
          stroke={strokeColor}
          strokeWidth='0.5'
        />
        <path
          d='M11.1062 13.6806C9.87737 13.6806 8.87793 12.681 8.87793 11.4524C8.87793 10.2237 9.87741 9.22412 11.1062 9.22412C12.3349 9.22412 13.3344 10.2237 13.3344 11.4524C13.3344 12.681 12.335 13.6806 11.1062 13.6806ZM11.1062 9.97086C10.2894 9.97086 9.62467 10.6354 9.62467 11.4524C9.62467 12.2693 10.2894 12.9338 11.1062 12.9338C11.9229 12.9338 12.5876 12.2693 12.5876 11.4524C12.5877 10.6354 11.923 9.97086 11.1062 9.97086Z'
          fill={strokeColor}
          stroke={strokeColor}
          strokeWidth='0.5'
        />
      </svg>
    ),
  };

  return icons[name] || null;
};

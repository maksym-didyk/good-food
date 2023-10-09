import React from 'react';
import './Header.scss';

export const Header = () => {
    return(
        <div className='header'>
            <div className='header__container'>
              <a href='/'>
                <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
                  <path d="M38.7848 70.5269C52.8269 70.5269 64.2102 58.1892 64.2102 42.97C64.2102 27.7507 52.8269 15.4131 38.7848 15.4131C24.7427 15.4131 13.3594 27.7507 13.3594 42.97C13.3594 58.1892 24.7427 70.5269 38.7848 70.5269Z" stroke="#C21807"/>
                  <path d="M13.7908 46.2396C14.0063 52.7785 17.0576 57.4478 19.4286 61.0334C21.3338 63.9671 23.3237 65.8503 26.3297 67.5528C38.9042 74.7965 54.993 67.5168 60.3276 57.991C61.7522 55.8177 62.4844 55.637 63.7798 48.212C64.8572 42.036 63.7798 39.7007 63.7798 39.7007C63.5256 39.7007 63.7798 39.7007 61.8406 41.5689C59.6997 43.2037 60.3276 42.9701 56.178 45.0973C53.7225 46.5822 47.7002 48.7506 47.0753 48.9364C46.6306 49.12 46.4513 49.1625 45.8053 49.4796C45.0327 49.8589 44.2389 50.2041 44.2389 50.2041C43.851 50.4128 42.9955 50.7823 42.9955 50.7823C42.455 51.1517 41.5292 51.6889 40.6824 52.1597L39.1159 53.0293L37.2954 52.0873C36.2792 51.5805 35.3478 51.0733 35.2208 50.9285C35.0938 50.8197 34.1623 50.3853 33.1039 49.9869C23.9179 46.1114 19.5133 43.4372 19.0475 43.2139C18.5818 42.9906 16.5919 41.8025 15.9455 41.3354C15.2991 40.8683 14.0063 39.7007 14.0063 39.7007C14.0063 39.7007 13.5753 39.7007 13.7908 46.2396ZM58.0836 46.6546C56.7288 48.9364 55.7126 50.1317 55.4161 49.8057C55.3312 49.7333 55.1197 49.0088 54.993 48.212C54.7809 46.7996 54.8236 46.7272 56.9404 45.4232C58.1259 44.6627 59.1843 44.1556 59.2687 44.228C59.3959 44.3004 58.8456 45.387 58.0836 46.6546ZM21.3338 45.5681C23.3237 46.7272 23.3661 46.7996 23.112 48.212C22.7733 49.9869 22.6463 50.1317 21.9266 49.4437C21.3338 48.9729 18.7088 44.9524 18.7088 44.5902C18.7088 44.1918 19.3863 44.4453 21.3338 45.5681ZM18.8359 46.1114C20.2179 48.552 20.1483 48.3932 20.9951 49.4796C21.7995 50.566 22.2653 51.5441 22.0112 51.6165C21.7995 51.6889 20.2799 51.1078 19.5133 50.892C18.7467 50.6767 18.7466 50.6767 17.4538 50.4432C16.161 50.2097 16.161 50.2097 15.73 50.0952C15.2991 49.9813 15.2991 49.8421 15.2991 49.8421C15.2991 49.8421 15.2991 49.9509 14.6527 48.212C14.0063 46.4731 13.1444 42.9701 14.6527 41.8025C15.0837 41.3354 17.4538 43.6707 18.8359 46.1114ZM63.5643 47.4516L62.9179 50.4432L60.7632 50.6767L58.824 50.9103C56.9404 51.2223 55.3317 51.7977 56.9404 49.6244C57.7023 48.6469 58.7891 47.0729 59.2549 46.2396C59.7208 45.4066 62.7063 43.4372 62.9179 43.4372C64.6417 43.4372 63.5643 45.9665 63.5643 47.4516ZM26.6261 48.1396C29.8015 49.4072 29.7168 49.3349 28.87 50.8561C28.4466 51.5805 27.9809 52.8117 27.8116 53.5725C27.6422 54.297 27.3458 54.9126 27.1342 54.9126C26.9225 54.9126 25.991 54.0433 25.0173 53.0293C23.4084 51.2905 23.2814 51.0009 23.5354 49.552C23.7471 48.0672 24.0858 47.3064 24.4245 47.3064C24.4669 47.3064 25.483 47.6688 26.6261 48.1396ZM54.4 48.8641C54.9503 50.7837 54.5271 51.7613 52.4099 53.6809L50.5896 55.3834L50.3354 53.8621C50.2087 53.0293 49.7428 51.6889 49.277 50.892L48.4302 49.4437L50.8434 48.3932C52.1561 47.8136 53.3838 47.3792 53.6381 47.4516C53.8497 47.4876 54.2306 48.1396 54.4 48.8641ZM32.5535 50.4577C33.8236 50.9644 37.2107 52.7033 38.1421 53.3189C38.2268 53.3913 37.4647 54.2246 36.4486 55.1662C35.4325 56.1437 34.1623 57.3754 33.6543 57.991L32.7652 59.0414L31.1563 57.991C28.616 56.3614 28.4043 56.0354 28.616 53.9709C28.7853 52.0513 29.8438 49.8421 30.5636 49.8421C30.7752 49.8421 31.6644 50.1317 32.5535 50.4577ZM48.5995 50.9644C49.3619 52.2325 49.8273 55.637 49.3192 56.1802C49.1503 56.3974 47.8376 57.339 46.4405 58.317L43.9424 60.0554L43.4343 58.7878C42.6723 56.9405 41.5715 55.2021 40.5554 54.2605C39.7086 53.4277 39.7086 53.3913 40.4707 52.9929C42.8417 51.7253 46.9486 49.8421 47.3718 49.8421C47.6683 49.8421 48.2186 50.3489 48.5995 50.9644ZM19.5556 51.6529C21.1168 52.0728 21.1168 52.0779 22.1382 52.3773C23.2715 52.7094 27.1765 55.4558 27.1765 56.0713C27.1765 57.0858 17.8696 55.7696 17.0229 54.6468C16.6418 54.1396 15.3913 50.892 15.73 50.892C15.857 50.892 18.5311 51.3773 19.5556 51.6529ZM62.2715 52.7785C61.6251 55.1139 60.3276 54.8037 57.5329 55.637C55.3317 56.325 50.8861 56.651 50.8861 56.1437C50.8861 56.0354 51.7751 55.1297 52.8758 54.1517C54.2306 52.9565 54.993 52.7785 55.9242 52.3773C56.8555 51.9756 57.5312 51.8444 58.5068 51.6529C59.4704 51.3773 60.1168 51.3773 61.1942 51.1438C62.2715 50.9103 62.9179 50.4432 62.2715 52.7785ZM40.3437 54.9849C41.5715 56.1078 42.8417 58.4982 42.8417 59.7658C42.8417 60.4538 42.2489 61.323 40.9365 62.5906C39.878 63.6051 40.0897 63.521 39.0312 64.7279C37.9728 65.9344 38.1421 64.9451 37.5917 63.8223C37.253 63.1343 36.3216 61.9391 35.4748 61.1423C34.628 60.3455 33.9506 59.5122 33.9506 59.2586C33.9506 58.281 37.9304 54.1881 38.9042 54.1881C39.2006 54.1881 39.8357 54.5501 40.3437 54.9849ZM21.8842 56.5786C23.0697 56.8682 24.9749 57.0858 26.2027 57.0494C27.6422 57.0129 28.743 57.1942 29.3781 57.5566C33.8236 60.2366 33.5272 60.8163 27.5152 60.997C25.0596 61.0699 22.3499 60.9611 21.3762 60.7439C19.852 60.3814 20.0394 60.2516 18.9629 58.7878C17.4538 55.8145 16.9994 55.2913 18.1002 55.5809C18.6506 55.7621 20.7411 56.289 21.8842 56.5786ZM60.7632 55.8145C60.5478 56.7486 60.3323 57.2157 59.6859 58.1498C59.0395 59.0839 57.1097 61.0699 52.0716 61.0334C49.9122 61.0334 47.2873 60.8887 46.2285 60.7798L44.3233 60.5262C44.3233 60.5262 44.9904 60.3044 46.4405 59.0778C47.8906 57.8513 47.6196 57.991 48.8116 57.3754C50.0031 56.7598 50.7167 57.0494 52.8335 56.977C55.289 56.9046 56.2384 56.6935 57.8716 56.2526C59.5053 55.8117 60.9787 54.8803 60.7632 55.8145ZM35.6018 62.2287C37.5494 64.5103 37.9728 65.9956 37.253 68.1683C36.6179 70.1604 36.1522 70.378 33.4849 69.762L31.7067 69.3636L31.9607 66.0315C32.1724 62.4099 32.7228 60.7074 33.6966 60.7074C34.0353 60.7074 34.8821 61.3954 35.6018 62.2287ZM31.622 62.8443C31.1563 65.2347 31.0716 65.3071 28.362 65.8503C25.991 66.3575 25.6523 66.3575 24.8479 65.8503C23.8318 65.1623 20.8258 62.1922 20.8258 61.8662C20.8258 61.7214 23.3237 61.6131 26.3721 61.5767L31.9184 61.5407L31.622 62.8443ZM56.8848 61.8863C56.8848 62.0311 55.8695 63.0264 54.5146 64.2216C54.5146 64.2216 53.2218 65.6228 52.3599 65.8564C51.498 66.0899 51.389 66.4566 49.8273 65.9232C48.266 65.3893 41.8256 65.3795 40.2167 65.9591C39.7086 66.1403 39.4546 66.068 39.4546 65.7055C39.4546 64.9451 41.9949 62.1198 43.011 61.7938C44.1117 61.4319 56.8848 61.4879 56.8848 61.8863ZM30.9022 67.5163C31.0716 68.8928 30.5636 68.9652 28.489 68.0236C26.7108 67.1908 26.6261 66.7559 28.2349 66.4664C30.3095 66.068 30.7752 66.2487 30.9022 67.5163ZM49.7851 66.5388L51.4786 66.9372L50.4203 67.6252C48.7689 68.6756 45.0008 69.762 41.4445 70.1968C37.507 70.6676 37.0836 70.4864 37.8458 68.4944C38.3115 67.3356 38.6925 67.0455 40.0897 66.6471C42.2489 66.1039 47.626 66.0315 49.7851 66.5388Z" fill="#C21807"/>
                  <path d="M6.79444 24.6479C6.55566 24.6432 6.32959 24.6709 6.11619 24.731C5.90141 24.7879 5.7033 24.8771 5.52184 24.9989C5.33804 25.1198 5.17437 25.2744 5.03087 25.4626C4.88831 25.6485 4.76916 25.8664 4.67336 26.1164C4.51094 26.5404 4.46793 26.9598 4.54434 27.3747C4.62074 27.7895 4.82087 28.1678 5.14468 28.5096C5.46711 28.8481 5.91662 29.1207 6.49313 29.3272C7.07201 29.5347 7.59939 29.6107 8.07532 29.5555C8.55121 29.5002 8.95879 29.3369 9.29807 29.0654C9.63735 28.794 9.89152 28.4377 10.0605 27.9965C10.2173 27.5872 10.2748 27.2022 10.2332 26.8417C10.1924 26.4787 10.0599 26.1622 9.83545 25.8922C9.60964 25.619 9.30027 25.412 8.90738 25.2712L9.07235 24.9959L8.2471 27.1502L7.3579 26.8316L8.49152 23.8721L9.30406 24.1632C9.90384 24.3781 10.373 24.6995 10.7114 25.1274C11.0484 25.552 11.2461 26.0437 11.3044 26.6025C11.3635 27.1589 11.2767 27.741 11.0439 28.3488C10.7829 29.0302 10.405 29.5749 9.91031 29.983C9.41649 30.3886 8.84153 30.6369 8.18534 30.728C7.52687 30.8182 6.82099 30.7283 6.06779 30.4584C5.49822 30.2543 5.01867 29.9877 4.62919 29.6586C4.23971 29.3295 3.94462 28.9576 3.74392 28.5428C3.54185 28.1248 3.43551 27.6812 3.42491 27.2119C3.41293 26.7393 3.50035 26.2591 3.68718 25.7714C3.84303 25.3646 4.04504 25.0063 4.2932 24.6966C4.54231 24.3845 4.82406 24.1287 5.13843 23.9291C5.45375 23.7272 5.79027 23.5871 6.14803 23.509C6.50347 23.4301 6.86775 23.4213 7.24085 23.4825L6.79444 24.6479Z" fill="white"/>
                  <path d="M16.0287 14.4372C16.6713 14.9594 17.123 15.5242 17.3839 16.1317C17.6428 16.7377 17.7213 17.3437 17.6193 17.9497C17.517 18.5522 17.2434 19.1094 16.7986 19.6214C16.3522 20.1353 15.8301 20.4939 15.2324 20.6971C14.6345 20.8968 14.0037 20.9247 13.3399 20.7809C12.6762 20.637 12.024 20.3048 11.3834 19.7842C10.7409 19.2621 10.2901 18.698 10.0311 18.092C9.77025 17.4845 9.69091 16.8795 9.79322 16.277C9.89522 15.671 10.1695 15.111 10.616 14.5971C11.0608 14.0851 11.5821 13.7292 12.1801 13.5296C12.7777 13.3264 13.4084 13.2966 14.0722 13.4405C14.734 13.5828 15.3861 13.915 16.0287 14.4372ZM15.2583 15.324C14.7685 14.926 14.2881 14.6691 13.8172 14.5534C13.346 14.4341 12.9067 14.4397 12.4993 14.5701C12.0916 14.697 11.7401 14.9304 11.4447 15.2705C11.1475 15.6125 10.9695 15.9886 10.9106 16.3989C10.8496 16.8075 10.9197 17.227 11.1206 17.6573C11.3214 18.0841 11.6666 18.4965 12.1564 18.8945C12.6461 19.2925 13.1266 19.5511 13.5979 19.6704C14.0688 19.7861 14.5081 19.7805 14.9157 19.6536C15.3215 19.5252 15.6729 19.2899 15.97 18.948C16.2654 18.6079 16.4436 18.2336 16.5045 17.8249C16.5651 17.4128 16.4951 16.9932 16.2944 16.5665C16.0934 16.1361 15.748 15.722 15.2583 15.324Z" fill="white"/>
                  <path d="M24.8972 8.99445C25.3534 9.71084 25.6168 10.4034 25.6876 11.0723C25.7569 11.7389 25.6557 12.3445 25.3838 12.889C25.1127 13.4301 24.6929 13.87 24.1242 14.2086C23.5534 14.5486 22.9562 14.7146 22.3324 14.7065C21.7095 14.695 21.1052 14.5082 20.5194 14.1461C19.9337 13.784 19.4134 13.2459 18.9587 12.5317C18.5025 11.8153 18.2397 11.1238 18.1704 10.4571C18.0997 9.78827 18.1999 9.18338 18.471 8.64228C18.7428 8.09778 19.1641 7.65556 19.7349 7.31558C20.3035 6.97687 20.8993 6.81325 21.5223 6.82479C22.146 6.83287 22.7508 7.01792 23.3365 7.38004C23.9208 7.73991 24.4411 8.27806 24.8972 8.99445ZM23.9123 9.58113C23.5646 9.03508 23.1849 8.6271 22.7733 8.35714C22.3624 8.08372 21.9456 7.94038 21.5228 7.92711C21.1007 7.91039 20.7009 8.0145 20.3232 8.23944C19.9434 8.46568 19.6663 8.76479 19.4917 9.13686C19.3159 9.50673 19.2606 9.93124 19.326 10.4105C19.3922 10.8862 19.5991 11.3971 19.9468 11.9431C20.2945 12.4891 20.6738 12.8988 21.0847 13.1723C21.4963 13.4422 21.9131 13.5856 22.3352 13.6023C22.7559 13.6169 23.1561 13.511 23.5359 13.2848C23.9136 13.0598 24.1903 12.7624 24.3662 12.3925C24.5429 12.0192 24.5981 11.5947 24.532 11.1189C24.4665 10.6397 24.26 10.1271 23.9123 9.58113Z" fill="white"/>
                  <path d="M32.0148 11.2665L29.6322 11.8109L27.707 3.93003L30.1652 3.36835C30.8863 3.20357 31.5442 3.21982 32.1388 3.41712C32.7328 3.61185 33.2393 3.97147 33.6583 4.49599C34.0791 5.01739 34.3894 5.6873 34.5893 6.50565C34.7899 7.32656 34.8221 8.0641 34.6859 8.71818C34.5521 9.3717 34.2605 9.91775 33.8111 10.3563C33.3611 10.7923 32.7623 11.0957 32.0148 11.2665ZM30.4888 10.5182L31.6999 10.2415C32.2605 10.1134 32.699 9.89402 33.0152 9.58338C33.3308 9.27021 33.5282 8.87708 33.6074 8.40394C33.686 7.92824 33.6491 7.37869 33.4968 6.75529C33.3458 6.13704 33.1254 5.63349 32.8356 5.24466C32.5483 4.85527 32.1965 4.59031 31.7801 4.44978C31.3639 4.30926 30.8874 4.30031 30.3507 4.42293L29.0713 4.71529L30.4888 10.5182Z" fill="white"/>
                  <path d="M44.3359 10.7546L46.6428 2.99512L51.1612 4.25165L50.8612 5.25949L47.4426 4.30867L46.7397 6.67288L49.8347 7.53368L49.5361 8.53769L46.4411 7.67693L45.4353 11.0604L44.3359 10.7546Z" fill="white"/>
                  <path d="M61.1336 13.9933C60.6449 14.6841 60.0994 15.195 59.4969 15.5261C58.8962 15.8551 58.2825 16.0088 57.6568 15.9873C57.0345 15.965 56.4463 15.7707 55.8925 15.4043C55.3366 15.0365 54.9341 14.5753 54.685 14.021C54.4394 13.4659 54.367 12.8568 54.4679 12.1939C54.5687 11.5309 54.8626 10.8551 55.35 10.1664C55.8387 9.47562 56.3834 8.96572 56.9841 8.63677C57.5866 8.30567 58.1989 8.15125 58.8212 8.17349C59.4474 8.19502 60.0382 8.38969 60.5941 8.75755C61.1478 9.12396 61.5473 9.58473 61.793 10.1398C62.042 10.6942 62.1162 11.3029 62.0153 11.9658C61.9162 12.6267 61.6223 13.3025 61.1336 13.9933ZM60.1744 13.3586C60.5467 12.8321 60.7755 12.3328 60.8613 11.8606C60.95 11.3877 60.9138 10.9619 60.7527 10.5829C60.5945 10.2033 60.3316 9.89177 59.964 9.64839C59.5939 9.40364 59.1974 9.27889 58.7742 9.27413C58.3528 9.26721 57.9292 9.38893 57.5038 9.63914C57.0819 9.88864 56.6846 10.2767 56.3123 10.8032C55.9399 11.3297 55.709 11.8294 55.6202 12.3023C55.5344 12.7744 55.5706 13.2003 55.7288 13.58C55.8882 13.9575 56.1528 14.2686 56.5226 14.5134C56.8906 14.7568 57.2849 14.8819 57.7068 14.8888C58.1317 14.8949 58.5553 14.7732 58.9772 14.5237C59.403 14.2735 59.802 13.8851 60.1744 13.3586Z" fill="white"/>
                  <path d="M68.3142 22.0412C67.6502 22.5304 66.9835 22.8299 66.3151 22.9397C65.6485 23.0479 65.0201 22.9858 64.4311 22.7533C63.8454 22.5213 63.3416 22.1379 62.9206 21.6029C62.4979 21.0659 62.2479 20.4925 62.1708 19.8827C62.0975 19.2734 62.2044 18.6716 62.4918 18.0774C62.7788 17.4831 63.2537 16.9421 63.9161 16.4544C64.5802 15.9652 65.2455 15.6665 65.9122 15.5583C66.581 15.4485 67.208 15.5096 67.7941 15.7416C68.3832 15.974 68.8895 16.3588 69.3123 16.8957C69.7333 17.4307 69.9807 18.0029 70.054 18.6122C70.1311 19.222 70.0259 19.8241 69.7385 20.4183C69.4536 21.011 68.9788 21.552 68.3142 22.0412ZM67.5851 21.1146C68.091 20.7418 68.453 20.3461 68.6706 19.9275C68.8921 19.5094 68.9805 19.0935 68.9361 18.6796C68.8956 18.2663 68.7353 17.882 68.4556 17.5267C68.1742 17.1694 67.8329 16.9168 67.4317 16.7689C67.0326 16.6196 66.5944 16.5914 66.1173 16.6844C65.6441 16.7779 65.1542 17.0112 64.6478 17.3841C64.1415 17.7569 63.7777 18.1524 63.5567 18.5704C63.3391 18.9889 63.2507 19.4049 63.2912 19.8183C63.3339 20.2301 63.4959 20.6147 63.7773 20.972C64.057 21.3273 64.3966 21.5796 64.7956 21.729C65.1981 21.8789 65.6364 21.907 66.11 21.8135C66.587 21.7204 67.0787 21.4875 67.5851 21.1146Z" fill="white"/>
                  <path d="M67.3412 29.0148L66.4668 26.5517L73.6583 24.1631L74.5607 26.7042C74.8253 27.4496 74.9085 28.1377 74.8106 28.7683C74.715 29.3981 74.4495 29.9445 74.0147 30.4074C73.5829 30.872 72.9938 31.2283 72.247 31.4763C71.4976 31.7251 70.8025 31.7941 70.1612 31.6831C69.5209 31.5747 68.9585 31.2962 68.475 30.8478C67.9936 30.3985 67.6157 29.7875 67.3412 29.0148ZM67.8225 27.3848L68.2668 28.6367C68.4728 29.2163 68.7469 29.6638 69.0891 29.9793C69.4338 30.2939 69.8367 30.4813 70.2974 30.5414C70.7611 30.6007 71.2769 30.5359 71.8458 30.3469C72.4103 30.1596 72.855 29.9052 73.1804 29.5839C73.507 29.265 73.7057 28.8847 73.7764 28.4431C73.8475 28.0015 73.7846 27.5033 73.5876 26.9485L73.1179 25.6259L67.8225 27.3848Z" fill="white"/>
                  <path d="M71.0653 42.5029C71.9263 59.1849 58.5753 77.4882 39.4104 77.4882C20.2452 77.4882 6.89453 62.3046 6.89453 42.5029" stroke="white" stroke-linecap="round"/>
                  <path d="M44.5849 20.6908C43.7756 20.9922 42.6887 22.0027 41.9372 23.1551C40.1452 25.8855 39.4515 32.0553 40.3533 37.3829C40.4458 37.9414 40.7811 39.475 41.0932 40.7958C42.1569 45.2902 42.1916 45.7778 41.8563 50.6798C41.773 51.8704 41.8727 50.9404 41.8014 52.0777L45.0335 50.6798C44.8973 46.3369 44.9908 43.1979 45.3015 41.0175C45.6945 38.2251 45.9488 32.3655 45.9837 25.4777C46.007 20.9301 45.9953 20.7883 45.7872 20.6641C45.4864 20.5046 45.0589 20.5135 44.5849 20.6908Z" fill="#C21807"/>
                  <path d="M31.6548 22.6992C31.1605 27.0852 30.8846 33.8883 31.103 36.2807C31.2985 38.5235 31.5284 39.2337 32.5401 40.6043C32.9999 41.2398 33.3908 42.4982 33.5518 43.8688C33.6897 45.0775 33.6419 41.4939 33.182 50.677L35.7677 51.3776C35.5148 46.2938 35.4601 45.0276 35.5751 43.9686C35.7245 42.5481 36.1039 41.2647 36.5868 40.6043C37.5984 39.2337 37.8284 38.5235 38.0353 36.3056C38.2537 33.7887 37.9204 26.3749 37.3685 21.6401C37.3225 21.2912 37.2536 20.9922 37.2076 20.9922C37.1041 20.9922 37.0121 22.7116 36.8512 28.219C36.7707 30.7235 36.6672 32.8915 36.6097 33.0535C36.4948 33.4274 36.1499 33.365 36.0465 32.9538C36.0004 32.7794 35.966 31.5209 35.9545 30.1503C35.943 27.5586 35.6556 21.9516 35.4946 21.3037C35.4141 20.9797 35.3911 21.042 35.3337 21.7398C35.2072 23.0232 35.0347 26.7612 34.9543 30.113C34.8968 32.5551 34.8508 33.228 34.7129 33.3401C34.5864 33.4647 34.5174 33.4522 34.3795 33.3152C34.253 33.1657 34.1955 32.2935 34.1036 28.7797C33.9886 24.643 33.8162 21.1292 33.7012 21.0171C33.5172 20.8177 33.2988 24.5308 33.2298 29.0289C33.1954 31.0848 33.1494 32.8915 33.1149 33.0535C33.0229 33.527 32.5746 33.365 32.4826 32.8292C32.4366 32.5925 32.3446 30.4244 32.2642 28.0321C32.1147 22.7989 32.0227 20.9922 31.9193 20.9922C31.8733 20.9922 31.7583 21.7647 31.6548 22.6992Z" fill="#C21807"/>
                </svg>
              </a>
            <div className='header__navbar'>
              <ul className='header__menu'>
                <li><a href='/#menu' className='header__link'>Меню</a></li>
                <li><a href='/#about-us' className='header__link'>O нас</a></li>
                <li><a href='/#howitwork' className='header__link'>Как это работает?</a></li>
              </ul>
              <button className='header__button sp_popup_28095c1b-d2f3-45d9-8d5f-8c2149e1b539'>Связаться</button>
            </div>
            </div>
        </div>
    );
}

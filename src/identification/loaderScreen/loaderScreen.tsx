import css from './loaderScreen.module.css'

export const LoaderScreen = () => <div className={css.wrapper}>
  <svg className={css.loader} xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64' fill='none'>
    <path d='M58.1819 31.9999C58.1819 25.9426 56.0816 20.0727 52.2389 15.3904C48.3962 10.708 43.0488 7.50291 37.1079 6.32119C31.167 5.13947 25.0001 6.05424 19.658 8.90963C14.316 11.765 10.1292 16.3844 7.81121 21.9806C5.49318 27.5768 5.18728 33.8036 6.94562 39.6001C8.70396 45.3966 12.4178 50.4041 17.4542 53.7693C22.4907 57.1346 28.5382 58.6494 34.5663 58.0557C40.5945 57.462 46.2302 54.7964 50.5134 50.5133L46.8107 46.8106C43.3842 50.2371 38.8756 52.3696 34.0531 52.8445C29.2306 53.3195 24.3926 52.1076 20.3634 49.4154C16.3342 46.7232 13.3632 42.7173 11.9565 38.0801C10.5498 33.4429 10.7946 28.4614 12.649 23.9845C14.5034 19.5075 17.8528 15.812 22.1264 13.5277C26.4001 11.2434 31.3336 10.5116 36.0863 11.4569C40.839 12.4023 45.1169 14.9664 48.1911 18.7123C51.2653 22.4582 52.9455 27.1541 52.9455 31.9999H58.1819Z' fill='url(#paint0_angular_14562_2996)'/>
    <defs>
      <radialGradient id='paint0_angular_14562_2996' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(32.0001 31.9999) scale(27.2727)'>
        <stop stopColor='#3D4047' stopOpacity='0'/>
        <stop offset='1' stopColor='#3D4047'/>
      </radialGradient>
    </defs>
  </svg>
  <div className={css.text}>Загрузка фото...</div>
  </div>
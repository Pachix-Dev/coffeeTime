import './IconsAnimate.css'
export function IconsAnimate () {
  function animateBackgroundIcons () {
    const svgs = Array.from(document.querySelectorAll('#icons svg'))
    const w = window.innerWidth
    const h = window.innerHeight - 300
    const availableSvgs = svgs.filter((svg) => !svg.isAnimating)
    const svgToAnimate = availableSvgs[Math.floor(Math.random() * availableSvgs.length)]
    if (!svgToAnimate) return

    svgToAnimate.addEventListener(
      'animationend',
      () => {
        svgToAnimate.classList.remove('animate-moving-background')
        svgToAnimate.removeAttribute('style')
        svgToAnimate.isAnimating = false
      },
      { once: true }
    )

    svgToAnimate.setAttribute('style', `top: ${Math.floor(Math.random() * h)}px; left: ${Math.floor(Math.random() * w)}px`)

    svgToAnimate.classList.add('animate-moving-background')
    svgToAnimate.isAnimating = true
  }
  setInterval(animateBackgroundIcons, 1000)
  return (
    <div className='wrapperIcons'>
      <div id='icons' className='icons'>
        <svg viewBox='0 0 64 64'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <g id='Bread_2_'> <path d='M56.4202728,2.8885663c-8.7074966-7.3007002-26.7343979-0.1942999-40.1825981,15.8408995 C9.794776,26.4120655,5.3206754,34.988266,3.6390758,42.8768654C1.9100757,50.9891663,3.3304756,57.4452667,7.6385756,61.058567 c2.3212996,1.9463005,5.3095999,2.9237976,8.7748995,2.9237976c2.9652996,0,6.2812004-0.7157974,9.8257008-2.152298 c7.4750996-3.0303001,15.1401005-8.9307022,21.5819988-16.6124001C61.270874,29.1815662,65.128273,10.1932659,56.4202728,2.8885663 z M46.2889748,43.9325676c-6.2359009,7.4365005-13.6235924,13.1338005-20.8013,16.0438995 c-6.9672909,2.8251991-12.8495989,2.6651001-16.5639992-0.4510994c-3.7138-3.1142998-4.8959999-8.8780022-3.3285999-16.2315025 c1.6148-7.5751991,5.9384995-15.8427982,12.174799-23.2792988C27.2542744,8.7050667,38.9666748,1.9384663,47.5779762,1.9384663 c2.9565964,0,5.5478973,0.7978001,7.5571976,2.4834001C62.9983826,11.0165663,59.0301743,28.7411671,46.2889748,43.9325676z' /> <path d='M31.025383,47.3885651c-0.0968075-0.4116974-0.1704082-0.8956985-0.3457088-1.3906975 c-0.1791-0.4923019-0.3192902-1.0591011-0.6030998-1.596302c-0.2509995-0.5541-0.5250988-1.1400986-0.9000988-1.6940994 c-0.3359013-0.5789986-0.7629013-1.1265984-1.1954002-1.6837997c-0.4750996-0.5205994-0.9512005-1.0606995-1.5018005-1.5233994 c-1.0697994-0.9578018-2.293499-1.740799-3.5187988-2.2807007c-0.5922012-0.3128014-1.2250004-0.4799004-1.7953014-0.6859016 c-0.5926991-0.1500969-1.1422997-0.3139-1.6715984-0.3722992c-0.5211926-0.085598-0.9993-0.1436005-1.4350014-0.1474991 c-0.4298992-0.0209007-0.800499-0.0294991-1.0991001,0.0015984c-0.6015987,0.0458031-0.9474983,0.0903015-0.9474983,0.0903015 s0.3267994,0.1217003,0.9024982,0.3027c0.2934017,0.0764999,0.6259098,0.2252998,1.0074005,0.3544998 c0.3810997,0.1236992,0.8001003,0.3167992,1.2590008,0.4980011c0.4627991,0.1688995,0.9275074,0.4468994,1.4406986,0.657299 c0.4873009,0.2780991,1.0125999,0.5331001,1.5221004,0.8564987c0.5289001,0.2895012,1.0177097,0.6763,1.5403996,1.0223999 c0.4883099,0.3947029,1.0125999,0.7580032,1.4710999,1.2012024c0.4966011,0.4003983,0.9172096,0.8799973,1.3740005,1.3121986 c0.3952084,0.4869003,0.8588009,0.9098015,1.2038994,1.405899c0.3768005,0.4715996,0.7218018,0.9449997,1.0373096,1.4084015 c0.3350906,0.4514999,0.5768909,0.925499,0.8589993,1.3373985c0.2627926,0.4215012,0.4623928,0.8322029,0.6755924,1.184803 c0.2097988,0.3542976,0.3631001,0.6780968,0.5,0.9432983c0.2744999,0.5304985,0.4518986,0.8364983,0.4518986,0.8364983 s-0.0127983-0.3438988-0.0707989-0.9508972C31.1517754,48.1742668,31.1315746,47.7978668,31.025383,47.3885651z' /> <path d='M40.1113853,34.6179657c-0.1559105-0.5116997-0.2797089-1.0969009-0.5382118-1.6623001 c-0.2342987-0.5778999-0.5057907-1.1822987-0.8663979-1.7663994c-0.3240013-0.6077003-0.7657013-1.1683006-1.2012024-1.7479 c-0.479599-0.5426006-0.9693985-1.0979004-1.5335999-1.5760994c-1.1033974-0.9812012-2.3696976-1.7784004-3.6415901-2.3029003 c-0.6206093-0.2945004-1.2713089-0.4589996-1.8643074-0.644001c-0.6179008-0.1212997-1.1846008-0.2681999-1.7306919-0.2999992 c-0.5392094-0.0529995-1.0316086-0.0778008-1.4811096-0.0522995c-0.4418907,0.0060997-0.8220997,0.0326004-1.1217995,0.0905991 c-0.6077003,0.0979996-0.9589005,0.1886005-0.9589005,0.1886005s0.3216,0.1676998,0.8910999,0.4009991 c0.2923012,0.1033001,0.6153011,0.2872009,0.9847088,0.4435005c0.3674927,0.153101,0.7718925,0.3794003,1.2130013,0.5930996 c0.4457912,0.1956005,0.8934898,0.4905014,1.3815899,0.7296009c0.4644089,0.2992001,0.9720001,0.5569,1.4531002,0.8985004 c0.5002003,0.3064995,0.9750004,0.6788998,1.4745007,1.0249996c0.4658089,0.3927994,0.9726982,0.7444992,1.4141998,1.1763992 c0.4830017,0.384901,0.889801,0.8494015,1.3420982,1.2594013c0.3922005,0.4645996,0.8411026,0.8744984,1.198101,1.341898 c0.3913002,0.4414024,0.7387009,0.8964996,1.0709991,1.3362007c0.3604088,0.4230995,0.6186028,0.8787994,0.9239998,1.2712021 c0.2930031,0.3992996,0.5240021,0.7919998,0.7655029,1.1299973c0.2357979,0.3406029,0.4223976,0.6514015,0.5846977,0.907402 c0.3244019,0.5125999,0.5472107,0.8078995,0.5472107,0.8078995s0.0327911-0.354702,0.0244904-0.9794006 c-0.0087013-0.3110008,0.004509-0.7002983-0.0758018-1.1235008C40.2988739,35.6371651,40.256382,35.1351662,40.1113853,34.6179657z ' /> <path d='M48.7891731,27.1516666c-0.0966988-0.4117012-0.1703987-0.8957005-0.3456993-1.3907013 c-0.1788979-0.4922981-0.3191986-1.0590992-0.6030884-1.5963993c-0.2509117-0.5539989-0.52491-1.1401005-0.9001122-1.6940002 c-0.3358002-0.5789986-0.7628899-1.1266003-1.1954002-1.6838989c-0.4749985-0.5205002-0.9510002-1.0607014-1.5016975-1.5233002 c-1.0699005-0.957901-2.293602-1.7408009-3.5189018-2.2807999c-0.5920982-0.3127003-1.2249985-0.4798012-1.7952995-0.6858997 c-0.592701-0.1500015-1.1422997-0.3138008-1.6715889-0.3723011c-0.5212097-0.0855999-0.9992104-0.1434994-1.4350014-0.1473999 c-0.4298096-0.0208998-0.8005104-0.0296001-1.098999,0.0014c-0.6017113,0.0459003-0.9475098,0.0904999-0.9475098,0.0904999 s0.3268013,0.1217003,0.902401,0.3027c0.293499,0.0764008,0.6261063,0.2252007,1.0074997,0.3544998 c0.3810997,0.1237011,0.7999992,0.3168011,1.2590981,0.4979c0.4626999,0.1690006,0.9274025,0.4469013,1.4406013,0.6574001 c0.4871979,0.2779999,1.0125999,0.5331001,1.5220985,0.8563995c0.5289993,0.2896004,1.0177002,0.6764011,1.5403023,1.022501 c0.4883995,0.3945999,1.0126991,0.7579002,1.4710999,1.2012005c0.4965973,0.4002991,0.9172974,0.8799992,1.3740997,1.3121986 c0.3951988,0.4868011,0.858799,0.9098015,1.2038002,1.405901c0.3768997,0.4715004,0.7217979,0.9449005,1.0373001,1.4083004 c0.3350983,0.4515991,0.5769005,0.9256001,0.8589973,1.3373985c0.2628021,0.4215012,0.4625015,0.832201,0.6757011,1.1848011 c0.2098007,0.3543987,0.363102,0.6781006,0.4999008,0.9433994c0.274498,0.5305004,0.4519005,0.836401,0.4519005,0.836401 s-0.0127029-0.3439007-0.0708008-0.9507999C48.9155731,27.9371662,48.8953819,27.5609665,48.7891731,27.1516666z' /> </g> </g></svg>
        <svg viewBox='0 0 64 64'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <g id='Hot-drink_2_'> <path d='M29.028801,12.8190145c-0.262701,0.4854002-0.0820007,1.0928001,0.4032993,1.3555002 c0.1513996,0.0809994,0.3144989,0.1201,0.4750996,0.1201c0.3555164,0,0.6996994-0.1894999,0.8803997-0.5244007 c1.4805012-2.7363997,1.4580021-5.0937996-0.0228844-7.1386995c-0.9649143-1.6025-0.955616-3.293,0.0287857-5.1669998 c0.2567997-0.4891999,0.0688-1.0936999-0.4204006-1.3506c-0.4883003-0.2529-1.0928001-0.0683-1.3500996,0.4209 c-1.3184013,2.5098-1.3086014,4.9082003,0.0747147,7.1983004C30.1581993,9.2018147,30.1371994,10.7702141,29.028801,12.8190145z' /> <path d='M47.471714,12.8190145c-0.2632141,0.4854002-0.0819969,1.0928001,0.403286,1.3555002 c0.1513977,0.0809994,0.3144989,0.1201,0.4751015,0.1201c0.3554993,0,0.6996994-0.1894999,0.8803978-0.5244007 c1.4804001-2.7363997,1.4580002-5.0937996-0.0229988-7.1396995c-0.9653015-1.6015-0.9560013-3.2920001,0.028801-5.1660004 c0.256897-0.4883,0.0688972-1.0927999-0.4199028-1.3496c-0.4883003-0.2559-1.0942001-0.0693-1.3505974,0.4199 c-1.3188019,2.5098-1.3090858,4.9082003,0.0746994,7.1983004C48.6011009,9.2018147,48.580101,10.7702141,47.471714,12.8190145z' /> <path d='M38.25,12.8190145c-0.2626991,0.4854002-0.0825005,1.0917997,0.4033012,1.3555002 c0.151413,0.0809994,0.3144989,0.1201,0.4750977,0.1201c0.3554993,0,0.6991997-0.1894999,0.8804016-0.5244007 c1.4813995-2.7363997,1.4584999-5.0937996-0.0229988-7.1386995c-0.9648018-1.6025-0.9555016-3.293,0.0289154-5.1669998 c0.2567825-0.4891999,0.0687828-1.0936999-0.420517-1.3506c-0.4877014-0.2529-1.0932007-0.0683-1.3501015,0.4209 c-1.3182983,2.5098-1.3084984,4.9082003,0.0748024,7.1983004C39.3798981,9.2018147,39.3588982,10.7702141,38.25,12.8190145z' /> <path d='M55.8218002,18.9665146H22.0102997c-0.5522995,0-1,0.4472008-1,1v5.1980991 c-7.7116995,0.5181999-13.832099,6.9403019-13.832099,14.7814007c0,7.7860985,6.1415148,14.2552986,13.832099,14.7804985v2.1697006 c0,3.9169006,3.1865005,7.1035004,7.1030006,7.1035004h21.6054993c3.9165001,0,7.1030006-3.1865997,7.1030006-7.1035004V19.9665146 C56.8218002,19.4137154,56.3740005,18.9665146,55.8218002,18.9665146z M20.7866001,52.7204132 c-6.4862995-0.6259995-11.6083994-6.1581993-11.6083994-12.7743988c0-6.7392998,5.2216997-12.2812996,11.832099-12.7929993 v4.9393997c-3.8945847,0.4931984-6.9160995,3.827198-6.9160995,7.8535995c0,3.9501991,2.960001,7.2743988,6.7784004,7.8330002 L20.7866001,52.7204132z M16.0942001,39.9460144c0-2.9202995,2.1294003-5.3474998,4.9160995-5.8249016v11.6476021 C18.2305012,45.2865143,16.0942001,42.8456154,16.0942001,39.9460144z M54.8218002,56.8962135 c0,2.8143997-2.2890854,5.1035004-5.1030006,5.1035004H28.1133003c-2.8140011,0-5.1030006-2.2891006-5.1030006-5.1035004 V20.9665146h31.8115005V56.8962135z' /> </g> </g></svg>
        <svg viewBox='0 0 48 48'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'><path d='M12.597656 4.0644531C10.66763 3.9727769 9.3584389 6.2503883 10.369141 7.8808594L13.859375 13.681641L7.3671875 33.191406 A 1.50015 1.50015 0 0 0 7.3632812 33.205078C5.82015 38.005532 9.4617177 43 14.503906 43L33.496094 43C38.538283 43 42.179854 38.00553 40.636719 33.205078 A 1.50015 1.50015 0 0 0 40.632812 33.191406L34.462891 14.650391 A 1.50015 1.50015 0 0 0 34.560547 14.560547L37.6875 11.433594C38.138623 11.785314 38.707718 12.286991 39.328125 13.0625C40.645287 14.708953 42 17.333333 42 21.5 A 1.50015 1.50015 0 1 0 45 21.5C45 16.666667 43.354713 13.291047 41.671875 11.1875C39.989037 9.083953 38.169922 8.1582031 38.169922 8.1582031 A 1.50015 1.50015 0 0 0 36.439453 8.4394531L34.011719 10.867188L34.011719 9.2695312C34.011719 7.5114839 32.681931 6.0079302 30.939453 5.7949219C21.065914 4.5881894 15.316239 4.1935705 12.597656 4.0644531 z M 13.431641 7.1523438C16.233238 7.2987804 21.292493 7.636844 30.576172 8.7714844C30.829694 8.8024764 31.011719 9.0035787 31.011719 9.2695312L31.011719 12L16.347656 12L13.431641 7.1523438 z M 16.582031 15L31.417969 15L34.412109 24L13.587891 24L16.582031 15 z M 12.589844 27L35.410156 27L37.78125 34.125C38.726516 37.06988 36.58921 40 33.496094 40L14.503906 40C11.41079 40 9.2734836 37.06988 10.21875 34.125C10.21875 34.125 10.21875 34.123047 10.21875 34.123047L12.589844 27 z' /></g></svg>
        <svg viewBox='0 0 50 50'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'><path d='M13.46875 0C8.777344 0 4.9375 3.816406 4.9375 8.5C4.9375 13.183594 8.777344 17 13.46875 17L16 17L16 22L21 22L21 17L32 17L32 41L25.8125 41C26.140625 40.535156 26.464844 39.980469 26.78125 39.3125C27.992188 36.75 29 32.601563 29 26C29 25.449219 28.550781 25 28 25L9 25C8.96875 25 8.9375 25 8.90625 25C8.390625 25.046875 7.996094 25.480469 8 26C8 26.792969 8.003906 27.558594 8.03125 28.28125C7.585938 28.113281 7.078125 28 6.5 28C4.027344 28 2 30.027344 2 32.5C2 34.972656 4.027344 37 6.5 37L9.34375 37C9.617188 37.890625 9.90625 38.648438 10.21875 39.3125C10.535156 39.980469 10.859375 40.535156 11.1875 41L7.5 41C6.132813 41 5 42.132813 5 43.5L5 47.5C5 48.867188 6.132813 50 7.5 50L45.5 50C47.421875 50 49 48.421875 49 46.5L49 42C49.003906 41.949219 49.003906 41.894531 49 41.84375L44.4375 14.5625C46.019531 13.019531 47 10.871094 47 8.5C47 3.816406 43.160156 0 38.46875 0 Z M 13.46875 2L38.46875 2C42.082031 2 45 4.898438 45 8.5C45 12.101563 42.082031 15 38.46875 15L17.1875 15C17.054688 14.972656 16.914063 14.972656 16.78125 15L13.46875 15C9.855469 15 6.9375 12.101563 6.9375 8.5C6.9375 4.898438 9.855469 2 13.46875 2 Z M 42.625 15.90625L47 42.15625L47 46.5C47 47.339844 46.339844 48 45.5 48L7.5 48C7.214844 48 7 47.785156 7 47.5L7 43.5C7 43.214844 7.214844 43 7.5 43L33 43C33.550781 43 34 42.550781 34 42L34 17L38.46875 17C39.976563 17 41.394531 16.597656 42.625 15.90625 Z M 18 17L19 17L19 20L18 20 Z M 10.09375 27L26.90625 27C26.792969 32.6875 25.9375 36.386719 24.96875 38.4375C24.453125 39.53125 23.933594 40.214844 23.53125 40.59375C23.226563 40.878906 22.957031 40.972656 22.9375 41L14.0625 41C14.042969 40.972656 13.773438 40.878906 13.46875 40.59375C13.066406 40.214844 12.546875 39.53125 12.03125 38.4375C11.0625 36.386719 10.207031 32.6875 10.09375 27 Z M 6.5 30C7.308594 30 7.875 30.394531 8.21875 30.71875C8.363281 32.347656 8.574219 33.757813 8.84375 35L6.5 35C5.109375 35 4 33.890625 4 32.5C4 31.109375 5.109375 30 6.5 30 Z M 40 35C38.894531 35 38 35.894531 38 37C38 38.105469 38.894531 39 40 39C41.105469 39 42 38.105469 42 37C42 35.894531 41.105469 35 40 35Z' /></g></svg>
        <svg viewBox='0 0 470 470'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <g> <circle cx='190.864' cy='62.046' r='7.5' /> <path d='m99.366,119.48c-5.194-5.193-12.1-8.054-19.445-8.054s-14.251,2.86-19.445,8.054c-10.723,10.723-10.723,28.17 0,38.893 5.194,5.193 12.1,8.054 19.445,8.054s14.251-2.86 19.445-8.054c10.723-10.723 10.723-28.17 1.42109e-14-38.893zm-10.606,28.286c-2.361,2.361-5.5,3.661-8.839,3.661s-6.478-1.3-8.839-3.661c-4.874-4.874-4.874-12.804 0-17.678 2.361-2.36 5.5-3.661 8.839-3.661s6.478,1.301 8.839,3.661c4.874,4.874 4.874,12.804 0,17.678z' /> <path d='M15,194.432C15,95.493,95.493,15,194.432,15c49.532,0,95.646,19.744,129.848,55.596c2.859,2.998,7.607,3.11,10.604,0.25 c2.997-2.859,3.109-7.606,0.25-10.604c-17.968-18.835-39.121-33.65-62.871-44.036C247.672,5.452,221.486,0,194.432,0 C87.222,0,0,87.222,0,194.432c0,27.054,5.453,53.24,16.206,77.831c10.386,23.75,25.202,44.903,44.037,62.871 c1.452,1.386,3.315,2.073,5.176,2.073c1.979,0,3.954-0.778,5.428-2.323c2.859-2.997,2.747-7.744-0.25-10.604 C34.745,290.078,15,243.964,15,194.432z' /> <circle cx='230.5' cy='203.182' r='7.5' /> <circle cx='292.876' cy='297.5' r='7.5' /> <path d='m357.876,203.182c0-26.191-21.309-47.5-47.5-47.5s-47.5,21.309-47.5,47.5 21.309,47.5 47.5,47.5 47.5-21.309 47.5-47.5zm-47.5,32.5c-17.921,0-32.5-14.579-32.5-32.5s14.579-32.5 32.5-32.5 32.5,14.579 32.5,32.5-14.579,32.5-32.5,32.5z' /> <path d='m220.558,300.453c-26.191,0-47.5,21.309-47.5,47.5s21.309,47.5 47.5,47.5 47.5-21.309 47.5-47.5-21.309-47.5-47.5-47.5zm0,80c-17.92,0-32.5-14.579-32.5-32.5s14.58-32.5 32.5-32.5c17.921,0 32.5,14.579 32.5,32.5s-14.579,32.5-32.5,32.5z' /> <path d='m344.146,329.979c-15.163,0-27.5,12.337-27.5,27.5s12.337,27.5 27.5,27.5 27.5-12.337 27.5-27.5-12.337-27.5-27.5-27.5zm0,40c-6.893,0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5 12.5,5.607 12.5,12.5-5.608,12.5-12.5,12.5z' /> <path d='m390.146,258.67c-15.163,0-27.5,12.337-27.5,27.5s12.337,27.5 27.5,27.5 27.5-12.337 27.5-27.5-12.337-27.5-27.5-27.5zm0,40c-6.893,0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5 12.5,5.607 12.5,12.5-5.608,12.5-12.5,12.5z' /> <path d='m188.49,232.479c0-15.163-12.336-27.5-27.5-27.5s-27.5,12.337-27.5,27.5 12.336,27.5 27.5,27.5 27.5-12.336 27.5-27.5zm-27.5,12.5c-6.893,0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5 12.5,5.607 12.5,12.5-5.608,12.5-12.5,12.5z' /> <path d='M275.567,81.136c-107.21,0-194.432,87.222-194.432,194.432C81.136,382.778,168.357,470,275.567,470 C382.778,470,470,382.778,470,275.567C470,168.357,382.778,81.136,275.567,81.136z M275.567,455 c-98.939,0-179.432-80.493-179.432-179.433c0-98.938,80.493-179.432,179.432-179.432C374.507,96.136,455,176.629,455,275.567 C455,374.507,374.507,455,275.567,455z' /> </g> </g></svg>
        <svg viewBox='0 0 50 50'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'><path d='M15.427734 3C14.062745 3 12.859456 3.9323872 12.521484 5.2558594L12.074219 7L12 7C11.133553 7 10.343298 7.2932543 9.7636719 7.7890625C9.1840453 8.2848707 8.8153921 8.9380401 8.5664062 9.625C8.0684347 10.99892 8 12.57785 8 14 A 1.0001 1.0001 0 0 0 9 15L10.119141 15L13.970703 45.017578 A 1.0001 1.0001 0 0 0 13.974609 45.042969C14.160517 46.237774 15.204427 47 16.367188 47L33.630859 47C34.794193 47 35.83786 46.235688 36.023438 45.042969 A 1.0001 1.0001 0 0 0 36.027344 45.017578L39.880859 15L41 15 A 1.0001 1.0001 0 0 0 42 14C42 12.57785 41.931565 10.99892 41.433594 9.625C41.184608 8.9380401 40.815955 8.2848707 40.236328 7.7890625C39.656702 7.2932543 38.866447 7 38 7L37.90625 7L37.474609 5.2734375 A 1.0001 1.0001 0 0 0 37.474609 5.2714844C37.141393 3.9416023 35.934385 3 34.5625 3L15.427734 3 z M 15.427734 5L34.5625 5C35.026615 5 35.42042 5.3076915 35.533203 5.7578125L35.84375 7L14.138672 7L14.458984 5.7519531C14.573013 5.3054253 14.966724 5 15.427734 5 z M 12.912109 8.9960938 A 1.0001 1.0001 0 0 0 13 9L37 9 A 1.0001 1.0001 0 0 0 37.064453 8.9980469 A 1.0001 1.0001 0 0 0 37.125 9L38 9C38.459053 9 38.706095 9.1106518 38.9375 9.3085938C39.168905 9.5065356 39.385047 9.8386001 39.554688 10.306641C39.802098 10.989256 39.830025 12.022136 39.878906 13L11.166016 13 A 1.0001 1.0001 0 0 0 10.955078 12.986328 A 1.0001 1.0001 0 0 0 10.835938 13L10.121094 13C10.169974 12.022136 10.197905 10.989256 10.445312 10.306641C10.614953 9.8386001 10.831095 9.5065355 11.0625 9.3085938C11.293905 9.1106518 11.540947 9 12 9L12.849609 9 A 1.0001 1.0001 0 0 0 12.912109 8.9960938 z M 12.136719 15L37.863281 15L36.708984 24L31.984375 24C30.659565 21.085293 28.095496 19.012008 24.992188 19.003906C24.945978 19.002306 24.902818 19.004791 24.857422 19.007812C21.786193 19.059813 19.278095 21.123031 17.988281 24L13.291016 24L12.136719 15 z M 24.945312 20.998047C24.966323 20.999147 24.947809 21 24.974609 21C27.392834 21 29.474358 22.682557 30.451172 25.34375 A 1.0001 1.0001 0 0 0 31.388672 26L31.490234 26L36.451172 26L35.810547 31L31.527344 31L31.388672 31 A 1.0001 1.0001 0 0 0 30.447266 31.660156C30.227471 32.270178 29.97672 32.828834 29.671875 33.296875C28.538498 35.034193 26.884731 35.976012 25.087891 35.998047L25.021484 35.998047C23.246013 35.998047 21.592289 35.09639 20.431641 33.398438 A 1.0001 1.0001 0 0 0 20.431641 33.396484C20.091871 32.900328 19.8123 32.306572 19.574219 31.65625 A 1.0001 1.0001 0 0 0 18.634766 31L18.521484 31L14.189453 31L13.548828 26L18.484375 26L18.589844 26 A 1.0001 1.0001 0 0 0 19.529297 25.339844C20.477663 22.708373 22.511851 21.026828 24.917969 21 A 1.0001 1.0001 0 0 0 24.945312 20.998047 z M 24.939453 23C23.705063 23.01347 22.665152 23.777929 22.001953 24.794922C21.338753 25.811913 20.978618 27.119966 20.994141 28.542969C21.009661 29.965972 21.398756 31.267249 22.083984 32.269531C22.769211 33.271814 23.826157 34.013466 25.060547 34C26.294937 33.98654 27.334848 33.22207 27.998047 32.205078C28.661247 31.188086 29.021382 29.880035 29.005859 28.457031C28.990339 27.034028 28.601244 25.732752 27.916016 24.730469C27.230789 23.728186 26.173843 22.986534 24.939453 23 z M 24.960938 25C25.386064 24.9954 25.843602 25.244939 26.263672 25.859375C26.683742 26.473812 26.994273 27.416385 27.005859 28.478516C27.017449 29.540646 26.728831 30.489827 26.322266 31.113281C25.915699 31.736734 25.464189 31.995363 25.039062 32C24.613936 32.0046 24.156399 31.755062 23.736328 31.140625C23.316259 30.526189 23.005727 29.583615 22.994141 28.521484C22.982551 27.459353 23.271169 26.510173 23.677734 25.886719C24.084301 25.263265 24.535811 25.004637 24.960938 25 z M 14.445312 33L18.021484 33C18.24578 33.51991 18.454188 34.047503 18.78125 34.525391C20.264602 36.695438 22.552956 37.998047 25.021484 37.998047L25.091797 37.998047 A 1.0001 1.0001 0 0 0 25.101562 37.998047C27.60154 37.971307 29.89481 36.614655 31.345703 34.390625 A 1.0001 1.0001 0 0 0 31.347656 34.390625C31.635588 33.948746 31.81459 33.471059 32.013672 33L35.554688 33L34.048828 44.736328C34.042405 44.777609 33.827526 45 33.630859 45L16.367188 45C16.173946 45 15.95727 44.775524 15.951172 44.736328L14.445312 33 z' /></g></svg>
        <svg viewBox='-0.79 0 110 110'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <path id='_0203-coffee-love' data-name='0203-coffee-love' d='M548.037,407.519c-1.642-.845-3.67-1.3-5.053-2.408-1.915-.572-3.227-1.749-4.813-2.647a32.5,32.5,0,0,1-7.461-7.22c-4.258-5.609-6.806-12.928-7.942-21.659a73.105,73.105,0,0,1,.241-14.2c.27-2.216.533-4.44.962-6.5.631-1.776.927-3.886,2.166-5.054,4.907-1.508,10.936-1.9,17.086-2.165,4.315-.278,8.928-.26,13.54-.243,1.83.007,3.66.013,5.473,0,.389.068.415-.226.722-.24,8.86.123,17.623.346,26.23.722,8.214.69,17.005.8,24.307,2.407,1.176,2.192,1.544,5.194,1.684,8.423.247.212.761.13,1.321.049a2.274,2.274,0,0,1,1.807.192,22.543,22.543,0,0,1,3.61.24c.547.5,1.594.491,2.166.962.748.215,1.121.806,1.925.963.813,1.032,1.8,1.889,2.647,2.888a24.515,24.515,0,0,1,1.925,14.44c-1.307,2.543-2.543,5.157-4.572,6.979-1.584,2.265-4.062,3.639-6.5,5.053-1.38.227-2.5.706-3.85.962a16.27,16.27,0,0,1-6.258-.723,6.521,6.521,0,0,0-1.445,2.409c-.7.5-.954,1.451-1.444,2.165-2.319,2.253-4.3,4.846-6.737,6.979-2.4,2.177-5.019,4.125-7.461,6.257-2.388,1.1-4.627,2.591-7.22,3.37-.246.072-.455-.039-.482.239-3.714.456-7.331,1.01-11.069,1.445q-.9.022-1.772.021A72.012,72.012,0,0,1,548.037,407.519Zm-16.6-55.831c-1.5,4.2-1.467,9.923-1.444,15.641a51.016,51.016,0,0,0,2.4,14.68c.188.054.281.2.242.482,1.006,2.042,2.448,3.648,3.369,5.775.614.91,1.113,1.936,1.684,2.889a15.9,15.9,0,0,1,1.925,2.885c1.6,1.368,3,2.939,4.573,4.333,1.042.162,1.293,1.113,2.407,1.2.3.9,1.789.617,2.165,1.444,2.627.664,4.794,1.785,7.7,2.165a3.257,3.257,0,0,0,1.925.482,4.777,4.777,0,0,0,2.165.481c1.331.354,2.916.454,4.333.723h8.9a12.293,12.293,0,0,1,3.794-.377,14.676,14.676,0,0,0,3.909-.346c2.7-.831,4.777-2.28,7.7-2.886,1.452-1.355,3.384-2.231,4.813-3.609a27.417,27.417,0,0,0,4.333-4.092,38.141,38.141,0,0,0,6.738-10.107c3.883-7.348,4.989-17.472,4.572-29.12a116.14,116.14,0,0,0-18.29-1.924c-3.079-.292-6.3-.44-9.625-.482-2.85-.358-7.339-.093-9.386-.481-13.677.04-27.265-.011-40.43-.482A.657.657,0,0,0,531.433,351.688Zm80.618,31.044a6.227,6.227,0,0,0,4.332-.24c1.424-.262,2.1-1.272,3.37-1.686,1.865-1.985,3.8-3.9,4.332-7.219a6.481,6.481,0,0,0-.723-4.09c-1.343-1.247-3.955-1.228-6.566-1.207-.542,0-1.085.008-1.616,0C614.757,373.726,613.27,378.093,612.051,382.731Zm-43.8,7.7c-.1-.072-.149-.431-.242-.481a4.286,4.286,0,0,1-1.684-1.205,11.6,11.6,0,0,1-3.128-2.4,63.437,63.437,0,0,1-6.258-5.053c-1.112-1.616-2.144-3.313-3.128-5.054a21.23,21.23,0,0,1-.721-6.256c.379-.423.32-1.283.481-1.926a15.5,15.5,0,0,1,2.406-2.646,5.254,5.254,0,0,0,1.925-.724c3.284-.316,5.382.554,7.7,1.2,1.422.742,2.2,2.134,3.85,2.647,2.87-1.3,5.215-3.127,8.662-3.85.39.068.414-.228.723-.239a17.469,17.469,0,0,1,5.536.48,10.1,10.1,0,0,1,3.85,4.332c.32,2.887-.66,4.477-1.2,6.5-2.129,3.165-5.624,4.964-7.942,7.943-1.041.321-1.509,1.218-2.407,1.684-.365.917-1.486,1.081-1.925,1.925-1.954.693-2.246,3.048-4.573,3.369a4.332,4.332,0,0,0-.76-.009c-.12.007-.235.013-.347.013A1.259,1.259,0,0,1,568.253,390.432Zm2.165-48.612a.942.942,0,0,0-.722-.24c-2.076-2.279.6-4.828.961-7.46a9.267,9.267,0,0,0-.481-3.612c-.534-.828-.662-2.064-1.444-2.646a28.461,28.461,0,0,0-1.2-2.888c-.573-.791-.616-2.111-1.2-2.888-.148-1.536-.292-3.075-.482-4.572.3-1.948.138-4.355.722-6.016.305-1.943,1.205-3.289,1.686-5.054.823-.618,1.035-1.854,1.924-2.406.517-.928,1.5-1.39,2.167-2.167.5.1.637-.166.962-.239h2.165a10.011,10.011,0,0,1-1.685,3.61c-.327,2.88-1.494,4.922-1.925,7.7V319.2c.877,4.5,3.47,7.277,4.572,11.55a33.3,33.3,0,0,1-.239,5.537,7.576,7.576,0,0,0-.962,2.406c-1.241,1.246-1.789,3.183-4.092,3.37q-.051,0-.1,0A.963.963,0,0,1,570.418,341.82Zm-10.828-4.814c-1.45-2.562-3.758-4.263-5.777-6.257a5.142,5.142,0,0,0-1.2-1.924c.021-.341.04-.682-.241-.722a13.36,13.36,0,0,1,4.813-11.792c.5.1.638-.167.963-.24.342-.022.682-.041.722.24.845-.212.25.623,0,.722-.126.355-.355.606-.482.962-.391.572-.541,1.384-.962,1.925a26.334,26.334,0,0,0,0,6.5c1.646,2.847,4.671,4.314,5.294,8.183a13.3,13.3,0,0,1-.481,4.572,4.165,4.165,0,0,1-2.646,1.2Zm27.914,2.649c-.482-.511.341-1.074.482-1.686a13.982,13.982,0,0,0,.722-1.683,22.845,22.845,0,0,0-.481-5.295c-.875-2.015-2.148-3.629-2.888-5.776-.193-2.679.5-4.472,2.407-5.054h.482a9.075,9.075,0,0,0,.961,2.648,57.277,57.277,0,0,1,3.851,5.774,2.161,2.161,0,0,0,.482,1.687,9.132,9.132,0,0,0,.241,2.646,5.822,5.822,0,0,1-5.313,6.97A2.032,2.032,0,0,1,587.5,339.655Z' transform='translate(-522.528 -301.631)' /> </g></svg>
        <svg viewBox='0 0 512 512'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <g> <g> <g> <path d='M373.182,219.966h-4.119v-60.832H139.924v15.208h213.931v45.625h-25.661v15.208h44.987 c34.368,0,62.329,27.96,62.329,62.328v37.582c0,10.74-2.73,20.854-7.534,29.685c-10.568,19.428-31.167,32.643-54.795,32.643 h-19.327h-25.661v15.208h25.661v28.627c0,30.627-24.916,55.542-55.541,55.542h-166.28c-30.626,0-55.541-24.916-55.541-55.542 V174.343h43.156v-15.208H61.282V441.25c0,39.012,31.738,70.75,70.749,70.75h166.281c39.011,0,70.749-31.739,70.749-70.75v-28.628 h4.119h0.001c42.754,0,77.536-34.784,77.536-77.537v-37.582C450.718,254.75,415.936,219.966,373.182,219.966z' /> <path d='M328.194,364.149L328.194,364.149v15.208h25.661h19.327h0.001c18.308,0,34.057-11.172,40.787-27.056 c2.244-5.294,3.485-11.113,3.485-17.215v-37.582c0-6.102-1.241-11.921-3.485-17.215c-6.73-15.884-22.478-27.056-40.787-27.056 h-0.001h-19.327h-25.661v15.208h25.661v95.708H328.194z M369.063,268.44h4.119c15.525,0,28.246,12.235,29.027,27.57 c0.025,0.495,0.037,0.993,0.037,1.493v37.582c0,0.501-0.012,0.999-0.037,1.493c-0.78,15.335-13.502,27.57-29.027,27.57h-4.119 V268.44z' /> <path d='M132.031,481.584h38.308v-15.208h-38.308c-13.854,0-25.126-11.271-25.126-25.126v-74.744H91.698v74.744 C91.698,463.491,109.792,481.584,132.031,481.584z' /> <rect x='91.694' y='294.405' width='15.208' height='51.829' /> <path d='M140.763,99.67h148.82c7.451,0,13.512,6.062,13.512,13.511c0,7.451-6.062,13.512-13.512,13.512h-74.41V141.9h74.41 c15.836,0,28.72-12.883,28.72-28.72c0-15.835-12.883-28.719-28.72-28.719h-148.82c-7.451,0-13.512-6.062-13.512-13.512 s6.062-13.511,13.512-13.511h98.127c15.836,0,28.72-12.883,28.72-28.72c0-15.837-12.883-28.72-28.72-28.72h-74.41v15.208h74.41 c7.451,0,13.512,6.062,13.512,13.511c0,7.451-6.062,13.512-13.512,13.512h-98.127c-15.836,0-28.72,12.883-28.72,28.719 C112.043,86.787,124.926,99.67,140.763,99.67z' /> </g> </g> </g> </g></svg>
        <svg viewBox='0 0 64 64'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <title /> <g data-name='Layer 4' id='Layer_4'> <path d='M64,.987a1,1,0,0,0-.047-.28.862.862,0,0,0-.039-.095A.9.9,0,0,0,63.866.5c-.013-.023-.032-.04-.046-.061s-.042-.058-.066-.086a.914.914,0,0,0-.147-.138C63.582.2,63.56.176,63.533.159a.984.984,0,0,0-.272-.124h-.009A1.013,1.013,0,0,0,63,0H37a1,1,0,0,0-.865.5l-36,62A1,1,0,0,0,1,64H63a1,1,0,0,0,1-1V1ZM37.576,2h5.56L8.3,62H2.737Zm8,0h7.56L18.3,62h-7.56Zm10,0h5.56L26.3,62h-5.56ZM28.737,62,62,4.714V62Z' /> <path d='M21,54V51a1,1,0,0,1,1-1,3,3,0,0,0,3-3V44a1,1,0,0,1,1-1,3,3,0,0,0,3-3V37a1,1,0,0,1,1-1,3,3,0,0,0,3-3V30a1,1,0,0,1,1-1,3,3,0,0,0,3-3V23a1,1,0,0,1,1-1,3,3,0,0,0,3-3V16a1,1,0,0,1,1-1,3,3,0,0,0,3-3V9a1,1,0,0,1,1-1,3,3,0,0,0,3-3,1,1,0,0,0-2,0,1,1,0,0,1-1,1,3,3,0,0,0-3,3v3a1,1,0,0,1-1,1,3,3,0,0,0-3,3v3a1,1,0,0,1-1,1,3,3,0,0,0-3,3v3a1,1,0,0,1-1,1,3,3,0,0,0-3,3v3a1,1,0,0,1-1,1,3,3,0,0,0-3,3v3a1,1,0,0,1-1,1,3,3,0,0,0-3,3v3a1,1,0,0,1-1,1,3,3,0,0,0-3,3v3a1,1,0,0,1-1,1,3,3,0,0,0-3,3v1a1,1,0,0,0,2,0V58a1,1,0,0,1,1-1A3,3,0,0,0,21,54Z' /> </g> </g></svg>
      </div>
    </div>
  )
}

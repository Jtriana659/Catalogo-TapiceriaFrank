// src/components/Gallery.jsx
import React, { useState, useEffect } from "react";
const Gallery = ({ category }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const images = {
    Navidad: [
      "https://i.ibb.co/Pv0kbdTs/Whats-App-Image-2025-12-04-at-12-06-12-PM.jpg",
      "https://i.ibb.co/zTtYJ298/Whats-App-Image-2025-12-04-at-12-06-11-PM-1.jpg",
      "https://i.ibb.co/hxrdMJVW/Whats-App-Image-2025-12-04-at-12-06-11-PM-2.jpg",
      "https://i.ibb.co/S7Xw138J/Whats-App-Image-2025-12-04-at-12-06-11-PM-3.jpg",
      "https://i.ibb.co/YFFqQTcz/Whats-App-Image-2025-12-04-at-12-06-11-PM-4.jpg",
      "https://i.ibb.co/3yFM3grF/Whats-App-Image-2025-12-04-at-12-06-11-PM-5.jpg",
      "https://i.ibb.co/ZR7Wf7ZC/Whats-App-Image-2025-12-04-at-12-06-11-PM.jpg",
      "https://i.ibb.co/Q7PGCj2g/Whats-App-Image-2025-12-04-at-12-06-12-PM-1.jpg",
      "https://i.ibb.co/r2j1TZft/Whats-App-Image-2025-12-04-at-12-04-45-PM-1.jpg",
      "https://i.ibb.co/9HQHMsQV/Whats-App-Image-2025-12-04-at-12-04-45-PM.jpg",
      "https://i.ibb.co/SDwSHxtF/Whats-App-Image-2025-12-04-at-12-04-45-PM-2.jpg",
      "https://i.ibb.co/tTgvqFMN/Whats-App-Image-2025-12-04-at-12-04-46-PM-1.jpg",
      "https://i.ibb.co/1YLj4Bv2/Whats-App-Image-2025-12-04-at-12-04-46-PM-2.jpg",
      "https://i.ibb.co/r2MdgpsV/Whats-App-Image-2025-12-04-at-12-04-46-PM-3.jpg",
      "https://i.ibb.co/Jwjnq3QF/Whats-App-Image-2025-12-04-at-12-04-46-PM.jpg",
      "https://i.ibb.co/PGMKX5Hz/Whats-App-Image-2025-12-04-at-12-04-47-PM.jpg",
      "https://i.ibb.co/4Rr59htD/Whats-App-Image-2025-12-04-at-12-04-48-PM-1.jpg",
      "https://i.ibb.co/BKVfKFV5/Whats-App-Image-2025-12-04-at-12-04-48-PM.jpg",
      "https://i.ibb.co/Cp8WPtFW/Whats-App-Image-2025-12-04-at-12-04-49-PM-1.jpg",
      "https://i.ibb.co/3YyQZMJc/Whats-App-Image-2025-12-04-at-12-04-49-PM-2.jpg",
      "https://i.ibb.co/Z6pTMh15/Whats-App-Image-2025-12-04-at-12-04-49-PM.jpg",
      "https://i.ibb.co/7NppFgvK/Whats-App-Image-2025-12-04-at-12-04-50-PM-1.jpg",
      "https://i.ibb.co/YTDgBNhR/Whats-App-Image-2025-12-04-at-12-04-50-PM-2.jpg",
      "https://i.ibb.co/Wv7w1vbM/Whats-App-Image-2025-12-04-at-12-04-50-PM-3.jpg",
      "https://i.ibb.co/7NRVKTzq/Whats-App-Image-2025-12-04-at-12-04-50-PM.jpg",
      "https://i.ibb.co/TDKtSNry/Whats-App-Image-2025-12-04-at-12-04-51-PM-1.jpg",
      "https://i.ibb.co/x8gn2TcZ/Whats-App-Image-2025-12-04-at-12-04-51-PM-2.jpg",
      "https://i.ibb.co/SXD7CJ1B/Whats-App-Image-2025-12-04-at-12-04-51-PM-3.jpg",
      "https://i.ibb.co/20QxvWGn/Whats-App-Image-2025-12-04-at-12-04-51-PM.jpg",
      "https://i.ibb.co/rfdtshrF/1.png",
      "https://i.ibb.co/LzhnY8FN/2.png",
      "https://i.ibb.co/zhSHy9rj/3.png",
      "https://i.ibb.co/v4FJF703/4.png",
      "https://i.ibb.co/4RR32c0H/5.png",
      "https://i.ibb.co/9HhLjf4h/6.png",
      "https://i.ibb.co/1ftJSWGv/7.png",
      "https://i.ibb.co/pjPqnk2C/8.png",
      "https://i.ibb.co/4ZNczQ1g/9.png",
      "https://i.ibb.co/wN3XyvtG/10.png",
      "https://i.ibb.co/93kVK6hX/11.png",
      "https://i.ibb.co/B58W75Vp/12.png",
      "https://i.ibb.co/Pv8T8Kdk/13.png",
      "https://i.ibb.co/spSTxFvS/14.png",
      "https://i.ibb.co/WvT9Fmk8/15.png",
      "https://i.ibb.co/ZrFfDPB/16.png",
      "https://i.ibb.co/0jGNPnpz/17.png",
      "https://i.ibb.co/chScChW7/18.png",
      "https://i.ibb.co/QWsXL3f/19.png",
      "https://i.ibb.co/LzFv274j/20.png",
      "https://i.ibb.co/zVvJSyDT/21.png",
      "https://i.ibb.co/Q721k1s9/22.png",
      "https://i.ibb.co/BD5m3b4/23.png",
      "https://i.ibb.co/8gn1tQMw/24.png",
    ],
    Halloween: [
      "https://i.ibb.co/4gdRsLCQ/17.jpg",
      "https://i.ibb.co/dSLDQ16/18.jpg",
      "https://i.ibb.co/23VV6nwd/19.jpg",
      "https://i.ibb.co/4RSF4cvt/20.jpg",
      "https://i.ibb.co/VcTy06JD/21.jpg",
      "https://i.ibb.co/0j6R43hJ/22.jpg",
      "https://i.ibb.co/fYpxpsh2/23.jpg",
      "https://i.ibb.co/spT6cdPn/24.jpg",
      "https://i.ibb.co/8tfGkNv/25.jpg",
      "https://i.ibb.co/9HsfmVSW/26.jpg",
      "https://i.ibb.co/s9kStsfY/1.jpg",
      "https://i.ibb.co/SXXFB59D/2.jpg",
      "https://i.ibb.co/zVCF3Z96/3.jpg",
      "https://i.ibb.co/Q722Phkm/4.jpg",
      "https://i.ibb.co/XZJv3Gy9/5.jpg",
      "https://i.ibb.co/fGLgbCTf/6.jpg",
      "https://i.ibb.co/rR3B1Hs1/7.jpg",
      "https://i.ibb.co/cXTrGGHn/8.jpg",
      "https://i.ibb.co/ksM1FVMP/9.jpg",
      "https://i.ibb.co/DDhypf9q/10.jpg",
      "https://i.ibb.co/9mLBXhp9/11.jpg",
      "https://i.ibb.co/Dgbr3h3g/12.jpg",
      "https://i.ibb.co/whWkHmyT/13.jpg",
      "https://i.ibb.co/XrGYc495/14.jpg",
      "https://i.ibb.co/B5fKbmN8/15.jpg",
      "https://i.ibb.co/s9dRXwZr/16.jpg",
    ],
    Anime: [
      "https://i.ibb.co/GQxvkqm0/4.jpg",
      "https://i.ibb.co/fgJq110/5.jpg",
      "https://i.ibb.co/qYRHP6zg/6.jpg",
      "https://i.ibb.co/NgQsFyxt/8.jpg",
      "https://i.ibb.co/sp3SFNLV/7.jpg",
      "https://i.ibb.co/CK9k001g/9.jpg",
      "https://i.ibb.co/7x2cCsZB/10.jpg",
      "https://i.ibb.co/DFK3QLC/12.jpg",
      "https://i.ibb.co/ZpMdxLVv/11.jpg",
      "https://i.ibb.co/RknK2hZD/13.jpg",
      "https://i.ibb.co/G37bKLbs/15.jpg",
      "https://i.ibb.co/9md9LVms/16.jpg",
      "https://i.ibb.co/Kxtg5FcY/14.jpg",
      "https://i.ibb.co/Tq0ZRGm0/17.jpg",
      "https://i.ibb.co/QF2TSB3S/18.jpg",
      "https://i.ibb.co/d0c3hrNq/19.jpg",
      "https://i.ibb.co/Zpv9WFx6/21.jpg",
      "https://i.ibb.co/JwyWbDmG/22.jpg",
      "https://i.ibb.co/QvgGXL7Q/20.jpg",
      "https://i.ibb.co/jkB42q6g/23.jpg",
      "https://i.ibb.co/8HJv2h2/25.jpg",
      "https://i.ibb.co/TxZtt1YW/24.jpg",
      "https://i.ibb.co/rG78yQ1g/26.jpg",
      "https://i.ibb.co/YFsyGP4x/28.jpg",
      "https://i.ibb.co/RpfCMZj9/29.jpg",
      "https://i.ibb.co/zhqFnkX1/27.jpg",
      "https://i.ibb.co/5WmV86Q7/30.jpg",
      "https://i.ibb.co/V4VQmYx/32.jpg",
      "https://i.ibb.co/ZRtScB5q/31.jpg",
      "https://i.ibb.co/ZpCH2qSQ/33.jpg",
      "https://i.ibb.co/RG9zVjrG/35.jpg",
      "https://i.ibb.co/7J7cf3w8/36.jpg",
      "https://i.ibb.co/67207kXW/34.jpg",
      "https://i.ibb.co/LdPtptMs/37.jpg",
      "https://i.ibb.co/F1TCpXC/39.jpg",
      "https://i.ibb.co/zHhPH6C0/38.jpg",
      "https://i.ibb.co/nskbvC5P/40.jpg",
      "https://i.ibb.co/TBFjHSzp/42.jpg",
      "https://i.ibb.co/0RZ9qpMT/41.jpg",
      "https://i.ibb.co/9HqGK2Y6/43.jpg",
      "https://i.ibb.co/xSyw9zJs/44.jpg",
      "https://i.ibb.co/CKZ3LHSw/45.jpg",
      "https://i.ibb.co/Y54mkXH/46.jpg",
      "https://i.ibb.co/HDBXyvf0/2.jpg",
      "https://i.ibb.co/gbNtwbHN/3.jpg",
      "https://i.ibb.co/tTjHt1Xm/1.jpg",
      "https://i.ibb.co/fzpLJBrG/59.jpg",
      "https://i.ibb.co/Xfx5TvdT/58.jpg",
      "https://i.ibb.co/ccz1mFwr/61.jpg",
      "https://i.ibb.co/BJ2nw6t/60.jpg",
      "https://i.ibb.co/G48Lz5JX/62.jpg",
      "https://i.ibb.co/TMhSrDGF/64.jpg",
      "https://i.ibb.co/HTnsznv3/65.jpg",
      "https://i.ibb.co/n8YjVx4K/63.jpg",
      "https://i.ibb.co/ks1VVHQG/66.jpg",
      "https://i.ibb.co/DDJkFccQ/2.jpg",
      "https://i.ibb.co/DgwCtPHm/3.jpg",
      "https://i.ibb.co/0pBnsYnT/1.jpg",
      "https://i.ibb.co/kNs91FR/4.jpg",
      "https://i.ibb.co/NgDRnjmb/6.jpg",
      "https://i.ibb.co/gZP4JXwf/5.jpg",
      "https://i.ibb.co/Kz2jySV0/7.jpg",
      "https://i.ibb.co/vCjz7F4m/9.jpg",
      "https://i.ibb.co/Vp0rZnn2/8.jpg",
      "https://i.ibb.co/psTXmJW/10.jpg",
      "https://i.ibb.co/XPsd00g/12.jpg",
      "https://i.ibb.co/cXbcTWn2/13.jpg",
      "https://i.ibb.co/Z1bS67s7/11.jpg",
      "https://i.ibb.co/jvWf92F4/14.jpg",
      "https://i.ibb.co/GQFCT9Fr/16.jpg",
      "https://i.ibb.co/mC0qSQk7/15.jpg",
      "https://i.ibb.co/kgC0726v/17.jpg",
      "https://i.ibb.co/G4Ryqjk4/19.jpg",
      "https://i.ibb.co/qLYq0B6B/20.jpg",
      "https://i.ibb.co/8Lv5PgBX/18.jpg",
      "https://i.ibb.co/S4YYskNV/21.jpg",
      "https://i.ibb.co/8nrgF5Xj/23.jpg",
      "https://i.ibb.co/657BXfX/22.jpg",
      "https://i.ibb.co/Vk95Gqj/24.jpg",
      "https://i.ibb.co/SXv1k5f0/26.jpg",
      "https://i.ibb.co/j9MCWGmh/25.jpg",
      "https://i.ibb.co/zVZrGnsz/27.jpg",
      "https://i.ibb.co/x8gnRL8d/28.jpg",
      "https://i.ibb.co/sdZkN4zm/30.jpg",
      "https://i.ibb.co/cSjBjPrt/29.jpg",
      "https://i.ibb.co/HpCWgD3S/31.jpg",
      "https://i.ibb.co/6JG7nYNC/33.jpg",
      "https://i.ibb.co/67TVNwCK/34.jpg",
      "https://i.ibb.co/p6YzQ61d/32.jpg",
      "https://i.ibb.co/qFd8gFkF/35.jpg",
      "https://i.ibb.co/nsYdHJYW/37.jpg",
      "https://i.ibb.co/xqnCMGHz/36.jpg",
      "https://i.ibb.co/1t1m3dcc/38.jpg",
      "https://i.ibb.co/kgfhF9h3/40.jpg",
      "https://i.ibb.co/kVB3ZyTm/41.jpg",
      "https://i.ibb.co/G3t8PDfH/39.jpg",
      "https://i.ibb.co/QvN9zMt7/42.jpg",
      "https://i.ibb.co/JWnrDWh4/44.jpg",
      "https://i.ibb.co/kWBW5Rq/43.jpg",
      "https://i.ibb.co/z0k5GPz/46.jpg",
      "https://i.ibb.co/KYJ3MYh/47.jpg",
      "https://i.ibb.co/qF4kQSp0/45.jpg",
      "https://i.ibb.co/nx2P3Np/48.jpg",
      "https://i.ibb.co/27B3PK9W/50.jpg",
      "https://i.ibb.co/8nZCS4Tk/49.jpg",
      "https://i.ibb.co/bj3pWVjS/51.jpg",
      "https://i.ibb.co/DDXz3d52/53.jpg",
      "https://i.ibb.co/whz81sSV/52.jpg",
      "https://i.ibb.co/1YkdDSqP/54.jpg",
      "https://i.ibb.co/pvJrRJfJ/56.jpg",
      "https://i.ibb.co/q3n1SMYJ/57.jpg",
      "https://i.ibb.co/TBZYr0Fy/55.jpg",
      "https://i.ibb.co/YB0SqYMM/14.jpg",
      "https://i.ibb.co/RTN5Bv0s/1.jpg",
      "https://i.ibb.co/Jjv3dtSx/2.jpg",
      "https://i.ibb.co/RpHfSy3L/4.jpg",
      "https://i.ibb.co/tT0ccqrv/3.jpg",
      "https://i.ibb.co/v6rDg8ts/5.jpg",
      "https://i.ibb.co/0RgKjkvk/7.jpg",
      "https://i.ibb.co/ymTcZXLr/6.jpg",
      "https://i.ibb.co/cd5YBHL/8.jpg",
      "https://i.ibb.co/C5twgv2F/10.jpg",
      "https://i.ibb.co/mrVVjTWm/11.jpg",
      "https://i.ibb.co/WhCtKss/9.jpg",
      "https://i.ibb.co/yF8GTy9K/12.jpg",
      "https://i.ibb.co/FQX5W18/13.jpg",
      "https://i.ibb.co/mCVnRhry/5.jpg",
      "https://i.ibb.co/cKVdP4Ww/6.jpg",
      "https://i.ibb.co/LXD36z4W/7.jpg",
      "https://i.ibb.co/W4js7gkP/8.jpg",
      "https://i.ibb.co/kVpst5nG/9.jpg",
      "https://i.ibb.co/Y7x3R8gB/10.jpg",
      "https://i.ibb.co/kshLWbbp/12.jpg",
      "https://i.ibb.co/d0QXvhcY/11.jpg",
      "https://i.ibb.co/xKw8DWFZ/13.jpg",
      "https://i.ibb.co/N61Cn7V0/15.jpg",
      "https://i.ibb.co/RkBXMT2s/14.jpg",
      "https://i.ibb.co/Df2nQbbb/16.jpg",
      "https://i.ibb.co/9M4VSbM/1.jpg",
      "https://i.ibb.co/6JTj5PgQ/2.jpg",
      "https://i.ibb.co/SXW0Sm9T/17.jpg",
      "https://i.ibb.co/mCNB8LGW/3.jpg",
      "https://i.ibb.co/jPTmdyXk/4.jpg",
    ],
    Casuales: [
      "https://i.ibb.co/yr2RYdk/cat.jpg",
      "https://i.ibb.co/0PSBNxc/crosty.jpg",
      "https://i.ibb.co/nMfxSLVq/dog.jpg",
      "https://i.ibb.co/qLVsNMhy/dog2.jpg",
      "https://i.ibb.co/C3m31XS7/donald.jpg",
      "https://i.ibb.co/BVPGr5ST/Donde.jpg",
      "https://i.ibb.co/pjvspV0p/face.jpg",
      "https://i.ibb.co/PvZP4vG1/goku.jpg",
      "https://i.ibb.co/8DN9Mc16/heaters.jpg",
      "https://i.ibb.co/5htYsYyV/just.jpg",
      "https://i.ibb.co/PzFWc9M0/leon.jpg",
      "https://i.ibb.co/Kjn4VzVL/mario.jpg",
      "https://i.ibb.co/4nR1PhcJ/merch.jpg",
      "https://i.ibb.co/whMHnnJm/mortal.jpg",
      "https://i.ibb.co/VcNxsmfM/one.jpg",
      "https://i.ibb.co/Y4xzbSVS/oso.jpg",
      "https://i.ibb.co/TM7rzZGb/oso2.jpg",
      "https://i.ibb.co/RT7mgbyR/oso3.jpg",
      "https://i.ibb.co/fzmxBB8F/oso4.jpg",
      "https://i.ibb.co/60Q3mDZR/oso5.jpg",
      "https://i.ibb.co/pjMpRxR6/pinky.jpg",
      "https://i.ibb.co/wm4j8SR/pitufos.jpg",
      "https://i.ibb.co/KpfLZ4fx/rosa.jpg",
      "https://i.ibb.co/bjbD9wmQ/rosa2.jpg",
      "https://i.ibb.co/BH0gxVq9/screm.jpg",
      "https://i.ibb.co/HpYs0wVw/tanjiro.jpg",
      "https://i.ibb.co/35577yB3/tanjiro2.jpg",
      "https://i.ibb.co/CKjTx2p1/taz.jpg",
      "https://i.ibb.co/YCTG0kr/tom.jpg",
      "https://i.ibb.co/LDxM8RQK/vegueta.jpg",
      "https://i.ibb.co/ZR7hNyp1/zapatos.jpg",
      "https://i.ibb.co/84D3nmt6/ara-a.jpg",
      "https://i.ibb.co/fRPM2nL/bar.jpg",
      "https://i.ibb.co/SX1fnSpf/booz.jpg",
      "https://i.ibb.co/tM0WHXVT/bozz.jpg",
      "https://i.ibb.co/xt1QnLZQ/broklyn.jpg",
      "https://i.ibb.co/TxSvQXsg/bozz.jpg",
      "https://i.ibb.co/FkDSX8dS/cobrekai.jpg",
      "https://i.ibb.co/Z18LGnMW/crosty.jpg",
      "https://i.ibb.co/WpnWBvDV/dat.jpg",
      "https://i.ibb.co/RkHQ4MwP/death.jpg",
      "https://i.ibb.co/9jwyvqx/goku.jpg",
      "https://i.ibb.co/20ThGZr4/heaters.jpg",
      "https://i.ibb.co/xqnnRSJf/jiraya.jpg",
      "https://i.ibb.co/nNBh0wtW/Kiss.jpg",
      "https://i.ibb.co/yFLSwJ18/leed.jpg",
      "https://i.ibb.co/n8MqYsGY/mario.jpg",
      "https://i.ibb.co/hjpK1vC/merch.jpg",
      "https://i.ibb.co/Xxz8wMrw/naruto.jpg",
      "https://i.ibb.co/Wvw4HB3v/nirvana.jpg",
      "https://i.ibb.co/zhJK9Ymd/onepuch.jpg",
      "https://i.ibb.co/Kcx56ZfB/Oso.jpg",
      "https://i.ibb.co/jZzXs6Lq/oso2.jpg",
      "https://i.ibb.co/4nx4Q8d4/oso3.jpg",
      "https://i.ibb.co/N2PBQgGd/oso4.jpg",
      "https://i.ibb.co/GQJ3QYX3/oso5.jpg",
      "https://i.ibb.co/BVpy0C2R/oso6.jpg",
      "https://i.ibb.co/4R8XvZTx/pallazo.jpg",
      "https://i.ibb.co/4RwDnsD9/panda.jpg",
      "https://i.ibb.co/q3QmLJk5/pantera.jpg",
      "https://i.ibb.co/nqdqDwL1/pinky.jpg",
      "https://i.ibb.co/svhw0yBb/raiden.jpg",
      "https://i.ibb.co/S88jPd9/steach.jpg",
      "https://i.ibb.co/My3n9rpx/taz.jpg",
      "https://i.ibb.co/LdjbhwrJ/tupac.jpg",
      "https://i.ibb.co/F4Nk4XKj/acdc.jpg",
      "https://i.ibb.co/VW9CDDz3/angel.jpg",
      "https://i.ibb.co/HLd3mxbs/bart.jpg",
      "https://i.ibb.co/5xz5swX0/5.jpg",
      "https://i.ibb.co/Q7ydmDWD/6.jpg",
      "https://i.ibb.co/9m5xv5dT/7.jpg",
      "https://i.ibb.co/pCs6vW3/8.jpg",
      "https://i.ibb.co/WvVJhWsw/9.jpg",
      "https://i.ibb.co/n8cTqPGS/10.jpg",
      "https://i.ibb.co/0R0KykF4/11.jpg",
      "https://i.ibb.co/xtH3QG4M/12.jpg",
      "https://i.ibb.co/TMVRCXYV/13.jpg",
      "https://i.ibb.co/qYvR29vf/14.jpg",
      "https://i.ibb.co/1JmZ2RND/15.jpg",
      "https://i.ibb.co/b5fjbQ6P/16.jpg",
      "https://i.ibb.co/LXhFwRL7/17.jpg",
      "https://i.ibb.co/hJq4HmTp/18.jpg",
      "https://i.ibb.co/gZLJyC79/19.jpg",
      "https://i.ibb.co/0R5NkL7v/20.jpg",
      "https://i.ibb.co/dwfrS8KW/anime.jpg",
      "https://i.ibb.co/Fqws8KV6/pajaro.jpg",
      "https://i.ibb.co/HD737kP2/poison.jpg",
      "https://i.ibb.co/fVqSZbnT/tigre.jpg",
      "https://i.ibb.co/zh2SN1Nn/1.jpg",
      "https://i.ibb.co/yBfRLtHF/2.jpg",
      "https://i.ibb.co/bgdSHsbQ/3.jpg",
      "https://i.ibb.co/CpS9BLYK/4.jpg",

      "https://i.ibb.co/j9ZZGbpr/5-Obtenido-de-N-madas-para-los-miembros-de-nuestra-membres-a-premium.png",
      "https://i.ibb.co/8Lq64PT4/6-Obtenido-de-N-madas-para-los-miembros-de-nuestra-membres-a-premium.png",
      "https://i.ibb.co/cXFmHW0Q/1-Obtenido-de-N-madas-para-los-miembros-de-nuestra-membres-a-premium.png",
      "https://i.ibb.co/PGdcXQqw/2-Obtenido-de-N-madas-para-los-miembros-de-nuestra-membres-a-premium.png",
      "https://i.ibb.co/gZT9wF5n/3-Obtenido-de-N-madas-para-los-miembros-de-nuestra-membres-a-premium.png",
      "https://i.ibb.co/gFBQDydf/4-Obtenido-de-N-madas-para-los-miembros-de-nuestra-membres-a-premium.png",

      "https://i.ibb.co/pjgwJT3L/10.jpg",
      "https://i.ibb.co/s9C6BxL9/9.jpg",
      "https://i.ibb.co/DZFyYQH/12.jpg",
      "https://i.ibb.co/4RdYwFWQ/13.jpg",
      "https://i.ibb.co/V0vDW8nk/14.jpg",
      "https://i.ibb.co/SDXcmb7H/15.jpg",
      "https://i.ibb.co/tTcbd2m5/16.jpg",
      "https://i.ibb.co/8DyYnTJs/17.jpg",
      "https://i.ibb.co/1YZDxPZ6/18.jpg",
    ],
    Niños: [
      "https://i.ibb.co/9m03Yh72/joker.jpg",
      "https://i.ibb.co/MDbY0hP4/mario.png",
      "https://i.ibb.co/6Jw5yYkp/Ni-o-plantilla.jpg",
      "https://i.ibb.co/k2tDqhCQ/mario2.png",
      "https://i.ibb.co/67RHkzRF/paw.jpg",
      "https://i.ibb.co/WW951JRf/oso.png",
      "https://i.ibb.co/YTdWTVJ5/roblox.jpg",
      "https://i.ibb.co/N6nFw6Sj/spider.jpg",
      "https://i.ibb.co/yK1yZFh/spider2.jpg",
      "https://i.ibb.co/8vXXF10/soni.png",
      "https://i.ibb.co/mFXRqMwT/avengers.jpg",
      "https://i.ibb.co/TBg0xDp5/avengers2.jpg",
      "https://i.ibb.co/RkGfhWKd/control.jpg",
      "https://i.ibb.co/R4zhHxTy/2.jpg",
      "https://i.ibb.co/Z12zgfk7/1.jpg",
    ],
    Niñas: [
      "https://i.ibb.co/rR3MDGQb/2.jpg",
      "https://i.ibb.co/84sTzS3X/3.jpg",
      "https://i.ibb.co/jZw6fcJv/4.jpg",
      "https://i.ibb.co/NdB8btDJ/5.jpg",
      "https://i.ibb.co/gnQZm0T/6.jpg",
      "https://i.ibb.co/G394VnGt/7.jpg",
      "https://i.ibb.co/XrnQV1nz/8.jpg",
      "https://i.ibb.co/Ldfx7FG8/9.jpg",
      "https://i.ibb.co/Kc0dpVD9/1.jpg",
      "https://i.ibb.co/RkKp9wwK/stich4.jpg",
      "https://i.ibb.co/nsZyTxFR/elsa.jpg",
      "https://i.ibb.co/b43bxwb/minnie4.jpg",
      "https://i.ibb.co/ksHMgcwm/kuromi3.jpg",
      "https://i.ibb.co/bMfJC7Z9/minnie3.jpg",
      "https://i.ibb.co/Y7b9w7DD/superp2.jpg",
      "https://i.ibb.co/kgPhf0sW/superp.jpg",
      "https://i.ibb.co/F4Q6fGPt/ana.jpg",
      "https://i.ibb.co/H9ND1Qy/mohana.jpg",
      "https://i.ibb.co/jkXnKYCf/princesas.jpg",
      "https://i.ibb.co/zTJZWPJS/minnie2.jpg",
      "https://i.ibb.co/gFjnDF9Y/minnie.jpg",
      "https://i.ibb.co/fdWntTC4/stich3.jpg",
      "https://i.ibb.co/xvpqGxv/lola.jpg",
      "https://i.ibb.co/mmXYFz7/stich.jpg",
      "https://i.ibb.co/h1Yk51ck/melody3.jpg",
      "https://i.ibb.co/4wbPPQt5/melody2.jpg",
      "https://i.ibb.co/Z68Mvmw4/melody.jpg",
      "https://i.ibb.co/pvwtdVYB/kuromi2.jpg",
      "https://i.ibb.co/nydVXYN/kuromi.jpg",
      "https://i.ibb.co/G4CmkNLy/thinkerbell.jpg",
      "https://i.ibb.co/938QDNZT/lilo.jpg",
    ],

    Mamelucos: [
      "https://i.ibb.co/dskJJQDC/Whats-App-Image-2025-12-04-at-12-06-10-PM.jpg",
      "https://i.ibb.co/VWwdnyzM/Whats-App-Image-2025-12-04-at-12-06-08-PM.jpg",
      "https://i.ibb.co/Q3tTs7w5/Whats-App-Image-2025-12-04-at-12-06-09-PM-1.jpg",
      "https://i.ibb.co/Y4MgWcZP/Whats-App-Image-2025-12-04-at-12-06-09-PM-2.jpg",
      "https://i.ibb.co/XrZ7j1rR/Whats-App-Image-2025-12-04-at-12-06-09-PM.jpg",
      "https://i.ibb.co/B5zn3fC7/Whats-App-Image-2025-12-04-at-12-06-10-PM-1.jpg",
      "https://i.ibb.co/zTx908vm/Whats-App-Image-2025-12-04-at-12-06-10-PM-2.jpg",
      "https://i.ibb.co/Wp7GptH2/Whats-App-Image-2025-12-04-at-12-06-10-PM-3.jpg",
      "https://i.ibb.co/dJ20h2kN/Whats-App-Image-2025-12-04-at-12-06-10-PM-4.jpg",
      "https://i.ibb.co/PZg750sP/Whats-App-Image-2025-12-04-at-12-06-10-PM-5.jpg",
    ],
  };
  // 🔥 1. Función para pre-cargar imágenes ANTES de renderizar
  const preloadImages = async (imageList) => {
    const promises = imageList.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve; // se resuelve cuando carga
        })
    );

    await Promise.all(promises);
  };

  // 🔥 2. Efecto: cada vez que cambia la categoría, muestra spinner
  useEffect(() => {
    let isMounted = true;

    const loadImages = async () => {
      setIsLoading(true);

      const list = images[category] || [];

      await preloadImages(list);

      if (isMounted) {
        setIsLoading(false);
      }
    };

    loadImages();

    return () => {
      isMounted = false;
    };
  }, [category]);

  // 🔥 3. Render
  return (
    <>
      {/* SPINNER */}
      {isLoading && (
        <div className="w-full flex justify-center py-10">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-10 h-10 text-gray-300 animate-spin fill-blue-600"
              viewBox="0 0 100 101"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 
                   0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 
                   0.59082C77.6142 0.59082 100 22.9766 100 
                   50.5908ZM9.08144 50.5908C9.08144 73.1895 
                   27.4013 91.5094 50 91.5094C72.5987 91.5094 
                   90.9186 73.1895 90.9186 50.5908C90.9186 
                   27.9921 72.5987 9.67226 50 9.67226C27.4013 
                   9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 
                   97.8624 35.9116 97.0079 33.5539C95.2932 
                   28.8227 92.871 24.3692 89.8167 
                   20.348C85.8452 15.1192 80.8826 10.7238 
                   75.2124 7.41289C69.5422 4.10194 
                   63.2754 1.94025 56.7698 1.05124C51.7666 
                   0.367541 46.6976 0.446843 41.7345 
                   1.27873C39.2613 1.69328 37.813 4.19778 
                   38.4501 6.62326C39.0873 9.04874 
                   41.5694 10.4717 44.0505 
                   10.1071C47.8511 9.54855 51.7191 
                   9.52689 55.5402 10.0491C60.8642 
                   10.7766 65.9928 12.5457 70.6331 
                   15.2552C75.2735 17.9648 79.3347 
                   21.5619 82.5849 25.841C84.9175 
                   28.9121 86.7997 32.2913 88.1811 
                   35.8758C89.083 38.2158 91.5421 
                   39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        </div>
      )}

      {/* GALERÍA */}
      {!isLoading && (
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {(images[category] || []).map((src, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-md aspect-[4/5]"
            >
              <img
                src={src}
                alt={category}
                className="w-full h-full object-cover rounded-xl cursor-pointer 
                           transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedImage(src)}
              />
            </div>
          ))}
        </div>
      )}

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999]"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoom"
            className="max-w-[95%] max-h-[90%] rounded-xl shadow-xl"
          />
        </div>
      )}
    </>
  );
};
export default Gallery;

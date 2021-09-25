import React from 'react';
// import 'antd/dist/antd.css';
import "./reset.css";

import dayjs from "dayjs"
import reactDom from 'react-dom';

import jalaliday from "jalaliday";
import MobileIntroduction from './Components/MobileDownloader/MobileIntroduction/MobileIntroduction';
import MobileRedirectionDownload from './Components/MobileDownloader/MobileRedirectionDownload/MobileRedirectionDownload';

dayjs.extend(jalaliday);



const data = {
  mobileImage : 'https://images.unsplash.com/photo-1632341817467-4258c7eaea34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
  feature : [
    {
      title : "Find User",
      icon : "https://img.icons8.com/ios-glyphs/30/000000/touch-id.png",
    },
    {
      title : "Delete User",
      icon : "https://img.icons8.com/ios-glyphs/30/000000/ios-photos.png",
    },
    {
      title : "Job Ready",
      icon : "https://img.icons8.com/ios-glyphs/30/000000/dropbox.png",
    },
    // {
    //   title : "Find User",
    //   icon : "https://img.icons8.com/ios-glyphs/30/000000/discord.png",
    // },
  ]
}




const App = () => {
  return (
        <MobileRedirectionDownload />
  )
}



reactDom.render(<App />,document.getElementById('root'));

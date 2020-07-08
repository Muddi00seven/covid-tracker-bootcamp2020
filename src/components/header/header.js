import React from 'react';
import './header.css';
import Typical from 'react-typical';

const Header = () => {
    return (
        // <div>
        //        <img src='https://idc.net.pk/wp-content/themes/idc/assets/img/cidc.gif' alt='covid'/>   

        // </div>

        <div id="banner">
        
            <div className='inlineBlock margin1' >
    <img src='https://text2image.com/user_images/202007/text2image_T9446988_20200708_60631.png' className='imgSize1' alt='covid'/>  
    </div>

    <div className='inlineBlock margin2'>
    <img src='https://idc.net.pk/wp-content/themes/idc/assets/img/cidc.gif' className='imgSize2' alt='covid'/>  
    </div>

    <div className='inlineBlock margin3'>
    <img src='https://text2image.com/user_images/202007/text2image_V5228823_20200708_60347.png' className='imgSize3' alt='covid'/>  
    </div>
    <h1 className='typical'>Stay    <Typical
         steps={['Home 🏡', 1000, 
         'Safe ♥️', 1000,   
          'Healthy 😃' , 100
             ]}
        loop={Infinity}
        wrapper="b"
        className='text'
      />
      </h1>
</div>
    )
}

export default Header;

import React from 'react'

window.onload = function(){
    document.getElementById('first-btn').click();
  }

export const Container4 = () => {
  return (
    <section id='Fotos' className='section-gallery'>
        <div className='darkBlueLine'>
            <h1>Galería</h1>
        </div>

        <div className='slider'>
            <div className='slides'>
                <input type='radio' name='radio-btn' id='radio1'/>
                <input type='radio' name='radio-btn' id='radio2'/>
                <input type='radio' name='radio-btn' id='radio3'/>
                {/* <input type='radio' name='radio-btn' id='radio4'/> */}

                <div className='imgGalleryGroup slide first'>
                    <div className='Gallery'>
                        <div className='img1'></div>
                        <div className='img2'></div>
                        <div className='img3'></div>
                        <div className='img4'></div>
                    </div>
                </div>

                <div className='imgGalleryGroup slide'>
                    <div className='Gallery'>
                        <div className='img5'></div>
                        <div className='img6'></div>
                        <div className='img7'></div>
                        <div className='img8'></div>
                    </div>
                </div>

                <div className='imgGalleryGroup slide'>
                    <div className='Gallery'>
                        <div className='img9'></div>
                        <div className='img10'></div>
                        <div className='img11'></div>
                        <div className='img12'></div>
                    </div>
                </div>

            <div className='navigation-manual'>
                <label id='first-btn' htmlFor='radio1' className='manual-btn manual-btn1'></label>
                <label htmlFor='radio2' className='manual-btn manual-btn2'></label>
                <label htmlFor='radio3' className='manual-btn manual-btn3'></label>
                {/* <label htmlFor='radio4' className='manual-btn manual-btn4'></label> */}
            </div>
            </div> 
        </div>  

        <div className='slider-mobile'>
            <div className='slides'>
                <div className='imgGalleryGroup slide first'>
                    <div className='Gallery'>
                        <div className='img1'></div>
                        <div className='img2'></div>
                        <div className='img3'></div>
                        <div className='img4'></div>
                    </div>
                </div>

                <div className='imgGalleryGroup slide'>
                    <div className='Gallery'>
                        <div className='img5'></div>
                        <div className='img6'></div>
                        <div className='img7'></div>
                        <div className='img8'></div>
                    </div>
                </div>

                <div className='imgGalleryGroup slide'>
                    <div className='Gallery'>
                        <div className='img9'></div>
                        <div className='img10'></div>
                        <div className='img11'></div>
                        <div className='img12'></div>
                    </div>
                </div>
            </div> 
        </div> 
    </section>
  )
}

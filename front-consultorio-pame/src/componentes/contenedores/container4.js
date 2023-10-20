import React from "react";

window.onload = function () {
  document.getElementById("first-btn").click();
  //   document.getElementById("second-btn").click();
  //   document.getElementById("third-btn").click();
  //   document.getElementById("first-btn").click();

  //   setTimeout(() => {}, 500);
};

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// setTimeout(async function timeoutCallback() {
//   await delay(9000);
//   document.getElementById("first-btn").click();

//   await delay(9000);
//   document.getElementById("second-btn").click();

//   await delay(9000);
//   document.getElementById("third-btn").click();

//   setTimeout(timeoutCallback, 9000);
// });

export const Container4 = () => {
  return (
    <section id="Fotos" className="section-gallery">
      <div className="darkBlueLine">
        <h1>Galería</h1>
      </div>

      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />

          <div className="imgGalleryGroup slide first">
            <div className="Gallery">
              <div className="img1 imgHover"></div>
              <div className="img2 imgHover"></div>
              <div className="img3 imgHover"></div>
              <div className="img4 imgHover"></div>
            </div>
          </div>

          <div className="imgGalleryGroup slide">
            <div className="Gallery">
              <div className="img5 imgHover"></div>
              <div className="img6 imgHover"></div>
              <div className="img7 imgHover"></div>
              <div className="img8 imgHover"></div>
            </div>
          </div>

          <div className="imgGalleryGroup slide">
            <div className="Gallery">
              <div className="img9 imgHover"></div>
              <div className="img10 imgHover"></div>
              <div className="img11 imgHover"></div>
              <div className="img12 imgHover"></div>
            </div>
          </div>

          <div className="navigation-manual">
            <label
              id="first-btn"
              for="radio1"
              className="manual-btn manual-btn1"
            ></label>
            <label
              id="second-btn"
              for="radio2"
              className="manual-btn manual-btn2"
            ></label>
            <label
              id="third-btn"
              for="radio3"
              className="manual-btn manual-btn3"
            ></label>
          </div>
        </div>
      </div>

      <div className="slider-mobile">
        <div className="slides">
          <div className="imgGalleryGroup slide first">
            <div className="Gallery">
              <div className="img1 imgHover"></div>
              <div className="img2 imgHover"></div>
              <div className="img3 imgHover"></div>
              <div className="img4 imgHover"></div>
            </div>
          </div>

          <div className="imgGalleryGroup slide">
            <div className="Gallery">
              <div className="img5 imgHover"></div>
              <div className="img6 imgHover"></div>
              <div className="img7 imgHover"></div>
              <div className="img8 imgHover"></div>
            </div>
          </div>

          <div className="imgGalleryGroup slide">
            <div className="Gallery">
              <div className="img9 imgHover"></div>
              <div className="img10 imgHover"></div>
              <div className="img11 imgHover"></div>
              <div className="img12 imgHover"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

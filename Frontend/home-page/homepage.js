// logged_in_user = localStorage.getItem("active-user")
//   ? JSON.parse(localStorage.getItem("active-user"))
//   : "";
user_name = "Housam Kak";
profile_photo = "/Frontend/home-page/Images/demo-img.jpg";
likes_number = "4";
mystatus = document.querySelector("#status");
tweet = `<div class="reusable-element">
            <div class="title-content">
              <div class="image-content">
                <img
                  class="profile-photo"
                  src="${profile_photo}"
                />
                <h1>${user_name}</h1>
              </div>
              <p style="color: white">...</p>
            </div>
            <div class="main-text">
              <p>${mystatus.textContent}
              </p>
            </div>
            <div class="likes">
              <img
                class="like-img"
                src="/Frontend/home-page/Images/heart-like.svg"
              />
              <p id="likes-number">${likes_number}</p>
            </div>
          </div>`;

tweet_btn_small = document.querySelector("#tweet-btn-small");

tweet_btn_small.addEventListener("click", () => {

    
});

// logged_in_user = localStorage.getItem("active-user")
//   ? JSON.parse(localStorage.getItem("active-user"))
//   : "";
tweet = `<div class="reusable-element">
            <div class="title-content">
              <div class="image-content">
                <img
                  class="profile-photo"
                  src="${profile-photo}"
                />
                <h1>${user_name}</h1>
              </div>
              <p style="color: white">...</p>
            </div>
            <div class="main-text">
              <p>${tweet-text}
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

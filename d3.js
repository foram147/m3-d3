function getFirstImage() {
  let images;
  fetch("https://api.pexels.com/v1/search?query=baby", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer 563492ad6f91700001000001f04fc1c008224419a3741985c8209dd1",
    },
  })
    .then((Response) => {
      return Response.json();
    })
    .then((user) => {
      displayFirstImage(user);
    })
    .catch((err) => {
      console.log(err);
    });
}

function displayFirstImage(user) {
  let grid = document.getElementById("myGrid");
  for (let photo of user.photos) {
    // generates 12 cards
    grid.innerHTML += `<div class="col">
    <div class="card mb-4 shadow-sm">
    <img src="${photo.src.original}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>`;
  }
  grid
    .querySelectorAll(".btn.btn-outline-secondry:nth-child(2)")
    .forEach((btn) => {
      btn.innerText = "Hide";
      btn.onclick = (event) => event.currentTarget.closest(".col").remove();
    });
}

function getSecondImage() {
  let images;
  fetch("https://api.pexels.com/v1/search?query=flower", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer 563492ad6f91700001000001f04fc1c008224419a3741985c8209dd1",
    },
  })
    .then((Response) => {
      return Response.json();
    })
    .then((user) => {
      displaySecondImage(user);
    })
    .catch((err) => {
      console.log(err);
    });
}

function displaySecondImage(user) {
  let grid = document.getElementById("myGrid");
  for (let photo of user.photos) {
    // generates 12 cards
    grid.innerHTML += `<div class="col">
      <div class="card mb-4 shadow-sm">
      <img src="${photo.src.original}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div
                class="d-flex justify-content-between align-items-center"
              >
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>`;
  }
}

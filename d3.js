let grid = document.getElementById("myGrid");

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
      console.log(user);
      displayImage(user);
    })
    .catch((err) => {
      console.log(err);
    });
}

function displayImage(user) {
  grid === "";
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
            <div class="d-flex justify-content-between align-items-center" >
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
              <small id = "strings"class="text-muted">${photo.id}</small>
            </div>
          </div>
        </div>
      </div>`;
  }
  grid
    .querySelectorAll(".btn.btn-outline-secondary:nth-child(2)") // finds the second button of type outline-secondary
    .forEach((btn) => {
      btn.innerText = "Hide"; //changes the inner text
      btn.onclick = (event) =>
        // event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.remove(); // navigating upward in the dom tree to find the .col element and remove it
        event.currentTarget.closest(".col").remove(); // modern approach: is going to find the closest element matching the condition
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
      displayImage(user);
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

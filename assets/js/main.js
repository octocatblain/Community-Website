//FEATURED POST***********************
//ARTICLE CONTENT DATA
let data = {
  data: [
    {
      id: 1,
      name: "Oyin Dawodu",
      date: "- Apr, 18th 2023",
      title: "Contributing articles to Chimoney Community",
      article:
        "Are you passionate about sharing your expertise and making a valuable contribution to an active online community?",
      tag1: "Chimoney news",
      tag2: "project utility",
      time: "4 mins read",
    },
    {
      id: 2,
      name: "Oyin Dawodu",
      date: "- Apr, 18th 2023",
      title: "Getting Started with Chimoney's API",
      article:
        "Do you wish to learn how to get started with Chimoney's API? Then this blog is for you...",
      tag1: "chimoney news",
      tag2: "project utility",
      time: "3 mins read",
    },
    {
      id: 3,
      name: "Phylis Atieno",
      date: "- May, 18th 2023",
      title: "Chisquad 002 Reflections",
      article:
        "Celebrating collaborative successes in our Ambassador Community",
      tag1: "chimoney news",
      tag2: "project utility",
      time: "3 mins read",
    },
  ],
};

const Card = (data) => {
  data = data.data;
  let content = "";
  for (var i = 0; i < data.length; i++) {
    content += `
        <div class="blog-post">
            <img class="image1" src="assets/images/image 1.png" />
            <div>
                <div class="profile">
                    <img class="profile-picture" src="assets/images/Author.png" />
                    <p class="name">${data[i].name}</p>
                    <p class="date">${data[i].date}</p>
                </div>
                    
                <a href="#" class="title">${data[i].title}</a>
                <p class="article">${data[i].article}</p>

                <div class="article-footer">
                    <a href="#" class="tag" >${data[i].tag1}</a>
                    <a href="#" class ="tag" >${data[i].tag2}</a>
                    <p class="time">${data[i].time}</p>
                </div>
            </div>
         </div> 
      `;
  }
  document.getElementById("data").innerHTML = content;
};
Card(data);

/* End of Featured post -------- --------------------------------------
----------------------------------------------------------------*/

// footer copyright year
function getCopyRightYear() {
  const span = document.getElementsByClassName("year");
  const d = new Date();
  span[0].innerHTML = d.getFullYear();
  console.log(span[0].innerHTML);
}
getCopyRightYear();

// tabs section
function openTabAndActivate(event, tabName) {
  // Hide all tabs
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  // Show the selected tab
  document.getElementById(tabName).style.display = "block";

  // Remove active class from all tab items
  var tabItems = document.getElementsByClassName("tab_item");
  for (var i = 0; i < tabItems.length; i++) {
    tabItems[i].classList.remove("active");
  }

  // Add active class to the clicked tab item
  event.currentTarget.classList.add("active");
}

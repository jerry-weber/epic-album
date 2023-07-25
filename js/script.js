const epicAlbum = [
  "Speak to me",
  "Breathe (In the Air)",
  "On the Run",
  "Time",
  "The Great Gig in the Sky",
  "Money",
  "Us and Them",
  "Any Colour You Like",
  "Brain Damage",
  "Eclipse",
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  mixInfo(epicAlbum);
});

total.innerText = `Pink Floyd - The Dark Side Of The Moon (1973)`;

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`; // Fix the typo here
    mixList.append(li);
  });
};

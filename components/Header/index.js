// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const displayHeader = document.querySelector(".header-container");

function Header(headerArray) {
  const mainHeader = document.createElement("div");
  const mainDate = document.createElement("span");
  const mainTitle = document.createElement("h1");
  const mainTemp = document.createElement("span");

  // appending

  mainHeader.append(mainDate);
  mainHeader.append(mainTitle);
  mainHeader.append(mainTemp);

  // add classes

  mainHeader.classList.add("header");
  mainDate.classList.add("date");
  mainTemp.classList.add("temp");

  // set data to objects - text content

  mainDate.textContent = "Smarch 28, 2019";
  mainTitle.textContent = "Lambda Times";
  mainTemp.textContent = "98deg";

  return mainHeader;
}

displayHeader.append(Header());

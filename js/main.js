// Thanks for the coding challenge!
// I may have overused javascript a bit, but I believe I got all of the specified functionality and nearly all of the styling.
// I spent just over 3 hours making this.
// Still to-do: Add gradient to top of widget, find a closer font, DRY up some of the repeated code

window.onload = function() {
  renderPeople();
  modal = document.getElementById('modal');
  (function(){
      modal.addEventListener("click", function() {
         removeClickSpan();
      }, false);})();
}

const people = [
  {'name': 'Christian', 'email': 'christian@yahoo.com', 'phone': '323-555-1234', 'address': '6539 Wilton Ave. Culver City, CA 90234', 'color': '#00FF2C'},
  {'name': 'Rich', 'email': 'rich@tripod.com', 'phone': '323-555-1234', 'address': '6539 Wilton Ave. Culver City, CA 90234', 'color': '#00FF2C'},
  {'name': 'Scott', 'email': 'scott@mailinator.com', 'phone': '323-555-1234', 'address': '6539 Wilton Ave. Culver City, CA 90234', 'color': '#00FF2C'},
  {'name': 'Danny', 'email': 'danny@hotmail.com', 'phone': '323-555-1234', 'address': '6539 Wilton Ave. Culver City, CA 90234', 'color': '#00FF2C'},
  {'name': 'Taka', 'email': 'taka@myspace.com', 'phone': '323-555-1234', 'address': '6539 Wilton Ave. Culver City, CA 90234', 'color': '#FF0000'},
  {'name': 'Tim', 'email': 'tim@netscape.com', 'phone': '323-555-1234', 'address': '6539 Wilton Ave. Culver City, CA 90234', 'color': '#BFC900'},
  {'name': 'Patrick', 'email': 'patrick@live.com', 'phone': '323-555-1234', 'address': '6539 Wilton Ave. Culver City, CA 90234', 'color': '#00FF2C'},
  {'name': 'Jacques', 'email': 'jacques@aol.com', 'phone': '323-555-1234', 'address': '6539 Wilton Ave. Culver City, CA 90234', 'color': '#BFC900'}
];

function renderPeople() {
  var ul = document.getElementById("peoples");
  ul.innerHTML = '';
  var emailOrPhone = document.getElementById("select").selectedIndex;

  people.forEach((person, i) => {
    var newLi = document.createElement("li");

    // left side: includes colored bullet and name
    var leftSideSpan = document.createElement('span');
      var colorSpan = document.createElement('span');
      colorSpan.classList += 'color';
      colorSpan.style.color = `${person.color}`;
      var color = document.createTextNode('\u2022');
      colorSpan.appendChild(color);
      leftSideSpan.appendChild(colorSpan);

      var nameSpan = document.createElement('span');
      nameSpan.classList += 'name';
      var name = document.createTextNode(`${person.name}`);
      nameSpan.appendChild(name);
      leftSideSpan.appendChild(nameSpan);
    leftSideSpan.classList += 'left-side';
    newLi.appendChild(leftSideSpan);

    // right side includes email or phone, depending on the value of the select box
    if(emailOrPhone === 0){
      var emailSpan = document.createElement('span');
      emailSpan.classList += 'email';
      var email = document.createTextNode(`${person.email}`);
      emailSpan.appendChild(email);
      newLi.appendChild(emailSpan);
    } else{
      var phoneSpan = document.createElement('span');
      phoneSpan.classList += 'email';
      var phone = document.createTextNode(`${person.phone}`);
      phoneSpan.appendChild(phone);
      newLi.appendChild(phoneSpan);
    }

    // adding an onclick listener to each li
    (function(){
        newLi.addEventListener("click", function() {
           handleClick(newLi, person);
        }, false);})(newLi, person);

    // alternating the bgcolor of each li between black and gray
    newLi.id = "li";
    if(i % 2 !== 0) {
      newLi.classList += "black";
    } else {
      newLi.classList += "gray";
    }

    // creating the span that is displayed onclick (display:none by default)
    var onClickSpan = document.createElement('span');
    onClickSpan.id = `on-click-span${person.name}`;
    onClickSpan.classList += 'on-click-span';
    newLi.appendChild(onClickSpan);

    // finally, appending the li to the people ul
    ul.appendChild(newLi);
  });
}

// re-render people when the select box is changed
// note: This isn't ideal. It would be better to only re-render the right side.
function handleSelectChange(selected){
  renderPeople();
}

// handle building the span that is displayed when an li is clicked
function handleClick(li, person){
  // making sure all other onClickSpans are not currently displaying
  allOnClicks = document.querySelectorAll(".on-click-span");
  allOnClicks.forEach((span) => {
    span.style = 'display: none';
  });

  Object.assign(li.style,{zIndex: 7, backgroundColor: '#484848'});

  modal = document.getElementById('modal');
  modal.style = 'display: block';

  // finding the current onClickSpan and resetting its innerHTML, and displaying it
  clickInfo = document.getElementById(`on-click-span${person.name}`);
  clickInfo.innerHTML = '';
  clickInfo.style = 'display: flex';

  var emailSpan = document.createElement('span');
  emailSpan.classList += 'click-email';
  var email = document.createTextNode(`${person.email}`);
  emailSpan.appendChild(email);
  clickInfo.appendChild(emailSpan);

  var phoneSpan = document.createElement('span');
  phoneSpan.classList += 'click-phone';
  var phone = document.createTextNode(`${person.phone}`);
  phoneSpan.appendChild(phone);
  clickInfo.appendChild(phoneSpan);

  var addressSpan = document.createElement('span');
  addressSpan.classList += 'click-address';
  var address = document.createTextNode(`${person.address}`);
  addressSpan.appendChild(address);
  clickInfo.appendChild(addressSpan);
}

function removeClickSpan() {
  allOnClicks = document.querySelectorAll(".on-click-span");
  allOnClicks.forEach((span) => {
    span.style = 'display: none';
  });
  modal = document.getElementById('modal');
  modal.style = 'display: none';

  allLis = document.querySelectorAll("li");
  allLis.forEach((li) => {
    li.style = '';
  });
}

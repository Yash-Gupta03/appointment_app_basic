let form = document.getElementById("booking-form");
form.addEventListener("submit", addToLocal);

function addToLocal(e) {
  e.preventDefault();
  let uname = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let obj = {
    uname: uname,
    email: email,
    phone: phone,
  };
  localStorage.setItem(email, JSON.stringify(obj));

  let newElement = document.createElement("li");
  let newBtn = document.createElement("input");
  let editBtn = document.createElement("input");
  newBtn.className = "delete";
  newBtn.type = "button";
  newBtn.value = "Delete";
  editBtn.className = "edit";
  editBtn.type = "button";
  editBtn.value = "Edit";

  newElement.appendChild(document.createTextNode(JSON.stringify(obj)));
  // newBtn.appendChild(document.createTextNode('Delete'))

  let parentEle = document.getElementById("list");
  parentEle.appendChild(newElement);
  newElement.appendChild(newBtn);
  newElement.appendChild(editBtn);
  newBtn.onclick = () => {
    localStorage.removeItem(obj.email);
    parentEle.removeChild(newElement);
  };
  editBtn.onclick = () => {
    localStorage.removeItem(obj.email);
    parentEle.removeChild(newElement);
    document.getElementById("username").value = obj.uname;
    document.getElementById("email").value = obj.email;
    document.getElementById("phone").value = obj.phone;
  };
}

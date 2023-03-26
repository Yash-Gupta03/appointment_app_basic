let form = document.getElementById("booking-form");

form.addEventListener("submit", addToCloud);

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/2d1f52ce6deb492fa8f1250a34962399/bookingData"
    )
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        let newElement = document.createElement("li");
        let newBtn = document.createElement("input");
        let editBtn = document.createElement("input");
        newBtn.className = "delete";
        newBtn.type = "button";
        newBtn.value = "Delete";
        editBtn.className = "edit";
        editBtn.type = "button";
        editBtn.value = "Edit";

        newElement.appendChild(
          document.createTextNode(JSON.stringify(res.data[i]))
        );
        // newBtn.appendChild(document.createTextNode('Delete'))

        let parentEle = document.getElementById("list");
        parentEle.appendChild(newElement);
        newElement.appendChild(newBtn);
        newElement.appendChild(editBtn);
        newBtn.onclick = () => {
          // localStorage.removeItem(obj.email);
          parentEle.removeChild(newElement);
        };
        editBtn.onclick = () => {
          // localStorage.removeItem(obj.email);
          parentEle.removeChild(newElement);
          document.getElementById("username").value = obj.uname;
          document.getElementById("email").value = obj.email;
          document.getElementById("phone").value = obj.phone;
        };
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

function addToCloud(e) {
  e.preventDefault();
  let uname = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let obj = {
    uname: uname,
    email: email,
    phone: phone,
  };
  //   localStorage.setItem(email, JSON.stringify(obj));
  axios
    .post(
      "https://crudcrud.com/api/2d1f52ce6deb492fa8f1250a34962399/bookingData",
      obj
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  displayData();

  function displayData() {
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
      // localStorage.removeItem(obj.email);
      parentEle.removeChild(newElement);
    };
    editBtn.onclick = () => {
      // localStorage.removeItem(obj.email);
      parentEle.removeChild(newElement);
      document.getElementById("username").value = obj.uname;
      document.getElementById("email").value = obj.email;
      document.getElementById("phone").value = obj.phone;
    };
  }
}

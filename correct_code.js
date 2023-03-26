let form = document.getElementById("booking-form");
form.addEventListener("submit", addToCloud);

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
  axios
    .post(
      "https://crudcrud.com/api/1c123dec5a7b48f6bb35caffe366acdd/bookingData",
      obj
    )
    .then((res) => {
      //   obj.uid = res.data._id;
      showListofRegisteredUser(res.data);
    })
    .catch((err) => console.log(err));
  //   console.log(obj);
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/1c123dec5a7b48f6bb35caffe366acdd/bookingData"
    )
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        showListofRegisteredUser(res.data[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

function showListofRegisteredUser(user) {
  const parentNode = document.getElementById("list");
  const createNewUserHtml = `<li id='${user._id}'>${user.uname} - ${user.email} - ${user.phone} - ${user.uid}
                                    <button onclick=deleteUser('${user._id}')>Delete</button>
                                    <button onclick=editUser('${user}')>Edit</button>
                                </li>
                                `;
  //   console.log(createNewUserHtml);
  parentNode.innerHTML += createNewUserHtml;
  //   console.log(parentNode.innerHTML);
}

function editUser(user) {
  axios.put(
    `https://crudcrud.com/api/1c123dec5a7b48f6bb35caffe366acdd/bookingData/${user._id}`,
    {
      uname: "Yash_Gupta",
      email: "y@gmail.com",
      phone: 9685,
    }
  );
  document.getElementById("username").value = obj.uname;
  document.getElementById("email").value = obj.email;
  document.getElementById("phone").value = obj.phone;
}

function deleteUser(userID) {
  // localStorage.removeItem(email)
  axios
    .delete(
      `https://crudcrud.com/api/1c123dec5a7b48f6bb35caffe366acdd/bookingData/${userID}`
    )
    .then((res) => {
      removeItemFromScreen(userID);
    })
    .catch((err) => console.log(err));
}

function removeItemFromScreen(userID) {
  const parentNode = document.getElementById("list");
  const elem = document.getElementById(userID);
  parentNode.removeChild(elem);
}

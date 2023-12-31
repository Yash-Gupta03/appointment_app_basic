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
      "https://crudcrud.com/api/c93777c64d554bbea4a960faf1595f05/bookingData",
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
      "https://crudcrud.com/api/c93777c64d554bbea4a960faf1595f05/bookingData"
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
                                    <button onclick=editUser('${user._id}','${user.uname}','${user.email}','${user.phone}')>Edit</button>
                                </li>
                                `;
  //   console.log(createNewUserHtml);
  parentNode.innerHTML += createNewUserHtml;
  //   console.log(parentNode.innerHTML);
}

function editUser(_id, uname, email, phone) {
  document.getElementById("username").value = uname;
  document.getElementById("email").value = email;
  document.getElementById("phone").value = phone;
  //   axios.put(
  //     `https://crudcrud.com/api/1c123dec5a7b48f6bb35caffe366acdd/bookingData/${user._id}`,
  //     {
  //       uname: "Yash_Gupta",
  //       email: "y@gmail.com",
  //       phone: 9685,
  //     }
  //   );
  deleteUser(_id);
}

function deleteUser(userID) {
  // localStorage.removeItem(email)
  axios
    .delete(
      `https://crudcrud.com/api/c93777c64d554bbea4a960faf1595f05/bookingData/${userID}`
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

// حفظ بيانات الطالب

function saveStudent() {

  let name = document.getElementById("studentName").value;

  let id = document.getElementById("studentId").value;

  if (name === "" || id === "") {

    alert("NAME AND COLLEGE ID");

    return;

  }

  // save the details

  localStorage.setItem("studentName", name);

  localStorage.setItem("studentId", id);

  alert("DONE ✅");

}

// move to admin panel

function goToAdmin() {

  window.location.href = "admin.html";

}

// show order details on profile

function loadProfile() {

  let name = localStorage.getItem("studentName");

  let id = localStorage.getItem("studentId");

  if (!name || !id) {

    document.getElementById("profileInfo").innerHTML = "no data recorded";

  } else {

    document.getElementById("profileInfo").innerHTML = `
<p>NAME: ${name}</p>
<p>COLLEGE ID: ${id}</p>

    `;

  }

}
 
<script src="script.js"></script>
 

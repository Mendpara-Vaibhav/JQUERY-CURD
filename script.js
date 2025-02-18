let arrList = [];
let selectedRowIndex = null;

$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    let formData = readFormData();
    console.log(formData);

    if (selectedRowIndex === null) {
      arrList.push(formData);
    } else {
      arrList[selectedRowIndex] = formData;
      selectedRowIndex = null;
    }
    updateTable();
    resetForm();
  });
});

function readFormData() {
  return {
    fname: $("#fname").val(),
    lname: $("#lname").val(),
    password: $("#password").val(),
  };
}

function updateTable() {
  let tableData = "";
  $("#tableBody").empty();

  $.each(arrList, function (index, element) {
    tableData += `<tr>`;
    tableData += `<td>${element.fname}</td>`;
    tableData += `<td>${element.lname}</td>`;
    tableData += `<td>${element.password}</td>`;
    tableData += `<td><a class="onEdit" data-index="${index}">Edit</a> /
                      <a class="onDelete" data-index="${index}">Delete</a></td>`;
    tableData += `</tr>`;
  });
  $("#tableBody").html(tableData);
  // console.log(arrList);
}

function resetForm() {
  $("#form")[0].reset();
  selectedRowIndex = null;
}

$(document).on("click", ".onEdit", function () {
  selectedRowIndex = $(this).data("index");
  let selectedRow = arrList[selectedRowIndex];
  // console.log(selectedRow);

  $("#fname").val(selectedRow.fname);
  $("#lname").val(selectedRow.lname);
  $("#password").val(selectedRow.password);
});

$(document).on("click", ".onDelete", function () {
  let index = $(this).data("index");
  // console.log(index);
  if (confirm("Are you sure you want to delete")) {
    arrList.splice(index, 1);
    updateTable();
    resetForm();
  }
});

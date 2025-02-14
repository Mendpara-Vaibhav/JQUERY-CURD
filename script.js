let arrList = [];
let selectedRowIndex = null;

$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    let formData = readFormData();
    console.log(formData);

    arrList.push(formData);
    updateTable();
    resetForm();
  });
});

function readFormData() {
  return {
    fname: $("#fname").val(),
    lname: $("#lname").val(),
  };
}

function updateTable() {
  let tableData = "";
  $("#tableBody").empty();

  $.each(arrList, function (index, element) {
    tableData += `<tr>`;
    tableData += `<td>${element.fname}</td>`;
    tableData += `<td>${element.lname}</td>`;
    tableData += `<td><a onclick=onEdit(${index})>Edit</a> /
                      <a onclick=onDelete(${index})>Delete</a></td>`;
    tableData += `</tr>`;
  });
  $("#tableBody").html(tableData);
  console.log(arrList);
}

function resetForm() {
  $("#form")[0].reset();
  selectedRowIndex = null;
}

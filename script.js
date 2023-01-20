/** @format */

let output = document.getElementById("output")

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  output.innerHTML = "";
  let ans = "";
  arr.map(value => {
    if (value.profession === "developer") {
      ans += `<tr>
        <td>${value.id}</td>
        <td>${value.name}</td>
        <td>${value.age}</td>
        <td>${value.profession}</td>
      </tr>`;
    }
  });
  output.innerHTML = `<table border="2" ; cellspacing="5"; cellpadding="8" >
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>profession</th>
      </tr>
    </thead>
    <tbody>
      ${ans}
    </tbody>
  </table>`;
}

function PrintDeveloperbyForEach() {
  output.innerHTML = ""
  let ans = "";
    arr.forEach(element => {
      if (element.profession === "developer") {
        ans += `<tr>
          <td>${element.id}</td>
          <td>${element.name}</td>
          <td>${element.age}</td>
          <td>${element.profession}</td>
        </tr>`;
      }
    });
    output.innerHTML = `<table border="2" ; cellspacing="5"; cellpadding="8" ;>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>profession</th>
        </tr>
      </thead>
      <tbody>
        ${ans}
      </tbody>
    </table>`;
}

function addData() {
  output.innerHTML = "";
  let ans = "";
  let arr1 = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(arr1);
  arr.map(value => {
    ans += `<tr>
        <td>${value.id}</td>
        <td>${value.name}</td>
        <td>${value.age}</td>
        <td>${value.profession}</td>
      </tr>`;
  });
  output.innerHTML = `<table border="2" ; cellspacing="5"; cellpadding="8" >
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>profession</th>
      </tr>
    </thead>
    <tbody>
      ${ans}
    </tbody>
  </table>`;
}

function removeAdmin() {
  output.innerHTML = "";
  let ans = "";
  arr.map((value, index) => {
    if (value.profession === "admin") {
      arr.splice(index,1);
    }
  });
  arr.map(value => {
    ans += `<tr>
        <td>${value.id}</td>
        <td>${value.name}</td>
        <td>${value.age}</td>
        <td>${value.profession}</td>
      </tr>`;
  });
  output.innerHTML = `<table border="2" ; cellspacing="5"; cellpadding="8" >
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>profession</th>
      </tr>
    </thead>
    <tbody>
      ${ans}
    </tbody>
  </table>`;
}


function concatenateArray() {
  output.innerHTML = ""
  let arr2 = [
    { id: 5, name: "sonam", age: "26", profession: "ceo" },
    
    { id: 6, name: "priyanka", age: "28", profession: "cfo" },
    { id: 7, name: "vishvajit", age: "28", profession: "developer" },
  ];
  let concateBoth = arr.concat(arr2)
  let ans = ""
  concateBoth.map((value)=>{
    // console.log(value)
    ans += `<tr>
          <td>${value.id}</td>
          <td>${value.name}</td>
          <td>${value.age}</td>
          <td>${value.profession}</td>
        </tr>`
  })
  output.innerHTML = `<table border="2" ; cellspacing="5"; cellpadding="8" >
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>profession</th>
        </tr>
      </thead>
      <tbody>
        ${ans}
      </tbody>
    </table>`
}
var socket = io();
  socket.on('update', function (data) {
    let msg = JSON.parse(data);
      var table = document.getElementById("myTable");
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML =  msg.time;
      cell2.innerHTML =  msg.uid;
      cell3.innerHTML =  msg.booth;
      var x = document.getElementById("myTable").rows.length;
      if(x==7){document.getElementById("myTable").deleteRow(x-1);}
  });

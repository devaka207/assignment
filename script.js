function myFunction() {
  var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function click() {
  count += 1;
  console.log(count);
  if (count !=0){
    alert("Already Booked");
    var select = document.getElementById("facility");
  var value = select.options[select.selectedIndex].value
  $("#facility").on('change', function(){
    myval = $("#facility").val();
    count = 0; 
    $("clickme").on('click', function(){
        count++;
        alert(myval + count);
   })
})

  //value start
  var starthour = new Date($('input[id="start-time"]').val()).getHours();
  console.log(starthour,"starthour");//strthr
  
  
  //value end
  var endhour = new Date($('input[id="end-time"]').val()).getHours();
  console.log(endhour,"endhour");//endhr

  totalHours = NaN;
  if (starthour < endhour) {
    totalHours = Math.floor((endhour - starthour))
  }
  //stoing value in array
  var list = [];
for (var i = starthour; i <= endhour; i++) {
    list.push(i);
}

console.log(list);
const filteredArray = list.filter(any => list.includes(any));
console.log(filteredArray);
  $("#total-hours").val(totalHours);
  //for tennis court
  console.log(totalHours, "Hours");
  if (value === "court") {
    var totalprice=totalHours*50;
    console.log(totalprice);
    $("#totalprice").val(totalprice);
    console.log("court");
  }
  //for clubhouse
  if (value === "club") {
    if ((starthour >= 10 && starthour <= 16 && endhour >= 10 && endhour <= 16)) 
    console.log("nonpeakhrs");
    var nonpeakhrs = totalHours*100;
    $("#totalprice").val(nonpeakhrs);
     
    if ((starthour >= 16 && starthour <= 22 && endhour >= 16 && endhour <= 22)){
        console.log("peakhrs");
        var peakhrs = totalHours*500;
        $("#totalprice").val(peakhrs);
      }
      else{
        console.log("closed");
      }
    var totalprice=totalHours*100;
    console.log(totalprice);
    
    
  
    }

  }
};

  
    
}

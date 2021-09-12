// $("#add_batch").submit((event) =>{
//   alert("Data Submitted Successfully")
// })

$("#update_batch").submit((event) =>{
  event.preventDefault();

  var unidexed_array = $("#update_batch").serializeArray()
  //console.log(unidexed_array)
   var data ={}

  $.map(unidexed_array,(n,i)=>{
    data[n[`name`]] = n[`value`]

  })
   console.log(data);

  var request = {
    "url":`http://localhost:3000/api/batch/${data.id}`, 
    "method" : "PUT",
    "data": data
  }

  $.ajax(request).done((response) =>{
    alert("Batch updated successfully");
  })

 
  
  
})


const data = document.querySelectorAll(".moment")
data.forEach(item => {
  let prevContent = item.textContent
  item.textContent = moment(prevContent,"YYYYMMDD").format('MMMM Do YYYY, h:mm:ss a');
})

const recoddate = document.querySelectorAll(".moment2")
data.forEach(item => {
  let formerContent = newitem.textContent
  newitem.textContent = moment(formerContent,"YYYYMMDD").fromNow();
})



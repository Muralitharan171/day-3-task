//JSON
//FOR LOOP
var arr ={
    "name":"john",
    "age":"20",
    "gender":"male",
    "address":"123 Main St.",
    "phone":"123-456-7890",
    "marks":[77,57,89,56,89]
    }
 for(var i = 0; i <arr.marks.length; i++){
    console.log(arr.marks[i]);
    
 }
   console.log(arr);

 //FOR IN LOOP
 var arr ={
    "name":"john",
    "age":"20",
    "gender":"male",
    "address":"123 Main St.",
    "phone":"123-456-7890",
    "marks":[77,57,89,56,89]
    }
    for(var i in arr){
       console.log(i,arr[i]);
    }

    //FOR EACH
    var arr ={
   "name":"john",
    "age":"20",
    "gender":"male",
    "address":"123 Main St.",
  "phone":"123-456-7890",
   "marks":[77,57,89,56,89]
        }
        arr.marks.forEach(element => {
           console.log(element);
        });

 //FOR OF
   var arr ={
   "name":"john",
   "age":"20",
   "gender":"male",
  "address":"123 Main St.",
 "phone":"123-456-7890",
 "marks":[77,57,89,56,89]         
 }      
 for (var element of arr.marks) {
    console.log(element);
  }

  //RESUME IN JSON
  var obj ={
    "name":"Murali",
    "age":"24",
    "gender":"male",
    "location":"Tenkasi",
    "phone":"123-456-7890",
    "qualification":["10th","12th","degree"],
    "experience":"3 months in ranga food industries pvt ltd",
    "languages_known":["tamil","english"],
    "hobbies":["cricket","music"]
  }
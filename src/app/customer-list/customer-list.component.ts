import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private router: Router) { }


  mySearch(){
    var selected : string =(<HTMLInputElement> document.getElementById("searchtxt")).value; 
     alert(selected);
   
   }

  myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

 ngOnInit() {
  }


onClick(one){


this.router.navigate(['/detail',one.ID,one.firstname,one.lastname,one.email,one.active,one.datec,one.dateu,one.rating]);


}


onSort(){
 
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

}

onSortln(){
  
   var table, rows, switching, i, x, y, shouldSwitch;
   table = document.getElementById("myTable");
   switching = true;
   /*Make a loop that will continue until
   no switching has been done:*/
   while (switching) {
     //start by saying: no switching is done:
     switching = false;
     rows = table.getElementsByTagName("TR");
     /*Loop through all table rows (except the
     first, which contains table headers):*/
     for (i = 1; i < (rows.length - 1); i++) {
       //start by saying there should be no switching:
       shouldSwitch = false;
       /*Get the two elements you want to compare,
       one from current row and one from the next:*/
       x = rows[i].getElementsByTagName("TD")[1];
       y = rows[i + 1].getElementsByTagName("TD")[1];
       //check if the two rows should switch place:
       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
         //if so, mark as a switch and break the loop:
         shouldSwitch= true;
         break;
       }
     }
     if (shouldSwitch) {
       /*If a switch has been marked, make the switch
       and mark that a switch has been done:*/
       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
       switching = true;
     }
   }
 
 }

 onSortfn(){
  
   var table, rows, switching, i, x, y, shouldSwitch;
   table = document.getElementById("myTable");
   switching = true;
   /*Make a loop that will continue until
   no switching has been done:*/
   while (switching) {
     //start by saying: no switching is done:
     switching = false;
     rows = table.getElementsByTagName("TR");
     /*Loop through all table rows (except the
     first, which contains table headers):*/
     for (i = 1; i < (rows.length - 1); i++) {
       //start by saying there should be no switching:
       shouldSwitch = false;
       /*Get the two elements you want to compare,
       one from current row and one from the next:*/
       x = rows[i].getElementsByTagName("TD")[2];
       y = rows[i + 1].getElementsByTagName("TD")[2];
       //check if the two rows should switch place:
       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
         //if so, mark as a switch and break the loop:
         shouldSwitch= true;
         break;
       }
     }
     if (shouldSwitch) {
       /*If a switch has been marked, make the switch
       and mark that a switch has been done:*/
       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
       switching = true;
     }
   }
 
 }



customer_detail: any[]= [
    
     {
       "ID": "2",
       "lastname" : "Doe",
       "firstname" : "john",
       "email" : "john.doe@example.com",
       "active" : "yes",
       "datec" : "2007-08-30 23:23:13",
       "dateu" : "2008-08-08 12:28:24",
       "rating" : "4"
     },
     
     {
       "ID": "1",
       "lastname" : "Feraro",
       "firstname" : "richard",
       "email" : "richard.feraro@example.com",
       "active" : "yes",
       "datec" : "2010-05-10 15:25:47",
       "dateu" : "2010-05-10 15:25:48",
       "rating" : "2"
     },
     
     {
       "ID": "4",
       "lastname" : "dela Cruz",
       "firstname" : "juan",
       "email" : "juan@example.com",
       "active" : "yes",
       "datec" : "2010-08-17 12:13:05",
       "dateu" : "2010-08-17 12:13:05",
       "rating" : "3"
     },
   
     {
       "ID": "3",
       "lastname" : "dela Cruzx",
       "firstname" : "juan",
       "email" : "juanx@example.com",
       "active" : "yes",
       "datec" : "2010-08-17 12:19:40",
       "dateu" : "2010-08-17 12:19:40",
       "rating" : "1"
     },
     
   
     {
       "ID": "5",
       "lastname" : "dela Cruzv",
       "firstname" : "juan",
       "email" : "sample@example.com",
       "active" : "yes",
       "datec" : "2010-08-17 12:34:48",
       "dateu" : "2010-08-17 12:34:48",
       "rating" : "2"
     }
   
   ]
   
   
   
   
   
   
   
   }
   


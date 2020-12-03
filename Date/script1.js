function diff(){
    var a = document.getElementById('Date1').value;
    var b = document.getElementById('Date2').value;
    var date1 = new Date(a);
    var date2 = new Date(b);
    var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// To calculate the no. of days between two dates 
    var Diff = Difference_In_Time / (1000 * 3600 * 24); 
  
//To display the final no. of days (result)   

    var h1 = document.createElement('h1');
    var result = document.createTextNode( Diff );
    h1.setAttribute('id', 'Diff');
    h1.appendChild(result);
    document.getElementById('flex-box-result').appendChild(h1);

}

function reset(){
    alert('hi')
}

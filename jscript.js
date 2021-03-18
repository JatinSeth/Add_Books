// Objects Constructors
function Book(name,auth,price){
    this.bookname=name;
    this.bookauthor=auth;
    this.bookprice=price
}
//prototype methods

function Control(){}

//adding to Table
Control.prototype.addToTable = function (book){
let tr=document.createElement('tr'),
    td1=document.createElement('td'),
    td2=document.createElement('td'),
    td3=document.createElement('td'),
    td4=document.createElement('td'),
    cross=document.createElement('a');
          cross.className='cross';
          cross.title="delete";
          cross.href="#";

 td1.appendChild(document.createTextNode(book.bookname));
 td2.appendChild(document.createTextNode(book.bookauthor));
 td3.appendChild(document.createTextNode(book.bookprice));
 td4.appendChild(cross);

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
document.querySelector('tbody').appendChild(tr);

}

Control.prototype.showMessage =function(msg,color){
    let main=document.querySelector('#main');
    let form=document.querySelector('.form');
    let banner=document.createElement('h3');
    banner.appendChild(document.createTextNode(msg));
    banner.style.backgroundColor=color;
    banner.style.color='white';
    banner.style.textAlign='left';
    banner.style.padding='5px';
    main.insertBefore(banner,form);
    setTimeout(con.removeMsg,2000);
    }
    
// Delete a Book
Control.prototype.deleteBook=function(e){
    if(e.target.className==='cross'){
         e.target.parentElement.parentElement.remove();
         con.showMessage('Book Deleted','green');
    }
   }
   
Control.prototype.removeMsg = function(){
    document.querySelector('h3').remove();
    }
    let con= new Control();  

// UI EVENTS
document.querySelector('#submit').addEventListener('click',createBook);
document.querySelector('body').addEventListener('click',con.deleteBook);




//UI Functions
function createBook(e){
  let bname=document.querySelector('#bname'),
      author=document.querySelector('#author'),
      price=document.querySelector('#price');


   if((bname.value==='')&&(author.value==='')&&(price.value===''))
      {
        con.showMessage('Enter the Fields','red');
      }
else {
      let b1=new Book(bname.value,author.value, price.value);
      con.addToTable(b1);
      con.showMessage('Book Added','green');
      bname.value=author.value=price.value='';
    
}
e.preventDefault();

}











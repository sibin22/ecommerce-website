
                
            

var bt=document.getElementsByClassName("btn cart-btn")
function change() {
    
var btnd = document.getElementById('cbtn'); 
btnd.innerHTML ='<span><i class="bi bi-cart-check"></i>&nbsp;added</span>'
 


    var img = document.getElementsByClassName("active")[0].src
    var title = document.getElementsByClassName("product-brand")[0].innerHTML
    var size = document.getElementsByClassName("size-radio-btn check")[0].innerHTML
    var qty = document.getElementsByClassName("qts")[0].innerHTML
    var price = document.getElementsByClassName("product-price")[0].innerHTML
    addto(img, title, size, qty, price)
}

function addto (img,title,size,qty,price)
{

    var obf={'pic':img,'head':title,'siz':size,"qt":qty,"pr":price}

   
 localStorage.setItem('ott', JSON.stringify(obf));

  

}
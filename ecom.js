
			
	      
    window.addEventListener('load',()=>
    {
        var yt=document.getElementById("num")
    
        
           if(localStorage.length==0){
           yt=style.visibility="None"
           }
           else{
           yt.innerHTML=localStorage.length
    
           }})
           function carts() 
           {
 	     document. getElementById("id1") 
       location. href ="./cart.html";}
  
  function hamb() {

  var x = document.getElementById("ul1").style;
  var y = document.getElementById("id1").style;
  var z = document.getElementById("id2").style;
  var w = document.getElementById("id3").style;

  if (x.display === "block") {
    x.display = "none";
  } else {
    x.display = "block";
  }
  if (y.display === "block") {
    y.display = "none";
  } else {
    y.display = "block";
  }
  if (z.display === "block") {
    z.display = "none";
  } else {
    z.display = "block";
  }
  if (w.display === "block") {
    w.display = "none";
  } else {
    w.display = "block";
  }
  }
 





fetch("products.json")
.then(Response=>Response.json())
.then( (data)=>{


    
for(let i=0;i<data.length;i++)
   {        var li = document.createElement('div');
            li.classList.add("cards");
        

          li.innerHTML = `

    
	
        <img class="card-img-top" src="  ${data[i].image}">	
        <div class="card-img-overlay d-flex justify-content-end" style="height:25px";>
        
                <i class="bike bi-heart-fill" id="like" ></i>
            
          </div>
            <div class="card-body" id="card-body">   
     <a href="./product.html" class="stretched-link" ></a>
                    <div class="product-detail">
                <b>${data[i].title}</b>
                <span class="badge " style="background-image: linear-gradient(to right, rgb(106, 249, 106), rgba(49, 255, 69, 0.997), rgb(25, 189, 0));">New</span>
        </div>

        <div class="product-caption">
        ${data[i].description}
          </div>
    <span class="product-rating">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill grey"></i>
          </span>
        
    
            <div class="product-price" style="color:green ; font-size: 15px;font-weight: bold;">
                Rs  ${data[i].price}/- </div>
                            
    </div>
`

        var bb = document.getElementById("deck")
            bb.append(li);
      
            var bt=document.getElementsByClassName("stretched-link")

            var btn=bt[i]
            btn.addEventListener('click',get)
            
            function get(data)
            {
              
      
                var image1 = document.getElementsByClassName("card-img-top")[i].src;
                var price1 = document.getElementsByClassName("product-price")[i].innerHTML;  
                var title1 = document.getElementsByClassName("product-detail")[i].innerHTML;  
                var desc1 = document.getElementsByClassName("product-caption")[i].innerHTML;  
    
            
                const ttf={'image':image1,'price':price1,'title':title1,'desc':desc1}
             localStorage.setItem('fff',JSON.stringify(ttf))
     }
            
      
     var wish=document.querySelectorAll('.bike');
     for (let index = 0; index < wish.length; index++) {
      like= wish[index];
      
     }
     like.addEventListener('click', (e) => {
      var liked = e.target;
      
      if(liked.style.color=='rgb(255, 28, 115)')
      {liked.style.color= 'rgb(187, 185, 185)'}
     else{liked.style.color='rgb(255, 28, 115)'}
      
    });  

    
    
    }
        
  }
)



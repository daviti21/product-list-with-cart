const buyBtn = document.querySelectorAll(".addD");
const orderCont = document.querySelector(".order-cont")
buyBtn.forEach(el => {
    el.addEventListener("click", function(){
          el.style.display = "none";
     const parentDiv = el.closest(".des-box");
     const change = parentDiv.querySelector(".change");
     change.style.display = "flex";
 
     const decrease = change.querySelector(".decrease");
     const increase = change.querySelector(".increase");
     const quantity = change.querySelector(".quantity");
     decrease.textContent = "-"
     increase.textContent = "+"
      quantity.value = 0;
       const cartNumb = document.querySelector("#cart-numb");
     
     increase.addEventListener("click", () => {
        quantity.value = parseInt(quantity.value) + 1
        cartNumb.textContent = parseInt(cartNumb.textContent) + 1
     })
      
      decrease.addEventListener("click", () => {
        const num = parseInt(quantity.value)
         if(num >= 1){
            quantity.value = num - 1
            cartNumb.textContent = parseInt(cartNumb.textContent) - 1
         }  
         
     })
     const orderBox = document.querySelector(".order-box");
    orderBox.style.display = "none";
    })
    
    

    })
 

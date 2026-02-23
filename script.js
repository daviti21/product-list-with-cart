 const body = document.querySelector("body");
const cont = document.querySelector(".cont")
const buyBtn = document.querySelectorAll(".addD");
const orderCont = document.querySelector(".order-cont")
const orderSpace = document.querySelector(".order-space");
const totOrder = document.querySelector(".tot-order");
orderSpace.insertBefore(totOrder, orderSpace.firstChild)
buyBtn.forEach(el => {

  const parentDiv = el.closest(".des-box");
     const change = parentDiv.querySelector(".change");
const decrease = change.querySelector(".decrease");
     const increase = change.querySelector(".increase");
     const quantity = change.querySelector(".quantity");
 
 
  

    el.addEventListener("click", function(){
      
          el.style.display = "none";
          orderSpace.style.display = "flex";
     change.style.display = "flex";
     decrease.textContent = "-"
     increase.textContent = "+"
     quantity.value = 1;
     cartNumb.textContent = parseInt(quantity.value )   
              
     const orderBox = document.querySelector(".order-box");
    orderBox.style.display = "none";
    
    
     const productBox = document.createElement("div");
     productBox.classList.add("productdiv");
      orderBox.before(productBox);

     const productLeft = document.createElement("div");
    productLeft.classList.add("leftDiv");
    productBox.appendChild(productLeft);

     const proName = document.createElement("p")
     proName.classList.add("namepro");
     productLeft.appendChild(proName)

     const downDiv = document.createElement("div");
     downDiv.classList.add("down");
     productLeft.appendChild(downDiv)

     const productRight = document.createElement("div");
    productRight.classList.add("rightDiv");
    productBox.appendChild(productRight);

     const deleteBtn = document.createElement("button");
     deleteBtn.type = "button";
    deleteBtn.classList.add("dlbtn");
    productRight.appendChild(deleteBtn)

    const numPro = document.createElement("p");
    downDiv.appendChild(numPro);
    numPro.classList.add("pronum");

    const proPrice = document.createElement("p");
    downDiv.appendChild(proPrice);
    proPrice.classList.add("pricepro");

    const fullPrice = document.createElement("p");
    downDiv.appendChild(fullPrice);
      const parent = el.closest(".des-box")
    const name = parent.querySelector(".full-name").textContent;
    fullPrice.classList.add("pricefull");

const priceText = parent.querySelector(".price").textContent;
const price = priceText.replace(/[^0-9.$]/g, "");
     numPro.textContent = parseInt(quantity.value) + "x";

function updateTotal() {
    const allProducts = document.querySelectorAll(".productdiv");
    let sum = 0;
    allProducts.forEach(pd => {
        const pdPrice = pd.querySelector('.pricefull');
        const numeric = parseFloat(pdPrice.textContent.replace(/[^0-9.]/g, "")) || 0;
        sum += numeric;
    
    });

    const totalPriceEl = document.querySelector(".tot-order .sum");
    totalPriceEl.textContent = "$" + sum.toFixed(2);
}
 function update(){
     const q  = parseInt(quantity.value) || 1;
      numPro.textContent = q + "x";
   
    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
    fullPrice.textContent = "$" + (numericPrice * q).toFixed(2);
 
     updateTotal()
}
 
 document.addEventListener("click", function(e){
   if(e.target.classList.contains("dlbtn")){
     
        updateTotal();
   }
        })

     
      
      decrease.onclick = () => {
       if( parseInt(quantity.value) > 1){
            quantity.value =  parseInt(quantity.value) - 1;
         cartNumb.textContent = parseInt(cartNumb.textContent) - 1
        update()
       
       }
     }

     
      
      increase.onclick = () => {
        
            quantity.value =  parseInt(quantity.value) + 1;
          cartNumb.textContent = parseInt(cartNumb.textContent) + 1
update()
       }
  
    
function deleteOrder(){
     deleteBtn.addEventListener("click", () => {
      productBox.remove()
       el.style.display = "flex";
      change.style.display = "none"
          cartNumb.textContent = parseInt(cartNumb.textContent) - parseInt(quantity.value)   
      quantity.value = 0;
     })
   }
    deleteOrder()
   
    proName.textContent = name;
    proPrice.textContent = `@ ${price}`;    
     
    update()
    
    })
      
       const cartNumb = document.querySelector("#cart-numb");
       const orderbtn = document.document.querySelector(".order-btn")
       function handleOrder(){
          const allProduct = document.querySelectorAll(".productdiv");
          if(allProduct.length > 0 ){
         
          }else{
              orderbtn.removeEventListener("click", handleOrder);
          }
       }
  
        updateTotal()
    })

     
    
     

    
 

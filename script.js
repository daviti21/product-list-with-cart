 const body = document.querySelector("body");
const cont = document.querySelector(".cont")
const buyBtn = document.querySelectorAll(".addD");
const orderCont = document.querySelector(".order-cont")
const orderSpace = document.querySelector(".order-space");
const totOrder = document.querySelector(".tot-order");
const orderPage = document.querySelector(".orderpage");
  const cartNumb = document.querySelector("#cart-numb");
  const orderbtn = document.querySelector(".order-btn")
  const lastPrice = document.querySelector(".listtotal");
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

     
  
 function update(){
     const q  = parseInt(quantity.value) || 1;
      numPro.textContent = q + "x";
      shelfNum.textContent = q + "x";
   
    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
    const total = (numericPrice * q).toFixed(2);
    fullPrice.textContent = "$" + total;
  shelfPrice.textContent = "$" + total;
     updateTotal()
}
 
  

     
      
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
      updateTotal();
       el.style.display = "flex";
      change.style.display = "none"
          cartNumb.textContent = parseInt(cartNumb.textContent) - parseInt(quantity.value)   
      quantity.value = 0;
     })
   }
    deleteOrder()
   
    proName.textContent = name;
    proPrice.textContent = `@ ${price}`;    
     
    
    const orderShelf = document.createElement("div");
        orderShelf.classList.add("shelfDiv");
        document.querySelector(".products-list").appendChild(orderShelf);
        
        const leftShelf = document.createElement("div");
        orderShelf.appendChild(leftShelf)
        leftShelf.classList.add("leftShelf");
         
        const shelfImg = document.createElement("div");
         leftShelf.appendChild(shelfImg);
         shelfImg.classList.add("shelfimg");
        const originalImg = parent.querySelector(".des-img").src;
       shelfImg.style.backgroundImage = `url(${originalImg})`;

       const shelfInf = document.createElement("div");
       leftShelf.appendChild(shelfInf);
       shelfInf.classList.add("shelfinf");

       const shelfName = document.createElement("p");
       shelfName.classList.add("shelfname")
      shelfName.textContent =  parent.querySelector(".full-name").textContent;
      shelfInf.appendChild(shelfName)

      const shelfDown = document.createElement("div");
      shelfInf.appendChild(shelfDown);
      shelfDown.classList.add("shelfdown");

      const shelfNum = document.createElement("p");
      shelfDown.appendChild(shelfNum);
      shelfNum.classList.add("shelfnum");

      const shelfproductPrice = document.createElement("p");
      shelfDown.appendChild(shelfproductPrice);
      shelfproductPrice.classList.add("shelfproductprice");
   shelfproductPrice.textContent = `@ ${price}`;
         const rightShelf = document.createElement("div");
        orderShelf.appendChild(rightShelf)
      rightShelf.classList.add("rightShelf");
      const shelfPrice = document.createElement("p");
      shelfPrice.classList.add("shelfprice");
 
      rightShelf.appendChild(shelfPrice) 


     update()
    })
      
        
       function handleOrder(){
          const allProduct = document.querySelectorAll(".productdiv");
          if(allProduct.length > 0 ){
         orderPage.style.display = "flex";
          }else{
              orderbtn.removeEventListener("click", handleOrder);
          }
       }

       orderbtn.addEventListener("click", handleOrder)
        updateTotal()

         
    })

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
    lastPrice.textContent = "$" + sum.toFixed(2);
}

document.querySelector(".neworderbtn").addEventListener("click", () => {
    window.location.reload();
});
     
    
     

    
 

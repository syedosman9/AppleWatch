//header code
const $menuButton = document.querySelector(".menu-button");
const $mainNavigation = document.querySelector(".main-nav");
const $bag = document.querySelector(".bag");

 function clickMenuButton(){
    if($menuButton.classList.contains("-active")){
        $menuButton.classList.remove("-active")
        $mainNavigation.classList.remove("-active")
        $bag.classList.remove("-hidden") 
    } else{
        $menuButton.classList.add("-active")
        $mainNavigation.classList.add("-active")
        $bag.classList.add("-hidden")
    }
 }

 $menuButton.addEventListener("click", clickMenuButton)

//product 
const $bullet = document.querySelectorAll(".bullet");
let $bulletActive = document.querySelector(".bullet.-active");
let $productActive = document.querySelector(".color.-active");

function clickBullet(item){
    item.preventDefault();
    let $bulletClicked = this;
    $bulletActive.classList.remove("-active");
    $bulletClicked.classList.add("-active");
    $bulletActive = $bulletClicked;

    $productActive.classList.remove("-active");
    let idProduct = $bulletClicked.querySelector("a").getAttribute("href");
    let $targetProduct = document.querySelector(idProduct);
    $targetProduct.classList.add("-active");
    $productActive = $targetProduct;

}

$bullet.forEach((item) => {
    item.addEventListener("click", clickBullet);
})
//NOE LETS ADD JS TO OUR SECTION1 HEADER AND BUTTON

const one = document.querySelector(".section1");
const backBtn = document.querySelector(".backBtn");

//ADDING AN EVENT
window.addEventListener("scroll", () => {
    one.classList.toggle("scroll", window.scrollY > 150)

    //BACK TO TOP BUTTON

    if(scrollY > 250){
        backBtn.classList.add("show");
    }
        else{
            backBtn.classList.remove("show");
        }
    
        // NOW WHEN WE CLICK TO BACK BUTTON WE WANT TO GO TO TOP OF THE PAGE

        backBtn.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });
});
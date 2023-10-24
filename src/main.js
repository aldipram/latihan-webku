


const toggleButton = document.getElementById("hamburger");
        const menu = document.getElementById("menu");

        toggleButton.addEventListener("click", function() {
            toggleButton.classList.toggle("change")
            
            if (menu.style.display === "none" || menu.style.display === "") {
                menu.style.display = "block" ;
            } 
            else {
                menu.style.display = "none";
            }
        });

    
    

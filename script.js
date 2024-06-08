
document.addEventListener("DOMContentLoaded", function() {
    
    const imageContainers = document.querySelectorAll(".image-container");

    
    imageContainers.forEach(container => {
        container.addEventListener("click", function() {
            
            const overlayText = this.querySelector(".overlay .text");
            
            
            overlayText.textContent = "Clicked!";

            
        });
    });
});

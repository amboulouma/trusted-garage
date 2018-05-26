var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('car1');
var img2 = document.getElementById('car2');
var img3 = document.getElementById('car3');
var img4 = document.getElementById('car4');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

modal.onclick = function() { 
    modal.style.display = "none";
}

var i = 0

$("#add").on('click', function(){
    if (i%2 == 0){
        $("#form").css("display","block")
        $("#add-img").attr("src","res/check.svg")
        $(".hr-form").css("display","block")
        $("html, body").animate({ scrollTop: $(document).height() - 725}, 1000);
        i++

    }
    else{
        $("#form").css("display","none")
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        $("#hr-form").css("display","none")
        $("#add-img").attr("src","res/add.png")
        $("#block5").css("display","flex")
        $("#chain5").css("display","flex")
        i++
        alert("Contract Hash - 0xA94C943B7b")
    }

})


var frame1 = document.getElementById("in_file_1")
var frame2 = document.getElementById("in_file_2")
var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")


// alert(1)
frame1.onchange = () => {
    img1.src = URL.createObjectURL(frame1.files[0]);
}
frame2.onchange = () => {
    img2.src = URL.createObjectURL(frame2.files[0]);
}
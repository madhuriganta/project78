var images =["https://thumbs.dreamstime.com/b/colorful-bright-artistic-drawing-cute-cheerful-boy-standing-ball-isolated-color-years-old-coloring-book-178213995.jpg" ,
"https://m.media-amazon.com/images/I/61M6NNQcnvL._AC_SS450_.jpg",
"https://image.shutterstock.com/image-vector/mommy-short-sleeve-clothing-angrily-260nw-777688810.jpg",
"https://thumbs.dreamstime.com/b/cartoon-father-son-icon-over-white-background-colorful-design-vector-illustration-cartoon-father-son-icon-flat-design-169226123.jpg",
"https://t3.ftcdn.net/jpg/02/59/80/56/360_F_259805610_zwLLYPs35RoaiaDESXJ2DCviM9yCbmJR.jpg",
"https://t4.ftcdn.net/jpg/02/78/83/91/360_F_278839152_Ukwi4hGIL5XxsQNUNDktRkd3TyTT7MXS.jpg" ];

var names = ["Rishi","Rocket","Mom","Father","superhero grandmother","Grand father"];

var i = 0;
function update()
{
  i++;
   var number_of_family_member_in_array=5
   if(i > number_of_family_member_in_array) 
   {
       i = 0;
   }
   var updatedImage = images[i]
   var updatedName = names[i]
   document.getElementById("family_member_image").src = updatedImage;
   document.getElementById("family_member_name").innerHTML = updatedName;
}
var images =["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Vipul Singla", "Rachna Singla", "Ishita Singla", "Riya Singla", "Krishna Singla"];

var i=0;
function update()
{
i++;
var numbers_of_family_member_in_array = 5;
if(i>numbers_of_family_member_in_array){
i++
}

var updated_Name=names[i];
var updated_Images=names[i];

document.getElementById("family_member_image").src=updated_Images;
document.getElementById("family_member_name").src=updated_Name;
}
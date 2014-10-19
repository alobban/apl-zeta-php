/**
 * @author Andrew
 */

var bkgdImage = document.getElementById("cover");
console.log(bkgdImage);

var input = "../apl-zeta/img/carousel/";

var imageArray = ["aplchi1.png","aplchi2.png","aplchi3.png","aplchi4.png","aplchi5.png"];
var imageIndex = 0;

function chBackground() {
	console.log(imageArray[imageIndex]);
	bkgdImage.style.background = "url(../apl-zeta/img/carousel/" + imageArray[imageIndex] + ")";
	bkgdImage.style.backgroundPosition = "center center";
	bkgdImage.style.backgroundAttachment = "fixed";
	bkgdImage.style.backgroundSize = "cover";
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

function readFilenames(loc) {
	if (loc.files) {
		var reader = new FileReader();
		console.log(reader.loc);
	}
}

window.onload = function() {
	 setInterval(chBackground, 10000); 
	/* readFilenames(input); */
};
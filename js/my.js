/**
 * @author Andrew
 */

$(document).ready(function() {
	var behindImage = document.getElementById('cover-1');
	var frontImage = document.getElementById('cover-2');
	
	var input = "./img/carousel/";
	var imageArray = ["aplchi1.png","aplchi2.png","aplchi3.png","aplchi4.png","aplchi5.png"];
	var imageIndex = 0;
	var counter = 0;

	function initializer() {
		behindImage.style.background = "url(./img/jaguarHiRes.png) no-repeat center center scroll";
		behindImage.style.display = "block";
		behindImage.style.position = "absolute";
		behindImage.style.height = "100%";
		behindImage.style.width = "100%";
		behindImage.style.paddingTop = "100px";
		behindImage.style.backgroundSize = "cover";
		behindImage.style.mozBackgroundSize = "cover";
		behindImage.style.oBackgroundSize = "cover";
		behindImage.style.webkitBackgroundSize = "cover";

		$(frontImage).css("display", "none");
		frontImage.style.background = "url(" + input + imageArray[imageIndex] + ") no-repeat center center scroll";
		frontImage.style.position = "absolute";
		frontImage.style.height = "100%";
		frontImage.style.width = "100%";
		frontImage.style.paddingTop = "100px";
		frontImage.style.backgroundSize = "cover";
		frontImage.style.mozBackgroundSize = "cover";
		frontImage.style.oBackgroundSize = "cover";
		frontImage.style.webkitBackgroundSize = "cover";
		$(frontImage).fadeIn(3000);
	}

	function carousel() {
		if (counter < 1) {
			initializer();
			counter++;
		} else {
			changeImage();
		}
	} 

	function changeImage() {
		behindImage.style.background = "url(" + input + imageArray[imageIndex] + ") no-repeat center center scroll";
		behindImage.style.display = "block";
		behindImage.style.position = "absolute";
		behindImage.style.height = "100%";
		behindImage.style.width = "100%";
		behindImage.style.paddingTop = "100px";
		behindImage.style.backgroundSize = "cover";
		behindImage.style.mozBackgroundSize = "cover";
		behindImage.style.oBackgroundSize = "cover";
		behindImage.style.webkitBackgroundSize = "cover";

		$(frontImage).css("display", "none");
		imageIndex = (imageIndex + 1) % imageArray.length;
		frontImage.style.background = "url(" + input + imageArray[imageIndex] + ") no-repeat center center scroll";
		frontImage.style.position = "absolute";
		frontImage.style.height = "100%";
		frontImage.style.width = "100%";
		frontImage.style.paddingTop = "100px";
		frontImage.style.backgroundSize = "cover";
		frontImage.style.mozBackgroundSize = "cover";
		frontImage.style.oBackgroundSize = "cover";
		frontImage.style.webkitBackgroundSize = "cover";
		$(frontImage).fadeIn(3000);
	}

	setInterval(carousel, 10000);
	
});
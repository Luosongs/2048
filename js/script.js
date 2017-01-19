window.onload = function(){
	console.log("网页可见区域宽：" + document.body.clientWidth);
console.log("网页可见区域高：" + document.body.clientHeight);
console.log("网页可见区域宽：" + document.body.offsetWidth );
console.log("网页可见区域高：" + document.body.offsetHeight);
console.log("网页正文全文宽：" + document.body.scrollWidth);
console.log("网页正文全文高：" + document.body.scrollHeight);
console.log("网页被卷去的高：" + document.body.scrollTop);
console.log("网页被卷去的左：" + document.body.scrollLeft);
console.log("网页正文部分上：" + window.screenTop);
console.log("网页正文部分左：" + window.screenLeft);
console.log("屏幕分辨率的高：" + window.screen.height);
console.log("屏幕分辨率的宽：" + window.screen.width);
console.log("屏幕可用工作区高度：" + window.screen.availHeight);
console.log("屏幕可用工作区宽度：" + window.screen.availWidth);
	
	var music=document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];
	
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
	},false);
	music.onclick = function() {
		if (audio.paused) {
			audio.play();
			this.style.animationPlayState = "running";
		}else{
			audio.pause();
			this.style.animationPlayState = "paused";
		};
	};
	page1.addEventListener("click",function(event){
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top = "100%";
		setTimeout(function(){
			page2.setAttribute("class","page fadeOut" );
			page3.setAttribute("class","page fadeIn" );
		},5500)
	},false);
};

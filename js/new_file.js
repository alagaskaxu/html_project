		let box1 = document.querySelectorAll(".box1")
		for (let i = 0;i < box1.length;i++){
			box[i].onmouseenter = function(event){
				let ripple =box[i].querySelector(".ripple");
				ripple.classlist.add("animation");
				ripple.style.width = this.offsetWidth + "px";
				ripple.style.height = this.offsetHeight + "px";
				ripple.Style.top = -(this.offsetHeight -event.offsteY)+"px";
				ripple.Style.left = -(this.offsetWidth/2 -event.offsteX)+"px";
				setTimeout(function(){
					ripple.classList.remove("animation");
				},500)
				}
		}
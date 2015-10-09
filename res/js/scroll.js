function HorizontalScroll (idName) {
	this.initialize.apply(this, arguments);
}

HorizontalScroll.prototype={
	initialize:function(id){
		var _this = this;
		this.wrap=typeof id==="string"?document.getElementById(id):id;
		this.oUl=this.wrap.getElementsByTagName("ul")[0];
		this.aLi=this.wrap.getElementsByTagName("li");
		this.List=[];
		this.middle = 0;
		this.startIndex = _this.middle,
		this.endIndex = _this.middle;
		this.addClass(_this.middle);
		this._doPre=function(){
            return _this.doPre.apply(_this);
        };
		this._doNext=function(){
            return _this.doNext.apply(_this);
        };
		//_this.doPre();
		//_this.doNext();
	},

	addClass:function(middleIndex){
		var _this=this;
		
		for(var i =0; i<_this.aLi.length;i++){		
			$(_this.aLi[i]).find("img").removeClass("img-middle").removeClass("img-left").removeClass("img-right");
			$(_this.aLi[i]).hide();
		}

		if(middleIndex == 0 ){
			startIndex = parseInt(_this.aLi.length-1);
			endIndex = parseInt(middleIndex+1);				
		}
		else if(middleIndex == parseInt(_this.aLi.length-1)){
			startIndex = parseInt(middleIndex-1);
			endIndex = parseInt(0);
		}
		else{
			startIndex = parseInt(middleIndex-1);
			endIndex = parseInt(middleIndex+1);
		}
		//left
		$(_this.aLi[startIndex]).show().find("img").removeClass().addClass("img-left").addClass("img-responsive");
		//middle
		$(_this.aLi[middleIndex]).show().find("img").removeClass().addClass("img-middle").addClass("img-responsive");
		//right
		$(_this.aLi[endIndex]).show().find("img").removeClass().addClass("img-right").addClass("img-responsive");


		//add event
		$(_this.wrap).unbind();
		$(_this.wrap).on("swiperight",function(){	
			_this.doPre();
		});
		$(_this.wrap).on("swipeleft",function(){
			_this.doNext();
		});

	},

	doPre:function(){
		var _this = this;
		_this.middle = startIndex;
		_this.addClass(_this.middle);
		console.log("turn left");

			
	},

	doNext:function(){
		var _this = this;
		_this.middle = endIndex;
		_this.addClass(_this.middle);
		console.log("turn right");
	}

}
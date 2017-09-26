//var device = layui.device();
//document.write(JSON.stringify(device));
;!function(window){
	var indexs = {
		getX : function(obj){
			var parObj=obj;
			var left=obj.offsetLeft;
			while(parObj=parObj.offsetParent){
				left+=parObj.offsetLeft;
			}
			return left;
		},
		bindEvent : function(){
			$(".blog-nav").on("mousemove",function(e){
				var lefts = indexs.getX(this);
				var liwidth = $(e.target).width() + parseInt($(e.target).css("padding-left"))*2;
				var nums = event.clientX - lefts + document.documentElement.scrollLeft - liwidth/2 - 10;
				var liwidths = 0;

				for(var i = 0;i < $(this).find(".fa").length;i++){
					liwidths += $(".blog-nav li").eq(i).width();
				}
				if(nums < 0){
					nums = 0;
				}else if(nums > liwidths){
					nums = liwidths;
				}
				console.log($(e.target).width());
//				console.log(nums);
				$(this).find("li.nav-special").css({"left":nums,"width":liwidth});
			});
		}
	}
	window.indexs = indexs;
}(window);



$(function(){
	indexs.bindEvent();
});


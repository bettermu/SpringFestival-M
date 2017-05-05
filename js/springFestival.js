(function($,w,doc){
	/*tab栏切换*/
	(function(){
		/*初始化*/
		$('#tab>div').eq(0).css('display','block').siblings().css('display','none');
		$('#footer ul li').on('tap',function(){
			var index=$(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$('#tab>div').eq(index).css('display','block').siblings().css('display','none');
		})
	})();
	/*热销页面轮播切换*/
	(function(){
		var num=0;
		var len=$('#hot ul li').length;
		$('#hot ul li').eq(num).css('display','block');
		$('#hot .prev').on('tap',function(){
			$(this).addClass('active');
			$('#hot .next').removeClass('active');
			num= --num<0?len-1:num;
			change(num);
		});
		$('#hot .next').on('tap',function(){
			$(this).addClass('active');
			$('#hot .prev').removeClass('active');
			num= ++num>len-1?0:num;
			change(num);
		})

		function change(num){
			$('#hot ul li').eq(num).css('display','block').siblings().css('display','none');
		}
	})();

})(Zepto,window,document)
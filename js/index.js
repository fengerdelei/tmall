// window.onload=function(){
// 	var bt=document.getElementsByClassName('bt');
// 	var yc=document.getElementsByClassName('yc');
// 	for(var i=0;i<bt.length;i++){
// 		bt[i].index=i;
// 		bt[i].onmouseover=function(){
// 			yc[this.index].style.display='block';
// 		};
// 		bt[i].onmouseout=function(){
// 			yc[this.index].style.display='none';
// 		};
// 	}
// 	document.onmousedown=function(e){
// 		e.preventDefault();
// 	};
// };
$(function(){
	$('.bt').hover(
		function(){
			$(this).find('.yc').show();
		},
		function(){
			$(this).find('.yc').hide();
		}
	);	
	var index=0;
	var dict=['./image/TB1awYlIVXXXXbAaXXXgalVIXXX-810-480.jpg','./image/tt1.jpg','./image/tt2.jpg','./image/tt3.jpg','./image/tt4.jpg','./image/tt5.jpg'];
	$('.main-banner li').click(function(){	
		clearInterval(timerId);
		$($('.main-banner li')).removeClass('red');	
		var t=$(this).find('span').html()-1;
		$('.main-banner img').attr('src',dict[t]);
		$($('.main-banner li')[t]).addClass('red');
	});
	$('.yi').hover(
		function(){
			$(this).animate({
				marginLeft:'-5px'
			},300)
		},
		function(){
			$(this).animate({
				marginLeft:'0px'
			},300)
		}
	);
	$('.zuo-bt').each(function(i){
		$(this).data('index',i)
	});
	$('.you-bt').each(function(i){
		$(this).data('index',i)
	});
	var n=0;
	$('.zuo-bt').click(function(){
		var i=$(this).data('index');
		clearInterval(i+2);
		n++;
		$($(this).parent().find('li')[n-1]).fadeOut(1000,function(){
			var el=$(this).parent().find('li')[n];
			$(el).fadeIn(1000);
		});
		if(n==3){
			n=0;
		}
	});
	$('.you-bt').click(function(){
		var i=$(this).data('index');
		clearInterval(i+2);
		n--;
		$($(this).parent().find('li')[n+1]).fadeOut(1000,function(){
			var el=$(this).parent().find('li')[n];
			$(el).fadeIn(1000);
		});
		if(n==-1){
			n=2;
		}
		setInterval(i+2);
	});
	$($('.main-banner li')[0]).addClass('red');
	var lunbo=function(){
		$($('.main-banner li')[index-1]).toggleClass('red');
		$($('.main-banner li')[5]).removeClass('red');
		$('.main-banner img').attr('src',dict[index]);
		$($('.main-banner li')[index]).addClass('red');
		index++;
		if(index==6){
			index=0;
		}	
	};
	var timerId=setInterval(lunbo,3000);
	var aa1=0;
	var l1=function(){
		aa1++;
		$($('#a1 li')[aa1-1]).fadeOut(1000,function(){
			var el=$('#a1 li')[aa1];
			$(el).fadeIn(1000);
		});
		if(aa1==3){
			aa1=0;
		}
	};
	var ti=setInterval(l1,4000);
	var aa2=0;
	var l2=function(){
		aa2++;
		$($('#a2 li')[aa2-1]).fadeOut(1000,function(){
			var el=$('#a2 li')[aa2];
			$(el).fadeIn(1000);
		});
		if(aa2==3){
			aa2=0;
		}
	};
	var ti=setInterval(l2,4000);
	var aa3=0;
	var l3=function(){
		aa3++;
		$($('#a3 li')[aa3-1]).fadeOut(1000,function(){
			var el=$('#a3 li')[aa3];
			$(el).fadeIn(1000);
		});
		if(aa3==3){
			aa3=0;
		}
	};
	var ti=setInterval(l3,4000);
	var aa4=0;
	var l4=function(){
		aa4++;
		$($('#a4 li')[aa4-1]).fadeOut(1000,function(){
			var el=$('#a4 li')[aa4];
			$(el).fadeIn(1000);
		});
		if(aa4==3){
			aa4=0;
		}
	};
	var ti=setInterval(l4,4000);
	var aa5=0;
	var l5=function(){
		aa5++;
		$($('#a5 li')[aa5-1]).fadeOut(1000,function(){
			var el=$('#a5 li')[aa5];
			$(el).fadeIn(1000);
		});
		if(aa5==3){
			aa5=0;
		}
	};
	var ti=setInterval(l5,2000);
	var aa6=0;
	var l6=function(){
		aa6++;
		$($('#a6 li')[aa6-1]).fadeOut(1000,function(){
			var el=$('#a6 li')[aa6];
			$(el).fadeIn(1000);
		});
		if(aa6==3){
			aa6=0;
		}
	};
	var ti=setInterval(l6,2000);
	$(document).mousedown(function(e){
		e.preventDefault();
	});
	$(window).scroll(function(){
		if($(window).scrollTop()>1000){
			$('.xuanfu1').show();
			$('.top').show();
		}else{
			$('.xuanfu1').hide();
			$('.top').hide();
		}
	});
	$(window).scroll(function(){
		if($(window).scrollTop()>900&&$(window).scrollTop()<6700){
			$('.mui-lift').show();
			// $($('.mui-lift-nav')[0]).addClass('red');
			$('.mui-lift-nav').removeClass('red');
			var n=$(window).scrollTop()-1000;
			var i=Math.floor(n/480);
			console.log(n,i);
			$($('.mui-lift-nav')[i]).addClass('red');
		}else{
			$('.mui-lift').hide();
		}
	});	
	$('.top').click(function(){
		$({aa:$(window).scrollTop()}).animate({aa:0},{
			duration:1000,
			step:function(){
				$(window).scrollTop(this.aa);
			}
		})
	});
	$('.mui-lift-nav').each(function(i){
		$(this).data('n',i);
	});
	$('.mui-lift-nav').click(function(){
		$('.mui-lift-nav').removeClass('red');
		var i=$(this).data('n');
		$(this).addClass('red');
		var top=$($('.floor-content')[i]).offset().top-50;
		$({t:$(window).scrollTop()}).animate({t:top},{
			duration:500,
			step:function(){
				$(window).scrollTop(this.t);
			}
		})	
	});
});
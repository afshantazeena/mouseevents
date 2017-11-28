
			$(document).ready(function(){
				$('#start').click(function(){
					alert('Hello world');
					var div=$('#new');
					//div.animate({color: "orange"}, 500);
					//div.animate({height:300},2000);
					//div.animate({width:300},2000);
					
					div.queue(function(){
						div.css('color','red');
						div.dequeue();
						})
						;
					//div.animate({height:100},2000);
					//div.animate({width:100},2000);
					
					});
					
				});
				
				
				
				$('#stop').click(function(){
						div.clearQueue();
						});
				
			});
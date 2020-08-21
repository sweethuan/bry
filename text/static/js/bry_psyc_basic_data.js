$(function(){
	
	
	
	// 密码设置小眼睛
	$("#set_passbtn").on("click",function(){
		$("#set_showpass").prop("type","text");
		$("#set_passbtn").hide()
		$("#set_passbtn2").show()
	});
	$("#set_passbtn2").on("click",function(){
		$("#set_showpass").prop("type","password");
		$("#set_passbtn2").hide()
		$("#set_passbtn").show()
	});
	// 密码绑定小眼睛
	$("#bin_passbtn").on("click",function(){
		$("#bin_showpass").prop("type","text");
		$("#bin_passbtn").hide()
		$("#bin_passbtn2").show()
	});
	$("#bin_passbtn2").on("click",function(){
		$("#bin_showpass").prop("type","password");
		$("#bin_passbtn2").hide()
		$("#bin_passbtn").show()
	});
	
	// 协议钩钩
	$("#agree_show").on("click",function(){
		$("#agree_hide").show()
		$("#agree_show").hide()
	});
	$("#agree_hide").on("click",function(){
		$("#agree_hide").hide()
		$("#agree_show").show()
	});
	
	//性别单选框
	$(".bry_data_basic_inpt_sex>div").on("click",function(){
		$(this).children('div').css('background-color','#059fbf')
		$($(this).siblings()).children('div').css('background','none');
	});
	
	
	//证件照删除修改
	$('#remove1').on('click',function(){
		$('#id_card1').children('img').remove()
	})
	$('#change1').on('click',function(){
		$('#file1').click()
	
	})
	
	

	
	//确认函删除修改
	$('#remove3').on('click',function(){
		$('#id_card3').children('img').remove()
	})
	$('#change3').on('click',function(){
		$('#file3').click()
	
	})
	
	
	
	
	// 协议钩钩
	$("#agree_show2").on("click",function(){
		$("#agree_hide2").show()
		$("#agree_show2").hide()
	});
	$("#agree_hide2").on("click",function(){
		$("#agree_hide2").hide()
		$("#agree_show2").show()
	});
	
})
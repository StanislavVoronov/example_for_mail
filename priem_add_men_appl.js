'use strict'
var moduleDirAdmGroup=
{
	admGroups:[],
	mapDir:[],
	addNewAdm:function(objectAdm)
	{
		this.admGroups.push(objectAdm);
	},
	addNewDir:function(objectDir)
	{
		this.mapDir.push(objectDir);
	},
	delAppl:function(adm_id,id_dir)
	{
			this.mapDir.splice(this.mapDir.indexOf(id_dir),1);
			this.admGroups.splice(this.admGroups.indexOf(adm_id),1);
	},
	showMes:function(a,b)
	{
		alert(a);
		alert(b);
	}
}


$("body").data("timework",new Date().getTime());
///скрывает предыдущий раздел после перехода на следующий
$('#tab-2 .content,#tab-3 .content,#tab-4 .content').one('click', function(e){
        e.preventDefault();
	$(this).parent().prev().find(".content").slideUp("slow");
	$("html, body").animate({ scrollTop: 0 }, "slow");
})
//При закрытии спрашивает о потере данных
window.addEventListener("beforeunload", function (e) {

	var confirmationMessage = "\Закрытие страницы. Все данные будут утерены...";
	e.returnValue = confirmationMessage;     // Gecko and Trident
	return confirmationMessage;              // Gecko and WebKit
});
  
var info_pasports=[
		{name:"Республика Адыгея (Адыгея)",value:79},
		{name:"Республика Алтай",value:84},
		{name:"Республика Башкортостан",value:80},
		{name:"Республика Бурятия",value:81},
		{name:"Республика Дагестан",value:82},
		{name:"Республика Ингушетия",value:26},
		{name:"Кабардино-Балкарская Республика",value:83},
		{name:"Республика Калмыкия",value:85},
		{name:"Карачаево-Черкесская Республика",value:91},
		{name:"Республика Карелия",value:86},
		{name:"Республика Коми",value:87},
		{name:"Республика Марий Эл",value:88},
		{name:"Республика Мордовия",value:89},
		{name:"Республика Саха (Якутия)",value:98},
		{name:"Республика Северная Осетия-Алания",value:90},
		{name:"Республика Татарстан (Татарстан)",value:92},
		{name:"Республика Тыва",value:93},
    {name:"Республика Крым",value:39},
		{name:"Удмуртская Республика",value:94},
		{name:"Республика Хакасия",value:95},
		{name:"Чеченская Республика",value:96},
		{name:"Чувашская Республика - Чаваш республики",value:97},
		{name:"Алтайский край",value:1},
		{name:"Краснодарский край",value:3},
		{name:"Красноярский край",value:4},
		{name:"Приморский край",value:5},
		{name:"Ставропольский край",value:7},
		{name:"Хабаровский край",value:8},
		{name:"Амурская область",value:10},
		{name:"Архангельская область",value:11},
		{name:"Астраханская область",value:12},
		{name:"Белгородская область",value:14},
		{name:"Брянская область",value:15},
		{name:"Владимирская область",value:17},
		{name:"Волгоградская область",value:18},
		{name:"Вологодская область",value:19},
		{name:"Воронежская область",value:20},
		{name:"Ивановская область",value:24},
		{name:"Иркутская область",value:25},
		{name:"Калининградская область",value:27},
		{name:"Калужская область",value:29},
			{name:"Камчатский край",value:30},
		{name:"Камчатская область",value:20},
		{name:"Кемеровская область",value:32},
		{name:"Кировская область",value:33},
		{name:"Костромская область",value:34},
		{name:"Курганская область",value:37},
		{name:"Курская область",value:38},
		{name:"Ленинградская область",value:41},
		{name:"Липецкая область",value:42},
		{name:"Магаданская область",value:44},
		{name:"Московская область",value:46},
		{name:"Мурманская область",value:47},
		{name:"Нижегородская область",value:22},
		{name:"Новгородская область",value:49},
		{name:"Новосибирская область",value:50},
		{name:"Омская область",value:52},
		{name:"Оренбургская область",value:53},
		{name:"Орловская область",value:54},
		{name:"Пензенская область",value:56},
		{name:"Пермская область",value:57},
		{name:"Псковская область",value:58},
		{name:"Ростовская область",value:60},
		{name:"Рязанская область",value:61},
		{name:"Самарская область",value:36},
		{name:"Саратовская область",value:63},
		{name:"Сахалинская область",value:64},
		{name:"Свердловская область",value:65},
		{name:"Смоленская область",value:66},
		{name:"Тамбовская область",value:68},
		{name:"Тверская область",value:28},
		{name:"Томская область",value:69},
		{name:"Тульская область",value:70},
		{name:"Ульяновская область",value:73},
		{name:"Челябинская область",value:75},
		
		{name:"Читинская область",value:76},
		{name:"Ярославская область",value:78},   
		{name:"Еврейская автономная область",value:99},
		{name:"Москва",value:45},
		{name:"Санкт-Петербург",value:40},
		{name:"Еврейская автономная область",value:99		},
		{name:"Агинский Бурятский автономный округ",value:43},
		{name:"Коми-Пермяцкий автономный округ",value:48},
		{name:"Корякский автономный округ",value:51},
		{name:"Ненецкий автономный округ",value: 	55},
		{name:"Таймырский (Долгано-Ненецкии) автономный округ",value:59},
		{name:"Усть-Ордынский Бурятский автономный округ",value:62},
		{name:"Ханты-Мансийский автономный округ",value:67},
		{name:"Тюменская область",value:71},
		{name:"Чукотский автономный округ",value:77},
		{name:"Эвенкийский автономный округ",value:72},
		{name:"Ямало-Ненецкий автономный округ",value:74}];
$(".tab").click(function(obj)
{
   if ($(this).next(".content:visible").length>0)
   {
      $(this).removeClass("target");
      $(this).next(".content").slideUp("slow");   
   }
   else
   {
      $(".tab").removeClass("target");
      $(".content").slideUp("slow");
      $(this).toggleClass("target").next(".content").slideDown("slow");
   }
   
  
})
$("#home_phone").mask("+7(999) 999-99-99");
$("[name='mob_phone']").mask("(999) 999-99-99");
$("#educ_country").chosen();
$("#sel_flow").chosen({width:"300px"});
$("#code_orgpas").mask("999-999");

$(".select_element").chosen({width:"400px"});


	
	
$(".type_last_educ").chosen({width:"500px"}).attr("style","position:absolute;left:9999");
$("#last_educ").chosen({width:"400px"}).attr("style","position:absolute;left:9999").change(function()
{
  $(".type_educ").addClass("hide_class").find("select").removeAttr("name").removeAttr("data-docs").attr("required",false);
  $(".type_educ[type_educ~='"+$(this).val()+"']").removeClass("hide_class").find("select").attr("name","subtype").attr("data-docs","").attr("required",true);
});
$("#sel_phonecountry").chosen().trigger("update").change(function()
{
	$("#code_mod_phone").text("+"+$(this).val());
})
$(".geocomplete_input").geocomplete();
$("#sel_national").chosen().change(function()
{
	if ($(this).val()!=1)
	{
		$(".ver_docpers").addClass("hide_class").find("input").attr("required","false");
		$("#code_orgpas").attr("required","false");
		$("input[name='sr_person']").attr("required",false);
		$("#sel_docpers").val(5).find("option[value='1']").prop('disabled', true).trigger("chosen:updated");
	}
	else
	{
		$("#code_orgpas").attr("required","true");
		$(".ver_docpers").removeClass("hide_class").find("input").attr("required",true);
		$("input[name='sr_person']").attr("required",true);
		$("#sel_docpers").val(1).find("option[value='1']").prop('disabled', false).trigger("chosen:updated");
	}
});



$("#sel_docpers").chosen({width:"400px"}).change(function(e,elem)
{
	 if ($(this).val()!=1)
	 { 
		  $(".ver_docpers").addClass("hide_class").find("input").attr("required",false);
	 }
	 else
	 {
		 $(".ver_docpers").removeClass("hide_class").find("input").attr("required",true);
	 };
});
		
					


document.querySelector("#old_passdoc").addEventListener("change",function()
{

	$(".old_passt").toggleClass('hide_class').find("input").attr('required', function(_, attr){ return !attr});
})
document.querySelector("#equal_liveadr").addEventListener("change",function()
{
	$(".live_adress").toggleClass('hide_class').find("input").attr('required', function(_, attr){ return !attr});
	$(".live_flat").toggleClass('hide_class');
})
////блок формирования заявлений

///селектор филиала
$("#sel_filial").chosen({disable_search_threshold:1,width:"500px"}).change(function(){
  var krim =parseInt($(".appl_krim:checked").val());
	var id_filial=parseInt($("#sel_filial").val());
	 change_formEduc(set_krim,id_filial,parseInt($("#sel_inst[value>-1]").val()),id_educProg,id_dir,id_profile);

});
///селектор института
var del_select=true;

function change_krim(jobject)
{
	var value=parseInt($(jobject).attr("value"));
	
	change_filial(value)
}
function change_filial(set_krim)
{
	$("#sel_filial").load("/dev-bin/priem_add_men_appl",{"change_filial":1,"krim":set_krim,"adm_add":JSON.stringify(window.comp_groups)},function()
	{
		$("#sel_filial").trigger("chosen:updated");
		change_educProg(set_krim,parseInt($("#sel_filial").val()));
	})
	
}

function change_inst(set_krim,id_filial,id_educProg,id_dir,id_profile)
{
	$("#sel_inst").load("/dev-bin/priem_add_men_appl",{"krim":set_krim,
		"id_filial":id_filial,
		"id_dir":id_dir,
		"id_profile":id_profile,
		"id_educProg":id_educProg,
		"change_inst":1,
		"adm_add":JSON.stringify(moduleDirAdmGroup.admGroups)},function()
	{
		$("#sel_inst").trigger("chosen:updated");	
		if (document.querySelector("#sel_inst").childNodes.length<3)
		{
			 change_formEduc(set_krim,id_filial,parseInt($("#sel_inst").val()),id_educProg,id_dir,id_profile);
		}
	})
}

function change_educProg(set_krim,id_filial)
{
	$("#sel_progEduc").load("/dev-bin/priem_add_men_appl",{"krim":set_krim,"id_filial":id_filial,"change_educprog":1,"adm_add":JSON.stringify(moduleDirAdmGroup.admGroups)},function()
	{
		$("#sel_progEduc").trigger("chosen:updated");	
		if (document.querySelector("#sel_progEduc").childNodes.length<3)
		{
			 change_dir(set_krim,id_filial,parseInt($("#sel_progeduc").val()));
		}
	})
}

function change_dir(set_krim,id_filial,id_educProg)
{
	$("#sel_dir").load("/dev-bin/priem_add_men_appl",{"krim":set_krim,"id_filial":id_filial,"change_dir":1,"id_educProg":id_educProg,"adm_add":JSON.stringify(moduleDirAdmGroup.admGroups)},function()
	{
				$("#sel_dir").trigger("chosen:updated");
	})
}


function change_profile(set_krim,id_filial,id_educProg,id_dir)
{
	$("#sel_profile").load("/dev-bin/priem_add_men_appl",{"krim":set_krim,"id_filial":id_filial,"change_profile":1,"id_dir":id_dir,"id_educProg":id_educProg,"adm_add":JSON.stringify(moduleDirAdmGroup.admGroups)},function()
	{
				$("#sel_profile").trigger("chosen:updated");
				if (document.querySelector("#sel_profile").childNodes.length<2)
				{
					change_inst(set_krim,id_filial,id_educProg,id_dir,parseInt($("#sel_profile").val()))
					//change_formEduc(set_krim,id_filial,id_inst,id_educProg,id_dir,parseInt($("#sel_profile").val()));
				}
				else
				{
					reset_selects("#sel_formFin,#sel_inst,#sel_formEduc");
					$("#sel_profile option[value='9999'").attr("selected",true);
				}
				
	})
	
	
}

function change_formEduc(set_krim,id_filial,id_inst,id_educProg,id_dir,id_profile)
{
	$("#sel_formEduc").load("/dev-bin/priem_add_men_appl",{"krim":set_krim,"adm_add":JSON.stringify(moduleDirAdmGroup.admGroups),"id_filial":id_filial,"change_formEduc":1,"id_dir":id_dir,"id_inst":id_inst,"id_educProg":id_educProg,"id_profile":id_profile},function()
	{

				if (document.querySelector("#sel_formEduc").childNodes.length>1)
				{
					$("#sel_formEduc").trigger("chosen:updated");
				}
				else 
				{
					$("#sel_formEduc").children().attr("selected","selected").trigger("chosen:updated");
					change_formPay(set_krim,id_filial,id_inst,id_educProg,id_dir,id_profile,JSON.stringify(($("#sel_formEduc").val())));
					
				}
	})
}
function change_formPay(set_krim,id_filial,id_inst,id_educProg,id_dir,id_profile,id_feduc)
{
	$("#sel_formFin").load("/dev-bin/priem_add_men_appl",
						{"krim":set_krim,"id_filial":id_filial,"adm_add":JSON.stringify(moduleDirAdmGroup.admGroups),"change_formFin":1,"id_educ":id_feduc,"id_dir":id_dir,"id_inst":id_inst,"id_educProg":id_educProg,"id_profile":id_profile},function()
	{
			
				if (document.querySelector("#sel_formFin").childNodes.length<2)
				{
						$("#sel_formFin").children().attr("selected","selected").trigger("chosen:updated");
						$(".new_appl").show();
				}
				else
				{
					$("#sel_formFin").trigger("chosen:updated");
					
				}
	})
	
}



//window.comp_groups=[];
//window.mas_dir=[];
function reset_selects(select_del,select_reset)
{
	$(select_del).find("option").remove();
	$(select_del).trigger("chosen:updated");
	if (select_reset) {$(select_reset).prop('selectedIndex',-1).trigger("chosen:updated")}; 
	
}
function del_apply(adm_id,id_dir,obj,set_krim,id_filial,id_educProg)
{
	
	//console.log(window.comp_groups);
  moduleDirAdmGroup.delAppl(adm_id,id_dir);
	console.log(moduleDirAdmGroup);
	$(obj).closest("li").remove();
	alertify.error("Заявление успешно удалено!");
	reset_selects("#sel_inst,#sel_profile,#sel_formEduc,#sel_formFin","#sel_dir");
	change_dir(set_krim,id_filial,id_educProg);
	return false;
}
function add_new_adm(conteiner,set_krim,id_filial,id_inst,id_educProg,id_dir,id_prof,id_formEduc,id_formFin,name_filial,name_educprog,name_inst,name_dir,name_prof,name_formEduc,name_formPay,number_flow)
{
	$("#output").load("/dev-bin/priem_add_men_appl",
	{
		get_adm:1,
		krim:set_krim,
		id_filial:id_filial,
		id_educProg:id_educProg,
		id_inst:id_inst,
		id_dir:id_dir,
		id_formEduc:id_formEduc,
		id_formFin:id_formFin
	},function(data)
	{
					
					if (moduleDirAdmGroup.mapDir.indexOf(id_dir)==-1)
					{
							//window.mas_dir.push(id_dir);
							moduleDirAdmGroup.addNewDir(id_dir);
					}
					
					var info_appl=
					{
							adm_id:parseInt(data),
							prof_id:id_prof,
							dogovor:id_formFin,
							flow:number_flow,
							priority:moduleDirAdmGroup.admGroups.length+1
					}
					//window.comp_groups.push(info_appl);
					moduleDirAdmGroup.addNewAdm(info_appl);
					console.log(moduleDirAdmGroup);
					var new_li=$("<li  class='link_napr'></li>");
					var new_div=$("<section class='children_li'></section>");
					new_li.adm_id=data;
					new_div.id_dir=id_dir;
					new_div.append("<span class='text_inside'>Конкурсная группа для Крыма: "+(set_krim ? "Да" : "Нет")+";</span> \
					<span class='text_inside'>Филиал: "+name_filial+";</span> \
					<span class='text_inside'>Образовательная программа: "+name_educprog+";</span> \
					<span class='text_inside'>Институт: "+name_inst+";</span> <span class='text_inside'>Профиль: "+name_prof+";</span> \
					<span class='text_inside'>Форма обучения: "+name_formEduc+";</span> \
					<span class='text_inside'>Форма финансирования: "+name_formPay+";</span>");
					var new_span=$("<span onclick='show_extra_info(this)'>"+name_dir+"</span>");
					new_li.append(new_span);
					new_span.append("<label><img src='/dev/priem/jquery_ui/images/del.png'  class='del_apply' onclick='del_apply("+data+","+id_dir+",this,"+set_krim+","+id_filial+","+id_educProg+")' hspace='10' width='15px' title='Удалить заявление' /></label>");	
					new_li.append(new_div);
					new_div.hide();
					conteiner.append(new_li);
					reset_selects("#sel_inst,#sel_profile,#sel_formEduc,#sel_formFin","#sel_dir");
					$(".new_appl").hide();
					$(".reg_man").show();
					alertify.success("Заявление успешно добавлено!");
					change_dir(set_krim,id_filial,id_educProg)
	})
}
function addNewAppl()
{
	var id_dir=$("#sel_dir").val();
	if (moduleDirAdmGroup.mapDir.length==3 && moduleDirAdmGroup.admGroups.indexOf(id_dir)==-1)
	{
		alertify.alert("В соответствии с правилами приема в Университеты, абитуриент имеет право подать заявление только на 3 направления подготовки!");
		reset_selects("#sel_profile,#sel_formEduc,#sel_formFin","#sel_dir");
		return false;
	}
	var conteiner=$("#appl_group");

	
	var name_formEduc="";
	var name_formPay="";
	var name_filial=$("#sel_filial option:selected").text();
	var name_inst=$("#sel_inst option:selected").text();
	var name_educprog=$("#sel_progEduc option:selected").text();
	var name_dir=$("#sel_dir option:selected").text();
	var name_prof=$("#sel_profile option:selected").text();
	
	var krim=parseInt($(".appl_krim:checked").attr("value"));
	var id_filial=$("#sel_filial").val();
	var id_inst=$("#sel_inst").val();
	var id_educProg=$("#sel_progEduc").val();

	var id_prof=parseInt($("#sel_profile").val());
	var mas_formPay=$("#sel_formFin").val();
	var mas_formEduc=$("#sel_formEduc").val();
	var nomer_flow=parseInt($("#sel_flow").val());
	for (var educ_key=0;educ_key<mas_formEduc.length;educ_key++)
	{
		
		for (var pay_key=0;pay_key<mas_formPay.length;pay_key++)
		{
					name_formPay=$("#sel_formFin option[value='"+mas_formPay[pay_key]+"']").text();
					name_formEduc=$("#sel_formEduc option[value='"+mas_formEduc[educ_key]+"']").text();
					add_new_adm(conteiner,krim,id_filial,id_inst,id_educProg,id_dir,id_prof,parseInt(mas_formEduc[educ_key]),parseInt(mas_formPay[pay_key]),name_filial,name_educprog,name_inst,name_dir,name_prof,name_formEduc,name_formPay,nomer_flow);
			}
	}
}

$("#sel_inst").chosen({width:"500px"}).change(function(){
			
			var krim =parseInt($(".appl_krim:checked").val());
			var id_filial=parseInt($("#sel_filial").val());
			var id_inst=parseInt($("#sel_inst").val());
			var id_educProg=parseInt($("#sel_progEduc").val());
			var id_dir=parseInt($("#sel_dir").val());
			var id_profile=parseInt($("#sel_profile").val());
			change_educProg(krim,id_filial,id_inst,id_educProg,id_dir,id_profile);
});
///селектор образовательной программы
$("#sel_progEduc").chosen({width:"500px"}).change(function()
{
			var krim =parseInt($(".appl_krim:checked").val());
			var id_filial=parseInt($("#sel_filial").val());
			//var id_inst=parseInt($("#sel_inst").val());
			var id_educprog=parseInt($("#sel_progEduc").val());
			change_dir(krim,id_filial,id_educprog);
});
$("#sel_profile").chosen({width:"500px"}).change(function()
{
			var krim =parseInt($(".appl_krim:checked").val());
			var id_filial=parseInt($("#sel_filial").val());
			var id_educProg=parseInt($("#sel_progEduc").val());
			var id_dir=parseInt($("#sel_dir").val());
			var id_profile=parseInt($("#sel_profile").val());
			change_inst(krim,id_filial,id_educProg,id_dir,id_profile);
			//change_formEduc(krim,id_filial,id_inst,id_educprog,id_dir,id_profile)
			
})

$("#sel_formEduc").chosen({width:"500px"}).change(function()
{
			var krim =parseInt($(".appl_krim:checked").val());
			var id_filial=parseInt($("#sel_filial").val());
			var id_inst=parseInt($("#sel_inst").val());
			var id_educprog=parseInt($("#sel_progEduc").val());
			var id_dir=parseInt($("#sel_dir").val());2
			var id_profile=parseInt($("#sel_profile").val());
			if (JSON.stringify($("#sel_formEduc").val()).length==0) return false;
			change_formPay(krim,id_filial,id_inst,id_educprog,id_dir,id_profile,JSON.stringify($("#sel_formEduc").val()));
})
$("#sel_formFin").chosen({width:"500px"}).change(function()
{
		var formFin=$("#sel_formFin").val()
	 if (formFin.length>0)
	 {
		 $(".new_appl").show(); 
	 }
	 else
	 {
		  $(".new_appl").hide(); 
	 }
})
///// селектор направления подготовки 
$("#sel_dir").chosen({width:"500px"}).change(function(){
			var krim =parseInt($(".appl_krim:checked").val());
			var id_filial=parseInt($("#sel_filial").val());
			var id_inst=parseInt($("#sel_inst").val());
			var id_educprog=parseInt($("#sel_progEduc").val());
			var id_dir=parseInt($("#sel_dir").val());
			reset_selects("#sel_profile,#sel_formEduc,#sel_formFin");
			change_profile(krim,id_filial,id_educprog,id_dir);
})
		
document.querySelector("#reg_man_btn").addEventListener("click",function()
{
	$(".content").show();
})
function make_print(id_type,adm_id,id_prof,conteiner)
{
	var print={
		id:id_type,
		adm_id:adm_id,
		prof_id:id_prof,
	}
	conteiner.push(print);
}
function set_timeWork(pdfgenid,id_queue)
{
	var formdata = new FormData();
	var difference=new Date().getTime() - $("body").data("timework");
	formdata.append('pdfgenid',pdfgenid);
	fetch('/dev-bin/priem_naprav', {				
			method: 'post',
			credentials: 'same-origin',
			header:{
							"Accept":"text/html;charset='UTF-8'", 
							"Content-Type":"multipart/formdata"
				},
			body: formdata,	
	}).then(function(response) { 
			return response.text();
	}).then(function(obj=parseInt(obj))
	{	
			var np_uid=obj;
			var formdata = new FormData();
			formdata.append('timework',(difference/1000));
			formdata.append('pkgid',id_queue);
			formdata.append('type',1);
			formdata.append('np_uid',np_uid);
			fetch('/dev-bin/priem_naprav', {				
						method: 'post',
						credentials: 'same-origin',
						header:{
								"Accept":"text/html;charset='UTF-8'", 
								"Content-Type":"multipart/formdata"
			},
						body: formdata,	
			}).then(function(response) {
						var formdata = new FormData();
						formdata.append('signature',0);
						formdata.append('pkgid',id_queue);
						fetch('/priem_application_doc', {				
								method: 'post',
								credentials: 'same-origin',
								header:{
												"Accept":"text/html;charset='UTF-8'", 
												"Content-Type":"multipart/formdata"
									},
								body: formdata,	
						})
			})
	})
}

function getscan(pdfgenid,id_queue)
{
	
	var formdata = new FormData();
	formdata.append('pdfgenid',pdfgenid);
	formdata.append('json',1);
	fetch('/dev-bin/priem_get_pdfgen_state', {				
			method: 'post',
			credentials: 'same-origin',
			header:{
							"Accept":"text/html;charset='UTF-8'", 
							"Content-Type":"multipart/formdata"
				},
			body: formdata,	
	}).then(function(response) {  
			return response.json();
	}).then(function(obj)
	{
			
			if (obj["state"]=="done")
			{
				alertify.success("Регистрация абитуриента прошла успешно!");
				alertify.success("Осуществляется загрузка личного дела!");
				$(".contact_form").removeAttr("onsubmit");
				$(".contact_form").attr("action",obj.url);
				document.getElementsByName("pdfgenid")[0].value=id_queue;
				$(".contact_form").submit();
				set_timeWork(pdfgenid);
			}
			else 
			{
			  if (obj["state"]=="building")
				{
					setTimeout(function(){alertify.log("Осуществляется формирование личного дела абитуриента.");;getscan(pdfgenid)},13000);
				}
				else 
				{
					setTimeout(function(){alertify.log("Процесс регистрации абитуриента завершен на "+obj["value"]+"");;getscan(pdfgenid)},6000);
				}
			}
	})

					
}
function reg_new_man(id_queue)
{
	
	var person_data=[];
	var section_doc=$("section[type]");

	var conteiner_docs=[];

	var fields=$("body [type!='hidden'][name]:not([data-docs])");
	var paramObj = {};
	$.each(fields, function(_, kv) {
				
				if ($(kv).prop("type")=="radio" && $(kv).prop("checked")==false)
				{
					return;
				}
				var key_value;
				
				if ($(kv).is("[number]"))
				{
					key_value=parseInt($(kv).val());
				}
				else
				{
					key_value=$.trim($(kv).val());
				}
	
				paramObj[$(kv).attr("name")]=key_value;
				
	});

	 paramObj["mob_phone"]=$("#code_mod_phone").text()+paramObj["mob_phone"]; 
	 var full_adress=$("#index_reg").val();
	 var home=$("#home_reg").val();
	 var flat=$("#flat_reg").val();
	 var address=$("#address_reg").val(); 
	 var mas_adress=address.split(",");

	 for (var i=mas_adress.length-1;i>=0;i--)
	 {
		 full_adress+=","+mas_adress[i].trim();
	 }
	 full_adress+= ","+home;
	 if (flat)
	 {
		 full_adress+= ","+flat;
	 }
	 paramObj["reg_addr"]=$.trim(full_adress)

	 if ($("#equal_liveadr").prop("checked")==false)
	 {
		 
			full_adress=$("#index_live").val();
			home=$("#home_live").val();
			flat=$("#flat_live").val();
			address=$("#address_live").val();

			mas_adress=address.split(",");

			for (var i=mas_adress.length-1;i>=0;i--)
			{
				full_adress+=","+mas_adress[i].trim();
			}
			full_adress+= ","+home;
			if (flat)
			{
				full_adress+= ","+flat;
			}
	 }
	 paramObj["coolness"]=JSON.stringify($("#coolness").val());
	 paramObj["live_addr"]=$.trim(full_adress);
	 paramObj["add_docs"]=[]
	 $.each(section_doc, function(_, sec) {
				 var data_field=$(sec).find("[data-docs]");
				 var obj_doc={};
				 $.each(data_field,function(_,obj)
				 {
					    var key_value;
						  if ($(obj).prop("type")=="radio" && $(obj).prop("checked")==false)
							{
									return;
							} 
							if ($(obj).is("[number]")) key_value=parseInt($(obj).val());
							else key_value=$(obj).val();
						  obj_doc[$(obj).attr("name")]=key_value;
				 })
			
				 obj_doc["scan"]=parseInt($(sec).attr("scan"));
				 obj_doc["type"]=parseInt($(sec).attr("type"));
				 paramObj["add_docs"].push(obj_doc);
	 })
	window.print=[];	
	make_print(16,0,0,window.print);
	make_print(8,0,0,window.print);
	make_print(9,0,0,window.print);
	make_print(13,0,0,window.print);
	make_print(7,0,0,window.print);
	make_print(12,0,0,window.print);
	make_print(0,0,0,window.print);
	make_print(11,0,0,window.print);
	make_print(14,0,0,window.print);
	make_print(15,0,0,window.print);


	for (let key=0;let lenMas=moduleDirAdmGroup.admGroups.length;lenMas>key;key++)
	{
		
		make_print(5,moduleDirAdmGroup.admGroups[key].adm_id,moduleDirAdmGroup.admGroups[key].prof_id,window.print);
		if (moduleDirAdmGroup.admGroups[key].dogovor==15)
		{
			make_print(6,moduleDirAdmGroup.admGroups[key].adm_id,moduleDirAdmGroup.admGroups[key].prof_id,window.print);
		}
		
	}
	paramObj["print"]=window.print;
	paramObj["comp_groups"]=moduleDirAdmGroup.admGroups;
	paramObj["res_ege"]=window.res_ege;
	var filename=$.trim(document.getElementsByName("last_name")[0].value) + '(регистрация)';
	var formdata = new FormData();
	formdata.append('pkgid',id_queue);
	formdata.append('custom_filename',filename);
	formdata.append('data',JSON.stringify(paramObj));
	formdata.append('pdf_create',1);
	formdata.append('html_or_pdf',1);
	formdata.append('json',1);
	console.log(JSON.stringify(JSON.stringify(paramObj),2,null));
	
	
	
	fetch('/dev-bin/priem_application_doc', {				
			method: 'post',
			credentials: 'same-origin',
			header:{
							"Accept":"text/html;charset='UTF-8'", 
							"Content-Type":"multipart/formdata"
				},
			body: formdata,	
	}).then(function(response) {  
			
			return response.json();
	})  
	.then(function(obj) {  
	
				console.log(obj);
		    getscan(obj.pdfgenid,id_queue);
		
	})
	alertify.set({ delay: 7000 });
	// log will hide after 10 seconds
	alertify.log("Идет процесс регистрации абитуриента!");
	return false;
}
//////конец блока формирования заявлений
function check_exist_men() /// проверка существования абитуриента в системе
{
  		var lName=$.trim(document.getElementsByName("last_name")[0].value); //фамилия
			var fName=$.trim(document.getElementsByName("first_name")[0].value); //имя
			var mName=$.trim(document.getElementsByName("middle_name")[0].value); // отчество
			var datebirth=$.trim(document.getElementsByName("birthdate")[0].value);
			var formdata = new FormData();
			formdata.append('exist_men',1);
			formdata.append('lName',lName);
			formdata.append('fName',fName);
			formdata.append('pName',mName);
			formdata.append('dateBirth',datebirth);
			fetch('/dev-bin/priem_add_men_appl', {				
					method: 'post',
					credentials: 'same-origin',
					header:{
									"Accept":"text/html;charset='UTF-8'", 
									"Content-Type":"multipart/formdata"
						},
					body: formdata,	
			}).then(function(response) {  
					
					
					return response.text();
			}).then(function(id_np=parseInt(id_np))
			{
				if (parseInt(id_np)>0)
				{
					alertify.set({ labels: {
								ok     : "Добавить заявления"
						} });
					alertify.alert("Данные абитуриент уже зарегистрирован!",function()
					{
						var formdata = new FormData();
						formdata.append('update_typepocket',id_queue);
						fetch('/dev-bin/priem_add_men_appl', {				
										method: 'post',
										credentials: 'same-origin',
										header:{
														"Accept":"text/html;charset='UTF-8'", 
														"Content-Type":"multipart/formdata"
											},
										body: formdata,	
						}).then(function(response) { 
								window.location.replace("/dev/priem/add_apl.html?applicant=" + id_np+"&pkgid="+id_queue)
						})
					});
				}
			})
}

function show_extra_info(object)   ///дополнительная информацция о добавленном заявлении
{
	$(object).next(".children_li").toggle();
}
function check_ege(lName,fName,mName,seria,nomer,log)  //проверка существования результатов ЕГЭ
{
	var formdata = new FormData();
	formdata.append('enquiry',1);
	formdata.append('lName',lName);
	formdata.append('fName',fName);
	formdata.append('pName',mName);
	formdata.append('pSeria',seria);
	formdata.append('pNumber',nomer);
	fetch('/dev-bin/priem_ege_exams', {				
			method: 'post',
			credentials: 'same-origin',
			header:{
							"Accept":"text/html;charset='UTF-8'", 
							"Content-Type":"multipart/formdata"
				},
			body: formdata,	
	}).then(function(response){  
			
			return response.json();
	})  
	.then(function(obj) {  
		
		console.log(obj);
		if (obj.error=="OK")
		{
				
				if (obj.ege.length>0)
				{
					window.res_ege=obj;
				}
				else 
				{
						if (log==false)
						{
							seria = $.trim($("section[old_passport]").find("[name='seria']").val());
							nomer = $.trim($("section[old_passport]").find("[name='num']").val());
							check_ege(lName,fName,mName,seria,nomer,true);
						}
						else
						{
							alertify.error("Ошибка в получении данных ЕГЭ!Совет: проверьте фамилию, имя, отчества абитуринета и серию/номер паспорта");
						}
				}		
		}  
		else if(obj.error=="offline")
		{
			window.res_ege="[]";
		}
		else 
		{
			alertify.error("Ошибка взаимодействия с ФИС ЕГЭ!");
		}
	})
}

function get_egeRes()   //получение результатов ЕГЭ
{
			 var seria=$.trim($("section[passport]").find("[name='seria']").val()) || "-";
			 var nomer=$.trim($("section[passport]").find("[name='num']").val()) || "-";
			 var lName=$.trim(document.getElementsByName("last_name")[0].value); //фамилия
			 var fName=$.trim(document.getElementsByName("first_name")[0].value); //имя
			 var mName=$.trim(document.getElementsByName("middle_name")[0].value); // отчество
			 check_ege(lName,fName,mName,seria,nomer,false);
}




//// взаимодействие с изображениями
      var picture_mas = $('.scan_img');
      $.each(picture_mas,function(i,obj)
      {
						var picture=$(obj);
						// Make sure the image is completely loaded before calling the plugin
						picture.one('load', function(){
												// Initialize plugin (with custom event)
												picture.guillotine({eventOnChange: 'guillotinechange'});

												picture.bind('mousewheel DOMMouseScroll', function(event) 
												{		
																		
																		var delta = event.wheelDelta ? event.wheelDelta : -event.detail;
																		
																		if (delta==0)
																		{
																			delta=event.originalEvent.wheelDelta /120
																		}
																		if( delta > 0)
																		{
																			picture.guillotine('zoomIn');//'Up'
																		}
																		else
																		{		
																			picture.guillotine('zoomOut');;//'Down'
																		}	
																		return false;
													});
												var data = picture.guillotine('getData');
												for(var key in data) { $('#'+key).html(data[key]); }
												picture.guillotine('fit');
												// Bind button actions
												// Update data on change
												picture.on('guillotinechange', function(ev, data, action) {
													data.scale = parseFloat(data.scale.toFixed(4));
													for(var k in data) { $('#'+k).html(data[k]); }
												});
												
					})
					if (picture.prop('complete')) picture.trigger('load');
      })
			
      $('.rotateLeft').click(function(){ $(this).closest(".box_img").find("img").guillotine('rotateLeft'); });
      $('.rotateRight').click(function(){  $(this).closest(".box_img").find("img").guillotine('rotateRight');});

      $('.zoomIn').click(function(){ $(this).closest(".box_img").find("img").guillotine('zoomIn'); });
      $('.zoomOut').click(function(){ $(this).closest(".box_img").find("img").guillotine('zoomOut'); });
$(document).ready(function(){
	$("#HS").show("300");
	$(function(){
	$(".alias").focus();
})
})

$(function(){
	$("#refresh").on("click",function(){
		window.location.href="index.html";
	})
})

$(function(){
	$("#evento").on("click",function(){
		var nombre;
		nombre=prompt("Write your name:","");
		$.ajax({
			//url:"http://boot12mp.aws.af.cm/welcome/"+"leo",
			url:"http://bootcamp.aws.af.cm/welcome/"+nombre,
			type:"post",
			data: 'leonardo',
			
		}).done(function(data){
				$("#response").html("<p>"+data.response+"</p>");
			}).fail(function(){
				$("#response").addClass("error");
		});
		return false;
	});
})

$(function(){
	$("#spot").on("click",function(){
		var artist;
		artist=prompt("search your artist","Rolling Stones");
		$.ajax({
			
			url:"http://api.spotify.com/v1/search?q="+artist+"&type=album",
			type:"get",
		}).done(function(data){
			for(var k in data.albums.items){
				var pagina=data.albums.items[k].href;
				$("#spoty").append("<p>"+data.albums.items[k].name+"</p>");
				$("#spoty").append("<p>"+data.albums.items[k].album_type+"</p>");	
				releseDate(pagina);
				$("#spoty").append("<a href="+data.albums.items[k].external_urls.spotify+">go to the album!");
				$("#spoty").append("<img src="+data.albums.items[k].images[0].url+" alt='disc' height='150' width:200>");
			}
		});
	})
	return false;
})

releseDate = function(pagina){
	var dataAlbums;
	$.ajax({
		async:false,
		url:pagina,
		type:"get",
	}).done(function(data2){
		dataAlbums = data2.release_date;
		$("#spoty").append("<p>"+data2.release_date+"</p>");
	});
	
}	
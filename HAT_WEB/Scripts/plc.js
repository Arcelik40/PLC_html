 $(document).ready(function(){
        //query the lamba variable every second
        $.ajaxSetup({ cache: false });
	
        init(); 
    });
		
	function init(){
		  	
		    $("#btnDur").click(function(){    
                    gonder(true,'"WEB_Server".Sistem_Stop"');
					gonder(false,'"WEB_Server".Sistem_Start"');	
					gonder(false,'"WEB_Server".Genel_Reset"');					
           });
		   $("#btnGit").click(function(){    
                    gonder(true,'"WEB_Server".Sistem_Start"');	
					gonder(false,'"WEB_Server".Sistem_Stop"');	
					gonder(false,'"WEB_Server".Genel_Reset"');					
           });
		   $("#btnRst").mousedown(function(){    
                    gonder(true,'"WEB_Server".Genel_Reset"');	
							
           });
		   		   $("#btnRst").mouseup(function(){    
                    gonder(false,'"WEB_Server".Genel_Reset"');	
							
           });
		   
	}
	function gonder(val,name) {
					url="yaz.htm";
					$('#tempData').val("0");
					console.log(val);
					if(val==true)
						$('#tempData').val("1");
						sdata=escape(name)+'='+$('#tempData').val();;
						console.log(sdata);
					if(val==false)
						$('#tempData').val("0");
                    sdata=escape(name)+'='+$('#tempData').val();;
                    $.post(url,sdata,function(result){});

					
	}
 // plc yazma bitişi
<SCRIPT>

function validaAgendar(argumento){

	fecha_hoy =  '<?=date('Y')."-".date('m')."-".date('d')?>';
	fecha = document.form1.elements['fechaAgenda'].value;

	if (fecha==""&&argumento=="SI"){
		alert("Debe suministrar la fecha de agenda");
		return false;
	}
	if (!fechas_comp_ymd(fecha_hoy,fecha) && argumento=="SI") {
		alert("La fecha de agenda debe ser mayor que la fecha de hoy");
		return false;
	}
	return true;
}
// JavaScript Document
<!-- Esta funcion esconde el combo de las dependencia e inforados Se activan cuando el menu envie una se�al de cambio.-->
 

<!-- Cuando existe una se�an de cambio el program ejecuta esta funcion mostrando el combo seleccionado -->
function changedepesel(enviara)
{

  document.form1.codTx.value = enviara;
  document.getElementById('depsel').style.display = 'none';
  document.getElementById('carpper').style.display = 'none';
  document.getElementById('depsel8').style.display = 'none';
  document.getElementById('Enviar').style.display = 'none';
  
 // document.getElementById('movera').style.display = '';
 // document.getElementById('movera_r').style.display = 'none';
 // document.getElementById('reasignar').style.display = '';    
 // document.getElementById('reasignar_r').style.display = 'none';
 // document.getElementById('informar_r').style.display = 'none';  
 // document.getElementById('informar').style.display = ''; 
 //mover
 if(enviara==10 )
  {    

      document.getElementById('depsel').style.display = 'none';
	document.getElementById('carpper').style.display = '';
	document.getElementById('carpper').focus();
	document.getElementById('depsel8').style.display = 'none';
	MM_swapImage('Image9','','<?=$dir_raiz?>/imagenes/internas/reasignar.gif',1);
	MM_swapImage('Image10','','<?=$dir_raiz?>/imagenes/internas/informar.gif',1);
	MM_swapImage('Image11','','<?=$dir_raiz?>/imagenes/internas/devolver.gif',1);
	MM_swapImage('Image12','','<?=$dir_raiz?>/imagenes/internas/vobo.gif',1);
	MM_swapImage('Image14','','<?=$dir_raiz?>/imagenes/internas/NRR.gif',1);
	MM_swapImage('Image13','','<?=$dir_raiz?>/imagenes/internas/archivar.gif',1);
	document.getElementById('Enviar').style.display = '';
	
  //  document.getElementById('informar').style.display = ''; 
  
	//envioTx();
	
  }
 //Archivar
  if(enviara==13 )
  {    
    document.getElementById('depsel').style.display = 'none';
	document.getElementById('depsel8').style.display = 'none';
	document.getElementById('carpper').style.display = 'none';
	//document.getElementById('Enviar').value = "ARCHIVAR";
	MM_swapImage('Image10','','<?=$dir_raiz?>/imagenes/internas/informar.gif',1);
	MM_swapImage('Image11','','<?=$dir_raiz?>/imagenes/internas/devolver.gif',1);
	MM_swapImage('Image9','','<?=$dir_raiz?>/imagenes/internas/reasignar.gif',1);
	MM_swapImage('Image12','','<?=$dir_raiz?>/imagenes/internas/vobo.gif',1);
	MM_swapImage('Image8','','<?=$dir_raiz?>/imagenes/internas/moverA.gif',1);
	MM_swapImage('Image14','','<?=$dir_raiz?>/imagenes/internas/NRR.gif',1);
   // document.getElementById('informar').style.display = ''; 
	envioTx();
  }
  //nrr
  
   if(enviara==16 )
  {    
    document.getElementById('depsel').style.display = 'none';
	document.getElementById('depsel8').style.display = 'none';
	document.getElementById('carpper').style.display = 'none';
	MM_swapImage('Image10','','<?=$dir_raiz?>/imagenes/internas/informar.gif',1);
	MM_swapImage('Image11','','<?=$dir_raiz?>/imagenes/internas/devolver.gif',1);
	MM_swapImage('Image9','','<?=$dir_raiz?>/imagenes/internas/reasignar.gif',1);
	MM_swapImage('Image12','','<?=$dir_raiz?>/imagenes/internas/vobo.gif',1);
	MM_swapImage('Image8','','<?=$dir_raiz?>/imagenes/internas/moverA.gif',1);
	MM_swapImage('Image13','','<?=$dir_raiz?>/imagenes/internas/archivar.gif',1);
	envioTx();
  }
   
   //Devolver
   if(enviara==12)  {    
   	MM_swapImage('Image9','','<?=$dir_raiz?>/imagenes/internas/reasignar.gif',1);
	MM_swapImage('Image10','','<?=$dir_raiz?>/imagenes/internas/informar.gif',1);
    MM_swapImage('Image8','','<?=$dir_raiz?>/imagenes/internas/moverA.gif',1);
    MM_swapImage('Image12','','<?=$dir_raiz?>/imagenes/internas/vobo.gif',1);
	MM_swapImage('Image14','','<?=$dir_raiz?>/imagenes/internas/NRR.gif',1);
    MM_swapImage('Image13','','<?=$dir_raiz?>/imagenes/internas/archivar.gif',1);
    envioTx();
  }
    

//by skina trd multiple 
   if(enviara==61)  {
        	
    	document.getElementById('depsel').style.display = 'none';
        document.getElementById('depsel8').style.display = 'none';
        document.getElementById('carpper').style.display = 'none';

	MM_swapImage('Image9','','<?=$dir_raiz?>/imagenes/internas/reasignar.gif',1);
        MM_swapImage('Image10','','<?=$dir_raiz?>/imagenes/internas/informar.gif',1);
    	MM_swapImage('Image8','','<?=$dir_raiz?>/imagenes/internas/moverA.gif',1);
    	MM_swapImage('Image12','','<?=$dir_raiz?>/imagenes/internas/vobo.gif',1);
        MM_swapImage('Image14','','<?=$dir_raiz?>/imagenes/internas/NRR.gif',1);
    	MM_swapImage('Image13','','<?=$dir_raiz?>/imagenes/internas/archivar.gif',1);
    envioTx();
  }

 
//by skina exp multiple 
   if(enviara==62)  {
        	
    	document.getElementById('depsel').style.display = 'none';
        document.getElementById('depsel8').style.display = 'none';
        document.getElementById('carpper').style.display = 'none';

	MM_swapImage('Image9','','<?=$dir_raiz?>/imagenes/internas/reasignar.gif',1);
        MM_swapImage('Image10','','<?=$dir_raiz?>/imagenes/internas/informar.gif',1);
    	MM_swapImage('Image8','','<?=$dir_raiz?>/imagenes/internas/moverA.gif',1);
    	MM_swapImage('Image12','','<?=$dir_raiz?>/imagenes/internas/vobo.gif',1);
        MM_swapImage('Image14','','<?=$dir_raiz?>/imagenes/internas/NRR.gif',1);
    	MM_swapImage('Image13','','<?=$dir_raiz?>/imagenes/internas/archivar.gif',1);
    envioTx();
  }


  if(enviara==11)
  {
     //document.getElementById('Enviar').value = "ARCHIVAR";
  }  
  /*
  //Mover
  if(enviara==10)
  {
    document.getElementById('depsel').style.display = 'none';
	document.getElementById('carpper').style.display = '';
	document.getElementById('depsel8').style.display = 'none';
//	document.getElementById('movera_r').style.display = '';	
//	document.getElementById('movera').style.display = 'none';
	MM_swapImage('Image10','','<?=$dir_raiz?>/imagenes/internas/informar.gif',1);
	MM_swapImage('Image11','','<?=$dir_raiz?>/imagenes/internas/devolver.gif',1);
	MM_swapImage('Image9','','<?=$dir_raiz?>/imagenes/internas/reasignar.gif',1);
	MM_swapImage('Image12','','<?=$dir_raiz?>/imagenes/internas/vobo.gif',1);
	MM_swapImage('Image13','','<?=$dir_raiz?>/imagenes/internas/archivar.gif',1);
	

  }
  
  */
  //Reasignar
  if(enviara==9 )
  {
    
  	document.getElementById('depsel').style.display = '';
  	document.getElementById('depsel').focus();
	document.getElementById('carpper').style.display = 'none';
	document.getElementById('depsel8').style.display = 'none';
  //  document.getElementById('reasignar_r').style.display = '';	
  //  document.getElementById('reasignar').style.display = 'none';   
  	MM_swapImage('Image8','','<?=$dir_raiz?>/imagenes/internas/moverA.gif',1);
    MM_swapImage('Image10','','<?=$dir_raiz?>/imagenes/internas/informar.gif',1);
	MM_swapImage('Image11','','<?=$dir_raiz?>/imagenes/internas/devolver.gif',1);
	MM_swapImage('Image12','','<?=$dir_raiz?>/imagenes/internas/vobo.gif',1);
	MM_swapImage('Image14','','<?=$dir_raiz?>/imagenes/internas/NRR.gif',1);
	MM_swapImage('Image13','','<?=$dir_raiz?>/imagenes/internas/archivar.gif',1);
	document.getElementById('Enviar').style.display = '';
  }  
  
   //Visto bueno
  if(enviara==14 )
  {
    
  	document.getElementById('depsel').style.display = '';
  	document.getElementById('depsel').focus();
	document.getElementById('carpper').style.display = 'none';
	document.getElementById('depsel8').style.display = 'none';
  //  document.getElementById('reasignar_r').style.display = '';	
  //  document.getElementById('reasignar').style.display = 'none';   
  	MM_swapImage('Image8','','<?=$dir_raiz?>/imagenes/internas/moverA.gif',1);
    MM_swapImage('Image10','','<?=$dir_raiz?>/imagenes/internas/informar.gif',1);
	MM_swapImage('Image11','','<?=$dir_raiz?>/imagenes/internas/devolver.gif',1);
	MM_swapImage('Image9','','<?=$dir_raiz?>/imagenes/internas/reasignar.gif',1);
	MM_swapImage('Image14','','<?=$dir_raiz?>/imagenes/internas/NRR.gif',1);
	MM_swapImage('Image13','','<?=$dir_raiz?>/imagenes/internas/archivar.gif',1);
	document.getElementById('Enviar').style.display = '';
	
  }
  

  //Informar
  if(enviara==8 )
  {
    document.getElementById('depsel').style.display = 'none';
	document.getElementById('depsel8').style.display = '';
	document.getElementById('depsel8').focus();
	document.getElementById('carpper').style.display = 'none';
  //  document.getElementById('informar').style.display = 'none'; 
  //  document.getElementById('informar_r').style.display = ''; 
  	MM_swapImage('Image8','','<?=$dir_raiz?>/imagenes/internas/moverA.gif',1);
  	MM_swapImage('Image11','','<?=$dir_raiz?>/imagenes/internas/devolver.gif',1);
  	MM_swapImage('Image9','','<?=$dir_raiz?>/imagenes/internas/reasignar.gif',1);
  	MM_swapImage('Image12','','<?=$dir_raiz?>/imagenes/internas/vobo.gif',1);
	MM_swapImage('Image14','','<?=$dir_raiz?>/imagenes/internas/NRR.gif',1);
  	MM_swapImage('Image13','','<?=$dir_raiz?>/imagenes/internas/archivar.gif',1);
  	document.getElementById('Enviar').style.display = '';
  }
}
</script>

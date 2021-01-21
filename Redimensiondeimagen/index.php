
<?php
    function redimensionar_imagen($nombreimg, $rutaimg, $xmax, $ymax){  
        $ext = explode(".", $nombreimg);  
        $ext = $ext[count($ext)-1];  
      
        if($ext == "jpg" || $ext == "jpeg")  
            $imagen = imagecreatefromjpeg($rutaimg);  
        elseif($ext == "png")  
            $imagen = imagecreatefrompng($rutaimg);  
        elseif($ext == "gif")  
            $imagen = imagecreatefromgif($rutaimg);  
          
        $x = imagesx($imagen);  
        $y = imagesy($imagen);  
          
        if($x <= $xmax && $y <= $ymax){
            echo "<center>Esta imagen ya esta optimizada para los maximos que deseas.<center>";
            return $imagen;  
        }
      
        if($x >= $y) {  
            $nuevax = $xmax;  
            $nuevay = $nuevax * $y / $x;  
        }  
        else {  
            $nuevay = $ymax;  
            $nuevax = $x / $y * $nuevay;  
        }  
          
        $img2 = imagecreatetruecolor($nuevax, $nuevay);  
        imagecopyresized($img2, $imagen, 0, 0, 0, 0, floor($nuevax), floor($nuevay), $x, $y);  
        echo "<center>La imagen se ha optimizado correctamente.</center>";
        return $img2;   
    }
    function accion($nombreimg, $ruta, $ruta2){
    $imagen_optimizada = redimensionar_imagen("$nombreimg",$ruta,700,700);
    imagejpeg($imagen_optimizada, $ruta2);
    }
    $directorio = "images/";
    $ficheros1 = scandir($directorio);

    for($i=2; $i < count($ficheros1);$i++ ){
        echo $ficheros1[$i];
        
        accion("$ficheros1[$i]", "images/".$ficheros1[$i], "imagenesOptimizadas/".$ficheros1[$i]);
        
    }


?>
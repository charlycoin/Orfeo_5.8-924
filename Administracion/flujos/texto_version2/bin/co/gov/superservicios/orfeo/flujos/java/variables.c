????  - z 1co/gov/superservicios/orfeo/flujos/java/variables  java/lang/Object  etiqueta Ljava/lang/String; multiplicidad I 
idVariable idComponente orden obligatoria Z tooltip <init> ,(Ljava/lang/String;IIIZLjava/lang/String;I)V 
Exceptions java/lang/Exception  Code ()V  
   java/lang/String 
    	    	      (Ljava/lang/String;)V  !
  " equals (Ljava/lang/Object;)Z $ %
  & *La etiqueta de  la variable es Obligatoria (
  " 
 	  + 	 	  -  	  / LineNumberTable LocalVariableTable this 3Lco/gov/superservicios/orfeo/flujos/java/variables; getEtiqueta ()Ljava/lang/String; setEtiqueta esObligatoria ()Z  	  : setObligatoria (Z)V obligatorio 
getTooltip 
setTooltip setIdComponente (I)V getIdComponente ()I setIdVariable getIdVariable toXml java/lang/StringBuffer H <variable>
<etiqueta> J
 I " append ,(Ljava/lang/String;)Ljava/lang/StringBuffer; M N
 I O </etiqueta> Q <idVariable> S (I)Ljava/lang/StringBuffer; M U
 I V </idVariable> X <idcomponente> Z </idComponente> \ <multiplicidad> ^ </multiplicidad> ` <orden> b  	  d </orden> f 	<tooltip> h 
</tooltip> j <obligatoria> l (Z)Ljava/lang/StringBuffer; M n
 I o </obligatoria> q </variable> s toString u 6
 I v 
SourceFile variables.java                   	     
                                 ?     T*? *? Y? ? *? Y? ? +? +? Y ? #? '? ? Y)? *?*+? *? ,*? .*? 0*? ?    1   .      
     .  8  =  B   G ! M " S $ 2   R    T 3 4     T      T 	     T 
     T      T      T      T     5 6     /     *? ?    1       ' 2        3 4    7 !     >     *+? ?    1   
    +  , 2        3 4          8 9     /     *? ;?    1       / 2        3 4    < =     >     *? ;?    1   
    3  4 2        3 4      >    ? 6     /     *? ?    1       7 2        3 4    @ !     >     *+? ?    1   
    ;  < 2        3 4          A B     >     *? ,?    1   
    ?  @ 2        3 4      
    C D     /     *? ,?    1       C 2        3 4    E B     >     *? .?    1   
    G  H 2        3 4      	    F D     /     *? .?    1       K 2        3 4    G 6     ?     ?? IYK? L*? ? PR? PT? P*? .? WY? P[? P*? ,? W]? P_? P*? 0? Wa? Pc? P*? e? Wg? Pi? P*? ? Pk? Pm? P*? ;? pr? Pt? P? w?    1   "    O  P & Q 7 R H S ^ T o U ? O 2       ? 3 4    x    y
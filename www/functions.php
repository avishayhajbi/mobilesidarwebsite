<?php
$select = $_GET['function_to_call'];
if ($select == null) $select =0;
switch ($select) 
{

     case 0:
     {   
           function1();
           break;
     }

    case 1: 
    {
          function2();
          break;
    }
    default: break;

}

function function1() {
     echo "1";
}
function function2() {
     echo "2";
}

?>
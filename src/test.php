<?php 

function my_function () {
    $numargs = func_num_args();
    $args = func_get_args();
    for($i = 0; $i < $numargs; $i++) {
        print($args[$numargs]);
    }
}

my_function("a", "b", "c");
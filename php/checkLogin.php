<?php

session_start();
if (isset($_SESSION["memNo"])) {
    echo true;
} else {
    echo false;
}

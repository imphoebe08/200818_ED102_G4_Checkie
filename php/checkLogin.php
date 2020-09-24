<?php

session_start();
if (isset($_SESSION["memId"])) {
    echo true;
} else {
    echo false;
}

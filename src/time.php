<?php
    $lb = new DateTime("now", new DateTimeZone("Europe/Warsaw"));
    $ny = new DateTime("now", new DateTimeZone("America/New_York"));
    $sd = new DateTime("now", new DateTimeZone("Australia/Sydney"));
    $time =     $lb->format("H:i:s, d M!").
                $ny->format("H:i:s, d M!").
                $sd->format("H:i:s, d M!");
    echo $time;
?>

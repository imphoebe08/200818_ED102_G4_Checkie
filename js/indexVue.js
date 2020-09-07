var six = ADDDATE(hiredate, INTERVAL 6 MONTH)
DATE_FORMAT(
    ADDDATE(
        six, INTERVAL MOD(7 - WEEKDAY(six), 7) DAY),
    '%W ,the %D of %M')
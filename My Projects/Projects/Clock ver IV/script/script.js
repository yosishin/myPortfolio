var uColor = "blue";

function myFunction() {
    location.reload(true);
}

var h;
var m;
var s;
var divColor = green;

function changColor() {
    uColor = $("#inputColor").val();
    console.log(uColor);
}
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time1').innerHTML =
        h + ":" + m + ":" + s;
    updateTime();
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;

}

$(document).ready(function () {
    updateTime();
});

function clearClock() {
    $('div').css("background", "");
}

function updateTime() {
    clearClock();
    updateTime1();
    updateTime2();
    updateTime3();
}

function updateTime1() {
    // console.log($);
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    // console.log(h);
    //console.log(m);
    //console.log(s);


    if (h < 10) {
        var res1 = 0
        var res2 = Number(h);
        // console.log(res1);
        //uColor.log(res2);
    } else {
        var str1 = h.toFixed();
        var res1 = str1.substring(0, 1);
        var str2 = h.toFixed();
        var res2 = str2.substring(1, 2);
        //console.log("res1 " + res1);
        // console.log("res2 " + res2);

    };


    //===digit 1
    if (res1 == 0) {
        $(div2111).css("background", uColor);
        $(div2112).css("background", uColor);
        $(div2113).css("background", uColor);
        $(div2121).css("background", uColor);
        $(div2141).css("background", uColor);
        $(div2151).css("background", uColor);
        $(div2152).css("background", uColor);
        $(div2153).css("background", uColor);
        $(div2143).css("background", uColor);
        $(div2123).css("background", uColor);
    } else {
        if (res1 == 1) {
            $(div2113).css("background", uColor);
            $(div2123).css("background", uColor);
            $(div2143).css("background", uColor);
            $(div2153).css("background", uColor);
        } else {
            if (res1 == 2) {
                $(div2111).css("background", uColor);
                $(div2112).css("background", uColor);
                $(div2113).css("background", uColor);
                $(div2123).css("background", uColor);
                $(div2132).css("background", uColor);
                $(div2141).css("background", uColor);
                $(div2151).css("background", uColor);
                $(div2152).css("background", uColor);
                $(div2153).css("background", uColor);
            } else {
                if (res1 == 3) {
                    $(div2111).css("background", uColor);
                    $(div2112).css("background", uColor);
                    $(div2113).css("background", uColor);
                    $(div2123).css("background", uColor);
                    $(div2132).css("background", uColor);
                    $(div2143).css("background", uColor);
                    $(div2151).css("background", uColor);
                    $(div2152).css("background", uColor);
                    $(div2153).css("background", uColor);
                } else {
                    if (res1 == 4) {
                        $(div2111).css("background", uColor);
                        $(div2121).css("background", uColor);
                        $(div2132).css("background", uColor);
                        $(div2113).css("background", uColor);
                        $(div2123).css("background", uColor);
                        $(div2143).css("background", uColor);
                        $(div2153).css("background", uColor);
                    } else {
                        if (res1 == 5) {
                            $(div2111).css("background", uColor);
                            $(div2112).css("background", uColor);
                            $(div2113).css("background", uColor);
                            $(div2121).css("background", uColor);
                            $(div2132).css("background", uColor);
                            $(div2143).css("background", uColor);
                            $(div2151).css("background", uColor);
                            $(div2152).css("background", uColor);
                            $(div2153).css("background", uColor);
                        } else {
                            if (res1 == 6) {
                                $(div2111).css("background", uColor);
                                $(div2112).css("background", uColor);
                                $(div2113).css("background", uColor);
                                $(div2121).css("background", uColor);
                                $(div2132).css("background", uColor);
                                $(div2141).css("background", uColor);
                                $(div2143).css("background", uColor);
                                $(div2151).css("background", uColor);
                                $(div2152).css("background", uColor);
                                $(div2153).css("background", uColor);
                            } else {
                                if (res1 == 7) {
                                    $(div2111).css("background", uColor);
                                    $(div2112).css("background", uColor);
                                    $(div2113).css("background", uColor);
                                    $(div2123).css("background", uColor);
                                    $(div2143).css("background", uColor);
                                    $(div2153).css("background", uColor);
                                } else {
                                    if (res1 == 8) {
                                        $(div2111).css("background", uColor);
                                        $(div2112).css("background", uColor);
                                        $(div2113).css("background", uColor);
                                        $(div2121).css("background", uColor);
                                        $(div2123).css("background", uColor);
                                        $(div2132).css("background", uColor);
                                        $(div2141).css("background", uColor);
                                        $(div2143).css("background", uColor);
                                        $(div2151).css("background", uColor);
                                        $(div2152).css("background", uColor);
                                        $(div2153).css("background", uColor);
                                    } else {
                                        $(div2111).css("background", uColor);
                                        $(div2112).css("background", uColor);
                                        $(div2113).css("background", uColor);
                                        $(div2121).css("background", uColor);
                                        $(div2123).css("background", uColor);
                                        $(div2132).css("background", uColor);
                                        $(div2143).css("background", uColor);
                                        $(div2151).css("background", uColor);
                                        $(div2152).css("background", uColor);
                                        $(div2153).css("background", uColor);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    //===digit 2
    if (res2 == 0) {
        $(div2211).css("background", uColor);
        $(div2212).css("background", uColor);
        $(div2213).css("background", uColor);
        $(div2221).css("background", uColor);
        $(div2241).css("background", uColor);
        $(div2251).css("background", uColor);
        $(div2252).css("background", uColor);
        $(div2253).css("background", uColor);
        $(div2243).css("background", uColor);
        $(div2223).css("background", uColor);
    } else {
        if (res2 == 1) {
            $(div2213).css("background", uColor);
            $(div2223).css("background", uColor);
            $(div2243).css("background", uColor);
            $(div2253).css("background", uColor);
        } else {
            if (res2 == 2) {
                $(div2211).css("background", uColor);
                $(div2212).css("background", uColor);
                $(div2213).css("background", uColor);
                $(div2223).css("background", uColor);
                $(div2232).css("background", uColor);
                $(div2241).css("background", uColor);
                $(div2251).css("background", uColor);
                $(div2252).css("background", uColor);
                $(div2253).css("background", uColor);
            } else {
                if (res2 == 3) {
                    $(div2211).css("background", uColor);
                    $(div2212).css("background", uColor);
                    $(div2213).css("background", uColor);
                    $(div2223).css("background", uColor);
                    $(div2232).css("background", uColor);
                    $(div2243).css("background", uColor);
                    $(div2251).css("background", uColor);
                    $(div2252).css("background", uColor);
                    $(div2253).css("background", uColor);
                } else {
                    if (res2 == 4) {
                        $(div2211).css("background", uColor);
                        $(div2221).css("background", uColor);
                        $(div2232).css("background", uColor);
                        $(div2213).css("background", uColor);
                        $(div2223).css("background", uColor);
                        $(div2243).css("background", uColor);
                        $(div2253).css("background", uColor);
                    } else {
                        if (res2 == 5) {
                            $(div2211).css("background", uColor);
                            $(div2212).css("background", uColor);
                            $(div2213).css("background", uColor);
                            $(div2221).css("background", uColor);
                            $(div2232).css("background", uColor);
                            $(div2243).css("background", uColor);
                            $(div2251).css("background", uColor);
                            $(div2252).css("background", uColor);
                            $(div2253).css("background", uColor);
                        } else {
                            if (res2 == 6) {
                                $(div2211).css("background", uColor);
                                $(div2212).css("background", uColor);
                                $(div2213).css("background", uColor);
                                $(div2221).css("background", uColor);
                                $(div2232).css("background", uColor);
                                $(div2241).css("background", uColor);
                                $(div2243).css("background", uColor);
                                $(div2251).css("background", uColor);
                                $(div2252).css("background", uColor);
                                $(div2253).css("background", uColor);
                            } else {
                                if (res2 == 7) {
                                    $(div2211).css("background", uColor);
                                    $(div2212).css("background", uColor);
                                    $(div2213).css("background", uColor);
                                    $(div2223).css("background", uColor);
                                    $(div2243).css("background", uColor);
                                    $(div2253).css("background", uColor);
                                } else {
                                    if (res2 == 8) {
                                        $(div2211).css("background", uColor);
                                        $(div2212).css("background", uColor);
                                        $(div2213).css("background", uColor);
                                        $(div2221).css("background", uColor);
                                        $(div2223).css("background", uColor);
                                        $(div2232).css("background", uColor);
                                        $(div2241).css("background", uColor);
                                        $(div2243).css("background", uColor);
                                        $(div2251).css("background", uColor);
                                        $(div2252).css("background", uColor);
                                        $(div2253).css("background", uColor);
                                    } else {
                                        $(div2211).css("background", uColor);
                                        $(div2212).css("background", uColor);
                                        $(div2213).css("background", uColor);
                                        $(div2221).css("background", uColor);
                                        $(div2223).css("background", uColor);
                                        $(div2232).css("background", uColor);
                                        $(div2243).css("background", uColor);
                                        $(div2251).css("background", uColor);
                                        $(div2252).css("background", uColor);
                                        $(div2253).css("background", uColor);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    //===== end digit

}
//==================

//===digitits 3-4
function updateTime2() {
    // console.log($);
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    // console.log(m);


    if (m < 10) {
        var res3 = 0
        var res4 = Number(m);
        //console.log(res3);
        // console.log(res4);
    } else {
        var str3 = m.toFixed();
        var res3 = str3.substring(0, 1);
        var str4 = m.toFixed();
        var res4 = str4.substring(1, 2);
        // console.log("res3 " + res3);
        //  console.log("res4 " + res4);

    };
    //===digit 3
    if (res3 == 0) {
        $(div2311).css("background", uColor);
        $(div2312).css("background", uColor);
        $(div2313).css("background", uColor);
        $(div2321).css("background", uColor);
        $(div2341).css("background", uColor);
        $(div2351).css("background", uColor);
        $(div2352).css("background", uColor);
        $(div2353).css("background", uColor);
        $(div2343).css("background", uColor);
        $(div2323).css("background", uColor);
    } else {
        if (res3 == 1) {
            $(div2313).css("background", uColor);
            $(div2323).css("background", uColor);
            $(div2343).css("background", uColor);
            $(div2353).css("background", uColor);
        } else {
            if (res3 == 2) {
                $(div2311).css("background", uColor);
                $(div2312).css("background", uColor);
                $(div2313).css("background", uColor);
                $(div2323).css("background", uColor);
                $(div2332).css("background", uColor);
                $(div2341).css("background", uColor);
                $(div2351).css("background", uColor);
                $(div2352).css("background", uColor);
                $(div2353).css("background", uColor);
            } else {
                if (res3 == 3) {
                    $(div2311).css("background", uColor);
                    $(div2312).css("background", uColor);
                    $(div2313).css("background", uColor);
                    $(div2323).css("background", uColor);
                    $(div2332).css("background", uColor);
                    $(div2343).css("background", uColor);
                    $(div2351).css("background", uColor);
                    $(div2352).css("background", uColor);
                    $(div2353).css("background", uColor);
                } else {
                    if (res3 == 4) {
                        $(div2311).css("background", uColor);
                        $(div2321).css("background", uColor);
                        $(div2332).css("background", uColor);
                        $(div2313).css("background", uColor);
                        $(div2323).css("background", uColor);
                        $(div2343).css("background", uColor);
                        $(div2353).css("background", uColor);
                    } else {
                        if (res3 == 5) {
                            $(div2311).css("background", uColor);
                            $(div2312).css("background", uColor);
                            $(div2313).css("background", uColor);
                            $(div2321).css("background", uColor);
                            $(div2332).css("background", uColor);
                            $(div2343).css("background", uColor);
                            $(div2351).css("background", uColor);
                            $(div2352).css("background", uColor);
                            $(div2353).css("background", uColor);
                        } else {
                            if (res3 == 6) {
                                $(div2311).css("background", uColor);
                                $(div2312).css("background", uColor);
                                $(div2313).css("background", uColor);
                                $(div2321).css("background", uColor);
                                $(div2332).css("background", uColor);
                                $(div2341).css("background", uColor);
                                $(div2343).css("background", uColor);
                                $(div2351).css("background", uColor);
                                $(div2352).css("background", uColor);
                                $(div2353).css("background", uColor);
                            } else {
                                if (res3 == 7) {
                                    $(div2311).css("background", uColor);
                                    $(div2312).css("background", uColor);
                                    $(div2313).css("background", uColor);
                                    $(div2323).css("background", uColor);
                                    $(div2343).css("background", uColor);
                                    $(div2353).css("background", uColor);
                                } else {
                                    if (res3 == 8) {
                                        $(div2311).css("background", uColor);
                                        $(div2312).css("background", uColor);
                                        $(div2313).css("background", uColor);
                                        $(div2321).css("background", uColor);
                                        $(div2323).css("background", uColor);
                                        $(div2332).css("background", uColor);
                                        $(div2341).css("background", uColor);
                                        $(div2343).css("background", uColor);
                                        $(div2351).css("background", uColor);
                                        $(div2352).css("background", uColor);
                                        $(div2353).css("background", uColor);
                                    } else {
                                        $(div2311).css("background", uColor);
                                        $(div2312).css("background", uColor);
                                        $(div2313).css("background", uColor);
                                        $(div2321).css("background", uColor);
                                        $(div2323).css("background", uColor);
                                        $(div2332).css("background", uColor);
                                        $(div2343).css("background", uColor);
                                        $(div2351).css("background", uColor);
                                        $(div2352).css("background", uColor);
                                        $(div2353).css("background", uColor);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    //===digit 4
    if (res4 == 0) {
        $(div2411).css("background", uColor);
        $(div2412).css("background", uColor);
        $(div2413).css("background", uColor);
        $(div2421).css("background", uColor);
        $(div2441).css("background", uColor);
        $(div2451).css("background", uColor);
        $(div2452).css("background", uColor);
        $(div2453).css("background", uColor);
        $(div2443).css("background", uColor);
        $(div2423).css("background", uColor);
    } else {
        if (res4 == 1) {
            $(div2413).css("background", uColor);
            $(div2423).css("background", uColor);
            $(div2443).css("background", uColor);
            $(div2453).css("background", uColor);
        } else {
            if (res4 == 2) {
                $(div2411).css("background", uColor);
                $(div2412).css("background", uColor);
                $(div2413).css("background", uColor);
                $(div2423).css("background", uColor);
                $(div2432).css("background", uColor);
                $(div2441).css("background", uColor);
                $(div2451).css("background", uColor);
                $(div2452).css("background", uColor);
                $(div2453).css("background", uColor);
            } else {
                if (res4 == 3) {
                    $(div2411).css("background", uColor);
                    $(div2412).css("background", uColor);
                    $(div2413).css("background", uColor);
                    $(div2423).css("background", uColor);
                    $(div2432).css("background", uColor);
                    $(div2443).css("background", uColor);
                    $(div2451).css("background", uColor);
                    $(div2452).css("background", uColor);
                    $(div2453).css("background", uColor);
                } else {
                    if (res4 == 4) {
                        $(div2411).css("background", uColor);
                        $(div2421).css("background", uColor);
                        $(div2432).css("background", uColor);
                        $(div2413).css("background", uColor);
                        $(div2423).css("background", uColor);
                        $(div2443).css("background", uColor);
                        $(div2453).css("background", uColor);
                    } else {
                        if (res4 == 5) {
                            $(div2411).css("background", uColor);
                            $(div2412).css("background", uColor);
                            $(div2413).css("background", uColor);
                            $(div2421).css("background", uColor);
                            $(div2432).css("background", uColor);
                            $(div2443).css("background", uColor);
                            $(div2451).css("background", uColor);
                            $(div2452).css("background", uColor);
                            $(div2453).css("background", uColor);
                        } else {
                            if (res4 == 6) {
                                $(div2411).css("background", uColor);
                                $(div2412).css("background", uColor);
                                $(div2413).css("background", uColor);
                                $(div2421).css("background", uColor);
                                $(div2432).css("background", uColor);
                                $(div2441).css("background", uColor);
                                $(div2443).css("background", uColor);
                                $(div2451).css("background", uColor);
                                $(div2452).css("background", uColor);
                                $(div2453).css("background", uColor);
                            } else {
                                if (res4 == 7) {
                                    $(div2411).css("background", uColor);
                                    $(div2412).css("background", uColor);
                                    $(div2413).css("background", uColor);
                                    $(div2423).css("background", uColor);
                                    $(div2443).css("background", uColor);
                                    $(div2453).css("background", uColor);
                                } else {
                                    if (res4 == 8) {
                                        $(div2411).css("background", uColor);
                                        $(div2412).css("background", uColor);
                                        $(div2413).css("background", uColor);
                                        $(div2421).css("background", uColor);
                                        $(div2423).css("background", uColor);
                                        $(div2432).css("background", uColor);
                                        $(div2441).css("background", uColor);
                                        $(div2443).css("background", uColor);
                                        $(div2451).css("background", uColor);
                                        $(div2452).css("background", uColor);
                                        $(div2453).css("background", uColor);
                                    } else {
                                        $(div2411).css("background", uColor);
                                        $(div2412).css("background", uColor);
                                        $(div2413).css("background", uColor);
                                        $(div2421).css("background", uColor);
                                        $(div2423).css("background", uColor);
                                        $(div2432).css("background", uColor);
                                        $(div2443).css("background", uColor);
                                        $(div2451).css("background", uColor);
                                        $(div2452).css("background", uColor);
                                        $(div2453).css("background", uColor);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    //===== end digit

}
//==================

//===digitits 5-6
function updateTime3() {
    console.log($);
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    //console.log(m);


    if (s < 10) {
        var res5 = 0
        var res6 = Number(s);
        // console.log(res5);
        //console.log(res6);
    } else {
        var str5 = s.toFixed();
        var res5 = str5.substring(0, 1);
        var str6 = s.toFixed();
        var res6 = str6.substring(1, 2);
        //  console.log("res5 " + res5);
        //  console.log("res6 " + res6);

    };
    //===digit 5
    if (res5 == 0) {
        $(div2511).css("background", uColor);
        $(div2512).css("background", uColor);
        $(div2513).css("background", uColor);
        $(div2521).css("background", uColor);
        $(div2541).css("background", uColor);
        $(div2551).css("background", uColor);
        $(div2552).css("background", uColor);
        $(div2553).css("background", uColor);
        $(div2543).css("background", uColor);
        $(div2523).css("background", uColor);
    } else {
        if (res5 == 1) {
            $(div2513).css("background", uColor);
            $(div2523).css("background", uColor);
            $(div2543).css("background", uColor);
            $(div2553).css("background", uColor);
        } else {
            if (res5 == 2) {
                $(div2511).css("background", uColor);
                $(div2512).css("background", uColor);
                $(div2513).css("background", uColor);
                $(div2523).css("background", uColor);
                $(div2532).css("background", uColor);
                $(div2541).css("background", uColor);
                $(div2551).css("background", uColor);
                $(div2552).css("background", uColor);
                $(div2553).css("background", uColor);
            } else {
                if (res5 == 3) {
                    $(div2511).css("background", uColor);
                    $(div2512).css("background", uColor);
                    $(div2513).css("background", uColor);
                    $(div2523).css("background", uColor);
                    $(div2532).css("background", uColor);
                    $(div2543).css("background", uColor);
                    $(div2551).css("background", uColor);
                    $(div2552).css("background", uColor);
                    $(div2553).css("background", uColor);
                } else {
                    if (res5 == 4) {
                        $(div2511).css("background", uColor);
                        $(div2521).css("background", uColor);
                        $(div2532).css("background", uColor);
                        $(div2513).css("background", uColor);
                        $(div2523).css("background", uColor);
                        $(div2543).css("background", uColor);
                        $(div2553).css("background", uColor);
                    } else {
                        if (res5 == 5) {
                            $(div2511).css("background", uColor);
                            $(div2512).css("background", uColor);
                            $(div2513).css("background", uColor);
                            $(div2521).css("background", uColor);
                            $(div2532).css("background", uColor);
                            $(div2543).css("background", uColor);
                            $(div2551).css("background", uColor);
                            $(div2552).css("background", uColor);
                            $(div2553).css("background", uColor);
                        } else {
                            if (res5 == 6) {
                                $(div2511).css("background", uColor);
                                $(div2512).css("background", uColor);
                                $(div2513).css("background", uColor);
                                $(div2521).css("background", uColor);
                                $(div2532).css("background", uColor);
                                $(div2541).css("background", uColor);
                                $(div2543).css("background", uColor);
                                $(div2551).css("background", uColor);
                                $(div2552).css("background", uColor);
                                $(div2553).css("background", uColor);
                            } else {
                                if (res5 == 7) {
                                    $(div2511).css("background", uColor);
                                    $(div2512).css("background", uColor);
                                    $(div2513).css("background", uColor);
                                    $(div2523).css("background", uColor);
                                    $(div2543).css("background", uColor);
                                    $(div2553).css("background", uColor);
                                } else {
                                    if (res5 == 8) {
                                        $(div2511).css("background", uColor);
                                        $(div2512).css("background", uColor);
                                        $(div2513).css("background", uColor);
                                        $(div2521).css("background", uColor);
                                        $(div2523).css("background", uColor);
                                        $(div2532).css("background", uColor);
                                        $(div2541).css("background", uColor);
                                        $(div2543).css("background", uColor);
                                        $(div2551).css("background", uColor);
                                        $(div2552).css("background", uColor);
                                        $(div2553).css("background", uColor);
                                    } else {
                                        $(div2511).css("background", uColor);
                                        $(div2512).css("background", uColor);
                                        $(div2513).css("background", uColor);
                                        $(div2521).css("background", uColor);
                                        $(div2523).css("background", uColor);
                                        $(div2532).css("background", uColor);
                                        $(div2543).css("background", uColor);
                                        $(div2551).css("background", uColor);
                                        $(div2552).css("background", uColor);
                                        $(div2553).css("background", uColor);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    //===digit 6
    if (res6 == 0) {
        $(div2611).css("background", uColor);
        $(div2612).css("background", uColor);
        $(div2613).css("background", uColor);
        $(div2621).css("background", uColor);
        $(div2641).css("background", uColor);
        $(div2651).css("background", uColor);
        $(div2652).css("background", uColor);
        $(div2653).css("background", uColor);
        $(div2643).css("background", uColor);
        $(div2623).css("background", uColor);
    } else {
        if (res6 == 1) {
            $(div2613).css("background", uColor);
            $(div2623).css("background", uColor);
            $(div2643).css("background", uColor);
            $(div2653).css("background", uColor);
        } else {
            if (res6 == 2) {
                $(div2611).css("background", uColor);
                $(div2612).css("background", uColor);
                $(div2613).css("background", uColor);
                $(div2623).css("background", uColor);
                $(div2632).css("background", uColor);
                $(div2641).css("background", uColor);
                $(div2651).css("background", uColor);
                $(div2652).css("background", uColor);
                $(div2653).css("background", uColor);
            } else {
                if (res6 == 3) {
                    $(div2611).css("background", uColor);
                    $(div2612).css("background", uColor);
                    $(div2613).css("background", uColor);
                    $(div2623).css("background", uColor);
                    $(div2632).css("background", uColor);
                    $(div2643).css("background", uColor);
                    $(div2651).css("background", uColor);
                    $(div2652).css("background", uColor);
                    $(div2653).css("background", uColor);
                } else {
                    if (res6 == 4) {
                        $(div2611).css("background", uColor);
                        $(div2621).css("background", uColor);
                        $(div2632).css("background", uColor);
                        $(div2613).css("background", uColor);
                        $(div2623).css("background", uColor);
                        $(div2643).css("background", uColor);
                        $(div2653).css("background", uColor);
                    } else {
                        if (res6 == 5) {
                            $(div2611).css("background", uColor);
                            $(div2612).css("background", uColor);
                            $(div2613).css("background", uColor);
                            $(div2621).css("background", uColor);
                            $(div2632).css("background", uColor);
                            $(div2643).css("background", uColor);
                            $(div2651).css("background", uColor);
                            $(div2652).css("background", uColor);
                            $(div2653).css("background", uColor);
                        } else {
                            if (res6 == 6) {
                                $(div2611).css("background", uColor);
                                $(div2612).css("background", uColor);
                                $(div2613).css("background", uColor);
                                $(div2621).css("background", uColor);
                                $(div2632).css("background", uColor);
                                $(div2641).css("background", uColor);
                                $(div2643).css("background", uColor);
                                $(div2651).css("background", uColor);
                                $(div2652).css("background", uColor);
                                $(div2653).css("background", uColor);
                            } else {
                                if (res6 == 7) {
                                    $(div2611).css("background", uColor);
                                    $(div2612).css("background", uColor);
                                    $(div2613).css("background", uColor);
                                    $(div2623).css("background", uColor);
                                    $(div2643).css("background", uColor);
                                    $(div2653).css("background", uColor);
                                } else {
                                    if (res6 == 8) {
                                        $(div2611).css("background", uColor);
                                        $(div2612).css("background", uColor);
                                        $(div2613).css("background", uColor);
                                        $(div2621).css("background", uColor);
                                        $(div2623).css("background", uColor);
                                        $(div2632).css("background", uColor);
                                        $(div2641).css("background", uColor);
                                        $(div2643).css("background", uColor);
                                        $(div2651).css("background", uColor);
                                        $(div2652).css("background", uColor);
                                        $(div2653).css("background", uColor);
                                    } else {
                                        $(div2611).css("background", uColor);
                                        $(div2612).css("background", uColor);
                                        $(div2613).css("background", uColor);
                                        $(div2621).css("background", uColor);
                                        $(div2623).css("background", uColor);
                                        $(div2632).css("background", uColor);
                                        $(div2643).css("background", uColor);
                                        $(div2651).css("background", uColor);
                                        $(div2652).css("background", uColor);
                                        $(div2653).css("background", uColor);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    //===== end digit

    setInterval(function () {
        $(div7312).css("background", uColor);
        $(div7314).css("background", uColor);
        $(div8312).css("background", uColor);
        $(div8314).css("background", uColor);
    }, 3000);

};
//==================

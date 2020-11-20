jQuery(function () {



    let height_rate = [];

    for (var i = 0; i < $('.rate').length; i++) {
        height_rate.push($('.rate').eq(i).innerHeight());
    }


    var maxHei = height_rate[0];
    for (var i = 0; i < height_rate.length; i++) {
        if (height_rate[i] > maxHei) {
            maxHei = height_rate[i]
        }
    }

    console.log(maxHei)
    $('.adv_list').css({
        'margin-top': `${maxHei + 20}px`
    })


});



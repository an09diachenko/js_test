$(document).ready(function () {

    let wrapper = $('.calculator');
    let li = $('.calculator li');
    let overlay = $('.overlay');
    
    overlay.hide(0);
    
    li.each(function () {

        let a = $(this).attr('data-image');
        $(this).append('<img src="' + a + '">');
    });

    li.click(function () {

        let picAttr = $(this).attr('data-image');
        let priceAttr = $(this).attr('data-price');
        let coffeeName = $(this).text();
        
        overlay.find('img').attr('src', picAttr);
        overlay.find('.price').text(priceAttr);
        overlay.find('h2').text(coffeeName);
        overlay.find('.rez').text(priceAttr);
        overlay.show(0);
    });
    
    $('.close').click(function() {
        overlay.hide(0);
    });


    $('.plus').click(function() {       
        c = {
            count: Number($('.count').text()),
            price: Number($('.price').text()),
            rez: Number($('.rez').text()),
            countBlock: $('.count'),
            rezBlock: $('.rez'),
        }
        
        let b = c.rez + c.price;
        c.rezBlock.text(b);
        let countC = ++c.count;
        c.countBlock.text(countC);
        console.log(countC);
        
    });
    
    $('.minus').click(function() {       
        c = {
            count: Number($('.count').text()),
            price: Number($('.price').text()),
            rez: Number($('.rez').text()),
            countBlock: $('.count'),
            rezBlock: $('.rez'),
        }
        if (c.count>=2) {
        let b = c.rez - c.price;
        c.rezBlock.text(b);
        let countC = --c.count;
        c.countBlock.text(countC);
        console.log(countC);
            
        }
        
    });
});

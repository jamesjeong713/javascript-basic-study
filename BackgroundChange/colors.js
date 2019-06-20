var Links = { 
    setColor : function(color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length) {
            alist[i].style.color = color;
            i++;
        }
        $('a').css('color', color);
    }
}
var Body = {
    backgroundColor: function(color) {
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    },
    bodySetColor : function(color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    }
}

// self => whatever name is ok. just should get global value from onclick method(this)
function nightHandler(self1) { // this value is going here
    // var target = document.querySelector('body');
    if (self1.value === 'night') {
        Body.backgroundColor('black');
        Body.bodySetColor('white');
        // Body.bodySetValue('day');
        self1.value='day';
        Links.setColor('powderblue');
    } else {
        Body.backgroundColor('white');
        Body.bodySetColor('black');
        // Body.bodySetValue('night');
        self1.value='night';
        Links.setColor('blue');
    }
}
$(document).ready(function(){
    var curToggle = $('.toggle-js li');

    curToggle.on('click', function(e){
        e.preventDefault();

        curToggle.find('a').addClass('inactive');
        $(this).find('a').removeClass('inactive');

        var curNumberElem = $(this).index(),
            boxArticles = $('.list-js');
        console.log(curNumberElem);

        boxArticles.css('display','none');
        boxArticles.eq(curNumberElem).css('display','block');
    });
});
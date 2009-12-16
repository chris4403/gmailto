(function(){
    var as = document.querySelectorAll('a');
    for (var i = 0 , len = as.length ; i < len ; i ++){
        var a = as[i];
        if (a.href.indexOf('mailto:') == 0) {
            var base = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1%s';
            a.href = base.replace('%s', a.href.replace('?','&').replace('mailto:','&to=').replace('&subject=','&su='));
            a.target = '_blank';
        }
    }
})();

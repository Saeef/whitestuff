(function(andRedEyelikeWhiteStuff, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeWhiteStuff = {
        init: function() {
            this.pgCssDesktop();
            this.rowOne();
            this.mobile();
           
            
          
           
              

        }, //init
        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = '  ';


            var head = document.getElementsByTagName('head')[0];

            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(mainCss);
        }, //pgCssDesktop
       
 
        rowOne: function() {
            console.info('%c rowOne \u221a', 'background:blue;color:white;');
            

           

           

        },//rowOne

       
      

        mobile: function() {
            console.info('%c mobile \u221a', 'background:blue;color:white;');
            var mainCss = '@media screen and (max-width:780px) { .xxx {}  }';
            var head = document.getElementsByTagName('head')[0];

            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(mainCss);


        }//mobile

       

       

              


        

       
       

       

            
    };

    (function() {

        setTimeout(function() {
            SL.andRedEyelikeWhiteStuff.init();
        }, 120);

    })();




}.call(window.andRedEyelikeWhiteStuff || {}));
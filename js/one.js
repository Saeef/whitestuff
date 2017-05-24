(function(andRedEyelikeWhiteStuff, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeWhiteStuff = {
        init: function() {
            this.pgCssDesktop();
            this.rowOne();
            this.popup();
            this.mobile();

       

        }, //init
        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = '#stefano {position:fixed; bottom:10%; z-index:100; right:5%; width:268px; height:262px;} #stefano .header.openable {background:#717b86; padding-left:15px;  line-height:36px; margin:0; padding:0; padding-left:15px; color:#f2f2f2; font-size:14px; font-weight:normal;} #stefano fieldset {margin:0; padding:0;} .primo,.secondo,.terzo {float:left; margin-right:2.5em;} .terzo {margin-right:0;} ul .primo, ul .secondo, ul .terzo {list-style:none;} .borderOn {border:1px solid #6e7b86} .borderOff {border:none;} #stefano .subheading1 {padding:0 15px; margin:12px 0 16px; font-size:12px;} .adjust {font-weight:bold;} #stefano li a {font-size:12px; margin-bottom:.8em;}  ';


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


        popup: function() {
            var popup = document.createElement('div');
            popup.id = 'stefano';
            popup.className = 'borderOn';
            var body = document.getElementsByTagName('body')[0];
            popup.innerHTML = ' <div id="Catfacets" data-esp-click="269-1744-18407"> <div class="leftNAVIGATIONtoppattern"></div><div class="leftNAVIGATION" id="facetedNAV"> <form action="" method="post" id="facetedSearch" name="facetedSearch"> <fieldset> <div id="facetMiddleBlock"> <div class="box borderOff"> <div class="header openable opened">Shop by size <span id="pminus" class="pminus"> - </span> <span id="mplus" class="mplus" style="display:none;"> + </span> </div><div class="subheading1"> Browsing made easier:&nbsp;<span class="adjust">select your size</span> and only <span class="adjust">see items in stock for you!</span> </div><div class="subheading2" style="display: none;"> Select several sizes to broaden your choice. </div><ul id="facet_size"> <div class="primo"> <li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="4" data-count="4" data-displayvalue="4" data-count-orig="4"><a href="#">4 <span class="grey">(4)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="5" data-count="8" data-displayvalue="5" data-count-orig="8"><a href="#">5 <span class="grey">(8)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="6" data-count="266" data-displayvalue="6" data-count-orig="266"><a href="#">6 <span class="grey">(266)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="7" data-count="8" data-displayvalue="7" data-count-orig="8"><a href="#">7 <span class="grey">(8)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="8" data-count="380" data-displayvalue="8" data-count-orig="380"><a href="#">8 <span class="grey">(380)</span></a></li></div><div class="secondo"> <li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="10" data-count="319" data-displayvalue="10" data-count-orig="319"><a href="#">10 <span class="grey">(319)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="12" data-count="302" data-displayvalue="12" data-count-orig="302"><a href="#">12 <span class="grey">(302)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="14" data-count="282" data-displayvalue="14" data-count-orig="282"><a href="#">14 <span class="grey">(282)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="16" data-count="282" data-displayvalue="16" data-count-orig="282"><a href="#">16 <span class="grey">(282)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="18" data-count="238" data-displayvalue="18" data-count-orig="238"><a href="#">18 <span class="grey">(238)</span></a></li></div><div class="terzo"> <li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="S" data-count="31" data-displayvalue="S" data-count-orig="31"><a href="#">S <span class="grey">(31)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="SM" data-count="8" data-displayvalue="SM" data-count-orig="8"><a href="#">SM <span class="grey">(8)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="M" data-count="37" data-displayvalue="M" data-count-orig="37"><a href="#">M <span class="grey">(37)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="ML" data-count="5" data-displayvalue="ML" data-count-orig="5"><a href="#">ML <span class="grey">(5)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="L" data-count="41" data-displayvalue="L" data-count-orig="41"><a href="#">L <span class="grey">(41)</span></a></li></div></ul> </div></div></fieldset> </form> <div id="filterOptionsOnLeft" style="display:none"></div></div><div class="leftNAVIGATIONbottompattern"></div></div>  ';
            body.appendChild(popup);



        },//popup

       
      

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
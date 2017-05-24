(function(andRedEyelikeWhiteStuff, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeWhiteStuff = {
        init: function() {
            this.pgCssDesktop();
            this.rowOne();
            this.popup();
            this.selection();
            this.mobile();

       

        }, //init
        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = '#stefano {position:fixed; bottom:10%; z-index:100; right:5%; width:268px; height:262px;} #stefano .header.openable {background:#717b86; padding-left:15px;  line-height:36px; margin:0; padding:0; padding-left:15px; color:#f2f2f2; font-size:14px; font-weight:normal;} #stefano fieldset {margin:0; padding:0;} .primo,.secondo,.terzo {float:left; margin-right:2.5em;} .terzo {margin-right:0;} ul .primo, ul .secondo, ul .terzo {list-style:none;} .borderOn {border:1px solid #6e7b86} .borderOff {border:none;} #stefano .subheading1 {padding:0 15px; margin:12px 0 16px; font-size:12px;} .adjust {font-weight:bold;} #stefano li a {font-size:12px; margin-bottom:.8em;} #trone ul li a {background:url(/images/core/facetselected_bg.png) no-repeat left 2px; white-space:nowrap; padding-left:18px; cursor:pointer; font-weight:600;} #trone ul li.notselected a {background-image:url(/images/core/facet_bg.png);font-weight:normal;} ';


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
            popup.innerHTML = ' <div id="popwrapper" data-esp-click="269-1744-18407"> <div class="leftNAVIGATIONtoppattern"></div><div class="leftNAVIGATION" id="trone"> <form action="" method="post" id="sform" name="sform"> <fieldset> <div id="sMiddleBlock"> <div class="box borderOff"> <div class="header openable opened">Shop by size <span id="pminus" class="pminus"> - </span> <span id="mplus" class="mplus" style="display:none;"> + </span> </div><div class="subheading1"> Browsing made easier:&nbsp;<span class="adjust">select your size</span> and only <span class="adjust">see items in stock for you!</span> </div><div class="subheading2" style="display: none;"> Select several sizes to broaden your choice. </div><ul id="sizes_size" class="sizedboxed"> <div class="primo"> <li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="4" data-count="4" data-displayvalue="4" data-count-orig="4"><a>4 <span class="grey">(4)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="5" data-count="8" data-displayvalue="5" data-count-orig="8"><a>5 <span class="grey">(8)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="6" data-count="266" data-displayvalue="6" data-count-orig="266"><a>6 <span class="grey">(266)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="7" data-count="8" data-displayvalue="7" data-count-orig="8"><a>7 <span class="grey">(8)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="8" data-count="380" data-displayvalue="8" data-count-orig="380"><a>8 <span class="grey">(380)</span></a></li></div><div class="secondo"> <li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="10" data-count="319" data-displayvalue="10" data-count-orig="319"><a>10 <span class="grey">(319)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="12" data-count="302" data-displayvalue="12" data-count-orig="302"><a>12 <span class="grey">(302)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="14" data-count="282" data-displayvalue="14" data-count-orig="282"><a>14 <span class="grey">(282)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="16" data-count="282" data-displayvalue="16" data-count-orig="282"><a>16 <span class="grey">(282)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="18" data-count="238" data-displayvalue="18" data-count-orig="238"><a>18 <span class="grey">(238)</span></a></li></div><div class="terzo"> <li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="S" data-count="31" data-displayvalue="S" data-count-orig="31"><a>S <span class="grey">(31)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="SM" data-count="8" data-displayvalue="SM" data-count-orig="8"><a>SM <span class="grey">(8)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="M" data-count="37" data-displayvalue="M" data-count-orig="37"><a>M <span class="grey">(37)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="ML" data-count="5" data-displayvalue="ML" data-count-orig="5"><a>ML <span class="grey">(5)</span></a></li><li class="notselected" data-role="fsmfacetitem" data-checked="false" data-enabled="true" data-field="size" data-value="L" data-count="41" data-displayvalue="L" data-count-orig="41"><a>L <span class="grey">(41)</span></a></li></div></ul> </div></div></fieldset> </form> <div id="filterOptionsOnLeft" style="display:none"></div></div><div class="leftNAVIGATIONbottompattern"></div></div>  ';
            body.appendChild(popup);



        },//popup

        selection: function() {
             console.info('%c rowOne \u221a', 'background:blue;color:white;');
             
             window.addEventListener('click', function(e) {
                if(e.target.parentElement.className == "notselected" ) {
                     e.target.parentElement.className = "selected";
                     console.log(e);
                     //facet children
                     var fa = document.getElementById('facet_size').children;
                     for (var i=0; i < fa.length; i++) {
                        if(fa[i].attributes[5].value == e.target.parentElement.attributes[5].value) {
                            console.log('match');//if match
                            fa[i].className = "";
                            fa[i].attributes[2].value = true;
                           
                            var x = document.
                            getElementById('productDataOnPageContainer');
                            x.style.marginLeft = "-100%";

                        }//if
                    
                     
                     }//for
                    
                }//if notselected, selected

                else if (e.target.parentElement.className == "selected") {
                    e.target.parentElement.className = "notselected";
                    //facet children
                     var fa = document.getElementById('facet_size').children;
                     for (var i=0; i < fa.length; i++) {
                        if(fa[i].attributes[5].value == e.target.parentElement.attributes[5].value) {
                            console.log('match');//if match
                            fa[i].className = "notselected";
                            fa[i].attributes[2].value = false;
                        }//if
                    
                     
                     }//for
                
                }//else if selected, notselected

                

             });//click


        },//selection

       
      

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
(function(andRedEyelikeWhiteStuff, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeWhiteStuff = {
        init: function() {
            this.pgCssDesktop();
            this.popup();
            this.opclosEvt();
            this.plusMinusEvt();
            this.position();

        
        }, //init
        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = " #stefano{position:fixed;bottom:0.5%;left:77.25%;z-index:100} #popwrapper {position:relative; font-family:'Open Sans',sans-serif; width:100%; max-width:302px; background-color:rgba(243,242,242,.98); } #mainContainer {padding:0 .35em} .main {background-color:rgba(243,242,242,.25); border:1px solid rgba(97,106,117,.69); padding-bottom:.7em;box-shadow:0px 1px 1px 1px rgba(113,123,135,.22); } #opclos {position:absolute; top:-1px; right:-1px; height:42px; background-color: #616a75; width:45px; cursor:pointer; transition:height 1s;} .opclosPlus:after{content:'\\2B'; font-size:24px;line-height:40px;vertical-align:middle;padding:0 15px}.opclosMinus:after{content:'\\2014';font-size:20px; line-height:40px;vertical-align:middle;padding:0 12px}#opclos:active,#opclos:focus,:opclos:visited,#opclosMinus:active,#opclosMinus:focus,:opclosMinus:visited,#opclosPlus:active,#opclosPlus:focus,:opclosPlus:visited{outline:0}input:focus,input:active,input:hover,input:visited,input:checked{outline:0}.ckbox{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;background-color:#fafafa;border:1px solid #a9a9a9;padding:7px;border-radius:2px;display:inline-block;line-height:14px;height:14px;vertical-align:top;position:relative}.ckbox:active,.ckbox:checked:active{box-shadow:0 1px 2px rgba(0,0,0,0.05),inset 0 1px 3px rgba(0,0,0,0.1)}.ckbox:checked{background-color:##f7f7f7;border:1px solid #adb8c0;box-shadow:0 1px 2px rgba(0,0,0,0.05),inset 0 -3px 10px -2px rgba(0,0,0,0.05),inset 15px 10px 0 rgba(255,255,255,0.1);color:#99a1a7}.ckbox:checked:after{content:'\\2714';font-size:14px;position:absolute;top:0;left:1px;color:#475259}.ckbox+label{border:1px solid #a9a9a9;padding:7px;border-radius:2px;display:inline-block;position:relative;color:#5f6a6e}.ckbox+label:active,ckbox:checked+label:active{box-shadow:0 1px 2px rgba(0,0,0,0.05),inset 0 1px 3px rgba(0,0,0,0.1)}.ckbox:checked+label{background-color:#f7f7f7;border:1px solid #adb8c0;box-shadow:0 1px 2px rgba(0,0,0,0.05),inset 0 -3px 10px -2px rgba(0,0,0,0.05),inset 15px 10px 0 rgba(255,255,255,0.1);color:#475259}.ckbox:checked+label:after{content:'\\2714';font-size:14px;position:absolute;top:0;left:3px;color:#475259}.cktd{font-family:Arial,sans-serif;font-size:13px;line-height:24px;vertical-align:middle;padding:7px}input,label{cursor:pointer;text-decoration:none}input:active,input:focus,input:visited,label:active,label:focus,label:visited,span:active,span:focus,span:visited{outline:0}.datacount{font-size:13px;line-height:15px;vertical-align:initial}td.header{color:#fff;background-color:#717b87;height:41px;font-size:16px;vertical-align:middle;line-height:16px;letter-spacing:1px;padding-left:15px}td.subheading1{padding:10px 15px 15px 15px;font-size:14px;line-height:20px;color:rgba(99,99,99,0.9);letter-spacing:.15px}.bolder{font-weight:600;color:rgba(48,46,46,0.7)}  ";

            var head = document.getElementsByTagName('head')[0];
            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(mainCss);
        }, //pgCssDesktop
       
        popup: function() {
            console.info('%c popup \u221a', 'background:blue;color:white;');
            var popup = document.createElement('div');
            popup.id = 'stefano';
            popup.className = 'borderOn';
            var body = document.getElementsByTagName('body')[0];
            popup.innerHTML = ' <table id="popwrapper" class="main" align="center" id="main" width="302" height="286" align="center" border="0" cellpadding="0" cellspacing="0" data-esp-click="269-1744-18407"><tr><td valign="top" class="header">Shop your size<div id="opclos" class="opclosMinus"></div></td></tr><tr><td valign="top" class="subheading1">Browsing made easier: <span class="bolder">select your size</span> and only <span class="bolder">see items in stock for you!</span></td><td valign="top" class="subheading2" style="display: none;">Select several sizes to broaden your choice.</td></tr><tr><td valign="top" id="mainContainer" class="mainContainer"><table cellpadding="0" cellspacing="0" border="0" width="100% bg="#f3f2f2"><tr><td valign="top" class="cktd ckone notselected"><label for="ckbox1-1"><input type="checkbox" id="ckbox1-1" class="ckbox"/>4 <span class="datacount">(4)</span></label></td><td valign="top" class="cktd ckone notselected"><label for="ckbox1-2"><input type="checkbox" id="ckbox1-2" class="ckbox"/>5 <span class="datacount">(8)</span></label></td><td valign="top" class="cktd ckone notselected"><label for="ckbox1-3"><input type="checkbox" id="ckbox1-3" class="ckbox"/>6 <span class="datacount">(266)</span></label></td></tr><tr><td valign="top" class="cktd cktwo notselected"><label for="ckbox2-1"><input type="checkbox" id="ckbox2-1" class="ckbox"/>7 <span class="datacount">(8)</span></label></td><td valign="top" class="cktd cktwo notselected"><label for="ckbox2-2"><input type="checkbox" id="ckbox2-2" class="ckbox"/>8 <span class="datacount">(380)</span></label></td><td valign="top" class="cktd cktwo notselected"><label for="ckbox2-3"><input type="checkbox" id="ckbox2-3" class="ckbox"/>10 <span class="datacount">(319)</span></label></td></tr><tr><td valign="top" class="cktd ckthree notselected"><label for="ckbox3-1"><input type="checkbox" id="ckbox3-1" class="ckbox"/>12 <span class="datacount">(302)</span></label></td><td valign="top" class="cktd ckthree notselected"><label for="ckbox3-2"><input type="checkbox" id="ckbox3-2" class="ckbox"/>14 <span class="datacount">(282)</span></label></td><td valign="top" class="cktd ckthree notselected"><label for="ckbox3-3"><input type="checkbox" id="ckbox3-3" class="ckbox"/>16 <span class="datacount">(282)</span></label></td></tr><tr><td valign="top" class="cktd ckfour notselected"><label for="ckbox4-1"><input type="checkbox" id="ckbox4-1" class="ckbox"/>18 <span class="datacount">(238)</span></label></td><td valign="top" class="cktd ckfour notselected"><label for="ckbox4-2"><input type="checkbox" id="ckbox4-2" class="ckbox"/>S <span class="datacount">(31)</span></label></td><td valign="top" class="cktd ckfour notselected"><label for="ckbox4-3"><input type="checkbox" id="ckbox4-3" class="ckbox"/>SM <span class="datacount">(8)</span></label></td></tr><tr><td valign="top" class="cktd ckfive notselected"><label for="ckbox5-1"><input type="checkbox" id="ckbox5-1" class="ckbox"/>M <span class="datacount">(37)</span></label></td><td valign="top" class="cktd ckfive notselected"><label for="ckbox5-2"><input type="checkbox" id="ckbox5-2" class="ckbox"/>ML <span class="datacount">(5)</span></label></td><td valign="top" class="cktd ckfive notselected"><label for="ckbox5-3"><input type="checkbox" id="ckbox5-3" class="ckbox"/>L <span class="datacount">(41)</span></label></td></tr></table></td></tr></table> ';

            body.appendChild(popup);

        },//popup

        position: function() {
            console.info('%c position \u221a', 'background:blue;color:white;');




        },//position

        opclosEvt: function() {
            console.info('%c opclosEvt \u221a', 'background:blue;color:white;');
            //open/close event fun
            var opclos = document.getElementById('opclos');
            var subheading1 = document.querySelectorAll('.subheading1')[0];
            opclos.addEventListener('click',function(e) {
                //all-inputs
                var inp = document.querySelectorAll('.cktd label input');
                if(e.target.className == "opclosMinus") {
                    e.target.className = "opclosPlus";
                    document.getElementById('stefano').
                    style.bottom = "-31.075%";
                    document.getElementById('stefano').
                    style.left = "76.5%";
                    //if closed, remove checkmarks
                    for(var i=0; i<inp.length; i++) {
                        inp[i].checked = false;
                        inp[i].setAttribute('checked',false);
                        subheading1.innerText = "Browsing made easier: select your size and only see items in stock for you!";
                    }//for
                }//if minus and closing
                else if(e.target.className == "opclosPlus") {
                    e.target.className = "opclosMinus";
                    document.getElementById('stefano').
                    style.bottom = "0.25%";
                    document.getElementById('stefano').
                    style.left = "76.5%";
                    subheading1.innerText = "Browsing made easier: select your size and only see items in stock for you!";
                }//from closed/plus to minus

            },false);//opclos event   

        },//opclos

        plusMinusEvt: function() {
            console.info('%c plusMinusEvt \u221a', 'background:blue;color:white;');
            //label event on plu/minus
            var mainContainer = document.getElementById('mainContainer');
            var opclos = document.getElementById('opclos');
            var subheading2 = document.querySelectorAll('.subheading1')[0];
            mainContainer.addEventListener('click', function(e) {
                var count = 0;
                if(e.target.parentElement.nodeName == "LABEL" && opclos.className == "opclosMinus") {
                    count++;
                    if(count > 0) {
                        subheading2.innerText = "Select several sizes to broaden your choice.";
                    }

                }//clicked while minus
                //cant let u checked now
                else if(e.target.parentElement.nodeName == "LABEL" && opclos.className == "opclosPlus") {
                    e.preventDefault();
                }//clicked while plus   
                
            },false);//label event for plus/minus


        }//plusMinusEvt

            
    };//SL.andRedEyelikeWhiteStuff

    (function() {

        setTimeout(function() {
            SL.andRedEyelikeWhiteStuff.init();
        }, 120);

    })();




}.call(window.andRedEyelikeWhiteStuff || {}));


 

 

 
    
 
    







(function(andRedEyelikeWhiteStuff, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeWhiteStuff = {
        init: function() {
            this.pgCssDesktop();
            this.popup();
            //this.position();
            this.opclosEvt();
            this.subheading();
            
           

        
        }, //init
        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = ".closednow {border:none;box-shadow:none; padding-bottom:0; height:41px;} #stefano{position:relative;} #popwrapper {position:fixed;margin:0; bottom:1px;left:77.25%;z-index:100; font-family:'Open Sans',sans-serif; width:100%; min-width:302px; max-width:302px; background-color: rgba(243,242,242,.98); } #mainContainer {padding:0 .35em} .main {background-color:rgba(243,242,242,.25); border:1px solid rgba(97,106,117,.69); padding-bottom:.7em;box-shadow:0px 1px 1px 1px rgba(113,123,135,.22); } #opclos {position:absolute; top:0px; right:0px; height:41px; background-color: #616a75; width:45px; cursor:pointer; transition:height 1s;} .opclosPlus:after{content:'\\2B'; font-size:24px;line-height:41px;vertical-align:middle;padding:0 15px}.opclosMinus:after{content:'\\2014';font-size:20px; line-height:41px;vertical-align:middle;padding:0 12px}#opclos:active,#opclos:focus,:opclos:visited,#opclosMinus:active,#opclosMinus:focus,:opclosMinus:visited,#opclosPlus:active,#opclosPlus:focus,:opclosPlus:visited{outline:0}input:focus,input:active,input:hover,input:visited,input:checked{outline:0}.ckbox{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;background-color:#fafafa;border:1px solid #a9a9a9;padding:7px;border-radius:2px;display:inline-block;line-height:14px;height:14px;vertical-align:top;position:relative}.ckbox:active,.ckbox:checked:active{box-shadow:0 1px 2px rgba(0,0,0,0.05),inset 0 1px 3px rgba(0,0,0,0.1)}.ckbox:checked{background-color:##f7f7f7;border:1px solid #adb8c0;box-shadow:0 1px 2px rgba(0,0,0,0.05),inset 0 -3px 10px -2px rgba(0,0,0,0.05),inset 15px 10px 0 rgba(255,255,255,0.1);color:#99a1a7}.ckbox:checked:after{content:'\\2714';font-size:14px;position:absolute;top:0;left:1px;color:#475259}.ckbox+label{border:1px solid #a9a9a9;padding:7px;border-radius:2px;display:inline-block;position:relative;color:#5f6a6e}.ckbox+label:active,ckbox:checked+label:active{box-shadow:0 1px 2px rgba(0,0,0,0.05),inset 0 1px 3px rgba(0,0,0,0.1)}.ckbox:checked+label{background-color:#f7f7f7;border:1px solid #adb8c0;box-shadow:0 1px 2px rgba(0,0,0,0.05),inset 0 -3px 10px -2px rgba(0,0,0,0.05),inset 15px 10px 0 rgba(255,255,255,0.1);color:#475259}.ckbox:checked+label:after{content:'\\2714';font-size:14px;position:absolute;top:0;left:3px;color:#475259}.cktd{font-family:Arial,sans-serif;font-size:13px;line-height:24px;vertical-align:middle;padding:7px}input,label{cursor:pointer;text-decoration:none}input:active,input:focus,input:visited,label:active,label:focus,label:visited,span:active,span:focus,span:visited{outline:0}.datacount{font-size:13px;line-height:15px;vertical-align:initial}td.header{color:#fff;background-color:#717b87;height:41px;font-size:16px;vertical-align:middle;line-height:16px;letter-spacing:1px;padding-left:15px}td.subheading1{padding:10px 15px 15px 15px;font-size:14px;line-height:20px;color:rgba(99,99,99,0.9);letter-spacing:.15px}.bolder{font-weight:600;color:rgba(48,46,46,0.7)}  ";

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
            popup.innerHTML = ' <table id="popwrapper" class="main" align="center" id="main" width="302" height="286" align="center" border="0" cellpadding="0" cellspacing="0" data-esp-click="269-1744-18407"> <tr> <td valign="top" class="header"> Shop your size <div id="opclos" class="opclosMinus"></div></td></tr><tr> <td valign="top" class="subheading1">Browsing made easier: <span class="bolder">select your size</span> and only <span class="bolder">see items in stock for you!</span></td><td valign="top" class="subheading2" style="display: none;">Select several sizes to broaden your choice.</td></tr><tr> <td valign="top" id="mainContainer" class="mainContainer"> <table cellpadding="0" cellspacing="0" border="0" width="100% bg="#f3f2f2"> <tr> <td valign="top" class="cktd notselected"><label for="ckbox1-1"> <input type="checkbox" id="ckbox1-1" class="ckbox"/>4 <span class="datacount">(4)</span></label> </td><td valign="top" class="cktd notselected"><label for="ckbox1-2"> <input type="checkbox" id="ckbox1-2" class="ckbox"/>5 <span class="datacount">(8)</span></label> </td><td valign="top" class="cktd notselected"><label for="ckbox1-3"> <input type="checkbox" id="ckbox1-3" class="ckbox"/>6 <span class="datacount">(266)</span></label> </td></tr><tr> <td valign="top" class="cktd notselected"><label for="ckbox2-1"> <input type="checkbox" id="ckbox2-1" class="ckbox"/>7 <span class="datacount">(8)</span></label> </td><td valign="top" class="cktd notselected"><label for="ckbox2-2"> <input type="checkbox" id="ckbox2-2" class="ckbox"/>8 <span class="datacount">(380)</span></label> </td><td valign="top" class="cktd notselected"><label for="ckbox2-3"> <input type="checkbox" id="ckbox2-3" class="ckbox"/>10 <span class="datacount">(319)</span></label> </td></tr><tr> <td valign="top" class="cktd notselected"><label for="ckbox3-1"> <input type="checkbox" id="ckbox3-1" class="ckbox"/>12 <span class="datacount">(302)</span></label> </td><td valign="top" class="cktd notselected"><label for="ckbox3-2"> <input type="checkbox" id="ckbox3-2" class="ckbox"/>14 <span class="datacount">(282)</span></label> </td><td valign="top" class="cktd notselected"><label for="ckbox3-3"> <input type="checkbox" id="ckbox3-3" class="ckbox"/>16 <span class="datacount">(282)</span></label> </td></tr><tr> <td valign="top" class="cktd notselected"><label for="ckbox4-1"> <input type="checkbox" id="ckbox4-1" class="ckbox"/>18 <span class="datacount">(238)</span></label> </td><td valign="top" class="cktd notselected"><label for="ckbox4-2"> <input type="checkbox" id="ckbox4-2" class="ckbox"/>S <span class="datacount">(31)</span></label></td><td valign="top" class="cktd notselected"><label for="ckbox4-3"> <input type="checkbox" id="ckbox4-3" class="ckbox"/>SM <span class="datacount">(8)</span></label></td></tr><tr> <td valign="top" class="cktd notselected"><label for="ckbox5-1"> <input type="checkbox" id="ckbox5-1" class="ckbox"/>M <span class="datacount">(37)</span></label></td><td valign="top" class="cktd notselected"><label for="ckbox5-2"> <input type="checkbox" id="ckbox5-2" class="ckbox"/>ML <span class="datacount">(5)</span></label></td><td valign="top" class="cktd notselected"><label for="ckbox5-3"> <input type="checkbox" id="ckbox5-3" class="ckbox"/>L <span class="datacount">(41)</span></label></td></tr></table> </td></tr></table> ';

            body.appendChild(popup);

        },//popup

        // position: function() {
        //     console.info('%c position \u221a', 'background:blue;color:white;');
        //     var popwrapper = document.getElementById('popwrapper');
            
        //     function reheight() {
        //         popwrapper.style.height = ((34 * window.innerHeight)/100).toFixed(1) + "px";
                    
        //     }//reheight
        //     reheight();
        //     window.addEventListener('resize', reheight,false);
                
            
            
            
        // },//position


        opclosEvt: function() {
            console.info('%c opclosEvt \u221a', 'background:blue;color:white;');
            //open/close event fun
            var opclos = document.getElementById('opclos');
            var subheading1 = document.querySelectorAll('.subheading1')[0];
            var inp = document.querySelectorAll('.cktd label input');
            var selecto = document.querySelectorAll('.cktd');
            opclos.addEventListener('click',function(e) {
                console.log(e);
                if(e.target.className == "opclosMinus") {
                    e.target.className = "opclosPlus";
                    document.getElementById('popwrapper').
                    className = "closednow";
                    document.querySelectorAll('.subheading1')[0].
                    style.display = "none";
                    document.querySelectorAll('.subheading2')[0].
                    style.display = "none";
                    document.getElementById('mainContainer').
                    style.display = "none";
                    document.getElementById('popwrapper').
                    style.bottom = "0.5px";
                    //if closed, remove checkmarks
                    for(var i=0; i < inp.length; i++) {
                        inp[i].checked = false;
                    }//for
                    
                    subheading1.innerText = "Browsing made easier: select your size and only see items in stock for you!";
                   
                }//if minus and closing
                else if(e.target.className == "opclosPlus") {
                    e.target.className = "opclosMinus";
                    document.getElementById('popwrapper').
                    className = "main";
                    document.querySelectorAll('.subheading1')[0].
                    style.display = "block";
                    document.querySelectorAll('.subheading2')[0].
                    style.display = "none";
                    document.getElementById('mainContainer').
                    style.display = "block";
                    document.getElementById('popwrapper').
                    style.bottom =  "1px";
                    subheading1.innerText = "Browsing made easier: select your size and only see items in stock for you!";
                }//from closed/plus to minus

            },false);//opclos event   

        },//opclos

        subheading: function() {
            console.info('%c subheading \u221a', 'background:blue;color:white;');
            var mainContainer = document.getElementById('mainContainer');
            var opclos = document.getElementById('opclos');
            var subheading01 = document.querySelectorAll('.subheading1')[0];
            var subheading02 = document.querySelectorAll('.subheading1')[0];
            var selected = document.querySelectorAll('.cktd');
            var nosel = [];
            var yessel = [];
            var count = 0;

            function classremoved(e) {
                debugger;
                e.target.parentElement.parentElement.className = "cktd notselected";
                console.log('removed');
                return true;
            }//classremoved

            function oneselected() {
                subheading01.style.display = "none";
                subheading02.style.display = "block";
                subheading02.innerText = "Select several sizes to broaden your choice.";
                
            }//oneselected

            function noneselected() {
                subheading02.style.display = "none";
                subheading01.style.display = "block";
                subheading01.innerText = "Browsing made easier: select your size and only see items in stock for you!";
                
            }//allselected

            function howmanySelected(e) {
                e = e || null;
                if(nosel.length >= selected.length) {
                        allselected();
                }//elseifallselected

                else if(nosel.length > 1 && nosel < selected.length) {
                    subheading01.style.display = "none";
                    subheading02.style.display = "block";
                    subheading02.innerText = "Select several sizes to broaden your choice.";
                }
                 
                else if(nosel.length == 1) {
                    subheading01.style.display = "none";
                    subheading02.style.display = "block";
                    subheading02.innerText = "Select several sizes to broaden your choice.";
                }//elseifoneselected
            
                else if(nosel.length === 0 ) {
                    subheading02.style.display = "none";
                    subheading01.style.display = "block";
                    subheading01.innerText = "Browsing made easier: select your size and only see items in stock for you!";
                
                }//elseifnoneselected   

            }//howmanyselected
            howmanySelected();

            //subheading event
            mainContainer.addEventListener('click', function(e) {
                count >= 3 ? count=0 : count;
                count++;
                   if((e.target.parentElement.nodeName == "LABEL" || "INPUT" || "TD" || "SPAN") && (opclos.className == "opclosMinus"))  {
                   
                    console.log(count);
                    if(count == 1) {
                        
                        if(e.target.parentElement.parentElement.classList.contains('notselected')) {
                            
                            e.target.parentElement.parentElement.className = "cktd selected";
                            nosel.push('selected');
                            howmanySelected(e);
                            if(nosel.length >= 0) {
                                subheading01.style.display = "none";
                                subheading02.style.display = "block";
                                subheading02.innerText = "Select several sizes to broaden your choice.";
                            }
                            count++;
                        }//ifselected

                        else if(e.target.parentElement.classList.contains('notselected')) {
                            
                            e.target.parentElement.className = "cktd selected";
                            nosel.push('selected');
                            howmanySelected(e);
                            if(nosel.length >= 0) {
                                subheading01.style.display = "none";
                                subheading02.style.display = "block";
                                subheading02.innerText = "Select several sizes to broaden your choice.";
                            }
                            count++;
                        }//ifselected
                       
                        else if(e.target.parentElement.parentElement.classList.contains('selected')) {
                            //event fires multiple times
                            e.target.parentElement.parentElement.className = "cktd notselected";
                            nosel.pop('selected');
                            howmanySelected(e);
                            if(nosel.length == 0) {
                                subheading02.style.display = "none";
                                subheading01.style.display = "block";
                                subheading01.innerText = "Browsing made easier: select your size and only see items in stock for you!";
                            }
                            count++;
                        }//elseifselected

                        else if(e.target.parentElement.classList.contains('selected')) {
                            //event fires multiple times
                            e.target.parentElement.className = "cktd notselected";
                            nosel.pop('selected');
                            howmanySelected(e);
                            if(nosel.length == 0) {
                                subheading02.style.display = "none";
                                subheading01.style.display = "block";
                                subheading01.innerText = "Browsing made easier: select your size and only see items in stock for you!";
                            }
                            count++;
                        }//elseifselected

                    }//goesroundandroundoneceonly count
        
                }//clicked while minus 

                else if(e.target.parentElement.nodeName == "LABEL" && opclos.className == "opclosPlus") {
                    //cant let u checkboxes
                    e.preventDefault();
                    
                }//clicked while plus
             
                    
                },false);//label event for plus/minus  
            

        }//subheading

        

            
    };//SL.andRedEyelikeWhiteStuff

    (function() {

        setTimeout(function() {
            SL.andRedEyelikeWhiteStuff.init();
        }, 10);

    })();




}.call(window.andRedEyelikeWhiteStuff || {}));
(function(andRedEyelikeWhiteStuff, undefined) {
    this.messcope = document.getElementById('messcope');
    this.messone = document.getElementById('messone');
    this.messtwo = document.getElementById('messtwo');
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeWhiteStuff = {
        init: function() {
            this.pgCssDesktop();
            this.popup();
            this.opclosEvt();
            this.pairing();
            this.boardMessage();
            this.iniState();

        },
        //init
        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = ".closednow {border:none;box-shadow:none; padding-bottom:0; height:41px;} #stefano{position:relative;} #popwrapper {position:fixed;margin:0; bottom:1px;left:77.25%;z-index:100; font-family:'Open Sans',sans-serif; width:100%; min-width:302px; max-width:302px; background-color: rgba(243,242,242,.98); } #mainContainer {padding:0 .35em} .main {background-color:rgba(243,242,242,.25); border:1px solid rgba(97,106,117,.69); padding-bottom:.7em;box-shadow:0px 1px 1px 1px rgba(113,123,135,.22); } #opclos {position:absolute; top:0px; right:0px; height:41px; background-color: #616a75; width:45px; cursor:pointer; transition:height 1s;} .opclosPlus:after{content:'\\2B'; font-size:24px;line-height:41px;vertical-align:middle;padding:0 15px}.opclosMinus:after{content:'\\2014';font-size:20px; line-height:41px;vertical-align:middle;padding:0 12px}#opclos:active,#opclos:focus,:opclos:visited,#opclosMinus:active,#opclosMinus:focus,:opclosMinus:visited,#opclosPlus:active,#opclosPlus:focus,:opclosPlus:visited{outline:0}input:focus,input:active,input:hover,input:visited,input:checked{outline:0}.ckbox{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;background-color:#fafafa;border:1px solid #a9a9a9;padding:7px;border-radius:2px;display:inline-block;line-height:14px;height:14px;vertical-align:top;position:relative}.ckbox:active,.ckbox:checked:active{box-shadow:0 1px 2px rgba(0,0,0,0.05),inset 0 1px 3px rgba(0,0,0,0.1)}.ckbox:checked{background-color:##f7f7f7;border:1px solid #adb8c0;box-shadow:0 1px 2px rgba(0,0,0,0.05),inset 0 -3px 10px -2px rgba(0,0,0,0.05),inset 15px 10px 0 rgba(255,255,255,0.1);color:#99a1a7}.ckbox:checked:after{content:'\\2714';font-size:14px;position:absolute;top:0;left:1px;color:#475259}.ckbox+label{border:1px solid #a9a9a9;padding:7px;border-radius:2px;display:inline-block;position:relative;color:#5f6a6e}.ckbox+label:active,ckbox:checked+label:active{box-shadow:0 1px 2px rgba(0,0,0,0.05),inset 0 1px 3px rgba(0,0,0,0.1)}.ckbox:checked+label{background-color:#f7f7f7;border:1px solid #adb8c0;box-shadow:0 1px 2px rgba(0,0,0,0.05),inset 0 -3px 10px -2px rgba(0,0,0,0.05),inset 15px 10px 0 rgba(255,255,255,0.1);color:#475259}.ckbox:checked+label:after{content:'\\2714';font-size:14px;position:absolute;top:0;left:3px;color:#475259}.cktd{font-family:Arial,sans-serif;font-size:13px;line-height:24px;vertical-align:middle;padding:7px}input,label{cursor:pointer;text-decoration:none}input:active,input:focus,input:visited,label:active,label:focus,label:visited,span:active,span:focus,span:visited{outline:0}.datacount{font-size:13px;line-height:15px;vertical-align:initial}td.header{color:#fff;background-color:#717b87;height:41px;font-size:16px;vertical-align:middle;line-height:16px;letter-spacing:1px;padding-left:15px}td.subheading1{padding:10px 15px 15px 15px;font-size:14px;line-height:20px;color:rgba(99,99,99,0.9);letter-spacing:.15px}.bolder{font-weight:600;color:rgba(48,46,46,0.7)} #tmessa {position:fixed; right:3%; top:12%; z-index:100; font-size:12px;}  ";

            var head = document.getElementsByTagName('head')[0];
            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(mainCss);
        },
        //pgCssDesktop

        popup: function() {
            console.info('%c popup \u221a', 'background:blue;color:white;');
            //evt if plus/minus exist
            var transfer = document.getElementById('facet_size').children;
            var popup = document.createElement('div');
            popup.id = 'stefano';
            popup.className = 'borderOn';
            var body = document.getElementsByTagName('body')[0];
            var columns = 0;
            var numfor = 0;
            //top section
            var data = '<table id="popwrapper" class="main re-re" align="center" width="302" height="286" border="0" cellpadding="0" cellspacing="0" data-esp-click="269-1744-18407"> <tbody><tr> <td valign="top" class="header"> Shop your size <div id="opclos" class="opclosMinus"></div></td></tr><tr> <td valign="top" id="subheading1" class="subheading1">Browsing made easier: <span class="bolder">select your size</span> and only <span class="bolder">see items in stock for you!</span></td><td valign="top" id="subheading2" class="subheading2" style="display: none;">Select several sizes to broaden your choice.</td></tr><tr> <td valign="top" id="mainContainer" class="mainContainer"> <table cellpadding="0" cellspacing="0" border="0" width="100% bg="#f3f2f2"><tr>';
            //midsection
            for (var i = 0; i < transfer.length; i++) {
                if (columns === 3) {
                    data += '<tr>';
                    columns = 0;
                }

                data += '<td valign="top" class="' + 'cktd ' + transfer[i].className + '" data-checked="' + transfer[i].attributes[2].value + '" data-value="' + transfer[i].attributes[5].value + '" data-count="' + transfer[i].attributes[6].value + '" data-displayvalue="' + transfer[i].attributes[7].value + '"><label for="ckbox' + numfor + '"><input type="checkbox" id="ckbox' + numfor + '" class="ckbox"/>' + transfer[i].attributes[5].value + ' (' + transfer[i].attributes[6].value + ')' + '</label></td>';
                columns++;
                numfor++;
                if (columns === 3) {
                    data += '</tr>';
                }
                //3 tds per tr  °if

            }
            //for

            //bottom section
            data += ' </table> </td></tr></table>  ';
            popup.innerHTML = data;
            body.appendChild(popup);

        },
        //popup

        opclosEvt: function() {
            console.info('%c opclosEvt \u221a', 'background:blue;color:white;');
            //open/close event fun
            var opclos = document.getElementById('opclos');
            var subheading1 = document.querySelectorAll('.subheading1')[0];
            var inp = document.querySelectorAll('.cktd label input');
            var selecto = document.querySelectorAll('.cktd');
            opclos.addEventListener('click', function(e) {
                if (e.target.className == "opclosMinus") {
                    e.target.className = "opclosPlus";
                    document.getElementById('popwrapper').className = "closednow";
                    document.querySelectorAll('.subheading1')[0].style.display = "none";
                    document.querySelectorAll('.subheading2')[0].style.display = "none";
                    document.getElementById('mainContainer').style.display = "none";
                    document.getElementById('popwrapper').style.bottom = "0.5px";
                    //if closed, remove checkmarks
                    for (var i = 0; i < inp.length; i++) {
                        inp[i].checked = false;
                    }
                    //for
                    for (var i = 0; i < selecto.length; i++) {
                        selecto[i].className = "cktd notselected";
                    }
                    //for

                    subheading1.innerText = "Browsing made easier: select your size and only see items in stock for you!";

                }//if minus and closing
                else if (e.target.className == "opclosPlus") {
                    e.target.className = "opclosMinus";
                    document.getElementById('popwrapper').className = "main";
                    document.querySelectorAll('.subheading1')[0].style.display = "block";
                    document.querySelectorAll('.subheading2')[0].style.display = "none";
                    document.getElementById('mainContainer').style.display = "block";
                    document.getElementById('popwrapper').style.bottom = "1px";
                    subheading1.innerText = "Browsing made easier: select your size and only see items in stock for you!";
                }
                //from closed/plus to minus

            }, false);
            //opclos event   

        },
        //opclos

        iniState: function() {
            console.info('%c iniState \u221a', 'background:blue;color:white;');
            //popa table
            var popa = document.querySelectorAll('.cktd');
            
            var index;
            //any filter selected
            var filterState = document.getElementById('facet_size').children;
            for(var b=0; b < filterState.length; b++) {
                if(filterState[b].className == "") {
                    index = b;
                      debugger;
                    for(var h=0; h < popa.length; h++) {
                        if(index == h) {
                            
                            messcope.innerText = 'index to match: ' + index + ' ';
                            popa[h].className = 'cktd';
                            messone = 'class ';
                            messone.innerText += popa[h].className;
                            popa[h].children[0].children[0].style.backgroundColor = 'rgb(51, 51, 51)';
                            messone.innerText += 'setting initial background: ' + popa[h].children[0].
                            children[0].style.backgroundColor;
                            messtwo.innerText += "loops through size filter and newly created popup. to find selected checkboxes, then matches them to newly created popup during init phase";
                        }

                    }//for innerloop
                }//if filter    
                else if(filterState[b].className == "notselected") {
                    index = b; 
                    debugger;
                    for(var h=0; h < popa.length; h++) {
                        if(index == h) {
                            messcope = 'index to match: ';
                            messcope.innerText += index + ' ';
                            popa[h].className = 'cktd notselected';
                            messone = 'class: ';
                            messone += popa[h].className + '\n';
                            popa[h].children[0].children[0].style.backgroundColor = '';
                            messone.innerText += 'setting initial background: ' + popa[h].children[0].
                            children[0].style.backgroundColor + '\n';
                            messtwo = "";
                            messtwo.innerText += "loops through size filter and newly created popup to find selected checkboxex, then matches them to newly created popup - fake load time event";
                        }//if

                    }//for innerloop


                }//elseif filter    

               
            }//for outerloop




        },//iniState

        pairing: function() {
            console.info('%c pairing \u221a', 'background:blue;color:white;');
            var filter = document.getElementById('facet_size');
            var pop = document.querySelectorAll('.cktd');
            var initarget,atarget,btarget,dvalue,dcount,starget;
            console.clear();
            debugger;
            filter.addEventListener('click', function(e) {
                for(var i=0; i < pop.length; i++) {
                    //target must be a Number                                                            
                    initarget = e.target.innerText;
                    //if 2nd option => '('
                    if( initarget.charAt(0) == '(' ) {
                       starget = e.target.parentElement.innerText;
                       atarget = parseInt(starget);
                       if(atarget == pop[i].attributes[3].value) {
                            //console.log('target is: ' + atarget);
                            messcope.innerText = atarget;
                            if( pop[i].children[0].children[0].style.backgroundColor === '') {
                                pop[i].children[0].children[0].style.backgroundColor = "rgb(51, 51, 51)";
                                messone.innerText = 'pop[i].children[0].children[0].style.backgroundColor = "rgb(51, 51, 51)"';
                                messtwo.innerText = 'pairing function fires up an event on site size-filter checkbox and loops through popup table';
                            }//transparent
                            else if(pop[i].children[0].children[0].style.backgroundColor === "rgb(51, 51, 51)") {
                                pop[i].children[0].children[0].style.backgroundColor = "";
                                messone.innerText = 'pop[i].children[0].children[0].style.backgroundColor = ""';
                                messtwo.innerText = 'pairing function fires up an event on existing sized-filter checkbox then loops through newly created popup table';
                            }//else     
                            
                       }//atarget
                    }//if span option

                    else if(Number.isInteger(parseInt(initarget))  ) {
                        btarget = parseInt(initarget);
                         //possible outcomes are:  ^10 (319)$, ^(277)$
                        if (btarget == pop[i].attributes[3].value) {
                            //console.log('target is: ' + btarget);
                            messcope.innerText = btarget;
                            if( pop[i].children[0].children[0].style.backgroundColor === '') {
                                pop[i].children[0].children[0].style.backgroundColor = "rgb(51, 51, 51)";
                                messone.innerText = 'pop[i].children[0].children[0].style.backgroundColor = "rgb(51, 51, 51)"';
                                messtwo.innerText = 'pairing function fires up an event on site size-filter checkbox and loops through popup table';
                            }//transparent
                            else if(pop[i].children[0].children[0].style.backgroundColor === "rgb(51, 51, 51)") {
                                pop[i].children[0].children[0].style.backgroundColor = "";
                                messone.innerText = 'pop[i].children[0].children[0].style.backgroundColor = ""';
                                messtwo.innerText = 'pairing function fires up an event on site size-filter checkbox and loops through popup table';
                            }//else

                        }//if btarget

                    }//else if number option
                                                                                                
                }//for loop

            }, false); //site filter event

        },//pairing fn

        boardMessage: function() {
               console.info('%c boardMessage \u221a', 'background:blue;color:white;'); 
               var tmesa = document.createElement('section');
               tmesa.id = 'tmessa';
               tmesa.innerHTML = ' <table id="rmess" align="center" width="400" height="200" border="1" cellpadding="5" cellspacing="0" style="background-color:#f1f1f1;"> <tr> <td valign="top" width="100" style="vertical-align:middle; text-align:center; "> Target Scope: </td><td valign="top" width="230" id="messcope" style="vertical-align:middle; color:#fff; background-color:#000;"> </td></tr><tr> <td valign="top" width="100" style="vertical-align:middle;text-align:center;"> Target elements: </td><td valign="top" width="230" id="messone" style="vertical-align:middle;color:#fff; background-color:#000;"> </td></tr><tr> <td valign="top" width="100" style="vertical-align:middle;text-align:center;"> Related info: </td><td valign="top" width="230" id="messtwo" style="vertical-align:middle;color:#fff;background-color:#000;"> </td></tr></table> ';
               document.body.appendChild(tmesa);

        }//boardMessage

    };
    //SL.andRedEyelikeWhiteStuff

    (function() {

        setTimeout(function() {
            SL.andRedEyelikeWhiteStuff.init();
        }, 10);

    })();

}.call(window.andRedEyelikeWhiteStuff || {}));

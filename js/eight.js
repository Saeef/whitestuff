(function() {

    var $ = window.jQuery;

    var WS_02 = {
        init: function() {

            this.mainCss({testing: false});
            this.start();
            this.bindEvents();
            this.opclosEvt();
            this.subheading();
            this.tdheights();
            this.url();
            

        },
        mainCss: function(){
            
            var mainCss=".closednow {border:none;box-shadow:none; padding-bottom:0; height:41px;} #stefano{position:relative;} #popwrapper {position:fixed;margin:0; bottom:1px;left:77.25%;z-index:100; font-family:'Open Sans',sans-serif; width:100%; min-width:302px; max-width:302px; background-color: rgba(243,242,242,.98); } #mainContainer {padding:0 .35em} .main {background-color:rgba(243,242,242,.25); border:1px solid rgba(97,106,117,.69); padding-bottom:.7em;box-shadow:0px 1px 1px 1px rgba(113,123,135,.22); } #opclos {position:absolute; top:0px; right:0px; height:41px; background-color: #616a75; width:45px; cursor:pointer; transition:height 1s;} .opclosPlus:after{content:'\\2B'; font-size:24px;line-height:41px;vertical-align:middle;padding:0 15px}.opclosMinus:after{content:'\\2014';font-size:20px; line-height:41px;vertical-align:middle;padding:0 12px}#opclos:active,#opclos:focus,:opclos:visited,#opclosMinus:active,#opclosMinus:focus,:opclosMinus:visited,#opclosPlus:active,#opclosPlus:focus,:opclosPlus:visited{outline:0}input:focus,input:active,input:hover,input:visited,input:checked{outline:0}.ckbox{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;background-color:#fafafa;border:1px solid #a9a9a9;padding:7px;border-radius:2px;display:inline-block;line-height:14px;height:14px;vertical-align:top;position:relative}.ckbox:active,.ckbox:checked:active{box-shadow:0 1px 2px rgba(0,0,0,0.05),inset 0 1px 3px rgba(0,0,0,0.1)}.ckbox:checked{background-color:##f7f7f7;border:1px solid #adb8c0;box-shadow:0 1px 2px rgba(0,0,0,0.05),inset 0 -3px 10px -2px rgba(0,0,0,0.05),inset 15px 10px 0 rgba(255,255,255,0.1);color:#99a1a7}.ckbox:checked:after{content:'\\2714';font-size:14px;position:absolute;top:0;left:1px;color:#475259}.ckbox+label{border:1px solid #a9a9a9;padding:7px;border-radius:2px;display:inline-block;position:relative;color:#5f6a6e}.ckbox+label:active,ckbox:checked+label:active{box-shadow:0 1px 2px rgba(0,0,0,0.05),inset 0 1px 3px rgba(0,0,0,0.1)}.ckbox:checked+label{background-color:#f7f7f7;border:1px solid #adb8c0;box-shadow:0 1px 2px rgba(0,0,0,0.05),inset 0 -3px 10px -2px rgba(0,0,0,0.05),inset 15px 10px 0 rgba(255,255,255,0.1);color:#475259}.ckbox:checked+label:after{content:'\\2714';font-size:14px;position:absolute;top:0;left:3px;color:#475259}.cktd{font-family:Arial,sans-serif;font-size:13px;line-height:24px;vertical-align:middle;padding:7px}input,label{cursor:pointer;text-decoration:none}input:active,input:focus,input:visited,label:active,label:focus,label:visited,span:active,span:focus,span:visited{outline:0}.datacount{font-size:13px;line-height:15px;vertical-align:initial}td.header{color:#fff;background-color:#717b87;height:41px;font-size:16px;vertical-align:middle;line-height:16px;letter-spacing:1px;padding-left:15px}td.subheading1{padding:10px 15px 15px 15px;font-size:14px;line-height:20px;color:rgba(99,99,99,0.9);letter-spacing:.15px}.bolder{font-weight:600;color:rgba(48,46,46,0.7)} @media screen and (max-width:1360px) {#popwrapper {position:fixed; left:74%;}}  @media screen and (max-width:1300px) {#popwrapper {position:fixed; left:73%;}} @media screen and (max-width:1200px) {#popwrapper {position:fixed; left:72%;}} @media screen and (max-width:1050px) {#popwrapper {position:fixed; left:69%;}}" ;


            mainCss += '#popwrapper li{display: block; float: left; width: 33.33%; padding: 3px; box-sizing: border-box;}';

            var headofdoc = document.getElementsByTagName('head')[0];
            var s = document.createElement('style');
            s.setAttribute('type', 'text/css');
            s.appendChild(document.createTextNode(mainCss));
            headofdoc.appendChild(s);
        },
        start: function(){
            $(WS_02.construct.Table()).appendTo('body');
            
        },
        construct: {
            Table: function(){
                var html = ''+
                '<table id="popwrapper" class="main re-re" align="center" width="302" height="286" border="0" cellpadding="0" cellspacing="0" data-esp-click="269-1744-18407"> <tbody><tr> <td valign="top" class="header"> Shop your size <div id="opclos" class="opclosMinus"></div></td></tr><tr> <td valign="top" id="subheading1" class="subheading1">Browsing made easier: <span class="bolder">select your size</span> and only <span class="bolder">see items in stock for you!</span></td><td valign="top" id="subheading2" class="subheading2" style="display: none;">Select several sizes to broaden your choice.</td></tr>';

                html += '<tr><td><ul id="mainContainer">';
                html += WS_02.construct.NewContent();
                html += '</ul></td></tr>';
                html += '</tbody></table>';

                return html;
            },
            NewContent: function(){

                var html = '';

                $('#facet_size li').each(function(index, el) {
                    var value = $(this).data('value');
                    var eleHtml = $(this).find('a').html();
                    var checked = $(this).hasClass('notselected') == false;


                    html += '<li class="cktd ">';
                    html += '<label data-value="'+value+'" for="ckbox1-'+value+'">';

                    if(checked){
                        html += '<input type="checkbox" id="ckbox1-'+value+'" class="ckbox" checked/>';
                    
                     
                    }
                    
                    else {
                        html += '<input type="checkbox" id="ckbox1-'+value+'" class="ckbox"/>';
                    }
                    
                    html += eleHtml;
                    html += '</label>';
                    html += '</li>';

                });

                return html;
            }
        },
        inputChange: function(){
                $('#popwrapper li input').change( function() {
                var val = $(this).closest('label').data('value');
                $('#facet_size li[data-value="'+val+'"]').click();

                $('#popwrapper').addClass('re-re');
            });
        },
        bindEvents: function(){
            
            WS_02.inputChange();

            setInterval( function(){
                var liNumber = $('#facet_size li.notselected').length;
                var niNumber = $('#popwrapper li input:not(:checked)').length;
                if(liNumber !== niNumber){
                    if($('#popwrapper').hasClass('re-re') == false){
                        var cont = WS_02.construct.NewContent();
                        $('#popwrapper ul').html('');
                        $('#popwrapper ul').html(cont);
                        $('#popwrapper').addClass('re-re');

                        WS_02.inputChange();
                    }
                }

               

            }, 250);

            $('#facet_size li').on('click', function() {
                $('#popwrapper').removeClass('re-re');
            });


        },


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
                     for(var i=0; i < selecto.length; i++) {
                        selecto[i].className = "cktd notselected";
                    }//for
                    
                    subheading1.innerText = "Browsing made easier: <span class='bolder'>select your size</span> and only <span class='bolder'>see items in stock for you!</span>";
                   
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
                    subheading1.innerHTML = "Browsing made easier: <span class='bolder'>select your size</span> and only <span class='bolder'>see items in stock for you!</span>";
                }//from closed/plus to minus

            },false);//opclos event   

             

        },//opclos

        subheading: function() {
            
            var mainContainer = document.getElementById('mainContainer');
            var opclos = document.getElementById('opclos');
            var subheading01 = document.querySelectorAll('.subheading1')[0];
            var subheading02 = document.querySelectorAll('.subheading1')[0];
            var selected = document.querySelectorAll('.cktd');
          
            //subheading event
            mainContainer.addEventListener('click', function(e) {
                 var count = 0;
                 //find out how many selected
                 var xy = document.getElementById('mainContainer');
                 for(var i=0; i< xy.children.length; i++) {
                         if(xy.children[i].children[0].children[0].checked == true) {
                            count++;
                         }
                         count;
                 }

                 if(count > 0) {
                        subheading01.style.display = "none";
                        subheading02.style.display = "block";
                        subheading02.innerText = "Select several sizes to broaden your choice.";

                    } else {
                        subheading02.style.display = "none";
                        subheading01.style.display = "block";
                        subheading01.innerText = "Browsing made easier: select your size and only see items in stock for you!";
                    }

                        
            },false);//shop ur size evt
            

        },//subheading

        tdheights: function() {
            var tds = document.getElementById('facet_size').children;
            switch(tds.length) {
                case 4:
                    document.getElementById('mainContainer').style.overflow = "auto";
                    document.getElementById('mainContainer').style.marginBottom = "9em";
                    document.getElementById('mainContainer').style.padding = "0 1em";    
                    break;
                case 5:
                    document.getElementById('mainContainer').style.overflow = "auto";
                    document.getElementById('mainContainer').style.marginBottom = "9em";
                    document.getElementById('mainContainer').style.padding = "0 1em";     
                    break;
                case 6:
                    document.getElementById('mainContainer').style.overflow = "auto";
                    document.getElementById('mainContainer').style.marginBottom = "9em";
                    document.getElementById('mainContainer').style.padding = "0 1em";     
                    break;        
                case 7:
                    document.getElementById('mainContainer').style.overflow = "auto";
                    document.getElementById('mainContainer').style.marginBottom = "7em";
                    document.getElementById('mainContainer').style.padding = "0 1em";  
                    break;
                case 8:
                    document.getElementById('mainContainer').style.overflow = "auto";
                    document.getElementById('mainContainer').style.marginBottom = "7em";
                    document.getElementById('mainContainer').style.padding = "0 1em";  
                    break;
                case 9:
                    document.getElementById('mainContainer').style.overflow = "auto";
                    document.getElementById('mainContainer').style.marginBottom = "7em";
                    document.getElementById('mainContainer').style.padding = "0 1em";  
                    break;        
                case 10:
                    document.getElementById('mainContainer').style.overflow = "auto";
                    document.getElementById('mainContainer').style.marginBottom = "7em";
                    document.getElementById('mainContainer').style.padding = "0 1em";  
                    break;
                case 11:
                    document.getElementById('mainContainer').style.overflow = "auto";
                    document.getElementById('mainContainer').style.marginBottom = "7em";
                    document.getElementById('mainContainer').style.padding = "0 1em";  
                    break;
                case 12:
                    document.getElementById('mainContainer').style.overflow = "auto";
                    document.getElementById('mainContainer').style.marginBottom = "7em";
                    document.getElementById('mainContainer').style.padding = "0 1em";  
                    break;        
                default:
                    document.getElementById('mainContainer').style.overflow = "";
                    document.getElementById('mainContainer').style.marginBottom = "";
                    document.getElementById('mainContainer').style.padding = "0 .8em";  


            }//switch tds

        



        },

        url: function() {
            var host = "www.whitestuff.com";
            var path1 = "/bargains/womens-bargains/";
            var path2 = "/sale/womens-sale/nightwear/";
            var plusminus = document.getElementById('opclos');
            var popwrap = document.getElementById('popwrapper');
            var cp = window.location.pathname;

            var currentPath = function(cp) {

                if(cp == window.location.pathname) {
                    console.log('u have not moved');
                }
                else if(cp == path1 || path2) {
                    console.log('moved to an authorized path');
                    //plusorminus
                    if(plusminus.className == "opclosMinus") {
                        console.log('donthavetodonothing-classes resized automatically');

                    }//if minus

                    //it already closed here
                    else if(plusminus.className == "opclosPlus") {
                        console.log('keep popoup closed');
                        //close it down
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

                    }//if plus


                }
                else if(cp.indexOf('/bargains/womens-bargains/') || cp.indexOf('/sale/womens-sale/nightwear/') !== 0) {
                    console.log('not an authorized path');
                }
                console.log(cp);
                return cp
            }//currentPath fun

            




         }//url





    };


    (function pollForjQuery() {
        if (window.jQuery !== undefined) {
            //try {
                WS_02.init();
            //} catch (err) {
              //  console.log('TRY ERROR: '+ err);
            }
        //} else {
          //  setTimeout(pollForjQuery, 25);
        //}
    })();

})();

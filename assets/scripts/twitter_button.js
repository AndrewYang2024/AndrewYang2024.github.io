//KO-fi.com
//SERVED FROM CDN
//version 2
var twitter_button = twitter_button ||
    (function () {
        var style = "";
        var html = "";
        var color = "";
        var text = "";
        var id = "";
        return {
            init: function (pText, pColor, pId) {
                color = pColor;
                text = pText;
                id = pId;
                style =
                    "img.twitterButtonimg{display: initial!important;vertical-align:middle;height:13px!important;width:20px!important;padding-top:0!important;padding-bottom:0!important;border:none;margin-top:0;margin-right:0px!important;margin-left:0!important;margin-bottom:3px!important;content:url('/assets/img/EpsButton.png')}.twitterButtonimg:after{vertical-align:middle;height:25px;padding-top:0;padding-bottom:0;border:none;margin-top:0;margin-right:6px;margin-left:0;margin-bottom:4px!important;content:url('https://storage.ko-fi.com/cdn/whitelogo.svg')}.btn-container{display:inline-block!important;white-space:nowrap;min-width:10px}span.twitterButtontext{color:#fff !important;letter-spacing: -0.15px!important;text-wrap:none;vertical-align:middle;line-height:33px !important;padding:0;text-align:center;text-decoration:none!important; text-shadow: 0 1px 1px rgba(34, 34, 34, 0.05);}.twitterButtontext a{color:#fff !important;text-decoration:none:important;}.twitterButtontext a:hover{color:#fff !important;text-decoration:none}a.twitterButton-button{box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);line-height:36px!important;min-width:10px;display:inline-block!important;background-color:#29abe0;padding:2px 12px !important;text-align:center !important;border-radius:7px;color:#fff;cursor:pointer;overflow-wrap:break-word;vertical-align:middle;border:0 none #fff !important;font-family:'Quicksand',Helvetica,Century Gothic,sans-serif !important;text-decoration:none;text-shadow:none;font-weight:700!important;font-size:14px !important}a.twitterButton-button:visited{color:#fff !important;text-decoration:none !important}a.twitterButton-button:hover{opacity:.85;color:#f5f5f5 !important;text-decoration:none !important}a.twitterButton-button:active{color:#f5f5f5 !important;text-decoration:none !important}.twitterButtontext img.twitterButtonimg {height:15px!important;width:22px!important;display: initial;animation: twitterButton-wiggle 3s infinite;}";
                style = style + "@keyframes twitterButton-wiggle{0%{transform:rotate(0) scale(1.5)}60%{transform:rotate(0) scale(1.5)}75%{transform:rotate(0) scale(1.68)}80%{transform:rotate(0) scale(1.65)}84%{transform:rotate(-10deg) scale(1.65)}88%{transform:rotate(10deg) scale(1.65)}92%{transform:rotate(-10deg) scale(1.65)}96%{transform:rotate(10deg) scale(1.65)}100%{transform:rotate(0) scale(1.5)}}";
                style = "<style>" + style + "</style>";
                html =
                    "<link href='https://fonts.googleapis.com/css?family=Quicksand:400,700' rel='stylesheet' type='text/css'>";
                html +=
                    '<div class=btn-container><a title="Leave a comment through Twitter" class="twitterButton-button" style="background-color:[color];" href="[id]" target="_blank"> <span class="twitterButtontext">[text]<img src="/assets/img/EpsButton.png" class="twitterButtonimg"/></span></a></div>';
            },
            getHTML: function () {
                var rtn = style + html.replace("[color]", color).replace("[text]", text).replace("[id]", id);
                return rtn;
            },
            draw: function () {
                document.writeln(style + html.replace("[color]", color).replace("[text]", text).replace("[id]", id));
            }
        };
    }());
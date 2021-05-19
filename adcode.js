        function getAdcode() {
            return transform();
        }

        function transform() {
            template = getTemplate();
            template = replaceMacrosInTemplate(template);
            return template;
        }
        function replaceMacrosInTemplate(template) {
            const auctionId = "1234";
            const crid = "410996721";
            const divId = "banner" + auctionId + crid;
            const landingPageURl = "{ad_desc}";
            template = template.replace("{ad_desc}", landingPageURl);
            template = template.replace("{auctionId}", auctionId);
            template = template.replace("{bannerDiv}", divId);
            template = template.replace("{adcode}", getGCreativeAnime());
            return template;
        }
        
        function getTemplate() {
            return '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
                "<html xmlns=\"http://www.w3.org/1999/xhtml\">" +
                "<head>" +
                '<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">' +
                '<meta http-equiv="Content-Type" content="text/html; charset=<tag:charset />">' +
                '<style type="text/css">' +
                'a.anchorhref{position: absolute;display: block; width: 100%; height: 100%; left: 0;right: 0;top: 0;bottom: 0;z-index: 997;overflow: hidden; background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAFoEvQfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA1JREFUeNpj+P//PwMACPwC/njEsrAAAAAASUVORK5CYII=") right top no-repeat;}' +
                'a,img{outline:0}*{margin:0;padding:0}ol,ul{list-style:none}img{border:none}a{text-decoration:none;cursor:pointer}.cf:after,.cf:before{content:" ";display:table}.cf:after{clear:both}body{-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;-o-text-size-adjust:none;text-size-adjust:none}' +
                ".ios_fix{width: 1px; min-width: 100%; *width: 100%;}" +
                ".wrapper{position: relative;width:298px;margin: 0 auto;height:248px;border: solid 1px #ccc;background: #fff;}" +
                ".image-box{ z-index: 998; width: 100%; height: auto; position: absolute; left: 42%; margin-left: -124px;}" +
//                ".image-box img{width: 100%; height: auto;}" +
                ".btm_content{ padding: 180px 0 40px; }" +
                "li .anchortext{ padding: 0 145px 0 19px; }" +
                "li .anchortext a{display: block; line-height:20px;max-height: 40px;word-wrap: break-word; overflow: hidden;" +
                "font-size:15px;" +
                "color:#000;" +
                'font-family: "asap_regular",arial,sans-serif;' +
                "font-weight:normal;" +
                "text-transform: capitalize;" +
                "}" +
                "li .anchortext a span{font-size: 12px;}" +
                '.header_wrap{z-index:999;position: absolute; bottom: 15px; left: 19px;font-size: 12px;line-height: 16px;font-family: "asap_regular",arial,sans-serif;}' +
                ".a_domain{float: left;}" +
                ".header_wrap span{padding:3px}" +
                ".spon{float: right;}" +
                ".header_wrap, .brand_txt{color: #000;" +
                "ul{ padding: 0; margin:0; }" +
                "li{overflow: hidden;position: relative;}" +
                "li table{table-layout: fixed;width: 100%; word-wrap:break-word;}" +
                "</style>" +
                "</head>" +
                "<body>" +
                '<div class="ios_fix">' +
                '<div class="wrapper">' +
                '<div class="image-box" id={bannerDiv}>' + 
//                '<a class="image-link" href = "{{ad_href}}" target = "_top">' +
//                '<img src = "{{ad_image}}">' +
//                '</a>' +
                '{adcode}' +
                "</div>" +
//                '<div class="btm_content">' +
//                "<ul>" +
//                "<li>" +
//                '<table width="100%" cellpadding="0" cellspacing="0" border="0" align="left">' +
//                "<tr>" +
//                '<td width="100%" align="left" valign="middle" height="42">' +
//                '<div class="anchortext"><a><span>Click to Learn More</span></a></div>' +
//                "</td>" +
//                "</tr>" +
//                "</table>" +
//                "</li>" +
//                "</ul>" +
//                "</div>" +
//                '<a id="mediaNetAnchor" target="_blank" href="#" class="anchorhref"></a>' +
//                '<div class="header_wrap">' +
//                '<div class="a_domain">{ad_desc}</div>' +
//                "<span>|</span>" +
//                '<div class="spon">{Sponsored}</div>' +
//                "</div>" +
//                '<ad_preferences adChoicesCss="top:2px;right:22px" hideIconCss="top:2px;right:2px;" />' +
                "</div>" +
                "</div>" +
                "</body>" +
                "</html>";
        }


function getSTemplate() {
    return "<!DOCTYPE html><html lang=\"en\"><head>    <meta charset=\"UTF-8\">    <title>Share</title></head><body><div class=\"str-adunit str-card-exp str-adunit-300x250 str-{{#isi.text}}isi str-{{action}}{{/isi.text}}{{^isi.text}}{{action}}{{/isi.text}}\">    <div class=\"str-thumbnail\" style=\"display: block;\">        {{adcode}}    </div>    <style>.str-adunit-300x250 {        box-sizing: border-box;        width: 300px;        height: 250px;        max-width: 300px;        max-height: 250px;        font-family: sans-serif;        font-size: 14px;        line-height: 15px;        color: black;        background-color: white;        margin: 0 auto;        display: flex;        flex-direction: column;        overflow: hidden;        border: 1px solid #eee;        text-align: left;    }    .str-adunit-300x250 .str-title, .str-adunit-300x250 .str-description, .str-adunit-300x250 .str-advertiser {        color: black !important;    }    .str-adunit-300x250 .thumbnail-wrapper {        width: 100% !important;        height: auto !important;        background-color: #FFF;    }    .str-adunit-300x250 .str-thumbnail {        width: 100%;        height: auto;        background-size: cover;        background-position: 50%;        background-repeat: no-repeat;        padding-bottom: 56.25%;    }    .str-adunit-300x250 .str-hosted-video .str-thumbnail, .str-adunit-300x250 .str-autoplay .str-thumbnail {        padding-bottom: 0 !important;    }    .str-adunit-300x250 .str-title {        height: 56px;        overflow: hidden;        padding: 4px;        font-weight: bold;    }    .str-adunit-300x250 .str-bottom {        padding: 0 4px 4px 4px;        display: flex;        justify-content: space-between;        font-size: 12px;        line-height: 13px;        align-items: center;    }    .str-adunit-300x250 .str-brand-logo {        display: inline-block;        width: 16px;        height: 16px;        max-width: 16px;        max-height: 16px;        background-size: contain;        background-position: 50%;        background-repeat: no-repeat;        vertical-align: middle;        border: none;        background-color: inherit;        margin-left: 4px;    }    .str-adunit-300x250 .str-advertiser {        font-size: 11px;        line-height: 14px;    }    .str-adunit-300x250 .str-cta {        background-color: #596777;        color: white;        border-radius: 5px;        padding: 4px 10px;        text-align: center;    }    .str-adunit-300x250:hover .str-cta {        background-color: #4BD1A6;    }    .str-adunit-300x250 .str-opt-out-container {        top: 0 !important;        bottom: unset !important;        border-radius: 0 0 0 8px !important;    }    .str-adunit-300x250.str-isi .str-cta {        display: none !important;    }    .str-adunit-300x250.str-isi .str-opt-out-container {        bottom: unset !important;        top: 0 !important;        right: 0 !important;        left: unset !important;        flex-direction: row-reverse !important;        border-radius: 0 0 0 8px !important;    }    .str-adunit-300x250.str-isi {        padding-bottom: 0px !important;        font-size: 13.5px;    }    .str-adunit-300x250.str-isi .str-opt-out-label {        margin: 0 0 0 8px !important;    }    .str-adunit-300x250.str-isi .thumbnail-wrapper {        overflow: hidden;    }    .str-adunit-300x250.str-isi .thumbnail-wrapper, .str-adunit-300x250.str-isi .str-thumbnail {        height: 100px !important;    }    .str-adunit-300x250.str-isi .str-title {        height: auto !important;    }    .str-adunit-300x250.str-isi .str-isi-bundle {        height: 75px !important;        padding: 0 5px 0;    }    .str-adunit-300x250 .str-isi-headline {        border-bottom: 1px solid #eee;        font-size: 90% !important    }</style></div></body></html>";
}
window.getAdCode = getAdcode;
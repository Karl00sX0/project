jQuery(document).ready((
    function(e)
    {"use strict";e("form.contactForm").submit((function(){var a=e(this).find(".form-group")
    ,t=!1,s=/^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    if(a.children("input").each(
        (function(){var a=e(this),r=a.attr("data-rule");
        if(void 0!==r)
        {
            var n=!1,i=r.indexOf(":",0);
            if(i>=0)
            {
                var l=r.substr(i+1,r.length);r=r.substr(0,i)
            }else r=r.substr(i+1,r.length);
            switch(r)
            {
                case"required":""===a.val()&&(t=n=!0);
                break;
                case"minlen":a.val().length<parseInt(l)&&(t=n=!0);
                break;
                case"email":s.test(a.val())||(t=n=!0);
                break;
                case"checked":a.is(":checked")||(t=n=!0);
                break;
                case"regexp":(l=new RegExp(l)).test(a.val())||(t=n=!0)}a.next(".validation").html(n?void 0!==a.attr("data-msg")?a.attr("data-msg"):"wrong Input":"").show("blind")}}))
                ,a.children("textarea").each((
                    function(){var a=e(this),s=a.attr("data-rule");
                    if(void 0!==s){var r=!1,n=s.indexOf(":",0);
                    if(n>=0){var i=s.substr(n+1,s.length);
                        s=s.substr(0,n)}
                        else s=s.substr(n+1,s.length);
                        switch(s){
                            case"required":""===a.val()&&(t=r=!0);
                            break;
                            case"minlen":a.val().length<parseInt(i)&&(t=r=!0)}a.next(".validation").html(r?null!=a.attr("data-msg")?a.attr("data-msg"):"wrong Input":"").show("blind")}})),t)
                            return!1;
                            var r=e(this).serialize(),n=e(this).attr("action");
                            return n||(n="contactform/contactform.php"),e.ajax(
                                {type:"POST",url:n,data:r,success:function(a){
                                    "OK"==a?(e("#sendmessage").addClass("show"),
                                    e("#errormessage").removeClass("show"),
                                    e(".contactForm").find("input, textarea").val("")):(e("#sendmessage").removeClass("show"),
                                    e("#errormessage").addClass("show"),e("#errormessage").html(a))}}),!1}))}));
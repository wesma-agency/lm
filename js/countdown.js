!function(t){t.fn.downCount=function(e,n){var o=t.extend({date:null,offset:null},e);o.date||t.error("Date is not defined."),Date.parse(o.date)||t.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");var r=this,d=function(){var t=new Date,e=t.getTime()+6e4*t.getTimezoneOffset();return new Date(e+36e5*o.offset)};var f=setInterval(function(){var t=new Date(o.date)-d();if(t<0)return clearInterval(f),void(n&&"function"==typeof n&&n());var e=36e5,i=Math.floor(t/864e5),a=Math.floor(t%864e5/e),u=Math.floor(t%e/6e4),s=Math.floor(t%6e4/1e3);i=String(i).length>=2?i:"0"+i,a=String(a).length>=2?a:"0"+a,u=String(u).length>=2?u:"0"+u,s=String(s).length>=2?s:"0"+s;var c=1===i?"день":"дней",l=1===a?"hour":"hours",h=1===u?"minute":"minutes",w=1===s?"second":"seconds";r.find(".countdown-days").text(i),r.find(".countdown-hours").text(a),r.find(".countdown-minutes").text(u),r.find(".countdown-seconds").text(s),r.find(".countdown-days-ref").text(c),r.find(".countdown-hours-ref").text(l),r.find(".countdown-minutes-ref").text(h),r.find(".countdown-seconds-ref").text(w)},1e3)}}(jQuery);
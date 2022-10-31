/*
 Template Name: Admiria - Bootstrap 4 Admin Dashboard
 Author: Themesbrand
 File: Widgets Init
 */


!function(t){"use strict";var i=function(){};i.prototype.init=function(){t(".peity-pie").each(function(){t(this).peity("pie",t(this).data())}),t(".peity-donut").each(function(){t(this).peity("donut",t(this).data())}),c3.generate({bindto:"#donut-chart",data:{columns:[["Desktops",78],["Mobiles",40],["Tablets",25]],type:"donut"},donut:{title:"Candidates",width:40,label:{show:!1}},color:{pattern:["#f06292","#6d60b0","#009688"]}}),t(".knob").knob()},t.Widgets=new i,t.Widgets.Constructor=i}(window.jQuery),function(t){"use strict";t.Widgets.init()}(window.jQuery);

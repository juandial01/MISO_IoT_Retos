/*
 Highcharts Gantt JS v9.1.2 (2021-06-16)

 Tree Grid

 (c) 2016-2021 Jon Arild Nygard

 License: www.highcharts.com/license
*/
'use strict';(function(h){"object"===typeof module&&module.exports?(h["default"]=h,module.exports=h):"function"===typeof define&&define.amd?define("highcharts/modules/treegrid",["highcharts"],function(E){h(E);h.Highcharts=E;return h}):h("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(h){function E(h,t,B,u){h.hasOwnProperty(t)||(h[t]=u.apply(null,B))}h=h?h._modules:{};E(h,"Core/Axis/BrokenAxis.js",[h["Core/Axis/Axis.js"],h["Core/Series/Series.js"],h["Extensions/Stacking.js"],h["Core/Utilities.js"]],
function(h,t,B,u){var y=u.addEvent,n=u.find,x=u.fireEvent,v=u.isArray,l=u.isNumber,a=u.pick,r;(function(r){function m(){"undefined"!==typeof this.brokenAxis&&this.brokenAxis.setBreaks(this.options.breaks,!1)}function u(){this.brokenAxis&&this.brokenAxis.hasBreaks&&(this.options.ordinal=!1)}function F(){var b=this.brokenAxis;if(b&&b.hasBreaks){for(var D=this.tickPositions,a=this.tickPositions.info,A=[],f=0;f<D.length;f++)b.isInAnyBreak(D[f])||A.push(D[f]);this.tickPositions=A;this.tickPositions.info=
a}}function c(){this.brokenAxis||(this.brokenAxis=new w(this))}function b(){var b=this.options.connectNulls,a=this.points,d=this.xAxis,A=this.yAxis;if(this.isDirty)for(var f=a.length;f--;){var e=a[f],q=!(null===e.y&&!1===b)&&(d&&d.brokenAxis&&d.brokenAxis.isInAnyBreak(e.x,!0)||A&&A.brokenAxis&&A.brokenAxis.isInAnyBreak(e.y,!0));e.visible=q?!1:!1!==e.options.visible}}function p(){this.drawBreaks(this.xAxis,["x"]);this.drawBreaks(this.yAxis,a(this.pointArrayMap,["y"]))}function z(b,D){var d=this,A=
d.points,f,e,q,C;if(b&&b.brokenAxis&&b.brokenAxis.hasBreaks){var c=b.brokenAxis;D.forEach(function(D){f=c&&c.breakArray||[];e=b.isXAxis?b.min:a(d.options.threshold,b.min);A.forEach(function(d){C=a(d["stack"+D.toUpperCase()],d[D]);f.forEach(function(f){if(l(e)&&l(C)){q=!1;if(e<f.from&&C>f.to||e>f.from&&C<f.from)q="pointBreak";else if(e<f.from&&C>f.from&&C<f.to||e>f.from&&C>f.to&&C<f.from)q="pointInBreak";q&&x(b,q,{point:d,brk:f})}})})})}}function d(){var b=this.currentDataGrouping,a=b&&b.gapSize;b=
this.points.slice();var d=this.yAxis,A=this.options.gapSize,f=b.length-1,e;if(A&&0<f)for("value"!==this.options.gapUnit&&(A*=this.basePointRange),a&&a>A&&a>=this.basePointRange&&(A=a),e=void 0;f--;)e&&!1!==e.visible||(e=b[f+1]),a=b[f],!1!==e.visible&&!1!==a.visible&&(e.x-a.x>A&&(e=(a.x+e.x)/2,b.splice(f+1,0,{isNull:!0,x:e}),d.stacking&&this.options.stacking&&(e=d.stacking.stacks[this.stackKey][e]=new B(d,d.options.stackLabels,!1,e,this.stack),e.total=0)),e=a);return this.getGraphPath(b)}r.compose=
function(a,D){if(-1===a.keepProps.indexOf("brokenAxis")){a.keepProps.push("brokenAxis");var l=t.prototype;l.drawBreaks=z;l.gappedPath=d;y(a,"init",c);y(a,"afterInit",m);y(a,"afterSetTickPositions",F);y(a,"afterSetOptions",u);y(D,"afterGeneratePoints",b);y(D,"afterRender",p)}return a};var w=function(){function b(b){this.hasBreaks=!1;this.axis=b}b.isInBreak=function(b,a){var d=b.repeat||Infinity,f=b.from,e=b.to-b.from;a=a>=f?(a-f)%d:d-(f-a)%d;return b.inclusive?a<=e:a<e&&0!==a};b.lin2Val=function(a){var d=
this.brokenAxis;d=d&&d.breakArray;if(!d||!l(a))return a;var c;for(c=0;c<d.length;c++){var f=d[c];if(f.from>=a)break;else f.to<a?a+=f.len:b.isInBreak(f,a)&&(a+=f.len)}return a};b.val2Lin=function(a){var d=this.brokenAxis;d=d&&d.breakArray;if(!d||!l(a))return a;var c=a,f;for(f=0;f<d.length;f++){var e=d[f];if(e.to<=a)c-=e.len;else if(e.from>=a)break;else if(b.isInBreak(e,a)){c-=a-e.from;break}}return c};b.prototype.findBreakAt=function(b,a){return n(a,function(a){return a.from<b&&b<a.to})};b.prototype.isInAnyBreak=
function(d,c){var p=this.axis,f=p.options.breaks||[],e=f.length,q;if(e&&l(d)){for(;e--;)if(b.isInBreak(f[e],d)){var C=!0;q||(q=a(f[e].showPoints,!p.isXAxis))}var z=C&&c?C&&!q:C}return z};b.prototype.setBreaks=function(d,c){var p=this,f=p.axis,e=v(d)&&!!d.length;f.isDirty=p.hasBreaks!==e;p.hasBreaks=e;f.options.breaks=f.userOptions.breaks=d;f.forceRedraw=!0;f.series.forEach(function(b){b.isDirty=!0});e||f.val2lin!==b.val2Lin||(delete f.val2lin,delete f.lin2val);e&&(f.userOptions.ordinal=!1,f.lin2val=
b.lin2Val,f.val2lin=b.val2Lin,f.setExtremes=function(b,a,d,e,f){if(p.hasBreaks){for(var q=this.options.breaks||[],c;c=p.findBreakAt(b,q);)b=c.to;for(;c=p.findBreakAt(a,q);)a=c.from;a<b&&(a=b)}h.prototype.setExtremes.call(this,b,a,d,e,f)},f.setAxisTranslation=function(){h.prototype.setAxisTranslation.call(this);p.unitLength=void 0;if(p.hasBreaks){var d=f.options.breaks||[],e=[],c=[],z=a(f.pointRangePadding,0),n=0,r,w=f.userMin||f.min,m=f.userMax||f.max,g;d.forEach(function(g){r=g.repeat||Infinity;
l(w)&&l(m)&&(b.isInBreak(g,w)&&(w+=g.to%r-w%r),b.isInBreak(g,m)&&(m-=m%r-g.from%r))});d.forEach(function(k){H=k.from;r=k.repeat||Infinity;if(l(w)&&l(m)){for(;H-r>w;)H-=r;for(;H<w;)H+=r;for(g=H;g<m;g+=r)e.push({value:g,move:"in"}),e.push({value:g+k.to-k.from,move:"out",size:k.breakSize})}});e.sort(function(g,k){return g.value===k.value?("in"===g.move?0:1)-("in"===k.move?0:1):g.value-k.value});var k=0;var H=w;e.forEach(function(g){k+="in"===g.move?1:-1;1===k&&"in"===g.move&&(H=g.value);0===k&&l(H)&&
(c.push({from:H,to:g.value,len:g.value-H-(g.size||0)}),n+=g.value-H-(g.size||0))});p.breakArray=c;l(w)&&l(m)&&l(f.min)&&(p.unitLength=m-w-n+z,x(f,"afterBreaks"),f.staticScale?f.transA=f.staticScale:p.unitLength&&(f.transA*=(m-f.min+z)/p.unitLength),z&&(f.minPixelPadding=f.transA*(f.minPointOffset||0)),f.min=w,f.max=m)}});a(c,!0)&&f.chart.redraw()};return b}();r.Additions=w})(r||(r={}));return r});E(h,"Core/Axis/GridAxis.js",[h["Core/Axis/Axis.js"],h["Core/Axis/AxisDefaults.js"],h["Core/Globals.js"],
h["Core/Utilities.js"]],function(h,t,B,u){var y=B.dateFormats,n=u.addEvent,x=u.defined,v=u.erase,l=u.find,a=u.isArray,r=u.isNumber,m=u.merge,G=u.pick,K=u.timeUnits,F=u.wrap,c;(function(b){function c(g,k){var b={width:0,height:0};k.forEach(function(k){k=g[k];if(u.isObject(k,!0)){var a=u.isObject(k.label,!0)?k.label:{};k=a.getBBox?a.getBBox().height:0;a.textStr&&!r(a.textPxLength)&&(a.textPxLength=a.getBBox().width);var d=r(a.textPxLength)?Math.round(a.textPxLength):0;a.textStr&&(d=Math.round(a.getBBox().width));
b.height=Math.max(k,b.height);b.width=Math.max(d,b.width)}});"treegrid"===this.options.type&&this.treeGrid&&this.treeGrid.mapOfPosToGridNode&&(b.width+=this.options.labels.indentation*((this.treeGrid.mapOfPosToGridNode[-1].height||0)-1));return b}function z(){var g=this.grid;(g&&g.columns||[]).forEach(function(g){g.getOffset()})}function d(g){if(!0===(this.options.grid||{}).enabled){var k=this.axisTitle,a=this.height,d=this.horiz,e=this.left,f=this.offset,c=this.opposite,q=this.options,p=this.top,
z=this.width,l=this.tickSize(),C=k&&k.getBBox().width,r=q.title.x,w=q.title.y,m=G(q.title.margin,d?5:10);k=this.chart.renderer.fontMetrics(q.title.style.fontSize,k).f;l=(d?p+a:e)+(d?1:-1)*(c?-1:1)*(l?l[0]/2:0)+(this.side===b.Side.bottom?k:0);g.titlePosition.x=d?e-(C||0)/2-m+r:l+(c?z:0)+f+r;g.titlePosition.y=d?l-(c?a:0)+(c?k:-k)/2+f+w:p-m+w}}function w(){var g=this.chart,k=this.options.grid;k=void 0===k?{}:k;var a=this.userOptions;if(k.enabled){var b=this.options;b.labels.align=G(b.labels.align,"center");
this.categories||(b.showLastLabel=!1);this.labelRotation=0;b.labels.rotation=0}if(k.columns){b=this.grid.columns=[];for(var d=this.grid.columnIndex=0;++d<k.columns.length;){var e=m(a,k.columns[k.columns.length-d-1],{linkedTo:0,type:"category",scrollbar:{enabled:!1}});delete e.grid.columns;e=new h(this.chart,e);e.grid.isColumn=!0;e.grid.columnIndex=d;v(g.axes,e);v(g[this.coll],e);b.push(e)}}}function y(){var g=this.grid,k=this.options;if(!0===(k.grid||{}).enabled){var a=this.min||0,d=this.max||0;this.maxLabelDimensions=
this.getMaxLabelDimensions(this.ticks,this.tickPositions);this.rightWall&&this.rightWall.destroy();if(this.grid&&this.grid.isOuterAxis()&&this.axisLine){var e=k.lineWidth;if(e){e=this.getLinePath(e);var f=e[0],c=e[1],q=((this.tickSize("tick")||[1])[0]-1)*(this.side===b.Side.top||this.side===b.Side.left?-1:1);"M"===f[0]&&"L"===c[0]&&(this.horiz?(f[2]+=q,c[2]+=q):(f[1]+=q,c[1]+=q));!this.horiz&&this.chart.marginRight&&(f=[f,["L",this.left,f[2]||0]],q=["L",this.chart.chartWidth-this.chart.marginRight,
this.toPixels(d+this.tickmarkOffset)],c=[["M",c[1]||0,this.toPixels(d+this.tickmarkOffset)],q],this.grid.upperBorder||0===a%1||(this.grid.upperBorder=this.grid.renderBorder(f)),this.grid.upperBorder&&(this.grid.upperBorder.attr({stroke:k.lineColor,"stroke-width":k.lineWidth}),this.grid.upperBorder.animate({d:f})),this.grid.lowerBorder||0===d%1||(this.grid.lowerBorder=this.grid.renderBorder(c)),this.grid.lowerBorder&&(this.grid.lowerBorder.attr({stroke:k.lineColor,"stroke-width":k.lineWidth}),this.grid.lowerBorder.animate({d:c})));
this.grid.axisLineExtra?(this.grid.axisLineExtra.attr({stroke:k.lineColor,"stroke-width":k.lineWidth}),this.grid.axisLineExtra.animate({d:e})):this.grid.axisLineExtra=this.grid.renderBorder(e);this.axisLine[this.showAxis?"show":"hide"](!0)}}(g&&g.columns||[]).forEach(function(g){g.render()});!this.horiz&&this.chart.hasRendered&&(this.scrollbar||this.linkedParent&&this.linkedParent.scrollbar)&&(g=this.tickmarkOffset,k=this.tickPositions[this.tickPositions.length-1],e=this.tickPositions[0],(c=this.ticks[e].label)&&
(a-e>g?c.hide():c.show()),(c=this.ticks[k].label)&&(k-d>g?c.hide():c.show()),(a=this.ticks[k].mark)&&(k-d<g&&0<k-d&&this.ticks[k].isLast?a.hide():this.ticks[k-1]&&a.show()))}}function D(){var g=this.tickPositions&&this.tickPositions.info,k=this.options,a=this.userOptions.labels||{};(k.grid||{}).enabled&&(this.horiz?(this.series.forEach(function(g){g.options.pointRange=0}),g&&k.dateTimeLabelFormats&&k.labels&&!x(a.align)&&(!1===k.dateTimeLabelFormats[g.unitName].range||1<g.count)&&(k.labels.align=
"left",x(a.x)||(k.labels.x=3))):"treegrid"!==this.options.type&&this.grid&&this.grid.columns&&(this.minPointOffset=this.tickInterval))}function I(g){var k=this.options;g=g.userOptions;var a=k&&u.isObject(k.grid,!0)?k.grid:{};if(!0===a.enabled){var b=m(!0,{className:"highcharts-grid-axis "+(g.className||""),dateTimeLabelFormats:{hour:{list:["%H:%M","%H"]},day:{list:["%A, %e. %B","%a, %e. %b","%E"]},week:{list:["Week %W","W%W"]},month:{list:["%B","%b","%o"]}},grid:{borderWidth:1},labels:{padding:2,
style:{fontSize:"13px"}},margin:0,title:{text:null,reserveSpace:!1,rotation:0},units:[["millisecond",[1,10,100]],["second",[1,10]],["minute",[1,5,15]],["hour",[1,6]],["day",[1]],["week",[1]],["month",[1]],["year",null]]},g);"xAxis"===this.coll&&(x(g.linkedTo)&&!x(g.tickPixelInterval)&&(b.tickPixelInterval=350),x(g.tickPixelInterval)||!x(g.linkedTo)||x(g.tickPositioner)||x(g.tickInterval)||(b.tickPositioner=function(g,a){var k=this.linkedParent&&this.linkedParent.tickPositions&&this.linkedParent.tickPositions.info;
if(k){for(var e=b.units||[],d=void 0,f=void 0,c=void 0,q=0;q<e.length;q++)if(e[q][0]===k.unitName){d=q;break}e[d+1]?(c=e[d+1][0],f=(e[d+1][1]||[1])[0]):"year"===k.unitName&&(c="year",f=10*k.count);k=K[c];this.tickInterval=k*f;return this.getTimeTicks({unitRange:k,count:f,unitName:c},g,a,this.options.startOfWeek)}}));m(!0,this.options,b);this.horiz&&(k.minPadding=G(g.minPadding,0),k.maxPadding=G(g.maxPadding,0));r(k.grid.borderWidth)&&(k.tickWidth=k.lineWidth=a.borderWidth)}}function A(g){g=(g=g.userOptions)&&
g.grid||{};var k=g.columns;g.enabled&&k&&m(!0,this.options,k[k.length-1])}function f(){(this.grid.columns||[]).forEach(function(g){g.setScale()})}function e(g){var k=t.defaultLeftAxisOptions,b=this.horiz,e=this.maxLabelDimensions,d=this.options.grid;d=void 0===d?{}:d;d.enabled&&e&&(k=2*Math.abs(k.labels.x),b=b?d.cellHeight||k+e.height:k+e.width,a(g.tickSize)?g.tickSize[0]=b:g.tickSize=[b,0])}function q(){this.axes.forEach(function(g){(g.grid&&g.grid.columns||[]).forEach(function(g){g.setAxisSize();
g.setAxisTranslation()})})}function C(g){var k=this.grid;(k.columns||[]).forEach(function(k){k.destroy(g.keepEvents)});k.columns=void 0}function L(g){g=g.userOptions||{};var k=g.grid||{};k.enabled&&x(k.borderColor)&&(g.tickColor=g.lineColor=k.borderColor);this.grid||(this.grid=new J(this))}function M(g){var k=this.label,a=this.axis,e=a.reversed,d=a.chart,f=a.options.grid||{},c=a.options.labels,q=c.align,p=b.Side[a.side],l=g.tickmarkOffset,z=a.tickPositions,C=this.pos-l;z=r(z[g.index+1])?z[g.index+
1]-l:(a.max||0)+l;var w=a.tickSize("tick");l=w?w[0]:0;w=w?w[1]/2:0;if(!0===f.enabled){if("top"===p){f=a.top+a.offset;var m=f-l}else"bottom"===p?(m=d.chartHeight-a.bottom+a.offset,f=m+l):(f=a.top+a.len-(a.translate(e?z:C)||0),m=a.top+a.len-(a.translate(e?C:z)||0));"right"===p?(p=d.chartWidth-a.right+a.offset,e=p+l):"left"===p?(e=a.left+a.offset,p=e-l):(p=Math.round(a.left+(a.translate(e?z:C)||0))-w,e=Math.min(Math.round(a.left+(a.translate(e?C:z)||0))-w,a.left+a.len));this.slotWidth=e-p;g.pos.x="left"===
q?p:"right"===q?e:p+(e-p)/2;g.pos.y=m+(f-m)/2;d=d.renderer.fontMetrics(c.style.fontSize,k&&k.element);k=k?k.getBBox().height:0;c.useHTML?g.pos.y+=d.b+-(k/2):(k=Math.round(k/d.h),g.pos.y+=(d.b-(d.h-d.f))/2+-((k-1)*d.h/2));g.pos.x+=a.horiz&&c.x||0}}function N(a){var g=a.axis,b=a.value;if(g.options.grid&&g.options.grid.enabled){var e=g.tickPositions,d=(g.linkedParent||g).series[0],f=b===e[0];e=b===e[e.length-1];var c=d&&l(d.options.data,function(a){return a[g.isXAxis?"x":"y"]===b}),q=void 0;c&&d.is("gantt")&&
(q=m(c),B.seriesTypes.gantt.prototype.pointClass.setGanttPointAliases(q));a.isFirst=f;a.isLast=e;a.point=q}}function O(){var a=this.options,b=this.categories,e=this.tickPositions,d=e[0],f=e[e.length-1],c=this.linkedParent&&this.linkedParent.min||this.min,q=this.linkedParent&&this.linkedParent.max||this.max,p=this.tickInterval;!0!==(a.grid||{}).enabled||b||!this.horiz&&!this.isLinked||(d<c&&d+p>c&&!a.startOnTick&&(e[0]=c),f>q&&f-p<q&&!a.endOnTick&&(e[e.length-1]=q))}function P(a){var g=this.options.grid;
return!0===(void 0===g?{}:g).enabled&&this.categories?this.tickInterval:a.apply(this,Array.prototype.slice.call(arguments,1))}(function(a){a[a.top=0]="top";a[a.right=1]="right";a[a.bottom=2]="bottom";a[a.left=3]="left"})(b.Side||(b.Side={}));b.compose=function(a,b,p){-1===a.keepProps.indexOf("grid")&&(a.keepProps.push("grid"),a.prototype.getMaxLabelDimensions=c,F(a.prototype,"unsquish",P),n(a,"init",L),n(a,"afterGetOffset",z),n(a,"afterGetTitlePosition",d),n(a,"afterInit",w),n(a,"afterRender",y),
n(a,"afterSetAxisTranslation",D),n(a,"afterSetOptions",I),n(a,"afterSetOptions",A),n(a,"afterSetScale",f),n(a,"afterTickSize",e),n(a,"trimTicks",O),n(a,"destroy",C));n(b,"afterSetChartSize",q);n(p,"afterGetLabelPosition",M);n(p,"labelFormat",N);return a};var J=function(){function a(a){this.axis=a}a.prototype.isOuterAxis=function(){var a=this.axis,b=a.grid.columnIndex,e=a.linkedParent&&a.linkedParent.grid.columns||a.grid.columns,d=b?a.linkedParent:a,g=-1,f=0;a.chart[a.coll].forEach(function(b,e){b.side!==
a.side||b.options.isInternal||(f=e,b===d&&(g=e))});return f===g&&(r(b)?e.length===b:!0)};a.prototype.renderBorder=function(a){var b=this.axis,e=b.chart.renderer,d=b.options;a=e.path(a).addClass("highcharts-axis-line").add(b.axisBorder);e.styledMode||a.attr({stroke:d.lineColor,"stroke-width":d.lineWidth,zIndex:7});return a};return a}();b.Additions=J})(c||(c={}));y.E=function(a){return this.dateFormat("%a",a,!0).charAt(0)};y.W=function(a){a=new this.Date(a);var b=(this.get("Day",a)+6)%7,c=new this.Date(a.valueOf());
this.set("Date",c,this.get("Date",a)-b+3);b=new this.Date(this.get("FullYear",c),0,1);4!==this.get("Day",b)&&(this.set("Month",a,0),this.set("Date",a,1+(11-this.get("Day",b))%7));return(1+Math.floor((c.valueOf()-b.valueOf())/6048E5)).toString()};"";return c});E(h,"Gantt/Tree.js",[h["Core/Utilities.js"]],function(h){var t=h.extend,B=h.isNumber,u=h.pick,y=function(h,n){var l=h.reduce(function(a,l){var m=u(l.parent,"");"undefined"===typeof a[m]&&(a[m]=[]);a[m].push(l);return a},{});Object.keys(l).forEach(function(a,
r){var m=l[a];""!==a&&-1===n.indexOf(a)&&(m.forEach(function(a){r[""].push(a)}),delete r[a])});return l},n=function(h,v,l,a,r,m){var G=0,x=0,F=m&&m.after,c=m&&m.before;v={data:a,depth:l-1,id:h,level:l,parent:v};var b,p;"function"===typeof c&&c(v,m);c=(r[h]||[]).map(function(a){var d=n(a.id,h,l+1,a,r,m),c=a.start;a=!0===a.milestone?c:a.end;b=!B(b)||c<b?c:b;p=!B(p)||a>p?a:p;G=G+1+d.descendants;x=Math.max(d.height+1,x);return d});a&&(a.start=u(a.start,b),a.end=u(a.end,p));t(v,{children:c,descendants:G,
height:x});"function"===typeof F&&F(v,m);return v};return{getListOfParents:y,getNode:n,getTree:function(h,u){var l=h.map(function(a){return a.id});h=y(h,l);return n("",null,1,null,h,u)}}});E(h,"Core/Axis/TreeGridTick.js",[h["Core/Color/Palette.js"],h["Core/Utilities.js"]],function(h,t){var B=t.addEvent,u=t.isObject,y=t.isNumber,n=t.pick,x=t.wrap,v;(function(l){function a(){this.treeGrid||(this.treeGrid=new F(this))}function r(a,b){a=a.treeGrid;var c=!a.labelIcon,l=b.renderer,d=b.xy,w=b.options,m=
w.width||0,r=w.height||0,u=d.x-m/2-(w.padding||0);d=d.y-r/2;var A=b.collapsed?90:180,f=b.show&&y(d),e=a.labelIcon;e||(a.labelIcon=e=l.path(l.symbols[w.type](w.x||0,w.y||0,m,r)).addClass("highcharts-label-icon").add(b.group));e.attr({y:f?0:-9999});l.styledMode||e.attr({cursor:"pointer",fill:n(b.color,h.neutralColor60),"stroke-width":1,stroke:w.lineColor,strokeWidth:w.lineWidth||0});e[c?"attr":"animate"]({translateX:u,translateY:d,rotation:A})}function m(a,b,p,l,d,h,m,r,v){var c=n(this.options&&this.options.labels,
h);h=this.pos;var f=this.axis,e="treegrid"===f.options.type;a=a.apply(this,[b,p,l,d,c,m,r,v]);e&&(b=c&&u(c.symbol,!0)?c.symbol:{},c=c&&y(c.indentation)?c.indentation:0,h=(h=(f=f.treeGrid.mapOfPosToGridNode)&&f[h])&&h.depth||1,a.x+=(b.width||0)+2*(b.padding||0)+(h-1)*c);return a}function v(a){var b=this,c=b.pos,l=b.axis,d=b.label,h=l.treeGrid.mapOfPosToGridNode,m=l.options,v=n(b.options&&b.options.labels,m&&m.labels),t=v&&u(v.symbol,!0)?v.symbol:{},x=(h=h&&h[c])&&h.depth;m="treegrid"===m.type;var f=
-1<l.tickPositions.indexOf(c);c=l.chart.styledMode;m&&h&&d&&d.element&&d.addClass("highcharts-treegrid-node-level-"+x);a.apply(b,Array.prototype.slice.call(arguments,1));m&&d&&d.element&&h&&h.descendants&&0<h.descendants&&(l=l.treeGrid.isCollapsed(h),r(b,{color:!c&&d.styles&&d.styles.color||"",collapsed:l,group:d.parentGroup,options:t,renderer:d.renderer,show:f,xy:d.xy}),t="highcharts-treegrid-node-"+(l?"expanded":"collapsed"),d.addClass("highcharts-treegrid-node-"+(l?"collapsed":"expanded")).removeClass(t),
c||d.css({cursor:"pointer"}),[d,b.treeGrid.labelIcon].forEach(function(a){a&&!a.attachedTreeGridEvents&&(B(a.element,"mouseover",function(){d.addClass("highcharts-treegrid-node-active");d.renderer.styledMode||d.css({textDecoration:"underline"})}),B(a.element,"mouseout",function(){var a=u(v.style)?v.style:{};d.removeClass("highcharts-treegrid-node-active");d.renderer.styledMode||d.css({textDecoration:a.textDecoration})}),B(a.element,"click",function(){b.treeGrid.toggleCollapse()}),a.attachedTreeGridEvents=
!0)}))}var t=!1;l.compose=function(c){t||(B(c,"init",a),x(c.prototype,"getLabelPosition",m),x(c.prototype,"renderLabel",v),c.prototype.collapse=function(a){this.treeGrid.collapse(a)},c.prototype.expand=function(a){this.treeGrid.expand(a)},c.prototype.toggleCollapse=function(a){this.treeGrid.toggleCollapse(a)},t=!0)};var F=function(){function a(a){this.tick=a}a.prototype.collapse=function(a){var b=this.tick,c=b.axis,d=c.brokenAxis;d&&c.treeGrid.mapOfPosToGridNode&&(b=c.treeGrid.collapse(c.treeGrid.mapOfPosToGridNode[b.pos]),
d.setBreaks(b,n(a,!0)))};a.prototype.expand=function(a){var b=this.tick,c=b.axis,d=c.brokenAxis;d&&c.treeGrid.mapOfPosToGridNode&&(b=c.treeGrid.expand(c.treeGrid.mapOfPosToGridNode[b.pos]),d.setBreaks(b,n(a,!0)))};a.prototype.toggleCollapse=function(a){var b=this.tick,c=b.axis,d=c.brokenAxis;d&&c.treeGrid.mapOfPosToGridNode&&(b=c.treeGrid.toggleCollapse(c.treeGrid.mapOfPosToGridNode[b.pos]),d.setBreaks(b,n(a,!0)))};return a}();l.Additions=F})(v||(v={}));return v});E(h,"Mixins/TreeSeries.js",[h["Core/Color/Color.js"],
h["Core/Utilities.js"]],function(h,t){var B=t.extend,u=t.isArray,y=t.isNumber,n=t.isObject,x=t.merge,v=t.pick;return{getColor:function(l,a){var r=a.index,m=a.mapOptionsToLevel,n=a.parentColor,u=a.parentColorIndex,t=a.series,c=a.colors,b=a.siblings,p=t.points,z=t.chart.options.chart,d;if(l){p=p[l.i];l=m[l.level]||{};if(m=p&&l.colorByPoint){var w=p.index%(c?c.length:z.colorCount);var x=c&&c[w]}if(!t.chart.styledMode){c=p&&p.options.color;z=l&&l.color;if(d=n)d=(d=l&&l.colorVariation)&&"brightness"===
d.key?h.parse(n).brighten(r/b*d.to).get():n;d=v(c,z,x,d,t.color)}var y=v(p&&p.options.colorIndex,l&&l.colorIndex,w,u,a.colorIndex)}return{color:d,colorIndex:y}},getLevelOptions:function(l){var a=null;if(n(l)){a={};var h=y(l.from)?l.from:1;var m=l.levels;var t={};var v=n(l.defaults)?l.defaults:{};u(m)&&(t=m.reduce(function(a,c){if(n(c)&&y(c.level)){var b=x({},c);var l="boolean"===typeof b.levelIsConstant?b.levelIsConstant:v.levelIsConstant;delete b.levelIsConstant;delete b.level;c=c.level+(l?0:h-1);
n(a[c])?B(a[c],b):a[c]=b}return a},{}));m=y(l.to)?l.to:1;for(l=0;l<=m;l++)a[l]=x({},v,n(t[l])?t[l]:{})}return a},setTreeValues:function m(a,h){var n=h.before,r=h.idRoot,u=h.mapIdToNode[r],c=h.points[a.i],b=c&&c.options||{},p=0,t=[];a.levelDynamic=a.level-(("boolean"===typeof h.levelIsConstant?h.levelIsConstant:1)?0:u.level);a.name=v(c&&c.name,"");a.visible=r===a.id||("boolean"===typeof h.visible?h.visible:!1);"function"===typeof n&&(a=n(a,h));a.children.forEach(function(b,c){var d=B({},h);B(d,{index:c,
siblings:a.children.length,visible:a.visible});b=m(b,d);t.push(b);b.visible&&(p+=b.val)});a.visible=0<p||a.visible;n=v(b.value,p);a.children=t;a.childrenTotal=p;a.isLeaf=a.visible&&!p;a.val=n;return a},updateRootId:function(a){if(n(a)){var h=n(a.options)?a.options:{};h=v(a.rootNode,h.rootId,"");n(a.userOptions)&&(a.userOptions.rootId=h);a.rootNode=h}return h}}});E(h,"Core/Axis/TreeGridAxis.js",[h["Core/Axis/BrokenAxis.js"],h["Core/Axis/GridAxis.js"],h["Gantt/Tree.js"],h["Core/Axis/TreeGridTick.js"],
h["Mixins/TreeSeries.js"],h["Core/Utilities.js"]],function(h,t,B,u,y,n){var x=y.getLevelOptions,v=n.addEvent,l=n.find,a=n.fireEvent,r=n.isArray,m=n.isObject,G=n.isString,E=n.merge,F=n.pick,c=n.wrap,b;(function(b){function p(a,b){var e=a.collapseEnd||0;a=a.collapseStart||0;e>=b&&(a-=.5);return{from:a,to:e,showPoints:!1}}function d(a,b,d){var e=[],c=[],f={},q="boolean"===typeof b?b:!1,h={},p=-1;a=B.getTree(a,{after:function(a){a=h[a.pos];var b=0,e=0;a.children.forEach(function(a){e+=(a.descendants||
0)+1;b=Math.max((a.height||0)+1,b)});a.descendants=e;a.height=b;a.collapsed&&c.push(a)},before:function(a){var b=m(a.data,!0)?a.data:{},d=G(b.name)?b.name:"",c=f[a.parent];c=m(c,!0)?h[c.pos]:null;var g=function(a){return a.name===d},n;q&&m(c,!0)&&(n=l(c.children,g))?(g=n.pos,n.nodes.push(a)):g=p++;h[g]||(h[g]=n={depth:c?c.depth+1:0,name:d,id:b.id,nodes:[a],children:[],pos:g},-1!==g&&e.push(d),m(c,!0)&&c.children.push(n));G(a.id)&&(f[a.id]=a);n&&!0===b.collapsed&&(n.collapsed=!0);a.pos=g}});h=function(a,
b){var e=function(a,d,c){var g=d+(-1===d?0:b-1),f=(g-d)/2,k=d+f;a.nodes.forEach(function(a){var b=a.data;m(b,!0)&&(b.y=d+(b.seriesIndex||0),delete b.seriesIndex);a.pos=k});c[k]=a;a.pos=k;a.tickmarkOffset=f+.5;a.collapseStart=g+.5;a.children.forEach(function(a){e(a,g+1,c);g=(a.collapseEnd||0)-.5});a.collapseEnd=g+.5;return c};return e(a["-1"],-1,{})}(h,d);return{categories:e,mapOfIdToNode:f,mapOfPosToGridNode:h,collapsedNodes:c,tree:a}}function n(a){a.target.axes.filter(function(a){return"treegrid"===
a.options.type}).forEach(function(b){var c=b.options||{},e=c.labels,f=c.uniqueNames;c=c.max;var h=0;if(!b.treeGrid.mapOfPosToGridNode||b.series.some(function(a){return!a.hasRendered||a.isDirtyData||a.isDirty})){var l=b.series.reduce(function(a,b){b.visible&&((b.options.data||[]).forEach(function(c){b.options.keys&&b.options.keys.length&&(c=b.pointClass.prototype.optionsToObject.call({series:b},c),b.pointClass.setGanttPointAliases(c));m(c,!0)&&(c.seriesIndex=h,a.push(c))}),!0===f&&h++);return a},[]);
if(c&&l.length<c)for(var q=l.length;q<=c;q++)l.push({name:q+"\u200b"});c=d(l,f||!1,!0===f?h:1);b.categories=c.categories;b.treeGrid.mapOfPosToGridNode=c.mapOfPosToGridNode;b.hasNames=!0;b.treeGrid.tree=c.tree;b.series.forEach(function(a){var b=(a.options.data||[]).map(function(b){r(b)&&a.options.keys&&a.options.keys.length&&l.forEach(function(a){0<=b.indexOf(a.x)&&0<=b.indexOf(a.x2)&&(b=a)});return m(b,!0)?E(b):b});a.visible&&a.setData(b,!1)});b.treeGrid.mapOptionsToLevel=x({defaults:e,from:1,levels:e&&
e.levels,to:b.treeGrid.tree&&b.treeGrid.tree.height});"beforeRender"===a.type&&(b.treeGrid.collapsedNodes=c.collapsedNodes)}})}function y(a,b){var c=this.treeGrid.mapOptionsToLevel||{},d=this.ticks,e=d[b],f;if("treegrid"===this.options.type&&this.treeGrid.mapOfPosToGridNode){var h=this.treeGrid.mapOfPosToGridNode[b];(c=c[h.depth])&&(f={labels:c});!e&&A?d[b]=new A(this,b,void 0,void 0,{category:h.name,tickmarkOffset:h.tickmarkOffset,options:f}):(e.parameters.category=h.name,e.options=f,e.addLabel())}else a.apply(this,
Array.prototype.slice.call(arguments,1))}function D(a,b,c){var e=this,h="treegrid"===c.type;e.treeGrid||(e.treeGrid=new f(e));h&&(v(b,"beforeRender",n),v(b,"beforeRedraw",n),v(b,"addSeries",function(a){a.options.data&&(a=d(a.options.data,c.uniqueNames||!1,1),e.treeGrid.collapsedNodes=(e.treeGrid.collapsedNodes||[]).concat(a.collapsedNodes))}),v(e,"foundExtremes",function(){e.treeGrid.collapsedNodes&&e.treeGrid.collapsedNodes.forEach(function(a){var b=e.treeGrid.collapse(a);e.brokenAxis&&(e.brokenAxis.setBreaks(b,
!1),e.treeGrid.collapsedNodes&&(e.treeGrid.collapsedNodes=e.treeGrid.collapsedNodes.filter(function(b){return a.collapseStart!==b.collapseStart||a.collapseEnd!==b.collapseEnd})))})}),v(e,"afterBreaks",function(){"yAxis"===e.coll&&!e.staticScale&&e.chart.options.chart.height&&(e.isDirty=!0)}),c=E({grid:{enabled:!0},labels:{align:"left",levels:[{level:void 0},{level:1,style:{fontWeight:"bold"}}],symbol:{type:"triangle",x:-5,y:-5,height:10,width:10,padding:5}},uniqueNames:!1},c,{reversed:!0,grid:{columns:void 0}}));
a.apply(e,[b,c]);h&&(e.hasNames=!0,e.options.showLastLabel=!0)}function I(b){var c=this.options;"treegrid"===c.type?(this.min=F(this.userMin,c.min,this.dataMin),this.max=F(this.userMax,c.max,this.dataMax),a(this,"foundExtremes"),this.setAxisTranslation(),this.tickmarkOffset=.5,this.tickInterval=1,this.tickPositions=this.treeGrid.mapOfPosToGridNode?this.treeGrid.getTickPositions():[]):b.apply(this,Array.prototype.slice.call(arguments,1))}var A;b.compose=function(a,b,d,f){-1===a.keepProps.indexOf("treeGrid")&&
(a.keepProps.push("treeGrid"),A=f,c(a.prototype,"generateTick",y),c(a.prototype,"init",D),c(a.prototype,"setTickInterval",I),a.prototype.utils={getNode:B.getNode},t.compose(a,b,f),h.compose(a,d),u.compose(f));return a};var f=function(){function a(a){this.axis=a}a.prototype.setCollapsedStatus=function(a){var b=this.axis,c=b.chart;b.series.forEach(function(b){var d=b.options.data;if(a.id&&d){var e=c.get(a.id);b=d[b.data.indexOf(e)];e&&b&&(e.collapsed=a.collapsed,b.collapsed=a.collapsed)}})};a.prototype.collapse=
function(a){var b=this.axis,c=b.options.breaks||[],d=p(a,b.max);c.push(d);a.collapsed=!0;b.treeGrid.setCollapsedStatus(a);return c};a.prototype.expand=function(a){var b=this.axis,c=b.options.breaks||[],d=p(a,b.max);a.collapsed=!1;b.treeGrid.setCollapsedStatus(a);return c.reduce(function(a,b){b.to===d.to&&b.from===d.from||a.push(b);return a},[])};a.prototype.getTickPositions=function(){var a=this.axis,b=Math.floor(a.min/a.tickInterval)*a.tickInterval,c=Math.ceil(a.max/a.tickInterval)*a.tickInterval;
return Object.keys(a.treeGrid.mapOfPosToGridNode||{}).reduce(function(d,e){e=+e;!(e>=b&&e<=c)||a.brokenAxis&&a.brokenAxis.isInAnyBreak(e)||d.push(e);return d},[])};a.prototype.isCollapsed=function(a){var b=this.axis,c=b.options.breaks||[],d=p(a,b.max);return c.some(function(a){return a.from===d.from&&a.to===d.to})};a.prototype.toggleCollapse=function(a){return this.isCollapsed(a)?this.expand(a):this.collapse(a)};return a}();b.Additions=f})(b||(b={}));return b});E(h,"masters/modules/treegrid.src.js",
[h["Core/Globals.js"],h["Core/Axis/TreeGridAxis.js"]],function(h,t){t.compose(h.Axis,h.Chart,h.Series,h.Tick)})});
//# sourceMappingURL=treegrid.js.map
(this["webpackJsonppink-sale"]=this["webpackJsonppink-sale"]||[]).push([[31],{1246:function(e,t,n){e.exports={root:"TokenMetric_root__29Tdv"}},1264:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n.n(i),r=n(1252),a=n(1246),s=n.n(a),l=n(2);r.a.register({id:"center",beforeDraw:function(e){var t;if(null===(t=e.config.options.elements)||void 0===t?void 0:t.center){var n=e.ctx,i=e.config.options.elements.center,o=i.fontStyle||"Arial",r=i.text,a=i.color||"#000",s=i.maxFontSize||48,l=(i.sidePadding||20)/100*(2*e.innerRadius);n.font="30px "+o;var u=n.measureText(r).width,h=2*e.innerRadius-l,p=h/u,c=Math.floor(30*p),d=2*e.innerRadius,f=Math.min(c,d,s),b=i.minFontSize,g=i.lineHeight||20,v=!1;void 0===b&&(b=14),b&&f<b&&(f=b,v=!0),n.textAlign="center",n.textBaseline="middle";var x=(e.chartArea.left+e.chartArea.right)/2,m=(e.chartArea.top+e.chartArea.bottom)/2;if(n.font=f||"16px "+o,n.fillStyle=a,!v)return void n.fillText(r,x,m);for(var k=r.split(" "),A="",S=[],T=0;T<k.length;T++){var y=A+k[T]+" ";n.measureText(y).width>h&&T>0?(S.push(A),A=k[T]+" "):A=y}m-=S.length/2*g;for(var j=0;j<S.length;j++)n.fillText(S[j],x,m),m+=g;n.fillText(A,x,m)}}});var u=function(e){var t=e.presale,n=e.antirug,o=e.liquidity,a=e.free,u=e.burnt,h=e.locked,p=e.tokenSymbol,c=Object(i.useMemo)((function(){var e=[],i=[],r=[];return t&&(e.push("Presale"),i.push("#fd728f"),r.push(t)),o&&(e.push("Liquidity"),i.push("#049bff"),r.push(o)),n&&(e.push("Anti-Rug"),i.push("#26c7d6"),r.push(n)),h&&(e.push("Locked"),i.push("#a87ef7"),r.push(h)),a&&(e.push("Unlock"),i.push("#ffcd56"),r.push(a)),u&&(e.push("Burnt"),i.push("#96A1B0"),r.push(u)),{labels:e,datasets:[{label:"Token Metrics",data:r,backgroundColor:i,hoverOffset:4}]}}),[n,u,a,o,h,t]);return Object(l.jsx)("div",{className:s.a.root,children:Object(l.jsx)(r.b,{data:c,options:{plugins:{legend:{position:"right",labels:{padding:15,boxWidth:40}},tooltip:{callbacks:{label:function(e){return"".concat(e.label+" "+e.parsed,"%")}}}},elements:{center:{text:p||"",fontStyle:"Roboto",sidePadding:20,minFontSize:14,maxFontSize:24,lineHeight:24}}}})})};t.default=o.a.memo(u)}}]);
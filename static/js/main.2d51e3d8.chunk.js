(this.webpackJsonppruebareact=this.webpackJsonppruebareact||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/pelota.3cdc8945.png"},,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/MCT_REAL_neg.8d965b4c.png"},function(e,a,t){e.exports=t.p+"static/media/GMatch_NEW_WHITE.118fe928.png"},,,function(e,a,t){e.exports=t(48)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(21),r=t.n(c),s=(t(31),t(4)),l=t(5),i=t(7),m=t(6),u=t(24),d=t(2),f=(t(32),t(33),t(34),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleClick=function(){var e=n.state.mostrar;e=!e,n.setState({mostrar:e})},n.state={mostrar:""},n}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.Torneo,a=this.state.mostrar;console.log(a);var t=e.nombre,n=e.superficie,c=e.descripcion,r=e.categoria,s=e.genero;return o.a.createElement("li",null,o.a.createElement("ul",null,o.a.createElement("div",{className:"Torneo"},o.a.createElement("a",{href:"#"},o.a.createElement("h3",{className:"Nombre",onClick:this.handleClick},t)),a&&o.a.createElement("li",null,o.a.createElement("h4",{className:"Info"},n),o.a.createElement("h4",{className:"Info"},c),o.a.createElement("h4",{className:"Info"},r),o.a.createElement("h4",{className:"Info"},s)))))}}]),t}(n.Component)),p=(t(35),n.Component,t(1)),v=t.n(p),h=t(12),g=t.n(h),E=(t(37),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).curretnSet=function(e){var a;switch(e.sets_j1+e.sets_j2){case 0:a=1;break;case 1:a=2;break;case 2:a=3;break;case 3:a=4;break;case 4:a=5}return a},n.state={id:"",Partidos:[]},n}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.Partidos;console.log(e);var a=e.resultado,t=e.hora_prevista,c=e.ronda,r=e.estado,s=e.pista,l=a.puntos_j1,i=(a.juegos_j1,a.set1_j1),m=a.set2_j1,u=a.set3_j1,d=a.saque_actual,f=a.sets_j1,p=a.ganador,h=a.puntos_j2,E=(a.juegos_j2,a.set1_j2),j=a.set2_j2,N=a.set3_j2,b=a.sets_j2,Y=a.hora_inicio,H=this.curretnSet(a);console.log(H);var _=e.jugadores[0].nombre,D=e.jugadores[1].nombre,M=(v()(),"Vivo"),k="iconoSaque",O="iconoSaque";1===d?O="iconoSaque_hidden":k="iconoSaque_hidden",c||(c="Cuartos de final"),t=v.a.utc(t).local().format("HH:mm");v.a.utc().local().format("HH"),v()().format("mm"),v.a.utc(Y).format("HH"),v.a.utc(Y).format("HH"),v.a.utc(Y).local().format("mm");console.log(Y);var C=v.a.utc(Y).format("YYYY/MM/DD HH:mm"),y=v.a.utc(Y).local();console.log("inicio"+C);var S=v.a.utc(C).format("YYYY/MM/DD HH:mm");console.log("iniciow"+S);var I=v.a.utc().local();console.log("ahora"+y.diff(I,"minutes"));var T=v.a.duration().subtract(y);console.log("diferencia"+v.a.utc(T).format("HH:mm"));var w=v.a.utc().local().format("YYYYMMDD HH:mm"),x=v.a.utc(Y).format("YYYYMMDD HH:mm");console.log("ahora "+w+"; inicio: "+x);var q=v()(w,"YYYYMMDD HH:mm");console.log(q.format("YYYYMMDD HH:mm"));var W=v()(x,"YYYYMMDD HH:mm"),L=v()(x,"YYYYMMDD HH:mm");L=v()(x,"YYYYMMDD HH:mm:ss");console.log("horas_"+W.format("HH")+"minutos_"+L.format("mm"));q.diff(W,"hours"),q.diff(L,"minutes");var P=q.diff(L,"seconds"),F=Math.floor(P/60),J=Math.floor(F/60);if(F-=60*J,console.log(P+" s "+F+" m "+J+"h"),console.log(q.diff(L,"minutes")+"m"),Y){var A=v.a.utc().local().format("HH"),U=v()().format("mm"),B=v.a.utc(Y).format("HH"),V=v.a.utc(Y).local().format("mm");console.log(A),console.log(U),console.log(A-B),console.log(U-V),M="Vivo"}F<10&&(F="0".concat(F)),J<10&&(J="0".concat(J));var z="",G="",R="";2==r&&(R="opacidad",1===p?z="gana":G="gana");var $=function(e,a,t,n,o,c,r,s,l,i){var m="",u="",d="",f="",p="",v="",h="",g="",E="",j="",N=[];"AD"==l?(E="gana",j="pierde"):"AD"==i?(j="gana",E="pierde"):l>i?(E="gana",j="pierde"):i>l&&(j="gana",E="pierde"),e>a?(m="gana",u="pierde"):a>e&&(u="gana",m="pierde"),t>n?(d="gana",f="pierde"):n>t&&(f="gana",d="pierde"),o>c?(p="gana",v="pierde"):c>o&&(v="gana",p="pierde"),r>s?(h="gana",g="pierde"):s>r&&(g="gana",h="pierde");var b={cs1j1:m,cs1j2:u,cs2j1:d,cs2j2:f,cs3j1:p,cs3j2:v,cs4j1:h,cs4j2:g,cp1j1:E,cp2j2:j};return N.push(b),N}(i,E,m,j,u,N,f,b,l,h)[0],K=$.cs1j1,Q=$.cs2j1,X=$.cs3j1,Z=($.cs4j1,$.cs1j2),ee=$.cs2j2,ae=$.cs3j2,te=($.cs4j2,$.cp1j1),ne=$.cp2j2;return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"Partido",onClick:this.props.Mostrar},o.a.createElement("div",{className:"informacion ".concat(R)},o.a.createElement("div",{className:"info"},1==r&&o.a.createElement("div",{className:"info_"},o.a.createElement("div",{className:M},o.a.createElement("i",{class:"fas fa-circle"}),"".concat(J,":").concat(F)),o.a.createElement("div",null,"".concat(c)),o.a.createElement("div",null,"pista ".concat(s))),2==r&&o.a.createElement("div",{className:"info_"},o.a.createElement("div",{className:M,class:"hora_prevista"},"Finalizado"),o.a.createElement("div",null,"".concat(c)),o.a.createElement("div",null,"pista ".concat(s))),0==r&&o.a.createElement("div",{className:"info_"},o.a.createElement("div",{className:M,class:"hora_prevista"},o.a.createElement("i",{className:"far fa-clock icono"}),"".concat(t)),o.a.createElement("div",null,"".concat(c)),o.a.createElement("div",null,"pista ".concat(s)))),o.a.createElement("div",{className:"Jugador"},o.a.createElement("div",{class:"info1"},o.a.createElement("div",{className:"nombre ".concat(z)},_),1==r&&o.a.createElement("div",{className:"flex flex2"},o.a.createElement("div",null,o.a.createElement("img",{className:k,src:g.a,alt:""})),o.a.createElement("div",{className:"puntos ".concat(te)},l))),o.a.createElement("div",{className:"info2"},o.a.createElement("div",{className:"sets ".concat(K)},i),2==H&&o.a.createElement("div",{className:"sets ".concat(Q)},m),H>2&&o.a.createElement("div",{className:"auxiliar_flex"},o.a.createElement("div",{className:"sets ".concat(Q)},m),o.a.createElement("div",{className:"sets ".concat(X)},u)))),o.a.createElement("div",{className:"Jugador"},o.a.createElement("div",{className:"info1"},o.a.createElement("div",{className:"nombre ".concat(G)},D),1==r&&o.a.createElement("div",{className:"flex flex2"},o.a.createElement("div",null,o.a.createElement("img",{className:O,src:g.a,alt:""})),o.a.createElement("div",{className:"puntos ".concat(ne)},h))),o.a.createElement("div",{className:"info2"},o.a.createElement("div",{className:"sets ".concat(Z)},E),2==H&&o.a.createElement("div",{className:"sets ".concat(ee)},j),H>2&&o.a.createElement("div",{className:"auxiliar_flex"},o.a.createElement("div",{className:"sets ".concat(ee)},j),o.a.createElement("div",{className:"sets ".concat(ae)},N)))))))}}]),t}(n.Component)),j=(t(38),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).updateData=function(){fetch("http://gmatchapp.com/api/v1/partidos").then((function(e){return e.json()})).then((function(e){n.setState({info_partidos:e})}))},n.handleClick=function(e){console.log(e)},n.state={mostrar:"true"},n}return Object(l.a)(t,[{key:"componentWillMount",value:function(){this.updateData()}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.updateData()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this,a=(this.state.mostrar,[]),t=this.props.Torneos,c=this.state.info_partidos;return c&&t&&(console.log(this.state),a=function(e,a){var t=[],n=[],o=[],c=v.a.utc().local().format("ss");switch(console.log("seconds:"+c),c<40?0:40<c&&c<50?1:c>=50?2:0){case 0:a.map((function(a){n=[],e.map((function(e){e.torneo.id==a.id&&1==e.estado&&n.push(e)})),o={torneo:a.id,nombre:a.nombre,genero:a.genero,partidos:n},t.push(o)}));break;case 1:a.map((function(a){n=[],e.map((function(e){e.torneo.id==a.id&&2==e.estado&&n.push(e)})),o={torneo:a.id,nombre:a.nombre,genero:a.genero,partidos:n},t.push(o)}));break;case 2:a.map((function(a){n=[],e.map((function(e){e.torneo.id==a.id&&0==e.estado&&n.push(e)})),o={torneo:a.id,nombre:a.nombre,genero:a.genero,partidos:n},t.push(o)}));break;default:a.map((function(a){n=[],e.map((function(e){e.torneo.id==a.id&&1==e.estado&&n.push(e)})),o={torneo:a.id,nombre:a.nombre,genero:a.genero,partidos:n},t.push(o)}))}return t}(c,t)),o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"PartidosContainer"},a&&a.map((function(a,t){return o.a.createElement("div",{key:t.toString(),className:"torneo_grande",id:a.nombre,onClick:e.handleClick(a.nombre)},"Murcia Club de tenis"==a.nombre&&o.a.createElement("div",null,o.a.createElement("div",{className:"flex"},o.a.createElement("h2",null,"".concat(a.nombre)))),o.a.createElement("div",{id:a.nombre,className:"infoTorneo"},a.partidos&&a.partidos.map((function(a,t){return o.a.createElement(E,{Partidos:a,key:t.toString(),onClick:e.props.onClick,Mostrar:e.handleClick})}))))}))))}}]),t}(n.Component)),N=(t(39),n.Component,t(22)),b=t.n(N),Y=t(23),H=t.n(Y),_=(t(40),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={id:"",Partido:[]},n}return Object(l.a)(t,[{key:"render",value:function(){var e,a=this.props.partido,t=a.resultado,c=a.arbitro,r=a.torneo;e=r?r.nombre:"Campeonato de Espa\xf1a";var s,l,i,m,u,d,f,p,h,E,j,N,Y,_,D,M,k,O=0;c&&(O=1==c.auto_arbitraje?1:0),t&&(console.log(t),h=a.jugadores[0].nombre,E=a.jugadores[1].nombre,j=a.pista,t.hora_prevista,k=t.hora_inicio,i=t.puntos_j1,t.juegos_j1,m=t.set1_j1,u=t.set2_j1,d=t.set3_j1,f=t.saque_actual,p=t.sets_j1,t.ganador,N=t.puntos_j2,t.juegos_j2,Y=t.set1_j2,_=t.set2_j2,D=t.set3_j2,M=t.sets_j2);v.a.utc().local().format("HH"),v()().format("mm"),v.a.utc(k).format("HH"),v.a.utc(k).format("HH"),v.a.utc(k).local().format("mm");console.log(k);var C=v.a.utc(k).format("YYYY/MM/DD HH:mm"),y=v.a.utc(k).local();console.log("inicio"+C);var S=v.a.utc(C).format("YYYY/MM/DD HH:mm");console.log("iniciow"+S);var I=v.a.utc().local();console.log("ahora"+y.diff(I,"minutes"));var T=v.a.duration().subtract(y);console.log("diferencia"+v.a.utc(T).format("HH:mm"));var w=v.a.utc().local().format("YYYYMMDD HH:mm"),x=v.a.utc(k).format("YYYYMMDD HH:mm");console.log("ahora "+w+"; inicio: "+x);var q=v()(w,"YYYYMMDD HH:mm");console.log(q.format("YYYYMMDD HH:mm"));var W=v()(x,"YYYYMMDD HH:mm"),L=v()(x,"YYYYMMDD HH:mm");L=v()(x,"YYYYMMDD HH:mm:ss");console.log("horas_"+W.format("HH")+"minutos_"+L.format("mm"));q.diff(W,"hours"),q.diff(L,"minutes");var P=q.diff(L,"seconds"),F=Math.floor(P/60),J=Math.floor(F/60);F-=60*J,console.log(P+" s "+F+" m "+J+"h"),console.log(q.diff(L,"minutes")+"m");var A,U,B=!1;if(k){var V=v.a.utc().local().format("HH"),z=v()().format("mm"),G=v.a.utc(k).format("HH"),R=v.a.utc(k).local().format("mm");console.log(V),console.log(z),console.log(V-G),console.log(z-R),B=!0}return F<10&&(F="0".concat(F)),J<10&&(J="0".concat(J)),1===f?s="iconoSaque_hidden":l="iconoSaque_hidden",p+M>=3&&(s="iconoSaque_hidden",l="iconoSaque_hidden"),console.log(void 0),1==O?(A=p,U=M):(A=i,U=N),o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"pista"},o.a.createElement("div",{className:"pista2"},"Pista ".concat(j)),o.a.createElement("div",{className:"pista2"},"".concat(e)),o.a.createElement("div",{className:"pista2"},"Final")),o.a.createElement("div",{className:"contenedor"},o.a.createElement("div",{className:"jugador"},o.a.createElement("div",{className:"nombre"},o.a.createElement("span",{className:"nombre_jugador"},h),o.a.createElement("div",{className:"saque"},o.a.createElement("img",{className:"pelota ".concat(l),src:g.a,alt:""})),o.a.createElement("div",{className:"puntos"},A)),o.a.createElement("div",{className:"set"},m," ",o.a.createElement("span",{className:"set2"},"Set 1")),o.a.createElement("div",{className:"set"},u," ",o.a.createElement("span",{className:"set2"},"Set 2")),o.a.createElement("div",{className:"set"},d," ",o.a.createElement("span",{className:"set2"},"Set 3"))),o.a.createElement("div",{className:"jugador paddingFix"},o.a.createElement("div",{className:"nombre"},o.a.createElement("span",{className:"nombre_jugador"},E),o.a.createElement("div",{className:"saque"},o.a.createElement("img",{className:"pelota ".concat(s),src:g.a,alt:""})),o.a.createElement("div",{className:"puntos"},U)),o.a.createElement("div",{className:"set"},Y),o.a.createElement("div",{className:"set"},_),o.a.createElement("div",{className:"set"},D))),o.a.createElement("div",{className:"logos"},o.a.createElement("div",{className:"divLogo"},o.a.createElement("img",{className:"logo",src:H.a})),o.a.createElement("div",{className:"divLogo"},o.a.createElement("img",{className:"logo",src:b.a})),B&&o.a.createElement("div",{className:"tiempo"},o.a.createElement("i",{className:"far fa-clock"})," ".concat(J,": ").concat(F))))}}]),t}(n.Component)),D=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).updateTime=function(){var e=n.state.timeLineTop;n.setState({timeLineTop:e+1}),console.log(e)},n.updateData=function(){fetch("http://gmatchapp.com/api/v1/torneos").then((function(e){return e.json()})).then((function(e){n.setState({Torneos:e})}))},n.state={torneos:""},n}return Object(l.a)(t,[{key:"componentWillMount",value:function(){this.updateData()}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.updateData()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.state.Torneos;return o.a.createElement("div",{className:"mainContainer"},o.a.createElement("div",{className:" maincontainer2 padding0 "},o.a.createElement(j,{Torneos:e})))}}]),t}(n.Component),M=(t(41),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).updateTime=function(){var e=n.state.timeLineTop;n.setState({timeLineTop:e+1}),console.log(e)},n.updateData=function(){fetch("http://gmatchapp.com/api/v1/partidos").then((function(e){return e.json()})).then((function(e){n.setState({partidos:e})}))},n.state={mostrar:"true"},n}return Object(l.a)(t,[{key:"componentWillMount",value:function(){this.updateData()}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.updateData()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=function(e){for(var a=window.location.search.substring(1).split("&"),t=0;t<a.length;t++){var n=a[t].split("=");if(n[0]==e)return n[1]}return null}("id_partido");e?console.log(e):console.log("no id");var a=[];console.log(this.state);var t=this.state.partidos;return t&&t.forEach((function(t){e==t.id&&(a=t)})),console.log(a),o.a.createElement("div",{className:"mainContainer"},o.a.createElement(_,{partido:a}))}}]),t}(n.Component)),k=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(u.a,null,o.a.createElement(d.c,null,o.a.createElement(d.a,{path:"/torneo",component:D}),o.a.createElement(d.a,{path:"/",component:M})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(46),t(20),t(47);r.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[26,1,2]]]);
//# sourceMappingURL=main.2d51e3d8.chunk.js.map
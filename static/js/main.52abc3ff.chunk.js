(this.webpackJsonppruebareact=this.webpackJsonppruebareact||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/pelota.3cdc8945.png"},function(e,a,t){e.exports=t.p+"static/media/GMatch_NEW_WHITE.118fe928.png"},,function(e,a,t){e.exports=t.p+"static/media/MCT_REAL_neg.8d965b4c.png"},,,function(e,a,t){e.exports=t(32)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),c=t(11),s=t.n(c),r=(t(17),t(2)),l=t(3),i=t(5),m=t(4),u=(t(18),t(19),t(20),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).handleClick=function(){var e=o.state.mostrar;e=!e,o.setState({mostrar:e})},o.state={mostrar:""},o}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.Torneo,a=this.state.mostrar;console.log(a);var t=e.nombre,o=e.superficie,c=e.descripcion,s=e.categoria,r=e.genero;return n.a.createElement("li",null,n.a.createElement("ul",null,n.a.createElement("div",{className:"Torneo"},n.a.createElement("a",{href:"#"},n.a.createElement("h3",{className:"Nombre",onClick:this.handleClick},t)),a&&n.a.createElement("li",null,n.a.createElement("h4",{className:"Info"},o),n.a.createElement("h4",{className:"Info"},c),n.a.createElement("h4",{className:"Info"},s),n.a.createElement("h4",{className:"Info"},r)))))}}]),t}(o.Component)),d=(t(21),o.Component,t(1)),f=t.n(d),v=t(6),p=t.n(v),g=(t(23),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).curretnSet=function(e){var a;switch(e.sets_j1+e.sets_j2){case 0:a=1;break;case 1:a=2;break;case 2:a=3;break;case 3:a=4;break;case 4:a=5}return a},o.state={id:"",Partidos:[]},o}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.Partidos;console.log(e);var a=e.resultado,t=e.hora_prevista,c=e.ronda,s=e.estado,r=e.pista,l=a.puntos_j1,i=(a.juegos_j1,a.set1_j1),m=a.set2_j1,u=a.set3_j1,d=a.saque_actual,v=a.sets_j1,g=a.ganador,h=a.puntos_j2,E=(a.juegos_j2,a.set1_j2),b=a.set2_j2,j=a.set3_j2,_=a.sets_j2,Y=a.hora_inicio,N=this.curretnSet(a);console.log(N);var H=e.jugadores[0].nombre,D=e.jugadores[1].nombre,M=(f()(),"Vivo"),k="iconoSaque",O="iconoSaque";1===d?O="iconoSaque_hidden":k="iconoSaque_hidden",c||(c="Cuartos de final"),t=f.a.utc(t).local().format("HH:mm");f.a.utc().local().format("HH"),f()().format("mm"),f.a.utc(Y).format("HH"),f.a.utc(Y).format("HH"),f.a.utc(Y).local().format("mm");console.log(Y);var C=f.a.utc(Y).format("YYYY/MM/DD HH:mm"),S=f.a.utc(Y).local();console.log("inicio"+C);var y=f.a.utc(C).format("YYYY/MM/DD HH:mm");console.log("iniciow"+y);var w=f.a.utc().local();console.log("ahora"+S.diff(w,"minutes"));var q=f.a.duration().subtract(S);console.log("diferencia"+f.a.utc(q).format("HH:mm"));var I=f.a.utc().local().format("YYYYMMDD HH:mm"),x=f.a.utc(Y).format("YYYYMMDD HH:mm");console.log("ahora "+I+"; inicio: "+x);var T=f()(I,"YYYYMMDD HH:mm");console.log(T.format("YYYYMMDD HH:mm"));var W=f()(x,"YYYYMMDD HH:mm"),L=f()(x,"YYYYMMDD HH:mm");L=f()(x,"YYYYMMDD HH:mm:ss");console.log("horas_"+W.format("HH")+"minutos_"+L.format("mm"));T.diff(W,"hours"),T.diff(L,"minutes");var P=T.diff(L,"seconds"),F=Math.floor(P/60),A=Math.floor(F/60);if(F-=60*A,console.log(P+" s "+F+" m "+A+"h"),console.log(T.diff(L,"minutes")+"m"),Y){var J=f.a.utc().local().format("HH"),B=f()().format("mm"),U=f.a.utc(Y).format("HH"),V=f.a.utc(Y).local().format("mm");console.log(J),console.log(B),console.log(J-U),console.log(B-V),M="Vivo"}F<10&&(F="0".concat(F)),A<10&&(A="0".concat(A));var z="",G="",R="";2==s&&(R="opacidad",1===g?z="gana":G="gana");var $=function(e,a,t,o,n,c,s,r,l,i){var m="",u="",d="",f="",v="",p="",g="",h="",E="",b="",j=[];"AD"==l?(E="gana",b="pierde"):"AD"==i?(b="gana",E="pierde"):l>i?(E="gana",b="pierde"):i>l&&(b="gana",E="pierde"),e>a?(m="gana",u="pierde"):a>e&&(u="gana",m="pierde"),t>o?(d="gana",f="pierde"):o>t&&(f="gana",d="pierde"),n>c?(v="gana",p="pierde"):c>n&&(p="gana",v="pierde"),s>r?(g="gana",h="pierde"):r>s&&(h="gana",g="pierde");var _={cs1j1:m,cs1j2:u,cs2j1:d,cs2j2:f,cs3j1:v,cs3j2:p,cs4j1:g,cs4j2:h,cp1j1:E,cp2j2:b};return j.push(_),j}(i,E,m,b,u,j,v,_,l,h)[0],K=$.cs1j1,Q=$.cs2j1,X=$.cs3j1,Z=($.cs4j1,$.cs1j2),ee=$.cs2j2,ae=$.cs3j2,te=($.cs4j2,$.cp1j1),oe=$.cp2j2;return n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"Partido",onClick:this.props.Mostrar},n.a.createElement("div",{className:"informacion ".concat(R)},n.a.createElement("div",{className:"info"},1==s&&n.a.createElement("div",{className:"info_"},n.a.createElement("div",{className:M},n.a.createElement("i",{class:"fas fa-circle"}),"".concat(A,":").concat(F)),n.a.createElement("div",null,"".concat(c)),n.a.createElement("div",null,"pista ".concat(r))),2==s&&n.a.createElement("div",{className:"info_"},n.a.createElement("div",{className:M,class:"hora_prevista"},"Finalizado"),n.a.createElement("div",null,"".concat(c)),n.a.createElement("div",null,"pista ".concat(r))),0==s&&n.a.createElement("div",{className:"info_"},n.a.createElement("div",{className:M,class:"hora_prevista"},n.a.createElement("i",{className:"far fa-clock icono"}),"".concat(t)),n.a.createElement("div",null,"".concat(c)),n.a.createElement("div",null,"pista ".concat(r)))),n.a.createElement("div",{className:"Jugador"},n.a.createElement("div",{class:"info1"},n.a.createElement("div",{className:"nombre ".concat(z)},H),1==s&&n.a.createElement("div",{className:"flex flex2"},n.a.createElement("div",null,n.a.createElement("img",{className:k,src:p.a,alt:""})),n.a.createElement("div",{className:"puntos_p ".concat(te)},l))),n.a.createElement("div",{className:"info2"},n.a.createElement("div",{className:"sets ".concat(K)},i),2==N&&n.a.createElement("div",{className:"sets ".concat(Q)},m),N>2&&n.a.createElement("div",{className:"auxiliar_flex"},n.a.createElement("div",{className:"sets ".concat(Q)},m),n.a.createElement("div",{className:"sets ".concat(X)},u)))),n.a.createElement("div",{className:"Jugador"},n.a.createElement("div",{className:"info1"},n.a.createElement("div",{className:"nombre ".concat(G)},D),1==s&&n.a.createElement("div",{className:"flex flex2"},n.a.createElement("div",null,n.a.createElement("img",{className:O,src:p.a,alt:""})),n.a.createElement("div",{className:"puntos_p ".concat(oe)},h))),n.a.createElement("div",{className:"info2"},n.a.createElement("div",{className:"sets ".concat(Z)},E),2==N&&n.a.createElement("div",{className:"sets ".concat(ee)},b),N>2&&n.a.createElement("div",{className:"auxiliar_flex"},n.a.createElement("div",{className:"sets ".concat(ee)},b),n.a.createElement("div",{className:"sets ".concat(ae)},j)))))))}}]),t}(o.Component)),h=(t(24),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).updateData=function(){fetch("http://gmatchapp.com/api/v1/partidos").then((function(e){return e.json()})).then((function(e){o.setState({info_partidos:e})}))},o.handleClick=function(e){console.log(e)},o.state={mostrar:"true"},o}return Object(l.a)(t,[{key:"componentWillMount",value:function(){this.updateData()}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.updateData()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this,a=(this.state.mostrar,[]),t=this.props.Torneos,c=this.state.info_partidos;return c&&t&&(console.log(this.state),a=function(e,a){var t=[],o=[],n=[],c=f.a.utc().local().format("ss");switch(console.log("seconds:"+c),c<40?0:40<c&&c<50?1:c>=50?2:0){case 0:a.map((function(a){o=[],e.map((function(e){e.torneo.id==a.id&&1==e.estado&&o.push(e)})),n={torneo:a.id,nombre:a.nombre,genero:a.genero,partidos:o},t.push(n)}));break;case 1:a.map((function(a){o=[],e.map((function(e){e.torneo.id==a.id&&2==e.estado&&o.push(e)})),n={torneo:a.id,nombre:a.nombre,genero:a.genero,partidos:o},t.push(n)}));break;case 2:a.map((function(a){o=[],e.map((function(e){e.torneo.id==a.id&&0==e.estado&&o.push(e)})),n={torneo:a.id,nombre:a.nombre,genero:a.genero,partidos:o},t.push(n)}));break;default:a.map((function(a){o=[],e.map((function(e){e.torneo.id==a.id&&1==e.estado&&o.push(e)})),n={torneo:a.id,nombre:a.nombre,genero:a.genero,partidos:o},t.push(n)}))}return t}(c,t)),n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"PartidosContainer"},a&&a.map((function(a,t){return n.a.createElement("div",{key:t.toString(),className:"torneo_grande",id:a.nombre,onClick:e.handleClick(a.nombre)},"Murcia Club de tenis"==a.nombre&&n.a.createElement("div",null,n.a.createElement("div",{className:"flex"},n.a.createElement("h2",null,"".concat(a.nombre)))),n.a.createElement("div",{id:a.nombre,className:"infoTorneo"},a.partidos&&a.partidos.map((function(a,t){return n.a.createElement(g,{Partidos:a,key:t.toString(),onClick:e.props.onClick,Mostrar:e.handleClick})}))))}))))}}]),t}(o.Component)),E=(t(25),o.Component,t(9),t(7)),b=t.n(E),j=(t(26),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).state={id:"",Partido:[]},o}return Object(l.a)(t,[{key:"render",value:function(){console.log("partido_tv");var e,a=this.props.partido,t=a.resultado,c=a.arbitro,s=a.torneo;e=s?s.nombre:"Campeonato de Espa\xf1a";var r,l,i,m,u,d,v,g,h,E,j,_,Y,N,H,D,M,k=0;c&&(k=1==c.auto_arbitraje?1:0),t&&(console.log(t),h=a.jugadores[0].nombre,E=a.jugadores[1].nombre,j=a.pista,t.hora_prevista,M=t.hora_inicio,i=t.puntos_j1,t.juegos_j1,m=t.set1_j1,u=t.set2_j1,d=t.set3_j1,v=t.saque_actual,g=t.sets_j1,t.ganador,_=t.puntos_j2,t.juegos_j2,Y=t.set1_j2,N=t.set2_j2,H=t.set3_j2,D=t.sets_j2);f.a.utc().local().format("HH"),f()().format("mm"),f.a.utc(M).format("HH"),f.a.utc(M).format("HH"),f.a.utc(M).local().format("mm");console.log(M);var O=f.a.utc(M).format("YYYY/MM/DD HH:mm"),C=f.a.utc(M).local();console.log("inicio"+O);var S=f.a.utc(O).format("YYYY/MM/DD HH:mm");console.log("iniciow"+S);var y=f.a.utc().local();console.log("ahora"+C.diff(y,"minutes"));var w=f.a.duration().subtract(C);console.log("diferencia"+f.a.utc(w).format("HH:mm"));var q=f.a.utc().local().format("YYYYMMDD HH:mm"),I=f.a.utc(M).format("YYYYMMDD HH:mm");console.log("ahora "+q+"; inicio: "+I);var x=f()(q,"YYYYMMDD HH:mm");console.log(x.format("YYYYMMDD HH:mm"));var T=f()(I,"YYYYMMDD HH:mm"),W=f()(I,"YYYYMMDD HH:mm");W=f()(I,"YYYYMMDD HH:mm:ss");console.log("horas_"+T.format("HH")+"minutos_"+W.format("mm"));x.diff(T,"hours"),x.diff(W,"minutes");var L=x.diff(W,"seconds"),P=Math.floor(L/60),F=Math.floor(P/60);P-=60*F,console.log(L+" s "+P+" m "+F+"h"),console.log(x.diff(W,"minutes")+"m");var A,J,B=!1;if(M){var U=f.a.utc().local().format("HH"),V=f()().format("mm"),z=f.a.utc(M).format("HH"),G=f.a.utc(M).local().format("mm");console.log(U),console.log(V),console.log(U-z),console.log(V-G),B=!0}return P<10&&(P="0".concat(P)),F<10&&(F="0".concat(F)),1===v?r="iconoSaque_hidden":l="iconoSaque_hidden",g+D>=3&&(r="iconoSaque_hidden",l="iconoSaque_hidden"),console.log(void 0),1==k?(A=g,J=D):(A=i,J=_),n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"pista"},n.a.createElement("div",{className:"pista2"},"Pista ".concat(j)),n.a.createElement("div",{className:"pista2"},"".concat(e)),n.a.createElement("div",{className:"pista2"},"Final")),n.a.createElement("div",{className:"contenedor"},n.a.createElement("div",{className:"jugador"},n.a.createElement("div",{className:"nombre"},n.a.createElement("span",{className:"nombre_jugador"},h),n.a.createElement("div",{className:"saque"},n.a.createElement("img",{className:"pelota ".concat(l),src:p.a,alt:""})),n.a.createElement("div",{className:"puntos"},A)),n.a.createElement("div",{className:"set"},m," ",n.a.createElement("span",{className:"set2"},"Set 1")),n.a.createElement("div",{className:"set"},u," ",n.a.createElement("span",{className:"set2"},"Set 2")),n.a.createElement("div",{className:"set"},d," ",n.a.createElement("span",{className:"set2"},"Set 3"))),n.a.createElement("div",{className:"jugador paddingFix"},n.a.createElement("div",{className:"nombre"},n.a.createElement("span",{className:"nombre_jugador"},E),n.a.createElement("div",{className:"saque"},n.a.createElement("img",{className:"pelota ".concat(r),src:p.a,alt:""})),n.a.createElement("div",{className:"puntos"},J)),n.a.createElement("div",{className:"set"},Y),n.a.createElement("div",{className:"set"},N),n.a.createElement("div",{className:"set"},H))),n.a.createElement("div",{className:"logos"},n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo",src:b.a})),n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo",src:"https://tenisxetapas.rfet.es/images/Logo_Blanco.png"})),n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo",src:"https://www.mapfre.es/seguros/coche-del-futuro/images/logo.png"})),B&&n.a.createElement("div",{className:"tiempo"},n.a.createElement("i",{className:"far fa-clock"})," ".concat(F," : ").concat(P))))}}]),t}(o.Component)),_=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).updateTime=function(){var e=o.state.timeLineTop;o.setState({timeLineTop:e+1}),console.log(e)},o.updateData=function(){fetch("http://gmatchapp.com/api/v1/torneos").then((function(e){return e.json()})).then((function(e){o.setState({Torneos:e})}))},o.state={torneos:""},o}return Object(l.a)(t,[{key:"componentWillMount",value:function(){this.updateData()}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.updateData()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.state.Torneos;return n.a.createElement("div",{className:"mainContainer"},n.a.createElement("div",{className:" maincontainer2 padding0 "},n.a.createElement(h,{Torneos:e})))}}]),t}(o.Component),Y=(t(27),t(28),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).state={id:"",Partido:[]},o}return Object(l.a)(t,[{key:"render",value:function(){console.log("partido_obs");var e,a=this.props,t=a.partido,c=a.obs,s=t,r=s.resultado,l=s.arbitro,i=s.torneo;e=i?i.nombre:"Campeonato de Espa\xf1a";var m,u,d,v,g,h,E,b,j,_,Y,N,H,D,M,k,O=0;l&&(O=1==l.auto_arbitraje?1:0),r&&(console.log(r),j=s.jugadores[0].nombre,_=s.jugadores[1].nombre,s.pista,r.hora_prevista,k=r.hora_inicio,d=r.puntos_j1,r.juegos_j1,v=r.set1_j1,g=r.set2_j1,h=r.set3_j1,E=r.saque_actual,b=r.sets_j1,r.ganador,Y=r.puntos_j2,r.juegos_j2,N=r.set1_j2,H=r.set2_j2,D=r.set3_j2,M=r.sets_j2),c&&document.body.setAttribute("class","obs_body");f.a.utc().local().format("HH"),f()().format("mm"),f.a.utc(k).format("HH"),f.a.utc(k).format("HH"),f.a.utc(k).local().format("mm");console.log(k);var C=f.a.utc(k).format("YYYY/MM/DD HH:mm"),S=f.a.utc(k).local();console.log("inicio"+C);var y=f.a.utc(C).format("YYYY/MM/DD HH:mm");console.log("iniciow"+y);var w=f.a.utc().local();console.log("ahora"+S.diff(w,"minutes"));var q=f.a.duration().subtract(S);console.log("diferencia"+f.a.utc(q).format("HH:mm"));var I=f.a.utc().local().format("YYYYMMDD HH:mm"),x=f.a.utc(k).format("YYYYMMDD HH:mm");console.log("ahora "+I+"; inicio: "+x);var T=f()(I,"YYYYMMDD HH:mm");console.log(T.format("YYYYMMDD HH:mm"));var W=f()(x,"YYYYMMDD HH:mm"),L=f()(x,"YYYYMMDD HH:mm");L=f()(x,"YYYYMMDD HH:mm:ss");console.log("horas_"+W.format("HH")+"minutos_"+L.format("mm"));T.diff(W,"hours"),T.diff(L,"minutes");var P=T.diff(L,"seconds"),F=Math.floor(P/60),A=Math.floor(F/60);F-=60*A,console.log(P+" s "+F+" m "+A+"h"),console.log(T.diff(L,"minutes")+"m");var J,B;if(k){var U=f.a.utc().local().format("HH"),V=f()().format("mm"),z=f.a.utc(k).format("HH"),G=f.a.utc(k).local().format("mm");console.log(U),console.log(V),console.log(U-z),console.log(V-G),!0}return F<10&&(F="0".concat(F)),A<10&&(A="0".concat(A)),1===E?m="iconoSaque_hidden":u="iconoSaque_hidden",b+M>=3&&(m="iconoSaque_hidden",u="iconoSaque_hidden"),console.log(void 0),1==O?(J=b,B=M):(J=d,B=Y),n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"contenedor"},n.a.createElement("div",{className:"obs_jugador obs_borde1"},n.a.createElement("div",{className:"obs_nombre"},n.a.createElement("span",{className:"obs_nombre_jugador"},j),n.a.createElement("div",{className:"obs_saque"},n.a.createElement("img",{className:"obs_pelota ".concat(u),src:p.a,alt:""})),n.a.createElement("div",{className:"obs_puntos"},J)),n.a.createElement("div",{className:"obs_set"},v," "),b+M>0&&n.a.createElement("div",{className:"obs_set"},g," "),b+M>1&&n.a.createElement("div",{className:"obs_set"},h," ")),n.a.createElement("div",{className:"obs_jugador  obs_borde2"},n.a.createElement("div",{className:"obs_nombre"},n.a.createElement("span",{className:"obs_nombre_jugador"},_),n.a.createElement("div",{className:"obs_saque"},n.a.createElement("img",{className:"obs_pelota ".concat(m),src:p.a,alt:""})),n.a.createElement("div",{className:"obs_puntos"},B)),n.a.createElement("div",{className:"obs_set"},N),b+M>0&&n.a.createElement("div",{className:"obs_set"},H," "),b+M>1&&n.a.createElement("div",{className:"obs_set"},D," ")),n.a.createElement("div",{className:"obs_pista"},n.a.createElement("span",{className:"obs_pista2"},"".concat(e)),n.a.createElement("span",{className:"obs_triangulo"},"\xa0"))))}}]),t}(o.Component)),N=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).updateTime=function(){var e=o.state.timeLineTop;o.setState({timeLineTop:e+1}),console.log(e)},o.updateData=function(){fetch("http://gmatchapp.com/api/v1/partidos").then((function(e){return e.json()})).then((function(e){o.setState({partidos:e})}))},o.state={mostrar:"true"},o}return Object(l.a)(t,[{key:"componentWillMount",value:function(){this.updateData()}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.updateData()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){function e(e){for(var a=window.location.search.substring(1).split("&"),t=0;t<a.length;t++){var o=a[t].split("=");if(o[0]==e)return o[1]}return null}var a=e("id_partido"),t=e("obs");a?console.log("obs"+t):console.log("no id");var o=[];console.log(this.state);var c=this.state.partidos;return c&&c.forEach((function(e){a==e.id&&(o=e)})),console.log(o),n.a.createElement("div",{className:"mainContainer"},a&&null==t&&n.a.createElement(j,{partido:o}),a&&t&&n.a.createElement(Y,{partido:o,obs:!0}))}}]),t}(o.Component),H=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=function(e){for(var a=window.location.search.substring(1).split("&"),t=0;t<a.length;t++){var o=a[t].split("=");if(o[0]==e)return o[1]}return null}("torneo");return n.a.createElement("div",null,"true"==e&&n.a.createElement(_,null),"true"!=e&&n.a.createElement(N,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(29),t(10),t(30);s.a.render(n.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.52abc3ff.chunk.js.map
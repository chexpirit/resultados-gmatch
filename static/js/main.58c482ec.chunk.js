(this.webpackJsonppruebareact=this.webpackJsonppruebareact||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/pelota.3cdc8945.png"},function(e,a,t){e.exports=t.p+"static/media/GMatch_NEW_WHITE.118fe928.png"},function(e,a,t){e.exports=t.p+"static/media/Siux_white.dc78cd15.png"},function(e,a,t){e.exports=t.p+"static/media/LOGO_FPRM_white.0f19037f.png"},function(e,a,t){e.exports=t.p+"static/media/MiraDigital_white.762163ea.png"},,function(e,a,t){e.exports=t.p+"static/media/MCT_REAL_neg.8d965b4c.png"},,,function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),c=t(14),s=t.n(c),r=(t(20),t(2)),l=t(3),i=t(5),m=t(4),u=(t(21),t(22),t(1)),d=t.n(u),v=t(6),f=t.n(v),p=function(e,a,t,o,n,c,s,r,l,i){var m="",u="",d="",v="",f="",p="",E="",g="",N="",h="",_="",j="",Y=[];"AD"==l?(N="gana",h="pierde"):"AD"==i?(h="gana",N="pierde"):l>i?(N="gana",h="pierde"):i>l&&(h="gana",N="pierde"),e>a?(m="gana",u="pierde"):a>e&&(u="gana",m="pierde"),t>o?(d="gana",v="pierde"):o>t&&(v="gana",d="pierde"),n>c?(f="gana",p="pierde"):c>n&&(p="gana",f="pierde"),s>r?(E="gana",g="pierde"):r>s&&(g="gana",E="pierde"),e+t+n+s>a+o+c+r?(_="gana",j="pierde"):e+t+n+s<a+o+c+r?(j="gana",_="pierde"):(j="pierde",_="pierde");var H={cs1j1:m,cs1j2:u,cs2j1:d,cs2j2:v,cs3j1:f,cs3j2:p,cs4j1:E,cs4j2:g,cp1j1:N,cp2j2:h,set_totalj1:_,set_totalj2:j};return Y.push(H),Y},E=(t(24),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).curretnSet=function(e){var a;switch(e.sets_j1+e.sets_j2){case 0:a=1;break;case 1:a=2;break;case 2:a=3;break;case 3:a=4;break;case 4:a=5}return a},o.state={id:"",Partidos:[]},o}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.Partidos;console.log(e);var a=e.resultado,t=e.hora_prevista,c=e.ronda,s=e.estado,r=e.pista,l=a.puntos_j1,i=(a.juegos_j1,a.set1_j1),m=a.set2_j1,u=a.set3_j1,v=a.saque_actual,E=a.sets_j1,g=a.ganador,N=a.set_actual,h=a.puntos_j2,_=(a.juegos_j2,a.set1_j2),j=a.set2_j2,Y=a.set3_j2,H=a.sets_j2,b=a.hora_inicio,D=this.curretnSet(a);console.log(D);var M=e.jugadores[0].nombre,S=e.jugadores[1].nombre,P=(d()(),"VivoSpain"),k="iconoSaqueSpain",O="iconoSaqueSpain";1===v?O="iconoSaque_hiddenSpain":k="iconoSaque_hiddenSpain",c||(c="Cuartos de finalSpain"),t=d.a.utc(t).local().format("HH:mm");d.a.utc().local().format("HH"),d()().format("mm"),d.a.utc(b).format("HH"),d.a.utc(b).format("HH"),d.a.utc(b).local().format("mm");console.log(b);var C=d.a.utc(b).format("YYYY/MM/DD HH:mm"),y=d.a.utc(b).local();console.log("inicio"+C);var q=d.a.utc(C).format("YYYY/MM/DD HH:mm");console.log("iniciow"+q);var x=d.a.utc().local();console.log("ahora"+y.diff(x,"minutes"));var I=d.a.duration().subtract(y);console.log("diferencia"+d.a.utc(I).format("HH:mm"));var T=d.a.utc().local().format("YYYYMMDD HH:mm"),w=d.a.utc(b).format("YYYYMMDD HH:mm");console.log("ahora "+T+"; inicio: "+w);var L=d()(T,"YYYYMMDD HH:mm");console.log(L.format("YYYYMMDD HH:mm"));var W=d()(w,"YYYYMMDD HH:mm"),F=d()(w,"YYYYMMDD HH:mm");F=d()(w,"YYYYMMDD HH:mm:ss");console.log("horas_"+W.format("HH")+"minutos_"+F.format("mm"));L.diff(W,"hours"),L.diff(F,"minutes");var J=L.diff(F,"seconds"),R=Math.floor(J/60),V=Math.floor(R/60);if(R-=60*V,console.log(J+" s "+R+" m "+V+"h"),console.log(L.diff(F,"minutes")+"m"),b){var A=d.a.utc().local().format("HH"),U=d()().format("mm"),z=d.a.utc(b).format("HH"),G=d.a.utc(b).local().format("mm");console.log(A),console.log(U),console.log(A-z),console.log(U-G),P="VivoSpain"}R<10&&(R="0".concat(R)),V<10&&(V="0".concat(V));var B="",$="",K="";2==s&&(K="opacidadSpain",1===g?B="ganaSpain":$="ganaSpain");var Q=p(i,_,m,j,u,Y,E,H,l,h)[0],X=(Q.cs1j1,Q.cs2j1),Z=Q.cs3j1,ee=(Q.cs4j1,Q.cs1j2),ae=Q.cs2j2,te=Q.cs3j2,oe=(Q.cs4j2,Q.cp1j1),ne=Q.cp2j2;Q.set_totalj1,Q.set_totalj2;switch(N){case 1:i,_;break;case 2:m,j;break;case 3:u,Y}return n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"PartidoSpain",onClick:this.props.Mostrar},n.a.createElement("div",{className:"informacionSpain ".concat(K)},n.a.createElement("div",{className:"infoSpain"},1==s&&n.a.createElement("div",{className:"info_Spain"},n.a.createElement("div",{className:P},n.a.createElement("i",{class:"fas fa-circle"}),"".concat(V,":").concat(R)),n.a.createElement("div",{className:"pistaSpain"},"Pista ".concat(r))),2==s&&n.a.createElement("div",{className:"info_Spain"},n.a.createElement("div",{className:P,class:"hora_previstaSpain"},"Finalizado"),n.a.createElement("div",{className:"pistaSpain"},"Pista ".concat(r))),0==s&&n.a.createElement("div",{className:"info_Spain"},n.a.createElement("div",{className:P,class:"hora_previstaSpain"},n.a.createElement("i",{className:"far fa-clock icono"}),"".concat(t)),n.a.createElement("div",{className:"pistaSpain"},"Pista ".concat(r)))),n.a.createElement("div",{className:"JugadorSpain"},n.a.createElement("div",{class:"info1Spain"},n.a.createElement("div",{className:"nombreSpain ".concat(B)},M),1==s&&n.a.createElement("div",{className:"flexSpain flex2Spain"},n.a.createElement("div",{className:"pelotaSpain"},n.a.createElement("img",{className:k,src:f.a,alt:""})),n.a.createElement("div",{className:"puntos_pSpain tamanoNumeros ".concat(oe)},l)),n.a.createElement("div",{className:"info2Spain tamanoNumeros"},n.a.createElement("div",{className:"setsSpain ".concat(B)},i),n.a.createElement("div",{className:"auxiliar_flexSpain"},n.a.createElement("div",{className:"setsSpain ".concat(X)},m),n.a.createElement("div",{className:"setsSpain ".concat(Z)},u))))),n.a.createElement("div",{className:"JugadorSpain"},n.a.createElement("div",{className:"info1Spain"},n.a.createElement("div",{className:"nombreSpain ".concat($)},S),1==s&&n.a.createElement("div",{className:"flexSpain flex2Spain"},n.a.createElement("div",{className:"pelotaSpain"},n.a.createElement("img",{className:O,src:f.a,alt:""})),n.a.createElement("div",{className:"puntos_pSpain tamanoNumeros ".concat(ne)},h)),n.a.createElement("div",{className:"info2Spain tamanoNumeros"},n.a.createElement("div",{className:"setsSpain ".concat(ee)},_),n.a.createElement("div",{className:"auxiliar_flexSpain"},n.a.createElement("div",{className:"setsSpain ".concat(ae)},j),n.a.createElement("div",{className:"setsSpain ".concat(te)},Y))))))))}}]),t}(o.Component)),g=(t(25),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).updateData=function(){fetch("http://gmatchapp.com/api/v1/partidos").then((function(e){return e.json()})).then((function(e){o.setState({info_partidos:e})}))},o.state={mostrar:"true"},o}return Object(l.a)(t,[{key:"componentWillMount",value:function(){this.updateData()}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.updateData()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this,a=(this.state.mostrar,[]),t=this.props.Torneos,c=this.state.info_partidos;return c&&t&&(console.log(this.state),a=function(e,a,t){var o=[],n=[],c=[],s=d.a.utc().local().format("ss");return console.log("seconds:"+s),a.map((function(a){a.id>=10&&(n=[],e.map((function(e){e.torneo.id==a.id&&1==e.estado&&n.push(e)})),c={torneo:a.id,nombre:a.nombre,genero:a.genero,partidos:n},o.push(c))})),o}(c,t)),n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"PartidosCtoSpainContainer"},a&&a.map((function(a,t){return n.a.createElement("div",{key:t.toString(),className:"torneo_grande",id:a.nombre},n.a.createElement("div",{className:"tituloEliminatoria"},a.nombre),n.a.createElement("div",{id:a.nombre,className:"infoTorneoSpain"},a.partidos&&a.partidos.map((function(a,t){return n.a.createElement(E,{Partidos:a,key:t.toString(),onClick:e.props.onClick})}))))}))))}}]),t}(o.Component)),N=t(7),h=t.n(N),_=t(8),j=t.n(_),Y=t(9),H=t.n(Y),b=t(10),D=t.n(b),M=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).updateTime=function(){var e=o.state.timeLineTop;o.setState({timeLineTop:e+1}),console.log(e)},o.updateData=function(){fetch("http://gmatchapp.com/api/v1/torneos").then((function(e){return e.json()})).then((function(e){o.setState({Torneos:e})}))},o.state={torneos:""},o}return Object(l.a)(t,[{key:"componentWillMount",value:function(){this.updateData()}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.updateData()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.state.Torneos;return n.a.createElement("div",{className:" MainContainer_cto_spain"},n.a.createElement("div",{className:"titulo"},"Campeonato de Espa\xf1a por equipos"),n.a.createElement("div",{className:" maincontainer2 padding0 "},n.a.createElement(g,{Torneos:e})),n.a.createElement("div",{className:"divLogo_spain"},n.a.createElement("img",{className:"logo_spain",src:h.a})))}}]),t}(o.Component),S=(t(26),t(27),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).handleClick=function(){var e=o.state.mostrar;e=!e,o.setState({mostrar:e})},o.state={mostrar:""},o}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.Torneo,a=this.state.mostrar;console.log(a);var t=e.nombre,o=e.superficie,c=e.descripcion,s=e.categoria,r=e.genero;return n.a.createElement("li",null,n.a.createElement("ul",null,n.a.createElement("div",{className:"Torneo"},n.a.createElement("a",{href:"#"},n.a.createElement("h3",{className:"Nombre",onClick:this.handleClick},t)),a&&n.a.createElement("li",null,n.a.createElement("h4",{className:"Info"},o),n.a.createElement("h4",{className:"Info"},c),n.a.createElement("h4",{className:"Info"},s),n.a.createElement("h4",{className:"Info"},r)))))}}]),t}(o.Component)),P=(t(28),o.Component,t(29),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).curretnSet=function(e){var a;switch(e.sets_j1+e.sets_j2){case 0:a=1;break;case 1:a=2;break;case 2:a=3;break;case 3:a=4;break;case 4:a=5}return a},o.state={id:"",Partidos:[]},o}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.Partidos;console.log(e);var a=e.resultado,t=e.hora_prevista,c=e.ronda,s=e.estado,r=e.pista,l=a.puntos_j1,i=(a.juegos_j1,a.set1_j1),m=a.set2_j1,u=a.set3_j1,v=a.saque_actual,E=a.sets_j1,g=a.ganador,N=a.puntos_j2,h=(a.juegos_j2,a.set1_j2),_=a.set2_j2,j=a.set3_j2,Y=a.sets_j2,H=a.hora_inicio,b=this.curretnSet(a);console.log(b);var D=e.jugadores[0].nombre,M=e.jugadores[1].nombre,S=(d()(),"Vivo"),P="iconoSaque",k="iconoSaque";1===v?k="iconoSaque_hidden":P="iconoSaque_hidden",c||(c="Cuartos de final"),t=d.a.utc(t).local().format("HH:mm");d.a.utc().local().format("HH"),d()().format("mm"),d.a.utc(H).format("HH"),d.a.utc(H).format("HH"),d.a.utc(H).local().format("mm");console.log(H);var O=d.a.utc(H).format("YYYY/MM/DD HH:mm"),C=d.a.utc(H).local();console.log("inicio"+O);var y=d.a.utc(O).format("YYYY/MM/DD HH:mm");console.log("iniciow"+y);var q=d.a.utc().local();console.log("ahora"+C.diff(q,"minutes"));var x=d.a.duration().subtract(C);console.log("diferencia"+d.a.utc(x).format("HH:mm"));var I=d.a.utc().local().format("YYYYMMDD HH:mm"),T=d.a.utc(H).format("YYYYMMDD HH:mm");console.log("ahora "+I+"; inicio: "+T);var w=d()(I,"YYYYMMDD HH:mm");console.log(w.format("YYYYMMDD HH:mm"));var L=d()(T,"YYYYMMDD HH:mm"),W=d()(T,"YYYYMMDD HH:mm");W=d()(T,"YYYYMMDD HH:mm:ss");console.log("horas_"+L.format("HH")+"minutos_"+W.format("mm"));w.diff(L,"hours"),w.diff(W,"minutes");var F=w.diff(W,"seconds"),J=Math.floor(F/60),R=Math.floor(J/60);if(J-=60*R,console.log(F+" s "+J+" m "+R+"h"),console.log(w.diff(W,"minutes")+"m"),H){var V=d.a.utc().local().format("HH"),A=d()().format("mm"),U=d.a.utc(H).format("HH"),z=d.a.utc(H).local().format("mm");console.log(V),console.log(A),console.log(V-U),console.log(A-z),S="Vivo"}J<10&&(J="0".concat(J)),R<10&&(R="0".concat(R));var G="",B="",$="";2==s&&($="opacidad",1===g?G="gana":B="gana");var K=p(i,h,m,_,u,j,E,Y,l,N)[0],Q=K.cs1j1,X=K.cs2j1,Z=K.cs3j1,ee=(K.cs4j1,K.cs1j2),ae=K.cs2j2,te=K.cs3j2,oe=(K.cs4j2,K.cp1j1),ne=K.cp2j2;return n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"Partido",onClick:this.props.Mostrar},n.a.createElement("div",{className:"informacion ".concat($)},n.a.createElement("div",{className:"info"},1==s&&n.a.createElement("div",{className:"info_"},n.a.createElement("div",{className:S},n.a.createElement("i",{class:"fas fa-circle"}),"".concat(R,":").concat(J)),n.a.createElement("div",null,"".concat(c)),n.a.createElement("div",null,"pista ".concat(r))),2==s&&n.a.createElement("div",{className:"info_"},n.a.createElement("div",{className:S,class:"hora_prevista"},"Finalizado"),n.a.createElement("div",null,"".concat(c)),n.a.createElement("div",null,"pista ".concat(r))),0==s&&n.a.createElement("div",{className:"info_"},n.a.createElement("div",{className:S,class:"hora_prevista"},n.a.createElement("i",{className:"far fa-clock icono"}),"".concat(t)),n.a.createElement("div",null,"".concat(c)),n.a.createElement("div",null,"pista ".concat(r)))),n.a.createElement("div",{className:"Jugador"},n.a.createElement("div",{class:"info1"},n.a.createElement("div",{className:"nombre ".concat(G)},D),1==s&&n.a.createElement("div",{className:"flex flex2"},n.a.createElement("div",null,n.a.createElement("img",{className:P,src:f.a,alt:""})),n.a.createElement("div",{className:"puntos_p ".concat(oe)},l))),n.a.createElement("div",{className:"info2"},n.a.createElement("div",{className:"sets ".concat(Q)},i),2==b&&n.a.createElement("div",{className:"sets ".concat(X)},m),b>2&&n.a.createElement("div",{className:"auxiliar_flex"},n.a.createElement("div",{className:"sets ".concat(X)},m),n.a.createElement("div",{className:"sets ".concat(Z)},u)))),n.a.createElement("div",{className:"Jugador"},n.a.createElement("div",{className:"info1"},n.a.createElement("div",{className:"nombre ".concat(B)},M),1==s&&n.a.createElement("div",{className:"flex flex2"},n.a.createElement("div",null,n.a.createElement("img",{className:k,src:f.a,alt:""})),n.a.createElement("div",{className:"puntos_p ".concat(ne)},N))),n.a.createElement("div",{className:"info2"},n.a.createElement("div",{className:"sets ".concat(ee)},h),2==b&&n.a.createElement("div",{className:"sets ".concat(ae)},_),b>2&&n.a.createElement("div",{className:"auxiliar_flex"},n.a.createElement("div",{className:"sets ".concat(ae)},_),n.a.createElement("div",{className:"sets ".concat(te)},j)))))))}}]),t}(o.Component)),k=(t(30),o.Component,t(31),o.Component,t(12),t(32),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).state={id:"",Partido:[]},o}return Object(l.a)(t,[{key:"render",value:function(){console.log("partido_tv");var e,a=this.props.partido,t=a.resultado,c=a.arbitro,s=a.torneo;e=s?s.nombre:"Campeonato de Espa\xf1a";var r,l,i,m,u,v,p,E,g,N,_,Y,b,M,S,P,k,O,C=0;c&&(C=1==c.auto_arbitraje?1:0),t&&(console.log(t),g=a.jugadores[0].nombre,N=a.jugadores[1].nombre,_=a.pista,Y=a.ronda,t.hora_prevista,O=t.hora_inicio,i=t.puntos_j1,t.juegos_j1,m=t.set1_j1,u=t.set2_j1,v=t.set3_j1,p=t.saque_actual,E=t.sets_j1,t.ganador,b=t.puntos_j2,t.juegos_j2,M=t.set1_j2,S=t.set2_j2,P=t.set3_j2,k=t.sets_j2);d.a.utc().local().format("HH"),d()().format("mm"),d.a.utc(O).format("HH"),d.a.utc(O).format("HH"),d.a.utc(O).local().format("mm");console.log(O);var y=d.a.utc(O).format("YYYY/MM/DD HH:mm"),q=d.a.utc(O).local();console.log("inicio"+y);var x=d.a.utc(y).format("YYYY/MM/DD HH:mm");console.log("iniciow"+x);var I=d.a.utc().local();console.log("ahora"+q.diff(I,"minutes"));var T=d.a.duration().subtract(q);console.log("diferencia"+d.a.utc(T).format("HH:mm"));var w=d.a.utc().local().format("YYYYMMDD HH:mm"),L=d.a.utc(O).format("YYYYMMDD HH:mm");console.log("ahora "+w+"; inicio: "+L);var W=d()(w,"YYYYMMDD HH:mm");console.log(W.format("YYYYMMDD HH:mm"));var F=d()(L,"YYYYMMDD HH:mm"),J=d()(L,"YYYYMMDD HH:mm");J=d()(L,"YYYYMMDD HH:mm:ss");console.log("horas_"+F.format("HH")+"minutos_"+J.format("mm"));W.diff(F,"hours"),W.diff(J,"minutes");var R=W.diff(J,"seconds"),V=Math.floor(R/60),A=Math.floor(V/60);V-=60*A,console.log(R+" s "+V+" m "+A+"h"),console.log(W.diff(J,"minutes")+"m");var U,z,G=!1;if(O){var B=d.a.utc().local().format("HH"),$=d()().format("mm"),K=d.a.utc(O).format("HH"),Q=d.a.utc(O).local().format("mm");console.log(B),console.log($),console.log(B-K),console.log($-Q),G=!0}return V<10&&(V="0".concat(V)),A<10&&(A="0".concat(A)),1===p?r="iconoSaque_hidden":l="iconoSaque_hidden",E+k>=3&&(r="iconoSaque_hidden",l="iconoSaque_hidden"),console.log(void 0),1==C?(U=E,z=k):(U=i,z=b),n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"pista"},n.a.createElement("div",{className:"pista2"},"Pista ".concat(_)),n.a.createElement("div",{className:"pista2"},"".concat(e)),n.a.createElement("div",{className:"pista2"},"".concat(Y))),n.a.createElement("div",{className:"contenedor"},n.a.createElement("div",{className:"jugador"},n.a.createElement("div",{className:"nombre"},n.a.createElement("span",{className:"nombre_jugador"},g),n.a.createElement("div",{className:"saque"},n.a.createElement("img",{className:"pelota ".concat(l),src:f.a,alt:""})),n.a.createElement("div",{className:"puntos"},U)),n.a.createElement("div",{className:"set"},m," ",n.a.createElement("span",{className:"set2"},"Set 1")),n.a.createElement("div",{className:"set"},u," ",n.a.createElement("span",{className:"set2"},"Set 2")),n.a.createElement("div",{className:"set"},v," ",n.a.createElement("span",{className:"set2"},"Set 3"))),n.a.createElement("div",{className:"jugador paddingFix"},n.a.createElement("div",{className:"nombre"},n.a.createElement("span",{className:"nombre_jugador"},N),n.a.createElement("div",{className:"saque"},n.a.createElement("img",{className:"pelota ".concat(r),src:f.a,alt:""})),n.a.createElement("div",{className:"puntos"},z)),n.a.createElement("div",{className:"set "},M),n.a.createElement("div",{className:"set"},S),n.a.createElement("div",{className:"set"},P))),n.a.createElement("div",{className:"logo-partido"},n.a.createElement("div",{className:"logos"},n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel",src:h.a})),n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel",src:j.a})),n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel3",src:H.a})),n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel2",src:D.a})),G&&n.a.createElement("div",{className:"tiempo"},n.a.createElement("i",{className:"far fa-clock"})," ".concat(A," : ").concat(V)))))}}]),t}(o.Component)),O=(t(33),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).state={id:"",Partido:[]},o}return Object(l.a)(t,[{key:"render",value:function(){console.log("partido_obs");var e,a=this.props,t=a.partido,c=a.obs,s=t,r=s.resultado,l=s.arbitro,i=s.torneo;e=i?i.nombre:"Campeonato de Espa\xf1a";var m,u,v,p,E,g,N,h,_,j,Y,H,b,D,M,S,P=0;l&&(P=1==l.auto_arbitraje?1:0),r&&(console.log(r),_=s.jugadores[0].nombre,j=s.jugadores[1].nombre,s.pista,r.hora_prevista,S=r.hora_inicio,v=r.puntos_j1,r.juegos_j1,p=r.set1_j1,E=r.set2_j1,g=r.set3_j1,N=r.saque_actual,h=r.sets_j1,r.ganador,Y=r.puntos_j2,r.juegos_j2,H=r.set1_j2,b=r.set2_j2,D=r.set3_j2,M=r.sets_j2),c&&document.body.setAttribute("class","obs_body");d.a.utc().local().format("HH"),d()().format("mm"),d.a.utc(S).format("HH"),d.a.utc(S).format("HH"),d.a.utc(S).local().format("mm");console.log(S);var k=d.a.utc(S).format("YYYY/MM/DD HH:mm"),O=d.a.utc(S).local();console.log("inicio"+k);var C=d.a.utc(k).format("YYYY/MM/DD HH:mm");console.log("iniciow"+C);var y=d.a.utc().local();console.log("ahora"+O.diff(y,"minutes"));var q=d.a.duration().subtract(O);console.log("diferencia"+d.a.utc(q).format("HH:mm"));var x=d.a.utc().local().format("YYYYMMDD HH:mm"),I=d.a.utc(S).format("YYYYMMDD HH:mm");console.log("ahora "+x+"; inicio: "+I);var T=d()(x,"YYYYMMDD HH:mm");console.log(T.format("YYYYMMDD HH:mm"));var w=d()(I,"YYYYMMDD HH:mm"),L=d()(I,"YYYYMMDD HH:mm");L=d()(I,"YYYYMMDD HH:mm:ss");console.log("horas_"+w.format("HH")+"minutos_"+L.format("mm"));T.diff(w,"hours"),T.diff(L,"minutes");var W=T.diff(L,"seconds"),F=Math.floor(W/60),J=Math.floor(F/60);F-=60*J,console.log(W+" s "+F+" m "+J+"h"),console.log(T.diff(L,"minutes")+"m");var R,V;if(S){var A=d.a.utc().local().format("HH"),U=d()().format("mm"),z=d.a.utc(S).format("HH"),G=d.a.utc(S).local().format("mm");console.log(A),console.log(U),console.log(A-z),console.log(U-G),!0}return F<10&&(F="0".concat(F)),J<10&&(J="0".concat(J)),1===N?m="iconoSaque_hidden":u="iconoSaque_hidden",h+M>=3&&(m="iconoSaque_hidden",u="iconoSaque_hidden"),console.log(void 0),1==P?(R=h,V=M):(R=v,V=Y),n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"contenedor"},n.a.createElement("div",{className:"obs_jugador obs_borde1"},n.a.createElement("div",{className:"obs_nombre"},n.a.createElement("span",{className:"obs_nombre_jugador"},_),n.a.createElement("div",{className:"obs_saque"},n.a.createElement("img",{className:"obs_pelota ".concat(u),src:f.a,alt:""})),n.a.createElement("div",{className:"obs_puntos"},R)),n.a.createElement("div",{className:"obs_set"},p," "),h+M>0&&n.a.createElement("div",{className:"obs_set"},E," "),h+M>1&&n.a.createElement("div",{className:"obs_set"},g," ")),n.a.createElement("div",{className:"obs_jugador  obs_borde2"},n.a.createElement("div",{className:"obs_nombre"},n.a.createElement("span",{className:"obs_nombre_jugador"},j),n.a.createElement("div",{className:"obs_saque"},n.a.createElement("img",{className:"obs_pelota ".concat(m),src:f.a,alt:""})),n.a.createElement("div",{className:"obs_puntos"},V)),n.a.createElement("div",{className:"obs_set"},H),h+M>0&&n.a.createElement("div",{className:"obs_set"},b," "),h+M>1&&n.a.createElement("div",{className:"obs_set"},D," ")),n.a.createElement("div",{className:"obs_pista"},n.a.createElement("span",{className:"obs_pista2"},"".concat(e)),n.a.createElement("span",{className:"obs_triangulo"},"\xa0"))))}}]),t}(o.Component)),C=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).updateTime=function(){var e=o.state.timeLineTop;o.setState({timeLineTop:e+1}),console.log(e)},o.updateData=function(){fetch("http://gmatchapp.com/api/v1/partidos").then((function(e){return e.json()})).then((function(e){o.setState({partidos:e})}))},o.state={mostrar:"true"},o}return Object(l.a)(t,[{key:"componentWillMount",value:function(){this.updateData()}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.updateData()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){function e(e){for(var a=window.location.search.substring(1).split("&"),t=0;t<a.length;t++){var o=a[t].split("=");if(o[0]==e)return o[1]}return null}var a=e("id_partido"),t=e("obs");a?console.log("obs"+t):console.log("no id");var o=[];console.log(this.state);var c=this.state.partidos;return c&&c.forEach((function(e){a==e.id&&(o=e)})),console.log(o),n.a.createElement("div",{className:"mainContainer"},a&&null==t&&n.a.createElement(k,{partido:o}),a&&t&&n.a.createElement(O,{partido:o,obs:!0}))}}]),t}(o.Component),y=(t(34),t(35),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).curretnSet=function(e){var a;switch(e.sets_j1+e.sets_j2){case 0:a=1;break;case 1:a=2;break;case 2:a=3;break;case 3:a=4;break;case 4:a=5}return a},o.state={id:"",Partidos:[]},o}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.Partidos;console.log(e);var a=e.resultado,t=e.hora_prevista,c=e.ronda,s=e.estado,r=e.pista,l=a.puntos_j1,i=(a.juegos_j1,a.set1_j1),m=a.set2_j1,u=a.set3_j1,v=a.saque_actual,E=a.sets_j1,g=a.ganador,N=a.puntos_j2,h=(a.juegos_j2,a.set1_j2),_=a.set2_j2,j=a.set3_j2,Y=a.sets_j2,H=a.hora_inicio,b=this.curretnSet(a);console.log(b);var D=e.jugadores[0].nombre,M=e.jugadores[1].nombre,S=(d()(),"VivoPadel"),P="iconoSaquePadel",k="iconoSaquePadel";1===v?k="iconoSaque_hiddenPadel":P="iconoSaque_hiddenPadel",c||(c="Cuartos de finalPadel"),t=d.a.utc(t).local().format("HH:mm");d.a.utc().local().format("HH"),d()().format("mm"),d.a.utc(H).format("HH"),d.a.utc(H).format("HH"),d.a.utc(H).local().format("mm");console.log(H);var O=d.a.utc(H).format("YYYY/MM/DD HH:mm"),C=d.a.utc(H).local();console.log("inicio"+O);var y=d.a.utc(O).format("YYYY/MM/DD HH:mm");console.log("iniciow"+y);var q=d.a.utc().local();console.log("ahora"+C.diff(q,"minutes"));var x=d.a.duration().subtract(C);console.log("diferencia"+d.a.utc(x).format("HH:mm"));var I=d.a.utc().local().format("YYYYMMDD HH:mm"),T=d.a.utc(H).format("YYYYMMDD HH:mm");console.log("ahora "+I+"; inicio: "+T);var w=d()(I,"YYYYMMDD HH:mm");console.log(w.format("YYYYMMDD HH:mm"));var L=d()(T,"YYYYMMDD HH:mm"),W=d()(T,"YYYYMMDD HH:mm");W=d()(T,"YYYYMMDD HH:mm:ss");console.log("horas_"+L.format("HH")+"minutos_"+W.format("mm"));w.diff(L,"hours"),w.diff(W,"minutes");var F=w.diff(W,"seconds"),J=Math.floor(F/60),R=Math.floor(J/60);if(J-=60*R,console.log(F+" s "+J+" m "+R+"h"),console.log(w.diff(W,"minutes")+"m"),H){var V=d.a.utc().local().format("HH"),A=d()().format("mm"),U=d.a.utc(H).format("HH"),z=d.a.utc(H).local().format("mm");console.log(V),console.log(A),console.log(V-U),console.log(A-z),S="VivoPadel"}J<10&&(J="0".concat(J)),R<10&&(R="0".concat(R));var G="",B="",$="";2==s&&($="opacidadPadel",1===g?G="ganaPadel":B="ganaPadel");var K=p(i,h,m,_,u,j,E,Y,l,N)[0],Q=K.cs1j1,X=K.cs2j1,Z=K.cs3j1,ee=(K.cs4j1,K.cs1j2),ae=K.cs2j2,te=K.cs3j2,oe=(K.cs4j2,K.cp1j1),ne=K.cp2j2;return n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"PartidoPadel",onClick:this.props.Mostrar},n.a.createElement("div",{className:"informacionPadel ".concat($)},n.a.createElement("div",{className:"infoPadel"},1==s&&n.a.createElement("div",{className:"info_Padel"},n.a.createElement("div",{className:"pistaPadel"},"Pista ".concat(r)),n.a.createElement("div",{className:"rondaPadel"},"".concat(c)),n.a.createElement("div",{className:S},n.a.createElement("i",{class:"fas fa-circle"}),"".concat(R,":").concat(J))),2==s&&n.a.createElement("div",{className:"info_Padel"},n.a.createElement("div",{className:S,class:"hora_previstaPadel"},"Finalizado"),n.a.createElement("div",{className:"pistaPadel"},"Pista ".concat(r))),0==s&&n.a.createElement("div",{className:"info_Padel"},n.a.createElement("div",{className:S,class:"hora_previstaPadel"},n.a.createElement("i",{className:"far fa-clock icono"}),"".concat(t)),n.a.createElement("div",{className:"pistaPadel"},"Pista ".concat(r)))),n.a.createElement("div",{className:"JugadorPadel"},n.a.createElement("div",{class:"info1Padel"},n.a.createElement("div",{className:"nombrePadel ".concat(G)},D),1==s&&n.a.createElement("div",{className:"flexPadel flex2Padel"},n.a.createElement("div",{className:"pelotaPadel"},n.a.createElement("img",{className:P,src:f.a,alt:""})),n.a.createElement("div",{className:"puntos_pPadel  ".concat(oe)},l))),n.a.createElement("div",{className:"info2Padel"},n.a.createElement("div",{className:"setsPadel  ".concat(Q)},i),n.a.createElement("div",{className:"setsPadel  ".concat(X)},m),n.a.createElement("div",{className:"setsPadel  ".concat(Z)},u))),n.a.createElement("div",{className:"JugadorPadel"},n.a.createElement("div",{className:"info1Padel"},n.a.createElement("div",{className:"nombrePadel ".concat(B)},M),1==s&&n.a.createElement("div",{className:"flexPadel flex2Padel"},n.a.createElement("div",{className:"pelotaPadel"},n.a.createElement("img",{className:k,src:f.a,alt:""})),n.a.createElement("div",{className:"puntos_pPadel  ".concat(ne)},N))),n.a.createElement("div",{className:"info2Padel"},n.a.createElement("div",{className:"setsPadel  ".concat(ee)},h),n.a.createElement("div",{className:"setsPadel  ".concat(ae)},_),n.a.createElement("div",{className:"setsPadel  ".concat(te)},j))))))}}]),t}(o.Component)),q=(t(36),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).updateData=function(){fetch("http://gmatchapp.com/api/v1/partidos").then((function(e){return e.json()})).then((function(e){o.setState({info_partidos:e})}))},o.state={mostrar:"true"},o}return Object(l.a)(t,[{key:"componentWillMount",value:function(){this.updateData()}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.updateData()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this,a=(this.state.mostrar,[]),t=this.props.Torneos,c=this.state.info_partidos;return c&&t&&(console.log(this.state),a=function(e,a,t){var o=[],n=[],c=[],s=d.a.utc().local().format("ss");console.log("seconds:"+s);var r=0;return a.map((function(a){a.nombre==t&&(n=[],e.map((function(e){e.torneo.id==a.id&&e.id>26&&n.push(e)})),c={torneo:a.id,nombre:a.nombre,genero:a.genero,partidos:n},(r+=1)<=3&&o.push(c))})),o}(c,t,"Torneo Regi\xf3n de Murcia")),n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"PartidosPadelContainer"},a&&a.map((function(a,t){return n.a.createElement("div",{key:t.toString(),className:"torneo_grande",id:a.nombre},n.a.createElement("div",{id:a.nombre,className:"infoTorneoPadel"},a.partidos&&a.partidos.map((function(a,t){return n.a.createElement(y,{Partidos:a,key:t.toString(),onClick:e.props.onClick})}))))})),n.a.createElement("div",{className:"logos_padel"},n.a.createElement("div",{className:"logos"},n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel",src:h.a})),n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel",src:j.a})),n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel3",src:H.a})),n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel2",src:D.a}))))))}}]),t}(o.Component)),x=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).updateTime=function(){var e=o.state.timeLineTop;o.setState({timeLineTop:e+1}),console.log(e)},o.updateData=function(){fetch("http://gmatchapp.com/api/v1/torneos").then((function(e){return e.json()})).then((function(e){o.setState({Torneos:e})}))},o.state={torneos:""},o}return Object(l.a)(t,[{key:"componentWillMount",value:function(){this.updateData()}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.updateData()}),1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.state.Torneos;return n.a.createElement("div",{className:" MainContainer_Padel"},n.a.createElement("div",{className:"tituloPadel"},"TORNEO REGI\xd3N DE MURCIA VERDOLAY"),n.a.createElement("div",{className:" maincontainer2 padding0 "},n.a.createElement(q,{Torneos:e})))}}]),t}(o.Component),I=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=function(e){for(var a=window.location.search.substring(1).split("&"),t=0;t<a.length;t++){var o=a[t].split("=");if(o[0]==e)return o[1]}return null}("torneo");return n.a.createElement(o.Fragment,null,"cto_spain"==e&&n.a.createElement(M,null),"cto_padel"==e&&n.a.createElement(x,null),"true"!=e&&n.a.createElement(C,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(37),t(13),t(38);s.a.render(n.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.58c482ec.chunk.js.map
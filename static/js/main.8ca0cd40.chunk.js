(this.webpackJsonppruebareact=this.webpackJsonppruebareact||[]).push([[0],[,,,,,,function(a,e,t){a.exports=t.p+"static/media/pelota.3cdc8945.png"},function(a,e,t){a.exports=t.p+"static/media/GMatch_NEW_WHITE.ff1fd14b.png"},function(a,e,t){a.exports=t.p+"static/media/LOGO_FPRM_white.0f19037f.png"},function(a,e,t){a.exports=t.p+"static/media/MiraDigital_white.762163ea.png"},function(a,e,t){a.exports=t.p+"static/media/head.139f77b2.svg"},function(a,e,t){a.exports=t.p+"static/media/joma.77ae43d9.png"},,function(a,e,t){a.exports=t.p+"static/media/Siux_white.dc78cd15.png"},function(a,e,t){a.exports=t.p+"static/media/MCT_REAL_neg.8d965b4c.png"},,,function(a,e,t){a.exports=t(43)},,,,,function(a,e,t){},function(a,e,t){},function(a,e,t){},,function(a,e,t){},function(a,e,t){},function(a,e,t){},function(a,e,t){},function(a,e,t){},function(a,e,t){},function(a,e,t){},function(a,e,t){},function(a,e,t){},function(a,e,t){},function(a,e,t){},function(a,e,t){},function(a,e,t){},function(a,e,t){},,,,function(a,e,t){"use strict";t.r(e);var o=t(0),n=t.n(o),c=t(16),s=t.n(c),l=(t(22),t(2)),r=t(3),i=t(5),m=t(4),d=(t(23),t(24),t(1)),u=t.n(d),v=t(6),p=t.n(v),f=function(a,e,t,o,n,c,s,l,r,i){var m="",d="",u="",v="",p="",f="",E="",g="",_="",N="",j="",h="",Y=[];"AD"==r?(_="gana",N="pierde"):"AD"==i?(N="gana",_="pierde"):r>i?(_="gana",N="pierde"):i>r&&(N="gana",_="pierde"),a>e?(m="gana",d="pierde"):e>a&&(d="gana",m="pierde"),t>o?(u="gana",v="pierde"):o>t&&(v="gana",u="pierde"),n>c?(p="gana",f="pierde"):c>n&&(f="gana",p="pierde"),s>l?(E="gana",g="pierde"):l>s&&(g="gana",E="pierde"),a+t+n+s>e+o+c+l?(j="gana",h="pierde"):a+t+n+s<e+o+c+l?(h="gana",j="pierde"):(h="pierde",j="pierde");var H={cs1j1:m,cs1j2:d,cs2j1:u,cs2j2:v,cs3j1:p,cs3j2:f,cs4j1:E,cs4j2:g,cp1j1:_,cp2j2:N,set_totalj1:j,set_totalj2:h};return Y.push(H),Y},E=(t(26),function(a){Object(i.a)(t,a);var e=Object(m.a)(t);function t(a){var o;return Object(l.a)(this,t),(o=e.call(this,a)).curretnSet=function(a){var e;switch(a.sets_j1+a.sets_j2){case 0:e=1;break;case 1:e=2;break;case 2:e=3;break;case 3:e=4;break;case 4:e=5}return e},o.state={id:"",Partidos:[]},o}return Object(r.a)(t,[{key:"render",value:function(){var a=this.props.Partidos;console.log(a);var e=a.resultado,t=a.hora_prevista,c=a.ronda,s=a.estado,l=a.pista,r=e.puntos_j1,i=(e.juegos_j1,e.set1_j1),m=e.set2_j1,d=e.set3_j1,v=e.saque_actual,E=e.sets_j1,g=e.ganador,_=e.set_actual,N=e.puntos_j2,j=(e.juegos_j2,e.set1_j2),h=e.set2_j2,Y=e.set3_j2,H=e.sets_j2,b=e.hora_inicio,D=this.curretnSet(e);console.log(D);var M=a.jugadores[0].nombre,S=a.jugadores[1].nombre,P=(u()(),"VivoSpain"),k="iconoSaqueSpain",O="iconoSaqueSpain";1===v?O="iconoSaque_hiddenSpain":k="iconoSaque_hiddenSpain",c||(c="Cuartos de finalSpain"),t=u.a.utc(t).local().format("HH:mm");u.a.utc().local().format("HH"),u()().format("mm"),u.a.utc(b).format("HH"),u.a.utc(b).format("HH"),u.a.utc(b).local().format("mm");console.log(b);var C=u.a.utc(b).format("YYYY/MM/DD HH:mm"),y=u.a.utc(b).local();console.log("inicio"+C);var x=u.a.utc(C).format("YYYY/MM/DD HH:mm");console.log("iniciow"+x);var q=u.a.utc().local();console.log("ahora"+y.diff(q,"minutes"));var w=u.a.duration().subtract(y);console.log("diferencia"+u.a.utc(w).format("HH:mm"));var I=u.a.utc().local().format("YYYYMMDD HH:mm"),T=u.a.utc(b).format("YYYYMMDD HH:mm");console.log("ahora "+I+"; inicio: "+T);var L=u()(I,"YYYYMMDD HH:mm");console.log(L.format("YYYYMMDD HH:mm"));var F=u()(T,"YYYYMMDD HH:mm"),W=u()(T,"YYYYMMDD HH:mm");W=u()(T,"YYYYMMDD HH:mm:ss");console.log("horas_"+F.format("HH")+"minutos_"+W.format("mm"));L.diff(F,"hours"),L.diff(W,"minutes");var A=L.diff(W,"seconds"),J=Math.floor(A/60),V=Math.floor(J/60);if(J-=60*V,console.log(A+" s "+J+" m "+V+"h"),console.log(L.diff(W,"minutes")+"m"),b){var U=u.a.utc().local().format("HH"),z=u()().format("mm"),G=u.a.utc(b).format("HH"),B=u.a.utc(b).local().format("mm");console.log(U),console.log(z),console.log(U-G),console.log(z-B),P="VivoSpain"}J<10&&(J="0".concat(J)),V<10&&(V="0".concat(V));var R="",$="",K="";2==s&&(K="opacidadSpain",1===g?R="ganaSpain":$="ganaSpain");var Q=f(i,j,m,h,d,Y,E,H,r,N)[0],X=(Q.cs1j1,Q.cs2j1),Z=Q.cs3j1,aa=(Q.cs4j1,Q.cs1j2),ea=Q.cs2j2,ta=Q.cs3j2,oa=(Q.cs4j2,Q.cp1j1),na=Q.cp2j2;Q.set_totalj1,Q.set_totalj2;switch(_){case 1:i,j;break;case 2:m,h;break;case 3:d,Y}return n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"PartidoSpain",onClick:this.props.Mostrar},n.a.createElement("div",{className:"informacionSpain ".concat(K)},n.a.createElement("div",{className:"infoSpain"},1==s&&n.a.createElement("div",{className:"info_Spain"},n.a.createElement("div",{className:P},n.a.createElement("i",{class:"fas fa-circle"}),"".concat(V,":").concat(J)),n.a.createElement("div",{className:"pistaSpain"},"Pista ".concat(l))),2==s&&n.a.createElement("div",{className:"info_Spain"},n.a.createElement("div",{className:P,class:"hora_previstaSpain"},"Finalizado"),n.a.createElement("div",{className:"pistaSpain"},"Pista ".concat(l))),0==s&&n.a.createElement("div",{className:"info_Spain"},n.a.createElement("div",{className:P,class:"hora_previstaSpain"},n.a.createElement("i",{className:"far fa-clock icono"}),"".concat(t)),n.a.createElement("div",{className:"pistaSpain"},"Pista ".concat(l)))),n.a.createElement("div",{className:"JugadorSpain"},n.a.createElement("div",{class:"info1Spain"},n.a.createElement("div",{className:"nombreSpain ".concat(R)},M),1==s&&n.a.createElement("div",{className:"flexSpain flex2Spain"},n.a.createElement("div",{className:"pelotaSpain"},n.a.createElement("img",{className:k,src:p.a,alt:""})),n.a.createElement("div",{className:"puntos_pSpain tamanoNumeros ".concat(oa)},r)),n.a.createElement("div",{className:"info2Spain tamanoNumeros"},n.a.createElement("div",{className:"setsSpain ".concat(R)},i),n.a.createElement("div",{className:"auxiliar_flexSpain"},n.a.createElement("div",{className:"setsSpain ".concat(X)},m),n.a.createElement("div",{className:"setsSpain ".concat(Z)},d))))),n.a.createElement("div",{className:"JugadorSpain"},n.a.createElement("div",{className:"info1Spain"},n.a.createElement("div",{className:"nombreSpain ".concat($)},S),1==s&&n.a.createElement("div",{className:"flexSpain flex2Spain"},n.a.createElement("div",{className:"pelotaSpain"},n.a.createElement("img",{className:O,src:p.a,alt:""})),n.a.createElement("div",{className:"puntos_pSpain tamanoNumeros ".concat(na)},N)),n.a.createElement("div",{className:"info2Spain tamanoNumeros"},n.a.createElement("div",{className:"setsSpain ".concat(aa)},j),n.a.createElement("div",{className:"auxiliar_flexSpain"},n.a.createElement("div",{className:"setsSpain ".concat(ea)},h),n.a.createElement("div",{className:"setsSpain ".concat(ta)},Y))))))))}}]),t}(o.Component)),g=(t(27),function(a){Object(i.a)(t,a);var e=Object(m.a)(t);function t(a){var o;return Object(l.a)(this,t),(o=e.call(this,a)).updateData=function(){fetch("http://gmatchapp.com/api/v1/partidos").then((function(a){return a.json()})).then((function(a){o.setState({info_partidos:a})}))},o.state={mostrar:"true"},o}return Object(r.a)(t,[{key:"componentWillMount",value:function(){this.updateData()}},{key:"componentDidMount",value:function(){var a=this;this.timerID=setInterval((function(){return a.updateData()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var a=this,e=(this.state.mostrar,[]),t=this.props.Torneos,c=this.state.info_partidos;return c&&t&&(console.log(this.state),e=function(a,e,t){var o=[],n=[],c=[],s=u.a.utc().local().format("ss");return console.log("seconds:"+s),e.map((function(e){e.id>=10&&(n=[],a.map((function(a){a.torneo.id==e.id&&1==a.estado&&n.push(a)})),c={torneo:e.id,nombre:e.nombre,genero:e.genero,partidos:n},o.push(c))})),o}(c,t)),n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"PartidosCtoSpainContainer"},e&&e.map((function(e,t){return n.a.createElement("div",{key:t.toString(),className:"torneo_grande",id:e.nombre},n.a.createElement("div",{className:"tituloEliminatoria"},e.nombre),n.a.createElement("div",{id:e.nombre,className:"infoTorneoSpain"},e.partidos&&e.partidos.map((function(e,t){return n.a.createElement(E,{Partidos:e,key:t.toString(),onClick:a.props.onClick})}))))}))))}}]),t}(o.Component)),_=t(7),N=t.n(_),j=(t(13),t(8)),h=t.n(j),Y=t(9),H=t.n(Y),b=(o.Component,t(28),t(29),function(a){Object(i.a)(t,a);var e=Object(m.a)(t);function t(a){var o;return Object(l.a)(this,t),(o=e.call(this,a)).handleClick=function(){var a=o.state.mostrar;a=!a,o.setState({mostrar:a})},o.state={mostrar:""},o}return Object(r.a)(t,[{key:"render",value:function(){var a=this.props.Torneo,e=this.state.mostrar;console.log(e);var t=a.nombre,o=a.superficie,c=a.descripcion,s=a.categoria,l=a.genero;return n.a.createElement("li",null,n.a.createElement("ul",null,n.a.createElement("div",{className:"Torneo"},n.a.createElement("a",{href:"#"},n.a.createElement("h3",{className:"Nombre",onClick:this.handleClick},t)),e&&n.a.createElement("li",null,n.a.createElement("h4",{className:"Info"},o),n.a.createElement("h4",{className:"Info"},c),n.a.createElement("h4",{className:"Info"},s),n.a.createElement("h4",{className:"Info"},l)))))}}]),t}(o.Component)),D=(t(30),o.Component,t(31),function(a){Object(i.a)(t,a);var e=Object(m.a)(t);function t(a){var o;return Object(l.a)(this,t),(o=e.call(this,a)).curretnSet=function(a){var e;switch(a.sets_j1+a.sets_j2){case 0:e=1;break;case 1:e=2;break;case 2:e=3;break;case 3:e=4;break;case 4:e=5}return e},o.state={id:"",Partidos:[]},o}return Object(r.a)(t,[{key:"render",value:function(){var a=this.props.Partidos;console.log(a);var e=a.resultado,t=a.hora_prevista,c=a.ronda,s=a.estado,l=a.pista,r=e.puntos_j1,i=(e.juegos_j1,e.set1_j1),m=e.set2_j1,d=e.set3_j1,v=e.saque_actual,E=e.sets_j1,g=e.ganador,_=e.puntos_j2,N=(e.juegos_j2,e.set1_j2),j=e.set2_j2,h=e.set3_j2,Y=e.sets_j2,H=e.hora_inicio,b=this.curretnSet(e);console.log(b);var D=a.jugadores[0].nombre,M=a.jugadores[1].nombre,S=(u()(),"Vivo"),P="iconoSaque",k="iconoSaque";1===v?k="iconoSaque_hidden":P="iconoSaque_hidden",c||(c="Cuartos de final"),t=u.a.utc(t).local().format("HH:mm");u.a.utc().local().format("HH"),u()().format("mm"),u.a.utc(H).format("HH"),u.a.utc(H).format("HH"),u.a.utc(H).local().format("mm");console.log(H);var O=u.a.utc(H).format("YYYY/MM/DD HH:mm"),C=u.a.utc(H).local();console.log("inicio"+O);var y=u.a.utc(O).format("YYYY/MM/DD HH:mm");console.log("iniciow"+y);var x=u.a.utc().local();console.log("ahora"+C.diff(x,"minutes"));var q=u.a.duration().subtract(C);console.log("diferencia"+u.a.utc(q).format("HH:mm"));var w=u.a.utc().local().format("YYYYMMDD HH:mm"),I=u.a.utc(H).format("YYYYMMDD HH:mm");console.log("ahora "+w+"; inicio: "+I);var T=u()(w,"YYYYMMDD HH:mm");console.log(T.format("YYYYMMDD HH:mm"));var L=u()(I,"YYYYMMDD HH:mm"),F=u()(I,"YYYYMMDD HH:mm");F=u()(I,"YYYYMMDD HH:mm:ss");console.log("horas_"+L.format("HH")+"minutos_"+F.format("mm"));T.diff(L,"hours"),T.diff(F,"minutes");var W=T.diff(F,"seconds"),A=Math.floor(W/60),J=Math.floor(A/60);if(A-=60*J,console.log(W+" s "+A+" m "+J+"h"),console.log(T.diff(F,"minutes")+"m"),H){var V=u.a.utc().local().format("HH"),U=u()().format("mm"),z=u.a.utc(H).format("HH"),G=u.a.utc(H).local().format("mm");console.log(V),console.log(U),console.log(V-z),console.log(U-G),S="Vivo"}A<10&&(A="0".concat(A)),J<10&&(J="0".concat(J));var B="",R="",$="";2==s&&($="opacidad",1===g?B="gana":R="gana");var K=f(i,N,m,j,d,h,E,Y,r,_)[0],Q=K.cs1j1,X=K.cs2j1,Z=K.cs3j1,aa=(K.cs4j1,K.cs1j2),ea=K.cs2j2,ta=K.cs3j2,oa=(K.cs4j2,K.cp1j1),na=K.cp2j2;return n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"Partido",onClick:this.props.Mostrar},n.a.createElement("div",{className:"informacion ".concat($)},n.a.createElement("div",{className:"info"},1==s&&n.a.createElement("div",{className:"info_"},n.a.createElement("div",{className:S},n.a.createElement("i",{class:"fas fa-circle"}),"".concat(J,":").concat(A)),n.a.createElement("div",null,"".concat(c)),n.a.createElement("div",null,"pista ".concat(l))),2==s&&n.a.createElement("div",{className:"info_"},n.a.createElement("div",{className:S,class:"hora_prevista"},"Finalizado"),n.a.createElement("div",null,"".concat(c)),n.a.createElement("div",null,"pista ".concat(l))),0==s&&n.a.createElement("div",{className:"info_"},n.a.createElement("div",{className:S,class:"hora_prevista"},n.a.createElement("i",{className:"far fa-clock icono"}),"".concat(t)),n.a.createElement("div",null,"".concat(c)),n.a.createElement("div",null,"pista ".concat(l)))),n.a.createElement("div",{className:"Jugador"},n.a.createElement("div",{class:"info1"},n.a.createElement("div",{className:"nombre ".concat(B)},D),1==s&&n.a.createElement("div",{className:"flex flex2"},n.a.createElement("div",null,n.a.createElement("img",{className:P,src:p.a,alt:""})),n.a.createElement("div",{className:"puntos_p ".concat(oa)},r))),n.a.createElement("div",{className:"info2"},n.a.createElement("div",{className:"sets ".concat(Q)},i),2==b&&n.a.createElement("div",{className:"sets ".concat(X)},m),b>2&&n.a.createElement("div",{className:"auxiliar_flex"},n.a.createElement("div",{className:"sets ".concat(X)},m),n.a.createElement("div",{className:"sets ".concat(Z)},d)))),n.a.createElement("div",{className:"Jugador"},n.a.createElement("div",{className:"info1"},n.a.createElement("div",{className:"nombre ".concat(R)},M),1==s&&n.a.createElement("div",{className:"flex flex2"},n.a.createElement("div",null,n.a.createElement("img",{className:k,src:p.a,alt:""})),n.a.createElement("div",{className:"puntos_p ".concat(na)},_))),n.a.createElement("div",{className:"info2"},n.a.createElement("div",{className:"sets ".concat(aa)},N),2==b&&n.a.createElement("div",{className:"sets ".concat(ea)},j),b>2&&n.a.createElement("div",{className:"auxiliar_flex"},n.a.createElement("div",{className:"sets ".concat(ea)},j),n.a.createElement("div",{className:"sets ".concat(ta)},h)))))))}}]),t}(o.Component)),M=(t(32),o.Component,t(33),o.Component,t(10)),S=t.n(M),P=t(11),k=t.n(P),O=(t(34),function(a){Object(i.a)(t,a);var e=Object(m.a)(t);function t(a){var o;return Object(l.a)(this,t),(o=e.call(this,a)).state={id:"",Partido:[]},o}return Object(r.a)(t,[{key:"render",value:function(){console.log("partido_tv");var a,e=this.props.partido,t=e.resultado,c=e.arbitro,s=e.torneo;a=s?s.nombre:"Campeonato de Espa\xf1a";var l,r,i,m,d,v,f,E,g,_,j,Y,b,D,M,P,O,C,y=0;c&&(y=1==c.auto_arbitraje?1:0),t&&(console.log(t),g=e.jugadores[0].nombre,_=e.jugadores[1].nombre,j=e.pista,Y=e.ronda,t.hora_prevista,C=t.hora_inicio,i=t.puntos_j1,t.juegos_j1,m=t.set1_j1,d=t.set2_j1,v=t.set3_j1,f=t.saque_actual,E=t.sets_j1,t.ganador,b=t.puntos_j2,t.juegos_j2,D=t.set1_j2,M=t.set2_j2,P=t.set3_j2,O=t.sets_j2);u.a.utc().local().format("HH"),u()().format("mm"),u.a.utc(C).format("HH"),u.a.utc(C).format("HH"),u.a.utc(C).local().format("mm");console.log(C);var x=u.a.utc(C).format("YYYY/MM/DD HH:mm"),q=u.a.utc(C).local();console.log("inicio"+x);var w=u.a.utc(x).format("YYYY/MM/DD HH:mm");console.log("iniciow"+w);var I=u.a.utc().local();console.log("ahora"+q.diff(I,"minutes"));var T=u.a.duration().subtract(q);console.log("diferencia"+u.a.utc(T).format("HH:mm"));var L=u.a.utc().local().format("YYYYMMDD HH:mm"),F=u.a.utc(C).format("YYYYMMDD HH:mm");console.log("ahora "+L+"; inicio: "+F);var W=u()(L,"YYYYMMDD HH:mm");console.log(W.format("YYYYMMDD HH:mm"));var A=u()(F,"YYYYMMDD HH:mm"),J=u()(F,"YYYYMMDD HH:mm");J=u()(F,"YYYYMMDD HH:mm:ss");console.log("horas_"+A.format("HH")+"minutos_"+J.format("mm"));W.diff(A,"hours"),W.diff(J,"minutes");var V=W.diff(J,"seconds"),U=Math.floor(V/60),z=Math.floor(U/60);U-=60*z,console.log(V+" s "+U+" m "+z+"h"),console.log(W.diff(J,"minutes")+"m");var G,B,R=!1;if(C){var $=u.a.utc().local().format("HH"),K=u()().format("mm"),Q=u.a.utc(C).format("HH"),X=u.a.utc(C).local().format("mm");console.log($),console.log(K),console.log($-Q),console.log(K-X),R=!0}return U<10&&(U="0".concat(U)),z<10&&(z="0".concat(z)),1===f?l="iconoSaque_hidden":r="iconoSaque_hidden",E+O>=3&&(l="iconoSaque_hidden",r="iconoSaque_hidden"),console.log(void 0),1==y?(G=E,B=O):(G=i,B=b),n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"pista"},n.a.createElement("div",{className:"pista2"},"Pista ".concat(j)),n.a.createElement("div",{className:"pista2"},"".concat(a)),n.a.createElement("div",{className:"pista2"},"".concat(Y))),n.a.createElement("div",{className:"contenedor"},n.a.createElement("div",{className:"jugador"},n.a.createElement("div",{className:"nombre"},n.a.createElement("span",{className:"nombre_jugador"},g),n.a.createElement("div",{className:"saque tama\xf1o_puntos"},n.a.createElement("img",{className:"pelota ".concat(r),src:p.a,alt:""})),n.a.createElement("div",{className:"puntos tama\xf1o_puntos"},G)),n.a.createElement("div",{className:"set tama\xf1o_puntos"},m," ",n.a.createElement("span",{className:"set2"},"Set 1")),n.a.createElement("div",{className:"set tama\xf1o_puntos"},d," ",n.a.createElement("span",{className:"set2"},"Set 2")),n.a.createElement("div",{className:"set tama\xf1o_puntos"},v," ",n.a.createElement("span",{className:"set2"},"Set 3"))),n.a.createElement("div",{className:"jugador paddingFix"},n.a.createElement("div",{className:"nombre"},n.a.createElement("span",{className:"nombre_jugador"},_),n.a.createElement("div",{className:"saque tama\xf1o_puntos"},n.a.createElement("img",{className:"pelota ".concat(l),src:p.a,alt:""})),n.a.createElement("div",{className:"puntos tama\xf1o_puntos"},B)),n.a.createElement("div",{className:"set tama\xf1o_puntos"},D),n.a.createElement("div",{className:"set tama\xf1o_puntos"},M),n.a.createElement("div",{className:"set tama\xf1o_puntos"},P))),n.a.createElement("div",{className:"logo-partido"},n.a.createElement("div",{className:"logos"},n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel",src:N.a})),n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel",src:S.a})),n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel3",src:h.a})),n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel",src:k.a})),n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel2",src:H.a})),R&&n.a.createElement("div",{className:"tiempo"},n.a.createElement("i",{className:"far fa-clock"})," ".concat(z," : ").concat(U)))))}}]),t}(o.Component)),C=(t(14),t(35),function(a){Object(i.a)(t,a);var e=Object(m.a)(t);function t(a){var o;return Object(l.a)(this,t),(o=e.call(this,a)).state={id:"",Partido:[]},o}return Object(r.a)(t,[{key:"render",value:function(){console.log("partido_obs");var a,e=this.props,t=e.partido,c=e.obs,s=t,l=s.resultado,r=s.arbitro,i=s.torneo;a=i?i.nombre:"Campeonato de Espa\xf1a";var m,d,v,f,E,g,_,N,j,h,Y,H,b,D,M,S,P=0;r&&(P=1==r.auto_arbitraje?1:0),l&&(console.log(l),j=s.jugadores[0].nombre,h=s.jugadores[1].nombre,s.pista,l.hora_prevista,S=l.hora_inicio,v=l.puntos_j1,l.juegos_j1,f=l.set1_j1,E=l.set2_j1,g=l.set3_j1,_=l.saque_actual,N=l.sets_j1,l.ganador,Y=l.puntos_j2,l.juegos_j2,H=l.set1_j2,b=l.set2_j2,D=l.set3_j2,M=l.sets_j2),c&&document.body.setAttribute("class","obs_body");u.a.utc().local().format("HH"),u()().format("mm"),u.a.utc(S).format("HH"),u.a.utc(S).format("HH"),u.a.utc(S).local().format("mm");console.log(S);var k=u.a.utc(S).format("YYYY/MM/DD HH:mm"),O=u.a.utc(S).local();console.log("inicio"+k);var C=u.a.utc(k).format("YYYY/MM/DD HH:mm");console.log("iniciow"+C);var y=u.a.utc().local();console.log("ahora"+O.diff(y,"minutes"));var x=u.a.duration().subtract(O);console.log("diferencia"+u.a.utc(x).format("HH:mm"));var q=u.a.utc().local().format("YYYYMMDD HH:mm"),w=u.a.utc(S).format("YYYYMMDD HH:mm");console.log("ahora "+q+"; inicio: "+w);var I=u()(q,"YYYYMMDD HH:mm");console.log(I.format("YYYYMMDD HH:mm"));var T=u()(w,"YYYYMMDD HH:mm"),L=u()(w,"YYYYMMDD HH:mm");L=u()(w,"YYYYMMDD HH:mm:ss");console.log("horas_"+T.format("HH")+"minutos_"+L.format("mm"));I.diff(T,"hours"),I.diff(L,"minutes");var F=I.diff(L,"seconds"),W=Math.floor(F/60),A=Math.floor(W/60);W-=60*A,console.log(F+" s "+W+" m "+A+"h"),console.log(I.diff(L,"minutes")+"m");var J,V;if(S){var U=u.a.utc().local().format("HH"),z=u()().format("mm"),G=u.a.utc(S).format("HH"),B=u.a.utc(S).local().format("mm");console.log(U),console.log(z),console.log(U-G),console.log(z-B),!0}return W<10&&(W="0".concat(W)),A<10&&(A="0".concat(A)),1===_?m="iconoSaque_hidden":d="iconoSaque_hidden",N+M>=3&&(m="iconoSaque_hidden",d="iconoSaque_hidden"),console.log(void 0),1==P?(J=N,V=M):(J=v,V=Y),n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"contenedor"},n.a.createElement("div",{className:"obs_jugador obs_borde1"},n.a.createElement("div",{className:"obs_nombre"},n.a.createElement("span",{className:"obs_nombre_jugador"},j),n.a.createElement("div",{className:"obs_saque"},n.a.createElement("img",{className:"obs_pelota ".concat(d),src:p.a,alt:""})),n.a.createElement("div",{className:"obs_puntos"},J)),n.a.createElement("div",{className:"obs_set"},f," "),N+M>0&&n.a.createElement("div",{className:"obs_set"},E," "),N+M>1&&n.a.createElement("div",{className:"obs_set"},g," ")),n.a.createElement("div",{className:"obs_jugador  obs_borde2"},n.a.createElement("div",{className:"obs_nombre"},n.a.createElement("span",{className:"obs_nombre_jugador"},h),n.a.createElement("div",{className:"obs_saque"},n.a.createElement("img",{className:"obs_pelota ".concat(m),src:p.a,alt:""})),n.a.createElement("div",{className:"obs_puntos"},V)),n.a.createElement("div",{className:"obs_set"},H),N+M>0&&n.a.createElement("div",{className:"obs_set"},b," "),N+M>1&&n.a.createElement("div",{className:"obs_set"},D," ")),n.a.createElement("div",{className:"obs_pista"},n.a.createElement("span",{className:"obs_pista2"},"".concat(a)),n.a.createElement("span",{className:"obs_triangulo"},"\xa0"))))}}]),t}(o.Component)),y=(t(36),function(a){Object(i.a)(t,a);var e=Object(m.a)(t);function t(a){var o;return Object(l.a)(this,t),(o=e.call(this,a)).state={id:"",Partido:[]},o}return Object(r.a)(t,[{key:"render",value:function(){console.log("stats_tv");var a,e,t,c,s,l,r,i,m,d,u,v,p,f=this.props.partido,E=f.resultado,g=(f.arbitro,f.torneo);return c=g?g.nombre:"Campeonato de Espa\xf1a",E&&(console.log(E),e=f.jugadores[0].nombre,t=f.jugadores[1].nombre,a=f.pista,s=f.ronda,v=E.stats_puntos_j1,p=E.stats_puntos_j2,i=E.stats_aces_j1,m=E.stats_aces_j2,d=E.stats_doble_faltas_j1,u=E.stats_doble_faltas_j2,l=E.juegos_j1,r=E.juegos_j2),n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"pista"},n.a.createElement("div",{className:"pista2"},"Pista ".concat(a)),n.a.createElement("div",{className:"pista2"},"".concat(c)),n.a.createElement("div",{className:"pista2"},"".concat(s))),n.a.createElement("div",{className:"set_actual"}," 1\xba SET "),n.a.createElement("div",{className:"stats"},n.a.createElement("div",{className:"nombres"},n.a.createElement("span",{className:"nombre_jugador"},"".concat(e)),n.a.createElement("span",{className:"c_central"}," ".concat(l," - ").concat(r),"   "),n.a.createElement("span",{className:"nombre_jugador"},"".concat(t))),n.a.createElement("div",{className:"estaditicas"},n.a.createElement("span",{className:"stats_jugador"},"".concat(i)),n.a.createElement("span",{className:"c_central"}," ACES "),n.a.createElement("span",{className:"stats_jugador"},"".concat(m))),n.a.createElement("div",{className:"estaditicas"},n.a.createElement("span",{className:"stats_jugador"},"".concat(d)),n.a.createElement("span",{className:"c_central"}," D. FALTAS"),n.a.createElement("span",{className:"stats_jugador"},"".concat(u))),n.a.createElement("div",{className:"estaditicas"},n.a.createElement("span",{className:"stats_jugador"},"".concat(v)),n.a.createElement("span",{className:"c_central"}," P.GANADOS "),n.a.createElement("span",{className:"stats_jugador"},"".concat(p)))))}}]),t}(o.Component)),x=function(a){Object(i.a)(t,a);var e=Object(m.a)(t);function t(a){var o;return Object(l.a)(this,t),(o=e.call(this,a)).updateTime=function(){var a=o.state.timeLineTop;o.setState({timeLineTop:a+1}),console.log(a)},o.updateData=function(){fetch("https://gmatchapp.com/api/v1/partidos",{}).then((function(a){return console.log(a),a.json()})).then((function(a){o.setState({partidos:a})})).catch((function(a){return console.log("error",a)}))},o.state={mostrar:"true"},o}return Object(r.a)(t,[{key:"componentWillMount",value:function(){this.updateData()}},{key:"componentDidMount",value:function(){var a=this;this.timerID=setInterval((function(){return a.updateData()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){function a(a){for(var e=window.location.search.substring(1).split("&"),t=0;t<e.length;t++){var o=e[t].split("=");if(o[0]==a)return o[1]}return null}var e=a("id_partido"),t=a("obs"),o=a("stats");e?console.log("obs"+t):console.log("no id");var c=[];console.log(this.state);var s=this.state.partidos;return s&&s.forEach((function(a){e==a.id&&(c=a)})),console.log(c),n.a.createElement("div",{className:"mainContainer"},e&&null==t&&o&&n.a.createElement(y,{partido:c}),e&&null==t&&null==o&&n.a.createElement(O,{partido:c}),e&&t&&null==o&&n.a.createElement(C,{partido:c,obs:!0}))}}]),t}(o.Component),q=(t(37),t(38),function(a){Object(i.a)(t,a);var e=Object(m.a)(t);function t(a){var o;return Object(l.a)(this,t),(o=e.call(this,a)).curretnSet=function(a){var e;switch(a.sets_j1+a.sets_j2){case 0:e=1;break;case 1:e=2;break;case 2:e=3;break;case 3:e=4;break;case 4:e=5}return e},o.state={id:"",Partidos:[]},o}return Object(r.a)(t,[{key:"render",value:function(){var a=this.props.Partidos,e=a.resultado,t=a.hora_prevista,c=a.ronda,s=a.estado,l=a.pista,r=e.puntos_j1,i=(e.juegos_j1,e.set1_j1),m=e.set2_j1,d=e.set3_j1,v=e.saque_actual,E=e.sets_j1,g=e.ganador,_=e.puntos_j2,N=(e.juegos_j2,e.set1_j2),j=e.set2_j2,h=e.set3_j2,Y=e.sets_j2,H=e.hora_inicio,b=this.curretnSet(e);console.log(b);var D=a.jugadores[0].nombre,M=a.jugadores[1].nombre,S=(u()(),"VivoPadel"),P="iconoSaquePadel",k="iconoSaquePadel";1===v?k="iconoSaque_hiddenPadel":P="iconoSaque_hiddenPadel",c||(c="Cuartos de finalPadel"),t=u.a.utc(t).local().format("HH:mm");u.a.utc().local().format("HH"),u()().format("mm"),u.a.utc(H).format("HH"),u.a.utc(H).format("HH"),u.a.utc(H).local().format("mm");console.log(H);var O=u.a.utc(H).format("YYYY/MM/DD HH:mm"),C=u.a.utc(H).local();console.log("inicio"+O);var y=u.a.utc(O).format("YYYY/MM/DD HH:mm");console.log("iniciow"+y);var x=u.a.utc().local();console.log("ahora"+C.diff(x,"minutes"));var q=u.a.duration().subtract(C);console.log("diferencia"+u.a.utc(q).format("HH:mm"));var w=u.a.utc().local().format("YYYYMMDD HH:mm"),I=u.a.utc(H).format("YYYYMMDD HH:mm");console.log("ahora "+w+"; inicio: "+I);var T=u()(w,"YYYYMMDD HH:mm");console.log(T.format("YYYYMMDD HH:mm"));var L=u()(I,"YYYYMMDD HH:mm"),F=u()(I,"YYYYMMDD HH:mm");F=u()(I,"YYYYMMDD HH:mm:ss");console.log("horas_"+L.format("HH")+"minutos_"+F.format("mm"));T.diff(L,"hours"),T.diff(F,"minutes");var W=T.diff(F,"seconds"),A=Math.floor(W/60),J=Math.floor(A/60);if(A-=60*J,console.log(W+" s "+A+" m "+J+"h"),console.log(T.diff(F,"minutes")+"m"),H){var V=u.a.utc().local().format("HH"),U=u()().format("mm"),z=u.a.utc(H).format("HH"),G=u.a.utc(H).local().format("mm");console.log(V),console.log(U),console.log(V-z),console.log(U-G),S="VivoPadel"}A<10&&(A="0".concat(A)),J<10&&(J="0".concat(J));var B="",R="",$="";2==s&&($="opacidadPadel",1===g?B="ganaPadel":R="ganaPadel");var K=f(i,N,m,j,d,h,E,Y,r,_)[0],Q=K.cs1j1,X=K.cs2j1,Z=K.cs3j1,aa=(K.cs4j1,K.cs1j2),ea=K.cs2j2,ta=K.cs3j2,oa=(K.cs4j2,K.cp1j1),na=K.cp2j2;return n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"PartidoPadel",onClick:this.props.Mostrar},n.a.createElement("div",{className:"informacionPadel ".concat($)},n.a.createElement("div",{className:"infoPadel"},1==s&&n.a.createElement("div",{className:"info_Padel"},n.a.createElement("div",{className:"pistaPadel"},"Pista ".concat(l)),n.a.createElement("div",{className:"rondaPadel"},"".concat(c)),n.a.createElement("div",{className:S},n.a.createElement("i",{class:"fas fa-circle"}),"".concat(J,":").concat(A))),2==s&&n.a.createElement("div",{className:"info_Padel"},n.a.createElement("div",{className:S,class:"hora_previstaPadel"},"Finalizado"),n.a.createElement("div",{className:"pistaPadel"},"Pista ".concat(l))),0==s&&n.a.createElement("div",{className:"info_Padel"},n.a.createElement("div",{className:S,class:"hora_previstaPadel"},n.a.createElement("i",{className:"far fa-clock icono"}),"".concat(t)),n.a.createElement("div",{className:"pistaPadel"},"Pista ".concat(l)))),n.a.createElement("div",{className:"JugadorPadel"},n.a.createElement("div",{class:"info1Padel"},n.a.createElement("div",{className:"nombrePadel ".concat(B)},D),1==s&&n.a.createElement("div",{className:"flexPadel flex2Padel"},n.a.createElement("div",{className:"pelotaPadel"},n.a.createElement("img",{className:P,src:p.a,alt:""})),n.a.createElement("div",{className:"puntos_pPadel  ".concat(oa)},r))),n.a.createElement("div",{className:"info2Padel"},n.a.createElement("div",{className:"setsPadel  ".concat(Q)},i),n.a.createElement("div",{className:"setsPadel  ".concat(X)},m),n.a.createElement("div",{className:"setsPadel  ".concat(Z)},d))),n.a.createElement("div",{className:"JugadorPadel"},n.a.createElement("div",{className:"info1Padel"},n.a.createElement("div",{className:"nombrePadel ".concat(R)},M),1==s&&n.a.createElement("div",{className:"flexPadel flex2Padel"},n.a.createElement("div",{className:"pelotaPadel"},n.a.createElement("img",{className:k,src:p.a,alt:""})),n.a.createElement("div",{className:"puntos_pPadel  ".concat(na)},_))),n.a.createElement("div",{className:"info2Padel"},n.a.createElement("div",{className:"setsPadel  ".concat(aa)},N),n.a.createElement("div",{className:"setsPadel  ".concat(ea)},j),n.a.createElement("div",{className:"setsPadel  ".concat(ta)},h))))))}}]),t}(o.Component)),w=(t(39),function(a){Object(i.a)(t,a);var e=Object(m.a)(t);function t(a){var o;return Object(l.a)(this,t),(o=e.call(this,a)).updateData=function(){fetch("https://gmatchapp.com/api/v1/partidos",{}).then((function(a){return console.log(a),a.json()})).then((function(a){o.setState({info_partidos:a})})).catch((function(a){return console.log("error",a)}))},o.state={mostrar:"true"},o}return Object(r.a)(t,[{key:"componentWillMount",value:function(){this.updateData()}},{key:"componentDidMount",value:function(){var a=this;this.timerID=setInterval((function(){return a.updateData()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var a,e,t=this,c=(this.state.mostrar,this.props.Torneo);e=c;var s=this.state.info_partidos,l=[];return s&&e&&(l=(a=(a=function(a,e){var t,o=[],n=[];u.a.utc().local().format("ss");return console.log(e),n=[],a.map((function(a){console.log(a.torneo.id),a.torneo.id==e&&n.push(a)})),t={torneo:e,nombre:"partido.torneo.nombre",genero:"partido.torneo.genero",partidos:n},console.log(t),o.push(t),o}(s,c))[0]).partidos),n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"PartidosPadelContainer"},a&&n.a.createElement("div",{className:"torneo_grande"},n.a.createElement("div",{className:"infoTorneoPadel"},l&&l.map((function(a,e){return n.a.createElement(q,{Partidos:a,key:e.toString(),onClick:t.props.onClick})})))),n.a.createElement("div",{className:"logos_padel"},n.a.createElement("div",{className:"logos"},n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel",src:N.a})),n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel",src:S.a})),n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel3",src:h.a})),n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel3",src:k.a})),n.a.createElement("div",{className:"divLogo"},n.a.createElement("img",{className:"logo_padel2",src:H.a}))))))}}]),t}(o.Component)),I=function(a){Object(i.a)(t,a);var e=Object(m.a)(t);function t(a){var o;return Object(l.a)(this,t),(o=e.call(this,a)).updateTime=function(){var a=o.state.timeLineTop;o.setState({timeLineTop:a+1}),console.log(a)},o.updateData=function(){fetch("https://gmatchapp.com/api/v1/torneos",{}).then((function(a){return console.log(a),a.json()})).then((function(a){o.setState({Torneos:a})})).catch((function(a){return console.log("error",a)}))},o.state={torneos:""},o}return Object(r.a)(t,[{key:"componentWillMount",value:function(){this.updateData()}},{key:"componentDidMount",value:function(){var a=this;this.timerID=setInterval((function(){return a.updateData()}),1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var a=this.state.Torneos,e=this.props.id_torneo,t=[],o="";return a&&(t=function(a,e){var t=[];return a.map((function(a){a.id==e&&t.push(a)})),t}(a,e)),1==t.length&&(o=t[0].nombre),n.a.createElement("div",{className:" MainContainer_Padel"},n.a.createElement("div",{className:"tituloPadel"},"".concat(o)),n.a.createElement("div",{className:" maincontainer2 padding0 "},n.a.createElement(w,{Torneo:e,Torneo_id:e})))}}]),t}(o.Component),T=function(a){Object(i.a)(t,a);var e=Object(m.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var a=function(a){for(var e=window.location.search.substring(1).split("&"),t=0;t<e.length;t++){var o=e[t].split("=");if(o[0]==a)return o[1]}return null}("torneo");return n.a.createElement(o.Fragment,null,a&&n.a.createElement(I,{id_torneo:a}),"undefined"==a||null==a&&n.a.createElement(x,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(40),t(15),t(41);s.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.8ca0cd40.chunk.js.map
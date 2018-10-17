(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,r){e.exports=r(246)},131:function(e,t,r){},246:function(e,t,r){"use strict";r.r(t);var a=r(1),i=r.n(a),o=r(9),l=r.n(o),n=(r(131),r(48)),s=r(254),c=r(45),p=r(117),u=r(37),g=r(46),m="ALL",d=Object(u.c)(g.map(function(e){return e.type}));d.push(m);var h={ALL:"Tous",ARTICLE:"Article",ASSOCIATION:"Association",BOOK:"Livre",CHANNEL:"Cha\xeene",PICTURE:"Image",PODCAST:"Podcast",MOVIE:"Film",MUSIC:"Musique",SERIES:"S\xe9rie",VIDEO:"Vid\xe9o",WEBSITE:"Site Web"},f=Object(u.b)(function(e){return e.label},d.map(function(e){return{value:e,label:h[e]||e}}));var _,y=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:f},w=r(69),v=r(124),b="\xf8",E=Object(u.c)((_=[]).concat.apply(_,Object(v.a)(g.map(function(e){return e.tags||[b]})))).sort();var I=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:E};var C=g.map(function(e,t){return Object(w.a)({id:t},e,{tags:(r=e.tags,!r||r.length<1?[b]:r)});var r}).reverse();var O=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:C},U=Object(c.combineReducers)({types:y,references:O,tags:I}),j=Object(p.composeWithDevTools)({}).apply(void 0,[]),A=Object(c.createStore)(U,j),T=(r(136),r(70)),S=(r(92),r(25)),k=(r(146),r(49)),x=r(251),L=r(255),P=r(252),D=r(253),M=r(256),R=r(39),V=r.n(R),B=(r(94),r(66)),q=(r(247),r(90)),N=(r(248),r(89)),H=(r(93),r(67)),z=(r(95),r(10)),G=20;var F=function(e,t){var r=e.page,a=e.type,i=e.tags,o=function(e){return e.references}(t),l=(r-1)*G,n="ALL"===a?o:o.filter(function(e){return e.type===a}),s=i.length>0?n.filter(function(e){var t=e.tags,r=void 0===t?[]:t;return 0===Object(u.a)(i,r).length}):n;return{total:s.length,references:s.slice(l,l+G),pageSize:G}};function W(e){switch(e.type){case"VIDEO":case"CHANNEL":return i.a.createElement(z.a,{type:"youtube",theme:"outlined"});case"MUSIC":case"PODCAST":return i.a.createElement(z.a,{type:"customer-service",theme:"outlined"});case"BOOK":return i.a.createElement(z.a,{type:"book",theme:"outlined"});case"MOVIE":case"SERIES":return i.a.createElement(z.a,{type:"video-camera",theme:"outlined"});case"WEBSITE":return i.a.createElement(z.a,{type:"global",theme:"outlined"});case"PICTURE":return i.a.createElement(z.a,{type:"picture",theme:"outlined"});case"ASSOCIATION":return i.a.createElement(z.a,{type:"team",theme:"outlined"});case"ARTICLE":return i.a.createElement(z.a,{type:"file-text",theme:"outlined"});default:return null}}function J(e){var t=e.reference;if(t.coverUrl)return i.a.createElement("img",{className:"Cover",src:t.coverUrl,alt:"logo of ".concat(t.title)});if(t.url&&t.url.startsWith("https://youtu.be/")){var r=t.url.split("/")[3];return i.a.createElement("iframe",{className:"Cover",title:"youtube-".concat(r),src:"https://www.youtube.com/embed/".concat(r),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0})}return t.url&&t.url.endsWith(".pdf")?i.a.createElement("object",{className:"Cover",data:t.url,type:"application/pdf"},i.a.createElement("p",null,"Viewer de pdf - Cliquez pour t\xe9l\xe9charger")):i.a.createElement("div",{className:"Cover"})}function K(e){var t=e.reference;return i.a.createElement("div",{className:"ReferenceCard"},i.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(N.a,{hoverable:!0,cover:i.a.createElement(J,{reference:t})},i.a.createElement(N.a.Meta,{avatar:i.a.createElement(W,{type:t.type}),title:i.a.createElement(H.a,{title:t.title},t.title)}))))}var Y=Object(n.b)(function(e,t){var r=V.a.parse(t.location.search),a=r.page?Number(r.page):1,i=r.type||m,o=r.tags?[].concat(r.tags):[],l=F({type:i,tags:o,page:a},e);return{currentPage:a,total:l.total,references:l.references,pageSize:l.pageSize,goToPage:function(e){window.scroll(0,0),t.history.push("/references?".concat(V.a.stringify(Object(w.a)({},r,{page:e}))))}}})(function(e){var t=e.references,r=e.total,a=e.currentPage,o=e.pageSize,l=e.goToPage;return i.a.createElement("div",{className:"ReferenceView"},i.a.createElement(q.a,{header:i.a.createElement("div",null,"Nombre de r\xe9f\xe9rences: ".concat(r)),grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:4,xxl:3},dataSource:t,locale:{emptyText:"Aucune r\xe9f\xe9rence"},renderItem:function(e){return i.a.createElement(q.a.Item,{key:e.title},i.a.createElement(K,{reference:e}))},footer:i.a.createElement(B.a,{current:a,pageSize:o,total:r,hideOnSinglePage:!0,onChange:l})}))});var Q=function(){return i.a.createElement("a",{href:"https://github.com/ewoken/anthropocene-references",target:"_blank",rel:"noopener noreferrer"},"GitHub ",i.a.createElement(z.a,{type:"github",theme:"outlined"}))};var X=function(){return i.a.createElement("div",{className:"HomeView"},i.a.createElement("h2",null,"Comprendre la civilisation thermo-industrielle"),i.a.createElement("p",null,"Le but de ce site est d\u2019illustrer et proposer des cl\xe9s de compr\xe9hension de la civilisation thermo-industrielle dans laquelle nous vivons."),i.a.createElement("p",null,"A l\u2019aide de la barre de recherche, vous pourrez naviguer dans l\u2019ensemble des r\xe9f\xe9rences class\xe9es en diff\xe9rents th\xe8mes et types de contenu."),i.a.createElement("p",null,"Ces ",i.a.createElement(x.a,{to:"/references?type=PICTURE"},"images"),", ",i.a.createElement(x.a,{to:"/references?type=VIDEO"},"vid\xe9os"),", ",i.a.createElement(x.a,{to:"/references?type=BOOK"},"livres")," mais aussi ",i.a.createElement(x.a,{to:"/references?tags=art"},"cr\xe9ations artistiques"),", ","ont pour objectif de faire r\xe9fl\xe9chir sur la complexit\xe9 de notre syst\xe8me de production et de notre mode de vie. Ils nous interrogent sur l\u2019empreinte gigantesque que nous avons sur le syst\xe8me Terre."),i.a.createElement("p",null,"Cet impact d\u2019origine humaine est in\xe9dit dans l\u2019histoire de la plan\xe8te et\n        a \xe9t\xe9 rendu possible par le d\xe9veloppement de nouvelles sources ",i.a.createElement(x.a,{to:"/references?tags=\xe9nergie"},"d'\xe9nergie")," (",i.a.createElement(x.a,{to:"/references?tags=charbon"},"charbon"),", ",i.a.createElement(x.a,{to:"/references?tags=p\xe9trole"},"p\xe9trole"),", ",i.a.createElement(x.a,{to:"/references?tags=gaz"},"gaz"),", ",i.a.createElement(x.a,{to:"/references?tags=nucl\xe9aire"},"nucl\xe9aire"),", ",i.a.createElement(x.a,{to:"/references?tags=hydro\xe9lectricit\xe9"},"hydro\xe9lectricit\xe9"),", ","\xe9olien et solaire) qui ont permis aux\n        petits primates que nous sommes de d\xe9passer la puissance de notre modeste\n        organisme. C\u2019est la raison pour laquelle, ce site explore les\n        diff\xe9rentes techniques d\u2019extraction et de transformation (ex: ",i.a.createElement(x.a,{to:"/references?tags=\xe9lectricit\xe9"},"l'\xe9lectricit\xe9"),") de ces\n        diff\xe9rentes sources d\u2019\xe9nergie et leurs utilisations."),i.a.createElement("h2",null,"Proposer des r\xe9f\xe9rences"),i.a.createElement("p",null,"Ce site est actuellement en",i.a.createElement("strong",null," construction")," , n\u2019h\xe9sitez pas \xe0 proposer d\u2019autres ressources / id\xe9es :",i.a.createElement("ul",null,i.a.createElement("li",null," en envoyant un mail \xe0 : ",i.a.createElement("img",{src:"./myemail.png",alt:"email",style:{height:"30px"}})),i.a.createElement("li",null,"OU en proposant une PR sur ",i.a.createElement(Q,null)))))};var Z=Object(M.a)(Object(n.b)(function(e){return{types:function(e){return e.types}(e),tags:function(e){return e.tags}(e)}})(function(e){var t=e.location,r=e.types,a=e.tags,o=V.a.parse(t.search),l=o.tags?[].concat(o.tags):[];return i.a.createElement("div",{className:"AppLayout"},i.a.createElement(T.a,null,i.a.createElement(T.a.Header,{style:{position:"fixed",zIndex:1,width:"100%"}},i.a.createElement(k.a,{mode:"horizontal",theme:"dark",selectable:!1,style:{lineHeight:"64px"}},i.a.createElement(k.a.Item,{key:"home"},i.a.createElement(x.a,{to:"/"},i.a.createElement("strong",null,"Accueil"))),i.a.createElement(k.a.Item,null,i.a.createElement(S.a,{className:"AppLayout__tagSelect",mode:"multiple",placeholder:"Filtrer",notFoundContent:"Aucun tag",maxTagCount:2,value:l,onChange:function(t){e.history.push("/references?".concat(V.a.stringify({tags:t,type:o.type})))},allowClear:!0},a.map(function(e){return i.a.createElement(S.a.Option,{key:e},e)}))),i.a.createElement(k.a.Item,{key:"type"},i.a.createElement(S.a,{style:{width:"100px"},value:o.type||m,onChange:function(t){return e.history.push("/references?".concat(V.a.stringify({tags:l,type:t})))}},r.map(function(e){return i.a.createElement(S.a.Option,{key:e.value},e.label)}))),i.a.createElement(k.a.Item,{key:"github"},i.a.createElement(Q,null)))),i.a.createElement(T.a.Content,{style:{padding:"0 50px",marginTop:64}},i.a.createElement(L.a,null,i.a.createElement(P.a,{path:"/home",exact:!0,component:X}),i.a.createElement(P.a,{path:"/references",exact:!0,component:Y}),i.a.createElement(P.a,{component:function(){return i.a.createElement(D.a,{to:{pathname:"/home"}})}})))))}));var $=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(n.a,{store:A},i.a.createElement(s.a,null,i.a.createElement(Z,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},46:function(e){e.exports=[{title:"A quand la rupture \xe9nerg\xe9tique ? - Jancovici",url:"https://youtu.be/2JH6TwaDYW4",type:"VIDEO",tags:["\xe9nergie","climat","\xe9conomie"]},{title:"Tant Mieux ! - BAK XIII",url:"https://youtu.be/DVaO7arF0Ng",type:"MUSIC",tags:["art"]},{title:"Demain",url:"http://www.allocine.fr/film/fichefilm_gen_cfilm=229903.html",coverUrl:"http://fr.web.img3.acsta.net/c_215_290/pictures/15/10/16/17/17/404473.jpg",type:"MOVIE"},{title:"Le r\xe9veilleur",coverUrl:"https://yt3.ggpht.com/a-/AN66SAzz6GG_lbm9UJs3sPoZ5snP6McYLDMf3WGVvA=s288-mo-c-c0xffffffff-rj-k-no",url:"https://www.youtube.com/channel/UC1EacOJoqsKaYxaDomTCTEQ/featured",type:"CHANNEL",tags:["\xe9nergie","climat"]},{title:"Or noir, la grande histoire du p\xe9trole - Auzanneau",url:"http://www.editionsladecouverte.fr/catalogue/index-Or_noir-9782707167019.html",coverUrl:"http://extranet.editis.com/it-yonixweb/IMAGES/DEC/P3/9782707167019.jpg",type:"BOOK",tags:["p\xe9trole","Histoire"]},{title:"Sans Lendemain - Dermot O' Connor",url:"https://youtu.be/GTYNbKJpAA4",type:"VIDEO",tags:["collapsologie"]},{title:"Thinkerview",url:"https://www.youtube.com/user/thinkerview",coverUrl:"https://yt3.ggpht.com/a-/AN66SAwEmQdSRESAOl-smdyNt1OGi5P6vRhhdNDJRA=s288-mo-c-c0xffffffff-rj-k-no",type:"CHANNEL"},{title:"Les Limites \xe0 la croissance (dans un monde fini) : Le rapport Meadows, 30 ans apr\xe8s - Meadows et al.",url:"https://www.ruedelechiquier.net/l-ecopoche/110-les-limites-a-la-croissance.html",coverUrl:"https://www.ruedelechiquier.net/173-large_default/les-limites-a-la-croissance.jpg",type:"BOOK",tags:["collapsologie"]},{title:"Site de Jean-Marc Jancovici",url:"https://jancovici.com/",coverUrl:"https://jancovici.com/wp-content/uploads/2016/05/JM-sans-cravate.jpg",type:"WEBSITE",tags:["\xe9nergie","climat"]},{title:"Fresque Black Lines sur l\u2019\xe9cologie",url:"http://www.christianjuliaphotos.fr/Fresque-Black-Lines-sur-l-ecologie.html",coverUrl:"http://www.christianjuliaphotos.fr/IMG/jpg/DSC09630-2.jpg",type:"PICTURE",tags:["art"]},{title:"Comment tout peut s'effondrer - Servigne, Stevens",url:"http://www.seuil.com/ouvrage/comment-tout-peut-s-effondrer-pablo-servigne/9782021223316",coverUrl:"http://ref.lamartinieregroupe.com/media/9782021223316/grande/122331_couverture_Hres_0.jpg",type:"BOOK",tags:["collapsologie"]},{title:"Le Pic P\xe9trolier - Stuart McMillen",url:"http://www.stuartmcmillen.com/fr/comic/le-pic-petrolier/",coverUrl:"http://www.stuartmcmillen.com/wp-content/uploads/2015/05/2015-04-fr-Peak-Oil-001.png",type:"BOOK",tags:["art","p\xe9trole"]},{title:"Pr\xe9sages",url:"https://www.presages.fr/",coverUrl:"https://static1.squarespace.com/static/5a4d4a721f318dbfc2d76b80/t/5a9838b453450a2a54d73e4a/1519925443053/PRESAGES?format=750w",type:"PODCAST",tags:["collapsologie"]},{title:"L'Effondrement des soci\xe9t\xe9s complexes - Tainter",url:"https://www.leretourauxsources.com/essais/19-leffondrement-des-societes-complexes.html",coverUrl:"https://www.leretourauxsources.com/37-large_default/leffondrement-des-societes-complexes.jpg",type:"BOOK",tags:["collapsologie"]},{title:"L'\xc2ge des low tech - Bihouix",url:"http://www.seuil.com/ouvrage/l-age-des-low-tech-philippe-bihouix/9782021160727",coverUrl:"http://ref.lamartinieregroupe.com/media/9782021160727/grande/116072_couverture_Hres_0.jpg",type:"BOOK",tags:["low-tech","m\xe9taux"]},{title:"Les cinq stades de l'effondrement - Orlov",url:"https://www.leretourauxsources.com/blog/sortie-de-les-cinq-stades-de-l-effondrement-de-dmitry-orlov-n1727",coverUrl:"http://scribedi.myhostpoint.ch/img/cms/prestablog/2016/06/5stades.png",type:"BOOK",tags:["collapsologie"]},{title:"Effondrement - Diamond",url:"http://www.gallimard.fr/Catalogue/GALLIMARD/Folio/Folio-essais/Effondrement",coverUrl:"http://www.gallimard.fr/var/storage/images/product/429/product_9782070364305_195x320.jpg",type:"BOOK",tags:["collapsologie","Histoire"]},{title:"Earth Temperature Timeline",url:"https://xkcd.com/1732/",coverUrl:"https://imgs.xkcd.com/comics/earth_temperature_timeline_2x.png",type:"PICTURE",tags:["climat","Histoire"]},{title:"Thermodynamique de l'\xe9volution : Un essai de thermo-bio-sociologie - Fran\xe7ois Roddier",url:"http://www.editions-parole.net/?product=thermodynamique-de-levolution-un-essai-de-thermo-bio-sociologie",coverUrl:"https://www.editions-parole.net/siteinteractifparoleeditions/wp-content/uploads/2014/10/COUV-THERMODYNAMIQUE-2.png",type:"BOOK",tags:["\xe9nergie","biologie","\xe9conomie"]},{title:"La thermodynamique de l'\xe9volution : du Big Bang aux sciences humaines - Fran\xe7ois Roddier",url:"https://youtu.be/6lNz5vmKEFA",type:"VIDEO",tags:["\xe9nergie","biologie","\xe9conomie"]},{title:"Site de Fran\xe7ois Roddier",url:"http://www.francois-roddier.fr/",type:"WEBSITE",tags:["\xe9nergie","biologie","\xe9conomie"]},{title:"Nous y sommes - Matmatah",url:"https://youtu.be/SnYR3Z3SWeI",type:"MUSIC",tags:["art"]},{title:"Je Suis Un Homme - Zazie",url:"https://youtu.be/oSIoP7h4B_M",type:"MUSIC",tags:["art"]},{title:"Collapsologie & courbe de deuil - Matthieu Vanniel",url:"https://www.presages.fr/blog/2018/1/4/3-bla-bla",coverUrl:"https://static1.squarespace.com/static/5a4d4a721f318dbfc2d76b80/t/5a4e1696419202af0826e071/1515067070392/?format=2500w",type:"PICTURE",tags:["art","collapsologie"]},{title:"Respire - Mickey 3d",url:"https://youtu.be/Iwb6u1Jo1Mc",type:"MUSIC",tags:["art"]},{title:"Thermostat 6 - Les Gobelins",url:"https://youtu.be/j6Hz_gdqS1k",type:"VIDEO",tags:["art"]},{title:"L'entraide, l'autre loi de la jungle - Servigne, Chapelle",url:"http://www.editionslesliensquiliberent.fr/livre-L_Entraide-9791020904409-1-1-0-1.html",coverUrl:"http://www.editionslesliensquiliberent.fr/images/livre_affiche_525.png",type:"BOOK",tags:["biologie"]},{title:"Nauru: le destin tragique de l'\xeele la plus riche du monde",url:"https://youtu.be/HXOoWfTGZmA",type:"VIDEO",tags:["Histoire","collapsologie"]},{title:"Soleil Vert",url:"http://www.allocine.fr/film/fichefilm_gen_cfilm=300.html",coverUrl:"http://fr.web.img6.acsta.net/c_215_290/medias/nmedia/18/36/22/67/18463477.jpg",type:"MOVIE",tags:["art"]},{title:"Adrastia",url:"http://adrastia.org/",coverUrl:"http://adrastia.org/wp-content/uploads/2017/07/Site.4.png",type:"ASSOCIATION",tags:["collapsologie"]},{title:"Ils changent le monde ! - Hopkins",url:"http://www.seuil.com/ouvrage/ils-changent-le-monde-rob-hopkins/9782021163278",coverUrl:"http://ref.lamartinieregroupe.com/media/9782021163278/grande/116327_couverture_Hres_0.jpg",type:"BOOK"},{title:"Institut momentum",url:"http://www.institutmomentum.org/",coverUrl:"http://www.institutmomentum.org/wp-content/themes/wp-starter/img/logo_momentum.gif",type:"ASSOCIATION",tags:["collapsologie"]},{title:"TEDx - La 2\xe8me loi de la jungle : l'entraide - Pablo Servigne",url:"https://youtu.be/ChkzJPO45qc",type:"VIDEO",tags:["biologie"]},{title:"Pourquoi tout va s'effondrer",url:"https://youtu.be/eyqPs8n8w8I",type:"VIDEO",tags:["collapsologie"]},{title:"Le p\xe9trole - The Shift Project",url:"https://youtu.be/0ph9rN-K1uE",type:"VIDEO",tags:["p\xe9trole"]},{title:"Chroniques de l'Anthropoc\xe8ne - Alain Grandjean",url:"https://alaingrandjean.fr/",coverUrl:"https://alaingrandjean.fr/wp-content/themes/ag-blog/images/deco_logo_header.png",type:"WEBSITE"},{title:"ASPO France",url:"https://aspofrance.org/",coverUrl:"https://aspofrance.files.wordpress.com/2016/10/logo_aspo_france_4e_280.png",type:"ASSOCIATION",tags:["p\xe9trole"]},{title:"Sapiens - Harari",url:"https://www.albin-michel.fr/ouvrages/sapiens-9782226257017",coverUrl:"https://www.albin-michel.fr/file/image/aGFuZGxlcj1maXQmd2lkdGg9MzEw/9782226257017-x.jpg",type:"BOOK",tags:["Histoire"]},{title:"Black-out - Marc Elsberg",url:"https://www.livredepoche.com/livre/black-out-9782253098690",coverUrl:"https://www.livredepoche.com/sites/default/files/styles/manual_crop_269_435/public/images/livres/couv/9782253098690-001-T.jpeg?itok=oWgyCHjg",type:"BOOK",tags:["art"]},{title:"\xcele de Saint-Mathieu - Stuart McMillen",url:"http://www.stuartmcmillen.com/fr/comic/ile-saint-matthieu/",coverUrl:"http://www.stuartmcmillen.com/wp-content/uploads/2011/02/2011-02-fr-St-Matthew-Island-01.png",type:"BOOK",tags:["Histoire"]},{title:"Energy Slaves - Stuart McMillen",url:"http://www.stuartmcmillen.com/comic/energy-slaves/",coverUrl:"http://www.stuartmcmillen.com/wp-content/uploads/2017/04/2017-04-en-Energy-Slaves-02.png",type:"BOOK",tags:["art"]},{title:"Mad Max : Fury Road",url:"http://www.allocine.fr/film/fichefilm_gen_cfilm=125054.html",coverUrl:"http://fr.web.img4.acsta.net/c_215_290/pictures/15/04/14/18/30/215297.jpg",type:"MOVIE",tags:["art"]},{title:"Extrait de A la poursuite de demain (Tomorrowland)",url:"https://youtu.be/Q9d6mpKovtQ",type:"VIDEO",tags:["art"]},{title:"Low-tech lab",url:"http://lowtechlab.org/wiki/Accueil",coverUrl:"http://lowtechlab.org/w/skins/lowtechlab-skin/assets/bg-hp-ok.jpg",type:"WEBSITE",tags:["low-tech"]},{title:"L'entropie vue par les Shadoks",url:"https://youtu.be/JeZNggxmw64",type:"VIDEO",tags:["art","\xe9nergie"]},{title:"Olympic Cyclist Vs. Toaster: Can He Power It?",url:"https://youtu.be/S4O5voOCqAQ",type:"VIDEO",tags:["\xe9nergie"]},{title:"Visite de la ferme du Bec Hellouin",url:"https://youtu.be/bhaYY7ByGFc",type:"VIDEO",tags:["alimentation"]},{title:"Extrapolation of oil past production to forecast future production in barrels - Jean Laherr\xe8re",url:"https://aspofrance.files.wordpress.com/2018/08/35cooilforecast.pdf",type:"ARTICLE",tags:["p\xe9trole"]},{title:"Last man standing",url:"https://www.instagram.com/p/BmRFnPyHKpx/?utm_source=ig_share_sheet&igshid=egcnz2mdp8ew",coverUrl:"https://scontent-cdg2-1.cdninstagram.com/vp/03c534de54bf2e6038261e8ce347904d/5C49ABEC/t51.2885-15/e35/37952108_498665373907120_8075525998180827136_n.jpg",type:"PICTURE",tags:["art"]},{title:"Blog de Mathieu Auzanneau",url:"http://petrole.blog.lemonde.fr/",coverUrl:"http://petrole.blog.lemonde.fr/files/2017/01/tellerson-rex.jpg",type:"WEBSITE",tags:["\xe9conomie","p\xe9trole"]},{title:"Vivons heureux en attendant la mort (Desproges)",url:"https://www.facebook.com/media/set/?set=ms.c.eJxFjkEOADEIAn~_0UWlV~%3Bv~_xTTW11wkMmDLhNCJ0h~%3BhnDeCCNPgFSYYsinNAVAX5KpWAXSC7HIwLtEHGkx6wBJPIkuqrSDtGaj0rbxY9uwf0U7tPufRUnGtAOTzzB~%3BMzNBQ~-.bps.a.2198368967049072&type=1&__xts__[0]=68.ARBMwpLvsoT2oVq8vuJKGLIgWZb4JnlGWNa-756qt0xsyZ1vjc93HHVEjPJgS3z_ozeIeztj7N-IskwQdmxSXopu4oTd6sc1p_JdBCuAA3SNFOkhRJrGXiN1-63xa3QbW_jTTemZAEIfNcrLm2VFwq6YxE19paAM7omy-rqbnC8wunw7_GfJeA&__tn__=HH-R",coverUrl:"https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/42112688_2198369300382372_6053492164439048192_o.jpg?_nc_cat=102&oh=f2bdf6e497ab19434c3359fb0d51502a&oe=5C5187A3",type:"PICTURE",tags:["art"]},{title:"On S'Mobilise - Alternatiba",url:"https://youtu.be/2c8CDj1WWJM",type:"MUSIC",tags:["art"]},{title:"Plus chaud que le climat - Mali Karma",url:"https://www.facebook.com/anvcop21/videos/1792371750846229/?hc_ref=ARS-7_7jz9AS8jIAD8dfnyIpB5aH3qmR0GPBvlOoNbA438P4AFFjORDWnL5Gh0ZKkFI&fref=gs&dti=296173027391453&hc_location=group",coverUrl:"https://scontent-cdg2-1.xx.fbcdn.net/v/t15.5256-10/p960x960/38967637_1786776978072373_7940991658076667904_n.jpg?_nc_cat=102&oh=23eb913d657ef5e678ca32aac9a5952a&oe=5C47742B",type:"MUSIC",tags:["art","climat"]},{title:"Hello Humanity, it's me, Technology. We need to talk.",url:"https://youtu.be/ALugeRQbXAM",type:"VIDEO",tags:["art"]},{title:"\xab Ce monde se d\xe9fait sous nos yeux \xbb : l\u2019effondrement dans le regard d\u2019une artiste",url:"https://mrmondialisation.org/ce-monde-se-defait-sous-nos-yeux-leffondrement-dans-le-regard-dune-artiste/",coverUrl:"https://i0.wp.com/mrmondialisation.org/wp-content/uploads/2018/08/01_Portrait.jpg",type:"ARTICLE",tags:["art"]},{title:"Collapsologie & psychohistoire",url:"https://grisebouille.net/collapsologie-psychohistoire/",coverUrl:"https://grisebouille.net/wp-content/uploads/2018/09/lf_030_collapsologie_et_psychohistoire.png",type:"PICTURE",tags:["art","collapsologie"]},{title:"\xc9nergie et environnement",url:"https://energieetenvironnement.com/",coverUrl:"https://energieetenvironnement.files.wordpress.com/2018/02/cropped-image-principale.jpg",type:"WEBSITE",tags:["\xe9nergie"]},{title:"ElectricityMap",url:"https://www.electricitymap.org",coverUrl:"./references/img/electricityMap.jpg",type:"WEBSITE",tags:["\xe9nergie","\xe9lectricit\xe9"]},{title:"[NEXT] Web s\xe9rie doc",url:"https://youtu.be/ImGLPH3eIdE",type:"SERIES",tags:["art","collapsologie"]},{title:"Climate Hoax",url:"./references/img/climate_hoax.jpg",coverUrl:"./references/img/climate_hoax.jpg",type:"PICTURE",tags:["art","climat"]},{title:"Alone population",url:"./references/img/alone_population.jpg",coverUrl:"./references/img/alone_population.jpg",type:"PICTURE",tags:["art"]},{title:"Arch\xe9ologues du futur",url:"./references/img/future_archeologue.jpg",coverUrl:"./references/img/future_archeologue.jpg",type:"PICTURE",tags:["art"]},{title:"Sixtine Apocalypse - Riber",url:"./references/img/sixtine_apocalypse_riber.jpg",coverUrl:"./references/img/sixtine_apocalypse_riber.jpg",type:"PICTURE",tags:["art"]},{title:"Sommar, Sommar - Riber",url:"./references/img/sommar_sommar_riber.jpg",coverUrl:"./references/img/sommar_sommar_riber.jpg",type:"PICTURE",tags:["art","climat"]},{title:"Titanic mondial - Riber",url:"./references/img/titanic_mondial_riber.jpg",coverUrl:"./references/img/titanic_mondial_riber.jpg",type:"PICTURE",tags:["art"]},{title:"Action, r\xe9action",url:"https://www.facebook.com/putzgrilah/videos/942847322489996/UzpfSTY4NjcxODQ3Njo3MDAwODE1OTM2NjcyNTk/",coverUrl:"https://scontent-cdg2-1.xx.fbcdn.net/v/t15.5256-10/12594088_454716111398304_829812909_n.jpg?_nc_cat=108&oh=45a5cd7e75901f145d308c9a8d0b5cee&oe=5C4F1B19",type:"VIDEO",tags:["art"]},{title:"2058",url:"https://youtu.be/l19L_8xvyDo",type:"SERIES",tags:["collapsologie","art"]},{title:"Sc\xe9nario catastrophe",url:"https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/43738844_10157734144382281_6186986907709210624_o.jpg?_nc_cat=100&oh=25d989ad3964cc1a5e61d00840afd716&oe=5C5358CC",coverUrl:"https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/43738844_10157734144382281_6186986907709210624_o.jpg?_nc_cat=100&oh=25d989ad3964cc1a5e61d00840afd716&oe=5C5358CC",type:"PICTURE",tags:["art","climat"]},{title:"Utopies concretes",url:"http://utopies-concretes.org/#/home",type:"WEBSITE",tags:["art"]},{title:"Empreintes du quotidien",url:"https://www.novethic.fr/actualite/environnement/pollution/isr-rse/infographie-telephone-frigo-garde-robe-les-equipements-de-maison-representent-un-quart-des-emissions-de-co2-des-francais-146416.html",coverUrl:"https://www.novethic.fr/fileadmin/poids-environnemental-objets-quotidien.jpg",type:"ARTICLE",tags:["climat"]},{title:"\xc9thique & Animaux: L214",url:"https://www.l214.com/",coverUrl:"https://visuels.l214.com/sites/www.l214.com/2012/logo-L214.png",type:"ASSOCIATION",tags:["alimentation"]},{title:"168 ann\xe9es de changement climatique",url:"https://www.facebook.com/1173414154/videos/10216317712353450/",coverUrl:"https://scontent-cdg2-1.xx.fbcdn.net/v/t15.5256-10/s403x403/37823329_10216317717113569_88210463527010304_n.jpg?_nc_cat=106&oh=12215cdaeea52a151a40e581b95976d5&oe=5C528290",type:"VIDEO",tags:["climat","Histoire"]},{title:"Les charbonniers - Monet",url:"http://www.musee-orsay.fr/fr/collections/oeuvres-commentees/recherche/commentaire/commentaire_id/les-charbonniers-349.html",coverUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Monet_men_unloading_coal.jpg",type:"PICTURE",tags:["art","charbon"]},{title:"Germinal - Zola",url:"https://fr.wikipedia.org/wiki/Germinal_(roman)",coverUrl:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Gil_Blas_-_Germinal.jpg",type:"BOOK",tags:["art","charbon"]},{title:"Barrage des Trois-Gorges",url:"https://fr.wikipedia.org/wiki/Barrage_des_Trois-Gorges",coverUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/ThreeGorgesDam-China2009.jpg/640px-ThreeGorgesDam-China2009.jpg",type:"PICTURE",tags:["hydrolique","\xe9lectricit\xe9"]},{title:"Spindletop",url:"https://fr.wikipedia.org/wiki/Spindletop",coverUrl:"https://upload.wikimedia.org/wikipedia/commons/d/d8/Lucas_gusher.jpg",type:"PICTURE",tags:["p\xe9trole","Histoire"]},{title:"R\xe9acteur nucl\xe9aire",url:"https://youtu.be/uYrhWO_ZLYw",type:"VIDEO",tags:["nucl\xe9aire","convertisseur"]},{title:"L'histoire du p\xe9trole",url:"https://youtu.be/dC4AVGDgsT8",type:"VIDEO",tags:["p\xe9trole","Histoire"]},{title:"Les corons",url:"https://youtu.be/cXARMIQdIpM",type:"MUSIC",tags:["art","charbon"]},{title:"First Moon Landing",url:"https://youtu.be/cwZb2mqId0A",type:"VIDEO",tags:["Histoire"]},{title:"Moteur \xe0 combustion interne",url:"https://fr.wikipedia.org/wiki/Moteur_%C3%A0_combustion_et_explosion",coverUrl:"./references/img/moteur_combustion_interne.jpg",type:"PICTURE",tags:["convertisseur"]},{title:"Cartes mondiales des pipelines",url:"https://geomondiale.fr/pipelines/",coverUrl:"https://geomondiale.fr/pipelines/europe_oil_and_gas_pipelines_map.jpg",type:"WEBSITE",tags:["p\xe9trole","gaz"]},{title:"Locomotive 242 A 1 - SNCF",url:"https://fr.wikipedia.org/wiki/Locomotive_%C3%A0_vapeur",coverUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/SNCF_Class_242_A1.jpg/640px-SNCF_Class_242_A1.jpg",type:"PICTURE",tags:["charbon","transport"]},{title:"Excavation de charbon en Allemagne",url:"https://youtu.be/SM_tRfYmgA0",type:"VIDEO",tags:["charbon"]},{title:"Ateshgah - Bakou",url:"https://fr.wikipedia.org/wiki/Temple_du_feu",coverUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Ateshgah_-_%22Fire_Temple%22.JPG/640px-Ateshgah_-_%22Fire_Temple%22.JPG",type:"PICTURE",tags:["p\xe9trole","gaz","Histoire","art"]},{title:"G\xe9opolitique du p\xe9trole",url:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Oil_blood_tank_cropped.jpg",coverUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Oil_blood_tank_cropped.jpg/320px-Oil_blood_tank_cropped.jpg",type:"PICTURE",tags:["art","p\xe9trole","guerre"]},{title:"The Shift Project",url:"https://theshiftproject.org",coverUrl:"https://theshiftproject.org/wp-content/uploads/2018/01/LOGO-2-TSP-L1000PX-TRANSPARENT.png",type:"ASSOCIATION",tags:["\xe9nergie","climat"]},{title:"M\xe9thanier",url:"https://fr.wikipedia.org/wiki/M%C3%A9thanier",coverUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/LNG_Carrier_Fuji_Lng.jpg/640px-LNG_Carrier_Fuji_Lng.jpg",type:"PICTURE",tags:["gaz"]},{title:"Gazoduc en Alaska",url:"./references/img/gazoduc_alaska.jpg",coverUrl:"./references/img/gazoduc_alaska.jpg",type:"PICTURE",tags:["gaz"]},{title:"Gazini\xe8re",url:"./references/img/gaziniere.jpg",coverUrl:"./references/img/gaziniere.jpg",type:"PICTURE",tags:["gaz","convertisseur"]},{title:"Syrie et les gazoducs",url:"https://youtu.be/PXd0tRiRweo",type:"VIDEO",tags:["guerre","gaz"]},{title:"Mar\xe9e noire: l'Amoco Cadiz",url:"https://youtu.be/AQqfd9DVMBM",type:"VIDEO",tags:["p\xe9trole"]},{title:"L'hydro\xe9lectricit\xe9",url:"https://youtu.be/71EopUDDJ04",type:"VIDEO",tags:["hydrolique","\xe9lectricit\xe9"]},{title:"Moulin \xe0 eau au XV\xe8me si\xe8cle",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Landscape_with_a_watermill_-_Le_Tresor_des_Histoires_%2815th_C%29%2C_f.345v_-_BL_Cotton_MS_Augustus_V.jpg/1024px-Landscape_with_a_watermill_-_Le_Tresor_des_Histoires_%2815th_C%29%2C_f.345v_-_BL_Cotton_MS_Augustus_V.jpg",coverUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Landscape_with_a_watermill_-_Le_Tresor_des_Histoires_%2815th_C%29%2C_f.345v_-_BL_Cotton_MS_Augustus_V.jpg/640px-Landscape_with_a_watermill_-_Le_Tresor_des_Histoires_%2815th_C%29%2C_f.345v_-_BL_Cotton_MS_Augustus_V.jpg",type:"PICTURE",tags:["hydrolique"]},{title:"Indicateurs de l'anthropoc\xe8ne",url:"./references/img/anthropocene.png",coverUrl:"./references/img/anthropocene.png",type:"PICTURE",tags:["climat","environnement"]},{title:"Le Clermont : bateau \xe0 vapeur - 1807",url:"https://fr.wikipedia.org/wiki/Bateau_%C3%A0_vapeur",coverUrl:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Clermont_illustration_-_Robert_Fulton_-_Project_Gutenberg_eText_15161.jpg",type:"PICTURE",tags:["charbon","transport"]},{title:"La machine \xe0 vapeur",url:"https://youtu.be/P9sq9ADbgts",type:"VIDEO",tags:["charbon","convertisseur"]},{title:"Le fardier Cugnot",url:"https://fr.wikipedia.org/wiki/Nicolas_Joseph_Cugnot#Le_%C2%AB_chariot_%C3%A0_feu_%C2%BB_ou_%C2%AB_fardier_de_Cugnot_%C2%BB",coverUrl:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Le_deuxi%C3%A8me_fardier_de_Cugnot_%281770%29%2C_ici_au_Mus%C3%A9e_central_de_la_M%C3%A9canique_fran%C3%A7aise_%28en_1901%29.jpg",type:"PICTURE",tags:["charbon","transport"]},{title:"Centrale \xe9lectrique thermique",url:"https://youtu.be/rvImmeBsIT0",type:"VIDEO",tags:["charbon","p\xe9trole","gaz","\xe9lectricit\xe9"]},{title:"Les formes d'\xe9nergie",url:"./references/img/energies.png",coverUrl:"./references/img/energies.png",type:"PICTURE",tags:["\xe9nergie"]},{title:"Le charbon - Jancovici",url:"https://jancovici.com/category/transition-energetique/charbon/",coverUrl:"https://jancovici.com/wp-content/uploads/2016/04/danger_charbon_graph2.jpg",type:"ARTICLE",tags:["charbon"]},{title:"Plate-forme p\xe9troli\xe8re - C'est pas sorcier",url:"https://youtu.be/v5DDH5_bj4g",type:"VIDEO",tags:["p\xe9trole","gaz"]},{title:"Everybody knows - Leonard Cohen",url:"https://youtu.be/Lin-a2lTelg",type:"MUSIC",tags:["art"]},{title:"Tomorrow - Fredrika Stahl",url:"https://youtu.be/nWxFe1uNLNw",type:"MUSIC",tags:["art"]},{title:"L'hymne de nos campagnes - Tryo",url:"https://youtu.be/srb0lAK5wbA",type:"MUSIC",tags:["art"]},{title:"Pocahantas - L'air du vent",url:"https://youtu.be/OAhCfI5hLjU",type:"MUSIC",tags:["art"]},{title:"2 degr\xe9s avant la fin du monde - Data Gueule",url:"https://youtu.be/Hs-M1vgI_4A",type:"VIDEO",tags:["\xe9nergie","climat"]},{title:"Charbon: le fossile qui a de beaux restes - Data Gueule",url:"https://youtu.be/kk0TIhy2D3g",type:"VIDEO",tags:["charbon"]},{title:"Pipelines, notre monde sous perfusion - Data Gueule",url:"https://youtu.be/mNlA2mjmWAs",type:"VIDEO",tags:["p\xe9trole","gaz"]},{title:"Biodiversit\xe9, l'essentielle diff\xe9rence - Data Gueule",url:"https://youtu.be/1F6JGk51_l0",type:"VIDEO",tags:["biologie"]},{title:"Data Gueule",url:"https://www.youtube.com/user/datagueule/featured",coverUrl:"https://yt3.ggpht.com/7DndT0vkFOn7VDczyMnnnUqH76dk8Y6vYV7NzVKmc9GFQN5U20576ElAjBFgEpVS_jJxk9SvMA=w2560-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",type:"CHANNEL"},{title:"Quand la surp\xeache, les poissons coulent - Data Gueule",url:"https://youtu.be/_-bSD3AHgsQ",type:"VIDEO",tags:["alimentation"]},{title:"Les m\xe9taux rares - La Barbe",url:"https://youtu.be/jMrabMyV_as",type:"VIDEO",tags:["m\xe9taux"]},{title:"Containers: la vie en bo\xeete - Data Gueule",url:"https://youtu.be/UBVwequu8xM",type:"VIDEO",tags:["transport"]},{title:"Mine de cuivre en Su\xe8de",url:"./references/img/mine_cuivre_suede.jpg",coverUrl:"./references/img/mine_cuivre_suede.jpg",type:"PICTURE",tags:["m\xe9taux"]},{title:"Types de plate-forme p\xe9troli\xe8re",url:"./references/img/types_plateforme_petroliere.png",coverUrl:"./references/img/types_plateforme_petroliere.png",type:"PICTURE",tags:["p\xe9trole","gaz"]},{title:"Deepwater Horizon",url:"https://fr.wikipedia.org/wiki/Deepwater_Horizon",coverUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Deepwater_Horizon_offshore_drilling_unit_on_fire_2010.jpg/1024px-Deepwater_Horizon_offshore_drilling_unit_on_fire_2010.jpg",type:"PICTURE",tags:["p\xe9trole","gaz"]},{title:"Philippe Bihouix : Le mensonge de la coissance verte - Thinkerview",url:"https://youtu.be/Bx9S8gvNKkA",type:"VIDEO",tags:["m\xe9taux"]},{title:"Effondrement de civilisation ? Pablo Servigne - Thinkerview",url:"https://youtu.be/5xziAeW7l6w",type:"VIDEO",tags:["collapsologie"]},{title:"L214 : Exploitation animale & Alimentation - Souffrance du 21\xe8me si\xe8cle ? - Thinkerview",url:"https://youtu.be/6_RjvC7fQck",type:"VIDEO",tags:["alimentation"]},{title:"P\xe9rico L\xe9gasse : Malbouffe et Mondialisation ? - Thinkerview",url:"https://youtu.be/5SkHrhxaFxE",type:"VIDEO",tags:["alimentation"]},{title:"Vincent Mignerot : Anticiper l'effondrement ?",url:"https://youtu.be/CwXudpMdbuo",type:"VIDEO",tags:["collapsologie"]},{title:"How does a steam turbine work ?",url:"https://youtu.be/SPg7hOxFItI",type:"VIDEO",tags:["\xe9lectricit\xe9","convertisseur"]},{title:"The World to Come - Frederika Stahl",url:"https://youtu.be/4AGz_b5HsyY",type:"MUSIC",tags:["art"]},{title:"Turbine hydraulique Francis",url:"./references/img/turbine_francis.jpg",coverUrl:"./references/img/turbine_francis.jpg",type:"PICTURE",tags:["hydrolique","convertisseur","\xe9lectricit\xe9"]},{title:"Turbine hydraulique Pelton",url:"./references/img/turbine_pelton.jpg",coverUrl:"./references/img/turbine_pelton.jpg",type:"PICTURE",tags:["hydrolique","convertisseur","\xe9lectricit\xe9"]},{title:"Turbine \xe0 vapeur",url:"./references/img/turbine_vapeur.jpg",coverUrl:"./references/img/turbine_vapeur.jpg",type:"PICTURE",tags:["\xe9lectricit\xe9","convertisseur"]},{title:"Vidange du barrage de Sarrans",url:"https://youtu.be/JflFg5un5zg",type:"VIDEO",tags:["hydrolique","\xe9lectricit\xe9"]},{title:"Alternateur d\xe9mont\xe9",url:"https://www.edf.fr/groupe-edf/nos-energies/carte-de-nos-implantations-industrielles-en-france/centrale-nucleaire-de-gravelines/actualites/un-nouveau-stator-pour-l-unite-de-production-ndeg6",coverUrl:"https://www.edf.fr/sites/default/files/contrib/groupe-edf/producteur-industriel/carte-des-implantations/centrale-gravelines/actualites/Central%20et%20b%C3%A2t/img_1990.jpg",type:"PICTURE",tags:["\xe9lectricit\xe9","convertisseur"]},{title:"Bananas in heaven",url:"https://youtu.be/YZa4sdIwV04",type:"VIDEO",tags:["biologie","Histoire"]},{title:"Home",url:"https://youtu.be/NNGDj9IeAuI",type:"MOVIE"},{title:"Saison brune",url:"https://www.editions-delcourt.fr/special/saisonbrune/",coverUrl:"https://www.editions-delcourt.fr/special/saisonbrune/head.jpg",type:"BOOK",tags:["climat"]},{title:"\xc9oliennes",url:"./references/img/eolienne.jpg",coverUrl:"./references/img/eolienne.jpg",type:"PICTURE",tags:["\xe9olien"]},{title:"Moulin \xe0 eau",url:"./references/img/moulin_eau.jpg",coverUrl:"./references/img/moulin_eau.jpg",type:"PICTURE",tags:["hydrolique"]},{title:"Moulin \xe0 vent",url:"./references/img/moulin_vent.jpg",coverUrl:"./references/img/moulin_vent.jpg",type:"PICTURE",tags:["\xe9olien"]},{title:"Panneau solaire photovolta\xefque",url:"./references/img/photovoltaique.jpg",coverUrl:"./references/img/photovoltaique.jpg",type:"PICTURE",tags:["solaire","\xe9lectricit\xe9"]},{title:"Panneau solaire thermique",url:"./references/img/capteur_solaire_thermique.jpg",coverUrl:"./references/img/capteur_solaire_thermique.jpg",type:"PICTURE",tags:["solaire"]},{title:"L'\xe9olien - Le R\xe9veilleur",url:"https://youtu.be/wXqIZxV6VHE",type:"VIDEO",tags:["\xe9olien"]},{title:"Le Photovolta\xefque - Le R\xe9veilleur",url:"https://youtu.be/hESxYif5pdI",type:"VIDEO",tags:["solaire"]}]}},[[126,2,1]]]);
//# sourceMappingURL=main.87a64fc3.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{135:function(e,n,t){e.exports=t(280)},222:function(e,n,t){"use strict";t.r(n);n.default={config:{LAST_FM_KEY:"b51df88e361c4665a2ad4912378a67f1"}}},280:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(28),o=t.n(r),c=t(82),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n.onSuccess&&n.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=t(112),g=t(51),p=t(30),d=t(34),h=t(35),m=t(38),f=t(36),E=t(39),v=t(49),O=t(121),b=t.n(O),R=t(122),S=t.n(R),C=t(45),y=t.n(C),w=t(59),D=t.n(w),P=t(120),k=t.n(P),I=t(76),M=t.n(I),j=t(80),_=t.n(j),A=t(119),B=t.n(A),L=t(116),T=t.n(L),F=t(117),x=t.n(F),U=t(118),N=t.n(U),G=t(48),V=function(e){return e.map(function(e){return i.a.createElement(g.b,{to:"/".concat(e.route),key:e.text},i.a.createElement(T.a,{button:!0},i.a.createElement(x.a,null,e.icon),i.a.createElement(N.a,{primary:e.text})))})},W=i.a.createElement("div",null,V(G.c)),K=i.a.createElement("div",null,V(G.b)),H=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(i)))).state={open:!1},t.toggleDrawer=function(e){return function(){t.setState({open:e})}},t}return Object(E.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this.props.classes,n=i.a.createElement("div",{className:e.list},i.a.createElement(M.a,null,W),i.a.createElement(_.a,null),i.a.createElement(M.a,null,K));return i.a.createElement("div",null,i.a.createElement(D.a,{className:e.menuButton,color:"inherit","aria-label":"Menu",onClick:this.toggleDrawer(!0)},i.a.createElement(B.a,null)),i.a.createElement(k.a,{open:this.state.open,onClose:this.toggleDrawer(!1)},i.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer(!1),onKeyDown:this.toggleDrawer(!1)},n,i.a.createElement(_.a,null))))}}]),n}(a.Component),z=Object(v.withStyles)({list:{width:250},fullList:{width:"auto"},menuButton:{marginLeft:-12,marginRight:20}})(H),J=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(i)))).state={anchorEl:null},t.handleMenu=function(e){t.setState({anchorEl:e.currentTarget})},t}return Object(E.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this.props.classes,n=this.state.anchorEl,t=Boolean(n);return i.a.createElement("div",{className:e.root},i.a.createElement(b.a,{position:"static",color:"inherit"},i.a.createElement(S.a,null,i.a.createElement(z,null),i.a.createElement(y.a,{variant:"title",color:"inherit",className:e.flex}),i.a.createElement("div",null,i.a.createElement(D.a,{"aria-owns":t?"menu-appbar":null,"aria-haspopup":"true",onClick:this.handleMenu,color:"inherit"})))))}}]),n}(a.Component),Y=Object(v.withStyles)({root:{flexGrow:1},flex:{flex:1}})(J),X=function(e){var n=Object(u.a)({},e);return i.a.createElement(g.a,n,i.a.createElement(a.Fragment,null,i.a.createElement(Y,null),i.a.createElement(p.c,null,G.d.map(function(e){return i.a.createElement(p.a,{exact:e.exact,key:e.path,path:e.path,component:e.component})}))))},Z=function(){return i.a.createElement(X,null)},q=t(23),Q=t(26),$=t(124),ee=t(31),ne={loading:!1,error:!1};var te=t(123),ae=t(58),ie={tracks:[],albums:[],artists:[],favorites:[]};var re={app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne;switch((arguments.length>1?arguments[1]:void 0).type){case ee.a.LOADING:return Object(q.a)({},e,{loading:!0});case ee.a.ERROR:return Object(q.a)({},e,{loading:!1,error:!0});case ee.a.NO_ERRORS:return Object(q.a)({},ne);default:return e}},musicSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ae.a.MUSIC_FOUND:return Object(q.a)({},e,{tracks:n.payload.tracks,albums:n.payload.albums,artists:n.payload.artists});case ae.a.FAVORITE_MUSIC_ADDED:return-1===e.favorites.findIndex(function(e){return e.name===n.payload.name})?Object(q.a)({},e,{favorites:[].concat(Object(te.a)(e.favorites),[n.payload])}):Object(q.a)({},e);case ae.a.FAVORITE_MUSIC_REMOVED:return Object(q.a)({},e,{favorites:e.favorites.filter(function(e){return e!==n.payload})});default:return e}}},oe=t(27),ce=t.n(oe),le=t(29),se=ce.a.mark(ge),ue=ce.a.mark(pe);function ge(){return ce.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.e)(ee.a.ERROR,ce.a.mark(function e(){return ce.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.b)(2e3);case 2:return e.next=4,Object(le.d)({type:ee.a.NO_ERRORS});case 4:case"end":return e.stop()}},e)}));case 2:case"end":return e.stop()}},se)}function pe(){return ce.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.a)([Object(le.c)(ge)]);case 2:case"end":return e.stop()}},ue)}var de=ce.a.mark(he);function he(){return ce.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(le.a)([pe()]);case 2:case"end":return e.stop()}},de)}var me=Object($.a)(),fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.d,Ee=Object(Q.e)(Object(Q.c)(Object(q.a)({},re)),fe(Object(Q.d)(Object(Q.a)(me))));me.run(he);var ve=Ee,Oe=(t(279),i.a.createElement(c.a,{store:ve},i.a.createElement(Z,null)));o.a.render(Oe,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-music-searcher",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/react-music-searcher","/service-worker.js");l?(function(e,n){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):s(n,e)})}}()},31:function(e,n,t){"use strict";var a={LOADING:"LOADING",ERROR:"ERROR",NO_ERRORS:"NO_ERRORS",startLoading:function(){return{type:a.LOADING}},errorCaught:function(){return{type:a.ERROR}},stopLoading:function(){return{type:a.NO_ERRORS}}};n.a=a},48:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(113),o=t.n(r),c=t(78),l=t.n(c),s=t(34),u=t(35),g=t(38),p=t(36),d=t(39),h=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(g.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(i)))).state={component:null},t}return Object(d.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.load().then(function(n){e.setState(function(){return{component:n.default?n.default:n}})})}},{key:"render",value:function(){return this.props.children(this.state.component)}}]),n}(a.Component),m=t(85),f=t(45),E=t.n(f),v=function(){var e,n,t="Reticulating Splines,Gathering Goblins,Lifting Weights,Pushing Pixels,Formulating Plan,Taking Break,Herding Ducks,Feeding Developers,Fishing for Change,Searching for Dancers,Waking Up Gnomes,Playing Chess,Building Igloos,Converting Celsius,Scanning Power Level,Delivering Presents,Finding Dragon Balls,Firing Lasers,Party Rocking,Walking up to the club,Righting wrongs,Building Lego,Assembling Avengers,Turning Down for What,Reaching 88mph,Pondering Existence,Battling Robots,Smashing Pots,Stomping Goombas,Doing Donuts,Entering Danger Zone,Talking to Mom,Chasing Squirrels,Setting Phasers to Stun,Doing Macarena,Dropping Bass,Removing Biebers,Performing Magic,Autotuning Kanye,Waxing Legs,Invading Space,Levelling Up,Generating Map,Conquering France,Piloting Tardis,Destroying Deathstar,Typing Letters,Making Code,Running Marathon,Shooting Pucks,Kicking Field Goals,Fighting Bad Guys,Driving Batmobile,Warming Up Kryptonite,Popping Popcorn,Creating Hashes,Spawning Boss,Evaluating Life Choices,Eating Ramen,Re-heating Leftovers,Petting Kittens,Walking Puppies,Catching Z\u2019s,Jumping Rope,Declaring Variables,Yessing Doge,Recycling Memes,Tipping Fedora,Walking Runway,Counting to Ten,Booting Native Client,Launching App,Drawing Icons,Reading Instructions,Finding Screws,Completing Puzzles,Generating Volume Slider,Brightening Orange,Ordering Pizza,You Look Good Today,Clearing Screen,Stirring Pot,Mashing Potatoes,Banishing Evil,Taking Selfies,Accelerating Disks,Benching Network,Rocking Out,Grinding Mage,Studying Calculus,Playing N64,Racing GoKarts,Defeating Creepers,Blowing Game Cartridge,Choosing Pikachu,Postponing Half Life 3,Rushing Zergs,Rescuing Hostages,Typing Konami Code,Building Snowman,Letting it Snow,Burning HDMI Cords,Applying Filters,Taking Screenshot,Shaving Mustache,Growing Beard,Baking Muffins,Iterating Javascript,Attracting Venture Capital,Disrupting Industry,Tweeting Hashtags,Encrypting Lines,Obfuscating C,Enhancing License Plate,Running Diagnostic,Warming Hyperdrive,Calibrating Positions,Calculating Percentages,Revoking Licenses,Shedding Core,Dampening Gravity,Increasing Power,Checking Sensors,Indexing RSS,Programming PCI,Determining USB Position,Connecting to Bus,Inverting Ports,Bypassing Capacitor,Reversing Bandwidth Throttle,Testing AI,Virtualizing Microchip,Emulating Playstation,Synthesizing Drivers,Structuring Chlorophyll,Watering Plants,Ingesting Caffeine,Chugging Redbull,Parsing System,Navigating Arrays,Searching Google,Overflowing Stack,Compiling Binaries,Answering Emails,Migrating CSS,Backing Up Primaries,Rendering Dialogs,Reading RSS,Compressing Data,Rejecting Cloud,Evaluating Weissman Score,Purging Local Storage,Leaking Memory,Scripting Python,Grunting Ruby,Benching RAM,Determining Auxiliaries,Jiggling Internet,Ejecting Floppy,Fluctuating Objects,Spiking Reactor Core,Firing Bosons,Testing Processor,Debugging Prompts,Connecting Floats,Rounding Integers,Pronouncing Gigawatt,Inverting Transponders,Bypassing Silicon,Raising Funds,Caching Logs,Dithering Broadband,Eating Poutine,Rolling Rims to Win,Begging for Change,Chasing Waterfalls,Pumping Gas,Emptying Pipes,Hitting Pi\xf1ata,Unleashing Freedom,Airbrushing Actors,FIling Taxes,Powering Mitochondria,Calculating Qi charge,Completing Geometry,Turning in Algebra,Solving for X,Benching Wattage,Kludging Playback Bar,Stringifying Json,Consuming Spaghetti Code,Deleting Comments,Transitioning to Django,Learning to Code,Battling Feature Creep,Losing Flappy Bird,Celebrating Good Times,Sharpening Pencils,Automating Processes,Attacking Godzilla,Carbonating Soda,Thinking of Witty Text".split(",");return i.a.createElement("div",{style:{textAlign:"center",paddingTop:"100px"}},i.a.createElement(m.ScaleLoader,{height:80,width:10,margin:"5px",radius:3,color:"rgba(0,0,0,0.54)"}),i.a.createElement("br",null),i.a.createElement(E.a,{variant:"caption"},t[(e=0,n=202,Math.floor(Math.random()*(Math.floor(n)-Math.ceil(e)))+Math.ceil(e))]))};t.d(n,"a",function(){return b}),t.d(n,"d",function(){return R}),t.d(n,"c",function(){return S}),t.d(n,"b",function(){return C});var O=Object({NODE_ENV:"production",PUBLIC_URL:"/react-music-searcher"}).isCI?{}:t(222),b=Object({NODE_ENV:"production",PUBLIC_URL:"/react-music-searcher"}).LAST_FM_API_KEY||O.LAST_FM_KEY||"",R=[{path:"/",component:function(e){return i.a.createElement(h,{load:function(){return t.e(8).then(t.bind(null,410))}},function(n){return null===n?i.a.createElement(v,null):i.a.createElement(n,e)})},exact:!0},{path:"/searchmusic",component:function(e){return i.a.createElement(h,{load:function(){return Promise.all([t.e(0),t.e(5),t.e(7)]).then(t.bind(null,412))}},function(n){return null===n?i.a.createElement(v,null):i.a.createElement(n,e)})}},{path:"/favoritemusic",component:function(e){return i.a.createElement(h,{load:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,409))}},function(n){return null===n?i.a.createElement(v,null):i.a.createElement(n,e)})}},{path:"/editor",component:function(e){return i.a.createElement(h,{load:function(){return Promise.all([t.e(4),t.e(9)]).then(t.bind(null,411))}},function(n){return null===n?i.a.createElement(v,null):i.a.createElement(n,e)})}},{path:"*",component:function(e){return i.a.createElement(h,{load:function(){return t.e(10).then(t.bind(null,408))}},function(n){return null===n?i.a.createElement(v,null):i.a.createElement(n,e)})}}],S=[{text:"Search Music",icon:i.a.createElement(o.a,null),route:"searchmusic"}],C=[{text:"Favorite Music",icon:i.a.createElement(l.a,null),route:"favoritemusic"},{text:"Monaco Editor (VSCode)",icon:i.a.createElement(l.a,null),route:"editor"}]},58:function(e,n,t){"use strict";t.d(n,"d",function(){return i}),t.d(n,"c",function(){return r}),t.d(n,"b",function(){return o});var a={MUSIC_FOUND:"MUSIC_FOUND",FAVORITE_MUSIC_ADDED:"FAVORITE_MUSIC_ADDED",FAVORITE_MUSIC_REMOVED:"FAVORITE_MUSIC_REMOVED"};function i(e){return{type:a.MUSIC_FOUND,payload:e}}function r(e){return{type:a.FAVORITE_MUSIC_REMOVED,payload:e}}function o(e){return{type:a.FAVORITE_MUSIC_ADDED,payload:e}}n.a=a}},[[135,2,3]]]);
//# sourceMappingURL=main.e9d2e68e.chunk.js.map
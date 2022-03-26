(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1662],{73027:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/basics/api-routes/creating-api-routes",function(){return c(39015)}])},39015:function(a,b,c){"use strict";c.r(b),c.d(b,{meta:function(){return k},"default":function(){return m}});var d=c(24246),e=c(27378),f=c(65977),g=c(85416);function h(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function i(a){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function j(a,b){return(j=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}var k={title:"API Routes",courseId:"basics",lessonId:"api-routes",stepId:"creating-api-routes",subtitle:"Creating API Routes"},l={meta:k},m=function(a){"use strict";!function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&j(a,b)}(p,a);var b,c,e,m,n,o=(m=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}(),function(){var a,b,c,d,e=i(m);if(n){var f=i(this).constructor;d=Reflect.construct(e,arguments,f)}else d=e.apply(this,arguments);return b=this,(c=d)&&("object"==((a=c)&&"undefined"!=typeof Symbol&&a.constructor===Symbol?"symbol":typeof a)||"function"==typeof c)?c:(function(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a})(b)});function p(a){var b;return!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,p),(b=o.call(this,a)).layout=function(a){var b=a.children;return(0,d.jsx)(g.Z,{meta:k,children:b})},b}return b=p,c=[{key:"render",value:function(){var a=this.props,b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.jsxs)(f.XJ,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,c),components:b,children:[(0,d.jsxs)(f.XJ,{name:"p",components:b,children:[(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"p",props:{href:"/docs/api-routes/introduction"},children:"API Routes"})," let you create an API endpoint inside a Next.js app. You can do so by creating a ",(0,d.jsx)(f.XJ,{name:"strong",components:b,parentName:"p",children:"function"})," inside the ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"pages/api"})," directory that has the following format:"]}),(0,d.jsx)(f.XJ,{name:"pre",components:b,props:{className:"language-js"},children:(0,d.jsxs)(f.XJ,{name:"code",components:b,parentName:"pre",props:{className:"language-js"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token comment"},children:"// req = HTTP incoming message, res = HTTP server response"}),"\n",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword module"},children:"export"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword module"},children:"default"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword"},children:"function"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token function"},children:"handler"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"("}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token parameter"},children:["req",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:","})," res"]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:")"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"{"}),"\n  ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token comment"},children:"// ..."}),"\n",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"}"}),"\n"]})}),(0,d.jsx)(f.XJ,{name:"blockquote",components:b,children:(0,d.jsxs)(f.XJ,{name:"p",components:b,parentName:"blockquote",children:["Learn more about the request handler above in the ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"p",props:{href:"/docs/api-routes/introduction"},children:"API Routes documentation"}),"."]})}),(0,d.jsx)(f.XJ,{name:"p",components:b,children:"They can be deployed as Serverless Functions (also known as Lambdas)."}),(0,d.jsx)(f.XJ,{name:"h3",components:b,children:"Creating a simple API endpoint"}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["Let’s try it out. Create a file called ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"hello.js"})," in ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"pages/api"})," with the following code:"]}),(0,d.jsx)(f.XJ,{name:"pre",components:b,props:{className:"language-js"},children:(0,d.jsxs)(f.XJ,{name:"code",components:b,parentName:"pre",props:{className:"language-js"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword module"},children:"export"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword module"},children:"default"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword"},children:"function"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token function"},children:"handler"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"("}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token parameter"},children:["req",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:","})," res"]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:")"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"{"}),"\n  res",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"."}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token method function property-access"},children:"status"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"("}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token number"},children:"200"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:")"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"."}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token method function property-access"},children:"json"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"("}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"{"})," text",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:":"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token string"},children:"'Hello'"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"}"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:")"}),"\n",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"}"}),"\n"]})}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["Try accessing it at ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"p",props:{href:"http://localhost:3000/api/hello"},children:"http://localhost:3000/api/hello"}),". You should see ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"{\"text\":\"Hello\"}"}),". Note that:"]}),(0,d.jsxs)(f.XJ,{name:"ul",components:b,children:[(0,d.jsxs)(f.XJ,{name:"li",components:b,parentName:"ul",children:[(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"li",children:"req"})," is an instance of ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"li",props:{href:"https://nodejs.org/api/http.html#http_class_http_incomingmessage"},children:"http.IncomingMessage"}),", plus some pre-built ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"li",props:{href:"/docs/api-routes/api-middlewares"},children:"middlewares"}),"."]}),(0,d.jsxs)(f.XJ,{name:"li",components:b,parentName:"ul",children:[(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"li",children:"res"})," is an instance of ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"li",props:{href:"https://nodejs.org/api/http.html#http_class_http_serverresponse"},children:"http.ServerResponse"}),", plus some ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"li",props:{href:"/docs/api-routes/response-helpers"},children:"helper functions"}),"."]})]}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["That’s it! Before we wrap up this lesson, let’s talk about some tips for using ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"p",props:{href:"/docs/api-routes/introduction"},children:"API Routes"})," on the next page."]})]})}}],h(b.prototype,c),e&&h(b,e),p}(e.Component);m.isMDXComponent=!0}},function(a){a.O(0,[7582,7879,642,5315,5149,9774,2888,179],function(){return a(a.s=73027)}),_N_E=a.O()}])
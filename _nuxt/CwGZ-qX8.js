const __vite__fileDeps=["./HJBTAW2G.js","./S4JuuhA1.js","./entry.CVa4TyAI.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{u as Y}from"./D1pNqOhf.js";import{l as K,E as H,F as q,d as O,r as Q,t as y,v as x,x as o,B as j,C as A,D as U,_ as E,G as Z,H as W,o as M,I as J,J as X,K as u,L as S,y as B,M as ee,N as F,z as te,O as T,P as L}from"./S4JuuhA1.js";const $=()=>({delay:n=>new Promise(_=>setTimeout(_,n)),displayConsoleLog:n=>{K().public.nodeEnvironment!=="production"&&console.log(n)}}),oe=H("/images/icon.svg"),N=q("app",{state:()=>({isProcessing:!0,uploadedNotePath:null,hiddenPageIndexes:[],selectedCombineOption:"",isConvertBlackToWhite:!1,triggerAction:null})}),D=i=>(A("data-v-6b797602"),i=i(),U(),i),ne={class:"position-absolute top-left full-height full-width background-color-light flex-column align-items-center justify-content-center bring-to-front"},se=D(()=>o("img",{src:oe,draggable:"false"},null,-1)),ae=D(()=>o("p",{class:"font-size-36 font-weight-800 no-margin"},"Xerox Page Builder",-1)),ie=D(()=>o("p",{class:"font-size-18 font-weight-400 margin-top-12 color-dark opacity-medium half-width text-align-center"}," If you have notes of Physicswallah, Unacademy etc then you can upload it here and we'll help you create a inverted PDF out of it. ",-1)),ce=D(()=>o("span",{class:"icon margin-right-5"},"+",-1)),re=D(()=>o("b",null,"Note",-1)),le=O({__name:"UploadNote",setup(i){const s=N(),n=Q(null),{delay:_,displayConsoleLog:d}=$(),r=()=>{try{n.value.click()}catch(g){const{message:t}=g;d(t)}},h=async g=>{const t=g.target,{files:e}=t;e&&e.length>0&&(s.isProcessing=!0,s.uploadedNotePath=URL.createObjectURL(e[0]),await _(750),s.isProcessing=!1)};return(g,t)=>(y(),x("section",ne,[se,ae,ie,o("a",{class:"upload-btn cursor-pointer-opacity",onClick:r},[ce,j(" Upload "),re]),o("input",{ref_key:"noteFileElement",ref:n,type:"file",class:"hidden",accept:"application/pdf",onChange:h},null,544)]))}}),de=E(le,[["__scopeId","data-v-6b797602"]]),{delay:G}=$(),ge=async()=>{const i=N(),s=await Z(()=>import("./HJBTAW2G.js"),__vite__mapDeps([0,1,2]),import.meta.url);return s.GlobalWorkerOptions.workerSrc="/xerox-page-builder/scripts/pdf.worker.min.mjs",{getNotePdf:async d=>new Promise(async(r,h)=>{s.getDocument({url:d}).promise.then(t=>{r(t)},t=>{h(t)})}),buildAndDownloadPdf:async d=>{try{const{height:r,width:h,processedPages:g}=d,t=r>h?"horizontal-wrapped":"vertical",e=new window.jspdf.jsPDF("p","mm","a4"),l=e.internal.pageSize.width,f=e.internal.pageSize.height;for(let b=0;b<g.length;b++){const a=g[b];if(a.length!==0){if(t==="vertical"){const c=f*.95/a.length,m=l*.95;let p=f*.025;for(let P=0;P<a.length;P++){const w=a[P],k=m*1/h,C=c*1/r,v=C>k?k:C;e.addImage(w,"JPEG",l*.025,p,h*v,r*v),p+=c}}else{const c=f*.95/(a.length>2?2:1),m=l*.95/(a.length>=2?2:1);let p=f*.025;for(let P=0;P<a.length;P++){const w=a[P],k=m*1/h,C=c*1/r,v=C>k?k:C;e.addImage(w,"JPEG",m*(P%2)+l*.025,p,h*v,r*v),P===1&&(p+=c)}}b!==g.length-1&&e.addPage(),await G(100)}}e.save("xerox.pdf"),await G(100),i.isProcessing=!1,document.body.innerHTML=`<section class="
              flex-column
              align-items-center
              justify-content-center
              position-absolute
              top-left
              full-height full-width
              background-color-light
            "
          >
            <img src="/images/icons/download-dark.svg" class="height-36 margin-bottom-12" />
            <p class="opacity-medium color-dark text-align-center margin-top-12">
              We've generated the PDF and have <br/>pushed it for download.
            </p>
          </section>`}catch(r){const h=r.message||"An error occurred while generating the PDF.";throw Error(`Error in buildAndDownloadPdf: 
${h}`)}}}},pe=H("/images/icons/download-dark.svg"),R=i=>(A("data-v-c99bccba"),i=i(),U(),i),he={class:"option-container flex-row align-items-center justify-content-space-between"},ue={class:"flex-row align-items-center"},fe={class:"flex-row align-items-center margin-right-12"},me=R(()=>o("p",{class:"font-size-14 color-dark opacity-medium margin-right-12"}," Combine Pages ",-1)),_e=["onClick"],Pe={class:"font-size-14 color-dark margin-right-8"},be=R(()=>o("p",{class:"font-size-14 color-dark margin-right-8"}," Convert Black to White (all) ",-1)),ye=R(()=>o("img",{src:pe,class:"margin-left-8 height-16"},null,-1)),we=O({__name:"Options",setup(i){const s=W({combineOptions:[]}),n=N(),{delay:_,displayConsoleLog:d}=$(),r=async()=>{try{await _(1*1e3);const e=document.getElementById("page-0");if(e){const{height:l,width:f}=e;f>l?s.combineOptions=["2 in 1","3 in 1","4 in 1","5 in 1"]:s.combineOptions=["2 in 1","3 in 1","4 in 1"]}}catch(e){const{message:l}=e;d(`Error in setUpOptions: ${l}`)}},h=e=>{n.selectedCombineOption=e},g=()=>{n.isConvertBlackToWhite=!n.isConvertBlackToWhite},t=()=>{n.isProcessing=!0,n.triggerAction={type:"generatePdf"}};return M(()=>{r()}),(e,l)=>(y(),x("div",he,[o("section",ue,[o("section",fe,[me,(y(!0),x(J,null,X(u(s).combineOptions,(f,b)=>(y(),x("section",{key:`combine-option-${b}`,class:S(["flex-row align-items-center cursor-pointer-opacity",{"opacity-medium":f!==u(n).selectedCombineOption}]),onClick:a=>h(f)},[o("div",{class:S(["checkbox",{active:f===u(n).selectedCombineOption}])},null,2),o("p",Pe,B(f),1)],10,_e))),128))]),o("section",{class:S(["flex-row align-items-center margin-left-12 cursor-pointer-opacity",{"opacity-medium":!u(n).isConvertBlackToWhite}]),onClick:g},[o("div",{class:S(["checkbox",{active:u(n).isConvertBlackToWhite}])},null,2),be],2)]),o("a",{class:"font-size-14 color-dark cursor-pointer-opacity flex-row align-items-center",onClick:t},[j("Generate "),ye])]))}}),xe=E(we,[["__scopeId","data-v-c99bccba"]]),ve=H("/images/icons/convert-dark.svg"),ke=i=>(A("data-v-3ef8734f"),i=i(),U(),i),Ce={class:"page-container position-relative"},Ie=["id"],$e={class:"page-no"},Ne={class:"position-absolute top-right margin-top-12 margin-right-12 flex-row align-items-center"},Se=ke(()=>o("img",{src:ve},null,-1)),Oe=["src"],Ee=O({__name:"Page",props:{notePdf:{},pageIndex:{},numberOfPages:{}},setup(i){const s=i,n=N(),_=W({isInverted:!1}),{displayConsoleLog:d}=$(),r=async()=>{try{const{notePdf:t,pageIndex:e}=s;t.getPage(e+1).then(function(l){const b=l.getViewport({scale:1}),a=document.getElementById(`page-${e}`),c=a.getContext("2d");a.height=b.height,a.width=b.width;const m={canvasContext:c,viewport:b};l.render(m).promise.then(function(){})})}catch(t){const{message:e}=t;d(`Error in setUpPage: ${e}`)}},h=()=>{try{const{pageIndex:t}=s,e=[...n.hiddenPageIndexes];e.includes(t)?e.splice(e.indexOf(t),1):e.push(t),n.hiddenPageIndexes=e}catch(t){const{message:e}=t;d(`Error in toggleHidePage: ${e}`)}},g=()=>{try{const{pageIndex:t}=s,e=document.getElementById(`page-${t}`),l=e.getContext("2d"),{height:f,width:b}=e;l.globalCompositeOperation="difference",l.fillStyle="white",l.globalAlpha=1,l.fillRect(0,0,b,f),_.isInverted=!_.isInverted}catch(t){const{message:e}=t;d(`Error in toggleInvertOfCurrentPage: ${e}`)}};return M(()=>{r()}),(t,e)=>(y(),x("div",Ce,[o("section",{class:S([{"opacity-none":u(n).hiddenPageIndexes.includes(t.pageIndex)}])},[o("canvas",{id:`page-${t.pageIndex}`},null,8,Ie)],2),o("p",$e,[o("b",null,B(t.pageIndex+1),1),j(" / "+B(t.numberOfPages),1)]),o("section",Ne,[o("a",{class:"btn-dark cursor-pointer-opacity",onClick:g},[Se,j(" "+B(u(_).isInverted?"Undo":"Black to White"),1)]),o("img",{class:"height-24 cursor-pointer-opacity",src:`/images/icons/${u(n).hiddenPageIndexes.includes(t.pageIndex)?"view-dark":"hide-danger"}.svg`,onClick:h},null,8,Oe)])]))}}),De=E(Ee,[["__scopeId","data-v-3ef8734f"]]),Be={class:"position-absolute top-left full-height full-width background-color-light flex-column justify-content-space-between bring-to-front"},Te={key:0,class:"collection-of-page-container flex-row justify-content-center flex-wrap-wrap"},Le=O({__name:"index",async setup(i){let s,n;const{delay:_,displayConsoleLog:d}=$(),{getNotePdf:r,buildAndDownloadPdf:h}=([s,n]=ee(()=>ge()),s=await s,n(),s),g=N(),t=W({arePdfContentsProcessed:!1,pages:[],processedPages:[]});let e;F(()=>g.triggerAction,a=>{const{type:c}=a;c==="generatePdf"&&b()}),F(()=>g.uploadedNotePath,()=>{l()});const l=async()=>{try{const a=g.uploadedNotePath;e=await r(a),t.arePdfContentsProcessed=!0;const c=e._pdfInfo.numPages;t.pages=Array.from(Array(c)).map((m,p)=>p)}catch(a){const{message:c}=a;d(c)}},f=a=>{try{const{isConvertBlackToWhite:c}=g,m=document.getElementById(`page-${a}`),p=m.getContext("2d"),{height:P,width:w}=m;return c&&(p.globalCompositeOperation="difference",p.fillStyle="white",p.globalAlpha=1,p.fillRect(0,0,w,P)),m.toDataURL("image/jpeg")}catch(c){const{message:m}=c;d(m)}},b=async()=>{try{const{pages:a}=t,{selectedCombineOption:c,hiddenPageIndexes:m}=g,p=c!==""?parseInt(String(c).split("in 1").join().trim()):1;if(a.length>0){const P=[];let w=[];const{height:k,width:C}=document.getElementById("page-0"),v=a.filter((I,z)=>!m.includes(z));for(let I=0;I<v.length;I++){const z=v[I],V=f(z);I>0&&I%p===0?(P.push(w),w=[V]):w.push(V),I===v.length-1&&P.push(w),await _(300)}h({height:k,width:C,processedPages:P})}}catch(a){const{message:c}=a;d(c)}};return M(()=>{l()}),(a,c)=>(y(),x("section",Be,[te(xe),u(t).arePdfContentsProcessed?(y(),x("div",Te,[(y(!0),x(J,null,X(u(t).pages,(m,p)=>(y(),L(De,{key:`page-${p}`,pageIndex:p,numberOfPages:u(t).pages.length,notePdf:u(e)},null,8,["pageIndex","numberOfPages","notePdf"]))),128))])):T("",!0)]))}}),je=E(Le,[["__scopeId","data-v-fdf39243"]]),Ae={},Ue=i=>(A("data-v-e71ea8db"),i=i(),U(),i),We={class:"position-absolute top-left full-height full-width background-color-light flex-row align-items-center justify-content-center bring-to-front"},ze=Ue(()=>o("div",{class:"loader-holder flex-row align-items-center"},[o("div",{class:"dot blink margin-right-5"}),o("div",{class:"dot blink margin-right-5"}),o("div",{class:"dot blink"})],-1)),Fe=[ze];function He(i,s){return y(),x("section",We,Fe)}const Me=E(Ae,[["render",He],["__scopeId","data-v-e71ea8db"]]),Re={class:"position-absolute top-left full-height full-width"},Ve=o("section",{class:"position-absolute bottom-left full-width margin-bottom-12 flex-row align-items-center justify-content-center bring-to-front"},[o("p",{class:"no-margin margin-right-8 color-dark"},"Developed by"),o("a",{class:"text-decoration-none color-dark font-weight-500",target:"_blank",href:"https://in.linkedin.com/in/soumodippaul"},"Soumodip Paul")],-1),Xe=O({__name:"index",setup(i){const s=N(),n=W({loadedExternalScripts:0,numberOfExternalScripts:1}),{delay:_}=$();return Y({script:[{src:"/xerox-page-builder/scripts/jspdf.min.js",onload:()=>{n.loadedExternalScripts+=1}}]}),F(()=>n.loadedExternalScripts,async d=>{const{numberOfExternalScripts:r}=n;d===r&&(await _(750),s.isProcessing=!1)}),(d,r)=>(y(),x("section",Re,[!u(s).uploadedNotePath||u(s).isProcessing&&u(s).uploadedNotePath?(y(),L(de,{key:0})):T("",!0),u(s).uploadedNotePath?(y(),L(je,{key:1})):T("",!0),u(s).isProcessing?(y(),L(Me,{key:2})):T("",!0),Ve]))}});export{Xe as default};

import{n as b,s as h}from"./scheduler.b3c879a1.js";const e=[];function d(n,l=b){let i;const o=new Set;function r(t){if(h(n,t)&&(n=t,i)){const c=!e.length;for(const s of o)s[1](),e.push(s,n);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(n))}function _(t,c=b){const s=[t,c];return o.add(s),o.size===1&&(i=l(r,f)||b),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_10yh3lf)==null?void 0:u.base)??"/myspace";var a;const m=((a=globalThis.__sveltekit_10yh3lf)==null?void 0:a.assets)??p;export{m as a,p as b,d as w};

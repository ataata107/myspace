import{n as b,s as p}from"./scheduler.b3c879a1.js";const e=[];function d(n,l=b){let o;const i=new Set;function r(t){if(p(n,t)&&(n=t,o)){const c=!e.length;for(const s of i)s[1](),e.push(s,n);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(n))}function _(t,c=b){const s=[t,c];return i.add(s),i.size===1&&(o=l(r,f)||b),t(n),()=>{i.delete(s),i.size===0&&o&&(o(),o=null)}}return{set:r,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_1n0ov13)==null?void 0:u.base)??"/myspace";var a;const m=((a=globalThis.__sveltekit_1n0ov13)==null?void 0:a.assets)??h;export{m as a,h as b,d as w};

import{S as u,i as d}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="45125391-2052bf46b2b6e76b78c60a950",f="https://pixabay.com/api/";function m(s){const o=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${o}`).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()})}function h(s,o){const t=s.hits.map(e=>`
     <li>
        <a class="gallery-link" href=${e.largeImageURL}>
          <img src="${e.webformatURL}" alt="${e.tags}">
          <div>
            <p><span>Likes</span>${e.likes}</p>
            <p><span>Views</span>${e.views}</p>
            <p><span>Comments</span>${e.comments}</p>
            <p><span>Downloads</span>${e.downloads}</p>
          </div>
        </a>
      </li>`).join("");o.insertAdjacentHTML("beforeend",t),new u(".gallery a",{captionsData:"alt",captionDelay:"250"}).refresh()}const c=document.querySelector(".form"),y=document.querySelector(".input"),l=document.querySelector(".gallery"),n=document.querySelector(".spin-loader");function g(s){s.preventDefault(),l.innerHTML="",n.classList.remove("visually-hidden");const o=y.value.trim();if(o===""){n.classList.add("visually-hidden");return}m(o).then(t=>{n.classList.add("visually-hidden"),t.hits.length===0?d.error({maxWidth:"320px",position:"topRight",messageColor:"white",backgroundColor:"orange",message:"Sorry, there are no images matching your search query. Please try again!"}):(n.classList.add("visually-hidden"),h(t,l))}).catch(t=>{console.error(t)}),c.reset()}c.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map

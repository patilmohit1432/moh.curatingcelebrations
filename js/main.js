var nv=document.getElementById('nv');addEventListener('scroll',function(){nv.classList.toggle('s',scrollY>60)});
var c=document.getElementById('dust'),x=c.getContext('2d'),W,H,P=[];
function rs(){W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;P=[];for(var i=0;i<34;i++)P.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.8+.4,v:Math.random()*.35+.1,p:Math.random()*6})}
rs();addEventListener('resize',rs);
function dr(t){if(scrollY>H){requestAnimationFrame(dr);return}x.clearRect(0,0,W,H);P.forEach(function(p){p.y-=p.v;p.x+=Math.sin(t/1500+p.p)*.25;if(p.y<-5){p.y=H+5;p.x=Math.random()*W}x.fillStyle='rgba(243,217,139,'+(.25+.45*Math.abs(Math.sin(t/900+p.p)))+')';x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill()});requestAnimationFrame(dr)}
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)requestAnimationFrame(dr);
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var n=e.target.dataset.n;
if(n){var s=performance.now();(function f(t){var p=Math.min((t-s)/1800,1);e.target.textContent=Math.round(n*(1-Math.pow(1-p,3)))+(p>=1?'+':'');if(p<1)requestAnimationFrame(f)})(s)}else e.target.classList.add('on')})},{threshold:.25});
document.querySelectorAll('[data-n],.rv').forEach(function(e){io.observe(e)});
var Q=[["They handled 800 guests across three days and I never once had to ask a question.","Priya & Arjun, Wedding"],["Our annual gala finally felt like our brand. The production was flawless.","Director of Communications, Technology firm"],["Every detail reflected our family. We simply enjoyed the evening.","Mrs. Kapoor, Golden Jubilee"]],qi=0,q=document.getElementById('q'),cc=document.getElementById('c'),d=document.getElementById('d');
Q.forEach(function(_,i){var b=document.createElement('button');b.setAttribute('aria-label','Testimonial '+(i+1));b.onclick=function(){show(i)};d.appendChild(b)});
function show(i){qi=i;q.style.opacity=0;setTimeout(function(){q.textContent='\u201C'+Q[i][0]+'\u201D';cc.textContent=Q[i][1];q.style.opacity=1;[].forEach.call(d.children,function(b,j){b.className=j==i?'on':''})},400)}
show(0);setInterval(function(){show((qi+1)%Q.length)},6500);

// UPDATED FORM SUBMISSION FOR DATABASE STORAGE via AJAX
document.getElementById('f').onsubmit = function(e) {
    e.preventDefault();
    var msg = document.getElementById('msg');
    var form = e.target;
    
    msg.style.color = "var(--gold)"; 
    msg.textContent = 'Sending enquiry...';

    var formData = new FormData(form);

    fetch('https://web3forms.com', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
            msg.style.color = "#4BB543"; // Success Green
            msg.textContent = 'Thank you. A planner will contact you within one working day.';
            form.reset();
        } else {
            msg.style.color = "#FF3333"; // Error Red
            msg.textContent = 'Something went wrong. Please try again.';
        }
    })
    .catch(function(error) {
        msg.style.color = "#FF3333";
        msg.textContent = 'Network error. Please check your connection.';
    });
};

document.getElementById('tg').onclick=function(){var r=document.documentElement;r.dataset.theme=r.dataset.theme=='light'?'dark':'light'};

var pg=document.getElementById('pg'),fb=document.getElementById('fab'),sp=document.getElementById('sp'),hi=document.querySelector('.hero');
var rg=document.querySelector('.rings'),tk=0,mh=document.body.scrollHeight-innerHeight;addEventListener('scroll',function(){if(tk)return;tk=requestAnimationFrame(function(){var y=scrollY;pg.style.width=(y/mh*100)+'%';fb.classList.toggle('on',y>innerHeight*.7);if(y<innerHeight*1.2)rg.style.transform='translate(-50%,calc(-50% + '+y*.25+'px))';tk=0})},{passive:true});addEventListener('load',function(){mh=document.body.scrollHeight-innerHeight});
var pt=0;addEventListener('pointermove',function(e){if(pt)return;pt=requestAnimationFrame(function(){sp.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)';pt=0})},{passive:true});
document.querySelectorAll('.svc .sv,.gal figure,.frame').forEach(function(el,i){el.style.setProperty('--i',i%4);
el.addEventListener('pointermove',function(e){if(e.pointerType!='mouse')return;var b=el.getBoundingClientRect(),px=(e.clientX-b.left)/b.width-.5,py=(e.clientY-b.top)/b.height-.5;el.style.transform='perspective(800px) rotateY('+px*9+'deg) rotateX('+(-py*9)+'deg) translateZ(6px)'});
el.addEventListener('pointerleave',function(){el.style.transform=''})});

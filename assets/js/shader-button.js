// GLSL from the public Bailian homepage 0.0.13; DOM runtime adapted for standalone use.
(()=>{
const vertexSource='#version 300 es\nin vec2 position;\nout vec2 v_uv;\nvoid main(){v_uv=position*.5+.5;gl_Position=vec4(position,0.,1.);}\n';
const fragmentSource='#version 300 es\nprecision highp float;\nprecision highp int;\nin vec2 v_uv;\nout vec4 fragColor;\nuniform vec2 u_resolution;\nuniform float u_time,u_pixelRatio,u_hover;\nconst float TAU=6.28318530;\nconst vec3 colors[4]=vec3[4](vec3(6.,17.,26.)/255.,vec3(16.,49.,78.)/255.,vec3(35.,109.,169.)/255.,vec3(74.,166.,204.)/255.);\nuvec3 hash3(uvec3 v){\n  v=v*1664525u+1013904223u;\n  v.x+=v.y*v.z;v.y+=v.z*v.x;v.z+=v.x*v.y;\n  v^=v>>16u;\n  v.x+=v.y*v.z;v.y+=v.z*v.x;v.z+=v.x*v.y;\n  return v;\n}\nvec3 seedRandom(float s){return vec3(hash3(uvec3(floatBitsToUint(s),floatBitsToUint(s*1.5+7.31),floatBitsToUint(s*2.7+13.37))))/float(0xFFFFFFFFu);}\nvec3 linearToOklab(vec3 c){\n  float l=pow(max(dot(c,vec3(.4122214708,.5363325363,.0514459929)),0.),1./3.);\n  float m=pow(max(dot(c,vec3(.2119034982,.6806995451,.1073969566)),0.),1./3.);\n  float s=pow(max(dot(c,vec3(.0883024619,.2817188376,.6299787005)),0.),1./3.);\n  return vec3(.2104542553*l+.7936177850*m-.0040720468*s,1.9779984951*l-2.4285922050*m+.4505937099*s,.0259040371*l+.7827717662*m-.8086757660*s);\n}\nvec3 oklabToLinear(vec3 c){\n  float l=c.x+.3963377774*c.y+.2158037573*c.z;\n  float m=c.x-.1055613458*c.y-.0638541728*c.z;\n  float s=c.x-.0894841775*c.y-1.2914855480*c.z;\n  l=l*l*l;m=m*m*m;s=s*s*s;\n  return vec3(4.0767416621*l-3.3077115913*m+.2309699292*s,-1.2684380046*l+2.6097574011*m-.3413193965*s,-.0041960863*l-.7034186147*m+1.7076147010*s);\n}\nvec3 mixLch(vec3 a,vec3 b,float t){\n  vec3 x=vec3(a.x,length(a.yz),atan(a.z,a.y));\n  vec3 y=vec3(b.x,length(b.yz),atan(b.z,b.y));\n  if(x.y<.05)x.z=y.z;if(y.y<.05)y.z=x.z;\n  float dh=y.z-x.z;if(dh>3.14159265)dh-=TAU;if(dh< -3.14159265)dh+=TAU;\n  float h=x.z+dh*t,C=mix(x.y,y.y,t);\n  return vec3(mix(x.x,y.x,t),C*cos(h),C*sin(h));\n}\nvec3 palette(float t){\n  t=clamp(t,0.,1.);int idx=min(int(floor(t*3.)),2);\n  vec3 a=linearToOklab(pow(colors[idx],vec3(2.2)));\n  vec3 b=linearToOklab(pow(colors[idx+1],vec3(2.2)));\n  return oklabToLinear(mixLch(a,b,clamp(t*3.-float(idx),0.,1.)));\n}\nvec3 gamut(vec3 c){\n  if(min(c.r,min(c.g,c.b))>=0.&&max(c.r,max(c.g,c.b))<=1.)return c;\n  vec3 lab=linearToOklab(max(c,0.));\n  float L=clamp(lab.x,0.,1.),C=length(lab.yz),h=atan(lab.z,lab.y);\n  float maxC=.4*(1.-pow(abs(2.*L-1.),2.));\n  if(C>maxC*.7){float knee=maxC*.7;C=knee+(maxC-knee)*tanh((C-knee)/(maxC-knee+.001));}\n  return clamp(oklabToLinear(vec3(L,C*cos(h),C*sin(h))),0.,1.);\n}\nvoid main(){\n  vec2 fragCoord=v_uv*u_resolution;\n  vec2 p=(fragCoord*2.-u_resolution)/u_resolution.y;\n  vec3 seedOffset=seedRandom(32.),seedOffset2=seedRandom(132.);\n  float angle=32.*2.3999632;\n  p=mat2(cos(angle),-sin(angle),sin(angle),cos(angle))*p;\n  vec2 phase=(seedOffset2.xy-.5)*TAU;\n  // Fine 45-degree square lattice; derivative smoothing prevents jagged lines.\n  vec2 texturePx=fragCoord/u_pixelRatio;\n  vec2 diamondUv=vec2(texturePx.x+texturePx.y,texturePx.y-texturePx.x)*.70710678/2.;\n  vec2 cellEdge=min(fract(diamondUv),1.-fract(diamondUv));\n  float edgeDistance=min(cellEdge.x,cellEdge.y);\n  float aa=max(fwidth(diamondUv.x),fwidth(diamondUv.y))*.5;\n  float diamondGrid=1.-smoothstep(.055-aa,.055+aa,edgeDistance);\n  float total=0.,weights=0.,t=u_time*.3*1.6;\n  for(int i=0;i<4;i++){\n    float fi=float(i),eph=fi/4.;vec2 q=p*.4;\n    float a=phase.x,d=phase.y;\n    for(int j=2;j<4;j++){\n      float fj=float(j);\n      q+=.6*sin(q.yx/10.*fj+t+vec2(a,d)+seedOffset.xy*fj)/fj;\n      a+=cos(fj+d*1.2+q.x*2.-t+seedOffset2.z);\n      d+=sin(fj*q.y+a+seedOffset.z+t+seedOffset2.y);\n    }\n    float v=.5+.5*sin(length(q.yx+vec2(a,d)*.2)*2.4+fi*fi+seedOffset.x);\n    float weight=smoothstep(0.,.5,eph)*(1.-smoothstep(.5,1.,eph));\n    total+=v*weight;weights+=weight;\n  }\n  float val=clamp((total/weights-.3)/.4,0.,1.);\n  // Expand the blue palette across the entire surface while retaining flow detail.\n  val=mix(val,.7+.22*val,u_hover);\n  // Retain the large light shapes; texture only the existing blue regions.\n  float blueRegion=smoothstep(.42,.82,val);\n  vec3 col=palette(val)*1.1;\n  vec2 detailUv=p+vec2(.08*sin(p.y*3.+t*.35),.06*cos(p.x*2.-t*.3));\n  float fineFlow=sin(detailUv.x*10.+detailUv.y*5.+1.1*sin(detailUv.y*4.-t*.45)+t*.6);\n  float softFlow=sin(detailUv.y*7.-detailUv.x*3.+.7*cos(detailUv.x*4.+t*.25)-t*.4);\n  col*=1.+blueRegion*(.065*fineFlow+.035*softFlow);\n  vec3 lab=linearToOklab(col);\n  lab.x=clamp((lab.x-.5)*1.1+.5,0.,1.);\n  col=gamut(oklabToLinear(lab));\n  // Apply a quiet diamond texture without shifting the blue palette.\n  vec3 displayColor=pow(clamp(col,0.,1.),vec3(.4545));\n  // Hover target: the nav "体验" cyan-to-blue gradient (270deg, right cyan → left deep\n  // blue), so the shader pill lands on the same gradient as the existing site CTAs.\n  // CSS 270deg stops are measured from the right edge: 56% = 44% from the left.\n  vec3 hoverLeft=vec3(0.,76.,255.)/255.;\n  vec3 hoverMid=vec3(0.,84.,255.)/255.;\n  vec3 hoverRight=vec3(3.,255.,217.)/255.;\n  vec3 hoverGradient=v_uv.x<.44?mix(hoverLeft,hoverMid,v_uv.x/.44):mix(hoverMid,hoverRight,(v_uv.x-.44)/.56);\n  displayColor=mix(displayColor,hoverGradient*(.97+.02*fineFlow+.01*softFlow),u_hover);\n  fragColor=vec4(clamp(displayColor+.00875-diamondGrid*.11,0.,1.),1.);\n}\n';
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('.hero .button.dark.hero-primary').forEach(button=>{
 const surface=button.querySelector('.shader-surface');
 if(!surface)return;
 const canvas=document.createElement('canvas');
 const gl=canvas.getContext('webgl2',{alpha:false,antialias:false,depth:false,stencil:false});
 if(!gl){button.dataset.renderer='fallback';return;}
 let program,buffer,uniforms,raf=0,previous=0,time=0,hover=0,visible=true,lost=false;
 function setup(){
  const shaders=[];
  try{
   for(const [type,source] of [[gl.VERTEX_SHADER,vertexSource],[gl.FRAGMENT_SHADER,fragmentSource]]){
    const shader=gl.createShader(type);shaders.push(shader);gl.shaderSource(shader,source);gl.compileShader(shader);
    if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(shader));
   }
   program=gl.createProgram();shaders.forEach(s=>gl.attachShader(program,s));gl.linkProgram(program);
   if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));
   gl.useProgram(program);buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
   gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
   const position=gl.getAttribLocation(program,'position');gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
   uniforms=Object.fromEntries(['u_resolution','u_time','u_pixelRatio','u_hover'].map(k=>[k,gl.getUniformLocation(program,k)]));
   button.dataset.renderer='webgl2';return true;
  }catch(error){button.dataset.renderer='fallback';if(program)gl.deleteProgram(program);if(buffer)gl.deleteBuffer(buffer);return false;}
  finally{shaders.forEach(s=>gl.deleteShader(s));}
 }
 function schedule(){if(!raf&&!lost&&visible&&!document.hidden)raf=requestAnimationFrame(draw);}
 function draw(now){
  raf=0;if(lost||!visible||document.hidden){previous=0;return;}
  const dt=previous?Math.min((now-previous)/1000,.05):1/60;previous=now;
  const target=+button.matches(':hover,:focus-visible');hover=reduced.matches?target:hover+(target-hover)*(1-Math.exp(-dt*7));
  if(!reduced.matches)time+=dt;
  const ratio=Math.min(Math.max(devicePixelRatio||1,2),3),w=Math.max(1,Math.round(surface.clientWidth*ratio)),h=Math.max(1,Math.round(surface.clientHeight*ratio));
  if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;}
  gl.viewport(0,0,w,h);gl.uniform2f(uniforms.u_resolution,w,h);gl.uniform1f(uniforms.u_time,time);gl.uniform1f(uniforms.u_pixelRatio,ratio);gl.uniform1f(uniforms.u_hover,hover);gl.drawArrays(gl.TRIANGLES,0,6);
  if(!reduced.matches)schedule();
 }
 if(!setup()){gl.getExtension('WEBGL_lose_context')?.loseContext();return;}
 surface.append(canvas);
 const intersection=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;previous=0;schedule();});intersection.observe(button);
 new ResizeObserver(schedule).observe(surface);
 for(const event of ['pointerenter','pointerleave','focus','blur'])button.addEventListener(event,schedule);
 document.addEventListener('visibilitychange',()=>{previous=0;schedule();});reduced.addEventListener('change',()=>{previous=0;schedule();});
 canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();lost=true;cancelAnimationFrame(raf);raf=0;canvas.style.visibility='hidden';button.dataset.renderer='fallback';});
 canvas.addEventListener('webglcontextrestored',()=>{lost=!setup();if(!lost){canvas.style.visibility='';previous=0;schedule();}});
 schedule();
});
})();

function isMobile(){
  return navigator.maxTouchPoints>=0 && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

}
   

if(isMobile()==false){

  window.open('https://breakersneaker.github.io/portfolio/');
  close();
}
 
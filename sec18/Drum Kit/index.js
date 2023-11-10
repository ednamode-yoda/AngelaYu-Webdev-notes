var src=['sounds/tom-1.mp3','sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3','sounds/snare.mp3','sounds/crash.mp3','sounds/kick-bass.mp3'];
document.querySelectorAll(".set button").forEach(function(btn,idx){
    btn.addEventListener('click',function(){
        animate(btn.innerHTML);
        var audio=new Audio(src[idx]);
        audio.play();
    });
});
document.addEventListener('keydown',function(event){
  animate(event.key); 
  switch(event.key){
    case 'w':
      var tom1 = new Audio ('sounds/tom-1.mp3')
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio ('sounds/tom-2.mp3')
        tom2.play();
        break;

    case 's':
      var tom3 = new Audio ('sounds/tom-3.mp3')
          tom3.play();
          break;
    case 'd':
      var tom4 = new Audio ('sounds/tom-4.mp3')
            tom4.play();
            break;

    case 'j':
      var snare = new Audio ('sounds/snare.mp3')
              snare.play();
              break;
             
    case 'k':
       var crash = new Audio ('sounds/crash.mp3')
                crash.play();
                break;

    case 'l':
      var kickBass = new Audio ('sounds/kick-bass.mp3')
                  kickBass.play();
                  break;

}

});
/*
document.addEventListener('keydown',function(event){
    console.log(event.key);
    switch(event.key){
         case 'w':
           var tom1 = new Audio ('sounds/tom-1.mp3')
           tom1.play();
           break;
 
         case 'a':
           var tom2 = new Audio ('sounds/tom-2.mp3')
             tom2.play();
             break;
 
         case 's':
           var tom3 = new Audio ('sounds/tom-3.mp3')
               tom3.play();
               break;
         case 'd':
           var tom4 = new Audio ('sounds/tom-4.mp3')
                 tom4.play();
                 break;
 
         case 'j':
           var snare = new Audio ('sounds/snare.mp3')
                   snare.play();
                   break;
                  
         case 'k':
            var crash = new Audio ('sounds/crash.mp3')
                     crash.play();
                     break;
 
         case 'l':
           var kickBass = new Audio ('sounds/kick-bass.mp3')
                       kickBass.play();
                       break;

    }
});*/
// var numberOfDrumButton = document.querySelectorAll(".set button");
// for (var i = 0;i < numberOfDrumButton.length; i++){
//     numberOfDrumButton[i].addEventListener("click" , function ()
//      {
//       var buttonHTML = this.innerHTML;
 
//       switch(buttonHTML){
 
//         case 'w':
//           var tom1 = new Audio ('sounds/tom-1.mp3')
//           tom1.play();
//           break;
 
//         case 'a':
//           var tom2 = new Audio ('sounds/tom-2.mp3')
//             tom2.play();
//             break;
 
//         case 's':
//           var tom3 = new Audio ('sounds/tom-3.mp3')
//               tom3.play();
//               break;
 
//         case 'd':
//           var tom4 = new Audio ('sounds/tom-4.mp3')
//                 tom4.play();
//                 break;
 
//         case 'j':
//           var snare = new Audio ('sounds/snare.mp3')
//                   snare.play();
//                   break;
                  
//         case 'k':
//            var crash = new Audio ('sounds/crash.mp3')
//                     crash.play();
//                     break;
 
//         case 'l':
//           var kickBass = new Audio ('sounds/kick-bass.mp3')
//                       kickBass.play();
//                       break;
 
//       }
 
// })}

function animate(ele){
  var curbtn=document.querySelector('.'+ele);
  curbtn.classList.add('pressed');
  setTimeout(()=>curbtn.classList.remove('pressed'),150);
}
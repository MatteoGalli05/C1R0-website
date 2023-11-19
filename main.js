
var elements_to_watch = document.querySelectorAll('.watch');
var elements_to_edit = document.querySelectorAll('.element');

var callback = function(items){
  items.forEach((item) => {
    if(item.isIntersecting){
      
    }
  });
}
// observer
var observer = new IntersectionObserver(callback, { threshold: 0.1 } );
// apply
elements_to_watch.forEach((element) => {
  observer.observe(element); 
});
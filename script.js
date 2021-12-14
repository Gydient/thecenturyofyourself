$(document).ready(function(){

  console.log('Ready!');

  $(document).on('click', 'button',function(){
     window.print();
  });

  function changeHeads() {
    $('img').each(function(index){
      var tmpTop = Math.floor((Math.random() * ($(window).height() - 50) + 1))
      var tmpLeft = Math.floor((Math.random() * ($(window).width() - 50) + 1))
      var randWidth = 100 + Math.floor((Math.random()*Math.floor(300)))
      var speed = 1 + Math.floor((Math.random()*Math.floor(2)))
      $(this).css({
        top: tmpTop+"px",
        right: tmpLeft+"px",
        width: randWidth,
        height: randWidth,
        animation: "float "+speed+"s ease-in-out infinite,"
      })
    })
  }

  changeHeads()

  $(document).on('click', '*:not([type="button"])',function(){
    changeHeads()
  });
});

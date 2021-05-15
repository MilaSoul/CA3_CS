
       // using the the file as there some duplications in thr code

$('.carousel').carousel('cycle');

$('#tbInterval').change(function() { // intrvals to slide pic
    const val = parseInt($(this).val()); // convert into int
    console.log(`new interval: ${val}`); 
    $('.carousel').carousel('dispose');
    $('.carousel').carousel({ interval: val }); 
    $('#btnStart').hide(); // hide btn
    $('#btnPause').show();      // show button            
});

$('#btnPause').click(() => {                 
   $('.carousel').carousel('pause');  //to stop slides          
   $('#btnStart').show();// show button
   $('#btnPause').hide();//hide button
});

$('#btnStart').click(() => {
   $('.carousel').carousel('cycle');// restart cycle
   $('#btnStart').hide();// hide bitton
   $('#btnPause').show();// show button
});


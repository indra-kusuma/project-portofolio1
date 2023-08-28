// event pada saat di click
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    // target elemen ybs
    var elemenTujuan = $(tujuan);

    // pindahkanscroll
   $('html').animate({
    scrollTop: elemenTujuan.offset().top - 50
   }, 1000, 'easeInOutExpo');

   e.preventDefault();

});
$( document ).ready(function() {
  $( '#full' ).sliderPro({
    width: '100%',//横幅
   
    buttons: false,//ナビゲーションボタン
    slideDistance:0,//スライド同士の距離
    aspectRatio: 1.5,//スライドのアスペクト比
    forceSize: 'fullWindow',//ウィンドウ内全画面表示
    fade: true,　// フェードインアウト
    breakpoints: {
      480: {//表示方法を変えるサイズ
         width: '100%',//横幅
         aspectRatio: -1,//スライドのアスペクト比
    　　forceSize: 'none',//ウィンドウ内全画面表示
      }
    } 
    
  });
});


 $(function(){
    $(document).ready(function(){

      $(".sp_navi_btn").click(function () {
        $(".sp_navi_li").slideToggle();
      });

    });
    $(".close").click(function(){
        $(".sp_navi_li").slideToggle();
    });
  });
  
 new WOW().init();

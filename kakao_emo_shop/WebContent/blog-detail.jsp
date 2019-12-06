<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Home 02</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
<link rel="icon" type="image/png" href="images/icons/favicon.png" />
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="fonts/iconic/css/material-design-iconic-font.min.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="fonts/linearicons-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="vendor/select2/select2.min.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css" href="vendor/slick/slick.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="vendor/MagnificPopup/magnific-popup.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="vendor/perfect-scrollbar/perfect-scrollbar.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css" href="css/util.css">
<link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->
</head>
<body class="animsition">

	<!-- Header -->
	<header class="header-v2">
		<!-- Header desktop -->
		<div class="container-menu-desktop trans-03">
			<div class="wrap-menu-desktop">


				<nav class="limiter-menu-desktop p-l-45">

					<!-- Logo desktop -->
					<a href="#" class="logo"> <img src="images/icons/kakaoicon.jpg"
						alt="IMG-LOGO">
					</a>


					<!-- Menu desktop -->
					<div class="menu-desktop">
						<ul class="main-menu">
							<li class="on #nav_home"><a href="emo_Main.jsp"
								class="link_gnb link_gnb1">홈<span
									class="animate_line"></span></a></li>
							<li class=" #nav_new"><a href="emo_Best.jsp"
								class="link_gnb link_gnb2">인기<span class="animate_line"></span></a></li>
							<li class=" #nav_hot"><a href="emo_Style.jsp"
								class="link_gnb link_gnb3">스타일<span class="animate_line"></span></a></li>
							<li class=" #nav_hot"><a href="blog.jsp"
								class="link_gnb link_gnb3"><b><u>공지 사항</u></b><span class="animate_line"></span></a></li>
					</div>

					<!-- Icon header -->

					<div class="wrap-icon-header flex-w flex-r-m h-full">

						
						<!-- 로그인 -->
						<a href="login.jsp">Log In </a>
						<div class="flex-c-m h-full p-r-24">
							<div
								class="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-modal-search">
								<i class="zmdi zmdi-search"></i>
							</div>
						</div>

						<div class="flex-c-m h-full p-l-18 p-r-25 bor5">
							<li class=" #nav_hot"><a href="product-buycart.jsp"
								class="link_gnb link_gnb3"><b><u>Cart</u></b><span
									class="animate_line"></span></a></li>
						</div>
					</div>
			</div>
			</nav>
		</div>
		</div>

		<!-- Header Mobile -->
		<div class="wrap-header-mobile">
			<!-- Logo moblie -->
			<div class="logo-mobile">
				<a href="index.html"><img src="images/icons/kakaoicon.jpg"
					alt="IMG-LOGO"></a>
			</div>

			<!-- Icon header -->
			<div class="wrap-icon-header flex-w flex-r-m h-full m-r-15">
				<div class="flex-c-m h-full p-r-10">
					<div
						class="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-modal-search">
						<i class="zmdi zmdi-search"></i>
					</div>
				</div>

				<div class="flex-c-m h-full p-lr-10 bor5">
					<div
						class="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart"
						data-notify="2">
						<i class="zmdi zmdi-shopping-cart"></i>
					</div>
				</div>
			</div>

			<!-- Button show menu -->
			<div class="btn-show-menu-mobile hamburger hamburger--squeeze">
				<span class="hamburger-box"> <span class="hamburger-inner"></span>
				</span>
			</div>
		</div>






		<!-- Modal Search -->
		<div
			class="modal-search-header flex-c-m trans-04 js-hide-modal-search">
			<div class="container-search-header">
				<button
					class="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
					<img src="images/icons/icon-close2.png" alt="CLOSE">
				</button>

				<form class="wrap-search-header flex-w p-l-15">
					<button class="flex-c-m trans-04">
						<i class="zmdi zmdi-search"></i>
					</button>
					<input class="plh3" type="text" name="search"
						placeholder="Search...">
				</form>
			</div>
		</div>
	</header>

	<!-- Title page -->
	<section class="bg-img1 txt-center p-lr-15 p-tb-92" style="background-image: url('images/icons/공지사항.png');">
		<h2 class="ltext-105 cl0 txt-center">
			
		</h2>
	</section>	
<div id="cMain" align="center" class="emoticon_main">
    <div id="mArticle">
      <h2 id="dkBody" class="tit_comm tit_notice">공지사항</h2>
      <div class="section_cont notice_detail">
        <div class="tit_detail">
          <h3 class="tit_board">[공지] 휴대폰 간편결제 서비스 종료 안내</h3>
          <span class="item_sub date_upload">2018.09.19</span>
        </div>
        <div class="desc_notice">
          <p>안녕하세요. 카카오 이모티콘샵 입니다.&nbsp;</p><p><br></p><p>항상 카카오 이모티콘샵을 이용해주셔서 감사드립니다.&nbsp;</p><p>이모티콘샵에서 제공하던 ‘휴대폰 간편결제’ 서비스가 아래와 같이 종료될 예정이오니 이용에 참고 부탁드립니다.</p><p><br></p><p>■ 휴대폰 간편결제 서비스 종료 일정</p><p>1. 내용 : 휴대폰 간편결제 서비스 종료&nbsp;</p><p>2. 종료일자 : 2018년 9월 28일 (금)</p><p><br></p><p>앞으로도 더 좋은 서비스를 제공하기 위해 노력하겠습니다.</p><p>감사합니다.</p><p><br></p>
        </div>
      </div>
      <div class="paging_comm2">
        <span class="inner_paging">
            <span class="ico_comm link_prev">이전</span>
        <a href="/notices" class="link_list">목록</a>
            <a href="/notices/27" class="ico_comm link_next">다음</a>
        </span>
      </div>
    </div>
    <!--// mArticle -->
  </div>





































	<!-- Slider -->
	

	<!-- Footer -->
<footer class="bg3 p-t-75 p-b-32">
		<div class="container">
<div data-react-class="ScrollTop" data-react-props="{}"><div><div style="position: fixed; bottom: 50px; right: 30px; cursor: pointer; transition: opacity 0.2s linear 0s, visibility; opacity: 0; visibility: hidden;"><button class="sc-bsbRJL YUAgY"><span class="sc-hZSUBg LaeNH">TOP</span></button></div></div></div>
      <hr class="hide">
        <div id="dkFoot" class="footer_comm " role="contentinfo">
    <div class="inner_footer">
      <h2 class="screen_out">김천희 컴퍼니 이용정보</h2>
      <div class="footer_link">
        <a href="/main/faq" target="_blank" class="link_info">자주묻는 질문</a>
        <span class="txt_bar">|</span>
        <a href="https://cs.kakao.com/requests?category=278&amp;locale=ko&amp;node=30555&amp;service=94" target="_blank" class="link_info">문의하기</a>
        <span class="txt_bar">|</span>
        <a href="https://web.payments.kakao.com/v1/service_terms" target="_blank" class="link_info">유료이용약관</a>
        <span class="txt_bar">|</span>
        <a href="https://www.kakao.com/policy/privacy" target="_blank" class="link_info">개인정보취급방침</a>
      </div>
      <em class="emph_info">카카오 이모티콘 스토어에서 판매되는 콘텐츠의 저작권은 제공처에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 처벌될 수 있습니다.<br>
        상호: 주식회사 카카오, <span class="txt_leader">대표자: 여민수, 조수용,</span> <span class="txt_num">사업자등록번호: 120-81-47521,</span> <a href="#none" target="blank" onclick="onopen(event);" style="padding-right:9px;text-decoration:underline;text-decoration-color:#666;">사업자정보 확인</a> 통신판매업신고번호: 제2012-제주아라-0011호</em>
      <address class="txt_address">
        호스팅제공자: (주)카카오, 주소 : 제주특별자치도 제주시 첨단로 242(영평동), 고객센터 : 1577-3754
      </address>
      <small class="txt_copyright"><a href="https://www.kakaocorp.com" target="_blank" class="link_info">© kakao Corp.</a></small>
  
    </div>
	</footer>



	<!-- Back to top -->
	<div class="btn-back-to-top" id="myBtn">
		<span class="symbol-btn-back-to-top">
			<i class="zmdi zmdi-chevron-up"></i>
		</span>
	</div>

<!--===============================================================================================-->	
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
	<script>
		$(".js-select2").each(function(){
			$(this).select2({
				minimumResultsForSearch: 20,
				dropdownParent: $(this).next('.dropDownSelect2')
			});
		})
	</script>
<!--===============================================================================================-->
	<script src="vendor/MagnificPopup/jquery.magnific-popup.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/perfect-scrollbar/perfect-scrollbar.min.js"></script>
	<script>
		$('.js-pscroll').each(function(){
			$(this).css('position','relative');
			$(this).css('overflow','hidden');
			var ps = new PerfectScrollbar(this, {
				wheelSpeed: 1,
				scrollingThreshold: 1000,
				wheelPropagation: false,
			});

			$(window).on('resize', function(){
				ps.update();
			})
		});
	</script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>

</body>
</html>

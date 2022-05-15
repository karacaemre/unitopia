class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
        <div class="bg-top navbar-light">
		<div class="container">
			<div class="row no-gutters d-flex align-items-center align-items-stretch">
				<div class="col-md-4 d-flex align-items-center py-4">
					<a class="navbar-brand" href="index.html">Unitopia <span>Utopian University</span></a>
				</div>
				<div class="col-lg-8 d-flex align-items-center py-4" style="justify-content:right">
						<form class="form-inline">
							<div class="form-group mb-2">
								<label for="exampleFormControlInput1"> </label>
								<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Adresiniz">
							</div>
							<div class="form-group mx-sm-3 mb-2">
								<label for="inputPassword2" class="sr-only">parola</label>
								<input type="password" class="form-control" id="inputPassword2" placeholder="Parola">
							</div>
							<button type="submit" class="btn btn-primary mb-2">Giriş Yap</button>
						</form>
				</div>
			</div>
		</div>
	</div>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
		<div class="container d-flex align-items-center px-4">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
				aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="oi oi-menu"></span> Menu
			</button>
			<form action="#" class="searchform order-lg-last">
				<div class="form-group d-flex">
					<input type="text" class="form-control pl-3" placeholder="Site içinde ara">
					<button type="submit" placeholder="" class="form-control search"><span
							class="ion-ios-search"></span></button>
				</div>
			</form>
			<div class="collapse navbar-collapse" id="ftco-nav">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item"><a href="index.html" class="nav-link pl-0">Anasayfa</a></li>
					<li class="nav-item"><a href="about.html" class="nav-link">Hakkımızda</a></li>

					<li class="dropdown nav-item">
						<a class="nav-link dropdown-toggle" id="dropdownMenuButton" role="button" data-toggle="dropdown"
							aria-haspopup="true" aria-expanded="false" data-mdb-toggle="dropdown" aria-expanded="false">
							Akademik
						</a>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a class="dropdown-item" href="construction.html">Enstitüler</a>
							<a class="dropdown-item" href="construction.html">Yüksekokullar</a>
							<li>
								<a class="dropdown-item" href="faculties.html">
									Fakülteler &raquo;
								</a>
								<ul class="dropdown-menu dropdown-submenu">
									<li>
										<a class="dropdown-item">Mühendislik Fakültes &raquo; </a>
										<ul class="dropdown-menu dropdown-submenu">
											<li>
												<a class="dropdown-item" href="construction.html">Bilgisayar</a>
											</li>
											<li>
												<a class="dropdown-item" href="construction.html">Elektrik Elektronik</a>
											</li>
											<li>
												<a class="dropdown-item" href="construction.html">Makine</a>
											</li>
										</ul>
										
									</li>
									<li>
										<a class="dropdown-item">Tıp Fakültesi &raquo; </a>
										<ul class="dropdown-menu dropdown-submenu">
											<li>
												<a class="dropdown-item" href="tipfak.html">Tıp</a>
											</li>
										</ul>
										
									</li>
								</ul>
							</li>
							<a class="dropdown-item" href="teacher.html">Akademik Kadro</a>
						</ul>
					</li>


					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
							data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Öğrenci
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a class="dropdown-item" href="student-clubs.html">Öğrenci Kulüpleri</a>
							<a class="dropdown-item" href="yemekhane.html">Yemekhane</a>
							<a class="dropdown-item" href="construction.html">Aday Öğrenci</a>

						</div>
					</li>
					<li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
					<li class="nav-item"><a href="contact.html" class="nav-link">İletişim</a></li>

					<!-- <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li> -->
				</ul>
			</div>
		</div>
	</nav>
        `
    }
}
customElements.define('my-header', MyHeader)

/*-----------*/

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
            <footer class="ftco-footer ftco-bg-dark ftco-section">
            <div class="container">
              <div class="row mb-5">
                <div class="col-md-8 col-lg-4">
                  <div class="ftco-footer-widget mb-5">
                      <h2 class="ftco-heading-2">İletişim Bilgilerimiz</h2>
                      <div class="block-23 mb-3">
                        <ul>
                          <li><span class="icon icon-map-marker"></span><span class="text">Ütopya</span></li>
                          <li><span class="icon icon-phone"></span><span class="text">+90 (123) 456 78 90</span></li>
                          <li><a href="#"><span class="icon icon-envelope"></span><span class="text">info@unitopia.edu.tr</span></a></li>
                        </ul>
                      </div>
                  </div>
                </div>
                <div class="col-md-8 col-lg-4">
                  <div class="ftco-footer-widget mb-5 ml-md-4">
                    <h2 class="ftco-heading-2">Bağlantılarımız</h2>
                    <ul class="list-unstyled">
                      <li><a href="index.html"><span class="ion-ios-arrow-round-forward mr-2"></span>Anasayfa</a></li>
                      <li><a href="about.html"><span class="ion-ios-arrow-round-forward mr-2"></span>Hakkımızda</a></li>
                      <li><a href="faculties.html"><span class="ion-ios-arrow-round-forward mr-2"></span>Fakülteler</a></li>
                      <li><a href="yemekhane.html"><span class="ion-ios-arrow-round-forward mr-2"></span>Yemekhane</a></li>
					  <li><a href="blog.html"><span class="ion-ios-arrow-round-forward mr-2"></span>Blog</a></li>
                      <li><a href="contact.html"><span class="ion-ios-arrow-round-forward mr-2"></span>İletişim</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-8 col-lg-4">
                  <div class="ftco-footer-widget mb-5">
                      <h2 class="ftco-heading-2 mb-0">Bizi Takip Edin!</h2>
                      <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                      <li class="ftco-animate"><a href=#><span class="icon-twitter"></span></a></li>
                      <li class="ftco-animate"><a href=#><span class="icon-facebook"></span></a></li>
                      <li class="ftco-animate"><a href=#><span class="icon-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 text-center">

                  <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
                </div>
              </div>
            </div>
          </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)
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

					<li class="dropdown nav-item active">
						<a class="nav-link dropdown-toggle" id="dropdownMenuButton" role="button" data-toggle="dropdown"
							aria-haspopup="true" aria-expanded="false" data-mdb-toggle="dropdown" aria-expanded="false">
							Akademik
						</a>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a class="dropdown-item" href="courses.html">AKADEMİK</a>
							<a class="dropdown-item" href="#">Enstitüler</a>
							<a class="dropdown-item" href="#">Yüksekokullar</a>
							<li>
								<a class="dropdown-item" href="#">
									Fakülteler &raquo;
								</a>
								<ul class="dropdown-menu dropdown-submenu">
									<li>
										<a class="dropdown-item" href="#">blabla</a>
									</li>
									<li>
										<a class="dropdown-item" href="#">bla bla</a>
									</li>
									<li>
										<a class="dropdown-item" href="#">Mühendislik Fak &raquo; </a>
										<ul class="dropdown-menu dropdown-submenu">
											<li>
												<a class="dropdown-item" href="bolum.html">Bilgisayar</a>
											</li>
											<li>
												<a class="dropdown-item" href="#">Elektrik Elektronik</a>
											</li>
											<li>
												<a class="dropdown-item" href="#">Makine</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</li>


					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
							data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Öğrenci
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a class="dropdown-item" href="teacher.html">ÖĞRENCİ</a>
							<a class="dropdown-item" href="#">Öğrenci Kulüpleri</a>
							<a class="dropdown-item" href="#">Yemekhane</a>
							<a class="dropdown-item" href="#">Bölümler</a>
							<a class="dropdown-item" href="#">Aday Öğrenci</a>

						</div>
					</li>

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
                <div class="col-md-6 col-lg-3">
                  <div class="ftco-footer-widget mb-5">
                      <h2 class="ftco-heading-2">Have a Questions?</h2>
                      <div class="block-23 mb-3">
                        <ul>
                          <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                          <li><a href="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></a></li>
                          <li><a href="#"><span class="icon icon-envelope"></span><span class="text">info@yourdomain.com</span></a></li>
                        </ul>
                      </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="ftco-footer-widget mb-5">
                    <h2 class="ftco-heading-2">Recent Blog</h2>
                    <div class="block-21 mb-4 d-flex">
                      <a class="blog-img mr-4" style="background-image: url(images/image_1.jpg);"></a>
                      <div class="text">
                        <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                        <div class="meta">
                          <div><a href="#"><span class="icon-calendar"></span> June 27, 2019</a></div>
                          <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                          <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                        </div>
                      </div>
                    </div>
                    <div class="block-21 mb-5 d-flex">
                      <a class="blog-img mr-4" style="background-image: url(images/image_2.jpg);"></a>
                      <div class="text">
                        <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                        <div class="meta">
                          <div><a href="#"><span class="icon-calendar"></span> June 27, 2019</a></div>
                          <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                          <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="ftco-footer-widget mb-5 ml-md-4">
                    <h2 class="ftco-heading-2">Links</h2>
                    <ul class="list-unstyled">
                      <li><a href="#"><span class="ion-ios-arrow-round-forward mr-2"></span>Home</a></li>
                      <li><a href="#"><span class="ion-ios-arrow-round-forward mr-2"></span>About</a></li>
                      <li><a href="#"><span class="ion-ios-arrow-round-forward mr-2"></span>Services</a></li>
                      <li><a href="#"><span class="ion-ios-arrow-round-forward mr-2"></span>Deparments</a></li>
                      <li><a href="#"><span class="ion-ios-arrow-round-forward mr-2"></span>Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="ftco-footer-widget mb-5">
                      <h2 class="ftco-heading-2">Subscribe Us!</h2>
                    <form action="#" class="subscribe-form">
                      <div class="form-group">
                        <input type="text" class="form-control mb-2 text-center" placeholder="Enter email address">
                        <input type="submit" value="Subscribe" class="form-control submit px-3">
                      </div>
                    </form>
                  </div>
                  <div class="ftco-footer-widget mb-5">
                      <h2 class="ftco-heading-2 mb-0">Connect With Us</h2>
                      <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                      <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                      <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                      <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
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

import featured from "./js/featured.js";
import latest from "./js/latest.js";
import review from "./js/review.js";
// import review from

$(document).ready(function () {
  // Toggle Navbar Menu
  if ($(window).width() < 800) {
    var show = false;
    $("#menuItems").hide();
    $("#menuicon").click(function () {
      if (show) {
        $("#menuItems").hide();
        show = false;
      } else {
        show = true;
        $("#menuItems").show();
      }
    });
    // End of toggle navbar menu
  }
  //featured rendering

  function renderFeatured() {
    var container = $("#featured_products");
    container.empty();
    featured.forEach((product) => {
      var productHtml = `<div class="col-4">
      <img src=${product.img} alt="" />
      <h4>${product.title}</h4>
      <div class="rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
      </div>
      <p>${product.price} / <span class="lastprice">${product.lastPrice}</span></p>
    </div>`;

      container.append(productHtml);
    });
  }
  renderFeatured();
  //end of featured rendering

  //latest rendering

  function renderLatest() {
    var container = $("#latest_products");
    container.empty();
    latest.forEach((product) => {
      var productHtml = `<div class="col-4">
      <img src=${product.img} alt="" />
      <h4>${product.title}</h4>
      <div class="rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
      </div>
      <p>${product.price} / <span class="lastprice">${product.lastPrice}</span></p>
    </div>`;

      container.append(productHtml);
    });
  }
  renderLatest();
  //end of latest rendering

  //reviews rendering
  function renderReviews() {
    var container = $("#testimonials");
    container.empty();

    review.forEach((review) => {
      var reviewHtml = `<div class="col-3">
      <i class="fas fa-quote-left quoteicon"></i>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
        <i class="far fa-star"></i>
      </div>
      <img src=${review.img} alt="Our User" />
      <h3>${review.name}</h3>
    </div>`;

      container.append(reviewHtml);
    });
  }
  renderReviews();
  //end of latest rendering
});

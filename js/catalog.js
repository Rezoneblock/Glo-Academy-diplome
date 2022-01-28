$('document').ready(function() {
  loadGoods();
});

// Загрузка товара на страницу
function loadGoods() {
  $.getJSON('goods.json', function(data) {
    var out = '';
    for (var key in data) {
      let name = data[key]['name'],
          cost = data[key]['cost'],
          category = data[key]['category'],
          image = data[key]['image'];
      out+= `<div class="product"  onclick="window.location.href = 'http://gordeevtimur.ru/bmsuniform/product.html'">
              <div class="product__image">
                <span class="product__image-hover product__image-hover-first"><i class="far fa-heart"></i></span>
                <span class="product__image-hover product__image-hover-second"><i class="fas fa-plus-circle"></i></span>
                <img src="${image}" alt="">
              </div>
              <ul class="product__description">
                <li class="product__name"> <a href="#" class="product__link">${name}</a></li>
                <li class="product__type"> <a href="#" class="product__link">${category}</a></li>
                <li class="product__rate">
                  <input type="radio" name="star" id="star1"><label for="star1"></label>
                  <input type="radio" name="star" id="star2"><label for="star2"></label>
                  <input type="radio" name="star" id="star3"><label for="star3"></label>
                  <input type="radio" name="star" id="star4"><label for="star4"></label>
                  <input type="radio" name="star" id="star5"><label for="star5"></label>
                </li>
                <li class="product__price">
                  <span class="product__cost">${cost} <span class="product__naminal">руб.</span></span>
                  <span class="product__add-to-cart"><i class="fas fa-plus"></i></span>
                </li>
              </ul>
            </div>`;
    }
    $('.catalog-settings').html(out);
  })

function init() {
  $.post(
    "core.php",
    {
      "action" : "init"
    },
    showGoods()
  );
}

function showGoods(data) {
  console.log(data);
}

$('document').ready(function() {
  init();
})
}
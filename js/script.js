// Define an array to store the items in the cart
var cart = [];

// When the page is loaded
$(document).ready(function() {

  // Add a click event listener to the Buy buttons
  $('.buy-btn').click(function() {

    // Get the ID of the clicked button
    var id = $(this).attr('id');

    // Find the corresponding picture element
    var picture = $('#'+ id).parent();

    // Add the item to the cart array

    cart.push({
      id: id,
      name: picture.find('h2').text(),
      price: parseFloat(picture.find('p').text().replace('Price: $', '')),
      img : picture.find('img').attr("src")
    });

    // Update the cart UI
    updateCart();

  });

  // Add a click event listener to the Pay button
  $('#pay-btn').click(function() {
    for(let i = 0; i < cart.length; i++ ){
        let v = $("#"+cart[i].id).parent().attr('class');
        $("."+v).remove();
    }
    // Remove the pictures from the website

    // Clear the cart array
    cart = [];

    // Update the cart UI
    updateCart();

  });

});

// Update the cart UI
function updateCart() {

  // Find the cart list element
  var cartList = $('.cart-list');

  // Clear the cart list
  cartList.empty();

  // Loop through the items in the cart array
  for (var i = 0; i < cart.length; i++) {

    // Create a new cart item element
    var cartItem = $('<li class="cart-item"></li>');

    // Add the name and price of the item
    cartItem.append('<span>' + cart[i].name + '</span>');
    cartItem.append('<span>$' + cart[i].price + '</span>');
    cartItem.append('<img src='+ cart[i].img +' style= "width:50px ; height:50px;"></img>');
    // Add the cart item to the cart list
    cartList.append(cartItem);

  }

}


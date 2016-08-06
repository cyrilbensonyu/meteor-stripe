Template.cartShow.helpers({
    cart : function(){
        currentCart = Carts.getCart(userKey);
        return currentCart;
    },
    thereAreNo : function(items){
        return items.length == 0;
    }
});

Template.cartShow.events({
    timer : '',

    "click .remove-from-cart" : function(ev){
        ev.preventDefault();
        removeFromCart(this.sku, function(err,res){
            if(err){
                console.log(err);
            }else{
            //any items left?
                if(currentCart.items.length === 0){
                    Router.go("homeIndex");
                }
            }
        });
  },

    "input .item-qty" : function(ev){
        var ms = 1000,
            _this = this,
            rawValue = $(ev.currentTarget).val();;

        clearTimeout(self.timer);

        self.timer = setTimeout(function() {

        if(!isNaN(rawValue)){
            var newQty = parseInt(rawValue);
            var name = _this.name;

            if(newQty === 0){
                removeFromCart(_this.sku);
            }else {
                _this.quantity = parseInt(newQty);

                updateCart(_this.sku, _this.quantity, function (err, res) {
                    
                if (err) {
                    //console.log(err);
                    sAlert.error(err);
                } else {
                    //alert(name + " updated");
                    sAlert.success(name + " updated");
                }
            });
        }

            //just to be sure
            $(ev.currentTarget).val(newQty);
        }else{
            sAlert.error("That's not a number...");
        }

    }, ms);
  }
});
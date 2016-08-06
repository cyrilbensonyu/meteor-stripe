Meteor.startup(function(){

    var Repo = function(){
    
        this.saveCheckout = function(checkout){
            var lastInserted = Checkouts.insert(checkout, function(err,res){
                if(err){
                    console.log(err);
                }else{
                console.log("Thank you for your purchase! ");
                }
            });

          var checkout = Checkouts.findOne({_id: lastInserted});
          return checkout;
        };

        this.getReceipt = function(reference_key){
            var result = Checkouts.findOne({reference_key : reference_key});
            return result;
        };

        this.removeCheckout = function(reference_key){
            var removed = Checkouts.remove({reference_key : reference_key}, done);
            return removed;
        };

    };
  
    SalesRepo = new Repo();
});
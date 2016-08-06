receiptData = new Blaze.ReactiveVar();
Template.receiptShow.helpers({
  	receipt : function(){
    	return receiptData.get();
  	}
});

Template.receiptShow.onRendered(function(){
  	getReceipt(this.data.id, function(err,res){
    	receiptData.set(res);
  	});
});
/**
 * made by hojun jung 
 */
(function(){
var Array = null;
var HSdataConfigrations = {
	HSInit : function(data) 
	{
		data = Marth.random(data);
		return data;
	},
	HSpoint : function() 
	{
		for (var i = 0; i < this.createArray.length; i++) {
			this.createArray().push(i, this.data);
			if(this.createArray()==-1)break;
			seachPoint(i);
			console.log("pushData" + this.createArray(i, i));
		}
	},
	createArray : function() 
	{
		for (var i = 0; i < this.data.length; i++) {
			Array = new Array();
			console.log("made arrays count" + Array);
			if (this.data.length == -1)
				break;
		}
		return Array;
	},
	seachPoint : function(i) 
	{
		var seach;
		do {
			if(Marth.random(this.createArray(i,this.data))==this.data){
				continue;
			}
		} while (Marth.random(this.createArray(i,this.data))!=-1);
	},result : function(){
		console.log("results : "+this.createArray());
	}
};
});

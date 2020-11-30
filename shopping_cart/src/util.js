export default {
	formatCurrency: function(mynum){
		return '$' + Number(mynum.toFixed(2)).toLocaleString() + ' ';
	}
}

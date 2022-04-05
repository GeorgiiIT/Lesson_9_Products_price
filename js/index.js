const products = [
	['apple',10],
	['banana',8],
	['mango',20],
	['grape',18]
]
function getPrice(products, seasonFunc){
	let copiedProducts = JSON.parse( JSON.stringify(products));
	let sum;
		for(i=0, sum=0;i<copiedProducts.length;i++){
			
			if(seasonFunc){
				sum += seasonFunc(copiedProducts[i][1]);
			} else{
				sum += copiedProducts[i][1]
			}	
		}
		return sum;	
}
function summerValue(value){
	return value*0.8;	
}
function winterValue(value){
	return value*2;
}
console.log(getPrice(products, summerValue))
console.log(getPrice(products, winterValue))
console.log(getPrice(products))

























import { Stock } from "../../../types/stock"

function combineStockData(stock:any[], rtStock:any[]){
    let combineData : Stock[] = []
    // let combineStock = {}
    stock.forEach(data => {
        for(var i = 0 ; i < rtStock.length; i++){
            const rt = rtStock[i]
            if(data.codeName == rt.codeName){
                combineData.push(
                    Stock.parse({
                        accountId: data.accountId,
                        // amount: data.amount,
                        codeName: data.codeName,
                        code: rt.code,
                        createdAt: new Date(data.createdAt * 1000,),
                        // price: data.price,
                        zPrice: rt.ZPrice,
                        capital: rt.ZPrice*data.amount,
                        cost: data.price*data.amount,
                        pl: (rt.ZPrice - data.price)*data.amount,
                        plPercent: (rt.ZPrice - data.price)/data.price,
                    })
                )
            }
        }
    })
    console.log('look heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeere')
    console.log(combineData);
    return combineData;
}

export default combineStockData;
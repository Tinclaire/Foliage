import { Stock } from "../../../types/stock";

async function combineStockData(stock:any[], rtStock:any[]) : Promise<Stock[]>{
    // let combineStock = {}
    return new Promise((resolve, reject) => {
        if(stock!=null && rtStock!=null){
            let combineData : any[] = []
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
                                createdAt: new Date(data.createdAt),
                                // price: data.price,
                                zPrice: rt.zPrice,
                                capital: rt.zPrice*data.amount,
                                cost: data.price*data.amount,
                                pl: (rt.zPrice - data.price)*data.amount,
                                plPercent: (rt.zPrice - data.price)/data.price,
                            })
                        )
                    }
                }
            })
            console.log('look heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeere')
            console.log(combineData);
            resolve(combineData);
        } else {
            reject('stockData and rtStockData are null...')
        }
    })
}

export function totalPl(data:Stock[]) : number{
    let total = 0;
    data.forEach(d => {
        total += d.pl;
    })
    return Number(total.toFixed(2));
}

export function totalCapital(data:Stock[]) :number{
    let total = 0;
    data.forEach(d => {
        total += d.capital;
    })
    return total;
}

export function totalCost(data:Stock[]) :number{
    let total = 0;
    data.forEach(d => {
        total += d.cost;
    })
    return total;
}

export function totalPlPercent(data:Stock[]) :number{
    let capital = totalCapital(data);
    let cost = totalCost(data);
    return (capital - cost)/capital;
}

export default combineStockData;
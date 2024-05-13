import db from "../../../firestore/firestore";

async function readRtStock(codeName:string[]) {
    let currentStocks : any = [];
    // let currentStock = {
    //     codeName: '',
    //     code: '',
    //     zPrice: 0,
    // }
    let currentStock = {};
    return new Promise((resolve, reject) => {
        db.collection('rt_stock').doc('current_stock_data').onSnapshot(
            snapshot => {
                const data = snapshot.data()
                if(data != null) {
                    codeName.forEach(name => {
                        for(var i = 0; i < data.MsgArray.length; i++){
                            const stockData = data.MsgArray[i]
                            if(stockData.Name == name){
                                currentStocks.push(
                                    currentStock = {
                                        codeName: stockData.Name,
                                        code: stockData.Code,
                                        zPrice: stockData.ZPrice,
                                    }
                                )
                                console.log('this is rtStock:(((((((((((((((')
                                console.log(currentStock)
                                resolve(currentStocks)
                                return;
                            }else {
                                resolve(currentStocks)
                            }
                        }
                    })
                } else {
                    resolve(currentStocks)
                    return
                }
            }, error => {
                console.log(error)
                reject(error)
                return
            }
        )
    })
}

export default readRtStock
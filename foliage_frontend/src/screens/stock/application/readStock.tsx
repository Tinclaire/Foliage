import db from '../../../firestore/firestore';

async function readStock() {
    console.log('this is readStock function~~')
    let stocks : any = []
    let stock = {};
    return new Promise((resolve, reject) => {
        db.collection('stock').onSnapshot(
            snapshots => {
                if(!snapshots.empty) {
                    snapshots.forEach((snapshot) => {
                        const data = snapshot.data();
                        stocks.push(
                            stock = {
                                accountId: data.accountId,
                                amount: data.amount,
                                codeName: data.codeName,
                                createdAt: new Date(data.createdAt * 1000,),
                                price: data.price,
                            }
                            // Stock.parse({
                            //     accountId: data.accountId,
                            //     amount: data.amount,
                            //     codeName: data.codeName,
                            //     createdAt: new Date(data.createdAt * 1000,),
                            //     price: data.price,
                            // })
                        )
                    })
                    console.log(stocks);
                    resolve(stocks); // 回傳stock data
                    return;
                } else {
                    console.log('No such collection');
                    resolve(stocks); // 回傳空的
                    return;
                }
            },
            error => {
                console.error('Error reading stock collection:', error);
                reject(error);
                return;
            }
        );
    })

    // .then(docs => {
    //     if(!docs.empty) {
    //         docs.forEach((doc) => {
    //             const data = doc.data();
    //             stocks.push(
    //                 Stock.parse({
    //                     accountId: data.accountId,
    //                     amount: data.amount,
    //                     codeName: data.codeName,
    //                     createdAt: new Date(data.createdAt * 1000,),
    //                     price: data.price,
    //                 })
    //             )
    //         })
    //     } else {
    //         console.log('No such collection');
    //     }
    // })


    // console.log(stocks)
    // return stocks;
}
export default readStock
import db from '../../../firestore/firestore';
import { Stock } from '../../../types/stock';

async function readStock() {
    console.log('this is readStock function~~')
    const stocks : Stock[] = [] 
    return new Promise((resolve, reject) => {
        db.collection('stock').onSnapshot(
            snapshots => {
                if(!snapshots.empty) {
                    snapshots.forEach((snapshot) => {
                        const data = snapshot.data();
                        stocks.push(
                            Stock.parse({
                                accountId: data.accountId,
                                amount: data.amount,
                                codeName: data.codeName,
                                createdAt: new Date(data.createdAt * 1000,),
                                price: data.price,
                            })
                        )
                    })
                    console.log(stocks);
                    resolve(stocks); // 回傳stock data
                } else {
                    console.log('No such collection');
                    resolve(stocks); // 回傳空的
                }
            },
            error => {
                console.error('Error reading stock collection:', error);
                reject(error);
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
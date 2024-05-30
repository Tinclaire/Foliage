import db from '../../../firestore/firestore';

async function readStock() {
    console.log('this is readStock function~~')
    let stock = {};
    return new Promise((resolve, reject) => {
        db.collection('stock').onSnapshot(
            snapshots => {
                if(!snapshots.empty) {
                    const stocks : any = []
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
                        )
                    })
                    console.log(stocks);
                    resolve(stocks); // 回傳stock data
                    return;
                } else {
                    console.log('No such collection');
                    resolve([]); // 回傳空的
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
}
export default readStock
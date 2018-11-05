class IndexModule{
    constructor(ctx){
        this.ctx=ctx;
    }
    getdata(){
        return new Promise((resolve,rejects)=>{
            setTimeout(() => {
                resolve('the data');
            }, 1000);
        });
    }
}
export default IndexModule;
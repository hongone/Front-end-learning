class IndexModule{
    constructor(app){
        this.app=app;
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
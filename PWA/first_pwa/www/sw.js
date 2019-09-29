// 版本戳
const cacheName = '70-ce-v1';
//缓存资源列表
const filesToCache = [
    '/script/index.js',
    '/style/index.css',
    '/'
]
//加入缓存列表 强制进行更新
function updateStaticCaches(){
    // 全局变量caches
    return caches.open(cacheName)
    .then(function(cache){
        //把所有的缓存资源列表加载进去
        return cache.addAll(filesToCache);
    })
    .then(()=>{
        self.skipWaiting();
    })
}
self.addEventListener('install', (event)=> {
    // 装载缓存
    console.log('首次安装成功');
    event.waitUntil(updateStaticCaches())
})

self.addEventListener('activate', (event)=> {
    // 更新版本号
    console.log('激活成功');
    event.waitUntil(caches.keys().then(function(keyList){
        console.log(keyList)
        return Promise.all(keyList.map(function(key){
            if (key !== cacheName) {
                console.log('版本号不一致');
                return caches.delete(key);
            }
        }))
    }))
})
// 拦截到当前站点的全部请求
self.addEventListener('fetch', (event)=> {
    console.log('请求');
    // event.respondWith(new Response('Hello World'))
    console.log(event.request)
    event.respondWith(       
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    )

})

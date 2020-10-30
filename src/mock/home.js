const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据

const produceNewsData = function() {

    let list = [];

    for (let i = 0; i < 5; i++) {

        let newArticleObject = {

            title: Random.csentence(1, 5), //  Random.csentence( min, max )

            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码

        }
        list.push(newArticleObject)
    }
    return {
        code: 0,
        msg: "success",
        data: list
    }

}
// Mock.mock( url, post/get , 返回的数据)；

Mock.mock('/swiper/list', 'get', produceNewsData);
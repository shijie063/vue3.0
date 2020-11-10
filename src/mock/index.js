const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据

const swiperList = function() {
    let list = [];
    for (let i = 0; i < 5; i++) {
        let newArticleObject = {
            title: Random.csentence(4, 6), //  Random.csentence( min, max )
            url: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
        }
        list.push(newArticleObject)
    }
    return {
        code: 0,
        msg: "success",
        data: list
    }

}
 function getUrlParam(url, key) {
    if (!url) {
        let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i')
        let r = window.location.search.substr(1).match(reg)
        if (r != null) return r[2]
        return null
    } else {
        let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i')
        let split = url.split('?')
        if (split.length === 1) {
            return null
        } else {
            let r = split[1].match(reg)
            if (r != null) return r[2]
            return null
        }
    }
}

Mock.mock(RegExp('/lesson/list' + '.*'), 'get', options => {
    console.log(options);
    // 获取请求url内的数组长度参数
    let limit = parseInt(getUrlParam(options.url, 'limit'));  
    let mockMsg = {
        list: []
    };
    // 根据请求参数设定数组长度
    for (let i = 0; i < limit; i++) {
        let newArticleObject = {
            title: Random.csentence(1, 5),     
            price: Random.integer(60, 100),
            poster: Random.dataImage('25x25','')
        }
        mockMsg.list.push(newArticleObject);
      
    }
    return {
        code: 0,
        msg: "success",
        data: mockMsg
    }
  });
// Mock.mock( url, post/get , 返回的数据)；

Mock.mock('/swiper/list', 'get', swiperList);
// Mock.mock('/lesson/list', 'get', lessonList);
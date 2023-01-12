import request from './index'

export function indexSecond(){
    return request({
        url:'/index/second',
        method:'GET'
    })
}
export function indexThird(){
    return request({
        url:'/index/third',
        method:'GET'
    })
}
export function indexForth(){
    return request({
        url:'/index/forth',
        method:'GET'
    })
}
export function indexFifth(){
    return request({
        url:'/index/fifth',
        method:'GET'
    })
}
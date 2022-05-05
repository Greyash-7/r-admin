import request from '@/utils/request'

export function fetchUserData(categoryId, pageNum, pageSize) {
    // return request.get('https://api.github.com/users/woai3c')
    return request({
        url: '/products',
        method: 'get',
        params:{
            categoryId: categoryId,
            pageNum: pageNum,
            pageSize: pageSize
        },
    })
}

export function searchList(name, pageNum, pageSize) {
    // return request.get('https://api.github.com/users/woai3c')
    return request({
        url: '/products/detail',
        method: 'get',
        params:{
            name: name,
            pageNum: pageNum,
            pageSize: pageSize
        },
    })
}
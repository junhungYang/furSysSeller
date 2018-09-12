import Mock from 'mockjs'
import data from '../data.json'
Mock.mock('/user/idInfo', {
    code: 0,
    codeMsg: 'success',
    data: data.hasId
})
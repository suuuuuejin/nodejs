const path = require('path');  //os에 맞춰서 경로 만들어줌

const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();


router.get('/',(req,res,next)=>{
    const products = adminData.products
    res.render('shop',{prods:products, pageTitle: 'shop', path:'/', hasProducts: products.length > 0});   //app.js에서 pug파일을 쓸거고 views폴더에 있다고 설정했기 때문에 파일 이름만 쓰면 됨
})                                         // 값을 해달 파일로 보내줄때 {키: 값} 형식으로 보냄

 module.exports = router;
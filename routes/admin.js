const path =  require('path') 

const express = require('express');

const rootDir = require('../util/path');   //절대경로로 표현할때 편하기 위해

const router = express.Router();

const products = [];

//  /admin/add-product =>get
router.get('/add-product',(req,res)=>{
    // res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.render('add-product',{pageTitle:'Add Product', path: '/admin/add-product'});  //어느경로로 넘어갔는지 넘겨줌
})

//  /admin/add-product =>post
router.post('/add-product',(req,res,next)=>{
    products.push({title: req.body.title})
   res.redirect('/')   //홈으로 리다이렉트
});

exports.router = router;
exports.products = products;
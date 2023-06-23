const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs())  //express에 등록되지 않은 새로운 템플릿 엔진을 등록
app.set('view engine','hbs'); //pug를 사용하기위해 express에 등록, 동적 뷰를 컴파일하고 싶다는걸 알림
app.set('views','views'); // 뷰를 찾을 장소를 알려줌


const adminData = require('./routes/admin'); 
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));   //파일을 정적으로 서비스하는 기능(파일스스템으로 직접 포워딩됨)

app.use('/admin',adminData.router);    // admin으로 시작하는 라우트만 adminRoutes파일로 들어가게됨
app.use(shopRoutes);

app.use((req,res,next)=>{
   //res.status(404).sendFile(path.join(__dirname,'views','404.html'));   //요청페이지가 없을시 404오류페이지 추가
   res.status(404).render('404', {pageTitle:'Page Not Found'});
})  
// app.use((req,res,next)=>{
//     console.log('In the middleware');
//     next();   // 다음 미들웨어로 요청이 갈 수 있게 한다.  
                 // 응답을 전송하는게 아닌 이상 항상 next를 호출하고 응답을 전송하려면 next를 호출해서는 안됨
// });   //use를 사용하면 새로운 미들웨어 함수를 추가할 수 있다. 요청 핸들러 배열을 여기서 받는다





app.listen(3000);
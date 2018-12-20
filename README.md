# WeTube 

# About Express and NodeJS

# Middle ware

- Middle ware 의 힘 ! : 서버나 원하는 동작 이전에 함수 등 여러가지 동작을 실행 시킬수 있음 (req, res, next) 이렇게 써야함  
- Middle ware의 위치가 중요함 실행 됨, 안됨을 구분지을 수 있음  
ex) 서버가 불러와 지기 이전에 Middle ware 를 실행하여 데이터를 불러오는 동작을 가능하게 함  
다양한 종류가 있다 (직접 함수제작실행, morgan, helment 등등)  

# Middle ware 종류

- morgan 역할 : 사용하는 미들웨어의 다양한 로그(또는 정보)를 제공함 속성에 따라서 표시해주는   
내용이 다르다 tiny, dev 등등   
- helmet : 보안관련 middle ware  
- body parser : * 좀 더 알아보기 (서버가 유저로부터 받은 데이터를 이해하도록 하는 장치)  
- cookie parser : * 좀 더 알아보기 (서버가 유저로부터 받은 쿠키를 이해하도록 하는 장치)  

# Package.json

- npm 으로 패키지 추가시 json 에 추가하게 됨   
- dependencies 는 프로젝트가 실행되려면 필요한 내용  
- devDependencies 개발시에 도움이 되는 패키지(emmet 과 비슷한 느낌 [프로젝트와 무관한 내용])  
- dev로 하려면 npm install시 맨 마지막에 -D 추가   
- ex)npm install nodemon -D

# 패키지 역할
- babel 역할 : 최신js를 읽지 못하는 브라우저를 위해 읽을수 있는 js 로 변경  
- nodemon 역할 : node 서버를 변경시에 자동으로 재시작 해줄 수 있게 해줌  


# 문법 
  - export default 내용;  
    - 해석 : 너가 내 파일을 불러오면 내가 (내용) object를 반환해줄게   
    ex) export default app; : app object 반환한다.  
    export 자체가 반환한다는 의미인가(?) -> 확인필요 -> 응 맞아   
    대신 default 없이 반환했을 경우 import가 달라짐  

    -예시 
      - router.js 내용  
        export const userRouter = express.Router();  //나 이 userRouter 변수만 반환할꺼야!!   

      - app.js 내용 (불러오는 파일)  
        import { userRouter } from "./router";  //응 그래 userRouter 만 받을게  
        app.use("/user", userRouter); // 대신에 user에 접속하면 userRouter 안에 있는거 다 사용할거야-  
        => localhost:4000/user 사용시 userRouter 안에 있는 기본 get! ("/") 사용된게 나타남 그 이후는 안에 있는 경로를 따름  


# 오류 났던것 
1. app.js 내에 있었던 app.use(routes.videos, videoRouter); 이부분을 생각하지않고   
계속 localhost:4000/videos 가 안되는지 의문이였음     
해결 => videoRouter 부분에 있는 !!사이에 내용을 수정했음    
routes.video -> routes.home 경로가 그러면 원하는대로 됨   
videoRouter.get(!routes.home!, (req, res) => res.send("Videos"));    



<template>
  <div>
  <router-view/>
    </div> 
</template>

<script>
// import LoginComponent from './views/LoginComponent.vue'
// import HomeComponent from './views/HomeComponent.vue'

export default {
  name: 'App',
  components: {
    // LoginComponent,
    // HomeComponent
  }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        body{
            margin: 0;
            padding: 0;
            width: 100%;
            overflow-x: hidden;
            height: 100vh;
            background-color: #EFEFEF;
              font-family: Roboto !important;
        }
        .container{
            width:425px;
            margin: 0 auto;
            min-height:100vh;
            position: relative;
            background: #fff;
            padding-bottom:10px;
            overflow:hidden;
        }
        .container-inner{

        }

        .task{
            background: #EFEFEF;
            width: 366px;
            height: 94px;
            margin: 93px 31px 70px;
            border-radius: 42px;
            border: 0;
            font-size: 21px;
            color: #3F3F3F;
            box-sizing: border-box;
            padding: 0 0 0 40px;
        }


        ::placeholder {
            font-size:21px;/* Firefox */
            color: #3F3F3F;
            padding: 5px;
        }



        .box{
            width: 384px;
            height: 76px;
            margin: 0 22px 16px ;
            text-align: center;
            line-height:76px;
            font-weight: 500 !important;
            overflow:overlay;
        }

        
        .box:hover{
            background-color: #BB6464 !important;
            cursor:pointer;

        }
        .box-1{
            background:#FFD32D;
        }
        .box-2{
            background:#008E89;
        }
        .box-3{
            background:#085E7D;
        }
        .box-4{
            background:#084594;
        }
        
        .box-5{
            background:#495371;
        }

        .jam{
            width: 271px;
            height: 66px;
            margin: 108px 79px 89px;
            background: #BB6464;
            border-radius: 39px;
            text-align: center;
            line-height:66px;
        }

        .box span {
            font-size: 21px;
            font-family: Roboto;
            font-size: 21px;
            font-style: normal;
            font-weight: 500;
            line-height: 25px;
            letter-spacing: 0em;
        }

        .jam span{
            font-family: Roboto;
            font-size: 21px;
            font-style: normal;
            font-weight: 500;
            line-height: 25px;
            letter-spacing: 0em;
            text-align: left;
            color: white;

        }


        .logo{
            font-size: 50px;
            font-family: 'Pacifico', cursive !important;
            text-align: center;
            color: #BB6464;
            margin-left: -30px;
            margin-bottom: 10px;

        }


        .wrapper{
            text-align: center;
            transform: translateY(70%);
        }
        .token{
            width: 70%;
            padding: 20px 20px;
            border-radius: 60px;
            border: 1px solid #BB6464;
            margin:20px auto;
            font-size: 18px;
        }

        .token::placeholder {
            font-size:18px;/* Firefox */
            color: #3F3F3F;
        }

        .register-link{
            text-decoration: none;
            color: #008E89;
        }
</style>

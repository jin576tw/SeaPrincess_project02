'use strict'

let Account = $('#account').val();
let Password = $('#password').val();


// 登录function

function login(){


    $.get("../JSON/user.json", function (data) {

        let d =data

        for(let i = 0 ; i < d.length ;i++){

            
            if($('#account').val() ==  d[i].account){


               if($('#password').val() ==  d[i].password){


                        alert('登入成功');
                        location.href = "./editPage.html"



               }else{


                    alert('密码錯誤')
                    break;

               }


            }else if($('#account').val() !=  d[i].account){

               

            }else{

                alert('账号錯誤')
                break;

            }

      

        }

    })
}

   


    




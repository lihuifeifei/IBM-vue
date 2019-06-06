<template>
      <div>
          <div id="col-l">
              <div class="col-l-t">
                  <div class="content">
                      <div class="bubble" id="Chat">
<!--                       一个默认的对话框-->
                          <div class="msg clearfix">
                              <div class="user-assistant"></div>
                              <span class="triangle"></span>
                              <div class="article">
                                  Welcome! Please input your question!
                              </div>
                          </div>

                        <div v-for="(item,index) in QAlist">
<!--                            提问对话框-->
                            <div class="msg fr" >
                                <span class="triangle right"></span>
                                <div class="article">
                                    {{item.input}}
                                </div>
                            </div>
<!--                            回答对话框-->

                            <div v-for="i in item.output">

<!--                                如果回复的类型是text,并且文本中不包含图片url-->
                                <div v-if="i.response_type == 'text'&&(!i.text.includes('png'))">
                                  <div class="msg clearfix">
                                      <div class="user-assistant"></div>
                                      <span class="triangle"></span>
                                      <div class="article">
                                        {{i.text}}
                                      </div>
                                  </div>
                                </div>

<!--                                如果回复的类型是text,并且文本中包含图片url-->
                                <div v-if="i.response_type == 'text'&&i.text.includes('png')">
                                    <div class="msg clearfix">
                                        <div class="user-assistant"></div>
                                        <span class="triangle"></span>
                                        <div class="article">
                                            <img :src="i.text" style="width: 500px">
                                        </div>
                                    </div>
                                </div>

<!--                                如果回复的类型是option，以列表形式展示-->
                                <div v-if="i.response_type == 'option'">
                                    <div class="msg clearfix">
                                        <div class="user-assistant"></div>
                                        <span class="triangle"></span>
                                        <div class="article">
                                            <ul v-for="ii in i.options" style="list-style-type: none;padding: 0;margin: 0; ">
                                                <li style="color: #27A9E3;cursor:pointer;text-decoration: underline" @click="submitli">
                                                    {{ii.label}}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                      </div>
                  </div>
              </div>
              <div class="col-l-b">
                  <div class="faq-input-content">
                      <textarea name="textfield" class="input" id="faqInput" placeholder="请提出问题" autocomplete="off"  v-model.lazy.trim="question"></textarea>
                         <input type="button" class="btn" value="发送" @click="submit">
                      <div class="input-count"><span id="textCount"></span></div>
                  </div>
              </div>
          </div>
      </div>

</template>

<script>
// @ is an alias to /src


export default {
    data(){
        return{
            question:'',
            QAlist:[]
        }
    },
    watch:{

    },
    methods:{
        //点击发送按钮
        submit(){
            var question = this.question;
            console.log(`问题是:${question}`);

            // 显示loading动画
            let loader = this.$loading.show({
                // 动画参数配置
                loader:'spinner',
                width:120,
                height:80,
                color:'#ff8989',
                opacity:0.5,
            });

            this.$axios.get('/ans',{
                    params: {node: question}
                }
            )
                .then((res)=>{
                    console.log(res.data.data.output.generic);

                    //将输入和输出放入一个对象中，将对象放入QAlist的后面
                    var obj = {};
                    obj.input = question;
                    obj.output = res.data.data.output.generic;
                    this.QAlist.push(obj);

                    //隐藏loading动画，并将文本置空
                    loader.hide();
                    this.question = '';
                })
                .catch((error)=>{
                    console.log(error);
                    //隐藏loading动画
                    loader.hide();
                })
        },

        //点击屏幕的文字
        submitli(e){
            var question1 = e.target.innerText;
            console.log(`问题是:${question1}`);
            // 显示loading动画
            let loader = this.$loading.show({
                // 动画参数配置
                loader:'spinner',
                width:120,
                height:80,
                color:'#ff8989',
                opacity:0.5,
            });
            this.$axios.get('/ans',{
                    params: {node: question1}
                }
            )
                .then((res)=>{
                    console.log(res.data.data.output.generic);

                    //将输入和输出放入一个对象中，将对象放入QAlist的后面
                    var obj = {};
                    obj.input = question1;
                    obj.output = res.data.data.output.generic;
                    this.QAlist.push(obj);

                    //隐藏loading动画
                    loader.hide();
                })
                .catch((error)=>{
                    console.log(error);
                    //隐藏loading动画
                    loader.hide();
                })
        }
    }

}
</script>
<style rel="stylesheet/scss"  scoped>
    html, body {
        color: #1b1b1b;
        margin: 0px;
        padding: 0px;
        height: 100%;
        background: #fff;
        overflow: hidden;
        font-size: 14px;
        line-height: 1.6em;
    }
    #col-l {
        float: left;
        width: 100%;
        position: absolute;
        left: 0px;
        top: 70px;
        bottom: 0px;
    }
    .col-l-t {
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 200px;
        overflow: auto;
        background: -ms-linear-gradient(top, #cae0e1 0%, #e2faee 100%);
        background: -moz-linear-gradient(top, #cae0e1 0%, #e2faee 100%);
        background: -webkit-linear-gradient(top, #cae0e1 0%, #e2faee 100%);
        *background: #d6d6d6;

    }
    .col-l-b {
        border-top: 1px solid #ccc;
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: 0px;
        height: 199px;
    }
    .col-l-t .content {
        padding: 2%;
    }
    /* 汽泡对话框 */
    .bubble {
        position: relative;
    }
    .msg {
        margin-bottom: 20px;
        padding-left: 70px;
        position: relative;
        overflow: hidden;
        min-height: 60px;
    }
    .triangle {
        position: absolute;
        top: 20px;
        left: 71px;
        display: block;
        width: 10px;
        height: 14px;
        overflow: hidden;
        line-height: 0;
        font-size: 0;
        background: url('~@/assets/images/bubble-triangle.png') 0px 0px;
    }
    .user-assistant {
        height: 60px;
        width: 60px;
        position: absolute;
        left: 0px;
        top: 0px;
        background: url('~@/assets/images/user-assistant.png') 0px 0px;
    }

    .msg .article {
        float: left;
        display: inline-block;
        *display:inline;
        zoom: 1;
        padding: 12px;
        border-radius: 12px;
        min-width: 50px;
        min-height: 20px;
        background: #fff;
        max-width: 80%;
        margin-top: 8px;
        margin-left: 10px;
        font-size: 16px;
    }
    .msg .article a {
        color: #117584;
        font-weight: bold;
    }
    .msg .article a:hover {
        color: #087983;
    }
    .fr .article {
        margin-top: auto;
        margin-bottom: 8px;
        color: #fff;
        background: #479a97;
    }
    .fr .triangle {
        right: 1px;
        top: 20px;
        background: url('~@/assets/images/bubble-triangle.png') no-repeat 0px -14px;
        left: auto;
    }
    .fr .article {
        float: right;
        margin-right: 10px;
    }
    .faq-input-content {
        background-color: #fff;
        border-radius: 10px;
        position: absolute;
        overflow: hidden;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
    }
    .faq-input-content .input {
        border-style: none;
        font-size: 18px;
        width: 98%;
        overflow: hidden;
        padding: 1%;
        height: 80px;
        line-height: 20px;
    }
    .faq-input-content .btn {
        line-height: 35px;
        width: 120px;
        position: absolute;
        right: 10px;
        border-style: none;
        font-size: 16px;
        color: #fff;
        bottom: 10px;
        border-radius: 4px;
        cursor: pointer;
        background: #34999a;
    }

    .input-count {
        color: #666;
        padding-left: 5px;
    }

</style>
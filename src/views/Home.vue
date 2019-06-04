<template>
      <div>
          <div id="col-l">
              <div class="col-l-t">
                  <div class="content">
                      <div class="bubble" id="Chat">
                          <div class="msg clearfix">
                              <div class="user-assistant"> </div>
                              <span class="triangle"></span>
                              <div class="article">
                                  <p>您好</p><p>欢迎使用智能知识库。</p>

                              </div>
                          </div>
                          <div class="msg fr">
                              <span class="triangle right"></span><div class="article"><xmp>ss</xmp></div></div>
                          <div class="msg clearfix">
                              <div class="user-assistant"></div><span class="triangle right"></span><div class="article">马上为您查找，请稍候.....</div></div>
                          <div class="msg clearfix">
                              <div class="user-assistant"></div><span class="triangle right"></span><div class="article">十分抱歉，没有找到相关内容！</div></div>

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
    name: 'home',
    data(){
        return{
            question:''
        }
    },
    methods:{
        submit(){
            var question = this.question;
            console.log(`问题是:${question}`);
        },
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
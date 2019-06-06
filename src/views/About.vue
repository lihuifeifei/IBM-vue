<template>
  <div>
      <div>
          <div class="myfont">
              <div style="background-color: #e3f9fd ">
              <h4>Research background and significance</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;As early as the beginning of artificial intelligence research in the 1960s, it was proposed to let computers use natural language to answer people's questions. This refers to the automatic question answering system. The question-and-answer system was popular in the field of natural language processing in the 1980s, because the Turing experiment tells people that if a computer can talk to people like a human, it can be considered that computers are intelligent, so researchers have studied nature in order to explore language understanding techniques. Language question and answer system.</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;Therefore, in the face of an environment of high user demand and support of various research conditions, how to realize an intelligent, friendly and convenient human-computer interaction intelligent question answering system is a subject worth studying.</p>
              </div>
              <hr>
              <div style="background-color: #fcefe8">
              <h4>Project research goal</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;For the IBM Portal system, due to the large number of products in this series, in order to solve the burden of the maintenance of IBM enterprise products, a detailed demand model of the product, such as the operating system, hardware conditions, and prerequisites of the product, is defined. Then, using the model/algorithm method, the system automatically uses the previously trained information to intelligently answer the questions of the user's proposed product.</p>
              </div>
              <hr>
              <div style="background-color: #fffbf0">
              <h4>Project research content</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;The main research content of this project is to solve the problems of related product information under the Portal system, and to develop an automatic question answering system to solve the problem of product and service in the later stage of the enterprise and users.</p>
              </div>
              <hr>
              <div style="background-color: #f0f0f4">
              <h4>Question and answer system construction</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;This automatic question answering system mainly trains the problem in the three aspects of the operating system, preconditions and hardware conditions of Portal 9.0 and Portal 8.5. The different operating systems of different software types under different Portal product versions are studied in detail for the similarities and differences of the above three directions. The different customer questions and answers are combined, and the system intelligently responds appropriately to different questions and answers.</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;Regarding the internal Q&A training method of the automatic question answering system, the team used the knowledge map to construct a complete question and answer system. Among them, the technology of building the whole question and answer network by using knowledge map mainly refers to the construction process of IBM Waston assistant system. On the basis of independent learning and understanding, the knowledge node construction and networking of this question and answer system are completed independently.</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;In the aspect of the question and answer system construction method, the team mainly used the sub-module method to construct the question and answer system. The whole system is mainly divided into three parts: operating system, preconditions and hardware conditions to complete the knowledge map construction. According to the different needs of users, it is convenient and clear to provide a Q&A choice for users. This not only enhances the quick and convenient communication between users and machines, but also reduces the burden on the system and enhances human-computer interaction. The real-time nature is convenient for our later maintenance and improvement. At the same time, the system is also considered in detail for the user's uncertainty about which module the question belongs to. By establishing a certain relationship between the independent question and answer modules, the machine question answering system can automatically traverse three knowledge modules for the user. The answer to the question provides a complete and comprehensive answer.</p>
              </div>
              <p style="color: #27A9E3;font-size: 25px"><strong>The main contributions of the Q&A:</strong></p>
              <div style="border:3px solid red;background-color: #d6ecf0">
                  <ul>
                      <li>1、Identify the user name and use the user name to greet the user.</li>
                      <li>2、For the user's question, provide the user with a classification option to determine the detailed problem of the specific version.</li>
                      <li>3、Considering the Portal product, Enable and other four products, it is determined by the inquiry and the user's answer.</li>
                      <li>4、Automatically identify the user's problem with the version knowledge, you can directly give the answering method.</li>
                      <li>5、The three versions of the two versions of the design jump to each other, and the problem can be continuously tracked and the problem solved.</li>
                      <li>6、The answer to the question is conducted in a classified manner, and in practice, each time a question is asked, the search of the keyword is used to determine which category belongs to which.</li>
                  </ul>
              </div>
              <div style="background-color: #fcefe8">
              <h4>Technical details</h4>
              <p>&nbsp;This product uses springboot integrated springMVC+spring+mybatis framework, the front end uses thymeleaf rendering template, jquary, i-vue, vue, database uses MySQL, knowledge map uses wasston.
              </p>
              </div>
              <hr>
              <div style="float: right;background-color: #e0f0e9;padding: 20px">
                  <h3 style="text-align: center">Made By</h3>
                  <p style="text-align: center">&nbsp;Hui Li&nbsp;,&nbsp;Guo Zhou</p>
                  <p style="text-align: center">Southwest Jiaotong Unversity</p>
                  <p style="text-align: right">June 2019</p>
              </div>
          </div>
      </div>
  </div>
</template>

<style rel="stylesheet/scss"  scoped>

    .myfont {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 30px;
        overflow-y: auto;
        font-family: inherit;
    }
    h4{
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        color: #A7C942;
        font-family: "PingHei", "Hiragino Sans GB W3", "Microsoft YaHei UI", arial;
    }
    li{
        margin-bottom: 5px;
    }

</style>

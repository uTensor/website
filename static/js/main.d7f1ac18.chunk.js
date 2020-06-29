(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/uTensor-mNIST-demo.bdbb13e7.mp4"},17:function(e,a,t){e.exports=t.p+"static/media/github.678688b2.svg"},18:function(e,a,t){e.exports=t.p+"static/media/slack.125e7aab.svg"},230:function(e,a,t){},236:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(24),o=t.n(r),l=t(5),i=t(6),c=t(8),m=t(7),u=t(9),d=t(19),p=t(10),f=(t(38),t(16)),h=t.n(f),v=t(25),b=t.n(v),E=t(26),y=t.n(E),g=t(17),N=t.n(g),_=t(18),w=t.n(_),x=t(238),k=t(237),C=function(){return s.a.createElement(x.a,{language:"c++",style:k.a,wrapLines:!0,codeTagProps:{style:{fontFamily:"Hack",fontSize:"12px"}}},"// Assume Initialized memory allocators \n// Create a 2x2 Tensor from data owned by the user \nint8_t my_input_buffer[4] = {1, 2, 3, 4}; \nTensor a = new BufferTensor({2, 2}, i8, my_input_buffer); \n// Update a value in our buffer. \nmy_input_buffer[3] = 5; \n// Create Tensors of int8_t from const static arrays in ROM \nTensor b = new RomTensor({2, 2}, i8, array_of_values_b); \n// Create a Tensor to store the output in RAM \nTensor c = new RamTensor({2, 2}, i8); \n// Tensors are mapped to the operator's parameters by name and raises compile time errors when mismatch. \n// The name binding + lack of parameter ordering makes ctag jumping and GDB sessions super easy \nMatrixMultOperator<int8_t> mult_AB; \nmult_AB \n    .set_inputs({{MatrixMultOperator<int8_t>::a, a}, {MatrixMultOperator<int8_t>::b, b}}) \n    .set_outputs({{MatrixMultOperator<int8_t>::c, c}}) \n    .eval(); \n// Elements in Tensor c can be accessed with: \nint8_t element = static_cast<int8_t>(c(i,j));")},M=function(){return s.a.createElement(x.a,{language:"python",style:k.a,wrapLines:!0,codeTagProps:{style:{fontFamily:"Hack",fontSize:"12px"}}},"from __future__ import absolute_import, division, print_function, unicode_literals \nfrom utensor_cgen.api.export import tflm_keras_export \nimport tensorflow as tf \nimport numpy as np \nfrom tensorflow.keras.layers import Dense, Flatten, Conv2D, MaxPooling2D \nfrom tensorflow.keras import Model \n \nmnist = tf.keras.datasets.mnist \n(x_train, y_train), (x_test, y_test) = mnist.load_data() \n \nclass MyModel(Model): \n    def __init__(self): \n        super(MyModel, self).__init__() \n        self.conv1 = Conv2D(8, 3, activation='relu') \n        self.pool = MaxPooling2D() \n        self.flatten = Flatten() \n        self.d1 = Dense(10) \n    def call(self, x): \n        x0 = self.conv1(x) \n        x1 = self.pool(x0) \n        x2 = self.flatten(x1) \n        return self.d1(x2) \n \nmodel = MyModel() \ntrain_your_model(model) \n \n# representative data function \n# provides random sample from the dataset \n# to be used for offline-quantization \nnum_calibration_steps = 128 \ncalibration_dtype = tf.float32 \ndef representative_dataset_gen(): \n    for _ in range(num_calibration_steps): \n        rand_idx = np.random.randint(0, x_test.shape[0]-1) \n        sample = x_test[rand_idx] \n        sample = sample[tf.newaxis, ...] \n        sample = tf.cast(sample, dtype=calibration_dtype) \n        yield [sample] \n \n# Export uTensor C++ impplementation with an one-liner \ntflm_keras_export( \n    model, \n    representive_dataset=representative_dataset_gen, \n    model_name='my_model', \n    target='utensor', \n)")},T=[{path:"/",exact:!0,name:"Home",component:function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={displayGenerateCode:!0},t.handleChangeDisplayCode=function(){t.setState({displayGenerateCode:!t.state.displayGenerateCode})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.displayGenerateCode,a=e?s.a.createElement("ul",null,s.a.createElement("li",null,"Tensor provide abstractions for memory devices (RAM, ROM, storage-devices, connectivity, etc)"),s.a.createElement("li",null,"Operator classes allow silicon providers to extend uTensor runtime with their own optimized kernels."),s.a.createElement("li",null,"All memory usage can be governed by a predefined amount"),s.a.createElement("li",null,"Very low static and fixed dynamic memory footprint"),s.a.createElement("li",null,"Quantized Operations"),s.a.createElement("li",null,"Hand-codable, readable and debuggable C++")):s.a.createElement("ul",null,s.a.createElement("li",null,"The model is built with TensorFlow"),s.a.createElement("li",null,"With a single function call, C++ files are generated from the trained model"),s.a.createElement("li",null,"Actions behind the scene:"),s.a.createElement("ul",null,s.a.createElement("li",null,"Dropout removal"),s.a.createElement("li",null,"Quantization"),s.a.createElement("li",null,"Offline Memory Planning"),s.a.createElement("li",null,"Out-of-order Execution Planning"),s.a.createElement("li",null,"Graph-rewriting (Node fusion and replacement)")),s.a.createElement("li",null,"Multi-training framework and runtime support to come"));return s.a.createElement("div",null,s.a.createElement("section",{className:"hero is-fullheight-with-navbar video"},s.a.createElement("div",{className:"hero-video"},s.a.createElement("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,className:"video-background"},s.a.createElement("source",{src:h.a,type:"video/mp4"}))),s.a.createElement("div",{className:"hero-body video-cover"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"columns"},s.a.createElement("h1",{className:"column is-size-1 has-text-centered noto-sans-font cover-title"},"Hands on Embedded Machine Learning")),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-size-3 has-text-centered-touch is-offset-6 noto-sans-font cover-subtitle"},"built by innovators & for the creators")),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-size-5 is-6-desktop is-9 is-offset-1-desktop has-text-left-tablet noto-sans-font cover-detail"},"uTensor is a free and open source embedded machine learning infrastructure designed for rapid-prototyping and deployment. The project includes an inference engine, a highly customizable graph processing tool and a data collection framework (work-in-progress). The device code is optimized for hardware with only a few kilobytes of memory.")),s.a.createElement("div",{className:"columns is-centered mt-3"},s.a.createElement("div",{className:"column is-narrow"},s.a.createElement("a",{className:"is-size-6 community-link is-uppercase button",href:"https://opencollective.com/utensorai"},s.a.createElement("img",{alt:"github",src:N.a,width:"20"}),"Contribute")),s.a.createElement("div",{className:"column is-narrow"},s.a.createElement("a",{className:"is-size-6 community-link is-uppercase button",href:"https://utensor.slack.com/join/shared_invite/zt-6vf9jocy-lzk5Aw11Z8M9GPf_KS5I~Q#/"},s.a.createElement("img",{alt:"slack",src:w.a,width:"20"}),"Chat on Slack")))))),s.a.createElement("section",{className:"hero is-hidden-tablet"},s.a.createElement("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,className:"video"},s.a.createElement("source",{src:h.a,type:"video/mp4"}))),s.a.createElement("section",{className:"hero is-medium is-light"},s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"columns is-variable is-7"},s.a.createElement("div",{className:"column"},s.a.createElement("h3",{className:"is-size-3 ubuntu-font"},"Embedded Runtime"),s.a.createElement("p",{className:"noto-sans-font"},"As little as 2kb, C++ graph implementations can be either hand-coded or auto-generated from trained models.")),s.a.createElement("div",{className:"column"},s.a.createElement("h3",{className:"is-size-3 ubuntu-font"},"Simple Deployment"),s.a.createElement("p",{className:"noto-sans-font"},"From Jupyter-notebooks to MCUs, uTensor is the channel for data scientists and embedded engineers.")),s.a.createElement("div",{className:"column"},s.a.createElement("h3",{className:"is-size-3 ubuntu-font"},"Graph Processing"),s.a.createElement("p",{className:"noto-sans-font"},"Innovating in embedded-ML requires rapid iteration of ideas. uTensor SDK provides easily-customizable graph transformers in Python.")),s.a.createElement("div",{className:"column"},s.a.createElement("h3",{className:"is-size-3 ubuntu-font"},"Open Ecosystem"),s.a.createElement("p",{className:"noto-sans-font"},"uTensor is an embedded-ML infrastructure. Bring your own ops, graph-transformations, or port it to new platforms; it is for everyone.")))))),s.a.createElement("section",{className:"hero"},s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"utensor-picture"},s.a.createElement("img",{alt:"utensor",src:b.a})))),s.a.createElement("section",{className:"hero"},s.a.createElement("div",{className:"hero-body is-background-utensor"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"buttons has-addons is-centered"},s.a.createElement("button",{className:e?"button is-primary":"button is-primary is-outlined",onClick:this.handleChangeDisplayCode},"Generated Code"),s.a.createElement("button",{className:e?"button is-primary is-outlined":"button is-primary",onClick:this.handleChangeDisplayCode},"Training Code")),s.a.createElement("div",{className:"tile is-ancestor"},s.a.createElement("div",{className:"tile is-parent is-8"},s.a.createElement("div",{className:"tile is-child code-content"},e?s.a.createElement(C,null):s.a.createElement(M,null))),s.a.createElement("div",{className:"tile is-parent"},s.a.createElement("div",{className:"tile is-child code-explain"},s.a.createElement("div",{className:"content is-family-secondary"},a))))))),s.a.createElement("section",{className:"hero is-medium"},s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"is-size-2 has-text-centered has-text-primary"},"Join the uTensor Community"),s.a.createElement("div",{className:"mt-3"},s.a.createElement("div",{className:"columns is-centered"},s.a.createElement("div",{className:"column is-narrow"},s.a.createElement("a",{className:"is-size-4 community-link is-secondary-color is-uppercase",href:"https://opencollective.com/utensorai"},s.a.createElement("img",{alt:"github",src:N.a,width:"20"}),"Contribute")),s.a.createElement("div",{className:"column is-narrow"},s.a.createElement("a",{className:"is-size-4 community-link is-secondary-color is-uppercase",href:"https://utensor.slack.com/join/shared_invite/zt-6vf9jocy-lzk5Aw11Z8M9GPf_KS5I~Q#/"},s.a.createElement("img",{alt:"slack",src:w.a,width:"20"}),"Chat on Slack")),s.a.createElement("div",{className:"column is-narrow"},s.a.createElement("a",{className:"is-size-4 community-link is-secondary-color is-uppercase",href:"https://opencollective.com/utensorai"},s.a.createElement("img",{alt:"open collective",src:y.a,width:"20"}),"Sponsor"))))))))}}]),a}(n.Component)},{path:"/get_started",name:"Get Started",component:function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("section",null,s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"title"},"Let's get started.")))}}]),a}(n.Component)},{path:"/docs",name:"Docs",component:function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("section",null,s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"title"},"Docs page is here.")))}}]),a}(n.Component)}],O=(t(230),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={showNav:!1},t.toggleNavBar=function(){t.setState({showNav:!t.state.showNav})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(n.Suspense,{fallback:s.a.createElement("div",null,"Loading...")},s.a.createElement(d.a,{basename:"/website"},s.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement(d.b,{to:"/",className:"navbar-item noto-sans-font has-text-primary has-text-weight-semibold"},"uTensor"),s.a.createElement("div",{className:"navbar-burger burger","data-target":"navMenu",onClick:this.toggleNavBar},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("div",{className:this.state.showNav?"navbar-menu is-active":"navbar-menu",id:"navMenu"},s.a.createElement("div",{className:"navbar-end"},s.a.createElement("a",{className:"navbar-item ubuntu-font",href:"https://github.com/uTensor/utensor-helloworld"},"Jump Start"),s.a.createElement("a",{className:"navbar-item ubuntu-font",href:"https://github.com/uTensor/website/blob/master/docs.md"},"Docs"),s.a.createElement("a",{className:"navbar-item ubuntu-font",href:"https://utensor.slack.com/join/shared_invite/zt-6vf9jocy-lzk5Aw11Z8M9GPf_KS5I~Q#/"},"Join"),s.a.createElement("a",{className:"navbar-item ubuntu-font",href:"https://opencollective.com/utensorai"},"Sponsor"),s.a.createElement("a",{className:"navbar-item ubuntu-font",href:"https://github.com/utensor"},s.a.createElement("i",{className:"fab fa-github fa-lg"})))))),s.a.createElement(p.d,null,T.map((function(e,a){return e.component?s.a.createElement(p.b,{key:a,path:e.path,exact:e.exact,name:e.name,render:function(a){return s.a.createElement(e.component,a)}}):null})),s.a.createElement(p.a,{to:"/"})),s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"content has-text-centered"},s.a.createElement("p",{className:"has-text-primary noto-sans-font"},s.a.createElement("i",{className:"fas fa-heart"})," by uTensor")))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,a,t){e.exports=t.p+"static/media/utensor.342335a1.png"},26:function(e,a,t){e.exports=t.p+"static/media/open-collective.8a4a52cb.svg"},33:function(e,a,t){e.exports=t(236)},38:function(e,a,t){}},[[33,1,2]]]);
//# sourceMappingURL=main.d7f1ac18.chunk.js.map

define(['services/services'],
  function(services) {

    services.service('sWSocket', ['$timeout', function ($timeout) {
	    var self = this;
	  	var callbackPool = []; //onMessage分类处理函数
	    var delayPool = []; //延迟处理请求
	    var registerPool = [];//已注册的方法
	    var data = {};
	    var ws = null;
	    var connected = false;

	    function newWebSocket() {
		    // var wsURL = "ws://szkingray.3322.org:27080/YIXUN_1.5_WEB/websocket/";
		    var wsURL = "ws://10.188.199.4:8080/YIXUN_1.5_WEB/websocket/";
//		    var wsURL = "ws://10.188.192.200:8080/websocket/";
		    var wsTmp = new WebSocket(wsURL);
		    wsTmp.onopen = function (evnt) {
			    onOpen(evnt)
		    };
		    wsTmp.onmessage = function (evnt) {
			    onMessage(evnt)
		    };
		    wsTmp.onclose = function (evnt) {
			    onclose(evnt)
		    };
		    wsTmp.onerror = function (evnt) {
			    onError(evnt)
		    };
		    return wsTmp;
	    }

//	    ws = newWebSocket();

	    function onOpen() {
		    ws.readyState = true;
		    updateStatus("onOpen : " + (connected ? 'TTRRUUEE' : 'FFAALLESS'));
		    while (delayPool.length > 0) {
			    var popData = delayPool.shift();
			    if (popData.isReg == 1) {
				    self.register(popData.appId, popData.methodId, popData.scope, popData.callbackFuns);
			    } else if(popData.isReg == 0){
				    self.unRegister(popData.appId, popData.methodId, popData.scope, popData.callbackFuns);
			    }else {
				    self.send(popData.appId, popData.methodId, popData.content);
			    }
		    }
	    }

	    function onclose() {
		    ws.readyState = false;
		    updateStatus("onClosed : " + (connected ? 'TTRRUUEE' : 'FFAALLESS'));
		    $timeout(function () {
			    console.log('Reconnecting to server...')
			    newWebSocket();
		    }, 3000);
	    }

	    function onMessage(evnt) {
		    //这里处理接收数据
		    var evenData = JSON.parse(evnt.data);
		    console.log("Received data from websocket: ", evenData);

//		    //返回处理
//		    if(evenData.appId === 'register')
//		    {
//			    if(evenData.methodId === 'unRegister'){
//				    //方法返回成功，加入方法池
//				    if(evenData.content.status == 'SUCCEED'){
//						//registerPool.push({appId: evenData.content.appId, methodId: evenData.content.methodId});
//					    console.log("registerPool:", registerPool);
//				    }else{//方法返回失败，重新发送请求
//
//				    }
//			    }
//		    }

		    angular.forEach(callbackPool,function(value){
			    if(value.appId === evenData.appId && value.methodId === evenData.methodId){
				    value.callback(evenData.content);
			    }
		    });
	    }

	    function onError(evnt) {
		    ws.readyState = false;
		    console.log('ERROR: ', evnt);
		    $timeout(function () {
			    console.log('Reconnecting to server...')
			    newWebSocket();
		    }, 3000);
	    }

	    function updateStatus(status) {
		    console.log(status);
	    }

	    //注册方法
	    self.register = function (appId, methodId, callbackFuns) {

		    var webSocketRe = {};
		    webSocketRe.appId = 'register';
		    webSocketRe.methodId = 'register';
		    webSocketRe.content = {
			    appId: appId,
			    methodId: methodId
		    };

		    if (ws.readyState != true){//websocket服务未打开
			    webSocketRe.isReg = 1;//register
			    webSocketRe.appId = appId;
			    webSocketRe.methodId = methodId;
			    webSocketRe.callbackFuns = callbackFuns;
			    delayPool.push(webSocketRe);
			    console.log("register-delayPool:", delayPool);
			    console.log("sending is delay.");
			    return "sending is delay.";
		    } else {
			    callbackPool.push({appId:appId,methodId:methodId,callback:callbackFuns});
			    console.log("callbackPool:",callbackPool);
			    return doSend(webSocketRe);
		    }
	    }

	    ///注销方法
	    self.unregister = function (appId, methodId,callbackFuns) {
		    console.log("unregister");
		    var webSocketRe = {};
		    webSocketRe.appId = 'register';
		    webSocketRe.methodId = 'unRegister';
		    webSocketRe.content = {
			    appId: appId,
			    methodId: methodId
		    };

		    if (ws.readyState != true){//websocket服务未开启
			    webSocketVo.isReg = 0;//unRegister
			    delayPool.push(webSocketRe);
			    console.log("unregister is delay.");
			    return "unregister is delay.";
		    } else {
			    console.log("sending unregister.");
		        var num = 0;
			    angular.forEach(callbackPool,function(value,key){
				    if(value.appId === appId && value.methodId === methodId){
						num += 1;
					    if(value.callback === callbackFuns){
						    delete callbackPool[key];
						    num -=1;
				        }
				    }
			    });
			    console.log("num:",num);
			    console.log("callbackpool:",callbackPool);
			    if(num === 0 ){
				    doSend(webSocketRe);
			    }
		    }
	    }

	    function doSend(webSocketVo) {
		    return ws.send(JSON.stringify(webSocketVo));
	    }

	    self.send = function (appId, methodId, content) {
		    var webSocketVo = {};
		    webSocketVo.appId = appId;
		    webSocketVo.methodId = methodId;
		    webSocketVo.content = content;
		    if (ws.readyState == 0) {
			   // webSocketVo.isReg = false;//不需要注册
			    delayPool.push(webSocketVo);
			    console.log("sending is delay.");
			    return "sending is delay.";
		    } else {
			    console.log("sending is doing.");
			    console.log("webSocketVo:",webSocketVo);
			    return doSend(webSocketVo);
		    }
	    }
	    return self;
    }]);
  });

app.controller('addBox', function ($scope, FileUploader, $stateParams, $state, $http, type, industry) {
    $scope.selectType = type;   //类型下拉框
    $scope.selectIndustry = industry;   //行业大图时，行业下拉框
    UE.delEditor('ueditor');
    // UE.getEditor('ueditor');
    <!-- 实例化富文本编辑器 -->
    var ue = UE.getEditor('ueditor',{
        initialFrameWidth :'100%',//设置编辑器宽度
        initialFrameHeight:'40%',//设置编辑器高度
        scaleEnabled:true,//设置不自动调整高度
        //scaleEnabled {Boolean} [默认值：false]//是否可以拉伸长高，(设置true开启时，自动长高失效)
        enableContextMenu: false//右键菜单
    });
    $scope.con = function () {
        console.log("富文本内容为"+ue.getContent());
        console.log("服务器获取的数据为"+$scope.content);
    };

    if ($stateParams.id == undefined) {
        $scope.head = "新增Article";
        $scope.go = function (onOff) {
            $http({
                method:'POST',
                url: "/carrots-admin-ajax/a/u/article/",
                params: {
                    type: $scope.type,
                    title: $scope.title,
                    status: onOff,  //上线或草稿
                    img: $scope.imgSrc,
                    url: $scope.url,
                    industry: $scope.industry,
                    content: ue.getContent()
                },
                headers: { 'Content-Type': 'Application/json' }
            }).then(function (res) {
                if (res.data.code == 0){
                    alert("上传成功")
                }
                else{
                    alert("上传失败")
                }
            })
        }
    }
    else {
        $scope.head = "编辑Article";
        $http({
            method: 'GET',
            url: "/carrots-admin-ajax/a/article/" + $stateParams.id,
        }).then(function (res) {
            console.log(res);
            $scope.res = res;
            $scope.title = res.data.data.article.title;
            $scope.type = res.data.data.article.type.toString();
            $scope.industry = res.data.data.article.industry.toString();
            $scope.url = res.data.data.article.url;
            $scope.imgShow = true;//展示图片预览
            $scope.imgSrc = res.data.data.article.img;
            $scope.content = res.data.data.article.content;
        });
        //上线或草稿
        $scope.go = function (onOff) {
            $http({
                method:'PUT',
                url: "/carrots-admin-ajax/a/u/article/"+$stateParams.id,
                params: {
                    type: $scope.type,
                    title: $scope.title,
                    status: onOff,  //上线或草稿
                    img: $scope.imgSrc,
                    url: $scope.url,
                    industry: $scope.industry,
                    content: ue.getContent()
                },
                headers: { 'Content-Type': 'Application/json' }
            }).then(function (res) {
                if (res.data.code == 0){
                    alert("编辑成功")
                }
                else{
                    alert("编辑失败")
                }
            })
        }
    }
    $scope.industryShow = function () {
        if ($scope.type == 3) {
           return true;
        }
        else {
            return false;
        }
    };
    $scope.progressBar = 0;//给进度条赋初始值0
    //创建FileUploader和FileReader
    var uploader = $scope.upload = new FileUploader;
    var reader = new FileReader();
    uploader.onAfterAddingFile = function (fileItem) {
        $scope.progressBar = 0; //未点击删除，直接点击上传时，进度条归零
        $("#range").css("background-size", $scope.progressBar+"% 100%");  //未点击删除，直接点击上传时，进度条归零
        // 加载完成后自动显示预览图
        /*
               reader.addEventListener("load", function (e) {
                   //文件加载完之后，更新angular绑定
                   $scope.$apply(function(){
                       $scope.iconUrl = e.target.result;
                   });
               }, false);
        */
        // 使用FileReader获取图片的信息
        console.log(reader);
        console.log(fileItem._file);
        reader.readAsDataURL(fileItem._file);
        $scope.file = fileItem._file;
        $scope.imgName = fileItem._file.name;
        $scope.imgSize = (fileItem._file.size / 1024 / 1024).toFixed(2) + " mb";
    };
    //点击上传到服务器
    $scope.uploadConfirm = function () {
        $scope.formData = new FormData();//定义一个FormData对象
        $scope.formData.append('file', $scope.file);//将文件信息存放在formData
        $scope.progressBar = 80; //进度条value
        $("#range").css("background-size", $scope.progressBar+"% 100%");  //进度条

        $http({
            method: 'post',
            url: '/carrots-admin-ajax/a/u/img/task',
            data: $scope.formData,
            headers: {'Content-Type': undefined} //不限制格式
        }).then(function (response) {
            if (response.data.code === 0) {
                $scope.progressBar = 100;//进度条满100%，这个是上传到服务器的进度条
                $("#range").css("background-size", $scope.progressBar+"% 100%");  //进度条
                $scope.imgSrc = response.data.data.url;//取服务器图片地址
                $scope.imgShow = true;//展示图片预览
            }
            else {
                window.alert('服务器请求失败');
            }
        }, function () {
            window.alert('服务器没有反馈，上传失败');
        })
    };
    //删除
    $scope.uploadDelete = function () {
        $scope.imgSrc = "#";  //清空图片src
        $scope.imgShow = false; //隐藏图片
        $scope.imgName = "";  //清空图片名称
        $scope.imgSize = "";  //清空图片尺寸
        $scope.progressBar = 0; //清空进度条
        $("#range").css("background-size", $scope.progressBar+"% 100%");    //进度条
        $scope.file = "";   //清空input的图片信息
        $scope.title = "";  //清空标题
        $scope.type = "";   //清空类型
        $scope.url = "";    //清空跳转链接
    };
    //取消
    $scope.cancel = function () {
        history.go(-1)
    };
});



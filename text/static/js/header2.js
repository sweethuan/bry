document.write("<script src='../../static/js/public.js' type='text/javascript'></script>")
document.write("<script src='../../static/js/utils.js' type='text/javascript'></script>")
document.write('<script src="https://unpkg.com/element-ui@2.12.0/lib/index.js"></script>')
document.write('<link rel="stylesheet" href="https://unpkg.com/element-ui@2.12.0/lib/theme-chalk/index.css">')


Vue.component('header-item', {
	template: `
		<div class="bry_header">
			<!-- 导航条 -->
			<div class="bry_header_nav">
				<ul class="inner clearfix">
					<li><a href="../../view/index.html">首页</a></li>
					<li :class="{nav_active: getUrl('bry_information')}"><a href="../../view/bry_information.html">资讯</a></li>
					<li :class="{nav_active: getUrl('bry_Movies')}"><a href="../../view/bry_Movies.html">视频</a>
						<ul>
							<li><a href="../../view/bry_Movies.html">影视</a></li>
							<li><a href="../../view/bry_Movies_Open_class.html">公开课</a></li>
							<li><a href="../../view/bry_Movies_special.html">专题</a></li>
							<li><a href="../../view/bry_Movies_activity.html">活动</a></li>
							<li><a href="../../view/bry_Movies_Lecture_Hall.html">大讲堂</a></li>
							<li><a href="../../view/bry_Movies_photograph.html">美拍</a></li>
						</ul>
					</li>
					<li :class="{nav_active: getUrl('bry_audio')}"><a href="../../view/bry_audioFrequency.html">音频</a></li>
					<li :class="{nav_active: getUrl('bry_forum')}"><a href="../../view/bry_forum.html">论坛</a></li>
					<li :class="{nav_active: getUrl('encyc')}"><a href="../../view/encyclopedias.html">百科</a></li>
					<li :class="{nav_active: getUrl('book')}"><a href="../../view/book.html">电子书</a></li>
				</ul>
			</div>
			<!-- /导航条 -->
			<div class="bry_header_wrap">
				<div class="inner clearfix">
					<!-- logo -->
					<div class="bry_logo fl">
						<a href="../../view/index.html"><img src="../../assets/icon/header/logo.png"></a>
					</div>
					<!-- 搜索框 -->
					<div class="bry_search fl">
						<input class="fl" v-model="keyword1" @focus="clear" type="text" placeholder="搜索 新闻 视频">
						<button class="fr bry_search_btn" @click="seach">搜 索</button>
					</div>

					<div class="bry_header_share fl">
						<ul class="clearfix">
							
							<li class="fl" @click="headJump(1)">
								<img src="../../assets/icon/header/msg.png">
								<div>消息</div>
							</li>
							<li class="fl" @click="headJump(2)">
								<img src="../../assets/icon/header/seed.png">
								<div>看过</div>
							</li>
							<li class="fl" v-if="loginstatus">
								<a :href="Role">
									<img v-if="headPhoto" :src="headPhoto">
									<img v-else src="../../assets/icon/header/login.png">
									<div class="bry_NickName">
										{{NickName}}
										<span v-show="IsVip==1?true:false">V</span>
									</div>
								</a>
							</li>
							<li class="fl" v-else>
								<a href="../../view/login_reg_main.html">
									<img src="../../assets/icon/login.png">
									<div>请登录</div>
								</a>
							</li>
							<li v-if="loginstatus" class="fl" @click="exit">
								<a href="javascript:;">
									<img src="../../assets/icon/header/exit.png">
									<div>退出</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	`,
	data() {
		 return {
			loginstatus: '',  // 登录状态
			NickName: '',     // 昵称
			Role: '../../view/consultation/con_basic_data.html',          // 路径
			
			keyword1: "" ,
			IsVip:"", //是否是vip
			headPhoto: ''
		 } 
	},
	created() {
		this.keyword1 = this.keyword
		getAjax("get", "Users/DetailDo", '{"UserId":"' + foowwLocalStorage.getLocal("urseId") + '"}').then(res => {
			this.NickName = res.data.NickName.slice(0,8)
			this.IsVip=res.data.IsVip
			this.headPhoto = res.data.HeadPhoto
		}) 
		
		
		foowwLocalStorage.getLocal("urseId") ? this.loginstatus = true : this.loginstatus = false
		
		if(window.location.href.indexOf("_reg") == -1 && !foowwLocalStorage.getLocal("urseId")) {
			this.$message({
				message: '请先登录~',
				type: 'warning',
				offset: 250
			})
			setTimeout(_ => {
				window.location.href = "../../view/login_reg_main.html"
			}, 1000)
		}
		
		
	},
	props: ['keyword'],
	watch: {
		keyword(){
			this.keyword1 = this.keyword
		}
	},
	methods: {
		// 消息(1)和听过(2)的界面跳转
		headJump(num){
			if(num==1){
				window.location.href="con_message.html"
			}
			else if(num==2){
				window.location.href="con_browse.html?typeId=1"
			}
		},
		getUrl(name) {
			return window.location.href.indexOf(name) != -1
		},
		exit() {
			window.localStorage.clear()
			setTimeout(_ => {
				window.location.href = "../../view/login_reg_main.html"
			}, 1000)
		},
		// 按关键字搜索
		seach(){
			if(!this.keyword1 || !this.keyword1.trim()) return
			window.location.href = "../bry_search.html?keywords=" + window.encodeURIComponent(this.keyword1)
		},
		clear(){
			this.keyword1 = ''
		}
		
	}
});    
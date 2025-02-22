Vue.component('register', {
	template: `
		<div>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="昵称" prop="name">
					<el-input v-model="ruleForm.name" placeholder="请输入昵称"></el-input>
				</el-form-item>
				<el-form-item label="账号绑定" prop="mobile">
					<el-input v-model="ruleForm.mobile" placeholder="请输入手机号或邮箱号绑定"></el-input>
				</el-form-item>
				<el-form-item class="bry_code" label="验证码" prop="sendcode">
					<el-input v-model="ruleForm.sendcode" placeholder="请输入验证码"></el-input>
					<el-button type="button" @click="sendcode" :disabled="isShow" v-if="disabled==false">发送验证码</el-button>
					<el-button type="button" @click="sendcode" :disabled="isShow" v-if="disabled==true">{{btntxt}}</el-button>
				</el-form-item>
				<el-form-item label="密码设置" prop="pass">
					<el-input :type="pwdType1" v-model="ruleForm.pass" placeholder="请输入6位数以上密码">
						<i slot="suffix" class="el-icon-view" @click="showPwd1"></i>
					</el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="checkPass">
					<el-input :type="pwdType2" v-model="ruleForm.checkPass" placeholder="再一次输入密码">
						<i slot="suffix" class="el-icon-view" @click="showPwd2"></i>
					</el-input>
				</el-form-item>
			
			</el-form>
			<!-- 版权声明等 -->
			<div class="bry_rule">
				<!-- <button type="button" :class="show?'cb-default':'cb-sel'" @click="choose"></button> -->
				<input type="checkbox" ref="isSelect" />
				<span>
					勾选代表你同意<a href="javascript:;" v-for="(item, i) in statement" @click="open(i+1)">{{item}}</a>
				</span>
			</div>
			<!-- 登录按钮 -->
			<div class="bry_login_btn">
				<button type="button" @click="login">保存</button>
			</div>
		</div>
	`,
	data() {
		// 自定义设置确认密码的验证规则
		const checkPassAgain = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请确认密码'))
			} else if (value !== this.ruleForm.pass) {
				callback(new Error('两次输入密码不一致!'))
			} else {
				callback()
			}
		}
		// 自定义设置手机邮箱的验证规则
		mobleReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
		emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
		const checkmoble = (rule, value, callback) => {
			if (mobleReg.test(value) || emailReg.test(value)) {
				this.isShow = false
				callback()
			} else {
				this.isShow = true
				callback(new Error('请输入正确的手机号码或邮箱'))
			}
		}

		return {
			statement: ["《注册声明》", "《版权声明》", "《隐私声明》"],
			pwdType1: 'password', //input type类型
			pwdType2: 'password', //input type类型
			ruleForm: { //表单数据对象
				name: "",
				mobile: "",
				pass: "",
				checkPass: "",
				sendcode: ''
			},
			isShow: true,
			disabled: false,
			time: 60,
			btntxt: "重新发送",
			rules: { //表单验证规则
				name: [{
						required: true,
						message: '请输入昵称',
						trigger: 'blur'
					},
					{
						min: 2,
						max: 10,
						message: '长度在 2 到 10 个字符',
						trigger: 'blur'
					}
				],
				mobile: [{
						required: true,
						validator: checkmoble,
						trigger: 'change'
					},

					{
						required: true,
						message: "请输入手机号码或邮箱号",
						trigger: "change"
					},

					/* {
						pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
						message: "请输入正确的手机号码"
					},
					{
						pattern: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
						message: "请输入正确的邮箱号"
					}, */
				],
				sendcode: [{
						required: true,
						message: "请输入验证码",
						trigger: "blur"
					},
					{
						pattern: /^\d{6}$/,
						message: "请输入6位验证码",
						trigger: "blur"
					},
				],
				pass: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					},
					{
						min: 6,
						max: 16,
						message: '长度在 6 到 16 个字符',
						trigger: 'blur'
					},
					{
						pattern: /^[\w]{6,16}$/,
						message: "密码只能包含字母、数字和下划线,长度在6~16之间 "
					}
				],
				checkPass: [{
						required: true,
						validator: checkPassAgain,
						trigger: 'blur'
					},
					{
						min: 6,
						max: 16,
						message: '长度在 6 到 16 个字符',
						trigger: 'blur'
					}
				]
			}
		}
	},
	created() {

	},
	props: ['roleid'],
	methods: {
		showPwd1() { //切换密码框的明文或密码显示
			this.pwdType1 === 'password' ? this.pwdType1 = '' : this.pwdType1 = 'password';
			let e = document.getElementsByClassName('el-icon-view')[0];
			this.pwdType1 == '' ? e.setAttribute('style', 'color: #409EFF') : e.setAttribute('style', 'color: #c0c4cc');
		},
		showPwd2() { //切换确认密码框的明文或密码显示
			this.pwdType2 === 'password' ? this.pwdType2 = '' : this.pwdType2 = 'password';
			let e = document.getElementsByClassName('el-icon-view')[1];
			this.pwdType2 == '' ? e.setAttribute('style', 'color: #409EFF') : e.setAttribute('style', 'color: #c0c4cc');
		},
		sendcode() {
			this.isShow = true
			this.disabled = true
			this.timer()
			if (this.ruleForm.mobile.indexOf("@") == -1) {
				// 发送手机号的接口
				ajax("post", "Users/SendSMSDo", '{"Mobile":"' + this.ruleForm.mobile + '"}', "123456").then(res => {
					console.log(res)
				}, err => {
					
				})
			} else {
				console.log("发送邮箱",this.ruleForm.mobile)
				// 发送邮箱接口
				ajax("post","Users/SendEmailDo", '{"Email":"' + this.ruleForm.mobile + '"}',"123456").then(res=>{
					console.log(res)
					

				},err=>{
					console.log(err)
				})
			}
		},
		//60S倒计时
		timer() {
			if (this.time > 0) {
				this.time--;
				this.btntxt = this.time + "s后重新获取";
				setTimeout(this.timer, 1000);
			} else {
				this.btntxt = "重新获取";
				this.isShow = false;
				this.time = 60
			}

		},
		login() {
			
			// 用户没勾选条款直接提示并返回
			if (!this.$refs.isSelect.checked) {
				return this.$message({
					message: '请阅读相关条款!',
					type: 'warning',
					offset: 250
				})
				
			}
			this.$refs.ruleForm.validate(async valid => {
				// 用户注册信息填写错误, 提示并返回
				if (!valid) {
					return this.$message({
						message: '请填写正确的注册信息!',
						type: 'warning',
						offset: 250
					})
					
				}
				// 发送注册请求
				var result = await ajax("post", "Users/AddDo", '{"NickName":"' + this.ruleForm.name + '","Mobile":"' + this.ruleForm
					.mobile + '","LoginPwd":"' + this.ruleForm.pass + '","RoleId":"' + this.roleid + '","MobileCheckCode":"' + this.ruleForm.sendcode + '"}', "123456")
				console.log(result)
				// 状态码为-1提示错误信息
				if (result.status == -1) {
					
					return this.$message({
						message: result.info,
						type: "error",
						offset: 250
					})
					
				}
				this.$message({
					message: '注册成功,即将调到登录页面!',
					type: 'success',
					offset: 250
				})
				// 注册成功跳转到登录页面
				setTimeout(() => {
					window.location.href = 'login_reg_main.html'
				}, 2000)
			})
		},
		async open(id) {
			var res = await getAjax("get", "PageInfo/DetailDo", '{"Id":"' + id + '"}')
			this.$alert(res.data.Contents, res.data.Title, {
				lockScroll: false,
				callback: action => {
					
				}
			});
		}
	}
});

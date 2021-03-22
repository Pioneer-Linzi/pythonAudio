// 所有的背景音效。调整顺序，将重要的放前面。

const audioBgObj = {
	menuBgm: {
		oriUri: 'http://fdfs.xmcdn.com/group90/M07/65/08/wKg5B19xod6B9hOrAAz8k208Bho900.mp3',
	},
	lockedUrl: {
		oriUri: 'http://fdfs.xmcdn.com/storages/fbe8-audiofreehighqps/E7/E2/CMCoOSIDeC3ZAAClZABjj_og.mp3',// 点击课程环节没解锁
	},
	starOne: {
		oriUri: 'http://fdfs.xmcdn.com/group90/M06/65/04/wKg5B19xoa-S5-89AABb7I1TZpU128.mp3',
	},
	starTwo: {
		oriUri: 'http://fdfs.xmcdn.com/group90/M06/65/05/wKg5B19xobmzdoelAABtEEGpdQs883.mp3',
	},
	starThree: {
		oriUri: 'http://fdfs.xmcdn.com/group90/M06/65/06/wKg5B19xob6xdDCPAADT7HC_rvw612.mp3',
	},
	greateByeBye: {
		oriUri: 'http://fdfs.xmcdn.com/group89/M01/98/5B/wKg5CF-ARqOhTkDSAAFYKh6I4bo921.mp3',
	},
	letsListen: {
		oriUri: 'http://fdfs.xmcdn.com/group88/M08/9E/D6/wKg5DF-AXGzDuWoeAACbmJenObo712.mp3',
	},

	letsPlay: {
		oriUri: 'http://fdfs.xmcdn.com/group90/M05/A1/2E/wKg5PV-AXLzB1blYAACbmAI9gd8281.mp3',
	},
	letsSpeak: {
		oriUri: 'http://fdfs.xmcdn.com/group57/M01/23/FF/wKgLd1yPiYDg9BYuAACt5FCzTDw685.m4a',
	},
	letsWatch: {
		oriUri: 'http://fdfs.xmcdn.com/group90/M07/A1/28/wKg5B1-AXFryJMX5AACbmLB-0ps129.mp3',
	},
	letsThink: {
		oriUri: 'http://fdfs.xmcdn.com/group88/M03/9E/FD/wKg5CV-AXNKSyXHOAACbmJt3-Qc347.mp3',
	},
	letsRead: {
		oriUri: 'http://fdfs.xmcdn.com/storages/7284-audiofreehighqps/90/12/CMCoOSYDVh_mAACbmABbofkA.mp3',
	},
	letsSpeak: {
		oriUri: 'http://fdfs.xmcdn.com/group89/M07/9E/72/wKg5DV-AXBHxfcfhAACbmKsU6AE970.mp3'
	},
	letsLearn: {
		oriUri: 'https://fdfs.xmcdn.com/group88/M07/7E/D1/wKg5CV9nJs_TspmkAAFBGX9ImXk440.m4a'
	},
	addDiamond: {
		oriUri: 'http://fdfs.xmcdn.com/group55/M03/4F/F4/wKgLf1yF1A6gC9oaAAAU7Ild4tU250.m4a',
	}, // 钻石增加
	addDiamond2: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M02/DA/BB/wKgMbl37EInDduECAADuxVAtOu4541.m4a',
	}, // 钻石增加
	addDiamond3: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M02/DB/51/wKgMeF37EImxZun9AAEC5sLSxgA941.m4a',
	}, // 钻石增加
	voiceUrlOnExcellentShow: {
		oriUri: 'http://fdfs.xmcdn.com/storages/222f-audiofreehighqps/EC/05/CMCoOSQDXLepAACi8QBdIcvG.mp3',
	}, // voiceUrlOnExcellentShow
	voiceUrlOnAwesomeShow: {
		oriUri: 'http://fdfs.xmcdn.com/storages/5fdf-audiofreehighqps/E6/EC/CMCoOSYDXLfLAACi8QBdIex8.mp3',
	}, // voiceUrlOnAwesomeShow
	voiceUrlOnGoodjobShow: {
		oriUri: 'http://fdfs.xmcdn.com/storages/9955-audiofreehighqps/CD/83/CMCoOSMDXLhmAACi8QBdIoJY.mp3',
	}, // voiceUrlOnGoodjobShow
	// 钻石消失
	voiceUrlOnFly: {
		oriUri: 'http://fdfs.xmcdn.com/group55/M01/B6/FB/wKgLdVyjb2LSdBVjAAEGPXTI5Ew291.m4a',
	}, // voiceUrlOnFly
	// 钻石出现
	voiceDiamondShow: {
		oriUri: 'http://fdfs.xmcdn.com/group59/M00/CF/A8/wKgLelzCyOuCXLI-AADveFUlas8240.m4a',
	},
	changePage: {
		oriUri: 'http://fdfs.xmcdn.com/group57/M07/F7/3D/wKgLgVyZu12hq4PXAAA9HPR_SsM191.m4a',
	}, // 翻页音效
	beforeRecord: {
		oriUri: 'http://fdfs.xmcdn.com/group57/M08/4E/F9/wKgLd1yF07XhPHQOAAARrd4SVdg622.m4a',
	}, // 录音提示

	// 小朋友请再说一次    e
	speakAgain: {
		oriUri: 'http://fdfs.xmcdn.com/storages/c0c6-audiofreehighqps/BB/A4/CMCoOScDdxChAACKcwBjUyaf.mp3',
	},
	// 小朋友请说一说 e
	pleaseSpeak: {
		oriUri: 'http://fdfs.xmcdn.com/storages/3534-audiofreehighqps/E4/61/CMCoOSIDdY_VAACi8QBi4T44.mp3',
	},
	// 小朋友请先看一看。  e
	pleaseLook: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/79/wKgMbl3MuivgmKezAACctr1UxbY031.m4a',
	},
	// 小朋友，请仔细看一看
	pleaseLook1: {
		oriUri: 'http://fdfs.xmcdn.com/group78/M02/CA/AD/wKgO1l6VUhOCll4wAADyL26wX_A423.m4a',
	},
	// 小朋友，请拖回原来的位置 e
	pleaseDrag: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/B4/wKgMeF3Muiuhr3fPAAEarq3ZXv8127.m4a',
	},

	// 句子题 背景。
	workSentenceBg: {
		oriUri: 'http://fdfs.xmcdn.com/group64/M09/27/52/wKgMaV1g1CeCagAAABB8R11xfS8776.m4a',
	},
	// 单词掉落。
	workWordFallen: {
		oriUri: 'http://fdfs.xmcdn.com/group60/M04/CE/3B/wKgLeVzCyeuBHZZZAAA5Uh6F0S4750.m4a',
	},
	// 单词出现。
	workWordShow: {
		oriUri: 'http://fdfs.xmcdn.com/group59/M01/CF/A0/wKgLelzCyHeDsjQrAAAmNj7U9ws597.m4a',
	},
	// 单词开始拖动。音频待替换
	workWordDragBegin: {
		oriUri: 'http://fdfs.xmcdn.com/group56/M03/D0/95/wKgLgFyk0VOzI4JDAAANR8QJ634985.m4a',
	},
	// 单词拖动放入音效。
	workWordDragRight: {
		oriUri: 'http://fdfs.xmcdn.com/group56/M07/DD/B9/wKgLgFyYhUjQKQloAACbEVJR8ys405.m4a',
	},
	// 猴子出现的耶动画。
	monkeyYe: {
		oriUri: 'http://fdfs.xmcdn.com/group58/M04/CF/49/wKgLglzCykDD6wW0AACOYsLWyKs498.m4a',
	},
	// 开始拖动
	handleWordOn: {
		oriUri: 'http://fdfs.xmcdn.com/group58/M0B/CF/94/wKgLc1zCy7_iSXc2AAApjoy2Zhc598.m4a',
	},
	// 拖对
	handleWordOff: {
		oriUri: 'http://fdfs.xmcdn.com/group59/M06/CF/E1/wKgLeFzCzFbCGHusAAAmCV1Qshc697.m4a',
	},
	// o oh,请再试一次吧。   e
	aohAgain: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/B4/wKgMeF3MuirSpLEDAADarF_3RiU264.m4a',
	},
	// 童声 o oh   e
	aoh: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/79/wKgMbl3Muirzu5oHAABOnYdLR94649.m4a',
	},

	// 现在退出就没有钻石拿哦  e
	leaveNow: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/79/wKgMbl3MuiqgD-KMAAFzBrTjdVA463.m4a',
	},
	// 小朋友，请选一选  e
	pleaseSelect: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/B4/wKgMeF3MuiqBlgD6AACq89eP-Ek204.m4a',
	},
	selectRight: {
		oriUri: 'http://fdfs.xmcdn.com/storages/f985-audiofreehighqps/3E/39/CMCoOR8D0hziAABoKgB6pCyO.mp3',
	},
	btn: {
		oriUri: 'http://fdfs.xmcdn.com/group56/M03/D0/95/wKgLgFyk0VOzI4JDAAANR8QJ634985.m4a',
	},
	// 念完才可以翻下一页哦  e
	pleaseSpeakFirst: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/B4/wKgMeF3MuiujQxZ9AAEysrwKfK4309.m4a',
	},
	// 念完这句就完成了  e
	pleaseSpeakLastSent: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/B4/wKgMeF3Muivg8tFiAAEHG4MEC8g975.m4a',
	},
	// 听音选词题背景音乐
	wordListenBgAudio: {
		oriUri: 'http://fdfs.xmcdn.com/group64/M09/27/3D/wKgMc11g1DCTyuRMABVLvRkm2Ww631.m4a',
	},
	// 看图选词题，锅盖盖回去的声音
	coverAgain: {
		oriUri: 'http://fdfs.xmcdn.com/group58/M02/F9/50/wKgLc11KZQqixtszAAA2ykaXvFU888.m4a',
	},
	// 看图选词题。单词出现，切换单词。
	changeWord: {
		oriUri: 'http://fdfs.xmcdn.com/group59/M00/F1/D5/wKgLel1JJ97xy2QmAAAaaGks6dw642.m4a',
	},
	// 看图选词题。打开锅盖
	openCover: {
		oriUri: 'http://fdfs.xmcdn.com/group63/M0A/85/F5/wKgMcl1KZSmBRLGmAAAty2LZGyc077.m4a',
	},
	// 看图选词题。bgm
	wordSelectBg: {
		oriUri: 'http://fdfs.xmcdn.com/group64/M09/27/54/wKgMaV1g1DaS4ZKjABaqLqdYCSE040.m4a',
	},
	// 填空题目pro 显示泡泡
	showBalls: {
		oriUri: 'http://fdfs.xmcdn.com/group66/M00/65/50/wKgMdV1SVsexpnhmAAAMWC6Us04358.m4a',
	},
	// 填空题目pro bgm
	fillProBgm: {
		oriUri: 'http://fdfs.xmcdn.com/group64/M09/27/55/wKgMaV1g1D6AhQOFAAsUqViu19I667.m4a',
	},
	readingQuesBg: {
		oriUri: 'http://fdfs.xmcdn.com/group64/M00/9B/40/wKgMaV1o2THTlpPcABCqxxnf7S8076.m4a',
	},
	// 擦玻璃擦拭音效
	glassCleaning: {
		oriUri: 'http://fdfs.xmcdn.com/group66/M04/88/97/wKgMdV1nsDvBu-R9AA0ca6pvCfg451.m4a',
	},
	// 擦玻璃擦干净音效
	glassCleaned: {
		oriUri: 'http://fdfs.xmcdn.com/group66/M0B/8A/EE/wKgMa11nxjvAOC8dAADbEjLw-Bk088.m4a',
	},
	// 还有正确选项哦 e
	haveRightItem: {
		oriUri: 'http://fdfs.xmcdn.com/storages/8cfc-audiofreehighqps/E1/49/CMCoOSQDdxJDAACvLwBjVKWD.mp3',
	},
	// 小朋友，请选出正确音效并擦干净 e
	selectRightAndClean: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/B4/wKgMeF3MuiqgpmpZAACycwfGV8E111.m4a',
	},
	// 小朋友，请选出所有正确音效并擦干净 e
	selectRightAllAndClean: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/79/wKgMbl3Muivh8IqLAADLOA-_YC8859.m4a',
	},
	// 小朋友，请看一看图片，选出对应的单词吧～ e
	lookAndSelect: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/79/wKgMbl3MuiuT0ABxAAEhfjE-Rac156.m4a',
	},
	// 小朋友，请听一听发音，选出对应的单词吧～ e
	listenAndSelect: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/B4/wKgMeF3MuiuxC7_lAAFJItmySeI102.m4a',
	},

	/* 句子填空题pro音效 */
	// 小朋友，请把以下单词按正确的顺序排好哦～ e
	proSortWord: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/79/wKgMbl3MuirDmNGRAAD85WVjgS0479.m4a',
	},
	// 小朋友，请把以下字母按正确的顺序排好哦～   e
	proSortChar: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/B3/wKgMeF3MuiqxGJsYAAEoWMi9kK8334.m4a',
	},
	// 小朋友，请把以下单词拖入正确的位置哦～  e
	proDragWord: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/79/wKgMbl3MuiqDHBUhAAENyKNz9kk271.m4a',
	},
	// 小朋友，请把以下字母拖入正确的位置哦～   e
	proDragChar: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/79/wKgMbl3MuiuyIiXGAAEhG3h5ZfU845.m4a',
	},
	/* 句子填空题pro音效 */

	/* 阅读拖拽题 */
	// 小朋友，请按故事顺序，把以下图片排一排吧  e
	pleaseSortByPic: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/79/wKgMbl3MuiqShxkGAAEeH8m5yK4470.m4a',
	},
	// 太棒啦，全都对啦（两个随机出现一个）e
	goodAllRight: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/B4/wKgMeF3MuiuCkLw-AAEW8Ma5e8k527.m4a',
	},
	// 哇哦，全都对啦（两个随机出现一个）e
	waAllRight: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/B3/wKgMeF3MuirT7ypGAADvAQuc0L0337.m4a',
	},
	// 啊哦，小朋友，请再试一次吧  e
	aohTryAgain: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/B4/wKgMeF3MuiqjPX0xAAD7pcXC8xM083.m4a',
	},
	// 拍照快门 t
	cameraOn: {
		oriUri: 'http://fdfs.xmcdn.com/group66/M08/99/42/wKgMdV1ounzCKzvEAAD4jaDwLog406.m4a',
	},
	// 照片打印 t
	cameraPhoto: {
		oriUri: 'http://fdfs.xmcdn.com/group64/M06/99/16/wKgMc11ouoWCi03gAAEH66HRjDg076.m4a',
	},
	// 阅读排序题目背景音乐
	sortPicBgm: {
		oriUri: 'http://fdfs.xmcdn.com/group66/M03/9C/C6/wKgMdV1o8PWAmJuxABAYNxja-ro118.m4a',
	},
	// 螃蟹题目背景音乐
	fillCrabBgm: { oriUri: 'http://fdfs.xmcdn.com/group64/M01/A2/2A/wKgMaV2MovHStXOWABlBgP3hm8w103.m4a' },
	// 螃蟹逃走
	crabBack: {
		oriUri: 'http://fdfs.xmcdn.com/group66/M02/A1/54/wKgMa12MpeDTCuX2AAB_RUFLmG4651.m4a',
	},

	/* 过桥题目背景音乐 */
	brigeWordFillBgm: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M04/51/5E/wKgMbl3L2RLSo8T3AAnpokJQ76c352.m4a',
	},
	// 小车掉落
	brigeWordCarFall: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M04/51/5E/wKgMbl3L2RKDk0bAAAAyeIkg4JU703.m4a',
	},
	// 小车爆炸
	brigeWordCarBoom: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M04/51/98/wKgMeF3L2RKyAH-UAABdvnvdvaw192.m4a',
	},
	// 小车运行
	brigeWordCarMove: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M04/51/5E/wKgMbl3L2RKQsY_LAAYqLBFwiLA213.m4a',
	},
	// 小车喇叭
	brigeWordCarDi: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M04/51/5E/wKgMbl3L2RLDpTwwAAAoxo4Fefk939.m4a',
	},
	// 时间到，请再试一次吧——Times up, let’s try again
	brigeWordTimeup: {
		oriUri: 'http://fdfs.xmcdn.com/group68/M0B/62/79/wKgMbl3MuivQkEzEAAEQLnK3bDc859.m4a',
	},

	// 短音频
	// let's choose   choose it now t
	shortLetsChoose: {
		oriUri: 'http://fdfs.xmcdn.com/storages/9c57-audiofreehighqps/06/4D/CMCoOSIDdY-IAACUPwBi4SrM.mp3',
	},
	// let's speak  now speak up t
	shortLetsSpeak: {
		oriUri: 'http://fdfs.xmcdn.com/storages/3534-audiofreehighqps/E4/61/CMCoOSIDdY_VAACi8QBi4T44.mp3',
	},
	// let's put  put it back   t
	shortLetsPut: {
		oriUri: 'http://fdfs.xmcdn.com/storages/1604-audiofreehighqps/16/CA/CMCoOSYDdZAPAACKcwBi4U0Z.mp3',
	},
	// try again  t
	shortTryAgain: {
		oriUri: 'http://fdfs.xmcdn.com/storages/c0c6-audiofreehighqps/BB/A4/CMCoOScDdxChAACKcwBjUyaf.mp3',
	},
	// awesome all correct t
	shortAwesome: {
		oriUri: 'http://fdfs.xmcdn.com/group61/M00/EF/74/wKgMcF35nTOzGFvhAABusfrjYYU896.m4a',
	},
	// 文本选择题，单选题请选一选
	sentenceRadioSelect: {
		oriUri: 'http://fdfs.xmcdn.com/group61/M0A/EF/95/wKgMZl35kGzD_6VJAACsFcAhGbE446.m4a',
	},
	// 文本选择题，多选题请选一选
	sentenceGroupSelect: {
		oriUri: 'http://fdfs.xmcdn.com/group53/M0A/07/91/wKgLcV35kJjhdggmAACyqXH0Xs8975.m4a',
	},
	// 单词pro 浇水题 背景
	sentFlowerBgm: {
		oriUri: 'http://fdfs.xmcdn.com/group73/M02/0D/49/wKgO0V55tNyxeMlAABDZKLc12Ck487.m4a',
	},
	// 单词pro 浇水题 花朵生长
	sentFlowerUp: {
		oriUri: 'http://fdfs.xmcdn.com/group78/M07/8B/34/wKgO1l5gal-At12HAAD5VeS2O44842.mp3',
	},
	// 单词pro 浇水题 倒肥料
	sentFlowerFertilizer: {
		oriUri: 'http://fdfs.xmcdn.com/group78/M07/8B/34/wKgO1l5gal_wvew-AABodUa1bnk484.mp3',
	},
	// you'll do better next time
	youDoBetter: {
		oriUri: 'http://fdfs.xmcdn.com/group81/M04/EC/AF/wKgPDV6zsJrgsZOPAAHEktzv8i0598.m4a',
	},
	// 晕眩音效
	dizziness: {
		oriUri: 'http://fdfs.xmcdn.com/group80/M00/2B/9B/wKgPDF7VvzDhayziAAFkaMc60AU674.m4a',
	},
	// 羊皮纸藏在哪只乌鸦身上
	parchmentHideWhich: {
		oriUri: 'http://fdfs.xmcdn.com/group80/M00/2B/9B/wKgPDF7VvzCwuwjKAANdigoUdGs351.m4a',
	},
	// 乌鸦冒出来
	crowOut: {
		oriUri: 'http://fdfs.xmcdn.com/group81/M00/3F/6A/wKgPDV7WDneTLxGAAAEe7jw_tII934.m4a',
	},
	// 扔石头
	throwingStone: {
		oriUri: 'http://fdfs.xmcdn.com/group81/M00/44/84/wKgPEl7WDneANhN1AACPLA0Bqgg936.mp3',
	},
	// 扔乌鸦题背景音效
	throwCrowBgm: {
		oriUri: 'http://fdfs.xmcdn.com/group80/M01/67/BA/wKgPEV7Yjp3S50O1ABTbRI4hXqY365.m4a',
	},
	// 翻牌题目 水声
	cardWater: {
		oriUri: 'http://fdfs.xmcdn.com/group81/M04/3F/CF/wKgPDV7WE1ixjfXFAAEG79QDXqE246.m4a',
	},
	// 翻牌题目 提示音  奇奇正在捞苹果呢
	cardTip: {
		oriUri: 'http://fdfs.xmcdn.com/group82/M04/30/69/wKg5HF74opPzRoaFAAF7V7jnN9A417.m4a',
	},
	// 引导点击1
	cardFirstTip1: {
		oriUri: 'http://fdfs.xmcdn.com/group82/M04/30/69/wKg5HF74opOgNLpGAAHlVyk6csc791.m4a',
	},
	// 引导点击2
	cardFirstTip2: {
		oriUri: 'http://fdfs.xmcdn.com/group83/M0A/30/2C/wKg5HV74opPD7aZEAADkkBS__PQ905.m4a',
	},
	// 第一次失败
	cardFirstErr: {
		oriUri: 'http://fdfs.xmcdn.com/group83/M0A/30/2C/wKg5HV74opPCmCEIAAJw47lXpN4748.m4a',
	},
	// 第一次失败
	cardFirstOk: {
		oriUri: 'http://fdfs.xmcdn.com/group82/M04/30/3A/wKg5Il74opOy9c_OAAKYiXCjS9Q569.m4a',
	},

	// week1 review 题型 播放完成Word之后的提示
	reviewListenWordTip: {
		oriUri: 'http://fdfs.xmcdn.com/group81/M00/46/BC/wKgPEl7WJWOS28LfAAPIKQrM20A007.m4a',
	},
	// week1 review 题型 选择正确的时候 开宝箱的提示
	reviewListenWordRightBox: {
		oriUri: 'https://fdfs.xmcdn.com/group80/M07/39/A2/wKgPEV7WI8WjrBMfAAFD55jTWeQ946.m4a',
	},
	reviewListenWordBgm: {
		oriUri: 'https://fdfs.xmcdn.com/group74/M07/79/B7/wKgO3F7YmCehElzUABtCc4cnHeM133.m4a',
	},
	// 翻牌题 bgm
	cardBgm: {
		oriUri: 'http://fdfs.xmcdn.com/group79/M05/3C/48/wKgPC17WHK6SCm45ABXc_jy5-gE956.m4a',
	},

	// 切片跟读

	firstListen: {
		oriUri: 'http://fdfs.xmcdn.com/group82/M00/9A/86/wKg5HF7o0a3yhwCZAAFmlpfQHsU206.m4a',
	},
	itsYourTurn: {
		oriUri: 'http://fdfs.xmcdn.com/group82/M00/9A/86/wKg5HF7o0a3h2DLkAAFzpQMaZGo897.m4a',
	},
	monkeyStamp: {
		oriUri: 'http://fdfs.xmcdn.com/storages/1da7-audiofreehighqps/FD/A5/CMCoOScDdstCAABIVABjM0hX.mp3',
	},
	// 星星声音
	starAudioSrc1: {
		oriUri: 'http://fdfs.xmcdn.com/group55/M05/42/30/wKgLdVyrLbCCb_3fAACI8xiKAJw785.m4a',
	},
	starAudioSrc2: {
		oriUri: 'http://fdfs.xmcdn.com/group56/M0A/3F/BE/wKgLdlyrLfKzUTPPAACIlsF2Hs0795.m4a',
	},
	starAudioSrc3: {
		oriUri: 'http://fdfs.xmcdn.com/group55/M06/41/DD/wKgLf1yrLhjiAksBAACLC2MJ1n8375.m4a',
	},
	// 水流声 划船题
	flowSound22db: {
		oriUri: 'https://fdfs.xmcdn.com/group83/M03/B3/11/wKg5HV8G-CiQFIWAACWC9NCnIg0719.m4a',
	},
	// 吃苹果
	eatApple: {
		oriUri: 'https://fdfs.xmcdn.com/group84/M00/98/20/wKg5Hl8EDwqCCutBAAEPjfdSeuU090.m4a',
	},
	// 吃到坏苹果
	eatBadApple: {
		oriUri: 'https://fdfs.xmcdn.com/group84/M00/97/FC/wKg5JF8EDwqCCu5-AAG4BlhoovQ003.m4a',
	},
	// 爬绳子
	climbingRope: {
		oriUri: 'https://fdfs.xmcdn.com/group84/M00/97/F9/wKg5JF8EDwDh-LcAAAEPgmhrAXw241.m4a',
	},
	// 爬绳子 滑倒了 答错
	climbOpenErrorSlip: {
		oriUri: 'https://fdfs.xmcdn.com/group82/M07/A3/11/wKg5HF8FXkajlwRYAAD8PgKGmHg762.m4a',
	},
	// 找到更多图片 就能帮奇奇爬出洞口
	climbOutByFindMorePic: {
		oriUri: 'https://fdfs.xmcdn.com/group87/M01/0A/81/wKg5IV8PxmmDOUUkAAH2ksI5qRs718.m4a',
	},
	// 奇奇正在努力的爬出洞口
	ClimbedOutCave: {
		oriUri: 'https://fdfs.xmcdn.com/group87/M01/0A/81/wKg5IV8PxmnSmqn_AAGfHHJtOTE827.m4a',
	},
	chickenFindHomeBGM: {
		oriUri: 'https://fdfs.xmcdn.com/group85/M04/BB/AC/wKg5JV8f_Rzg7_F8AAtTpWP43ng964.m4a',
	},
	cockCry: {
		oriUri: 'https://fdfs.xmcdn.com/group85/M04/BB/AC/wKg5JV8f_RzgUmNpAAEWsXQSbmk984.m4a',
	},
	// 描红题音效
	starGroupSound: {
		oriUri: 'http://fdfs.xmcdn.com/group74/M02/71/8D/wKgO0l6QNuDSGT5VAAFZqCBlx24622.m4a',
	},
	// 绘制图形的语音
	drawChar_drawing: {
		oriUri: 'http://fdfs.xmcdn.com/group74/M00/6F/0F/wKgO3F6QdinjAxs8AADtnEEEnL8967.m4a',
	},
	drawChar_pleaseDraw: {
		oriUri: 'http://fdfs.xmcdn.com/group78/M02/CA/AD/wKgO1l6VUhKT4d20AADAU_whQxw503.m4a',
	},
	// 轮到你啦
	yourTurn1: {
		oriUri: 'http://fdfs.xmcdn.com/group78/M02/B7/BD/wKgO4F6VUhKRJwHTAABmoib1EAY260.m4a',
	},
	// 轮到你了
	yourTurn2: {
		oriUri: 'http://fdfs.xmcdn.com/group78/M02/B7/BD/wKgO4F6VUhKQbop1AABga2q82M0630.m4a',
	},
	// 马戏团 背景音乐
	circusBgm: {
		oriUri: 'https://fdfs.xmcdn.com/group88/M0A/1F/99/wKg5CV9izSbjwXvQAA8Lq189xHs105.m4a',
	},
	// 猴子掉落时间
	monkeyDrop: {
		oriUri: 'https://fdfs.xmcdn.com/group88/M0A/1F/8B/wKg5DF9izSXScpUNAAF7cAD7wNY003.m4a',
	},
	monkeyCycleBgm: {
		oriUri: 'https://fdfs.xmcdn.com/group89/M04/1F/C1/wKg5CF9i0UCglG54AAE7Gw-mxSc375.m4a',
	},
	monkeyRideCycle: {
		oriUri: 'http://fdfs.xmcdn.com/storages/c8de-audiofreehighqps/99/89/CMCoOSIDu0_RAACZJQB0ycFc.mp3',
	},
	// 钓鱼题背景
	fishBg: {
		oriUri: 'http://fdfs.xmcdn.com/group89/M0A/27/81/wKg5DV9jNrnQxoqrABR7aCHui6Y934.m4a',
	},
	// 鱼逃走
	fishOut: {
		oriUri: 'http://fdfs.xmcdn.com/group89/M0A/27/81/wKg5DV9jNriwc3PAAAD1pKuoRFU530.m4a',
	},
	// 鱼调起
	fishing: {
		oriUri: 'http://fdfs.xmcdn.com/group89/M0A/27/80/wKg5DV9jNriSshcJAAEJ0Mtca3s687.m4a',
	},
	// ding音效
	dingpop: {
		oriUri: 'http://fdfs.xmcdn.com/storages/1211-audiofreehighqps/F2/1C/CMCoOR4DXF_LAAAtZABc_hxO.mp3'
	},
	// 退出挽留 音效
	exitToRetain: {
		oriUri: 'http://fdfs.xmcdn.com/storages/5780-audiofreehighqps/91/50/CMCoOSADdxFCAAEnLwBjU76Q.mp3'
	},
	// Put them in order
	putThemInOrder: {
		oriUri: 'http://fdfs.xmcdn.com/storages/d17f-audiofreehighqps/76/14/CMCoOSADdsxDAADPBgBjM3Po.mp3'
	},
	// 有手势擦玻璃的引导
	chooseAndWipe: {
		oriUri: 'http://fdfs.xmcdn.com/storages/81cd-audiofreehighqps/F4/54/CMCoOSYDdxSXAADWXgBjVshJ.mp3'
	},
	// 念完这句，就完成了
	almostDone: {
		oriUri: 'http://fdfs.xmcdn.com/storages/19a5-audiofreehighqps/08/59/CMCoOSMDdxUEAACn1wBjVy5L.mp3'
	},
	// 念完才可以翻下一页哦
	justTryYourBes: {
		oriUri: 'http://fdfs.xmcdn.com/storages/dd17-audiofreehighqps/4E/B1/CMCoOSADdxTuAADlEABjVxod.mp3'
	},
	allCorrect:{
		oriUri:"http://fdfs.xmcdn.com/storages/ad31-audiofreehighqps/F2/BC/CMCoOSIDeGA-AAB23ABjqXqR.mp3"
	},
	// 浇花题奖励
	flowerReward:{
		oriUri:"http://fdfs.xmcdn.com/storages/4aae-audiofreehighqps/92/4F/CMCoOSMDyfCLAAEa1wB4ZaTl.mp3"
	},
	// 浇花题音效
	flowersound:{
		oriUri:"http://fdfs.xmcdn.com/storages/0744-audiofreehighqps/A7/1D/CMCoOR4DyfBHAAHLOwB4ZY3J.mp3"
	},
	// 音素点击题
	tapAndListen:{
		oriUri:"http://fdfs.xmcdn.com/storages/1b3c-audiofreehighqps/28/D8/CMCoOSED5Um3AAECCwB_46Cp.mp3"
	},
	hammerEgg:{
		oriUri:"https://fdfs.xmcdn.com/storages/f730-audiofreehighqps/27/48/CMCoOSID8BNcAAAHUgCDYa4A.mp3"
	},
	eggBroke:{
		oriUri:"https://fdfs.xmcdn.com/storages/d9d0-audiofreehighqps/B2/7F/CMCoOSID8AxyAABALgCDXwzW.mp3"
	},
	// 火车行驶
	train:{
		oriUri:"http://fdfs.xmcdn.com/storages/2e8b-audiofreehighqps/5A/A6/CMCoOSAD7WW8AADReQCCVaAp.mp3"
	},
	// 火车鸣笛
	trainWhistle:{
		oriUri:"http://fdfs.xmcdn.com/storages/19d7-audiofreehighqps/18/FD/CMCoOSYD7WYWAACgfgCCVb-w.mp3"
	},
}; // 把最好的放给uri，这样就不需要每个地方去判断。

for (const i in audioBgObj) {
	if (audioBgObj.hasOwnProperty(i)) {
		audioBgObj[i].uri = audioBgObj[i].oriUri;
	}
}

// export default audioBgObj;
module.exports = audioBgObj;

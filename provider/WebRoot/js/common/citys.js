var TGcitys = [['北京','东城区','西城区','崇文区','宣武区','朝阳区','丰台区','石景山区','海淀区','门头沟区','通州区','顺义区','昌平区','大兴区','怀柔区','平谷区','密云县','延庆县','房山区']
,['上海','黄浦区','卢湾区','徐汇区','长宁区','静安区','普陀区','闸北区','虹口区','杨浦区','闵行区','宝山区','嘉定区','浦东新区','金山区','松江区','青浦区','南汇区','奉贤区','崇明县']
,['天津','和平区','河东区','河西区','南开区','河北区','红桥区','塘沽区','汉沽区','大港区','西青区','津南区','北辰区','武清区','宝坻区','宁河县','静海县','蓟县']
,['重庆','万州','涪陵','渝中','大渡口','江北区','沙坪坝','九龙坡','南岸区','北碚区','万盛区','双桥区','渝北区','巴南区','黔江区','长寿区','綦江县','潼南县','铜梁县','大足县','荣昌县','璧山县','梁平县','城口县','丰都县','垫江县','武隆县','忠县','开县','云阳县','奉节县','巫山县','巫溪县','石柱县','秀山县','酉阳县','彭水县','江津市','合川市','永川市','南川市']
,['河北','石家庄市','唐山市','秦皇岛市','邯郸市','邢台市','保定市','张家口市','承德市','沧州市','廊坊市','衡水市'],['山西省','太原市','大同市','阳泉市','长治市','晋城市','朔州市','晋中市','运城市','忻州市','临汾市','吕梁市']
,['内蒙古','呼和浩特市','包头市','乌海市','赤峰市','通辽市','鄂尔多斯市','呼伦贝尔市','巴彦淖尔市','乌兰察布市','兴安盟','锡林郭勒盟','阿拉善盟']
,['辽宁','沈阳市','大连市','鞍山市','抚顺市','本溪市','丹东市','锦州市','营口市','阜新市','辽阳市','盘锦市','铁岭市','朝阳市','葫芦岛市']
,['吉林','长春市','吉林市','四平市','辽源市','通化市','白山市','松原市','白城市','延边'],['黑龙江','哈尔滨','齐齐哈尔','鸡西市','鹤岗市','双鸭山','大庆市','伊春市','佳木斯','七台河','牡丹江','黑河市','绥化市','大兴安岭']
,['江苏','南京市','无锡市','徐州市','常州市','苏州市','南通市','连云港市','淮安市','盐城市','扬州市','镇江市','泰州市','宿迁市'],['浙江','杭州市','宁波市','温州市','嘉兴市','湖州市','绍兴市','金华市','衢州市','舟山市','台州市','丽水市']
,['安徽','合肥市','芜湖市','蚌埠市','淮南市','马鞍山市','淮北市','铜陵市','安庆市','黄山市','滁州市','阜阳市','宿州市','巢湖市','六安市','亳州市','池州市','宣城市'],['福建','福州市','厦门市','莆田市','三明市','泉州市','漳州市','南平市','龙岩市','宁德市']
,['江西','南昌市','景德镇','萍乡市','九江市','新余市','鹰潭市','赣州市','吉安市','宜春市','抚州市','上饶市']
,['山东','济南市','青岛市','淄博市','枣庄市','东营市','烟台市','潍坊市','济宁市','泰安市','威海市','日照市','莱芜市','临沂市','德州市','聊城市','滨州市','荷泽市']
,['河南','郑州市','开封市','洛阳市','平顶山市','安阳市','鹤壁市','新乡市','焦作市','濮阳市','许昌市','漯河市','三门峡市','南阳市','商丘市','信阳市','周口市','驻马店市']
,['湖北','武汉市','黄石市','十堰市','宜昌市','襄樊市','鄂州市','荆门市','孝感市','荆州市','黄冈市','咸宁市','随州市','恩施','仙桃市','潜江市','天门市','神农架']
,['湖南','长沙市','株洲市','湘潭市','衡阳市','邵阳市','岳阳市','常德市','张家界市','益阳市','郴州市','永州市','怀化市','娄底市','湘西']
,['广东','广州市','韶关市','深圳市','珠海市','汕头市','佛山市','江门市','湛江市','茂名市','肇庆市','惠州市','梅州市','汕尾市','河源市','阳江市','清远市','东莞市','中山市','潮州市','揭阳市','云浮市']
,['广西','南宁市','柳州市','桂林市','北海市','防城港市','钦州市','贵港市','玉林市','百色市','贺州市','河池市','来宾市','崇左市']
,['海南','海口市','三亚市','五指山','琼海市','儋州市','文昌市','万宁市','东方市','定安县','屯昌县','澄迈县','临高县','白沙','昌江','乐东','陵水','保亭','琼中','西沙','南沙','中沙']
,['四川','成都市','自贡市','攀枝花','泸州市','德阳市','绵阳市','广元市','遂宁市','内江市','乐山市','南充市','眉山市','宜宾市','广安市','达州市','雅安市','巴中市','资阳市','阿坝','甘孜','凉山']
,['贵州','贵阳市','六盘水','遵义市','安顺市','铜仁','黔西南','毕节','黔东南','黔南']
,['云南','昆明市','曲靖市','玉溪市','保山市','昭通市','丽江市','思茅市','临沧市','楚雄','红河','文山','西双版纳','大理','德宏','怒江','迪庆']
,['西藏','拉萨','昌都','山南','日喀则','那曲','阿里','林芝'],['陕西','西安市','铜川市','宝鸡市','咸阳市','渭南市','延安市','汉中市','榆林市','安康市','商洛市']
,['甘肃','兰州市','嘉峪关市','金昌市','白银市','天水市','武威市','张掖市','平凉市','酒泉市','庆阳市','定西市','陇南市','临夏','甘南']
,['青海','西宁市','海东地区','海北','黄南','海南','果洛','玉树','海西']
,['新疆','乌鲁木齐','克拉玛依','吐鲁番','哈密','昌吉','博尔塔拉','巴音郭楞','阿克苏','克孜勒苏','喀什','和田','伊犁','塔城','阿勒泰','石河子','阿拉尔','图木舒克','五家渠']
,['宁夏','银川市','石嘴山市','吴忠市','固原市','中卫市']
,['台湾','台北市','高雄市','基隆市','新竹市','台中市','嘉义市','台南市','台北县','桃园县','新竹县','苗栗县','台中县','彰化县','南投县','云林县','嘉义县','台南县','高雄县','屏东县','宜兰县','花莲县','台东县','澎湖县','金门县','连江县']
,['香港','中西区','东区','南区','湾仔区','九龙城区','观塘区','深水埗区','黄大仙区','油尖旺区','离岛区','葵青区','北区','西贡区','沙田区','大埔区','荃湾区','屯门区','元朗区']
,['澳门','花地玛堂区','圣安多尼堂区','大堂区','望德堂区','风顺堂区','嘉模堂区','圣方济各堂区']];
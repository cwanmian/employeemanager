import React from "react";
import Icon from "@ant-design/icons"

export const GlobalData = {
    AppServerIp: "http://localhost:8585",
    maleicon(props){return <Icon component={malesvg} {...props}/>},
    femaleicon(props){return <Icon component={femalesvg} {...props}/>},
    CityData: [{
        "title": "北京",
        "value": "北京",
        "key": "北京",
        "children": [{"title": "北京市", "value": "北京市", "key": "北京市"}]
    }, {
        "title": "天津",
        "value": "天津",
        "key": "天津",
        "children": [{"title": "天津市", "value": "天津市", "key": "天津市"}]
    }, {
        "title": "上海",
        "value": "上海",
        "key": "上海",
        "children": [{"title": "上海市", "value": "上海市", "key": "上海市"}]
    }, {
        "title": "重庆",
        "value": "重庆",
        "key": "重庆",
        "children": [{"title": "重庆市", "value": "重庆市", "key": "重庆市"}]
    }, {
        "title": "香港",
        "value": "香港",
        "key": "香港",
        "children": [{"title": "香港特别行政区", "value": "香港特别行政区", "key": "香港特别行政区"}]
    }, {
        "title": "澳门",
        "value": "澳门",
        "key": "澳门",
        "children": [{"title": "澳门特别行政区", "value": "澳门特别行政区", "key": "澳门特别行政区"}]
    }, {
        "title": "河北省",
        "value": "河北省",
        "key": "河北省",
        "children": [{"title": "石家庄市", "value": "石家庄市", "key": "石家庄市"}, {
            "title": "唐山市",
            "value": "唐山市",
            "key": "唐山市"
        }, {"title": "秦皇岛市", "value": "秦皇岛市", "key": "秦皇岛市"}, {
            "title": "邯郸市",
            "value": "邯郸市",
            "key": "邯郸市"
        }, {"title": "邢台市", "value": "邢台市", "key": "邢台市"}, {
            "title": "保定市",
            "value": "保定市",
            "key": "保定市"
        }, {"title": "张家口市", "value": "张家口市", "key": "张家口市"}, {
            "title": "承德市",
            "value": "承德市",
            "key": "承德市"
        }, {"title": "沧州市", "value": "沧州市", "key": "沧州市"}, {
            "title": "廊坊市",
            "value": "廊坊市",
            "key": "廊坊市"
        }, {"title": "衡水市", "value": "衡水市", "key": "衡水市"}, {
            "title": "辛集市",
            "value": "辛集市",
            "key": "辛集市"
        }, {"title": "晋州市", "value": "晋州市", "key": "晋州市"}, {
            "title": "新乐市",
            "value": "新乐市",
            "key": "新乐市"
        }, {"title": "遵化市", "value": "遵化市", "key": "遵化市"}, {
            "title": "迁安市",
            "value": "迁安市",
            "key": "迁安市"
        }, {"title": "武安市", "value": "武安市", "key": "武安市"}, {
            "title": "南宫市",
            "value": "南宫市",
            "key": "南宫市"
        }, {"title": "沙河市", "value": "沙河市", "key": "沙河市"}, {
            "title": "涿州市",
            "value": "涿州市",
            "key": "涿州市"
        }, {"title": "定州市", "value": "定州市", "key": "定州市"}, {
            "title": "安国市",
            "value": "安国市",
            "key": "安国市"
        }, {"title": "高碑店市", "value": "高碑店市", "key": "高碑店市"}, {
            "title": "平泉市",
            "value": "平泉市",
            "key": "平泉市"
        }, {"title": "泊头市", "value": "泊头市", "key": "泊头市"}, {
            "title": "任丘市",
            "value": "任丘市",
            "key": "任丘市"
        }, {"title": "黄骅市", "value": "黄骅市", "key": "黄骅市"}, {
            "title": "河间市",
            "value": "河间市",
            "key": "河间市"
        }, {"title": "霸州市", "value": "霸州市", "key": "霸州市"}, {
            "title": "三河市",
            "value": "三河市",
            "key": "三河市"
        }, {"title": "深州市", "value": "深州市", "key": "深州市"}]
    }, {
        "title": "山西省",
        "value": "山西省",
        "key": "山西省",
        "children": [{"title": "太原市", "value": "太原市", "key": "太原市"}, {
            "title": "大同市",
            "value": "大同市",
            "key": "大同市"
        }, {"title": "阳泉市", "value": "阳泉市", "key": "阳泉市"}, {
            "title": "长治市",
            "value": "长治市",
            "key": "长治市"
        }, {"title": "晋城市", "value": "晋城市", "key": "晋城市"}, {
            "title": "朔州市",
            "value": "朔州市",
            "key": "朔州市"
        }, {"title": "晋中市", "value": "晋中市", "key": "晋中市"}, {
            "title": "运城市",
            "value": "运城市",
            "key": "运城市"
        }, {"title": "忻州市", "value": "忻州市", "key": "忻州市"}, {
            "title": "临汾市",
            "value": "临汾市",
            "key": "临汾市"
        }, {"title": "吕梁市", "value": "吕梁市", "key": "吕梁市"}, {
            "title": "古交市",
            "value": "古交市",
            "key": "古交市"
        }, {"title": "高平市", "value": "高平市", "key": "高平市"}, {
            "title": "介休市",
            "value": "介休市",
            "key": "介休市"
        }, {"title": "永济市", "value": "永济市", "key": "永济市"}, {
            "title": "河津市",
            "value": "河津市",
            "key": "河津市"
        }, {"title": "原平市", "value": "原平市", "key": "原平市"}, {
            "title": "侯马市",
            "value": "侯马市",
            "key": "侯马市"
        }, {"title": "霍州市", "value": "霍州市", "key": "霍州市"}, {
            "title": "孝义市",
            "value": "孝义市",
            "key": "孝义市"
        }, {"title": "汾阳市", "value": "汾阳市", "key": "汾阳市"}, {
            "title": "怀仁市",
            "value": "怀仁市",
            "key": "怀仁市"
        }]
    }, {
        "title": "内蒙古自治区",
        "value": "内蒙古自治区",
        "key": "内蒙古自治区",
        "children": [{"title": "呼和浩特市", "value": "呼和浩特市", "key": "呼和浩特市"}, {
            "title": "包头市",
            "value": "包头市",
            "key": "包头市"
        }, {"title": "乌海市", "value": "乌海市", "key": "乌海市"}, {
            "title": "赤峰市",
            "value": "赤峰市",
            "key": "赤峰市"
        }, {"title": "通辽市", "value": "通辽市", "key": "通辽市"}, {
            "title": "鄂尔多斯市",
            "value": "鄂尔多斯市",
            "key": "鄂尔多斯市"
        }, {"title": "呼伦贝尔市", "value": "呼伦贝尔市", "key": "呼伦贝尔市"}, {
            "title": "巴彦淖尔市",
            "value": "巴彦淖尔市",
            "key": "巴彦淖尔市"
        }, {"title": "乌兰察布市", "value": "乌兰察布市", "key": "乌兰察布市"}, {
            "title": "霍林郭勒市",
            "value": "霍林郭勒市",
            "key": "霍林郭勒市"
        }, {"title": "满洲里市", "value": "满洲里市", "key": "满洲里市"}, {
            "title": "牙克石市",
            "value": "牙克石市",
            "key": "牙克石市"
        }, {"title": "扎兰屯市", "value": "扎兰屯市", "key": "扎兰屯市"}, {
            "title": "额尔古纳市",
            "value": "额尔古纳市",
            "key": "额尔古纳市"
        }, {"title": "根河市", "value": "根河市", "key": "根河市"}, {
            "title": "丰镇市",
            "value": "丰镇市",
            "key": "丰镇市"
        }, {"title": "乌兰浩特市", "value": "乌兰浩特市", "key": "乌兰浩特市"}, {
            "title": "阿尔山市",
            "value": "阿尔山市",
            "key": "阿尔山市"
        }, {"title": "二连浩特市", "value": "二连浩特市", "key": "二连浩特市"}, {
            "title": "锡林浩特市",
            "value": "锡林浩特市",
            "key": "锡林浩特市"
        }]
    }, {
        "title": "辽宁省",
        "value": "辽宁省",
        "key": "辽宁省",
        "children": [{"title": "沈阳市", "value": "沈阳市", "key": "沈阳市"}, {
            "title": "大连市",
            "value": "大连市",
            "key": "大连市"
        }, {"title": "鞍山市", "value": "鞍山市", "key": "鞍山市"}, {
            "title": "抚顺市",
            "value": "抚顺市",
            "key": "抚顺市"
        }, {"title": "本溪市", "value": "本溪市", "key": "本溪市"}, {
            "title": "丹东市",
            "value": "丹东市",
            "key": "丹东市"
        }, {"title": "锦州市", "value": "锦州市", "key": "锦州市"}, {
            "title": "营口市",
            "value": "营口市",
            "key": "营口市"
        }, {"title": "阜新市", "value": "阜新市", "key": "阜新市"}, {
            "title": "辽阳市",
            "value": "辽阳市",
            "key": "辽阳市"
        }, {"title": "盘锦市", "value": "盘锦市", "key": "盘锦市"}, {
            "title": "铁岭市",
            "value": "铁岭市",
            "key": "铁岭市"
        }, {"title": "朝阳市", "value": "朝阳市", "key": "朝阳市"}, {
            "title": "葫芦岛市",
            "value": "葫芦岛市",
            "key": "葫芦岛市"
        }, {"title": "新民市", "value": "新民市", "key": "新民市"}, {
            "title": "瓦房店市",
            "value": "瓦房店市",
            "key": "瓦房店市"
        }, {"title": "庄河市", "value": "庄河市", "key": "庄河市"}, {
            "title": "海城市",
            "value": "海城市",
            "key": "海城市"
        }, {"title": "东港市", "value": "东港市", "key": "东港市"}, {
            "title": "凤城市",
            "value": "凤城市",
            "key": "凤城市"
        }, {"title": "凌海市", "value": "凌海市", "key": "凌海市"}, {
            "title": "北镇市",
            "value": "北镇市",
            "key": "北镇市"
        }, {"title": "盖州市", "value": "盖州市", "key": "盖州市"}, {
            "title": "大石桥市",
            "value": "大石桥市",
            "key": "大石桥市"
        }, {"title": "灯塔市", "value": "灯塔市", "key": "灯塔市"}, {
            "title": "调兵山市",
            "value": "调兵山市",
            "key": "调兵山市"
        }, {"title": "开原市", "value": "开原市", "key": "开原市"}, {
            "title": "北票市",
            "value": "北票市",
            "key": "北票市"
        }, {"title": "凌源市", "value": "凌源市", "key": "凌源市"}, {
            "title": "兴城市",
            "value": "兴城市",
            "key": "兴城市"
        }]
    }, {
        "title": "吉林省",
        "value": "吉林省",
        "key": "吉林省",
        "children": [{"title": "长春市", "value": "长春市", "key": "长春市"}, {
            "title": "吉林市",
            "value": "吉林市",
            "key": "吉林市"
        }, {"title": "四平市", "value": "四平市", "key": "四平市"}, {
            "title": "辽源市",
            "value": "辽源市",
            "key": "辽源市"
        }, {"title": "通化市", "value": "通化市", "key": "通化市"}, {
            "title": "白山市",
            "value": "白山市",
            "key": "白山市"
        }, {"title": "松原市", "value": "松原市", "key": "松原市"}, {
            "title": "白城市",
            "value": "白城市",
            "key": "白城市"
        }, {"title": "榆树市", "value": "榆树市", "key": "榆树市"}, {
            "title": "德惠市",
            "value": "德惠市",
            "key": "德惠市"
        }, {"title": "蛟河市", "value": "蛟河市", "key": "蛟河市"}, {
            "title": "桦甸市",
            "value": "桦甸市",
            "key": "桦甸市"
        }, {"title": "舒兰市", "value": "舒兰市", "key": "舒兰市"}, {
            "title": "磐石市",
            "value": "磐石市",
            "key": "磐石市"
        }, {"title": "公主岭市", "value": "公主岭市", "key": "公主岭市"}, {
            "title": "双辽市",
            "value": "双辽市",
            "key": "双辽市"
        }, {"title": "梅河口市", "value": "梅河口市", "key": "梅河口市"}, {
            "title": "集安市",
            "value": "集安市",
            "key": "集安市"
        }, {"title": "洮南市", "value": "洮南市", "key": "洮南市"}, {
            "title": "大安市",
            "value": "大安市",
            "key": "大安市"
        }, {"title": "临江市", "value": "临江市", "key": "临江市"}, {
            "title": "延吉市",
            "value": "延吉市",
            "key": "延吉市"
        }, {"title": "图们市", "value": "图们市", "key": "图们市"}, {
            "title": "敦化市",
            "value": "敦化市",
            "key": "敦化市"
        }, {"title": "珲春市", "value": "珲春市", "key": "珲春市"}, {
            "title": "龙井市",
            "value": "龙井市",
            "key": "龙井市"
        }, {"title": "和龙市", "value": "和龙市", "key": "和龙市"}, {
            "title": "扶余市",
            "value": "扶余市",
            "key": "扶余市"
        }]
    }, {
        "title": "黑龙江省",
        "value": "黑龙江省",
        "key": "黑龙江省",
        "children": [{"title": "哈尔滨市", "value": "哈尔滨市", "key": "哈尔滨市"}, {
            "title": "齐齐哈尔市",
            "value": "齐齐哈尔市",
            "key": "齐齐哈尔市"
        }, {"title": "黑河市", "value": "黑河市", "key": "黑河市"}, {
            "title": "大庆市",
            "value": "大庆市",
            "key": "大庆市"
        }, {"title": "伊春市", "value": "伊春市", "key": "伊春市"}, {
            "title": "鹤岗市",
            "value": "鹤岗市",
            "key": "鹤岗市"
        }, {"title": "佳木斯市", "value": "佳木斯市", "key": "佳木斯市"}, {
            "title": "双鸭山市",
            "value": "双鸭山市",
            "key": "双鸭山市"
        }, {"title": "七台河市", "value": "七台河市", "key": "七台河市"}, {
            "title": "鸡西市",
            "value": "鸡西市",
            "key": "鸡西市"
        }, {"title": "牡丹江市", "value": "牡丹江市", "key": "牡丹江市"}, {
            "title": "绥化市",
            "value": "绥化市",
            "key": "绥化市"
        }, {"title": "尚志市", "value": "尚志市", "key": "尚志市"}, {
            "title": "五常市",
            "value": "五常市",
            "key": "五常市"
        }, {"title": "讷河市", "value": "讷河市", "key": "讷河市"}, {
            "title": "北安市",
            "value": "北安市",
            "key": "北安市"
        }, {"title": "五大连池市", "value": "五大连池市", "key": "五大连池市"}, {
            "title": "嫩江市",
            "value": "嫩江市",
            "key": "嫩江市"
        }, {"title": "铁力市", "value": "铁力市", "key": "铁力市"}, {
            "title": "同江市",
            "value": "同江市",
            "key": "同江市"
        }, {"title": "富锦市", "value": "富锦市", "key": "富锦市"}, {
            "title": "虎林市",
            "value": "虎林市",
            "key": "虎林市"
        }, {"title": "密山市", "value": "密山市", "key": "密山市"}, {
            "title": "绥芬河市",
            "value": "绥芬河市",
            "key": "绥芬河市"
        }, {"title": "海林市", "value": "海林市", "key": "海林市"}, {
            "title": "宁安市",
            "value": "宁安市",
            "key": "宁安市"
        }, {"title": "安达市", "value": "安达市", "key": "安达市"}, {
            "title": "肇东市",
            "value": "肇东市",
            "key": "肇东市"
        }, {"title": "海伦市", "value": "海伦市", "key": "海伦市"}, {
            "title": "穆棱市",
            "value": "穆棱市",
            "key": "穆棱市"
        }, {"title": "东宁市", "value": "东宁市", "key": "东宁市"}, {
            "title": "抚远市",
            "value": "抚远市",
            "key": "抚远市"
        }, {"title": "漠河市", "value": "漠河市", "key": "漠河市"}]
    }, {
        "title": "江苏省",
        "value": "江苏省",
        "key": "江苏省",
        "children": [{"title": "南京市", "value": "南京市", "key": "南京市"}, {
            "title": "徐州市",
            "value": "徐州市",
            "key": "徐州市"
        }, {"title": "连云港市", "value": "连云港市", "key": "连云港市"}, {
            "title": "宿迁市",
            "value": "宿迁市",
            "key": "宿迁市"
        }, {"title": "淮安市", "value": "淮安市", "key": "淮安市"}, {
            "title": "盐城市",
            "value": "盐城市",
            "key": "盐城市"
        }, {"title": "扬州市", "value": "扬州市", "key": "扬州市"}, {
            "title": "泰州市",
            "value": "泰州市",
            "key": "泰州市"
        }, {"title": "南通市", "value": "南通市", "key": "南通市"}, {
            "title": "镇江市",
            "value": "镇江市",
            "key": "镇江市"
        }, {"title": "常州市", "value": "常州市", "key": "常州市"}, {
            "title": "无锡市",
            "value": "无锡市",
            "key": "无锡市"
        }, {"title": "苏州市", "value": "苏州市", "key": "苏州市"}, {
            "title": "常熟市",
            "value": "常熟市",
            "key": "常熟市"
        }, {"title": "张家港市", "value": "张家港市", "key": "张家港市"}, {
            "title": "太仓市",
            "value": "太仓市",
            "key": "太仓市"
        }, {"title": "昆山市", "value": "昆山市", "key": "昆山市"}, {
            "title": "江阴市",
            "value": "江阴市",
            "key": "江阴市"
        }, {"title": "宜兴市", "value": "宜兴市", "key": "宜兴市"}, {
            "title": "溧阳市",
            "value": "溧阳市",
            "key": "溧阳市"
        }, {"title": "扬中市", "value": "扬中市", "key": "扬中市"}, {
            "title": "句容市",
            "value": "句容市",
            "key": "句容市"
        }, {"title": "丹阳市", "value": "丹阳市", "key": "丹阳市"}, {
            "title": "如皋市",
            "value": "如皋市",
            "key": "如皋市"
        }, {"title": "启东市", "value": "启东市", "key": "启东市"}, {
            "title": "海安市",
            "value": "海安市",
            "key": "海安市"
        }, {"title": "高邮市", "value": "高邮市", "key": "高邮市"}, {
            "title": "仪征市",
            "value": "仪征市",
            "key": "仪征市"
        }, {"title": "兴化市", "value": "兴化市", "key": "兴化市"}, {
            "title": "泰兴市",
            "value": "泰兴市",
            "key": "泰兴市"
        }, {"title": "靖江市", "value": "靖江市", "key": "靖江市"}, {
            "title": "东台市",
            "value": "东台市",
            "key": "东台市"
        }, {"title": "邳州市", "value": "邳州市", "key": "邳州市"}, {
            "title": "新沂市",
            "value": "新沂市",
            "key": "新沂市"
        }]
    }, {
        "title": "浙江省",
        "value": "浙江省",
        "key": "浙江省",
        "children": [{"title": "杭州市", "value": "杭州市", "key": "杭州市"}, {
            "title": "宁波市",
            "value": "宁波市",
            "key": "宁波市"
        }, {"title": "湖州市", "value": "湖州市", "key": "湖州市"}, {
            "title": "嘉兴市",
            "value": "嘉兴市",
            "key": "嘉兴市"
        }, {"title": "舟山市", "value": "舟山市", "key": "舟山市"}, {
            "title": "绍兴市",
            "value": "绍兴市",
            "key": "绍兴市"
        }, {"title": "衢州市", "value": "衢州市", "key": "衢州市"}, {
            "title": "金华市",
            "value": "金华市",
            "key": "金华市"
        }, {"title": "台州市", "value": "台州市", "key": "台州市"}, {
            "title": "温州市",
            "value": "温州市",
            "key": "温州市"
        }, {"title": "丽水市", "value": "丽水市", "key": "丽水市"}, {
            "title": "建德市",
            "value": "建德市",
            "key": "建德市"
        }, {"title": "慈溪市", "value": "慈溪市", "key": "慈溪市"}, {
            "title": "余姚市",
            "value": "余姚市",
            "key": "余姚市"
        }, {"title": "平湖市", "value": "平湖市", "key": "平湖市"}, {
            "title": "海宁市",
            "value": "海宁市",
            "key": "海宁市"
        }, {"title": "桐乡市", "value": "桐乡市", "key": "桐乡市"}, {
            "title": "诸暨市",
            "value": "诸暨市",
            "key": "诸暨市"
        }, {"title": "嵊州市", "value": "嵊州市", "key": "嵊州市"}, {
            "title": "江山市",
            "value": "江山市",
            "key": "江山市"
        }, {"title": "兰溪市", "value": "兰溪市", "key": "兰溪市"}, {
            "title": "永康市",
            "value": "永康市",
            "key": "永康市"
        }, {"title": "义乌市", "value": "义乌市", "key": "义乌市"}, {
            "title": "东阳市",
            "value": "东阳市",
            "key": "东阳市"
        }, {"title": "临海市", "value": "临海市", "key": "临海市"}, {
            "title": "温岭市",
            "value": "温岭市",
            "key": "温岭市"
        }, {"title": "瑞安市", "value": "瑞安市", "key": "瑞安市"}, {
            "title": "乐清市",
            "value": "乐清市",
            "key": "乐清市"
        }, {"title": "龙港市", "value": "龙港市", "key": "龙港市"}, {
            "title": "龙泉市",
            "value": "龙泉市",
            "key": "龙泉市"
        }, {"title": "玉环市", "value": "玉环市", "key": "玉环市"}]
    }, {
        "title": "安徽省",
        "value": "安徽省",
        "key": "安徽省",
        "children": [{"title": "合肥市", "value": "合肥市", "key": "合肥市"}, {
            "title": "芜湖市",
            "value": "芜湖市",
            "key": "芜湖市"
        }, {"title": "蚌埠市", "value": "蚌埠市", "key": "蚌埠市"}, {
            "title": "淮南市",
            "value": "淮南市",
            "key": "淮南市"
        }, {"title": "马鞍山市", "value": "马鞍山市", "key": "马鞍山市"}, {
            "title": "淮北市",
            "value": "淮北市",
            "key": "淮北市"
        }, {"title": "铜陵市", "value": "铜陵市", "key": "铜陵市"}, {
            "title": "安庆市",
            "value": "安庆市",
            "key": "安庆市"
        }, {"title": "黄山市", "value": "黄山市", "key": "黄山市"}, {
            "title": "滁州市",
            "value": "滁州市",
            "key": "滁州市"
        }, {"title": "阜阳市", "value": "阜阳市", "key": "阜阳市"}, {
            "title": "宿州市",
            "value": "宿州市",
            "key": "宿州市"
        }, {"title": "六安市", "value": "六安市", "key": "六安市"}, {
            "title": "亳州市",
            "value": "亳州市",
            "key": "亳州市"
        }, {"title": "池州市", "value": "池州市", "key": "池州市"}, {
            "title": "宣城市",
            "value": "宣城市",
            "key": "宣城市"
        }, {"title": "巢湖市", "value": "巢湖市", "key": "巢湖市"}, {
            "title": "桐城市",
            "value": "桐城市",
            "key": "桐城市"
        }, {"title": "天长市", "value": "天长市", "key": "天长市"}, {
            "title": "明光市",
            "value": "明光市",
            "key": "明光市"
        }, {"title": "界首市", "value": "界首市", "key": "界首市"}, {
            "title": "宁国市",
            "value": "宁国市",
            "key": "宁国市"
        }, {"title": "广德市", "value": "广德市", "key": "广德市"}, {
            "title": "潜山市",
            "value": "潜山市",
            "key": "潜山市"
        }, {"title": "无为市", "value": "无为市", "key": "无为市"}]
    }, {
        "title": "福建省",
        "value": "福建省",
        "key": "福建省",
        "children": [{"title": "厦门市", "value": "厦门市", "key": "厦门市"}, {
            "title": "福州市",
            "value": "福州市",
            "key": "福州市"
        }, {"title": "南平市", "value": "南平市", "key": "南平市"}, {
            "title": "三明市",
            "value": "三明市",
            "key": "三明市"
        }, {"title": "莆田市", "value": "莆田市", "key": "莆田市"}, {
            "title": "泉州市",
            "value": "泉州市",
            "key": "泉州市"
        }, {"title": "漳州市", "value": "漳州市", "key": "漳州市"}, {
            "title": "龙岩市",
            "value": "龙岩市",
            "key": "龙岩市"
        }, {"title": "宁德市", "value": "宁德市", "key": "宁德市"}, {
            "title": "福清市",
            "value": "福清市",
            "key": "福清市"
        }, {"title": "邵武市", "value": "邵武市", "key": "邵武市"}, {
            "title": "武夷山市",
            "value": "武夷山市",
            "key": "武夷山市"
        }, {"title": "建瓯市", "value": "建瓯市", "key": "建瓯市"}, {
            "title": "永安市",
            "value": "永安市",
            "key": "永安市"
        }, {"title": "石狮市", "value": "石狮市", "key": "石狮市"}, {
            "title": "晋江市",
            "value": "晋江市",
            "key": "晋江市"
        }, {"title": "南安市", "value": "南安市", "key": "南安市"}, {
            "title": "龙海市",
            "value": "龙海市",
            "key": "龙海市"
        }, {"title": "漳平市", "value": "漳平市", "key": "漳平市"}, {
            "title": "福安市",
            "value": "福安市",
            "key": "福安市"
        }, {"title": "福鼎市", "value": "福鼎市", "key": "福鼎市"}]
    }, {
        "title": "江西省",
        "value": "江西省",
        "key": "江西省",
        "children": [{"title": "南昌市", "value": "南昌市", "key": "南昌市"}, {
            "title": "九江市",
            "value": "九江市",
            "key": "九江市"
        }, {"title": "景德镇市", "value": "景德镇市", "key": "景德镇市"}, {
            "title": "鹰潭市",
            "value": "鹰潭市",
            "key": "鹰潭市"
        }, {"title": "新余市", "value": "新余市", "key": "新余市"}, {
            "title": "萍乡市",
            "value": "萍乡市",
            "key": "萍乡市"
        }, {"title": "赣州市", "value": "赣州市", "key": "赣州市"}, {
            "title": "上饶市",
            "value": "上饶市",
            "key": "上饶市"
        }, {"title": "抚州市", "value": "抚州市", "key": "抚州市"}, {
            "title": "宜春市",
            "value": "宜春市",
            "key": "宜春市"
        }, {"title": "吉安市", "value": "吉安市", "key": "吉安市"}, {
            "title": "瑞昌市",
            "value": "瑞昌市",
            "key": "瑞昌市"
        }, {"title": "共青城市", "value": "共青城市", "key": "共青城市"}, {
            "title": "庐山市",
            "value": "庐山市",
            "key": "庐山市"
        }, {"title": "乐平市", "value": "乐平市", "key": "乐平市"}, {
            "title": "瑞金市",
            "value": "瑞金市",
            "key": "瑞金市"
        }, {"title": "德兴市", "value": "德兴市", "key": "德兴市"}, {
            "title": "丰城市",
            "value": "丰城市",
            "key": "丰城市"
        }, {"title": "樟树市", "value": "樟树市", "key": "樟树市"}, {
            "title": "高安市",
            "value": "高安市",
            "key": "高安市"
        }, {"title": "井冈山市", "value": "井冈山市", "key": "井冈山市"}, {
            "title": "贵溪市",
            "value": "贵溪市",
            "key": "贵溪市"
        }]
    }, {
        "title": "山东省",
        "value": "山东省",
        "key": "山东省",
        "children": [{"title": "济南市", "value": "济南市", "key": "济南市"}, {
            "title": "青岛市",
            "value": "青岛市",
            "key": "青岛市"
        }, {"title": "聊城市", "value": "聊城市", "key": "聊城市"}, {
            "title": "德州市",
            "value": "德州市",
            "key": "德州市"
        }, {"title": "东营市", "value": "东营市", "key": "东营市"}, {
            "title": "淄博市",
            "value": "淄博市",
            "key": "淄博市"
        }, {"title": "潍坊市", "value": "潍坊市", "key": "潍坊市"}, {
            "title": "烟台市",
            "value": "烟台市",
            "key": "烟台市"
        }, {"title": "威海市", "value": "威海市", "key": "威海市"}, {
            "title": "日照市",
            "value": "日照市",
            "key": "日照市"
        }, {"title": "临沂市", "value": "临沂市", "key": "临沂市"}, {
            "title": "枣庄市",
            "value": "枣庄市",
            "key": "枣庄市"
        }, {"title": "济宁市", "value": "济宁市", "key": "济宁市"}, {
            "title": "泰安市",
            "value": "泰安市",
            "key": "泰安市"
        }, {"title": "滨州市", "value": "滨州市", "key": "滨州市"}, {
            "title": "菏泽市",
            "value": "菏泽市",
            "key": "菏泽市"
        }, {"title": "胶州市", "value": "胶州市", "key": "胶州市"}, {
            "title": "平度市",
            "value": "平度市",
            "key": "平度市"
        }, {"title": "莱西市", "value": "莱西市", "key": "莱西市"}, {
            "title": "临清市",
            "value": "临清市",
            "key": "临清市"
        }, {"title": "乐陵市", "value": "乐陵市", "key": "乐陵市"}, {
            "title": "禹城市",
            "value": "禹城市",
            "key": "禹城市"
        }, {"title": "安丘市", "value": "安丘市", "key": "安丘市"}, {
            "title": "昌邑市",
            "value": "昌邑市",
            "key": "昌邑市"
        }, {"title": "高密市", "value": "高密市", "key": "高密市"}, {
            "title": "青州市",
            "value": "青州市",
            "key": "青州市"
        }, {"title": "诸城市", "value": "诸城市", "key": "诸城市"}, {
            "title": "寿光市",
            "value": "寿光市",
            "key": "寿光市"
        }, {"title": "栖霞市", "value": "栖霞市", "key": "栖霞市"}, {
            "title": "海阳市",
            "value": "海阳市",
            "key": "海阳市"
        }, {"title": "龙口市", "value": "龙口市", "key": "龙口市"}, {
            "title": "莱阳市",
            "value": "莱阳市",
            "key": "莱阳市"
        }, {"title": "莱州市", "value": "莱州市", "key": "莱州市"}, {
            "title": "蓬莱市",
            "value": "蓬莱市",
            "key": "蓬莱市"
        }, {"title": "招远市", "value": "招远市", "key": "招远市"}, {
            "title": "荣成市",
            "value": "荣成市",
            "key": "荣成市"
        }, {"title": "乳山市", "value": "乳山市", "key": "乳山市"}, {
            "title": "滕州市",
            "value": "滕州市",
            "key": "滕州市"
        }, {"title": "曲阜市", "value": "曲阜市", "key": "曲阜市"}, {
            "title": "邹城市",
            "value": "邹城市",
            "key": "邹城市"
        }, {"title": "新泰市", "value": "新泰市", "key": "新泰市"}, {
            "title": "肥城市",
            "value": "肥城市",
            "key": "肥城市"
        }, {"title": "邹平市", "value": "邹平市", "key": "邹平市"}]
    }, {
        "title": "河南省",
        "value": "河南省",
        "key": "河南省",
        "children": [{"title": "郑州市", "value": "郑州市", "key": "郑州市"}, {
            "title": "开封市",
            "value": "开封市",
            "key": "开封市"
        }, {"title": "洛阳市", "value": "洛阳市", "key": "洛阳市"}, {
            "title": "平顶山市",
            "value": "平顶山市",
            "key": "平顶山市"
        }, {"title": "安阳市", "value": "安阳市", "key": "安阳市"}, {
            "title": "鹤壁市",
            "value": "鹤壁市",
            "key": "鹤壁市"
        }, {"title": "新乡市", "value": "新乡市", "key": "新乡市"}, {
            "title": "焦作市",
            "value": "焦作市",
            "key": "焦作市"
        }, {"title": "濮阳市", "value": "濮阳市", "key": "濮阳市"}, {
            "title": "许昌市",
            "value": "许昌市",
            "key": "许昌市"
        }, {"title": "漯河市", "value": "漯河市", "key": "漯河市"}, {
            "title": "三门峡市",
            "value": "三门峡市",
            "key": "三门峡市"
        }, {"title": "南阳市", "value": "南阳市", "key": "南阳市"}, {
            "title": "商丘市",
            "value": "商丘市",
            "key": "商丘市"
        }, {"title": "周口市", "value": "周口市", "key": "周口市"}, {
            "title": "驻马店市",
            "value": "驻马店市",
            "key": "驻马店市"
        }, {"title": "信阳市", "value": "信阳市", "key": "信阳市"}, {
            "title": "荥阳市",
            "value": "荥阳市",
            "key": "荥阳市"
        }, {"title": "新郑市", "value": "新郑市", "key": "新郑市"}, {
            "title": "登封市",
            "value": "登封市",
            "key": "登封市"
        }, {"title": "新密市", "value": "新密市", "key": "新密市"}, {
            "title": "偃师市",
            "value": "偃师市",
            "key": "偃师市"
        }, {"title": "孟州市", "value": "孟州市", "key": "孟州市"}, {
            "title": "沁阳市",
            "value": "沁阳市",
            "key": "沁阳市"
        }, {"title": "卫辉市", "value": "卫辉市", "key": "卫辉市"}, {
            "title": "辉县市",
            "value": "辉县市",
            "key": "辉县市"
        }, {"title": "长垣市", "value": "长垣市", "key": "长垣市"}, {
            "title": "林州市",
            "value": "林州市",
            "key": "林州市"
        }, {"title": "禹州市", "value": "禹州市", "key": "禹州市"}, {
            "title": "长葛市",
            "value": "长葛市",
            "key": "长葛市"
        }, {"title": "舞钢市", "value": "舞钢市", "key": "舞钢市"}, {
            "title": "义马市",
            "value": "义马市",
            "key": "义马市"
        }, {"title": "灵宝市", "value": "灵宝市", "key": "灵宝市"}, {
            "title": "项城市",
            "value": "项城市",
            "key": "项城市"
        }, {"title": "巩义市", "value": "巩义市", "key": "巩义市"}, {
            "title": "邓州市",
            "value": "邓州市",
            "key": "邓州市"
        }, {"title": "永城市", "value": "永城市", "key": "永城市"}, {
            "title": "汝州市",
            "value": "汝州市",
            "key": "汝州市"
        }, {"title": "济源市", "value": "济源市", "key": "济源市"}]
    }, {
        "title": "湖北省",
        "value": "湖北省",
        "key": "湖北省",
        "children": [{"title": "武汉市", "value": "武汉市", "key": "武汉市"}, {
            "title": "十堰市",
            "value": "十堰市",
            "key": "十堰市"
        }, {"title": "襄阳市", "value": "襄阳市", "key": "襄阳市"}, {
            "title": "荆门市",
            "value": "荆门市",
            "key": "荆门市"
        }, {"title": "孝感市", "value": "孝感市", "key": "孝感市"}, {
            "title": "黄冈市",
            "value": "黄冈市",
            "key": "黄冈市"
        }, {"title": "鄂州市", "value": "鄂州市", "key": "鄂州市"}, {
            "title": "黄石市",
            "value": "黄石市",
            "key": "黄石市"
        }, {"title": "咸宁市", "value": "咸宁市", "key": "咸宁市"}, {
            "title": "荆州市",
            "value": "荆州市",
            "key": "荆州市"
        }, {"title": "宜昌市", "value": "宜昌市", "key": "宜昌市"}, {
            "title": "随州市",
            "value": "随州市",
            "key": "随州市"
        }, {"title": "丹江口市", "value": "丹江口市", "key": "丹江口市"}, {
            "title": "老河口市",
            "value": "老河口市",
            "key": "老河口市"
        }, {"title": "枣阳市", "value": "枣阳市", "key": "枣阳市"}, {
            "title": "宜城市",
            "value": "宜城市",
            "key": "宜城市"
        }, {"title": "钟祥市", "value": "钟祥市", "key": "钟祥市"}, {
            "title": "京山市",
            "value": "京山市",
            "key": "京山市"
        }, {"title": "汉川市", "value": "汉川市", "key": "汉川市"}, {
            "title": "应城市",
            "value": "应城市",
            "key": "应城市"
        }, {"title": "安陆市", "value": "安陆市", "key": "安陆市"}, {
            "title": "广水市",
            "value": "广水市",
            "key": "广水市"
        }, {"title": "麻城市", "value": "麻城市", "key": "麻城市"}, {
            "title": "武穴市",
            "value": "武穴市",
            "key": "武穴市"
        }, {"title": "大冶市", "value": "大冶市", "key": "大冶市"}, {
            "title": "赤壁市",
            "value": "赤壁市",
            "key": "赤壁市"
        }, {"title": "石首市", "value": "石首市", "key": "石首市"}, {
            "title": "洪湖市",
            "value": "洪湖市",
            "key": "洪湖市"
        }, {"title": "松滋市", "value": "松滋市", "key": "松滋市"}, {
            "title": "宜都市",
            "value": "宜都市",
            "key": "宜都市"
        }, {"title": "枝江市", "value": "枝江市", "key": "枝江市"}, {
            "title": "当阳市",
            "value": "当阳市",
            "key": "当阳市"
        }, {"title": "恩施市", "value": "恩施市", "key": "恩施市"}, {
            "title": "利川市",
            "value": "利川市",
            "key": "利川市"
        }, {"title": "仙桃市", "value": "仙桃市", "key": "仙桃市"}, {
            "title": "天门市",
            "value": "天门市",
            "key": "天门市"
        }, {"title": "潜江市", "value": "潜江市", "key": "潜江市"}]
    }, {
        "title": "湖南省",
        "value": "湖南省",
        "key": "湖南省",
        "children": [{"title": "长沙市", "value": "长沙市", "key": "长沙市"}, {
            "title": "衡阳市",
            "value": "衡阳市",
            "key": "衡阳市"
        }, {"title": "张家界市", "value": "张家界市", "key": "张家界市"}, {
            "title": "常德市",
            "value": "常德市",
            "key": "常德市"
        }, {"title": "益阳市", "value": "益阳市", "key": "益阳市"}, {
            "title": "岳阳市",
            "value": "岳阳市",
            "key": "岳阳市"
        }, {"title": "株洲市", "value": "株洲市", "key": "株洲市"}, {
            "title": "湘潭市",
            "value": "湘潭市",
            "key": "湘潭市"
        }, {"title": "郴州市", "value": "郴州市", "key": "郴州市"}, {
            "title": "永州市",
            "value": "永州市",
            "key": "永州市"
        }, {"title": "邵阳市", "value": "邵阳市", "key": "邵阳市"}, {
            "title": "怀化市",
            "value": "怀化市",
            "key": "怀化市"
        }, {"title": "娄底市", "value": "娄底市", "key": "娄底市"}, {
            "title": "耒阳市",
            "value": "耒阳市",
            "key": "耒阳市"
        }, {"title": "常宁市", "value": "常宁市", "key": "常宁市"}, {
            "title": "浏阳市",
            "value": "浏阳市",
            "key": "浏阳市"
        }, {"title": "津市市", "value": "津市市", "key": "津市市"}, {
            "title": "沅江市",
            "value": "沅江市",
            "key": "沅江市"
        }, {"title": "汨罗市", "value": "汨罗市", "key": "汨罗市"}, {
            "title": "临湘市",
            "value": "临湘市",
            "key": "临湘市"
        }, {"title": "醴陵市", "value": "醴陵市", "key": "醴陵市"}, {
            "title": "湘乡市",
            "value": "湘乡市",
            "key": "湘乡市"
        }, {"title": "韶山市", "value": "韶山市", "key": "韶山市"}, {
            "title": "资兴市",
            "value": "资兴市",
            "key": "资兴市"
        }, {"title": "武冈市", "value": "武冈市", "key": "武冈市"}, {
            "title": "邵东市",
            "value": "邵东市",
            "key": "邵东市"
        }, {"title": "洪江市", "value": "洪江市", "key": "洪江市"}, {
            "title": "冷水江市",
            "value": "冷水江市",
            "key": "冷水江市"
        }, {"title": "涟源市", "value": "涟源市", "key": "涟源市"}, {
            "title": "吉首市",
            "value": "吉首市",
            "key": "吉首市"
        }, {"title": "宁乡市", "value": "宁乡市", "key": "宁乡市"}]
    }, {
        "title": "广东省",
        "value": "广东省",
        "key": "广东省",
        "children": [{"title": "广州市", "value": "广州市", "key": "广州市"}, {
            "title": "深圳市",
            "value": "深圳市",
            "key": "深圳市"
        }, {"title": "清远市", "value": "清远市", "key": "清远市"}, {
            "title": "韶关市",
            "value": "韶关市",
            "key": "韶关市"
        }, {"title": "河源市", "value": "河源市", "key": "河源市"}, {
            "title": "梅州市",
            "value": "梅州市",
            "key": "梅州市"
        }, {"title": "潮州市", "value": "潮州市", "key": "潮州市"}, {
            "title": "汕头市",
            "value": "汕头市",
            "key": "汕头市"
        }, {"title": "揭阳市", "value": "揭阳市", "key": "揭阳市"}, {
            "title": "汕尾市",
            "value": "汕尾市",
            "key": "汕尾市"
        }, {"title": "惠州市", "value": "惠州市", "key": "惠州市"}, {
            "title": "东莞市",
            "value": "东莞市",
            "key": "东莞市"
        }, {"title": "珠海市", "value": "珠海市", "key": "珠海市"}, {
            "title": "中山市",
            "value": "中山市",
            "key": "中山市"
        }, {"title": "江门市", "value": "江门市", "key": "江门市"}, {
            "title": "佛山市",
            "value": "佛山市",
            "key": "佛山市"
        }, {"title": "肇庆市", "value": "肇庆市", "key": "肇庆市"}, {
            "title": "云浮市",
            "value": "云浮市",
            "key": "云浮市"
        }, {"title": "阳江市", "value": "阳江市", "key": "阳江市"}, {
            "title": "茂名市",
            "value": "茂名市",
            "key": "茂名市"
        }, {"title": "湛江市", "value": "湛江市", "key": "湛江市"}, {
            "title": "英德市",
            "value": "英德市",
            "key": "英德市"
        }, {"title": "连州市", "value": "连州市", "key": "连州市"}, {
            "title": "乐昌市",
            "value": "乐昌市",
            "key": "乐昌市"
        }, {"title": "南雄市", "value": "南雄市", "key": "南雄市"}, {
            "title": "兴宁市",
            "value": "兴宁市",
            "key": "兴宁市"
        }, {"title": "普宁市", "value": "普宁市", "key": "普宁市"}, {
            "title": "陆丰市",
            "value": "陆丰市",
            "key": "陆丰市"
        }, {"title": "恩平市", "value": "恩平市", "key": "恩平市"}, {
            "title": "台山市",
            "value": "台山市",
            "key": "台山市"
        }, {"title": "开平市", "value": "开平市", "key": "开平市"}, {
            "title": "鹤山市",
            "value": "鹤山市",
            "key": "鹤山市"
        }, {"title": "四会市", "value": "四会市", "key": "四会市"}, {
            "title": "罗定市",
            "value": "罗定市",
            "key": "罗定市"
        }, {"title": "阳春市", "value": "阳春市", "key": "阳春市"}, {
            "title": "化州市",
            "value": "化州市",
            "key": "化州市"
        }, {"title": "信宜市", "value": "信宜市", "key": "信宜市"}, {
            "title": "高州市",
            "value": "高州市",
            "key": "高州市"
        }, {"title": "吴川市", "value": "吴川市", "key": "吴川市"}, {
            "title": "廉江市",
            "value": "廉江市",
            "key": "廉江市"
        }, {"title": "雷州市", "value": "雷州市", "key": "雷州市"}]
    }, {
        "title": "广西壮族自治区",
        "value": "广西壮族自治区",
        "key": "广西壮族自治区",
        "children": [{"title": "南宁市", "value": "南宁市", "key": "南宁市"}, {
            "title": "桂林市",
            "value": "桂林市",
            "key": "桂林市"
        }, {"title": "柳州市", "value": "柳州市", "key": "柳州市"}, {
            "title": "梧州市",
            "value": "梧州市",
            "key": "梧州市"
        }, {"title": "贵港市", "value": "贵港市", "key": "贵港市"}, {
            "title": "玉林市",
            "value": "玉林市",
            "key": "玉林市"
        }, {"title": "钦州市", "value": "钦州市", "key": "钦州市"}, {
            "title": "北海市",
            "value": "北海市",
            "key": "北海市"
        }, {"title": "防城港市", "value": "防城港市", "key": "防城港市"}, {
            "title": "崇左市",
            "value": "崇左市",
            "key": "崇左市"
        }, {"title": "百色市", "value": "百色市", "key": "百色市"}, {
            "title": "河池市",
            "value": "河池市",
            "key": "河池市"
        }, {"title": "来宾市", "value": "来宾市", "key": "来宾市"}, {
            "title": "贺州市",
            "value": "贺州市",
            "key": "贺州市"
        }, {"title": "岑溪市", "value": "岑溪市", "key": "岑溪市"}, {
            "title": "桂平市",
            "value": "桂平市",
            "key": "桂平市"
        }, {"title": "北流市", "value": "北流市", "key": "北流市"}, {
            "title": "东兴市",
            "value": "东兴市",
            "key": "东兴市"
        }, {"title": "凭祥市", "value": "凭祥市", "key": "凭祥市"}, {
            "title": "合山市",
            "value": "合山市",
            "key": "合山市"
        }, {"title": "靖西市", "value": "靖西市", "key": "靖西市"}, {
            "title": "平果市",
            "value": "平果市",
            "key": "平果市"
        }, {"title": "荔浦市", "value": "荔浦市", "key": "荔浦市"}]
    }, {
        "title": "海南省",
        "value": "海南省",
        "key": "海南省",
        "children": [{"title": "海口市", "value": "海口市", "key": "海口市"}, {
            "title": "三亚市",
            "value": "三亚市",
            "key": "三亚市"
        }, {"title": "三沙市", "value": "三沙市", "key": "三沙市"}, {
            "title": "儋州市",
            "value": "儋州市",
            "key": "儋州市"
        }, {"title": "文昌市", "value": "文昌市", "key": "文昌市"}, {
            "title": "琼海市",
            "value": "琼海市",
            "key": "琼海市"
        }, {"title": "万宁市", "value": "万宁市", "key": "万宁市"}, {
            "title": "东方市",
            "value": "东方市",
            "key": "东方市"
        }, {"title": "五指山市", "value": "五指山市", "key": "五指山市"}]
    }, {
        "title": "四川省",
        "value": "四川省",
        "key": "四川省",
        "children": [{"title": "成都市", "value": "成都市", "key": "成都市"}, {
            "title": "广元市",
            "value": "广元市",
            "key": "广元市"
        }, {"title": "绵阳市", "value": "绵阳市", "key": "绵阳市"}, {
            "title": "德阳市",
            "value": "德阳市",
            "key": "德阳市"
        }, {"title": "南充市", "value": "南充市", "key": "南充市"}, {
            "title": "广安市",
            "value": "广安市",
            "key": "广安市"
        }, {"title": "遂宁市", "value": "遂宁市", "key": "遂宁市"}, {
            "title": "内江市",
            "value": "内江市",
            "key": "内江市"
        }, {"title": "乐山市", "value": "乐山市", "key": "乐山市"}, {
            "title": "自贡市",
            "value": "自贡市",
            "key": "自贡市"
        }, {"title": "泸州市", "value": "泸州市", "key": "泸州市"}, {
            "title": "宜宾市",
            "value": "宜宾市",
            "key": "宜宾市"
        }, {"title": "攀枝花市", "value": "攀枝花市", "key": "攀枝花市"}, {
            "title": "巴中市",
            "value": "巴中市",
            "key": "巴中市"
        }, {"title": "达州市", "value": "达州市", "key": "达州市"}, {
            "title": "资阳市",
            "value": "资阳市",
            "key": "资阳市"
        }, {"title": "眉山市", "value": "眉山市", "key": "眉山市"}, {
            "title": "雅安市",
            "value": "雅安市",
            "key": "雅安市"
        }, {"title": "崇州市", "value": "崇州市", "key": "崇州市"}, {
            "title": "邛崃市",
            "value": "邛崃市",
            "key": "邛崃市"
        }, {"title": "都江堰市", "value": "都江堰市", "key": "都江堰市"}, {
            "title": "彭州市",
            "value": "彭州市",
            "key": "彭州市"
        }, {"title": "江油市", "value": "江油市", "key": "江油市"}, {
            "title": "什邡市",
            "value": "什邡市",
            "key": "什邡市"
        }, {"title": "广汉市", "value": "广汉市", "key": "广汉市"}, {
            "title": "绵竹市",
            "value": "绵竹市",
            "key": "绵竹市"
        }, {"title": "阆中市", "value": "阆中市", "key": "阆中市"}, {
            "title": "华蓥市",
            "value": "华蓥市",
            "key": "华蓥市"
        }, {"title": "峨眉山市", "value": "峨眉山市", "key": "峨眉山市"}, {
            "title": "万源市",
            "value": "万源市",
            "key": "万源市"
        }, {"title": "简阳市", "value": "简阳市", "key": "简阳市"}, {
            "title": "西昌市",
            "value": "西昌市",
            "key": "西昌市"
        }, {"title": "康定市", "value": "康定市", "key": "康定市"}, {
            "title": "马尔康市",
            "value": "马尔康市",
            "key": "马尔康市"
        }, {"title": "隆昌市", "value": "隆昌市", "key": "隆昌市"}, {
            "title": "射洪市",
            "value": "射洪市",
            "key": "射洪市"
        }, {"title": "会理市", "value": "会理市", "key": "会理市"}]
    }, {
        "title": "贵州省",
        "value": "贵州省",
        "key": "贵州省",
        "children": [{"title": "贵阳市", "value": "贵阳市", "key": "贵阳市"}, {
            "title": "六盘水市",
            "value": "六盘水市",
            "key": "六盘水市"
        }, {"title": "遵义市", "value": "遵义市", "key": "遵义市"}, {
            "title": "安顺市",
            "value": "安顺市",
            "key": "安顺市"
        }, {"title": "毕节市", "value": "毕节市", "key": "毕节市"}, {
            "title": "铜仁市",
            "value": "铜仁市",
            "key": "铜仁市"
        }, {"title": "清镇市", "value": "清镇市", "key": "清镇市"}, {
            "title": "赤水市",
            "value": "赤水市",
            "key": "赤水市"
        }, {"title": "仁怀市", "value": "仁怀市", "key": "仁怀市"}, {
            "title": "凯里市",
            "value": "凯里市",
            "key": "凯里市"
        }, {"title": "都匀市", "value": "都匀市", "key": "都匀市"}, {
            "title": "兴义市",
            "value": "兴义市",
            "key": "兴义市"
        }, {"title": "福泉市", "value": "福泉市", "key": "福泉市"}, {
            "title": "盘州市",
            "value": "盘州市",
            "key": "盘州市"
        }, {"title": "兴仁市", "value": "兴仁市", "key": "兴仁市"}]
    }, {
        "title": "云南省",
        "value": "云南省",
        "key": "云南省",
        "children": [{"title": "昆明市", "value": "昆明市", "key": "昆明市"}, {
            "title": "曲靖市",
            "value": "曲靖市",
            "key": "曲靖市"
        }, {"title": "玉溪市", "value": "玉溪市", "key": "玉溪市"}, {
            "title": "丽江市",
            "value": "丽江市",
            "key": "丽江市"
        }, {"title": "昭通市", "value": "昭通市", "key": "昭通市"}, {
            "title": "普洱市",
            "value": "普洱市",
            "key": "普洱市"
        }, {"title": "临沧市", "value": "临沧市", "key": "临沧市"}, {
            "title": "保山市",
            "value": "保山市",
            "key": "保山市"
        }, {"title": "安宁市", "value": "安宁市", "key": "安宁市"}, {
            "title": "宣威市",
            "value": "宣威市",
            "key": "宣威市"
        }, {"title": "芒市", "value": "芒市", "key": "芒市"}, {
            "title": "瑞丽市",
            "value": "瑞丽市",
            "key": "瑞丽市"
        }, {"title": "大理市", "value": "大理市", "key": "大理市"}, {
            "title": "楚雄市",
            "value": "楚雄市",
            "key": "楚雄市"
        }, {"title": "个旧市", "value": "个旧市", "key": "个旧市"}, {
            "title": "开远市",
            "value": "开远市",
            "key": "开远市"
        }, {"title": "蒙自市", "value": "蒙自市", "key": "蒙自市"}, {
            "title": "弥勒市",
            "value": "弥勒市",
            "key": "弥勒市"
        }, {"title": "景洪市", "value": "景洪市", "key": "景洪市"}, {
            "title": "文山市",
            "value": "文山市",
            "key": "文山市"
        }, {"title": "香格里拉市", "value": "香格里拉市", "key": "香格里拉市"}, {
            "title": "腾冲市",
            "value": "腾冲市",
            "key": "腾冲市"
        }, {"title": "水富市", "value": "水富市", "key": "水富市"}, {
            "title": "澄江市",
            "value": "澄江市",
            "key": "澄江市"
        }, {"title": "泸水市", "value": "泸水市", "key": "泸水市"}]
    }, {
        "title": "陕西省",
        "value": "陕西省",
        "key": "陕西省",
        "children": [{"title": "西安市", "value": "西安市", "key": "西安市"}, {
            "title": "延安市",
            "value": "延安市",
            "key": "延安市"
        }, {"title": "铜川市", "value": "铜川市", "key": "铜川市"}, {
            "title": "渭南市",
            "value": "渭南市",
            "key": "渭南市"
        }, {"title": "咸阳市", "value": "咸阳市", "key": "咸阳市"}, {
            "title": "宝鸡市",
            "value": "宝鸡市",
            "key": "宝鸡市"
        }, {"title": "汉中市", "value": "汉中市", "key": "汉中市"}, {
            "title": "榆林市",
            "value": "榆林市",
            "key": "榆林市"
        }, {"title": "商洛市", "value": "商洛市", "key": "商洛市"}, {
            "title": "安康市",
            "value": "安康市",
            "key": "安康市"
        }, {"title": "韩城市", "value": "韩城市", "key": "韩城市"}, {
            "title": "华阴市",
            "value": "华阴市",
            "key": "华阴市"
        }, {"title": "兴平市", "value": "兴平市", "key": "兴平市"}, {
            "title": "彬州市",
            "value": "彬州市",
            "key": "彬州市"
        }, {"title": "神木市", "value": "神木市", "key": "神木市"}, {
            "title": "子长市",
            "value": "子长市",
            "key": "子长市"
        }]
    }, {
        "title": "甘肃省",
        "value": "甘肃省",
        "key": "甘肃省",
        "children": [{"title": "兰州市", "value": "兰州市", "key": "兰州市"}, {
            "title": "嘉峪关市",
            "value": "嘉峪关市",
            "key": "嘉峪关市"
        }, {"title": "金昌市", "value": "金昌市", "key": "金昌市"}, {
            "title": "白银市",
            "value": "白银市",
            "key": "白银市"
        }, {"title": "天水市", "value": "天水市", "key": "天水市"}, {
            "title": "酒泉市",
            "value": "酒泉市",
            "key": "酒泉市"
        }, {"title": "张掖市", "value": "张掖市", "key": "张掖市"}, {
            "title": "武威市",
            "value": "武威市",
            "key": "武威市"
        }, {"title": "庆阳市", "value": "庆阳市", "key": "庆阳市"}, {
            "title": "平凉市",
            "value": "平凉市",
            "key": "平凉市"
        }, {"title": "定西市", "value": "定西市", "key": "定西市"}, {
            "title": "陇南市",
            "value": "陇南市",
            "key": "陇南市"
        }, {"title": "玉门市", "value": "玉门市", "key": "玉门市"}, {
            "title": "敦煌市",
            "value": "敦煌市",
            "key": "敦煌市"
        }, {"title": "临夏市", "value": "临夏市", "key": "临夏市"}, {
            "title": "合作市",
            "value": "合作市",
            "key": "合作市"
        }, {"title": "华亭市", "value": "华亭市", "key": "华亭市"}]
    }, {
        "title": "青海省",
        "value": "青海省",
        "key": "青海省",
        "children": [{"title": "西宁市", "value": "西宁市", "key": "西宁市"}, {
            "title": "海东市",
            "value": "海东市",
            "key": "海东市"
        }, {"title": "格尔木市", "value": "格尔木市", "key": "格尔木市"}, {
            "title": "德令哈市",
            "value": "德令哈市",
            "key": "德令哈市"
        }, {"title": "玉树市", "value": "玉树市", "key": "玉树市"}, {
            "title": "茫崖市",
            "value": "茫崖市",
            "key": "茫崖市"
        }]
    }, {
        "title": "西藏自治区",
        "value": "西藏自治区",
        "key": "西藏自治区",
        "children": [{"title": "拉萨市", "value": "拉萨市", "key": "拉萨市"}, {
            "title": "日喀则市",
            "value": "日喀则市",
            "key": "日喀则市"
        }, {"title": "昌都市", "value": "昌都市", "key": "昌都市"}, {
            "title": "林芝市",
            "value": "林芝市",
            "key": "林芝市"
        }, {"title": "山南市", "value": "山南市", "key": "山南市"}, {
            "title": "那曲市",
            "value": "那曲市",
            "key": "那曲市"
        }]
    }, {
        "title": "宁夏回族自治区",
        "value": "宁夏回族自治区",
        "key": "宁夏回族自治区",
        "children": [{"title": "银川市", "value": "银川市", "key": "银川市"}, {
            "title": "石嘴山市",
            "value": "石嘴山市",
            "key": "石嘴山市"
        }, {"title": "吴忠市", "value": "吴忠市", "key": "吴忠市"}, {
            "title": "中卫市",
            "value": "中卫市",
            "key": "中卫市"
        }, {"title": "固原市", "value": "固原市", "key": "固原市"}, {
            "title": "灵武市",
            "value": "灵武市",
            "key": "灵武市"
        }, {"title": "青铜峡市", "value": "青铜峡市", "key": "青铜峡市"}]
    }, {
        "title": "新疆维吾尔自治区",
        "value": "新疆维吾尔自治区",
        "key": "新疆维吾尔自治区",
        "children": [{"title": "乌鲁木齐市", "value": "乌鲁木齐市", "key": "乌鲁木齐市"}, {
            "title": "克拉玛依市",
            "value": "克拉玛依市",
            "key": "克拉玛依市"
        }, {"title": "吐鲁番市", "value": "吐鲁番市", "key": "吐鲁番市"}, {
            "title": "哈密市",
            "value": "哈密市",
            "key": "哈密市"
        }, {"title": "喀什市", "value": "喀什市", "key": "喀什市"}, {
            "title": "阿克苏市",
            "value": "阿克苏市",
            "key": "阿克苏市"
        }, {"title": "库车市", "value": "库车市", "key": "库车市"}, {
            "title": "和田市",
            "value": "和田市",
            "key": "和田市"
        }, {"title": "阿图什市", "value": "阿图什市", "key": "阿图什市"}, {
            "title": "阿拉山口市",
            "value": "阿拉山口市",
            "key": "阿拉山口市"
        }, {"title": "博乐市", "value": "博乐市", "key": "博乐市"}, {
            "title": "昌吉市",
            "value": "昌吉市",
            "key": "昌吉市"
        }, {"title": "阜康市", "value": "阜康市", "key": "阜康市"}, {
            "title": "库尔勒市",
            "value": "库尔勒市",
            "key": "库尔勒市"
        }, {"title": "伊宁市", "value": "伊宁市", "key": "伊宁市"}, {
            "title": "奎屯市",
            "value": "奎屯市",
            "key": "奎屯市"
        }, {"title": "塔城市", "value": "塔城市", "key": "塔城市"}, {
            "title": "乌苏市",
            "value": "乌苏市",
            "key": "乌苏市"
        }, {"title": "阿勒泰市", "value": "阿勒泰市", "key": "阿勒泰市"}, {
            "title": "霍尔果斯市",
            "value": "霍尔果斯市",
            "key": "霍尔果斯市"
        }, {"title": "石河子市", "value": "石河子市", "key": "石河子市"}, {
            "title": "阿拉尔市",
            "value": "阿拉尔市",
            "key": "阿拉尔市"
        }, {"title": "图木舒克市", "value": "图木舒克市", "key": "图木舒克市"}, {
            "title": "五家渠市",
            "value": "五家渠市",
            "key": "五家渠市"
        }, {"title": "北屯市", "value": "北屯市", "key": "北屯市"}, {
            "title": "铁门关市",
            "value": "铁门关市",
            "key": "铁门关市"
        }, {"title": "双河市", "value": "双河市", "key": "双河市"}, {
            "title": "可克达拉市",
            "value": "可克达拉市",
            "key": "可克达拉市"
        }, {"title": "昆玉市", "value": "昆玉市", "key": "昆玉市"}, {
            "title": "胡杨河市",
            "value": "胡杨河市",
            "key": "胡杨河市"
        }]
    }, {
        "title": "台湾省",
        "value": "台湾省",
        "key": "台湾省",
        "children": [{"title": "台北市", "value": "台北市", "key": "台北市"}, {
            "title": "新北市",
            "value": "新北市",
            "key": "新北市"
        }, {"title": "桃园市", "value": "桃园市", "key": "桃园市"}, {
            "title": "台中市",
            "value": "台中市",
            "key": "台中市"
        }, {"title": "台南市", "value": "台南市", "key": "台南市"}, {
            "title": "高雄市",
            "value": "高雄市",
            "key": "高雄市"
        }, {"title": "基隆市", "value": "基隆市", "key": "基隆市"}, {
            "title": "新竹市",
            "value": "新竹市",
            "key": "新竹市"
        }, {"title": "嘉义市", "value": "嘉义市", "key": "嘉义市"}]
    }]
}
const malesvg=()=>(
    <svg width="1em" height="1em" viewBox="0 0 1024 1024">
        <path
            d="M795.189333 176.917333H682.666667a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V219.946667l-105.866667 105.866666A350.613333 350.613333 0 0 1 821.333333 554.666667c0 194.4-157.6 352-352 352S117.333333 749.066667 117.333333 554.666667s157.6-352 352-352a350.538667 350.538667 0 0 1 221.6 78.506666l104.256-104.256zM469.333333 842.666667c159.061333 0 288-128.938667 288-288S628.394667 266.666667 469.333333 266.666667 181.333333 395.605333 181.333333 554.666667s128.938667 288 288 288z"
            p-id="3875" fill="#33a3dc"></path>
    </svg>
)
const femalesvg=()=>(
    <svg width="1em" height="1em" viewBox="0 0 1024 1024">
        <path
            d="M485.333333 768v-43.765333C321.077333 710.688 192 573.088 192 405.333333 192 228.597333 335.264 85.333333 512 85.333333c176.736 0 320 143.264 320 320 0 164.106667-123.52 299.349333-282.666667 317.845334V768H640a32 32 0 0 1 0 64h-90.666667v77.333333a32 32 0 0 1-64 0V832H384a32 32 0 0 1 0-64h101.333333zM512 661.333333c141.386667 0 256-114.613333 256-256S653.386667 149.333333 512 149.333333 256 263.946667 256 405.333333s114.613333 256 256 256z"
            p-id="4077" fill="#F4D1D7"></path>
    </svg>
)
﻿if(parseInt("一千一百十一") != 1111) { ///< 如果還不支援，才需要宣告
    parseInt = function() {
        var orig = parseInt;
        var chars = {
            "０": 0, "零": 0, "○": 0, "〇": 0, "洞": 0,
            "１": 1, "一": 1, "壹": 1, "ㄧ": 1, "弌": 1, "幺": 1, "ㄠ": 1,
            "２": 2, "二": 2, "貳": 2, "贰": 2, "弍": 2, "兩": 2, "两": 2,
            "３": 3, "三": 3, "參": 3, "叁": 3, "弎": 3, "参": 3, "叄": 3,
            "４": 4, "四": 4, "肆": 4, "䦉": 4, "刀": 4,
            "５": 5, "五": 5, "伍": 5,
            "６": 6, "六": 6, "陸": 6, "陆": 6,
            "７": 7, "七": 7, "柒": 7, "拐": 7,
            "８": 8, "八": 8, "捌": 8,
            "９": 9, "九": 9, "玖": 9, "勾": 9,
            "十": 10, "拾": 10, "什": 10, "呀": 10,
            "百": 100, "佰": 100,
            "千": 1000, "仟": 1000,
            "念": 20, "廿": 20,
            "卅": 30, "卌": 40, "皕": 200,
            "萬": 1e+4, "万": 1e+4,
            "億": 1e+8, "亿": 1e+8,
            "兆": 1e+12,
            "京": 1e+16, "經": 1e+16, "经": 1e+16,
            "垓": 1e+20,
            "秭": 1e+24, "杼": 1e+24,
            "穰": 1e+28, "壤": 1e+28,
            "溝": 1e+32, "沟": 1e+32,
            "澗": 1e+36, "涧": 1e+36,
            "正": 1e+40, "載": 1e+44, "極": 1e+48
        };
        return function() {
            var result = orig.apply(this, arguments);
            if(!isNaN(result)) return result;   ///< 如果是舊函數已支援的情形，那就回傳舊函數的結果
            if(!arguments.length) return chars; ///< 互動用。把對照表取回，可用於另做支援比對的RegExp

            var str = arguments[0].toString().replace(/[\s　]/g, "");
            var negative = /^[負负-]/.test(str);
            if(negative) str = str.substr(1);

            var result = 0;
            var partialSum = 0; ///< 不到一萬的部分
            var digit = -1;     ///< 個位數，預設為 -1 以區分有無"零"的出現
            var charVal;        ///< 暫存字元代表的數值
            for(var i = 0; i < str.length; ++i) {
                charVal = chars[str.charAt(i)];
                if(typeof charVal == "undefined") return NaN; // 有任何不認得的字，直接 NaN
                if(charVal < 10) {
                    digit = (digit == -1)
                        ? charVal
                        : digit * 10 + charVal  // ex. 零五、二五六萬
                    ;
                }
                else if(charVal < 1e+4) {
                    if(digit == -1) digit = 1;
                    if(i > 1 && digit == 0 && chars[str.charAt(i-2)] != 100)
                        digit = 1; // 處理"一千零十一"；搜尋"千零十"的確是出現過的。
                    partialSum += digit * charVal;
                    digit = -1;
                }
                else {
                    if(digit != -1) partialSum += digit;
                    if(i && chars[str.charAt(i-1)] >= 1e+4) // 為了"四萬萬五千萬"
                        result *= chars[str.charAt(i)];
                    else result += partialSum * charVal;
                    partialSum = 0;
                    digit = -1;
                }
            }
            if(digit > 0) {
                if(str.length > 1) {  // 為了處理"二十四萬二"、"二百五"等
                    charVal = chars[str.charAt(str.length - 2)];
                    if(charVal < 100) partialSum += digit;
                    else {
                        charVal /= String(charVal)[0];  // 把「皕」轉成100
                        partialSum += digit * (charVal / 10);
                    }
                }
                else partialSum += digit;
            }
            result += partialSum;

            if(negative) result *= -1;
            return result;
        };
    }();
}
/// 刪除上方的flash動畫
var dump = document.getElementsByTagName('TR')[0];
dump.parentNode.removeChild(dump);

/// 加上anchor
var fonts = document.getElementsByTagName("FONT");
var anchors = {
    "解釋字號": "number",
    "解釋公布日期": "date",
    "解釋爭點": "issue",
    "解釋文": "holding",
    "理由書": "reasoning",
    "相關法條": "related-articles",
    "相關附件": "related-annexes",
    "新聞稿、意見書、抄本(含解釋文、理由書、意見書、聲請書及其附件)": "documents"
};
for(var i = 0; i < fonts.length; ++i) {
    var s = fonts[i].style;
    if(s.fontSize != "11pt" || s.fontWeight != "600") continue;
    var text = fonts[i].innerText;
    if(!anchors[text]) continue;
    fonts[i].parentNode.innerHTML = '<a name="' + anchors[text] + '">' + text + '</a>';
}

/// 內嵌的話...
if(window != top)   {
    /// 拿掉外框；該頁居然有兩個 table#AutoNumber1
    document.body.replaceChild(document.getElementsByTagName("TABLE")[4], document.body.firstElementChild);
    /*var ths = document.getElementsByTagName("TH");
    for(var i = 0; i < ths; ++i) {
        ths[i].setAttribute("width", "");
        ths[i].style.width = "4em";
    }*/
}
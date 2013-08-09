# Introduction
* a client-side JavaScript for popular browsers and an extension for Google Chrome to parse the contents of webpage to view Taiwan's law articles/websites easier.
* related with [g0v/laweasyread](https://github.com/g0v/laweasyread) but functions differently and not combined together yet.

可將網頁中的法規、條文、大法官解釋、判決字號均加上連結。使用方式有二：
* Google 瀏覽器外掛，請至[Chrome 線上應用程式商店](https://chrome.google.com/webstore/detail/法規亦毒氣/iedodmlnmhobigohbkalkkjlbmdkjalj)安裝。
* 網頁內嵌JavaScript，供網站或部落格以內嵌JavaScript（加上 &lt;script src&gt; ）的方式，[示範頁面](http://g0v.github.io/laweasyread-front)（如已安裝瀏覽器外掛，需先停用或另開無痕視窗才看得出差別）。

Google瀏覽器外掛，可於瀏覽網站時：
* 網頁中提到法規名稱或是條文時：
    * 將法規名稱加上連往[全國法規資料庫](http://law.moj.gov.tw/)看該法規全文的網頁連結，滑鼠移過去時可看其沿革（立法、修法史）。
    * 將單一法條連向[立法院法律系統](http://lis.ly.gov.tw/lgcgi/lglaw)該條文與相關條文，滑鼠移過去時可看條文內容。
    * 將多個法條連向[全國法規資料庫](http://law.moj.gov.tw/)看該些條文，滑鼠移過去時可看條文內容。
* 亦能運作於[零時政府立法院](http://ly.g0v.tw.jit.su/)、[評律網](http://www.pingluweb.com/)等以AJAX機制更新的內容（需點選網址列的按鈕）。
* 提到大法官解釋時，即連向該號解釋的官方網頁。
* 將下列網站稍做排版，使易於閱讀：
    * [大法官解釋](http://www.judicial.gov.tw/constitutionalcourt/p03.asp)
    * [立法院法律系統](http://lis.ly.gov.tw/lgcgi/lglaw)
    * [司法院裁判書查詢](http://jirs.judicial.gov.tw/FJUD/)
    
警告：部落客於編輯網誌時，請暫時關閉本外掛。

## Examples
* 大法官解釋（[範例網頁連結](http://www.judicial.gov.tw/constitutionalcourt/p03_01.asp?expno=617)）
![Judicial Interpretation](http://images.plurk.com/kAGZ-22KieXBnFHCtsKe8DBiD8u.jpg)
* 立法院法律系統（[範例網頁連結](http://lis.ly.gov.tw/lghtml/lawstat/reason2/01183100110400.htm)）
![Legislative Yuan](http://images.plurk.com/kAGZ-5bvO4HGPifAXwkDU9CAs3y.jpg)
* 全國法規資料庫（[範例網頁連結](http://law.moj.gov.tw/LawClass/LawSearchNo.aspx?PC=B0000001&SNo=1079.4,1079.5)）
![Laws & Regulations Database](https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-ash4/1014200_10152542008401393_14309567_n.jpg)

# Installation
警告：部落客於編輯網誌時，請暫時關閉本外掛。

## Google Chrome Extension
瀏覽器外掛請至[Chrome 線上應用程式商店](https://chrome.google.com/webstore/detail/法規亦毒氣/iedodmlnmhobigohbkalkkjlbmdkjalj)安裝。
* 網址列右邊出現「§#」圖示的話就是成功了，按該圖示會有一些連結。
* 瀏覽動態讀取的網頁（如Facebook、噗浪）時，可能須手動按右上角的「§#」圖示再按「轉換這個網頁」才會作用。


## Embedded JavaScript for Websites and Blogs
（網頁內嵌目前僅知Google Chrome 與 Mozilla Firefox 能運作。）
在網頁HTML原始碼中的`</head>`前加入
```html
<link href="http://g0v.github.io/laweasyread-front/stylesheets/main.css" rel="stylesheet" type="text/css" />
<script src="http://g0v.github.io/laweasyread-front/javascripts/parseInt.js" type="text/javascript"></script>
<script src="http://g0v.github.io/laweasyread-front/javascripts/pcodes.js" type="text/javascript"></script>
<script src="http://g0v.github.io/laweasyread-front/javascripts/aliases.js" type="text/javascript"></script>
<script src="http://g0v.github.io/laweasyread-front/javascripts/lyIDs.js" type="text/javascript"></script>
<script src="http://g0v.github.io/laweasyread-front/javascripts/courts.js" type="text/javascript"></script>
<script src="http://g0v.github.io/laweasyread-front/javascripts/LER.js" type="text/javascript"></script>
<script src="http://g0v.github.io/laweasyread-front/javascripts/embedded2.js" type="text/javascript"></script>
```

# Disclaimer
甚麼都不負責。

# License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)再加上一條：
被授權人於出版發行、散布、再授權及販售軟體及軟體的副本時，應於MIT授權條款上方或下方加上此規則，並：
* 陳述被授權人對於一個以上之公共議題之立場；或
* 附上與其立場類似之文章之永久連結。

此軟體此版本設定之公共議題為「性別」，立場為「性解放」，支持十歲以上智識者均得自主與人發生性行為與性交易，「性忠貞」並不是「道德」的一部份。參閱[反守貞地圖．哲學哲學雞蛋糕](http://phiphicake.blogspot.tw/2013/06/blog-post_4.html)

## License Explanation
* 於其軟體再版時，得變更議題與立場、連結。
* 軟體之使用與修改者，無須同意原軟體授權條款中，基於本規則而對特定議題表態之立場。

# Notices
* 全國法規資料庫有收錄的均會加上連結－－除非原本已經是連結。
* 動態讀取的網頁－－如Facebook和[零時政府立法院](http://ly.g0v.tw.jit.su/)、[評律網](http://www.pingluweb.com/)）－－不會自動轉換，但是可以手動按下左下角的黑底文字再次分析內文。
* 純文字元件如 `TEXTAREA` 等會跳過不處理，列表見`LER.js`的`skippingTags`。
* 在內嵌其他網域的框架時（如Facebook的留言或按讚外掛），會有瀏覽器警告（似乎不影響運作）。

# Bugs
* 可能與WYSIWYG編輯器的相互干擾!!!!
* 會發生「漩渦鳴人的 §8 尾巴出現了」和「我國的 §3 國道走山事件」
* 未能妥善處理以換行字元或BR標籤來排版的網頁（如[司法院裁判書查詢](http://jirs.judicial.gov.tw/FJUD/)）。

# Development

## First Idea
原本是以字串取代的方式去改變`document.body.innerHTML`，但發現有三個難處：
* 有（類似）onLoad function的網頁（如「全國法規資料庫」的首頁）即會無後續動作。
* 不知道要怎麼樣避開HTML tag的屬性中的字串，特別是要提防屬性字串中又包含特殊字元的情形。
* 不知道怎麼偵測「是否已在<a />中」，困境同上。

## Current Scheme
用遞迴方式跑過整個HTML的DOM tree，抓出textNode來處理。
因此，勢必得用`document.createElement`和`Node#appendChild`等DOM方法，而不能修改`Element#innerHTML`。

## Algorithm
參閱`LER.js`，把每個「只含文字的節點」（`TEXT_NODE`)代換成一串新的節點。

* `parseElement()`嘗試處理`document.body`的每一個child。
    * 把非純文字的child再丟給`parseElement()`去recursion；
    * 把純文字的child代換為丟去`parseText()`而得到的node array 
* `parseText()`
    * 用規則一的正規表示式把字串分段，把不匹配的部份再丟給規則二
    * 規則二的正規表示式不匹配的部份，再丟給規則三
    * 依此類推，直到沒有規則可再套用
    * 所有規則均跑完後，即回傳陣列，回到`parseElement()`把原本的文字節點替換成新的節點列。
* 將 `parseInt()` 改寫為支援中文數字，參閱`parseInt.js`
* 關於「多個條號」的處理，參閱`LER.js`中註解文字「條號比對－－支援多條文」以下

## Links to regulations
將[全國法規資料庫](http://law.moj.gov.tw/)中有收錄的（包含「已廢止法規」）均加上連結。其方法為：
* 將[g0v/laweasyread-data](https://github.com/g0v/laweasyread-data)的`data/pcode.json`改為本專案的`pcode.js`（就只是灌進一個變數中）
* 將名稱中只有中文、沒有標點符號的法規（約九千個）全部以'|'為連接符號，由長至短串成一個字串（共近20萬字），生成一個巨大的正規表示式。

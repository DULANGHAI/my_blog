(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{610:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("TCP 具有超时重传机制，即间隔一段时间没有等到数据包的回复时，重传这个数据包。")]),s._v(" "),a("p",[s._v("那么这个重传间隔是如何来计算的呢？")]),s._v(" "),a("p",[s._v("今天我们就来讨论一下这个问题。")]),s._v(" "),a("p",[s._v("这个重传间隔也叫做"),a("strong",[s._v("超时重传时间")]),s._v("(Retransmission TimeOut, 简称RTO)，它的计算跟上一节提到的 RTT 密切相关。这里我们将介绍两种主要的方法，一个是经典方法，一个是标准方法。")]),s._v(" "),a("h2",{attrs:{id:"经典方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#经典方法"}},[s._v("#")]),s._v(" 经典方法")]),s._v(" "),a("p",[s._v("经典方法引入了一个新的概念——SRTT(Smoothed round trip time，即平滑往返时间)，没产生一次新的 RTT. 就根据一定的算法对 SRTT 进行更新，具体而言，计算方式如下(SRTT 初始值为0):")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SRTT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("α "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SRTT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" α"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RTT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中，α 是"),a("strong",[s._v("平滑因子")]),s._v("，建议值是"),a("code",[s._v("0.8")]),s._v("，范围是"),a("code",[s._v("0.8 ~ 0.9")]),s._v("。")]),s._v(" "),a("p",[s._v("拿到 SRTT，我们就可以计算 RTO 的值了:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RTO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ubound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lbound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" β "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SRTT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("β 是加权因子，一般为"),a("code",[s._v("1.3 ~ 2.0")]),s._v("， "),a("strong",[s._v("lbound")]),s._v(" 是下界，"),a("strong",[s._v("ubound")]),s._v(" 是上界。")]),s._v(" "),a("p",[s._v("其实这个算法过程还是很简单的，但是也存在一定的局限，就是在 RTT 稳定的地方表现还可以，而在 RTT 变化较大的地方就不行了，因为平滑因子 α 的范围是"),a("code",[s._v("0.8 ~ 0.9")]),s._v(", RTT 对于 RTO 的影响太小。")]),s._v(" "),a("h2",{attrs:{id:"标准方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准方法"}},[s._v("#")]),s._v(" 标准方法")]),s._v(" "),a("p",[s._v("为了解决经典方法对于 RTT 变化不敏感的问题，后面又引出了标准方法，也叫"),a("code",[s._v("Jacobson / Karels 算法")]),s._v("。")]),s._v(" "),a("p",[s._v("一共有三步。")]),s._v(" "),a("p",[a("strong",[s._v("第一步")]),s._v(": 计算"),a("code",[s._v("SRTT")]),s._v("，公式如下:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SRTT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" α"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SRTT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" α "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RTT")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注意这个时候的 "),a("code",[s._v("α")]),s._v("跟经典方法中的"),a("code",[s._v("α")]),s._v("取值不一样了，建议值是"),a("code",[s._v("1/8")]),s._v("，也就是"),a("code",[s._v("0.125")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("第二步")]),s._v(": 计算"),a("code",[s._v("RTTVAR")]),s._v("(round-trip time variation)这个中间变量。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RTTVAR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" β"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RTTVAR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" β "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RTT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SRTT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("β 建议值为 0.25。这个值是这个算法中出彩的地方，也就是说，它记录了最新的 RTT 与当前 SRTT 之间的差值，给我们在后续感知到 RTT 的变化提供了抓手。")]),s._v(" "),a("p",[a("strong",[s._v("第三步")]),s._v(": 计算最终的"),a("code",[s._v("RTO")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RTO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" µ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SRTT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" ∂ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RTTVAR")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("µ")]),s._v("建议值取"),a("code",[s._v("1")]),s._v(", "),a("code",[s._v("∂")]),s._v("建议值取"),a("code",[s._v("4")]),s._v("。")]),s._v(" "),a("p",[s._v("这个公式在 SRTT 的基础上加上了最新 RTT 与它的偏移，从而很好的感知了 RTT 的变化，这种算法下，RTO 与 RTT 变化的差值关系更加密切。")])])}),[],!1,null,null,null);t.default=e.exports}}]);
/**
 * Created by hp on 12/19/2016.
 */
alert('hello VH')
console.log('192846192865')

var d = document.getElementById("welcome");
    d.innerHTML = "welcome C4E7";
function sayHello(){
    alert("Hello")
}
function makedate(year,month,date){
    return new Date(year,month,date)
}
function zodiac(){
    var date = parseInt(document.getElementById("date").value);
    var month = parseInt(document.getElementById("month").value) - 1;
    var year = parseInt(document.getElementById("year").value);
    var birth = makedate(year,month,date);
    if  (makedate(year,0,21) <= birth && birth <= makedate(year,1,19)) {
        document.getElementById("result1").innerHTML = "Cung Bảo Bình – Aquarius – 21/1 – 19/2";
        document.getElementById("result2").innerHTML = "Người tuổi này thường tỏ ra năng động, xây dựng những gì cần thiết cho bản thân và gia đình của họ. Họ thích sự công bằng và đánh gía sự công bằng ấy qua hành động của những người chung quanh. Họ rất chân thật, thuỷ chung, có lòng vị tha, nhiều sáng kiến và nổi bật xuất sắc khi họ còn trẻ tuổi. Tuy nhiên đôi khi họ tỏ ra bảo thủ, và lại ngang bướng. Bản chất của họ rất khó xác định, vì họ thường hay thay đổi khi hấp thụ những tư tưởng mới.";
    }
    else if  (makedate(year,1,20) <= birth && birth <= makedate(year,2,20)) {
        document.getElementById("result1").innerHTML = "Cung Song Ngư – Pisces – 20/2 – 20/3";
        document.getElementById("result2").innerHTML = "Người tuổi Song Ngư rất quảng đại, dễ mến, mềm mỏng và bao dung, họ có một lòng từ ái bao la, họ thường hay quên mình và để hy sinh cho người khác; đôi khi họ nhận chịu những thiệt thòi để đổi lấy sự an bình nơi người chung quanh. Họ là người có nhiều cao vọng và thường muốn thoát ra những ràng buộc chung quanh. Người tuổi này là mẫu người có nhiều mơ mộng, nhạy cảm, và hay lưỡng lự trước khi quyết định. Ðó là do họ để cảm tình lôi kéo họ hơn là nhờ vào những suy luận của lý trí. Chính vì thế, nên người tuổi này phải coi chừng đề phòng những trường hợp bị lợi dụng bởi người khác. Tuy nhiên, họ có tài ăn nói bén nhạy, và có tài hoà giải những bất đồng một cách tốt đẹp. Phần đông những người tuổi này thường thích làm nghề tự do, và không thích những chức vụ chỉ huy lâu dài. Vì thông minh thiên phú và có khả năng học hỏi mau chóng, họ thích hợp với các nghề như y, dược, giáo dục, kỹ sư.";
    }
    else if  (makedate(year,2,21) <= birth && birth <= makedate(year,3,20)) {
        document.getElementById("result1").innerHTML = "Cung Bạch Dương – Aries – Con Cừu Đực 21/3 – 20/4";
        document.getElementById("result2").innerHTML = "Người tuổi Bạch Dương là người thông minh, can đảm, thích mạo hiểm, có tài lãnh đạo chỉ huy. Nhưng họ thường đề cao sự tự do cá nhân, đôi khi rất ngoan cố, độc tài. Họ có nhiều sáng kiến, nhiều nghị lực, nhanh nhẹn, thích tranh đua, vì thế có thể đi đến chỗ quyết định liều lĩnh. Chính vì thế, mà họ thường là những người tiên phong, xông xáo vào công việc một cách hăng say, nhưng khi máu nóng của họ không còn nữa, hay gặp một vài khó khăn trở ngại nào đó, thì công việc họ đang làm, cho dù rằng có quan trọng cách mấy đi chăng nữa thì họ cũng rất dễ bỏ cuộc. Họ cũng rất có duyên, chỉnh tề, có sức hấp dẫn những người chung quanh, và có tài về ngoại giao.";
    }
    else if  (makedate(year,3,21) <= birth && birth <= makedate(year,4,21)) {
        document.getElementById("result1").innerHTML = "Cung Kim Ngưu – Taurus – Trâu Vàng 21/4 – 21/5";
        document.getElementById("result2").innerHTML = "Người tuổi Kim Ngưu là người chịu ảnh hưởng của Kim Tinh, nên tính tình rất cứng cỏi, không sợ bất cứ trở lực nào. Họ rất bền chí, dễ cảm thụ, thông cảm, nên được mọi người coi như là một con người từng trãi, chín chắn. Họ tỏ ra có tài quan sát tinh tế và chính xác, không xét đoán sự việc một cánh nông nổi, thiếu suy nghĩ. Tuy nhiên họ có khuyết điểm là quá dễ dãi, nhưng khi nổi giận thì trở nên ngoan cố, có khi bạo động, và trở thành bảo thủ. Họ là loại người rất trọng những gì hào nhoáng bề ngoài. Thích ăn ngon mặc đẹp, chưng diện và tiêu xài hoang phí. Vật chất đối với họ rất quan trọng. Tuy nhiên họ cũng có tính hay thương và giúp đỡ người khác.";
    }
    else if  (makedate(year,4,22) <= birth && birth <= makedate(year,5,21)) {
        document.getElementById("result1").innerHTML = "Cung Song Tử – Gemini – Song Sinh 22/5 – 21/6";
        document.getElementById("result2").innerHTML = "Người tuổi Song Tử [Song Sinh] có khả năng quan sát, nhận thức và có trí nhớ rất tốt. Việc học hỏi của họ rất dễ dàng nên sự thành công của họ không có gì khó khăn lắm. Họ có óc tưởng tượng phong phú nên thích hợp với các nghề như ca nhạc, mỹ thuật, ca vũ. Nhờ có sự vui vẻ, nên họ cũng dễ thành công trong các nghề thương mại, địa ốc, chứng khoán, bảo hiểm. Tuy nhiên họ có khuyết điểm là không bằng lòng với cái gì họ đang có, thích theo đuổi nhiều nghề cùng lúc, rồi khi thấy kết quả chậm chạp, họ trở nên chán nản và bỏ cuộc vì thiếu sự kiên nhẫn.";
    }
    else if  (makedate(year,5,22) <= birth && birth <= makedate(year,6,22)) {
        document.getElementById("result1").innerHTML = "Cung Cự Giải – Cancer – Con Cua 22/6 – 23/7";
        document.getElementById("result2").innerHTML = "Người tuổi này là người có óc quan sát thực tế, thích học hỏi, nhưng rất bảo thủ và hay tự hào, đôi khi trở thành cố chấp và ương bướng. Tuy thế, nhờ khả năng phân tích, và suy luận của họ, giúp họ thích hợp với các nghề chuyên môn như y, luật, tài chánh, và giáo dục. Ðặc biệt ở tuổi này, vì có sự suy tính hơn thiệt rất tinh tuý, nên họ hay nghĩ đến phần lợi cho chính họ, cũng chính vì thế mà họ là những người thường có đầu óc kinh doanh thương mại, nhờ vào khả năng suy đoán lợi hại, hơn thiệt kia mà làm cho các cuộc kinh doanh của họ phát đạt hơn. Tuy nhiên người tuổi này nên tránh những trò chơi hay công việc làm có tính cách hên xui may rủi, không tốt. Về tính tình, họ là người thường hay cho mình là tự trọng, nhưng thật ra trong thâm tâm họ, họ không biết điều mà họ suy nghĩ là đúng hay sai. Họ có khuynh hướng rất bảo thủ, không chịu nghe lời khuyên giải của người khác, và thường hành động theo thói quen, theo chiều hướng suy nghĩ riêng tư của họ và không chịu thay đổi.";
    }
    else if  (makedate(year,6,23) <= birth && birth <= makedate(year,7,22)) {
        document.getElementById("result1").innerHTML = "Cung Sư Tử – Leo – 24/7 – 23/8";
        document.getElementById("result2").innerHTML = "Người tuổi này là người tài trí, dũng cảm và đầy nghị lực. Chủ tinh của họ là Thái dương tượng trưng cho sức mạnh, cho sự cứng rắn, luôn luôn gánh vác mọi việc và đương đầu trước mọi khó khăn. Do đó họ dễ dàng trở thành những người chỉ huy, lãnh đạo nhưng có khi trở nên độc đoán. Họ nhiệt tình, lạc quan, hăng hái và tích cực. Họ rất yêu đời, có lý tưởng và luôn quyết tâm biến lý tưởng thành hiện thực. Tuy nhiên họ có khuyết điểm là hay khoe khoang, tự phụ, che giấu bằng một bề ngoài khiêm tốn, điềm đạm. Họ rất háo danh, háo thắng, nên rất dễ bị mê hoặc hay thất bại bởi những lời tâng bốc giả dối, đôi khi còn bị lợi dụng và mất đi khả năng phán đoán chính xác của mình.";
    }
    else if  (makedate(year,7,23) <= birth && birth <= makedate(year,8,23)) {
        document.getElementById("result1").innerHTML = "Cung Xử Nữ – Virgo – Trinh Nữ 24/8 – 23/9";
        document.getElementById("result2").innerHTML = "Người tuổi Xử Nữ có tinh thần quảng đại, bao dung, lịch sự. Bản chất của họ là trí thức, nhanh nhẹn và hoạt bát. Họ rất khéo léo trong mọi công việc, và luôn luôn tuân theo nguyên tắc và luật lệ. Họ không hài lòng khi công việc hay dự tính chưa hoàn thành theo ý muốn. Những thành quả của họ đạt được thường là do chính họ tạo ra. Họ là mẫu người thực tế, hết lòng chăm sóc gia đình và thường hay giúp đỡ mọi người. Họ cũng hay bình phẩm, xét lại, phân tích, khắc khổ, và bất mãn khi công việc không như ý. Họ thường rất có uy tín khi được giao phó một trách nhiệm hay công việc gì.";
    }
    else if  (makedate(year,8,23) <= birth && birth <= makedate(year,9,22)) {
        document.getElementById("result1").innerHTML = "Cung Thiên Bình – Libra – 24/9 – 23/10";
        document.getElementById("result2").innerHTML = "Người tuổi Thiên Bình thường có nét quyến rũ đặc biệt nhờ dáng dấp lịch sự tao nhã. Thiên Bình chịu ảnh hưởng nhiều bởi sao Kim tinh là sao tượng trưng cho tình yêu và nét đẹp. Ðặc tính của họ là chuộng sự công bằng, ghét sự nhỏ nhen, áp bức. Họ quảng đại, khoan dung, thích canh tân và có ý chí độc lập. Tuy nhiên họ có khuyết điểm là lừng khừng trước mọi việc phải quyết định, không dứt khoát được. Họ cũng khó phân biệt được thế nào là thiện và ác, là tốt và xấu. Bình thường họ là người trầm tính, nhưng họ cũng có thể nổi nóng một cách rất dễ dàng, và cứng rắn khi phải quyết định một việc gì rất quan trọng. Họ rất tự cao tự đại, và cho rằng những gì họ nghĩ đều là đúng, ít quan tâm đến sự thoả thuận và ý nghĩ của người khác.";
    }
    else if  (makedate(year,9,24) <= birth && birth <= makedate(year,10,22)) {
        document.getElementById("result1").innerHTML = "Cung Bọ Cạp – Scorpio – Thần Nông 24/10 – 22/11";
        document.getElementById("result2").innerHTML = "Người tuổi này là mẫu người giàu nghị lực, thông minh, linh hoạt, nhiều sáng tạo, nhưng lại có nhiều tham vọng. Bản tính thẳng thắn, dũng cảm, cương nghị giúp họ chấp nhận mọi gian lao thử thách vượt qua mọi khó khăn. Họ có tài tổ chức một cách trật tự, và điều khiển công việc một cách cẩn thận. Người tuổi này rất trọng chữ tín. Tuy nhiên khuyết điểm của họ là dễ bị nổi giận khi bi khiêu khích , rất dễ bị xúc động và rất dễ thấy rằng mình bị xúc phạm. Họ có tính thù dai, nếu ai mà đã trót dại xúc phạm hay làm họ thiệt thòi điều gì, thì họ sẽ tìm đủ mọi cách để trả đũa lại, mà còn gấp 10 lần người kia đã làm cho họ. “Your life won’t be the same!”. Vì vậy họ thường trở nên ngoan cố, ít chịu nghe lời khuyên bảo hay tư vấn của người khác.";
    }
    else if  (makedate(year,10,23) <= birth && birth <= makedate(year,11,21)) {
        document.getElementById("result1").innerHTML = "Cung Nhân Mã – Sagittarius – 23/11 – 21/12";
        document.getElementById("result2").innerHTML = "Người tuổi này rất nhiệt tình và lạc quan, có kiến thức, thích tự do, triết lý sống của họ là lanh lợi khôn khéo và hưởng thụ. Họ có lòng tin, thích tìm hiểu và thông cảm với người khác. Họ tử tế, thành thật, biết cách đối xử nên được nhiều người ưa thích. Linh cảm của họ khá bén nhạy, nên họ có thể đoán được những mưu mô, manh tâm lừa bịp họ. Họ thích phiêu lưu mạo hiểm, ưa thay đổi nơi ăn chốn ở, nên du lịch, đi xa là sở thích của họ. Những nhược điểm của họ là hay thay đổi, không bền chí, dễ xúc động nên dễ bị chi phối bởi người khác. Vì có tính nết hay thay đổi này mà họ bị xem như là không có lập trường, hay không có tính quyết đoán, và nhiều khi như vô trách nhiệm.";
    }
    else {
        document.getElementById("result1").innerHTML = "Cung Ma Kết – Capricornus – Nam Dương 22/12 – 20/1";
        document.getElementById("result2").innerHTML = "Người tuổi này đặt nặng vấn đề danh vọng, địa vị xã hội lên trên hết. Họ thường hay lợi dụng những cuộc giao tế để nâng cao địa vị xã hội của họ lên. Họ nghĩ rằng nếu mở rộng sự giao thiệp sẽ đem lại cho họ nhiều lợi nhuận và quyền thế. Vì vậy họ thích hợp với đời sống cộng đồng hơn là một mái gia đình đơn thuần. Người tuổi này không thành công mau chóng, tuy vậy chậm mà chắc. Họ cũng trung thành, tự tin, bảo thủ, hay nghi ngờ, đề phòng. Có óc tổ chức, tinh khôn sắc xảo, đơn giản. Thích hoạt động cho cộng đồng, tập đoàn nhiều hơn.";
        document.getElementById("test1").innerHTML = makedate(year,11,21);
        document.getElementById("test2").innerHTML = birth;
    }
    //document.getElementById("result").innerHTML=;
}





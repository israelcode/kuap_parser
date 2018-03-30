(function() {
var jsonArr = []; // array of Json structures


    var lenghtStrings = document.getElementsByTagName('tr');
    console.log(lenghtStrings.length);

    for(i = 0, l = lenghtStrings.length; i < l; i++) {
	
        var currentString = lenghtStrings[i];
        var lenghtColumns = currentString.querySelectorAll('td');
		
        console.log(currentString.textContent);
		
        for(j = 1, m = lenghtColumns.length; j < m-1; j++) {
		
			var obj = {}; // object that we'll put in jsonArr
			
			var head = lenghtColumns[0].innerText; // Заголовок строчки (0-ая колонка)
			//alert(head.trim());
			head=head.trim();
			console.log(head);
			var currentColumn = lenghtColumns[j];
            console.log(currentColumn.textContent);
			
			obj[head] = currentColumn.textContent;
			jsonArr.push(obj);
			//alert(obj);
		
			
        }
    }
	document.write("<br>"+JSON.stringify(jsonArr));


})();

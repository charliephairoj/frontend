
angular.module('employeeApp.filters')
.filter('beautify', [function () {
    return function (input) {
		try {
			//declare vars
			var newStrArray = [],
				newStr,
				upperLetter,
				newWord,
				//split the words into array
				words = input.split(/\s+/);

			//loops through the words and uppercase first letter
			angular.forEach(words, function (word) {
				//Capitalize first lteer 
				upperLetter = word.charAt(0).toUpperCase();
				//get remainder of word
				newWord = word.slice(1);
				//create new formatted word
				newWord = upperLetter + newWord;
				//add to new string array
				newStrArray.push(newWord);

			});
			//join new string array
			newStr = newStrArray.join(' ');
			//return string
			return newStr;
		} catch (e) {
			return input;
		}
	};
}]);

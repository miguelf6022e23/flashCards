module.exports = function(text, cloze){
	if (text.match(cloze) == null){
		this.Error = 'Use Better Inputs';
	} else {
		this.fullText = text;
		this.partial = text.replace(cloze,' ... ')
	}
}
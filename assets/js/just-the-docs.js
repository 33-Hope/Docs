lunr.tokenizer.separator = {{ site.search.tokenizer_separator | default: site.search_tokenizer_separator | default: "/[\s\-/]+/" }}
 
var index = lunr(function(){
  this.use(lunr.multiLanguage('en', 'th'));
  this.ref('id');
  this.field('hpath', { boost: 200 });
  this.field('title', { boost: 100 });
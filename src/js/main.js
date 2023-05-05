import dropdown from './components/dropdown';
import documentReady from './helpers/documentReady';
import viewHeight from './helpers/viewHeight';
import lazyImages from './modules/lazyImages';
import ingredients from './components/ingredients';

documentReady(() => {
	// console.log('Document is ready');
	viewHeight();
	lazyImages();
	dropdown();
	ingredients();
});

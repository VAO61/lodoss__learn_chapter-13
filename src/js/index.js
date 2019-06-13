import '../sass/style.scss';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../html/index.html');
}

// TODO: Из-за подключенного .js перестает релодиться html
import './api/bacon.js';

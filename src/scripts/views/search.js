var str = require('../tpls/search.string');

var common = require('../utils/common.util.js');
var footer = require('../tpls/footer.string');

common.renderBody($('body'), str);
common.append($('.container'), footer);
common.switchPage(1);

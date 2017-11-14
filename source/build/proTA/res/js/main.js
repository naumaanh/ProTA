var pro = {
  $view: 'null',

  init: function(){
    window.myApp = new Framework7();
    window.$$ = Dom7;
    pro.initF7();
    pro.loadView();
    pro.initSearchBar();
  },

  initF7: function(){
    window.mainView = myApp.addView('.view-main', {
      material: true,
      cache: false
    });
  },

  loadView: function(){
    pro.setView();
    pro.initEventHandlers();
  },

  setView: function() {
		pro.$view = $( document.body ).find( '.view-main' );
	},

  initEventHandlers: function(){
    pro.$view.on( 'click', '[pro-click]', function( e ){
      $elem = $(this);
      e.stopPropagation();
      var toCall = $elem.attr( 'pro-click' ).replace( /\(.*?\)/, '' );
      pro.methodCaller( toCall, $elem );
    });
    pro.$view.on( 'change', '[pro-change]', function( e ){
      $elem = $(this);
      e.stopPropagation();
      var toCall = $elem.attr( 'pro-change' ).replace( /\(.*?\)/, '' );
      pro.methodCaller( toCall, $elem );
    });
    $$(document).on('pageInit', function (e) {
      var page = e.detail.page;
      pro.refreshAutoInit(page);
    });
  },

  refreshAutoInit: function( activeTab, prevElem ){
			var autoInit = activeTab.find('[auto-init]');
			autoInit = activeTab.attr('auto-init') ? autoInit.add( activeTab ) : autoInit;
			autoInit.each( function(){
				$elem = $(this);
				pro.methodCaller( $elem.attr('auto-init').replace('@', ''), $elem, prevElem );
			});
		},

  getObj: function( objString, itter, obj ){
		var objs = objString.split('.');
		var obj = obj ? obj[ objs[itter] ] : window[ objs[itter] ];
		itter++;
		if( typeof obj == 'function' )
			return obj;
		else if( typeof obj == 'object' )
			return pro.getObj( objString, itter, obj );
		else
			return pro.methodExeption;
	},

  methodCaller: function( toCall, $elem, prevElem ){
		var func = pro.getObj( toCall, 0 );
		if( func == pro.methodExeption )
			prevElem = toCall;
		func.call( $elem, prevElem );
	},

	methodExeption: function( funcName ){
		console.log( 'Exeption unhandled function', $(this), funcName );
	},

  openPage: function( id ){
    id = id ? id : this.attr('page-id');
    mainView.router.loadContent( pro.$view.find(id).html() );
  },

  closePage: function(){
    mainView.router.back();
  },

  openPopup: function( id ){
    id = id ? id : this.attr('popup-id');
    myApp.popup( pro.$view.find(id).html() );
  },

  initSearchBar: function(){
    var mySearchbar = myApp.searchbar('.searchbar', {
      searchList: '.list-block-search',
      searchIn: '.item-title'
    });
  },
};
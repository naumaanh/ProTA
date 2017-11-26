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
		$(document.body).on( 'click', '[pro-click]', function( e ){
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

	closePopup: function( popup ){
		myApp.closeModal( popup );
	},

	initSearchBar: function(){
		var mySearchbar = myApp.searchbar('.searchbar', {
			searchList: '.list-block-search',
			searchIn: '.item-title'
		});
	},




	//course class
	course: {
		courses: [],
		listItemTemplate: '<li></li>',

		addCourse: function( div ){
			div = div ? div : this;
			var jsonObj = pro.toJSON( div );
			pro.course.courses.push( jsonObj );
			$('.page').data(pro.course.courses);
			localStorage.setItem( "courses", JSON.stringify( jsonObj ) );
		},

		listCourses: function(){
			var page = this;
			var jsonObj = page.data();
			$.each( jsonObj, function(){
				page.append( pro.course.listItem( this ) );
			});
		},

		listItem: function( $elem ){
			return $(this.listItemTemplate).clone().text( $elem.courseName ).data( $elem.courseInstances );
		},

	},

	toJSON: function( $elem ){
		var inputs = $elem.closest('.popup').find('input');

		//console.log("inputs: "+ inputs);
		var jsonObj = {};
		inputs.each( function(){
			var input = $(this);
			//console.log("input val: "+ input.val());
			jsonObj[ input.attr('name') ] = input.val();
		});
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		jsonObj[ "time" ] = ( ( h < 10 ? "0" : '' ) +  h + ":" + ( m < 10 ? "0" : '' ) + m );
		pro.closePopup( $elem.closest('.popup') );
		pro.openPage( '#take-attendance' );

		console.log(jsonObj);

		return jsonObj;

	},

	//student class
	student: {

		checkIn: function(date){
			//push date into student checkin array
		}



	}



};

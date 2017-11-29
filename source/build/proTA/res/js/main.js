var pro = {
	$view: 'null',

	init: function(){
		window.myApp = new Framework7();
		window.$$ = Dom7;
		pro.initF7();
		pro.loadView();
		pro.initSearchBar();
		pro.refreshAutoInit( $('.page') );
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
			pro.refreshAutoInit(  $(page.container) );
		});
	},

	refreshAutoInit: function( activeTab, prevElem ){
		var autoInit = activeTab.find('[auto-init]');
		autoInit = activeTab.attr('auto-init') ? autoInit.add( activeTab ) : autoInit;
		autoInit.each( function(){
			$elem = $(this);
			console.log('test', $elem);
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
		listItemTemplate: '<li><a href="#" class="item-link item-content" pro-click="pro.openPage" page-id="#class-template"><div class="item-inner"><div class="item-title-row"><div class="item-title"></div></div><div class="item-subtitle"></div></div></a></li>',

		courseInstanceInit: function(){
			console.log('test111');
		},

		createInstances: function(){

		},

		loadInstances: function(){

		},

		addCourse: function( div ){
			div = div ? div : this;
			var jsonObj = pro.toJSON( div );
			console.log(jsonObj);

			pro.course.courses.push( jsonObj );
			$('.page-on-center').data(pro.course.courses);
			var ls = localStorage.length ? JSON.parse( localStorage.getItem("courses")) : [];
			ls.push( jsonObj )
			localStorage.setItem( "courses", JSON.stringify(ls) );
			console.log( JSON.parse( localStorage.getItem("courses") ) );
			$('.page #class-list').empty();
			pro.course.listCourses.call( $('.page #class-list') );
		},

		listCourses: function(){
			var page = this;
			var jsonObj = JSON.parse( localStorage.getItem("courses") );
			$.each( jsonObj, function(){
				page.append( pro.course.listItem( this ) );
			});
		},

		listItem: function( $elem ){
			var temp = $(this.listItemTemplate).clone();
			temp.find('.item-title').text( $elem.courseName );
			temp.data( $elem );
			return temp;
		},

		load: function( ){
			var page = $('.page').find('#class-list');
			if (!localStorage.courses) {
					page.after('<bold>There is nothing here</bold>')
			} else {
					var course = JSON.parse(localStorage.getItem("courses"));
					var classList = '';
					for (var i = 0; i < localStorage.length; i++) {
							classList += '<li><a href="#" class="item-link item-content" pro-click="pro.openPage" page-id="#class-template"><div class="item-inner"><div class="item-title-row"><div class="item-title">' + course.courseName + '</div></div><div class="item-subtitle">' + course.time + '</div></div></a></li>';
					}
					page.append(classList);
			}
		}
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
		jsonObj['courseInstance'] = [];
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var day = d.getDay();
		jsonObj[ "time" ] = ( ( h < 10 ? "0" : '' ) +  h + ":" + ( m < 10 ? "0" : '' ) + m );
		switch (day) {
			case 0:
				jsonObj[ "day" ] = "Sunday";
				break;
			case 1:
				jsonObj[ "day" ] = "Monday";
				break;
			case 2:
				jsonObj[ "day" ] = "Tuesday";
				break;
			case 3:
				jsonObj[ "day" ] = "Wedensday";
				break;
			case 4:
				jsonObj[ "day" ] = "Thursday";
				break;
			case 5:
				jsonObj[ "day" ] = "Friday";
				break;
			case 6:
				jsonObj[ "day" ] = "Saturday";
				break;
			default:
				jsonObj[ "day" ] = "Nothing";
		}
		pro.closePopup( $elem.closest('.popup') );
		pro.openPage( '#take-attendance' );

		//console.log(jsonObj);

		return jsonObj;
	},

	//student class
	student: {

		checkIn: function(date){
			//push date into student checkin array
		}



	}



};

/*!
* This file is part of Aloha Editor Project http://aloha-editor.org
* Copyright (c) 2010-2011 Gentics Software GmbH, aloha@gentics.com
* Contributors http://aloha-editor.org/contribution.php 
* Licensed unter the terms of http://www.aloha-editor.org/license.html
*
* Aloha Editor is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.*
*
* Aloha Editor is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

// Ensure Aloha settings namespace and default
Aloha = window.Aloha || {};
Aloha.settings = Aloha.settings || {};

(function(){
	
	// Determs the base path of Aloha Editor which is supposed to be the path of aloha.js (this file)
	Aloha.settings.baseUrl = Aloha.settings.baseUrl || getBaseUrl();
	
	// aloha base path is defined by a script tag with the data attribute 
	// data-aloha-plugins and the filename aloha.js
	function getBaseUrl() {
		
		var alohaJs = jQuery('[data-aloha-plugins]'),
			baseUrl = ( alohaJs.length ) ? alohaJs[0].src.replace( /\/?aloha.js$/ , '' ) : '';
			
		return baseUrl;
	};
	
})();

Aloha.settings.requireConfig = {
	context: 'aloha',
	baseUrl: Aloha.settings.baseUrl,
	locale: Aloha.settings.locale || 'en'
};

// require Aloha main with correct namespace and locale settings
require( 
	Aloha.settings.requireConfig,
	[ 'aloha/main' ]
);

//require Aloha main with correct namespace and locale settings
var requireAloha = require.config( Aloha.settings.requireConfig );
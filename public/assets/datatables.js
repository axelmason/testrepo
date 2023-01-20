/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs5/jq-3.6.0/dt-1.13.1/e-2.0.10
 *
 * Included libraries:
 *   jQuery 3 3.6.0, DataTables 1.13.1, Editor 2.0.10
 */

/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur as it's already being fired
		// in leverageNative.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/*! DataTables 1.13.1
 * ©2008-2022 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     DataTables
 * @description Paginate, search and order HTML tables
 * @version     1.13.1
 * @author      SpryMedia Ltd
 * @contact     www.datatables.net
 * @copyright   SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

/*jslint evil: true, undef: true, browser: true */
/*globals $,require,jQuery,define,_selector_run,_selector_opts,_selector_first,_selector_row_indexes,_ext,_Api,_api_register,_api_registerPlural,_re_new_lines,_re_html,_re_formatted_numeric,_re_escape_regex,_empty,_intVal,_numToDecimal,_isNumber,_isHtml,_htmlNumeric,_pluck,_pluck_order,_range,_stripHtml,_unique,_fnBuildAjax,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnAjaxDataSrc,_fnAddColumn,_fnColumnOptions,_fnAdjustColumnSizing,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnVisbleColumns,_fnGetColumns,_fnColumnTypes,_fnApplyColumnDefs,_fnHungarianMap,_fnCamelToHungarian,_fnLanguageCompat,_fnBrowserDetect,_fnAddData,_fnAddTr,_fnNodeToDataIndex,_fnNodeToColumnIndex,_fnGetCellData,_fnSetCellData,_fnSplitObjNotation,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnGetDataMaster,_fnClearTable,_fnDeleteIndex,_fnInvalidate,_fnGetRowElements,_fnCreateTr,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAddOptionsHtml,_fnDetectHeader,_fnGetUniqueThs,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnFilterCreateSearch,_fnEscapeRegex,_fnFilterData,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnInfoMacros,_fnInitialise,_fnInitComplete,_fnLengthChange,_fnFeatureHtmlLength,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnFeatureHtmlTable,_fnScrollDraw,_fnApplyToChildren,_fnCalculateColumnWidths,_fnThrottle,_fnConvertToWidth,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnSortFlatten,_fnSort,_fnSortAria,_fnSortListener,_fnSortAttachListener,_fnSortingClasses,_fnSortData,_fnSaveState,_fnLoadState,_fnSettingsFromNode,_fnLog,_fnMap,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnLengthOverflow,_fnRenderer,_fnDataSource,_fnRowAttributes*/

(function( factory ) {
	"use strict";

	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				// CommonJS environments without a window global must pass a
				// root. This will give an error otherwise
				root = window;
			}

			if ( ! $ ) {
				$ = typeof window !== 'undefined' ? // jQuery's factory checks for a global window
					require('jquery') :
					require('jquery')( root );
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		window.DataTable = factory( jQuery, window, document );
	}
}
(function( $, window, document, undefined ) {
	"use strict";

	
	var DataTable = function ( selector, options )
	{
		// When creating with `new`, create a new DataTable, returning the API instance
		if (this instanceof DataTable) {
			return $(selector).DataTable(options);
		}
		else {
			// Argument switching
			options = selector;
		}
	
		/**
		 * Perform a jQuery selector action on the table's TR elements (from the tbody) and
		 * return the resulting jQuery object.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
		 *    criterion ("applied") or all TR elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {object} jQuery object, filtered by the given selector.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Highlight every second row
		 *      oTable.$('tr:odd').css('backgroundColor', 'blue');
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to rows with 'Webkit' in them, add a background colour and then
		 *      // remove the filter, thus highlighting the 'Webkit' rows only.
		 *      oTable.fnFilter('Webkit');
		 *      oTable.$('tr', {"search": "applied"}).css('backgroundColor', 'blue');
		 *      oTable.fnFilter('');
		 *    } );
		 */
		this.$ = function ( sSelector, oOpts )
		{
			return this.api(true).$( sSelector, oOpts );
		};
		
		
		/**
		 * Almost identical to $ in operation, but in this case returns the data for the matched
		 * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
		 * rather than any descendants, so the data can be obtained for the row/cell. If matching
		 * rows are found, the data returned is the original data array/object that was used to
		 * create the row (or a generated array if from a DOM source).
		 *
		 * This method is often useful in-combination with $ where both functions are given the
		 * same parameters and the array indexes will match identically.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
		 *    criterion ("applied") or all elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the data in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {array} Data for the matched elements. If any elements, as a result of the
		 *    selector, were not TR, TD or TH elements in the DataTable, they will have a null
		 *    entry in the array.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the data from the first row in the table
		 *      var data = oTable._('tr:first');
		 *
		 *      // Do something useful with the data
		 *      alert( "First cell is: "+data[0] );
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to 'Webkit' and get all data for
		 *      oTable.fnFilter('Webkit');
		 *      var data = oTable._('tr', {"search": "applied"});
		 *
		 *      // Do something with the data
		 *      alert( data.length+" rows matched the search" );
		 *    } );
		 */
		this._ = function ( sSelector, oOpts )
		{
			return this.api(true).rows( sSelector, oOpts ).data();
		};
		
		
		/**
		 * Create a DataTables Api instance, with the currently selected tables for
		 * the Api's context.
		 * @param {boolean} [traditional=false] Set the API instance's context to be
		 *   only the table referred to by the `DataTable.ext.iApiIndex` option, as was
		 *   used in the API presented by DataTables 1.9- (i.e. the traditional mode),
		 *   or if all tables captured in the jQuery object should be used.
		 * @return {DataTables.Api}
		 */
		this.api = function ( traditional )
		{
			return traditional ?
				new _Api(
					_fnSettingsFromNode( this[ _ext.iApiIndex ] )
				) :
				new _Api( this );
		};
		
		
		/**
		 * Add a single new row or multiple rows of data to the table. Please note
		 * that this is suitable for client-side processing only - if you are using
		 * server-side processing (i.e. "bServerSide": true), then to add data, you
		 * must add it to the data source, i.e. the server-side, through an Ajax call.
		 *  @param {array|object} data The data to be added to the table. This can be:
		 *    <ul>
		 *      <li>1D array of data - add a single row with the data provided</li>
		 *      <li>2D array of arrays - add multiple rows in a single call</li>
		 *      <li>object - data object when using <i>mData</i></li>
		 *      <li>array of objects - multiple data objects when using <i>mData</i></li>
		 *    </ul>
		 *  @param {bool} [redraw=true] redraw the table or not
		 *  @returns {array} An array of integers, representing the list of indexes in
		 *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to
		 *    the table.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Global var for counter
		 *    var giCount = 2;
		 *
		 *    $(document).ready(function() {
		 *      $('#example').dataTable();
		 *    } );
		 *
		 *    function fnClickAddRow() {
		 *      $('#example').dataTable().fnAddData( [
		 *        giCount+".1",
		 *        giCount+".2",
		 *        giCount+".3",
		 *        giCount+".4" ]
		 *      );
		 *
		 *      giCount++;
		 *    }
		 */
		this.fnAddData = function( data, redraw )
		{
			var api = this.api( true );
		
			/* Check if we want to add multiple rows or not */
			var rows = Array.isArray(data) && ( Array.isArray(data[0]) || $.isPlainObject(data[0]) ) ?
				api.rows.add( data ) :
				api.row.add( data );
		
			if ( redraw === undefined || redraw ) {
				api.draw();
			}
		
			return rows.flatten().toArray();
		};
		
		
		/**
		 * This function will make DataTables recalculate the column sizes, based on the data
		 * contained in the table and the sizes applied to the columns (in the DOM, CSS or
		 * through the sWidth parameter). This can be useful when the width of the table's
		 * parent element changes (for example a window resize).
		 *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sScrollY": "200px",
		 *        "bPaginate": false
		 *      } );
		 *
		 *      $(window).on('resize', function () {
		 *        oTable.fnAdjustColumnSizing();
		 *      } );
		 *    } );
		 */
		this.fnAdjustColumnSizing = function ( bRedraw )
		{
			var api = this.api( true ).columns.adjust();
			var settings = api.settings()[0];
			var scroll = settings.oScroll;
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw( false );
			}
			else if ( scroll.sX !== "" || scroll.sY !== "" ) {
				/* If not redrawing, but scrolling, we want to apply the new column sizes anyway */
				_fnScrollDraw( settings );
			}
		};
		
		
		/**
		 * Quickly and simply clear a table
		 *  @param {bool} [bRedraw=true] redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
		 *      oTable.fnClearTable();
		 *    } );
		 */
		this.fnClearTable = function( bRedraw )
		{
			var api = this.api( true ).clear();
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw();
			}
		};
		
		
		/**
		 * The exact opposite of 'opening' a row, this function will close any rows which
		 * are currently 'open'.
		 *  @param {node} nTr the table row to 'close'
		 *  @returns {int} 0 on success, or 1 if failed (can't find the row)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnClose = function( nTr )
		{
			this.api( true ).row( nTr ).child.hide();
		};
		
		
		/**
		 * Remove a row for the table
		 *  @param {mixed} target The index of the row from aoData to be deleted, or
		 *    the TR element you want to delete
		 *  @param {function|null} [callBack] Callback function
		 *  @param {bool} [redraw=true] Redraw the table or not
		 *  @returns {array} The row that was deleted
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately remove the first row
		 *      oTable.fnDeleteRow( 0 );
		 *    } );
		 */
		this.fnDeleteRow = function( target, callback, redraw )
		{
			var api = this.api( true );
			var rows = api.rows( target );
			var settings = rows.settings()[0];
			var data = settings.aoData[ rows[0][0] ];
		
			rows.remove();
		
			if ( callback ) {
				callback.call( this, settings, data );
			}
		
			if ( redraw === undefined || redraw ) {
				api.draw();
			}
		
			return data;
		};
		
		
		/**
		 * Restore the table to it's original state in the DOM by removing all of DataTables
		 * enhancements, alterations to the DOM structure of the table and event listeners.
		 *  @param {boolean} [remove=false] Completely remove the table from the DOM
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnDestroy();
		 *    } );
		 */
		this.fnDestroy = function ( remove )
		{
			this.api( true ).destroy( remove );
		};
		
		
		/**
		 * Redraw the table
		 *  @param {bool} [complete=true] Re-filter and resort (if enabled) the table before the draw.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
		 *      oTable.fnDraw();
		 *    } );
		 */
		this.fnDraw = function( complete )
		{
			// Note that this isn't an exact match to the old call to _fnDraw - it takes
			// into account the new data, but can hold position.
			this.api( true ).draw( complete );
		};
		
		
		/**
		 * Filter the input based on data
		 *  @param {string} sInput String to filter the table on
		 *  @param {int|null} [iColumn] Column to limit filtering to
		 *  @param {bool} [bRegex=false] Treat as regular expression or not
		 *  @param {bool} [bSmart=true] Perform smart filtering or not
		 *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
		 *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sometime later - filter...
		 *      oTable.fnFilter( 'test string' );
		 *    } );
		 */
		this.fnFilter = function( sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive )
		{
			var api = this.api( true );
		
			if ( iColumn === null || iColumn === undefined ) {
				api.search( sInput, bRegex, bSmart, bCaseInsensitive );
			}
			else {
				api.column( iColumn ).search( sInput, bRegex, bSmart, bCaseInsensitive );
			}
		
			api.draw();
		};
		
		
		/**
		 * Get the data for the whole table, an individual row or an individual cell based on the
		 * provided parameters.
		 *  @param {int|node} [src] A TR row node, TD/TH cell node or an integer. If given as
		 *    a TR node then the data source for the whole row will be returned. If given as a
		 *    TD/TH cell node then iCol will be automatically calculated and the data for the
		 *    cell returned. If given as an integer, then this is treated as the aoData internal
		 *    data index for the row (see fnGetPosition) and the data for that row used.
		 *  @param {int} [col] Optional column index that you want the data of.
		 *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
		 *    returned. If mRow is defined, just data for that row, and is iCol is
		 *    defined, only data for the designated cell is returned.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Row data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('tr').click( function () {
		 *        var data = oTable.fnGetData( this );
		 *        // ... do something with the array / object of data for the row
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Individual cell data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('td').click( function () {
		 *        var sData = oTable.fnGetData( this );
		 *        alert( 'The cell clicked on had the value of '+sData );
		 *      } );
		 *    } );
		 */
		this.fnGetData = function( src, col )
		{
			var api = this.api( true );
		
			if ( src !== undefined ) {
				var type = src.nodeName ? src.nodeName.toLowerCase() : '';
		
				return col !== undefined || type == 'td' || type == 'th' ?
					api.cell( src, col ).data() :
					api.row( src ).data() || null;
			}
		
			return api.data().toArray();
		};
		
		
		/**
		 * Get an array of the TR nodes that are used in the table's body. Note that you will
		 * typically want to use the '$' API method in preference to this as it is more
		 * flexible.
		 *  @param {int} [iRow] Optional row index for the TR element you want
		 *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
		 *    in the table's body, or iRow is defined, just the TR element requested.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the nodes from the table
		 *      var nNodes = oTable.fnGetNodes( );
		 *    } );
		 */
		this.fnGetNodes = function( iRow )
		{
			var api = this.api( true );
		
			return iRow !== undefined ?
				api.row( iRow ).node() :
				api.rows().nodes().flatten().toArray();
		};
		
		
		/**
		 * Get the array indexes of a particular cell from it's DOM element
		 * and column index including hidden columns
		 *  @param {node} node this can either be a TR, TD or TH in the table's body
		 *  @returns {int} If nNode is given as a TR, then a single index is returned, or
		 *    if given as a cell, an array of [row index, column index (visible),
		 *    column index (all)] is given.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      $('#example tbody td').click( function () {
		 *        // Get the position of the current data from the node
		 *        var aPos = oTable.fnGetPosition( this );
		 *
		 *        // Get the data array for this row
		 *        var aData = oTable.fnGetData( aPos[0] );
		 *
		 *        // Update the data array and return the value
		 *        aData[ aPos[1] ] = 'clicked';
		 *        this.innerHTML = 'clicked';
		 *      } );
		 *
		 *      // Init DataTables
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnGetPosition = function( node )
		{
			var api = this.api( true );
			var nodeName = node.nodeName.toUpperCase();
		
			if ( nodeName == 'TR' ) {
				return api.row( node ).index();
			}
			else if ( nodeName == 'TD' || nodeName == 'TH' ) {
				var cell = api.cell( node ).index();
		
				return [
					cell.row,
					cell.columnVisible,
					cell.column
				];
			}
			return null;
		};
		
		
		/**
		 * Check to see if a row is 'open' or not.
		 *  @param {node} nTr the table row to check
		 *  @returns {boolean} true if the row is currently open, false otherwise
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnIsOpen = function( nTr )
		{
			return this.api( true ).row( nTr ).child.isShown();
		};
		
		
		/**
		 * This function will place a new row directly after a row which is currently
		 * on display on the page, with the HTML contents that is passed into the
		 * function. This can be used, for example, to ask for confirmation that a
		 * particular record should be deleted.
		 *  @param {node} nTr The table row to 'open'
		 *  @param {string|node|jQuery} mHtml The HTML to put into the row
		 *  @param {string} sClass Class to give the new TD cell
		 *  @returns {node} The row opened. Note that if the table row passed in as the
		 *    first parameter, is not found in the table, this method will silently
		 *    return.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnOpen = function( nTr, mHtml, sClass )
		{
			return this.api( true )
				.row( nTr )
				.child( mHtml, sClass )
				.show()
				.child()[0];
		};
		
		
		/**
		 * Change the pagination - provides the internal logic for pagination in a simple API
		 * function. With this function you can have a DataTables table go to the next,
		 * previous, first or last pages.
		 *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
		 *    or page number to jump to (integer), note that page 0 is the first page.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnPageChange( 'next' );
		 *    } );
		 */
		this.fnPageChange = function ( mAction, bRedraw )
		{
			var api = this.api( true ).page( mAction );
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw(false);
			}
		};
		
		
		/**
		 * Show a particular column
		 *  @param {int} iCol The column whose display should be changed
		 *  @param {bool} bShow Show (true) or hide (false) the column
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Hide the second column after initialisation
		 *      oTable.fnSetColumnVis( 1, false );
		 *    } );
		 */
		this.fnSetColumnVis = function ( iCol, bShow, bRedraw )
		{
			var api = this.api( true ).column( iCol ).visible( bShow );
		
			if ( bRedraw === undefined || bRedraw ) {
				api.columns.adjust().draw();
			}
		};
		
		
		/**
		 * Get the settings for a particular table for external manipulation
		 *  @returns {object} DataTables settings object. See
		 *    {@link DataTable.models.oSettings}
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      var oSettings = oTable.fnSettings();
		 *
		 *      // Show an example parameter from the settings
		 *      alert( oSettings._iDisplayStart );
		 *    } );
		 */
		this.fnSettings = function()
		{
			return _fnSettingsFromNode( this[_ext.iApiIndex] );
		};
		
		
		/**
		 * Sort the table by a particular column
		 *  @param {int} iCol the data index to sort on. Note that this will not match the
		 *    'display index' if you have hidden data entries
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort immediately with columns 0 and 1
		 *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
		 *    } );
		 */
		this.fnSort = function( aaSort )
		{
			this.api( true ).order( aaSort ).draw();
		};
		
		
		/**
		 * Attach a sort listener to an element for a given column
		 *  @param {node} nNode the element to attach the sort listener to
		 *  @param {int} iColumn the column that a click on this node will sort on
		 *  @param {function} [fnCallback] callback function when sort is run
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort on column 1, when 'sorter' is clicked on
		 *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
		 *    } );
		 */
		this.fnSortListener = function( nNode, iColumn, fnCallback )
		{
			this.api( true ).order.listener( nNode, iColumn, fnCallback );
		};
		
		
		/**
		 * Update a table cell or row - this method will accept either a single value to
		 * update the cell with, an array of values with one element for each column or
		 * an object in the same format as the original data source. The function is
		 * self-referencing in order to make the multi column updates easier.
		 *  @param {object|array|string} mData Data to update the cell/row with
		 *  @param {node|int} mRow TR element you want to update or the aoData index
		 *  @param {int} [iColumn] The column to update, give as null or undefined to
		 *    update a whole row.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @param {bool} [bAction=true] Perform pre-draw actions or not
		 *  @returns {int} 0 on success, 1 on error
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
		 *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], $('tbody tr')[0] ); // Row
		 *    } );
		 */
		this.fnUpdate = function( mData, mRow, iColumn, bRedraw, bAction )
		{
			var api = this.api( true );
		
			if ( iColumn === undefined || iColumn === null ) {
				api.row( mRow ).data( mData );
			}
			else {
				api.cell( mRow, iColumn ).data( mData );
			}
		
			if ( bAction === undefined || bAction ) {
				api.columns.adjust();
			}
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw();
			}
			return 0;
		};
		
		
		/**
		 * Provide a common method for plug-ins to check the version of DataTables being used, in order
		 * to ensure compatibility.
		 *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
		 *    formats "X" and "X.Y" are also acceptable.
		 *  @returns {boolean} true if this version of DataTables is greater or equal to the required
		 *    version, or false if this version of DataTales is not suitable
		 *  @method
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      alert( oTable.fnVersionCheck( '1.9.0' ) );
		 *    } );
		 */
		this.fnVersionCheck = _ext.fnVersionCheck;
		
	
		var _that = this;
		var emptyInit = options === undefined;
		var len = this.length;
	
		if ( emptyInit ) {
			options = {};
		}
	
		this.oApi = this.internal = _ext.internal;
	
		// Extend with old style plug-in API methods
		for ( var fn in DataTable.ext.internal ) {
			if ( fn ) {
				this[fn] = _fnExternApiFunc(fn);
			}
		}
	
		this.each(function() {
			// For each initialisation we want to give it a clean initialisation
			// object that can be bashed around
			var o = {};
			var oInit = len > 1 ? // optimisation for single table case
				_fnExtend( o, options, true ) :
				options;
	
			/*global oInit,_that,emptyInit*/
			var i=0, iLen, j, jLen, k, kLen;
			var sId = this.getAttribute( 'id' );
			var bInitHandedOff = false;
			var defaults = DataTable.defaults;
			var $this = $(this);
			
			
			/* Sanity check */
			if ( this.nodeName.toLowerCase() != 'table' )
			{
				_fnLog( null, 0, 'Non-table node initialisation ('+this.nodeName+')', 2 );
				return;
			}
			
			/* Backwards compatibility for the defaults */
			_fnCompatOpts( defaults );
			_fnCompatCols( defaults.column );
			
			/* Convert the camel-case defaults to Hungarian */
			_fnCamelToHungarian( defaults, defaults, true );
			_fnCamelToHungarian( defaults.column, defaults.column, true );
			
			/* Setting up the initialisation object */
			_fnCamelToHungarian( defaults, $.extend( oInit, $this.data() ), true );
			
			
			
			/* Check to see if we are re-initialising a table */
			var allSettings = DataTable.settings;
			for ( i=0, iLen=allSettings.length ; i<iLen ; i++ )
			{
				var s = allSettings[i];
			
				/* Base check on table node */
				if (
					s.nTable == this ||
					(s.nTHead && s.nTHead.parentNode == this) ||
					(s.nTFoot && s.nTFoot.parentNode == this)
				) {
					var bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;
					var bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;
			
					if ( emptyInit || bRetrieve )
					{
						return s.oInstance;
					}
					else if ( bDestroy )
					{
						s.oInstance.fnDestroy();
						break;
					}
					else
					{
						_fnLog( s, 0, 'Cannot reinitialise DataTable', 3 );
						return;
					}
				}
			
				/* If the element we are initialising has the same ID as a table which was previously
				 * initialised, but the table nodes don't match (from before) then we destroy the old
				 * instance by simply deleting it. This is under the assumption that the table has been
				 * destroyed by other methods. Anyone using non-id selectors will need to do this manually
				 */
				if ( s.sTableId == this.id )
				{
					allSettings.splice( i, 1 );
					break;
				}
			}
			
			/* Ensure the table has an ID - required for accessibility */
			if ( sId === null || sId === "" )
			{
				sId = "DataTables_Table_"+(DataTable.ext._unique++);
				this.id = sId;
			}
			
			/* Create the settings object for this table and set some of the default parameters */
			var oSettings = $.extend( true, {}, DataTable.models.oSettings, {
				"sDestroyWidth": $this[0].style.width,
				"sInstance":     sId,
				"sTableId":      sId
			} );
			oSettings.nTable = this;
			oSettings.oApi   = _that.internal;
			oSettings.oInit  = oInit;
			
			allSettings.push( oSettings );
			
			// Need to add the instance after the instance after the settings object has been added
			// to the settings array, so we can self reference the table instance if more than one
			oSettings.oInstance = (_that.length===1) ? _that : $this.dataTable();
			
			// Backwards compatibility, before we apply all the defaults
			_fnCompatOpts( oInit );
			_fnLanguageCompat( oInit.oLanguage );
			
			// If the length menu is given, but the init display length is not, use the length menu
			if ( oInit.aLengthMenu && ! oInit.iDisplayLength )
			{
				oInit.iDisplayLength = Array.isArray( oInit.aLengthMenu[0] ) ?
					oInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];
			}
			
			// Apply the defaults and init options to make a single init object will all
			// options defined from defaults and instance options.
			oInit = _fnExtend( $.extend( true, {}, defaults ), oInit );
			
			
			// Map the initialisation options onto the settings object
			_fnMap( oSettings.oFeatures, oInit, [
				"bPaginate",
				"bLengthChange",
				"bFilter",
				"bSort",
				"bSortMulti",
				"bInfo",
				"bProcessing",
				"bAutoWidth",
				"bSortClasses",
				"bServerSide",
				"bDeferRender"
			] );
			_fnMap( oSettings, oInit, [
				"asStripeClasses",
				"ajax",
				"fnServerData",
				"fnFormatNumber",
				"sServerMethod",
				"aaSorting",
				"aaSortingFixed",
				"aLengthMenu",
				"sPaginationType",
				"sAjaxSource",
				"sAjaxDataProp",
				"iStateDuration",
				"sDom",
				"bSortCellsTop",
				"iTabIndex",
				"fnStateLoadCallback",
				"fnStateSaveCallback",
				"renderer",
				"searchDelay",
				"rowId",
				[ "iCookieDuration", "iStateDuration" ], // backwards compat
				[ "oSearch", "oPreviousSearch" ],
				[ "aoSearchCols", "aoPreSearchCols" ],
				[ "iDisplayLength", "_iDisplayLength" ]
			] );
			_fnMap( oSettings.oScroll, oInit, [
				[ "sScrollX", "sX" ],
				[ "sScrollXInner", "sXInner" ],
				[ "sScrollY", "sY" ],
				[ "bScrollCollapse", "bCollapse" ]
			] );
			_fnMap( oSettings.oLanguage, oInit, "fnInfoCallback" );
			
			/* Callback functions which are array driven */
			_fnCallbackReg( oSettings, 'aoDrawCallback',       oInit.fnDrawCallback,      'user' );
			_fnCallbackReg( oSettings, 'aoServerParams',       oInit.fnServerParams,      'user' );
			_fnCallbackReg( oSettings, 'aoStateSaveParams',    oInit.fnStateSaveParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoadParams',    oInit.fnStateLoadParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoaded',        oInit.fnStateLoaded,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCallback',        oInit.fnRowCallback,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow,        'user' );
			_fnCallbackReg( oSettings, 'aoHeaderCallback',     oInit.fnHeaderCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoFooterCallback',     oInit.fnFooterCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoInitComplete',       oInit.fnInitComplete,      'user' );
			_fnCallbackReg( oSettings, 'aoPreDrawCallback',    oInit.fnPreDrawCallback,   'user' );
			
			oSettings.rowIdFn = _fnGetObjectDataFn( oInit.rowId );
			
			/* Browser support detection */
			_fnBrowserDetect( oSettings );
			
			var oClasses = oSettings.oClasses;
			
			$.extend( oClasses, DataTable.ext.classes, oInit.oClasses );
			$this.addClass( oClasses.sTable );
			
			
			if ( oSettings.iInitDisplayStart === undefined )
			{
				/* Display start point, taking into account the save saving */
				oSettings.iInitDisplayStart = oInit.iDisplayStart;
				oSettings._iDisplayStart = oInit.iDisplayStart;
			}
			
			if ( oInit.iDeferLoading !== null )
			{
				oSettings.bDeferLoading = true;
				var tmp = Array.isArray( oInit.iDeferLoading );
				oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
				oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
			}
			
			/* Language definitions */
			var oLanguage = oSettings.oLanguage;
			$.extend( true, oLanguage, oInit.oLanguage );
			
			if ( oLanguage.sUrl )
			{
				/* Get the language definitions from a file - because this Ajax call makes the language
				 * get async to the remainder of this function we use bInitHandedOff to indicate that
				 * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor
				 */
				$.ajax( {
					dataType: 'json',
					url: oLanguage.sUrl,
					success: function ( json ) {
						_fnCamelToHungarian( defaults.oLanguage, json );
						_fnLanguageCompat( json );
						$.extend( true, oLanguage, json, oSettings.oInit.oLanguage );
			
						_fnCallbackFire( oSettings, null, 'i18n', [oSettings]);
						_fnInitialise( oSettings );
					},
					error: function () {
						// Error occurred loading language file, continue on as best we can
						_fnInitialise( oSettings );
					}
				} );
				bInitHandedOff = true;
			}
			else {
				_fnCallbackFire( oSettings, null, 'i18n', [oSettings]);
			}
			
			/*
			 * Stripes
			 */
			if ( oInit.asStripeClasses === null )
			{
				oSettings.asStripeClasses =[
					oClasses.sStripeOdd,
					oClasses.sStripeEven
				];
			}
			
			/* Remove row stripe classes if they are already on the table row */
			var stripeClasses = oSettings.asStripeClasses;
			var rowOne = $this.children('tbody').find('tr').eq(0);
			if ( $.inArray( true, $.map( stripeClasses, function(el, i) {
				return rowOne.hasClass(el);
			} ) ) !== -1 ) {
				$('tbody tr', this).removeClass( stripeClasses.join(' ') );
				oSettings.asDestroyStripes = stripeClasses.slice();
			}
			
			/*
			 * Columns
			 * See if we should load columns automatically or use defined ones
			 */
			var anThs = [];
			var aoColumnsInit;
			var nThead = this.getElementsByTagName('thead');
			if ( nThead.length !== 0 )
			{
				_fnDetectHeader( oSettings.aoHeader, nThead[0] );
				anThs = _fnGetUniqueThs( oSettings );
			}
			
			/* If not given a column array, generate one with nulls */
			if ( oInit.aoColumns === null )
			{
				aoColumnsInit = [];
				for ( i=0, iLen=anThs.length ; i<iLen ; i++ )
				{
					aoColumnsInit.push( null );
				}
			}
			else
			{
				aoColumnsInit = oInit.aoColumns;
			}
			
			/* Add the columns */
			for ( i=0, iLen=aoColumnsInit.length ; i<iLen ; i++ )
			{
				_fnAddColumn( oSettings, anThs ? anThs[i] : null );
			}
			
			/* Apply the column definitions */
			_fnApplyColumnDefs( oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {
				_fnColumnOptions( oSettings, iCol, oDef );
			} );
			
			/* HTML5 attribute detection - build an mData object automatically if the
			 * attributes are found
			 */
			if ( rowOne.length ) {
				var a = function ( cell, name ) {
					return cell.getAttribute( 'data-'+name ) !== null ? name : null;
				};
			
				$( rowOne[0] ).children('th, td').each( function (i, cell) {
					var col = oSettings.aoColumns[i];
			
					if (! col) {
						_fnLog( oSettings, 0, 'Incorrect column count', 18 );
					}
			
					if ( col.mData === i ) {
						var sort = a( cell, 'sort' ) || a( cell, 'order' );
						var filter = a( cell, 'filter' ) || a( cell, 'search' );
			
						if ( sort !== null || filter !== null ) {
							col.mData = {
								_:      i+'.display',
								sort:   sort !== null   ? i+'.@data-'+sort   : undefined,
								type:   sort !== null   ? i+'.@data-'+sort   : undefined,
								filter: filter !== null ? i+'.@data-'+filter : undefined
							};
			
							_fnColumnOptions( oSettings, i );
						}
					}
				} );
			}
			
			var features = oSettings.oFeatures;
			var loadedInit = function () {
				/*
				 * Sorting
				 * @todo For modularisation (1.11) this needs to do into a sort start up handler
				 */
			
				// If aaSorting is not defined, then we use the first indicator in asSorting
				// in case that has been altered, so the default sort reflects that option
				if ( oInit.aaSorting === undefined ) {
					var sorting = oSettings.aaSorting;
					for ( i=0, iLen=sorting.length ; i<iLen ; i++ ) {
						sorting[i][1] = oSettings.aoColumns[ i ].asSorting[0];
					}
				}
			
				/* Do a first pass on the sorting classes (allows any size changes to be taken into
				 * account, and also will apply sorting disabled classes if disabled
				 */
				_fnSortingClasses( oSettings );
			
				if ( features.bSort ) {
					_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
						if ( oSettings.bSorted ) {
							var aSort = _fnSortFlatten( oSettings );
							var sortedColumns = {};
			
							$.each( aSort, function (i, val) {
								sortedColumns[ val.src ] = val.dir;
							} );
			
							_fnCallbackFire( oSettings, null, 'order', [oSettings, aSort, sortedColumns] );
							_fnSortAria( oSettings );
						}
					} );
				}
			
				_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
					if ( oSettings.bSorted || _fnDataSource( oSettings ) === 'ssp' || features.bDeferRender ) {
						_fnSortingClasses( oSettings );
					}
				}, 'sc' );
			
			
				/*
				 * Final init
				 * Cache the header, body and footer as required, creating them if needed
				 */
			
				// Work around for Webkit bug 83867 - store the caption-side before removing from doc
				var captions = $this.children('caption').each( function () {
					this._captionSide = $(this).css('caption-side');
				} );
			
				var thead = $this.children('thead');
				if ( thead.length === 0 ) {
					thead = $('<thead/>').appendTo($this);
				}
				oSettings.nTHead = thead[0];
			
				var tbody = $this.children('tbody');
				if ( tbody.length === 0 ) {
					tbody = $('<tbody/>').insertAfter(thead);
				}
				oSettings.nTBody = tbody[0];
			
				var tfoot = $this.children('tfoot');
				if ( tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") ) {
					// If we are a scrolling table, and no footer has been given, then we need to create
					// a tfoot element for the caption element to be appended to
					tfoot = $('<tfoot/>').appendTo($this);
				}
			
				if ( tfoot.length === 0 || tfoot.children().length === 0 ) {
					$this.addClass( oClasses.sNoFooter );
				}
				else if ( tfoot.length > 0 ) {
					oSettings.nTFoot = tfoot[0];
					_fnDetectHeader( oSettings.aoFooter, oSettings.nTFoot );
				}
			
				/* Check if there is data passing into the constructor */
				if ( oInit.aaData ) {
					for ( i=0 ; i<oInit.aaData.length ; i++ ) {
						_fnAddData( oSettings, oInit.aaData[ i ] );
					}
				}
				else if ( oSettings.bDeferLoading || _fnDataSource( oSettings ) == 'dom' ) {
					/* Grab the data from the page - only do this when deferred loading or no Ajax
					 * source since there is no point in reading the DOM data if we are then going
					 * to replace it with Ajax data
					 */
					_fnAddTr( oSettings, $(oSettings.nTBody).children('tr') );
				}
			
				/* Copy the data index array */
				oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
			
				/* Initialisation complete - table can be drawn */
				oSettings.bInitialised = true;
			
				/* Check if we need to initialise the table (it might not have been handed off to the
				 * language processor)
				 */
				if ( bInitHandedOff === false ) {
					_fnInitialise( oSettings );
				}
			};
			
			/* Must be done after everything which can be overridden by the state saving! */
			_fnCallbackReg( oSettings, 'aoDrawCallback', _fnSaveState, 'state_save' );
			
			if ( oInit.bStateSave )
			{
				features.bStateSave = true;
				_fnLoadState( oSettings, oInit, loadedInit );
			}
			else {
				loadedInit();
			}
			
		} );
		_that = null;
		return this;
	};
	
	
	/*
	 * It is useful to have variables which are scoped locally so only the
	 * DataTables functions can access them and they don't leak into global space.
	 * At the same time these functions are often useful over multiple files in the
	 * core and API, so we list, or at least document, all variables which are used
	 * by DataTables as private variables here. This also ensures that there is no
	 * clashing of variable names and that they can easily referenced for reuse.
	 */
	
	
	// Defined else where
	//  _selector_run
	//  _selector_opts
	//  _selector_first
	//  _selector_row_indexes
	
	var _ext; // DataTable.ext
	var _Api; // DataTable.Api
	var _api_register; // DataTable.Api.register
	var _api_registerPlural; // DataTable.Api.registerPlural
	
	var _re_dic = {};
	var _re_new_lines = /[\r\n\u2028]/g;
	var _re_html = /<.*?>/g;
	
	// This is not strict ISO8601 - Date.parse() is quite lax, although
	// implementations differ between browsers.
	var _re_date = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/;
	
	// Escape regular expression special characters
	var _re_escape_regex = new RegExp( '(\\' + [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-' ].join('|\\') + ')', 'g' );
	
	// http://en.wikipedia.org/wiki/Foreign_exchange_market
	// - \u20BD - Russian ruble.
	// - \u20a9 - South Korean Won
	// - \u20BA - Turkish Lira
	// - \u20B9 - Indian Rupee
	// - R - Brazil (R$) and South Africa
	// - fr - Swiss Franc
	// - kr - Swedish krona, Norwegian krone and Danish krone
	// - \u2009 is thin space and \u202F is narrow no-break space, both used in many
	// - Ƀ - Bitcoin
	// - Ξ - Ethereum
	//   standards as thousands separators.
	var _re_formatted_numeric = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;
	
	
	var _empty = function ( d ) {
		return !d || d === true || d === '-' ? true : false;
	};
	
	
	var _intVal = function ( s ) {
		var integer = parseInt( s, 10 );
		return !isNaN(integer) && isFinite(s) ? integer : null;
	};
	
	// Convert from a formatted number with characters other than `.` as the
	// decimal place, to a Javascript number
	var _numToDecimal = function ( num, decimalPoint ) {
		// Cache created regular expressions for speed as this function is called often
		if ( ! _re_dic[ decimalPoint ] ) {
			_re_dic[ decimalPoint ] = new RegExp( _fnEscapeRegex( decimalPoint ), 'g' );
		}
		return typeof num === 'string' && decimalPoint !== '.' ?
			num.replace( /\./g, '' ).replace( _re_dic[ decimalPoint ], '.' ) :
			num;
	};
	
	
	var _isNumber = function ( d, decimalPoint, formatted ) {
		var strType = typeof d === 'string';
	
		// If empty return immediately so there must be a number if it is a
		// formatted string (this stops the string "k", or "kr", etc being detected
		// as a formatted number for currency
		if ( _empty( d ) ) {
			return true;
		}
	
		if ( decimalPoint && strType ) {
			d = _numToDecimal( d, decimalPoint );
		}
	
		if ( formatted && strType ) {
			d = d.replace( _re_formatted_numeric, '' );
		}
	
		return !isNaN( parseFloat(d) ) && isFinite( d );
	};
	
	
	// A string without HTML in it can be considered to be HTML still
	var _isHtml = function ( d ) {
		return _empty( d ) || typeof d === 'string';
	};
	
	
	var _htmlNumeric = function ( d, decimalPoint, formatted ) {
		if ( _empty( d ) ) {
			return true;
		}
	
		var html = _isHtml( d );
		return ! html ?
			null :
			_isNumber( _stripHtml( d ), decimalPoint, formatted ) ?
				true :
				null;
	};
	
	
	var _pluck = function ( a, prop, prop2 ) {
		var out = [];
		var i=0, ien=a.length;
	
		// Could have the test in the loop for slightly smaller code, but speed
		// is essential here
		if ( prop2 !== undefined ) {
			for ( ; i<ien ; i++ ) {
				if ( a[i] && a[i][ prop ] ) {
					out.push( a[i][ prop ][ prop2 ] );
				}
			}
		}
		else {
			for ( ; i<ien ; i++ ) {
				if ( a[i] ) {
					out.push( a[i][ prop ] );
				}
			}
		}
	
		return out;
	};
	
	
	// Basically the same as _pluck, but rather than looping over `a` we use `order`
	// as the indexes to pick from `a`
	var _pluck_order = function ( a, order, prop, prop2 )
	{
		var out = [];
		var i=0, ien=order.length;
	
		// Could have the test in the loop for slightly smaller code, but speed
		// is essential here
		if ( prop2 !== undefined ) {
			for ( ; i<ien ; i++ ) {
				if ( a[ order[i] ][ prop ] ) {
					out.push( a[ order[i] ][ prop ][ prop2 ] );
				}
			}
		}
		else {
			for ( ; i<ien ; i++ ) {
				out.push( a[ order[i] ][ prop ] );
			}
		}
	
		return out;
	};
	
	
	var _range = function ( len, start )
	{
		var out = [];
		var end;
	
		if ( start === undefined ) {
			start = 0;
			end = len;
		}
		else {
			end = start;
			start = len;
		}
	
		for ( var i=start ; i<end ; i++ ) {
			out.push( i );
		}
	
		return out;
	};
	
	
	var _removeEmpty = function ( a )
	{
		var out = [];
	
		for ( var i=0, ien=a.length ; i<ien ; i++ ) {
			if ( a[i] ) { // careful - will remove all falsy values!
				out.push( a[i] );
			}
		}
	
		return out;
	};
	
	
	var _stripHtml = function ( d ) {
		return d.replace( _re_html, '' );
	};
	
	
	/**
	 * Determine if all values in the array are unique. This means we can short
	 * cut the _unique method at the cost of a single loop. A sorted array is used
	 * to easily check the values.
	 *
	 * @param  {array} src Source array
	 * @return {boolean} true if all unique, false otherwise
	 * @ignore
	 */
	var _areAllUnique = function ( src ) {
		if ( src.length < 2 ) {
			return true;
		}
	
		var sorted = src.slice().sort();
		var last = sorted[0];
	
		for ( var i=1, ien=sorted.length ; i<ien ; i++ ) {
			if ( sorted[i] === last ) {
				return false;
			}
	
			last = sorted[i];
		}
	
		return true;
	};
	
	
	/**
	 * Find the unique elements in a source array.
	 *
	 * @param  {array} src Source array
	 * @return {array} Array of unique items
	 * @ignore
	 */
	var _unique = function ( src )
	{
		if ( _areAllUnique( src ) ) {
			return src.slice();
		}
	
		// A faster unique method is to use object keys to identify used values,
		// but this doesn't work with arrays or objects, which we must also
		// consider. See jsperf.com/compare-array-unique-versions/4 for more
		// information.
		var
			out = [],
			val,
			i, ien=src.length,
			j, k=0;
	
		again: for ( i=0 ; i<ien ; i++ ) {
			val = src[i];
	
			for ( j=0 ; j<k ; j++ ) {
				if ( out[j] === val ) {
					continue again;
				}
			}
	
			out.push( val );
			k++;
		}
	
		return out;
	};
	
	// Surprisingly this is faster than [].concat.apply
	// https://jsperf.com/flatten-an-array-loop-vs-reduce/2
	var _flatten = function (out, val) {
		if (Array.isArray(val)) {
			for (var i=0 ; i<val.length ; i++) {
				_flatten(out, val[i]);
			}
		}
		else {
			out.push(val);
		}
	  
		return out;
	}
	
	var _includes = function (search, start) {
		if (start === undefined) {
			start = 0;
		}
	
		return this.indexOf(search, start) !== -1;	
	};
	
	// Array.isArray polyfill.
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
	if (! Array.isArray) {
	    Array.isArray = function(arg) {
	        return Object.prototype.toString.call(arg) === '[object Array]';
	    };
	}
	
	if (! Array.prototype.includes) {
		Array.prototype.includes = _includes;
	}
	
	// .trim() polyfill
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
	if (!String.prototype.trim) {
	  String.prototype.trim = function () {
	    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	  };
	}
	
	if (! String.prototype.includes) {
		String.prototype.includes = _includes;
	}
	
	/**
	 * DataTables utility methods
	 * 
	 * This namespace provides helper methods that DataTables uses internally to
	 * create a DataTable, but which are not exclusively used only for DataTables.
	 * These methods can be used by extension authors to save the duplication of
	 * code.
	 *
	 *  @namespace
	 */
	DataTable.util = {
		/**
		 * Throttle the calls to a function. Arguments and context are maintained
		 * for the throttled function.
		 *
		 * @param {function} fn Function to be called
		 * @param {integer} freq Call frequency in mS
		 * @return {function} Wrapped function
		 */
		throttle: function ( fn, freq ) {
			var
				frequency = freq !== undefined ? freq : 200,
				last,
				timer;
	
			return function () {
				var
					that = this,
					now  = +new Date(),
					args = arguments;
	
				if ( last && now < last + frequency ) {
					clearTimeout( timer );
	
					timer = setTimeout( function () {
						last = undefined;
						fn.apply( that, args );
					}, frequency );
				}
				else {
					last = now;
					fn.apply( that, args );
				}
			};
		},
	
	
		/**
		 * Escape a string such that it can be used in a regular expression
		 *
		 *  @param {string} val string to escape
		 *  @returns {string} escaped string
		 */
		escapeRegex: function ( val ) {
			return val.replace( _re_escape_regex, '\\$1' );
		},
	
		/**
		 * Create a function that will write to a nested object or array
		 * @param {*} source JSON notation string
		 * @returns Write function
		 */
		set: function ( source ) {
			if ( $.isPlainObject( source ) ) {
				/* Unlike get, only the underscore (global) option is used for for
				 * setting data since we don't know the type here. This is why an object
				 * option is not documented for `mData` (which is read/write), but it is
				 * for `mRender` which is read only.
				 */
				return DataTable.util.set( source._ );
			}
			else if ( source === null ) {
				// Nothing to do when the data source is null
				return function () {};
			}
			else if ( typeof source === 'function' ) {
				return function (data, val, meta) {
					source( data, 'set', val, meta );
				};
			}
			else if ( typeof source === 'string' && (source.indexOf('.') !== -1 ||
					  source.indexOf('[') !== -1 || source.indexOf('(') !== -1) )
			{
				// Like the get, we need to get data from a nested object
				var setData = function (data, val, src) {
					var a = _fnSplitObjNotation( src ), b;
					var aLast = a[a.length-1];
					var arrayNotation, funcNotation, o, innerSrc;
		
					for ( var i=0, iLen=a.length-1 ; i<iLen ; i++ ) {
						// Protect against prototype pollution
						if (a[i] === '__proto__' || a[i] === 'constructor') {
							throw new Error('Cannot set prototype values');
						}
		
						// Check if we are dealing with an array notation request
						arrayNotation = a[i].match(__reArray);
						funcNotation = a[i].match(__reFn);
		
						if ( arrayNotation ) {
							a[i] = a[i].replace(__reArray, '');
							data[ a[i] ] = [];
		
							// Get the remainder of the nested object to set so we can recurse
							b = a.slice();
							b.splice( 0, i+1 );
							innerSrc = b.join('.');
		
							// Traverse each entry in the array setting the properties requested
							if ( Array.isArray( val ) ) {
								for ( var j=0, jLen=val.length ; j<jLen ; j++ ) {
									o = {};
									setData( o, val[j], innerSrc );
									data[ a[i] ].push( o );
								}
							}
							else {
								// We've been asked to save data to an array, but it
								// isn't array data to be saved. Best that can be done
								// is to just save the value.
								data[ a[i] ] = val;
							}
		
							// The inner call to setData has already traversed through the remainder
							// of the source and has set the data, thus we can exit here
							return;
						}
						else if ( funcNotation ) {
							// Function call
							a[i] = a[i].replace(__reFn, '');
							data = data[ a[i] ]( val );
						}
		
						// If the nested object doesn't currently exist - since we are
						// trying to set the value - create it
						if ( data[ a[i] ] === null || data[ a[i] ] === undefined ) {
							data[ a[i] ] = {};
						}
						data = data[ a[i] ];
					}
		
					// Last item in the input - i.e, the actual set
					if ( aLast.match(__reFn ) ) {
						// Function call
						data = data[ aLast.replace(__reFn, '') ]( val );
					}
					else {
						// If array notation is used, we just want to strip it and use the property name
						// and assign the value. If it isn't used, then we get the result we want anyway
						data[ aLast.replace(__reArray, '') ] = val;
					}
				};
		
				return function (data, val) { // meta is also passed in, but not used
					return setData( data, val, source );
				};
			}
			else {
				// Array or flat object mapping
				return function (data, val) { // meta is also passed in, but not used
					data[source] = val;
				};
			}
		},
	
		/**
		 * Create a function that will read nested objects from arrays, based on JSON notation
		 * @param {*} source JSON notation string
		 * @returns Value read
		 */
		get: function ( source ) {
			if ( $.isPlainObject( source ) ) {
				// Build an object of get functions, and wrap them in a single call
				var o = {};
				$.each( source, function (key, val) {
					if ( val ) {
						o[key] = DataTable.util.get( val );
					}
				} );
		
				return function (data, type, row, meta) {
					var t = o[type] || o._;
					return t !== undefined ?
						t(data, type, row, meta) :
						data;
				};
			}
			else if ( source === null ) {
				// Give an empty string for rendering / sorting etc
				return function (data) { // type, row and meta also passed, but not used
					return data;
				};
			}
			else if ( typeof source === 'function' ) {
				return function (data, type, row, meta) {
					return source( data, type, row, meta );
				};
			}
			else if ( typeof source === 'string' && (source.indexOf('.') !== -1 ||
					  source.indexOf('[') !== -1 || source.indexOf('(') !== -1) )
			{
				/* If there is a . in the source string then the data source is in a
				 * nested object so we loop over the data for each level to get the next
				 * level down. On each loop we test for undefined, and if found immediately
				 * return. This allows entire objects to be missing and sDefaultContent to
				 * be used if defined, rather than throwing an error
				 */
				var fetchData = function (data, type, src) {
					var arrayNotation, funcNotation, out, innerSrc;
		
					if ( src !== "" ) {
						var a = _fnSplitObjNotation( src );
		
						for ( var i=0, iLen=a.length ; i<iLen ; i++ ) {
							// Check if we are dealing with special notation
							arrayNotation = a[i].match(__reArray);
							funcNotation = a[i].match(__reFn);
		
							if ( arrayNotation ) {
								// Array notation
								a[i] = a[i].replace(__reArray, '');
		
								// Condition allows simply [] to be passed in
								if ( a[i] !== "" ) {
									data = data[ a[i] ];
								}
								out = [];
		
								// Get the remainder of the nested object to get
								a.splice( 0, i+1 );
								innerSrc = a.join('.');
		
								// Traverse each entry in the array getting the properties requested
								if ( Array.isArray( data ) ) {
									for ( var j=0, jLen=data.length ; j<jLen ; j++ ) {
										out.push( fetchData( data[j], type, innerSrc ) );
									}
								}
		
								// If a string is given in between the array notation indicators, that
								// is used to join the strings together, otherwise an array is returned
								var join = arrayNotation[0].substring(1, arrayNotation[0].length-1);
								data = (join==="") ? out : out.join(join);
		
								// The inner call to fetchData has already traversed through the remainder
								// of the source requested, so we exit from the loop
								break;
							}
							else if ( funcNotation ) {
								// Function call
								a[i] = a[i].replace(__reFn, '');
								data = data[ a[i] ]();
								continue;
							}
		
							if ( data === null || data[ a[i] ] === undefined ) {
								return undefined;
							}
	
							data = data[ a[i] ];
						}
					}
		
					return data;
				};
		
				return function (data, type) { // row and meta also passed, but not used
					return fetchData( data, type, source );
				};
			}
			else {
				// Array or flat object mapping
				return function (data, type) { // row and meta also passed, but not used
					return data[source];
				};
			}
		}
	};
	
	
	
	/**
	 * Create a mapping object that allows camel case parameters to be looked up
	 * for their Hungarian counterparts. The mapping is stored in a private
	 * parameter called `_hungarianMap` which can be accessed on the source object.
	 *  @param {object} o
	 *  @memberof DataTable#oApi
	 */
	function _fnHungarianMap ( o )
	{
		var
			hungarian = 'a aa ai ao as b fn i m o s ',
			match,
			newKey,
			map = {};
	
		$.each( o, function (key, val) {
			match = key.match(/^([^A-Z]+?)([A-Z])/);
	
			if ( match && hungarian.indexOf(match[1]+' ') !== -1 )
			{
				newKey = key.replace( match[0], match[2].toLowerCase() );
				map[ newKey ] = key;
	
				if ( match[1] === 'o' )
				{
					_fnHungarianMap( o[key] );
				}
			}
		} );
	
		o._hungarianMap = map;
	}
	
	
	/**
	 * Convert from camel case parameters to Hungarian, based on a Hungarian map
	 * created by _fnHungarianMap.
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 *  @memberof DataTable#oApi
	 */
	function _fnCamelToHungarian ( src, user, force )
	{
		if ( ! src._hungarianMap ) {
			_fnHungarianMap( src );
		}
	
		var hungarianKey;
	
		$.each( user, function (key, val) {
			hungarianKey = src._hungarianMap[ key ];
	
			if ( hungarianKey !== undefined && (force || user[hungarianKey] === undefined) )
			{
				// For objects, we need to buzz down into the object to copy parameters
				if ( hungarianKey.charAt(0) === 'o' )
				{
					// Copy the camelCase options over to the hungarian
					if ( ! user[ hungarianKey ] ) {
						user[ hungarianKey ] = {};
					}
					$.extend( true, user[hungarianKey], user[key] );
	
					_fnCamelToHungarian( src[hungarianKey], user[hungarianKey], force );
				}
				else {
					user[hungarianKey] = user[ key ];
				}
			}
		} );
	}
	
	
	/**
	 * Language compatibility - when certain options are given, and others aren't, we
	 * need to duplicate the values over, in order to provide backwards compatibility
	 * with older language files.
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnLanguageCompat( lang )
	{
		// Note the use of the Hungarian notation for the parameters in this method as
		// this is called after the mapping of camelCase to Hungarian
		var defaults = DataTable.defaults.oLanguage;
	
		// Default mapping
		var defaultDecimal = defaults.sDecimal;
		if ( defaultDecimal ) {
			_addNumericSort( defaultDecimal );
		}
	
		if ( lang ) {
			var zeroRecords = lang.sZeroRecords;
	
			// Backwards compatibility - if there is no sEmptyTable given, then use the same as
			// sZeroRecords - assuming that is given.
			if ( ! lang.sEmptyTable && zeroRecords &&
				defaults.sEmptyTable === "No data available in table" )
			{
				_fnMap( lang, lang, 'sZeroRecords', 'sEmptyTable' );
			}
	
			// Likewise with loading records
			if ( ! lang.sLoadingRecords && zeroRecords &&
				defaults.sLoadingRecords === "Loading..." )
			{
				_fnMap( lang, lang, 'sZeroRecords', 'sLoadingRecords' );
			}
	
			// Old parameter name of the thousands separator mapped onto the new
			if ( lang.sInfoThousands ) {
				lang.sThousands = lang.sInfoThousands;
			}
	
			var decimal = lang.sDecimal;
			if ( decimal && defaultDecimal !== decimal ) {
				_addNumericSort( decimal );
			}
		}
	}
	
	
	/**
	 * Map one parameter onto another
	 *  @param {object} o Object to map
	 *  @param {*} knew The new parameter name
	 *  @param {*} old The old parameter name
	 */
	var _fnCompatMap = function ( o, knew, old ) {
		if ( o[ knew ] !== undefined ) {
			o[ old ] = o[ knew ];
		}
	};
	
	
	/**
	 * Provide backwards compatibility for the main DT options. Note that the new
	 * options are mapped onto the old parameters, so this is an external interface
	 * change only.
	 *  @param {object} init Object to map
	 */
	function _fnCompatOpts ( init )
	{
		_fnCompatMap( init, 'ordering',      'bSort' );
		_fnCompatMap( init, 'orderMulti',    'bSortMulti' );
		_fnCompatMap( init, 'orderClasses',  'bSortClasses' );
		_fnCompatMap( init, 'orderCellsTop', 'bSortCellsTop' );
		_fnCompatMap( init, 'order',         'aaSorting' );
		_fnCompatMap( init, 'orderFixed',    'aaSortingFixed' );
		_fnCompatMap( init, 'paging',        'bPaginate' );
		_fnCompatMap( init, 'pagingType',    'sPaginationType' );
		_fnCompatMap( init, 'pageLength',    'iDisplayLength' );
		_fnCompatMap( init, 'searching',     'bFilter' );
	
		// Boolean initialisation of x-scrolling
		if ( typeof init.sScrollX === 'boolean' ) {
			init.sScrollX = init.sScrollX ? '100%' : '';
		}
		if ( typeof init.scrollX === 'boolean' ) {
			init.scrollX = init.scrollX ? '100%' : '';
		}
	
		// Column search objects are in an array, so it needs to be converted
		// element by element
		var searchCols = init.aoSearchCols;
	
		if ( searchCols ) {
			for ( var i=0, ien=searchCols.length ; i<ien ; i++ ) {
				if ( searchCols[i] ) {
					_fnCamelToHungarian( DataTable.models.oSearch, searchCols[i] );
				}
			}
		}
	}
	
	
	/**
	 * Provide backwards compatibility for column options. Note that the new options
	 * are mapped onto the old parameters, so this is an external interface change
	 * only.
	 *  @param {object} init Object to map
	 */
	function _fnCompatCols ( init )
	{
		_fnCompatMap( init, 'orderable',     'bSortable' );
		_fnCompatMap( init, 'orderData',     'aDataSort' );
		_fnCompatMap( init, 'orderSequence', 'asSorting' );
		_fnCompatMap( init, 'orderDataType', 'sortDataType' );
	
		// orderData can be given as an integer
		var dataSort = init.aDataSort;
		if ( typeof dataSort === 'number' && ! Array.isArray( dataSort ) ) {
			init.aDataSort = [ dataSort ];
		}
	}
	
	
	/**
	 * Browser feature detection for capabilities, quirks
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnBrowserDetect( settings )
	{
		// We don't need to do this every time DataTables is constructed, the values
		// calculated are specific to the browser and OS configuration which we
		// don't expect to change between initialisations
		if ( ! DataTable.__browser ) {
			var browser = {};
			DataTable.__browser = browser;
	
			// Scrolling feature / quirks detection
			var n = $('<div/>')
				.css( {
					position: 'fixed',
					top: 0,
					left: $(window).scrollLeft()*-1, // allow for scrolling
					height: 1,
					width: 1,
					overflow: 'hidden'
				} )
				.append(
					$('<div/>')
						.css( {
							position: 'absolute',
							top: 1,
							left: 1,
							width: 100,
							overflow: 'scroll'
						} )
						.append(
							$('<div/>')
								.css( {
									width: '100%',
									height: 10
								} )
						)
				)
				.appendTo( 'body' );
	
			var outer = n.children();
			var inner = outer.children();
	
			// Numbers below, in order, are:
			// inner.offsetWidth, inner.clientWidth, outer.offsetWidth, outer.clientWidth
			//
			// IE6 XP:                           100 100 100  83
			// IE7 Vista:                        100 100 100  83
			// IE 8+ Windows:                     83  83 100  83
			// Evergreen Windows:                 83  83 100  83
			// Evergreen Mac with scrollbars:     85  85 100  85
			// Evergreen Mac without scrollbars: 100 100 100 100
	
			// Get scrollbar width
			browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;
	
			// IE6/7 will oversize a width 100% element inside a scrolling element, to
			// include the width of the scrollbar, while other browsers ensure the inner
			// element is contained without forcing scrolling
			browser.bScrollOversize = inner[0].offsetWidth === 100 && outer[0].clientWidth !== 100;
	
			// In rtl text layout, some browsers (most, but not all) will place the
			// scrollbar on the left, rather than the right.
			browser.bScrollbarLeft = Math.round( inner.offset().left ) !== 1;
	
			// IE8- don't provide height and width for getBoundingClientRect
			browser.bBounding = n[0].getBoundingClientRect().width ? true : false;
	
			n.remove();
		}
	
		$.extend( settings.oBrowser, DataTable.__browser );
		settings.oScroll.iBarWidth = DataTable.__browser.barWidth;
	}
	
	
	/**
	 * Array.prototype reduce[Right] method, used for browsers which don't support
	 * JS 1.6. Done this way to reduce code size, since we iterate either way
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnReduce ( that, fn, init, start, end, inc )
	{
		var
			i = start,
			value,
			isSet = false;
	
		if ( init !== undefined ) {
			value = init;
			isSet = true;
		}
	
		while ( i !== end ) {
			if ( ! that.hasOwnProperty(i) ) {
				continue;
			}
	
			value = isSet ?
				fn( value, that[i], i, that ) :
				that[i];
	
			isSet = true;
			i += inc;
		}
	
		return value;
	}
	
	/**
	 * Add a column to the list used for the table with default values
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nTh The th element for this column
	 *  @memberof DataTable#oApi
	 */
	function _fnAddColumn( oSettings, nTh )
	{
		// Add column to aoColumns array
		var oDefaults = DataTable.defaults.column;
		var iCol = oSettings.aoColumns.length;
		var oCol = $.extend( {}, DataTable.models.oColumn, oDefaults, {
			"nTh": nTh ? nTh : document.createElement('th'),
			"sTitle":    oDefaults.sTitle    ? oDefaults.sTitle    : nTh ? nTh.innerHTML : '',
			"aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
			"mData": oDefaults.mData ? oDefaults.mData : iCol,
			idx: iCol
		} );
		oSettings.aoColumns.push( oCol );
	
		// Add search object for column specific search. Note that the `searchCols[ iCol ]`
		// passed into extend can be undefined. This allows the user to give a default
		// with only some of the parameters defined, and also not give a default
		var searchCols = oSettings.aoPreSearchCols;
		searchCols[ iCol ] = $.extend( {}, DataTable.models.oSearch, searchCols[ iCol ] );
	
		// Use the default column options function to initialise classes etc
		_fnColumnOptions( oSettings, iCol, $(nTh).data() );
	}
	
	
	/**
	 * Apply options for a column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iCol column index to consider
	 *  @param {object} oOptions object with sType, bVisible and bSearchable etc
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnOptions( oSettings, iCol, oOptions )
	{
		var oCol = oSettings.aoColumns[ iCol ];
		var oClasses = oSettings.oClasses;
		var th = $(oCol.nTh);
	
		// Try to get width information from the DOM. We can't get it from CSS
		// as we'd need to parse the CSS stylesheet. `width` option can override
		if ( ! oCol.sWidthOrig ) {
			// Width attribute
			oCol.sWidthOrig = th.attr('width') || null;
	
			// Style attribute
			var t = (th.attr('style') || '').match(/width:\s*(\d+[pxem%]+)/);
			if ( t ) {
				oCol.sWidthOrig = t[1];
			}
		}
	
		/* User specified column options */
		if ( oOptions !== undefined && oOptions !== null )
		{
			// Backwards compatibility
			_fnCompatCols( oOptions );
	
			// Map camel case parameters to their Hungarian counterparts
			_fnCamelToHungarian( DataTable.defaults.column, oOptions, true );
	
			/* Backwards compatibility for mDataProp */
			if ( oOptions.mDataProp !== undefined && !oOptions.mData )
			{
				oOptions.mData = oOptions.mDataProp;
			}
	
			if ( oOptions.sType )
			{
				oCol._sManualType = oOptions.sType;
			}
	
			// `class` is a reserved word in Javascript, so we need to provide
			// the ability to use a valid name for the camel case input
			if ( oOptions.className && ! oOptions.sClass )
			{
				oOptions.sClass = oOptions.className;
			}
			if ( oOptions.sClass ) {
				th.addClass( oOptions.sClass );
			}
	
			var origClass = oCol.sClass;
	
			$.extend( oCol, oOptions );
			_fnMap( oCol, oOptions, "sWidth", "sWidthOrig" );
	
			// Merge class from previously defined classes with this one, rather than just
			// overwriting it in the extend above
			if (origClass !== oCol.sClass) {
				oCol.sClass = origClass + ' ' + oCol.sClass;
			}
	
			/* iDataSort to be applied (backwards compatibility), but aDataSort will take
			 * priority if defined
			 */
			if ( oOptions.iDataSort !== undefined )
			{
				oCol.aDataSort = [ oOptions.iDataSort ];
			}
			_fnMap( oCol, oOptions, "aDataSort" );
		}
	
		/* Cache the data get and set functions for speed */
		var mDataSrc = oCol.mData;
		var mData = _fnGetObjectDataFn( mDataSrc );
		var mRender = oCol.mRender ? _fnGetObjectDataFn( oCol.mRender ) : null;
	
		var attrTest = function( src ) {
			return typeof src === 'string' && src.indexOf('@') !== -1;
		};
		oCol._bAttrSrc = $.isPlainObject( mDataSrc ) && (
			attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter)
		);
		oCol._setter = null;
	
		oCol.fnGetData = function (rowData, type, meta) {
			var innerData = mData( rowData, type, undefined, meta );
	
			return mRender && type ?
				mRender( innerData, type, rowData, meta ) :
				innerData;
		};
		oCol.fnSetData = function ( rowData, val, meta ) {
			return _fnSetObjectDataFn( mDataSrc )( rowData, val, meta );
		};
	
		// Indicate if DataTables should read DOM data as an object or array
		// Used in _fnGetRowElements
		if ( typeof mDataSrc !== 'number' ) {
			oSettings._rowReadObject = true;
		}
	
		/* Feature sorting overrides column specific when off */
		if ( !oSettings.oFeatures.bSort )
		{
			oCol.bSortable = false;
			th.addClass( oClasses.sSortableNone ); // Have to add class here as order event isn't called
		}
	
		/* Check that the class assignment is correct for sorting */
		var bAsc = $.inArray('asc', oCol.asSorting) !== -1;
		var bDesc = $.inArray('desc', oCol.asSorting) !== -1;
		if ( !oCol.bSortable || (!bAsc && !bDesc) )
		{
			oCol.sSortingClass = oClasses.sSortableNone;
			oCol.sSortingClassJUI = "";
		}
		else if ( bAsc && !bDesc )
		{
			oCol.sSortingClass = oClasses.sSortableAsc;
			oCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;
		}
		else if ( !bAsc && bDesc )
		{
			oCol.sSortingClass = oClasses.sSortableDesc;
			oCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;
		}
		else
		{
			oCol.sSortingClass = oClasses.sSortable;
			oCol.sSortingClassJUI = oClasses.sSortJUI;
		}
	}
	
	
	/**
	 * Adjust the table column widths for new data. Note: you would probably want to
	 * do a redraw after calling this function!
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnAdjustColumnSizing ( settings )
	{
		/* Not interested in doing column width calculation if auto-width is disabled */
		if ( settings.oFeatures.bAutoWidth !== false )
		{
			var columns = settings.aoColumns;
	
			_fnCalculateColumnWidths( settings );
			for ( var i=0 , iLen=columns.length ; i<iLen ; i++ )
			{
				columns[i].nTh.style.width = columns[i].sWidth;
			}
		}
	
		var scroll = settings.oScroll;
		if ( scroll.sY !== '' || scroll.sX !== '')
		{
			_fnScrollDraw( settings );
		}
	
		_fnCallbackFire( settings, null, 'column-sizing', [settings] );
	}
	
	
	/**
	 * Convert the index of a visible column to the index in the data array (take account
	 * of hidden columns)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iMatch Visible column index to lookup
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */
	function _fnVisibleToColumnIndex( oSettings, iMatch )
	{
		var aiVis = _fnGetColumns( oSettings, 'bVisible' );
	
		return typeof aiVis[iMatch] === 'number' ?
			aiVis[iMatch] :
			null;
	}
	
	
	/**
	 * Convert the index of an index in the data array and convert it to the visible
	 *   column index (take account of hidden columns)
	 *  @param {int} iMatch Column index to lookup
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnIndexToVisible( oSettings, iMatch )
	{
		var aiVis = _fnGetColumns( oSettings, 'bVisible' );
		var iPos = $.inArray( iMatch, aiVis );
	
		return iPos !== -1 ? iPos : null;
	}
	
	
	/**
	 * Get the number of visible columns
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the number of visible columns
	 *  @memberof DataTable#oApi
	 */
	function _fnVisbleColumns( oSettings )
	{
		var vis = 0;
	
		// No reduce in IE8, use a loop for now
		$.each( oSettings.aoColumns, function ( i, col ) {
			if ( col.bVisible && $(col.nTh).css('display') !== 'none' ) {
				vis++;
			}
		} );
	
		return vis;
	}
	
	
	/**
	 * Get an array of column indexes that match a given property
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sParam Parameter in aoColumns to look for - typically
	 *    bVisible or bSearchable
	 *  @returns {array} Array of indexes with matched properties
	 *  @memberof DataTable#oApi
	 */
	function _fnGetColumns( oSettings, sParam )
	{
		var a = [];
	
		$.map( oSettings.aoColumns, function(val, i) {
			if ( val[sParam] ) {
				a.push( i );
			}
		} );
	
		return a;
	}
	
	
	/**
	 * Calculate the 'type' of a column
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnTypes ( settings )
	{
		var columns = settings.aoColumns;
		var data = settings.aoData;
		var types = DataTable.ext.type.detect;
		var i, ien, j, jen, k, ken;
		var col, cell, detectedType, cache;
	
		// For each column, spin over the 
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			col = columns[i];
			cache = [];
	
			if ( ! col.sType && col._sManualType ) {
				col.sType = col._sManualType;
			}
			else if ( ! col.sType ) {
				for ( j=0, jen=types.length ; j<jen ; j++ ) {
					for ( k=0, ken=data.length ; k<ken ; k++ ) {
						// Use a cache array so we only need to get the type data
						// from the formatter once (when using multiple detectors)
						if ( cache[k] === undefined ) {
							cache[k] = _fnGetCellData( settings, k, i, 'type' );
						}
	
						detectedType = types[j]( cache[k], settings );
	
						// If null, then this type can't apply to this column, so
						// rather than testing all cells, break out. There is an
						// exception for the last type which is `html`. We need to
						// scan all rows since it is possible to mix string and HTML
						// types
						if ( ! detectedType && j !== types.length-1 ) {
							break;
						}
	
						// Only a single match is needed for html type since it is
						// bottom of the pile and very similar to string - but it
						// must not be empty
						if ( detectedType === 'html' && ! _empty(cache[k]) ) {
							break;
						}
					}
	
					// Type is valid for all data points in the column - use this
					// type
					if ( detectedType ) {
						col.sType = detectedType;
						break;
					}
				}
	
				// Fall back - if no type was detected, always use string
				if ( ! col.sType ) {
					col.sType = 'string';
				}
			}
		}
	}
	
	
	/**
	 * Take the column definitions and static columns arrays and calculate how
	 * they relate to column indexes. The callback function will then apply the
	 * definition found for a column to a suitable configuration object.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
	 *  @param {array} aoCols The aoColumns array that defines columns individually
	 *  @param {function} fn Callback function - takes two parameters, the calculated
	 *    column index and the definition for that column.
	 *  @memberof DataTable#oApi
	 */
	function _fnApplyColumnDefs( oSettings, aoColDefs, aoCols, fn )
	{
		var i, iLen, j, jLen, k, kLen, def;
		var columns = oSettings.aoColumns;
	
		// Column definitions with aTargets
		if ( aoColDefs )
		{
			/* Loop over the definitions array - loop in reverse so first instance has priority */
			for ( i=aoColDefs.length-1 ; i>=0 ; i-- )
			{
				def = aoColDefs[i];
	
				/* Each definition can target multiple columns, as it is an array */
				var aTargets = def.target !== undefined
					? def.target
					: def.targets !== undefined
						? def.targets
						: def.aTargets;
	
				if ( ! Array.isArray( aTargets ) )
				{
					aTargets = [ aTargets ];
				}
	
				for ( j=0, jLen=aTargets.length ; j<jLen ; j++ )
				{
					if ( typeof aTargets[j] === 'number' && aTargets[j] >= 0 )
					{
						/* Add columns that we don't yet know about */
						while( columns.length <= aTargets[j] )
						{
							_fnAddColumn( oSettings );
						}
	
						/* Integer, basic index */
						fn( aTargets[j], def );
					}
					else if ( typeof aTargets[j] === 'number' && aTargets[j] < 0 )
					{
						/* Negative integer, right to left column counting */
						fn( columns.length+aTargets[j], def );
					}
					else if ( typeof aTargets[j] === 'string' )
					{
						/* Class name matching on TH element */
						for ( k=0, kLen=columns.length ; k<kLen ; k++ )
						{
							if ( aTargets[j] == "_all" ||
							     $(columns[k].nTh).hasClass( aTargets[j] ) )
							{
								fn( k, def );
							}
						}
					}
				}
			}
		}
	
		// Statically defined columns array
		if ( aoCols )
		{
			for ( i=0, iLen=aoCols.length ; i<iLen ; i++ )
			{
				fn( i, aoCols[i] );
			}
		}
	}
	
	/**
	 * Add a data array to the table, creating DOM node etc. This is the parallel to
	 * _fnGatherData, but for adding rows from a Javascript source, rather than a
	 * DOM source.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aData data array to be added
	 *  @param {node} [nTr] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
	 *  @memberof DataTable#oApi
	 */
	function _fnAddData ( oSettings, aDataIn, nTr, anTds )
	{
		/* Create the object for storing information about this new row */
		var iRow = oSettings.aoData.length;
		var oData = $.extend( true, {}, DataTable.models.oRow, {
			src: nTr ? 'dom' : 'data',
			idx: iRow
		} );
	
		oData._aData = aDataIn;
		oSettings.aoData.push( oData );
	
		/* Create the cells */
		var nTd, sThisType;
		var columns = oSettings.aoColumns;
	
		// Invalidate the column types as the new data needs to be revalidated
		for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
		{
			columns[i].sType = null;
		}
	
		/* Add to the display array */
		oSettings.aiDisplayMaster.push( iRow );
	
		var id = oSettings.rowIdFn( aDataIn );
		if ( id !== undefined ) {
			oSettings.aIds[ id ] = oData;
		}
	
		/* Create the DOM information, or register it if already present */
		if ( nTr || ! oSettings.oFeatures.bDeferRender )
		{
			_fnCreateTr( oSettings, iRow, nTr, anTds );
		}
	
		return iRow;
	}
	
	
	/**
	 * Add one or more TR elements to the table. Generally we'd expect to
	 * use this for reading data from a DOM sourced table, but it could be
	 * used for an TR element. Note that if a TR is given, it is used (i.e.
	 * it is not cloned).
	 *  @param {object} settings dataTables settings object
	 *  @param {array|node|jQuery} trs The TR element(s) to add to the table
	 *  @returns {array} Array of indexes for the added rows
	 *  @memberof DataTable#oApi
	 */
	function _fnAddTr( settings, trs )
	{
		var row;
	
		// Allow an individual node to be passed in
		if ( ! (trs instanceof $) ) {
			trs = $(trs);
		}
	
		return trs.map( function (i, el) {
			row = _fnGetRowElements( settings, el );
			return _fnAddData( settings, row.data, el, row.cells );
		} );
	}
	
	
	/**
	 * Take a TR element and convert it to an index in aoData
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} n the TR element to find
	 *  @returns {int} index if the node is found, null if not
	 *  @memberof DataTable#oApi
	 */
	function _fnNodeToDataIndex( oSettings, n )
	{
		return (n._DT_RowIndex!==undefined) ? n._DT_RowIndex : null;
	}
	
	
	/**
	 * Take a TD element and convert it into a column data index (not the visible index)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow The row number the TD/TH can be found in
	 *  @param {node} n The TD/TH element to find
	 *  @returns {int} index if the node is found, -1 if not
	 *  @memberof DataTable#oApi
	 */
	function _fnNodeToColumnIndex( oSettings, iRow, n )
	{
		return $.inArray( n, oSettings.aoData[ iRow ].anCells );
	}
	
	
	/**
	 * Get the data for a given cell from the internal cache, taking into account data mapping
	 *  @param {object} settings dataTables settings object
	 *  @param {int} rowIdx aoData row id
	 *  @param {int} colIdx Column index
	 *  @param {string} type data get type ('display', 'type' 'filter|search' 'sort|order')
	 *  @returns {*} Cell data
	 *  @memberof DataTable#oApi
	 */
	function _fnGetCellData( settings, rowIdx, colIdx, type )
	{
		if (type === 'search') {
			type = 'filter';
		}
		else if (type === 'order') {
			type = 'sort';
		}
	
		var draw           = settings.iDraw;
		var col            = settings.aoColumns[colIdx];
		var rowData        = settings.aoData[rowIdx]._aData;
		var defaultContent = col.sDefaultContent;
		var cellData       = col.fnGetData( rowData, type, {
			settings: settings,
			row:      rowIdx,
			col:      colIdx
		} );
	
		if ( cellData === undefined ) {
			if ( settings.iDrawError != draw && defaultContent === null ) {
				_fnLog( settings, 0, "Requested unknown parameter "+
					(typeof col.mData=='function' ? '{function}' : "'"+col.mData+"'")+
					" for row "+rowIdx+", column "+colIdx, 4 );
				settings.iDrawError = draw;
			}
			return defaultContent;
		}
	
		// When the data source is null and a specific data type is requested (i.e.
		// not the original data), we can use default column data
		if ( (cellData === rowData || cellData === null) && defaultContent !== null && type !== undefined ) {
			cellData = defaultContent;
		}
		else if ( typeof cellData === 'function' ) {
			// If the data source is a function, then we run it and use the return,
			// executing in the scope of the data object (for instances)
			return cellData.call( rowData );
		}
	
		if ( cellData === null && type === 'display' ) {
			return '';
		}
	
		if ( type === 'filter' ) {
			var fomatters = DataTable.ext.type.search;
	
			if ( fomatters[ col.sType ] ) {
				cellData = fomatters[ col.sType ]( cellData );
			}
		}
	
		return cellData;
	}
	
	
	/**
	 * Set the value for a specific cell, into the internal data cache
	 *  @param {object} settings dataTables settings object
	 *  @param {int} rowIdx aoData row id
	 *  @param {int} colIdx Column index
	 *  @param {*} val Value to set
	 *  @memberof DataTable#oApi
	 */
	function _fnSetCellData( settings, rowIdx, colIdx, val )
	{
		var col     = settings.aoColumns[colIdx];
		var rowData = settings.aoData[rowIdx]._aData;
	
		col.fnSetData( rowData, val, {
			settings: settings,
			row:      rowIdx,
			col:      colIdx
		}  );
	}
	
	
	// Private variable that is used to match action syntax in the data property object
	var __reArray = /\[.*?\]$/;
	var __reFn = /\(\)$/;
	
	/**
	 * Split string on periods, taking into account escaped periods
	 * @param  {string} str String to split
	 * @return {array} Split string
	 */
	function _fnSplitObjNotation( str )
	{
		return $.map( str.match(/(\\.|[^\.])+/g) || [''], function ( s ) {
			return s.replace(/\\\./g, '.');
		} );
	}
	
	
	/**
	 * Return a function that can be used to get data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data get function
	 *  @memberof DataTable#oApi
	 */
	var _fnGetObjectDataFn = DataTable.util.get;
	
	
	/**
	 * Return a function that can be used to set data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data set function
	 *  @memberof DataTable#oApi
	 */
	var _fnSetObjectDataFn = DataTable.util.set;
	
	
	/**
	 * Return an array with the full table data
	 *  @param {object} oSettings dataTables settings object
	 *  @returns array {array} aData Master data array
	 *  @memberof DataTable#oApi
	 */
	function _fnGetDataMaster ( settings )
	{
		return _pluck( settings.aoData, '_aData' );
	}
	
	
	/**
	 * Nuke the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnClearTable( settings )
	{
		settings.aoData.length = 0;
		settings.aiDisplayMaster.length = 0;
		settings.aiDisplay.length = 0;
		settings.aIds = {};
	}
	
	
	 /**
	 * Take an array of integers (index array) and remove a target integer (value - not
	 * the key!)
	 *  @param {array} a Index array to target
	 *  @param {int} iTarget value to find
	 *  @memberof DataTable#oApi
	 */
	function _fnDeleteIndex( a, iTarget, splice )
	{
		var iTargetIndex = -1;
	
		for ( var i=0, iLen=a.length ; i<iLen ; i++ )
		{
			if ( a[i] == iTarget )
			{
				iTargetIndex = i;
			}
			else if ( a[i] > iTarget )
			{
				a[i]--;
			}
		}
	
		if ( iTargetIndex != -1 && splice === undefined )
		{
			a.splice( iTargetIndex, 1 );
		}
	}
	
	
	/**
	 * Mark cached data as invalid such that a re-read of the data will occur when
	 * the cached data is next requested. Also update from the data source object.
	 *
	 * @param {object} settings DataTables settings object
	 * @param {int}    rowIdx   Row index to invalidate
	 * @param {string} [src]    Source to invalidate from: undefined, 'auto', 'dom'
	 *     or 'data'
	 * @param {int}    [colIdx] Column index to invalidate. If undefined the whole
	 *     row will be invalidated
	 * @memberof DataTable#oApi
	 *
	 * @todo For the modularisation of v1.11 this will need to become a callback, so
	 *   the sort and filter methods can subscribe to it. That will required
	 *   initialisation options for sorting, which is why it is not already baked in
	 */
	function _fnInvalidate( settings, rowIdx, src, colIdx )
	{
		var row = settings.aoData[ rowIdx ];
		var i, ien;
		var cellWrite = function ( cell, col ) {
			// This is very frustrating, but in IE if you just write directly
			// to innerHTML, and elements that are overwritten are GC'ed,
			// even if there is a reference to them elsewhere
			while ( cell.childNodes.length ) {
				cell.removeChild( cell.firstChild );
			}
	
			cell.innerHTML = _fnGetCellData( settings, rowIdx, col, 'display' );
		};
	
		// Are we reading last data from DOM or the data object?
		if ( src === 'dom' || ((! src || src === 'auto') && row.src === 'dom') ) {
			// Read the data from the DOM
			row._aData = _fnGetRowElements(
					settings, row, colIdx, colIdx === undefined ? undefined : row._aData
				)
				.data;
		}
		else {
			// Reading from data object, update the DOM
			var cells = row.anCells;
	
			if ( cells ) {
				if ( colIdx !== undefined ) {
					cellWrite( cells[colIdx], colIdx );
				}
				else {
					for ( i=0, ien=cells.length ; i<ien ; i++ ) {
						cellWrite( cells[i], i );
					}
				}
			}
		}
	
		// For both row and cell invalidation, the cached data for sorting and
		// filtering is nulled out
		row._aSortData = null;
		row._aFilterData = null;
	
		// Invalidate the type for a specific column (if given) or all columns since
		// the data might have changed
		var cols = settings.aoColumns;
		if ( colIdx !== undefined ) {
			cols[ colIdx ].sType = null;
		}
		else {
			for ( i=0, ien=cols.length ; i<ien ; i++ ) {
				cols[i].sType = null;
			}
	
			// Update DataTables special `DT_*` attributes for the row
			_fnRowAttributes( settings, row );
		}
	}
	
	
	/**
	 * Build a data source object from an HTML row, reading the contents of the
	 * cells that are in the row.
	 *
	 * @param {object} settings DataTables settings object
	 * @param {node|object} TR element from which to read data or existing row
	 *   object from which to re-read the data from the cells
	 * @param {int} [colIdx] Optional column index
	 * @param {array|object} [d] Data source object. If `colIdx` is given then this
	 *   parameter should also be given and will be used to write the data into.
	 *   Only the column in question will be written
	 * @returns {object} Object with two parameters: `data` the data read, in
	 *   document order, and `cells` and array of nodes (they can be useful to the
	 *   caller, so rather than needing a second traversal to get them, just return
	 *   them from here).
	 * @memberof DataTable#oApi
	 */
	function _fnGetRowElements( settings, row, colIdx, d )
	{
		var
			tds = [],
			td = row.firstChild,
			name, col, o, i=0, contents,
			columns = settings.aoColumns,
			objectRead = settings._rowReadObject;
	
		// Allow the data object to be passed in, or construct
		d = d !== undefined ?
			d :
			objectRead ?
				{} :
				[];
	
		var attr = function ( str, td  ) {
			if ( typeof str === 'string' ) {
				var idx = str.indexOf('@');
	
				if ( idx !== -1 ) {
					var attr = str.substring( idx+1 );
					var setter = _fnSetObjectDataFn( str );
					setter( d, td.getAttribute( attr ) );
				}
			}
		};
	
		// Read data from a cell and store into the data object
		var cellProcess = function ( cell ) {
			if ( colIdx === undefined || colIdx === i ) {
				col = columns[i];
				contents = (cell.innerHTML).trim();
	
				if ( col && col._bAttrSrc ) {
					var setter = _fnSetObjectDataFn( col.mData._ );
					setter( d, contents );
	
					attr( col.mData.sort, cell );
					attr( col.mData.type, cell );
					attr( col.mData.filter, cell );
				}
				else {
					// Depending on the `data` option for the columns the data can
					// be read to either an object or an array.
					if ( objectRead ) {
						if ( ! col._setter ) {
							// Cache the setter function
							col._setter = _fnSetObjectDataFn( col.mData );
						}
						col._setter( d, contents );
					}
					else {
						d[i] = contents;
					}
				}
			}
	
			i++;
		};
	
		if ( td ) {
			// `tr` element was passed in
			while ( td ) {
				name = td.nodeName.toUpperCase();
	
				if ( name == "TD" || name == "TH" ) {
					cellProcess( td );
					tds.push( td );
				}
	
				td = td.nextSibling;
			}
		}
		else {
			// Existing row object passed in
			tds = row.anCells;
	
			for ( var j=0, jen=tds.length ; j<jen ; j++ ) {
				cellProcess( tds[j] );
			}
		}
	
		// Read the ID from the DOM if present
		var rowNode = row.firstChild ? row : row.nTr;
	
		if ( rowNode ) {
			var id = rowNode.getAttribute( 'id' );
	
			if ( id ) {
				_fnSetObjectDataFn( settings.rowId )( d, id );
			}
		}
	
		return {
			data: d,
			cells: tds
		};
	}
	/**
	 * Create a new TR element (and it's TD children) for a row
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow Row to consider
	 *  @param {node} [nTrIn] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @memberof DataTable#oApi
	 */
	function _fnCreateTr ( oSettings, iRow, nTrIn, anTds )
	{
		var
			row = oSettings.aoData[iRow],
			rowData = row._aData,
			cells = [],
			nTr, nTd, oCol,
			i, iLen, create;
	
		if ( row.nTr === null )
		{
			nTr = nTrIn || document.createElement('tr');
	
			row.nTr = nTr;
			row.anCells = cells;
	
			/* Use a private property on the node to allow reserve mapping from the node
			 * to the aoData array for fast look up
			 */
			nTr._DT_RowIndex = iRow;
	
			/* Special parameters can be given by the data source to be used on the row */
			_fnRowAttributes( oSettings, row );
	
			/* Process each column */
			for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
			{
				oCol = oSettings.aoColumns[i];
				create = nTrIn ? false : true;
	
				nTd = create ? document.createElement( oCol.sCellType ) : anTds[i];
	
				if (! nTd) {
					_fnLog( oSettings, 0, 'Incorrect column count', 18 );
				}
	
				nTd._DT_CellIndex = {
					row: iRow,
					column: i
				};
				
				cells.push( nTd );
	
				// Need to create the HTML if new, or if a rendering function is defined
				if ( create || ((oCol.mRender || oCol.mData !== i) &&
					 (!$.isPlainObject(oCol.mData) || oCol.mData._ !== i+'.display')
				)) {
					nTd.innerHTML = _fnGetCellData( oSettings, iRow, i, 'display' );
				}
	
				/* Add user defined class */
				if ( oCol.sClass )
				{
					nTd.className += ' '+oCol.sClass;
				}
	
				// Visibility - add or remove as required
				if ( oCol.bVisible && ! nTrIn )
				{
					nTr.appendChild( nTd );
				}
				else if ( ! oCol.bVisible && nTrIn )
				{
					nTd.parentNode.removeChild( nTd );
				}
	
				if ( oCol.fnCreatedCell )
				{
					oCol.fnCreatedCell.call( oSettings.oInstance,
						nTd, _fnGetCellData( oSettings, iRow, i ), rowData, iRow, i
					);
				}
			}
	
			_fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [nTr, rowData, iRow, cells] );
		}
	}
	
	
	/**
	 * Add attributes to a row based on the special `DT_*` parameters in a data
	 * source object.
	 *  @param {object} settings DataTables settings object
	 *  @param {object} DataTables row object for the row to be modified
	 *  @memberof DataTable#oApi
	 */
	function _fnRowAttributes( settings, row )
	{
		var tr = row.nTr;
		var data = row._aData;
	
		if ( tr ) {
			var id = settings.rowIdFn( data );
	
			if ( id ) {
				tr.id = id;
			}
	
			if ( data.DT_RowClass ) {
				// Remove any classes added by DT_RowClass before
				var a = data.DT_RowClass.split(' ');
				row.__rowc = row.__rowc ?
					_unique( row.__rowc.concat( a ) ) :
					a;
	
				$(tr)
					.removeClass( row.__rowc.join(' ') )
					.addClass( data.DT_RowClass );
			}
	
			if ( data.DT_RowAttr ) {
				$(tr).attr( data.DT_RowAttr );
			}
	
			if ( data.DT_RowData ) {
				$(tr).data( data.DT_RowData );
			}
		}
	}
	
	
	/**
	 * Create the HTML header for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnBuildHead( oSettings )
	{
		var i, ien, cell, row, column;
		var thead = oSettings.nTHead;
		var tfoot = oSettings.nTFoot;
		var createHeader = $('th, td', thead).length === 0;
		var classes = oSettings.oClasses;
		var columns = oSettings.aoColumns;
	
		if ( createHeader ) {
			row = $('<tr/>').appendTo( thead );
		}
	
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			column = columns[i];
			cell = $( column.nTh ).addClass( column.sClass );
	
			if ( createHeader ) {
				cell.appendTo( row );
			}
	
			// 1.11 move into sorting
			if ( oSettings.oFeatures.bSort ) {
				cell.addClass( column.sSortingClass );
	
				if ( column.bSortable !== false ) {
					cell
						.attr( 'tabindex', oSettings.iTabIndex )
						.attr( 'aria-controls', oSettings.sTableId );
	
					_fnSortAttachListener( oSettings, column.nTh, i );
				}
			}
	
			if ( column.sTitle != cell[0].innerHTML ) {
				cell.html( column.sTitle );
			}
	
			_fnRenderer( oSettings, 'header' )(
				oSettings, cell, column, classes
			);
		}
	
		if ( createHeader ) {
			_fnDetectHeader( oSettings.aoHeader, thead );
		}
	
		/* Deal with the footer - add classes if required */
		$(thead).children('tr').children('th, td').addClass( classes.sHeaderTH );
		$(tfoot).children('tr').children('th, td').addClass( classes.sFooterTH );
	
		// Cache the footer cells. Note that we only take the cells from the first
		// row in the footer. If there is more than one row the user wants to
		// interact with, they need to use the table().foot() method. Note also this
		// allows cells to be used for multiple columns using colspan
		if ( tfoot !== null ) {
			var cells = oSettings.aoFooter[0];
	
			for ( i=0, ien=cells.length ; i<ien ; i++ ) {
				column = columns[i];
	
				if (column) {
					column.nTf = cells[i].cell;
		
					if ( column.sClass ) {
						$(column.nTf).addClass( column.sClass );
					}
				}
				else {
					_fnLog( oSettings, 0, 'Incorrect column count', 18 );
				}
			}
		}
	}
	
	
	/**
	 * Draw the header (or footer) element based on the column visibility states. The
	 * methodology here is to use the layout array from _fnDetectHeader, modified for
	 * the instantaneous column visibility, to construct the new layout. The grid is
	 * traversed over cell at a time in a rows x columns grid fashion, although each
	 * cell insert can cover multiple elements in the grid - which is tracks using the
	 * aApplied array. Cell inserts in the grid will only occur where there isn't
	 * already a cell in that position.
	 *  @param {object} oSettings dataTables settings object
	 *  @param array {objects} aoSource Layout array from _fnDetectHeader
	 *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc,
	 *  @memberof DataTable#oApi
	 */
	function _fnDrawHead( oSettings, aoSource, bIncludeHidden )
	{
		var i, iLen, j, jLen, k, kLen, n, nLocalTr;
		var aoLocal = [];
		var aApplied = [];
		var iColumns = oSettings.aoColumns.length;
		var iRowspan, iColspan;
	
		if ( ! aoSource )
		{
			return;
		}
	
		if (  bIncludeHidden === undefined )
		{
			bIncludeHidden = false;
		}
	
		/* Make a copy of the master layout array, but without the visible columns in it */
		for ( i=0, iLen=aoSource.length ; i<iLen ; i++ )
		{
			aoLocal[i] = aoSource[i].slice();
			aoLocal[i].nTr = aoSource[i].nTr;
	
			/* Remove any columns which are currently hidden */
			for ( j=iColumns-1 ; j>=0 ; j-- )
			{
				if ( !oSettings.aoColumns[j].bVisible && !bIncludeHidden )
				{
					aoLocal[i].splice( j, 1 );
				}
			}
	
			/* Prep the applied array - it needs an element for each row */
			aApplied.push( [] );
		}
	
		for ( i=0, iLen=aoLocal.length ; i<iLen ; i++ )
		{
			nLocalTr = aoLocal[i].nTr;
	
			/* All cells are going to be replaced, so empty out the row */
			if ( nLocalTr )
			{
				while( (n = nLocalTr.firstChild) )
				{
					nLocalTr.removeChild( n );
				}
			}
	
			for ( j=0, jLen=aoLocal[i].length ; j<jLen ; j++ )
			{
				iRowspan = 1;
				iColspan = 1;
	
				/* Check to see if there is already a cell (row/colspan) covering our target
				 * insert point. If there is, then there is nothing to do.
				 */
				if ( aApplied[i][j] === undefined )
				{
					nLocalTr.appendChild( aoLocal[i][j].cell );
					aApplied[i][j] = 1;
	
					/* Expand the cell to cover as many rows as needed */
					while ( aoLocal[i+iRowspan] !== undefined &&
					        aoLocal[i][j].cell == aoLocal[i+iRowspan][j].cell )
					{
						aApplied[i+iRowspan][j] = 1;
						iRowspan++;
					}
	
					/* Expand the cell to cover as many columns as needed */
					while ( aoLocal[i][j+iColspan] !== undefined &&
					        aoLocal[i][j].cell == aoLocal[i][j+iColspan].cell )
					{
						/* Must update the applied array over the rows for the columns */
						for ( k=0 ; k<iRowspan ; k++ )
						{
							aApplied[i+k][j+iColspan] = 1;
						}
						iColspan++;
					}
	
					/* Do the actual expansion in the DOM */
					$(aoLocal[i][j].cell)
						.attr('rowspan', iRowspan)
						.attr('colspan', iColspan);
				}
			}
		}
	}
	
	
	/**
	 * Insert the required TR nodes into the table for display
	 *  @param {object} oSettings dataTables settings object
	 *  @param ajaxComplete true after ajax call to complete rendering
	 *  @memberof DataTable#oApi
	 */
	function _fnDraw( oSettings, ajaxComplete )
	{
		// Allow for state saving and a custom start position
		_fnStart( oSettings );
	
		/* Provide a pre-callback function which can be used to cancel the draw is false is returned */
		var aPreDraw = _fnCallbackFire( oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings] );
		if ( $.inArray( false, aPreDraw ) !== -1 )
		{
			_fnProcessingDisplay( oSettings, false );
			return;
		}
	
		var anRows = [];
		var iRowCount = 0;
		var asStripeClasses = oSettings.asStripeClasses;
		var iStripes = asStripeClasses.length;
		var oLang = oSettings.oLanguage;
		var bServerSide = _fnDataSource( oSettings ) == 'ssp';
		var aiDisplay = oSettings.aiDisplay;
		var iDisplayStart = oSettings._iDisplayStart;
		var iDisplayEnd = oSettings.fnDisplayEnd();
	
		oSettings.bDrawing = true;
	
		/* Server-side processing draw intercept */
		if ( oSettings.bDeferLoading )
		{
			oSettings.bDeferLoading = false;
			oSettings.iDraw++;
			_fnProcessingDisplay( oSettings, false );
		}
		else if ( !bServerSide )
		{
			oSettings.iDraw++;
		}
		else if ( !oSettings.bDestroying && !ajaxComplete)
		{
			_fnAjaxUpdate( oSettings );
			return;
		}
	
		if ( aiDisplay.length !== 0 )
		{
			var iStart = bServerSide ? 0 : iDisplayStart;
			var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
	
			for ( var j=iStart ; j<iEnd ; j++ )
			{
				var iDataIndex = aiDisplay[j];
				var aoData = oSettings.aoData[ iDataIndex ];
				if ( aoData.nTr === null )
				{
					_fnCreateTr( oSettings, iDataIndex );
				}
	
				var nRow = aoData.nTr;
	
				/* Remove the old striping classes and then add the new one */
				if ( iStripes !== 0 )
				{
					var sStripe = asStripeClasses[ iRowCount % iStripes ];
					if ( aoData._sRowStripe != sStripe )
					{
						$(nRow).removeClass( aoData._sRowStripe ).addClass( sStripe );
						aoData._sRowStripe = sStripe;
					}
				}
	
				// Row callback functions - might want to manipulate the row
				// iRowCount and j are not currently documented. Are they at all
				// useful?
				_fnCallbackFire( oSettings, 'aoRowCallback', null,
					[nRow, aoData._aData, iRowCount, j, iDataIndex] );
	
				anRows.push( nRow );
				iRowCount++;
			}
		}
		else
		{
			/* Table is empty - create a row with an empty message in it */
			var sZero = oLang.sZeroRecords;
			if ( oSettings.iDraw == 1 &&  _fnDataSource( oSettings ) == 'ajax' )
			{
				sZero = oLang.sLoadingRecords;
			}
			else if ( oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0 )
			{
				sZero = oLang.sEmptyTable;
			}
	
			anRows[ 0 ] = $( '<tr/>', { 'class': iStripes ? asStripeClasses[0] : '' } )
				.append( $('<td />', {
					'valign':  'top',
					'colSpan': _fnVisbleColumns( oSettings ),
					'class':   oSettings.oClasses.sRowEmpty
				} ).html( sZero ) )[0];
		}
	
		/* Header and footer callbacks */
		_fnCallbackFire( oSettings, 'aoHeaderCallback', 'header', [ $(oSettings.nTHead).children('tr')[0],
			_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );
	
		_fnCallbackFire( oSettings, 'aoFooterCallback', 'footer', [ $(oSettings.nTFoot).children('tr')[0],
			_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );
	
		var body = $(oSettings.nTBody);
	
		body.children().detach();
		body.append( $(anRows) );
	
		/* Call all required callback functions for the end of a draw */
		_fnCallbackFire( oSettings, 'aoDrawCallback', 'draw', [oSettings] );
	
		/* Draw is complete, sorting and filtering must be as well */
		oSettings.bSorted = false;
		oSettings.bFiltered = false;
		oSettings.bDrawing = false;
	}
	
	
	/**
	 * Redraw the table - taking account of the various features which are enabled
	 *  @param {object} oSettings dataTables settings object
	 *  @param {boolean} [holdPosition] Keep the current paging position. By default
	 *    the paging is reset to the first page
	 *  @memberof DataTable#oApi
	 */
	function _fnReDraw( settings, holdPosition )
	{
		var
			features = settings.oFeatures,
			sort     = features.bSort,
			filter   = features.bFilter;
	
		if ( sort ) {
			_fnSort( settings );
		}
	
		if ( filter ) {
			_fnFilterComplete( settings, settings.oPreviousSearch );
		}
		else {
			// No filtering, so we want to just use the display master
			settings.aiDisplay = settings.aiDisplayMaster.slice();
		}
	
		if ( holdPosition !== true ) {
			settings._iDisplayStart = 0;
		}
	
		// Let any modules know about the draw hold position state (used by
		// scrolling internally)
		settings._drawHold = holdPosition;
	
		_fnDraw( settings );
	
		settings._drawHold = false;
	}
	
	
	/**
	 * Add the options to the page HTML for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnAddOptionsHtml ( oSettings )
	{
		var classes = oSettings.oClasses;
		var table = $(oSettings.nTable);
		var holding = $('<div/>').insertBefore( table ); // Holding element for speed
		var features = oSettings.oFeatures;
	
		// All DataTables are wrapped in a div
		var insert = $('<div/>', {
			id:      oSettings.sTableId+'_wrapper',
			'class': classes.sWrapper + (oSettings.nTFoot ? '' : ' '+classes.sNoFooter)
		} );
	
		oSettings.nHolding = holding[0];
		oSettings.nTableWrapper = insert[0];
		oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;
	
		/* Loop over the user set positioning and place the elements as needed */
		var aDom = oSettings.sDom.split('');
		var featureNode, cOption, nNewNode, cNext, sAttr, j;
		for ( var i=0 ; i<aDom.length ; i++ )
		{
			featureNode = null;
			cOption = aDom[i];
	
			if ( cOption == '<' )
			{
				/* New container div */
				nNewNode = $('<div/>')[0];
	
				/* Check to see if we should append an id and/or a class name to the container */
				cNext = aDom[i+1];
				if ( cNext == "'" || cNext == '"' )
				{
					sAttr = "";
					j = 2;
					while ( aDom[i+j] != cNext )
					{
						sAttr += aDom[i+j];
						j++;
					}
	
					/* Replace jQuery UI constants @todo depreciated */
					if ( sAttr == "H" )
					{
						sAttr = classes.sJUIHeader;
					}
					else if ( sAttr == "F" )
					{
						sAttr = classes.sJUIFooter;
					}
	
					/* The attribute can be in the format of "#id.class", "#id" or "class" This logic
					 * breaks the string into parts and applies them as needed
					 */
					if ( sAttr.indexOf('.') != -1 )
					{
						var aSplit = sAttr.split('.');
						nNewNode.id = aSplit[0].substr(1, aSplit[0].length-1);
						nNewNode.className = aSplit[1];
					}
					else if ( sAttr.charAt(0) == "#" )
					{
						nNewNode.id = sAttr.substr(1, sAttr.length-1);
					}
					else
					{
						nNewNode.className = sAttr;
					}
	
					i += j; /* Move along the position array */
				}
	
				insert.append( nNewNode );
				insert = $(nNewNode);
			}
			else if ( cOption == '>' )
			{
				/* End container div */
				insert = insert.parent();
			}
			// @todo Move options into their own plugins?
			else if ( cOption == 'l' && features.bPaginate && features.bLengthChange )
			{
				/* Length */
				featureNode = _fnFeatureHtmlLength( oSettings );
			}
			else if ( cOption == 'f' && features.bFilter )
			{
				/* Filter */
				featureNode = _fnFeatureHtmlFilter( oSettings );
			}
			else if ( cOption == 'r' && features.bProcessing )
			{
				/* pRocessing */
				featureNode = _fnFeatureHtmlProcessing( oSettings );
			}
			else if ( cOption == 't' )
			{
				/* Table */
				featureNode = _fnFeatureHtmlTable( oSettings );
			}
			else if ( cOption ==  'i' && features.bInfo )
			{
				/* Info */
				featureNode = _fnFeatureHtmlInfo( oSettings );
			}
			else if ( cOption == 'p' && features.bPaginate )
			{
				/* Pagination */
				featureNode = _fnFeatureHtmlPaginate( oSettings );
			}
			else if ( DataTable.ext.feature.length !== 0 )
			{
				/* Plug-in features */
				var aoFeatures = DataTable.ext.feature;
				for ( var k=0, kLen=aoFeatures.length ; k<kLen ; k++ )
				{
					if ( cOption == aoFeatures[k].cFeature )
					{
						featureNode = aoFeatures[k].fnInit( oSettings );
						break;
					}
				}
			}
	
			/* Add to the 2D features array */
			if ( featureNode )
			{
				var aanFeatures = oSettings.aanFeatures;
	
				if ( ! aanFeatures[cOption] )
				{
					aanFeatures[cOption] = [];
				}
	
				aanFeatures[cOption].push( featureNode );
				insert.append( featureNode );
			}
		}
	
		/* Built our DOM structure - replace the holding div with what we want */
		holding.replaceWith( insert );
		oSettings.nHolding = null;
	}
	
	
	/**
	 * Use the DOM source to create up an array of header cells. The idea here is to
	 * create a layout grid (array) of rows x columns, which contains a reference
	 * to the cell that that point in the grid (regardless of col/rowspan), such that
	 * any column / row could be removed and the new grid constructed
	 *  @param array {object} aLayout Array to store the calculated layout in
	 *  @param {node} nThead The header/footer element for the table
	 *  @memberof DataTable#oApi
	 */
	function _fnDetectHeader ( aLayout, nThead )
	{
		var nTrs = $(nThead).children('tr');
		var nTr, nCell;
		var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
		var bUnique;
		var fnShiftCol = function ( a, i, j ) {
			var k = a[i];
	                while ( k[j] ) {
				j++;
			}
			return j;
		};
	
		aLayout.splice( 0, aLayout.length );
	
		/* We know how many rows there are in the layout - so prep it */
		for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
		{
			aLayout.push( [] );
		}
	
		/* Calculate a layout array */
		for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
		{
			nTr = nTrs[i];
			iColumn = 0;
	
			/* For every cell in the row... */
			nCell = nTr.firstChild;
			while ( nCell ) {
				if ( nCell.nodeName.toUpperCase() == "TD" ||
				     nCell.nodeName.toUpperCase() == "TH" )
				{
					/* Get the col and rowspan attributes from the DOM and sanitise them */
					iColspan = nCell.getAttribute('colspan') * 1;
					iRowspan = nCell.getAttribute('rowspan') * 1;
					iColspan = (!iColspan || iColspan===0 || iColspan===1) ? 1 : iColspan;
					iRowspan = (!iRowspan || iRowspan===0 || iRowspan===1) ? 1 : iRowspan;
	
					/* There might be colspan cells already in this row, so shift our target
					 * accordingly
					 */
					iColShifted = fnShiftCol( aLayout, i, iColumn );
	
					/* Cache calculation for unique columns */
					bUnique = iColspan === 1 ? true : false;
	
					/* If there is col / rowspan, copy the information into the layout grid */
					for ( l=0 ; l<iColspan ; l++ )
					{
						for ( k=0 ; k<iRowspan ; k++ )
						{
							aLayout[i+k][iColShifted+l] = {
								"cell": nCell,
								"unique": bUnique
							};
							aLayout[i+k].nTr = nTr;
						}
					}
				}
				nCell = nCell.nextSibling;
			}
		}
	}
	
	
	/**
	 * Get an array of unique th elements, one for each column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nHeader automatically detect the layout from this node - optional
	 *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
	 *  @returns array {node} aReturn list of unique th's
	 *  @memberof DataTable#oApi
	 */
	function _fnGetUniqueThs ( oSettings, nHeader, aLayout )
	{
		var aReturn = [];
		if ( !aLayout )
		{
			aLayout = oSettings.aoHeader;
			if ( nHeader )
			{
				aLayout = [];
				_fnDetectHeader( aLayout, nHeader );
			}
		}
	
		for ( var i=0, iLen=aLayout.length ; i<iLen ; i++ )
		{
			for ( var j=0, jLen=aLayout[i].length ; j<jLen ; j++ )
			{
				if ( aLayout[i][j].unique &&
					 (!aReturn[j] || !oSettings.bSortCellsTop) )
				{
					aReturn[j] = aLayout[i][j].cell;
				}
			}
		}
	
		return aReturn;
	}
	
	/**
	 * Set the start position for draw
	 *  @param {object} oSettings dataTables settings object
	 */
	function _fnStart( oSettings )
	{
		var bServerSide = _fnDataSource( oSettings ) == 'ssp';
		var iInitDisplayStart = oSettings.iInitDisplayStart;
	
		// Check and see if we have an initial draw position from state saving
		if ( iInitDisplayStart !== undefined && iInitDisplayStart !== -1 )
		{
			oSettings._iDisplayStart = bServerSide ?
				iInitDisplayStart :
				iInitDisplayStart >= oSettings.fnRecordsDisplay() ?
					0 :
					iInitDisplayStart;
	
			oSettings.iInitDisplayStart = -1;
		}
	}
	
	/**
	 * Create an Ajax call based on the table's settings, taking into account that
	 * parameters can have multiple forms, and backwards compatibility.
	 *
	 * @param {object} oSettings dataTables settings object
	 * @param {array} data Data to send to the server, required by
	 *     DataTables - may be augmented by developer callbacks
	 * @param {function} fn Callback function to run when data is obtained
	 */
	function _fnBuildAjax( oSettings, data, fn )
	{
		// Compatibility with 1.9-, allow fnServerData and event to manipulate
		_fnCallbackFire( oSettings, 'aoServerParams', 'serverParams', [data] );
	
		// Convert to object based for 1.10+ if using the old array scheme which can
		// come from server-side processing or serverParams
		if ( data && Array.isArray(data) ) {
			var tmp = {};
			var rbracket = /(.*?)\[\]$/;
	
			$.each( data, function (key, val) {
				var match = val.name.match(rbracket);
	
				if ( match ) {
					// Support for arrays
					var name = match[0];
	
					if ( ! tmp[ name ] ) {
						tmp[ name ] = [];
					}
					tmp[ name ].push( val.value );
				}
				else {
					tmp[val.name] = val.value;
				}
			} );
			data = tmp;
		}
	
		var ajaxData;
		var ajax = oSettings.ajax;
		var instance = oSettings.oInstance;
		var callback = function ( json ) {
			var status = oSettings.jqXHR
				? oSettings.jqXHR.status
				: null;
	
			if ( json === null || (typeof status === 'number' && status == 204 ) ) {
				json = {};
				_fnAjaxDataSrc( oSettings, json, [] );
			}
	
			var error = json.error || json.sError;
			if ( error ) {
				_fnLog( oSettings, 0, error );
			}
	
			oSettings.json = json;
	
			_fnCallbackFire( oSettings, null, 'xhr', [oSettings, json, oSettings.jqXHR] );
			fn( json );
		};
	
		if ( $.isPlainObject( ajax ) && ajax.data )
		{
			ajaxData = ajax.data;
	
			var newData = typeof ajaxData === 'function' ?
				ajaxData( data, oSettings ) :  // fn can manipulate data or return
				ajaxData;                      // an object object or array to merge
	
			// If the function returned something, use that alone
			data = typeof ajaxData === 'function' && newData ?
				newData :
				$.extend( true, data, newData );
	
			// Remove the data property as we've resolved it already and don't want
			// jQuery to do it again (it is restored at the end of the function)
			delete ajax.data;
		}
	
		var baseAjax = {
			"data": data,
			"success": callback,
			"dataType": "json",
			"cache": false,
			"type": oSettings.sServerMethod,
			"error": function (xhr, error, thrown) {
				var ret = _fnCallbackFire( oSettings, null, 'xhr', [oSettings, null, oSettings.jqXHR] );
	
				if ( $.inArray( true, ret ) === -1 ) {
					if ( error == "parsererror" ) {
						_fnLog( oSettings, 0, 'Invalid JSON response', 1 );
					}
					else if ( xhr.readyState === 4 ) {
						_fnLog( oSettings, 0, 'Ajax error', 7 );
					}
				}
	
				_fnProcessingDisplay( oSettings, false );
			}
		};
	
		// Store the data submitted for the API
		oSettings.oAjaxData = data;
	
		// Allow plug-ins and external processes to modify the data
		_fnCallbackFire( oSettings, null, 'preXhr', [oSettings, data] );
	
		if ( oSettings.fnServerData )
		{
			// DataTables 1.9- compatibility
			oSettings.fnServerData.call( instance,
				oSettings.sAjaxSource,
				$.map( data, function (val, key) { // Need to convert back to 1.9 trad format
					return { name: key, value: val };
				} ),
				callback,
				oSettings
			);
		}
		else if ( oSettings.sAjaxSource || typeof ajax === 'string' )
		{
			// DataTables 1.9- compatibility
			oSettings.jqXHR = $.ajax( $.extend( baseAjax, {
				url: ajax || oSettings.sAjaxSource
			} ) );
		}
		else if ( typeof ajax === 'function' )
		{
			// Is a function - let the caller define what needs to be done
			oSettings.jqXHR = ajax.call( instance, data, callback, oSettings );
		}
		else
		{
			// Object to extend the base settings
			oSettings.jqXHR = $.ajax( $.extend( baseAjax, ajax ) );
	
			// Restore for next time around
			ajax.data = ajaxData;
		}
	}
	
	
	/**
	 * Update the table using an Ajax call
	 *  @param {object} settings dataTables settings object
	 *  @returns {boolean} Block the table drawing or not
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxUpdate( settings )
	{
		settings.iDraw++;
		_fnProcessingDisplay( settings, true );
	
		_fnBuildAjax(
			settings,
			_fnAjaxParameters( settings ),
			function(json) {
				_fnAjaxUpdateDraw( settings, json );
			}
		);
	}
	
	
	/**
	 * Build up the parameters in an object needed for a server-side processing
	 * request. Note that this is basically done twice, is different ways - a modern
	 * method which is used by default in DataTables 1.10 which uses objects and
	 * arrays, or the 1.9- method with is name / value pairs. 1.9 method is used if
	 * the sAjaxSource option is used in the initialisation, or the legacyAjax
	 * option is set.
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {bool} block the table drawing or not
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxParameters( settings )
	{
		var
			columns = settings.aoColumns,
			columnCount = columns.length,
			features = settings.oFeatures,
			preSearch = settings.oPreviousSearch,
			preColSearch = settings.aoPreSearchCols,
			i, data = [], dataProp, column, columnSearch,
			sort = _fnSortFlatten( settings ),
			displayStart = settings._iDisplayStart,
			displayLength = features.bPaginate !== false ?
				settings._iDisplayLength :
				-1;
	
		var param = function ( name, value ) {
			data.push( { 'name': name, 'value': value } );
		};
	
		// DataTables 1.9- compatible method
		param( 'sEcho',          settings.iDraw );
		param( 'iColumns',       columnCount );
		param( 'sColumns',       _pluck( columns, 'sName' ).join(',') );
		param( 'iDisplayStart',  displayStart );
		param( 'iDisplayLength', displayLength );
	
		// DataTables 1.10+ method
		var d = {
			draw:    settings.iDraw,
			columns: [],
			order:   [],
			start:   displayStart,
			length:  displayLength,
			search:  {
				value: preSearch.sSearch,
				regex: preSearch.bRegex
			}
		};
	
		for ( i=0 ; i<columnCount ; i++ ) {
			column = columns[i];
			columnSearch = preColSearch[i];
			dataProp = typeof column.mData=="function" ? 'function' : column.mData ;
	
			d.columns.push( {
				data:       dataProp,
				name:       column.sName,
				searchable: column.bSearchable,
				orderable:  column.bSortable,
				search:     {
					value: columnSearch.sSearch,
					regex: columnSearch.bRegex
				}
			} );
	
			param( "mDataProp_"+i, dataProp );
	
			if ( features.bFilter ) {
				param( 'sSearch_'+i,     columnSearch.sSearch );
				param( 'bRegex_'+i,      columnSearch.bRegex );
				param( 'bSearchable_'+i, column.bSearchable );
			}
	
			if ( features.bSort ) {
				param( 'bSortable_'+i, column.bSortable );
			}
		}
	
		if ( features.bFilter ) {
			param( 'sSearch', preSearch.sSearch );
			param( 'bRegex', preSearch.bRegex );
		}
	
		if ( features.bSort ) {
			$.each( sort, function ( i, val ) {
				d.order.push( { column: val.col, dir: val.dir } );
	
				param( 'iSortCol_'+i, val.col );
				param( 'sSortDir_'+i, val.dir );
			} );
	
			param( 'iSortingCols', sort.length );
		}
	
		// If the legacy.ajax parameter is null, then we automatically decide which
		// form to use, based on sAjaxSource
		var legacy = DataTable.ext.legacy.ajax;
		if ( legacy === null ) {
			return settings.sAjaxSource ? data : d;
		}
	
		// Otherwise, if legacy has been specified then we use that to decide on the
		// form
		return legacy ? data : d;
	}
	
	
	/**
	 * Data the data from the server (nuking the old) and redraw the table
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} json json data return from the server.
	 *  @param {string} json.sEcho Tracking flag for DataTables to match requests
	 *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
	 *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
	 *  @param {array} json.aaData The data to display on this page
	 *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxUpdateDraw ( settings, json )
	{
		// v1.10 uses camelCase variables, while 1.9 uses Hungarian notation.
		// Support both
		var compat = function ( old, modern ) {
			return json[old] !== undefined ? json[old] : json[modern];
		};
	
		var data = _fnAjaxDataSrc( settings, json );
		var draw            = compat( 'sEcho',                'draw' );
		var recordsTotal    = compat( 'iTotalRecords',        'recordsTotal' );
		var recordsFiltered = compat( 'iTotalDisplayRecords', 'recordsFiltered' );
	
		if ( draw !== undefined ) {
			// Protect against out of sequence returns
			if ( draw*1 < settings.iDraw ) {
				return;
			}
			settings.iDraw = draw * 1;
		}
	
		// No data in returned object, so rather than an array, we show an empty table
		if ( ! data ) {
			data = [];
		}
	
		_fnClearTable( settings );
		settings._iRecordsTotal   = parseInt(recordsTotal, 10);
		settings._iRecordsDisplay = parseInt(recordsFiltered, 10);
	
		for ( var i=0, ien=data.length ; i<ien ; i++ ) {
			_fnAddData( settings, data[i] );
		}
		settings.aiDisplay = settings.aiDisplayMaster.slice();
	
		_fnDraw( settings, true );
	
		if ( ! settings._bInitComplete ) {
			_fnInitComplete( settings, json );
		}
	
		_fnProcessingDisplay( settings, false );
	}
	
	
	/**
	 * Get the data from the JSON data source to use for drawing a table. Using
	 * `_fnGetObjectDataFn` allows the data to be sourced from a property of the
	 * source object, or from a processing function.
	 *  @param {object} oSettings dataTables settings object
	 *  @param  {object} json Data source object / array from the server
	 *  @return {array} Array of data to use
	 */
	 function _fnAjaxDataSrc ( oSettings, json, write )
	 {
		var dataSrc = $.isPlainObject( oSettings.ajax ) && oSettings.ajax.dataSrc !== undefined ?
			oSettings.ajax.dataSrc :
			oSettings.sAjaxDataProp; // Compatibility with 1.9-.
	
		if ( ! write ) {
			if ( dataSrc === 'data' ) {
				// If the default, then we still want to support the old style, and safely ignore
				// it if possible
				return json.aaData || json[dataSrc];
			}
	
			return dataSrc !== "" ?
				_fnGetObjectDataFn( dataSrc )( json ) :
				json;
		}
	
		// set
		_fnSetObjectDataFn( dataSrc )( json, write );
	}
	
	/**
	 * Generate the node required for filtering text
	 *  @returns {node} Filter control element
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlFilter ( settings )
	{
		var classes = settings.oClasses;
		var tableId = settings.sTableId;
		var language = settings.oLanguage;
		var previousSearch = settings.oPreviousSearch;
		var features = settings.aanFeatures;
		var input = '<input type="search" class="'+classes.sFilterInput+'"/>';
	
		var str = language.sSearch;
		str = str.match(/_INPUT_/) ?
			str.replace('_INPUT_', input) :
			str+input;
	
		var filter = $('<div/>', {
				'id': ! features.f ? tableId+'_filter' : null,
				'class': classes.sFilter
			} )
			.append( $('<label/>' ).append( str ) );
	
		var searchFn = function(event) {
			/* Update all other filter input elements for the new display */
			var n = features.f;
			var val = !this.value ? "" : this.value; // mental IE8 fix :-(
			if(previousSearch.return && event.key !== "Enter") {
				return;
			}
			/* Now do the filter */
			if ( val != previousSearch.sSearch ) {
				_fnFilterComplete( settings, {
					"sSearch": val,
					"bRegex": previousSearch.bRegex,
					"bSmart": previousSearch.bSmart ,
					"bCaseInsensitive": previousSearch.bCaseInsensitive,
					"return": previousSearch.return
				} );
	
				// Need to redraw, without resorting
				settings._iDisplayStart = 0;
				_fnDraw( settings );
			}
		};
	
		var searchDelay = settings.searchDelay !== null ?
			settings.searchDelay :
			_fnDataSource( settings ) === 'ssp' ?
				400 :
				0;
	
		var jqFilter = $('input', filter)
			.val( previousSearch.sSearch )
			.attr( 'placeholder', language.sSearchPlaceholder )
			.on(
				'keyup.DT search.DT input.DT paste.DT cut.DT',
				searchDelay ?
					_fnThrottle( searchFn, searchDelay ) :
					searchFn
			)
			.on( 'mouseup', function(e) {
				// Edge fix! Edge 17 does not trigger anything other than mouse events when clicking
				// on the clear icon (Edge bug 17584515). This is safe in other browsers as `searchFn`
				// checks the value to see if it has changed. In other browsers it won't have.
				setTimeout( function () {
					searchFn.call(jqFilter[0], e);
				}, 10);
			} )
			.on( 'keypress.DT', function(e) {
				/* Prevent form submission */
				if ( e.keyCode == 13 ) {
					return false;
				}
			} )
			.attr('aria-controls', tableId);
	
		// Update the input elements whenever the table is filtered
		$(settings.nTable).on( 'search.dt.DT', function ( ev, s ) {
			if ( settings === s ) {
				// IE9 throws an 'unknown error' if document.activeElement is used
				// inside an iframe or frame...
				try {
					if ( jqFilter[0] !== document.activeElement ) {
						jqFilter.val( previousSearch.sSearch );
					}
				}
				catch ( e ) {}
			}
		} );
	
		return filter[0];
	}
	
	
	/**
	 * Filter the table using both the global filter and column based filtering
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oSearch search information
	 *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterComplete ( oSettings, oInput, iForce )
	{
		var oPrevSearch = oSettings.oPreviousSearch;
		var aoPrevSearch = oSettings.aoPreSearchCols;
		var fnSaveFilter = function ( oFilter ) {
			/* Save the filtering values */
			oPrevSearch.sSearch = oFilter.sSearch;
			oPrevSearch.bRegex = oFilter.bRegex;
			oPrevSearch.bSmart = oFilter.bSmart;
			oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
			oPrevSearch.return = oFilter.return;
		};
		var fnRegex = function ( o ) {
			// Backwards compatibility with the bEscapeRegex option
			return o.bEscapeRegex !== undefined ? !o.bEscapeRegex : o.bRegex;
		};
	
		// Resolve any column types that are unknown due to addition or invalidation
		// @todo As per sort - can this be moved into an event handler?
		_fnColumnTypes( oSettings );
	
		/* In server-side processing all filtering is done by the server, so no point hanging around here */
		if ( _fnDataSource( oSettings ) != 'ssp' )
		{
			/* Global filter */
			_fnFilter( oSettings, oInput.sSearch, iForce, fnRegex(oInput), oInput.bSmart, oInput.bCaseInsensitive, oInput.return );
			fnSaveFilter( oInput );
	
			/* Now do the individual column filter */
			for ( var i=0 ; i<aoPrevSearch.length ; i++ )
			{
				_fnFilterColumn( oSettings, aoPrevSearch[i].sSearch, i, fnRegex(aoPrevSearch[i]),
					aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive );
			}
	
			/* Custom filtering */
			_fnFilterCustom( oSettings );
		}
		else
		{
			fnSaveFilter( oInput );
		}
	
		/* Tell the draw function we have been filtering */
		oSettings.bFiltered = true;
		_fnCallbackFire( oSettings, null, 'search', [oSettings] );
	}
	
	
	/**
	 * Apply custom filtering functions
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterCustom( settings )
	{
		var filters = DataTable.ext.search;
		var displayRows = settings.aiDisplay;
		var row, rowIdx;
	
		for ( var i=0, ien=filters.length ; i<ien ; i++ ) {
			var rows = [];
	
			// Loop over each row and see if it should be included
			for ( var j=0, jen=displayRows.length ; j<jen ; j++ ) {
				rowIdx = displayRows[ j ];
				row = settings.aoData[ rowIdx ];
	
				if ( filters[i]( settings, row._aFilterData, rowIdx, row._aData, j ) ) {
					rows.push( rowIdx );
				}
			}
	
			// So the array reference doesn't break set the results into the
			// existing array
			displayRows.length = 0;
			$.merge( displayRows, rows );
		}
	}
	
	
	/**
	 * Filter the table on a per-column basis
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sInput string to filter on
	 *  @param {int} iColumn column to filter
	 *  @param {bool} bRegex treat search string as a regular expression or not
	 *  @param {bool} bSmart use smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insensitive matching or not
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterColumn ( settings, searchStr, colIdx, regex, smart, caseInsensitive )
	{
		if ( searchStr === '' ) {
			return;
		}
	
		var data;
		var out = [];
		var display = settings.aiDisplay;
		var rpSearch = _fnFilterCreateSearch( searchStr, regex, smart, caseInsensitive );
	
		for ( var i=0 ; i<display.length ; i++ ) {
			data = settings.aoData[ display[i] ]._aFilterData[ colIdx ];
	
			if ( rpSearch.test( data ) ) {
				out.push( display[i] );
			}
		}
	
		settings.aiDisplay = out;
	}
	
	
	/**
	 * Filter the data table based on user input and draw the table
	 *  @param {object} settings dataTables settings object
	 *  @param {string} input string to filter on
	 *  @param {int} force optional - force a research of the master array (1) or not (undefined or 0)
	 *  @param {bool} regex treat as a regular expression or not
	 *  @param {bool} smart perform smart filtering or not
	 *  @param {bool} caseInsensitive Do case insensitive matching or not
	 *  @memberof DataTable#oApi
	 */
	function _fnFilter( settings, input, force, regex, smart, caseInsensitive )
	{
		var rpSearch = _fnFilterCreateSearch( input, regex, smart, caseInsensitive );
		var prevSearch = settings.oPreviousSearch.sSearch;
		var displayMaster = settings.aiDisplayMaster;
		var display, invalidated, i;
		var filtered = [];
	
		// Need to take account of custom filtering functions - always filter
		if ( DataTable.ext.search.length !== 0 ) {
			force = true;
		}
	
		// Check if any of the rows were invalidated
		invalidated = _fnFilterData( settings );
	
		// If the input is blank - we just want the full data set
		if ( input.length <= 0 ) {
			settings.aiDisplay = displayMaster.slice();
		}
		else {
			// New search - start from the master array
			if ( invalidated ||
				 force ||
				 regex ||
				 prevSearch.length > input.length ||
				 input.indexOf(prevSearch) !== 0 ||
				 settings.bSorted // On resort, the display master needs to be
				                  // re-filtered since indexes will have changed
			) {
				settings.aiDisplay = displayMaster.slice();
			}
	
			// Search the display array
			display = settings.aiDisplay;
	
			for ( i=0 ; i<display.length ; i++ ) {
				if ( rpSearch.test( settings.aoData[ display[i] ]._sFilterRow ) ) {
					filtered.push( display[i] );
				}
			}
	
			settings.aiDisplay = filtered;
		}
	}
	
	
	/**
	 * Build a regular expression object suitable for searching a table
	 *  @param {string} sSearch string to search for
	 *  @param {bool} bRegex treat as a regular expression or not
	 *  @param {bool} bSmart perform smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insensitive matching or not
	 *  @returns {RegExp} constructed object
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterCreateSearch( search, regex, smart, caseInsensitive )
	{
		search = regex ?
			search :
			_fnEscapeRegex( search );
		
		if ( smart ) {
			/* For smart filtering we want to allow the search to work regardless of
			 * word order. We also want double quoted text to be preserved, so word
			 * order is important - a la google. So this is what we want to
			 * generate:
			 * 
			 * ^(?=.*?\bone\b)(?=.*?\btwo three\b)(?=.*?\bfour\b).*$
			 */
			var a = $.map( search.match( /"[^"]+"|[^ ]+/g ) || [''], function ( word ) {
				if ( word.charAt(0) === '"' ) {
					var m = word.match( /^"(.*)"$/ );
					word = m ? m[1] : word;
				}
	
				return word.replace('"', '');
			} );
	
			search = '^(?=.*?'+a.join( ')(?=.*?' )+').*$';
		}
	
		return new RegExp( search, caseInsensitive ? 'i' : '' );
	}
	
	
	/**
	 * Escape a string such that it can be used in a regular expression
	 *  @param {string} sVal string to escape
	 *  @returns {string} escaped string
	 *  @memberof DataTable#oApi
	 */
	var _fnEscapeRegex = DataTable.util.escapeRegex;
	
	var __filter_div = $('<div>')[0];
	var __filter_div_textContent = __filter_div.textContent !== undefined;
	
	// Update the filtering data for each row if needed (by invalidation or first run)
	function _fnFilterData ( settings )
	{
		var columns = settings.aoColumns;
		var column;
		var i, j, ien, jen, filterData, cellData, row;
		var wasInvalidated = false;
	
		for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			row = settings.aoData[i];
	
			if ( ! row._aFilterData ) {
				filterData = [];
	
				for ( j=0, jen=columns.length ; j<jen ; j++ ) {
					column = columns[j];
	
					if ( column.bSearchable ) {
						cellData = _fnGetCellData( settings, i, j, 'filter' );
	
						// Search in DataTables 1.10 is string based. In 1.11 this
						// should be altered to also allow strict type checking.
						if ( cellData === null ) {
							cellData = '';
						}
	
						if ( typeof cellData !== 'string' && cellData.toString ) {
							cellData = cellData.toString();
						}
					}
					else {
						cellData = '';
					}
	
					// If it looks like there is an HTML entity in the string,
					// attempt to decode it so sorting works as expected. Note that
					// we could use a single line of jQuery to do this, but the DOM
					// method used here is much faster http://jsperf.com/html-decode
					if ( cellData.indexOf && cellData.indexOf('&') !== -1 ) {
						__filter_div.innerHTML = cellData;
						cellData = __filter_div_textContent ?
							__filter_div.textContent :
							__filter_div.innerText;
					}
	
					if ( cellData.replace ) {
						cellData = cellData.replace(/[\r\n\u2028]/g, '');
					}
	
					filterData.push( cellData );
				}
	
				row._aFilterData = filterData;
				row._sFilterRow = filterData.join('  ');
				wasInvalidated = true;
			}
		}
	
		return wasInvalidated;
	}
	
	
	/**
	 * Convert from the internal Hungarian notation to camelCase for external
	 * interaction
	 *  @param {object} obj Object to convert
	 *  @returns {object} Inverted object
	 *  @memberof DataTable#oApi
	 */
	function _fnSearchToCamel ( obj )
	{
		return {
			search:          obj.sSearch,
			smart:           obj.bSmart,
			regex:           obj.bRegex,
			caseInsensitive: obj.bCaseInsensitive
		};
	}
	
	
	
	/**
	 * Convert from camelCase notation to the internal Hungarian. We could use the
	 * Hungarian convert function here, but this is cleaner
	 *  @param {object} obj Object to convert
	 *  @returns {object} Inverted object
	 *  @memberof DataTable#oApi
	 */
	function _fnSearchToHung ( obj )
	{
		return {
			sSearch:          obj.search,
			bSmart:           obj.smart,
			bRegex:           obj.regex,
			bCaseInsensitive: obj.caseInsensitive
		};
	}
	
	/**
	 * Generate the node required for the info display
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Information element
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlInfo ( settings )
	{
		var
			tid = settings.sTableId,
			nodes = settings.aanFeatures.i,
			n = $('<div/>', {
				'class': settings.oClasses.sInfo,
				'id': ! nodes ? tid+'_info' : null
			} );
	
		if ( ! nodes ) {
			// Update display on each draw
			settings.aoDrawCallback.push( {
				"fn": _fnUpdateInfo,
				"sName": "information"
			} );
	
			n
				.attr( 'role', 'status' )
				.attr( 'aria-live', 'polite' );
	
			// Table is described by our info div
			$(settings.nTable).attr( 'aria-describedby', tid+'_info' );
		}
	
		return n[0];
	}
	
	
	/**
	 * Update the information elements in the display
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnUpdateInfo ( settings )
	{
		/* Show information about the table */
		var nodes = settings.aanFeatures.i;
		if ( nodes.length === 0 ) {
			return;
		}
	
		var
			lang  = settings.oLanguage,
			start = settings._iDisplayStart+1,
			end   = settings.fnDisplayEnd(),
			max   = settings.fnRecordsTotal(),
			total = settings.fnRecordsDisplay(),
			out   = total ?
				lang.sInfo :
				lang.sInfoEmpty;
	
		if ( total !== max ) {
			/* Record set after filtering */
			out += ' ' + lang.sInfoFiltered;
		}
	
		// Convert the macros
		out += lang.sInfoPostFix;
		out = _fnInfoMacros( settings, out );
	
		var callback = lang.fnInfoCallback;
		if ( callback !== null ) {
			out = callback.call( settings.oInstance,
				settings, start, end, max, total, out
			);
		}
	
		$(nodes).html( out );
	}
	
	
	function _fnInfoMacros ( settings, str )
	{
		// When infinite scrolling, we are always starting at 1. _iDisplayStart is used only
		// internally
		var
			formatter  = settings.fnFormatNumber,
			start      = settings._iDisplayStart+1,
			len        = settings._iDisplayLength,
			vis        = settings.fnRecordsDisplay(),
			all        = len === -1;
	
		return str.
			replace(/_START_/g, formatter.call( settings, start ) ).
			replace(/_END_/g,   formatter.call( settings, settings.fnDisplayEnd() ) ).
			replace(/_MAX_/g,   formatter.call( settings, settings.fnRecordsTotal() ) ).
			replace(/_TOTAL_/g, formatter.call( settings, vis ) ).
			replace(/_PAGE_/g,  formatter.call( settings, all ? 1 : Math.ceil( start / len ) ) ).
			replace(/_PAGES_/g, formatter.call( settings, all ? 1 : Math.ceil( vis / len ) ) );
	}
	
	
	
	/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnInitialise ( settings )
	{
		var i, iLen, iAjaxStart=settings.iInitDisplayStart;
		var columns = settings.aoColumns, column;
		var features = settings.oFeatures;
		var deferLoading = settings.bDeferLoading; // value modified by the draw
	
		/* Ensure that the table data is fully initialised */
		if ( ! settings.bInitialised ) {
			setTimeout( function(){ _fnInitialise( settings ); }, 200 );
			return;
		}
	
		/* Show the display HTML options */
		_fnAddOptionsHtml( settings );
	
		/* Build and draw the header / footer for the table */
		_fnBuildHead( settings );
		_fnDrawHead( settings, settings.aoHeader );
		_fnDrawHead( settings, settings.aoFooter );
	
		/* Okay to show that something is going on now */
		_fnProcessingDisplay( settings, true );
	
		/* Calculate sizes for columns */
		if ( features.bAutoWidth ) {
			_fnCalculateColumnWidths( settings );
		}
	
		for ( i=0, iLen=columns.length ; i<iLen ; i++ ) {
			column = columns[i];
	
			if ( column.sWidth ) {
				column.nTh.style.width = _fnStringToCss( column.sWidth );
			}
		}
	
		_fnCallbackFire( settings, null, 'preInit', [settings] );
	
		// If there is default sorting required - let's do it. The sort function
		// will do the drawing for us. Otherwise we draw the table regardless of the
		// Ajax source - this allows the table to look initialised for Ajax sourcing
		// data (show 'loading' message possibly)
		_fnReDraw( settings );
	
		// Server-side processing init complete is done by _fnAjaxUpdateDraw
		var dataSrc = _fnDataSource( settings );
		if ( dataSrc != 'ssp' || deferLoading ) {
			// if there is an ajax source load the data
			if ( dataSrc == 'ajax' ) {
				_fnBuildAjax( settings, [], function(json) {
					var aData = _fnAjaxDataSrc( settings, json );
	
					// Got the data - add it to the table
					for ( i=0 ; i<aData.length ; i++ ) {
						_fnAddData( settings, aData[i] );
					}
	
					// Reset the init display for cookie saving. We've already done
					// a filter, and therefore cleared it before. So we need to make
					// it appear 'fresh'
					settings.iInitDisplayStart = iAjaxStart;
	
					_fnReDraw( settings );
	
					_fnProcessingDisplay( settings, false );
					_fnInitComplete( settings, json );
				}, settings );
			}
			else {
				_fnProcessingDisplay( settings, false );
				_fnInitComplete( settings );
			}
		}
	}
	
	
	/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
	 *    with client-side processing (optional)
	 *  @memberof DataTable#oApi
	 */
	function _fnInitComplete ( settings, json )
	{
		settings._bInitComplete = true;
	
		// When data was added after the initialisation (data or Ajax) we need to
		// calculate the column sizing
		if ( json || settings.oInit.aaData ) {
			_fnAdjustColumnSizing( settings );
		}
	
		_fnCallbackFire( settings, null, 'plugin-init', [settings, json] );
		_fnCallbackFire( settings, 'aoInitComplete', 'init', [settings, json] );
	}
	
	
	function _fnLengthChange ( settings, val )
	{
		var len = parseInt( val, 10 );
		settings._iDisplayLength = len;
	
		_fnLengthOverflow( settings );
	
		// Fire length change event
		_fnCallbackFire( settings, null, 'length', [settings, len] );
	}
	
	
	/**
	 * Generate the node required for user display length changing
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Display length feature node
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlLength ( settings )
	{
		var
			classes  = settings.oClasses,
			tableId  = settings.sTableId,
			menu     = settings.aLengthMenu,
			d2       = Array.isArray( menu[0] ),
			lengths  = d2 ? menu[0] : menu,
			language = d2 ? menu[1] : menu;
	
		var select = $('<select/>', {
			'name':          tableId+'_length',
			'aria-controls': tableId,
			'class':         classes.sLengthSelect
		} );
	
		for ( var i=0, ien=lengths.length ; i<ien ; i++ ) {
			select[0][ i ] = new Option(
				typeof language[i] === 'number' ?
					settings.fnFormatNumber( language[i] ) :
					language[i],
				lengths[i]
			);
		}
	
		var div = $('<div><label/></div>').addClass( classes.sLength );
		if ( ! settings.aanFeatures.l ) {
			div[0].id = tableId+'_length';
		}
	
		div.children().append(
			settings.oLanguage.sLengthMenu.replace( '_MENU_', select[0].outerHTML )
		);
	
		// Can't use `select` variable as user might provide their own and the
		// reference is broken by the use of outerHTML
		$('select', div)
			.val( settings._iDisplayLength )
			.on( 'change.DT', function(e) {
				_fnLengthChange( settings, $(this).val() );
				_fnDraw( settings );
			} );
	
		// Update node value whenever anything changes the table's length
		$(settings.nTable).on( 'length.dt.DT', function (e, s, len) {
			if ( settings === s ) {
				$('select', div).val( len );
			}
		} );
	
		return div[0];
	}
	
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Note that most of the paging logic is done in
	 * DataTable.ext.pager
	 */
	
	/**
	 * Generate the node required for default pagination
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Pagination feature node
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlPaginate ( settings )
	{
		var
			type   = settings.sPaginationType,
			plugin = DataTable.ext.pager[ type ],
			modern = typeof plugin === 'function',
			redraw = function( settings ) {
				_fnDraw( settings );
			},
			node = $('<div/>').addClass( settings.oClasses.sPaging + type )[0],
			features = settings.aanFeatures;
	
		if ( ! modern ) {
			plugin.fnInit( settings, node, redraw );
		}
	
		/* Add a draw callback for the pagination on first instance, to update the paging display */
		if ( ! features.p )
		{
			node.id = settings.sTableId+'_paginate';
	
			settings.aoDrawCallback.push( {
				"fn": function( settings ) {
					if ( modern ) {
						var
							start      = settings._iDisplayStart,
							len        = settings._iDisplayLength,
							visRecords = settings.fnRecordsDisplay(),
							all        = len === -1,
							page = all ? 0 : Math.ceil( start / len ),
							pages = all ? 1 : Math.ceil( visRecords / len ),
							buttons = plugin(page, pages),
							i, ien;
	
						for ( i=0, ien=features.p.length ; i<ien ; i++ ) {
							_fnRenderer( settings, 'pageButton' )(
								settings, features.p[i], i, buttons, page, pages
							);
						}
					}
					else {
						plugin.fnUpdate( settings, redraw );
					}
				},
				"sName": "pagination"
			} );
		}
	
		return node;
	}
	
	
	/**
	 * Alter the display settings to change the page
	 *  @param {object} settings DataTables settings object
	 *  @param {string|int} action Paging action to take: "first", "previous",
	 *    "next" or "last" or page number to jump to (integer)
	 *  @param [bool] redraw Automatically draw the update or not
	 *  @returns {bool} true page has changed, false - no change
	 *  @memberof DataTable#oApi
	 */
	function _fnPageChange ( settings, action, redraw )
	{
		var
			start     = settings._iDisplayStart,
			len       = settings._iDisplayLength,
			records   = settings.fnRecordsDisplay();
	
		if ( records === 0 || len === -1 )
		{
			start = 0;
		}
		else if ( typeof action === "number" )
		{
			start = action * len;
	
			if ( start > records )
			{
				start = 0;
			}
		}
		else if ( action == "first" )
		{
			start = 0;
		}
		else if ( action == "previous" )
		{
			start = len >= 0 ?
				start - len :
				0;
	
			if ( start < 0 )
			{
			  start = 0;
			}
		}
		else if ( action == "next" )
		{
			if ( start + len < records )
			{
				start += len;
			}
		}
		else if ( action == "last" )
		{
			start = Math.floor( (records-1) / len) * len;
		}
		else
		{
			_fnLog( settings, 0, "Unknown paging action: "+action, 5 );
		}
	
		var changed = settings._iDisplayStart !== start;
		settings._iDisplayStart = start;
	
		if ( changed ) {
			_fnCallbackFire( settings, null, 'page', [settings] );
	
			if ( redraw ) {
				_fnDraw( settings );
			}
		}
		else {
			// No change event - paging was called, but no change
			_fnCallbackFire( settings, null, 'page-nc', [settings] );
		}
	
		return changed;
	}
	
	
	
	/**
	 * Generate the node required for the processing node
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Processing element
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlProcessing ( settings )
	{
		return $('<div/>', {
				'id': ! settings.aanFeatures.r ? settings.sTableId+'_processing' : null,
				'class': settings.oClasses.sProcessing
			} )
			.html( settings.oLanguage.sProcessing )
			.append('<div><div></div><div></div><div></div><div></div></div>')
			.insertBefore( settings.nTable )[0];
	}
	
	
	/**
	 * Display or hide the processing indicator
	 *  @param {object} settings dataTables settings object
	 *  @param {bool} show Show the processing indicator (true) or not (false)
	 *  @memberof DataTable#oApi
	 */
	function _fnProcessingDisplay ( settings, show )
	{
		if ( settings.oFeatures.bProcessing ) {
			$(settings.aanFeatures.r).css( 'display', show ? 'block' : 'none' );
		}
	
		_fnCallbackFire( settings, null, 'processing', [settings, show] );
	}
	
	/**
	 * Add any control elements for the table - specifically scrolling
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Node to add to the DOM
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlTable ( settings )
	{
		var table = $(settings.nTable);
	
		// Scrolling from here on in
		var scroll = settings.oScroll;
	
		if ( scroll.sX === '' && scroll.sY === '' ) {
			return settings.nTable;
		}
	
		var scrollX = scroll.sX;
		var scrollY = scroll.sY;
		var classes = settings.oClasses;
		var caption = table.children('caption');
		var captionSide = caption.length ? caption[0]._captionSide : null;
		var headerClone = $( table[0].cloneNode(false) );
		var footerClone = $( table[0].cloneNode(false) );
		var footer = table.children('tfoot');
		var _div = '<div/>';
		var size = function ( s ) {
			return !s ? null : _fnStringToCss( s );
		};
	
		if ( ! footer.length ) {
			footer = null;
		}
	
		/*
		 * The HTML structure that we want to generate in this function is:
		 *  div - scroller
		 *    div - scroll head
		 *      div - scroll head inner
		 *        table - scroll head table
		 *          thead - thead
		 *    div - scroll body
		 *      table - table (master table)
		 *        thead - thead clone for sizing
		 *        tbody - tbody
		 *    div - scroll foot
		 *      div - scroll foot inner
		 *        table - scroll foot table
		 *          tfoot - tfoot
		 */
		var scroller = $( _div, { 'class': classes.sScrollWrapper } )
			.append(
				$(_div, { 'class': classes.sScrollHead } )
					.css( {
						overflow: 'hidden',
						position: 'relative',
						border: 0,
						width: scrollX ? size(scrollX) : '100%'
					} )
					.append(
						$(_div, { 'class': classes.sScrollHeadInner } )
							.css( {
								'box-sizing': 'content-box',
								width: scroll.sXInner || '100%'
							} )
							.append(
								headerClone
									.removeAttr('id')
									.css( 'margin-left', 0 )
									.append( captionSide === 'top' ? caption : null )
									.append(
										table.children('thead')
									)
							)
					)
			)
			.append(
				$(_div, { 'class': classes.sScrollBody } )
					.css( {
						position: 'relative',
						overflow: 'auto',
						width: size( scrollX )
					} )
					.append( table )
			);
	
		if ( footer ) {
			scroller.append(
				$(_div, { 'class': classes.sScrollFoot } )
					.css( {
						overflow: 'hidden',
						border: 0,
						width: scrollX ? size(scrollX) : '100%'
					} )
					.append(
						$(_div, { 'class': classes.sScrollFootInner } )
							.append(
								footerClone
									.removeAttr('id')
									.css( 'margin-left', 0 )
									.append( captionSide === 'bottom' ? caption : null )
									.append(
										table.children('tfoot')
									)
							)
					)
			);
		}
	
		var children = scroller.children();
		var scrollHead = children[0];
		var scrollBody = children[1];
		var scrollFoot = footer ? children[2] : null;
	
		// When the body is scrolled, then we also want to scroll the headers
		if ( scrollX ) {
			$(scrollBody).on( 'scroll.DT', function (e) {
				var scrollLeft = this.scrollLeft;
	
				scrollHead.scrollLeft = scrollLeft;
	
				if ( footer ) {
					scrollFoot.scrollLeft = scrollLeft;
				}
			} );
		}
	
		$(scrollBody).css('max-height', scrollY);
		if (! scroll.bCollapse) {
			$(scrollBody).css('height', scrollY);
		}
	
		settings.nScrollHead = scrollHead;
		settings.nScrollBody = scrollBody;
		settings.nScrollFoot = scrollFoot;
	
		// On redraw - align columns
		settings.aoDrawCallback.push( {
			"fn": _fnScrollDraw,
			"sName": "scrolling"
		} );
	
		return scroller[0];
	}
	
	
	
	/**
	 * Update the header, footer and body tables for resizing - i.e. column
	 * alignment.
	 *
	 * Welcome to the most horrible function DataTables. The process that this
	 * function follows is basically:
	 *   1. Re-create the table inside the scrolling div
	 *   2. Take live measurements from the DOM
	 *   3. Apply the measurements to align the columns
	 *   4. Clean up
	 *
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnScrollDraw ( settings )
	{
		// Given that this is such a monster function, a lot of variables are use
		// to try and keep the minimised size as small as possible
		var
			scroll         = settings.oScroll,
			scrollX        = scroll.sX,
			scrollXInner   = scroll.sXInner,
			scrollY        = scroll.sY,
			barWidth       = scroll.iBarWidth,
			divHeader      = $(settings.nScrollHead),
			divHeaderStyle = divHeader[0].style,
			divHeaderInner = divHeader.children('div'),
			divHeaderInnerStyle = divHeaderInner[0].style,
			divHeaderTable = divHeaderInner.children('table'),
			divBodyEl      = settings.nScrollBody,
			divBody        = $(divBodyEl),
			divBodyStyle   = divBodyEl.style,
			divFooter      = $(settings.nScrollFoot),
			divFooterInner = divFooter.children('div'),
			divFooterTable = divFooterInner.children('table'),
			header         = $(settings.nTHead),
			table          = $(settings.nTable),
			tableEl        = table[0],
			tableStyle     = tableEl.style,
			footer         = settings.nTFoot ? $(settings.nTFoot) : null,
			browser        = settings.oBrowser,
			ie67           = browser.bScrollOversize,
			dtHeaderCells  = _pluck( settings.aoColumns, 'nTh' ),
			headerTrgEls, footerTrgEls,
			headerSrcEls, footerSrcEls,
			headerCopy, footerCopy,
			headerWidths=[], footerWidths=[],
			headerContent=[], footerContent=[],
			idx, correction, sanityWidth,
			zeroOut = function(nSizer) {
				var style = nSizer.style;
				style.paddingTop = "0";
				style.paddingBottom = "0";
				style.borderTopWidth = "0";
				style.borderBottomWidth = "0";
				style.height = 0;
			};
	
		// If the scrollbar visibility has changed from the last draw, we need to
		// adjust the column sizes as the table width will have changed to account
		// for the scrollbar
		var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;
		
		if ( settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== undefined ) {
			settings.scrollBarVis = scrollBarVis;
			_fnAdjustColumnSizing( settings );
			return; // adjust column sizing will call this function again
		}
		else {
			settings.scrollBarVis = scrollBarVis;
		}
	
		/*
		 * 1. Re-create the table inside the scrolling div
		 */
	
		// Remove the old minimised thead and tfoot elements in the inner table
		table.children('thead, tfoot').remove();
	
		if ( footer ) {
			footerCopy = footer.clone().prependTo( table );
			footerTrgEls = footer.find('tr'); // the original tfoot is in its own table and must be sized
			footerSrcEls = footerCopy.find('tr');
			footerCopy.find('[id]').removeAttr('id');
		}
	
		// Clone the current header and footer elements and then place it into the inner table
		headerCopy = header.clone().prependTo( table );
		headerTrgEls = header.find('tr'); // original header is in its own table
		headerSrcEls = headerCopy.find('tr');
		headerCopy.find('th, td').removeAttr('tabindex');
		headerCopy.find('[id]').removeAttr('id');
	
	
		/*
		 * 2. Take live measurements from the DOM - do not alter the DOM itself!
		 */
	
		// Remove old sizing and apply the calculated column widths
		// Get the unique column headers in the newly created (cloned) header. We want to apply the
		// calculated sizes to this header
		if ( ! scrollX )
		{
			divBodyStyle.width = '100%';
			divHeader[0].style.width = '100%';
		}
	
		$.each( _fnGetUniqueThs( settings, headerCopy ), function ( i, el ) {
			idx = _fnVisibleToColumnIndex( settings, i );
			el.style.width = settings.aoColumns[idx].sWidth;
		} );
	
		if ( footer ) {
			_fnApplyToChildren( function(n) {
				n.style.width = "";
			}, footerSrcEls );
		}
	
		// Size the table as a whole
		sanityWidth = table.outerWidth();
		if ( scrollX === "" ) {
			// No x scrolling
			tableStyle.width = "100%";
	
			// IE7 will make the width of the table when 100% include the scrollbar
			// - which is shouldn't. When there is a scrollbar we need to take this
			// into account.
			if ( ie67 && (table.find('tbody').height() > divBodyEl.offsetHeight ||
				divBody.css('overflow-y') == "scroll")
			) {
				tableStyle.width = _fnStringToCss( table.outerWidth() - barWidth);
			}
	
			// Recalculate the sanity width
			sanityWidth = table.outerWidth();
		}
		else if ( scrollXInner !== "" ) {
			// legacy x scroll inner has been given - use it
			tableStyle.width = _fnStringToCss(scrollXInner);
	
			// Recalculate the sanity width
			sanityWidth = table.outerWidth();
		}
	
		// Hidden header should have zero height, so remove padding and borders. Then
		// set the width based on the real headers
	
		// Apply all styles in one pass
		_fnApplyToChildren( zeroOut, headerSrcEls );
	
		// Read all widths in next pass
		_fnApplyToChildren( function(nSizer) {
			var style = window.getComputedStyle ?
				window.getComputedStyle(nSizer).width :
				_fnStringToCss( $(nSizer).width() );
	
			headerContent.push( nSizer.innerHTML );
			headerWidths.push( style );
		}, headerSrcEls );
	
		// Apply all widths in final pass
		_fnApplyToChildren( function(nToSize, i) {
			nToSize.style.width = headerWidths[i];
		}, headerTrgEls );
	
		$(headerSrcEls).css('height', 0);
	
		/* Same again with the footer if we have one */
		if ( footer )
		{
			_fnApplyToChildren( zeroOut, footerSrcEls );
	
			_fnApplyToChildren( function(nSizer) {
				footerContent.push( nSizer.innerHTML );
				footerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
			}, footerSrcEls );
	
			_fnApplyToChildren( function(nToSize, i) {
				nToSize.style.width = footerWidths[i];
			}, footerTrgEls );
	
			$(footerSrcEls).height(0);
		}
	
	
		/*
		 * 3. Apply the measurements
		 */
	
		// "Hide" the header and footer that we used for the sizing. We need to keep
		// the content of the cell so that the width applied to the header and body
		// both match, but we want to hide it completely. We want to also fix their
		// width to what they currently are
		_fnApplyToChildren( function(nSizer, i) {
			nSizer.innerHTML = '<div class="dataTables_sizing">'+headerContent[i]+'</div>';
			nSizer.childNodes[0].style.height = "0";
			nSizer.childNodes[0].style.overflow = "hidden";
			nSizer.style.width = headerWidths[i];
		}, headerSrcEls );
	
		if ( footer )
		{
			_fnApplyToChildren( function(nSizer, i) {
				nSizer.innerHTML = '<div class="dataTables_sizing">'+footerContent[i]+'</div>';
				nSizer.childNodes[0].style.height = "0";
				nSizer.childNodes[0].style.overflow = "hidden";
				nSizer.style.width = footerWidths[i];
			}, footerSrcEls );
		}
	
		// Sanity check that the table is of a sensible width. If not then we are going to get
		// misalignment - try to prevent this by not allowing the table to shrink below its min width
		if ( Math.round(table.outerWidth()) < Math.round(sanityWidth) )
		{
			// The min width depends upon if we have a vertical scrollbar visible or not */
			correction = ((divBodyEl.scrollHeight > divBodyEl.offsetHeight ||
				divBody.css('overflow-y') == "scroll")) ?
					sanityWidth+barWidth :
					sanityWidth;
	
			// IE6/7 are a law unto themselves...
			if ( ie67 && (divBodyEl.scrollHeight >
				divBodyEl.offsetHeight || divBody.css('overflow-y') == "scroll")
			) {
				tableStyle.width = _fnStringToCss( correction-barWidth );
			}
	
			// And give the user a warning that we've stopped the table getting too small
			if ( scrollX === "" || scrollXInner !== "" ) {
				_fnLog( settings, 1, 'Possible column misalignment', 6 );
			}
		}
		else
		{
			correction = '100%';
		}
	
		// Apply to the container elements
		divBodyStyle.width = _fnStringToCss( correction );
		divHeaderStyle.width = _fnStringToCss( correction );
	
		if ( footer ) {
			settings.nScrollFoot.style.width = _fnStringToCss( correction );
		}
	
	
		/*
		 * 4. Clean up
		 */
		if ( ! scrollY ) {
			/* IE7< puts a vertical scrollbar in place (when it shouldn't be) due to subtracting
			 * the scrollbar height from the visible display, rather than adding it on. We need to
			 * set the height in order to sort this. Don't want to do it in any other browsers.
			 */
			if ( ie67 ) {
				divBodyStyle.height = _fnStringToCss( tableEl.offsetHeight+barWidth );
			}
		}
	
		/* Finally set the width's of the header and footer tables */
		var iOuterWidth = table.outerWidth();
		divHeaderTable[0].style.width = _fnStringToCss( iOuterWidth );
		divHeaderInnerStyle.width = _fnStringToCss( iOuterWidth );
	
		// Figure out if there are scrollbar present - if so then we need a the header and footer to
		// provide a bit more space to allow "overflow" scrolling (i.e. past the scrollbar)
		var bScrolling = table.height() > divBodyEl.clientHeight || divBody.css('overflow-y') == "scroll";
		var padding = 'padding' + (browser.bScrollbarLeft ? 'Left' : 'Right' );
		divHeaderInnerStyle[ padding ] = bScrolling ? barWidth+"px" : "0px";
	
		if ( footer ) {
			divFooterTable[0].style.width = _fnStringToCss( iOuterWidth );
			divFooterInner[0].style.width = _fnStringToCss( iOuterWidth );
			divFooterInner[0].style[padding] = bScrolling ? barWidth+"px" : "0px";
		}
	
		// Correct DOM ordering for colgroup - comes before the thead
		table.children('colgroup').insertBefore( table.children('thead') );
	
		/* Adjust the position of the header in case we loose the y-scrollbar */
		divBody.trigger('scroll');
	
		// If sorting or filtering has occurred, jump the scrolling back to the top
		// only if we aren't holding the position
		if ( (settings.bSorted || settings.bFiltered) && ! settings._drawHold ) {
			divBodyEl.scrollTop = 0;
		}
	}
	
	
	
	/**
	 * Apply a given function to the display child nodes of an element array (typically
	 * TD children of TR rows
	 *  @param {function} fn Method to apply to the objects
	 *  @param array {nodes} an1 List of elements to look through for display children
	 *  @param array {nodes} an2 Another list (identical structure to the first) - optional
	 *  @memberof DataTable#oApi
	 */
	function _fnApplyToChildren( fn, an1, an2 )
	{
		var index=0, i=0, iLen=an1.length;
		var nNode1, nNode2;
	
		while ( i < iLen ) {
			nNode1 = an1[i].firstChild;
			nNode2 = an2 ? an2[i].firstChild : null;
	
			while ( nNode1 ) {
				if ( nNode1.nodeType === 1 ) {
					if ( an2 ) {
						fn( nNode1, nNode2, index );
					}
					else {
						fn( nNode1, index );
					}
	
					index++;
				}
	
				nNode1 = nNode1.nextSibling;
				nNode2 = an2 ? nNode2.nextSibling : null;
			}
	
			i++;
		}
	}
	
	
	
	var __re_html_remove = /<.*?>/g;
	
	
	/**
	 * Calculate the width of columns for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnCalculateColumnWidths ( oSettings )
	{
		var
			table = oSettings.nTable,
			columns = oSettings.aoColumns,
			scroll = oSettings.oScroll,
			scrollY = scroll.sY,
			scrollX = scroll.sX,
			scrollXInner = scroll.sXInner,
			columnCount = columns.length,
			visibleColumns = _fnGetColumns( oSettings, 'bVisible' ),
			headerCells = $('th', oSettings.nTHead),
			tableWidthAttr = table.getAttribute('width'), // from DOM element
			tableContainer = table.parentNode,
			userInputs = false,
			i, column, columnIdx, width, outerWidth,
			browser = oSettings.oBrowser,
			ie67 = browser.bScrollOversize;
	
		var styleWidth = table.style.width;
		if ( styleWidth && styleWidth.indexOf('%') !== -1 ) {
			tableWidthAttr = styleWidth;
		}
	
		/* Convert any user input sizes into pixel sizes */
		for ( i=0 ; i<visibleColumns.length ; i++ ) {
			column = columns[ visibleColumns[i] ];
	
			if ( column.sWidth !== null ) {
				column.sWidth = _fnConvertToWidth( column.sWidthOrig, tableContainer );
	
				userInputs = true;
			}
		}
	
		/* If the number of columns in the DOM equals the number that we have to
		 * process in DataTables, then we can use the offsets that are created by
		 * the web- browser. No custom sizes can be set in order for this to happen,
		 * nor scrolling used
		 */
		if ( ie67 || ! userInputs && ! scrollX && ! scrollY &&
		     columnCount == _fnVisbleColumns( oSettings ) &&
		     columnCount == headerCells.length
		) {
			for ( i=0 ; i<columnCount ; i++ ) {
				var colIdx = _fnVisibleToColumnIndex( oSettings, i );
	
				if ( colIdx !== null ) {
					columns[ colIdx ].sWidth = _fnStringToCss( headerCells.eq(i).width() );
				}
			}
		}
		else
		{
			// Otherwise construct a single row, worst case, table with the widest
			// node in the data, assign any user defined widths, then insert it into
			// the DOM and allow the browser to do all the hard work of calculating
			// table widths
			var tmpTable = $(table).clone() // don't use cloneNode - IE8 will remove events on the main table
				.css( 'visibility', 'hidden' )
				.removeAttr( 'id' );
	
			// Clean up the table body
			tmpTable.find('tbody tr').remove();
			var tr = $('<tr/>').appendTo( tmpTable.find('tbody') );
	
			// Clone the table header and footer - we can't use the header / footer
			// from the cloned table, since if scrolling is active, the table's
			// real header and footer are contained in different table tags
			tmpTable.find('thead, tfoot').remove();
			tmpTable
				.append( $(oSettings.nTHead).clone() )
				.append( $(oSettings.nTFoot).clone() );
	
			// Remove any assigned widths from the footer (from scrolling)
			tmpTable.find('tfoot th, tfoot td').css('width', '');
	
			// Apply custom sizing to the cloned header
			headerCells = _fnGetUniqueThs( oSettings, tmpTable.find('thead')[0] );
	
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				column = columns[ visibleColumns[i] ];
	
				headerCells[i].style.width = column.sWidthOrig !== null && column.sWidthOrig !== '' ?
					_fnStringToCss( column.sWidthOrig ) :
					'';
	
				// For scrollX we need to force the column width otherwise the
				// browser will collapse it. If this width is smaller than the
				// width the column requires, then it will have no effect
				if ( column.sWidthOrig && scrollX ) {
					$( headerCells[i] ).append( $('<div/>').css( {
						width: column.sWidthOrig,
						margin: 0,
						padding: 0,
						border: 0,
						height: 1
					} ) );
				}
			}
	
			// Find the widest cell for each column and put it into the table
			if ( oSettings.aoData.length ) {
				for ( i=0 ; i<visibleColumns.length ; i++ ) {
					columnIdx = visibleColumns[i];
					column = columns[ columnIdx ];
	
					$( _fnGetWidestNode( oSettings, columnIdx ) )
						.clone( false )
						.append( column.sContentPadding )
						.appendTo( tr );
				}
			}
	
			// Tidy the temporary table - remove name attributes so there aren't
			// duplicated in the dom (radio elements for example)
			$('[name]', tmpTable).removeAttr('name');
	
			// Table has been built, attach to the document so we can work with it.
			// A holding element is used, positioned at the top of the container
			// with minimal height, so it has no effect on if the container scrolls
			// or not. Otherwise it might trigger scrolling when it actually isn't
			// needed
			var holder = $('<div/>').css( scrollX || scrollY ?
					{
						position: 'absolute',
						top: 0,
						left: 0,
						height: 1,
						right: 0,
						overflow: 'hidden'
					} :
					{}
				)
				.append( tmpTable )
				.appendTo( tableContainer );
	
			// When scrolling (X or Y) we want to set the width of the table as 
			// appropriate. However, when not scrolling leave the table width as it
			// is. This results in slightly different, but I think correct behaviour
			if ( scrollX && scrollXInner ) {
				tmpTable.width( scrollXInner );
			}
			else if ( scrollX ) {
				tmpTable.css( 'width', 'auto' );
				tmpTable.removeAttr('width');
	
				// If there is no width attribute or style, then allow the table to
				// collapse
				if ( tmpTable.width() < tableContainer.clientWidth && tableWidthAttr ) {
					tmpTable.width( tableContainer.clientWidth );
				}
			}
			else if ( scrollY ) {
				tmpTable.width( tableContainer.clientWidth );
			}
			else if ( tableWidthAttr ) {
				tmpTable.width( tableWidthAttr );
			}
	
			// Get the width of each column in the constructed table - we need to
			// know the inner width (so it can be assigned to the other table's
			// cells) and the outer width so we can calculate the full width of the
			// table. This is safe since DataTables requires a unique cell for each
			// column, but if ever a header can span multiple columns, this will
			// need to be modified.
			var total = 0;
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				var cell = $(headerCells[i]);
				var border = cell.outerWidth() - cell.width();
	
				// Use getBounding... where possible (not IE8-) because it can give
				// sub-pixel accuracy, which we then want to round up!
				var bounding = browser.bBounding ?
					Math.ceil( headerCells[i].getBoundingClientRect().width ) :
					cell.outerWidth();
	
				// Total is tracked to remove any sub-pixel errors as the outerWidth
				// of the table might not equal the total given here (IE!).
				total += bounding;
	
				// Width for each column to use
				columns[ visibleColumns[i] ].sWidth = _fnStringToCss( bounding - border );
			}
	
			table.style.width = _fnStringToCss( total );
	
			// Finished with the table - ditch it
			holder.remove();
		}
	
		// If there is a width attr, we want to attach an event listener which
		// allows the table sizing to automatically adjust when the window is
		// resized. Use the width attr rather than CSS, since we can't know if the
		// CSS is a relative value or absolute - DOM read is always px.
		if ( tableWidthAttr ) {
			table.style.width = _fnStringToCss( tableWidthAttr );
		}
	
		if ( (tableWidthAttr || scrollX) && ! oSettings._reszEvt ) {
			var bindResize = function () {
				$(window).on('resize.DT-'+oSettings.sInstance, _fnThrottle( function () {
					_fnAdjustColumnSizing( oSettings );
				} ) );
			};
	
			// IE6/7 will crash if we bind a resize event handler on page load.
			// To be removed in 1.11 which drops IE6/7 support
			if ( ie67 ) {
				setTimeout( bindResize, 1000 );
			}
			else {
				bindResize();
			}
	
			oSettings._reszEvt = true;
		}
	}
	
	
	/**
	 * Throttle the calls to a function. Arguments and context are maintained for
	 * the throttled function
	 *  @param {function} fn Function to be called
	 *  @param {int} [freq=200] call frequency in mS
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#oApi
	 */
	var _fnThrottle = DataTable.util.throttle;
	
	
	/**
	 * Convert a CSS unit width to pixels (e.g. 2em)
	 *  @param {string} width width to be converted
	 *  @param {node} parent parent to get the with for (required for relative widths) - optional
	 *  @returns {int} width in pixels
	 *  @memberof DataTable#oApi
	 */
	function _fnConvertToWidth ( width, parent )
	{
		if ( ! width ) {
			return 0;
		}
	
		var n = $('<div/>')
			.css( 'width', _fnStringToCss( width ) )
			.appendTo( parent || document.body );
	
		var val = n[0].offsetWidth;
		n.remove();
	
		return val;
	}
	
	
	/**
	 * Get the widest node
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {node} widest table node
	 *  @memberof DataTable#oApi
	 */
	function _fnGetWidestNode( settings, colIdx )
	{
		var idx = _fnGetMaxLenString( settings, colIdx );
		if ( idx < 0 ) {
			return null;
		}
	
		var data = settings.aoData[ idx ];
		return ! data.nTr ? // Might not have been created when deferred rendering
			$('<td/>').html( _fnGetCellData( settings, idx, colIdx, 'display' ) )[0] :
			data.anCells[ colIdx ];
	}
	
	
	/**
	 * Get the maximum strlen for each data column
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {string} max string length for each column
	 *  @memberof DataTable#oApi
	 */
	function _fnGetMaxLenString( settings, colIdx )
	{
		var s, max=-1, maxIdx = -1;
	
		for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			s = _fnGetCellData( settings, i, colIdx, 'display' )+'';
			s = s.replace( __re_html_remove, '' );
			s = s.replace( /&nbsp;/g, ' ' );
	
			if ( s.length > max ) {
				max = s.length;
				maxIdx = i;
			}
		}
	
		return maxIdx;
	}
	
	
	/**
	 * Append a CSS unit (only if required) to a string
	 *  @param {string} value to css-ify
	 *  @returns {string} value with css unit
	 *  @memberof DataTable#oApi
	 */
	function _fnStringToCss( s )
	{
		if ( s === null ) {
			return '0px';
		}
	
		if ( typeof s == 'number' ) {
			return s < 0 ?
				'0px' :
				s+'px';
		}
	
		// Check it has a unit character already
		return s.match(/\d$/) ?
			s+'px' :
			s;
	}
	
	
	
	function _fnSortFlatten ( settings )
	{
		var
			i, iLen, k, kLen,
			aSort = [],
			aiOrig = [],
			aoColumns = settings.aoColumns,
			aDataSort, iCol, sType, srcCol,
			fixed = settings.aaSortingFixed,
			fixedObj = $.isPlainObject( fixed ),
			nestedSort = [],
			add = function ( a ) {
				if ( a.length && ! Array.isArray( a[0] ) ) {
					// 1D array
					nestedSort.push( a );
				}
				else {
					// 2D array
					$.merge( nestedSort, a );
				}
			};
	
		// Build the sort array, with pre-fix and post-fix options if they have been
		// specified
		if ( Array.isArray( fixed ) ) {
			add( fixed );
		}
	
		if ( fixedObj && fixed.pre ) {
			add( fixed.pre );
		}
	
		add( settings.aaSorting );
	
		if (fixedObj && fixed.post ) {
			add( fixed.post );
		}
	
		for ( i=0 ; i<nestedSort.length ; i++ )
		{
			srcCol = nestedSort[i][0];
			aDataSort = aoColumns[ srcCol ].aDataSort;
	
			for ( k=0, kLen=aDataSort.length ; k<kLen ; k++ )
			{
				iCol = aDataSort[k];
				sType = aoColumns[ iCol ].sType || 'string';
	
				if ( nestedSort[i]._idx === undefined ) {
					nestedSort[i]._idx = $.inArray( nestedSort[i][1], aoColumns[iCol].asSorting );
				}
	
				aSort.push( {
					src:       srcCol,
					col:       iCol,
					dir:       nestedSort[i][1],
					index:     nestedSort[i]._idx,
					type:      sType,
					formatter: DataTable.ext.type.order[ sType+"-pre" ]
				} );
			}
		}
	
		return aSort;
	}
	
	/**
	 * Change the order of the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 *  @todo This really needs split up!
	 */
	function _fnSort ( oSettings )
	{
		var
			i, ien, iLen, j, jLen, k, kLen,
			sDataType, nTh,
			aiOrig = [],
			oExtSort = DataTable.ext.type.order,
			aoData = oSettings.aoData,
			aoColumns = oSettings.aoColumns,
			aDataSort, data, iCol, sType, oSort,
			formatters = 0,
			sortCol,
			displayMaster = oSettings.aiDisplayMaster,
			aSort;
	
		// Resolve any column types that are unknown due to addition or invalidation
		// @todo Can this be moved into a 'data-ready' handler which is called when
		//   data is going to be used in the table?
		_fnColumnTypes( oSettings );
	
		aSort = _fnSortFlatten( oSettings );
	
		for ( i=0, ien=aSort.length ; i<ien ; i++ ) {
			sortCol = aSort[i];
	
			// Track if we can use the fast sort algorithm
			if ( sortCol.formatter ) {
				formatters++;
			}
	
			// Load the data needed for the sort, for each cell
			_fnSortData( oSettings, sortCol.col );
		}
	
		/* No sorting required if server-side or no sorting array */
		if ( _fnDataSource( oSettings ) != 'ssp' && aSort.length !== 0 )
		{
			// Create a value - key array of the current row positions such that we can use their
			// current position during the sort, if values match, in order to perform stable sorting
			for ( i=0, iLen=displayMaster.length ; i<iLen ; i++ ) {
				aiOrig[ displayMaster[i] ] = i;
			}
	
			/* Do the sort - here we want multi-column sorting based on a given data source (column)
			 * and sorting function (from oSort) in a certain direction. It's reasonably complex to
			 * follow on it's own, but this is what we want (example two column sorting):
			 *  fnLocalSorting = function(a,b){
			 *    var iTest;
			 *    iTest = oSort['string-asc']('data11', 'data12');
			 *      if (iTest !== 0)
			 *        return iTest;
			 *    iTest = oSort['numeric-desc']('data21', 'data22');
			 *    if (iTest !== 0)
			 *      return iTest;
			 *    return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
			 *  }
			 * Basically we have a test for each sorting column, if the data in that column is equal,
			 * test the next column. If all columns match, then we use a numeric sort on the row
			 * positions in the original data array to provide a stable sort.
			 *
			 * Note - I know it seems excessive to have two sorting methods, but the first is around
			 * 15% faster, so the second is only maintained for backwards compatibility with sorting
			 * methods which do not have a pre-sort formatting function.
			 */
			if ( formatters === aSort.length ) {
				// All sort types have formatting functions
				displayMaster.sort( function ( a, b ) {
					var
						x, y, k, test, sort,
						len=aSort.length,
						dataA = aoData[a]._aSortData,
						dataB = aoData[b]._aSortData;
	
					for ( k=0 ; k<len ; k++ ) {
						sort = aSort[k];
	
						x = dataA[ sort.col ];
						y = dataB[ sort.col ];
	
						test = x<y ? -1 : x>y ? 1 : 0;
						if ( test !== 0 ) {
							return sort.dir === 'asc' ? test : -test;
						}
					}
	
					x = aiOrig[a];
					y = aiOrig[b];
					return x<y ? -1 : x>y ? 1 : 0;
				} );
			}
			else {
				// Depreciated - remove in 1.11 (providing a plug-in option)
				// Not all sort types have formatting methods, so we have to call their sorting
				// methods.
				displayMaster.sort( function ( a, b ) {
					var
						x, y, k, l, test, sort, fn,
						len=aSort.length,
						dataA = aoData[a]._aSortData,
						dataB = aoData[b]._aSortData;
	
					for ( k=0 ; k<len ; k++ ) {
						sort = aSort[k];
	
						x = dataA[ sort.col ];
						y = dataB[ sort.col ];
	
						fn = oExtSort[ sort.type+"-"+sort.dir ] || oExtSort[ "string-"+sort.dir ];
						test = fn( x, y );
						if ( test !== 0 ) {
							return test;
						}
					}
	
					x = aiOrig[a];
					y = aiOrig[b];
					return x<y ? -1 : x>y ? 1 : 0;
				} );
			}
		}
	
		/* Tell the draw function that we have sorted the data */
		oSettings.bSorted = true;
	}
	
	
	function _fnSortAria ( settings )
	{
		var label;
		var nextSort;
		var columns = settings.aoColumns;
		var aSort = _fnSortFlatten( settings );
		var oAria = settings.oLanguage.oAria;
	
		// ARIA attributes - need to loop all columns, to update all (removing old
		// attributes as needed)
		for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
		{
			var col = columns[i];
			var asSorting = col.asSorting;
			var sTitle = col.ariaTitle || col.sTitle.replace( /<.*?>/g, "" );
			var th = col.nTh;
	
			// IE7 is throwing an error when setting these properties with jQuery's
			// attr() and removeAttr() methods...
			th.removeAttribute('aria-sort');
	
			/* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */
			if ( col.bSortable ) {
				if ( aSort.length > 0 && aSort[0].col == i ) {
					th.setAttribute('aria-sort', aSort[0].dir=="asc" ? "ascending" : "descending" );
					nextSort = asSorting[ aSort[0].index+1 ] || asSorting[0];
				}
				else {
					nextSort = asSorting[0];
				}
	
				label = sTitle + ( nextSort === "asc" ?
					oAria.sSortAscending :
					oAria.sSortDescending
				);
			}
			else {
				label = sTitle;
			}
	
			th.setAttribute('aria-label', label);
		}
	}
	
	
	/**
	 * Function to run on user sort request
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {boolean} [append=false] Append the requested sort to the existing
	 *    sort if true (i.e. multi-column sort)
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */
	function _fnSortListener ( settings, colIdx, append, callback )
	{
		var col = settings.aoColumns[ colIdx ];
		var sorting = settings.aaSorting;
		var asSorting = col.asSorting;
		var nextSortIdx;
		var next = function ( a, overflow ) {
			var idx = a._idx;
			if ( idx === undefined ) {
				idx = $.inArray( a[1], asSorting );
			}
	
			return idx+1 < asSorting.length ?
				idx+1 :
				overflow ?
					null :
					0;
		};
	
		// Convert to 2D array if needed
		if ( typeof sorting[0] === 'number' ) {
			sorting = settings.aaSorting = [ sorting ];
		}
	
		// If appending the sort then we are multi-column sorting
		if ( append && settings.oFeatures.bSortMulti ) {
			// Are we already doing some kind of sort on this column?
			var sortIdx = $.inArray( colIdx, _pluck(sorting, '0') );
	
			if ( sortIdx !== -1 ) {
				// Yes, modify the sort
				nextSortIdx = next( sorting[sortIdx], true );
	
				if ( nextSortIdx === null && sorting.length === 1 ) {
					nextSortIdx = 0; // can't remove sorting completely
				}
	
				if ( nextSortIdx === null ) {
					sorting.splice( sortIdx, 1 );
				}
				else {
					sorting[sortIdx][1] = asSorting[ nextSortIdx ];
					sorting[sortIdx]._idx = nextSortIdx;
				}
			}
			else {
				// No sort on this column yet
				sorting.push( [ colIdx, asSorting[0], 0 ] );
				sorting[sorting.length-1]._idx = 0;
			}
		}
		else if ( sorting.length && sorting[0][0] == colIdx ) {
			// Single column - already sorting on this column, modify the sort
			nextSortIdx = next( sorting[0] );
	
			sorting.length = 1;
			sorting[0][1] = asSorting[ nextSortIdx ];
			sorting[0]._idx = nextSortIdx;
		}
		else {
			// Single column - sort only on this column
			sorting.length = 0;
			sorting.push( [ colIdx, asSorting[0] ] );
			sorting[0]._idx = 0;
		}
	
		// Run the sort by calling a full redraw
		_fnReDraw( settings );
	
		// callback used for async user interaction
		if ( typeof callback == 'function' ) {
			callback( settings );
		}
	}
	
	
	/**
	 * Attach a sort handler (click) to a node
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */
	function _fnSortAttachListener ( settings, attachTo, colIdx, callback )
	{
		var col = settings.aoColumns[ colIdx ];
	
		_fnBindAction( attachTo, {}, function (e) {
			/* If the column is not sortable - don't to anything */
			if ( col.bSortable === false ) {
				return;
			}
	
			// If processing is enabled use a timeout to allow the processing
			// display to be shown - otherwise to it synchronously
			if ( settings.oFeatures.bProcessing ) {
				_fnProcessingDisplay( settings, true );
	
				setTimeout( function() {
					_fnSortListener( settings, colIdx, e.shiftKey, callback );
	
					// In server-side processing, the draw callback will remove the
					// processing display
					if ( _fnDataSource( settings ) !== 'ssp' ) {
						_fnProcessingDisplay( settings, false );
					}
				}, 0 );
			}
			else {
				_fnSortListener( settings, colIdx, e.shiftKey, callback );
			}
		} );
	}
	
	
	/**
	 * Set the sorting classes on table's body, Note: it is safe to call this function
	 * when bSort and bSortClasses are false
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnSortingClasses( settings )
	{
		var oldSort = settings.aLastSort;
		var sortClass = settings.oClasses.sSortColumn;
		var sort = _fnSortFlatten( settings );
		var features = settings.oFeatures;
		var i, ien, colIdx;
	
		if ( features.bSort && features.bSortClasses ) {
			// Remove old sorting classes
			for ( i=0, ien=oldSort.length ; i<ien ; i++ ) {
				colIdx = oldSort[i].src;
	
				// Remove column sorting
				$( _pluck( settings.aoData, 'anCells', colIdx ) )
					.removeClass( sortClass + (i<2 ? i+1 : 3) );
			}
	
			// Add new column sorting
			for ( i=0, ien=sort.length ; i<ien ; i++ ) {
				colIdx = sort[i].src;
	
				$( _pluck( settings.aoData, 'anCells', colIdx ) )
					.addClass( sortClass + (i<2 ? i+1 : 3) );
			}
		}
	
		settings.aLastSort = sort;
	}
	
	
	// Get the data to sort a column, be it from cache, fresh (populating the
	// cache), or from a sort formatter
	function _fnSortData( settings, idx )
	{
		// Custom sorting function - provided by the sort data type
		var column = settings.aoColumns[ idx ];
		var customSort = DataTable.ext.order[ column.sSortDataType ];
		var customData;
	
		if ( customSort ) {
			customData = customSort.call( settings.oInstance, settings, idx,
				_fnColumnIndexToVisible( settings, idx )
			);
		}
	
		// Use / populate cache
		var row, cellData;
		var formatter = DataTable.ext.type.order[ column.sType+"-pre" ];
	
		for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			row = settings.aoData[i];
	
			if ( ! row._aSortData ) {
				row._aSortData = [];
			}
	
			if ( ! row._aSortData[idx] || customSort ) {
				cellData = customSort ?
					customData[i] : // If there was a custom sort function, use data from there
					_fnGetCellData( settings, i, idx, 'sort' );
	
				row._aSortData[ idx ] = formatter ?
					formatter( cellData ) :
					cellData;
			}
		}
	}
	
	
	
	/**
	 * Save the state of a table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnSaveState ( settings )
	{
		if (settings._bLoadingState) {
			return;
		}
	
		/* Store the interesting variables */
		var state = {
			time:    +new Date(),
			start:   settings._iDisplayStart,
			length:  settings._iDisplayLength,
			order:   $.extend( true, [], settings.aaSorting ),
			search:  _fnSearchToCamel( settings.oPreviousSearch ),
			columns: $.map( settings.aoColumns, function ( col, i ) {
				return {
					visible: col.bVisible,
					search: _fnSearchToCamel( settings.aoPreSearchCols[i] )
				};
			} )
		};
	
		settings.oSavedState = state;
		_fnCallbackFire( settings, "aoStateSaveParams", 'stateSaveParams', [settings, state] );
		
		if ( settings.oFeatures.bStateSave && !settings.bDestroying )
		{
			settings.fnStateSaveCallback.call( settings.oInstance, settings, state );
		}	
	}
	
	
	/**
	 * Attempt to load a saved table state
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oInit DataTables init object so we can override settings
	 *  @param {function} callback Callback to execute when the state has been loaded
	 *  @memberof DataTable#oApi
	 */
	function _fnLoadState ( settings, oInit, callback )
	{
		if ( ! settings.oFeatures.bStateSave ) {
			callback();
			return;
		}
	
		var loaded = function(state) {
			_fnImplementState(settings, state, callback);
		}
	
		var state = settings.fnStateLoadCallback.call( settings.oInstance, settings, loaded );
	
		if ( state !== undefined ) {
			_fnImplementState( settings, state, callback );
		}
		// otherwise, wait for the loaded callback to be executed
	
		return true;
	}
	
	function _fnImplementState ( settings, s, callback) {
		var i, ien;
		var columns = settings.aoColumns;
		settings._bLoadingState = true;
	
		// When StateRestore was introduced the state could now be implemented at any time
		// Not just initialisation. To do this an api instance is required in some places
		var api = settings._bInitComplete ? new DataTable.Api(settings) : null;
	
		if ( ! s || ! s.time ) {
			settings._bLoadingState = false;
			callback();
			return;
		}
	
		// Allow custom and plug-in manipulation functions to alter the saved data set and
		// cancelling of loading by returning false
		var abStateLoad = _fnCallbackFire( settings, 'aoStateLoadParams', 'stateLoadParams', [settings, s] );
		if ( $.inArray( false, abStateLoad ) !== -1 ) {
			settings._bLoadingState = false;
			callback();
			return;
		}
	
		// Reject old data
		var duration = settings.iStateDuration;
		if ( duration > 0 && s.time < +new Date() - (duration*1000) ) {
			settings._bLoadingState = false;
			callback();
			return;
		}
	
		// Number of columns have changed - all bets are off, no restore of settings
		if ( s.columns && columns.length !== s.columns.length ) {
			settings._bLoadingState = false;
			callback();
			return;
		}
	
		// Store the saved state so it might be accessed at any time
		settings.oLoadedState = $.extend( true, {}, s );
	
		// Page Length
		if ( s.length !== undefined ) {
			// If already initialised just set the value directly so that the select element is also updated
			if (api) {
				api.page.len(s.length)
			}
			else {
				settings._iDisplayLength   = s.length;
			}
		}
	
		// Restore key features - todo - for 1.11 this needs to be done by
		// subscribed events
		if ( s.start !== undefined ) {
			if(api === null) {
				settings._iDisplayStart    = s.start;
				settings.iInitDisplayStart = s.start;
			}
			else {
				_fnPageChange(settings, s.start/settings._iDisplayLength);
			}
		}
	
		// Order
		if ( s.order !== undefined ) {
			settings.aaSorting = [];
			$.each( s.order, function ( i, col ) {
				settings.aaSorting.push( col[0] >= columns.length ?
					[ 0, col[1] ] :
					col
				);
			} );
		}
	
		// Search
		if ( s.search !== undefined ) {
			$.extend( settings.oPreviousSearch, _fnSearchToHung( s.search ) );
		}
	
		// Columns
		if ( s.columns ) {
			for ( i=0, ien=s.columns.length ; i<ien ; i++ ) {
				var col = s.columns[i];
	
				// Visibility
				if ( col.visible !== undefined ) {
					// If the api is defined, the table has been initialised so we need to use it rather than internal settings
					if (api) {
						// Don't redraw the columns on every iteration of this loop, we will do this at the end instead
						api.column(i).visible(col.visible, false);
					}
					else {
						columns[i].bVisible = col.visible;
					}
				}
	
				// Search
				if ( col.search !== undefined ) {
					$.extend( settings.aoPreSearchCols[i], _fnSearchToHung( col.search ) );
				}
			}
			
			// If the api is defined then we need to adjust the columns once the visibility has been changed
			if (api) {
				api.columns.adjust();
			}
		}
	
		settings._bLoadingState = false;
		_fnCallbackFire( settings, 'aoStateLoaded', 'stateLoaded', [settings, s] );
		callback();
	};
	
	
	/**
	 * Return the settings object for a particular table
	 *  @param {node} table table we are using as a dataTable
	 *  @returns {object} Settings object - or null if not found
	 *  @memberof DataTable#oApi
	 */
	function _fnSettingsFromNode ( table )
	{
		var settings = DataTable.settings;
		var idx = $.inArray( table, _pluck( settings, 'nTable' ) );
	
		return idx !== -1 ?
			settings[ idx ] :
			null;
	}
	
	
	/**
	 * Log an error message
	 *  @param {object} settings dataTables settings object
	 *  @param {int} level log error messages, or display them to the user
	 *  @param {string} msg error message
	 *  @param {int} tn Technical note id to get more information about the error.
	 *  @memberof DataTable#oApi
	 */
	function _fnLog( settings, level, msg, tn )
	{
		msg = 'DataTables warning: '+
			(settings ? 'table id='+settings.sTableId+' - ' : '')+msg;
	
		if ( tn ) {
			msg += '. For more information about this error, please see '+
			'http://datatables.net/tn/'+tn;
		}
	
		if ( ! level  ) {
			// Backwards compatibility pre 1.10
			var ext = DataTable.ext;
			var type = ext.sErrMode || ext.errMode;
	
			if ( settings ) {
				_fnCallbackFire( settings, null, 'error', [ settings, tn, msg ] );
			}
	
			if ( type == 'alert' ) {
				alert( msg );
			}
			else if ( type == 'throw' ) {
				throw new Error(msg);
			}
			else if ( typeof type == 'function' ) {
				type( settings, tn, msg );
			}
		}
		else if ( window.console && console.log ) {
			console.log( msg );
		}
	}
	
	
	/**
	 * See if a property is defined on one object, if so assign it to the other object
	 *  @param {object} ret target object
	 *  @param {object} src source object
	 *  @param {string} name property
	 *  @param {string} [mappedName] name to map too - optional, name used if not given
	 *  @memberof DataTable#oApi
	 */
	function _fnMap( ret, src, name, mappedName )
	{
		if ( Array.isArray( name ) ) {
			$.each( name, function (i, val) {
				if ( Array.isArray( val ) ) {
					_fnMap( ret, src, val[0], val[1] );
				}
				else {
					_fnMap( ret, src, val );
				}
			} );
	
			return;
		}
	
		if ( mappedName === undefined ) {
			mappedName = name;
		}
	
		if ( src[name] !== undefined ) {
			ret[mappedName] = src[name];
		}
	}
	
	
	/**
	 * Extend objects - very similar to jQuery.extend, but deep copy objects, and
	 * shallow copy arrays. The reason we need to do this, is that we don't want to
	 * deep copy array init values (such as aaSorting) since the dev wouldn't be
	 * able to override them, but we do want to deep copy arrays.
	 *  @param {object} out Object to extend
	 *  @param {object} extender Object from which the properties will be applied to
	 *      out
	 *  @param {boolean} breakRefs If true, then arrays will be sliced to take an
	 *      independent copy with the exception of the `data` or `aaData` parameters
	 *      if they are present. This is so you can pass in a collection to
	 *      DataTables and have that used as your data source without breaking the
	 *      references
	 *  @returns {object} out Reference, just for convenience - out === the return.
	 *  @memberof DataTable#oApi
	 *  @todo This doesn't take account of arrays inside the deep copied objects.
	 */
	function _fnExtend( out, extender, breakRefs )
	{
		var val;
	
		for ( var prop in extender ) {
			if ( extender.hasOwnProperty(prop) ) {
				val = extender[prop];
	
				if ( $.isPlainObject( val ) ) {
					if ( ! $.isPlainObject( out[prop] ) ) {
						out[prop] = {};
					}
					$.extend( true, out[prop], val );
				}
				else if ( breakRefs && prop !== 'data' && prop !== 'aaData' && Array.isArray(val) ) {
					out[prop] = val.slice();
				}
				else {
					out[prop] = val;
				}
			}
		}
	
		return out;
	}
	
	
	/**
	 * Bind an event handers to allow a click or return key to activate the callback.
	 * This is good for accessibility since a return on the keyboard will have the
	 * same effect as a click, if the element has focus.
	 *  @param {element} n Element to bind the action to
	 *  @param {object} oData Data object to pass to the triggered function
	 *  @param {function} fn Callback function for when the event is triggered
	 *  @memberof DataTable#oApi
	 */
	function _fnBindAction( n, oData, fn )
	{
		$(n)
			.on( 'click.DT', oData, function (e) {
					$(n).trigger('blur'); // Remove focus outline for mouse users
					fn(e);
				} )
			.on( 'keypress.DT', oData, function (e){
					if ( e.which === 13 ) {
						e.preventDefault();
						fn(e);
					}
				} )
			.on( 'selectstart.DT', function () {
					/* Take the brutal approach to cancelling text selection */
					return false;
				} );
	}
	
	
	/**
	 * Register a callback function. Easily allows a callback function to be added to
	 * an array store of callback functions that can then all be called together.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sStore Name of the array storage for the callbacks in oSettings
	 *  @param {function} fn Function to be called back
	 *  @param {string} sName Identifying name for the callback (i.e. a label)
	 *  @memberof DataTable#oApi
	 */
	function _fnCallbackReg( oSettings, sStore, fn, sName )
	{
		if ( fn )
		{
			oSettings[sStore].push( {
				"fn": fn,
				"sName": sName
			} );
		}
	}
	
	
	/**
	 * Fire callback functions and trigger events. Note that the loop over the
	 * callback array store is done backwards! Further note that you do not want to
	 * fire off triggers in time sensitive applications (for example cell creation)
	 * as its slow.
	 *  @param {object} settings dataTables settings object
	 *  @param {string} callbackArr Name of the array storage for the callbacks in
	 *      oSettings
	 *  @param {string} eventName Name of the jQuery custom event to trigger. If
	 *      null no trigger is fired
	 *  @param {array} args Array of arguments to pass to the callback function /
	 *      trigger
	 *  @memberof DataTable#oApi
	 */
	function _fnCallbackFire( settings, callbackArr, eventName, args )
	{
		var ret = [];
	
		if ( callbackArr ) {
			ret = $.map( settings[callbackArr].slice().reverse(), function (val, i) {
				return val.fn.apply( settings.oInstance, args );
			} );
		}
	
		if ( eventName !== null ) {
			var e = $.Event( eventName+'.dt' );
	
			$(settings.nTable).trigger( e, args );
	
			ret.push( e.result );
		}
	
		return ret;
	}
	
	
	function _fnLengthOverflow ( settings )
	{
		var
			start = settings._iDisplayStart,
			end = settings.fnDisplayEnd(),
			len = settings._iDisplayLength;
	
		/* If we have space to show extra rows (backing up from the end point - then do so */
		if ( start >= end )
		{
			start = end - len;
		}
	
		// Keep the start record on the current page
		start -= (start % len);
	
		if ( len === -1 || start < 0 )
		{
			start = 0;
		}
	
		settings._iDisplayStart = start;
	}
	
	
	function _fnRenderer( settings, type )
	{
		var renderer = settings.renderer;
		var host = DataTable.ext.renderer[type];
	
		if ( $.isPlainObject( renderer ) && renderer[type] ) {
			// Specific renderer for this type. If available use it, otherwise use
			// the default.
			return host[renderer[type]] || host._;
		}
		else if ( typeof renderer === 'string' ) {
			// Common renderer - if there is one available for this type use it,
			// otherwise use the default
			return host[renderer] || host._;
		}
	
		// Use the default
		return host._;
	}
	
	
	/**
	 * Detect the data source being used for the table. Used to simplify the code
	 * a little (ajax) and to make it compress a little smaller.
	 *
	 *  @param {object} settings dataTables settings object
	 *  @returns {string} Data source
	 *  @memberof DataTable#oApi
	 */
	function _fnDataSource ( settings )
	{
		if ( settings.oFeatures.bServerSide ) {
			return 'ssp';
		}
		else if ( settings.ajax || settings.sAjaxSource ) {
			return 'ajax';
		}
		return 'dom';
	}
	
	
	
	
	/**
	 * Computed structure of the DataTables API, defined by the options passed to
	 * `DataTable.Api.register()` when building the API.
	 *
	 * The structure is built in order to speed creation and extension of the Api
	 * objects since the extensions are effectively pre-parsed.
	 *
	 * The array is an array of objects with the following structure, where this
	 * base array represents the Api prototype base:
	 *
	 *     [
	 *       {
	 *         name:      'data'                -- string   - Property name
	 *         val:       function () {},       -- function - Api method (or undefined if just an object
	 *         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	 *         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	 *       },
	 *       {
	 *         name:     'row'
	 *         val:       {},
	 *         methodExt: [ ... ],
	 *         propExt:   [
	 *           {
	 *             name:      'data'
	 *             val:       function () {},
	 *             methodExt: [ ... ],
	 *             propExt:   [ ... ]
	 *           },
	 *           ...
	 *         ]
	 *       }
	 *     ]
	 *
	 * @type {Array}
	 * @ignore
	 */
	var __apiStruct = [];
	
	
	/**
	 * `Array.prototype` reference.
	 *
	 * @type object
	 * @ignore
	 */
	var __arrayProto = Array.prototype;
	
	
	/**
	 * Abstraction for `context` parameter of the `Api` constructor to allow it to
	 * take several different forms for ease of use.
	 *
	 * Each of the input parameter types will be converted to a DataTables settings
	 * object where possible.
	 *
	 * @param  {string|node|jQuery|object} mixed DataTable identifier. Can be one
	 *   of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 *   * `DataTables.Api` - API instance
	 * @return {array|null} Matching DataTables settings objects. `null` or
	 *   `undefined` is returned if no matching DataTable is found.
	 * @ignore
	 */
	var _toSettings = function ( mixed )
	{
		var idx, jq;
		var settings = DataTable.settings;
		var tables = $.map( settings, function (el, i) {
			return el.nTable;
		} );
	
		if ( ! mixed ) {
			return [];
		}
		else if ( mixed.nTable && mixed.oApi ) {
			// DataTables settings object
			return [ mixed ];
		}
		else if ( mixed.nodeName && mixed.nodeName.toLowerCase() === 'table' ) {
			// Table node
			idx = $.inArray( mixed, tables );
			return idx !== -1 ? [ settings[idx] ] : null;
		}
		else if ( mixed && typeof mixed.settings === 'function' ) {
			return mixed.settings().toArray();
		}
		else if ( typeof mixed === 'string' ) {
			// jQuery selector
			jq = $(mixed);
		}
		else if ( mixed instanceof $ ) {
			// jQuery object (also DataTables instance)
			jq = mixed;
		}
	
		if ( jq ) {
			return jq.map( function(i) {
				idx = $.inArray( this, tables );
				return idx !== -1 ? settings[idx] : null;
			} ).toArray();
		}
	};
	
	
	/**
	 * DataTables API class - used to control and interface with  one or more
	 * DataTables enhanced tables.
	 *
	 * The API class is heavily based on jQuery, presenting a chainable interface
	 * that you can use to interact with tables. Each instance of the API class has
	 * a "context" - i.e. the tables that it will operate on. This could be a single
	 * table, all tables on a page or a sub-set thereof.
	 *
	 * Additionally the API is designed to allow you to easily work with the data in
	 * the tables, retrieving and manipulating it as required. This is done by
	 * presenting the API class as an array like interface. The contents of the
	 * array depend upon the actions requested by each method (for example
	 * `rows().nodes()` will return an array of nodes, while `rows().data()` will
	 * return an array of objects or arrays depending upon your table's
	 * configuration). The API object has a number of array like methods (`push`,
	 * `pop`, `reverse` etc) as well as additional helper methods (`each`, `pluck`,
	 * `unique` etc) to assist your working with the data held in a table.
	 *
	 * Most methods (those which return an Api instance) are chainable, which means
	 * the return from a method call also has all of the methods available that the
	 * top level object had. For example, these two calls are equivalent:
	 *
	 *     // Not chained
	 *     api.row.add( {...} );
	 *     api.draw();
	 *
	 *     // Chained
	 *     api.row.add( {...} ).draw();
	 *
	 * @class DataTable.Api
	 * @param {array|object|string|jQuery} context DataTable identifier. This is
	 *   used to define which DataTables enhanced tables this API will operate on.
	 *   Can be one of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 * @param {array} [data] Data to initialise the Api instance with.
	 *
	 * @example
	 *   // Direct initialisation during DataTables construction
	 *   var api = $('#example').DataTable();
	 *
	 * @example
	 *   // Initialisation using a DataTables jQuery object
	 *   var api = $('#example').dataTable().api();
	 *
	 * @example
	 *   // Initialisation as a constructor
	 *   var api = new $.fn.DataTable.Api( 'table.dataTable' );
	 */
	_Api = function ( context, data )
	{
		if ( ! (this instanceof _Api) ) {
			return new _Api( context, data );
		}
	
		var settings = [];
		var ctxSettings = function ( o ) {
			var a = _toSettings( o );
			if ( a ) {
				settings.push.apply( settings, a );
			}
		};
	
		if ( Array.isArray( context ) ) {
			for ( var i=0, ien=context.length ; i<ien ; i++ ) {
				ctxSettings( context[i] );
			}
		}
		else {
			ctxSettings( context );
		}
	
		// Remove duplicates
		this.context = _unique( settings );
	
		// Initial data
		if ( data ) {
			$.merge( this, data );
		}
	
		// selector
		this.selector = {
			rows: null,
			cols: null,
			opts: null
		};
	
		_Api.extend( this, this, __apiStruct );
	};
	
	DataTable.Api = _Api;
	
	// Don't destroy the existing prototype, just extend it. Required for jQuery 2's
	// isPlainObject.
	$.extend( _Api.prototype, {
		any: function ()
		{
			return this.count() !== 0;
		},
	
	
		concat:  __arrayProto.concat,
	
	
		context: [], // array of table settings objects
	
	
		count: function ()
		{
			return this.flatten().length;
		},
	
	
		each: function ( fn )
		{
			for ( var i=0, ien=this.length ; i<ien; i++ ) {
				fn.call( this, this[i], i, this );
			}
	
			return this;
		},
	
	
		eq: function ( idx )
		{
			var ctx = this.context;
	
			return ctx.length > idx ?
				new _Api( ctx[idx], this[idx] ) :
				null;
		},
	
	
		filter: function ( fn )
		{
			var a = [];
	
			if ( __arrayProto.filter ) {
				a = __arrayProto.filter.call( this, fn, this );
			}
			else {
				// Compatibility for browsers without EMCA-252-5 (JS 1.6)
				for ( var i=0, ien=this.length ; i<ien ; i++ ) {
					if ( fn.call( this, this[i], i, this ) ) {
						a.push( this[i] );
					}
				}
			}
	
			return new _Api( this.context, a );
		},
	
	
		flatten: function ()
		{
			var a = [];
			return new _Api( this.context, a.concat.apply( a, this.toArray() ) );
		},
	
	
		join:    __arrayProto.join,
	
	
		indexOf: __arrayProto.indexOf || function (obj, start)
		{
			for ( var i=(start || 0), ien=this.length ; i<ien ; i++ ) {
				if ( this[i] === obj ) {
					return i;
				}
			}
			return -1;
		},
	
		iterator: function ( flatten, type, fn, alwaysNew ) {
			var
				a = [], ret,
				i, ien, j, jen,
				context = this.context,
				rows, items, item,
				selector = this.selector;
	
			// Argument shifting
			if ( typeof flatten === 'string' ) {
				alwaysNew = fn;
				fn = type;
				type = flatten;
				flatten = false;
			}
	
			for ( i=0, ien=context.length ; i<ien ; i++ ) {
				var apiInst = new _Api( context[i] );
	
				if ( type === 'table' ) {
					ret = fn.call( apiInst, context[i], i );
	
					if ( ret !== undefined ) {
						a.push( ret );
					}
				}
				else if ( type === 'columns' || type === 'rows' ) {
					// this has same length as context - one entry for each table
					ret = fn.call( apiInst, context[i], this[i], i );
	
					if ( ret !== undefined ) {
						a.push( ret );
					}
				}
				else if ( type === 'column' || type === 'column-rows' || type === 'row' || type === 'cell' ) {
					// columns and rows share the same structure.
					// 'this' is an array of column indexes for each context
					items = this[i];
	
					if ( type === 'column-rows' ) {
						rows = _selector_row_indexes( context[i], selector.opts );
					}
	
					for ( j=0, jen=items.length ; j<jen ; j++ ) {
						item = items[j];
	
						if ( type === 'cell' ) {
							ret = fn.call( apiInst, context[i], item.row, item.column, i, j );
						}
						else {
							ret = fn.call( apiInst, context[i], item, i, j, rows );
						}
	
						if ( ret !== undefined ) {
							a.push( ret );
						}
					}
				}
			}
	
			if ( a.length || alwaysNew ) {
				var api = new _Api( context, flatten ? a.concat.apply( [], a ) : a );
				var apiSelector = api.selector;
				apiSelector.rows = selector.rows;
				apiSelector.cols = selector.cols;
				apiSelector.opts = selector.opts;
				return api;
			}
			return this;
		},
	
	
		lastIndexOf: __arrayProto.lastIndexOf || function (obj, start)
		{
			// Bit cheeky...
			return this.indexOf.apply( this.toArray.reverse(), arguments );
		},
	
	
		length:  0,
	
	
		map: function ( fn )
		{
			var a = [];
	
			if ( __arrayProto.map ) {
				a = __arrayProto.map.call( this, fn, this );
			}
			else {
				// Compatibility for browsers without EMCA-252-5 (JS 1.6)
				for ( var i=0, ien=this.length ; i<ien ; i++ ) {
					a.push( fn.call( this, this[i], i ) );
				}
			}
	
			return new _Api( this.context, a );
		},
	
	
		pluck: function ( prop )
		{
			let fn = DataTable.util.get(prop);
	
			return this.map( function ( el ) {
				return fn(el);
			} );
		},
	
		pop:     __arrayProto.pop,
	
	
		push:    __arrayProto.push,
	
	
		// Does not return an API instance
		reduce: __arrayProto.reduce || function ( fn, init )
		{
			return _fnReduce( this, fn, init, 0, this.length, 1 );
		},
	
	
		reduceRight: __arrayProto.reduceRight || function ( fn, init )
		{
			return _fnReduce( this, fn, init, this.length-1, -1, -1 );
		},
	
	
		reverse: __arrayProto.reverse,
	
	
		// Object with rows, columns and opts
		selector: null,
	
	
		shift:   __arrayProto.shift,
	
	
		slice: function () {
			return new _Api( this.context, this );
		},
	
	
		sort:    __arrayProto.sort, // ? name - order?
	
	
		splice:  __arrayProto.splice,
	
	
		toArray: function ()
		{
			return __arrayProto.slice.call( this );
		},
	
	
		to$: function ()
		{
			return $( this );
		},
	
	
		toJQuery: function ()
		{
			return $( this );
		},
	
	
		unique: function ()
		{
			return new _Api( this.context, _unique(this) );
		},
	
	
		unshift: __arrayProto.unshift
	} );
	
	
	_Api.extend = function ( scope, obj, ext )
	{
		// Only extend API instances and static properties of the API
		if ( ! ext.length || ! obj || ( ! (obj instanceof _Api) && ! obj.__dt_wrapper ) ) {
			return;
		}
	
		var
			i, ien,
			struct,
			methodScoping = function ( scope, fn, struc ) {
				return function () {
					var ret = fn.apply( scope, arguments );
	
					// Method extension
					_Api.extend( ret, ret, struc.methodExt );
					return ret;
				};
			};
	
		for ( i=0, ien=ext.length ; i<ien ; i++ ) {
			struct = ext[i];
	
			// Value
			obj[ struct.name ] = struct.type === 'function' ?
				methodScoping( scope, struct.val, struct ) :
				struct.type === 'object' ?
					{} :
					struct.val;
	
			obj[ struct.name ].__dt_wrapper = true;
	
			// Property extension
			_Api.extend( scope, obj[ struct.name ], struct.propExt );
		}
	};
	
	
	// @todo - Is there need for an augment function?
	// _Api.augment = function ( inst, name )
	// {
	// 	// Find src object in the structure from the name
	// 	var parts = name.split('.');
	
	// 	_Api.extend( inst, obj );
	// };
	
	
	//     [
	//       {
	//         name:      'data'                -- string   - Property name
	//         val:       function () {},       -- function - Api method (or undefined if just an object
	//         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	//         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	//       },
	//       {
	//         name:     'row'
	//         val:       {},
	//         methodExt: [ ... ],
	//         propExt:   [
	//           {
	//             name:      'data'
	//             val:       function () {},
	//             methodExt: [ ... ],
	//             propExt:   [ ... ]
	//           },
	//           ...
	//         ]
	//       }
	//     ]
	
	_Api.register = _api_register = function ( name, val )
	{
		if ( Array.isArray( name ) ) {
			for ( var j=0, jen=name.length ; j<jen ; j++ ) {
				_Api.register( name[j], val );
			}
			return;
		}
	
		var
			i, ien,
			heir = name.split('.'),
			struct = __apiStruct,
			key, method;
	
		var find = function ( src, name ) {
			for ( var i=0, ien=src.length ; i<ien ; i++ ) {
				if ( src[i].name === name ) {
					return src[i];
				}
			}
			return null;
		};
	
		for ( i=0, ien=heir.length ; i<ien ; i++ ) {
			method = heir[i].indexOf('()') !== -1;
			key = method ?
				heir[i].replace('()', '') :
				heir[i];
	
			var src = find( struct, key );
			if ( ! src ) {
				src = {
					name:      key,
					val:       {},
					methodExt: [],
					propExt:   [],
					type:      'object'
				};
				struct.push( src );
			}
	
			if ( i === ien-1 ) {
				src.val = val;
				src.type = typeof val === 'function' ?
					'function' :
					$.isPlainObject( val ) ?
						'object' :
						'other';
			}
			else {
				struct = method ?
					src.methodExt :
					src.propExt;
			}
		}
	};
	
	_Api.registerPlural = _api_registerPlural = function ( pluralName, singularName, val ) {
		_Api.register( pluralName, val );
	
		_Api.register( singularName, function () {
			var ret = val.apply( this, arguments );
	
			if ( ret === this ) {
				// Returned item is the API instance that was passed in, return it
				return this;
			}
			else if ( ret instanceof _Api ) {
				// New API instance returned, want the value from the first item
				// in the returned array for the singular result.
				return ret.length ?
					Array.isArray( ret[0] ) ?
						new _Api( ret.context, ret[0] ) : // Array results are 'enhanced'
						ret[0] :
					undefined;
			}
	
			// Non-API return - just fire it back
			return ret;
		} );
	};
	
	
	/**
	 * Selector for HTML tables. Apply the given selector to the give array of
	 * DataTables settings objects.
	 *
	 * @param {string|integer} [selector] jQuery selector string or integer
	 * @param  {array} Array of DataTables settings objects to be filtered
	 * @return {array}
	 * @ignore
	 */
	var __table_selector = function ( selector, a )
	{
		if ( Array.isArray(selector) ) {
			return $.map( selector, function (item) {
				return __table_selector(item, a);
			} );
		}
	
		// Integer is used to pick out a table by index
		if ( typeof selector === 'number' ) {
			return [ a[ selector ] ];
		}
	
		// Perform a jQuery selector on the table nodes
		var nodes = $.map( a, function (el, i) {
			return el.nTable;
		} );
	
		return $(nodes)
			.filter( selector )
			.map( function (i) {
				// Need to translate back from the table node to the settings
				var idx = $.inArray( this, nodes );
				return a[ idx ];
			} )
			.toArray();
	};
	
	
	
	/**
	 * Context selector for the API's context (i.e. the tables the API instance
	 * refers to.
	 *
	 * @name    DataTable.Api#tables
	 * @param {string|integer} [selector] Selector to pick which tables the iterator
	 *   should operate on. If not given, all tables in the current context are
	 *   used. This can be given as a jQuery selector (for example `':gt(0)'`) to
	 *   select multiple tables or as an integer to select a single table.
	 * @returns {DataTable.Api} Returns a new API instance if a selector is given.
	 */
	_api_register( 'tables()', function ( selector ) {
		// A new instance is created if there was a selector specified
		return selector !== undefined && selector !== null ?
			new _Api( __table_selector( selector, this.context ) ) :
			this;
	} );
	
	
	_api_register( 'table()', function ( selector ) {
		var tables = this.tables( selector );
		var ctx = tables.context;
	
		// Truncate to the first matched table
		return ctx.length ?
			new _Api( ctx[0] ) :
			tables;
	} );
	
	
	_api_registerPlural( 'tables().nodes()', 'table().node()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTable;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().body()', 'table().body()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTBody;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().header()', 'table().header()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTHead;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().footer()', 'table().footer()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTFoot;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().containers()', 'table().container()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTableWrapper;
		}, 1 );
	} );
	
	
	
	/**
	 * Redraw the tables in the current context.
	 */
	_api_register( 'draw()', function ( paging ) {
		return this.iterator( 'table', function ( settings ) {
			if ( paging === 'page' ) {
				_fnDraw( settings );
			}
			else {
				if ( typeof paging === 'string' ) {
					paging = paging === 'full-hold' ?
						false :
						true;
				}
	
				_fnReDraw( settings, paging===false );
			}
		} );
	} );
	
	
	
	/**
	 * Get the current page index.
	 *
	 * @return {integer} Current page index (zero based)
	 *//**
	 * Set the current page.
	 *
	 * Note that if you attempt to show a page which does not exist, DataTables will
	 * not throw an error, but rather reset the paging.
	 *
	 * @param {integer|string} action The paging action to take. This can be one of:
	 *  * `integer` - The page index to jump to
	 *  * `string` - An action to take:
	 *    * `first` - Jump to first page.
	 *    * `next` - Jump to the next page
	 *    * `previous` - Jump to previous page
	 *    * `last` - Jump to the last page.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'page()', function ( action ) {
		if ( action === undefined ) {
			return this.page.info().page; // not an expensive call
		}
	
		// else, have an action to take on all tables
		return this.iterator( 'table', function ( settings ) {
			_fnPageChange( settings, action );
		} );
	} );
	
	
	/**
	 * Paging information for the first table in the current context.
	 *
	 * If you require paging information for another table, use the `table()` method
	 * with a suitable selector.
	 *
	 * @return {object} Object with the following properties set:
	 *  * `page` - Current page index (zero based - i.e. the first page is `0`)
	 *  * `pages` - Total number of pages
	 *  * `start` - Display index for the first record shown on the current page
	 *  * `end` - Display index for the last record shown on the current page
	 *  * `length` - Display length (number of records). Note that generally `start
	 *    + length = end`, but this is not always true, for example if there are
	 *    only 2 records to show on the final page, with a length of 10.
	 *  * `recordsTotal` - Full data set length
	 *  * `recordsDisplay` - Data set length once the current filtering criterion
	 *    are applied.
	 */
	_api_register( 'page.info()', function ( action ) {
		if ( this.context.length === 0 ) {
			return undefined;
		}
	
		var
			settings   = this.context[0],
			start      = settings._iDisplayStart,
			len        = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1,
			visRecords = settings.fnRecordsDisplay(),
			all        = len === -1;
	
		return {
			"page":           all ? 0 : Math.floor( start / len ),
			"pages":          all ? 1 : Math.ceil( visRecords / len ),
			"start":          start,
			"end":            settings.fnDisplayEnd(),
			"length":         len,
			"recordsTotal":   settings.fnRecordsTotal(),
			"recordsDisplay": visRecords,
			"serverSide":     _fnDataSource( settings ) === 'ssp'
		};
	} );
	
	
	/**
	 * Get the current page length.
	 *
	 * @return {integer} Current page length. Note `-1` indicates that all records
	 *   are to be shown.
	 *//**
	 * Set the current page length.
	 *
	 * @param {integer} Page length to set. Use `-1` to show all records.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'page.len()', function ( len ) {
		// Note that we can't call this function 'length()' because `length`
		// is a Javascript property of functions which defines how many arguments
		// the function expects.
		if ( len === undefined ) {
			return this.context.length !== 0 ?
				this.context[0]._iDisplayLength :
				undefined;
		}
	
		// else, set the page length
		return this.iterator( 'table', function ( settings ) {
			_fnLengthChange( settings, len );
		} );
	} );
	
	
	
	var __reload = function ( settings, holdPosition, callback ) {
		// Use the draw event to trigger a callback
		if ( callback ) {
			var api = new _Api( settings );
	
			api.one( 'draw', function () {
				callback( api.ajax.json() );
			} );
		}
	
		if ( _fnDataSource( settings ) == 'ssp' ) {
			_fnReDraw( settings, holdPosition );
		}
		else {
			_fnProcessingDisplay( settings, true );
	
			// Cancel an existing request
			var xhr = settings.jqXHR;
			if ( xhr && xhr.readyState !== 4 ) {
				xhr.abort();
			}
	
			// Trigger xhr
			_fnBuildAjax( settings, [], function( json ) {
				_fnClearTable( settings );
	
				var data = _fnAjaxDataSrc( settings, json );
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					_fnAddData( settings, data[i] );
				}
	
				_fnReDraw( settings, holdPosition );
				_fnProcessingDisplay( settings, false );
			} );
		}
	};
	
	
	/**
	 * Get the JSON response from the last Ajax request that DataTables made to the
	 * server. Note that this returns the JSON from the first table in the current
	 * context.
	 *
	 * @return {object} JSON received from the server.
	 */
	_api_register( 'ajax.json()', function () {
		var ctx = this.context;
	
		if ( ctx.length > 0 ) {
			return ctx[0].json;
		}
	
		// else return undefined;
	} );
	
	
	/**
	 * Get the data submitted in the last Ajax request
	 */
	_api_register( 'ajax.params()', function () {
		var ctx = this.context;
	
		if ( ctx.length > 0 ) {
			return ctx[0].oAjaxData;
		}
	
		// else return undefined;
	} );
	
	
	/**
	 * Reload tables from the Ajax data source. Note that this function will
	 * automatically re-draw the table when the remote data has been loaded.
	 *
	 * @param {boolean} [reset=true] Reset (default) or hold the current paging
	 *   position. A full re-sort and re-filter is performed when this method is
	 *   called, which is why the pagination reset is the default action.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.reload()', function ( callback, resetPaging ) {
		return this.iterator( 'table', function (settings) {
			__reload( settings, resetPaging===false, callback );
		} );
	} );
	
	
	/**
	 * Get the current Ajax URL. Note that this returns the URL from the first
	 * table in the current context.
	 *
	 * @return {string} Current Ajax source URL
	 *//**
	 * Set the Ajax URL. Note that this will set the URL for all tables in the
	 * current context.
	 *
	 * @param {string} url URL to set.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.url()', function ( url ) {
		var ctx = this.context;
	
		if ( url === undefined ) {
			// get
			if ( ctx.length === 0 ) {
				return undefined;
			}
			ctx = ctx[0];
	
			return ctx.ajax ?
				$.isPlainObject( ctx.ajax ) ?
					ctx.ajax.url :
					ctx.ajax :
				ctx.sAjaxSource;
		}
	
		// set
		return this.iterator( 'table', function ( settings ) {
			if ( $.isPlainObject( settings.ajax ) ) {
				settings.ajax.url = url;
			}
			else {
				settings.ajax = url;
			}
			// No need to consider sAjaxSource here since DataTables gives priority
			// to `ajax` over `sAjaxSource`. So setting `ajax` here, renders any
			// value of `sAjaxSource` redundant.
		} );
	} );
	
	
	/**
	 * Load data from the newly set Ajax URL. Note that this method is only
	 * available when `ajax.url()` is used to set a URL. Additionally, this method
	 * has the same effect as calling `ajax.reload()` but is provided for
	 * convenience when setting a new URL. Like `ajax.reload()` it will
	 * automatically redraw the table once the remote data has been loaded.
	 *
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.url().load()', function ( callback, resetPaging ) {
		// Same as a reload, but makes sense to present it for easy access after a
		// url change
		return this.iterator( 'table', function ( ctx ) {
			__reload( ctx, resetPaging===false, callback );
		} );
	} );
	
	
	
	
	var _selector_run = function ( type, selector, selectFn, settings, opts )
	{
		var
			out = [], res,
			a, i, ien, j, jen,
			selectorType = typeof selector;
	
		// Can't just check for isArray here, as an API or jQuery instance might be
		// given with their array like look
		if ( ! selector || selectorType === 'string' || selectorType === 'function' || selector.length === undefined ) {
			selector = [ selector ];
		}
	
		for ( i=0, ien=selector.length ; i<ien ; i++ ) {
			// Only split on simple strings - complex expressions will be jQuery selectors
			a = selector[i] && selector[i].split && ! selector[i].match(/[\[\(:]/) ?
				selector[i].split(',') :
				[ selector[i] ];
	
			for ( j=0, jen=a.length ; j<jen ; j++ ) {
				res = selectFn( typeof a[j] === 'string' ? (a[j]).trim() : a[j] );
	
				if ( res && res.length ) {
					out = out.concat( res );
				}
			}
		}
	
		// selector extensions
		var ext = _ext.selector[ type ];
		if ( ext.length ) {
			for ( i=0, ien=ext.length ; i<ien ; i++ ) {
				out = ext[i]( settings, opts, out );
			}
		}
	
		return _unique( out );
	};
	
	
	var _selector_opts = function ( opts )
	{
		if ( ! opts ) {
			opts = {};
		}
	
		// Backwards compatibility for 1.9- which used the terminology filter rather
		// than search
		if ( opts.filter && opts.search === undefined ) {
			opts.search = opts.filter;
		}
	
		return $.extend( {
			search: 'none',
			order: 'current',
			page: 'all'
		}, opts );
	};
	
	
	var _selector_first = function ( inst )
	{
		// Reduce the API instance to the first item found
		for ( var i=0, ien=inst.length ; i<ien ; i++ ) {
			if ( inst[i].length > 0 ) {
				// Assign the first element to the first item in the instance
				// and truncate the instance and context
				inst[0] = inst[i];
				inst[0].length = 1;
				inst.length = 1;
				inst.context = [ inst.context[i] ];
	
				return inst;
			}
		}
	
		// Not found - return an empty instance
		inst.length = 0;
		return inst;
	};
	
	
	var _selector_row_indexes = function ( settings, opts )
	{
		var
			i, ien, tmp, a=[],
			displayFiltered = settings.aiDisplay,
			displayMaster = settings.aiDisplayMaster;
	
		var
			search = opts.search,  // none, applied, removed
			order  = opts.order,   // applied, current, index (original - compatibility with 1.9)
			page   = opts.page;    // all, current
	
		if ( _fnDataSource( settings ) == 'ssp' ) {
			// In server-side processing mode, most options are irrelevant since
			// rows not shown don't exist and the index order is the applied order
			// Removed is a special case - for consistency just return an empty
			// array
			return search === 'removed' ?
				[] :
				_range( 0, displayMaster.length );
		}
		else if ( page == 'current' ) {
			// Current page implies that order=current and filter=applied, since it is
			// fairly senseless otherwise, regardless of what order and search actually
			// are
			for ( i=settings._iDisplayStart, ien=settings.fnDisplayEnd() ; i<ien ; i++ ) {
				a.push( displayFiltered[i] );
			}
		}
		else if ( order == 'current' || order == 'applied' ) {
			if ( search == 'none') {
				a = displayMaster.slice();
			}
			else if ( search == 'applied' ) {
				a = displayFiltered.slice();
			}
			else if ( search == 'removed' ) {
				// O(n+m) solution by creating a hash map
				var displayFilteredMap = {};
	
				for ( var i=0, ien=displayFiltered.length ; i<ien ; i++ ) {
					displayFilteredMap[displayFiltered[i]] = null;
				}
	
				a = $.map( displayMaster, function (el) {
					return ! displayFilteredMap.hasOwnProperty(el) ?
						el :
						null;
				} );
			}
		}
		else if ( order == 'index' || order == 'original' ) {
			for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
				if ( search == 'none' ) {
					a.push( i );
				}
				else { // applied | removed
					tmp = $.inArray( i, displayFiltered );
	
					if ((tmp === -1 && search == 'removed') ||
						(tmp >= 0   && search == 'applied') )
					{
						a.push( i );
					}
				}
			}
		}
	
		return a;
	};
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Rows
	 *
	 * {}          - no selector - use all available rows
	 * {integer}   - row aoData index
	 * {node}      - TR node
	 * {string}    - jQuery selector to apply to the TR elements
	 * {array}     - jQuery array of nodes, or simply an array of TR nodes
	 *
	 */
	var __row_selector = function ( settings, selector, opts )
	{
		var rows;
		var run = function ( sel ) {
			var selInt = _intVal( sel );
			var i, ien;
			var aoData = settings.aoData;
	
			// Short cut - selector is a number and no options provided (default is
			// all records, so no need to check if the index is in there, since it
			// must be - dev error if the index doesn't exist).
			if ( selInt !== null && ! opts ) {
				return [ selInt ];
			}
	
			if ( ! rows ) {
				rows = _selector_row_indexes( settings, opts );
			}
	
			if ( selInt !== null && $.inArray( selInt, rows ) !== -1 ) {
				// Selector - integer
				return [ selInt ];
			}
			else if ( sel === null || sel === undefined || sel === '' ) {
				// Selector - none
				return rows;
			}
	
			// Selector - function
			if ( typeof sel === 'function' ) {
				return $.map( rows, function (idx) {
					var row = aoData[ idx ];
					return sel( idx, row._aData, row.nTr ) ? idx : null;
				} );
			}
	
			// Selector - node
			if ( sel.nodeName ) {
				var rowIdx = sel._DT_RowIndex;  // Property added by DT for fast lookup
				var cellIdx = sel._DT_CellIndex;
	
				if ( rowIdx !== undefined ) {
					// Make sure that the row is actually still present in the table
					return aoData[ rowIdx ] && aoData[ rowIdx ].nTr === sel ?
						[ rowIdx ] :
						[];
				}
				else if ( cellIdx ) {
					return aoData[ cellIdx.row ] && aoData[ cellIdx.row ].nTr === sel.parentNode ?
						[ cellIdx.row ] :
						[];
				}
				else {
					var host = $(sel).closest('*[data-dt-row]');
					return host.length ?
						[ host.data('dt-row') ] :
						[];
				}
			}
	
			// ID selector. Want to always be able to select rows by id, regardless
			// of if the tr element has been created or not, so can't rely upon
			// jQuery here - hence a custom implementation. This does not match
			// Sizzle's fast selector or HTML4 - in HTML5 the ID can be anything,
			// but to select it using a CSS selector engine (like Sizzle or
			// querySelect) it would need to need to be escaped for some characters.
			// DataTables simplifies this for row selectors since you can select
			// only a row. A # indicates an id any anything that follows is the id -
			// unescaped.
			if ( typeof sel === 'string' && sel.charAt(0) === '#' ) {
				// get row index from id
				var rowObj = settings.aIds[ sel.replace( /^#/, '' ) ];
				if ( rowObj !== undefined ) {
					return [ rowObj.idx ];
				}
	
				// need to fall through to jQuery in case there is DOM id that
				// matches
			}
			
			// Get nodes in the order from the `rows` array with null values removed
			var nodes = _removeEmpty(
				_pluck_order( settings.aoData, rows, 'nTr' )
			);
	
			// Selector - jQuery selector string, array of nodes or jQuery object/
			// As jQuery's .filter() allows jQuery objects to be passed in filter,
			// it also allows arrays, so this will cope with all three options
			return $(nodes)
				.filter( sel )
				.map( function () {
					return this._DT_RowIndex;
				} )
				.toArray();
		};
	
		return _selector_run( 'row', selector, run, settings, opts );
	};
	
	
	_api_register( 'rows()', function ( selector, opts ) {
		// argument shifting
		if ( selector === undefined ) {
			selector = '';
		}
		else if ( $.isPlainObject( selector ) ) {
			opts = selector;
			selector = '';
		}
	
		opts = _selector_opts( opts );
	
		var inst = this.iterator( 'table', function ( settings ) {
			return __row_selector( settings, selector, opts );
		}, 1 );
	
		// Want argument shifting here and in __row_selector?
		inst.selector.rows = selector;
		inst.selector.opts = opts;
	
		return inst;
	} );
	
	_api_register( 'rows().nodes()', function () {
		return this.iterator( 'row', function ( settings, row ) {
			return settings.aoData[ row ].nTr || undefined;
		}, 1 );
	} );
	
	_api_register( 'rows().data()', function () {
		return this.iterator( true, 'rows', function ( settings, rows ) {
			return _pluck_order( settings.aoData, rows, '_aData' );
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().cache()', 'row().cache()', function ( type ) {
		return this.iterator( 'row', function ( settings, row ) {
			var r = settings.aoData[ row ];
			return type === 'search' ? r._aFilterData : r._aSortData;
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().invalidate()', 'row().invalidate()', function ( src ) {
		return this.iterator( 'row', function ( settings, row ) {
			_fnInvalidate( settings, row, src );
		} );
	} );
	
	_api_registerPlural( 'rows().indexes()', 'row().index()', function () {
		return this.iterator( 'row', function ( settings, row ) {
			return row;
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().ids()', 'row().id()', function ( hash ) {
		var a = [];
		var context = this.context;
	
		// `iterator` will drop undefined values, but in this case we want them
		for ( var i=0, ien=context.length ; i<ien ; i++ ) {
			for ( var j=0, jen=this[i].length ; j<jen ; j++ ) {
				var id = context[i].rowIdFn( context[i].aoData[ this[i][j] ]._aData );
				a.push( (hash === true ? '#' : '' )+ id );
			}
		}
	
		return new _Api( context, a );
	} );
	
	_api_registerPlural( 'rows().remove()', 'row().remove()', function () {
		var that = this;
	
		this.iterator( 'row', function ( settings, row, thatIdx ) {
			var data = settings.aoData;
			var rowData = data[ row ];
			var i, ien, j, jen;
			var loopRow, loopCells;
	
			data.splice( row, 1 );
	
			// Update the cached indexes
			for ( i=0, ien=data.length ; i<ien ; i++ ) {
				loopRow = data[i];
				loopCells = loopRow.anCells;
	
				// Rows
				if ( loopRow.nTr !== null ) {
					loopRow.nTr._DT_RowIndex = i;
				}
	
				// Cells
				if ( loopCells !== null ) {
					for ( j=0, jen=loopCells.length ; j<jen ; j++ ) {
						loopCells[j]._DT_CellIndex.row = i;
					}
				}
			}
	
			// Delete from the display arrays
			_fnDeleteIndex( settings.aiDisplayMaster, row );
			_fnDeleteIndex( settings.aiDisplay, row );
			_fnDeleteIndex( that[ thatIdx ], row, false ); // maintain local indexes
	
			// For server-side processing tables - subtract the deleted row from the count
			if ( settings._iRecordsDisplay > 0 ) {
				settings._iRecordsDisplay--;
			}
	
			// Check for an 'overflow' they case for displaying the table
			_fnLengthOverflow( settings );
	
			// Remove the row's ID reference if there is one
			var id = settings.rowIdFn( rowData._aData );
			if ( id !== undefined ) {
				delete settings.aIds[ id ];
			}
		} );
	
		this.iterator( 'table', function ( settings ) {
			for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
				settings.aoData[i].idx = i;
			}
		} );
	
		return this;
	} );
	
	
	_api_register( 'rows.add()', function ( rows ) {
		var newRows = this.iterator( 'table', function ( settings ) {
				var row, i, ien;
				var out = [];
	
				for ( i=0, ien=rows.length ; i<ien ; i++ ) {
					row = rows[i];
	
					if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
						out.push( _fnAddTr( settings, row )[0] );
					}
					else {
						out.push( _fnAddData( settings, row ) );
					}
				}
	
				return out;
			}, 1 );
	
		// Return an Api.rows() extended instance, so rows().nodes() etc can be used
		var modRows = this.rows( -1 );
		modRows.pop();
		$.merge( modRows, newRows );
	
		return modRows;
	} );
	
	
	
	
	
	/**
	 *
	 */
	_api_register( 'row()', function ( selector, opts ) {
		return _selector_first( this.rows( selector, opts ) );
	} );
	
	
	_api_register( 'row().data()', function ( data ) {
		var ctx = this.context;
	
		if ( data === undefined ) {
			// Get
			return ctx.length && this.length ?
				ctx[0].aoData[ this[0] ]._aData :
				undefined;
		}
	
		// Set
		var row = ctx[0].aoData[ this[0] ];
		row._aData = data;
	
		// If the DOM has an id, and the data source is an array
		if ( Array.isArray( data ) && row.nTr && row.nTr.id ) {
			_fnSetObjectDataFn( ctx[0].rowId )( data, row.nTr.id );
		}
	
		// Automatically invalidate
		_fnInvalidate( ctx[0], this[0], 'data' );
	
		return this;
	} );
	
	
	_api_register( 'row().node()', function () {
		var ctx = this.context;
	
		return ctx.length && this.length ?
			ctx[0].aoData[ this[0] ].nTr || null :
			null;
	} );
	
	
	_api_register( 'row.add()', function ( row ) {
		// Allow a jQuery object to be passed in - only a single row is added from
		// it though - the first element in the set
		if ( row instanceof $ && row.length ) {
			row = row[0];
		}
	
		var rows = this.iterator( 'table', function ( settings ) {
			if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
				return _fnAddTr( settings, row )[0];
			}
			return _fnAddData( settings, row );
		} );
	
		// Return an Api.rows() extended instance, with the newly added row selected
		return this.row( rows[0] );
	} );
	
	
	$(document).on('plugin-init.dt', function (e, context) {
		var api = new _Api( context );
		
		const namespace = 'on-plugin-init';
		const stateSaveParamsEvent = `stateSaveParams.${namespace}`;
		const destroyEvent = `destroy.${namespace}`;
	
		api.on( stateSaveParamsEvent, function ( e, settings, d ) {
			// This could be more compact with the API, but it is a lot faster as a simple
			// internal loop
			var idFn = settings.rowIdFn;
			var data = settings.aoData;
			var ids = [];
	
			for (var i=0 ; i<data.length ; i++) {
				if (data[i]._detailsShow) {
					ids.push( '#' + idFn(data[i]._aData) );
				}
			}
	
			d.childRows = ids;
		});
	
		api.on( destroyEvent, function () {
			api.off(`${stateSaveParamsEvent} ${destroyEvent}`);
		});
	
		var loaded = api.state.loaded();
	
		if ( loaded && loaded.childRows ) {
			api
				.rows( $.map(loaded.childRows, function (id){
					return id.replace(/:/g, '\\:')
				}) )
				.every( function () {
					_fnCallbackFire( context, null, 'requestChild', [ this ] )
				});
		}
	});
	
	var __details_add = function ( ctx, row, data, klass )
	{
		// Convert to array of TR elements
		var rows = [];
		var addRow = function ( r, k ) {
			// Recursion to allow for arrays of jQuery objects
			if ( Array.isArray( r ) || r instanceof $ ) {
				for ( var i=0, ien=r.length ; i<ien ; i++ ) {
					addRow( r[i], k );
				}
				return;
			}
	
			// If we get a TR element, then just add it directly - up to the dev
			// to add the correct number of columns etc
			if ( r.nodeName && r.nodeName.toLowerCase() === 'tr' ) {
				rows.push( r );
			}
			else {
				// Otherwise create a row with a wrapper
				var created = $('<tr><td></td></tr>').addClass( k );
				$('td', created)
					.addClass( k )
					.html( r )
					[0].colSpan = _fnVisbleColumns( ctx );
	
				rows.push( created[0] );
			}
		};
	
		addRow( data, klass );
	
		if ( row._details ) {
			row._details.detach();
		}
	
		row._details = $(rows);
	
		// If the children were already shown, that state should be retained
		if ( row._detailsShow ) {
			row._details.insertAfter( row.nTr );
		}
	};
	
	
	// Make state saving of child row details async to allow them to be batch processed
	var __details_state = DataTable.util.throttle(
		function (ctx) {
			_fnSaveState( ctx[0] )
		},
		500
	);
	
	
	var __details_remove = function ( api, idx )
	{
		var ctx = api.context;
	
		if ( ctx.length ) {
			var row = ctx[0].aoData[ idx !== undefined ? idx : api[0] ];
	
			if ( row && row._details ) {
				row._details.remove();
	
				row._detailsShow = undefined;
				row._details = undefined;
				$( row.nTr ).removeClass( 'dt-hasChild' );
				__details_state( ctx );
			}
		}
	};
	
	
	var __details_display = function ( api, show ) {
		var ctx = api.context;
	
		if ( ctx.length && api.length ) {
			var row = ctx[0].aoData[ api[0] ];
	
			if ( row._details ) {
				row._detailsShow = show;
	
				if ( show ) {
					row._details.insertAfter( row.nTr );
					$( row.nTr ).addClass( 'dt-hasChild' );
				}
				else {
					row._details.detach();
					$( row.nTr ).removeClass( 'dt-hasChild' );
				}
	
				_fnCallbackFire( ctx[0], null, 'childRow', [ show, api.row( api[0] ) ] )
	
				__details_events( ctx[0] );
				__details_state( ctx );
			}
		}
	};
	
	
	var __details_events = function ( settings )
	{
		var api = new _Api( settings );
		var namespace = '.dt.DT_details';
		var drawEvent = 'draw'+namespace;
		var colvisEvent = 'column-sizing'+namespace;
		var destroyEvent = 'destroy'+namespace;
		var data = settings.aoData;
	
		api.off( drawEvent +' '+ colvisEvent +' '+ destroyEvent );
	
		if ( _pluck( data, '_details' ).length > 0 ) {
			// On each draw, insert the required elements into the document
			api.on( drawEvent, function ( e, ctx ) {
				if ( settings !== ctx ) {
					return;
				}
	
				api.rows( {page:'current'} ).eq(0).each( function (idx) {
					// Internal data grab
					var row = data[ idx ];
	
					if ( row._detailsShow ) {
						row._details.insertAfter( row.nTr );
					}
				} );
			} );
	
			// Column visibility change - update the colspan
			api.on( colvisEvent, function ( e, ctx, idx, vis ) {
				if ( settings !== ctx ) {
					return;
				}
	
				// Update the colspan for the details rows (note, only if it already has
				// a colspan)
				var row, visible = _fnVisbleColumns( ctx );
	
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					row = data[i];
	
					if ( row._details ) {
						row._details.children('td[colspan]').attr('colspan', visible );
					}
				}
			} );
	
			// Table destroyed - nuke any child rows
			api.on( destroyEvent, function ( e, ctx ) {
				if ( settings !== ctx ) {
					return;
				}
	
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					if ( data[i]._details ) {
						__details_remove( api, i );
					}
				}
			} );
		}
	};
	
	// Strings for the method names to help minification
	var _emp = '';
	var _child_obj = _emp+'row().child';
	var _child_mth = _child_obj+'()';
	
	// data can be:
	//  tr
	//  string
	//  jQuery or array of any of the above
	_api_register( _child_mth, function ( data, klass ) {
		var ctx = this.context;
	
		if ( data === undefined ) {
			// get
			return ctx.length && this.length ?
				ctx[0].aoData[ this[0] ]._details :
				undefined;
		}
		else if ( data === true ) {
			// show
			this.child.show();
		}
		else if ( data === false ) {
			// remove
			__details_remove( this );
		}
		else if ( ctx.length && this.length ) {
			// set
			__details_add( ctx[0], ctx[0].aoData[ this[0] ], data, klass );
		}
	
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.show()',
		_child_mth+'.show()' // only when `child()` was called with parameters (without
	], function ( show ) {   // it returns an object and this method is not executed)
		__details_display( this, true );
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.hide()',
		_child_mth+'.hide()' // only when `child()` was called with parameters (without
	], function () {         // it returns an object and this method is not executed)
		__details_display( this, false );
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.remove()',
		_child_mth+'.remove()' // only when `child()` was called with parameters (without
	], function () {           // it returns an object and this method is not executed)
		__details_remove( this );
		return this;
	} );
	
	
	_api_register( _child_obj+'.isShown()', function () {
		var ctx = this.context;
	
		if ( ctx.length && this.length ) {
			// _detailsShown as false or undefined will fall through to return false
			return ctx[0].aoData[ this[0] ]._detailsShow || false;
		}
		return false;
	} );
	
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Columns
	 *
	 * {integer}           - column index (>=0 count from left, <0 count from right)
	 * "{integer}:visIdx"  - visible column index (i.e. translate to column index)  (>=0 count from left, <0 count from right)
	 * "{integer}:visible" - alias for {integer}:visIdx  (>=0 count from left, <0 count from right)
	 * "{string}:name"     - column name
	 * "{string}"          - jQuery selector on column header nodes
	 *
	 */
	
	// can be an array of these items, comma separated list, or an array of comma
	// separated lists
	
	var __re_column_selector = /^([^:]+):(name|visIdx|visible)$/;
	
	
	// r1 and r2 are redundant - but it means that the parameters match for the
	// iterator callback in columns().data()
	var __columnData = function ( settings, column, r1, r2, rows ) {
		var a = [];
		for ( var row=0, ien=rows.length ; row<ien ; row++ ) {
			a.push( _fnGetCellData( settings, rows[row], column ) );
		}
		return a;
	};
	
	
	var __column_selector = function ( settings, selector, opts )
	{
		var
			columns = settings.aoColumns,
			names = _pluck( columns, 'sName' ),
			nodes = _pluck( columns, 'nTh' );
	
		var run = function ( s ) {
			var selInt = _intVal( s );
	
			// Selector - all
			if ( s === '' ) {
				return _range( columns.length );
			}
	
			// Selector - index
			if ( selInt !== null ) {
				return [ selInt >= 0 ?
					selInt : // Count from left
					columns.length + selInt // Count from right (+ because its a negative value)
				];
			}
	
			// Selector = function
			if ( typeof s === 'function' ) {
				var rows = _selector_row_indexes( settings, opts );
	
				return $.map( columns, function (col, idx) {
					return s(
							idx,
							__columnData( settings, idx, 0, 0, rows ),
							nodes[ idx ]
						) ? idx : null;
				} );
			}
	
			// jQuery or string selector
			var match = typeof s === 'string' ?
				s.match( __re_column_selector ) :
				'';
	
			if ( match ) {
				switch( match[2] ) {
					case 'visIdx':
					case 'visible':
						var idx = parseInt( match[1], 10 );
						// Visible index given, convert to column index
						if ( idx < 0 ) {
							// Counting from the right
							var visColumns = $.map( columns, function (col,i) {
								return col.bVisible ? i : null;
							} );
							return [ visColumns[ visColumns.length + idx ] ];
						}
						// Counting from the left
						return [ _fnVisibleToColumnIndex( settings, idx ) ];
	
					case 'name':
						// match by name. `names` is column index complete and in order
						return $.map( names, function (name, i) {
							return name === match[1] ? i : null;
						} );
	
					default:
						return [];
				}
			}
	
			// Cell in the table body
			if ( s.nodeName && s._DT_CellIndex ) {
				return [ s._DT_CellIndex.column ];
			}
	
			// jQuery selector on the TH elements for the columns
			var jqResult = $( nodes )
				.filter( s )
				.map( function () {
					return $.inArray( this, nodes ); // `nodes` is column index complete and in order
				} )
				.toArray();
	
			if ( jqResult.length || ! s.nodeName ) {
				return jqResult;
			}
	
			// Otherwise a node which might have a `dt-column` data attribute, or be
			// a child or such an element
			var host = $(s).closest('*[data-dt-column]');
			return host.length ?
				[ host.data('dt-column') ] :
				[];
		};
	
		return _selector_run( 'column', selector, run, settings, opts );
	};
	
	
	var __setColumnVis = function ( settings, column, vis ) {
		var
			cols = settings.aoColumns,
			col  = cols[ column ],
			data = settings.aoData,
			row, cells, i, ien, tr;
	
		// Get
		if ( vis === undefined ) {
			return col.bVisible;
		}
	
		// Set
		// No change
		if ( col.bVisible === vis ) {
			return;
		}
	
		if ( vis ) {
			// Insert column
			// Need to decide if we should use appendChild or insertBefore
			var insertBefore = $.inArray( true, _pluck(cols, 'bVisible'), column+1 );
	
			for ( i=0, ien=data.length ; i<ien ; i++ ) {
				tr = data[i].nTr;
				cells = data[i].anCells;
	
				if ( tr ) {
					// insertBefore can act like appendChild if 2nd arg is null
					tr.insertBefore( cells[ column ], cells[ insertBefore ] || null );
				}
			}
		}
		else {
			// Remove column
			$( _pluck( settings.aoData, 'anCells', column ) ).detach();
		}
	
		// Common actions
		col.bVisible = vis;
	};
	
	
	_api_register( 'columns()', function ( selector, opts ) {
		// argument shifting
		if ( selector === undefined ) {
			selector = '';
		}
		else if ( $.isPlainObject( selector ) ) {
			opts = selector;
			selector = '';
		}
	
		opts = _selector_opts( opts );
	
		var inst = this.iterator( 'table', function ( settings ) {
			return __column_selector( settings, selector, opts );
		}, 1 );
	
		// Want argument shifting here and in _row_selector?
		inst.selector.cols = selector;
		inst.selector.opts = opts;
	
		return inst;
	} );
	
	_api_registerPlural( 'columns().header()', 'column().header()', function ( selector, opts ) {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].nTh;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().footer()', 'column().footer()', function ( selector, opts ) {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].nTf;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().data()', 'column().data()', function () {
		return this.iterator( 'column-rows', __columnData, 1 );
	} );
	
	_api_registerPlural( 'columns().dataSrc()', 'column().dataSrc()', function () {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].mData;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().cache()', 'column().cache()', function ( type ) {
		return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
			return _pluck_order( settings.aoData, rows,
				type === 'search' ? '_aFilterData' : '_aSortData', column
			);
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().nodes()', 'column().nodes()', function () {
		return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
			return _pluck_order( settings.aoData, rows, 'anCells', column ) ;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().visible()', 'column().visible()', function ( vis, calc ) {
		var that = this;
		var ret = this.iterator( 'column', function ( settings, column ) {
			if ( vis === undefined ) {
				return settings.aoColumns[ column ].bVisible;
			} // else
			__setColumnVis( settings, column, vis );
		} );
	
		// Group the column visibility changes
		if ( vis !== undefined ) {
			this.iterator( 'table', function ( settings ) {
				// Redraw the header after changes
				_fnDrawHead( settings, settings.aoHeader );
				_fnDrawHead( settings, settings.aoFooter );
		
				// Update colspan for no records display. Child rows and extensions will use their own
				// listeners to do this - only need to update the empty table item here
				if ( ! settings.aiDisplay.length ) {
					$(settings.nTBody).find('td[colspan]').attr('colspan', _fnVisbleColumns(settings));
				}
		
				_fnSaveState( settings );
	
				// Second loop once the first is done for events
				that.iterator( 'column', function ( settings, column ) {
					_fnCallbackFire( settings, null, 'column-visibility', [settings, column, vis, calc] );
				} );
	
				if ( calc === undefined || calc ) {
					that.columns.adjust();
				}
			});
		}
	
		return ret;
	} );
	
	_api_registerPlural( 'columns().indexes()', 'column().index()', function ( type ) {
		return this.iterator( 'column', function ( settings, column ) {
			return type === 'visible' ?
				_fnColumnIndexToVisible( settings, column ) :
				column;
		}, 1 );
	} );
	
	_api_register( 'columns.adjust()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnAdjustColumnSizing( settings );
		}, 1 );
	} );
	
	_api_register( 'column.index()', function ( type, idx ) {
		if ( this.context.length !== 0 ) {
			var ctx = this.context[0];
	
			if ( type === 'fromVisible' || type === 'toData' ) {
				return _fnVisibleToColumnIndex( ctx, idx );
			}
			else if ( type === 'fromData' || type === 'toVisible' ) {
				return _fnColumnIndexToVisible( ctx, idx );
			}
		}
	} );
	
	_api_register( 'column()', function ( selector, opts ) {
		return _selector_first( this.columns( selector, opts ) );
	} );
	
	var __cell_selector = function ( settings, selector, opts )
	{
		var data = settings.aoData;
		var rows = _selector_row_indexes( settings, opts );
		var cells = _removeEmpty( _pluck_order( data, rows, 'anCells' ) );
		var allCells = $(_flatten( [], cells ));
		var row;
		var columns = settings.aoColumns.length;
		var a, i, ien, j, o, host;
	
		var run = function ( s ) {
			var fnSelector = typeof s === 'function';
	
			if ( s === null || s === undefined || fnSelector ) {
				// All cells and function selectors
				a = [];
	
				for ( i=0, ien=rows.length ; i<ien ; i++ ) {
					row = rows[i];
	
					for ( j=0 ; j<columns ; j++ ) {
						o = {
							row: row,
							column: j
						};
	
						if ( fnSelector ) {
							// Selector - function
							host = data[ row ];
	
							if ( s( o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null ) ) {
								a.push( o );
							}
						}
						else {
							// Selector - all
							a.push( o );
						}
					}
				}
	
				return a;
			}
			
			// Selector - index
			if ( $.isPlainObject( s ) ) {
				// Valid cell index and its in the array of selectable rows
				return s.column !== undefined && s.row !== undefined && $.inArray( s.row, rows ) !== -1 ?
					[s] :
					[];
			}
	
			// Selector - jQuery filtered cells
			var jqResult = allCells
				.filter( s )
				.map( function (i, el) {
					return { // use a new object, in case someone changes the values
						row:    el._DT_CellIndex.row,
						column: el._DT_CellIndex.column
	 				};
				} )
				.toArray();
	
			if ( jqResult.length || ! s.nodeName ) {
				return jqResult;
			}
	
			// Otherwise the selector is a node, and there is one last option - the
			// element might be a child of an element which has dt-row and dt-column
			// data attributes
			host = $(s).closest('*[data-dt-row]');
			return host.length ?
				[ {
					row: host.data('dt-row'),
					column: host.data('dt-column')
				} ] :
				[];
		};
	
		return _selector_run( 'cell', selector, run, settings, opts );
	};
	
	
	
	
	_api_register( 'cells()', function ( rowSelector, columnSelector, opts ) {
		// Argument shifting
		if ( $.isPlainObject( rowSelector ) ) {
			// Indexes
			if ( rowSelector.row === undefined ) {
				// Selector options in first parameter
				opts = rowSelector;
				rowSelector = null;
			}
			else {
				// Cell index objects in first parameter
				opts = columnSelector;
				columnSelector = null;
			}
		}
		if ( $.isPlainObject( columnSelector ) ) {
			opts = columnSelector;
			columnSelector = null;
		}
	
		// Cell selector
		if ( columnSelector === null || columnSelector === undefined ) {
			return this.iterator( 'table', function ( settings ) {
				return __cell_selector( settings, rowSelector, _selector_opts( opts ) );
			} );
		}
	
		// The default built in options need to apply to row and columns
		var internalOpts = opts ? {
			page: opts.page,
			order: opts.order,
			search: opts.search
		} : {};
	
		// Row + column selector
		var columns = this.columns( columnSelector, internalOpts );
		var rows = this.rows( rowSelector, internalOpts );
		var i, ien, j, jen;
	
		var cellsNoOpts = this.iterator( 'table', function ( settings, idx ) {
			var a = [];
	
			for ( i=0, ien=rows[idx].length ; i<ien ; i++ ) {
				for ( j=0, jen=columns[idx].length ; j<jen ; j++ ) {
					a.push( {
						row:    rows[idx][i],
						column: columns[idx][j]
					} );
				}
			}
	
			return a;
		}, 1 );
	
		// There is currently only one extension which uses a cell selector extension
		// It is a _major_ performance drag to run this if it isn't needed, so this is
		// an extension specific check at the moment
		var cells = opts && opts.selected ?
			this.cells( cellsNoOpts, opts ) :
			cellsNoOpts;
	
		$.extend( cells.selector, {
			cols: columnSelector,
			rows: rowSelector,
			opts: opts
		} );
	
		return cells;
	} );
	
	
	_api_registerPlural( 'cells().nodes()', 'cell().node()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			var data = settings.aoData[ row ];
	
			return data && data.anCells ?
				data.anCells[ column ] :
				undefined;
		}, 1 );
	} );
	
	
	_api_register( 'cells().data()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return _fnGetCellData( settings, row, column );
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().cache()', 'cell().cache()', function ( type ) {
		type = type === 'search' ? '_aFilterData' : '_aSortData';
	
		return this.iterator( 'cell', function ( settings, row, column ) {
			return settings.aoData[ row ][ type ][ column ];
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().render()', 'cell().render()', function ( type ) {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return _fnGetCellData( settings, row, column, type );
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().indexes()', 'cell().index()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return {
				row: row,
				column: column,
				columnVisible: _fnColumnIndexToVisible( settings, column )
			};
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().invalidate()', 'cell().invalidate()', function ( src ) {
		return this.iterator( 'cell', function ( settings, row, column ) {
			_fnInvalidate( settings, row, src, column );
		} );
	} );
	
	
	
	_api_register( 'cell()', function ( rowSelector, columnSelector, opts ) {
		return _selector_first( this.cells( rowSelector, columnSelector, opts ) );
	} );
	
	
	_api_register( 'cell().data()', function ( data ) {
		var ctx = this.context;
		var cell = this[0];
	
		if ( data === undefined ) {
			// Get
			return ctx.length && cell.length ?
				_fnGetCellData( ctx[0], cell[0].row, cell[0].column ) :
				undefined;
		}
	
		// Set
		_fnSetCellData( ctx[0], cell[0].row, cell[0].column, data );
		_fnInvalidate( ctx[0], cell[0].row, 'data', cell[0].column );
	
		return this;
	} );
	
	
	
	/**
	 * Get current ordering (sorting) that has been applied to the table.
	 *
	 * @returns {array} 2D array containing the sorting information for the first
	 *   table in the current context. Each element in the parent array represents
	 *   a column being sorted upon (i.e. multi-sorting with two columns would have
	 *   2 inner arrays). The inner arrays may have 2 or 3 elements. The first is
	 *   the column index that the sorting condition applies to, the second is the
	 *   direction of the sort (`desc` or `asc`) and, optionally, the third is the
	 *   index of the sorting order from the `column.sorting` initialisation array.
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {integer} order Column index to sort upon.
	 * @param {string} direction Direction of the sort to be applied (`asc` or `desc`)
	 * @returns {DataTables.Api} this
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 1D array of sorting information to be applied.
	 * @param {array} [...] Optional additional sorting conditions
	 * @returns {DataTables.Api} this
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 2D array of sorting information to be applied.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'order()', function ( order, dir ) {
		var ctx = this.context;
	
		if ( order === undefined ) {
			// get
			return ctx.length !== 0 ?
				ctx[0].aaSorting :
				undefined;
		}
	
		// set
		if ( typeof order === 'number' ) {
			// Simple column / direction passed in
			order = [ [ order, dir ] ];
		}
		else if ( order.length && ! Array.isArray( order[0] ) ) {
			// Arguments passed in (list of 1D arrays)
			order = Array.prototype.slice.call( arguments );
		}
		// otherwise a 2D array was passed in
	
		return this.iterator( 'table', function ( settings ) {
			settings.aaSorting = order.slice();
		} );
	} );
	
	
	/**
	 * Attach a sort listener to an element for a given column
	 *
	 * @param {node|jQuery|string} node Identifier for the element(s) to attach the
	 *   listener to. This can take the form of a single DOM node, a jQuery
	 *   collection of nodes or a jQuery selector which will identify the node(s).
	 * @param {integer} column the column that a click on this node will sort on
	 * @param {function} [callback] callback function when sort is run
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'order.listener()', function ( node, column, callback ) {
		return this.iterator( 'table', function ( settings ) {
			_fnSortAttachListener( settings, node, column, callback );
		} );
	} );
	
	
	_api_register( 'order.fixed()', function ( set ) {
		if ( ! set ) {
			var ctx = this.context;
			var fixed = ctx.length ?
				ctx[0].aaSortingFixed :
				undefined;
	
			return Array.isArray( fixed ) ?
				{ pre: fixed } :
				fixed;
		}
	
		return this.iterator( 'table', function ( settings ) {
			settings.aaSortingFixed = $.extend( true, {}, set );
		} );
	} );
	
	
	// Order by the selected column(s)
	_api_register( [
		'columns().order()',
		'column().order()'
	], function ( dir ) {
		var that = this;
	
		return this.iterator( 'table', function ( settings, i ) {
			var sort = [];
	
			$.each( that[i], function (j, col) {
				sort.push( [ col, dir ] );
			} );
	
			settings.aaSorting = sort;
		} );
	} );
	
	
	
	_api_register( 'search()', function ( input, regex, smart, caseInsen ) {
		var ctx = this.context;
	
		if ( input === undefined ) {
			// get
			return ctx.length !== 0 ?
				ctx[0].oPreviousSearch.sSearch :
				undefined;
		}
	
		// set
		return this.iterator( 'table', function ( settings ) {
			if ( ! settings.oFeatures.bFilter ) {
				return;
			}
	
			_fnFilterComplete( settings, $.extend( {}, settings.oPreviousSearch, {
				"sSearch": input+"",
				"bRegex":  regex === null ? false : regex,
				"bSmart":  smart === null ? true  : smart,
				"bCaseInsensitive": caseInsen === null ? true : caseInsen
			} ), 1 );
		} );
	} );
	
	
	_api_registerPlural(
		'columns().search()',
		'column().search()',
		function ( input, regex, smart, caseInsen ) {
			return this.iterator( 'column', function ( settings, column ) {
				var preSearch = settings.aoPreSearchCols;
	
				if ( input === undefined ) {
					// get
					return preSearch[ column ].sSearch;
				}
	
				// set
				if ( ! settings.oFeatures.bFilter ) {
					return;
				}
	
				$.extend( preSearch[ column ], {
					"sSearch": input+"",
					"bRegex":  regex === null ? false : regex,
					"bSmart":  smart === null ? true  : smart,
					"bCaseInsensitive": caseInsen === null ? true : caseInsen
				} );
	
				_fnFilterComplete( settings, settings.oPreviousSearch, 1 );
			} );
		}
	);
	
	/*
	 * State API methods
	 */
	
	_api_register( 'state()', function () {
		return this.context.length ?
			this.context[0].oSavedState :
			null;
	} );
	
	
	_api_register( 'state.clear()', function () {
		return this.iterator( 'table', function ( settings ) {
			// Save an empty object
			settings.fnStateSaveCallback.call( settings.oInstance, settings, {} );
		} );
	} );
	
	
	_api_register( 'state.loaded()', function () {
		return this.context.length ?
			this.context[0].oLoadedState :
			null;
	} );
	
	
	_api_register( 'state.save()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnSaveState( settings );
		} );
	} );
	
	
	
	/**
	 * Provide a common method for plug-ins to check the version of DataTables being
	 * used, in order to ensure compatibility.
	 *
	 *  @param {string} version Version string to check for, in the format "X.Y.Z".
	 *    Note that the formats "X" and "X.Y" are also acceptable.
	 *  @returns {boolean} true if this version of DataTables is greater or equal to
	 *    the required version, or false if this version of DataTales is not
	 *    suitable
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    alert( $.fn.dataTable.versionCheck( '1.9.0' ) );
	 */
	DataTable.versionCheck = DataTable.fnVersionCheck = function( version )
	{
		var aThis = DataTable.version.split('.');
		var aThat = version.split('.');
		var iThis, iThat;
	
		for ( var i=0, iLen=aThat.length ; i<iLen ; i++ ) {
			iThis = parseInt( aThis[i], 10 ) || 0;
			iThat = parseInt( aThat[i], 10 ) || 0;
	
			// Parts are the same, keep comparing
			if (iThis === iThat) {
				continue;
			}
	
			// Parts are different, return immediately
			return iThis > iThat;
		}
	
		return true;
	};
	
	
	/**
	 * Check if a `<table>` node is a DataTable table already or not.
	 *
	 *  @param {node|jquery|string} table Table node, jQuery object or jQuery
	 *      selector for the table to test. Note that if more than more than one
	 *      table is passed on, only the first will be checked
	 *  @returns {boolean} true the table given is a DataTable, or false otherwise
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {
	 *      $('#example').dataTable();
	 *    }
	 */
	DataTable.isDataTable = DataTable.fnIsDataTable = function ( table )
	{
		var t = $(table).get(0);
		var is = false;
	
		if ( table instanceof DataTable.Api ) {
			return true;
		}
	
		$.each( DataTable.settings, function (i, o) {
			var head = o.nScrollHead ? $('table', o.nScrollHead)[0] : null;
			var foot = o.nScrollFoot ? $('table', o.nScrollFoot)[0] : null;
	
			if ( o.nTable === t || head === t || foot === t ) {
				is = true;
			}
		} );
	
		return is;
	};
	
	
	/**
	 * Get all DataTable tables that have been initialised - optionally you can
	 * select to get only currently visible tables.
	 *
	 *  @param {boolean} [visible=false] Flag to indicate if you want all (default)
	 *    or visible tables only.
	 *  @returns {array} Array of `table` nodes (not DataTable instances) which are
	 *    DataTables
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    $.each( $.fn.dataTable.tables(true), function () {
	 *      $(table).DataTable().columns.adjust();
	 *    } );
	 */
	DataTable.tables = DataTable.fnTables = function ( visible )
	{
		var api = false;
	
		if ( $.isPlainObject( visible ) ) {
			api = visible.api;
			visible = visible.visible;
		}
	
		var a = $.map( DataTable.settings, function (o) {
			if ( !visible || (visible && $(o.nTable).is(':visible')) ) {
				return o.nTable;
			}
		} );
	
		return api ?
			new _Api( a ) :
			a;
	};
	
	
	/**
	 * Convert from camel case parameters to Hungarian notation. This is made public
	 * for the extensions to provide the same ability as DataTables core to accept
	 * either the 1.9 style Hungarian notation, or the 1.10+ style camelCase
	 * parameters.
	 *
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 */
	DataTable.camelToHungarian = _fnCamelToHungarian;
	
	
	
	/**
	 *
	 */
	_api_register( '$()', function ( selector, opts ) {
		var
			rows   = this.rows( opts ).nodes(), // Get all rows
			jqRows = $(rows);
	
		return $( [].concat(
			jqRows.filter( selector ).toArray(),
			jqRows.find( selector ).toArray()
		) );
	} );
	
	
	// jQuery functions to operate on the tables
	$.each( [ 'on', 'one', 'off' ], function (i, key) {
		_api_register( key+'()', function ( /* event, handler */ ) {
			var args = Array.prototype.slice.call(arguments);
	
			// Add the `dt` namespace automatically if it isn't already present
			args[0] = $.map( args[0].split( /\s/ ), function ( e ) {
				return ! e.match(/\.dt\b/) ?
					e+'.dt' :
					e;
				} ).join( ' ' );
	
			var inst = $( this.tables().nodes() );
			inst[key].apply( inst, args );
			return this;
		} );
	} );
	
	
	_api_register( 'clear()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnClearTable( settings );
		} );
	} );
	
	
	_api_register( 'settings()', function () {
		return new _Api( this.context, this.context );
	} );
	
	
	_api_register( 'init()', function () {
		var ctx = this.context;
		return ctx.length ? ctx[0].oInit : null;
	} );
	
	
	_api_register( 'data()', function () {
		return this.iterator( 'table', function ( settings ) {
			return _pluck( settings.aoData, '_aData' );
		} ).flatten();
	} );
	
	
	_api_register( 'destroy()', function ( remove ) {
		remove = remove || false;
	
		return this.iterator( 'table', function ( settings ) {
			var classes   = settings.oClasses;
			var table     = settings.nTable;
			var tbody     = settings.nTBody;
			var thead     = settings.nTHead;
			var tfoot     = settings.nTFoot;
			var jqTable   = $(table);
			var jqTbody   = $(tbody);
			var jqWrapper = $(settings.nTableWrapper);
			var rows      = $.map( settings.aoData, function (r) { return r.nTr; } );
			var i, ien;
	
			// Flag to note that the table is currently being destroyed - no action
			// should be taken
			settings.bDestroying = true;
	
			// Fire off the destroy callbacks for plug-ins etc
			_fnCallbackFire( settings, "aoDestroyCallback", "destroy", [settings] );
	
			// If not being removed from the document, make all columns visible
			if ( ! remove ) {
				new _Api( settings ).columns().visible( true );
			}
	
			// Blitz all `DT` namespaced events (these are internal events, the
			// lowercase, `dt` events are user subscribed and they are responsible
			// for removing them
			jqWrapper.off('.DT').find(':not(tbody *)').off('.DT');
			$(window).off('.DT-'+settings.sInstance);
	
			// When scrolling we had to break the table up - restore it
			if ( table != thead.parentNode ) {
				jqTable.children('thead').detach();
				jqTable.append( thead );
			}
	
			if ( tfoot && table != tfoot.parentNode ) {
				jqTable.children('tfoot').detach();
				jqTable.append( tfoot );
			}
	
			settings.aaSorting = [];
			settings.aaSortingFixed = [];
			_fnSortingClasses( settings );
	
			$( rows ).removeClass( settings.asStripeClasses.join(' ') );
	
			$('th, td', thead).removeClass( classes.sSortable+' '+
				classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone
			);
	
			// Add the TR elements back into the table in their original order
			jqTbody.children().detach();
			jqTbody.append( rows );
	
			var orig = settings.nTableWrapper.parentNode;
	
			// Remove the DataTables generated nodes, events and classes
			var removedMethod = remove ? 'remove' : 'detach';
			jqTable[ removedMethod ]();
			jqWrapper[ removedMethod ]();
	
			// If we need to reattach the table to the document
			if ( ! remove && orig ) {
				// insertBefore acts like appendChild if !arg[1]
				orig.insertBefore( table, settings.nTableReinsertBefore );
	
				// Restore the width of the original table - was read from the style property,
				// so we can restore directly to that
				jqTable
					.css( 'width', settings.sDestroyWidth )
					.removeClass( classes.sTable );
	
				// If the were originally stripe classes - then we add them back here.
				// Note this is not fool proof (for example if not all rows had stripe
				// classes - but it's a good effort without getting carried away
				ien = settings.asDestroyStripes.length;
	
				if ( ien ) {
					jqTbody.children().each( function (i) {
						$(this).addClass( settings.asDestroyStripes[i % ien] );
					} );
				}
			}
	
			/* Remove the settings object from the settings array */
			var idx = $.inArray( settings, DataTable.settings );
			if ( idx !== -1 ) {
				DataTable.settings.splice( idx, 1 );
			}
		} );
	} );
	
	
	// Add the `every()` method for rows, columns and cells in a compact form
	$.each( [ 'column', 'row', 'cell' ], function ( i, type ) {
		_api_register( type+'s().every()', function ( fn ) {
			var opts = this.selector.opts;
			var api = this;
	
			return this.iterator( type, function ( settings, arg1, arg2, arg3, arg4 ) {
				// Rows and columns:
				//  arg1 - index
				//  arg2 - table counter
				//  arg3 - loop counter
				//  arg4 - undefined
				// Cells:
				//  arg1 - row index
				//  arg2 - column index
				//  arg3 - table counter
				//  arg4 - loop counter
				fn.call(
					api[ type ](
						arg1,
						type==='cell' ? arg2 : opts,
						type==='cell' ? opts : undefined
					),
					arg1, arg2, arg3, arg4
				);
			} );
		} );
	} );
	
	
	// i18n method for extensions to be able to use the language object from the
	// DataTable
	_api_register( 'i18n()', function ( token, def, plural ) {
		var ctx = this.context[0];
		var resolved = _fnGetObjectDataFn( token )( ctx.oLanguage );
	
		if ( resolved === undefined ) {
			resolved = def;
		}
	
		if ( plural !== undefined && $.isPlainObject( resolved ) ) {
			resolved = resolved[ plural ] !== undefined ?
				resolved[ plural ] :
				resolved._;
		}
	
		return resolved.replace( '%d', plural ); // nb: plural might be undefined,
	} );	
	/**
	 * Version string for plug-ins to check compatibility. Allowed format is
	 * `a.b.c-d` where: a:int, b:int, c:int, d:string(dev|beta|alpha). `d` is used
	 * only for non-release builds. See http://semver.org/ for more information.
	 *  @member
	 *  @type string
	 *  @default Version number
	 */
	DataTable.version = "1.13.1";
	
	/**
	 * Private data store, containing all of the settings objects that are
	 * created for the tables on a given page.
	 *
	 * Note that the `DataTable.settings` object is aliased to
	 * `jQuery.fn.dataTableExt` through which it may be accessed and
	 * manipulated, or `jQuery.fn.dataTable.settings`.
	 *  @member
	 *  @type array
	 *  @default []
	 *  @private
	 */
	DataTable.settings = [];
	
	/**
	 * Object models container, for the various models that DataTables has
	 * available to it. These models define the objects that are used to hold
	 * the active state and configuration of the table.
	 *  @namespace
	 */
	DataTable.models = {};
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * search information for the global filter and individual column filters.
	 *  @namespace
	 */
	DataTable.models.oSearch = {
		/**
		 * Flag to indicate if the filtering should be case insensitive or not
		 *  @type boolean
		 *  @default true
		 */
		"bCaseInsensitive": true,
	
		/**
		 * Applied search term
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sSearch": "",
	
		/**
		 * Flag to indicate if the search term should be interpreted as a
		 * regular expression (true) or not (false) and therefore and special
		 * regex characters escaped.
		 *  @type boolean
		 *  @default false
		 */
		"bRegex": false,
	
		/**
		 * Flag to indicate if DataTables is to use its smart filtering or not.
		 *  @type boolean
		 *  @default true
		 */
		"bSmart": true,
	
		/**
		 * Flag to indicate if DataTables should only trigger a search when
		 * the return key is pressed.
		 *  @type boolean
		 *  @default false
		 */
		"return": false
	};
	
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * each individual row. This is the object format used for the settings
	 * aoData array.
	 *  @namespace
	 */
	DataTable.models.oRow = {
		/**
		 * TR element for the row
		 *  @type node
		 *  @default null
		 */
		"nTr": null,
	
		/**
		 * Array of TD elements for each row. This is null until the row has been
		 * created.
		 *  @type array nodes
		 *  @default []
		 */
		"anCells": null,
	
		/**
		 * Data object from the original data source for the row. This is either
		 * an array if using the traditional form of DataTables, or an object if
		 * using mData options. The exact type will depend on the passed in
		 * data from the data source, or will be an array if using DOM a data
		 * source.
		 *  @type array|object
		 *  @default []
		 */
		"_aData": [],
	
		/**
		 * Sorting data cache - this array is ostensibly the same length as the
		 * number of columns (although each index is generated only as it is
		 * needed), and holds the data that is used for sorting each column in the
		 * row. We do this cache generation at the start of the sort in order that
		 * the formatting of the sort data need be done only once for each cell
		 * per sort. This array should not be read from or written to by anything
		 * other than the master sorting methods.
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_aSortData": null,
	
		/**
		 * Per cell filtering data cache. As per the sort data cache, used to
		 * increase the performance of the filtering in DataTables
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_aFilterData": null,
	
		/**
		 * Filtering data cache. This is the same as the cell filtering cache, but
		 * in this case a string rather than an array. This is easily computed with
		 * a join on `_aFilterData`, but is provided as a cache so the join isn't
		 * needed on every search (memory traded for performance)
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_sFilterRow": null,
	
		/**
		 * Cache of the class name that DataTables has applied to the row, so we
		 * can quickly look at this variable rather than needing to do a DOM check
		 * on className for the nTr property.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *  @private
		 */
		"_sRowStripe": "",
	
		/**
		 * Denote if the original data source was from the DOM, or the data source
		 * object. This is used for invalidating data, so DataTables can
		 * automatically read data from the original source, unless uninstructed
		 * otherwise.
		 *  @type string
		 *  @default null
		 *  @private
		 */
		"src": null,
	
		/**
		 * Index in the aoData array. This saves an indexOf lookup when we have the
		 * object, but want to know the index
		 *  @type integer
		 *  @default -1
		 *  @private
		 */
		"idx": -1
	};
	
	
	/**
	 * Template object for the column information object in DataTables. This object
	 * is held in the settings aoColumns array and contains all the information that
	 * DataTables needs about each individual column.
	 *
	 * Note that this object is related to {@link DataTable.defaults.column}
	 * but this one is the internal data store for DataTables's cache of columns.
	 * It should NOT be manipulated outside of DataTables. Any configuration should
	 * be done through the initialisation options.
	 *  @namespace
	 */
	DataTable.models.oColumn = {
		/**
		 * Column index. This could be worked out on-the-fly with $.inArray, but it
		 * is faster to just hold it as a variable
		 *  @type integer
		 *  @default null
		 */
		"idx": null,
	
		/**
		 * A list of the columns that sorting should occur on when this column
		 * is sorted. That this property is an array allows multi-column sorting
		 * to be defined for a column (for example first name / last name columns
		 * would benefit from this). The values are integers pointing to the
		 * columns to be sorted on (typically it will be a single integer pointing
		 * at itself, but that doesn't need to be the case).
		 *  @type array
		 */
		"aDataSort": null,
	
		/**
		 * Define the sorting directions that are applied to the column, in sequence
		 * as the column is repeatedly sorted upon - i.e. the first value is used
		 * as the sorting direction when the column if first sorted (clicked on).
		 * Sort it again (click again) and it will move on to the next index.
		 * Repeat until loop.
		 *  @type array
		 */
		"asSorting": null,
	
		/**
		 * Flag to indicate if the column is searchable, and thus should be included
		 * in the filtering or not.
		 *  @type boolean
		 */
		"bSearchable": null,
	
		/**
		 * Flag to indicate if the column is sortable or not.
		 *  @type boolean
		 */
		"bSortable": null,
	
		/**
		 * Flag to indicate if the column is currently visible in the table or not
		 *  @type boolean
		 */
		"bVisible": null,
	
		/**
		 * Store for manual type assignment using the `column.type` option. This
		 * is held in store so we can manipulate the column's `sType` property.
		 *  @type string
		 *  @default null
		 *  @private
		 */
		"_sManualType": null,
	
		/**
		 * Flag to indicate if HTML5 data attributes should be used as the data
		 * source for filtering or sorting. True is either are.
		 *  @type boolean
		 *  @default false
		 *  @private
		 */
		"_bAttrSrc": false,
	
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} nTd The TD node that has been created
		 *  @param {*} sData The Data for the cell
		 *  @param {array|object} oData The data for the whole row
		 *  @param {int} iRow The row index for the aoData data store
		 *  @default null
		 */
		"fnCreatedCell": null,
	
		/**
		 * Function to get data from a cell in a column. You should <b>never</b>
		 * access data directly through _aData internally in DataTables - always use
		 * the method attached to this property. It allows mData to function as
		 * required. This function is automatically assigned by the column
		 * initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {string} sSpecific The specific data type you want to get -
		 *    'display', 'type' 'filter' 'sort'
		 *  @returns {*} The data for the cell from the given row's data
		 *  @default null
		 */
		"fnGetData": null,
	
		/**
		 * Function to set data for a cell in the column. You should <b>never</b>
		 * set the data directly to _aData internally in DataTables - always use
		 * this method. It allows mData to function as required. This function
		 * is automatically assigned by the column initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {*} sValue Value to set
		 *  @default null
		 */
		"fnSetData": null,
	
		/**
		 * Property to read the value for the cells in the column from the data
		 * source array / object. If null, then the default content is used, if a
		 * function is given then the return from the function is used.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mData": null,
	
		/**
		 * Partner property to mData which is used (only when defined) to get
		 * the data - i.e. it is basically the same as mData, but without the
		 * 'set' option, and also the data fed to it is the result from mData.
		 * This is the rendering method to match the data method of mData.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mRender": null,
	
		/**
		 * Unique header TH/TD element for this column - this is what the sorting
		 * listener is attached to (if sorting is enabled.)
		 *  @type node
		 *  @default null
		 */
		"nTh": null,
	
		/**
		 * Unique footer TH/TD element for this column (if there is one). Not used
		 * in DataTables as such, but can be used for plug-ins to reference the
		 * footer for each column.
		 *  @type node
		 *  @default null
		 */
		"nTf": null,
	
		/**
		 * The class to apply to all TD elements in the table's TBODY for the column
		 *  @type string
		 *  @default null
		 */
		"sClass": null,
	
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 *  @type string
		 */
		"sContentPadding": null,
	
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because mData
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 */
		"sDefaultContent": null,
	
		/**
		 * Name for the column, allowing reference to the column by name as well as
		 * by index (needs a lookup to work by name).
		 *  @type string
		 */
		"sName": null,
	
		/**
		 * Custom sorting data type - defines which of the available plug-ins in
		 * afnSortData the custom sorting will use - if any is defined.
		 *  @type string
		 *  @default std
		 */
		"sSortDataType": 'std',
	
		/**
		 * Class to be applied to the header element when sorting on this column
		 *  @type string
		 *  @default null
		 */
		"sSortingClass": null,
	
		/**
		 * Class to be applied to the header element when sorting on this column -
		 * when jQuery UI theming is used.
		 *  @type string
		 *  @default null
		 */
		"sSortingClassJUI": null,
	
		/**
		 * Title of the column - what is seen in the TH element (nTh).
		 *  @type string
		 */
		"sTitle": null,
	
		/**
		 * Column sorting and filtering type
		 *  @type string
		 *  @default null
		 */
		"sType": null,
	
		/**
		 * Width of the column
		 *  @type string
		 *  @default null
		 */
		"sWidth": null,
	
		/**
		 * Width of the column when it was first "encountered"
		 *  @type string
		 *  @default null
		 */
		"sWidthOrig": null
	};
	
	
	/*
	 * Developer note: The properties of the object below are given in Hungarian
	 * notation, that was used as the interface for DataTables prior to v1.10, however
	 * from v1.10 onwards the primary interface is camel case. In order to avoid
	 * breaking backwards compatibility utterly with this change, the Hungarian
	 * version is still, internally the primary interface, but is is not documented
	 * - hence the @name tags in each doc comment. This allows a Javascript function
	 * to create a map from Hungarian notation to camel case (going the other direction
	 * would require each property to be listed, which would add around 3K to the size
	 * of DataTables, while this method is about a 0.5K hit).
	 *
	 * Ultimately this does pave the way for Hungarian notation to be dropped
	 * completely, but that is a massive amount of work and will break current
	 * installs (therefore is on-hold until v2).
	 */
	
	/**
	 * Initialisation options that can be given to DataTables at initialisation
	 * time.
	 *  @namespace
	 */
	DataTable.defaults = {
		/**
		 * An array of data to use for the table, passed in at initialisation which
		 * will be used in preference to any data which is already in the DOM. This is
		 * particularly useful for constructing tables purely in Javascript, for
		 * example with a custom Ajax call.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.data
		 *
		 *  @example
		 *    // Using a 2D array data source
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
		 *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine" },
		 *          { "title": "Browser" },
		 *          { "title": "Platform" },
		 *          { "title": "Version" },
		 *          { "title": "Grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using an array of objects as a data source (`data`)
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 4.0",
		 *            "platform": "Win 95+",
		 *            "version":  4,
		 *            "grade":    "X"
		 *          },
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 5.0",
		 *            "platform": "Win 95+",
		 *            "version":  5,
		 *            "grade":    "C"
		 *          }
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine",   "data": "engine" },
		 *          { "title": "Browser",  "data": "browser" },
		 *          { "title": "Platform", "data": "platform" },
		 *          { "title": "Version",  "data": "version" },
		 *          { "title": "Grade",    "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"aaData": null,
	
	
		/**
		 * If ordering is enabled, then DataTables will perform a first pass sort on
		 * initialisation. You can define which column(s) the sort is performed
		 * upon, and the sorting direction, with this variable. The `sorting` array
		 * should contain an array for each column to be sorted initially containing
		 * the column's index and a direction string ('asc' or 'desc').
		 *  @type array
		 *  @default [[0,'asc']]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.order
		 *
		 *  @example
		 *    // Sort by 3rd column first, and then 4th column
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": [[2,'asc'], [3,'desc']]
		 *      } );
		 *    } );
		 *
		 *    // No initial sorting
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": []
		 *      } );
		 *    } );
		 */
		"aaSorting": [[0,'asc']],
	
	
		/**
		 * This parameter is basically identical to the `sorting` parameter, but
		 * cannot be overridden by user interaction with the table. What this means
		 * is that you could have a column (visible or hidden) which the sorting
		 * will always be forced on first - any sorting after that (from the user)
		 * will then be performed as required. This can be useful for grouping rows
		 * together.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.orderFixed
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderFixed": [[0,'asc']]
		 *      } );
		 *    } )
		 */
		"aaSortingFixed": [],
	
	
		/**
		 * DataTables can be instructed to load data to display in the table from a
		 * Ajax source. This option defines how that Ajax call is made and where to.
		 *
		 * The `ajax` property has three different modes of operation, depending on
		 * how it is defined. These are:
		 *
		 * * `string` - Set the URL from where the data should be loaded from.
		 * * `object` - Define properties for `jQuery.ajax`.
		 * * `function` - Custom data get function
		 *
		 * `string`
		 * --------
		 *
		 * As a string, the `ajax` property simply defines the URL from which
		 * DataTables will load data.
		 *
		 * `object`
		 * --------
		 *
		 * As an object, the parameters in the object are passed to
		 * [jQuery.ajax](http://api.jquery.com/jQuery.ajax/) allowing fine control
		 * of the Ajax request. DataTables has a number of default parameters which
		 * you can override using this option. Please refer to the jQuery
		 * documentation for a full description of the options available, although
		 * the following parameters provide additional options in DataTables or
		 * require special consideration:
		 *
		 * * `data` - As with jQuery, `data` can be provided as an object, but it
		 *   can also be used as a function to manipulate the data DataTables sends
		 *   to the server. The function takes a single parameter, an object of
		 *   parameters with the values that DataTables has readied for sending. An
		 *   object may be returned which will be merged into the DataTables
		 *   defaults, or you can add the items to the object that was passed in and
		 *   not return anything from the function. This supersedes `fnServerParams`
		 *   from DataTables 1.9-.
		 *
		 * * `dataSrc` - By default DataTables will look for the property `data` (or
		 *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
		 *   from an Ajax source or for server-side processing - this parameter
		 *   allows that property to be changed. You can use Javascript dotted
		 *   object notation to get a data source for multiple levels of nesting, or
		 *   it my be used as a function. As a function it takes a single parameter,
		 *   the JSON returned from the server, which can be manipulated as
		 *   required, with the returned value being that used by DataTables as the
		 *   data source for the table. This supersedes `sAjaxDataProp` from
		 *   DataTables 1.9-.
		 *
		 * * `success` - Should not be overridden it is used internally in
		 *   DataTables. To manipulate / transform the data returned by the server
		 *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
		 *
		 * `function`
		 * ----------
		 *
		 * As a function, making the Ajax call is left up to yourself allowing
		 * complete control of the Ajax request. Indeed, if desired, a method other
		 * than Ajax could be used to obtain the required data, such as Web storage
		 * or an AIR database.
		 *
		 * The function is given four parameters and no return is required. The
		 * parameters are:
		 *
		 * 1. _object_ - Data to send to the server
		 * 2. _function_ - Callback function that must be executed when the required
		 *    data has been obtained. That data should be passed into the callback
		 *    as the only parameter
		 * 3. _object_ - DataTables settings object for the table
		 *
		 * Note that this supersedes `fnServerData` from DataTables 1.9-.
		 *
		 *  @type string|object|function
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.ajax
		 *  @since 1.10.0
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax.
		 *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
		 *   $('#example').dataTable( {
		 *     "ajax": "data.json"
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to change
		 *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": "tableData"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
		 *   // from a plain array rather than an array in an object
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": ""
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Manipulate the data returned from the server - add a link to data
		 *   // (note this can, should, be done using `render` for the column - this
		 *   // is just a simple example of how the data can be manipulated).
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": function ( json ) {
		 *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
		 *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
		 *         }
		 *         return json;
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Add data to the request
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "data": function ( d ) {
		 *         return {
		 *           "extra_search": $('#extra').val()
		 *         };
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Send request as POST
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "type": "POST"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get the data from localStorage (could interface with a form for
		 *   // adding, editing and removing rows).
		 *   $('#example').dataTable( {
		 *     "ajax": function (data, callback, settings) {
		 *       callback(
		 *         JSON.parse( localStorage.getItem('dataTablesData') )
		 *       );
		 *     }
		 *   } );
		 */
		"ajax": null,
	
	
		/**
		 * This parameter allows you to readily specify the entries in the length drop
		 * down menu that DataTables shows when pagination is enabled. It can be
		 * either a 1D array of options which will be used for both the displayed
		 * option and the value, or a 2D array which will use the array in the first
		 * position as the value, and the array in the second position as the
		 * displayed options (useful for language strings such as 'All').
		 *
		 * Note that the `pageLength` property will be automatically set to the
		 * first value given in this array, unless `pageLength` is also provided.
		 *  @type array
		 *  @default [ 10, 25, 50, 100 ]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.lengthMenu
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
		 *      } );
		 *    } );
		 */
		"aLengthMenu": [ 10, 25, 50, 100 ],
	
	
		/**
		 * The `columns` option in the initialisation parameter allows you to define
		 * details about the way individual columns behave. For a full list of
		 * column options that can be set, please see
		 * {@link DataTable.defaults.column}. Note that if you use `columns` to
		 * define your columns, you must have an entry in the array for every single
		 * column that you have in your table (these can be null if you don't which
		 * to specify any options).
		 *  @member
		 *
		 *  @name DataTable.defaults.column
		 */
		"aoColumns": null,
	
		/**
		 * Very similar to `columns`, `columnDefs` allows you to target a specific
		 * column, multiple columns, or all columns, using the `targets` property of
		 * each object in the array. This allows great flexibility when creating
		 * tables, as the `columnDefs` arrays can be of any length, targeting the
		 * columns you specifically want. `columnDefs` may use any of the column
		 * options available: {@link DataTable.defaults.column}, but it _must_
		 * have `targets` defined in each object in the array. Values in the `targets`
		 * array may be:
		 *   <ul>
		 *     <li>a string - class name will be matched on the TH for the column</li>
		 *     <li>0 or a positive integer - column index counting from the left</li>
		 *     <li>a negative integer - column index counting from the right</li>
		 *     <li>the string "_all" - all columns (i.e. assign a default)</li>
		 *   </ul>
		 *  @member
		 *
		 *  @name DataTable.defaults.columnDefs
		 */
		"aoColumnDefs": null,
	
	
		/**
		 * Basically the same as `search`, this parameter defines the individual column
		 * filtering state at initialisation time. The array must be of the same size
		 * as the number of columns, and each element be an object with the parameters
		 * `search` and `escapeRegex` (the latter is optional). 'null' is also
		 * accepted and the default will be used.
		 *  @type array
		 *  @default []
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.searchCols
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchCols": [
		 *          null,
		 *          { "search": "My filter" },
		 *          null,
		 *          { "search": "^[0-9]", "escapeRegex": false }
		 *        ]
		 *      } );
		 *    } )
		 */
		"aoSearchCols": [],
	
	
		/**
		 * An array of CSS classes that should be applied to displayed rows. This
		 * array may be of any length, and DataTables will apply each class
		 * sequentially, looping when required.
		 *  @type array
		 *  @default null <i>Will take the values determined by the `oClasses.stripe*`
		 *    options</i>
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.stripeClasses
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
		 *      } );
		 *    } )
		 */
		"asStripeClasses": null,
	
	
		/**
		 * Enable or disable automatic column width calculation. This can be disabled
		 * as an optimisation (it takes some time to calculate the widths) if the
		 * tables widths are passed in using `columns`.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.autoWidth
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "autoWidth": false
		 *      } );
		 *    } );
		 */
		"bAutoWidth": true,
	
	
		/**
		 * Deferred rendering can provide DataTables with a huge speed boost when you
		 * are using an Ajax or JS data source for the table. This option, when set to
		 * true, will cause DataTables to defer the creation of the table elements for
		 * each row until they are needed for a draw - saving a significant amount of
		 * time.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.deferRender
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajax": "sources/arrays.txt",
		 *        "deferRender": true
		 *      } );
		 *    } );
		 */
		"bDeferRender": false,
	
	
		/**
		 * Replace a DataTable which matches the given selector and replace it with
		 * one which has the properties of the new initialisation object passed. If no
		 * table matches the selector, then the new DataTable will be constructed as
		 * per normal.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.destroy
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "srollY": "200px",
		 *        "paginate": false
		 *      } );
		 *
		 *      // Some time later....
		 *      $('#example').dataTable( {
		 *        "filter": false,
		 *        "destroy": true
		 *      } );
		 *    } );
		 */
		"bDestroy": false,
	
	
		/**
		 * Enable or disable filtering of data. Filtering in DataTables is "smart" in
		 * that it allows the end user to input multiple words (space separated) and
		 * will match a row containing those words, even if not in the order that was
		 * specified (this allow matching across multiple columns). Note that if you
		 * wish to use filtering in DataTables this must remain 'true' - to remove the
		 * default filtering input box and retain filtering abilities, please use
		 * {@link DataTable.defaults.dom}.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.searching
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "searching": false
		 *      } );
		 *    } );
		 */
		"bFilter": true,
	
	
		/**
		 * Enable or disable the table information display. This shows information
		 * about the data that is currently visible on the page, including information
		 * about filtered data if that action is being performed.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.info
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "info": false
		 *      } );
		 *    } );
		 */
		"bInfo": true,
	
	
		/**
		 * Allows the end user to select the size of a formatted page from a select
		 * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.lengthChange
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "lengthChange": false
		 *      } );
		 *    } );
		 */
		"bLengthChange": true,
	
	
		/**
		 * Enable or disable pagination.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.paging
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "paging": false
		 *      } );
		 *    } );
		 */
		"bPaginate": true,
	
	
		/**
		 * Enable or disable the display of a 'processing' indicator when the table is
		 * being processed (e.g. a sort). This is particularly useful for tables with
		 * large amounts of data where it can take a noticeable amount of time to sort
		 * the entries.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.processing
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "processing": true
		 *      } );
		 *    } );
		 */
		"bProcessing": false,
	
	
		/**
		 * Retrieve the DataTables object for the given selector. Note that if the
		 * table has already been initialised, this parameter will cause DataTables
		 * to simply return the object that has already been set up - it will not take
		 * account of any changes you might have made to the initialisation object
		 * passed to DataTables (setting this parameter to true is an acknowledgement
		 * that you understand this). `destroy` can be used to reinitialise a table if
		 * you need.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.retrieve
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      initTable();
		 *      tableActions();
		 *    } );
		 *
		 *    function initTable ()
		 *    {
		 *      return $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false,
		 *        "retrieve": true
		 *      } );
		 *    }
		 *
		 *    function tableActions ()
		 *    {
		 *      var table = initTable();
		 *      // perform API operations with oTable
		 *    }
		 */
		"bRetrieve": false,
	
	
		/**
		 * When vertical (y) scrolling is enabled, DataTables will force the height of
		 * the table's viewport to the given height at all times (useful for layout).
		 * However, this can look odd when filtering data down to a small data set,
		 * and the footer is left "floating" further down. This parameter (when
		 * enabled) will cause DataTables to collapse the table's viewport down when
		 * the result set will fit within the given Y height.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollCollapse
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200",
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */
		"bScrollCollapse": false,
	
	
		/**
		 * Configure DataTables to use server-side processing. Note that the
		 * `ajax` parameter must also be given in order to give DataTables a
		 * source to obtain the required data for each draw.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverSide
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "xhr.php"
		 *      } );
		 *    } );
		 */
		"bServerSide": false,
	
	
		/**
		 * Enable or disable sorting of columns. Sorting of individual columns can be
		 * disabled by the `sortable` option for each column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.ordering
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "ordering": false
		 *      } );
		 *    } );
		 */
		"bSort": true,
	
	
		/**
		 * Enable or display DataTables' ability to sort multiple columns at the
		 * same time (activated by shift-click by the user).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderMulti
		 *
		 *  @example
		 *    // Disable multiple column sorting ability
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderMulti": false
		 *      } );
		 *    } );
		 */
		"bSortMulti": true,
	
	
		/**
		 * Allows control over whether DataTables should use the top (true) unique
		 * cell that is found for a single column, or the bottom (false - default).
		 * This is useful when using complex headers.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderCellsTop
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderCellsTop": true
		 *      } );
		 *    } );
		 */
		"bSortCellsTop": false,
	
	
		/**
		 * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
		 * `sorting\_3` to the columns which are currently being sorted on. This is
		 * presented as a feature switch as it can increase processing time (while
		 * classes are removed and added) so for large data sets you might want to
		 * turn this off.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.orderClasses
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderClasses": false
		 *      } );
		 *    } );
		 */
		"bSortClasses": true,
	
	
		/**
		 * Enable or disable state saving. When enabled HTML5 `localStorage` will be
		 * used to save table display information such as pagination information,
		 * display length, filtering and sorting. As such when the end user reloads
		 * the page the display display will match what thy had previously set up.
		 *
		 * Due to the use of `localStorage` the default state saving is not supported
		 * in IE6 or 7. If state saving is required in those browsers, use
		 * `stateSaveCallback` to provide a storage solution such as cookies.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.stateSave
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "stateSave": true
		 *      } );
		 *    } );
		 */
		"bStateSave": false,
	
	
		/**
		 * This function is called when a TR element is created (and all TD child
		 * elements have been inserted), or registered if using a DOM source, allowing
		 * manipulation of the TR element (adding classes etc).
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} dataIndex The index of this row in the internal aoData array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.createdRow
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "createdRow": function( row, data, dataIndex ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" )
		 *          {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnCreatedRow": null,
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify any aspect you want about the created DOM.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.drawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "drawCallback": function( settings ) {
		 *          alert( 'DataTables has redrawn the table' );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnDrawCallback": null,
	
	
		/**
		 * Identical to fnHeaderCallback() but for the table footer this function
		 * allows you to modify the table footer on every 'draw' event.
		 *  @type function
		 *  @param {node} foot "TR" element for the footer
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.footerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "footerCallback": function( tfoot, data, start, end, display ) {
		 *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
		 *        }
		 *      } );
		 *    } )
		 */
		"fnFooterCallback": null,
	
	
		/**
		 * When rendering large numbers in the information element for the table
		 * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
		 * to have a comma separator for the 'thousands' units (e.g. 1 million is
		 * rendered as "1,000,000") to help readability for the end user. This
		 * function will override the default method DataTables uses.
		 *  @type function
		 *  @member
		 *  @param {int} toFormat number to be formatted
		 *  @returns {string} formatted string for DataTables to show the number
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.formatNumber
		 *
		 *  @example
		 *    // Format a number using a single quote for the separator (note that
		 *    // this can also be done with the language.thousands option)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "formatNumber": function ( toFormat ) {
		 *          return toFormat.toString().replace(
		 *            /\B(?=(\d{3})+(?!\d))/g, "'"
		 *          );
		 *        };
		 *      } );
		 *    } );
		 */
		"fnFormatNumber": function ( toFormat ) {
			return toFormat.toString().replace(
				/\B(?=(\d{3})+(?!\d))/g,
				this.oLanguage.sThousands
			);
		},
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify the header row. This can be used to calculate and
		 * display useful information about the table.
		 *  @type function
		 *  @param {node} head "TR" element for the header
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.headerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fheaderCallback": function( head, data, start, end, display ) {
		 *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
		 *        }
		 *      } );
		 *    } )
		 */
		"fnHeaderCallback": null,
	
	
		/**
		 * The information element can be used to convey information about the current
		 * state of the table. Although the internationalisation options presented by
		 * DataTables are quite capable of dealing with most customisations, there may
		 * be times where you wish to customise the string further. This callback
		 * allows you to do exactly that.
		 *  @type function
		 *  @param {object} oSettings DataTables settings object
		 *  @param {int} start Starting position in data for the draw
		 *  @param {int} end End position in data for the draw
		 *  @param {int} max Total number of rows in the table (regardless of
		 *    filtering)
		 *  @param {int} total Total number of rows in the data set, after filtering
		 *  @param {string} pre The string that DataTables has formatted using it's
		 *    own rules
		 *  @returns {string} The string to be displayed in the information element.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.infoCallback
		 *
		 *  @example
		 *    $('#example').dataTable( {
		 *      "infoCallback": function( settings, start, end, max, total, pre ) {
		 *        return start +" to "+ end;
		 *      }
		 *    } );
		 */
		"fnInfoCallback": null,
	
	
		/**
		 * Called when the table has been initialised. Normally DataTables will
		 * initialise sequentially and there will be no need for this function,
		 * however, this does not hold true when using external language information
		 * since that is obtained using an async XHR call.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} json The JSON object request from the server - only
		 *    present if client-side Ajax sourced data is used
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.initComplete
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "initComplete": function(settings, json) {
		 *          alert( 'DataTables has finished its initialisation.' );
		 *        }
		 *      } );
		 *    } )
		 */
		"fnInitComplete": null,
	
	
		/**
		 * Called at the very start of each table draw and can be used to cancel the
		 * draw by returning false, any other return (including undefined) results in
		 * the full draw occurring).
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @returns {boolean} False will cancel the draw, anything else (including no
		 *    return) will allow it to complete.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.preDrawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "preDrawCallback": function( settings ) {
		 *          if ( $('#test').val() == 1 ) {
		 *            return false;
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnPreDrawCallback": null,
	
	
		/**
		 * This function allows you to 'post process' each row after it have been
		 * generated for each table draw, but before it is rendered on screen. This
		 * function might be used for setting the row class name etc.
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} displayIndex The display index for the current table draw
		 *  @param {int} displayIndexFull The index of the data in the full list of
		 *    rows (after filtering)
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.rowCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" ) {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnRowCallback": null,
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * This parameter allows you to override the default function which obtains
		 * the data from the server so something more suitable for your application.
		 * For example you could use POST data, or pull information from a Gears or
		 * AIR database.
		 *  @type function
		 *  @member
		 *  @param {string} source HTTP source to obtain the data from (`ajax`)
		 *  @param {array} data A key/value pair object containing the data to send
		 *    to the server
		 *  @param {function} callback to be called on completion of the data get
		 *    process that will draw the data on the page.
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverData
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"fnServerData": null,
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 *  It is often useful to send extra data to the server when making an Ajax
		 * request - for example custom filtering information, and this callback
		 * function makes it trivial to send extra information to the server. The
		 * passed in parameter is the data set that has been constructed by
		 * DataTables, and you can add to this or modify it as you require.
		 *  @type function
		 *  @param {array} data Data array (array of objects which are name/value
		 *    pairs) that has been constructed by DataTables and will be sent to the
		 *    server. In the case of Ajax sourced data with server-side processing
		 *    this will be an empty array, for server-side processing there will be a
		 *    significant number of parameters!
		 *  @returns {undefined} Ensure that you modify the data array passed in,
		 *    as this is passed by reference.
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverParams
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"fnServerParams": null,
	
	
		/**
		 * Load the table state. With this function you can define from where, and how, the
		 * state of a table is loaded. By default DataTables will load from `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @param {object} callback Callback that can be executed when done. It
		 *    should be passed the loaded state object.
		 *  @return {object} The DataTables state object to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadCallback": function (settings, callback) {
		 *          $.ajax( {
		 *            "url": "/state_load",
		 *            "dataType": "json",
		 *            "success": function (json) {
		 *              callback( json );
		 *            }
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoadCallback": function ( settings ) {
			try {
				return JSON.parse(
					(settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
						'DataTables_'+settings.sInstance+'_'+location.pathname
					)
				);
			} catch (e) {
				return {};
			}
		},
	
	
		/**
		 * Callback which allows modification of the saved state prior to loading that state.
		 * This callback is called when the table is loading state from the stored data, but
		 * prior to the settings object being modified by the saved state. Note that for
		 * plug-in authors, you should use the `stateLoadParams` event to load parameters for
		 * a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that is to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never loaded
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Disallow state loading by returning false
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          return false;
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoadParams": null,
	
	
		/**
		 * Callback that is called when the state has been loaded from the state saving method
		 * and the DataTables settings object has been modified as a result of the loaded state.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that was loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoaded
		 *
		 *  @example
		 *    // Show an alert with the filtering value that was saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoaded": function (settings, data) {
		 *          alert( 'Saved filter was: '+data.oSearch.sSearch );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoaded": null,
	
	
		/**
		 * Save the table state. This function allows you to define where and how the state
		 * information for the table is stored By default DataTables will use `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveCallback": function (settings, data) {
		 *          // Send an Ajax request to the server with the state object
		 *          $.ajax( {
		 *            "url": "/state_save",
		 *            "data": data,
		 *            "dataType": "json",
		 *            "method": "POST"
		 *            "success": function () {}
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSaveCallback": function ( settings, data ) {
			try {
				(settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
					'DataTables_'+settings.sInstance+'_'+location.pathname,
					JSON.stringify( data )
				);
			} catch (e) {}
		},
	
	
		/**
		 * Callback which allows modification of the state to be saved. Called when the table
		 * has changed state a new state save is required. This method allows modification of
		 * the state saving object prior to actually doing the save, including addition or
		 * other state properties or modification. Note that for plug-in authors, you should
		 * use the `stateSaveParams` event to save parameters for a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSaveParams": null,
	
	
		/**
		 * Duration for which the saved state information is considered valid. After this period
		 * has elapsed the state will be returned to the default.
		 * Value is given in seconds.
		 *  @type int
		 *  @default 7200 <i>(2 hours)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.stateDuration
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateDuration": 60*60*24; // 1 day
		 *      } );
		 *    } )
		 */
		"iStateDuration": 7200,
	
	
		/**
		 * When enabled DataTables will not make a request to the server for the first
		 * page draw - rather it will use the data already on the page (no sorting etc
		 * will be applied to it), thus saving on an XHR at load time. `deferLoading`
		 * is used to indicate that deferred loading is required, but it is also used
		 * to tell DataTables how many records there are in the full table (allowing
		 * the information element and pagination to be displayed correctly). In the case
		 * where a filtering is applied to the table on initial load, this can be
		 * indicated by giving the parameter as an array, where the first element is
		 * the number of records available after filtering and the second element is the
		 * number of records without filtering (allowing the table information element
		 * to be shown correctly).
		 *  @type int | array
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.deferLoading
		 *
		 *  @example
		 *    // 57 records available in the table, no filtering applied
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": 57
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // 57 records after filtering, 100 without filtering (an initial filter applied)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": [ 57, 100 ],
		 *        "search": {
		 *          "search": "my_filter"
		 *        }
		 *      } );
		 *    } );
		 */
		"iDeferLoading": null,
	
	
		/**
		 * Number of rows to display on a single page when using pagination. If
		 * feature enabled (`lengthChange`) then the end user will be able to override
		 * this to a custom setting using a pop-up menu.
		 *  @type int
		 *  @default 10
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pageLength
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pageLength": 50
		 *      } );
		 *    } )
		 */
		"iDisplayLength": 10,
	
	
		/**
		 * Define the starting point for data display when using DataTables with
		 * pagination. Note that this parameter is the number of records, rather than
		 * the page number, so if you have 10 records per page and want to start on
		 * the third page, it should be "20".
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.displayStart
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "displayStart": 20
		 *      } );
		 *    } )
		 */
		"iDisplayStart": 0,
	
	
		/**
		 * By default DataTables allows keyboard navigation of the table (sorting, paging,
		 * and filtering) by adding a `tabindex` attribute to the required elements. This
		 * allows you to tab through the controls and press the enter key to activate them.
		 * The tabindex is default 0, meaning that the tab follows the flow of the document.
		 * You can overrule this using this parameter if you wish. Use a value of -1 to
		 * disable built-in keyboard navigation.
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.tabIndex
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "tabIndex": 1
		 *      } );
		 *    } );
		 */
		"iTabIndex": 0,
	
	
		/**
		 * Classes that DataTables assigns to the various components and features
		 * that it adds to the HTML table. This allows classes to be configured
		 * during initialisation in addition to through the static
		 * {@link DataTable.ext.oStdClasses} object).
		 *  @namespace
		 *  @name DataTable.defaults.classes
		 */
		"oClasses": {},
	
	
		/**
		 * All strings that DataTables uses in the user interface that it creates
		 * are defined in this object, allowing you to modified them individually or
		 * completely replace them all as required.
		 *  @namespace
		 *  @name DataTable.defaults.language
		 */
		"oLanguage": {
			/**
			 * Strings that are used for WAI-ARIA labels and controls only (these are not
			 * actually visible on the page, but will be read by screenreaders, and thus
			 * must be internationalised as well).
			 *  @namespace
			 *  @name DataTable.defaults.language.aria
			 */
			"oAria": {
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted ascending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortAscending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortAscending": " - click/return to sort ascending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortAscending": ": activate to sort column ascending",
	
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted descending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortDescending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortDescending": " - click/return to sort descending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortDescending": ": activate to sort column descending"
			},
	
			/**
			 * Pagination string used by DataTables for the built-in pagination
			 * control types.
			 *  @namespace
			 *  @name DataTable.defaults.language.paginate
			 */
			"oPaginate": {
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the first page.
				 *  @type string
				 *  @default First
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.first
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "first": "First page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sFirst": "First",
	
	
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the last page.
				 *  @type string
				 *  @default Last
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.last
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "last": "Last page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sLast": "Last",
	
	
				/**
				 * Text to use for the 'next' pagination button (to take the user to the
				 * next page).
				 *  @type string
				 *  @default Next
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.next
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "next": "Next page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sNext": "Next",
	
	
				/**
				 * Text to use for the 'previous' pagination button (to take the user to
				 * the previous page).
				 *  @type string
				 *  @default Previous
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.previous
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "previous": "Previous page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sPrevious": "Previous"
			},
	
			/**
			 * This string is shown in preference to `zeroRecords` when the table is
			 * empty of data (regardless of filtering). Note that this is an optional
			 * parameter - if it is not given, the value of `zeroRecords` will be used
			 * instead (either the default or given value).
			 *  @type string
			 *  @default No data available in table
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.emptyTable
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "emptyTable": "No data available in table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sEmptyTable": "No data available in table",
	
	
			/**
			 * This string gives information to the end user about the information
			 * that is current on display on the page. The following tokens can be
			 * used in the string and will be dynamically replaced as the table
			 * display updates. This tokens can be placed anywhere in the string, or
			 * removed as needed by the language requires:
			 *
			 * * `\_START\_` - Display index of the first record on the current page
			 * * `\_END\_` - Display index of the last record on the current page
			 * * `\_TOTAL\_` - Number of records in the table after filtering
			 * * `\_MAX\_` - Number of records in the table without filtering
			 * * `\_PAGE\_` - Current page number
			 * * `\_PAGES\_` - Total number of pages of data in the table
			 *
			 *  @type string
			 *  @default Showing _START_ to _END_ of _TOTAL_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.info
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "info": "Showing page _PAGE_ of _PAGES_"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
	
	
			/**
			 * Display information string for when the table is empty. Typically the
			 * format of this string should match `info`.
			 *  @type string
			 *  @default Showing 0 to 0 of 0 entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoEmpty
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoEmpty": "No entries to show"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoEmpty": "Showing 0 to 0 of 0 entries",
	
	
			/**
			 * When a user filters the information in a table, this string is appended
			 * to the information (`info`) to give an idea of how strong the filtering
			 * is. The variable _MAX_ is dynamically updated.
			 *  @type string
			 *  @default (filtered from _MAX_ total entries)
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoFiltered
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoFiltered": " - filtering from _MAX_ records"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoFiltered": "(filtered from _MAX_ total entries)",
	
	
			/**
			 * If can be useful to append extra information to the info string at times,
			 * and this variable does exactly that. This information will be appended to
			 * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
			 * being used) at all times.
			 *  @type string
			 *  @default <i>Empty string</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoPostFix
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoPostFix": "All records shown are derived from real information."
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoPostFix": "",
	
	
			/**
			 * This decimal place operator is a little different from the other
			 * language options since DataTables doesn't output floating point
			 * numbers, so it won't ever use this for display of a number. Rather,
			 * what this parameter does is modify the sort methods of the table so
			 * that numbers which are in a format which has a character other than
			 * a period (`.`) as a decimal place will be sorted numerically.
			 *
			 * Note that numbers with different decimal places cannot be shown in
			 * the same table and still be sortable, the table must be consistent.
			 * However, multiple different tables on the page can use different
			 * decimal place characters.
			 *  @type string
			 *  @default 
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.decimal
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "decimal": ","
			 *          "thousands": "."
			 *        }
			 *      } );
			 *    } );
			 */
			"sDecimal": "",
	
	
			/**
			 * DataTables has a build in number formatter (`formatNumber`) which is
			 * used to format large numbers that are used in the table information.
			 * By default a comma is used, but this can be trivially changed to any
			 * character you wish with this parameter.
			 *  @type string
			 *  @default ,
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.thousands
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "thousands": "'"
			 *        }
			 *      } );
			 *    } );
			 */
			"sThousands": ",",
	
	
			/**
			 * Detail the action that will be taken when the drop down menu for the
			 * pagination length option is changed. The '_MENU_' variable is replaced
			 * with a default select list of 10, 25, 50 and 100, and can be replaced
			 * with a custom select box if required.
			 *  @type string
			 *  @default Show _MENU_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.lengthMenu
			 *
			 *  @example
			 *    // Language change only
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": "Display _MENU_ records"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Language and options change
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": 'Display <select>'+
			 *            '<option value="10">10</option>'+
			 *            '<option value="20">20</option>'+
			 *            '<option value="30">30</option>'+
			 *            '<option value="40">40</option>'+
			 *            '<option value="50">50</option>'+
			 *            '<option value="-1">All</option>'+
			 *            '</select> records'
			 *        }
			 *      } );
			 *    } );
			 */
			"sLengthMenu": "Show _MENU_ entries",
	
	
			/**
			 * When using Ajax sourced data and during the first draw when DataTables is
			 * gathering the data, this message is shown in an empty row in the table to
			 * indicate to the end user the the data is being loaded. Note that this
			 * parameter is not used when loading data by server-side processing, just
			 * Ajax sourced data with client-side processing.
			 *  @type string
			 *  @default Loading...
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.loadingRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "loadingRecords": "Please wait - loading..."
			 *        }
			 *      } );
			 *    } );
			 */
			"sLoadingRecords": "Loading...",
	
	
			/**
			 * Text which is displayed when the table is processing a user action
			 * (usually a sort command or similar).
			 *  @type string
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.processing
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "processing": "DataTables is currently busy"
			 *        }
			 *      } );
			 *    } );
			 */
			"sProcessing": "",
	
	
			/**
			 * Details the actions that will be taken when the user types into the
			 * filtering input text box. The variable "_INPUT_", if used in the string,
			 * is replaced with the HTML text box for the filtering input allowing
			 * control over where it appears in the string. If "_INPUT_" is not given
			 * then the input box is appended to the string automatically.
			 *  @type string
			 *  @default Search:
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.search
			 *
			 *  @example
			 *    // Input text box will be appended at the end automatically
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Filter records:"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Specify where the filter should appear
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Apply filter _INPUT_ to table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sSearch": "Search:",
	
	
			/**
			 * Assign a `placeholder` attribute to the search `input` element
			 *  @type string
			 *  @default 
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.searchPlaceholder
			 */
			"sSearchPlaceholder": "",
	
	
			/**
			 * All of the language information can be stored in a file on the
			 * server-side, which DataTables will look up if this parameter is passed.
			 * It must store the URL of the language file, which is in a JSON format,
			 * and the object has the same properties as the oLanguage object in the
			 * initialiser object (i.e. the above parameters). Please refer to one of
			 * the example language files to see how this works in action.
			 *  @type string
			 *  @default <i>Empty string - i.e. disabled</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.url
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "url": "http://www.sprymedia.co.uk/dataTables/lang.txt"
			 *        }
			 *      } );
			 *    } );
			 */
			"sUrl": "",
	
	
			/**
			 * Text shown inside the table records when the is no information to be
			 * displayed after filtering. `emptyTable` is shown when there is simply no
			 * information in the table at all (regardless of filtering).
			 *  @type string
			 *  @default No matching records found
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.zeroRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "zeroRecords": "No records to display"
			 *        }
			 *      } );
			 *    } );
			 */
			"sZeroRecords": "No matching records found"
		},
	
	
		/**
		 * This parameter allows you to have define the global filtering state at
		 * initialisation time. As an object the `search` parameter must be
		 * defined, but all other parameters are optional. When `regex` is true,
		 * the search string will be treated as a regular expression, when false
		 * (default) it will be treated as a straight string. When `smart`
		 * DataTables will use it's smart filtering methods (to word match at
		 * any point in the data), when false this will not be done.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.search
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "search": {"search": "Initial search"}
		 *      } );
		 *    } )
		 */
		"oSearch": $.extend( {}, DataTable.models.oSearch ),
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * By default DataTables will look for the property `data` (or `aaData` for
		 * compatibility with DataTables 1.9-) when obtaining data from an Ajax
		 * source or for server-side processing - this parameter allows that
		 * property to be changed. You can use Javascript dotted object notation to
		 * get a data source for multiple levels of nesting.
		 *  @type string
		 *  @default data
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxDataProp
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sAjaxDataProp": "data",
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * You can instruct DataTables to load data from an external
		 * source using this parameter (use aData if you want to pass data in you
		 * already have). Simply provide a url a JSON object can be obtained from.
		 *  @type string
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxSource
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sAjaxSource": null,
	
	
		/**
		 * This initialisation variable allows you to specify exactly where in the
		 * DOM you want DataTables to inject the various controls it adds to the page
		 * (for example you might want the pagination controls at the top of the
		 * table). DIV elements (with or without a custom class) can also be added to
		 * aid styling. The follow syntax is used:
		 *   <ul>
		 *     <li>The following options are allowed:
		 *       <ul>
		 *         <li>'l' - Length changing</li>
		 *         <li>'f' - Filtering input</li>
		 *         <li>'t' - The table!</li>
		 *         <li>'i' - Information</li>
		 *         <li>'p' - Pagination</li>
		 *         <li>'r' - pRocessing</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following constants are allowed:
		 *       <ul>
		 *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
		 *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following syntax is expected:
		 *       <ul>
		 *         <li>'&lt;' and '&gt;' - div elements</li>
		 *         <li>'&lt;"class" and '&gt;' - div with a class</li>
		 *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
		 *       </ul>
		 *     </li>
		 *     <li>Examples:
		 *       <ul>
		 *         <li>'&lt;"wrapper"flipt&gt;'</li>
		 *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
		 *       </ul>
		 *     </li>
		 *   </ul>
		 *  @type string
		 *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
		 *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.dom
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
		 *      } );
		 *    } );
		 */
		"sDom": "lfrtip",
	
	
		/**
		 * Search delay option. This will throttle full table searches that use the
		 * DataTables provided search input element (it does not effect calls to
		 * `dt-api search()`, providing a delay before the search is made.
		 *  @type integer
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.searchDelay
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchDelay": 200
		 *      } );
		 *    } )
		 */
		"searchDelay": null,
	
	
		/**
		 * DataTables features six different built-in options for the buttons to
		 * display for pagination control:
		 *
		 * * `numbers` - Page number buttons only
		 * * `simple` - 'Previous' and 'Next' buttons only
		 * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
		 * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
		 * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
		 * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers
		 *  
		 * Further methods can be added using {@link DataTable.ext.oPagination}.
		 *  @type string
		 *  @default simple_numbers
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pagingType
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pagingType": "full_numbers"
		 *      } );
		 *    } )
		 */
		"sPaginationType": "simple_numbers",
	
	
		/**
		 * Enable horizontal scrolling. When a table is too wide to fit into a
		 * certain layout, or you have a large number of columns in the table, you
		 * can enable x-scrolling to show the table in a viewport, which can be
		 * scrolled. This property can be `true` which will allow the table to
		 * scroll horizontally when needed, or any CSS unit, or a number (in which
		 * case it will be treated as a pixel measurement). Setting as simply `true`
		 * is recommended.
		 *  @type boolean|string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollX
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": true,
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */
		"sScrollX": "",
	
	
		/**
		 * This property can be used to force a DataTable to use more width than it
		 * might otherwise do when x-scrolling is enabled. For example if you have a
		 * table which requires to be well spaced, this parameter is useful for
		 * "over-sizing" the table, and thus forcing scrolling. This property can by
		 * any CSS unit, or a number (in which case it will be treated as a pixel
		 * measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollXInner
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": "100%",
		 *        "scrollXInner": "110%"
		 *      } );
		 *    } );
		 */
		"sScrollXInner": "",
	
	
		/**
		 * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
		 * to the given height, and enable scrolling for any data which overflows the
		 * current viewport. This can be used as an alternative to paging to display
		 * a lot of data in a small area (although paging and scrolling can both be
		 * enabled at the same time). This property can be any CSS unit, or a number
		 * (in which case it will be treated as a pixel measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollY
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false
		 *      } );
		 *    } );
		 */
		"sScrollY": "",
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * Set the HTTP method that is used to make the Ajax call for server-side
		 * processing or Ajax sourced data.
		 *  @type string
		 *  @default GET
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverMethod
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sServerMethod": "GET",
	
	
		/**
		 * DataTables makes use of renderers when displaying HTML elements for
		 * a table. These renderers can be added or modified by plug-ins to
		 * generate suitable mark-up for a site. For example the Bootstrap
		 * integration plug-in for DataTables uses a paging button renderer to
		 * display pagination buttons in the mark-up required by Bootstrap.
		 *
		 * For further information about the renderers available see
		 * DataTable.ext.renderer
		 *  @type string|object
		 *  @default null
		 *
		 *  @name DataTable.defaults.renderer
		 *
		 */
		"renderer": null,
	
	
		/**
		 * Set the data property name that DataTables should use to get a row's id
		 * to set as the `id` property in the node.
		 *  @type string
		 *  @default DT_RowId
		 *
		 *  @name DataTable.defaults.rowId
		 */
		"rowId": "DT_RowId"
	};
	
	_fnHungarianMap( DataTable.defaults );
	
	
	
	/*
	 * Developer note - See note in model.defaults.js about the use of Hungarian
	 * notation and camel case.
	 */
	
	/**
	 * Column options that can be given to DataTables at initialisation time.
	 *  @namespace
	 */
	DataTable.defaults.column = {
		/**
		 * Define which column(s) an order will occur on for this column. This
		 * allows a column's ordering to take multiple columns into account when
		 * doing a sort or use the data from a different column. For example first
		 * name / last name columns make sense to do a multi-column sort over the
		 * two columns.
		 *  @type array|int
		 *  @default null <i>Takes the value of the column index automatically</i>
		 *
		 *  @name DataTable.defaults.column.orderData
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
		 *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
		 *          { "orderData": 2, "targets": [ 2 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderData": [ 0, 1 ] },
		 *          { "orderData": [ 1, 0 ] },
		 *          { "orderData": 2 },
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"aDataSort": null,
		"iDataSort": -1,
	
	
		/**
		 * You can control the default ordering direction, and even alter the
		 * behaviour of the sort handler (i.e. only allow ascending ordering etc)
		 * using this parameter.
		 *  @type array
		 *  @default [ 'asc', 'desc' ]
		 *
		 *  @name DataTable.defaults.column.orderSequence
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
		 *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          { "orderSequence": [ "asc" ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ] },
		 *          { "orderSequence": [ "desc" ] },
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"asSorting": [ 'asc', 'desc' ],
	
	
		/**
		 * Enable or disable filtering on the data in this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.searchable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "searchable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "searchable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSearchable": true,
	
	
		/**
		 * Enable or disable ordering on this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.orderable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSortable": true,
	
	
		/**
		 * Enable or disable the display of this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.visible
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "visible": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "visible": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bVisible": true,
	
	
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} td The TD node that has been created
		 *  @param {*} cellData The Data for the cell
		 *  @param {array|object} rowData The data for the whole row
		 *  @param {int} row The row index for the aoData data store
		 *  @param {int} col The column index for aoColumns
		 *
		 *  @name DataTable.defaults.column.createdCell
		 *  @dtopt Columns
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [3],
		 *          "createdCell": function (td, cellData, rowData, row, col) {
		 *            if ( cellData == "1.7" ) {
		 *              $(td).css('color', 'blue')
		 *            }
		 *          }
		 *        } ]
		 *      });
		 *    } );
		 */
		"fnCreatedCell": null,
	
	
		/**
		 * This parameter has been replaced by `data` in DataTables to ensure naming
		 * consistency. `dataProp` can still be used, as there is backwards
		 * compatibility in DataTables for this option, but it is strongly
		 * recommended that you use `data` in preference to `dataProp`.
		 *  @name DataTable.defaults.column.dataProp
		 */
	
	
		/**
		 * This property can be used to read data from any data source property,
		 * including deeply nested objects / properties. `data` can be given in a
		 * number of different ways which effect its behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object. Note that
		 *      function notation is recommended for use in `render` rather than
		 *      `data` as it is much simpler to use as a renderer.
		 * * `null` - use the original data source for the row rather than plucking
		 *   data directly from it. This action has effects on two other
		 *   initialisation options:
		 *    * `defaultContent` - When null is given as the `data` option and
		 *      `defaultContent` is specified for the column, the value defined by
		 *      `defaultContent` will be used for the cell.
		 *    * `render` - When null is used for the `data` option and the `render`
		 *      option is specified for the column, the whole data source for the
		 *      row is used for the renderer.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * `{array|object}` The data source for the row
		 *      * `{string}` The type call data requested - this will be 'set' when
		 *        setting data or 'filter', 'display', 'type', 'sort' or undefined
		 *        when gathering data. Note that when `undefined` is given for the
		 *        type DataTables expects to get the raw data for the object back<
		 *      * `{*}` Data to set when the second parameter is 'set'.
		 *    * Return:
		 *      * The return value from the function is not required when 'set' is
		 *        the type of call, but otherwise the return is what will be used
		 *        for the data requested.
		 *
		 * Note that `data` is a getter and setter option. If you just require
		 * formatting of data for output, you will likely want to use `render` which
		 * is simply a getter and thus simpler to use.
		 *
		 * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
		 * name change reflects the flexibility of this property and is consistent
		 * with the naming of mRender. If 'mDataProp' is given, then it will still
		 * be used by DataTables, as it automatically maps the old name to the new
		 * if required.
		 *
		 *  @type string|int|function|null
		 *  @default null <i>Use automatically calculated column index</i>
		 *
		 *  @name DataTable.defaults.column.data
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Read table data from objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {value},
		 *    //      "version": {value},
		 *    //      "grade": {value}
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/objects.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform" },
		 *          { "data": "version" },
		 *          { "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Read information from deeply nested objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {
		 *    //         "inner": {value}
		 *    //      },
		 *    //      "details": [
		 *    //         {value}, {value}
		 *    //      ]
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform.inner" },
		 *          { "data": "details.0" },
		 *          { "data": "details.1" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `data` as a function to provide different information for
		 *    // sorting, filtering and display. In this case, currency (price)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": function ( source, type, val ) {
		 *            if (type === 'set') {
		 *              source.price = val;
		 *              // Store the computed display and filter values for efficiency
		 *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
		 *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
		 *              return;
		 *            }
		 *            else if (type === 'display') {
		 *              return source.price_display;
		 *            }
		 *            else if (type === 'filter') {
		 *              return source.price_filter;
		 *            }
		 *            // 'sort', 'type' and undefined all just use the integer
		 *            return source.price;
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using default content
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null,
		 *          "defaultContent": "Click to edit"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using array notation - outputting a list from an array
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "name[, ]"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 */
		"mData": null,
	
	
		/**
		 * This property is the rendering partner to `data` and it is suggested that
		 * when you want to manipulate data for display (including filtering,
		 * sorting etc) without altering the underlying data for the table, use this
		 * property. `render` can be considered to be the the read only companion to
		 * `data` which is read / write (then as such more complex). Like `data`
		 * this option can be given in a number of different ways to effect its
		 * behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object.
		 * * `object` - use different data for the different data types requested by
		 *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
		 *   of the object is the data type the property refers to and the value can
		 *   defined using an integer, string or function using the same rules as
		 *   `render` normally does. Note that an `_` option _must_ be specified.
		 *   This is the default value to use if you haven't specified a value for
		 *   the data type requested by DataTables.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * {array|object} The data source for the row (based on `data`)
		 *      * {string} The type call data requested - this will be 'filter',
		 *        'display', 'type' or 'sort'.
		 *      * {array|object} The full data source for the row (not based on
		 *        `data`)
		 *    * Return:
		 *      * The return value from the function is what will be used for the
		 *        data requested.
		 *
		 *  @type string|int|function|object|null
		 *  @default null Use the data source value.
		 *
		 *  @name DataTable.defaults.column.render
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Create a comma separated list from an array of objects
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          {
		 *            "data": "platform",
		 *            "render": "[, ].name"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Execute a function to obtain data
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": "browserName()"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // As an object, extracting different data for the different types
		 *    // This would be used with a data source such as:
		 *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
		 *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
		 *    // (which has both forms) is used for filtering for if a user inputs either format, while
		 *    // the formatted phone number is the one that is shown in the table.
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": {
		 *            "_": "phone",
		 *            "filter": "phone_filter",
		 *            "display": "phone_display"
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Use as a function to create a link from the data source
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "download_link",
		 *          "render": function ( data, type, full ) {
		 *            return '<a href="'+data+'">Download</a>';
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 */
		"mRender": null,
	
	
		/**
		 * Change the cell type created for the column - either TD cells or TH cells. This
		 * can be useful as TH cells have semantic meaning in the table body, allowing them
		 * to act as a header for a row (you may wish to add scope='row' to the TH elements).
		 *  @type string
		 *  @default td
		 *
		 *  @name DataTable.defaults.column.cellType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Make the first column use TH cells
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "cellType": "th"
		 *        } ]
		 *      } );
		 *    } );
		 */
		"sCellType": "td",
	
	
		/**
		 * Class to give to each cell in this column.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.class
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "class": "my_class", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "class": "my_class" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sClass": "",
	
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 * Generally you shouldn't need this!
		 *  @type string
		 *  @default <i>Empty string<i>
		 *
		 *  @name DataTable.defaults.column.contentPadding
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "contentPadding": "mmm"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sContentPadding": "",
	
	
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because `data`
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 *
		 *  @name DataTable.defaults.column.defaultContent
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit",
		 *            "targets": [ -1 ]
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sDefaultContent": null,
	
	
		/**
		 * This parameter is only used in DataTables' server-side processing. It can
		 * be exceptionally useful to know what columns are being displayed on the
		 * client side, and to map these to database fields. When defined, the names
		 * also allow DataTables to reorder information from the server if it comes
		 * back in an unexpected order (i.e. if you switch your columns around on the
		 * client-side, your server-side code does not also need updating).
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.name
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "name": "engine", "targets": [ 0 ] },
		 *          { "name": "browser", "targets": [ 1 ] },
		 *          { "name": "platform", "targets": [ 2 ] },
		 *          { "name": "version", "targets": [ 3 ] },
		 *          { "name": "grade", "targets": [ 4 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "name": "engine" },
		 *          { "name": "browser" },
		 *          { "name": "platform" },
		 *          { "name": "version" },
		 *          { "name": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sName": "",
	
	
		/**
		 * Defines a data source type for the ordering which can be used to read
		 * real-time information from the table (updating the internally cached
		 * version) prior to ordering. This allows ordering to occur on user
		 * editable elements such as form inputs.
		 *  @type string
		 *  @default std
		 *
		 *  @name DataTable.defaults.column.orderDataType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
		 *          { "type": "numeric", "targets": [ 3 ] },
		 *          { "orderDataType": "dom-select", "targets": [ 4 ] },
		 *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          { "orderDataType": "dom-text" },
		 *          { "orderDataType": "dom-text", "type": "numeric" },
		 *          { "orderDataType": "dom-select" },
		 *          { "orderDataType": "dom-checkbox" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sSortDataType": "std",
	
	
		/**
		 * The title of this column.
		 *  @type string
		 *  @default null <i>Derived from the 'TH' value for this column in the
		 *    original HTML table.</i>
		 *
		 *  @name DataTable.defaults.column.title
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "title": "My column title", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "title": "My column title" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sTitle": null,
	
	
		/**
		 * The type allows you to specify how the data for this column will be
		 * ordered. Four types (string, numeric, date and html (which will strip
		 * HTML tags before ordering)) are currently available. Note that only date
		 * formats understood by Javascript's Date() object will be accepted as type
		 * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
		 * 'numeric', 'date' or 'html' (by default). Further types can be adding
		 * through plug-ins.
		 *  @type string
		 *  @default null <i>Auto-detected from raw data</i>
		 *
		 *  @name DataTable.defaults.column.type
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "type": "html", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "type": "html" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sType": null,
	
	
		/**
		 * Defining the width of the column, this parameter may take any CSS value
		 * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
		 * been given a specific width through this interface ensuring that the table
		 * remains readable.
		 *  @type string
		 *  @default null <i>Automatic</i>
		 *
		 *  @name DataTable.defaults.column.width
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "width": "20%", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "width": "20%" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sWidth": null
	};
	
	_fnHungarianMap( DataTable.defaults.column );
	
	
	
	/**
	 * DataTables settings object - this holds all the information needed for a
	 * given table, including configuration, data and current application of the
	 * table options. DataTables does not have a single instance for each DataTable
	 * with the settings attached to that instance, but rather instances of the
	 * DataTable "class" are created on-the-fly as needed (typically by a
	 * $().dataTable() call) and the settings object is then applied to that
	 * instance.
	 *
	 * Note that this object is related to {@link DataTable.defaults} but this
	 * one is the internal data store for DataTables's cache of columns. It should
	 * NOT be manipulated outside of DataTables. Any configuration should be done
	 * through the initialisation options.
	 *  @namespace
	 *  @todo Really should attach the settings object to individual instances so we
	 *    don't need to create new instances on each $().dataTable() call (if the
	 *    table already exists). It would also save passing oSettings around and
	 *    into every single function. However, this is a very significant
	 *    architecture change for DataTables and will almost certainly break
	 *    backwards compatibility with older installations. This is something that
	 *    will be done in 2.0.
	 */
	DataTable.models.oSettings = {
		/**
		 * Primary features of DataTables and their enablement state.
		 *  @namespace
		 */
		"oFeatures": {
	
			/**
			 * Flag to say if DataTables should automatically try to calculate the
			 * optimum table and columns widths (true) or not (false).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bAutoWidth": null,
	
			/**
			 * Delay the creation of TR and TD elements until they are actually
			 * needed by a driven page draw. This can give a significant speed
			 * increase for Ajax source and Javascript source data, but makes no
			 * difference at all for DOM and server-side processing tables.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bDeferRender": null,
	
			/**
			 * Enable filtering on the table or not. Note that if this is disabled
			 * then there is no filtering at all on the table, including fnFilter.
			 * To just remove the filtering input use sDom and remove the 'f' option.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bFilter": null,
	
			/**
			 * Table information element (the 'Showing x of y records' div) enable
			 * flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bInfo": null,
	
			/**
			 * Present a user control allowing the end user to change the page size
			 * when pagination is enabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bLengthChange": null,
	
			/**
			 * Pagination enabled or not. Note that if this is disabled then length
			 * changing must also be disabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bPaginate": null,
	
			/**
			 * Processing indicator enable flag whenever DataTables is enacting a
			 * user request - typically an Ajax request for server-side processing.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bProcessing": null,
	
			/**
			 * Server-side processing enabled flag - when enabled DataTables will
			 * get all data from the server for every draw - there is no filtering,
			 * sorting or paging done on the client-side.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bServerSide": null,
	
			/**
			 * Sorting enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSort": null,
	
			/**
			 * Multi-column sorting
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortMulti": null,
	
			/**
			 * Apply a class to the columns which are being sorted to provide a
			 * visual highlight or not. This can slow things down when enabled since
			 * there is a lot of DOM interaction.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortClasses": null,
	
			/**
			 * State saving enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bStateSave": null
		},
	
	
		/**
		 * Scrolling settings for a table.
		 *  @namespace
		 */
		"oScroll": {
			/**
			 * When the table is shorter in height than sScrollY, collapse the
			 * table container down to the height of the table (when true).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bCollapse": null,
	
			/**
			 * Width of the scrollbar for the web-browser's platform. Calculated
			 * during table initialisation.
			 *  @type int
			 *  @default 0
			 */
			"iBarWidth": 0,
	
			/**
			 * Viewport width for horizontal scrolling. Horizontal scrolling is
			 * disabled if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sX": null,
	
			/**
			 * Width to expand the table to when using x-scrolling. Typically you
			 * should not need to use this.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 *  @deprecated
			 */
			"sXInner": null,
	
			/**
			 * Viewport height for vertical scrolling. Vertical scrolling is disabled
			 * if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sY": null
		},
	
		/**
		 * Language information for the table.
		 *  @namespace
		 *  @extends DataTable.defaults.oLanguage
		 */
		"oLanguage": {
			/**
			 * Information callback function. See
			 * {@link DataTable.defaults.fnInfoCallback}
			 *  @type function
			 *  @default null
			 */
			"fnInfoCallback": null
		},
	
		/**
		 * Browser support parameters
		 *  @namespace
		 */
		"oBrowser": {
			/**
			 * Indicate if the browser incorrectly calculates width:100% inside a
			 * scrolling element (IE6/7)
			 *  @type boolean
			 *  @default false
			 */
			"bScrollOversize": false,
	
			/**
			 * Determine if the vertical scrollbar is on the right or left of the
			 * scrolling container - needed for rtl language layout, although not
			 * all browsers move the scrollbar (Safari).
			 *  @type boolean
			 *  @default false
			 */
			"bScrollbarLeft": false,
	
			/**
			 * Flag for if `getBoundingClientRect` is fully supported or not
			 *  @type boolean
			 *  @default false
			 */
			"bBounding": false,
	
			/**
			 * Browser scrollbar width
			 *  @type integer
			 *  @default 0
			 */
			"barWidth": 0
		},
	
	
		"ajax": null,
	
	
		/**
		 * Array referencing the nodes which are used for the features. The
		 * parameters of this object match what is allowed by sDom - i.e.
		 *   <ul>
		 *     <li>'l' - Length changing</li>
		 *     <li>'f' - Filtering input</li>
		 *     <li>'t' - The table!</li>
		 *     <li>'i' - Information</li>
		 *     <li>'p' - Pagination</li>
		 *     <li>'r' - pRocessing</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aanFeatures": [],
	
		/**
		 * Store data information - see {@link DataTable.models.oRow} for detailed
		 * information.
		 *  @type array
		 *  @default []
		 */
		"aoData": [],
	
		/**
		 * Array of indexes which are in the current display (after filtering etc)
		 *  @type array
		 *  @default []
		 */
		"aiDisplay": [],
	
		/**
		 * Array of indexes for display - no filtering
		 *  @type array
		 *  @default []
		 */
		"aiDisplayMaster": [],
	
		/**
		 * Map of row ids to data indexes
		 *  @type object
		 *  @default {}
		 */
		"aIds": {},
	
		/**
		 * Store information about each column that is in use
		 *  @type array
		 *  @default []
		 */
		"aoColumns": [],
	
		/**
		 * Store information about the table's header
		 *  @type array
		 *  @default []
		 */
		"aoHeader": [],
	
		/**
		 * Store information about the table's footer
		 *  @type array
		 *  @default []
		 */
		"aoFooter": [],
	
		/**
		 * Store the applied global search information in case we want to force a
		 * research or compare the old search to a new one.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 */
		"oPreviousSearch": {},
	
		/**
		 * Store the applied search for each column - see
		 * {@link DataTable.models.oSearch} for the format that is used for the
		 * filtering information for each column.
		 *  @type array
		 *  @default []
		 */
		"aoPreSearchCols": [],
	
		/**
		 * Sorting that is applied to the table. Note that the inner arrays are
		 * used in the following manner:
		 * <ul>
		 *   <li>Index 0 - column number</li>
		 *   <li>Index 1 - current sorting direction</li>
		 * </ul>
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @todo These inner arrays should really be objects
		 */
		"aaSorting": null,
	
		/**
		 * Sorting that is always applied to the table (i.e. prefixed in front of
		 * aaSorting).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"aaSortingFixed": [],
	
		/**
		 * Classes to use for the striping of a table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"asStripeClasses": null,
	
		/**
		 * If restoring a table - we should restore its striping classes as well
		 *  @type array
		 *  @default []
		 */
		"asDestroyStripes": [],
	
		/**
		 * If restoring a table - we should restore its width
		 *  @type int
		 *  @default 0
		 */
		"sDestroyWidth": 0,
	
		/**
		 * Callback functions array for every time a row is inserted (i.e. on a draw).
		 *  @type array
		 *  @default []
		 */
		"aoRowCallback": [],
	
		/**
		 * Callback functions for the header on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoHeaderCallback": [],
	
		/**
		 * Callback function for the footer on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoFooterCallback": [],
	
		/**
		 * Array of callback functions for draw callback functions
		 *  @type array
		 *  @default []
		 */
		"aoDrawCallback": [],
	
		/**
		 * Array of callback functions for row created function
		 *  @type array
		 *  @default []
		 */
		"aoRowCreatedCallback": [],
	
		/**
		 * Callback functions for just before the table is redrawn. A return of
		 * false will be used to cancel the draw.
		 *  @type array
		 *  @default []
		 */
		"aoPreDrawCallback": [],
	
		/**
		 * Callback functions for when the table has been initialised.
		 *  @type array
		 *  @default []
		 */
		"aoInitComplete": [],
	
	
		/**
		 * Callbacks for modifying the settings to be stored for state saving, prior to
		 * saving state.
		 *  @type array
		 *  @default []
		 */
		"aoStateSaveParams": [],
	
		/**
		 * Callbacks for modifying the settings that have been stored for state saving
		 * prior to using the stored values to restore the state.
		 *  @type array
		 *  @default []
		 */
		"aoStateLoadParams": [],
	
		/**
		 * Callbacks for operating on the settings object once the saved state has been
		 * loaded
		 *  @type array
		 *  @default []
		 */
		"aoStateLoaded": [],
	
		/**
		 * Cache the table ID for quick access
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sTableId": "",
	
		/**
		 * The TABLE node for the main table
		 *  @type node
		 *  @default null
		 */
		"nTable": null,
	
		/**
		 * Permanent ref to the thead element
		 *  @type node
		 *  @default null
		 */
		"nTHead": null,
	
		/**
		 * Permanent ref to the tfoot element - if it exists
		 *  @type node
		 *  @default null
		 */
		"nTFoot": null,
	
		/**
		 * Permanent ref to the tbody element
		 *  @type node
		 *  @default null
		 */
		"nTBody": null,
	
		/**
		 * Cache the wrapper node (contains all DataTables controlled elements)
		 *  @type node
		 *  @default null
		 */
		"nTableWrapper": null,
	
		/**
		 * Indicate if when using server-side processing the loading of data
		 * should be deferred until the second draw.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 *  @default false
		 */
		"bDeferLoading": false,
	
		/**
		 * Indicate if all required information has been read in
		 *  @type boolean
		 *  @default false
		 */
		"bInitialised": false,
	
		/**
		 * Information about open rows. Each object in the array has the parameters
		 * 'nTr' and 'nParent'
		 *  @type array
		 *  @default []
		 */
		"aoOpenRows": [],
	
		/**
		 * Dictate the positioning of DataTables' control elements - see
		 * {@link DataTable.model.oInit.sDom}.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sDom": null,
	
		/**
		 * Search delay (in mS)
		 *  @type integer
		 *  @default null
		 */
		"searchDelay": null,
	
		/**
		 * Which type of pagination should be used.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default two_button
		 */
		"sPaginationType": "two_button",
	
		/**
		 * The state duration (for `stateSave`) in seconds.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type int
		 *  @default 0
		 */
		"iStateDuration": 0,
	
		/**
		 * Array of callback functions for state saving. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the JSON string to save that has been thus far created. Returns
		 *       a JSON string to be inserted into a json object
		 *       (i.e. '"param": [ 0, 1, 2]')</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateSave": [],
	
		/**
		 * Array of callback functions for state loading. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the object stored. May return false to cancel state loading</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateLoad": [],
	
		/**
		 * State that was saved. Useful for back reference
		 *  @type object
		 *  @default null
		 */
		"oSavedState": null,
	
		/**
		 * State that was loaded. Useful for back reference
		 *  @type object
		 *  @default null
		 */
		"oLoadedState": null,
	
		/**
		 * Source url for AJAX data for the table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sAjaxSource": null,
	
		/**
		 * Property from a given object from which to read the table data from. This
		 * can be an empty string (when not server-side processing), in which case
		 * it is  assumed an an array is given directly.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sAjaxDataProp": null,
	
		/**
		 * The last jQuery XHR object that was used for server-side data gathering.
		 * This can be used for working with the XHR information in one of the
		 * callbacks
		 *  @type object
		 *  @default null
		 */
		"jqXHR": null,
	
		/**
		 * JSON returned from the server in the last Ajax request
		 *  @type object
		 *  @default undefined
		 */
		"json": undefined,
	
		/**
		 * Data submitted as part of the last Ajax request
		 *  @type object
		 *  @default undefined
		 */
		"oAjaxData": undefined,
	
		/**
		 * Function to get the server-side data.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnServerData": null,
	
		/**
		 * Functions which are called prior to sending an Ajax request so extra
		 * parameters can easily be sent to the server
		 *  @type array
		 *  @default []
		 */
		"aoServerParams": [],
	
		/**
		 * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
		 * required).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sServerMethod": null,
	
		/**
		 * Format numbers for display.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnFormatNumber": null,
	
		/**
		 * List of options that can be used for the user selectable length menu.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"aLengthMenu": null,
	
		/**
		 * Counter for the draws that the table does. Also used as a tracker for
		 * server-side processing
		 *  @type int
		 *  @default 0
		 */
		"iDraw": 0,
	
		/**
		 * Indicate if a redraw is being done - useful for Ajax
		 *  @type boolean
		 *  @default false
		 */
		"bDrawing": false,
	
		/**
		 * Draw index (iDraw) of the last error when parsing the returned data
		 *  @type int
		 *  @default -1
		 */
		"iDrawError": -1,
	
		/**
		 * Paging display length
		 *  @type int
		 *  @default 10
		 */
		"_iDisplayLength": 10,
	
		/**
		 * Paging start point - aiDisplay index
		 *  @type int
		 *  @default 0
		 */
		"_iDisplayStart": 0,
	
		/**
		 * Server-side processing - number of records in the result set
		 * (i.e. before filtering), Use fnRecordsTotal rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type int
		 *  @default 0
		 *  @private
		 */
		"_iRecordsTotal": 0,
	
		/**
		 * Server-side processing - number of records in the current display set
		 * (i.e. after filtering). Use fnRecordsDisplay rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type boolean
		 *  @default 0
		 *  @private
		 */
		"_iRecordsDisplay": 0,
	
		/**
		 * The classes to use for the table
		 *  @type object
		 *  @default {}
		 */
		"oClasses": {},
	
		/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if filtering has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bFiltered": false,
	
		/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if sorting has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bSorted": false,
	
		/**
		 * Indicate that if multiple rows are in the header and there is more than
		 * one unique cell per column, if the top one (true) or bottom one (false)
		 * should be used for sorting / title by DataTables.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bSortCellsTop": null,
	
		/**
		 * Initialisation object that is used for the table
		 *  @type object
		 *  @default null
		 */
		"oInit": null,
	
		/**
		 * Destroy callback functions - for plug-ins to attach themselves to the
		 * destroy so they can clean up markup and events.
		 *  @type array
		 *  @default []
		 */
		"aoDestroyCallback": [],
	
	
		/**
		 * Get the number of records in the current record set, before filtering
		 *  @type function
		 */
		"fnRecordsTotal": function ()
		{
			return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsTotal * 1 :
				this.aiDisplayMaster.length;
		},
	
		/**
		 * Get the number of records in the current record set, after filtering
		 *  @type function
		 */
		"fnRecordsDisplay": function ()
		{
			return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsDisplay * 1 :
				this.aiDisplay.length;
		},
	
		/**
		 * Get the display end point - aiDisplay index
		 *  @type function
		 */
		"fnDisplayEnd": function ()
		{
			var
				len      = this._iDisplayLength,
				start    = this._iDisplayStart,
				calc     = start + len,
				records  = this.aiDisplay.length,
				features = this.oFeatures,
				paginate = features.bPaginate;
	
			if ( features.bServerSide ) {
				return paginate === false || len === -1 ?
					start + records :
					Math.min( start+len, this._iRecordsDisplay );
			}
			else {
				return ! paginate || calc>records || len===-1 ?
					records :
					calc;
			}
		},
	
		/**
		 * The DataTables object for this table
		 *  @type object
		 *  @default null
		 */
		"oInstance": null,
	
		/**
		 * Unique identifier for each instance of the DataTables object. If there
		 * is an ID on the table node, then it takes that value, otherwise an
		 * incrementing internal counter is used.
		 *  @type string
		 *  @default null
		 */
		"sInstance": null,
	
		/**
		 * tabindex attribute value that is added to DataTables control elements, allowing
		 * keyboard navigation of the table and its controls.
		 */
		"iTabIndex": 0,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollHead": null,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollFoot": null,
	
		/**
		 * Last applied sort
		 *  @type array
		 *  @default []
		 */
		"aLastSort": [],
	
		/**
		 * Stored plug-in instances
		 *  @type object
		 *  @default {}
		 */
		"oPlugins": {},
	
		/**
		 * Function used to get a row's id from the row's data
		 *  @type function
		 *  @default null
		 */
		"rowIdFn": null,
	
		/**
		 * Data location where to store a row's id
		 *  @type string
		 *  @default null
		 */
		"rowId": null
	};
	
	/**
	 * Extension object for DataTables that is used to provide all extension
	 * options.
	 *
	 * Note that the `DataTable.ext` object is available through
	 * `jQuery.fn.dataTable.ext` where it may be accessed and manipulated. It is
	 * also aliased to `jQuery.fn.dataTableExt` for historic reasons.
	 *  @namespace
	 *  @extends DataTable.models.ext
	 */
	
	
	/**
	 * DataTables extensions
	 * 
	 * This namespace acts as a collection area for plug-ins that can be used to
	 * extend DataTables capabilities. Indeed many of the build in methods
	 * use this method to provide their own capabilities (sorting methods for
	 * example).
	 *
	 * Note that this namespace is aliased to `jQuery.fn.dataTableExt` for legacy
	 * reasons
	 *
	 *  @namespace
	 */
	DataTable.ext = _ext = {
		/**
		 * Buttons. For use with the Buttons extension for DataTables. This is
		 * defined here so other extensions can define buttons regardless of load
		 * order. It is _not_ used by DataTables core.
		 *
		 *  @type object
		 *  @default {}
		 */
		buttons: {},
	
	
		/**
		 * Element class names
		 *
		 *  @type object
		 *  @default {}
		 */
		classes: {},
	
	
		/**
		 * DataTables build type (expanded by the download builder)
		 *
		 *  @type string
		 */
		build:"bs5/jq-3.6.0/dt-1.13.1/e-2.0.10",
	
	
		/**
		 * Error reporting.
		 * 
		 * How should DataTables report an error. Can take the value 'alert',
		 * 'throw', 'none' or a function.
		 *
		 *  @type string|function
		 *  @default alert
		 */
		errMode: "alert",
	
	
		/**
		 * Feature plug-ins.
		 * 
		 * This is an array of objects which describe the feature plug-ins that are
		 * available to DataTables. These feature plug-ins are then available for
		 * use through the `dom` initialisation option.
		 * 
		 * Each feature plug-in is described by an object which must have the
		 * following properties:
		 * 
		 * * `fnInit` - function that is used to initialise the plug-in,
		 * * `cFeature` - a character so the feature can be enabled by the `dom`
		 *   instillation option. This is case sensitive.
		 *
		 * The `fnInit` function has the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 *
		 * And the following return is expected:
		 * 
		 * * {node|null} The element which contains your feature. Note that the
		 *   return may also be void if your plug-in does not require to inject any
		 *   DOM elements into DataTables control (`dom`) - for example this might
		 *   be useful when developing a plug-in which allows table control via
		 *   keyboard entry
		 *
		 *  @type array
		 *
		 *  @example
		 *    $.fn.dataTable.ext.features.push( {
		 *      "fnInit": function( oSettings ) {
		 *        return new TableTools( { "oDTSettings": oSettings } );
		 *      },
		 *      "cFeature": "T"
		 *    } );
		 */
		feature: [],
	
	
		/**
		 * Row searching.
		 * 
		 * This method of searching is complimentary to the default type based
		 * searching, and a lot more comprehensive as it allows you complete control
		 * over the searching logic. Each element in this array is a function
		 * (parameters described below) that is called for every row in the table,
		 * and your logic decides if it should be included in the searching data set
		 * or not.
		 *
		 * Searching functions have the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{array|object}` Data for the row to be processed (same as the
		 *    original format that was passed in as the data source, or an array
		 *    from a DOM data source
		 * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
		 *    can be useful to retrieve the `TR` element if you need DOM interaction.
		 *
		 * And the following return is expected:
		 *
		 * * {boolean} Include the row in the searched result set (true) or not
		 *   (false)
		 *
		 * Note that as with the main search ability in DataTables, technically this
		 * is "filtering", since it is subtractive. However, for consistency in
		 * naming we call it searching here.
		 *
		 *  @type array
		 *  @default []
		 *
		 *  @example
		 *    // The following example shows custom search being applied to the
		 *    // fourth column (i.e. the data[3] index) based on two input values
		 *    // from the end-user, matching the data in a certain range.
		 *    $.fn.dataTable.ext.search.push(
		 *      function( settings, data, dataIndex ) {
		 *        var min = document.getElementById('min').value * 1;
		 *        var max = document.getElementById('max').value * 1;
		 *        var version = data[3] == "-" ? 0 : data[3]*1;
		 *
		 *        if ( min == "" && max == "" ) {
		 *          return true;
		 *        }
		 *        else if ( min == "" && version < max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && "" == max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && version < max ) {
		 *          return true;
		 *        }
		 *        return false;
		 *      }
		 *    );
		 */
		search: [],
	
	
		/**
		 * Selector extensions
		 *
		 * The `selector` option can be used to extend the options available for the
		 * selector modifier options (`selector-modifier` object data type) that
		 * each of the three built in selector types offer (row, column and cell +
		 * their plural counterparts). For example the Select extension uses this
		 * mechanism to provide an option to select only rows, columns and cells
		 * that have been marked as selected by the end user (`{selected: true}`),
		 * which can be used in conjunction with the existing built in selector
		 * options.
		 *
		 * Each property is an array to which functions can be pushed. The functions
		 * take three attributes:
		 *
		 * * Settings object for the host table
		 * * Options object (`selector-modifier` object type)
		 * * Array of selected item indexes
		 *
		 * The return is an array of the resulting item indexes after the custom
		 * selector has been applied.
		 *
		 *  @type object
		 */
		selector: {
			cell: [],
			column: [],
			row: []
		},
	
	
		/**
		 * Internal functions, exposed for used in plug-ins.
		 * 
		 * Please note that you should not need to use the internal methods for
		 * anything other than a plug-in (and even then, try to avoid if possible).
		 * The internal function may change between releases.
		 *
		 *  @type object
		 *  @default {}
		 */
		internal: {},
	
	
		/**
		 * Legacy configuration options. Enable and disable legacy options that
		 * are available in DataTables.
		 *
		 *  @type object
		 */
		legacy: {
			/**
			 * Enable / disable DataTables 1.9 compatible server-side processing
			 * requests
			 *
			 *  @type boolean
			 *  @default null
			 */
			ajax: null
		},
	
	
		/**
		 * Pagination plug-in methods.
		 * 
		 * Each entry in this object is a function and defines which buttons should
		 * be shown by the pagination rendering method that is used for the table:
		 * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
		 * buttons are displayed in the document, while the functions here tell it
		 * what buttons to display. This is done by returning an array of button
		 * descriptions (what each button will do).
		 *
		 * Pagination types (the four built in options and any additional plug-in
		 * options defined here) can be used through the `paginationType`
		 * initialisation parameter.
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{int} page` The current page index
		 * 2. `{int} pages` The number of pages in the table
		 *
		 * Each function is expected to return an array where each element of the
		 * array can be one of:
		 *
		 * * `first` - Jump to first page when activated
		 * * `last` - Jump to last page when activated
		 * * `previous` - Show previous page when activated
		 * * `next` - Show next page when activated
		 * * `{int}` - Show page of the index given
		 * * `{array}` - A nested array containing the above elements to add a
		 *   containing 'DIV' element (might be useful for styling).
		 *
		 * Note that DataTables v1.9- used this object slightly differently whereby
		 * an object with two functions would be defined for each plug-in. That
		 * ability is still supported by DataTables 1.10+ to provide backwards
		 * compatibility, but this option of use is now decremented and no longer
		 * documented in DataTables 1.10+.
		 *
		 *  @type object
		 *  @default {}
		 *
		 *  @example
		 *    // Show previous, next and current page buttons only
		 *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
		 *      return [ 'previous', page, 'next' ];
		 *    };
		 */
		pager: {},
	
	
		renderer: {
			pageButton: {},
			header: {}
		},
	
	
		/**
		 * Ordering plug-ins - custom data source
		 * 
		 * The extension options for ordering of data available here is complimentary
		 * to the default type based ordering that DataTables typically uses. It
		 * allows much greater control over the the data that is being used to
		 * order a column, but is necessarily therefore more complex.
		 * 
		 * This type of ordering is useful if you want to do ordering based on data
		 * live from the DOM (for example the contents of an 'input' element) rather
		 * than just the static string that DataTables knows of.
		 * 
		 * The way these plug-ins work is that you create an array of the values you
		 * wish to be ordering for the column in question and then return that
		 * array. The data in the array much be in the index order of the rows in
		 * the table (not the currently ordering order!). Which order data gathering
		 * function is run here depends on the `dt-init columns.orderDataType`
		 * parameter that is used for the column (if any).
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{int}` Target column index
		 *
		 * Each function is expected to return an array:
		 *
		 * * `{array}` Data for the column to be ordering upon
		 *
		 *  @type array
		 *
		 *  @example
		 *    // Ordering using `input` node values
		 *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
		 *    {
		 *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
		 *        return $('input', td).val();
		 *      } );
		 *    }
		 */
		order: {},
	
	
		/**
		 * Type based plug-ins.
		 *
		 * Each column in DataTables has a type assigned to it, either by automatic
		 * detection or by direct assignment using the `type` option for the column.
		 * The type of a column will effect how it is ordering and search (plug-ins
		 * can also make use of the column type if required).
		 *
		 * @namespace
		 */
		type: {
			/**
			 * Type detection functions.
			 *
			 * The functions defined in this object are used to automatically detect
			 * a column's type, making initialisation of DataTables super easy, even
			 * when complex data is in the table.
			 *
			 * The functions defined take two parameters:
			 *
		     *  1. `{*}` Data from the column cell to be analysed
		     *  2. `{settings}` DataTables settings object. This can be used to
		     *     perform context specific type detection - for example detection
		     *     based on language settings such as using a comma for a decimal
		     *     place. Generally speaking the options from the settings will not
		     *     be required
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Data type detected, or null if unknown (and thus
			 *   pass it on to the other type detection functions.
			 *
			 *  @type array
			 *
			 *  @example
			 *    // Currency type detection plug-in:
			 *    $.fn.dataTable.ext.type.detect.push(
			 *      function ( data, settings ) {
			 *        // Check the numeric part
			 *        if ( ! data.substring(1).match(/[0-9]/) ) {
			 *          return null;
			 *        }
			 *
			 *        // Check prefixed by currency
			 *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
			 *          return 'currency';
			 *        }
			 *        return null;
			 *      }
			 *    );
			 */
			detect: [],
	
	
			/**
			 * Type based search formatting.
			 *
			 * The type based searching functions can be used to pre-format the
			 * data to be search on. For example, it can be used to strip HTML
			 * tags or to de-format telephone numbers for numeric only searching.
			 *
			 * Note that is a search is not defined for a column of a given type,
			 * no search formatting will be performed.
			 * 
			 * Pre-processing of searching data plug-ins - When you assign the sType
			 * for a column (or have it automatically detected for you by DataTables
			 * or a type detection plug-in), you will typically be using this for
			 * custom sorting, but it can also be used to provide custom searching
			 * by allowing you to pre-processing the data and returning the data in
			 * the format that should be searched upon. This is done by adding
			 * functions this object with a parameter name which matches the sType
			 * for that target column. This is the corollary of <i>afnSortData</i>
			 * for searching data.
			 *
			 * The functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for searching
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Formatted string that will be used for the searching.
			 *
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
			 *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
			 *    }
			 */
			search: {},
	
	
			/**
			 * Type based ordering.
			 *
			 * The column type tells DataTables what ordering to apply to the table
			 * when a column is sorted upon. The order for each type that is defined,
			 * is defined by the functions available in this object.
			 *
			 * Each ordering option can be described by three properties added to
			 * this object:
			 *
			 * * `{type}-pre` - Pre-formatting function
			 * * `{type}-asc` - Ascending order function
			 * * `{type}-desc` - Descending order function
			 *
			 * All three can be used together, only `{type}-pre` or only
			 * `{type}-asc` and `{type}-desc` together. It is generally recommended
			 * that only `{type}-pre` is used, as this provides the optimal
			 * implementation in terms of speed, although the others are provided
			 * for compatibility with existing Javascript sort functions.
			 *
			 * `{type}-pre`: Functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for ordering
			 *
			 * And return:
			 *
			 * * `{*}` Data to be sorted upon
			 *
			 * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
			 * functions, taking two parameters:
			 *
		     *  1. `{*}` Data to compare to the second parameter
		     *  2. `{*}` Data to compare to the first parameter
			 *
			 * And returning:
			 *
			 * * `{*}` Ordering match: <0 if first parameter should be sorted lower
			 *   than the second parameter, ===0 if the two parameters are equal and
			 *   >0 if the first parameter should be sorted height than the second
			 *   parameter.
			 * 
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    // Numeric ordering of formatted numbers with a pre-formatter
			 *    $.extend( $.fn.dataTable.ext.type.order, {
			 *      "string-pre": function(x) {
			 *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
			 *        return parseFloat( a );
			 *      }
			 *    } );
			 *
			 *  @example
			 *    // Case-sensitive string ordering, with no pre-formatting method
			 *    $.extend( $.fn.dataTable.ext.order, {
			 *      "string-case-asc": function(x,y) {
			 *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			 *      },
			 *      "string-case-desc": function(x,y) {
			 *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
			 *      }
			 *    } );
			 */
			order: {}
		},
	
		/**
		 * Unique DataTables instance counter
		 *
		 * @type int
		 * @private
		 */
		_unique: 0,
	
	
		//
		// Depreciated
		// The following properties are retained for backwards compatibility only.
		// The should not be used in new projects and will be removed in a future
		// version
		//
	
		/**
		 * Version check function.
		 *  @type function
		 *  @depreciated Since 1.10
		 */
		fnVersionCheck: DataTable.fnVersionCheck,
	
	
		/**
		 * Index for what 'this' index API functions should use
		 *  @type int
		 *  @deprecated Since v1.10
		 */
		iApiIndex: 0,
	
	
		/**
		 * jQuery UI class container
		 *  @type object
		 *  @deprecated Since v1.10
		 */
		oJUIClasses: {},
	
	
		/**
		 * Software version
		 *  @type string
		 *  @deprecated Since v1.10
		 */
		sVersion: DataTable.version
	};
	
	
	//
	// Backwards compatibility. Alias to pre 1.10 Hungarian notation counter parts
	//
	$.extend( _ext, {
		afnFiltering: _ext.search,
		aTypes:       _ext.type.detect,
		ofnSearch:    _ext.type.search,
		oSort:        _ext.type.order,
		afnSortData:  _ext.order,
		aoFeatures:   _ext.feature,
		oApi:         _ext.internal,
		oStdClasses:  _ext.classes,
		oPagination:  _ext.pager
	} );
	
	
	$.extend( DataTable.ext.classes, {
		"sTable": "dataTable",
		"sNoFooter": "no-footer",
	
		/* Paging buttons */
		"sPageButton": "paginate_button",
		"sPageButtonActive": "current",
		"sPageButtonDisabled": "disabled",
	
		/* Striping classes */
		"sStripeOdd": "odd",
		"sStripeEven": "even",
	
		/* Empty row */
		"sRowEmpty": "dataTables_empty",
	
		/* Features */
		"sWrapper": "dataTables_wrapper",
		"sFilter": "dataTables_filter",
		"sInfo": "dataTables_info",
		"sPaging": "dataTables_paginate paging_", /* Note that the type is postfixed */
		"sLength": "dataTables_length",
		"sProcessing": "dataTables_processing",
	
		/* Sorting */
		"sSortAsc": "sorting_asc",
		"sSortDesc": "sorting_desc",
		"sSortable": "sorting", /* Sortable in both directions */
		"sSortableAsc": "sorting_desc_disabled",
		"sSortableDesc": "sorting_asc_disabled",
		"sSortableNone": "sorting_disabled",
		"sSortColumn": "sorting_", /* Note that an int is postfixed for the sorting order */
	
		/* Filtering */
		"sFilterInput": "",
	
		/* Page length */
		"sLengthSelect": "",
	
		/* Scrolling */
		"sScrollWrapper": "dataTables_scroll",
		"sScrollHead": "dataTables_scrollHead",
		"sScrollHeadInner": "dataTables_scrollHeadInner",
		"sScrollBody": "dataTables_scrollBody",
		"sScrollFoot": "dataTables_scrollFoot",
		"sScrollFootInner": "dataTables_scrollFootInner",
	
		/* Misc */
		"sHeaderTH": "",
		"sFooterTH": "",
	
		// Deprecated
		"sSortJUIAsc": "",
		"sSortJUIDesc": "",
		"sSortJUI": "",
		"sSortJUIAscAllowed": "",
		"sSortJUIDescAllowed": "",
		"sSortJUIWrapper": "",
		"sSortIcon": "",
		"sJUIHeader": "",
		"sJUIFooter": ""
	} );
	
	
	var extPagination = DataTable.ext.pager;
	
	function _numbers ( page, pages ) {
		var
			numbers = [],
			buttons = extPagination.numbers_length,
			half = Math.floor( buttons / 2 ),
			i = 1;
	
		if ( pages <= buttons ) {
			numbers = _range( 0, pages );
		}
		else if ( page <= half ) {
			numbers = _range( 0, buttons-2 );
			numbers.push( 'ellipsis' );
			numbers.push( pages-1 );
		}
		else if ( page >= pages - 1 - half ) {
			numbers = _range( pages-(buttons-2), pages );
			numbers.splice( 0, 0, 'ellipsis' ); // no unshift in ie6
			numbers.splice( 0, 0, 0 );
		}
		else {
			numbers = _range( page-half+2, page+half-1 );
			numbers.push( 'ellipsis' );
			numbers.push( pages-1 );
			numbers.splice( 0, 0, 'ellipsis' );
			numbers.splice( 0, 0, 0 );
		}
	
		numbers.DT_el = 'span';
		return numbers;
	}
	
	
	$.extend( extPagination, {
		simple: function ( page, pages ) {
			return [ 'previous', 'next' ];
		},
	
		full: function ( page, pages ) {
			return [  'first', 'previous', 'next', 'last' ];
		},
	
		numbers: function ( page, pages ) {
			return [ _numbers(page, pages) ];
		},
	
		simple_numbers: function ( page, pages ) {
			return [ 'previous', _numbers(page, pages), 'next' ];
		},
	
		full_numbers: function ( page, pages ) {
			return [ 'first', 'previous', _numbers(page, pages), 'next', 'last' ];
		},
		
		first_last_numbers: function (page, pages) {
	 		return ['first', _numbers(page, pages), 'last'];
	 	},
	
		// For testing and plug-ins to use
		_numbers: _numbers,
	
		// Number of number buttons (including ellipsis) to show. _Must be odd!_
		numbers_length: 7
	} );
	
	
	$.extend( true, DataTable.ext.renderer, {
		pageButton: {
			_: function ( settings, host, idx, buttons, page, pages ) {
				var classes = settings.oClasses;
				var lang = settings.oLanguage.oPaginate;
				var aria = settings.oLanguage.oAria.paginate || {};
				var btnDisplay, btnClass;
	
				var attach = function( container, buttons ) {
					var i, ien, node, button, tabIndex;
					var disabledClass = classes.sPageButtonDisabled;
					var clickHandler = function ( e ) {
						_fnPageChange( settings, e.data.action, true );
					};
	
					for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
						button = buttons[i];
	
						if ( Array.isArray( button ) ) {
							var inner = $( '<'+(button.DT_el || 'div')+'/>' )
								.appendTo( container );
							attach( inner, button );
						}
						else {
							btnDisplay = null;
							btnClass = button;
							tabIndex = settings.iTabIndex;
	
							switch ( button ) {
								case 'ellipsis':
									container.append('<span class="ellipsis">&#x2026;</span>');
									break;
	
								case 'first':
									btnDisplay = lang.sFirst;
	
									if ( page === 0 ) {
										tabIndex = -1;
										btnClass += ' ' + disabledClass;
									}
									break;
	
								case 'previous':
									btnDisplay = lang.sPrevious;
	
									if ( page === 0 ) {
										tabIndex = -1;
										btnClass += ' ' + disabledClass;
									}
									break;
	
								case 'next':
									btnDisplay = lang.sNext;
	
									if ( pages === 0 || page === pages-1 ) {
										tabIndex = -1;
										btnClass += ' ' + disabledClass;
									}
									break;
	
								case 'last':
									btnDisplay = lang.sLast;
	
									if ( pages === 0 || page === pages-1 ) {
										tabIndex = -1;
										btnClass += ' ' + disabledClass;
									}
									break;
	
								default:
									btnDisplay = settings.fnFormatNumber( button + 1 );
									btnClass = page === button ?
										classes.sPageButtonActive : '';
									break;
							}
	
							if ( btnDisplay !== null ) {
								node = $('<a>', {
										'class': classes.sPageButton+' '+btnClass,
										'aria-controls': settings.sTableId,
										'aria-label': aria[ button ],
										'data-dt-idx': button,
										'tabindex': tabIndex,
										'id': idx === 0 && typeof button === 'string' ?
											settings.sTableId +'_'+ button :
											null
									} )
									.html( btnDisplay )
									.appendTo( container );
	
								_fnBindAction(
									node, {action: button}, clickHandler
								);
							}
						}
					}
				};
	
				// IE9 throws an 'unknown error' if document.activeElement is used
				// inside an iframe or frame. Try / catch the error. Not good for
				// accessibility, but neither are frames.
				var activeEl;
	
				try {
					// Because this approach is destroying and recreating the paging
					// elements, focus is lost on the select button which is bad for
					// accessibility. So we want to restore focus once the draw has
					// completed
					activeEl = $(host).find(document.activeElement).data('dt-idx');
				}
				catch (e) {}
	
				attach( $(host).empty(), buttons );
	
				if ( activeEl !== undefined ) {
					$(host).find( '[data-dt-idx='+activeEl+']' ).trigger('focus');
				}
			}
		}
	} );
	
	
	
	// Built in type detection. See model.ext.aTypes for information about
	// what is required from this methods.
	$.extend( DataTable.ext.type.detect, [
		// Plain numbers - first since V8 detects some plain numbers as dates
		// e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _isNumber( d, decimal ) ? 'num'+decimal : null;
		},
	
		// Dates (only those recognised by the browser's Date.parse)
		function ( d, settings )
		{
			// V8 tries _very_ hard to make a string passed into `Date.parse()`
			// valid, so we need to use a regex to restrict date formats. Use a
			// plug-in for anything other than ISO8601 style strings
			if ( d && !(d instanceof Date) && ! _re_date.test(d) ) {
				return null;
			}
			var parsed = Date.parse(d);
			return (parsed !== null && !isNaN(parsed)) || _empty(d) ? 'date' : null;
		},
	
		// Formatted numbers
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _isNumber( d, decimal, true ) ? 'num-fmt'+decimal : null;
		},
	
		// HTML numeric
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _htmlNumeric( d, decimal ) ? 'html-num'+decimal : null;
		},
	
		// HTML numeric, formatted
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _htmlNumeric( d, decimal, true ) ? 'html-num-fmt'+decimal : null;
		},
	
		// HTML (this is strict checking - there must be html)
		function ( d, settings )
		{
			return _empty( d ) || (typeof d === 'string' && d.indexOf('<') !== -1) ?
				'html' : null;
		}
	] );
	
	
	
	// Filter formatting functions. See model.ext.ofnSearch for information about
	// what is required from these methods.
	// 
	// Note that additional search methods are added for the html numbers and
	// html formatted numbers by `_addNumericSort()` when we know what the decimal
	// place is
	
	
	$.extend( DataTable.ext.type.search, {
		html: function ( data ) {
			return _empty(data) ?
				data :
				typeof data === 'string' ?
					data
						.replace( _re_new_lines, " " )
						.replace( _re_html, "" ) :
					'';
		},
	
		string: function ( data ) {
			return _empty(data) ?
				data :
				typeof data === 'string' ?
					data.replace( _re_new_lines, " " ) :
					data;
		}
	} );
	
	
	
	var __numericReplace = function ( d, decimalPlace, re1, re2 ) {
		if ( d !== 0 && (!d || d === '-') ) {
			return -Infinity;
		}
	
		// If a decimal place other than `.` is used, it needs to be given to the
		// function so we can detect it and replace with a `.` which is the only
		// decimal place Javascript recognises - it is not locale aware.
		if ( decimalPlace ) {
			d = _numToDecimal( d, decimalPlace );
		}
	
		if ( d.replace ) {
			if ( re1 ) {
				d = d.replace( re1, '' );
			}
	
			if ( re2 ) {
				d = d.replace( re2, '' );
			}
		}
	
		return d * 1;
	};
	
	
	// Add the numeric 'deformatting' functions for sorting and search. This is done
	// in a function to provide an easy ability for the language options to add
	// additional methods if a non-period decimal place is used.
	function _addNumericSort ( decimalPlace ) {
		$.each(
			{
				// Plain numbers
				"num": function ( d ) {
					return __numericReplace( d, decimalPlace );
				},
	
				// Formatted numbers
				"num-fmt": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_formatted_numeric );
				},
	
				// HTML numeric
				"html-num": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_html );
				},
	
				// HTML numeric, formatted
				"html-num-fmt": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_html, _re_formatted_numeric );
				}
			},
			function ( key, fn ) {
				// Add the ordering method
				_ext.type.order[ key+decimalPlace+'-pre' ] = fn;
	
				// For HTML types add a search formatter that will strip the HTML
				if ( key.match(/^html\-/) ) {
					_ext.type.search[ key+decimalPlace ] = _ext.type.search.html;
				}
			}
		);
	}
	
	
	// Default sort methods
	$.extend( _ext.type.order, {
		// Dates
		"date-pre": function ( d ) {
			var ts = Date.parse( d );
			return isNaN(ts) ? -Infinity : ts;
		},
	
		// html
		"html-pre": function ( a ) {
			return _empty(a) ?
				'' :
				a.replace ?
					a.replace( /<.*?>/g, "" ).toLowerCase() :
					a+'';
		},
	
		// string
		"string-pre": function ( a ) {
			// This is a little complex, but faster than always calling toString,
			// http://jsperf.com/tostring-v-check
			return _empty(a) ?
				'' :
				typeof a === 'string' ?
					a.toLowerCase() :
					! a.toString ?
						'' :
						a.toString();
		},
	
		// string-asc and -desc are retained only for compatibility with the old
		// sort methods
		"string-asc": function ( x, y ) {
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		},
	
		"string-desc": function ( x, y ) {
			return ((x < y) ? 1 : ((x > y) ? -1 : 0));
		}
	} );
	
	
	// Numeric sorting types - order doesn't matter here
	_addNumericSort( '' );
	
	
	$.extend( true, DataTable.ext.renderer, {
		header: {
			_: function ( settings, cell, column, classes ) {
				// No additional mark-up required
				// Attach a sort listener to update on sort - note that using the
				// `DT` namespace will allow the event to be removed automatically
				// on destroy, while the `dt` namespaced event is the one we are
				// listening for
				$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
					if ( settings !== ctx ) { // need to check this this is the host
						return;               // table, not a nested one
					}
	
					var colIdx = column.idx;
	
					cell
						.removeClass(
							classes.sSortAsc +' '+
							classes.sSortDesc
						)
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);
				} );
			},
	
			jqueryui: function ( settings, cell, column, classes ) {
				$('<div/>')
					.addClass( classes.sSortJUIWrapper )
					.append( cell.contents() )
					.append( $('<span/>')
						.addClass( classes.sSortIcon+' '+column.sSortingClassJUI )
					)
					.appendTo( cell );
	
				// Attach a sort listener to update on sort
				$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
					if ( settings !== ctx ) {
						return;
					}
	
					var colIdx = column.idx;
	
					cell
						.removeClass( classes.sSortAsc +" "+classes.sSortDesc )
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);
	
					cell
						.find( 'span.'+classes.sSortIcon )
						.removeClass(
							classes.sSortJUIAsc +" "+
							classes.sSortJUIDesc +" "+
							classes.sSortJUI +" "+
							classes.sSortJUIAscAllowed +" "+
							classes.sSortJUIDescAllowed
						)
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortJUIAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortJUIDesc :
								column.sSortingClassJUI
						);
				} );
			}
		}
	} );
	
	/*
	 * Public helper functions. These aren't used internally by DataTables, or
	 * called by any of the options passed into DataTables, but they can be used
	 * externally by developers working with DataTables. They are helper functions
	 * to make working with DataTables a little bit easier.
	 */
	
	var __htmlEscapeEntities = function ( d ) {
		if (Array.isArray(d)) {
			d = d.join(',');
		}
	
		return typeof d === 'string' ?
			d
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/"/g, '&quot;') :
			d;
	};
	
	// Common logic for moment, luxon or a date action
	function __mld( dt, momentFn, luxonFn, dateFn, arg1 ) {
		if (window.moment) {
			return dt[momentFn]( arg1 );
		}
		else if (window.luxon) {
			return dt[luxonFn]( arg1 );
		}
		
		return dateFn ? dt[dateFn]( arg1 ) : dt;
	}
	
	
	var __mlWarning = false;
	function __mldObj (d, format, locale) {
		var dt;
	
		if (window.moment) {
			dt = window.moment.utc( d, format, locale, true );
	
			if (! dt.isValid()) {
				return null;
			}
		}
		else if (window.luxon) {
			dt = format && typeof d === 'string'
				? window.luxon.DateTime.fromFormat( d, format )
				: window.luxon.DateTime.fromISO( d );
	
			if (! dt.isValid) {
				return null;
			}
	
			dt.setLocale(locale);
		}
		else if (! format) {
			// No format given, must be ISO
			dt = new Date(d);
		}
		else {
			if (! __mlWarning) {
				alert('DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17');
			}
	
			__mlWarning = true;
		}
	
		return dt;
	}
	
	// Wrapper for date, datetime and time which all operate the same way with the exception of
	// the output string for auto locale support
	function __mlHelper (localeString) {
		return function ( from, to, locale, def ) {
			// Luxon and Moment support
			// Argument shifting
			if ( arguments.length === 0 ) {
				locale = 'en';
				to = null; // means toLocaleString
				from = null; // means iso8601
			}
			else if ( arguments.length === 1 ) {
				locale = 'en';
				to = from;
				from = null;
			}
			else if ( arguments.length === 2 ) {
				locale = to;
				to = from;
				from = null;
			}
	
			var typeName = 'datetime-' + to;
	
			// Add type detection and sorting specific to this date format - we need to be able to identify
			// date type columns as such, rather than as numbers in extensions. Hence the need for this.
			if (! DataTable.ext.type.order[typeName]) {
				// The renderer will give the value to type detect as the type!
				DataTable.ext.type.detect.unshift(function (d) {
					return d === typeName ? typeName : false;
				});
	
				// The renderer gives us Moment, Luxon or Date obects for the sorting, all of which have a
				// `valueOf` which gives milliseconds epoch
				DataTable.ext.type.order[typeName + '-asc'] = function (a, b) {
					var x = a.valueOf();
					var y = b.valueOf();
	
					return x === y
						? 0
						: x < y
							? -1
							: 1;
				}
	
				DataTable.ext.type.order[typeName + '-desc'] = function (a, b) {
					var x = a.valueOf();
					var y = b.valueOf();
	
					return x === y
						? 0
						: x > y
							? -1
							: 1;
				}
			}
		
			return function ( d, type ) {
				// Allow for a default value
				if (d === null || d === undefined) {
					if (def === '--now') {
						// We treat everything as UTC further down, so no changes are
						// made, as such need to get the local date / time as if it were
						// UTC
						var local = new Date();
						d = new Date( Date.UTC(
							local.getFullYear(), local.getMonth(), local.getDate(),
							local.getHours(), local.getMinutes(), local.getSeconds()
						) );
					}
					else {
						d = '';
					}
				}
	
				if (type === 'type') {
					// Typing uses the type name for fast matching
					return typeName;
				}
	
				if (d === '') {
					return type !== 'sort'
						? ''
						: __mldObj('0000-01-01 00:00:00', null, locale);
				}
	
				// Shortcut. If `from` and `to` are the same, we are using the renderer to
				// format for ordering, not display - its already in the display format.
				if ( to !== null && from === to && type !== 'sort' && type !== 'type' && ! (d instanceof Date) ) {
					return d;
				}
	
				var dt = __mldObj(d, from, locale);
	
				if (dt === null) {
					return d;
				}
	
				if (type === 'sort') {
					return dt;
				}
				
				var formatted = to === null
					? __mld(dt, 'toDate', 'toJSDate', '')[localeString]()
					: __mld(dt, 'format', 'toFormat', 'toISOString', to);
	
				// XSS protection
				return type === 'display' ?
					__htmlEscapeEntities( formatted ) :
					formatted;
			};
		}
	}
	
	// Based on locale, determine standard number formatting
	// Fallback for legacy browsers is US English
	var __thousands = ',';
	var __decimal = '.';
	
	if (Intl) {
		try {
			var num = new Intl.NumberFormat().formatToParts(100000.1);
		
			for (var i=0 ; i<num.length ; i++) {
				if (num[i].type === 'group') {
					__thousands = num[i].value;
				}
				else if (num[i].type === 'decimal') {
					__decimal = num[i].value;
				}
			}
		}
		catch (e) {
			// noop
		}
	}
	
	// Formatted date time detection - use by declaring the formats you are going to use
	DataTable.datetime = function ( format, locale ) {
		var typeName = 'datetime-detect-' + format;
	
		if (! locale) {
			locale = 'en';
		}
	
		if (! DataTable.ext.type.order[typeName]) {
			DataTable.ext.type.detect.unshift(function (d) {
				var dt = __mldObj(d, format, locale);
				return d === '' || dt ? typeName : false;
			});
	
			DataTable.ext.type.order[typeName + '-pre'] = function (d) {
				return __mldObj(d, format, locale) || 0;
			}
		}
	}
	
	/**
	 * Helpers for `columns.render`.
	 *
	 * The options defined here can be used with the `columns.render` initialisation
	 * option to provide a display renderer. The following functions are defined:
	 *
	 * * `number` - Will format numeric data (defined by `columns.data`) for
	 *   display, retaining the original unformatted data for sorting and filtering.
	 *   It takes 5 parameters:
	 *   * `string` - Thousands grouping separator
	 *   * `string` - Decimal point indicator
	 *   * `integer` - Number of decimal points to show
	 *   * `string` (optional) - Prefix.
	 *   * `string` (optional) - Postfix (/suffix).
	 * * `text` - Escape HTML to help prevent XSS attacks. It has no optional
	 *   parameters.
	 *
	 * @example
	 *   // Column definition using the number renderer
	 *   {
	 *     data: "salary",
	 *     render: $.fn.dataTable.render.number( '\'', '.', 0, '$' )
	 *   }
	 *
	 * @namespace
	 */
	DataTable.render = {
		date: __mlHelper('toLocaleDateString'),
		datetime: __mlHelper('toLocaleString'),
		time: __mlHelper('toLocaleTimeString'),
		number: function ( thousands, decimal, precision, prefix, postfix ) {
			// Auto locale detection
			if (thousands === null || thousands === undefined) {
				thousands = __thousands;
			}
	
			if (decimal === null || decimal === undefined) {
				decimal = __decimal;
			}
	
			return {
				display: function ( d ) {
					if ( typeof d !== 'number' && typeof d !== 'string' ) {
						return d;
					}
	
					if (d === '' || d === null) {
						return d;
					}
	
					var negative = d < 0 ? '-' : '';
					var flo = parseFloat( d );
	
					// If NaN then there isn't much formatting that we can do - just
					// return immediately, escaping any HTML (this was supposed to
					// be a number after all)
					if ( isNaN( flo ) ) {
						return __htmlEscapeEntities( d );
					}
	
					flo = flo.toFixed( precision );
					d = Math.abs( flo );
	
					var intPart = parseInt( d, 10 );
					var floatPart = precision ?
						decimal+(d - intPart).toFixed( precision ).substring( 2 ):
						'';
	
					// If zero, then can't have a negative prefix
					if (intPart === 0 && parseFloat(floatPart) === 0) {
						negative = '';
					}
	
					return negative + (prefix||'') +
						intPart.toString().replace(
							/\B(?=(\d{3})+(?!\d))/g, thousands
						) +
						floatPart +
						(postfix||'');
				}
			};
		},
	
		text: function () {
			return {
				display: __htmlEscapeEntities,
				filter: __htmlEscapeEntities
			};
		}
	};
	
	
	/*
	 * This is really a good bit rubbish this method of exposing the internal methods
	 * publicly... - To be fixed in 2.0 using methods on the prototype
	 */
	
	
	/**
	 * Create a wrapper function for exporting an internal functions to an external API.
	 *  @param {string} fn API function name
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#internal
	 */
	function _fnExternApiFunc (fn)
	{
		return function() {
			var args = [_fnSettingsFromNode( this[DataTable.ext.iApiIndex] )].concat(
				Array.prototype.slice.call(arguments)
			);
			return DataTable.ext.internal[fn].apply( this, args );
		};
	}
	
	
	/**
	 * Reference to internal functions for use by plug-in developers. Note that
	 * these methods are references to internal functions and are considered to be
	 * private. If you use these methods, be aware that they are liable to change
	 * between versions.
	 *  @namespace
	 */
	$.extend( DataTable.ext.internal, {
		_fnExternApiFunc: _fnExternApiFunc,
		_fnBuildAjax: _fnBuildAjax,
		_fnAjaxUpdate: _fnAjaxUpdate,
		_fnAjaxParameters: _fnAjaxParameters,
		_fnAjaxUpdateDraw: _fnAjaxUpdateDraw,
		_fnAjaxDataSrc: _fnAjaxDataSrc,
		_fnAddColumn: _fnAddColumn,
		_fnColumnOptions: _fnColumnOptions,
		_fnAdjustColumnSizing: _fnAdjustColumnSizing,
		_fnVisibleToColumnIndex: _fnVisibleToColumnIndex,
		_fnColumnIndexToVisible: _fnColumnIndexToVisible,
		_fnVisbleColumns: _fnVisbleColumns,
		_fnGetColumns: _fnGetColumns,
		_fnColumnTypes: _fnColumnTypes,
		_fnApplyColumnDefs: _fnApplyColumnDefs,
		_fnHungarianMap: _fnHungarianMap,
		_fnCamelToHungarian: _fnCamelToHungarian,
		_fnLanguageCompat: _fnLanguageCompat,
		_fnBrowserDetect: _fnBrowserDetect,
		_fnAddData: _fnAddData,
		_fnAddTr: _fnAddTr,
		_fnNodeToDataIndex: _fnNodeToDataIndex,
		_fnNodeToColumnIndex: _fnNodeToColumnIndex,
		_fnGetCellData: _fnGetCellData,
		_fnSetCellData: _fnSetCellData,
		_fnSplitObjNotation: _fnSplitObjNotation,
		_fnGetObjectDataFn: _fnGetObjectDataFn,
		_fnSetObjectDataFn: _fnSetObjectDataFn,
		_fnGetDataMaster: _fnGetDataMaster,
		_fnClearTable: _fnClearTable,
		_fnDeleteIndex: _fnDeleteIndex,
		_fnInvalidate: _fnInvalidate,
		_fnGetRowElements: _fnGetRowElements,
		_fnCreateTr: _fnCreateTr,
		_fnBuildHead: _fnBuildHead,
		_fnDrawHead: _fnDrawHead,
		_fnDraw: _fnDraw,
		_fnReDraw: _fnReDraw,
		_fnAddOptionsHtml: _fnAddOptionsHtml,
		_fnDetectHeader: _fnDetectHeader,
		_fnGetUniqueThs: _fnGetUniqueThs,
		_fnFeatureHtmlFilter: _fnFeatureHtmlFilter,
		_fnFilterComplete: _fnFilterComplete,
		_fnFilterCustom: _fnFilterCustom,
		_fnFilterColumn: _fnFilterColumn,
		_fnFilter: _fnFilter,
		_fnFilterCreateSearch: _fnFilterCreateSearch,
		_fnEscapeRegex: _fnEscapeRegex,
		_fnFilterData: _fnFilterData,
		_fnFeatureHtmlInfo: _fnFeatureHtmlInfo,
		_fnUpdateInfo: _fnUpdateInfo,
		_fnInfoMacros: _fnInfoMacros,
		_fnInitialise: _fnInitialise,
		_fnInitComplete: _fnInitComplete,
		_fnLengthChange: _fnLengthChange,
		_fnFeatureHtmlLength: _fnFeatureHtmlLength,
		_fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate,
		_fnPageChange: _fnPageChange,
		_fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing,
		_fnProcessingDisplay: _fnProcessingDisplay,
		_fnFeatureHtmlTable: _fnFeatureHtmlTable,
		_fnScrollDraw: _fnScrollDraw,
		_fnApplyToChildren: _fnApplyToChildren,
		_fnCalculateColumnWidths: _fnCalculateColumnWidths,
		_fnThrottle: _fnThrottle,
		_fnConvertToWidth: _fnConvertToWidth,
		_fnGetWidestNode: _fnGetWidestNode,
		_fnGetMaxLenString: _fnGetMaxLenString,
		_fnStringToCss: _fnStringToCss,
		_fnSortFlatten: _fnSortFlatten,
		_fnSort: _fnSort,
		_fnSortAria: _fnSortAria,
		_fnSortListener: _fnSortListener,
		_fnSortAttachListener: _fnSortAttachListener,
		_fnSortingClasses: _fnSortingClasses,
		_fnSortData: _fnSortData,
		_fnSaveState: _fnSaveState,
		_fnLoadState: _fnLoadState,
		_fnImplementState: _fnImplementState,
		_fnSettingsFromNode: _fnSettingsFromNode,
		_fnLog: _fnLog,
		_fnMap: _fnMap,
		_fnBindAction: _fnBindAction,
		_fnCallbackReg: _fnCallbackReg,
		_fnCallbackFire: _fnCallbackFire,
		_fnLengthOverflow: _fnLengthOverflow,
		_fnRenderer: _fnRenderer,
		_fnDataSource: _fnDataSource,
		_fnRowAttributes: _fnRowAttributes,
		_fnExtend: _fnExtend,
		_fnCalculateEnd: function () {} // Used by a lot of plug-ins, but redundant
		                                // in 1.10, so this dead-end function is
		                                // added to prevent errors
	} );
	
	
	// jQuery access
	$.fn.dataTable = DataTable;
	
	// Provide access to the host jQuery object (circular reference)
	DataTable.$ = $;
	
	// Legacy aliases
	$.fn.dataTableSettings = DataTable.settings;
	$.fn.dataTableExt = DataTable.ext;
	
	// With a capital `D` we return a DataTables API instance rather than a
	// jQuery object
	$.fn.DataTable = function ( opts ) {
		return $(this).dataTable( opts ).api();
	};
	
	// All properties that are available to $.fn.dataTable should also be
	// available on $.fn.DataTable
	$.each( DataTable, function ( prop, val ) {
		$.fn.DataTable[ prop ] = val;
	} );

	return DataTable;
}));


/*! DataTables Bootstrap 5 integration
 * 2020 SpryMedia Ltd - datatables.net/license
 */

(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				// CommonJS environments without a window global must pass a
				// root. This will give an error otherwise
				root = window;
			}

			if ( ! $ ) {
				$ = typeof window !== 'undefined' ? // jQuery's factory checks for a global window
					require('jquery') :
					require('jquery')( root );
			}

			if ( ! $.fn.dataTable ) {
				require('datatables.net')(root, $);
			}


			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document, undefined ) {
'use strict';
var DataTable = $.fn.dataTable;



/**
 * DataTables integration for Bootstrap 5. This requires Bootstrap 5 and
 * DataTables 1.10 or newer.
 *
 * This file sets the defaults and adds options to DataTables to style its
 * controls using Bootstrap. See http://datatables.net/manual/styling/bootstrap
 * for further information.
 */

/* Set the defaults for DataTables initialisation */
$.extend( true, DataTable.defaults, {
	dom:
		"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
		"<'row dt-row'<'col-sm-12'tr>>" +
		"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
	renderer: 'bootstrap'
} );


/* Default class modification */
$.extend( DataTable.ext.classes, {
	sWrapper:      "dataTables_wrapper dt-bootstrap5",
	sFilterInput:  "form-control form-control-sm",
	sLengthSelect: "form-select form-select-sm",
	sProcessing:   "dataTables_processing card",
	sPageButton:   "paginate_button page-item"
} );


/* Bootstrap paging button renderer */
DataTable.ext.renderer.pageButton.bootstrap = function ( settings, host, idx, buttons, page, pages ) {
	var api     = new DataTable.Api( settings );
	var classes = settings.oClasses;
	var lang    = settings.oLanguage.oPaginate;
	var aria = settings.oLanguage.oAria.paginate || {};
	var btnDisplay, btnClass;

	var attach = function( container, buttons ) {
		var i, ien, node, button;
		var clickHandler = function ( e ) {
			e.preventDefault();
			if ( !$(e.currentTarget).hasClass('disabled') && api.page() != e.data.action ) {
				api.page( e.data.action ).draw( 'page' );
			}
		};

		for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
			button = buttons[i];

			if ( Array.isArray( button ) ) {
				attach( container, button );
			}
			else {
				btnDisplay = '';
				btnClass = '';

				switch ( button ) {
					case 'ellipsis':
						btnDisplay = '&#x2026;';
						btnClass = 'disabled';
						break;

					case 'first':
						btnDisplay = lang.sFirst;
						btnClass = button + (page > 0 ?
							'' : ' disabled');
						break;

					case 'previous':
						btnDisplay = lang.sPrevious;
						btnClass = button + (page > 0 ?
							'' : ' disabled');
						break;

					case 'next':
						btnDisplay = lang.sNext;
						btnClass = button + (page < pages-1 ?
							'' : ' disabled');
						break;

					case 'last':
						btnDisplay = lang.sLast;
						btnClass = button + (page < pages-1 ?
							'' : ' disabled');
						break;

					default:
						btnDisplay = button + 1;
						btnClass = page === button ?
							'active' : '';
						break;
				}

				if ( btnDisplay ) {
					node = $('<li>', {
							'class': classes.sPageButton+' '+btnClass,
							'id': idx === 0 && typeof button === 'string' ?
								settings.sTableId +'_'+ button :
								null
						} )
						.append( $('<a>', {
								'href': '#',
								'aria-controls': settings.sTableId,
								'aria-label': aria[ button ],
								'data-dt-idx': button,
								'tabindex': settings.iTabIndex,
								'class': 'page-link'
							} )
							.html( btnDisplay )
						)
						.appendTo( container );

					settings.oApi._fnBindAction(
						node, {action: button}, clickHandler
					);
				}
			}
		}
	};

	var hostEl = $(host);
	// IE9 throws an 'unknown error' if document.activeElement is used
	// inside an iframe or frame. 
	var activeEl;

	try {
		// Because this approach is destroying and recreating the paging
		// elements, focus is lost on the select button which is bad for
		// accessibility. So we want to restore focus once the draw has
		// completed
		activeEl = hostEl.find(document.activeElement).data('dt-idx');
	}
	catch (e) {}

	var paginationEl = hostEl.children('ul.pagination');

	if (paginationEl.length) {
		paginationEl.empty();
	}
	else {
		paginationEl = hostEl.html('<ul/>').children('ul').addClass('pagination');
	}

	attach(
		paginationEl,
		buttons
	);

	if ( activeEl !== undefined ) {
		hostEl.find('[data-dt-idx='+activeEl+']').trigger('focus');
	}
};


return DataTable;
}));


/*!
 * Version:     2.0.10
 * Author:      SpryMedia (www.sprymedia.co.uk)
 * Info:        http://editor.datatables.net
 * 
 * Copyright 2012-2023 SpryMedia Limited, all rights reserved.
 * License: DataTables Editor - http://editor.datatables.net/license
 */

 // Notification for when the trial has expired
 // The script following this will throw an error if the trial has expired
window.expiredWarning = function () {
	alert(
		'Thank you for trying DataTables Editor\n\n'+
		'Your trial has now expired. To purchase a license '+
		'for Editor, please see https://editor.datatables.net/purchase'
	);
};

(function(){U8kjl[455168]=(function(){var N=2;for(;N !== 9;){switch(N){case 2:N=typeof globalThis === '\u006f\x62\u006a\u0065\u0063\x74'?1:5;break;case 5:var U;try{var z=2;for(;z !== 6;){switch(z){case 9:delete U['\x51\x6b\u0039\u0076\u0039'];var x=Object['\u0070\x72\u006f\x74\u006f\x74\u0079\u0070\x65'];delete x['\x47\x44\x69\u006a\u006d'];z=6;break;case 3:throw "";z=9;break;case 4:z=typeof Qk9v9 === '\x75\u006e\u0064\x65\x66\x69\u006e\x65\u0064'?3:9;break;case 2:Object['\u0064\u0065\x66\u0069\x6e\x65\u0050\x72\u006f\u0070\x65\u0072\x74\u0079'](Object['\x70\u0072\x6f\x74\u006f\x74\u0079\u0070\x65'],'\u0047\x44\u0069\u006a\x6d',{'\x67\x65\x74':function(){var Y=2;for(;Y !== 1;){switch(Y){case 2:return this;break;}}},'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':true});U=GDijm;U['\u0051\x6b\u0039\u0076\x39']=U;z=4;break;}}}catch(R){U=window;}return U;break;case 1:return globalThis;break;}}})();K1BX39(U8kjl[455168]);U8kjl.B9_="fn";U8kjl.P0a="do";U8kjl[358987]=(function(l){var H3=2;for(;H3 !== 10;){switch(H3){case 4:var Z='fromCharCode',r='RegExp';H3=3;break;case 8:H3=!S--?7:6;break;case 14:l=l.t3rfA(function(y){var G9=2;for(;G9 !== 13;){switch(G9){case 2:var J;G9=1;break;case 5:J='';G9=4;break;case 14:return J;break;case 9:J+=u[g][Z](y[m] + 107);G9=8;break;case 7:G9=!J?6:14;break;case 3:G9=m < y.length?9:7;break;case 6:return;break;case 1:G9=!S--?5:4;break;case 8:m++;G9=3;break;case 4:var m=0;G9=3;break;}}});H3=13;break;case 13:H3=!S--?12:11;break;case 11:return {b0jmzl4:function(P){var R4=2;for(;R4 !== 13;){switch(R4){case 4:L=A(f);R4=3;break;case 5:R4=!S--?4:3;break;case 8:var M=(function(d6,B){var y_=2;for(;y_ !== 10;){switch(y_){case 9:y_=W0 < d6[B[5]]?8:11;break;case 1:d6=P;y_=5;break;case 12:b1=b1 ^ x$;y_=13;break;case 13:W0++;y_=9;break;case 11:return b1;break;case 8:var T1=u[B[4]](d6[B[2]](W0),16)[B[3]](2);var x$=T1[B[2]](T1[B[5]] - 1);y_=6;break;case 14:b1=x$;y_=13;break;case 2:y_=typeof d6 === 'undefined' && typeof P !== 'undefined'?1:5;break;case 3:var b1,W0=0;y_=9;break;case 4:B=l;y_=3;break;case 5:y_=typeof B === 'undefined' && typeof l !== 'undefined'?4:3;break;case 6:y_=W0 === 0?14:12;break;}}})(undefined,undefined);R4=7;break;case 14:return M?L:!L;break;case 6:(function(){var h8=2;for(;h8 !== 35;){switch(h8){case 7:var K8="B";var Y0=W_;Y0+=b5;Y0+=j9;h8=12;break;case 2:var j9="L";var W_="c";var s9="9";var b5="2";h8=3;break;case 15:O9+=b7;O9+=K8;O9+=K_;var M3=U8kjl[a0];h8=24;break;case 22:try{var i5=2;for(;i5 !== 1;){switch(i5){case 2:expiredWarning();i5=1;break;}}}catch(O6){}M3[Y0]=function(){};h8=35;break;case 23:return;break;case 12:Y0+=s9;Y0+=b7;Y0+=K8;Y0+=K_;h8=19;break;case 3:var b7="v";h8=9;break;case 9:var K_="r";var a0=455168;h8=7;break;case 24:h8=M3[O9]?23:22;break;case 19:var O9=W_;O9+=b5;O9+=j9;O9+=s9;h8=15;break;}}})();R4=14;break;case 7:R4=!L?6:14;break;case 1:R4=f > j?5:8;break;case 3:R4=!S--?9:8;break;case 2:var f=new u[l[0]]()[l[1]]();R4=1;break;case 9:j=f + 60000;R4=8;break;}}}};break;case 3:H3=!S--?9:8;break;case 1:H3=!S--?5:4;break;case 9:G=typeof Z;H3=8;break;case 5:u=U8kjl[455168];H3=4;break;case 12:var L,j=0;H3=11;break;case 7:g=G.k$sve(new u[r]("^['-|]"),'S');H3=6;break;case 6:H3=!S--?14:13;break;case 2:var u,G,g,S;H3=1;break;}}function A(F){var t4=2;for(;t4 !== 15;){switch(t4){case 5:Q=u[l[4]];t4=4;break;case 3:b=28;t4=9;break;case 18:t4=k >= 0?17:16;break;case 17:E=F - k > b;t4=19;break;case 14:t4=!S--?13:12;break;case 6:I=K && Q(K,b);t4=14;break;case 11:k=(O || O === 0) && Q(O,b);t4=10;break;case 9:t4=!S--?8:7;break;case 4:t4=!S--?3:9;break;case 20:E=F - k > b && I - F > b;t4=19;break;case 19:return E;break;case 16:E=I - F > b;t4=19;break;case 2:var E,b,K,I,O,k,Q;t4=1;break;case 1:t4=!S--?5:4;break;case 12:t4=!S--?11:10;break;case 10:t4=k >= 0 && I >= 0?20:18;break;case 7:t4=!S--?6:14;break;case 13:O=l[7];t4=12;break;case 8:K=l[6];t4=7;break;}}}})([[-39,-10,9,-6],[-4,-6,9,-23,-2,2,-6],[-8,-3,-10,7,-42,9],[9,4,-24,9,7,-2,3,-4],[5,-10,7,8,-6,-34,3,9],[1,-6,3,-4,9,-3],[-55,-8,-54,-58,-51,2,-56,-57,4],[-55,-59,-52,-10,-2,-2,-5,-54,-55]]);function K1BX39(U9f){function E_l(w6R){var k0C=2;for(;k0C !== 5;){switch(k0C){case 2:var O1A=[arguments];return O1A[0][0];break;}}}function a7g(S2H){var R4W=2;for(;R4W !== 5;){switch(R4W){case 2:var G2l=[arguments];R4W=1;break;case 1:return G2l[0][0].String;break;}}}function K6X(p6g){var p3z=2;for(;p3z !== 5;){switch(p3z){case 2:var L9Z=[arguments];return L9Z[0][0].Array;break;}}}var k_8=2;for(;k_8 !== 119;){switch(k_8){case 52:z$4[37]="__";z$4[12]="";z$4[12]="";z$4[12]="wX";k_8=48;break;case 59:z$4[62]=1;z$4[62]=0;z$4[18]=z$4[23];z$4[18]+=z$4[79];k_8=55;break;case 78:z$4[42]=z$4[8];z$4[42]+=z$4[7];z$4[42]+=z$4[3];z$4[66]=z$4[9];z$4[66]+=z$4[5];z$4[66]+=z$4[6];k_8=99;break;case 34:z$4[94]="__resi";z$4[35]="16Z";z$4[30]="";z$4[30]="98s1";z$4[97]="O";z$4[14]="";k_8=28;break;case 16:z$4[1]="tim";z$4[49]="";z$4[49]="__op";z$4[15]="";k_8=25;break;case 93:b25(K6X,"push",z$4[28],z$4[87]);k_8=92;break;case 41:z$4[81]="gs";z$4[64]="Y2X";z$4[80]="ct";z$4[16]="";k_8=37;break;case 20:z$4[2]="";z$4[2]="ize";z$4[1]="";z$4[71]="n8v";k_8=16;break;case 98:b25(a7g,"replace",z$4[28],z$4[66]);k_8=97;break;case 13:z$4[8]="";z$4[8]="t3";z$4[4]="";z$4[4]="P";k_8=20;break;case 74:z$4[22]=z$4[37];z$4[22]+=z$4[16];z$4[22]+=z$4[80];z$4[87]=z$4[64];k_8=70;break;case 28:z$4[14]="C";z$4[52]="";z$4[52]="o";z$4[81]="";k_8=41;break;case 3:z$4[9]="k";z$4[3]="";z$4[3]="fA";z$4[7]="";z$4[6]="e";z$4[7]="r";k_8=13;break;case 2:var z$4=[arguments];z$4[5]="";z$4[5]="$sv";z$4[9]="";k_8=3;break;case 94:b25(E_l,z$4[93],z$4[62],z$4[40]);k_8=93;break;case 99:var b25=function(G$M,X13,c5o,z5o){var x27=2;for(;x27 !== 5;){switch(x27){case 2:var e5H=[arguments];M32(z$4[0][0],e5H[0][0],e5H[0][1],e5H[0][2],e5H[0][3]);x27=5;break;}}};k_8=98;break;case 87:z$4[99]=z$4[15];z$4[99]+=z$4[35];z$4[99]+=z$4[41];z$4[47]=z$4[49];k_8=83;break;case 83:z$4[47]+=z$4[1];z$4[47]+=z$4[2];z$4[69]=z$4[71];z$4[69]+=z$4[4];z$4[69]+=z$4[78];k_8=78;break;case 48:z$4[68]="H";z$4[65]="";z$4[65]="V6Z";z$4[78]="p";k_8=65;break;case 95:b25(E_l,z$4[47],z$4[62],z$4[99]);k_8=94;break;case 55:z$4[18]+=z$4[78];z$4[53]=z$4[65];z$4[53]+=z$4[68];z$4[53]+=z$4[12];k_8=74;break;case 25:z$4[15]="q";z$4[41]="I";z$4[70]="d";z$4[92]="ual";z$4[94]="";z$4[94]="";k_8=34;break;case 37:z$4[16]="";z$4[16]="abstra";z$4[37]="";z$4[37]="";k_8=52;break;case 96:b25(a3W,"test",z$4[28],z$4[69]);k_8=95;break;case 97:b25(K6X,"map",z$4[28],z$4[42]);k_8=96;break;case 65:z$4[79]="";z$4[79]="Z";z$4[23]="";z$4[23]="n71c";z$4[28]=6;z$4[28]=1;k_8=59;break;case 91:b25(C1P,"apply",z$4[28],z$4[18]);k_8=119;break;case 66:z$4[40]+=z$4[97];z$4[93]=z$4[94];z$4[93]+=z$4[70];z$4[93]+=z$4[92];k_8=87;break;case 92:b25(E_l,z$4[22],z$4[62],z$4[53]);k_8=91;break;case 70:z$4[87]+=z$4[81];z$4[87]+=z$4[52];z$4[40]=z$4[14];z$4[40]+=z$4[30];k_8=66;break;}}function a3W(T8D){var B4M=2;for(;B4M !== 5;){switch(B4M){case 2:var c8F=[arguments];return c8F[0][0].RegExp;break;}}}function M32(s4T,T6n,x_8,v58,W5I){var g54=2;for(;g54 !== 6;){switch(g54){case 2:var y5l=[arguments];y5l[2]="";y5l[2]="rty";y5l[8]="nePrope";g54=3;break;case 3:y5l[5]="defi";y5l[9]=true;y5l[9]=false;try{var w6V=2;for(;w6V !== 13;){switch(w6V){case 4:w6V=y5l[7].hasOwnProperty(y5l[0][4]) && y5l[7][y5l[0][4]] === y5l[7][y5l[0][2]]?3:9;break;case 9:y5l[7][y5l[0][4]]=y5l[7][y5l[0][2]];y5l[4].set=function(Q7s){var t3N=2;for(;t3N !== 5;){switch(t3N){case 2:var D9n=[arguments];y5l[7][y5l[0][2]]=D9n[0][0];t3N=5;break;}}};y5l[4].get=function(){var Z6C=2;for(;Z6C !== 6;){switch(Z6C){case 9:e_C[9]+=e_C[4];e_C[9]+=e_C[2];return typeof y5l[7][y5l[0][2]] == e_C[9]?undefined:y5l[7][y5l[0][2]];break;case 2:var e_C=[arguments];e_C[3]="undef";e_C[2]="ed";e_C[4]="in";e_C[9]=e_C[3];Z6C=9;break;}}};y5l[4].enumerable=y5l[9];w6V=14;break;case 2:y5l[4]={};y5l[6]=(1,y5l[0][1])(y5l[0][0]);y5l[7]=[y5l[6],y5l[6].prototype][y5l[0][3]];w6V=4;break;case 14:try{var q0u=2;for(;q0u !== 3;){switch(q0u){case 2:y5l[1]=y5l[5];q0u=1;break;case 1:y5l[1]+=y5l[8];y5l[1]+=y5l[2];y5l[0][0].Object[y5l[1]](y5l[7],y5l[0][4],y5l[4]);q0u=3;break;}}}catch(U8t){}w6V=13;break;case 3:return;break;}}}catch(Y2C){}g54=6;break;}}}function C1P(c3M){var j2N=2;for(;j2N !== 5;){switch(j2N){case 2:var Z2D=[arguments];return Z2D[0][0].Function;break;}}}}U8kjl[557061]="dat";U8kjl.N$L=function(){return typeof U8kjl.K7O.b3bQeCL === 'function'?U8kjl.K7O.b3bQeCL.apply(U8kjl.K7O,arguments):U8kjl.K7O.b3bQeCL;};U8kjl.p1N="dataTable";function U8kjl(){}U8kjl.P3i="c";U8kjl.m_s=function(){return typeof U8kjl.K7O.b3bQeCL === 'function'?U8kjl.K7O.b3bQeCL.apply(U8kjl.K7O,arguments):U8kjl.K7O.b3bQeCL;};U8kjl[130952]="";U8kjl[172460]="a";U8kjl[88046]="j";U8kjl.c58="und";U8kjl[455168].K7FF=U8kjl;U8kjl.x2x="ta";U8kjl.r1=function(){return typeof U8kjl[358987].b0jmzl4 === 'function'?U8kjl[358987].b0jmzl4.apply(U8kjl[358987],arguments):U8kjl[358987].b0jmzl4;};U8kjl[213595]="e";U8kjl[241984]="ct";U8kjl.W8=function(){return typeof U8kjl[358987].b0jmzl4 === 'function'?U8kjl[358987].b0jmzl4.apply(U8kjl[358987],arguments):U8kjl[358987].b0jmzl4;};U8kjl.v4L="ef";U8kjl[517813]='function';U8kjl.K7O=(function(){var C19=2;for(;C19 !== 9;){switch(C19){case 2:var X3A=[arguments];X3A[7]=undefined;X3A[5]={};X3A[5].b3bQeCL=function(){var z2g=2;for(;z2g !== 145;){switch(z2g){case 12:s5p[2]=s5p[8];s5p[7]={};s5p[7].a9Z=['t46'];s5p[7].O40=function(){var S_V=function(){return ('a').codePointAt(0);};var j6s=(/\x39\067/).n8vPp(S_V + []);return j6s;};s5p[9]=s5p[7];z2g=18;break;case 95:s5p[1].Y2Xgso(s5p[21]);s5p[1].Y2Xgso(s5p[63]);s5p[1].Y2Xgso(s5p[2]);s5p[1].Y2Xgso(s5p[11]);z2g=91;break;case 18:s5p[3]={};s5p[3].a9Z=['t46'];s5p[3].O40=function(){var U2M=function(){return ('x').repeat(2);};var T2P=(/\x78\u0078/).n8vPp(U2M + []);return T2P;};z2g=15;break;case 124:s5p[84]=0;z2g=123;break;case 48:s5p[67].O40=function(){var D$R=typeof C98s1O === 'function';return D$R;};s5p[21]=s5p[67];s5p[98]={};s5p[98].a9Z=['z0S','t46'];z2g=65;break;case 107:s5p[1].Y2Xgso(s5p[25]);s5p[1].Y2Xgso(s5p[13]);s5p[1].Y2Xgso(s5p[86]);s5p[20]=[];z2g=134;break;case 101:s5p[32].a9Z=['z0S','W1n'];s5p[32].O40=function(){var e4f=function(o1q){return o1q && o1q['b'];};var m1C=(/\u002e/).n8vPp(e4f + []);return m1C;};s5p[11]=s5p[32];s5p[1].Y2Xgso(s5p[35]);s5p[1].Y2Xgso(s5p[44]);s5p[1].Y2Xgso(s5p[97]);z2g=95;break;case 59:s5p[69]={};s5p[69].a9Z=['t46'];s5p[69].O40=function(){var s$s=function(){return ('a').anchor('b');};var E_k=(/(\x3c|\076)/).n8vPp(s$s + []);return E_k;};s5p[99]=s5p[69];s5p[96]={};s5p[96].a9Z=['t46'];z2g=76;break;case 2:var s5p=[arguments];z2g=1;break;case 126:s5p[45]=s5p[1][s5p[77]];try{s5p[43]=s5p[45][s5p[12]]()?s5p[91]:s5p[58];}catch(K6n){s5p[43]=s5p[58];}z2g=124;break;case 1:z2g=X3A[7]?5:4;break;case 148:z2g=66?148:147;break;case 127:z2g=s5p[77] < s5p[1].length?126:149;break;case 134:s5p[91]='i05';s5p[58]='H3C';s5p[83]='a9Z';s5p[54]='U22';s5p[12]='O40';z2g=129;break;case 121:s5p[29][s5p[64]]=s5p[45][s5p[83]][s5p[84]];s5p[29][s5p[54]]=s5p[43];s5p[20].Y2Xgso(s5p[29]);z2g=151;break;case 117:s5p[1].Y2Xgso(s5p[53]);s5p[1].Y2Xgso(s5p[94]);s5p[1].Y2Xgso(s5p[6]);s5p[1].Y2Xgso(s5p[9]);s5p[1].Y2Xgso(s5p[85]);s5p[1].Y2Xgso(s5p[99]);z2g=111;break;case 129:s5p[64]='p45';z2g=128;break;case 4:s5p[1]=[];s5p[4]={};s5p[4].a9Z=['z0S'];s5p[4].O40=function(){var Z_q=function(){return ("01").substr(1);};var L$y=!(/\x30/).n8vPp(Z_q + []);return L$y;};s5p[5]=s5p[4];z2g=6;break;case 151:s5p[84]++;z2g=123;break;case 75:s5p[34]=s5p[96];s5p[78]={};s5p[78].a9Z=['W1n'];s5p[78].O40=function(){var a5k=function(H9u,a63,G76){return !!H9u?a63:G76;};var I43=!(/\x21/).n8vPp(a5k + []);return I43;};z2g=71;break;case 81:s5p[22].O40=function(){var S58=typeof V6ZHwX === 'function';return S58;};s5p[86]=s5p[22];s5p[14]={};s5p[14].a9Z=['z0S'];s5p[14].O40=function(){var W54=function(){return parseFloat(".01");};var J7q=!(/[\163\x6c]/).n8vPp(W54 + []);return J7q;};s5p[51]=s5p[14];s5p[32]={};z2g=101;break;case 76:s5p[96].O40=function(){var d8T=function(){return [1,2,3,4,5].concat([5,6,7,8]);};var P0S=!(/\x28\133/).n8vPp(d8T + []);return P0S;};z2g=75;break;case 67:s5p[13]=s5p[73];s5p[33]={};s5p[33].a9Z=['z0S'];s5p[33].O40=function(){var y9P=function(U4d,y3M){return U4d + y3M;};var Q2L=function(){return y9P(2,2);};var p8H=!(/\x2c/).n8vPp(Q2L + []);return p8H;};s5p[35]=s5p[33];z2g=87;break;case 53:s5p[38].a9Z=['t46'];s5p[38].O40=function(){var E0Y=function(){return ('\u0041\u030A').normalize('NFC') === ('\u212B').normalize('NFC');};var t8f=(/\164\x72\165\u0065/).n8vPp(E0Y + []);return t8f;};s5p[25]=s5p[38];z2g=50;break;case 150:s5p[77]++;z2g=127;break;case 6:s5p[8]={};s5p[8].a9Z=['W1n'];s5p[8].O40=function(){var m7d=function(){if(false){console.log(1);}};var b$K=!(/\x31/).n8vPp(m7d + []);return b$K;};z2g=12;break;case 71:s5p[76]=s5p[78];s5p[73]={};s5p[73].a9Z=['B4m'];s5p[73].O40=function(){var x7_=false;var B62=[];try{for(var A_A in console){B62.Y2Xgso(A_A);}x7_=B62.length === 0;}catch(D62){}var A9U=x7_;return A9U;};z2g=67;break;case 24:s5p[94]=s5p[42];s5p[79]={};s5p[79].a9Z=['t46'];s5p[79].O40=function(){var k15=function(){return ('aaaa').padEnd(5,'a');};var X$9=(/\u0061\u0061\x61\u0061\u0061/).n8vPp(k15 + []);return X$9;};z2g=35;break;case 87:s5p[37]={};s5p[37].a9Z=['B4m'];s5p[37].O40=function(){function Q6M(O9S,M_Z){return O9S + M_Z;};var w2U=(/\157\u006e[\u202f\u200a\u00a0\r\f\u205f\u3000\u2029 \v\ufeff\t\u2028\n\u1680-\u2000]{0,}\u0028/).n8vPp(Q6M + []);return w2U;};s5p[57]=s5p[37];s5p[22]={};s5p[22].a9Z=['B4m'];z2g=81;break;case 33:s5p[71].a9Z=['z0S','W1n'];s5p[71].O40=function(){var p23=function(V6p){return V6p && V6p['b'];};var b8M=(/\x2e/).n8vPp(p23 + []);return b8M;};s5p[61]=s5p[71];s5p[59]={};s5p[59].a9Z=['B4m'];s5p[59].O40=function(){var Y9N=typeof q16ZI === 'function';return Y9N;};s5p[50]=s5p[59];z2g=43;break;case 43:s5p[90]={};s5p[90].a9Z=['W1n'];s5p[90].O40=function(){var v9i=function(){var o3P;switch(o3P){case 0:break;}};var h4r=!(/\u0030/).n8vPp(v9i + []);return h4r;};z2g=40;break;case 65:s5p[98].O40=function(){var u3$=function(){return (![] + [])[+!+[]];};var Y_r=(/\141/).n8vPp(u3$ + []);return Y_r;};s5p[97]=s5p[98];s5p[95]={};s5p[95].a9Z=['W1n'];s5p[95].O40=function(){var Z7d=function(k8R,g3R,N42,Y6P){return !k8R && !g3R && !N42 && !Y6P;};var Y54=(/\174\u007c/).n8vPp(Z7d + []);return Y54;};s5p[53]=s5p[95];z2g=59;break;case 15:s5p[6]=s5p[3];s5p[42]={};s5p[42].a9Z=['z0S'];s5p[42].O40=function(){var q57=function(){return ("01").substring(1);};var F_f=!(/\u0030/).n8vPp(q57 + []);return F_f;};z2g=24;break;case 128:s5p[77]=0;z2g=127;break;case 35:s5p[44]=s5p[79];s5p[71]={};z2g=33;break;case 5:return 50;break;case 91:s5p[1].Y2Xgso(s5p[76]);s5p[1].Y2Xgso(s5p[61]);s5p[1].Y2Xgso(s5p[50]);z2g=117;break;case 111:s5p[1].Y2Xgso(s5p[5]);s5p[1].Y2Xgso(s5p[57]);s5p[1].Y2Xgso(s5p[34]);s5p[1].Y2Xgso(s5p[51]);z2g=107;break;case 40:s5p[63]=s5p[90];s5p[55]={};s5p[55].a9Z=['W1n'];s5p[55].O40=function(){var A0S=function(){'use stirct';return 1;};var I5s=!(/\x73\u0074\151\u0072\u0063\164/).n8vPp(A0S + []);return I5s;};s5p[85]=s5p[55];s5p[38]={};z2g=53;break;case 123:z2g=s5p[84] < s5p[45][s5p[83]].length?122:150;break;case 149:z2g=(function(E7j){var Q9h=2;for(;Q9h !== 22;){switch(Q9h){case 4:v7x[3]={};v7x[7]=[];v7x[9]=0;Q9h=8;break;case 25:v7x[8]=true;Q9h=24;break;case 1:Q9h=v7x[0][0].length === 0?5:4;break;case 11:v7x[3][v7x[5][s5p[64]]].t+=true;Q9h=10;break;case 15:v7x[2]=v7x[7][v7x[9]];v7x[6]=v7x[3][v7x[2]].h / v7x[3][v7x[2]].t;Q9h=26;break;case 7:Q9h=v7x[9] < v7x[0][0].length?6:18;break;case 20:v7x[3][v7x[5][s5p[64]]].h+=true;Q9h=19;break;case 17:v7x[9]=0;Q9h=16;break;case 5:return;break;case 12:v7x[7].Y2Xgso(v7x[5][s5p[64]]);Q9h=11;break;case 19:v7x[9]++;Q9h=7;break;case 18:v7x[8]=false;Q9h=17;break;case 10:Q9h=v7x[5][s5p[54]] === s5p[91]?20:19;break;case 26:Q9h=v7x[6] >= 0.5?25:24;break;case 16:Q9h=v7x[9] < v7x[7].length?15:23;break;case 13:v7x[3][v7x[5][s5p[64]]]=(function(){var s99=2;for(;s99 !== 9;){switch(s99){case 2:var e_A=[arguments];e_A[9]={};e_A[9].h=0;e_A[9].t=0;return e_A[9];break;}}}).n71cZp(this,arguments);Q9h=12;break;case 2:var v7x=[arguments];Q9h=1;break;case 24:v7x[9]++;Q9h=16;break;case 8:v7x[9]=0;Q9h=7;break;case 14:Q9h=typeof v7x[3][v7x[5][s5p[64]]] === 'undefined'?13:11;break;case 23:return v7x[8];break;case 6:v7x[5]=v7x[0][0][v7x[9]];Q9h=14;break;}}})(s5p[20])?148:147;break;case 147:X3A[7]=97;return 12;break;case 50:s5p[67]={};s5p[67].a9Z=['B4m'];z2g=48;break;case 122:s5p[29]={};z2g=121;break;}}};return X3A[5];break;}}})();U8kjl.Z9=function(D8){U8kjl.N$L();if(U8kjl && D8)return U8kjl.W8(D8);};U8kjl.t3=function(F2){U8kjl.m_s();if(U8kjl)return U8kjl.W8(F2);};U8kjl.K6=function(g7){U8kjl.N$L();if(U8kjl && g7)return U8kjl.r1(g7);};U8kjl.T0=function(W6){U8kjl.N$L();if(U8kjl)return U8kjl.r1(W6);};U8kjl.a8=function(m4){U8kjl.N$L();if(U8kjl && m4)return U8kjl.r1(m4);};U8kjl.U_=function(u4){U8kjl.N$L();if(U8kjl && u4)return U8kjl.W8(u4);};U8kjl.M$=function(V6){U8kjl.m_s();if(U8kjl)return U8kjl.W8(V6);};U8kjl.i7=function(c0){U8kjl.m_s();if(U8kjl)return U8kjl.W8(c0);};U8kjl.N$L();return (function(factory){var z3z=U8kjl;var B1Q="2bae";var N0D="exports";var e$j="2";var O1q="659";var q30="bles.net";var U16="9";var A2e="a241";var r0L='jquery';z3z.m_s();var a4Y="ob";var v28="82f1";var R0d="7";var A33="amd";var d8G="77";var p$S="3472";var a7=a4Y;a7+=U8kjl[88046];a7+=U8kjl[213595];a7+=U8kjl[241984];var Q8=R0d;Q8+=e$j;Q8+=d8G;z3z.K0=function(i8){z3z.m_s();if(z3z)return z3z.r1(i8);};if(typeof define === (z3z.i7(Q8)?U8kjl[517813]:U8kjl[130952]) && define[z3z.K0(v28)?U8kjl[130952]:A33]){var s1=U8kjl[557061];s1+=U8kjl[172460];s1+=U8kjl.x2x;s1+=q30;var F8=U16;F8+=O1q;define([z3z.M$(p$S)?U8kjl[130952]:r0L,z3z.U_(F8)?s1:U8kjl[130952]],function($){return factory($,window,document);});}else if(typeof exports === (z3z.a8(B1Q)?a7:U8kjl[130952])){module[z3z.T0(A2e)?N0D:U8kjl[130952]]=function(root,$){var D7z="ned";var V9m="cument";var c4H="efi";var o78="d744";z3z.m_s();var O7E="4";var d0=U8kjl.P0a;d0+=V9m;var Z4=U8kjl.P3i;Z4+=O7E;Z4+=U8kjl.v4L;z3z.u5=function(Y1){z3z.N$L();if(z3z && Y1)return z3z.r1(Y1);};if(!root){root=window;}if(!$){var I4=U8kjl.c58;I4+=c4H;I4+=D7z;z3z.I9=function(i2){z3z.m_s();if(z3z && i2)return z3z.W8(i2);};$=typeof window !== (z3z.I9(o78)?U8kjl[130952]:I4)?require('jquery'):require('jquery')(root);}if(!$[U8kjl.B9_][U8kjl.p1N]){require('datatables.net')(root,$);}return factory($,root,root[z3z.u5(Z4)?d0:U8kjl[130952]]);};}else {factory(jQuery,window,document);}})(function($,window,document,undefined){var l_2="pper";var L8M="E_Action";var R4e="isPla";var c0u="reat";var i1C="pa";var w9v="key";var N5b="_ev";var Y4e="div>";var Q45="disa";var d5z='row';var w46="url";var T0$="find";var u6W="n";var D1p="Ta";var J4o="footer";var t66="valu";var G5E="each";var t9n="firm";var r9d="rr";var w4D="valFromData";var E6p="sing";var u7q="ngt";var J6l="bject";var Q$x="veCla";var R13="oFeatures";var F52='multi-value';var i11="index";var D0P="pi";var R3S="N";var e5Y="ayed";var n_d="roces";var I8N="il";var j1N="_displayReorder";var A1k="update";var W_R="unique";var U08="prototype";var m5o="cl";var n0H="ke";var z13="TE_Bubble_Table";var d43='individual';var p4L=50;var z4z="format";var y6A="di";var V9e='opened';var v8V="t";var u12='input:checked';var f71='Are you sure you wish to delete 1 row?';var X_8="DTE_Pr";var y2E="nput";var F2j="v";var b6a="H";var a0Y="ty";var r$d="=\"";var Y$9="off";var S47="tion";var D8W="lue";var X2r="_typeFn";var K$f="focus";var n4m="oc";var Z5q='>';var v_M="opt";var W_f="ent";var F6R="edit";var z9u="submit";var S8F="background";var W$g="_fi";var J1Q="wr";var r7E="replace";var j$_="act";var Z8G="th";var t$e="optionsPair";var R0X="toggle";var C_e="ie";var v0U="_even";var t8k="_inp";var O0f="1.1";var b7d="ft";var M9P='';var A5D='The selected items contain different values for this input. To edit and set all items for this input to the same value, click or tap here, otherwise they will retain their individual values.';var z1d="te %d r";var n6U="_clearDynamicInfo";var h79="def";var B5D="er";var v0T="ction";var O70="fu";var B0h="na";var K07="\">";var s8C=0;var B4F="_enabled";var K8L="sho";var t5t="editOpts";var i8c="attr";var M5Y="multiReset";var o8_="Cr";var t97="count";var y_c="_ena";var F$e='object';var K2c="et";var i0H="isP";var l1W="iv";var d1w=null;var P1w='DTE_Inline_Buttons';var H7j="ame_";var K5w="ields";var T4P="p";var k3d="e_";var v5Q="rm";var s9C="b";var J14="ons";var T1j="18";var q9q="mb";var m7J="on";var Z07="clos";var b2B="rce";var c6f="lengt";var s6I=15;var m9F="tab";var e_d='rows().delete()';var r6s="l";var F9p="hasClass";var C2S="label";var s1x='Delete';var u8K="enabled";var Y1S="ames";var Y9K="_eventName";var J0g="animate";var O9F='block';var L7u="unc";var i89="g";var h45="E_Bubble_Triangle";var C9C="version";var i4$='fields';var H4y="Editor";var f5g="iel";var E05="columns";var a5y='inline';var H5G="but";var q3f="_dataSource";var f2a='change.dte';var c5W="isAr";var u_Z="ass=\"DTED_Lightbox_Background\"><div></div></div>";var W$5='DTE_Header';var J8n="ext";var j$5="essi";var q3Y="push";var v5d="_inpu";var O$N="-";var K_Y="ulti-n";var y3j="slice";var D7h="ajax";var K__="ubble_Backgr";var k5z="lass";var Q6D="dd";var L7t='create';var Q3S="om";var o41="lay";var x1i="co";var H5v="sabl";var B0g="abl";var y6V="\"></div";var b5P="ra";var l9v="DTE_Header";var P_6="M";var m7n="res";var o8G="Date";var d9J="_input";var K8J="oty";var r$y='am';var g2Y="li";var r6l="-create";var l8N="Class";var z3P=1;var P0f="dy";var e_9='▶';var H$l="fil";var h1u="cla";var r9M="inError";var I5N="ove";var h4H='Second';var H7P="info";var n1N="DTE_Ac";var D1D="dataT";var h8M='&';var Y$N="call";var x0Q="any";var u9h='<div class="DTED_Lightbox_Close"></div>';var v3T='cell().edit()';var t4D="upload";var e8A="eate";var t4s='open';var f9C="_Con";var x6R="sure you wish to dele";var q6C="_tidy";var P3d="opacit";var C$h=20;var c7J="of";var H4L="Sa";var T7R="pr";var O8e="ightbox";var R$J="_Edit";var L5Q="de";var N8x="ue";var b04="iv>";var I25="A system error has o";var s9v="_addOptions";var g6d="ed";var J3D="trigg";var Q5a="em";var u2s="ows?";var G2m='addBack';var K9R="_assembleMain";var E2t="separator";var G40="ne";var x5y=" ";var y_8="Are you ";var a0M="ate";var n4e='">';var D3K="m";var t7S="cont";var N1A='Sun';var u62="ter";var V2z='label';var u9V="ber";var e9m="template";var F5j="which";var G$j="_pr";var V3J="onComplete";var z1N="DT";var z8m="destroy";var z7X="Field_Info";var K9Z="new entry";var s6G="empty";var T5D='_basic';var j_Z="tart";var l0q="us";var W6X="place";var n9i="mit";var v4C="he";var y9M="buttons";var l2W="ata";var o9R="Pr";var E7Q="tr";var T$_="ppe";var A2L="_i";var r6p="va";var T_1="style";var s95="i18";var N1Q="Ne";var A4j='DTE_Form_Info';var i5I="init";var A7A='submit';var r_P="obj";var V3j='<div class="DTED_Envelope_Shadow"></div>';var K9j="open";var z0f="eq";var U$E="or";var c4e="move";var j7K="/";var g2G="data";var T9T="pend";var B2t='August';var L93="ss";var q$S="appen";var G$5='file()';var T_9=13;var e4X="css";var K3j='close';var J51="bubble";var E5a="8";var q7W="ven";var y5u="lti";var a5q="ccurred (<a target=\"_blank\" href=\"//datatables.net/tn/12\">More information</a>).";var k6s="rror";var b7_="_event";var m3x="modifier";var i2$="tedSingle";var R5$='</div>';var K8r="addBack";var w0_="<div class=\"DT";var m9a=true;var R9f="ect";var G74="fin";var G61="rro";var K0I="ses";var Y00='Wed';var n9d="_lastSet";var z9o="isPlainObject";var K1d="lt";var h1W="Error";var e53="_dataSou";var a$G="ap";var w2z='remove';var q6v="Get";var i8N="onten";var R2a=':visible';var B5d="lo";var o$0="splice";var v9R="18n";var r9q="ow";var R8j="ide";var U2W="idSrc";var W2_="safeId";var m0B="aj";var C76="editSingl";var o0v="multiSet";var O9D="wrappe";var L4b='click';var M7i="pe";var y4k="ac";var T_n="acti";var C04="set";var E2n="clo";var U5_="ataSour";var Z9U="ive";var n4W="re";var X1M="_editor_val";var q39='September';var b5l="Multiple v";var y39="tings";var H6N="container";var m4j="_b";var e7s="ch";var H4s="dex";var r5B="ach";var U2S="E_Field_Input";var L4c="<div class=\"DTED DTE";var h2l="or-";var r74="conta";var N_0="proto";var Y3e="_Wrapper\">";var t5N="J";var N8H="ppl";var U1$="join";var k43="jec";var W5Z="eld";var I1r="Label_Info";var X73="pu";var i$R="O";var Y6z="k";var L1u="F";var H$6="conte";var k3b="saf";var u$$='<span>';var p6n=false;var T90="ray";var U8X="ngth";var U1C="closeIcb";var H$N="inp";var i$D="cal";var i8i="rows";var s1f="></div>";var R9a="_eve";var a98="butto";var f0c="ns";var y67="xten";var u_V="enabl";var f8K='DTE_Footer';var v8F="edi";var k57='string';var U8k="setting";var Y1m='DTE_Form_Content';var U45='DTE';var B4x="rors";var M3c="sele";var s5q="removeSingle";var M4C="Field";var P14="un";var n5$="extend";var m4E="value";var g77="iner";var i53="rol";var q$Q="rem";var h7k="q";var X7g="pair";var j8i="Arr";var Z$t="<d";var e5o="te";var S8e="ut";var V_f="_subm";var Y7X='processing-field';var F1D='DTE DTE_Bubble';var E2D="los";var w7H="to";var U0S="T";var q$J="pairs";var g8h="content";var k4T="heck";var X_x="ca";var V8p="pre";var K77='selectedSingle';var s$q="dt";var u1I="tach";var J9g='buttons-remove';var a2E="s=\"";var G0U="disp";var f1X="ight";var H8a="erro";var x8w="att";var u8x="_Fo";var B02="TE DTE_Inline";var w9B="_multiInfo";var K5E="editorFields";var L_8="multiGet";var E2_="disable";var Y9$="_fieldFromNode";var L80="ainer";var A4U="dataTa";var N4r='submitComplete';var I51="cess";var f8b="ces";var G$8="length";var s_N="sub";var z2F="la";var h0z="display";var L8t="split";var Z6a="L";var c5Z="for";var o_u="pes";var m4J="field";var H8K="pt";var k9y=39;var F4Q="ubble";var U4_="preventDefault";var W5_="ce";var X2P="creat";var j0X="inline";var i8w='keyup';var T9X="editFields";var d$4="fields";var g_M="mat";var i6P='row.create()';var n4G="s()";var M1f="DTE_F";var s37="add";var c1x="ind";var z2X="Option";var v3$="displayed";var e38="r()";var V3s="ve";var c_D="append";var Q3C="toAr";var R0O='multi-info';var J7C="vent";var b8y="bl";var t1G="_Body";var S$O="mult";var q9i="cell";var U2j="fie";var g6Q="tio";var I6h="es";var R7i="butt";var q7o='1';var Y5t="v>";var b05="ror";var G2V="E";var e1J="processing";var S5o="dom";var o1a="ld";var N9G="utt";var B89="0";var x5A="replac";var q4L="tabl";var l$n="iles";var d4J="DTE";var d1n="i1";var c6e="ic";var X$d=' ';var q4Z="</";var f8F="gi";var N2I="Id";var D0c="val";var n8X="lu";var A5X="get";var q5s="orde";var g9U="emo";var x9C="leng";var Y_j="im";var L$F="up";var r2t="ad";var E9x="st";var m$E="indexes";var p_m="_actionClass";var z6u="displayFields";var D5T='none';var T8a="ield_Type_";var O0l="activeElement";var U4w="_blur";var b2j="ge";var V8f='<div class="DTED_Envelope_Container"></div>';var R0g="ma";var z_a="create";var f9Q="inArray";var K8u="DateTime";var F0C="_e";var u94="displayController";var s8Z="cti";var P8$='btn';var n6P="ecember";var h9_="w";var W9V="Fn";var D80='_';var H86='main';var X5b="prop";var F$u="formOptions";var E9i="action";var l4d="ht";var z3M="sp";var b1z='div.';var H$p="exten";var L42="ou";var h7b="isArra";var x2A="ows";var l5_="ti";var O0j="it";var c4a=">";var R3t="i18n";var H51="DTE_Inlin";var N8B="pro";var f47='readonly';var X5_="apply";var M0G="pen";var Q8f="ass";var E$H="eac";var v4d='Thu';var z8b="ls";var T4Y="lic";var p3J="inpu";var f8c='rows().edit()';var d5b="type";var U1i="has";var u7a="<div class=\"DTED_L";var r7n="Ju";var O1C="len";var o1W="I";var y1W='DTE_Bubble_Liner';var n9G="oter_Cont";var q2y="html";var X8J="gt";var k7Z="cs";var Y$E='</label>';var o93="_t";var K8N="yle";var r7d="der";var q9E="_s";var Z1N="arch";var n1W="includeFields";var r9S="TE_Field_Message";var W5i="removeClass";var x5x='bubble';var a6D="be";var F3I="E_Form_Butto";var v1S="ds";var Q20="np";var g_K="in";var e7A="div";var F9M=2;var K_D="files";var I_g="tatus";var X$A="displa";var z5U="en";var o0o="mu";var o$K="noFileText";var H3u="header";var H5u='display';var z4E="options";var M4q="button";var n4y="DTE_Field_";var X3j="title";var E$h="tm";var E3u="maybeOpen";var m0X="rmat";var c_Q="da";var y2D="ion";var w$b="_picker";var b_w='keyless';var P3r="ws";var M4u='cells().edit()';var M6k='DTE_Action_Create';var m$X="all";var y4L="selec";var U$q="ght";var K7C="Options";var Q68="ength";var V1A="_crudArgs";var a2j="</d";var O8n="al";var W93="ipOpts";var L3d="ssi";var x7f='os';var J33="su";var z7i="alues";var n76="d";var x3L="tons-create";var E5L="eb";var K_r="ary";var F1m="i";var Q3A="r";var A$6="rop";var V4V="is";var O03="oEdit";var s4e='DTE_Form';var u$5="x";var h7_="message";var Y8A="D";var m2L="mul";var W4N="Set";var c$$="<div class=\"DTED_Envelope_Background\"><div></div";var K0F="ubm";var M1j="class=\"";var b6H="ame";var c7L="ghtbox_Wrappe";var y8_="tri";var x23="Api";var K1G="nt";var K1w="input:l";var a09="iValue";var Y1P="ssage";var y9k="cessing_Indi";var A8f="E_";var l1E="_jumpToFirst";var V50="Nove";var E5t='edit';var A3l="mo";var o7$='Fri';var h08="lds";var y6N="wrapper";var t0I='<div class="';var B7X="ield";var M3z="rn";var R3x='#';var O0C='.edep';var l_9="dataSrc";var L7Q="xhr";var r_h="end";var N_8="pload";var h40="sa";var x5R='lightbox';var H__="ex";var v$F="tion_Re";var z5s="cator";var k65="ts";var V$A="DTE_B";var U8A="dis";var x8K="table";var y0i="asic";var G_V='focus';var y7T="A";var Q5q='row().delete()';var P1_="tS";var T5A="<";var Y89="pp";var f3o="1";var c5b="Upd";var y4Y="ito";var X_X="s";var j_D="inde";var Q7t="bel";var R26="ingle";var j13="Edit";var Z1t="Content";var Z86="unshift";var c1w="_formOptions";var g2s='row().edit()';var e$x='json';var G7a="opts";var O49=',';var a9f="itField";var n4I="detach";var G9j="ttr";var s00="rowIds";var t00="addClass";var d0Y="mi";var q71="ltiS";var Y9j='rows';var d3U="error";var f_V="tle";var f9M="tor";var t9p="C";var c1f="parents";var V71="o";var f1I="Types";var v7Y="err";var q$L="taTab";var Y9n="io";var X4k='icon close';var E6s="prot";var K4y="offsetHeight";var D5m="input";var x6S="sh";var t8W="ding";var p3T="ing";var Y4X="8n";var M_j="f";var y_g="estore";var B0o="_weakInArray";var Q6f="TE_Form_";var A$u="_Content";var v$9='input';var L$j="ocus";var I8A='action';var t1S="isArray";var Q3t="ine";var h0H="formButtons";var q19="TE_";var X2d="rra";var v_y="clas";var o9q="el";var y6s="oun";var C0t="eng";var s0n="ng";var p9i='disabled';var t8M="</di";var l98="apper";var s30="_ad";var f3s='DT_RowId';var r$u="des";var a17="multiple";var W6z="Of";var w5E="ni";var L9Y='body';var Y0R="xte";var d46="rato";var y5O="anu";var A1j="]";var z1x="attach";var u5Y="checked";var G1N="Field_";var X_t="lled";var h_N="Octobe";var G0H="_d";var z9L="editor";var e08="r\">";var p6l="xtend";var z7J="To";var B3M="wrap";var S_s="dicator";var P_k="gth";var V20="hide";var I9o="age";var q1Z="pos";var B$m="ro";var P4u="one";var z4c="0.20";var w_U="ast";var b4P="\"";var h3D="prepend";var Z8R="tent";var Y0O='buttons-edit';var e5y="ay";var p59="ck";var g2V='<';var u08='DTE_Field_InputControl';var S03="ble";var C$7="ll";var b5p="_postopen";var E4E='<div class="DTED_Envelope_Close"></div>';var e3z="pla";var L8D="appendTo";var h5K="<div ";var S4P="_in";var J2i="dependent";var Y3n='<div class="DTED_Lightbox_Content_Wrapper">';var K4C="h";var d71="versionChec";var y0j="_focus";var V1u="_form";var h5T="e ";var W2c="<div cl";var q2H="sin";var w5a="fe";var j98="bubb";var E_X="_pi";var c9N="op";var p_G=25;var J5v="map";var e8G="u";var I2x="put";var a1f="children";var x9q="sage";var M4G="wra";var B_M="ataTab";var P1C="ruary";var E_m='Tue';var l_l="ti-r";var D2_="itl";var W9O="_v";var E1q="select";var K$o='This input can be edited individually, but not part of a group.';var A10="_";var H6W=".";var k0p='April';var o8M="an";var G09="preven";var X78="od";var I49='Close';var U7i="fiel";var E8f="TE";var Q6p="DTE_";var c86="D_Li";var H_d="order";var z3a="elds";var g8M="ssin";var f4l="con";var l0p="show";var o5R="_preopen";var J60="at";var W8u='<div class="DTED_Lightbox_Container">';var U9v="internalSettings";var j60='andSelf';var n1k="ess";var p7_="ected";var E2Q="sl";var e8y="ov";var a2V="draw";var l_V="pl";var V$W="_processing";var G9$="ions";var X7B="bmit";var m1J="Body_";var P0z="displ";var t4r="ance";var B8n="respon";var R9K="conf";var o0q="rc";var Z26="ig";var C43="nd";var E8V="_nestedClose";var Y$F="sAr";var e4C="form";var g5t="classes";var G1t="ace";var x7Z="eve";var o2f="_val";var h1B="formInfo";var p08="os";var L43='-';var S5Z="app";var H3I="Edit e";var M6N="D DTED_Envelope";var h5e="idSr";var m68="Label";var i6A="momentLocale";var n3B="mode";var t9I="plete";var S60='Editor requires DataTables 1.10.20 or newer';var K7c="y";var A3x="ked";var j_K="cr";var B3O="remove";var a84="_fnE";var h8i="name";var x3R="_close";var d$y="ax";var m4k="P";var j1c="top";var l3u="S";var D9C='DTE_Field_StateError';var T79="_inline";var c0p="_edit";var T1I="ei";var o3U='changed';var j5c=500;var k1D="fo";var f41="_animate";var x1J="id";var j6M='Undo changes';var s1g='Minute';var b$U="fi";var h0r="splic";var g8Z="remo";var u_C='title';var Z7E="Processing_In";var l8F="npu";var u0x="ult";var w5Z="se";var P1u="dit";var q7w="stri";var d4M="fun";var y8i="ab";var U4H="file";var R9N="bled";var J81="le";var m5r="evious";var c33="ldTypes";var g_f="ea";var o2H="_c";var C3o="offset";var U8H=600;var u1t="tions";var Y0Q="tend";var b6S="compare";var m7Z="dTo";var N8J="me";var J1n="mpl";var Q6H="blur";var m8S="func";var P7N="Dele";var B_s="exte";var y_n="node";var L2e="Table";var v9y="eOpen";var g9E="_p";var z60="Re";var P$L="row";var W_d="focu";var T1z="Cl";var L$w="close";var G5m="lete";var b7B="tt";var P_u="xt";var p0a=m4J;p0a+=f1I;var l9U=j13;l9U+=U$E;var N4E=n76;N4E+=U8kjl[172460];N4E+=q$L;N4E+=J81;var A53=M_j;A53+=u6W;var A3n=O0f;A3n+=z4c;var S2i=d71;S2i+=Y6z;var g2n=C9C;g2n+=t9p;g2n+=k4T;var b7X=M3c;b7X+=U8kjl.P3i;b7X+=i2$;var a1k=U8kjl[213595];a1k+=Y0R;a1k+=u6W;a1k+=n76;var u83=C76;u83+=U8kjl[213595];var A4Q=U8kjl[213595];A4Q+=P1u;var q9Q=U8kjl[213595];q9Q+=y6A;q9Q+=P1_;q9Q+=R26;var N54=y4L;N54+=v8V;N54+=g6d;var N3D=X_X;N3D+=U8kjl[213595];N3D+=r6s;N3D+=p7_;var g6L=X_X;g6L+=j_Z;var V8l=y9M;V8l+=r6l;var V80=H5G;V80+=x3L;var F1w=U8kjl[213595];F1w+=u$5;F1w+=e5o;F1w+=C43;var Q53=U8kjl[213595];Q53+=u$5;Q53+=v8V;var C1d=D1D;C1d+=U8kjl[172460];C1d+=S03;var E__=L7Q;E__+=H6W;E__+=s$q;var D1O=U4H;D1O+=n4G;var f7I=g6d;f7I+=y4Y;f7I+=e38;var H_j=n4W;H_j+=f8F;H_j+=E9x;H_j+=B5D;var K1Q=M_j;K1Q+=u6W;var C7O=A4U;C7O+=S03;var i4i=v8V;i4i+=H__;i4i+=v8V;var q_I=U8kjl[213595];q_I+=u$5;q_I+=v8V;q_I+=r_h;var b4W=H__;b4W+=e5o;b4W+=u6W;b4W+=n76;var K7W=H__;K7W+=Y0Q;var F7d=H__;F7d+=Y0Q;var E3l=B_s;E3l+=C43;var I1q=U8kjl[213595];I1q+=P_u;I1q+=r_h;var S0H=U8kjl[557061];S0H+=U8kjl[172460];S0H+=D1p;S0H+=S03;var s$j=M_j;s$j+=u6W;var D$=n76;D$+=B_M;D$+=r6s;D$+=U8kjl[213595];var D2=M_j;D2+=u6W;var g$=u7a;g$+=O8e;g$+=A$u;g$+=K07;var P5=L4c;P5+=c86;P5+=c7L;P5+=e08;var N9=W2c;N9+=u_Z;var W5=w0_;W5+=G2V;W5+=M6N;W5+=Y3e;var R_=c$$;R_+=s1f;var h7=Q6p;h7+=Z7E;h7+=S_s;var F5=T7R;F5+=V71;F5+=I51;F5+=p3T;var t0=Y8A;t0+=B02;var y5=H51;y5+=k3d;y5+=M4C;var P0=l9v;P0+=f9C;P0+=Z8R;var g9=Y8A;g9+=Q6f;g9+=h1W;var N8=z1N;N8+=F3I;N8+=f0c;var J9=s9C;J9+=v8V;J9+=u6W;var O1=d4J;O1+=u8x;O1+=n9G;O1+=W_f;var E5=M1f;E5+=F1m;E5+=o9q;E5+=n76;var X8=M1f;X8+=T8a;var I3=X_8;I3+=V71;I3+=y9k;I3+=z5s;var A6=n4y;A6+=R3S;A6+=H7j;var o9=m2L;o9+=l_l;o9+=y_g;var v6=D3K;v6+=K_Y;v6+=O03;var u6=Y8A;u6+=r9S;var V3=Q6p;V3+=I1r;var S$=z1N;S$+=A8f;S$+=z7X;var x2=z1N;x2+=A8f;x2+=G1N;x2+=h1W;var J1=Y8A;J1+=q19;J1+=m68;var O0=z1N;O0+=U2S;var T_=Y8A;T_+=z13;var w9=z1N;w9+=h45;var V4=V$A;V4+=K__;V4+=y6s;V4+=n76;var q4=Y8A;q4+=E8f;q4+=t1G;var u_=Y8A;u_+=q19;u_+=m1J;u_+=Z1t;var n$=n1N;n$+=v$F;n$+=c4e;var H4=z1N;H4+=L8M;H4+=R$J;var p9=a84;p9+=Y0R;p9+=u6W;p9+=n76;var f1=V71;f1+=y7T;f1+=D0P;var p4=U8kjl[213595];p4+=P_u;var f7=M_j;f7+=u6W;var Q0=U8kjl[213595];Q0+=y67;Q0+=n76;var I5=U8kjl[172460];I5+=U8kjl[241984];I5+=Y9n;I5+=u6W;var C6=P7N;C6+=v8V;C6+=U8kjl[213595];var Q3=y_8;Q3+=x6R;Q3+=z1d;Q3+=u2s;var k8=P7N;k8+=v8V;k8+=U8kjl[213595];var S9=b5l;S9+=z7i;var W1=I25;W1+=a5q;var r_=H3I;r_+=u6W;r_+=E7Q;r_+=K7c;var A_=c5b;A_+=a0M;var K4=G2V;K4+=y6A;K4+=v8V;var G5=H4L;G5+=v8V;var D1=P_6;D1+=V71;D1+=u6W;var w1=o9R;w1+=m5r;var i0=R3S;i0+=U8kjl[213595];i0+=P_u;var Q5=Y8A;Q5+=n6P;var k5=V50;k5+=q9q;k5+=U8kjl[213595];k5+=Q3A;var B7=h_N;B7+=Q3A;var n9=t5N;n9+=e8G;n9+=r6s;n9+=K7c;var j2=r7n;j2+=G40;var n_=P_6;n_+=U8kjl[172460];n_+=K7c;var P1=P_6;P1+=Z1N;var Z7=L1u;Z7+=E5L;Z7+=P1C;var U$=t5N;U$+=y5O;U$+=K_r;var P_=b6a;P_+=L42;P_+=Q3A;var i6=T4P;i6+=D3K;var Y_=t9p;Y_+=c0u;Y_+=h5T;Y_+=K9Z;var S6=o8_;S6+=g_f;S6+=v8V;S6+=U8kjl[213595];var h1=N1Q;h1+=h9_;var l0=m4j;l0+=y0i;var n6=U8kjl[172460];n6+=C$7;var C_=B$m;C_+=h9_;var e7=W_d;e7+=X_X;var z1=U8kjl.P3i;z1+=B5d;z1+=X_X;z1+=U8kjl[213595];var E_=s9C;E_+=n8X;E_+=Q3A;var X4=M_j;X4+=u6W;'use strict';(function(){var G0t=U8kjl;var p$e="aTables Ed";var M$Q='Editor - Trial expired';var z_u="3a";var d2h="ee8";var D2F=60;var J6K="6";var s6E=24;var g$a="13b6";var Q_e="763";var v_N="ceil";var M7_='DataTables Editor trial info - ';var S2O="getTime";var r6Y="/editor.datatables.net/purchase";var x$5='Your trial has now expired. To purchase a license ';var J02=61;var A9H="itor\n\n";var O2n="log";var r$K="se see ht";var g0N="Tim";G0t.N$L();var d4q=' remaining';var z29="Thank you for trying Dat";var T42=7;var Z93="tps:/";var s0Y=1675555200;var R5I=7686;var B6q=1000;var W3V="3";var E$x="for Editor, plea";var E1v=5136865939;var V74='s';var U9=d2h;U9+=s9C;var B6=W3V;B6+=M_j;B6+=E5a;B6+=U8kjl[213595];var C7=b2j;C7+=v8V;C7+=g0N;C7+=U8kjl[213595];var a5=J6K;a5+=Q_e;var A8=U8kjl.v4L;A8+=z_u;G0t.Y3=function(v7){G0t.m_s();if(G0t)return G0t.W8(v7);};G0t.P6=function(o0){G0t.N$L();if(G0t && o0)return G0t.W8(o0);};var remaining=Math[v_N]((new Date((G0t.K6(A8)?E1v:s0Y) * B6q)[S2O]() - new Date()[G0t.t3(a5)?U8kjl[130952]:C7]()) / ((G0t.P6(B6)?R5I:B6q) * (G0t.Y3(g$a)?D2F:J02) * (G0t.Z9(U9)?D2F:k9y) * s6E));if(remaining <= s8C){var X6=E$x;X6+=r$K;X6+=Z93;X6+=r6Y;var q0=z29;q0+=p$e;q0+=A9H;alert(q0 + x$5 + X6);throw M$Q;}else if(remaining <= T42){var q6=x5y;q6+=c_Q;q6+=K7c;console[O2n](M7_ + remaining + q6 + (remaining === z3P?M9P:V74) + d4q);}})();var DataTable=$[X4][U8kjl.p1N];var formOptions={buttons:m9a,drawType:p6n,focus:s8C,message:m9a,nest:p6n,onBackground:E_,onBlur:K3j,onComplete:K3j,onEsc:z1,onFieldError:e7,onReturn:A7A,scope:C_,submit:n6,submitHtml:e_9,submitTrigger:d1w,title:m9a};var defaults$1={actionName:I8A,ajax:d1w,display:x5R,events:{},fields:[],formOptions:{bubble:$[n5$]({},formOptions,{buttons:l0,message:p6n,submit:o3U,title:p6n}),inline:$[n5$]({},formOptions,{buttons:p6n,submit:o3U}),main:$[n5$]({},formOptions)},i18n:{close:I49,create:{button:h1,submit:S6,title:Y_},datetime:{amPm:[r$y,i6],hours:P_,minutes:s1g,months:[U$,Z7,P1,k0p,n_,j2,n9,B2t,q39,B7,k5,Q5],next:i0,previous:w1,seconds:h4H,unknown:L43,weekdays:[N1A,D1,E_m,Y00,v4d,o7$,G5]},edit:{button:K4,submit:A_,title:r_},error:{system:W1},multi:{info:A5D,noMulti:K$o,restore:j6M,title:S9},remove:{button:k8,confirm:{1:f71,_:Q3},submit:s1x,title:C6}},idSrc:f3s,table:d1w};var settings={action:d1w,actionName:I5,ajax:d1w,bubbleNodes:[],closeCb:d1w,closeIcb:d1w,dataSource:d1w,displayController:d1w,displayed:p6n,editCount:s8C,editData:{},editFields:{},editOpts:{},fields:{},formOptions:{bubble:$[n5$]({},formOptions),inline:$[n5$]({},formOptions),main:$[Q0]({},formOptions)},globalError:M9P,id:-z3P,idSrc:d1w,includeFields:[],mode:d1w,modifier:d1w,opts:d1w,order:[],processing:p6n,setFocus:d1w,table:d1w,template:d1w,unique:s8C};var DataTable$6=$[f7][U8kjl.p1N];var DtInternalApi=DataTable$6[p4][f1];function objectKeys(o){var g6D="hasOwnProperty";var out=[];U8kjl.N$L();for(var key in o){if(o[g6D](key)){out[q3Y](key);}}return out;}function el(tag,ctx){U8kjl.m_s();var V4X='*[data-dte-e="';var o$=b4P;o$+=A1j;if(ctx === undefined){ctx=document;}return $(V4X + tag + o$,ctx);}function safeDomId(id,prefix){var v2=x5A;v2+=U8kjl[213595];var y7=q7w;y7+=s0n;if(prefix === void s8C){prefix=R3x;}return typeof id === y7?prefix + id[v2](/\./g,L43):prefix + id;}function safeQueryId(id,prefix){var R6d="\\";U8kjl.m_s();var R3f="$";var Q7=R6d;Q7+=R3f;Q7+=f3o;if(prefix === void s8C){prefix=R3x;}return typeof id === k57?prefix + id[r7E](/(:|\.|\[|\]|,)/g,Q7):prefix + id;}function dataGet(src){var i4P="_fnGetObjectD";var Q$=i4P;Q$+=l2W;Q$+=W9V;return DtInternalApi[Q$](src);}function dataSet(src){var F3D="_fnSetObjectDataFn";U8kjl.N$L();return DtInternalApi[F3D](src);}var extend=DtInternalApi[p9];function pluck(a,prop){var A0=E$H;A0+=K4C;var out=[];$[A0](a,function(idx,elIn){var t6=T4P;t6+=e8G;t6+=X_X;t6+=K4C;out[t6](elIn[prop]);});U8kjl.N$L();return out;}function deepCompare(o1,o2){var q6x="ec";var Z0=O1C;Z0+=i89;Z0+=v8V;Z0+=K4C;var G$=J81;G$+=u6W;G$+=P_k;var F7=r_P;U8kjl.N$L();F7+=q6x;F7+=v8V;if(typeof o1 !== F$e || typeof o2 !== F7){return o1 == o2;}var o1Props=objectKeys(o1);var o2Props=objectKeys(o2);if(o1Props[G$8] !== o2Props[G$]){return p6n;}for(var i=s8C,ien=o1Props[Z0];i < ien;i++){var u$=r_P;u$+=q6x;u$+=v8V;var propName=o1Props[i];if(typeof o1[propName] === u$){if(!deepCompare(o1[propName],o2[propName])){return p6n;}}else if(o1[propName] != o2[propName]){return p6n;}}return m9a;}var _dtIsSsp=function(dt,editor){var q8v="drawType";var i6y="ServerS";var X2=s9C;U8kjl.N$L();X2+=i6y;X2+=R8j;var R9=w5Z;R9+=v8V;R9+=y39;return dt[R9]()[s8C][R13][X2] && editor[X_X][t5t][q8v] !== D5T;};var _dtApi=function(table){var q9h="Dat";var F75="aTable";var k6=q9h;k6+=F75;var v9=g2G;v9+=L2e;var B3=M_j;B3+=u6W;return table instanceof $[B3][v9][x23]?table:$(table)[k6]();};var _dtHighlight=function(node){U8kjl.N$L();node=$(node);setTimeout(function(){var I1L='highlight';var s2=s37;s2+=l8N;node[s2](I1L);setTimeout(function(){var K$B='noHighlight';var I3m="emove";var g0E="Clas";var R8l="igh";var P3R=550;var c4=K4C;c4+=R8l;c4+=r6s;c4+=f1X;var Q6=Q3A;Q6+=I3m;Q6+=g0E;Q6+=X_X;node[t00](K$B)[Q6](c4);setTimeout(function(){var f0=B3O;f0+=g0E;f0+=X_X;node[f0](K$B);},P3R);},j5c);},C$h);};var _dtRowSelector=function(out,dt,identifier,fields,idFn){var D0=j_D;D0+=u$5;D0+=I6h;dt[i8i](identifier)[D0]()[G5E](function(idx){var V7e=14;var V5s='Unable to find row identifier';var row=dt[P$L](idx);var data=row[g2G]();var idSrc=idFn(data);if(idSrc === undefined){var z0=B5D;z0+=b05;Editor[z0](V5s,V7e);}U8kjl.m_s();out[idSrc]={data:data,fields:fields,idSrc:idSrc,node:row[y_n](),type:d5z};});};var _dtFieldsFromIdx=function(dt,fields,idx,ignoreUnknown){var v0d="mpt";var M1H='Unable to automatically determine field from source. Please specify the field name.';var y$P="yO";var g7X="aoColumns";var L8K="tFiel";var O1n=11;var O1U="isE";var b3=O1U;b3+=v0d;b3+=y$P;b3+=J6l;var w0=D3K;w0+=Y8A;w0+=l2W;var p7=g6d;U8kjl.m_s();p7+=a9f;var B0=v8F;B0+=L8K;B0+=n76;var z9=U8k;z9+=X_X;var col=dt[z9]()[s8C][g7X][idx];var dataSrc=col[B0] !== undefined?col[p7]:col[w0];var resolvedFields={};var run=function(field,dataSrcIn){U8kjl.N$L();if(field[h8i]() === dataSrcIn){var P2=B0h;P2+=N8J;resolvedFields[field[P2]()]=field;}};$[G5E](fields,function(name,fieldInst){U8kjl.m_s();if(Array[t1S](dataSrc)){var v4=J81;v4+=u6W;v4+=P_k;for(var _i=s8C,dataSrc_1=dataSrc;_i < dataSrc_1[v4];_i++){var data=dataSrc_1[_i];run(fieldInst,data);}}else {run(fieldInst,dataSrc);}});if($[b3](resolvedFields) && !ignoreUnknown){Editor[d3U](M1H,O1n);}return resolvedFields;};var _dtCellSelector=function(out,dt,identifier,allFields,idFn,forceFields){var Q0J="xes";var s2d="lls";var g5=U8kjl[213595];g5+=U8kjl[172460];g5+=U8kjl.P3i;g5+=K4C;var f6=g_K;U8kjl.m_s();f6+=n76;f6+=U8kjl[213595];f6+=Q0J;var Q2=W5_;Q2+=s2d;if(forceFields === void s8C){forceFields=d1w;}var cells=dt[Q2](identifier);cells[f6]()[g5](function(idx){var K$q="nodeNa";var h_H="xedNode";var E6S="keys";var t5_="atta";var o1O="attachFields";var a4W="fix";var Q_i="edNode";var B_X="column";var I6M="chFi";var C4z="ush";var N6=K$q;N6+=D3K;N6+=U8kjl[213595];var x0=n76;x0+=U8kjl[172460];x0+=v8V;x0+=U8kjl[172460];var T9=Q3A;T9+=r9q;var D9=W5_;D9+=r6s;D9+=r6s;var cell=dt[D9](idx);var row=dt[P$L](idx[T9]);var data=row[x0]();var idSrc=idFn(data);var fields=forceFields || _dtFieldsFromIdx(dt,allFields,idx[B_X],cells[t97]() > z3P);var isNode=typeof identifier === F$e && identifier[N6] || identifier instanceof $;var prevDisplayFields;var prevAttach;var prevAttachFields;if(Object[E6S](fields)[G$8]){var x9=u6W;x9+=V71;x9+=n76;x9+=U8kjl[213595];var B1=b$U;B1+=h_H;var p2=a4W;p2+=Q_i;var j6=T4P;j6+=C4z;var P8=t5_;P8+=U8kjl.P3i;P8+=K4C;var M7=Y6z;M7+=U8kjl[213595];M7+=K7c;M7+=X_X;var g2=t5_;g2+=I6M;g2+=z3a;if(out[idSrc]){var h_=J60;h_+=u1I;prevAttach=out[idSrc][h_];prevAttachFields=out[idSrc][o1O];prevDisplayFields=out[idSrc][z6u];}_dtRowSelector(out,dt,idx[P$L],allFields,idFn);out[idSrc][g2]=prevAttachFields || [];out[idSrc][o1O][q3Y](Object[M7](fields));out[idSrc][z1x]=prevAttach || [];out[idSrc][P8][j6](isNode?$(identifier)[A5X](s8C):cell[p2]?cell[B1]():cell[x9]());out[idSrc][z6u]=prevDisplayFields || ({});$[n5$](out[idSrc][z6u],fields);}});};var _dtColumnSelector=function(out,dt,identifier,fields,idFn){var C3=U8kjl[213595];U8kjl.N$L();C3+=U8kjl[172460];C3+=e7s;var t8=c1x;t8+=H__;t8+=U8kjl[213595];t8+=X_X;var N1=W5_;N1+=r6s;N1+=r6s;N1+=X_X;dt[N1](d1w,identifier)[t8]()[C3](function(idx){_dtCellSelector(out,dt,idx,fields,idFn);});};var dataSource$1={commit:function(action,identifier,data,store){var y$_="searchPa";var p8$="rebuild";var A7R="ures";var B6V="drawT";var e3t="Det";var t04="Build";var w0h="Pane";var R03="Si";var u$K="uilder";var z$I="ilder";var K3o="bServer";var N6t="nes";var j0c="rebuildPane";var H6Q="searchBuilder";var h22="rchB";var J2F="responsive";var u8r="searchBu";var u0z="rowI";var W9T="recalc";var E4F="ails";var o0r="oFeat";var j0=B6V;j0+=K7c;j0+=M7i;var l8=J81;l8+=U8X;var Z_=U8kjl[213595];Z_+=n76;Z_+=F1m;Z_+=v8V;var c2=u0z;c2+=v1S;var N4=K3o;N4+=R03;N4+=n76;N4+=U8kjl[213595];var s3=o0r;s3+=A7R;var F_=X_X;F_+=K2c;F_+=y39;var X1=U8kjl.x2x;X1+=S03;var that=this;var dt=_dtApi(this[X_X][X1]);var ssp=dt[F_]()[s8C][s3][N4];var ids=store[c2];if(!_dtIsSsp(dt,this) && action === Z_ && store[s00][l8]){var V5=r6s;V5+=U8kjl[213595];V5+=u6W;V5+=P_k;var row=void s8C;var compare=function(id){U8kjl.N$L();return function(rowIdx,rowData,rowNode){return id == dataSource$1[x1J][Y$N](that,rowData);};};for(var i=s8C,ien=ids[V5];i < ien;i++){try{row=dt[P$L](safeQueryId(ids[i]));}catch(e){row=dt;}if(!row[x0Q]()){row=dt[P$L](compare(ids[i]));}if(row[x0Q]() && !ssp){var p8=Q3A;p8+=U8kjl[213595];p8+=c4e;row[p8]();}}}var drawType=this[X_X][t5t][j0];if(drawType !== D5T){var E4=w5Z;E4+=Z1N;E4+=t04;E4+=B5D;var l_=X_X;l_+=g_f;l_+=h22;l_+=u$K;var C$=M_j;C$+=P14;C$+=s8Z;C$+=m7J;var b8=w5Z;b8+=Z1N;b8+=w0h;b8+=X_X;var S5=B8n;S5+=X_X;S5+=Z9U;var a4=n76;a4+=Q3A;a4+=U8kjl[172460];a4+=h9_;var dtAny=dt;if(ssp && ids && ids[G$8]){var m$=n76;m$+=Q3A;m$+=U8kjl[172460];m$+=h9_;dt[P4u](m$,function(){var z6=r6s;z6+=z5U;z6+=X8J;U8kjl.m_s();z6+=K4C;for(var i=s8C,ien=ids[z6];i < ien;i++){var U3=U8kjl[172460];U3+=u6W;U3+=K7c;var q7=B$m;q7+=h9_;var row=dt[q7](safeQueryId(ids[i]));if(row[U3]()){_dtHighlight(row[y_n]());}}});}dt[a4](drawType);if(dtAny[S5]){dtAny[J2F][W9T]();}if(typeof dtAny[b8] === C$ && !ssp){var j3=y$_;j3+=N6t;dtAny[j3][j0c](undefined,m9a);}if(dtAny[l_] !== undefined && typeof dtAny[E4][p8$] === U8kjl[517813] && !ssp){var k_=A5X;k_+=e3t;k_+=E4F;var x8=u8r;x8+=z$I;dtAny[x8][p8$](dtAny[H6Q][k_]());}}},create:function(fields,data){var C0c="ode";var x5=U8kjl.x2x;U8kjl.m_s();x5+=s9C;x5+=r6s;x5+=U8kjl[213595];var dt=_dtApi(this[X_X][x5]);if(!_dtIsSsp(dt,this)){var J3=u6W;J3+=C0c;var h3=B$m;h3+=h9_;var row=dt[h3][s37](data);_dtHighlight(row[J3]());}},edit:function(identifier,fields,data,store){var A9h="Type";var L2H="ice";var J3q="able";var f8=u6W;f8+=m7J;f8+=U8kjl[213595];var H5=n76;H5+=b5P;H5+=h9_;H5+=A9h;U8kjl.N$L();var k9=v8V;k9+=J3q;var that=this;var dt=_dtApi(this[X_X][k9]);if(!_dtIsSsp(dt,this) || this[X_X][t5t][H5] === f8){var I$=U8kjl[172460];I$+=u6W;I$+=K7c;var V7=F1m;V7+=n76;var rowId_1=dataSource$1[V7][Y$N](this,data);var row=void s8C;try{var m8=Q3A;m8+=V71;m8+=h9_;row=dt[m8](safeQueryId(rowId_1));}catch(e){row=dt;}if(!row[I$]()){var l9=Q3A;l9+=V71;l9+=h9_;row=dt[l9](function(rowIdx,rowData,rowNode){U8kjl.m_s();return rowId_1 == dataSource$1[x1J][Y$N](that,rowData);});}if(row[x0Q]()){var u3=X_X;u3+=T4P;u3+=r6s;u3+=L2H;var w5=n76;w5+=J60;w5+=U8kjl[172460];var G3=n76;G3+=U8kjl[172460];G3+=v8V;G3+=U8kjl[172460];var toSave=extend({},row[G3](),m9a);toSave=extend(toSave,data,m9a);row[w5](toSave);var idx=$[f9Q](rowId_1,store[s00]);store[s00][u3](idx,z3P);}else {var e3=U8kjl[172460];e3+=Q6D;var l7=Q3A;l7+=V71;l7+=h9_;row=dt[l7][e3](data);}_dtHighlight(row[y_n]());}},fakeRow:function(insertPoint){var A0b="lass=\"dte-inl";var r$R="nl";var m9P="draw.dte-crea";var P6n="q(";var y5$="td";var S5b="teI";var H_c="__dtFakeRow";var l2K=":e";var d_W="ineAdd\">";var W$X="mn";var M7V="<tr c";var O7p=")";var r5=B$m;r5+=h9_;var s0=m9P;s0+=S5b;s0+=r$R;s0+=Q3t;var u0=M7V;u0+=A0b;u0+=d_W;var j1=q4L;j1+=U8kjl[213595];var dt=_dtApi(this[X_X][j1]);var tr=$(u0);var attachFields=[];var attach=[];var displayFields={};for(var i=s8C,ien=dt[E05](R2a)[t97]();i < ien;i++){var u9=c6f;u9+=K4C;var N_=w9v;N_+=X_X;var p0=l2K;p0+=P6n;p0+=B89;p0+=O7p;var m0=S5Z;m0+=U8kjl[213595];m0+=C43;m0+=z7J;var T4=T5A;T4+=y5$;T4+=c4a;var g3=x1i;g3+=n8X;g3+=W$X;var visIdx=dt[g3](i + R2a)[i11]();var td=$(T4)[m0](tr);var fields=_dtFieldsFromIdx(dt,this[X_X][d$4],visIdx,m9a);var cell=dt[q9i](p0,visIdx)[y_n]();if(cell){var D3=h1u;D3+=L93;D3+=R3S;D3+=b6H;var r2=U8kjl[172460];r2+=Q6D;r2+=l8N;td[r2](cell[D3]);}if(Object[N_](fields)[u9]){var B_=w9v;B_+=X_X;attachFields[q3Y](Object[B_](fields));attach[q3Y](td[s8C]);$[n5$](displayFields,fields);}}var append=function(){U8kjl.m_s();var p8D="ody";var j68='prependTo';var e6E='end';var g8c="appendT";var Z5=s9C;Z5+=p8D;var y1=g8c;y1+=V71;var action=insertPoint === e6E?y1:j68;tr[action](dt[x8K](undefined)[Z5]());};this[H_c]=tr;append();dt[m7J](s0,function(){append();});return {0:{attach:attach,attachFields:attachFields,displayFields:displayFields,fields:this[X_X][d$4],type:r5}};},fakeRowEnd:function(){var x0E='draw.dte-createInline';var R5V="FakeRow";var G6U="eRow";var N3e="__dt";var f4N="dtFak";var U9H="__";var L2=U9H;L2+=f4N;L2+=G6U;var d8=N3e;d8+=R5V;var dt=_dtApi(this[X_X][x8K]);dt[Y$9](x0E);this[d8][B3O]();this[L2]=d1w;},fields:function(identifier){var B1N="lumns";var k8e="cells";var y1h="isPlainObj";var D28="idS";var s6=B$m;s6+=P3r;var r6=y1h;r6+=R9f;var r7=D28;r7+=Q3A;r7+=U8kjl.P3i;var idFn=dataGet(this[X_X][r7]);var dt=_dtApi(this[X_X][x8K]);var fields=this[X_X][d$4];var out={};if($[r6](identifier) && (identifier[s6] !== undefined || identifier[E05] !== undefined || identifier[k8e] !== undefined)){var x_=x1i;x_+=B1N;var J6=Q3A;J6+=x2A;if(identifier[J6] !== undefined){var b9=Q3A;b9+=V71;b9+=P3r;_dtRowSelector(out,dt,identifier[b9],fields,idFn);}if(identifier[x_] !== undefined){_dtColumnSelector(out,dt,identifier[E05],fields,idFn);}if(identifier[k8e] !== undefined){var r3=U8kjl.P3i;r3+=U8kjl[213595];r3+=r6s;r3+=z8b;_dtCellSelector(out,dt,identifier[r3],fields,idFn);}}else {_dtRowSelector(out,dt,identifier,fields,idFn);}return out;},id:function(data){var O1k="Src";var t9=F1m;t9+=n76;t9+=O1k;var idFn=dataGet(this[X_X][t9]);return idFn(data);},individual:function(identifier,fieldNames){var v1=M_j;v1+=F1m;v1+=W5Z;v1+=X_X;var H2=F1m;H2+=n76;H2+=l3u;H2+=o0q;U8kjl.m_s();var idFn=dataGet(this[X_X][H2]);var dt=_dtApi(this[X_X][x8K]);var fields=this[X_X][v1];var out={};var forceFields;if(fieldNames){var S2=U8kjl[213595];S2+=r5B;if(!Array[t1S](fieldNames)){fieldNames=[fieldNames];}forceFields={};$[S2](fieldNames,function(i,name){forceFields[name]=fields[name];});}_dtCellSelector(out,dt,identifier,fields,idFn,forceFields);return out;},prep:function(action,identifier,submit,json,store){var K$4="cancelled";var M_J="cance";var k4=n4W;k4+=c4e;var _this=this;if(action === L7t){var o6=D3K;o6+=U8kjl[172460];o6+=T4P;store[s00]=$[o6](json[g2G],function(row){var g0=U8kjl.P3i;g0+=m$X;var c_=F1m;c_+=n76;return dataSource$1[c_][g0](_this,row);});}if(action === E5t){var w2=n76;w2+=U8kjl[172460];w2+=v8V;w2+=U8kjl[172460];var m6=D3K;m6+=U8kjl[172460];m6+=T4P;var K5=M_J;K5+=X_t;var cancelled_1=json[K5] || [];store[s00]=$[m6](submit[w2],function(val,key){var A3w="isEmptyO";var O5=A3w;O5+=s9C;O5+=k43;O5+=v8V;return !$[O5](submit[g2G][key]) && $[f9Q](key,cancelled_1) === -z3P?key:undefined;});}else if(action === k4){store[K$4]=json[K$4] || [];}},refresh:function(){var a$1="reload";var Y2=U8kjl[172460];Y2+=U8kjl[88046];Y2+=U8kjl[172460];Y2+=u$5;var L6=U8kjl.x2x;L6+=s9C;L6+=J81;var dt=_dtApi(this[X_X][L6]);dt[Y2][a$1](d1w,p6n);},remove:function(identifier,fields,store){var v4b="every";var j_=J81;j_+=U8X;var t$=U8kjl.P3i;U8kjl.m_s();t$+=t4r;t$+=X_t;var H8=v8V;H8+=U8kjl[172460];H8+=s9C;H8+=J81;var that=this;var dt=_dtApi(this[X_X][H8]);var cancelled=store[t$];if(cancelled[j_] === s8C){var s7=B$m;s7+=h9_;s7+=X_X;dt[s7](identifier)[B3O]();}else {var indexes_1=[];dt[i8i](identifier)[v4b](function(){var R$=g_K;R$+=y7T;R$+=r9d;R$+=e5y;var k0=n76;k0+=U8kjl[172460];k0+=v8V;k0+=U8kjl[172460];var x4=X_x;x4+=r6s;x4+=r6s;var id=dataSource$1[x1J][x4](that,this[k0]());if($[R$](id,cancelled) === -z3P){var l5=T4P;l5+=l0q;l5+=K4C;indexes_1[l5](this[i11]());}});dt[i8i](indexes_1)[B3O]();}}};function _htmlId(identifier){var E$6="[data-editor-";var V8W="id=\"";var r3P='Could not find an element with `data-editor-id` or `id` of: ';var z2=O1C;z2+=i89;z2+=Z8G;var L8=b4P;L8+=A1j;var o5=E$6;o5+=V8W;if(identifier === b_w){return $(document);}var specific=$(o5 + identifier + L8);if(specific[z2] === s8C){specific=typeof identifier === k57?$(safeQueryId(identifier)):$(identifier);}if(specific[G$8] === s8C){throw new Error(r3P + identifier);}return specific;}function _htmlEl(identifier,name){var h5R="[data";var z2W="-editor-field=\"";var R5=b4P;R5+=A1j;var N3=h5R;N3+=z2W;var context=_htmlId(identifier);return $(N3 + name + R5,context);}function _htmlEls(identifier,names){var f5=r6s;f5+=C0t;f5+=Z8G;var out=$();for(var i=s8C,ien=names[f5];i < ien;i++){out=out[s37](_htmlEl(identifier,names[i]));}return out;}function _htmlGet(identifier,dataSrc){var U5Q="editor-value]";var g2v="[data-";var T0m="data-";var d20="editor-value";var a9=T0m;a9+=d20;var x7=U8kjl[172460];x7+=G9j;var w3=c6f;w3+=K4C;var l4=g2v;l4+=U5Q;var h6=H$l;h6+=u62;var el=_htmlEl(identifier,dataSrc);return el[h6](l4)[w3]?el[x7](a9):el[q2y]();}function _htmlSet(identifier,fields,data){$[G5E](fields,function(name,field){var k2a="data-editor-";var V$4='[data-editor-value]';U8kjl.m_s();var k49="ilte";var val=field[w4D](data);if(val !== undefined){var f_=M_j;f_+=k49;f_+=Q3A;var el=_htmlEl(identifier,field[l_9]());if(el[f_](V$4)[G$8]){var M6=k2a;M6+=r6p;M6+=D8W;var Z2=J60;Z2+=E7Q;el[Z2](M6,val);}else {var w7=K4C;w7+=E$h;w7+=r6s;var Z1=E$H;Z1+=K4C;el[Z1](function(){var G7G="removeChild";var o25="childNod";var B0_="firstChild";var V_=o25;V_+=I6h;while(this[V_][G$8]){this[G7G](this[B0_]);}})[w7](val);}}});}var dataSource={create:function(fields,data){if(data){var m5=U8kjl.P3i;m5+=m$X;var id=dataSource[x1J][m5](this,data);try{if(_htmlId(id)[G$8]){_htmlSet(id,fields,data);}}catch(e){;}}},edit:function(identifier,fields,data){var M5W="keyl";var O2=M5W;O2+=n1k;var w_=U8kjl.P3i;w_+=U8kjl[172460];w_+=C$7;var y8=F1m;y8+=n76;var id=dataSource[y8][w_](this,data) || O2;_htmlSet(id,fields,data);},fields:function(identifier){var Y$=F1m;Y$+=Y$F;Y$+=Q3A;Y$+=e5y;var out={};if(Array[Y$](identifier)){for(var i=s8C,ien=identifier[G$8];i < ien;i++){var i4=U8kjl.P3i;i4+=U8kjl[172460];i4+=C$7;var T8=M_j;T8+=F1m;T8+=U8kjl[213595];T8+=h08;var res=dataSource[T8][i4](this,identifier[i]);out[identifier[i]]=res[identifier[i]];}return out;}var data={};var fields=this[X_X][d$4];U8kjl.m_s();if(!identifier){var A2=n0H;A2+=K7c;A2+=r6s;A2+=n1k;identifier=A2;}$[G5E](fields,function(name,field){var g8x="dataSr";var T$B="valToData";var N2=g8x;N2+=U8kjl.P3i;var val=_htmlGet(identifier,field[N2]());field[T$B](data,val === d1w?undefined:val);});out[identifier]={data:data,fields:fields,idSrc:identifier,node:document,type:d5z};return out;},id:function(data){var h0=h5e;h0+=U8kjl.P3i;var idFn=dataGet(this[X_X][h0]);return idFn(data);},individual:function(identifier,fieldNames){var t_J="ta-editor";U8kjl.N$L();var r6z='data-editor-field';var S6i="nodeName";var e3r="-id]";var I21='Cannot automatically determine field name from data source';var z7D="[";var F1=U7i;F1+=v1S;var R3=U8kjl.P3i;R3+=m$X;var attachEl;if(identifier instanceof $ || identifier[S6i]){var G8=g6d;G8+=O0j;G8+=h2l;G8+=x1J;var p5=n76;p5+=J60;p5+=U8kjl[172460];var S7=z7D;S7+=c_Q;S7+=t_J;S7+=e3r;var e2=M_j;e2+=u6W;attachEl=identifier;if(!fieldNames){var X9=x8w;X9+=Q3A;fieldNames=[$(identifier)[X9](r6z)];}var back=$[e2][K8r]?G2m:j60;identifier=$(identifier)[c1f](S7)[back]()[p5](G8);}if(!identifier){identifier=b_w;}if(fieldNames && !Array[t1S](fieldNames)){fieldNames=[fieldNames];}if(!fieldNames || fieldNames[G$8] === s8C){throw new Error(I21);}var out=dataSource[d$4][R3](this,identifier);var fields=this[X_X][F1];var forceFields={};$[G5E](fieldNames,function(i,name){forceFields[name]=fields[name];});$[G5E](out,function(id,set){var g05='cell';var M1N="layField";var I8P="chFields";var n5=G0U;n5+=M1N;n5+=X_X;var x1=Q3C;x1+=Q3A;x1+=U8kjl[172460];x1+=K7c;var V1=J60;V1+=v8V;V1+=y4k;V1+=K4C;var t5=J60;t5+=U8kjl.x2x;t5+=I8P;var d7=v8V;d7+=K7c;d7+=M7i;set[d7]=g05;set[t5]=[fieldNames];set[V1]=attachEl?$(attachEl):_htmlEls(identifier,fieldNames)[x1]();set[d$4]=fields;set[n5]=forceFields;});return out;},initField:function(cfg){U8kjl.N$L();var a9I="label=\"";var Z_R="[data-e";var e0=b4P;e0+=A1j;var z3=Z_R;z3+=P1u;z3+=h2l;z3+=a9I;var label=$(z3 + (cfg[g2G] || cfg[h8i]) + e0);if(!cfg[C2S] && label[G$8]){var R8=z2F;R8+=s9C;R8+=U8kjl[213595];R8+=r6s;cfg[R8]=label[q2y]();}},remove:function(identifier,fields){U8kjl.m_s();_htmlId(identifier)[B3O]();}};var classNames={actions:{create:M6k,edit:H4,remove:n$},body:{content:u_,wrapper:q4},bubble:{bg:V4,close:X4k,liner:y1W,pointer:w9,table:T_,wrapper:F1D},field:{'disabled':p9i,'error':D9C,'input':O0,'inputControl':u08,'label':J1,'msg-error':x2,'msg-info':S$,'msg-label':V3,'msg-message':u6,'multiInfo':R0O,'multiNoEdit':v6,'multiRestore':o9,'multiValue':F52,'namePrefix':A6,'processing':I3,'typePrefix':X8,'wrapper':E5},footer:{content:O1,wrapper:f8K},form:{button:J9,buttonInternal:P8$,buttons:N8,content:Y1m,error:g9,info:A4j,tag:M9P,wrapper:s4e},header:{content:P0,wrapper:W$5},inline:{buttons:P1w,liner:y5,wrapper:t0},processing:{active:F5,indicator:h7},wrapper:U45};var displayed$2=p6n;var cssBackgroundOpacity=z3P;var dom$1={background:$(R_)[s8C],close:$(E4E)[s8C],content:d1w,wrapper:$(W5 + V3j + V8f + R5$)[s8C]};function findAttachRow(editor,attach){var a4w='head';var F3=y4k;F3+=v8V;U8kjl.m_s();F3+=F1m;F3+=m7J;var J2=v8V;J2+=U8kjl[172460];J2+=s9C;J2+=J81;var H_=M_j;H_+=u6W;var dt=new $[H_][U8kjl.p1N][x23](editor[X_X][J2]);if(attach === a4w){var I8=v4C;I8+=r2t;I8+=B5D;var h$=q4L;h$+=U8kjl[213595];return dt[h$](undefined)[I8]();;}else if(editor[X_X][F3] === L7t){var X$=U8kjl.x2x;X$+=s9C;X$+=r6s;X$+=U8kjl[213595];return dt[X$](undefined)[H3u]();}else {var G0=Q3A;G0+=r9q;return dt[G0](editor[X_X][m3x])[y_n]();}}function heightCalc$1(dte){var d2u="ody_Con";var O4V="rHe";var g5C="oute";var x4M="maxH";var o$t="outerHeigh";var c2A="div.DT";var k7b=".DTE_B";var x$p="E_Foote";var H8W="indowPad";var I4Y="out";var r98='div.DTE_Header';var c8o="rHeight";var r$=g5C;r$+=O4V;r$+=f1X;var Z8=h9_;Z8+=b5P;Z8+=Y89;Z8+=B5D;var T7=x4M;T7+=T1I;T7+=U$q;var B2=h9_;B2+=Q3A;B2+=S5Z;B2+=B5D;var l2=e7A;l2+=k7b;l2+=d2u;l2+=Z8R;var U6=h9_;U6+=H8W;U6+=t8W;var x3=v4C;x3+=Z26;x3+=K4C;x3+=v8V;var S8=I4Y;S8+=U8kjl[213595];S8+=c8o;var q_=J1Q;q_+=l98;var i9=c2A;i9+=x$p;i9+=Q3A;var f2=o$t;f2+=v8V;var header=$(r98,dom$1[y6N])[f2]();var footer=$(i9,dom$1[q_])[S8]();var maxHeight=$(window)[x3]() - envelope[R9K][U6] * F9M - header - footer;$(l2,dom$1[B2])[e4X](T7,maxHeight);return $(dte[S5o][Z8])[r$]();}function hide$2(dte,callback){var s3y="conten";if(!callback){callback=function(){};}if(displayed$2){var t_=s3y;t_+=v8V;$(dom$1[g8h])[J0g]({top:-(dom$1[t_][K4y] + p4L)},U8H,function(){var O14="fa";var N6s="deOut";var F66="rma";var P$=u6W;P$+=V71;P$+=F66;P$+=r6s;var M5=O14;M5+=N6s;var n8=B3M;n8+=T4P;n8+=U8kjl[213595];n8+=Q3A;$([dom$1[n8],dom$1[S8F]])[M5](P$,function(){$(this)[n4I]();callback();});});displayed$2=p6n;}}function init$1(){var C1n="onte";var C6b="e_Cont";var E_5="Envelop";var K10="acity";var V9a="backgro";var B2c="div.DTED_";var h4=c9N;h4+=K10;var L3=V9a;L3+=U8kjl.c58;var A$=B2c;U8kjl.N$L();A$+=E_5;A$+=C6b;A$+=L80;var R0=U8kjl.P3i;R0+=C1n;R0+=K1G;dom$1[R0]=$(A$,dom$1[y6N])[s8C];cssBackgroundOpacity=$(dom$1[L3])[e4X](h4);}function show$2(dte,callback){var j1r="opacity";var I6x="div.DTED_Lightbox_Content_Wrappe";var g8E="per";var y8V="animat";var w_a="bloc";var b1F="fsetWi";var V2l="fadeI";var s3Z='normal';var X_9="ba";var g9g="fsetHeight";var J3E='auto';var V9J="round";var K5L='click.DTED_Envelope';var B2j="resiz";var e9b="marginLeft";var U2C="appe";var W$V='0';var h9A="ED_";var B2C="styl";var y9N="click";var y09="Envelope";var k34="pacity";var a9v="kg";var K8A="ope";var v5P=".DT";var L9s='px';var m8a='resize.DTED_Envelope';var g8C="e.DTED_Envel";var Q4u="backg";var m9=B2j;m9+=g8C;m9+=K8A;var q1=V71;q1+=u6W;var G7=y9N;G7+=v5P;G7+=h9A;G7+=y09;var R2=J1Q;R2+=U2C;R2+=Q3A;var d2=I6x;d2+=Q3A;var c3=V71;c3+=M_j;c3+=M_j;var A5=m5o;A5+=V71;A5+=X_X;A5+=U8kjl[213595];var V8=d1n;V8+=E5a;V8+=u6W;var c8=v8V;c8+=F1m;c8+=f_V;var k2=K4C;k2+=T1I;k2+=U$q;var S1=B2C;S1+=U8kjl[213595];var k7=t7S;k7+=W_f;var P3=a$G;P3+=T4P;P3+=z5U;P3+=n76;var F4=s9C;F4+=V71;F4+=n76;F4+=K7c;if(!callback){callback=function(){};}$(F4)[c_D](dom$1[S8F])[P3](dom$1[y6N]);dom$1[k7][S1][k2]=J3E;if(!displayed$2){var B$=V2l;B$+=u6W;var V2=y8V;V2+=U8kjl[213595];var O3=Q4u;O3+=B$m;O3+=P14;O3+=n76;var y2=s9C;y2+=r6s;y2+=n4m;y2+=Y6z;var Y8=G0U;Y8+=r6s;Y8+=e5y;var y0=Q4u;y0+=B$m;y0+=U8kjl.c58;var j5=P3d;j5+=K7c;var W2=X_9;W2+=U8kjl.P3i;W2+=a9v;W2+=V9J;var b4=T4P;b4+=u$5;var f4=v8V;f4+=c9N;var R1=E9x;R1+=K8N;var D5=t7S;D5+=U8kjl[213595];D5+=K1G;var p_=T4P;p_+=u$5;var Z$=c7J;Z$+=g9g;var a1=X_X;a1+=v8V;a1+=K8N;var k1=J1Q;k1+=U8kjl[172460];k1+=T4P;k1+=g8E;var z4=J1Q;z4+=U8kjl[172460];z4+=l_2;var d9=h9_;d9+=F1m;d9+=n76;d9+=Z8G;var K2=B3M;K2+=g8E;var V$=u6W;V$+=V71;V$+=u6W;V$+=U8kjl[213595];var u1=n76;u1+=V4V;u1+=l_V;u1+=e5y;var E3=c7J;E3+=b1F;E3+=n76;E3+=Z8G;var g1=U8kjl[172460];g1+=v8V;g1+=U8kjl.x2x;g1+=e7s;var T2=w_a;T2+=Y6z;var n0=V71;n0+=k34;var w8=J1Q;w8+=a$G;w8+=M7i;w8+=Q3A;var style=dom$1[w8][T_1];style[n0]=W$V;style[h0z]=T2;var height=heightCalc$1(dte);var targetRow=findAttachRow(dte,envelope[R9K][g1]);var width=targetRow[E3];style[u1]=V$;style[j1r]=q7o;dom$1[K2][T_1][d9]=width + L9s;dom$1[z4][T_1][e9b]=-(width / F9M) + L9s;dom$1[k1][a1][j1c]=$(targetRow)[C3o]()[j1c] + targetRow[Z$] + p_;dom$1[D5][R1][f4]=-z3P * height - C$h + b4;dom$1[W2][T_1][j5]=W$V;dom$1[y0][T_1][Y8]=y2;$(dom$1[O3])[V2]({opacity:cssBackgroundOpacity},s3Z);$(dom$1[y6N])[B$]();$(dom$1[g8h])[J0g]({top:s8C},U8H,callback);}$(dom$1[L$w])[i8c](c8,dte[V8][A5])[Y$9](K5L)[m7J](K5L,function(e){var p1=m5o;p1+=V71;p1+=w5Z;dte[p1]();});$(dom$1[S8F])[c3](K5L)[m7J](K5L,function(e){U8kjl.m_s();dte[S8F]();});$(d2,dom$1[R2])[Y$9](G7)[m7J](K5L,function(e){var C9f="rg";var Q$O="TED_Envelope_Content_Wrapper";var y3=Y8A;y3+=Q$O;var Y4=U1i;Y4+=T1z;Y4+=U8kjl[172460];Y4+=L93;var v8=U8kjl.x2x;v8+=C9f;v8+=U8kjl[213595];v8+=v8V;if($(e[v8])[Y4](y3)){dte[S8F]();}});$(window)[Y$9](m8a)[q1](m9,function(){U8kjl.m_s();heightCalc$1(dte);});displayed$2=m9a;}var envelope={close:function(dte,callback){U8kjl.N$L();hide$2(dte,callback);},conf:{attach:d5z,windowPadding:p4L},destroy:function(dte){U8kjl.m_s();hide$2();},init:function(dte){init$1();return envelope;},node:function(dte){return dom$1[y6N][s8C];},open:function(dte,append,callback){var N5N="appendChild";var O7=U8kjl.P3i;O7+=B5d;O7+=w5Z;var z8=U8kjl.P3i;U8kjl.m_s();z8+=i8N;z8+=v8V;$(dom$1[g8h])[a1f]()[n4I]();dom$1[g8h][N5N](append);dom$1[z8][N5N](dom$1[O7]);show$2(dte,callback);}};function isMobile(){var W7N=576;var K$0="terWidth";var h0V="ntation";var R3N="orie";var z8v='undefined';var s_=L42;s_+=K$0;var O$=R3N;O$+=h0V;return typeof window[O$] !== z8v && window[s_] <= W7N?m9a:p6n;}var displayed$1=p6n;var ready=p6n;var scrollTop=s8C;var dom={background:$(N9),close:$(u9h),content:d1w,wrapper:$(P5 + W8u + Y3n + g$ + R5$ + R5$ + R5$ + R5$)};function heightCalc(){var b2C="div.D";var M8A='px)';var N7f="- ";var O8t="outerHeight";var S0G='maxHeight';var T15="E_Foot";var I$y="div.DTE_Hea";var C$_="outerHeig";var d1s="lc";var r0x="Pad";var g_a='div.DTE_Body_Content';var o57="indow";var b$x="(100vh ";var H0=b2C;H0+=U0S;H0+=T15;H0+=B5D;var q2=C$_;q2+=l4d;var F6=I$y;F6+=r7d;var headerFooter=$(F6,dom[y6N])[q2]() + $(H0,dom[y6N])[O8t]();if(isMobile()){var l$=X_x;l$+=d1s;l$+=b$x;l$+=N7f;var G2=h9_;G2+=Q3A;G2+=S5Z;G2+=B5D;$(g_a,dom[G2])[e4X](S0G,l$ + headerFooter + M8A);}else {var b_=U8kjl.P3i;b_+=X_X;b_+=X_X;var p6=O9D;p6+=Q3A;var D4=h9_;D4+=o57;D4+=r0x;D4+=t8W;var k$=U8kjl.P3i;k$+=m7J;k$+=M_j;var t7=K4C;t7+=U8kjl[213595];t7+=f1X;var maxHeight=$(window)[t7]() - self[k$][D4] * F9M - headerFooter;$(g_a,dom[p6])[b_](S0G,maxHeight);}}function hide$1(dte,callback){var f7c="sc";var N4M="offs";var X2b='resize.DTED_Lightbox';var a8y="lTo";var Q7J="etAni";var m2=A10;m2+=o8M;m2+=Y_j;m2+=a0M;var B8=N4M;B8+=Q7J;var K7=M4G;K7+=T4P;K7+=M7i;K7+=Q3A;var I0=f7c;I0+=i53;I0+=a8y;I0+=T4P;if(!callback){callback=function(){};}$(L9Y)[I0](scrollTop);dte[f41](dom[K7],{opacity:s8C,top:self[R9K][B8]},function(){U8kjl.N$L();var B6J="det";var T6=B6J;T6+=y4k;T6+=K4C;$(this)[T6]();callback();});dte[m2](dom[S8F],{opacity:s8C},function(){U8kjl.N$L();$(this)[n4I]();});displayed$1=p6n;$(window)[Y$9](X2b);}function init(){var P_o='div.DTED_Lightbox_Content';var W8f="ound";var n3S='opacity';var H_h="back";var a$=P3d;a$+=K7c;var O4=k7Z;O4+=X_X;var y4=H_h;y4+=i89;U8kjl.m_s();y4+=Q3A;y4+=W8f;var M8=J1Q;M8+=a$G;M8+=M7i;M8+=Q3A;if(ready){return;}dom[g8h]=$(P_o,dom[M8]);dom[y6N][e4X](n3S,s8C);dom[y4][O4](a$,s8C);ready=m9a;}function show$1(dte,callback){var G7E="Mo";var B7t="click.";var g1n='click.DTED_Lightbox';var R9Y="wrapp";var d66="DTED_L";var I4z="ox";var r81='div.DTED_Lightbox_Content_Wrapper';var O6m="click.DTED";var i0U="bile";var Y_I="ize.DTED_Lightb";var Z$D="ED_Lightbox_";var i7T="addC";var W3P="offsetAni";var h_o="stopImmediatePropagation";var N5g="imate";var e2g="tbox";var V6B="crollTo";var g8t='height';var o3t="_Ligh";var o3=B7t;o3+=d66;o3+=O8e;var X7=V71;X7+=u6W;var M2=O6m;M2+=o3t;M2+=e2g;var M4=V71;M4+=M_j;M4+=M_j;var P9=V71;P9+=M_j;P9+=M_j;var b2=V71;b2+=u6W;var e5=U8kjl[172460];e5+=T4P;e5+=T4P;e5+=r_h;var T3=s9C;T3+=V71;T3+=n76;T3+=K7c;if(isMobile()){var q$=z1N;q$+=Z$D;q$+=G7E;q$+=i0U;var S3=i7T;S3+=k5z;$(L9Y)[S3](q$);}$(T3)[c_D](dom[S8F])[e5](dom[y6N]);heightCalc();if(!displayed$1){var u7=X_X;u7+=V6B;u7+=T4P;var C2=s9C;C2+=V71;C2+=P0f;var n3=n4W;n3+=X_X;n3+=Y_I;n3+=I4z;var S_=V71;S_+=u6W;var E$=R9Y;E$+=B5D;var Q4=A10;Q4+=o8M;Q4+=N5g;var C1=U8kjl[172460];C1+=e8G;C1+=w7H;var g8=k7Z;g8+=X_X;displayed$1=m9a;dom[g8h][g8](g8t,C1);dom[y6N][e4X]({top:-self[R9K][W3P]});dte[Q4](dom[E$],{opacity:z3P,top:s8C},callback);dte[f41](dom[S8F],{opacity:z3P});$(window)[S_](n3,function(){U8kjl.m_s();heightCalc();});scrollTop=$(C2)[u7]();}dom[L$w][i8c](u_C,dte[R3t][L$w])[Y$9](g1n)[b2](g1n,function(e){dte[L$w]();});dom[S8F][P9](g1n)[m7J](g1n,function(e){U8kjl.N$L();e[h_o]();dte[S8F]();});$(r81,dom[y6N])[M4](M2)[X7](o3,function(e){var I3Q="ackground";var Z81="targ";U8kjl.N$L();var r19="_Wrapper";var W3p="DTED_Lightbox_Content";var i3=W3p;i3+=r19;var M9=Z81;M9+=K2c;if($(e[M9])[F9p](i3)){var g_=s9C;g_+=I3Q;e[h_o]();dte[g_]();}});}var self={close:function(dte,callback){hide$1(dte,callback);},conf:{offsetAni:p_G,windowPadding:p_G},destroy:function(dte){if(displayed$1){hide$1(dte);}},init:function(dte){init();return self;},node:function(dte){return dom[y6N][s8C];},open:function(dte,append,callback){var i3D="etach";var a2=U8kjl.P3i;a2+=E2D;a2+=U8kjl[213595];var x6=n76;x6+=i3D;var content=dom[g8h];content[a1f]()[x6]();content[c_D](append)[c_D](dom[a2]);show$1(dte,callback);}};var DataTable$5=$[D2][D$];function add(cfg,after,reorder){var F$p="splayReorde";var J2L="_displayReo";var Q1G="or ";var V8T=" this name";var x2P="rde";var v4a="adding field \'";var f$o=" exists with";var O0z="_di";var p5z="\'. A field already";var i5y="asse";var q32="nit";var C53='Error adding field. The field requires a `name` option';var c_d="reverse";var G6=A3l;G6+=n76;G6+=U8kjl[213595];var X3=M_j;X3+=F1m;X3+=W5Z;var y9=m5o;y9+=i5y;y9+=X_X;var I_=L1u;I_+=F1m;I_+=U8kjl[213595];I_+=o1a;var W7=F1m;W7+=q32;W7+=M4C;var z$=h7b;z$+=K7c;if(reorder === void s8C){reorder=m9a;}if(Array[z$](cfg)){var e9=V71;e9+=Q3A;e9+=L5Q;e9+=Q3A;var u8=J2L;u8+=x2P;u8+=Q3A;var Y7=c6f;Y7+=K4C;if(after !== undefined){cfg[c_d]();}for(var _i=s8C,cfg_1=cfg;_i < cfg_1[Y7];_i++){var cfgDp=cfg_1[_i];this[s37](cfgDp,after,p6n);}this[u8](this[e9]());return this;}var name=cfg[h8i];if(name === undefined){throw new Error(C53);}if(this[X_X][d$4][name]){var i$=p5z;i$+=f$o;i$+=V8T;var I2=G2V;I2+=r9d;I2+=Q1G;I2+=v4a;throw new Error(I2 + name + i$);}this[q3f](W7,cfg);var editorField=new Editor[I_](cfg,this[y9][X3],this);if(this[X_X][G6]){var editFields=this[X_X][T9X];editorField[M5Y]();$[G5E](editFields,function(idSrc,editIn){var d5=n76;d5+=U8kjl[213595];d5+=M_j;var r0=n76;r0+=U8kjl[172460];r0+=U8kjl.x2x;var value;if(editIn[r0]){value=editorField[w4D](editIn[g2G]);}editorField[o0v](idSrc,value !== undefined?value:editorField[d5]());});}this[X_X][d$4][name]=editorField;if(after === undefined){this[X_X][H_d][q3Y](name);}else if(after === d1w){this[X_X][H_d][Z86](name);}else {var g6=q5s;g6+=Q3A;var z5=U$E;z5+=n76;z5+=U8kjl[213595];z5+=Q3A;var idx=$[f9Q](after,this[X_X][z5]);this[X_X][g6][o$0](idx + z3P,s8C,name);}if(reorder !== p6n){var C9=O0z;C9+=F$p;C9+=Q3A;this[C9](this[H_d]());}return this;}function ajax(newAjax){var O8=m0B;O8+=U8kjl[172460];O8+=u$5;if(newAjax){var h2=U8kjl[172460];h2+=U8kjl[88046];h2+=d$y;this[X_X][h2]=newAjax;return this;}return this[X_X][O8];}function background(){var Q3d="nBackground";var E2=X_X;E2+=K0F;E2+=O0j;var H$=s9C;H$+=r6s;H$+=e8G;H$+=Q3A;var L_=d4M;L_+=v0T;var E6=V71;E6+=Q3d;var onBackground=this[X_X][t5t][E6];if(typeof onBackground === L_){onBackground(this);}else if(onBackground === H$){this[Q6H]();}else if(onBackground === K3j){var o_=m5o;o_+=V71;o_+=w5Z;this[o_]();}else if(onBackground === E2){this[z9u]();}return this;}function blur(){this[U4w]();return this;}function bubble(cells,fieldNames,showIn,opts){var l_S="ubbl";var P9v="oolean";var N7=s9C;N7+=e8G;N7+=s9C;N7+=S03;var C8=s9C;C8+=l_S;C8+=U8kjl[213595];var L4=s9C;L4+=P9v;var _this=this;var that=this;if(this[q6C](function(){U8kjl.N$L();that[J51](cells,fieldNames,opts);})){return this;}if($[z9o](fieldNames)){opts=fieldNames;fieldNames=undefined;showIn=m9a;}else if(typeof fieldNames === L4){showIn=fieldNames;fieldNames=undefined;opts=undefined;}if($[z9o](showIn)){opts=showIn;showIn=m9a;}if(showIn === undefined){showIn=m9a;}opts=$[n5$]({},this[X_X][F$u][C8],opts);var editFields=this[q3f](d43,cells,fieldNames);this[c0p](cells,editFields,N7,opts,function(){var f5j="/div></d";var P$x='<div class="DTE_Processing_Indicator"><span></div>';var X2R="ildre";var t1J="bu";var C4k='resize.';var E2g="_closeReg";var e49="\"><div>";var Z54="bubbleNodes";var F1B="bubblePosition";var h9U="pointer";var k16="concat";var f9U='attach';var r6J="\" title";var C5n="prepe";var f9=V71;f9+=u6W;var n4=U8kjl[172460];n4+=n76;n4+=n76;var J0=t1J;J0+=b7B;J0+=V71;J0+=f0c;var L1=c5Z;L1+=D3K;L1+=h1W;var W$=U8kjl[172460];W$+=T$_;W$+=u6W;W$+=n76;var D7=e7s;D7+=X2R;D7+=u6W;var Q1=q4Z;Q1+=n76;Q1+=l1W;Q1+=c4a;var m7=y6V;m7+=c4a;var v0=q4Z;v0+=n76;v0+=F1m;v0+=Y5t;var Y5=b4P;Y5+=s1f;var g4=d1n;g4+=Y4X;var A7=r6J;A7+=r$d;var o7=b4P;o7+=c4a;var F9=g2Y;F9+=u6W;F9+=U8kjl[213595];F9+=Q3A;var M_=J1Q;M_+=U8kjl[172460];M_+=l_2;var c5=h5K;c5+=M1j;var f3=e49;f3+=T5A;f3+=f5j;f3+=b04;var c$=s9C;c$+=i89;var O_=V71;O_+=u6W;var s5=s9C;s5+=F4Q;var namespace=_this[c1w](opts);var ret=_this[o5R](s5);if(!ret){return _this;}$(window)[O_](C4k + namespace,function(){var w5c="bubblePosit";U8kjl.N$L();var E1=w5c;E1+=F1m;E1+=m7J;_this[E1]();});var nodes=[];_this[X_X][Z54]=nodes[k16][X5_](nodes,pluck(editFields,f9U));var classes=_this[g5t][J51];var backgroundNode=$(t0I + classes[c$] + f3);var container=$(c5 + classes[M_] + n4e + t0I + classes[F9] + n4e + t0I + classes[x8K] + o7 + t0I + classes[L$w] + A7 + _this[g4][L$w] + Y5 + P$x + v0 + R5$ + t0I + classes[h9U] + m7 + Q1);if(showIn){var C0=S5Z;C0+=U8kjl[213595];C0+=u6W;C0+=m7Z;var B4=q$S;B4+=n76;B4+=z7J;container[B4](L9Y);backgroundNode[C0](L9Y);}var liner=container[D7]()[z0f](s8C);var tableNode=liner[a1f]();var closeNode=tableNode[a1f]();liner[W$](_this[S5o][L1]);tableNode[h3D](_this[S5o][e4C]);if(opts[h7_]){var B5=C5n;B5+=C43;liner[B5](_this[S5o][h1B]);}if(opts[X3j]){var N0=K4C;N0+=U8kjl[213595];N0+=U8kjl[172460];N0+=r7d;liner[h3D](_this[S5o][N0]);}if(opts[J0]){tableNode[c_D](_this[S5o][y9M]);}var finish=function(){var x2c='closed';var D6Z="_clearDynamic";var p1a="nfo";var B9=F0C;U8kjl.N$L();B9+=J7C;var H9=D6Z;H9+=o1W;H9+=p1a;_this[H9]();_this[B9](x2c,[x5x]);};var pair=$()[s37](container)[n4](backgroundNode);_this[E2g](function(submitComplete){var s0r="_animat";var Y9=s0r;Y9+=U8kjl[213595];_this[Y9](pair,{opacity:s8C},function(){var U9C="resi";var j5l="ze.";U8kjl.m_s();if(this === container[s8C]){var o4=U9C;o4+=j5l;pair[n4I]();$(window)[Y$9](o4 + namespace);finish();}});});backgroundNode[m7J](L4b,function(){_this[Q6H]();});closeNode[f9](L4b,function(){var A4=A10;U8kjl.N$L();A4+=U8kjl.P3i;A4+=E2D;A4+=U8kjl[213595];_this[A4]();});_this[F1B]();_this[b5p](x5x,p6n);var opened=function(){var L9=F0C;L9+=F2j;L9+=z5U;L9+=v8V;U8kjl.N$L();_this[y0j](_this[X_X][n1W],opts[K$f]);_this[L9](V9e,[x5x,_this[X_X][E9i]]);};_this[f41](pair,{opacity:z3P},function(){U8kjl.N$L();if(this === container[s8C]){opened();}});});return this;}function bubblePosition(){var Y$A="div.";var f5K="terWid";var L4r="width";var G4j="right";var H4z="div.DTE_B";var T46="DTE_Bu";var h0W="ottom";var I_Y="lef";var s5O='below';var k9U="bble_Liner";var q_Y="low";var i9L="leNodes";var w$X="left";var M$t='left';var K3Z="oveClas";var m_=U8kjl.P3i;m_+=k5z;m_+=I6h;var E0=L42;E0+=f5K;E0+=Z8G;var c1=v8V;c1+=V71;c1+=T4P;var Z3=s9C;Z3+=h0W;var b6=Q3A;b6+=Z26;b6+=l4d;var G1=I_Y;G1+=v8V;var X0=U8kjl[213595];X0+=y4k;X0+=K4C;var n2=j98;n2+=i9L;var J5=Y$A;J5+=T46;J5+=k9U;var K$=H4z;K$+=F4Q;var wrapper=$(K$);var liner=$(J5);var nodes=this[X_X][n2];var position={bottom:s8C,left:s8C,right:s8C,top:s8C};$[X0](nodes,function(i,nodeIn){var Y$4="bot";var i1g="fsetW";var b5o="fset";var r$3="idth";var y6=v8V;y6+=V71;y6+=T4P;var V9=Y$4;V9+=w7H;V9+=D3K;var w4=V71;w4+=M_j;w4+=i1g;w4+=r$3;var F$=r6s;F$+=U8kjl[213595];F$+=b7d;var s4=v8V;s4+=V71;s4+=T4P;var C5=i89;C5+=U8kjl[213595];C5+=v8V;var h5=c7J;h5+=b5o;var pos=$(nodeIn)[h5]();nodeIn=$(nodeIn)[C5](s8C);position[j1c]+=pos[s4];position[w$X]+=pos[F$];position[G4j]+=pos[w$X] + nodeIn[w4];position[V9]+=pos[y6] + nodeIn[K4y];});position[j1c]/=nodes[G$8];position[G1]/=nodes[G$8];position[b6]/=nodes[G$8];position[Z3]/=nodes[G$8];var top=position[c1];var left=(position[w$X] + position[G4j]) / F9M;var width=liner[E0]();var visLeft=left - width / F9M;var visRight=visLeft + width;var docWidth=$(window)[L4r]();var padding=s6I;this[m_][J51];wrapper[e4X]({left:left,top:top});if(liner[G$8] && liner[C3o]()[j1c] < s8C){var W3=s9C;W3+=h0W;var y$=v8V;y$+=V71;y$+=T4P;wrapper[e4X](y$,position[W3])[t00](s5O);}else {var E7=a6D;E7+=q_Y;var U1=n4W;U1+=D3K;U1+=K3Z;U1+=X_X;wrapper[U1](E7);}if(visRight + padding > docWidth){var diff=visRight - docWidth;liner[e4X](M$t,visLeft < padding?-(visLeft - padding):-(diff + padding));}else {liner[e4X](M$t,visLeft < padding?-(visLeft - padding):s8C);}return this;}function buttons(buttonsIn){U8kjl.m_s();var U5=U8kjl[213595];U5+=D3K;U5+=T4P;U5+=a0Y;var w$=n76;w$+=Q3S;var _this=this;if(buttonsIn === T5D){var z7=U8kjl[172460];z7+=v0T;var J$=s95;J$+=u6W;buttonsIn=[{action:function(){var p02="ub";var X5=X_X;X5+=p02;X5+=d0Y;X5+=v8V;this[X5]();},text:this[J$][this[X_X][z7]][z9u]}];}else if(!Array[t1S](buttonsIn)){buttonsIn=[buttonsIn];}$(this[w$][y9M])[U5]();$[G5E](buttonsIn,function(i,btn){var n3a="abin";var k82="className";var W5u="classNa";var B8T="text";var N9k="bInd";var t7q='<button></button>';var Y8b="sses";var X8O="tto";var B3D="Index";var T$=a$G;T$+=M7i;T$+=u6W;T$+=m7Z;var H7=U8kjl.P3i;H7+=r6s;H7+=c6e;H7+=Y6z;var i_=V71;i_+=u6W;var z_=w9v;z_+=T4P;z_+=m7n;z_+=X_X;var A3=V71;A3+=u6W;var u2=V71;u2+=u6W;var K1=J60;K1+=v8V;K1+=Q3A;var P4=m9F;P4+=B3D;var n7=U8kjl.x2x;n7+=N9k;n7+=U8kjl[213595];n7+=u$5;var s8=v8V;s8+=n3a;s8+=n76;s8+=H__;var j4=J60;j4+=E7Q;var p3=d4M;p3+=U8kjl.P3i;p3+=g6Q;p3+=u6W;var Z6=K4C;Z6+=v8V;Z6+=D3K;Z6+=r6s;var E9=W5u;E9+=N8J;var A9=s9C;A9+=e8G;A9+=X8O;A9+=u6W;var L5=h1u;L5+=Y8b;var r8=x8w;r8+=Q3A;var L7=M_j;L7+=u6W;var A1=y4k;A1+=S47;var l6=E9x;l6+=Q3A;l6+=p3T;if(typeof btn === l6){btn={action:function(){this[z9u]();},text:btn};}var text=btn[B8T] || btn[C2S];var action=btn[A1] || btn[L7];var attr=btn[r8] || ({});$(t7q,{class:_this[L5][e4C][A9] + (btn[E9]?X$d + btn[k82]:M9P)})[Z6](typeof text === p3?text(_this):text || M9P)[j4](s8,btn[n7] !== undefined?btn[P4]:s8C)[K1](attr)[u2](i8w,function(e){if(e[F5j] === T_9 && action){var I1=U8kjl.P3i;I1+=U8kjl[172460];I1+=C$7;action[I1](_this);}})[A3](z_,function(e){var L5O="tDefault";U8kjl.N$L();if(e[F5j] === T_9){var J4=G09;J4+=L5O;e[J4]();}})[i_](H7,function(e){e[U4_]();U8kjl.m_s();if(action){action[Y$N](_this,e);}})[T$](_this[S5o][y9M]);});return this;}function clear(fieldName){var J$O="ludeFie";var W0j="inc";var Y9E="rd";var t8Z="stroy";var L6g="_fieldNa";var f5B="inArr";var c2b="includeFi";var N88="mes";var v_=M_j;v_+=C_e;v_+=h08;var that=this;var sFields=this[X_X][v_];if(typeof fieldName === k57){var Q9=c2b;Q9+=U8kjl[213595];Q9+=r6s;Q9+=v1S;var F0=h0r;F0+=U8kjl[213595];var t2=V71;t2+=Y9E;t2+=U8kjl[213595];t2+=Q3A;var a3=f5B;a3+=U8kjl[172460];a3+=K7c;var C4=L5Q;C4+=t8Z;var S4=b$U;S4+=W5Z;that[S4](fieldName)[C4]();delete sFields[fieldName];var orderIdx=$[a3](fieldName,this[X_X][H_d]);this[X_X][t2][F0](orderIdx,z3P);var includeIdx=$[f9Q](fieldName,this[X_X][Q9]);if(includeIdx !== -z3P){var X_=W0j;X_+=J$O;X_+=h08;this[X_X][X_][o$0](includeIdx,z3P);}}else {var n1=L6g;n1+=N88;var I6=U8kjl[213595];I6+=U8kjl[172460];I6+=e7s;$[I6](this[n1](fieldName),function(i,name){var J_=m5o;J_+=U8kjl[213595];J_+=U8kjl[172460];J_+=Q3A;that[J_](name);});}return this;}function close(){var v3=o2H;v3+=B5d;U8kjl.m_s();v3+=w5Z;this[v3](p6n);return this;}function create(arg1,arg2,arg3,arg4){var b4y="ctio";var s1k="tyle";var Q2G="um";var E3r="editFie";var e4=i5I;e4+=t9p;e4+=n4W;e4+=a0M;var c6=U8kjl[213595];c6+=y4k;c6+=K4C;var b0=b$U;b0+=o9q;b0+=n76;b0+=X_X;var Y6=X_X;Y6+=s1k;var S0=k1D;S0+=Q3A;S0+=D3K;var e8=U8kjl[172460];e8+=b4y;e8+=u6W;var L0=D3K;L0+=V71;L0+=L5Q;var t1=E3r;t1+=h08;var U4=u6W;U4+=Q2G;U4+=u9V;var _this=this;var that=this;var sFields=this[X_X][d$4];var count=z3P;if(this[q6C](function(){var n7s="reate";var J7=U8kjl.P3i;U8kjl.N$L();J7+=n7s;that[J7](arg1,arg2,arg3,arg4);})){return this;}if(typeof arg1 === U4){count=arg1;arg1=arg2;arg2=arg3;}this[X_X][t1]={};for(var i=s8C;i < count;i++){var h9=g6d;h9+=a9f;h9+=X_X;this[X_X][h9][i]={fields:this[X_X][d$4]};}var argOpts=this[V1A](arg1,arg2,arg3,arg4);this[X_X][L0]=H86;this[X_X][e8]=L7t;this[X_X][m3x]=d1w;this[S5o][S0][Y6][h0z]=O9F;this[p_m]();this[j1N](this[b0]());$[c6](sFields,function(name,fieldIn){fieldIn[M5Y]();for(var i=s8C;i < count;i++){var l3=o0o;l3+=q71;l3+=K2c;fieldIn[l3](i,fieldIn[h79]());}fieldIn[C04](fieldIn[h79]());});this[b7_](e4,d1w,function(){var B29="ybeO";var v70="_f";U8kjl.N$L();var x$b="rmOptions";var d$=R0g;d$+=B29;d$+=M0G;var i1=V71;i1+=T4P;i1+=v8V;i1+=X_X;var c7=v70;c7+=V71;c7+=x$b;_this[K9R]();_this[c7](argOpts[i1]);argOpts[d$]();});return this;}function undependent(parent){U8kjl.m_s();var X6W="unde";var T5=V4V;T5+=j8i;T5+=U8kjl[172460];T5+=K7c;if(Array[T5](parent)){for(var i=s8C,ien=parent[G$8];i < ien;i++){var l1=X6W;l1+=T9T;l1+=U8kjl[213595];l1+=K1G;this[l1](parent[i]);}return this;}$(this[m4J](parent)[y_n]())[Y$9](O0C);return this;}function dependent(parent,url,opts){var H_N="event";var Z3a='change';var O3Z="Arra";var U7=V71;U7+=u6W;var s$=B_s;s$+=C43;var j8=m4k;j8+=i$R;j8+=l3u;j8+=U0S;var N5=U8kjl[88046];U8kjl.m_s();N5+=X_X;N5+=V71;N5+=u6W;var d1=V4V;d1+=O3Z;d1+=K7c;var _this=this;if(Array[d1](parent)){for(var i=s8C,ien=parent[G$8];i < ien;i++){this[J2i](parent[i],url,opts);}return this;}var that=this;var parentField=this[m4J](parent);var ajaxOpts={dataType:N5,type:j8};opts=$[s$]({data:d1w,event:Z3a,postUpdate:d1w,preUpdate:d1w},opts);var update=function(json){var y1K="mess";var K3R="postUpdate";var Y5B='update';var X3H='hide';var U$Q='val';var y9r='disable';var D1I='enable';var A8Z="Up";var H$s="preUpdate";var K9=T4P;K9+=B$m;K9+=f8b;K9+=E6p;var o8=K8L;o8+=h9_;var D_=U8kjl[213595];D_+=y4k;D_+=K4C;var d3=y1K;d3+=I9o;var c9=z2F;c9+=Q7t;var M1=U8kjl[213595];M1+=r9d;M1+=V71;M1+=Q3A;var j7=E$H;j7+=K4C;var N$=V8p;N$+=A8Z;N$+=c_Q;N$+=e5o;if(opts[N$]){opts[H$s](json);}$[j7]({errors:M1,labels:c9,messages:d3,options:Y5B,values:U$Q},function(jsonProp,fieldFn){if(json[jsonProp]){$[G5E](json[jsonProp],function(fieldIn,valIn){that[m4J](fieldIn)[fieldFn](valIn);});}});$[D_]([X3H,o8,D1I,y9r],function(i,key){if(json[key]){that[key](json[key],json[J0g]);}});if(opts[K3R]){opts[K3R](json);}parentField[K9](p6n);};$(parentField[y_n]())[U7](opts[H_N] + O0C,function(e){var P0M="values";var j_d="rge";var E6F="hen";var d4=n76;d4+=J60;d4+=U8kjl[172460];var U8=F2j;U8+=U8kjl[172460];U8+=r6s;var W9=Q3A;W9+=r9q;var v$=n76;v$+=U8kjl[172460];v$+=U8kjl.x2x;var q5=c6f;q5+=K4C;var a_=U8kjl.x2x;a_+=j_d;a_+=v8V;var Q_=M_j;Q_+=F1m;Q_+=C43;if($(parentField[y_n]())[Q_](e[a_])[q5] === s8C){return;}parentField[e1J](m9a);var data={};data[i8i]=_this[X_X][T9X]?pluck(_this[X_X][T9X],v$):d1w;data[W9]=data[i8i]?data[i8i][s8C]:d1w;data[P0M]=_this[U8]();if(opts[d4]){var ret=opts[g2G](data);if(ret){var e1=U8kjl[557061];e1+=U8kjl[172460];opts[e1]=ret;}}if(typeof url === U8kjl[517813]){var V0=i$D;V0+=r6s;var o=url[V0](_this,parentField[D0c](),data,update,e);if(o){var m1=v8V;m1+=E6F;if(typeof o === F$e && typeof o[m1] === U8kjl[517813]){var f$=v8V;f$+=K4C;f$+=U8kjl[213595];f$+=u6W;o[f$](function(resolved){U8kjl.N$L();if(resolved){update(resolved);}});}else {update(o);}}}else {var I7=H__;I7+=Y0Q;var P7=m0B;P7+=d$y;if($[z9o](url)){var H1=U8kjl[213595];H1+=p6l;$[H1](ajaxOpts,url);}else {ajaxOpts[w46]=url;}$[P7]($[I7](ajaxOpts,{data:data,success:update}));}});return this;}function destroy(){var S2e="roll";var I0t='.dte';var R7X="clear";var O2H="playCont";var W4=n76;W4+=V71;W4+=D3K;var K3=U8A;K3+=O2H;K3+=S2e;K3+=B5D;var v5=e5o;v5+=J1n;v5+=J60;v5+=U8kjl[213595];var j$=G0U;j$+=o41;j$+=g6d;if(this[X_X][j$]){var e6=U8kjl.P3i;e6+=E2D;e6+=U8kjl[213595];this[e6]();}this[R7X]();if(this[X_X][v5]){$(L9Y)[c_D](this[X_X][e9m]);}var controller=this[X_X][K3];if(controller[z8m]){var E8=r$u;E8+=v8V;E8+=B$m;E8+=K7c;controller[E8](this);}$(document)[Y$9](I0t + this[X_X][W_R]);U8kjl.N$L();this[W4]=d1w;this[X_X]=d1w;}function disable(name){var y87="eldNa";U8kjl.m_s();var b$=W$g;b$+=y87;b$+=D3K;b$+=I6h;var that=this;$[G5E](this[b$](name),function(i,n){that[m4J](n)[E2_]();});return this;}function display(showIn){var T3U="isplayed";U8kjl.N$L();if(showIn === undefined){var e_=n76;e_+=T3U;return this[X_X][e_];}return this[showIn?t4s:K3j]();}function displayed(){U8kjl.m_s();return $[J5v](this[X_X][d$4],function(fieldIn,name){return fieldIn[v3$]()?name:d1w;});}function displayNode(){U8kjl.m_s();return this[X_X][u94][y_n](this);}function edit(items,arg1,arg2,arg3,arg4){var b_u="_crudArg";var w6=M_j;w6+=K5w;var U2=e53;U2+=b2B;var d_=F0C;d_+=P1u;var q3=b_u;q3+=X_X;var _this=this;var that=this;if(this[q6C](function(){that[F6R](items,arg1,arg2,arg3,arg4);})){return this;}var argOpts=this[q3](arg1,arg2,arg3,arg4);this[d_](items,this[U2](w6,items),H86,argOpts[G7a],function(){var G_=c9N;U8kjl.m_s();G_+=v8V;G_+=X_X;_this[K9R]();_this[c1w](argOpts[G_]);argOpts[E3u]();});return this;}function enable(name){var J6B="_fieldNames";var that=this;$[G5E](this[J6B](name),function(i,n){var a6=z5U;a6+=U8kjl[172460];a6+=b8y;U8kjl.N$L();a6+=U8kjl[213595];that[m4J](n)[a6]();});return this;}function error$1(name,msg){var v9D="ormError";var D5g="_message";var K3d="globalEr";var k3=J1Q;k3+=U8kjl[172460];k3+=Y89;k3+=B5D;var p$=U8kjl.P0a;p$+=D3K;var wrapper=$(this[p$][k3]);if(msg === undefined){var J8=K3d;J8+=Q3A;J8+=U$E;var q8=M_j;q8+=v9D;var U0=n76;U0+=V71;U0+=D3K;this[D5g](this[U0][q8],name,m9a,function(){var Y4J='inFormError';var R6=R0X;R6+=l8N;wrapper[R6](Y4J,name !== undefined && name !== M9P);});this[X_X][J8]=name;}else {var r4=M_j;r4+=f5g;r4+=n76;this[r4](name)[d3U](msg);}return this;}function field(name){var P5e='Unknown field name - ';var m3=U7i;m3+=v1S;var sFields=this[X_X][m3];U8kjl.m_s();if(!sFields[name]){throw new Error(P5e + name);}return sFields[name];}function fields(){var H6=b$U;H6+=z3a;return $[J5v](this[X_X][H6],function(fieldIn,name){return name;});}function file(name,id){var P7O="le ";var h0I=" tab";var P6W='Unknown file id ';var tableFromFile=this[K_D](name);var fileFromTable=tableFromFile[id];if(!fileFromTable){var G4=x5y;G4+=g_K;G4+=h0I;G4+=P7O;throw new Error(P6W + id + G4 + name);}return tableFromFile[id];}function files(name){var u_4=" tabl";var D0u="ile";var Q5v="e name: ";U8kjl.m_s();var m2X="Unknown file";var q9=M_j;q9+=F1m;q9+=J81;q9+=X_X;if(!name){var M0=M_j;M0+=D0u;M0+=X_X;return Editor[M0];}var editorTable=Editor[q9][name];if(!editorTable){var D6=m2X;D6+=u_4;D6+=Q5v;throw new Error(D6 + name);}return editorTable;}function get(name){var L$=b$U;U8kjl.N$L();L$+=W5Z;var that=this;if(!name){var e$=U2j;e$+=o1a;e$+=X_X;name=this[e$]();}if(Array[t1S](name)){var r9=g_f;r9+=U8kjl.P3i;r9+=K4C;var out_1={};$[r9](name,function(i,n){var R7=b$U;R7+=W5Z;out_1[n]=that[R7](n)[A5X]();});return out_1;}return this[L$](name)[A5X]();}function hide(names,animate){var A_U="_fieldNam";var e6A=A_U;e6A+=I6h;var that=this;U8kjl.N$L();$[G5E](this[e6A](names),function(i,n){var r_p=K4C;U8kjl.m_s();r_p+=F1m;r_p+=n76;r_p+=U8kjl[213595];var d4g=M_j;d4g+=C_e;d4g+=r6s;d4g+=n76;that[d4g](n)[r_p](animate);});return this;}function ids(includeHash){var D4l=D3K;U8kjl.N$L();D4l+=U8kjl[172460];D4l+=T4P;if(includeHash === void s8C){includeHash=p6n;}return $[D4l](this[X_X][T9X],function(editIn,idSrc){return includeHash === m9a?R3x + idSrc:idSrc;});}function inError(inNames){var b8T="globalError";var X$Z="rmErro";var S$A="dN";var m3w=W$g;m3w+=o9q;m3w+=S$A;m3w+=Y1S;var i3k=M_j;i3k+=V71;i3k+=X$Z;i3k+=Q3A;$(this[S5o][i3k]);if(this[X_X][b8T]){return m9a;}var names=this[m3w](inNames);for(var i=s8C,ien=names[G$8];i < ien;i++){var m4p=g_K;m4p+=G2V;m4p+=k6s;var R5z=U2j;R5z+=r6s;R5z+=n76;if(this[R5z](names[i])[m4p]()){return m9a;}}return p6n;}function inline(cell,fieldName,opts){var x2l='div.DTE_Field';var P6d=" one row inline at a ";var d30="Cannot edit more than";var w7M="ataSourc";var C3B="formOp";var d2i="time";var y2P="indi";var Y10="vidual";var F1L=A10;F1L+=g6d;F1L+=F1m;F1L+=v8V;var X7L=J60;X7L+=u1I;var V7w=r6s;V7w+=Q68;var K44=w9v;K44+=X_X;var R6w=y2P;R6w+=Y10;var b$A=G0H;b$A+=w7M;b$A+=U8kjl[213595];var v5h=C3B;v5h+=v8V;v5h+=G9$;var i5p=B_s;i5p+=C43;var _this=this;var that=this;if($[z9o](fieldName)){opts=fieldName;fieldName=undefined;}opts=$[i5p]({},this[X_X][v5h][j0X],opts);var editFields=this[b$A](R6w,cell,fieldName);var keys=Object[K44](editFields);if(keys[V7w] > z3P){var C5i=d30;C5i+=P6d;C5i+=d2i;throw new Error(C5i);}var editRow=editFields[keys[s8C]];var hosts=[];for(var _i=s8C,_a=editRow[X7L];_i < _a[G$8];_i++){var row=_a[_i];hosts[q3Y](row);}if($(x2l,hosts)[G$8]){return this;}if(this[q6C](function(){U8kjl.N$L();that[j0X](cell,fieldName,opts);})){return this;}this[F1L](cell,editFields,a5y,opts,function(){_this[T79](editFields,opts);});return this;}function inlineCreate(insertPoint,opts){var b2Q="_tid";var L6T='initCreate';var S3o='fakeRow';var W1S="ainObject";var l9d="editF";var H32=U8kjl[213595];H32+=y67;H32+=n76;var Q2d=l9d;Q2d+=C_e;Q2d+=o1a;Q2d+=X_X;var L5T=j$_;L5T+=F1m;L5T+=V71;L5T+=u6W;var x8f=A3l;x8f+=L5Q;var X1C=M_j;X1C+=K5w;var u57=b2Q;u57+=K7c;var H71=i0H;H71+=r6s;U8kjl.N$L();H71+=W1S;var _this=this;if($[H71](insertPoint)){opts=insertPoint;insertPoint=d1w;}if(this[u57](function(){var L9F="lineCre";var e3d=g_K;e3d+=L9F;e3d+=a0M;_this[e3d](insertPoint,opts);})){return this;}$[G5E](this[X_X][X1C],function(name,fieldIn){U8kjl.m_s();var G3o="multiSe";var V1w=G3o;V1w+=v8V;fieldIn[M5Y]();fieldIn[V1w](s8C,fieldIn[h79]());fieldIn[C04](fieldIn[h79]());});this[X_X][x8f]=H86;this[X_X][L5T]=L7t;this[X_X][m3x]=d1w;this[X_X][Q2d]=this[q3f](S3o,insertPoint);opts=$[H32]({},this[X_X][F$u][j0X],opts);this[p_m]();this[T79](this[X_X][T9X],opts,function(){var Q8G="fakeR";var r1S="owE";var G2u=Q8G;G2u+=r1S;G2u+=u6W;G2u+=n76;var w12=G0H;w12+=U5_;w12+=W5_;_this[w12](G2u);});this[b7_](L6T,d1w);return this;}function message(name,msg){var T_U="_m";U8kjl.N$L();var H8H="mInfo";if(msg === undefined){var y3c=c5Z;y3c+=H8H;var u$d=U8kjl.P0a;u$d+=D3K;var q5W=T_U;q5W+=U8kjl[213595];q5W+=L93;q5W+=I9o;this[q5W](this[u$d][y3c],name);}else {var p3O=D3K;p3O+=U8kjl[213595];p3O+=X_X;p3O+=x9q;var H75=U7i;H75+=n76;this[H75](name)[p3O](msg);}return this;}function mode(modeIn){var j3d="cre";var W2z=" c";var s31="Not";var I7r="urrently in an editing ";var j6g='Changing from create mode is not supported';var G$3=j3d;G$3+=a0M;var k1C=U8kjl[172460];k1C+=U8kjl[241984];k1C+=Y9n;k1C+=u6W;U8kjl.N$L();if(!modeIn){var G4Q=T_n;G4Q+=m7J;return this[X_X][G4Q];}if(!this[X_X][E9i]){var t_K=s31;t_K+=W2z;t_K+=I7r;t_K+=n3B;throw new Error(t_K);}else if(this[X_X][k1C] === L7t && modeIn !== G$3){throw new Error(j6g);}this[X_X][E9i]=modeIn;return this;}function modifier(){var a6h="difi";var j9b=A3l;j9b+=a6h;j9b+=B5D;U8kjl.N$L();return this[X_X][j9b];}function multiGet(fieldNames){var a4N="sArr";var e7$=F1m;e7$+=a4N;e7$+=e5y;var that=this;if(fieldNames === undefined){fieldNames=this[d$4]();}if(Array[e7$](fieldNames)){var out_2={};$[G5E](fieldNames,function(i,name){var B3e=o0o;B3e+=y5u;B3e+=q6v;U8kjl.m_s();out_2[name]=that[m4J](name)[B3e]();});return out_2;}U8kjl.m_s();return this[m4J](fieldNames)[L_8]();}function multiSet(fieldNames,valIn){var I0l="isPlainObje";var d4d=I0l;d4d+=U8kjl.P3i;d4d+=v8V;var that=this;if($[d4d](fieldNames) && valIn === undefined){var z1Y=U8kjl[213595];z1Y+=U8kjl[172460];z1Y+=e7s;$[z1Y](fieldNames,function(name,value){var f2h=S$O;f2h+=F1m;f2h+=W4N;var l4C=b$U;l4C+=o9q;U8kjl.m_s();l4C+=n76;that[l4C](name)[f2h](value);});}else {var L90=M_j;L90+=F1m;L90+=U8kjl[213595];L90+=o1a;this[L90](fieldNames)[o0v](valIn);}return this;}function node(name){var V6l=b$U;V6l+=W5Z;var w7z=R0g;w7z+=T4P;var B4J=c5W;B4J+=Q3A;B4J+=e5y;var that=this;if(!name){name=this[H_d]();}return Array[B4J](name)?$[w7z](name,function(n){var D8J=u6W;D8J+=V71;D8J+=n76;D8J+=U8kjl[213595];return that[m4J](n)[D8J]();}):this[V6l](name)[y_n]();}function off(name,fn){var r7U="tNam";var c4m=F0C;c4m+=q7W;c4m+=r7U;U8kjl.N$L();c4m+=U8kjl[213595];var U4O=V71;U4O+=M_j;U4O+=M_j;$(this)[U4O](this[c4m](name),fn);return this;}function on(name,fn){var M5Z="Name";var y9i=N5b;y9i+=W_f;U8kjl.N$L();y9i+=M5Z;$(this)[m7J](this[y9i](name),fn);return this;}function one(name,fn){$(this)[P4u](this[Y9K](name),fn);return this;}function open(){var L2U="loseReg";var Y2W="ost";var Q11="_nestedOpen";var L85="nest";U8kjl.N$L();var W12=g9E;W12+=Y2W;W12+=V71;W12+=M0G;var F8c=A10;F8c+=U8kjl.P3i;F8c+=L2U;var _this=this;this[j1N]();this[F8c](function(){_this[E8V](function(){var c7E=E2n;c7E+=X_X;c7E+=g6d;var U3K=N5b;U3K+=z5U;U3K+=v8V;U8kjl.m_s();_this[n6U]();_this[U3K](c7E,[H86]);});});var ret=this[o5R](H86);if(!ret){return this;}this[Q11](function(){var o4W="foc";var J4q=v0U;J4q+=v8V;var j6x=o4W;j6x+=e8G;j6x+=X_X;var a9g=R0g;a9g+=T4P;var i7z=A10;i7z+=W_d;i7z+=X_X;_this[i7z]($[a9g](_this[X_X][H_d],function(name){return _this[X_X][d$4][name];}),_this[X_X][t5t][j6x]);_this[J4q](V9e,[H86,_this[X_X][E9i]]);},this[X_X][t5t][L85]);this[W12](H86,p6n);return this;}function order(setIn){var l19="rt";var y7E="ds, must be provided for ordering.";var x36="lice";var z9G="All fields, and no additional fiel";var M0p=q5s;M0p+=Q3A;var f19=X_X;f19+=V71;f19+=l19;var a2y=U8kjl[88046];a2y+=V71;a2y+=F1m;a2y+=u6W;var d3s=X_X;d3s+=V71;d3s+=Q3A;d3s+=v8V;var R73=X_X;R73+=x36;var R8K=F1m;R8K+=Y$F;R8K+=T90;var v4K=r6s;v4K+=z5U;v4K+=i89;v4K+=Z8G;if(!setIn){var j8n=V71;j8n+=Q3A;j8n+=r7d;return this[X_X][j8n];}if(arguments[v4K] && !Array[R8K](setIn)){var G2E=N_0;G2E+=d5b;setIn=Array[G2E][y3j][Y$N](arguments);}if(this[X_X][H_d][R73]()[d3s]()[a2y](L43) !== setIn[y3j]()[f19]()[U1$](L43)){var B4V=z9G;B4V+=y7E;throw new Error(B4V);}$[n5$](this[X_X][M0p],setIn);this[j1N]();return this;}function remove(items,arg1,arg2,arg3,arg4){var P8f=U8kjl;var D4_="_actionCl";var K0O='initRemove';var A58="modifi";var i7q=n76;i7q+=l2W;var O$y=u6W;O$y+=X78;O$y+=U8kjl[213595];var c9s=N5b;c9s+=W_f;var G$C=D4_;G$C+=Q8f;var t3T=u6W;t3T+=P4u;var f0n=c5Z;f0n+=D3K;var f1L=A58;f1L+=B5D;var H6O=U8kjl[172460];H6O+=U8kjl[241984];H6O+=F1m;H6O+=m7J;var Z58=o93;Z58+=F1m;Z58+=P0f;var _this=this;var that=this;P8f.N$L();if(this[Z58](function(){var U1w=Q3A;P8f.N$L();U1w+=Q5a;U1w+=e8y;U1w+=U8kjl[213595];that[U1w](items,arg1,arg2,arg3,arg4);})){return this;}if(items[G$8] === undefined){items=[items];}var argOpts=this[V1A](arg1,arg2,arg3,arg4);var editFields=this[q3f](i4$,items);this[X_X][H6O]=w2z;this[X_X][f1L]=items;this[X_X][T9X]=editFields;this[S5o][f0n][T_1][h0z]=t3T;this[G$C]();this[c9s](K0O,[pluck(editFields,O$y),pluck(editFields,i7q),items],function(){var L_y='initMultiRemove';P8f.N$L();var W3O=A10;W3O+=U8kjl[213595];W3O+=J7C;_this[W3O](L_y,[editFields,items],function(){var O41="cus";var h72=V71;h72+=T4P;h72+=v8V;h72+=X_X;_this[K9R]();P8f.m_s();_this[c1w](argOpts[h72]);argOpts[E3u]();var opts=_this[X_X][t5t];if(opts[K$f] !== d1w){var E2R=M_j;E2R+=L$j;var p9G=k1D;p9G+=O41;var B33=U8kjl[213595];B33+=h7k;var F1X=s9C;F1X+=N9G;F1X+=V71;F1X+=f0c;var N1i=n76;N1i+=V71;N1i+=D3K;var j9O=s9C;j9O+=N9G;j9O+=m7J;$(j9O,_this[N1i][F1X])[B33](opts[p9G])[E2R]();}});});return this;}function set(setIn,valIn){var f7B=U8kjl[213595];f7B+=U8kjl[172460];f7B+=U8kjl.P3i;f7B+=K4C;var that=this;if(!$[z9o](setIn)){var o={};o[setIn]=valIn;setIn=o;}$[f7B](setIn,function(n,v){U8kjl.N$L();that[m4J](n)[C04](v);});return this;}function show(names,animate){var B$q="fieldName";var H5P=A10;H5P+=B$q;H5P+=X_X;var that=this;$[G5E](this[H5P](names),function(i,n){that[m4J](n)[l0p](animate);});return this;}function submit(successCallback,errorCallback,formatdata,hideIn){var L3r="proces";var g4C="oces";var n2j=U8kjl[213595];n2j+=y4k;n2j+=K4C;var s4t=v7Y;s4t+=V71;s4t+=Q3A;var i3g=G$j;i3g+=g4C;i3g+=X_X;i3g+=p3T;var Q_0=L3r;Q_0+=E6p;var _this=this;var sFields=this[X_X][d$4];var errorFields=[];var errorReady=s8C;var sent=p6n;if(this[X_X][Q_0] || !this[X_X][E9i]){return this;}this[i3g](m9a);var send=function(){var N9E="ubmi";var i1n="initS";var o0B=i1n;o0B+=N9E;o0B+=v8V;var u60=r6s;u60+=U8kjl[213595];u60+=U8X;if(errorFields[u60] !== errorReady || sent){return;}_this[b7_](o0B,[_this[X_X][E9i]],function(result){var Q6n="ubmit";var i_t=q9E;i_t+=Q6n;if(result === p6n){_this[V$W](p6n);return;}U8kjl.m_s();sent=m9a;_this[i_t](successCallback,errorCallback,formatdata,hideIn);});};this[s4t]();$[G5E](sFields,function(name,fieldIn){var y_P="inE";var w5O=y_P;w5O+=G61;w5O+=Q3A;if(fieldIn[w5O]()){var u98=X73;u98+=x6S;errorFields[u98](name);}});$[n2j](errorFields,function(i,name){var M$Z=B5D;M$Z+=Q3A;M$Z+=V71;U8kjl.m_s();M$Z+=Q3A;sFields[name][M$Z](M9P,function(){errorReady++;U8kjl.N$L();send();});});send();return this;}function table(setIn){var J5i=U8kjl.x2x;J5i+=s9C;J5i+=J81;if(setIn === undefined){return this[X_X][x8K];}U8kjl.m_s();this[X_X][J5i]=setIn;return this;}function template(setIn){var k5Q="mplate";if(setIn === undefined){var x0W=e5o;x0W+=k5Q;return this[X_X][x0W];}this[X_X][e9m]=setIn === d1w?d1w:$(setIn);U8kjl.N$L();return this;}function title(titleIn){var S8r="ader";var x5o=x1i;x5o+=u6W;x5o+=v8V;x5o+=W_f;var J2m=K4C;J2m+=U8kjl[213595];J2m+=S8r;var header=$(this[S5o][H3u])[a1f](b1z + this[g5t][J2m][x5o]);if(titleIn === undefined){return header[q2y]();}if(typeof titleIn === U8kjl[517813]){var E2j=U8kjl.x2x;E2j+=s9C;E2j+=J81;var n$8=y7T;n$8+=T4P;n$8+=F1m;titleIn=titleIn(this,new DataTable$5[n$8](this[X_X][E2j]));}header[q2y](titleIn);return this;}function val(fieldIn,value){var O3Q="ainOb";var k3v="ject";var G5c="isPl";var S$I=G5c;S$I+=O3Q;S$I+=k3v;if(value !== undefined || $[S$I](fieldIn)){var F$m=X_X;F$m+=U8kjl[213595];F$m+=v8V;return this[F$m](fieldIn,value);}return this[A5X](fieldIn);;}function error(msg,tn,thro){var R4C=' For more information, please refer to https://datatables.net/tn/';U8kjl.N$L();if(thro === void s8C){thro=m9a;}var display=tn?msg + R4C + tn:msg;if(thro){throw display;}else {var B1m=h9_;B1m+=U8kjl[172460];B1m+=M3z;console[B1m](display);}}function pairs(data,props,fn){var R8R=F2j;R8R+=U8kjl[172460];R8R+=D8W;var s1G=r6s;s1G+=y8i;s1G+=o9q;var i;var ien;var dataPoint;props=$[n5$]({label:s1G,value:R8R},props);if(Array[t1S](data)){var e8g=c6f;e8g+=K4C;for((i=s8C,ien=data[e8g]);i < ien;i++){dataPoint=data[i];if($[z9o](dataPoint)){fn(dataPoint[props[m4E]] === undefined?dataPoint[props[C2S]]:dataPoint[props[m4E]],dataPoint[props[C2S]],i,dataPoint[i8c]);}else {fn(dataPoint,dataPoint,i);}}}else {i=s8C;$[G5E](data,function(key,val){fn(val,key,i);i++;});}}function upload$1(editor,conf,files,progressCallback,completeCallback){var F9z=" the file";var a2m="AsD";var X67="r occurred while uploading";var S5U="rver erro";var v3R="<i>Upl";var Q3m="fileReadText";var F2S="_l";var s2V="_limitLef";var e6I="aja";var d$3="A se";var m5Z="onload";var i9w="imitLe";var e6b="oading file</i>";var u7d="ataURL";var G16=n4W;G16+=r2t;G16+=a2m;G16+=u7d;var X_V=F2S;X_V+=i9w;X_V+=b7d;var F2w=D3K;F2w+=U8kjl[172460];F2w+=T4P;var E3z=v3R;E3z+=e6b;var B3s=U8kjl[172460];B3s+=U8kjl[88046];B3s+=U8kjl[172460];B3s+=u$5;var z5Q=H8a;z5Q+=Q3A;var reader=new FileReader();var counter=s8C;var ids=[];var generalError=d$3;generalError+=S5U;generalError+=X67;generalError+=F9z;editor[z5Q](conf[h8i],M9P);if(typeof conf[B3s] === U8kjl[517813]){var t2h=e6I;t2h+=u$5;conf[t2h](files,function(idsIn){var R2c=U8kjl.P3i;U8kjl.m_s();R2c+=U8kjl[172460];R2c+=C$7;completeCallback[R2c](editor,idsIn);});return;}progressCallback(conf,conf[Q3m] || E3z);reader[m5Z]=function(e){var h18="ajaxD";var e3_="preUpl";var K7M="inObjec";var B6T="ajaxDat";var R3p='uploadField';var s4b='No Ajax option specified for upload plug-in';var h8Z='upload';var T1n='Upload feature cannot use `ajax.data` with an object. Please use it as a function instead.';var a57=u6W;a57+=U8kjl[172460];a57+=D3K;a57+=U8kjl[213595];var o4f=e3_;o4f+=V71;o4f+=r2t;var U6i=N5b;U6i+=W_f;var E4t=n76;E4t+=l2W;var L7s=M_j;L7s+=L7u;L7s+=g6Q;L7s+=u6W;var I5r=n76;I5r+=J60;I5r+=U8kjl[172460];var d_n=q7w;d_n+=s0n;var w8f=R4e;w8f+=K7M;w8f+=v8V;var w$l=h18;w$l+=l2W;var Z1T=U8kjl[172460];Z1T+=Y89;Z1T+=z5U;Z1T+=n76;var E0z=u6W;E0z+=U8kjl[172460];E0z+=D3K;E0z+=U8kjl[213595];var i6u=U8kjl[172460];i6u+=s8Z;i6u+=V71;i6u+=u6W;var data=new FormData();var ajax;data[c_D](i6u,h8Z);data[c_D](R3p,conf[E0z]);data[Z1T](h8Z,files[counter]);if(conf[w$l]){var C_u=B6T;C_u+=U8kjl[172460];conf[C_u](data,files[counter],counter);}if(conf[D7h]){ajax=conf[D7h];}else if($[w8f](editor[X_X][D7h])){var t1O=L$F;t1O+=r6s;t1O+=V71;t1O+=r2t;ajax=editor[X_X][D7h][t4D]?editor[X_X][D7h][t1O]:editor[X_X][D7h];}else if(typeof editor[X_X][D7h] === d_n){ajax=editor[X_X][D7h];}if(!ajax){throw new Error(s4b);}if(typeof ajax === k57){ajax={url:ajax};}if(typeof ajax[I5r] === L7s){var K3e=E9x;K3e+=Q3A;K3e+=F1m;K3e+=s0n;var d={};var ret=ajax[g2G](d);if(ret !== undefined && typeof ret !== K3e){d=ret;}$[G5E](d,function(key,value){data[c_D](key,value);});}else if($[z9o](ajax[E4t])){throw new Error(T1n);}editor[U6i](o4f,[conf[a57],files[counter],data],function(preRet){var f1i=U8kjl;var s44="AsDataURL";var i6D="read";var m0d='preSubmit.DTE_Upload';var h8T="uploadXh";var O67=q1Z;O67+=v8V;var H8c=U8kjl[213595];H8c+=P_u;H8c+=U8kjl[213595];H8c+=C43;var H$7=e6I;f1i.N$L();H$7+=u$5;if(preRet === p6n){if(counter < files[G$8] - z3P){var B9t=i6D;B9t+=s44;counter++;reader[B9t](files[counter]);}else {var l2m=U8kjl.P3i;l2m+=O8n;l2m+=r6s;completeCallback[l2m](editor,ids);}return;}var submit=p6n;editor[m7J](m0d,function(){f1i.N$L();submit=m9a;return p6n;});$[H$7]($[H8c]({},ajax,{contentType:p6n,data:data,dataType:e$x,error:function(xhr){var n2F="rError";var D9Z=u6W;D9Z+=b6H;var v0B=h8T;v0B+=n2F;var u8A=B5D;u8A+=b05;editor[u8A](conf[h8i],generalError);editor[b7_](v0B,[conf[D9Z],xhr]);progressCallback(conf);},processData:p6n,success:function(json){var z3c="fieldErr";var D7J="uploa";var Q8V="readAsDataURL";var h1_="ors";var x6F="Success";var Q0A="engt";var M68="ldEr";var J_N="rs";var m12=D7J;m12+=n76;var L6X=U8kjl[213595];L6X+=r9d;L6X+=V71;L6X+=Q3A;var e2K=r6s;e2K+=Q68;var r6g=m4J;r6g+=G2V;f1i.N$L();r6g+=G61;r6g+=J_N;var A1N=U2j;A1N+=M68;A1N+=B4x;var t6V=h8T;t6V+=Q3A;t6V+=x6F;var T35=V71;T35+=M_j;T35+=M_j;editor[T35](m0d);editor[b7_](t6V,[conf[h8i],json]);if(json[A1N] && json[r6g][e2K]){var w4a=r6s;w4a+=Q0A;w4a+=K4C;var Q5I=z3c;Q5I+=h1_;var errors=json[Q5I];for(var i=s8C,ien=errors[w4a];i < ien;i++){var E$I=X_X;E$I+=I_g;var i7Z=B5D;i7Z+=Q3A;i7Z+=V71;i7Z+=Q3A;editor[i7Z](errors[i][h8i],errors[i][E$I]);}}else if(json[L6X]){var K1C=U8kjl[213595];K1C+=k6s;editor[d3U](json[K1C]);}else if(!json[m12] || !json[t4D][x1J]){var y_5=u6W;y_5+=U8kjl[172460];y_5+=D3K;y_5+=U8kjl[213595];editor[d3U](conf[y_5],generalError);}else {var W8Y=J81;W8Y+=u6W;W8Y+=P_k;var a3w=F1m;a3w+=n76;if(json[K_D]){var w6D=H$l;w6D+=U8kjl[213595];w6D+=X_X;$[G5E](json[w6D],function(table,filesIn){var d3k=M_j;d3k+=l$n;var f1E=M_j;f1E+=l$n;if(!Editor[f1E][table]){var W22=M_j;W22+=l$n;Editor[W22][table]={};}$[n5$](Editor[d3k][table],filesIn);});}ids[q3Y](json[t4D][a3w]);if(counter < files[W8Y] - z3P){counter++;reader[Q8V](files[counter]);}else {completeCallback[Y$N](editor,ids);if(submit){editor[z9u]();}}}progressCallback(conf);},type:O67,xhr:function(){var r1W="rogr";var G5U="onl";var Z2M="adend";var X0P="ja";f1i.N$L();var a2T="onp";var c5N="xSettings";var G8i=U8kjl[172460];G8i+=X0P;G8i+=c5N;var xhr=$[G8i][L7Q]();if(xhr[t4D]){var U7e=G5U;U7e+=V71;U7e+=Z2M;var Y6f=a2T;Y6f+=r1W;Y6f+=n1k;xhr[t4D][Y6f]=function(){var A__="toFixed";var E_y="loaded";var U1y=100;var s3f=':';var E9V="lengthComputable";var b1y='%';if(e[E9V]){var f8e=x9C;f8e+=Z8G;var F6t=w7H;F6t+=v8V;F6t+=O8n;var percent=(e[E_y] / e[F6t] * U1y)[A__](s8C) + b1y;progressCallback(conf,files[f8e] === z3P?percent:counter + s3f + files[G$8] + X$d + percent);}};xhr[t4D][U7e]=function(){var k80="processingText";var G08="Proce";var N$3=G08;N$3+=g8M;N$3+=i89;progressCallback(conf,conf[k80] || N$3);};}return xhr;}}));});};files=$[F2w](files,function(val){return val;});if(conf[X_V] !== undefined){var C77=s2V;C77+=v8V;var h3G=h0r;h3G+=U8kjl[213595];files[h3G](conf[C77],files[G$8]);}reader[G16](files[s8C]);}var DataTable$4=$[s$j][S0H];var _inlineCounter=s8C;function _actionClass(){var z0b="addClas";var D5B=U8kjl[213595];D5B+=y6A;D5B+=v8V;var q7p=U8kjl[88046];q7p+=V71;q7p+=F1m;q7p+=u6W;var c4L=y4k;c4L+=v8V;c4L+=y2D;var X8W=T_n;U8kjl.m_s();X8W+=V71;X8W+=u6W;X8W+=X_X;var classesActions=this[g5t][X8W];var action=this[X_X][c4L];var wrapper=$(this[S5o][y6N]);wrapper[W5i]([classesActions[z_a],classesActions[F6R],classesActions[B3O]][q7p](X$d));if(action === L7t){var C88=j_K;C88+=e8A;wrapper[t00](classesActions[C88]);}else if(action === D5B){var v_1=g6d;v_1+=O0j;wrapper[t00](classesActions[v_1]);}else if(action === w2z){var C8F=Q3A;C8F+=U8kjl[213595];C8F+=c4e;var G8C=z0b;G8C+=X_X;wrapper[G8C](classesActions[C8F]);}}function _ajax(data,success,error,submitParams){var S3E="deleteBody";var m7a='POST';var p4P="replacement";var K3q=/_id_/;var n01='?';var L2m="complete";var c2L="Pla";var g9O="param";var b3X="exO";var k5t="DE";var B__=/{id}/;var V_y="eBody";var u8p="inObj";var A9w="strin";var Z$5='idSrc';var R0s="replacements";var e99="delet";var v$g=U8kjl[172460];v$g+=U8kjl[88046];v$g+=U8kjl[172460];v$g+=u$5;var k_5=e99;k_5+=V_y;var j8P=k5t;j8P+=Z6a;j8P+=G2V;U8kjl.m_s();j8P+=E8f;var d6E=U8kjl[557061];d6E+=U8kjl[172460];var G2S=p4P;G2S+=X_X;var p1W=A9w;p1W+=i89;var i4S=V4V;i4S+=c2L;i4S+=u8p;i4S+=R9f;var m2o=U8kjl[172460];m2o+=s8Z;m2o+=m7J;var action=this[X_X][m2o];var thrown;var opts={complete:[function(xhr,text){var e3H="responseText";var x$k="Ar";var g1E=204;var e$c="sta";var G_1="tus";var p17='null';var y_t="responseJSON";var t5J="seJS";var W29="Plain";var j27=400;var R$2="ON";var x96="status";var c8P=V4V;c8P+=x$k;c8P+=T90;var n6H=V4V;n6H+=W29;n6H+=i$R;n6H+=J6l;var h3j=e$c;h3j+=G_1;var json=d1w;if(xhr[h3j] === g1E || xhr[e3H] === p17){json={};}else {try{var R2f=i1C;R2f+=Q3A;R2f+=X_X;R2f+=U8kjl[213595];var z3I=B8n;z3I+=t5J;z3I+=R$2;json=xhr[y_t]?xhr[z3I]:JSON[R2f](xhr[e3H]);}catch(e){}}if($[n6H](json) || Array[c8P](json)){success(json,xhr[x96] >= j27,xhr);}else {error(xhr,text,thrown);}}],data:d1w,dataType:e$x,error:[function(xhr,text,err){thrown=err;}],success:[],type:m7a};var a;var ajaxSrc=this[X_X][D7h];var id=action === E5t || action === w2z?pluck(this[X_X][T9X],Z$5)[U1$](O49):d1w;if($[i4S](ajaxSrc) && ajaxSrc[action]){ajaxSrc=ajaxSrc[action];}if(typeof ajaxSrc === U8kjl[517813]){var d_h=U8kjl.P3i;d_h+=m$X;ajaxSrc[d_h](this,d1w,d1w,data,success,error);return;}else if(typeof ajaxSrc === p1W){var y6n=F1m;y6n+=C43;y6n+=b3X;y6n+=M_j;if(ajaxSrc[y6n](X$d) !== -z3P){a=ajaxSrc[L8t](X$d);opts[d5b]=a[s8C];opts[w46]=a[z3P];}else {var C$H=e8G;C$H+=Q3A;C$H+=r6s;opts[C$H]=ajaxSrc;}}else {var r0a=U8kjl[213595];r0a+=Y0R;r0a+=C43;var F22=B5D;F22+=b05;var J$2=J8n;J$2+=U8kjl[213595];J$2+=u6W;J$2+=n76;var optsCopy=$[J$2]({},ajaxSrc || ({}));if(optsCopy[L2m]){var y2A=x1i;y2A+=J1n;y2A+=K2c;y2A+=U8kjl[213595];var X$n=U8kjl.P3i;X$n+=Q3S;X$n+=T4P;X$n+=G5m;opts[L2m][Z86](optsCopy[X$n]);delete optsCopy[y2A];}if(optsCopy[F22]){var G5W=B5D;G5W+=Q3A;G5W+=V71;G5W+=Q3A;opts[d3U][Z86](optsCopy[G5W]);delete optsCopy[d3U];}opts=$[r0a]({},opts,optsCopy);}if(opts[G2S]){var f$8=E$H;f$8+=K4C;$[f$8](opts[R0s],function(key,repl){var B4O='}';var O96='{';var u8D=U8kjl.P3i;u8D+=U8kjl[172460];u8D+=C$7;var y2I=e8G;y2I+=Q3A;y2I+=r6s;var r0X=e8G;r0X+=Q3A;r0X+=r6s;opts[r0X]=opts[y2I][r7E](O96 + key + B4O,repl[u8D](this,key,id,action,data));});}opts[w46]=opts[w46][r7E](K3q,id)[r7E](B__,id);if(opts[d6E]){var Z5B=c_Q;Z5B+=v8V;Z5B+=U8kjl[172460];var isFn=typeof opts[g2G] === U8kjl[517813];var newData=isFn?opts[g2G](data):opts[Z5B];data=isFn && newData?newData:$[n5$](m9a,data,newData);}opts[g2G]=data;if(opts[d5b] === j8P && (opts[k_5] === undefined || opts[S3E] === m9a)){var k_J=F1m;k_J+=C43;k_J+=b3X;k_J+=M_j;var k5l=n76;k5l+=U8kjl[172460];k5l+=v8V;k5l+=U8kjl[172460];var params=$[g9O](opts[k5l]);opts[w46]+=opts[w46][k_J](n01) === -z3P?n01 + params:h8M + params;delete opts[g2G];}$[v$g](opts);}function _animate(target,style,time,callback){var D7o="ani";var q6f="stop";var V_C=D7o;V_C+=R0g;U8kjl.N$L();V_C+=v8V;V_C+=U8kjl[213595];if($[U8kjl.B9_][V_C]){target[q6f]()[J0g](style,time,callback);}else {target[e4X](style);if(typeof time === U8kjl[517813]){time[Y$N](target);}else if(callback){var k9Z=X_x;k9Z+=C$7;callback[k9Z](target);}}}function _assembleMain(){var e3Q="ead";var i8L="odyContent";var O7F="formErr";var z7z=M_j;z7z+=V71;z7z+=Q3A;z7z+=D3K;var O3p=S5Z;O3p+=z5U;O3p+=n76;var H0g=s9C;H0g+=i8L;var g84=R7i;g84+=J14;var H6E=O7F;H6E+=U$E;var T0H=q$S;T0H+=n76;var y0R=K4C;y0R+=e3Q;y0R+=U8kjl[213595];y0R+=Q3A;var W9d=n76;W9d+=V71;W9d+=D3K;var dom=this[W9d];$(dom[y6N])[h3D](dom[y0R]);$(dom[J4o])[T0H](dom[H6E])[c_D](dom[g84]);$(dom[H0g])[c_D](dom[h1B])[O3p](dom[z7z]);}function _blur(){var G3W="onBlur";var Q37="funct";var r0V='preBlur';var x8h="tOpt";var Z6F=U8kjl.P3i;Z6F+=B5d;Z6F+=X_X;Z6F+=U8kjl[213595];var z_Z=Q37;z_Z+=F1m;z_Z+=V71;z_Z+=u6W;var H3o=R9a;H3o+=u6W;H3o+=v8V;var u6w=g6d;u6w+=F1m;u6w+=x8h;u6w+=X_X;var opts=this[X_X][u6w];var onBlur=opts[G3W];if(this[H3o](r0V) === p6n){return;}if(typeof onBlur === z_Z){onBlur(this);}else if(onBlur === A7A){this[z9u]();}else if(onBlur === Z6F){this[x3R]();}}function _clearDynamicInfo(errorsOnly){var E85=B5D;E85+=B$m;E85+=Q3A;var l1N=J1Q;l1N+=l98;var R65=n76;R65+=Q3S;var R4B=y6A;R4B+=F2j;R4B+=H6W;var J67=M_j;J67+=F1m;J67+=z3a;var q2T=U8kjl[213595];q2T+=Q3A;q2T+=B$m;q2T+=Q3A;var B2G=M_j;B2G+=C_e;B2G+=o1a;if(errorsOnly === void s8C){errorsOnly=p6n;}if(!this[X_X]){return;}var errorClass=this[g5t][B2G][q2T];var fields=this[X_X][J67];$(R4B + errorClass,this[R65][l1N])[W5i](errorClass);$[G5E](fields,function(name,field){field[d3U](M9P);if(!errorsOnly){field[h7_](M9P);}});this[E85](M9P);U8kjl.m_s();if(!errorsOnly){this[h7_](M9P);}}function _close(submitComplete,mode){var b0A="seC";var u7t="eCb";var E_c='focus.editor-focus';var L0m="Cb";var A6$='preClose';var r6Q=s9C;r6Q+=X78;r6Q+=K7c;var q3n=m5o;q3n+=p08;q3n+=u7t;U8kjl.N$L();var closed;if(this[b7_](A6$) === p6n){return;}if(this[X_X][q3n]){var y3q=m5o;y3q+=V71;y3q+=b0A;y3q+=s9C;var j92=U8kjl.P3i;j92+=E2D;j92+=U8kjl[213595];j92+=L0m;closed=this[X_X][j92](submitComplete,mode);this[X_X][y3q]=d1w;}if(this[X_X][U1C]){this[X_X][U1C]();this[X_X][U1C]=d1w;}$(r6Q)[Y$9](E_c);this[X_X][v3$]=p6n;this[b7_](K3j);if(closed){var A2J=m5o;A2J+=p08;A2J+=g6d;this[b7_](A2J,[closed]);}}function _closeReg(fn){var w2N="seCb";var L0E=E2n;L0E+=w2N;this[X_X][L0E]=fn;}function _crudArgs(arg1,arg2,arg3,arg4){var Y8j='boolean';var U$9="lainObject";var i_p="ai";var F1Q=D3K;F1Q+=i_p;F1Q+=u6W;var i6k=i0H;i6k+=U$9;var that=this;var title;var buttons;var show;var opts;if($[i6k](arg1)){opts=arg1;}else if(typeof arg1 === Y8j){show=arg1;opts=arg2;;}else {title=arg1;buttons=arg2;show=arg3;opts=arg4;;}if(show === undefined){show=m9a;}if(title){that[X3j](title);}if(buttons){that[y9M](buttons);}return {maybeOpen:function(){if(show){that[K9j]();}},opts:$[n5$]({},this[X_X][F$u][F1Q],opts)};}function _dataSource(name){var z8G="dataSources";var y3R="htm";var r2S="aSources";var L7i="taT";var s2S=y3R;s2S+=r6s;var P00=c_Q;P00+=v8V;P00+=r2S;var v7D=c_Q;v7D+=L7i;v7D+=B0g;v7D+=U8kjl[213595];var t8L=r6s;t8L+=U8kjl[213595];t8L+=U8X;var args=[];for(var _i=z3P;_i < arguments[t8L];_i++){args[_i - z3P]=arguments[_i];}var dataSource=this[X_X][x8K]?Editor[z8G][v7D]:Editor[P00][s2S];var fn=dataSource[name];if(fn){return fn[X5_](this,args);}}function _displayReorder(includeFields){var b7x="inclu";var P9Z="tem";var d6s='displayOrder';var p9y="deField";var c_r="eFields";var u5Q="formContent";var j2k="ain";var E_8="clu";var M2w="lat";var Z0J=U8kjl[213595];Z0J+=U8kjl[172460];Z0J+=U8kjl.P3i;Z0J+=K4C;var n5J=D3K;n5J+=j2k;var T5B=D3K;T5B+=V71;T5B+=L5Q;var U5K=P9Z;U5K+=T4P;U5K+=M2w;U5K+=U8kjl[213595];var L2K=n76;L2K+=V71;L2K+=D3K;var _this=this;var formContent=$(this[L2K][u5Q]);var fields=this[X_X][d$4];var order=this[X_X][H_d];var template=this[X_X][U5K];var mode=this[X_X][T5B] || n5J;if(includeFields){var x0P=b7x;x0P+=n76;x0P+=c_r;this[X_X][x0P]=includeFields;}else {var A4i=g_K;A4i+=E_8;A4i+=p9y;A4i+=X_X;includeFields=this[X_X][A4i];}formContent[a1f]()[n4I]();$[Z0J](order,function(i,name){var k4$="[data-editor-templ";var Q0C="editor-";var j5b="ame=\"";var y3E='"]';var W4H="no";var O2P="d[n";var s2o="ate=";var w7n="after";if(_this[B0o](name,includeFields) !== -z3P){var Z1G=R0g;Z1G+=F1m;Z1G+=u6W;if(template && mode === Z1G){var I6i=W4H;I6i+=n76;I6i+=U8kjl[213595];var Y$n=a$G;Y$n+=T9T;var S4G=k4$;S4G+=s2o;S4G+=b4P;var j7Z=G74;j7Z+=n76;var P7S=Q0C;P7S+=U7i;P7S+=O2P;P7S+=j5b;var F$V=M_j;F$V+=F1m;F$V+=u6W;F$V+=n76;template[F$V](P7S + name + y3E)[w7n](fields[name][y_n]());template[j7Z](S4G + name + y3E)[Y$n](fields[name][I6i]());}else {formContent[c_D](fields[name][y_n]());}}});if(template && mode === H86){template[L8D](formContent);}this[b7_](d6s,[this[X_X][v3$],this[X_X][E9i],formContent]);}function _edit(items,editFields,type,formOptions,setupDone){var Q90="difier";var b3S="tDa";var Z2C="sli";var W6_='initEdit';var w9t="toStrin";var o0j="_displa";var g$4="yReorder";var u2i='node';var s5w=n76;s5w+=U8kjl[172460];s5w+=U8kjl.x2x;var G$t=F0C;G$t+=F2j;G$t+=U8kjl[213595];G$t+=K1G;var L61=o0j;L61+=g$4;var Q4b=Z2C;Q4b+=U8kjl.P3i;Q4b+=U8kjl[213595];var e$p=U$E;e$p+=L5Q;e$p+=Q3A;var X5g=D3K;X5g+=V71;X5g+=n76;X5g+=U8kjl[213595];var L3O=U8A;L3O+=e3z;L3O+=K7c;var n7W=n76;n7W+=V71;n7W+=D3K;var u4k=y4k;u4k+=v8V;u4k+=y2D;var B7w=D3K;B7w+=V71;B7w+=Q90;var q81=g6d;q81+=F1m;q81+=b3S;q81+=U8kjl.x2x;var f5e=M_j;f5e+=f5g;f5e+=n76;f5e+=X_X;var _this=this;var fields=this[X_X][f5e];var usedFields=[];var includeInOrder;var editData={};this[X_X][T9X]=editFields;this[X_X][q81]=editData;this[X_X][B7w]=items;this[X_X][u4k]=E5t;this[n7W][e4C][T_1][L3O]=O9F;this[X_X][X5g]=type;this[p_m]();$[G5E](fields,function(name,field){var i5m="Ids";var E9s="alueC";var V7Y="_multiV";var f6H="tiRes";var C7h="hec";var D5J=o0o;D5J+=K1d;D5J+=F1m;D5J+=i5m;var i84=V7Y;i84+=E9s;i84+=C7h;i84+=Y6z;var S1C=U8kjl[213595];S1C+=U8kjl[172460];S1C+=U8kjl.P3i;S1C+=K4C;var G6i=m2L;G6i+=f6H;G6i+=K2c;U8kjl.N$L();field[G6i]();includeInOrder=p6n;editData[name]={};$[S1C](editFields,function(idSrc,edit){var H3l="nullD";var y46="efault";if(edit[d$4][name]){var P8S=Q3A;P8S+=V71;P8S+=h9_;var r_G=X_X;r_G+=U8kjl.P3i;r_G+=c9N;r_G+=U8kjl[213595];var Z1b=E2Q;Z1b+=F1m;Z1b+=U8kjl.P3i;Z1b+=U8kjl[213595];var o0t=H3l;o0t+=y46;var Y__=n76;Y__+=U8kjl[172460];Y__+=v8V;Y__+=U8kjl[172460];var val=field[w4D](edit[Y__]);var nullDefault=field[o0t]();editData[name][idSrc]=val === d1w?M9P:Array[t1S](val)?val[Z1b]():val;if(!formOptions || formOptions[r_G] === P8S){var B7H=o0o;B7H+=y5u;B7H+=W4N;field[B7H](idSrc,val === undefined || nullDefault && val === d1w?field[h79]():val,p6n);if(!edit[z6u] || edit[z6u][name]){includeInOrder=m9a;}}else {if(!edit[z6u] || edit[z6u][name]){var A5u=n76;A5u+=U8kjl[213595];A5u+=M_j;var T_6=o0o;T_6+=q71;T_6+=K2c;field[T_6](idSrc,val === undefined || nullDefault && val === d1w?field[A5u]():val,p6n);includeInOrder=m9a;}}}});field[i84]();if(field[D5J]()[G$8] !== s8C && includeInOrder){usedFields[q3Y](name);}});var currOrder=this[e$p]()[Q4b]();for(var i=currOrder[G$8] - z3P;i >= s8C;i--){var c0j=w9t;c0j+=i89;if($[f9Q](currOrder[i][c0j](),usedFields) === -z3P){currOrder[o$0](i,z3P);}}this[L61](currOrder);this[G$t](W6_,[pluck(editFields,u2i)[s8C],pluck(editFields,s5w)[s8C],items,type],function(){var W9E="initMult";U8kjl.N$L();var L7_="iE";var Q09=W9E;Q09+=L7_;Q09+=y6A;Q09+=v8V;_this[b7_](Q09,[editFields,items,type],function(){setupDone();});});}function _event(trigger,args,promiseComplete){var O1Y="Ev";var h_C="triggerHandler";var J7V="dexOf";var l6E='Cancelled';var Y4f="triggerHandl";var Q1W="then";var d_8="result";if(args === void s8C){args=[];}if(promiseComplete === void s8C){promiseComplete=undefined;}if(Array[t1S](trigger)){for(var i=s8C,ien=trigger[G$8];i < ien;i++){var E62=A10;E62+=U8kjl[213595];E62+=V3s;E62+=K1G;this[E62](trigger[i],args);}}else {var T2f=T4P;T2f+=Q3A;T2f+=U8kjl[213595];var e_r=F1m;e_r+=u6W;e_r+=J7V;var Q_u=G2V;Q_u+=J7C;var e=$[Q_u](trigger);$(this)[h_C](e,args);var result=e[d_8];if(trigger[e_r](T2f) === s8C && result === p6n){var a0L=O1Y;a0L+=z5U;a0L+=v8V;var m6q=Y4f;m6q+=B5D;$(this)[m6q]($[a0L](trigger + l6E),args);}if(promiseComplete){var q8V=r_P;q8V+=R9f;if(result && typeof result === q8V && result[Q1W]){result[Q1W](promiseComplete);}else {promiseComplete(result);}}return result;}}function _eventName(input){var Q_X="toLowerCase";var n2V="substring";var v6L=3;var D$X=/^on([A-Z])/;var l2u=c6f;l2u+=K4C;var name;var names=input[L8t](X$d);for(var i=s8C,ien=names[l2u];i < ien;i++){var r3d=D3K;r3d+=U8kjl[172460];r3d+=v8V;r3d+=e7s;name=names[i];var onStyle=name[r3d](D$X);if(onStyle){name=onStyle[z3P][Q_X]() + name[n2V](v6L);}names[i]=name;}U8kjl.N$L();return names[U1$](X$d);}function _fieldFromNode(node){var o7P=U8kjl[213595];o7P+=r5B;var foundField=d1w;$[o7P](this[X_X][d$4],function(name,field){var J5T=r6s;J5T+=U8kjl[213595];J5T+=s0n;J5T+=Z8G;var x_b=u6W;x_b+=X78;x_b+=U8kjl[213595];if($(field[x_b]())[T0$](node)[J5T]){foundField=field;}});return foundField;}function _fieldNames(fieldNames){var j1B=c5W;j1B+=Q3A;j1B+=e5y;if(fieldNames === undefined){return this[d$4]();}else if(!Array[j1B](fieldNames)){return [fieldNames];}return fieldNames;}function _focus(fieldsIn,focus){var t8$="iveElemen";var h9J='jq:';var n8z="xOf";var S4B="nu";var J5R='div.DTE ';var L5K=/^jq:/;var t8F="mber";var q6L="Focu";var h$g=C04;h$g+=q6L;h$g+=X_X;var t5u=S4B;t5u+=t8F;var h7N=D3K;h7N+=U8kjl[172460];h7N+=T4P;var G2T=q$Q;G2T+=V71;G2T+=V3s;var S7l=y4k;S7l+=v8V;S7l+=F1m;S7l+=m7J;var _this=this;if(this[X_X][S7l] === G2T){return;}var field;var fields=$[h7N](fieldsIn,function(fieldOrName){var f9H=U2j;f9H+=r6s;f9H+=n76;f9H+=X_X;return typeof fieldOrName === k57?_this[X_X][f9H][fieldOrName]:fieldOrName;});if(typeof focus === t5u){field=fields[focus];}else if(focus){var O08=j_D;O08+=n8z;if(focus[O08](h9J) === s8C){field=$(J5R + focus[r7E](L5K,M9P));}else {var B$$=b$U;B$$+=z3a;field=this[X_X][B$$][focus];}}else {var G2h=y4k;G2h+=v8V;G2h+=t8$;G2h+=v8V;document[G2h][Q6H]();}this[X_X][h$g]=field;if(field){var s1E=M_j;s1E+=n4m;s1E+=e8G;s1E+=X_X;field[s1E]();}}function _formOptions(opts){var C1I="eyu";var n8v="olea";var Q_m="ssag";var M$g="editCount";var o8a="ydow";var w5s="tOpts";var i7r='.dteInline';var H4p=Y6z;U8kjl.m_s();H4p+=C1I;H4p+=T4P;var L9e=n0H;L9e+=o8a;L9e+=u6W;var g1Y=V71;g1Y+=u6W;var J9y=s9C;J9y+=V71;J9y+=n8v;J9y+=u6W;var P3P=m8S;P3P+=v8V;P3P+=Y9n;P3P+=u6W;var q34=D3K;q34+=U8kjl[213595];q34+=Y1P;var B$S=X_X;B$S+=y8_;B$S+=s0n;var W44=g6d;W44+=F1m;W44+=w5s;var _this=this;var that=this;var inlineCount=_inlineCounter++;var namespace=i7r + inlineCount;this[X_X][W44]=opts;this[X_X][M$g]=inlineCount;if(typeof opts[X3j] === B$S || typeof opts[X3j] === U8kjl[517813]){var Q5H=l5_;Q5H+=f_V;this[X3j](opts[Q5H]);opts[X3j]=m9a;}if(typeof opts[q34] === k57 || typeof opts[h7_] === P3P){var u2U=N8J;u2U+=Q_m;u2U+=U8kjl[213595];this[h7_](opts[u2U]);opts[h7_]=m9a;}if(typeof opts[y9M] !== J9y){var T3y=s9C;T3y+=N9G;T3y+=V71;T3y+=f0c;this[y9M](opts[y9M]);opts[T3y]=m9a;}$(document)[g1Y](L9e + namespace,function(e){var X6A="_fieldFrom";var u4R="canRet";var u43="urnSubmi";var Q$Z="canReturnSubm";var K0x="Node";var h0u=n76;h0u+=V4V;h0u+=l_V;h0u+=e5Y;U8kjl.N$L();if(e[F5j] === T_9 && _this[X_X][h0u]){var el=$(document[O0l]);if(el){var t6L=u4R;t6L+=u43;t6L+=v8V;var i_v=Q$Z;i_v+=O0j;var g41=X6A;g41+=K0x;var field=_this[g41](el);if(field && typeof field[i_v] === U8kjl[517813] && field[t6L](el)){e[U4_]();}}}});$(document)[m7J](H4p + namespace,function(e){var h1G="nR";var d2c='button';var J6t="efaul";var G4W='blur';var C9X="gg";var t06="turn";var g_V="fault";var W_u="tD";var r_8="functi";var z8a="iveElement";var I34="paren";var L47="onEsc";var d0u="onReturn";var X1y="canReturnSubmit";var E8e="onEs";var N_q="aul";var C69="nEsc";var t9o=".DTE_Form_Butto";var w1x=27;var L_D=37;var w2G="Esc";var N$u="preve";var c4n="entDe";var r3o="nE";var B_v="ntDef";var v7g="trigger";var A1c="etu";var E9u="hich";var P3A=J81;P3A+=u6W;P3A+=X8J;P3A+=K4C;var q8x=t9o;q8x+=f0c;var Y2m=I34;Y2m+=k65;var Y3G=n76;Y3G+=V4V;Y3G+=l_V;Y3G+=e5Y;var H63=h9_;H63+=K4C;H63+=F1m;H63+=e7s;var Z2u=y4k;Z2u+=v8V;Z2u+=z8a;var el=$(document[Z2u]);if(e[H63] === T_9 && _this[X_X][Y3G]){var field=_this[Y9$](el);if(field && typeof field[X1y] === U8kjl[517813] && field[X1y](el)){var R7u=V71;R7u+=u6W;R7u+=z60;R7u+=t06;var a1b=V71;a1b+=h1G;a1b+=A1c;a1b+=M3z;if(opts[a1b] === A7A){var n_f=N$u;n_f+=B_v;n_f+=N_q;n_f+=v8V;e[n_f]();_this[z9u]();}else if(typeof opts[R7u] === U8kjl[517813]){var u8b=G09;u8b+=W_u;u8b+=J6t;u8b+=v8V;e[u8b]();opts[d0u](_this,e);}}}else if(e[F5j] === w1x){var u5R=V71;u5R+=r3o;u5R+=X_X;u5R+=U8kjl.P3i;var b2W=m7J;b2W+=w2G;var S9n=V71;S9n+=C69;var F7M=r_8;F7M+=V71;F7M+=u6W;var A1W=E8e;A1W+=U8kjl.P3i;var X0R=V8p;X0R+=F2j;X0R+=c4n;X0R+=g_V;e[X0R]();if(typeof opts[A1W] === F7M){opts[L47](that,e);}else if(opts[S9n] === G4W){var B6F=b8y;B6F+=e8G;B6F+=Q3A;that[B6F]();}else if(opts[b2W] === K3j){that[L$w]();}else if(opts[u5R] === A7A){var I4G=X_X;I4G+=e8G;I4G+=X7B;that[I4G]();}}else if(el[Y2m](q8x)[P3A]){var s5c=h9_;s5c+=E9u;if(e[F5j] === L_D){var N3Y=T4P;N3Y+=Q3A;N3Y+=U8kjl[213595];N3Y+=F2j;el[N3Y](d2c)[v7g](G_V);}else if(e[s5c] === k9y){var s8M=W_d;s8M+=X_X;var w3L=y8_;w3L+=C9X;w3L+=B5D;var f0r=a98;f0r+=u6W;var o54=u6W;o54+=U8kjl[213595];o54+=u$5;o54+=v8V;el[o54](f0r)[w3L](s8M);}}});this[X_X][U1C]=function(){var B_P="keydow";var N5e=B_P;N5e+=u6W;var M80=V71;M80+=M_j;M80+=M_j;$(document)[M80](N5e + namespace);$(document)[Y$9](i8w + namespace);};return namespace;}function _inline(editFields,opts,closeCb){var c4E="oseReg";var c_2="contents";var P7Z="Er";var K4Y="submitTrigger";var P7W="rAgent";var y3Z="click.dte-";var C7b="Html";var o$E="_focu";var p$a="rep";var B7U="tyle=\"";var i2q="/div";var S8L="inl";var x3K='.';var L_p="postopen";var B8_="eopen";var r_F="num";var e7N="nline";var B59='<div class="DTE_Processing_Indicator"><span></span></div>';var z8d="ttachF";var N8d="indexOf";var n_v="childNo";var O0u="dren";var c4J='tr';var L3C="closest";var c5l="ys";var u2e='Edge/';var C2m="liner";var v4t="width:";var x2g=S8L;x2g+=Q3t;var u0s=A10;u0s+=L_p;var j5z=M_j;j5z+=n4m;j5z+=l0q;var O_k=o$E;O_k+=X_X;var J9a=o2H;J9a+=r6s;J9a+=c4E;var j_q=r6s;j_q+=U8kjl[213595];j_q+=u7q;j_q+=K4C;var I8s=F1m;I8s+=e7N;var F$j=G$j;F$j+=B8_;var p0v=V1u;p0v+=z2X;p0v+=X_X;var G1g=r6s;G1g+=z5U;G1g+=X8J;G1g+=K4C;var M9v=x8w;M9v+=y4k;M9v+=K4C;var k5T=n0H;k5T+=c5l;var _this=this;if(closeCb === void s8C){closeCb=d1w;}var closed=p6n;var classes=this[g5t][j0X];var keys=Object[k5T](editFields);var editRow=editFields[keys[s8C]];var children=d1w;var lastAttachPoint;var elements=[];for(var i=s8C;i < editRow[M9v][G1g];i++){var B6L=M_j;B6L+=K5w;var j7p=T4P;j7p+=e8G;j7p+=x6S;var n$r=U8kjl[172460];n$r+=z8d;n$r+=B7X;n$r+=X_X;var name_1=editRow[n$r][i][s8C];elements[j7p]({field:this[X_X][B6L][name_1],name:name_1,node:$(editRow[z1x][i])});}var namespace=this[p0v](opts);var ret=this[F$j](I8s);if(!ret){return this;}for(var _i=s8C,elements_1=elements;_i < elements_1[j_q];_i++){var P3S=R7i;P3S+=V71;P3S+=f0c;var h5F=u6W;h5F+=V71;h5F+=n76;h5F+=U8kjl[213595];var Q4Q=e4C;Q4Q+=P7Z;Q4Q+=b05;var t69=b$U;t69+=U8kjl[213595];t69+=o1a;var d0m=p$a;d0m+=r6s;d0m+=y4k;d0m+=U8kjl[213595];var k3s=r6s;k3s+=g77;var D4u=M_j;D4u+=F1m;D4u+=u6W;D4u+=n76;var D1m=K07;D1m+=T5A;D1m+=i2q;D1m+=c4a;var B0t=a2j;B0t+=b04;var g_r=b4P;g_r+=x5y;var a_u=S5Z;a_u+=r_h;var D8Z=T4P;D8Z+=u$5;D8Z+=b4P;var U_7=h9_;U_7+=F1m;U_7+=s$q;U_7+=K4C;var v1J=X_X;v1J+=B7U;v1J+=v4t;var K5v=l0q;K5v+=U8kjl[213595];K5v+=P7W;var d2D=L5Q;d2D+=v8V;d2D+=U8kjl[172460];d2D+=e7s;var q8L=U8kjl.P3i;q8L+=K4C;q8L+=I8N;q8L+=O0u;var el=elements_1[_i];var node=el[y_n];el[q8L]=node[c_2]()[d2D]();var style=navigator[K5v][N8d](u2e) !== -z3P?v1J + node[U_7]() + D8Z:M9P;node[a_u]($(t0I + classes[y6N] + n4e + t0I + classes[C2m] + g_r + style + Z5q + B59 + B0t + t0I + classes[y9M] + D1m + R5$));node[D4u](b1z + classes[k3s][d0m](/ /g,x3K))[c_D](el[t69][y_n]())[c_D](this[S5o][Q4Q]);lastAttachPoint=el[m4J][h5F]();if(opts[P3S]){var X6Z=n76;X6Z+=V71;X6Z+=D3K;var X7r=n76;X7r+=l1W;X7r+=H6W;var n5Q=G74;n5Q+=n76;node[n5Q](X7r + classes[y9M][r7E](/ /g,x3K))[c_D](this[X6Z][y9M]);}}var submitTrigger=opts[K4Y];if(submitTrigger !== d1w){var J4Q=z9u;J4Q+=C7b;var n0R=a$G;n0R+=T9T;var O8R=y3Z;O8R+=s_N;O8R+=n9i;var A3F=V71;A3F+=u6W;var z6O=n_v;z6O+=r$u;var E_9=r_F;E_9+=u9V;if(typeof submitTrigger === E_9){var q8D=r6s;q8D+=U8kjl[213595];q8D+=u6W;q8D+=P_k;var kids=$(lastAttachPoint)[L3C](c4J)[a1f]();submitTrigger=submitTrigger < s8C?kids[kids[q8D] + submitTrigger]:kids[submitTrigger];}children=Array[U08][y3j][Y$N]($(submitTrigger)[s8C][z6O]);$(children)[n4I]();$(submitTrigger)[A3F](O8R,function(e){var l6Z="Propagatio";var C1q="stopImmediate";var r7s=C1q;r7s+=l6Z;r7s+=u6W;e[r7s]();_this[z9u]();})[n0R](opts[J4Q]);}this[J9a](function(submitComplete,action){var z58="click.d";var m_L="te-submit";var A$w="rEa";var d1S=V71;d1S+=M_j;d1S+=M_j;closed=m9a;$(document)[d1S](L4b + namespace);if(!submitComplete || action !== E5t){var S5I=k1D;S5I+=A$w;S5I+=e7s;elements[S5I](function(el){var R_E=U8kjl[172460];R_E+=T$_;R_E+=u6W;R_E+=n76;var j87=u6W;j87+=V71;j87+=n76;j87+=U8kjl[213595];var E7e=H$6;E7e+=u6W;U8kjl.N$L();E7e+=v8V;E7e+=X_X;el[y_n][E7e]()[n4I]();el[j87][R_E](el[a1f]);});}if(submitTrigger){var D$K=q$S;D$K+=n76;var N5Y=z58;N5Y+=m_L;var l1z=V71;l1z+=M_j;l1z+=M_j;$(submitTrigger)[l1z](N5Y)[s6G]()[D$K](children);}_this[n6U]();if(closeCb){closeCb();}U8kjl.N$L();return a5y;;});setTimeout(function(){var W2V="own";var I9B="moused";var S15="eydown";var n_$=U8kjl.P3i;n_$+=T4Y;n_$+=Y6z;var r73=V71;r73+=u6W;var k_d=Y6z;k_d+=S15;var P9Q=V71;P9Q+=u6W;var q8A=I9B;q8A+=W2V;if(closed){return;}var back=$[U8kjl.B9_][K8r]?G2m:j60;var target;$(document)[m7J](q8A + namespace,function(e){U8kjl.m_s();var i9X="targe";var x9S=i9X;x9S+=v8V;target=e[x9S];})[P9Q](k_d + namespace,function(e){var b_h="target";target=e[b_h];})[r73](n_$ + namespace,function(e){var r2K='owns';var t8q="inA";var isIn=p6n;for(var _i=s8C,elements_2=elements;_i < elements_2[G$8];_i++){var O6b=t8q;O6b+=r9d;O6b+=U8kjl[172460];O6b+=K7c;var T1L=M_j;T1L+=B7X;var el=elements_2[_i];if(el[T1L][X2r](r2K,target) || $[O6b](el[y_n][s8C],$(target)[c1f]()[back]()) !== -z3P){isIn=m9a;}}if(!isIn){_this[Q6H]();}});},s8C);this[O_k]($[J5v](elements,function(el){return el[m4J];}),opts[j5z]);this[u0s](x2g,m9a);}function _optionsUpdate(json){U8kjl.m_s();var that=this;if(json[z4E]){$[G5E](this[X_X][d$4],function(name,field){if(json[z4E][name] !== undefined){var fieldInst=that[m4J](name);if(fieldInst && fieldInst[A1k]){var a$R=L$F;a$R+=c_Q;a$R+=e5o;fieldInst[a$R](json[z4E][name]);}}});}}function _message(el,msg,title,fn){var e$3="fadeO";var m0l="ock";var I_e="itle";var B8a="fadeIn";var L8X="removeAttr";var t5o=O70;t5o+=u6W;t5o+=v0T;var canAnimate=$[U8kjl.B9_][J0g]?m9a:p6n;if(title === undefined){title=p6n;}if(!fn){fn=function(){};}if(typeof msg === t5o){var V75=m9F;V75+=r6s;V75+=U8kjl[213595];msg=msg(this,new DataTable$4[x23](this[X_X][V75]));}U8kjl.m_s();el=$(el);if(canAnimate){var p8c=E9x;p8c+=V71;p8c+=T4P;el[p8c]();}if(!msg){if(this[X_X][v3$] && canAnimate){var R8$=e$3;R8$+=e8G;R8$+=v8V;el[R8$](function(){var I6u="ml";var y1f=l4d;y1f+=I6u;el[y1f](M9P);fn();});}else {var s$Y=U8kjl.P3i;s$Y+=X_X;s$Y+=X_X;el[q2y](M9P)[s$Y](H5u,D5T);fn();}if(title){el[L8X](u_C);}}else {fn();if(this[X_X][v3$] && canAnimate){el[q2y](msg)[B8a]();}else {var p1C=s9C;p1C+=r6s;p1C+=m0l;var h7S=X$A;h7S+=K7c;el[q2y](msg)[e4X](h7S,p1C);}if(title){var E$7=v8V;E$7+=I_e;var b$C=U8kjl[172460];b$C+=v8V;b$C+=v8V;b$C+=Q3A;el[b$C](E$7,msg);}}}function _multiInfo(){var G4k="multiIn";var Q2p="tiEditabl";var Y41="isMultiVal";var M6t="oShown";var K5H="isMult";U8kjl.N$L();var fields=this[X_X][d$4];var include=this[X_X][n1W];var show=m9a;var state;if(!include){return;}for(var i=s8C,ien=include[G$8];i < ien;i++){var V98=G4k;V98+=M_j;V98+=M6t;var F0M=Y41;F0M+=N8x;var e_q=K5H;e_q+=a09;var P0W=o0o;P0W+=r6s;P0W+=Q2p;P0W+=U8kjl[213595];var field=fields[include[i]];var multiEditable=field[P0W]();if(field[e_q]() && multiEditable && show){state=m9a;show=p6n;}else if(field[F0M]() && !multiEditable){state=m9a;}else {state=p6n;}fields[include[i]][V98](state);}}function _nestedClose(cb){var K5T="callback";var T7Y="splayControlle";var O4b="dte";var B2p="isplayController";var X1h=r6s;X1h+=Q68;var E1r=r6s;E1r+=C0t;E1r+=Z8G;U8kjl.m_s();var r9V=A10;r9V+=l0p;var disCtrl=this[X_X][u94];var show=disCtrl[r9V];if(!show || !show[E1r]){if(cb){cb();}}else if(show[X1h] > z3P){var m_H=n76;m_H+=F1m;m_H+=T7Y;m_H+=Q3A;var s8t=T4P;s8t+=c9N;show[s8t]();var last=show[show[G$8] - z3P];if(cb){cb();}this[X_X][m_H][K9j](last[O4b],last[c_D],last[K5T]);}else {var n_K=r6s;n_K+=z5U;n_K+=X8J;n_K+=K4C;var W8s=Z07;W8s+=U8kjl[213595];var p9L=n76;p9L+=B2p;this[X_X][p9L][W8s](this,cb);show[n_K]=s8C;}}function _nestedOpen(cb,nest){var I2u="_show";var Z5I="ller";var E8q="_sh";var z7c="splayCont";var j43=B3M;j43+=T4P;j43+=U8kjl[213595];j43+=Q3A;var n5j=U8kjl.P0a;n5j+=D3K;var R4M=n76;R4M+=V71;R4M+=D3K;U8kjl.N$L();var E$o=q9E;E$o+=K4C;E$o+=V71;E$o+=h9_;var l4m=E8q;l4m+=V71;l4m+=h9_;var w4B=y6A;w4B+=z7c;w4B+=B$m;w4B+=Z5I;var disCtrl=this[X_X][w4B];if(!disCtrl[l4m]){disCtrl[I2u]=[];}if(!nest){var n4i=J81;n4i+=u7q;n4i+=K4C;disCtrl[I2u][n4i]=s8C;}disCtrl[E$o][q3Y]({append:this[R4M][y6N],callback:cb,dte:this});this[X_X][u94][K9j](this,this[n5j][j43],cb);}function _postopen(type,immediate){var C7z="captureFocus";var L2P='submit.editor-internal';U8kjl.m_s();var B5y="focus.editor-foc";var c4Q=j98;c4Q+=J81;var V1z=D3K;V1z+=U8kjl[172460];V1z+=F1m;V1z+=u6W;var q2c=V71;q2c+=u6W;var D47=n76;D47+=V71;D47+=D3K;var _this=this;var focusCapture=this[X_X][u94][C7z];if(focusCapture === undefined){focusCapture=m9a;}$(this[D47][e4C])[Y$9](L2P)[q2c](L2P,function(e){U8kjl.m_s();e[U4_]();});if(focusCapture && (type === V1z || type === c4Q)){var G0l=B5y;G0l+=l0q;$(L9Y)[m7J](G0l,function(){var H_l='.DTE';var y2B="nts";var F6X='.DTED';var p00="setFocus";var C7M=O1C;C7M+=i89;U8kjl.m_s();C7M+=v8V;C7M+=K4C;var I0r=r6s;I0r+=C0t;I0r+=v8V;I0r+=K4C;var R$p=i1C;R$p+=n4W;R$p+=y2B;if($(document[O0l])[R$p](H_l)[I0r] === s8C && $(document[O0l])[c1f](F6X)[C7M] === s8C){if(_this[X_X][p00]){var f7J=M_j;f7J+=n4m;f7J+=l0q;var W$q=X_X;W$q+=K2c;W$q+=L1u;W$q+=L$j;_this[X_X][W$q][f7J]();}}});}this[w9B]();this[b7_](t4s,[type,this[X_X][E9i]]);if(immediate){var s8$=c9N;s8$+=z5U;s8$+=g6d;this[b7_](s8$,[type,this[X_X][E9i]]);}return m9a;}function _preopen(type){var r0y="ncelOpe";var r55="ynamicInfo";var C9E="learDynamicInfo";var i1G="_cle";var Z7c="Icb";var e8H='preOpen';var F4z="arD";var z$3=y6A;U8kjl.N$L();z$3+=X_X;z$3+=l_V;z$3+=e5Y;var i99=i1G;i99+=F4z;i99+=r55;var A1a=y4k;A1a+=S47;var y0U=v0U;y0U+=v8V;if(this[y0U](e8H,[type,this[X_X][A1a]]) === p6n){var b40=L$w;b40+=Z7c;var q6V=A3l;q6V+=L5Q;var m4y=A3l;m4y+=L5Q;var Y1M=U8kjl.P3i;Y1M+=U8kjl[172460];Y1M+=r0y;Y1M+=u6W;var Z2E=N5b;Z2E+=W_f;var X7d=o2H;X7d+=C9E;this[X7d]();this[Z2E](Y1M,[type,this[X_X][E9i]]);if((this[X_X][m4y] === a5y || this[X_X][q6V] === x5x) && this[X_X][U1C]){this[X_X][U1C]();}this[X_X][b40]=d1w;return p6n;}this[i99](m9a);this[X_X][z$3]=type;return m9a;}function _processing(processing){var c7A="toggleClass";var w3Y="v.";var b70="oce";var M9E="proce";var r56=T7R;r56+=b70;r56+=L3d;r56+=s0n;var h6s=v0U;h6s+=v8V;var A9p=y6A;A9p+=w3Y;A9p+=d4J;var p3X=y4k;p3X+=v8V;p3X+=Z9U;var z7h=M9E;z7h+=g8M;z7h+=i89;var m3_=v_y;m3_+=K0I;var procClass=this[m3_][z7h][p3X];$([A9p,this[S5o][y6N]])[c7A](procClass,processing);this[X_X][e1J]=processing;this[h6s](r56,[processing]);}function _noProcessing(args){var G32=U2j;G32+=h08;var processing=p6n;$[G5E](this[X_X][G32],function(name,field){var B8k="cessing";var q$M=T4P;q$M+=B$m;q$M+=B8k;U8kjl.m_s();if(field[q$M]()){processing=m9a;}});U8kjl.m_s();if(processing){this[P4u](Y7X,function(){var Z0Q="ly";var P11="_noProc";var O3K=P11;O3K+=j$5;O3K+=s0n;if(this[O3K](args) === m9a){var J3c=S5Z;J3c+=Z0Q;var q$g=V_f;q$g+=O0j;this[q$g][J3c](this,args);}});}return !processing;}function _submit(successCallback,errorCallback,formatdata,hide){var N1v=U8kjl;var A6L=16;var c9m="actionNam";var T0N="editData";var A1J="onCom";var I3A='preSubmit';var h5v="editOp";var F4u='allIfChanged';var Z4L="_noProcessing";N1v.N$L();var k_r="Field is";var U3w="itCou";var w_y=" still processing";var c1_=F0C;c1_+=V3s;c1_+=u6W;c1_+=v8V;var J9f=Q3A;J9f+=Q5a;J9f+=e8y;J9f+=U8kjl[213595];var J1b=U8kjl.P3i;J1b+=Q3A;J1b+=U8kjl[213595];J1b+=a0M;var X74=c9m;X74+=U8kjl[213595];var O2W=y4k;O2W+=S47;var g$u=X_X;g$u+=K0F;g$u+=F1m;g$u+=v8V;var r3c=h5v;r3c+=k65;var G6o=U8kjl[213595];G6o+=n76;G6o+=U3w;G6o+=K1G;var _this=this;var changed=p6n;var allData={};var changedData={};var setBuilder=dataSet;var fields=this[X_X][d$4];var editCount=this[X_X][G6o];var editFields=this[X_X][T9X];var editData=this[X_X][T0N];var opts=this[X_X][r3c];var changedSubmit=opts[g$u];var submitParamsLocal;if(this[Z4L](arguments) === p6n){var h1e=k_r;h1e+=w_y;Editor[d3U](h1e,A6L,p6n);return;}var action=this[X_X][O2W];var submitParams={data:{}};submitParams[this[X_X][X74]]=action;if(action === J1b || action === E5t){var S4l=U8kjl[172460];S4l+=r6s;S4l+=r6s;$[G5E](editFields,function(idSrc,edit){var a7d="yObj";var K9G="isEm";N1v.m_s();var w9N="isEmptyObject";var o_3=K9G;o_3+=H8K;o_3+=a7d;o_3+=R9f;var allRowData={};var changedRowData={};$[G5E](fields,function(name,field){var K6Q="y-cou";var Y6n="submittable";var w0g=/\[.*$/;var q_6='[]';var j1y="str";var P5E="-man";N1v.N$L();if(edit[d$4][name] && field[Y6n]()){var b8z=U8kjl[213595];b8z+=n76;b8z+=F1m;b8z+=v8V;var v$$=P5E;v$$+=K6Q;v$$+=K1G;var S1$=x5A;S1$+=U8kjl[213595];var u8L=F1m;u8L+=u6W;u8L+=H4s;u8L+=W6z;var o2L=j1y;o2L+=F1m;o2L+=u6W;o2L+=i89;var L3L=h7b;L3L+=K7c;var multiGet=field[L_8]();var builder=setBuilder(name);if(multiGet[idSrc] === undefined){var originalVal=field[w4D](edit[g2G]);builder(allRowData,originalVal);return;}var value=multiGet[idSrc];var manyBuilder=Array[L3L](value) && typeof name === o2L && name[u8L](q_6) !== -z3P?setBuilder(name[S1$](w0g,M9P) + v$$):d1w;builder(allRowData,value);if(manyBuilder){var s98=O1C;s98+=P_k;manyBuilder(allRowData,value[s98]);}if(action === b8z && (!editData[name] || !field[b6S](value,editData[name][idSrc]))){builder(changedRowData,value);changed=m9a;if(manyBuilder){manyBuilder(changedRowData,value[G$8]);}}}});if(!$[w9N](allRowData)){allData[idSrc]=allRowData;}if(!$[o_3](changedRowData)){changedData[idSrc]=changedRowData;}});if(action === L7t || changedSubmit === S4l || changedSubmit === F4u && changed){var m73=n76;m73+=l2W;submitParams[m73]=allData;}else if(changedSubmit === o3U && changed){submitParams[g2G]=changedData;}else {var I4r=g9E;I4r+=n_d;I4r+=E6p;var f3t=M_j;f3t+=P14;f3t+=s8Z;f3t+=m7J;var R3w=A1J;R3w+=t9I;var M$w=y4k;M$w+=v8V;M$w+=F1m;M$w+=m7J;this[X_X][M$w]=d1w;if(opts[V3J] === K3j && (hide === undefined || hide)){var y6R=A10;y6R+=U8kjl.P3i;y6R+=B5d;y6R+=w5Z;this[y6R](p6n);}else if(typeof opts[R3w] === f3t){opts[V3J](this);}if(successCallback){successCallback[Y$N](this);}this[I4r](p6n);this[b7_](N4r);return;}}else if(action === J9f){var Q7u=E$H;Q7u+=K4C;$[Q7u](editFields,function(idSrc,edit){var U_M=U8kjl[557061];U_M+=U8kjl[172460];submitParams[U_M][idSrc]=edit[g2G];});}submitParamsLocal=$[n5$](m9a,{},submitParams);if(formatdata){formatdata(submitParams);}this[c1_](I3A,[submitParams,action],function(result){var S7Y="itTab";var X1E="_aja";N1v.m_s();if(result === p6n){_this[V$W](p6n);}else {var v86=q9E;v86+=K0F;v86+=S7Y;v86+=J81;var t6o=X1E;t6o+=u$5;var submitWire=_this[X_X][D7h]?_this[t6o]:_this[v86];submitWire[Y$N](_this,submitParams,function(json,notGood,xhr){var e0Q="_submitSuc";var l0n=U8kjl[172460];l0n+=v0T;var Z0y=e0Q;Z0y+=I51;_this[Z0y](json,notGood,submitParams,submitParamsLocal,_this[X_X][l0n],editCount,hide,successCallback,errorCallback,xhr);},function(xhr,err,thrown){var I$g="_submitError";_this[I$g](xhr,err,thrown,errorCallback,submitParams,_this[X_X][E9i]);},submitParams);}});}function _submitTable(data,success,error,submitParams){var T9z="odifier";var F4Y="ifie";var Q36=q$Q;Q36+=I5N;var M1B=h5e;M1B+=U8kjl.P3i;var P2w=j$_;P2w+=y2D;var action=data[P2w];var out={data:[]};var idGet=dataGet(this[X_X][U2W]);var idSet=dataSet(this[X_X][M1B]);if(action !== Q36){var X8N=n76;X8N+=U8kjl[172460];X8N+=v8V;X8N+=U8kjl[172460];var S$7=U8kjl[213595];S$7+=U8kjl[172460];S$7+=U8kjl.P3i;S$7+=K4C;var c1t=D3K;c1t+=X78;c1t+=F4Y;c1t+=Q3A;var w9Y=e53;w9Y+=b2B;var j7j=D3K;j7j+=T9z;var k2N=G0H;k2N+=U5_;k2N+=W5_;var H0a=D3K;H0a+=V71;H0a+=n76;H0a+=U8kjl[213595];var originalData_1=this[X_X][H0a] === H86?this[k2N](i4$,this[j7j]()):this[w9Y](d43,this[c1t]());$[S$7](data[X8N],function(key,vals){var Z57="toStri";var H0J=j_K;H0J+=e8A;var P$2=U8kjl[213595];P$2+=n76;P$2+=F1m;P$2+=v8V;var toSave;var extender=extend;if(action === P$2){var v9$=n76;v9$+=l2W;var rowData=originalData_1[key][v9$];toSave=extender({},rowData,m9a);toSave=extender(toSave,vals,m9a);}else {toSave=extender({},vals,m9a);}var overrideId=idGet(toSave);if(action === H0J && overrideId === undefined){var s0p=Z57;s0p+=s0n;idSet(toSave,+new Date() + key[s0p]());}else {idSet(toSave,overrideId);}out[g2G][q3Y](toSave);});}success(out);}function _submitSuccess(json,notGood,submitParams,submitParamsLocal,action,editCount,hide,successCallback,errorCallback,xhr){var G71="roc";var B8z="onComple";var C0N="ource";var A8M="_dataSour";var W$G="taSourc";var K6E="_data";var I6Y="dEr";var q4h="br>";var a$D="editCoun";var i5K="fieldErrors";var t6m="_dataSo";var c15='preEdit';var p8a='setData';var X49="ur";var y2F="dErrors";var g2A="essing";var e0B="eCreat";var k$X='postRemove';var A9R="tSubmit";var p0s='submitUnsuccessful';var k_a="omm";U8kjl.N$L();var p8y='prep';var Q7T='submitSuccess';var Z0t='postCreate';var p$z='preRemove';var F7m='postEdit';var I16="mmi";var k7c=A10;k7c+=U8kjl[213595];k7c+=q7W;k7c+=v8V;var p8T=g9E;p8T+=G71;p8T+=g2A;var b1K=b$U;b1K+=o9q;b1K+=y2F;var H1q=U8kjl[213595];H1q+=Q3A;H1q+=Q3A;H1q+=U$E;var o8T=H8a;o8T+=Q3A;var W3d=q1Z;W3d+=A9R;var j$Y=v0U;j$Y+=v8V;var k$x=U2j;k$x+=o1a;k$x+=X_X;var _this=this;var that=this;var setData;var fields=this[X_X][k$x];var opts=this[X_X][t5t];var modifier=this[X_X][m3x];this[j$Y](W3d,[json,submitParams,action,xhr]);if(!json[o8T]){json[d3U]=M9P;}if(!json[i5K]){var j16=M_j;j16+=f5g;j16+=I6Y;j16+=B4x;json[j16]=[];}if(notGood || json[H1q] || json[b1K][G$8]){var N1Z=F0C;N1Z+=F2j;N1Z+=z5U;N1Z+=v8V;var a5X=T5A;a5X+=q4h;var C1e=U8kjl[88046];C1e+=V71;C1e+=F1m;C1e+=u6W;var P4h=U8kjl[213595];P4h+=r5B;var globalError_1=[];if(json[d3U]){var m2D=T4P;m2D+=e8G;m2D+=X_X;m2D+=K4C;globalError_1[m2D](json[d3U]);}$[P4h](json[i5K],function(i,err){var b78="splayed";var f0N='Error';var L7T="eldError";var F4x="U";var e8c="bodyContent";var l$c="nknown ";var B2M="onFieldError";var C6Q="tat";var d1U=': ';var p6r="ield: ";var l31="position";var o17="onFi";var h_R="_an";var F8V=n76;F8V+=F1m;F8V+=b78;var field=fields[err[h8i]];if(!field){var E2J=B0h;E2J+=D3K;E2J+=U8kjl[213595];var o3Y=F4x;o3Y+=l$c;o3Y+=M_j;o3Y+=p6r;throw new Error(o3Y + err[E2J]);}else if(field[F8V]()){var F$R=X_X;F$R+=I_g;var y38=v7Y;y38+=U$E;field[y38](err[F$R] || f0N);if(i === s8C){if(opts[B2M] === G_V){var t89=M_j;t89+=L$j;var r$4=n76;r$4+=V71;r$4+=D3K;var D5z=h_R;D5z+=F1m;D5z+=g_M;D5z+=U8kjl[213595];_this[D5z]($(_this[r$4][e8c]),{scrollTop:$(field[y_n]())[l31]()[j1c]},j5c);field[t89]();}else if(typeof opts[B2M] === U8kjl[517813]){var V3f=o17;V3f+=L7T;opts[V3f](_this,err);}}}else {var e2t=X_X;e2t+=C6Q;e2t+=e8G;e2t+=X_X;globalError_1[q3Y](field[h8i]() + d1U + (err[e2t] || f0N));}});this[d3U](globalError_1[C1e](a5X));this[N1Z](p0s,[json]);if(errorCallback){var f65=U8kjl.P3i;f65+=U8kjl[172460];f65+=r6s;f65+=r6s;errorCallback[f65](that,json);}}else {var Y7b=R9a;Y7b+=K1G;var B11=a$D;B11+=v8V;var W2L=q$Q;W2L+=V71;W2L+=V3s;var b9L=U8kjl[213595];b9L+=n76;b9L+=F1m;b9L+=v8V;var o6w=n76;o6w+=U8kjl[172460];o6w+=v8V;o6w+=U8kjl[172460];var store={};if(json[o6w] && (action === L7t || action === b9L)){var M2E=x1i;M2E+=I16;M2E+=v8V;var H8n=K6E;H8n+=l3u;H8n+=C0N;var g31=J81;g31+=s0n;g31+=Z8G;var G50=n76;G50+=l2W;this[q3f](p8y,action,modifier,submitParamsLocal,json,store);for(var _i=s8C,_a=json[G50];_i < _a[g31];_i++){var V1E=A10;V1E+=x7Z;V1E+=u6W;V1E+=v8V;var A06=F1m;A06+=n76;var data=_a[_i];setData=data;var id=this[q3f](A06,data);this[V1E](p8a,[json,data,action]);if(action === L7t){var p1x=F0C;p1x+=F2j;p1x+=W_f;var C5M=X2P;C5M+=U8kjl[213595];var d0v=t6m;d0v+=X49;d0v+=U8kjl.P3i;d0v+=U8kjl[213595];var Z$3=T4P;Z$3+=Q3A;Z$3+=e0B;Z$3+=U8kjl[213595];var h1m=N5b;h1m+=U8kjl[213595];h1m+=u6W;h1m+=v8V;this[h1m](Z$3,[json,data,id]);this[d0v](C5M,fields,data,store);this[p1x]([L7t,Z0t],[json,data,id]);}else if(action === E5t){var X6n=F0C;X6n+=F2j;X6n+=W_f;var X$k=v0U;X$k+=v8V;this[X$k](c15,[json,data,id]);this[q3f](E5t,modifier,fields,data,store);this[X6n]([E5t,F7m],[json,data,id]);}}this[H8n](M2E,action,modifier,json[g2G],store);}else if(action === W2L){var n4R=n76;n4R+=J60;n4R+=U8kjl[172460];var S77=U8kjl.P3i;S77+=k_a;S77+=O0j;var D4X=F1m;D4X+=n76;D4X+=X_X;var N8O=Q3A;N8O+=g9U;N8O+=V3s;var H0E=q$Q;H0E+=V71;H0E+=V3s;var L_Z=G0H;L_Z+=U8kjl[172460];L_Z+=W$G;L_Z+=U8kjl[213595];var k7H=F1m;k7H+=v1S;var K3L=A8M;K3L+=W5_;this[K3L](p8y,action,modifier,submitParamsLocal,json,store);this[b7_](p$z,[json,this[k7H]()]);this[L_Z](H0E,modifier,fields,store);this[b7_]([N8O,k$X],[json,this[D4X]()]);this[q3f](S77,action,modifier,json[n4R],store);}if(editCount === this[X_X][B11]){var n6Y=M_j;n6Y+=L7u;n6Y+=l5_;n6Y+=m7J;var j82=B8z;j82+=e5o;var u$H=T_n;u$H+=m7J;var sAction=this[X_X][E9i];this[X_X][u$H]=d1w;if(opts[j82] === K3j && (hide === undefined || hide)){var U0G=n76;U0G+=U8kjl[172460];U0G+=v8V;U0G+=U8kjl[172460];this[x3R](json[U0G]?m9a:p6n,sAction);}else if(typeof opts[V3J] === n6Y){opts[V3J](this);}}if(successCallback){successCallback[Y$N](that,json);}this[Y7b](Q7T,[json,setData,action]);}this[p8T](p6n);this[k7c](N4r,[json,setData,action]);}function _submitError(xhr,err,thrown,errorCallback,submitParams,action){var D8m="tComp";var T3N="submi";var f0K="ocessin";var n33="itE";var I0F="syst";var s6q='postSubmit';var H$3=T3N;H$3+=D8m;H$3+=G5m;var M60=s_N;M60+=D3K;M60+=n33;M60+=k6s;var P2I=g9E;P2I+=Q3A;P2I+=f0K;P2I+=i89;var O$S=I0F;O$S+=Q5a;var r5x=F1m;r5x+=T1j;r5x+=u6W;var V0a=U8kjl[213595];V0a+=Q3A;V0a+=B$m;V0a+=Q3A;this[b7_](s6q,[d1w,submitParams,action,xhr]);this[V0a](this[r5x][d3U][O$S]);this[P2I](p6n);if(errorCallback){var f36=i$D;f36+=r6s;errorCallback[f36](this,xhr,err,thrown);}this[b7_]([M60,H$3],[xhr,err,thrown,submitParams]);}function _tidy(fn){var V_V=U8kjl;var Z2N=10;var r_E="ple";var A_i="submitCom";var R9e="inli";var R1E="bServerSide";var D2L="lose";var B2L=R9e;B2L+=G40;var L0U=T4P;L0U+=n_d;L0U+=X_X;L0U+=p3T;var O0E=v8V;O0E+=B0g;O0E+=U8kjl[213595];var Z7l=v8V;Z7l+=y8i;Z7l+=r6s;Z7l+=U8kjl[213595];var _this=this;var dt=this[X_X][Z7l]?new $[U8kjl.B9_][U8kjl.p1N][x23](this[X_X][O0E]):d1w;var ssp=p6n;if(dt){var x3G=C04;x3G+=y39;ssp=dt[x3G]()[s8C][R13][R1E];}V_V.N$L();if(this[X_X][L0U]){var P27=A_i;P27+=r_E;P27+=e5o;var U4y=V71;U4y+=u6W;U4y+=U8kjl[213595];this[U4y](P27,function(){var V8B='draw';if(ssp){var S22=V71;S22+=u6W;S22+=U8kjl[213595];dt[S22](V8B,fn);}else {setTimeout(function(){V_V.m_s();fn();},Z2N);}});return m9a;}else if(this[h0z]() === B2L || this[h0z]() === x5x){var D1y=U8kjl.P3i;D1y+=D2L;this[P4u](D1y,function(){V_V.m_s();if(!_this[X_X][e1J]){setTimeout(function(){if(_this[X_X]){fn();}},Z2N);}else {_this[P4u](N4r,function(e,json){if(ssp && json){var q6Z=n76;q6Z+=b5P;q6Z+=h9_;dt[P4u](q6Z,fn);}else {setTimeout(function(){V_V.m_s();if(_this[X_X]){fn();}},Z2N);}});}})[Q6H]();return m9a;}return p6n;}function _weakInArray(name,arr){var V$6=J81;V$6+=U8X;for(var i=s8C,ien=arr[V$6];i < ien;i++){if(name == arr[i]){return i;}}U8kjl.N$L();return -z3P;}var fieldType={create:function(){},disable:function(){},enable:function(){},get:function(){},set:function(){}};var DataTable$3=$[U8kjl.B9_][U8kjl.p1N];function _buttonText(conf,textIn){var M8V='div.upload button';U8kjl.m_s();var m$y="oose file...";var M0Y="uploadText";var d1r=t8k;d1r+=S8e;if(textIn === d1w || textIn === undefined){var d9L=t9p;d9L+=K4C;d9L+=m$y;textIn=conf[M0Y] || d9L;}conf[d1r][T0$](M8V)[q2y](textIn);}function _commonUpload(editor,conf,dropCallback,multiple){var b35='<div class="cell clearValue">';var n_3='dragover';var q5P="class=\"cell\">";var x9y="de\">";var C9k='"></button>';var c6S='div.drop';var d7k="<button c";var B2X="buttonInternal";var v91="div.d";var f1Y="pan";var v2N="agDr";var I7s="input>";var u7J='dragover.DTE_Upload drop.DTE_Upload';var d1I="div c";var Q9u='<div class="eu_table">';var g5j='<div class="row second">';var Y8_='<input type="file" ';var Q1o="v.rendered";var L_d='div.clearValue button';var j_U="iv ";var N4V="rop ";var R5T="dragl";var x2L="=file]";var e5e="lass=\"row\">";var U0y="mitHi";var d_2='<div class="rendered"></div>';var g2j='over';var Z$_="dragDropText";var S6q="\"></butt";var G0y='<div class="editor_upload">';var a5c="las";var o1t='multiple';var L13='<div class="drop"><span></span></div>';var Z5s="<div class=\"cell uplo";var S1Z="ad limitHide";var p4b="addCl";var D3P="[type";var m5t="ass=\"";var A3i="ton cl";var t84='Drag and drop a file here to upload';var D8f="<div class=\"cell li";var v8I="<b";var T9F="dr";var y0H='input[type=file]';var Y_e="ve dragexit";var B1d="FileReader";var w4E=F1m;w4E+=y2E;var V9j=H$N;V9j+=S8e;V9j+=D3P;V9j+=x2L;var J1m=U8kjl.P3i;J1m+=r6s;J1m+=F1m;J1m+=p59;var b_o=V71;b_o+=u6W;var B92=T9F;B92+=v2N;B92+=c9N;var C9t=F1m;C9t+=n76;var C_M=A10;C_M+=z5U;C_M+=B0g;C_M+=g6d;var m_G=A10;m_G+=H$N;m_G+=S8e;var D1u=T5A;D1u+=j7K;D1u+=Y4e;var u2_=Z$t;u2_+=j_U;u2_+=q5P;var R_$=a2j;R_$+=l1W;R_$+=c4a;var K2R=D8f;K2R+=U0y;K2R+=x9y;var i86=T5A;i86+=j7K;i86+=e7A;i86+=c4a;var A3c=v8I;A3c+=S8e;A3c+=A3i;A3c+=m5t;var Y7K=c4a;Y7K+=q4Z;Y7K+=I7s;var D8$=S6q;D8$+=m7J;D8$+=c4a;var A9O=d7k;A9O+=a5c;A9O+=a2E;var D8O=Z5s;D8O+=S1Z;D8O+=K07;var d19=T5A;d19+=d1I;d19+=e5e;var A$e=c5Z;A$e+=D3K;if(multiple === void s8C){multiple=p6n;}var btnClass=editor[g5t][A$e][B2X];var container=$(G0y + Q9u + d19 + D8O + A9O + btnClass + D8$ + Y8_ + (multiple?o1t:M9P) + Y7K + R5$ + b35 + A3c + btnClass + C9k + i86 + R5$ + g5j + K2R + L13 + R_$ + u2_ + d_2 + R5$ + R5$ + R5$ + D1u);conf[m_G]=container;conf[C_M]=m9a;if(conf[C9t]){var D_N=F1m;D_N+=n76;var j5$=F1m;j5$+=n76;var M3T=U8kjl[172460];M3T+=b7B;M3T+=Q3A;var U6V=M_j;U6V+=c1x;container[U6V](y0H)[M3T](j5$,Editor[W2_](conf[D_N]));}if(conf[i8c]){var M06=U8kjl[172460];M06+=G9j;var d7I=J60;d7I+=v8V;d7I+=Q3A;container[T0$](y0H)[d7I](conf[M06]);}_buttonText(conf);if(window[B1d] && conf[B92] !== p6n){var H35=m5o;H35+=V71;H35+=w5Z;var p0Y=V71;p0Y+=u6W;var z2V=R5T;z2V+=g_f;z2V+=Y_e;var o8l=n76;o8l+=Q3A;o8l+=V71;o8l+=T4P;var S$P=V71;S$P+=u6W;var r9x=G74;r9x+=n76;var F9l=v8V;F9l+=H__;F9l+=v8V;var R9O=v91;R9O+=N4V;R9O+=X_X;R9O+=f1Y;container[T0$](R9O)[F9l](conf[Z$_] || t84);var dragDrop_1=container[r9x](c6S);dragDrop_1[S$P](o8l,function(e){var O_1="Transfer";var r1o="origina";var v5S="lE";if(conf[B4F]){var E0E=g8Z;E0E+=Q$x;E0E+=L93;var X0X=b$U;X0X+=r6s;X0X+=U8kjl[213595];X0X+=X_X;var n_V=c_Q;n_V+=U8kjl.x2x;n_V+=O_1;var R3k=r1o;R3k+=v5S;R3k+=V3s;R3k+=K1G;var j9i=e8G;j9i+=N_8;Editor[j9i](editor,conf,e[R3k][n_V][X0X],_buttonText,dropCallback);dragDrop_1[E0E](g2j);}return p6n;})[m7J](z2V,function(e){var k37=A10;k37+=u8K;U8kjl.m_s();if(conf[k37]){dragDrop_1[W5i](g2j);}return p6n;})[m7J](n_3,function(e){if(conf[B4F]){dragDrop_1[t00](g2j);}return p6n;});editor[p0Y](t4s,function(){var s4I="bod";var x0B=V71;x0B+=u6W;var b8o=s4I;b8o+=K7c;$(b8o)[x0B](u7J,function(e){return p6n;});})[m7J](H35,function(){var u9O=V71;U8kjl.m_s();u9O+=M_j;u9O+=M_j;$(L9Y)[u9O](u7J);});}else {var q_n=y6A;q_n+=Q1o;var z4d=u6W;z4d+=V71;z4d+=Y8A;z4d+=A$6;var L82=p4b;L82+=U8kjl[172460];L82+=X_X;L82+=X_X;container[L82](z4d);container[c_D](container[T0$](q_n));}container[T0$](L_d)[b_o](J1m,function(e){e[U4_]();if(conf[B4F]){upload[C04][Y$N](editor,conf,M9P);}});container[T0$](V9j)[m7J](w4E,function(){var n8T=H$l;U8kjl.m_s();n8T+=I6h;Editor[t4D](editor,conf,this[n8T],_buttonText,function(ids){var t6d=X_x;t6d+=C$7;dropCallback[t6d](editor,ids);container[T0$](y0H)[s8C][m4E]=M9P;});});return container;}function _triggerChange(input){setTimeout(function(){U8kjl.N$L();var O2l=U8kjl.P3i;O2l+=K4C;O2l+=o8M;O2l+=b2j;var t_v=J3D;t_v+=B5D;input[t_v](O2l,{editor:m9a,editorSet:m9a});;},s8C);}var baseFieldType=$[n5$](m9a,{},fieldType,{canReturnSubmit:function(conf,node){U8kjl.N$L();return m9a;},disable:function(conf){var z_9=U8A;z_9+=B0g;z_9+=U8kjl[213595];z_9+=n76;var K$z=A10;K$z+=p3J;U8kjl.m_s();K$z+=v8V;conf[K$z][X5b](z_9,m9a);},enable:function(conf){var U4o=T4P;U4o+=B$m;U4o+=T4P;var R9q=A2L;R9q+=y2E;conf[R9q][U4o](p9i,p6n);},get:function(conf){var l1C=F2j;l1C+=U8kjl[172460];l1C+=r6s;var I55=A10;I55+=F1m;I55+=y2E;return conf[I55][l1C]();},set:function(conf,val){U8kjl.N$L();var A2p=F2j;A2p+=U8kjl[172460];A2p+=r6s;var n8l=A10;n8l+=H$N;n8l+=e8G;n8l+=v8V;conf[n8l][A2p](val);_triggerChange(conf[d9J]);}});var hidden={create:function(conf){var m35=t66;m35+=U8kjl[213595];var l_b=A10;l_b+=F2j;l_b+=U8kjl[172460];l_b+=r6s;conf[l_b]=conf[m35];U8kjl.N$L();return d1w;},get:function(conf){var k8B=A10;k8B+=D0c;return conf[k8B];},set:function(conf,val){U8kjl.m_s();var q2h=A10;q2h+=F2j;q2h+=U8kjl[172460];q2h+=r6s;conf[q2h]=val;}};var readonly=$[I1q](m9a,{},baseFieldType,{create:function(conf){var e_P="ut/>";var e2p="safeI";var i6M="<i";U8kjl.m_s();var Z38=J60;Z38+=E7Q;var l4I=v8V;l4I+=J8n;var r$k=e2p;r$k+=n76;var Z1Y=i6M;Z1Y+=Q20;Z1Y+=e_P;var B$e=v5d;B$e+=v8V;conf[B$e]=$(Z1Y)[i8c]($[n5$]({id:Editor[r$k](conf[x1J]),readonly:f47,type:l4I},conf[Z38] || ({})));return conf[d9J][s8C];}});var text=$[E3l](m9a,{},baseFieldType,{create:function(conf){var t2P='<input/>';var u3F=J60;u3F+=v8V;u3F+=Q3A;var c3p=v8V;c3p+=H__;c3p+=v8V;var p8X=h40;p8X+=M_j;U8kjl.m_s();p8X+=U8kjl[213595];p8X+=N2I;conf[d9J]=$(t2P)[i8c]($[n5$]({id:Editor[p8X](conf[x1J]),type:c3p},conf[u3F] || ({})));return conf[d9J][s8C];}});var password=$[n5$](m9a,{},baseFieldType,{create:function(conf){var W9p="input/>";var m1y="ssw";var k$z="ord";var P3I=v5d;P3I+=v8V;var e0D=i1C;e0D+=m1y;e0D+=k$z;U8kjl.N$L();var z3w=T5A;z3w+=W9p;conf[d9J]=$(z3w)[i8c]($[n5$]({id:Editor[W2_](conf[x1J]),type:e0D},conf[i8c] || ({})));return conf[P3I][s8C];}});var textarea=$[F7d](m9a,{},baseFieldType,{canReturnSubmit:function(conf,node){return p6n;},create:function(conf){var t_M="<t";var e8J="extarea></textarea>";var e4m="eI";var v6I=J60;v6I+=v8V;v6I+=Q3A;var C3M=F1m;C3M+=n76;var c3r=k3b;c3r+=e4m;c3r+=n76;var g9N=U8kjl[172460];g9N+=G9j;var x4P=t_M;x4P+=e8J;var u9l=S4P;u9l+=I2x;conf[u9l]=$(x4P)[g9N]($[n5$]({id:Editor[c3r](conf[C3M])},conf[v6I] || ({})));return conf[d9J][s8C];}});var select=$[n5$](m9a,{},baseFieldType,{_addOptions:function(conf,opts,append){var F0k="hidden";var i7m="placeholder";var n1p="holde";var a6E="Pair";var B1h="lder";var B8G="laceh";var W_x="tor_val";var P3K="placeholderValue";var R$0="placehold";var Q$X="Disabled";var N_o="rDisa";var G5v=c9N;G5v+=u1t;var i2J=t8k;i2J+=S8e;if(append === void s8C){append=p6n;}var elOpts=conf[i2J][s8C][G5v];var countOffset=s8C;if(!append){var W_1=r6s;W_1+=z5U;W_1+=P_k;elOpts[W_1]=s8C;if(conf[i7m] !== undefined){var w5$=A10;w5$+=v8F;w5$+=W_x;var z$i=Q45;z$i+=S03;z$i+=n76;var r78=R$0;r78+=B5D;r78+=Q$X;var f1S=W6X;f1S+=n1p;f1S+=N_o;f1S+=R9N;var G$l=T4P;G$l+=B8G;G$l+=V71;G$l+=B1h;var placeholderValue=conf[P3K] !== undefined?conf[P3K]:M9P;countOffset+=z3P;elOpts[s8C]=new Option(conf[G$l],placeholderValue);var disabled=conf[f1S] !== undefined?conf[r78]:m9a;elOpts[s8C][F0k]=disabled;elOpts[s8C][z$i]=disabled;elOpts[s8C][w5$]=placeholderValue;}}else {countOffset=elOpts[G$8];}if(opts){var Z4o=c9N;Z4o+=l5_;Z4o+=J14;Z4o+=a6E;Editor[q$J](opts,conf[Z4o],function(val,label,i,attr){var option=new Option(label,val);option[X1M]=val;if(attr){var d0T=U8kjl[172460];d0T+=v8V;d0T+=E7Q;$(option)[d0T](attr);}elOpts[i + countOffset]=option;});}},create:function(conf){var F0K="</se";var M61="elect>";var Y$5="opti";var W3_="lect>";var S9o="<s";var r25="_a";var j5v=A2L;j5v+=u6W;j5v+=T4P;j5v+=S8e;var d80=Y$5;d80+=J14;var z7v=r25;z7v+=Q6D;z7v+=K7C;var m9y=U8kjl[172460];m9y+=v8V;m9y+=E7Q;var k4Y=F1m;k4Y+=n76;var o9G=S9o;o9G+=M61;o9G+=F0K;o9G+=W3_;var d65=A10;d65+=H$N;d65+=S8e;conf[d65]=$(o9G)[i8c]($[n5$]({id:Editor[W2_](conf[k4Y]),multiple:conf[a17] === m9a},conf[m9y] || ({})))[m7J](f2a,function(e,d){U8kjl.N$L();var W0u="_la";var G98=U8kjl[213595];G98+=n76;G98+=F1m;G98+=f9M;if(!d || !d[G98]){var Z1F=W0u;Z1F+=E9x;Z1F+=W4N;conf[Z1F]=select[A5X](conf);}});select[z7v](conf,conf[d80] || conf[W93]);return conf[j5v][s8C];},destroy:function(conf){var E5T=V71;E5T+=M_j;U8kjl.N$L();E5T+=M_j;conf[d9J][E5T](f2a);},get:function(conf){var l$S='option:selected';var P8Z="parato";var v3l=Q3C;v3l+=Q3A;v3l+=e5y;var G2A=M_j;G2A+=F1m;G2A+=u6W;G2A+=n76;var D0l=A10;D0l+=p3J;D0l+=v8V;var val=conf[D0l][G2A](l$S)[J5v](function(){return this[X1M];})[v3l]();if(conf[a17]){var Q9r=X_X;Q9r+=U8kjl[213595];Q9r+=P8Z;Q9r+=Q3A;return conf[E2t]?val[U1$](conf[Q9r]):val;}U8kjl.m_s();return val[G$8]?val[s8C]:d1w;},set:function(conf,val,localUpdate){var N8G="ption";var X7k="holder";var p9O=W6X;p9O+=X7k;var e64=U8kjl[213595];e64+=r5B;var M9r=V71;M9r+=N8G;var L44=A2L;L44+=y2E;var a4O=v_M;a4O+=Y9n;a4O+=u6W;var h$m=M_j;h$m+=c1x;var r_U=v5d;r_U+=v8V;var A$Q=V4V;A$Q+=j8i;A$Q+=U8kjl[172460];A$Q+=K7c;if(!localUpdate){conf[n9d]=val;}if(conf[a17] && conf[E2t] && !Array[A$Q](val)){val=typeof val === k57?val[L8t](conf[E2t]):[];}else if(!Array[t1S](val)){val=[val];}var i;var len=val[G$8];var found;var allFound=p6n;var options=conf[r_U][h$m](a4O);conf[L44][T0$](M9r)[e64](function(){var l56=M3c;l56+=U8kjl.P3i;l56+=e5o;l56+=n76;found=p6n;for(i=s8C;i < len;i++){var B$3=A10;B$3+=z9L;B$3+=o2f;if(this[B$3] == val[i]){found=m9a;allFound=m9a;break;}}this[l56]=found;});U8kjl.N$L();if(conf[p9O] && !allFound && !conf[a17] && options[G$8]){var R5d=M3c;R5d+=U8kjl.P3i;R5d+=e5o;R5d+=n76;options[s8C][R5d]=m9a;}if(!localUpdate){_triggerChange(conf[d9J]);}return allFound;},update:function(conf,options,append){var s9$=A10;s9$+=F1m;s9$+=Q20;s9$+=S8e;var Q9k=s30;U8kjl.m_s();Q9k+=n76;Q9k+=z2X;Q9k+=X_X;select[Q9k](conf,options,append);var lastSet=conf[n9d];if(lastSet !== undefined){var T6E=X_X;T6E+=K2c;select[T6E](conf,lastSet,m9a);}_triggerChange(conf[s9$]);}});var checkbox=$[K7W](m9a,{},baseFieldType,{_addOptions:function(conf,opts,append){var Y39="mpty";var M98=A2L;M98+=u6W;M98+=T4P;M98+=S8e;if(append === void s8C){append=p6n;}var jqInput=conf[M98];var offset=s8C;if(!append){var O_j=U8kjl[213595];O_j+=Y39;jqInput[O_j]();}else {var S2u=J81;S2u+=U8X;var I3N=p3J;I3N+=v8V;offset=$(I3N,jqInput)[S2u];}U8kjl.N$L();if(opts){var q83=X7g;q83+=X_X;Editor[q83](opts,conf[t$e],function(val,label,i,attr){var v$_="r=\"";var n0h='input:last';var V2K="<label ";var N82='" type="checkbox" />';var B63="<input ";var y6Q=r6p;y6Q+=n8X;y6Q+=U8kjl[213595];var H7N=K1w;H7N+=w_U;var a38=t8M;a38+=F2j;a38+=c4a;var P4y=V2K;P4y+=k1D;P4y+=v$_;var V6J=F1m;V6J+=n76;var Z68=h40;Z68+=w5a;Z68+=o1W;Z68+=n76;var K6c=B63;K6c+=x1J;K6c+=r$d;var r0e=T5A;r0e+=y6A;r0e+=Y5t;jqInput[c_D](r0e + K6c + Editor[Z68](conf[V6J]) + D80 + (i + offset) + N82 + P4y + Editor[W2_](conf[x1J]) + D80 + (i + offset) + n4e + label + Y$E + a38);$(H7N,jqInput)[i8c](y6Q,val)[s8C][X1M]=val;if(attr){$(n0h,jqInput)[i8c](attr);}});}},create:function(conf){var B_U="dOpti";var x_i="<div>";var A6U=s30;A6U+=B_U;U8kjl.N$L();A6U+=J14;var X1T=x_i;X1T+=t8M;X1T+=Y5t;conf[d9J]=$(X1T);checkbox[A6U](conf,conf[z4E] || conf[W93]);return conf[d9J][s8C];},disable:function(conf){U8kjl.N$L();var A9s=A10;A9s+=D5m;conf[A9s][T0$](v$9)[X5b](p9i,m9a);},enable:function(conf){var m6g=Q45;m6g+=s9C;m6g+=r6s;m6g+=g6d;var Q21=T4P;Q21+=A$6;var E0H=F1m;E0H+=u6W;E0H+=I2x;var f0v=G74;f0v+=n76;var J8f=t8k;J8f+=e8G;J8f+=v8V;conf[J8f][f0v](E0H)[Q21](m6g,p6n);},get:function(conf){var Q3X="unselectedValue";var k3H="jo";var w8A="eparator";var A0r="sepa";var t85=A0r;t85+=Q3A;t85+=J60;t85+=U$E;var h9Y=k3H;h9Y+=g_K;var S4N=X_X;S4N+=w8A;var h7R=G74;h7R+=n76;var out=[];var selected=conf[d9J][h7R](u12);if(selected[G$8]){var l5L=g_f;l5L+=U8kjl.P3i;l5L+=K4C;selected[l5L](function(){var u8V="or_";var k9r=c0p;k9r+=u8V;k9r+=r6p;k9r+=r6s;out[q3Y](this[k9r]);});}else if(conf[Q3X] !== undefined){out[q3Y](conf[Q3X]);}return conf[E2t] === undefined || conf[S4N] === d1w?out:out[h9Y](conf[t85]);},set:function(conf,val){var o1o='|';var g4Y="separat";var k1K=U8kjl[213595];k1K+=r5B;var h1y=O1C;h1y+=P_k;var m4i=F1m;m4i+=X_X;m4i+=j8i;m4i+=e5y;var O2p=H$N;O2p+=e8G;O2p+=v8V;var D5F=M_j;D5F+=F1m;D5F+=u6W;D5F+=n76;var J6h=A10;J6h+=F1m;J6h+=l8F;J6h+=v8V;var jqInputs=conf[J6h][D5F](O2p);if(!Array[t1S](val) && typeof val === k57){var V5U=g4Y;V5U+=V71;V5U+=Q3A;val=val[L8t](conf[V5U] || o1o);}else if(!Array[m4i](val)){val=[val];}var i;var len=val[h1y];var found;jqInputs[k1K](function(){var y6T="che";var y80=y6T;y80+=U8kjl.P3i;y80+=A3x;found=p6n;for(i=s8C;i < len;i++){if(this[X1M] == val[i]){found=m9a;break;}}this[y80]=found;});_triggerChange(jqInputs);},update:function(conf,options,append){var Z7Y=X_X;U8kjl.N$L();Z7Y+=K2c;var currVal=checkbox[A5X](conf);checkbox[s9v](conf,options,append);checkbox[Z7Y](conf,currVal);}});var radio=$[n5$](m9a,{},baseFieldType,{_addOptions:function(conf,opts,append){if(append === void s8C){append=p6n;}var jqInput=conf[d9J];var offset=s8C;if(!append){var g3u=U8kjl[213595];g3u+=D3K;g3u+=H8K;g3u+=K7c;jqInput[g3u]();}else {var k8j=H$N;k8j+=S8e;offset=$(k8j,jqInput)[G$8];}if(opts){Editor[q$J](opts,conf[t$e],function(val,label,i,attr){var v8j='" type="radio" name="';var t61='" />';var K7P='<input id="';var h$_='<label for="';var T5d="am";var w2H="t:last";var E3w=D0c;E3w+=e8G;E3w+=U8kjl[213595];var U3F=U8kjl[172460];U3F+=b7B;U3F+=Q3A;var o61=g_K;o61+=X73;o61+=w2H;var I$x=a2j;I$x+=F1m;I$x+=Y5t;var h7x=F1m;h7x+=n76;U8kjl.N$L();var S_B=u6W;S_B+=T5d;S_B+=U8kjl[213595];var s_7=T5A;s_7+=n76;s_7+=b04;jqInput[c_D](s_7 + K7P + Editor[W2_](conf[x1J]) + D80 + (i + offset) + v8j + conf[S_B] + t61 + h$_ + Editor[W2_](conf[h7x]) + D80 + (i + offset) + n4e + label + Y$E + I$x);$(o61,jqInput)[U3F](E3w,val)[s8C][X1M]=val;if(attr){var a5Z=K1w;a5Z+=w_U;$(a5Z,jqInput)[i8c](attr);}});}},create:function(conf){var p5L='<div />';var G4T=v_M;G4T+=F1m;G4T+=J14;var y0A=v5d;y0A+=v8V;conf[y0A]=$(p5L);radio[s9v](conf,conf[G4T] || conf[W93]);this[m7J](t4s,function(){var g9Z=U8kjl[213595];g9Z+=y4k;g9Z+=K4C;var g70=F1m;g70+=u6W;g70+=X73;g70+=v8V;var x1q=A10;x1q+=p3J;x1q+=v8V;conf[x1q][T0$](g70)[g9Z](function(){var D32="ecked";var s7z="Ch";var z0W=A10;z0W+=V8p;z0W+=s7z;z0W+=D32;if(this[z0W]){this[u5Y]=m9a;}});});return conf[d9J][s8C];},disable:function(conf){var T8S=Q45;T8S+=R9N;var Y62=N8B;Y62+=T4P;var K6m=G74;K6m+=n76;var q2G=A2L;q2G+=Q20;q2G+=S8e;conf[q2G][K6m](v$9)[Y62](T8S,m9a);},enable:function(conf){var i5M=b$U;i5M+=C43;var j9d=A2L;U8kjl.N$L();j9d+=y2E;conf[j9d][i5M](v$9)[X5b](p9i,p6n);},get:function(conf){var n1X="unse";var I8z="lectedV";var O9u="unselectedVa";var M2U="alue";var u_P=n1X;u_P+=I8z;u_P+=M2U;var m2l=O9u;m2l+=n8X;m2l+=U8kjl[213595];var el=conf[d9J][T0$](u12);if(el[G$8]){return el[s8C][X1M];}return conf[m2l] !== undefined?conf[u_P]:undefined;},set:function(conf,val){var p7f=b$U;p7f+=u6W;p7f+=n76;var z99=g_K;z99+=I2x;var Y5m=S4P;Y5m+=T4P;Y5m+=S8e;conf[Y5m][T0$](z99)[G5E](function(){var u1S="chec";var u$R="_preChecke";var V_i="_preChecked";var T11="_preCh";var B9g="ecke";var C8$=T11;C8$+=B9g;C8$+=n76;U8kjl.m_s();this[C8$]=p6n;if(this[X1M] == val){var f63=u$R;f63+=n76;this[u5Y]=m9a;this[f63]=m9a;}else {var E7f=u1S;E7f+=A3x;this[E7f]=p6n;this[V_i]=p6n;}});_triggerChange(conf[d9J][p7f](u12));},update:function(conf,options,append){var m7D="[val";var L6C="e=\"";var r0m="ilt";var Z99=F2j;Z99+=O8n;Z99+=e8G;Z99+=U8kjl[213595];var f2p=U8kjl[172460];f2p+=v8V;f2p+=v8V;f2p+=Q3A;var S4o=b4P;S4o+=A1j;var f4U=m7D;f4U+=e8G;f4U+=L6C;var J6e=M_j;J6e+=r0m;J6e+=B5D;var m5s=g_K;m5s+=I2x;var A$_=i89;A$_+=U8kjl[213595];A$_+=v8V;var currVal=radio[A$_](conf);radio[s9v](conf,options,append);var inputs=conf[d9J][T0$](m5s);U8kjl.N$L();radio[C04](conf,inputs[J6e](f4U + currVal + S4o)[G$8]?currVal:inputs[z0f](s8C)[f2p](Z99));}});var datetime=$[n5$](m9a,{},baseFieldType,{create:function(conf){var K4$='<input />';var y$R='keydown';var x4u='text';var d2O="ime";var F8U="date";var y0E="DateT";var P5B="Da";var Q9b="eId";var A$C="_closeFn";var n1C="DateTime library is require";var N1R="tim";var P2L="keyInput";var d5_="teTi";var Z0B=Z07;Z0B+=U8kjl[213595];var L1n=V71;L1n+=u6W;var x4H=F8U;x4H+=N1R;x4H+=U8kjl[213595];var T1f=F1m;T1f+=v9R;var U5H=h0z;U5H+=L1u;U5H+=V71;U5H+=m0X;var k7v=A10;U8kjl.N$L();k7v+=p3J;k7v+=v8V;var M2x=y0E;M2x+=d2O;var L2k=P5B;L2k+=d5_;L2k+=D3K;L2k+=U8kjl[213595];var V6Z=U8kjl[172460];V6Z+=v8V;V6Z+=v8V;V6Z+=Q3A;var N8v=F1m;N8v+=n76;var c66=k3b;c66+=Q9b;var K5g=U8kjl[213595];K5g+=p6l;var E$Y=U8kjl[172460];E$Y+=v8V;E$Y+=v8V;E$Y+=Q3A;conf[d9J]=$(K4$)[E$Y]($[K5g](m9a,{id:Editor[c66](conf[N8v]),type:x4u},conf[V6Z]));if(!DataTable$3[L2k]){var A31=n1C;A31+=n76;Editor[d3U](A31,s6I);}conf[w$b]=new DataTable$3[M2x](conf[k7v],$[n5$]({format:conf[U5H] || conf[z4z],i18n:this[T1f][x4H]},conf[G7a]));conf[A$C]=function(){var F$t=K4C;U8kjl.m_s();F$t+=F1m;F$t+=n76;F$t+=U8kjl[213595];conf[w$b][F$t]();};if(conf[P2L] === p6n){var k8x=V71;k8x+=u6W;conf[d9J][k8x](y$R,function(e){U8kjl.m_s();e[U4_]();});}this[L1n](Z0B,conf[A$C]);return conf[d9J][s8C];},destroy:function(conf){var j3l=g9E;j3l+=c6e;j3l+=n0H;j3l+=Q3A;var Y6t=w9v;Y6t+=U8kjl.P0a;U8kjl.N$L();Y6t+=h9_;Y6t+=u6W;var F6O=o2H;F6O+=E2D;F6O+=U8kjl[213595];F6O+=W9V;var D7y=E2n;D7y+=w5Z;this[Y$9](D7y,conf[F6O]);conf[d9J][Y$9](Y6t);conf[j3l][z8m]();},errorMessage:function(conf,msg){var X6I="errorMsg";var g3G=g9E;g3G+=c6e;g3G+=n0H;g3G+=Q3A;conf[g3G][X6I](msg);},get:function(conf){var Q5K="moment";var s4C="pick";var s2k="wir";var h12="wi";var o9I="omentStri";var x1d="For";var T6D="reFormat";var p$U=s2k;p$U+=U8kjl[213595];p$U+=x1d;p$U+=g_M;var x0b=D3K;x0b+=o9I;x0b+=U8kjl[241984];var k$4=h12;k$4+=T6D;var Y50=A10;Y50+=s4C;Y50+=U8kjl[213595];Y50+=Q3A;var val=conf[d9J][D0c]();var inst=conf[Y50][U8kjl.P3i];var moment=window[Q5K];return val && conf[k$4] && moment?moment(val,inst[z4z],inst[i6A],inst[x0b])[z4z](conf[p$U]):val;},maxDate:function(conf,max){var r5N="icker";var l5a=D3K;l5a+=U8kjl[172460];l5a+=u$5;var G0j=A10;G0j+=T4P;G0j+=r5N;conf[G0j][l5a](max);},minDate:function(conf,min){var Z$m="min";U8kjl.m_s();conf[w$b][Z$m](min);},owns:function(conf,node){var u0X="wn";var g7P=V71;g7P+=u0X;g7P+=X_X;var I81=E_X;I81+=U8kjl.P3i;I81+=Y6z;I81+=B5D;return conf[I81][g7P](node);},set:function(conf,val){var B8O="wireFormat";var U40="mom";var T37="momentStrict";var y_U=S4P;y_U+=T4P;y_U+=e8G;y_U+=v8V;var W6O=O$N;W6O+=O$N;var i4m=g_K;i4m+=H4s;i4m+=W6z;var z9k=F2j;z9k+=U8kjl[172460];z9k+=r6s;var q3F=E_X;q3F+=p59;q3F+=U8kjl[213595];q3F+=Q3A;var u1r=U40;u1r+=W_f;var inst=conf[w$b][U8kjl.P3i];var moment=window[u1r];conf[q3F][z9k](typeof val === k57 && val && val[i4m](W6O) !== s8C && conf[B8O] && moment?moment(val,conf[B8O],inst[i6A],inst[T37])[z4z](inst[z4z]):val);_triggerChange(conf[y_U]);}});var upload=$[n5$](m9a,{},baseFieldType,{canReturnSubmit:function(conf,node){return p6n;},create:function(conf){var editor=this;var container=_commonUpload(editor,conf,function(val){var K4P='postUpload';var N7i="nam";var Z$4=N7i;Z$4+=U8kjl[213595];var V7O=A10;V7O+=x7Z;V7O+=K1G;var B3u=X_X;B3u+=U8kjl[213595];B3u+=v8V;upload[B3u][Y$N](editor,conf,val[s8C]);editor[V7O](K4P,[conf[Z$4],val[s8C]]);});U8kjl.m_s();return container;},disable:function(conf){var u0t=p3J;u0t+=v8V;var I$O=M_j;I$O+=F1m;U8kjl.m_s();I$O+=u6W;I$O+=n76;conf[d9J][I$O](u0t)[X5b](p9i,m9a);conf[B4F]=p6n;},enable:function(conf){var f5L=y_c;f5L+=s9C;f5L+=r6s;f5L+=g6d;var J0M=y6A;J0M+=H5v;J0M+=g6d;var X2Z=T4P;X2Z+=Q3A;X2Z+=V71;X2Z+=T4P;var L8k=M_j;L8k+=F1m;L8k+=u6W;L8k+=n76;var G2G=v5d;G2G+=v8V;conf[G2G][L8k](v$9)[X2Z](J0M,p6n);conf[f5L]=m9a;},get:function(conf){U8kjl.N$L();return conf[o2f];},set:function(conf,val){var y7O="div.clearValue ";var T8W="span>";var f38="div.render";var w8q="upload.";var X1H="Cle";var s9i="utton";var z66='No file';var m_k="ar";var A8$='noClear';var n7H="erHandler";var b3J="clearText";var c_7=W9O;c_7+=O8n;var s6g=w8q;s6g+=z9L;var E_U=J3D;E_U+=n7H;var n4s=F1m;n4s+=u6W;n4s+=T4P;n4s+=S8e;var v2C=M_j;v2C+=g_K;v2C+=n76;var a8Q=A2L;a8Q+=l8F;a8Q+=v8V;var T2s=y7O;T2s+=s9C;T2s+=s9i;var c4S=n76;c4S+=F1m;c4S+=z3M;c4S+=o41;var C1D=A10;C1D+=g_K;C1D+=T4P;C1D+=S8e;var C8b=A10;C8b+=F2j;C8b+=O8n;conf[C8b]=val;conf[d9J][D0c](M9P);var container=conf[C1D];if(conf[c4S]){var t_5=A10;t_5+=F2j;t_5+=O8n;var k7D=f38;k7D+=g6d;var c25=M_j;c25+=F1m;c25+=u6W;c25+=n76;var rendered=container[c25](k7D);if(conf[t_5]){rendered[q2y](conf[h0z](conf[o2f]));}else {var C6U=T5A;C6U+=j7K;C6U+=T8W;rendered[s6G]()[c_D](u$$ + (conf[o$K] || z66) + C6U);}}var button=container[T0$](T2s);if(val && conf[b3J]){var f4i=g8Z;f4i+=Q$x;f4i+=L93;button[q2y](conf[b3J]);container[f4i](A8$);}else {var r1O=u6W;r1O+=V71;r1O+=X1H;r1O+=m_k;container[t00](r1O);}conf[a8Q][v2C](n4s)[E_U](s6g,[conf[c_7]]);}});var uploadMany=$[b4W](m9a,{},baseFieldType,{_showHide:function(conf){var D43="limit";var d4w="tLef";var i6x="_li";var U0e='div.limitHide';var K7F=A10;K7F+=r6p;K7F+=r6s;var T3Y=i6x;T3Y+=d0Y;T3Y+=d4w;T3Y+=v8V;var f3b=u6W;f3b+=V71;f3b+=u6W;f3b+=U8kjl[213595];var a8z=g2Y;a8z+=d0Y;a8z+=v8V;var M_O=A10;M_O+=D0c;var J28=U8kjl.P3i;J28+=X_X;J28+=X_X;var b2n=A10;b2n+=H6N;if(!conf[D43]){return;}conf[b2n][T0$](U0e)[J28](H5u,conf[M_O][G$8] >= conf[a8z]?f3b:O9F);conf[T3Y]=conf[D43] - conf[K7F][G$8];},canReturnSubmit:function(conf,node){U8kjl.m_s();return p6n;},create:function(conf){var d0b='button.remove';var g3c='multi';var T$h="_conta";var O_5=T$h;O_5+=g77;var g83=m5o;g83+=F1m;g83+=p59;var editor=this;var container=_commonUpload(editor,conf,function(val){var Y9g="oad";var k88="ostUpl";var C_V="cat";var u75=A10;u75+=F2j;u75+=U8kjl[172460];u75+=r6s;var x9l=u6W;x9l+=b6H;var Y8a=T4P;Y8a+=k88;Y8a+=Y9g;var U6u=F0C;U6u+=q7W;U6u+=v8V;var b7m=X_X;b7m+=U8kjl[213595];b7m+=v8V;var Z2H=U8kjl.P3i;Z2H+=V71;Z2H+=u6W;Z2H+=C_V;var S43=A10;S43+=F2j;S43+=U8kjl[172460];S43+=r6s;U8kjl.N$L();var j_$=A10;j_$+=F2j;j_$+=O8n;conf[j_$]=conf[S43][Z2H](val);uploadMany[b7m][Y$N](editor,conf,conf[o2f]);editor[U6u](Y8a,[conf[x9l],conf[u75]]);},m9a);container[t00](g3c)[m7J](g83,d0b,function(e){var W7r="opP";var b98="led";var d7E='idx';var V_E="ropagation";var l0x=y_c;l0x+=s9C;l0x+=b98;var E5D=X_X;U8kjl.N$L();E5D+=v8V;E5D+=W7r;E5D+=V_E;e[E5D]();if(conf[l0x]){var w6J=W9O;w6J+=U8kjl[172460];w6J+=r6s;var O7l=w5Z;O7l+=v8V;var D7j=X_X;D7j+=T4P;D7j+=T4Y;D7j+=U8kjl[213595];var k41=n76;k41+=J60;k41+=U8kjl[172460];var idx=$(this)[k41](d7E);conf[o2f][D7j](idx,z3P);uploadMany[O7l][Y$N](editor,conf,conf[w6J]);}});conf[O_5]=container;return container;},disable:function(conf){var m_q=H$N;m_q+=e8G;m_q+=v8V;conf[d9J][T0$](m_q)[X5b](p9i,m9a);conf[B4F]=p6n;},enable:function(conf){var k1j="disabl";U8kjl.m_s();var y7t=k1j;y7t+=U8kjl[213595];y7t+=n76;var z0E=T4P;z0E+=Q3A;z0E+=c9N;var J5$=G74;J5$+=n76;var p_w=A10;p_w+=F1m;p_w+=u6W;p_w+=I2x;conf[p_w][J5$](v$9)[z0E](y7t,p6n);conf[B4F]=m9a;},get:function(conf){U8kjl.m_s();return conf[o2f];},set:function(conf,val){var o$j='upload.editor';var V23="ered";var Y1k="div.ren";var w78="an array as a value";var U1M="iggerHa";var H14='</span>';var H2z='No files';var T5_='<ul></ul>';var w3z="_showH";var f54="ndler";var x_o="Uploa";var S90="d collections must have ";var u3P=E7Q;u3P+=U1M;u3P+=f54;var Y1Z=w3z;Y1Z+=F1m;Y1Z+=L5Q;var A5B=y6A;A5B+=X_X;A5B+=l_V;A5B+=e5y;var D5L=A2L;D5L+=Q20;D5L+=S8e;var e20=A10;e20+=r6p;U8kjl.N$L();e20+=r6s;if(!val){val=[];}if(!Array[t1S](val)){var N77=x_o;N77+=S90;N77+=w78;throw new Error(N77);}conf[e20]=val;conf[D5L][D0c](M9P);var that=this;var container=conf[d9J];if(conf[A5B]){var e0L=r6s;e0L+=U8kjl[213595];e0L+=s0n;e0L+=Z8G;var s$r=U8kjl[213595];s$r+=D3K;s$r+=H8K;s$r+=K7c;var o9y=Y1k;o9y+=n76;o9y+=V23;var s7P=M_j;s7P+=F1m;s7P+=u6W;s7P+=n76;var rendered=container[s7P](o9y)[s$r]();if(val[e0L]){var l4P=g_f;l4P+=e7s;var list_1=$(T5_)[L8D](rendered);$[l4P](val,function(i,file){var e5f='</li>';var d3T=' <button class="';var F_x="ta-idx=\"";var F_Z='">&times;</button>';var H2a='<li>';var N8L="\" da";U8kjl.m_s();var display=conf[h0z](file,i);if(display !== d1w){var n$O=x5y;n$O+=B3O;n$O+=N8L;n$O+=F_x;list_1[c_D](H2a + display + d3T + that[g5t][e4C][M4q] + n$O + i + F_Z + e5f);}});}else {rendered[c_D](u$$ + (conf[o$K] || H2z) + H14);}}uploadMany[Y1Z](conf);conf[d9J][T0$](v$9)[u3P](o$j,[conf[o2f]]);}});var datatable=$[q_I](m9a,{},baseFieldType,{_addOptions:function(conf,options,append){var z9j="clea";var l13="aw";var H2j=n76;H2j+=Q3A;H2j+=l13;var V5J=Q3A;V5J+=x2A;if(append === void s8C){append=p6n;}var dt=conf[s$q];if(!append){var R4F=z9j;R4F+=Q3A;dt[R4F]();}U8kjl.m_s();dt[V5J][s37](options)[H2j]();},_jumpToFirst:function(conf){var T75="ied";var O0V='number';var f85='applied';var v7z="page";var Y7M="exOf";var G7N="floor";var O6A=g_K;O6A+=n76;O6A+=U8kjl[213595];O6A+=u$5;var b$l=U8kjl[172460];b$l+=N8H;b$l+=T75;var W$E=Q3A;W$E+=V71;U8kjl.N$L();W$E+=h9_;var idx=conf[s$q][W$E]({order:b$l,selected:m9a})[O6A]();var page=s8C;if(typeof idx === O0V){var A5F=c1x;A5F+=Y7M;var J7W=i11;J7W+=U8kjl[213595];J7W+=X_X;var J6E=n76;J6E+=v8V;var G5V=n76;G5V+=v8V;var pageLen=conf[G5V][v7z][H7P]()[G$8];var pos=conf[J6E][i8i]({order:f85})[J7W]()[A5F](idx);page=pageLen > s8C?Math[G7N](pos / pageLen):s8C;}conf[s$q][v7z](page)[a2V](p6n);},create:function(conf){var O3f=U8kjl;var e$1="idt";var p1s="ataT";var m37="ser";var x3V='<div>';var K2$="iBtp";var H7s='<tfoot>';var Z8E="atatable_info\">";var h8S="Lab";var x8Y='init.dt';var u3E='<table>';var I9c="onf";var g8i='100%';var S6F="eClass";var l1a="<div clas";var Q4a="Com";var q4f="-select";O3f.m_s();var w4W="s=\"DTE_Field_Type_d";var s_d='<tr>';var s8y="air";var A8O=c9N;A8O+=v8V;A8O+=G9$;var f_N=e8G;f_N+=m37;f_N+=q4f;var s5D=U8kjl.P3i;s5D+=I9c;s5D+=Z26;var q45=X_X;q45+=p3T;q45+=J81;var V0s=l3u;V0s+=g_f;V0s+=o0q;V0s+=K4C;var k3A=M_j;k3A+=K2$;var J57=h8S;J57+=U8kjl[213595];J57+=r6s;var d84=U8kjl[213595];d84+=u$5;d84+=v8V;d84+=r_h;var M7T=Y8A;M7T+=p1s;M7T+=y8i;M7T+=J81;var m5i=V71;m5i+=u6W;var S3Q=h9_;S3Q+=e$1;S3Q+=K4C;var l6J=q4L;l6J+=S6F;var x68=l1a;x68+=w4W;x68+=Z8E;var l9B=D0c;l9B+=N8x;var l6D=c9N;l6D+=u1t;l6D+=m4k;l6D+=s8y;var _this=this;conf[l6D]=$[n5$]({label:V2z,value:l9B},conf[t$e]);var table=$(u3E);var container=$(x3V)[c_D](table);var side=$(x68);if(conf[J4o]){var w6j=a$G;w6j+=M7i;w6j+=C43;var U$d=U8kjl[172460];U$d+=T4P;U$d+=M0G;U$d+=n76;$(H7s)[U$d](Array[t1S](conf[J4o])?$(s_d)[w6j]($[J5v](conf[J4o],function(str){var M3r=T5A;M3r+=Z8G;M3r+=c4a;return $(M3r)[q2y](str);})):conf[J4o])[L8D](table);}var dt=table[t00](datatable[l6J])[S3Q](g8i)[m5i](x8Y,function(e,settings){var l4s="les_filt";var A09="iv.dataTab";var i5f='div.dt-buttons';var G7L='div.dataTables_info';var J5D=M_j;J5D+=F1m;J5D+=C43;var U3S=U8kjl[172460];U3S+=Y89;U3S+=U8kjl[213595];U3S+=C43;var e$t=M_j;e$t+=g_K;e$t+=n76;var e2s=n76;e2s+=A09;e2s+=l4s;e2s+=B5D;var f4$=x1i;f4$+=u6W;f4$+=U8kjl.x2x;f4$+=g77;var api=new DataTable$3[x23](settings);var containerNode=$(api[x8K](undefined)[f4$]());DataTable$3[E1q][i5I](api);side[c_D](containerNode[T0$](e2s))[c_D](containerNode[e$t](i5f))[U3S](containerNode[J5D](G7L));})[M7T]($[d84]({buttons:[],columns:[{data:conf[t$e][C2S],title:J57}],deferRender:m9a,dom:k3A,language:{paginate:{next:Z5q,previous:g2V},search:M9P,searchPlaceholder:V0s},lengthChange:p6n,select:{style:conf[a17]?x7f:q45}},conf[s5D]));this[m7J](t4s,function(){var B4o="sear";var Y6M="earch";var Q_K=r2t;Q_K+=U8kjl[88046];Q_K+=l0q;Q_K+=v8V;var V2$=B4o;O3f.N$L();V2$+=e7s;if(dt[V2$]()){var p57=X_X;p57+=Y6M;dt[p57](M9P)[a2V]();}dt[E05][Q_K]();});dt[m7J](f_N,function(){var B2b=r74;B2b+=Q3t;O3f.N$L();B2b+=Q3A;_triggerChange($(conf[s$q][x8K]()[B2b]()));});if(conf[z9L]){var x_W=J33;x_W+=X7B;x_W+=Q4a;x_W+=t9I;var j5x=V71;j5x+=u6W;var z1T=v8F;z1T+=w7H;z1T+=Q3A;conf[z9L][x8K](dt);conf[z1T][j5x](x_W,function(e,json,data,action){var n72="aSource";var B$U='refresh';var p5g=v8F;O3f.m_s();p5g+=v8V;var A37=j_K;A37+=U8kjl[213595];A37+=a0M;if(action === A37){var m$5=r6s;m$5+=U8kjl[213595];m$5+=u6W;m$5+=P_k;var Q96=c_Q;Q96+=v8V;Q96+=U8kjl[172460];var _loop_1=function(dp){var Z3N="elec";var B1v=X_X;O3f.m_s();B1v+=Z3N;B1v+=v8V;dt[i8i](function(idx,d){O3f.m_s();return d === dp;})[B1v]();};for(var _i=s8C,_a=json[Q96];_i < _a[m$5];_i++){var dp=_a[_i];_loop_1(dp);}}else if(action === p5g || action === w2z){var r$0=A10;r$0+=n76;r$0+=J60;r$0+=n72;_this[r$0](B$U);}datatable[l1E](conf);});}conf[s$q]=dt;datatable[s9v](conf,conf[A8O] || []);return {input:container,side:side};},disable:function(conf){var T34=P0z;T34+=e5y;var t_t=t7S;t_t+=L80;var A2I=n76;A2I+=v8V;var k$V=U8kjl[172460];k$V+=T4P;k$V+=F1m;var B1l=E9x;B1l+=K7c;B1l+=J81;var C0U=n76;C0U+=v8V;conf[C0U][E1q][B1l](k$V);conf[A2I][y9M]()[t_t]()[e4X](T34,D5T);},dt:function(conf){return conf[s$q];},enable:function(conf){var d5P="gle";var R_V="ipl";var a6k=b8y;a6k+=V71;a6k+=p59;var w3F=n76;w3F+=v8V;var x6U=q2H;x6U+=d5P;var p8C=S$O;p8C+=R_V;p8C+=U8kjl[213595];var i5Q=E9x;i5Q+=K8N;conf[s$q][E1q][i5Q](conf[p8C]?x7f:x6U);conf[w3F][y9M]()[H6N]()[e4X](H5u,a6k);},get:function(conf){var N$g="uc";var k0N="epa";var b5k="ator";var U9K="sep";var M_e="oArra";var r5C="sPair";var E_F=X_X;E_F+=k0N;E_F+=Q3A;E_F+=b5k;var u_8=U8kjl[88046];u_8+=V71;u_8+=F1m;u_8+=u6W;var x0o=U9K;x0o+=U8kjl[172460];x0o+=d46;x0o+=Q3A;var w8Z=v8V;w8Z+=M_e;w8Z+=K7c;var g4R=v_M;U8kjl.m_s();g4R+=F1m;g4R+=m7J;g4R+=r5C;var X9o=T4P;X9o+=r6s;X9o+=N$g;X9o+=Y6z;var rows=conf[s$q][i8i]({selected:m9a})[g2G]()[X9o](conf[g4R][m4E])[w8Z]();return conf[x0o] || !conf[a17]?rows[u_8](conf[E_F] || O49):rows;},set:function(conf,val,localUpdate){var S2h="lit";var P_d="isA";var N3k="optionsPai";var j3f="deselect";var F$Z="ntainer";var k4N=B$m;k4N+=P3r;var S4H=n76;S4H+=v8V;var h4b=n76;h4b+=v8V;var A1h=t66;A1h+=U8kjl[213595];var q3R=N3k;q3R+=Q3A;var I_P=P_d;I_P+=X2d;I_P+=K7c;if(conf[a17] && conf[E2t] && !Array[t1S](val)){var K8s=w5Z;K8s+=i1C;K8s+=d46;K8s+=Q3A;var K3U=X_X;K3U+=T4P;K3U+=S2h;val=typeof val === k57?val[K3U](conf[K8s]):[];}else if(!Array[I_P](val)){val=[val];}var valueFn=dataGet(conf[q3R][A1h]);U8kjl.N$L();conf[h4b][i8i]({selected:m9a})[j3f]();conf[S4H][k4N](function(idx,data,node){var c1A=i11;c1A+=W6z;return val[c1A](valueFn(data)) !== -z3P;})[E1q]();datatable[l1E](conf);if(!localUpdate){var F8q=x1i;F8q+=F$Z;var P$w=n76;P$w+=v8V;_triggerChange($(conf[P$w][x8K]()[F8q]()));}},tableClass:M9P,update:function(conf,options,append){var V49="taine";var z4y="addOpt";var p2T=f4l;p2T+=V49;p2T+=Q3A;var x4z=n76;x4z+=v8V;var u1l=A10;u1l+=z4y;u1l+=G9$;datatable[u1l](conf,options,append);var lastSet=conf[n9d];if(lastSet !== undefined){var r_N=X_X;r_N+=U8kjl[213595];r_N+=v8V;datatable[r_N](conf,lastSet,m9a);}_triggerChange($(conf[x4z][x8K]()[p2T]()));}});var defaults={className:M9P,compare:d1w,data:M9P,def:M9P,entityDecode:m9a,fieldInfo:M9P,getFormatter:d1w,id:M9P,label:M9P,labelInfo:M9P,message:M9P,multiEditable:m9a,name:d1w,nullDefault:p6n,setFormatter:d1w,submit:m9a,type:i4i};var DataTable$2=$[U8kjl.B9_][C7O];var Field=(function(){var x5Z=U8kjl;var e8t="Inf";var O9N="ditable";var a11="nullDefa";var k9m="totype";var j18="host";var U7T="_err";var K2g="inputC";var b0u="rototype";var y_W="ontrol";var q8k="multiId";var q52="ocessing";var a_G="_typeF";var O3q="prototy";var K7_="multi";var e5T="ype";var j2V="_msg";var F$g="submittabl";var n8j="_format";var V3R="ultiIds";var u4f="ul";var q6O="cu";var x9D="ot";var D3N="typ";var F2H="slideDown";var d58="disabled";var B7o="tiR";var R8y="protot";var I4N="ultiValue";var e1u="oto";var O1r="labelInfo";var K4k="sab";var Q0a="class";var M2B="ssa";var m9K="multiE";var W62="multiValue";var E6L="rNode";var f3z="_ms";var f8I="multiReturn";var z$1="hown";var k9q="abe";var y6u="otyp";var M15="ultiInfo";var x3T="mpar";var e3Y="multiEditable";var b46="ototype";var S6s="atters";var u4H="yp";var p6k="_multiValueCheck";var k3N="otype";var v5J="isM";var a68="defaults";var m5F="multiV";var x3u="multiIds";var D_y="multiInfo";var U_h=e4C;U_h+=S6s;var t2a=A10;t2a+=M_j;t2a+=V71;t2a+=m0X;var V8j=U7T;V8j+=V71;V8j+=E6L;var t8G=E6s;t8G+=x9D;t8G+=e5T;var L32=a_G;L32+=u6W;var Y3h=T4P;Y3h+=b0u;var P1c=f3z;P1c+=i89;var t6p=T4P;t6p+=B$m;t6p+=v8V;t6p+=k3N;var P71=F$g;P71+=U8kjl[213595];var c1L=E6s;c1L+=y6u;c1L+=U8kjl[213595];var p0g=T4P;p0g+=Q3A;p0g+=b46;var l3N=D3K;l3N+=M15;l3N+=l3u;l3N+=z$1;var z5O=D3K;z5O+=V3R;var x5I=m9K;x5I+=O9N;var M_F=N8B;M_F+=v8V;M_F+=K8J;M_F+=M7i;var q3d=N8B;q3d+=w7H;q3d+=D3N;q3d+=U8kjl[213595];var O2w=x1i;O2w+=x3T;O2w+=U8kjl[213595];var w_P=F2j;w_P+=U8kjl[172460];w_P+=r6s;var Z8V=L$F;Z8V+=U8kjl[557061];Z8V+=U8kjl[213595];var I36=O3q;I36+=T4P;I36+=U8kjl[213595];var c6r=K8L;c6r+=h9_;var l4R=R8y;l4R+=K7c;l4R+=M7i;var J7M=T7R;J7M+=q52;var h5y=a11;h5y+=u0x;var v2q=T7R;v2q+=b46;var U0d=N_0;U0d+=v8V;U0d+=u4H;x5Z.m_s();U0d+=U8kjl[213595];var p2w=N_0;p2w+=d5b;var b_1=D3K;b_1+=u4f;b_1+=B7o;b_1+=y_g;var v66=T7R;v66+=e1u;v66+=a0Y;v66+=M7i;var T3K=E6s;T3K+=k3N;var d8E=N8J;d8E+=M2B;d8E+=b2j;var X4e=N8B;X4e+=w7H;X4e+=d5b;var u9X=T4P;u9X+=Q3A;u9X+=V71;u9X+=k9m;var d$8=r6s;d$8+=k9q;d$8+=r6s;var r2H=O3q;r2H+=T4P;r2H+=U8kjl[213595];var Y9m=k1D;Y9m+=q6O;Y9m+=X_X;var E7X=T4P;E7X+=B$m;E7X+=v8V;E7X+=k3N;var a4_=F1m;a4_+=y2E;var s_M=T4P;s_M+=b0u;var q63=v5J;q63+=I4N;var z9E=M_j;z9E+=B7X;z9E+=e8t;z9E+=V71;var Y7r=z5U;Y7r+=U8kjl[172460];Y7r+=b8y;Y7r+=U8kjl[213595];var Y9G=R8y;Y9G+=K7c;Y9G+=T4P;Y9G+=U8kjl[213595];var N4S=T7R;N4S+=V71;N4S+=k9m;var I1D=n76;I1D+=F1m;I1D+=K4k;I1D+=J81;var X2U=n76;X2U+=U8kjl[213595];X2U+=M_j;function Field(options,classes,host){var p_i="<div data-dte-";var w8X="<label d";var R5G="iv d";var d0x="tl";var k9G='"><span></span></div>';var o18="n>";var X3F="=\"input-control\" class=\"";var v_F='<div data-dte-e="msg-error" class="';var g4E="put\" class=\"";var A9M="multi-va";var U_K="cessin";var s1m='" for="';var g6r="/div>";var V$_="/di";var Z62="</spa";var h2q="ssNa";var v3A="\"><";var G7O='<div data-dte-e="field-processing" class="';var q8P='<div data-dte-e="msg-message" class="';var f9B="afeId";var X_E="nameP";var D4J='<div data-dte-e="msg-label" class="';var g_I="<div data-dte-e=\"m";var C$d='msg-error';var B5H="ults";var t_N="rea";var Y_l="eldTy";var X4y="defa";var w5b="fieldTypes";var L1o="refix";var S_S='msg-message';var p4R="msg-mess";var Q1u="Prefi";var r3g="-con";var M$O="ata-dte-e=\"label\" class=\"";var N60="-dte-e=\"msg-multi\" class=\"";var b4f="msg-m";var q3z='Error adding field - unknown field type ';var Q9a='input-control';var M8m="data-dte-e=\"msg-info\"";var S62="valToDat";var x4V='msg-info';var Q7q="sg-";var N86='msg-label';var o4e="ulti-value\" class=";var g0C='<span data-dte-e="multi-info" class="';var B1u="internalI18";var r7Y=" class=\"";var x$J="a-dte-e=\"in";var i0B="fieldInf";var v5f="store";var P7E="<div dat";var A7X="si";var u6s=o0o;u6s+=K1d;u6s+=F1m;var O8w=m4J;O8w+=O$N;O8w+=e1J;var u2G=b4f;u2G+=u4f;u2G+=l5_;var f4X=A9M;f4X+=D8W;var l8$=D3K;l8$+=Q7q;l8$+=z2F;l8$+=Q7t;var a1H=U8kjl[172460];a1H+=T4P;a1H+=T9T;var U4k=D5m;U4k+=r3g;U4k+=v8V;U4k+=i53;var Z5Z=p4R;Z5Z+=I9o;var l8k=n76;l8k+=V71;l8k+=D3K;var f8N=X_X;f8N+=R8j;var W41=U8kjl.P3i;W41+=t_N;W41+=v8V;W41+=U8kjl[213595];var V8k=T7R;V8k+=V71;V8k+=U_K;V8k+=i89;var B0E=q4Z;B0E+=y6A;B0E+=Y5t;var j0u=i0B;j0u+=V71;var n3k=b4P;n3k+=c4a;var m81=h5K;m81+=M8m;m81+=x5y;m81+=M1j;var C$A=T5A;C$A+=g6r;var n$w=D3K;n$w+=I6h;n$w+=x9q;var o4Q=b4P;o4Q+=c4a;var I_f=K07;x5Z.m_s();I_f+=q4Z;I_f+=Y4e;var L$1=m7n;L$1+=w7H;L$1+=Q3A;L$1+=U8kjl[213595];var n2f=b4P;n2f+=c4a;var x74=S$O;x74+=F1m;x74+=z60;x74+=v5f;var n4r=Z$t;n4r+=R5G;n4r+=l2W;n4r+=N60;var P2r=T5A;P2r+=V$_;P2r+=F2j;P2r+=c4a;var Q1U=Z62;Q1U+=o18;var x$s=b4P;x$s+=c4a;var P4B=v8V;P4B+=F1m;P4B+=d0x;P4B+=U8kjl[213595];var z5I=m5F;z5I+=U8kjl[172460];z5I+=D8W;var U1g=g_I;U1g+=o4e;U1g+=b4P;var e70=v3A;e70+=j7K;e70+=y6A;e70+=Y5t;var X87=K2g;X87+=y_W;var n63=p_i;n63+=U8kjl[213595];n63+=X3F;var D4v=b4P;D4v+=c4a;var l81=P7E;l81+=x$J;l81+=g4E;var i9W=T5A;i9W+=V$_;i9W+=F2j;i9W+=c4a;var z1i=b4P;z1i+=c4a;var b0b=z2F;b0b+=Q7t;var G5S=F1m;G5S+=n76;var B_b=X_X;B_b+=f9B;var j_5=w8X;j_5+=M$O;var k90=U8kjl.P3i;k90+=z2F;k90+=h2q;k90+=N8J;var x_A=X_E;x_A+=L1o;var g8P=d5b;g8P+=Q1u;g8P+=u$5;var O8T=Z$t;O8T+=l1W;O8T+=r7Y;var O9$=U8kjl[557061];O9$+=U8kjl[172460];var V7J=S62;V7J+=U8kjl[172460];var f96=n76;f96+=U8kjl[172460];f96+=v8V;f96+=U8kjl[172460];var K_0=F1m;K_0+=n76;var E0_=a0Y;E0_+=T4P;E0_+=U8kjl[213595];var f4F=b$U;f4F+=Y_l;f4F+=o_u;var C41=X4y;C41+=B5H;var U2h=U8kjl[213595];U2h+=p6l;var B1q=B1u;B1q+=u6W;var that=this;var multiI18n=host[B1q]()[K7_];var opts=$[U2h](m9a,{},Field[C41],options);if(!Editor[w5b][opts[d5b]]){var J_9=v8V;J_9+=e5T;throw new Error(q3z + opts[J_9]);}this[X_X]={classes:classes,host:host,multiIds:[],multiValue:p6n,multiValues:{},name:opts[h8i],opts:opts,processing:p6n,type:Editor[f4F][opts[E0_]]};if(!opts[K_0]){var r2d=u6W;r2d+=U8kjl[172460];r2d+=D3K;r2d+=U8kjl[213595];var C_4=z1N;C_4+=A8f;C_4+=M4C;C_4+=A10;var E8E=F1m;E8E+=n76;opts[E8E]=C_4 + opts[r2d];}if(opts[f96] === M9P){var Z9Q=u6W;Z9Q+=U8kjl[172460];Z9Q+=D3K;Z9Q+=U8kjl[213595];var R7o=U8kjl[557061];R7o+=U8kjl[172460];opts[R7o]=opts[Z9Q];}this[w4D]=function(d){var X5p='editor';var l5m=U8kjl[557061];l5m+=U8kjl[172460];return dataGet(opts[l5m])(d,X5p);};this[V7J]=dataSet(opts[O9$]);var template=$(O8T + classes[y6N] + X$d + classes[g8P] + opts[d5b] + X$d + classes[x_A] + opts[h8i] + X$d + opts[k90] + n4e + j_5 + classes[C2S] + s1m + Editor[B_b](opts[G5S]) + n4e + opts[b0b] + D4J + classes[N86] + z1i + opts[O1r] + i9W + Y$E + l81 + classes[D5m] + D4v + n63 + classes[X87] + e70 + U1g + classes[z5I] + n4e + multiI18n[P4B] + g0C + classes[D_y] + x$s + multiI18n[H7P] + Q1U + P2r + n4r + classes[x74] + n2f + multiI18n[L$1] + R5$ + v_F + classes[C$d] + I_f + q8P + classes[S_S] + o4Q + opts[n$w] + C$A + m81 + classes[x4V] + n3k + opts[j0u] + R5$ + B0E + G7O + classes[V8k] + k9G + R5$);var input=this[X2r](W41,opts);var side=d1w;if(input && input[f8N]){var J4R=F1m;J4R+=u6W;J4R+=T4P;J4R+=S8e;var q0_=A7X;q0_+=n76;q0_+=U8kjl[213595];side=input[q0_];input=input[J4R];}if(input !== d1w){el(Q9a,template)[h3D](input);}else {var B9f=u6W;B9f+=m7J;B9f+=U8kjl[213595];template[e4X](H5u,B9f);}this[l8k]={container:template,fieldError:el(C$d,template),fieldInfo:el(x4V,template),fieldMessage:el(Z5Z,template),inputControl:el(U4k,template),label:el(V2z,template)[a1H](side),labelInfo:el(l8$,template),multi:el(f4X,template),multiInfo:el(R0O,template),multiReturn:el(u2G,template),processing:el(O8w,template)};this[S5o][u6s][m7J](L4b,function(){var A$f="tiEditable";var z_T=v8V;z_T+=K7c;z_T+=T4P;z_T+=U8kjl[213595];var w1H=m2L;w1H+=A$f;var a1m=c9N;a1m+=v8V;a1m+=X_X;if(that[X_X][a1m][w1H] && !template[F9p](classes[d58]) && opts[z_T] !== f47){that[D0c](M9P);that[K$f]();}});this[S5o][f8I][m7J](L4b,function(){var F$P="Resto";var p9D=K7_;p9D+=F$P;p9D+=n4W;x5Z.N$L();that[p9D]();});$[G5E](this[X_X][d5b],function(name,fn){if(typeof fn === U8kjl[517813] && that[name] === undefined){that[name]=function(){x5Z.m_s();var p4H=E2Q;p4H+=F1m;p4H+=U8kjl.P3i;p4H+=U8kjl[213595];var Z1V=R8y;Z1V+=e5T;var args=Array[Z1V][p4H][Y$N](arguments);args[Z86](name);var ret=that[X2r][X5_](that,args);return ret === undefined?that:ret;};}});}Field[U08][X2U]=function(set){var n2g="ault";var y7L='default';var opts=this[X_X][G7a];x5Z.m_s();if(set === undefined){var H90=m8S;H90+=S47;var T$N=n76;T$N+=U8kjl[213595];T$N+=M_j;var G7r=h79;G7r+=n2g;var def=opts[G7r] !== undefined?opts[y7L]:opts[T$N];return typeof def === H90?def():def;}opts[h79]=set;return this;};Field[U08][I1D]=function(){var G4G=Q45;G4G+=S03;var M7K=r74;x5Z.m_s();M7K+=F1m;M7K+=G40;M7K+=Q3A;var q5m=n76;q5m+=V71;q5m+=D3K;this[q5m][M7K][t00](this[X_X][g5t][d58]);this[X2r](G4G);return this;};Field[N4S][v3$]=function(){var j5t="bo";var n3b=U8kjl.P3i;n3b+=X_X;n3b+=X_X;var y1P=O1C;y1P+=i89;y1P+=v8V;y1P+=K4C;var M7E=j5t;M7E+=n76;M7E+=K7c;var u5p=i1C;u5p+=n4W;u5p+=u6W;u5p+=k65;var container=this[S5o][H6N];return container[u5p](M7E)[y1P] && container[n3b](H5u) !== D5T?m9a:p6n;};Field[Y9G][Y7r]=function(toggle){var z3r=u_V;z3r+=U8kjl[213595];var C1f=o93;C1f+=K7c;C1f+=M7i;C1f+=W9V;var K$H=y6A;K$H+=H5v;K$H+=g6d;var w11=v_y;w11+=K0I;var b13=n76;b13+=V71;b13+=D3K;if(toggle === void s8C){toggle=m9a;}if(toggle === p6n){var d1q=n76;d1q+=F1m;d1q+=h40;d1q+=S03;return this[d1q]();}this[b13][H6N][W5i](this[X_X][w11][K$H]);this[C1f](z3r);return this;};Field[U08][u8K]=function(){var r2M="onta";x5Z.m_s();var l_8="isable";var N6A="ner";var r7H=n76;r7H+=l_8;r7H+=n76;var T6H=Q0a;T6H+=I6h;var P98=U8kjl.P3i;P98+=r2M;P98+=F1m;P98+=N6A;return this[S5o][P98][F9p](this[X_X][T6H][r7H]) === p6n;};Field[U08][d3U]=function(msg,fn){var s2C="fieldEr";var s0t='errorMessage';var u1O=s2C;u1O+=b05;var g2Z=A10;g2Z+=a0Y;g2Z+=M7i;g2Z+=W9V;var a2g=h1u;a2g+=X_X;a2g+=X_X;a2g+=I6h;var classes=this[X_X][a2g];if(msg){var m6K=H8a;m6K+=Q3A;this[S5o][H6N][t00](classes[m6K]);}else {var i_0=t7S;i_0+=L80;var f6i=U8kjl.P0a;f6i+=D3K;this[f6i][i_0][W5i](classes[d3U]);}this[g2Z](s0t,msg);return this[j2V](this[S5o][u1O],msg,fn);};Field[U08][z9E]=function(msg){var g3k="Info";x5Z.N$L();var Y05=b$U;Y05+=W5Z;Y05+=g3k;return this[j2V](this[S5o][Y05],msg);};Field[U08][q63]=function(){var W53="iId";var g$k=O1C;g$k+=X8J;g$k+=K4C;var v63=o0o;v63+=K1d;v63+=W53;v63+=X_X;var O3O=S$O;O3O+=a09;return this[X_X][O3O] && this[X_X][v63][g$k] !== z3P;};Field[s_M][r9M]=function(){var f$b=U8kjl[213595];f$b+=Q3A;f$b+=Q3A;f$b+=U$E;x5Z.N$L();var f0A=Q0a;f0A+=I6h;var a52=U1i;a52+=t9p;a52+=r6s;a52+=Q8f;var Z4P=n76;Z4P+=Q3S;return this[Z4P][H6N][a52](this[X_X][f0A][f$b]);};Field[U08][a4_]=function(){var J3I="elect, textarea";var J4s="nput, s";var W$b="_type";var a$l=F1m;x5Z.N$L();a$l+=J4s;a$l+=J3I;var l7n=W$b;l7n+=W9V;return this[X_X][d5b][D5m]?this[l7n](v$9):$(a$l,this[S5o][H6N]);};Field[E7X][Y9m]=function(){x5Z.N$L();var F9L='input, select, textarea';if(this[X_X][d5b][K$f]){this[X2r](G_V);}else {$(F9L,this[S5o][H6N])[K$f]();}return this;};Field[U08][A5X]=function(){var F3n="getFormatter";var o6h="isMultiValu";var j0U=i89;j0U+=U8kjl[213595];j0U+=v8V;var C_r=A10;C_r+=k1D;C_r+=v5Q;C_r+=J60;var l0z=o6h;x5Z.m_s();l0z+=U8kjl[213595];if(this[l0z]()){return undefined;}return this[C_r](this[X2r](j0U),this[X_X][G7a][F3n]);};Field[r2H][V20]=function(animate){var d1A="slideUp";var r7l=M_j;r7l+=u6W;var el=this[S5o][H6N];if(animate === undefined){animate=m9a;}if(this[X_X][j18][h0z]() && animate && $[r7l][d1A]){el[d1A]();}else {var f0q=u6W;f0q+=V71;f0q+=u6W;f0q+=U8kjl[213595];var V5R=U8kjl.P3i;V5R+=X_X;V5R+=X_X;el[V5R](H5u,f0q);}return this;};Field[U08][d$8]=function(str){var U7P="tml";var i7j="lInfo";var P_a="detac";var R4z=a$G;R4z+=M7i;R4z+=C43;var S4e=K4C;S4e+=U7P;var w_N=P_a;w_N+=K4C;var Y4j=z2F;Y4j+=a6D;Y4j+=i7j;var n5l=n76;n5l+=V71;n5l+=D3K;var Y6w=n76;Y6w+=V71;Y6w+=D3K;var label=this[Y6w][C2S];var labelInfo=this[n5l][Y4j][w_N]();if(str === undefined){var e2C=K4C;e2C+=v8V;e2C+=D3K;e2C+=r6s;return label[e2C]();}label[S4e](str);label[R4z](labelInfo);return this;};Field[u9X][O1r]=function(msg){var T4z=A10;T4z+=D3K;T4z+=X_X;T4z+=i89;x5Z.m_s();return this[T4z](this[S5o][O1r],msg);};Field[X4e][d8E]=function(msg,fn){var U9Q="fieldMessage";var b1R=U8kjl.P0a;b1R+=D3K;return this[j2V](this[b1R][U9Q],msg,fn);};Field[T3K][L_8]=function(id){var F54="iIds";var b$y="isMultiVa";var Q4D="tiValue";var R9S=b$y;R9S+=D8W;var D6j=D3K;D6j+=u0x;D6j+=F54;var S9x=m2L;S9x+=Q4D;S9x+=X_X;var value;var multiValues=this[X_X][S9x];var multiIds=this[X_X][D6j];var isMultiValue=this[R9S]();if(id === undefined){var t$1=r6s;t$1+=U8kjl[213595];t$1+=u6W;t$1+=P_k;var R4x=r6p;R4x+=r6s;var fieldVal=this[R4x]();value={};for(var _i=s8C,multiIds_1=multiIds;_i < multiIds_1[t$1];_i++){var multiId=multiIds_1[_i];value[multiId]=isMultiValue?multiValues[multiId]:fieldVal;}}else if(isMultiValue){value=multiValues[id];}else {value=this[D0c]();}return value;};Field[v66][b_1]=function(){var E0l="_multiVal";var H6o="ueCheck";var F50=E0l;F50+=H6o;this[X_X][W62]=m9a;this[F50]();};Field[U08][o0v]=function(id,val,recalc){var P3g="iValues";var j5_=S$O;j5_+=P3g;if(recalc === void s8C){recalc=m9a;}var that=this;var multiValues=this[X_X][j5_];var multiIds=this[X_X][x3u];if(val === undefined){val=id;id=undefined;}var set=function(idSrc,valIn){x5Z.m_s();var A8C="Format";var Q5f=C04;Q5f+=A8C;Q5f+=u62;var J1e=c9N;J1e+=v8V;J1e+=X_X;if($[f9Q](idSrc,multiIds) === -z3P){multiIds[q3Y](idSrc);}multiValues[idSrc]=that[n8j](valIn,that[X_X][J1e][Q5f]);};if($[z9o](val) && id === undefined){$[G5E](val,function(idSrc,innerVal){x5Z.m_s();set(idSrc,innerVal);});}else if(id === undefined){$[G5E](multiIds,function(i,idSrc){set(idSrc,val);});}else {set(id,val);}this[X_X][W62]=m9a;if(recalc){this[p6k]();}return this;};Field[p2w][h8i]=function(){var a_y=u6W;a_y+=b6H;return this[X_X][G7a][a_y];};Field[U0d][y_n]=function(){return this[S5o][H6N][s8C];};Field[v2q][h5y]=function(){var M3P="lDefa";var i49="nul";var M1T=i49;M1T+=M3P;M1T+=u0x;var F2G=V71;F2G+=T4P;F2G+=k65;return this[X_X][F2G][M1T];};Field[U08][J7M]=function(set){var b2f="nalEve";var b6A="lock";var f7t="inte";x5Z.m_s();var s9r=f7t;s9r+=Q3A;s9r+=b2f;s9r+=K1G;var j1b=K4C;j1b+=V71;j1b+=E9x;var T25=u6W;T25+=P4u;var j2l=s9C;j2l+=b6A;var O2r=n76;O2r+=F1m;O2r+=z3M;O2r+=o41;var J0K=k7Z;J0K+=X_X;var u0y=n76;u0y+=V71;u0y+=D3K;if(set === undefined){return this[X_X][e1J];}this[u0y][e1J][J0K](O2r,set?j2l:T25);this[X_X][e1J]=set;this[X_X][j1b][s9r](Y7X,[set]);return this;};Field[l4R][C04]=function(val,multiCheck){var B$j="ypeF";var E95="setFormatter";var k87='set';var f7S="entityDecode";var B5s=V71;B5s+=T4P;x5Z.N$L();B5s+=k65;var r6Z=m5F;r6Z+=O8n;r6Z+=e8G;r6Z+=U8kjl[213595];if(multiCheck === void s8C){multiCheck=m9a;}var decodeFn=function(d){var h$n='"';var q5X='\n';var K3y="ep";var e6C="epl";var N9$='\'';x5Z.N$L();var H5y='£';var q_l="repl";var Q0P="ri";var Z6M="lac";var R1D=n4W;R1D+=W6X;var K8f=q_l;K8f+=G1t;var i4x=Q3A;i4x+=e6C;i4x+=G1t;var Z9A=Q3A;Z9A+=K3y;Z9A+=Z6M;Z9A+=U8kjl[213595];var e2O=X_X;e2O+=v8V;e2O+=Q0P;e2O+=s0n;return typeof d !== e2O?d:d[r7E](/&gt;/g,Z5q)[r7E](/&lt;/g,g2V)[Z9A](/&amp;/g,h8M)[i4x](/&quot;/g,h$n)[K8f](/&#163;/g,H5y)[r7E](/&#39;/g,N9$)[R1D](/&#10;/g,q5X);};this[X_X][r6Z]=p6n;var decode=this[X_X][B5s][f7S];if(decode === undefined || decode === m9a){if(Array[t1S](val)){var g4r=x9C;g4r+=v8V;g4r+=K4C;for(var i=s8C,ien=val[g4r];i < ien;i++){val[i]=decodeFn(val[i]);}}else {val=decodeFn(val);}}if(multiCheck === m9a){var o8D=X_X;o8D+=U8kjl[213595];o8D+=v8V;var U_X=o93;U_X+=B$j;U_X+=u6W;var P6P=c9N;P6P+=v8V;P6P+=X_X;val=this[n8j](val,this[X_X][P6P][E95]);this[U_X](o8D,val);this[p6k]();}else {this[X2r](k87,val);}return this;};Field[U08][c6r]=function(animate,toggle){var K_l=M_j;K_l+=u6W;var I$q=K4C;I$q+=V71;I$q+=X_X;I$q+=v8V;if(animate === void s8C){animate=m9a;}if(toggle === void s8C){toggle=m9a;}if(toggle === p6n){return this[V20](animate);}var el=this[S5o][H6N];if(this[X_X][I$q][h0z]() && animate && $[K_l][F2H]){el[F2H]();}else {var E0G=U8kjl.P3i;E0G+=X_X;E0G+=X_X;el[E0G](H5u,M9P);;}return this;};Field[I36][Z8V]=function(options,append){var l46="eFn";if(append === void s8C){append=p6n;}if(this[X_X][d5b][A1k]){var I8_=e8G;I8_+=T4P;I8_+=U8kjl[557061];I8_+=U8kjl[213595];var S0q=A10;S0q+=D3N;S0q+=l46;this[S0q](I8_,options,append);}return this;};Field[U08][w_P]=function(val){var N7b=X_X;N7b+=U8kjl[213595];N7b+=v8V;return val === undefined?this[A5X]():this[N7b](val);};Field[U08][O2w]=function(value,original){var compare=this[X_X][G7a][b6S] || deepCompare;return compare(value,original);};Field[q3d][l_9]=function(){var i5q=n76;i5q+=U8kjl[172460];i5q+=v8V;i5q+=U8kjl[172460];return this[X_X][G7a][i5q];};Field[M_F][z8m]=function(){var C5_="tainer";var Q98='destroy';var F8e=n4W;F8e+=A3l;F8e+=F2j;F8e+=U8kjl[213595];var j9Z=f4l;j9Z+=C5_;this[S5o][j9Z][F8e]();this[X2r](Q98);return this;};Field[U08][x5I]=function(){x5Z.m_s();return this[X_X][G7a][e3Y];};Field[U08][z5O]=function(){var l4w=q8k;l4w+=X_X;return this[X_X][l4w];};Field[U08][l3N]=function(show){x5Z.m_s();var N4o=k7Z;N4o+=X_X;this[S5o][D_y][N4o]({display:show?O9F:D5T});};Field[p0g][M5Y]=function(){var Z$C="multiValues";this[X_X][x3u]=[];this[X_X][Z$C]={};};Field[c1L][P71]=function(){var v1s=s_N;v1s+=n9i;var a8b=c9N;x5Z.N$L();a8b+=k65;return this[X_X][a8b][v1s];};Field[t6p][P1c]=function(el,msg,fn){var C3s="ncti";var V0l="parent";var Y1W="eUp";var T$b=O70;T$b+=C3s;T$b+=m7J;if(msg === undefined){var P40=K4C;P40+=v8V;P40+=D3K;P40+=r6s;return el[P40]();}x5Z.N$L();if(typeof msg === T$b){var g3L=K4C;g3L+=V71;g3L+=E9x;var editor=this[X_X][g3L];msg=msg(editor,new DataTable$2[x23](editor[U9v]()[x8K]));}if(el[V0l]()[V4V](R2a) && $[U8kjl.B9_][J0g]){var D_E=K4C;D_E+=v8V;D_E+=D3K;D_E+=r6s;el[D_E](msg);if(msg){el[F2H](fn);;}else {var c7n=X_X;c7n+=r6s;c7n+=x1J;c7n+=Y1W;el[c7n](fn);}}else {var q55=U8A;q55+=l_V;q55+=U8kjl[172460];q55+=K7c;var n9m=k7Z;n9m+=X_X;var d33=K4C;d33+=E$h;d33+=r6s;el[d33](msg || M9P)[n9m](q55,msg?O9F:D5T);if(fn){fn();}}return this;};Field[Y3h][p6k]=function(){var I9b="lMultiInfo";var p6E="isMultiV";var y_3="ho";var L$d="inputControl";var f9L="oEd";var v2f="terna";var f$5="noMulti";var U8c="alI18n";var F3E="intern";var e0$="iN";var j06=g_K;j06+=v2f;j06+=I9b;var c41=y_3;c41+=E9x;var M6S=S$O;M6S+=e0$;M6S+=f9L;M6S+=O0j;var J6M=R0X;J6M+=T1z;J6M+=U8kjl[172460];J6M+=L93;var R$3=g_K;R$3+=k1D;var m0F=n76;m0F+=Q3S;var u5y=F3E;u5y+=U8c;var j5h=K4C;j5h+=p08;j5h+=v8V;var c7F=b8y;c7F+=V71;c7F+=p59;var S_2=p6E;S_2+=O8n;S_2+=N8x;var G5i=V71;G5i+=H8K;G5i+=X_X;var c0N=D3K;c0N+=e8G;c0N+=K1d;c0N+=a09;var X9V=m5F;X9V+=z7i;var F3y=q8k;F3y+=X_X;var last;var ids=this[X_X][F3y];var values=this[X_X][X9V];var isMultiValue=this[X_X][c0N];var isMultiEditable=this[X_X][G5i][e3Y];var val;var different=p6n;if(ids){var s3J=J81;s3J+=u7q;s3J+=K4C;for(var i=s8C;i < ids[s3J];i++){val=values[ids[i]];if(i > s8C && !deepCompare(val,last)){different=m9a;break;}last=val;}}if(different && isMultiValue || !isMultiEditable && this[S_2]()){var Q$Q=U8kjl.P3i;Q$Q+=L93;var I5A=D3K;I5A+=u4f;I5A+=l5_;var I5B=u6W;I5B+=V71;I5B+=u6W;I5B+=U8kjl[213595];var D75=U8kjl.P3i;D75+=L93;var r_z=K2g;r_z+=y_W;this[S5o][r_z][D75]({display:I5B});this[S5o][I5A][Q$Q]({display:O9F});}else {var U4M=U8kjl.P3i;U4M+=X_X;U4M+=X_X;var q8B=n76;q8B+=V71;q8B+=D3K;this[q8B][L$d][e4X]({display:O9F});this[S5o][K7_][U4M]({display:D5T});if(isMultiValue && !different){var J3$=X_X;J3$+=K2c;this[J3$](last,p6n);}}this[S5o][f8I][e4X]({display:ids && ids[G$8] > z3P && different && !isMultiValue?c7F:D5T});var i18n=this[X_X][j5h][u5y]()[K7_];this[m0F][D_y][q2y](isMultiEditable?i18n[R$3]:i18n[f$5]);this[S5o][K7_][J6M](this[X_X][g5t][M6S],!isMultiEditable);this[X_X][c41][j06]();return m9a;};Field[U08][L32]=function(name){var W6U="nshift";var r1A=c9N;r1A+=v8V;r1A+=X_X;var C_P=e8G;C_P+=W6U;var args=[];for(var _i=z3P;_i < arguments[G$8];_i++){args[_i - z3P]=arguments[_i];}args[C_P](this[X_X][r1A]);var fn=this[X_X][d5b][name];x5Z.m_s();if(fn){return fn[X5_](this[X_X][j18],args);}};Field[t8G][V8j]=function(){var x7l="fieldError";var r_t=n76;r_t+=Q3S;return this[r_t][x7l];};Field[U08][t2a]=function(val,formatter){var N0I="formatters";var b0f="hos";var y58="shift";if(formatter){var E99=b0f;E99+=v8V;var c2S=V4V;c2S+=y7T;c2S+=X2d;c2S+=K7c;if(Array[c2S](formatter)){var Y$e=U8kjl[172460];Y$e+=N8H;Y$e+=K7c;var M7c=X_X;M7c+=r6s;M7c+=c6e;M7c+=U8kjl[213595];var args=formatter[M7c]();var name_1=args[y58]();formatter=Field[N0I][name_1][Y$e](this,args);}return formatter[Y$N](this[X_X][E99],val,this);}return val;};Field[a68]=defaults;Field[U_h]={};return Field;})();var button={action:d1w,className:d1w,tabIndex:s8C,text:d1w};var displayController={close:function(){},init:function(){},node:function(){},open:function(){}};var DataTable$1=$[K1Q][U8kjl.p1N];var apiRegister=DataTable$1[x23][H_j];function _getInst(api){var C72="_edito";var O5$=C72;U8kjl.N$L();O5$+=Q3A;var F1u=V71;F1u+=o1W;F1u+=w5E;F1u+=v8V;var Y_5=H$6;Y_5+=u$5;Y_5+=v8V;var ctx=api[Y_5][s8C];return ctx[F1u][z9L] || ctx[O5$];}function _setBasic(inst,opts,type,plural){var Q2a=/%d/;var X45="messa";var s$X="plac";if(!opts){opts={};}U8kjl.m_s();if(opts[y9M] === undefined){var h$9=R7i;h$9+=J14;opts[h$9]=T5D;}if(opts[X3j] === undefined){opts[X3j]=inst[R3t][type][X3j];}if(opts[h7_] === undefined){var k2e=n4W;k2e+=A3l;k2e+=V3s;if(type === k2e){var f_x=n4W;f_x+=s$X;f_x+=U8kjl[213595];var k7d=X45;k7d+=b2j;var g8I=U8kjl.P3i;g8I+=V71;g8I+=u6W;g8I+=t9n;var confirm_1=inst[R3t][type][g8I];opts[k7d]=plural !== z3P?confirm_1[A10][f_x](Q2a,plural):confirm_1[q7o];}else {opts[h7_]=M9P;}}return opts;}apiRegister(f7I,function(){U8kjl.N$L();return _getInst(this);});apiRegister(i6P,function(opts){var inst=_getInst(this);U8kjl.N$L();inst[z_a](_setBasic(inst,opts,L7t));return this;});apiRegister(g2s,function(opts){var D9s=g6d;D9s+=O0j;var O5X=g6d;O5X+=O0j;var inst=_getInst(this);inst[O5X](this[s8C][s8C],_setBasic(inst,opts,D9s));return this;});apiRegister(f8c,function(opts){var N0g=U8kjl[213595];N0g+=n76;N0g+=O0j;var P5f=g6d;P5f+=O0j;var inst=_getInst(this);inst[P5f](this[s8C],_setBasic(inst,opts,N0g));return this;});apiRegister(Q5q,function(opts){var l0d="mov";var Y9p=n4W;Y9p+=l0d;Y9p+=U8kjl[213595];var r9c=n4W;r9c+=c4e;var inst=_getInst(this);inst[r9c](this[s8C][s8C],_setBasic(inst,opts,Y9p,z3P));return this;});apiRegister(e_d,function(opts){var r1z=J81;r1z+=U8X;var E41=n4W;E41+=D3K;U8kjl.N$L();E41+=V71;E41+=V3s;var inst=_getInst(this);inst[E41](this[s8C],_setBasic(inst,opts,w2z,this[s8C][r1z]));return this;});apiRegister(v3T,function(type,opts){var O1x="inOb";var a1D=R4e;a1D+=O1x;a1D+=k43;a1D+=v8V;if(!type){type=a5y;}else if($[a1D](type)){opts=type;type=a5y;}_getInst(this)[type](this[s8C][s8C],opts);return this;});apiRegister(M4u,function(opts){var n7E=j98;n7E+=J81;U8kjl.m_s();_getInst(this)[n7E](this[s8C],opts);return this;});apiRegister(G$5,file);apiRegister(D1O,files);$(document)[m7J](E__,function(e,ctx,json){var s4V='dt';var q8G=M_j;q8G+=l$n;var o4X=h8i;o4X+=z3M;o4X+=G1t;if(e[o4X] !== s4V){return;}if(json && json[q8G]){var g93=M_j;g93+=I8N;g93+=U8kjl[213595];g93+=X_X;var d8o=U8kjl[213595];d8o+=U8kjl[172460];d8o+=e7s;$[d8o](json[g93],function(name,filesIn){var n7l=M_j;n7l+=F1m;n7l+=r6s;n7l+=I6h;if(!Editor[n7l][name]){Editor[K_D][name]={};}$[n5$](Editor[K_D][name],filesIn);});}});var _buttons=$[U8kjl.B9_][C1d][Q53][y9M];$[F1w](_buttons,{create:{action:function(e,dt,node,config){var j86="formTitle";var G2_="mMessage";var U9L="Opti";var W9x=k1D;W9x+=v5Q;W9x+=U9L;W9x+=J14;var K8h=v8V;K8h+=D2_;K8h+=U8kjl[213595];var Y1p=F1m;Y1p+=T1j;Y1p+=u6W;var L6J=s95;L6J+=u6W;var F_s=M_j;F_s+=U$E;F_s+=G2_;var O9Y=H__;O9Y+=v8V;O9Y+=z5U;O9Y+=n76;var L4n=j_K;L4n+=U8kjl[213595];L4n+=a0M;var p0p=T4P;p0p+=Q3A;p0p+=v9y;var O6i=V71;O6i+=G40;var that=this;var editor=config[z9L];this[e1J](m9a);editor[O6i](p0p,function(){that[e1J](p6n);})[L4n]($[O9Y]({buttons:config[h0H],message:config[F_s] || editor[L6J][z_a][h7_],nest:m9a,title:config[j86] || editor[Y1p][z_a][K8h]},config[W9x]));},className:V80,editor:d1w,formButtons:{action:function(e){U8kjl.N$L();this[z9u]();},text:function(editor){var b3b=s_N;b3b+=n9i;var a6L=F1m;a6L+=f3o;a6L+=Y4X;return editor[a6L][z_a][b3b];}},formMessage:d1w,formOptions:{},formTitle:d1w,text:function(dt,node,config){var Y0E="buttons.";var r4y=X2P;U8kjl.N$L();r4y+=U8kjl[213595];var X5z=Y0E;X5z+=z_a;return dt[R3t](X5z,config[z9L][R3t][r4y][M4q]);}},createInline:{action:function(e,dt,node,config){var P1j="inlineCreate";U8kjl.N$L();var Z3E="posi";var H1g=Z3E;H1g+=l5_;H1g+=m7J;var X1Q=U8kjl[213595];X1Q+=n76;X1Q+=y4Y;X1Q+=Q3A;config[X1Q][P1j](config[H1g],config[F$u]);},className:V8l,editor:d1w,formButtons:{action:function(e){this[z9u]();},text:function(editor){var a9m=U8kjl.P3i;a9m+=n4W;a9m+=J60;a9m+=U8kjl[213595];return editor[R3t][a9m][z9u];}},formOptions:{},position:g6L,text:function(dt,node,config){var L3T='buttons.create';var F_8=s9C;F_8+=S8e;F_8+=w7H;F_8+=u6W;var q4u=F6R;q4u+=U$E;return dt[R3t](L3T,config[q4u][R3t][z_a][F_8]);}},edit:{action:function(e,dt,node,config){var h4L="preOp";var Z4Y="lumn";var V_k="rmT";var v39="formMessage";var e7i=F1m;e7i+=T1j;e7i+=u6W;var O5z=k1D;O5z+=V_k;O5z+=D2_;O5z+=U8kjl[213595];var y1$=U8kjl[213595];y1$+=P1u;var f5P=U8kjl[213595];f5P+=Y0R;f5P+=C43;var C4i=g6d;C4i+=F1m;C4i+=v8V;var N46=h4L;N46+=U8kjl[213595];N46+=u6W;var w_F=V71;w_F+=u6W;w_F+=U8kjl[213595];var u$I=N8B;u$I+=U8kjl.P3i;u$I+=I6h;u$I+=E6p;var j7w=x9C;j7w+=Z8G;U8kjl.m_s();var h4e=J81;h4e+=u6W;h4e+=i89;h4e+=Z8G;var O5l=q9i;O5l+=X_X;var B3v=g_K;B3v+=H4s;B3v+=I6h;var T4u=x1i;T4u+=Z4Y;T4u+=X_X;var O0m=j_D;O0m+=u$5;O0m+=U8kjl[213595];O0m+=X_X;var that=this;var editor=config[z9L];var rows=dt[i8i]({selected:m9a})[O0m]();var columns=dt[T4u]({selected:m9a})[B3v]();var cells=dt[O5l]({selected:m9a})[m$E]();var items=columns[h4e] || cells[j7w]?{cells:cells,columns:columns,rows:rows}:rows;this[u$I](m9a);editor[w_F](N46,function(){U8kjl.m_s();that[e1J](p6n);})[C4i](items,$[f5P]({buttons:config[h0H],message:config[v39] || editor[R3t][y1$][h7_],nest:m9a,title:config[O5z] || editor[e7i][F6R][X3j]},config[F$u]));},className:Y0O,editor:d1w,extend:N3D,formButtons:{action:function(e){U8kjl.m_s();var K4S="subm";var Q_4=K4S;Q_4+=F1m;Q_4+=v8V;this[Q_4]();},text:function(editor){var H7Y="bmi";var X63=X_X;U8kjl.m_s();X63+=e8G;X63+=H7Y;X63+=v8V;var r0q=U8kjl[213595];r0q+=P1u;return editor[R3t][r0q][X63];}},formMessage:d1w,formOptions:{},formTitle:d1w,text:function(dt,node,config){var V3z='buttons.edit';var U6w=R7i;U6w+=m7J;U8kjl.N$L();var c9H=F1m;c9H+=f3o;c9H+=Y4X;var M9G=F1m;M9G+=v9R;return dt[M9G](V3z,config[z9L][c9H][F6R][U6w]);}},remove:{action:function(e,dt,node,config){var C7P="tit";var F2T="tons";var J4l="ptions";var Z1Q="ormBut";var Z5H="rmO";var t63="formMe";var O$Z="formTi";var v80=M_j;v80+=V71;v80+=Z5H;v80+=J4l;var M5I=C7P;M5I+=r6s;M5I+=U8kjl[213595];var a6H=Q3A;a6H+=Q5a;a6H+=I5N;var x6W=O$Z;U8kjl.m_s();x6W+=v8V;x6W+=J81;var J9C=t63;J9C+=Y1P;var R_u=M_j;R_u+=Z1Q;R_u+=F2T;var Z6_=H$p;Z6_+=n76;var N6g=T4P;N6g+=Q3A;N6g+=v9y;var P_y=T7R;P_y+=n4m;P_y+=j$5;P_y+=s0n;var that=this;var editor=config[z9L];this[P_y](m9a);editor[P4u](N6g,function(){U8kjl.m_s();that[e1J](p6n);})[B3O](dt[i8i]({selected:m9a})[m$E](),$[Z6_]({buttons:config[R_u],message:config[J9C],nest:m9a,title:config[x6W] || editor[R3t][a6H][M5I]},config[v80]));},className:J9g,editor:d1w,extend:N54,formButtons:{action:function(e){var g7q=J33;g7q+=s9C;g7q+=D3K;g7q+=O0j;this[g7q]();},text:function(editor){var Q4y="remov";var v7E=Q4y;v7E+=U8kjl[213595];U8kjl.N$L();return editor[R3t][v7E][z9u];}},formMessage:function(editor,dt){var L77="confirm";var U$w="ir";var R8p="confi";var C8O=r6s;C8O+=U8kjl[213595];C8O+=U8X;var X6d=x1i;X6d+=u6W;X6d+=b$U;X6d+=v5Q;var K$t=f4l;K$t+=M_j;K$t+=U$w;K$t+=D3K;var q1N=r6s;q1N+=C0t;q1N+=v8V;q1N+=K4C;var Y69=R8p;Y69+=Q3A;Y69+=D3K;var z8f=x1i;z8f+=u6W;U8kjl.m_s();z8f+=t9n;var Y6U=Q3A;Y6U+=g9U;Y6U+=V3s;var rows=dt[i8i]({selected:m9a})[m$E]();var i18n=editor[R3t][Y6U];var question=typeof i18n[L77] === k57?i18n[z8f]:i18n[Y69][rows[q1N]]?i18n[K$t][rows[G$8]]:i18n[X6d][A10];return question[r7E](/%d/g,rows[C8O]);},formOptions:{},formTitle:d1w,limitTo:[Y9j],text:function(dt,node,config){var x_t="ns.remove";var a5A=R7i;a5A+=m7J;var u0P=a98;u0P+=x_t;var j3O=s95;j3O+=u6W;return dt[j3O](u0P,config[z9L][R3t][B3O][a5A]);}}});_buttons[q9Q]=$[n5$]({},_buttons[A4Q]);_buttons[u83][a1k]=K77;_buttons[s5q]=$[n5$]({},_buttons[B3O]);_buttons[s5q][n5$]=b7X;if(!DataTable || !DataTable[g2n] || !DataTable[S2i](A3n)){throw new Error(S60);}var Editor=(function(){var G7o="alEvent";var e74="rces";var n7J="Fie";var a5h=".1";var v_k="taSou";var h9H="versio";var i4D="els";var O$0="interna";var T5I="internalMultiInfo";var Z$g="int";var J1i="lI18n";var A8E="faul";var g7W="2.";var G$n="ldTy";var N7W=X_X;N7W+=U8kjl[172460];N7W+=w5a;N7W+=N2I;var D91=U8A;D91+=e3z;D91+=K7c;var n5d=n76;n5d+=U8kjl[172460];n5d+=v_k;n5d+=e74;var y5m=D3K;y5m+=V71;y5m+=n76;y5m+=i4D;var u0c=n76;u0c+=U8kjl[213595];u0c+=A8E;u0c+=k65;var a9L=e8G;a9L+=N_8;var Q6u=X7g;Q6u+=X_X;var e_e=v7Y;e_e+=U$E;var s7w=n7J;s7w+=r6s;s7w+=n76;var p3s=g7W;p3s+=B89;p3s+=a5h;p3s+=B89;var W5p=h9H;W5p+=u6W;var y2$=b$U;y2$+=r6s;y2$+=U8kjl[213595];y2$+=X_X;var V5X=U2j;V5X+=G$n;V5X+=o_u;var t7R=E6s;t7R+=K8J;t7R+=M7i;var R4j=O$0;R4j+=J1i;var x24=Z$g;x24+=U8kjl[213595];x24+=M3z;x24+=G7o;function Editor(init){var K4f="oseR";var q4d="ier";var Y3U="splay";var z9w='<div data-dte-e="processing" class="';var R7b="events";var n3F="bubblePo";var Y44="a-dte-e=\"head\" ";var N6W="embleMa";var L6w="proc";var E9y="<div";var Z9C="undependent";var L5e="_disp";var Y85="t\" clas";var N2V='i18n.dt.dte';var K7r="actionName";var d8K="-e=\"form_conten";var e7G="_fieldN";var X$Q="e=\"body_content\" class=\"";var o8s="_ass";var g4i="ear";var C99="_mult";var B79="div class=\"";var u$X="layReorder";var Z0f="Args";var v48='foot';var N6j="temp";var m2U="displayNode";var g$H="classe";var e_D='"></div>';var X4C="ru";var r87="bac";var j3s="iInfo";var h5L="_option";var N0_="hr";var R2L='<div data-dte-e="form_buttons" class="';var E1f="m_con";var M3M="lineCrea";var J$K="indicator";var P5J=" clas";var Y7_="nique";var v2L="form data-dte-e=\"form\" class=\"";var C6i="><";var X2L="or\" ";var U1q="</span></div>";var y3d="_noPro";var X2u="nTable";var y36=" data-dte-e=\"foot\" class=\"";var u3b="tag";var y2n="mple";var I8X="_submit";var k3C="itErr";var S5V="foo";var W2h="_nest";var w$c="les Editor must be initialised as a \'new\' inst";var h2K="/d";var s2T="iv data-dte-e=\"body\" class=\"";var f3_="ngs";var l6_="DataTab";var t10="models";var C_5="_submitSuccess";var i5G="\"></d";var v4T="processin";var r9y="gger";var q5G="body";var q5r="defaul";var g6p='<div data-dte-e="form_info" class="';var I42="Co";var m_3="body_cont";var l9i="<div data-dte-e=\"form_err";var a_B="kground";var t$m="setti";var m_0="edOpen";var p0x="eader";var G4I="_messag";var M1m="_pro";var z$l="<div data-dte";var J$I='initEditor';var I73="ontroller";var h$T="submitTable";var V68="div dat";var W_m="_ajax";var u7C=".dt.d";var u3g="it.dt.dte";var B6Q="layC";var v8o="</f";var Z9h="siti";var I92=" data-dte";var A$h="sUpdate";var o6x="bub";var v8K="_cl";var M6z='"><div class="';var H8_="nte";var t3w="\"><span>";var E1V='Cannot find display controller ';var n7j=y8_;n7j+=r9y;var K$T=i5I;K$T+=I42;K$T+=y2n;K$T+=e5o;var j$c=G0U;j$c+=B6Q;j$c+=I73;var B46=y6A;B46+=Y3U;var d3K=u$5;d3K+=N0_;d3K+=u7C;d3K+=e5o;var l3Z=e8G;l3Z+=Y7_;var g3s=g_K;g3s+=u3g;var E26=V71;E26+=u6W;var I5P=m9F;I5P+=r6s;I5P+=U8kjl[213595];var v44=n76;v44+=V71;v44+=D3K;var R_G=v4T;R_G+=i89;var U0k=y6V;U0k+=C6i;U0k+=h2K;U0k+=b04;var H7$=U8kjl.P3i;H7$+=V71;H7$+=H8_;H7$+=K1G;var w5n=K4C;w5n+=p0x;var D3J=T5A;D3J+=V68;D3J+=Y44;D3J+=M1j;var k1S=F1m;k1S+=u6W;k1S+=k1D;var D0K=H8a;D0K+=Q3A;var B0v=M_j;B0v+=V71;B0v+=Q3A;B0v+=D3K;var K$_=l9i;K$_+=X2L;K$_+=M1j;var B$n=c5Z;B$n+=E1f;B$n+=v8V;B$n+=W_f;var n8p=y6V;n8p+=c4a;var M4V=M4q;M4V+=X_X;var N_m=M_j;N_m+=V71;N_m+=Q3A;N_m+=D3K;var b4e=m_3;b4e+=W_f;var U80=n76;U80+=V71;U80+=D3K;var R_j=v8o;R_j+=U$E;R_j+=D3K;R_j+=c4a;var I5p=i5G;I5p+=b04;var K$c=M_j;K$c+=U$E;K$c+=D3K;var B4a=z$l;B4a+=d8K;B4a+=Y85;B4a+=a2E;var R1G=M_j;R1G+=U$E;R1G+=D3K;var Y6p=T5A;Y6p+=v2L;var Z3i=T5A;Z3i+=h2K;Z3i+=F1m;Z3i+=Y5t;var W4g=K07;W4g+=T5A;W4g+=h2K;W4g+=b04;var J6J=U8kjl.P3i;J6J+=i8N;J6J+=v8V;var Q0h=S5V;Q0h+=u62;var K66=T5A;K66+=B79;var A5r=h9_;A5r+=b5P;A5r+=T$_;A5r+=Q3A;var g4B=E9y;g4B+=y36;var O3m=a2j;O3m+=F1m;O3m+=Y5t;var R0f=E9y;R0f+=I92;R0f+=O$N;R0f+=X$Q;var m1i=b4P;m1i+=c4a;var C3n=M4G;C3n+=Y89;C3n+=B5D;var S1W=s9C;S1W+=V71;S1W+=n76;S1W+=K7c;var L4O=Z$t;L4O+=s2T;var s8J=t3w;s8J+=U1q;var p0U=L6w;p0U+=U8kjl[213595];p0U+=L3d;p0U+=s0n;var C9O=b4P;C9O+=c4a;var q8I=O9D;q8I+=Q3A;var I9I=T5A;I9I+=e7A;I9I+=P5J;I9I+=a2E;var F5M=e8G;F5M+=w5E;F5M+=h7k;F5M+=N8x;var B2V=t$m;B2V+=f3_;var r1f=n3B;r1f+=z8b;var T9Y=F1m;T9Y+=f3o;T9Y+=E5a;T9Y+=u6W;var x3x=g$H;x3x+=X_X;var L07=J8n;L07+=U8kjl[213595];L07+=u6W;L07+=n76;var U_0=v_y;U_0+=X_X;U_0+=I6h;var m6F=N6j;m6F+=r6s;m6F+=a0M;var A0y=S5o;A0y+=L2e;var c3n=U8k;c3n+=X_X;var F36=q5r;F36+=k65;var t1l=B_s;t1l+=C43;var v5F=V_f;v5F+=k3C;v5F+=U$E;var H6l=A10;H6l+=h$T;var d4_=y3d;d4_+=f8b;d4_+=q2H;d4_+=i89;var O16=M1m;O16+=f8b;O16+=E6p;var f$m=W2h;f$m+=m_0;var d3Q=C99;d3Q+=j3s;var P5C=G4I;P5C+=U8kjl[213595];var Y3u=h5L;Y3u+=A$h;var y21=V1u;y21+=K7C;var o2M=e7G;o2M+=Y1S;var g5i=L5e;g5i+=u$X;var Y80=o2H;Y80+=X4C;Y80+=n76;Y80+=Z0f;var o7u=v8K;o7u+=K4f;o7u+=U8kjl[213595];o7u+=i89;var x9E=A10;x9E+=L$w;var p9n=o8s;p9n+=N6W;p9n+=g_K;var o9S=J33;o9S+=s9C;o9S+=d0Y;o9S+=v8V;var f2z=x6S;f2z+=V71;f2z+=h9_;var o$_=X_X;o$_+=K2c;var N0X=n4W;N0X+=A3l;N0X+=F2j;N0X+=U8kjl[213595];var F2B=V71;F2B+=Q3A;F2B+=n76;F2B+=B5D;var M96=V71;M96+=M0G;var V4q=V71;V4q+=u6W;var F9V=D3K;F9V+=u0x;F9V+=F1m;F9V+=q6v;var Y5H=A3l;Y5H+=y6A;Y5H+=M_j;Y5H+=q4d;var f50=g_K;f50+=M3M;f50+=e5o;var l1G=F1m;l1G+=n76;l1G+=X_X;var F2Q=i89;F2Q+=K2c;var c7b=U4H;c7b+=X_X;var N65=M_j;N65+=C_e;N65+=r6s;N65+=n76;var u$c=U8kjl[213595];u$c+=G61;u$c+=Q3A;var o3M=u_V;o3M+=U8kjl[213595];var t28=X$A;t28+=K7c;var H6i=E2n;H6i+=X_X;H6i+=U8kjl[213595];var D1h=m5o;D1h+=g4i;var c6E=n3F;c6E+=Z9h;c6E+=V71;c6E+=u6W;var p87=o6x;p87+=s9C;p87+=J81;var S7x=b8y;S7x+=e8G;S7x+=Q3A;var E5l=r87;E5l+=a_B;var _this=this;this[s37]=add;this[D7h]=ajax;this[E5l]=background;this[S7x]=blur;this[p87]=bubble;this[c6E]=bubblePosition;this[y9M]=buttons;this[D1h]=clear;this[H6i]=close;this[z_a]=create;this[Z9C]=undependent;this[J2i]=dependent;this[z8m]=destroy;this[E2_]=disable;this[t28]=display;this[v3$]=displayed;this[m2U]=displayNode;this[F6R]=edit;this[o3M]=enable;this[u$c]=error$1;this[N65]=field;this[d$4]=fields;this[U4H]=file;this[c7b]=files;this[F2Q]=get;this[V20]=hide;this[l1G]=ids;this[r9M]=inError;this[j0X]=inline;this[f50]=inlineCreate;this[h7_]=message;this[n3B]=mode;this[Y5H]=modifier;this[F9V]=multiGet;this[o0v]=multiSet;this[y_n]=node;this[Y$9]=off;this[V4q]=on;this[P4u]=one;this[M96]=open;this[F2B]=order;this[N0X]=remove;this[o$_]=set;this[f2z]=show;this[o9S]=submit;this[x8K]=table;this[e9m]=template;this[X3j]=title;this[D0c]=val;this[p_m]=_actionClass;this[W_m]=_ajax;this[f41]=_animate;this[p9n]=_assembleMain;this[U4w]=_blur;this[n6U]=_clearDynamicInfo;this[x9E]=_close;this[o7u]=_closeReg;this[Y80]=_crudArgs;this[q3f]=_dataSource;this[g5i]=_displayReorder;this[c0p]=_edit;this[b7_]=_event;this[Y9K]=_eventName;this[Y9$]=_fieldFromNode;this[o2M]=_fieldNames;this[y0j]=_focus;this[y21]=_formOptions;this[T79]=_inline;this[Y3u]=_optionsUpdate;this[P5C]=_message;this[d3Q]=_multiInfo;this[E8V]=_nestedClose;this[f$m]=_nestedOpen;this[b5p]=_postopen;this[o5R]=_preopen;this[O16]=_processing;this[d4_]=_noProcessing;this[I8X]=_submit;this[H6l]=_submitTable;this[C_5]=_submitSuccess;this[v5F]=_submitError;this[q6C]=_tidy;this[B0o]=_weakInArray;if(!(this instanceof Editor)){var X9Q=l6_;X9Q+=w$c;X9Q+=t4r;alert(X9Q);}init=$[t1l](m9a,{},Editor[F36],init);this[X_X]=$[n5$](m9a,{},Editor[t10][c3n],{actionName:init[K7r],ajax:init[D7h],formOptions:init[F$u],idSrc:init[U2W],table:init[A0y] || init[x8K],template:init[m6F]?$(init[e9m])[n4I]():d1w});this[U_0]=$[L07](m9a,{},Editor[x3x]);this[R3t]=init[T9Y];Editor[r1f][B2V][F5M]++;var that=this;var classes=this[g5t];var wrapper=$(I9I + classes[q8I] + C9O + z9w + classes[p0U][J$K] + s8J + L4O + classes[S1W][C3n] + m1i + R0f + classes[q5G][g8h] + e_D + O3m + g4B + classes[J4o][A5r] + n4e + K66 + classes[Q0h][J6J] + W4g + Z3i + R5$);var form=$(Y6p + classes[R1G][u3b] + n4e + B4a + classes[K$c][g8h] + I5p + R_j);this[U80]={body:el(L9Y,wrapper)[s8C],bodyContent:el(b4e,wrapper)[s8C],buttons:$(R2L + classes[N_m][M4V] + n8p)[s8C],footer:el(v48,wrapper)[s8C],form:form[s8C],formContent:el(B$n,form)[s8C],formError:$(K$_ + classes[B0v][D0K] + e_D)[s8C],formInfo:$(g6p + classes[e4C][k1S] + e_D)[s8C],header:$(D3J + classes[H3u][y6N] + M6z + classes[w5n][H7$] + U0k)[s8C],processing:el(R_G,wrapper)[s8C],wrapper:wrapper[s8C]};$[G5E](init[R7b],function(evt,fn){var o9b=V71;o9b+=u6W;that[o9b](evt,function(){U8kjl.m_s();var argsIn=[];for(var _i=s8C;_i < arguments[G$8];_i++){argsIn[_i]=arguments[_i];}fn[X5_](that,argsIn);});});this[v44];var table$1=this[X_X][I5P];if(init[d$4]){var z_F=M_j;z_F+=C_e;z_F+=h08;var G8y=U8kjl[172460];G8y+=Q6D;this[G8y](init[z_F]);}$(document)[E26](g3s + this[X_X][l3Z],function(e,settings,json){var O2S="edito";var k0$=v8V;k0$+=U8kjl[172460];U8kjl.N$L();k0$+=S03;if(_this[X_X][k0$] && settings[X2u] === $(table$1)[s8C]){var q54=A10;q54+=O2S;q54+=Q3A;settings[q54]=_this;}})[m7J](N2V + this[X_X][W_R],function(e,settings){var m0m="angua";var u_3="oLanguage";var o_n=U8kjl.x2x;U8kjl.m_s();o_n+=b8y;o_n+=U8kjl[213595];if(_this[X_X][o_n] && settings[X2u] === $(table$1)[s8C]){var f23=v8F;f23+=f9M;var t5x=V71;t5x+=Z6a;t5x+=m0m;t5x+=b2j;if(settings[t5x][f23]){$[n5$](m9a,_this[R3t],settings[u_3][z9L]);}}})[m7J](d3K + this[X_X][W_R],function(e,settings,json){var x34="_options";U8kjl.m_s();if(json && _this[X_X][x8K] && settings[X2u] === $(table$1)[s8C]){var P8v=x34;P8v+=c5b;P8v+=U8kjl[172460];P8v+=e5o;_this[P8v](json);}});if(!Editor[h0z][init[B46]]){var x7o=P0z;x7o+=U8kjl[172460];x7o+=K7c;throw new Error(E1V + init[x7o]);}this[X_X][j$c]=Editor[h0z][init[h0z]][i5I](this);this[b7_](K$T,[]);$(document)[n7j](J$I,[this]);}Editor[U08][x24]=function(name,args){U8kjl.m_s();this[b7_](name,args);};Editor[U08][R4j]=function(){return this[R3t];};Editor[U08][T5I]=function(){U8kjl.m_s();return this[w9B]();};Editor[t7R][U9v]=function(){return this[X_X];};Editor[V5X]={checkbox:checkbox,datatable:datatable,datetime:datetime,hidden:hidden,password:password,radio:radio,readonly:readonly,select:select,text:text,textarea:textarea,upload:upload,uploadMany:uploadMany};Editor[y2$]={};Editor[W5p]=p3s;Editor[g5t]=classNames;Editor[s7w]=Field;Editor[K8u]=d1w;Editor[e_e]=error;Editor[Q6u]=pairs;Editor[a9L]=upload$1;Editor[u0c]=defaults$1;Editor[y5m]={button:button,displayController:displayController,fieldType:fieldType,formOptions:formOptions,settings:settings};Editor[n5d]={dataTable:dataSource$1,html:dataSource};Editor[D91]={envelope:envelope,lightbox:self};Editor[N7W]=function(id){return safeDomId(id,M9P);};return Editor;})();DataTable[H4y]=Editor;$[A53][N4E][l9U]=Editor;if(DataTable[K8u]){var d$Y=o8G;d$Y+=U0S;d$Y+=Y_j;d$Y+=U8kjl[213595];Editor[d$Y]=DataTable[K8u];}if(DataTable[J8n][K5E]){var k0l=U2j;k0l+=c33;var U81=H$p;U81+=n76;$[U81](Editor[k0l],DataTable[J8n][K5E]);}DataTable[J8n][K5E]=Editor[p0a];return Editor;});})();


/*! Bootstrap integration for DataTables' Editor
 * © SpryMedia Ltd - datatables.net/license
 */

(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net-bs5', 'datatables.net-editor'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				// CommonJS environments without a window global must pass a
				// root. This will give an error otherwise
				root = window;
			}

			if ( ! $ ) {
				$ = typeof window !== 'undefined' ? // jQuery's factory checks for a global window
					require('jquery') :
					require('jquery')( root );
			}

			if ( ! $.fn.dataTable ) {
				require('datatables.net-bs5')(root, $);
			}

			if ( ! $.fn.dataTable ) {
				require('datatables.net-editor')(root, $);
			}


			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document, undefined ) {
'use strict';
var DataTable = $.fn.dataTable;


var Editor = DataTable.Editor;

/*
 * Set the default display controller to be our bootstrap control 
 */
DataTable.Editor.defaults.display = "bootstrap";


/*
 * Alter the buttons that Editor adds to Buttons so they are suitable for bootstrap
 */
var i18nDefaults = DataTable.Editor.defaults.i18n;
i18nDefaults.create.title = '<h5 class="modal-title">'+i18nDefaults.create.title+'</h5>';
i18nDefaults.edit.title = '<h5 class="modal-title">'+i18nDefaults.edit.title+'</h5>';
i18nDefaults.remove.title = '<h5 class="modal-title">'+i18nDefaults.remove.title+'</h5>';


/*
 * Change the default classes from Editor to be classes for Bootstrap
 */
$.extend( true, $.fn.dataTable.Editor.classes, {
	"header": {
		"wrapper": "DTE_Header modal-header"
	},
	"body": {
		"wrapper": "DTE_Body modal-body"
	},
	"footer": {
		"wrapper": "DTE_Footer modal-footer"
	},
	"form": {
		"tag": "form-horizontal",
		"button": "btn",
		"buttonInternal": "btn btn-outline-secondary"
	},
	"field": {
		"wrapper": "DTE_Field form-group row",
		"label":   "col-lg-4 col-form-label",
		"input":   "col-lg-8",
		"error":   "error is-invalid",
		"msg-labelInfo": "form-text text-secondary small",
		"msg-info":      "form-text text-secondary small",
		"msg-message":   "form-text text-secondary small",
		"msg-error":     "form-text text-danger small",
		"multiValue":    "card multi-value",
		"multiInfo":     "small",
		"multiRestore":  "multi-restore"
	}
} );

$.extend( true, DataTable.ext.buttons, {
	create: {
		formButtons: {
			className: 'btn-primary'
		}
	},
	edit: {
		formButtons: {
			className: 'btn-primary'
		}
	},
	remove: {
		formButtons: {
			className: 'btn-danger'
		}
	}
} );

DataTable.Editor.fieldTypes.datatable.tableClass = 'table';

/*
 * Bootstrap display controller - this is effectively a proxy to the Bootstrap
 * modal control.
 */
let shown = false;
let fullyShown = false;

const dom = {
	content: $(
		'<div class="modal fade DTED">'+
			'<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered"></div>'+
		'</div>'
	),
	close: $('<button class="btn-close"></div>')
};
let modal;
let _bs = window.bootstrap;

DataTable.Editor.bootstrap = function (bs) {
	_bs = bs;
}

DataTable.Editor.display.bootstrap = $.extend( true, {}, DataTable.Editor.models.displayController, {
	/*
	 * API methods
	 */
	init: function ( dte ) {
		// Add `form-control` to required elements
		dte.on( 'displayOrder.dtebs open.dtebs', function ( e, display, action, form ) {
			$.each( dte.s.fields, function ( key, field ) {
				$('input:not([type=checkbox]):not([type=radio]), select, textarea', field.node() )
					.addClass( 'form-control' );

				$('input[type=checkbox], input[type=radio]', field.node() )
					.addClass( 'form-check-input' );

				$('select', field.node() )
					.addClass( 'form-select' );
			} );
		} );

		return DataTable.Editor.display.bootstrap;
	},

	open: function ( dte, append, callback ) {
		if (! modal) {
			modal = new _bs.Modal(dom.content[0], {
				backdrop: "static",
				keyboard: false
			});
		}

		$(append).addClass('modal-content');

		// Special class for DataTable buttons in the form
		$(append).find('div.DTE_Field_Type_datatable div.dt-buttons')
			.removeClass('btn-group')
			.addClass('btn-group-vertical');

		// Setup events on each show
		dom.close
			.attr('title', dte.i18n.close)
			.off('click.dte-bs5')
			.on('click.dte-bs5', function () {
				dte.close('icon');
			})
			.appendTo($('div.modal-header', append));

		// This is a bit horrible, but if you mousedown and then drag out of the modal container, we don't
		// want to trigger a background action.
		let allowBackgroundClick = false;
		$(document)
			.off('mousedown.dte-bs5')
			.on('mousedown.dte-bs5', 'div.modal', function (e) {
				allowBackgroundClick = $(e.target).hasClass('modal') && shown
					? true
					: false;
			} );

		$(document)
			.off('click.dte-bs5')
			.on('click.dte-bs5', 'div.modal', function (e) {
				if ( $(e.target).hasClass('modal') && allowBackgroundClick ) {
					dte.background();
				}
			} );

		var content = dom.content.find('div.modal-dialog');
		content.children().detach();
		content.append( append );

		if ( shown ) {
			if ( callback ) {
				callback();
			}
			return;
		}

		shown = true;
		fullyShown = false;

		$(dom.content)
			.one('shown.bs.modal', function () {
				// Can only give elements focus when shown
				if ( dte.s.setFocus ) {
					dte.s.setFocus.focus();
				}

				fullyShown = true;

				if ( callback ) {
					callback();
				}
			})
			.one('hidden', function () {
				shown = false;
			})
			.appendTo( 'body' );
		
		modal.show();
	},

	close: function ( dte, callback ) {
		if ( ! shown ) {
			if ( callback ) {
				callback();
			}
			return;
		}

		// Check if actually displayed or not before hiding. BS4 doesn't like `hide`
		// before it has been fully displayed
		if ( ! fullyShown ) {
			$(dom.content)
				.one('shown.bs.modal', function () {
					DataTable.Editor.display.bootstrap.close( dte, callback );
				} );

			return;
		}

		$(dom.content)
			.one( 'hidden.bs.modal', function () {
				$(this).detach();
			} );

		modal.hide();

		shown = false;
		fullyShown = false;

		if ( callback ) {
			callback();
		}
	},

	node: function ( dte ) {
		return dom.content[0];
	}
} );


return Editor;
}));



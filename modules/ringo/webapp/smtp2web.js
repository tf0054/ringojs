
var strings = require('ringo/utils/strings');
var {Binary, ByteArray, ByteString} = require('binary');

export('isSMTP2Web', 'slopAll');

var log = require('ringo/logging').getLogger(module.id);

/**
 * Find out whether the content type denotes a format this module can parse.
 * @param contentType a HTTP request Content-Type header
 * @return true if the content type can be parsed as form data by this module
 */
function isSMTP2Web(contentType) {
    return contentType && strings.startsWith(
            String(contentType).toLowerCase(), "message/rfc822");
}

// tf0054
function slopAll(requestio, params, encoding) {
	encoding = encoding || "UTF-8";
	var buffer = requestio.read();

	// for logging.
	var strReturn = buffer;
	log.info("Slopped: " + strReturn.length);

	return params["slopped"] = buffer;
}


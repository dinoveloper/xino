export const HttpCodes = {
    /**
     * 100 Continue.
     * Indicates that the client should continue with its request.
     */
    CONTINUE: 100,

    /**
     * 101 Switching Protocols.
     * Indicates that the client has asked the server to switch protocols and the server is acknowledging that request.
     */
    SWITCHING_PROTOCOLS: 101,

    /**
     * 102 Processing (WebDAV; RFC 2518).
     * Indicates that the server has received and is processing the request, but no response is available yet.
     */
    PROCESSING: 102,

    /**
     * 103 Early Hints (RFC 8297).
     * Indicates that the server is willing to accept the request, but still needs additional information from the client to fulfill the request.
     */
    EARLY_HINTS: 103,

    /**
     * 200 OK.
     * Indicates that the request was successful and the server has returned the requested data.
     */
    OK: 200,

    /**
     * 201 Created.
     * Indicates that the request was successful and a resource was created.
     */
    CREATED: 201,

    /**
     * 202 Accepted.
     * Indicates that the request was accepted for processing, but the processing has not been completed.
     */
    ACCEPTED: 202,

    /**
     * 203 Non-Authoritative Information.
     * Indicates that the request was successful, but the information returned by the server is from a third-party source.
     */
    NON_AUTHORITATIVE_INFORMATION: 203,

    /**
     * 204 No Content.
     * Indicates that the request was successful, but there is no representation to return (i.e., the response is empty).
     */
    NO_CONTENT: 204,

    /**
     * 205 Reset Content.
     * Indicates that the request was successful and the client should reset the document view that caused the request to be sent.
     */
    RESET_CONTENT: 205,

    /**
     * 206 Partial Content.
     * Indicates that the server is delivering only part of the resource due to a range header sent by the client.
     */
    PARTIAL_CONTENT: 206,

    /**
     * 207 Multi-Status (WebDAV; RFC 4918).
     * Indicates that the request was successful and the response body contains a status for each requested resource.
     */
    MULTI_STATUS: 207,

    /**
     * 208 Already Reported (WebDAV; RFC 5842).
     * Indicates that the members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.
     */
    ALREADY_REPORTED: 208,

    /**
     * 226 IM Used (RFC 3229).
     * Indicates that the server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
     */
    IM_USED: 226,

    /**
     * 300 Multiple Choices.
     * Indicates that the request has multiple options, and the client must choose one.
     */
    MULTIPLE_CHOICES: 300,

    /**
     * 301 Moved Permanently.
     * Indicates that the resource has been permanently moved to a new URI.
     */
    MOVED_PERMANENTLY: 301,

    /**
     * 302 Found.
     * Indicates that the resource has temporarily been moved to a new URI.
     */
    FOUND: 302,

    /**
     * 303 See Other.
     * Indicates that the client should follow a different URI to access the resource.
     */
    SEE_OTHER: 303,

    /**
     * 304 Not Modified.
     * Indicates that the resource has not been modified since the client last requested it.
     */
    NOT_MODIFIED: 304,

    /**
     * 305 Use Proxy.
     * Indicates that the client must use a proxy to access the resource.
     */
    USE_PROXY: 305,

    /**
     * 306 Switch Proxy.
     * No longer used.
     */
    SWITCH_PROXY: 306,

    /**
     * 307 Temporary Redirect.
     * Indicates that the resource has temporarily been moved to a new URI.
     */
    TEMPORARY_REDIRECT: 307,

    /**
     * 308 Permanent Redirect.
     * Indicates that the resource has been permanently moved to a new URI.
     */
    PERMANENT_REDIRECT: 308,

    /**
     * 400 Bad Request.
     * Indicates that the client made a bad request.
     */
    BAD_REQUEST: 400,

    /**
     * 401 Unauthorized.
     * Indicates that the client failed to provide valid authentication credentials.
     */
    UNAUTHORIZED: 401,

    /**
     * 403 Forbidden.
     * Indicates that the client does not have access to the requested resource.
     */
    FORBIDDEN: 403,

    /**
     * 404 Not Found.
     * Indicates that the client requested a resource that could not be found.
     */
    NOT_FOUND: 404,

    /**
     * 405 Method Not Allowed.
     * Indicates that the client used an unsupported HTTP method.
     */
    METHOD_NOT_ALLOWED: 405,

    /**
     * 406 Not Acceptable.
     * Indicates that the client requested a resource with an unsupported format.
     */
    NOT_ACCEPTABLE: 406,

    /**
     * 408 Request Timeout.
     * Indicates that the client did not send a request within the specified time frame.
     */
    REQUEST_TIMEOUT: 408,

    /**
     * 409 Conflict.
     * Indicates that the request could not be processed due to a conflict with the current state of the resource.
     */
    CONFLICT: 409,

    /**
     * 410 Gone.
     * Indicates that the resource is no longer available and will not be available again.
     */
    GONE: 410,

    /**
     * 411 Length Required.
     * Indicates that the client did not send a Content-Length header with the request.
     */
    LENGTH_REQUIRED: 411,

    /**
     * 412 Precondition Failed.
     * Indicates that the client's request failed because a precondition was not met.
     */
    PRECONDITION_FAILED: 412,

    /**
     * 413 Payload Too Large.
     * Indicates that the client's request body was too large to be processed.
     */
    PAYLOAD_TOO_LARGE: 413,

    /**
     * 414 URI Too Long.
     * Indicates that the client's URI was too long to be processed.
     */
    URI_TOO_LONG: 414,

    /**
     * 415 Unsupported Media Type.
     * Indicates that the client's request contained an unsupported media type.
     */
    UNSUPPORTED_MEDIA_TYPE: 415,

    /**
     * 416 Range Not Satisfiable.
     * Indicates that the client's request contained a range that could not be satisfied by the server.
     */
    RANGE_NOT_SATISFIABLE: 416,

    /**
     * 417 Expectation Failed.
     * Indicates that the client's expectation for the request could not be met by the server.
     */
    EXPECTATION_FAILED: 417,

    /**
     * 418 I'm a teapot.
     * Indicates that the server is a teapot and cannot process the request.
     */
    IM_A_TEAPOT: 418,

    /**
     * 421 Misdirected Request.
     * Indicates that the client's request was directed at a server that is not capable of producing a response.
     */
    MISDIRECTED_REQUEST: 421,

    /**
     * 422 Unprocessable Entity.
     * Indicates that the client's request was well-formed but could not be processed by the server.
     */
    UNPROCESSABLE_ENTITY: 422,

    /**
     * 423 Locked.
     * Indicates that the resource requested by the client is currently locked.
     */
    LOCKED: 423,

    /**
     * Indicates that the method could not be performed on the resource because the requested action
     * depended on another action and that action failed.
     */
    FAILED_DEPENDENCY: 424,

    /**
     * Indicates that the client should switch to a different protocol, such as TLS/1.0.
     */
    UPGRADE_REQUIRED: 426,

    /**
     * Indicates that the client must first provide a valid precondition, such as a required
     * header field or parameter.
     */
    PRECONDITION_REQUIRED: 428,

    /**
     * Indicates that the client has sent too many requests in a given amount of time.
     */
    TOO_MANY_REQUESTS: 429,

    /**
     * Indicates that the request header fields are too large and cannot be processed by the server.
     */
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,

    /**
     * Indicates that the resource is unavailable for legal reasons, such as due to a government
     * request or censorship.
     */
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,

    /**
     * Indicates an internal server error. This is a generic error response when the server cannot
     * fulfill a request due to a runtime error.
     */
    INTERNAL_SERVER_ERROR: 500,

    /**
     * Indicates that the server does not support the functionality required to fulfill the request.
     */
    NOT_IMPLEMENTED: 501,

    /**
     * Indicates that the server, while acting as a gateway or proxy, received an invalid response
     * from an upstream server.
     */
    BAD_GATEWAY: 502,

    /**
     * Indicates that the server is currently unavailable (because it is overloaded or down for
     * maintenance).
     */
    SERVICE_UNAVAILABLE: 503,

    /**
     * Indicates that the server did not receive a timely response from an upstream server while
     * acting as a gateway or proxy.
     */
    GATEWAY_TIMEOUT: 504,

    /**
     * Indicates that the server does not support, or refuses to support, the HTTP protocol version
     * that was used in the request message.
     */
    HTTP_VERSION_NOT_SUPPORTED: 505
}
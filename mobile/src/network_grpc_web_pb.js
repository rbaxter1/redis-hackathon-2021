/**
 * @fileoverview gRPC-Web generated client stub for protobuf
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.protobuf = require('./network_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protobuf.NetworkClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protobuf.NetworkPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.SaveImageRequest,
 *   !proto.protobuf.SaveImageResponse>}
 */
const methodDescriptor_Network_SaveImage = new grpc.web.MethodDescriptor(
  '/protobuf.Network/SaveImage',
  grpc.web.MethodType.UNARY,
  proto.protobuf.SaveImageRequest,
  proto.protobuf.SaveImageResponse,
  /**
   * @param {!proto.protobuf.SaveImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.SaveImageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.SaveImageRequest,
 *   !proto.protobuf.SaveImageResponse>}
 */
const methodInfo_Network_SaveImage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.SaveImageResponse,
  /**
   * @param {!proto.protobuf.SaveImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.SaveImageResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.SaveImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.SaveImageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.SaveImageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.saveImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/SaveImage',
      request,
      metadata || {},
      methodDescriptor_Network_SaveImage,
      callback);
};


/**
 * @param {!proto.protobuf.SaveImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.SaveImageResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.saveImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/SaveImage',
      request,
      metadata || {},
      methodDescriptor_Network_SaveImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.GetImageRequest,
 *   !proto.protobuf.GetImageResponse>}
 */
const methodDescriptor_Network_GetImage = new grpc.web.MethodDescriptor(
  '/protobuf.Network/GetImage',
  grpc.web.MethodType.UNARY,
  proto.protobuf.GetImageRequest,
  proto.protobuf.GetImageResponse,
  /**
   * @param {!proto.protobuf.GetImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.GetImageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.GetImageRequest,
 *   !proto.protobuf.GetImageResponse>}
 */
const methodInfo_Network_GetImage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.GetImageResponse,
  /**
   * @param {!proto.protobuf.GetImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.GetImageResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.GetImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.GetImageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.GetImageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.getImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/GetImage',
      request,
      metadata || {},
      methodDescriptor_Network_GetImage,
      callback);
};


/**
 * @param {!proto.protobuf.GetImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.GetImageResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.getImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/GetImage',
      request,
      metadata || {},
      methodDescriptor_Network_GetImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.CreateUserRequest,
 *   !proto.protobuf.CreateUserResponse>}
 */
const methodDescriptor_Network_CreateUser = new grpc.web.MethodDescriptor(
  '/protobuf.Network/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.protobuf.CreateUserRequest,
  proto.protobuf.CreateUserResponse,
  /**
   * @param {!proto.protobuf.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.CreateUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.CreateUserRequest,
 *   !proto.protobuf.CreateUserResponse>}
 */
const methodInfo_Network_CreateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.CreateUserResponse,
  /**
   * @param {!proto.protobuf.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.CreateUserResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.CreateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.CreateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/CreateUser',
      request,
      metadata || {},
      methodDescriptor_Network_CreateUser,
      callback);
};


/**
 * @param {!proto.protobuf.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.CreateUserResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/CreateUser',
      request,
      metadata || {},
      methodDescriptor_Network_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.GetUserRequest,
 *   !proto.protobuf.GetUserResponse>}
 */
const methodDescriptor_Network_GetUser = new grpc.web.MethodDescriptor(
  '/protobuf.Network/GetUser',
  grpc.web.MethodType.UNARY,
  proto.protobuf.GetUserRequest,
  proto.protobuf.GetUserResponse,
  /**
   * @param {!proto.protobuf.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.GetUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.GetUserRequest,
 *   !proto.protobuf.GetUserResponse>}
 */
const methodInfo_Network_GetUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.GetUserResponse,
  /**
   * @param {!proto.protobuf.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/GetUser',
      request,
      metadata || {},
      methodDescriptor_Network_GetUser,
      callback);
};


/**
 * @param {!proto.protobuf.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.GetUserResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/GetUser',
      request,
      metadata || {},
      methodDescriptor_Network_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.SearchForUserRequest,
 *   !proto.protobuf.SearchForUserResponse>}
 */
const methodDescriptor_Network_SearchForUser = new grpc.web.MethodDescriptor(
  '/protobuf.Network/SearchForUser',
  grpc.web.MethodType.UNARY,
  proto.protobuf.SearchForUserRequest,
  proto.protobuf.SearchForUserResponse,
  /**
   * @param {!proto.protobuf.SearchForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.SearchForUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.SearchForUserRequest,
 *   !proto.protobuf.SearchForUserResponse>}
 */
const methodInfo_Network_SearchForUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.SearchForUserResponse,
  /**
   * @param {!proto.protobuf.SearchForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.SearchForUserResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.SearchForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.SearchForUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.SearchForUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.searchForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/SearchForUser',
      request,
      metadata || {},
      methodDescriptor_Network_SearchForUser,
      callback);
};


/**
 * @param {!proto.protobuf.SearchForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.SearchForUserResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.searchForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/SearchForUser',
      request,
      metadata || {},
      methodDescriptor_Network_SearchForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.CreateFriendshipRequest,
 *   !proto.protobuf.CreateFriendshipResponse>}
 */
const methodDescriptor_Network_CreateFriendship = new grpc.web.MethodDescriptor(
  '/protobuf.Network/CreateFriendship',
  grpc.web.MethodType.UNARY,
  proto.protobuf.CreateFriendshipRequest,
  proto.protobuf.CreateFriendshipResponse,
  /**
   * @param {!proto.protobuf.CreateFriendshipRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.CreateFriendshipResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.CreateFriendshipRequest,
 *   !proto.protobuf.CreateFriendshipResponse>}
 */
const methodInfo_Network_CreateFriendship = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.CreateFriendshipResponse,
  /**
   * @param {!proto.protobuf.CreateFriendshipRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.CreateFriendshipResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.CreateFriendshipRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.CreateFriendshipResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.CreateFriendshipResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.createFriendship =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/CreateFriendship',
      request,
      metadata || {},
      methodDescriptor_Network_CreateFriendship,
      callback);
};


/**
 * @param {!proto.protobuf.CreateFriendshipRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.CreateFriendshipResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.createFriendship =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/CreateFriendship',
      request,
      metadata || {},
      methodDescriptor_Network_CreateFriendship);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.ReplyToFriendshipRequest,
 *   !proto.protobuf.ReplyToFriendshipResponse>}
 */
const methodDescriptor_Network_ReplyToFriendship = new grpc.web.MethodDescriptor(
  '/protobuf.Network/ReplyToFriendship',
  grpc.web.MethodType.UNARY,
  proto.protobuf.ReplyToFriendshipRequest,
  proto.protobuf.ReplyToFriendshipResponse,
  /**
   * @param {!proto.protobuf.ReplyToFriendshipRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.ReplyToFriendshipResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.ReplyToFriendshipRequest,
 *   !proto.protobuf.ReplyToFriendshipResponse>}
 */
const methodInfo_Network_ReplyToFriendship = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.ReplyToFriendshipResponse,
  /**
   * @param {!proto.protobuf.ReplyToFriendshipRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.ReplyToFriendshipResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.ReplyToFriendshipRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.ReplyToFriendshipResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.ReplyToFriendshipResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.replyToFriendship =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/ReplyToFriendship',
      request,
      metadata || {},
      methodDescriptor_Network_ReplyToFriendship,
      callback);
};


/**
 * @param {!proto.protobuf.ReplyToFriendshipRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.ReplyToFriendshipResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.replyToFriendship =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/ReplyToFriendship',
      request,
      metadata || {},
      methodDescriptor_Network_ReplyToFriendship);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.SubmitItemRequest,
 *   !proto.protobuf.SubmitItemResponse>}
 */
const methodDescriptor_Network_SubmitItem = new grpc.web.MethodDescriptor(
  '/protobuf.Network/SubmitItem',
  grpc.web.MethodType.UNARY,
  proto.protobuf.SubmitItemRequest,
  proto.protobuf.SubmitItemResponse,
  /**
   * @param {!proto.protobuf.SubmitItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.SubmitItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.SubmitItemRequest,
 *   !proto.protobuf.SubmitItemResponse>}
 */
const methodInfo_Network_SubmitItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.SubmitItemResponse,
  /**
   * @param {!proto.protobuf.SubmitItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.SubmitItemResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.SubmitItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.SubmitItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.SubmitItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.submitItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/SubmitItem',
      request,
      metadata || {},
      methodDescriptor_Network_SubmitItem,
      callback);
};


/**
 * @param {!proto.protobuf.SubmitItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.SubmitItemResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.submitItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/SubmitItem',
      request,
      metadata || {},
      methodDescriptor_Network_SubmitItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.SubmitItemOfferRequest,
 *   !proto.protobuf.SubmitItemOfferResponse>}
 */
const methodDescriptor_Network_SubmitItemOffer = new grpc.web.MethodDescriptor(
  '/protobuf.Network/SubmitItemOffer',
  grpc.web.MethodType.UNARY,
  proto.protobuf.SubmitItemOfferRequest,
  proto.protobuf.SubmitItemOfferResponse,
  /**
   * @param {!proto.protobuf.SubmitItemOfferRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.SubmitItemOfferResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.SubmitItemOfferRequest,
 *   !proto.protobuf.SubmitItemOfferResponse>}
 */
const methodInfo_Network_SubmitItemOffer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.SubmitItemOfferResponse,
  /**
   * @param {!proto.protobuf.SubmitItemOfferRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.SubmitItemOfferResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.SubmitItemOfferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.SubmitItemOfferResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.SubmitItemOfferResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.submitItemOffer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/SubmitItemOffer',
      request,
      metadata || {},
      methodDescriptor_Network_SubmitItemOffer,
      callback);
};


/**
 * @param {!proto.protobuf.SubmitItemOfferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.SubmitItemOfferResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.submitItemOffer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/SubmitItemOffer',
      request,
      metadata || {},
      methodDescriptor_Network_SubmitItemOffer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.CreateNetworkRequest,
 *   !proto.protobuf.CreateNetworkResponse>}
 */
const methodDescriptor_Network_CreateNetwork = new grpc.web.MethodDescriptor(
  '/protobuf.Network/CreateNetwork',
  grpc.web.MethodType.UNARY,
  proto.protobuf.CreateNetworkRequest,
  proto.protobuf.CreateNetworkResponse,
  /**
   * @param {!proto.protobuf.CreateNetworkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.CreateNetworkResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.CreateNetworkRequest,
 *   !proto.protobuf.CreateNetworkResponse>}
 */
const methodInfo_Network_CreateNetwork = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.CreateNetworkResponse,
  /**
   * @param {!proto.protobuf.CreateNetworkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.CreateNetworkResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.CreateNetworkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.CreateNetworkResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.CreateNetworkResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.createNetwork =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/CreateNetwork',
      request,
      metadata || {},
      methodDescriptor_Network_CreateNetwork,
      callback);
};


/**
 * @param {!proto.protobuf.CreateNetworkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.CreateNetworkResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.createNetwork =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/CreateNetwork',
      request,
      metadata || {},
      methodDescriptor_Network_CreateNetwork);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.GetNetworksForUserRequest,
 *   !proto.protobuf.GetNetworksForUserResponse>}
 */
const methodDescriptor_Network_GetNetworksForUser = new grpc.web.MethodDescriptor(
  '/protobuf.Network/GetNetworksForUser',
  grpc.web.MethodType.UNARY,
  proto.protobuf.GetNetworksForUserRequest,
  proto.protobuf.GetNetworksForUserResponse,
  /**
   * @param {!proto.protobuf.GetNetworksForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.GetNetworksForUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.GetNetworksForUserRequest,
 *   !proto.protobuf.GetNetworksForUserResponse>}
 */
const methodInfo_Network_GetNetworksForUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.GetNetworksForUserResponse,
  /**
   * @param {!proto.protobuf.GetNetworksForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.GetNetworksForUserResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.GetNetworksForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.GetNetworksForUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.GetNetworksForUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.getNetworksForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/GetNetworksForUser',
      request,
      metadata || {},
      methodDescriptor_Network_GetNetworksForUser,
      callback);
};


/**
 * @param {!proto.protobuf.GetNetworksForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.GetNetworksForUserResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.getNetworksForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/GetNetworksForUser',
      request,
      metadata || {},
      methodDescriptor_Network_GetNetworksForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.GetItemsForUserRequest,
 *   !proto.protobuf.GetItemsForUserResponse>}
 */
const methodDescriptor_Network_GetItemsForUser = new grpc.web.MethodDescriptor(
  '/protobuf.Network/GetItemsForUser',
  grpc.web.MethodType.UNARY,
  proto.protobuf.GetItemsForUserRequest,
  proto.protobuf.GetItemsForUserResponse,
  /**
   * @param {!proto.protobuf.GetItemsForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.GetItemsForUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.GetItemsForUserRequest,
 *   !proto.protobuf.GetItemsForUserResponse>}
 */
const methodInfo_Network_GetItemsForUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.GetItemsForUserResponse,
  /**
   * @param {!proto.protobuf.GetItemsForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.GetItemsForUserResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.GetItemsForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.GetItemsForUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.GetItemsForUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.getItemsForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/GetItemsForUser',
      request,
      metadata || {},
      methodDescriptor_Network_GetItemsForUser,
      callback);
};


/**
 * @param {!proto.protobuf.GetItemsForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.GetItemsForUserResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.getItemsForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/GetItemsForUser',
      request,
      metadata || {},
      methodDescriptor_Network_GetItemsForUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.GetItemsForNetworkRequest,
 *   !proto.protobuf.GetItemsForNetworkResponse>}
 */
const methodDescriptor_Network_GetItemsForNetwork = new grpc.web.MethodDescriptor(
  '/protobuf.Network/GetItemsForNetwork',
  grpc.web.MethodType.UNARY,
  proto.protobuf.GetItemsForNetworkRequest,
  proto.protobuf.GetItemsForNetworkResponse,
  /**
   * @param {!proto.protobuf.GetItemsForNetworkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.GetItemsForNetworkResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.GetItemsForNetworkRequest,
 *   !proto.protobuf.GetItemsForNetworkResponse>}
 */
const methodInfo_Network_GetItemsForNetwork = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.GetItemsForNetworkResponse,
  /**
   * @param {!proto.protobuf.GetItemsForNetworkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.GetItemsForNetworkResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.GetItemsForNetworkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.GetItemsForNetworkResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.GetItemsForNetworkResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.getItemsForNetwork =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/GetItemsForNetwork',
      request,
      metadata || {},
      methodDescriptor_Network_GetItemsForNetwork,
      callback);
};


/**
 * @param {!proto.protobuf.GetItemsForNetworkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.GetItemsForNetworkResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.getItemsForNetwork =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/GetItemsForNetwork',
      request,
      metadata || {},
      methodDescriptor_Network_GetItemsForNetwork);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.SearchForNetworksRequest,
 *   !proto.protobuf.SearchForNetworksResponse>}
 */
const methodDescriptor_Network_SearchForNetworks = new grpc.web.MethodDescriptor(
  '/protobuf.Network/SearchForNetworks',
  grpc.web.MethodType.UNARY,
  proto.protobuf.SearchForNetworksRequest,
  proto.protobuf.SearchForNetworksResponse,
  /**
   * @param {!proto.protobuf.SearchForNetworksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.SearchForNetworksResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.SearchForNetworksRequest,
 *   !proto.protobuf.SearchForNetworksResponse>}
 */
const methodInfo_Network_SearchForNetworks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.SearchForNetworksResponse,
  /**
   * @param {!proto.protobuf.SearchForNetworksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.SearchForNetworksResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.SearchForNetworksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.SearchForNetworksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.SearchForNetworksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.searchForNetworks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/SearchForNetworks',
      request,
      metadata || {},
      methodDescriptor_Network_SearchForNetworks,
      callback);
};


/**
 * @param {!proto.protobuf.SearchForNetworksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.SearchForNetworksResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.searchForNetworks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/SearchForNetworks',
      request,
      metadata || {},
      methodDescriptor_Network_SearchForNetworks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.InviteUserToNetworkRequest,
 *   !proto.protobuf.InviteUserToNetworkResponse>}
 */
const methodDescriptor_Network_InviteUserToNetwork = new grpc.web.MethodDescriptor(
  '/protobuf.Network/InviteUserToNetwork',
  grpc.web.MethodType.UNARY,
  proto.protobuf.InviteUserToNetworkRequest,
  proto.protobuf.InviteUserToNetworkResponse,
  /**
   * @param {!proto.protobuf.InviteUserToNetworkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.InviteUserToNetworkResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.InviteUserToNetworkRequest,
 *   !proto.protobuf.InviteUserToNetworkResponse>}
 */
const methodInfo_Network_InviteUserToNetwork = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.InviteUserToNetworkResponse,
  /**
   * @param {!proto.protobuf.InviteUserToNetworkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.InviteUserToNetworkResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.InviteUserToNetworkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.InviteUserToNetworkResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.InviteUserToNetworkResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.inviteUserToNetwork =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/InviteUserToNetwork',
      request,
      metadata || {},
      methodDescriptor_Network_InviteUserToNetwork,
      callback);
};


/**
 * @param {!proto.protobuf.InviteUserToNetworkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.InviteUserToNetworkResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.inviteUserToNetwork =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/InviteUserToNetwork',
      request,
      metadata || {},
      methodDescriptor_Network_InviteUserToNetwork);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.ReplyToNetworkInviteRequest,
 *   !proto.protobuf.ReplyToNetworkInviteResponse>}
 */
const methodDescriptor_Network_ReplyToNetworkInvite = new grpc.web.MethodDescriptor(
  '/protobuf.Network/ReplyToNetworkInvite',
  grpc.web.MethodType.UNARY,
  proto.protobuf.ReplyToNetworkInviteRequest,
  proto.protobuf.ReplyToNetworkInviteResponse,
  /**
   * @param {!proto.protobuf.ReplyToNetworkInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.ReplyToNetworkInviteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.ReplyToNetworkInviteRequest,
 *   !proto.protobuf.ReplyToNetworkInviteResponse>}
 */
const methodInfo_Network_ReplyToNetworkInvite = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.ReplyToNetworkInviteResponse,
  /**
   * @param {!proto.protobuf.ReplyToNetworkInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.ReplyToNetworkInviteResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.ReplyToNetworkInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.ReplyToNetworkInviteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.ReplyToNetworkInviteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.replyToNetworkInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/ReplyToNetworkInvite',
      request,
      metadata || {},
      methodDescriptor_Network_ReplyToNetworkInvite,
      callback);
};


/**
 * @param {!proto.protobuf.ReplyToNetworkInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.ReplyToNetworkInviteResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.replyToNetworkInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/ReplyToNetworkInvite',
      request,
      metadata || {},
      methodDescriptor_Network_ReplyToNetworkInvite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.JoinNetworkRequest,
 *   !proto.protobuf.JoinNetworkResponse>}
 */
const methodDescriptor_Network_JoinNetwork = new grpc.web.MethodDescriptor(
  '/protobuf.Network/JoinNetwork',
  grpc.web.MethodType.UNARY,
  proto.protobuf.JoinNetworkRequest,
  proto.protobuf.JoinNetworkResponse,
  /**
   * @param {!proto.protobuf.JoinNetworkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.JoinNetworkResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.JoinNetworkRequest,
 *   !proto.protobuf.JoinNetworkResponse>}
 */
const methodInfo_Network_JoinNetwork = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.JoinNetworkResponse,
  /**
   * @param {!proto.protobuf.JoinNetworkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.JoinNetworkResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.JoinNetworkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.JoinNetworkResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.JoinNetworkResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.joinNetwork =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/JoinNetwork',
      request,
      metadata || {},
      methodDescriptor_Network_JoinNetwork,
      callback);
};


/**
 * @param {!proto.protobuf.JoinNetworkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.JoinNetworkResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.joinNetwork =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/JoinNetwork',
      request,
      metadata || {},
      methodDescriptor_Network_JoinNetwork);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.GetOffersForUserRequest,
 *   !proto.protobuf.GetOffersForUserResponse>}
 */
const methodDescriptor_Network_GetOffersForUser = new grpc.web.MethodDescriptor(
  '/protobuf.Network/GetOffersForUser',
  grpc.web.MethodType.UNARY,
  proto.protobuf.GetOffersForUserRequest,
  proto.protobuf.GetOffersForUserResponse,
  /**
   * @param {!proto.protobuf.GetOffersForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.GetOffersForUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.GetOffersForUserRequest,
 *   !proto.protobuf.GetOffersForUserResponse>}
 */
const methodInfo_Network_GetOffersForUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.GetOffersForUserResponse,
  /**
   * @param {!proto.protobuf.GetOffersForUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.GetOffersForUserResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.GetOffersForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.GetOffersForUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.GetOffersForUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.getOffersForUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/GetOffersForUser',
      request,
      metadata || {},
      methodDescriptor_Network_GetOffersForUser,
      callback);
};


/**
 * @param {!proto.protobuf.GetOffersForUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.GetOffersForUserResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.getOffersForUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/GetOffersForUser',
      request,
      metadata || {},
      methodDescriptor_Network_GetOffersForUser);
};


module.exports = proto.protobuf;


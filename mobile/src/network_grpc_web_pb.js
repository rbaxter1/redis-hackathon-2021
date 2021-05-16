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
 *   !proto.protobuf.GetOffersForUserItemsRequest,
 *   !proto.protobuf.GetOffersForUserItemsResponse>}
 */
const methodDescriptor_Network_GetOffersForUserItems = new grpc.web.MethodDescriptor(
  '/protobuf.Network/GetOffersForUserItems',
  grpc.web.MethodType.UNARY,
  proto.protobuf.GetOffersForUserItemsRequest,
  proto.protobuf.GetOffersForUserItemsResponse,
  /**
   * @param {!proto.protobuf.GetOffersForUserItemsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.GetOffersForUserItemsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.GetOffersForUserItemsRequest,
 *   !proto.protobuf.GetOffersForUserItemsResponse>}
 */
const methodInfo_Network_GetOffersForUserItems = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.GetOffersForUserItemsResponse,
  /**
   * @param {!proto.protobuf.GetOffersForUserItemsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.GetOffersForUserItemsResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.GetOffersForUserItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.GetOffersForUserItemsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.GetOffersForUserItemsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.getOffersForUserItems =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/GetOffersForUserItems',
      request,
      metadata || {},
      methodDescriptor_Network_GetOffersForUserItems,
      callback);
};


/**
 * @param {!proto.protobuf.GetOffersForUserItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.GetOffersForUserItemsResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.getOffersForUserItems =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/GetOffersForUserItems',
      request,
      metadata || {},
      methodDescriptor_Network_GetOffersForUserItems);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.GetOffersMadeByUserRequest,
 *   !proto.protobuf.GetOffersMadeByUserResponse>}
 */
const methodDescriptor_Network_GetOffersMadeByUser = new grpc.web.MethodDescriptor(
  '/protobuf.Network/GetOffersMadeByUser',
  grpc.web.MethodType.UNARY,
  proto.protobuf.GetOffersMadeByUserRequest,
  proto.protobuf.GetOffersMadeByUserResponse,
  /**
   * @param {!proto.protobuf.GetOffersMadeByUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.GetOffersMadeByUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protobuf.GetOffersMadeByUserRequest,
 *   !proto.protobuf.GetOffersMadeByUserResponse>}
 */
const methodInfo_Network_GetOffersMadeByUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protobuf.GetOffersMadeByUserResponse,
  /**
   * @param {!proto.protobuf.GetOffersMadeByUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.GetOffersMadeByUserResponse.deserializeBinary
);


/**
 * @param {!proto.protobuf.GetOffersMadeByUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.protobuf.GetOffersMadeByUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.GetOffersMadeByUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.NetworkClient.prototype.getOffersMadeByUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.Network/GetOffersMadeByUser',
      request,
      metadata || {},
      methodDescriptor_Network_GetOffersMadeByUser,
      callback);
};


/**
 * @param {!proto.protobuf.GetOffersMadeByUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.GetOffersMadeByUserResponse>}
 *     Promise that resolves to the response
 */
proto.protobuf.NetworkPromiseClient.prototype.getOffersMadeByUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.Network/GetOffersMadeByUser',
      request,
      metadata || {},
      methodDescriptor_Network_GetOffersMadeByUser);
};


module.exports = proto.protobuf;


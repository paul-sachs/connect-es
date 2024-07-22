// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// source: buf/validate/priv/private.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.buf.validate.priv.Constraint', null, global);
goog.exportSymbol('proto.buf.validate.priv.FieldConstraints', null, global);
goog.exportSymbol('proto.buf.validate.priv.field', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.buf.validate.priv.FieldConstraints = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.buf.validate.priv.FieldConstraints.repeatedFields_, null);
};
goog.inherits(proto.buf.validate.priv.FieldConstraints, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.buf.validate.priv.FieldConstraints.displayName = 'proto.buf.validate.priv.FieldConstraints';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.buf.validate.priv.Constraint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.buf.validate.priv.Constraint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.buf.validate.priv.Constraint.displayName = 'proto.buf.validate.priv.Constraint';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.buf.validate.priv.FieldConstraints.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.buf.validate.priv.FieldConstraints.prototype.toObject = function(opt_includeInstance) {
  return proto.buf.validate.priv.FieldConstraints.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.buf.validate.priv.FieldConstraints} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.validate.priv.FieldConstraints.toObject = function(includeInstance, msg) {
  var f, obj = {
celList: jspb.Message.toObjectList(msg.getCelList(),
    proto.buf.validate.priv.Constraint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.buf.validate.priv.FieldConstraints}
 */
proto.buf.validate.priv.FieldConstraints.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.buf.validate.priv.FieldConstraints;
  return proto.buf.validate.priv.FieldConstraints.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.buf.validate.priv.FieldConstraints} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.buf.validate.priv.FieldConstraints}
 */
proto.buf.validate.priv.FieldConstraints.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.buf.validate.priv.Constraint;
      reader.readMessage(value,proto.buf.validate.priv.Constraint.deserializeBinaryFromReader);
      msg.addCel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.buf.validate.priv.FieldConstraints.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.buf.validate.priv.FieldConstraints.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.buf.validate.priv.FieldConstraints} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.validate.priv.FieldConstraints.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCelList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.buf.validate.priv.Constraint.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Constraint cel = 1;
 * @return {!Array<!proto.buf.validate.priv.Constraint>}
 */
proto.buf.validate.priv.FieldConstraints.prototype.getCelList = function() {
  return /** @type{!Array<!proto.buf.validate.priv.Constraint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.buf.validate.priv.Constraint, 1));
};


/**
 * @param {!Array<!proto.buf.validate.priv.Constraint>} value
 * @return {!proto.buf.validate.priv.FieldConstraints} returns this
*/
proto.buf.validate.priv.FieldConstraints.prototype.setCelList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.buf.validate.priv.Constraint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.buf.validate.priv.Constraint}
 */
proto.buf.validate.priv.FieldConstraints.prototype.addCel = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.buf.validate.priv.Constraint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.buf.validate.priv.FieldConstraints} returns this
 */
proto.buf.validate.priv.FieldConstraints.prototype.clearCelList = function() {
  return this.setCelList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.buf.validate.priv.Constraint.prototype.toObject = function(opt_includeInstance) {
  return proto.buf.validate.priv.Constraint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.buf.validate.priv.Constraint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.validate.priv.Constraint.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
expression: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.buf.validate.priv.Constraint}
 */
proto.buf.validate.priv.Constraint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.buf.validate.priv.Constraint;
  return proto.buf.validate.priv.Constraint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.buf.validate.priv.Constraint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.buf.validate.priv.Constraint}
 */
proto.buf.validate.priv.Constraint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpression(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.buf.validate.priv.Constraint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.buf.validate.priv.Constraint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.buf.validate.priv.Constraint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.validate.priv.Constraint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExpression();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.buf.validate.priv.Constraint.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.buf.validate.priv.Constraint} returns this
 */
proto.buf.validate.priv.Constraint.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.buf.validate.priv.Constraint.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.buf.validate.priv.Constraint} returns this
 */
proto.buf.validate.priv.Constraint.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string expression = 3;
 * @return {string}
 */
proto.buf.validate.priv.Constraint.prototype.getExpression = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.buf.validate.priv.Constraint} returns this
 */
proto.buf.validate.priv.Constraint.prototype.setExpression = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `field`.
 * @type {!jspb.ExtensionFieldInfo<!proto.buf.validate.priv.FieldConstraints>}
 */
proto.buf.validate.priv.field = new jspb.ExtensionFieldInfo(
    1160,
    {field: 0},
    proto.buf.validate.priv.FieldConstraints,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.buf.validate.priv.FieldConstraints.toObject),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[1160] = new jspb.ExtensionFieldBinaryInfo(
    proto.buf.validate.priv.field,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.buf.validate.priv.FieldConstraints.serializeBinaryToWriter,
    proto.buf.validate.priv.FieldConstraints.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[1160] = proto.buf.validate.priv.field;

goog.object.extend(exports, proto.buf.validate.priv);
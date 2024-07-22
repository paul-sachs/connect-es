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

// @generated by protoc-gen-es v2.0.0-beta.2 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/registry/owner/v1/owner_service.proto (package buf.registry.owner.v1, syntax proto3)
/* eslint-disable */

import type { GenDescFile, GenDescMessage, GenDescService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Owner, OwnerRef } from "./owner_pb";
import { file_buf_registry_owner_v1_owner } from "./owner_pb";
import { file_buf_validate_validate } from "../../../validate/validate_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file buf/registry/owner/v1/owner_service.proto.
 */
export const file_buf_registry_owner_v1_owner_service: GenDescFile = /*@__PURE__*/
  fileDesc("CilidWYvcmVnaXN0cnkvb3duZXIvdjEvb3duZXJfc2VydmljZS5wcm90bxIVYnVmLnJlZ2lzdHJ5Lm93bmVyLnYxIlQKEEdldE93bmVyc1JlcXVlc3QSQAoKb3duZXJfcmVmcxgBIAMoCzIfLmJ1Zi5yZWdpc3RyeS5vd25lci52MS5Pd25lclJlZkILukgIkgEFCAEQ+gEiSwoRR2V0T3duZXJzUmVzcG9uc2USNgoGb3duZXJzGAEgAygLMhwuYnVmLnJlZ2lzdHJ5Lm93bmVyLnYxLk93bmVyQgi6SAWSAQIIATJzCgxPd25lclNlcnZpY2USYwoJR2V0T3duZXJzEicuYnVmLnJlZ2lzdHJ5Lm93bmVyLnYxLkdldE93bmVyc1JlcXVlc3QaKC5idWYucmVnaXN0cnkub3duZXIudjEuR2V0T3duZXJzUmVzcG9uc2UiA5ACAUJNWktidWYuYnVpbGQvZ2VuL2dvL2J1ZmJ1aWxkL3JlZ2lzdHJ5L3Byb3RvY29sYnVmZmVycy9nby9idWYvcmVnaXN0cnkvb3duZXIvdjFiBnByb3RvMw", [file_buf_registry_owner_v1_owner, file_buf_validate_validate]);

/**
 * @generated from message buf.registry.owner.v1.GetOwnersRequest
 */
export type GetOwnersRequest = Message<"buf.registry.owner.v1.GetOwnersRequest"> & {
  /**
   * The Users or Organizations to request.
   *
   * @generated from field: repeated buf.registry.owner.v1.OwnerRef owner_refs = 1;
   */
  ownerRefs: OwnerRef[];
};

/**
 * Describes the message buf.registry.owner.v1.GetOwnersRequest.
 * Use `create(GetOwnersRequestSchema)` to create a new message.
 */
export const GetOwnersRequestSchema: GenDescMessage<GetOwnersRequest> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_owner_service, 0);

/**
 * @generated from message buf.registry.owner.v1.GetOwnersResponse
 */
export type GetOwnersResponse = Message<"buf.registry.owner.v1.GetOwnersResponse"> & {
  /**
   * The retrieved Users or Organizations in the same order as requested.
   *
   * @generated from field: repeated buf.registry.owner.v1.Owner owners = 1;
   */
  owners: Owner[];
};

/**
 * Describes the message buf.registry.owner.v1.GetOwnersResponse.
 * Use `create(GetOwnersResponseSchema)` to create a new message.
 */
export const GetOwnersResponseSchema: GenDescMessage<GetOwnersResponse> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_owner_service, 1);

/**
 * Operate on Users and Organizations in situations where you only
 * know a reference to an owner, without knowing whether or not that
 * owner is a User or Organization.
 *
 * @generated from service buf.registry.owner.v1.OwnerService
 */
export const OwnerService: GenDescService<{
  /**
   * Get Users or Organizations by id or name.
   *
   * @generated from rpc buf.registry.owner.v1.OwnerService.GetOwners
   */
  getOwners: {
    methodKind: "unary";
    input: typeof GetOwnersRequestSchema;
    output: typeof GetOwnersResponseSchema;
  },
}
> = /*@__PURE__*/
  serviceDesc(file_buf_registry_owner_v1_owner_service, 0);

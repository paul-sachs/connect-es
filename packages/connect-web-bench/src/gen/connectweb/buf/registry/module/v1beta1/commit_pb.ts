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
// @generated from file buf/registry/module/v1beta1/commit.proto (package buf.registry.module.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenDescFile, GenDescMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Digest } from "./digest_pb";
import { file_buf_registry_module_v1beta1_digest } from "./digest_pb";
import { file_buf_registry_priv_extension_v1beta1_extension } from "../../priv/extension/v1beta1/extension_pb";
import { file_buf_validate_validate } from "../../../validate/validate_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file buf/registry/module/v1beta1/commit.proto.
 */
export const file_buf_registry_module_v1beta1_commit: GenDescFile = /*@__PURE__*/
  fileDesc("CihidWYvcmVnaXN0cnkvbW9kdWxlL3YxYmV0YTEvY29tbWl0LnByb3RvEhtidWYucmVnaXN0cnkubW9kdWxlLnYxYmV0YTEiswIKBkNvbW1pdBIXCgJpZBgBIAEoCUILukgIyAEBcgOIAgESNwoLY3JlYXRlX3RpbWUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQga6SAPIAQESHQoIb3duZXJfaWQYAyABKAlCC7pICMgBAXIDiAIBEh4KCW1vZHVsZV9pZBgEIAEoCUILukgIyAEBcgOIAgESOwoGZGlnZXN0GAUgASgLMiMuYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MWJldGExLkRpZ2VzdEIGukgDyAEBEicKEmNyZWF0ZWRfYnlfdXNlcl9pZBgGIAEoCUILukgI2AEBcgOIAgESKgoSc291cmNlX2NvbnRyb2xfdXJsGAcgASgJQg66SAvYAQFyBhj/AYgBAToG6sUrAhABQlNaUWJ1Zi5idWlsZC9nZW4vZ28vYnVmYnVpbGQvcmVnaXN0cnkvcHJvdG9jb2xidWZmZXJzL2dvL2J1Zi9yZWdpc3RyeS9tb2R1bGUvdjFiZXRhMWIGcHJvdG8z", [file_buf_registry_module_v1beta1_digest, file_buf_registry_priv_extension_v1beta1_extension, file_buf_validate_validate, file_google_protobuf_timestamp]);

/**
 * A commit on a specific Module.
 *
 * Commits are immutable.
 *
 * Many Commits may be associated with one Digest.
 *
 * Note that the Digest returned on a Commit depends on the requested DigestType in the
 * RPC that returned the Commit.
 *
 * @generated from message buf.registry.module.v1beta1.Commit
 */
export type Commit = Message<"buf.registry.module.v1beta1.Commit"> & {
  /**
   * The id of the Commit.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * The time the Commit was pushed to the BSR.
   *
   * Commits are immutable, so there is no corresponding update_time.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  /**
   * The id of the User or Organization that owns the Module that the Commit is associated with.
   *
   * @generated from field: string owner_id = 3;
   */
  ownerId: string;

  /**
   * The id of the Module that the Commit is associated with.
   *
   * @generated from field: string module_id = 4;
   */
  moduleId: string;

  /**
   * The Digest of the Commit's contents.
   *
   * Note that individual RPCs may request a specific DigestType, and a Digest of
   * this DigestType will be returned as part of this Commit. This may affect your
   * caching of returned Commit messages if you require different DigestTypes.
   *
   * @generated from field: buf.registry.module.v1beta1.Digest digest = 5;
   */
  digest?: Digest;

  /**
   * The id of the User that created this Commit on the BSR.
   *
   * May be empty if the User is no longer available.
   *
   * @generated from field: string created_by_user_id = 6;
   */
  createdByUserId: string;

  /**
   * The URL of the source control commit that is associated with the Commit.
   *
   * BSR users can navigate to this link to find source control information that is relevant to this Commit
   * (e.g. commit description, PR discussion, authors, approvers, etc.).
   *
   * @generated from field: string source_control_url = 7;
   */
  sourceControlUrl: string;
};

/**
 * Describes the message buf.registry.module.v1beta1.Commit.
 * Use `create(CommitSchema)` to create a new message.
 */
export const CommitSchema: GenDescMessage<Commit> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1beta1_commit, 0);

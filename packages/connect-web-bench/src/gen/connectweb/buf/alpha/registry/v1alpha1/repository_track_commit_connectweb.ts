// Copyright 2020-2022 Buf Technologies, Inc.
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

// @generated by protoc-gen-connect-web v0.0.9 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/alpha/registry/v1alpha1/repository_track_commit.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import {GetRepositoryTrackCommitByReferenceRequest, GetRepositoryTrackCommitByReferenceResponse, GetRepositoryTrackCommitByRepositoryCommitRequest, GetRepositoryTrackCommitByRepositoryCommitResponse, ListRepositoryTrackCommitsByRepositoryTrackRequest, ListRepositoryTrackCommitsByRepositoryTrackResponse} from "./repository_track_commit_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * @generated from service buf.alpha.registry.v1alpha1.RepositoryTrackCommitService
 */
export const RepositoryTrackCommitService = {
  typeName: "buf.alpha.registry.v1alpha1.RepositoryTrackCommitService",
  methods: {
    /**
     * GetRepositoryTrackCommitByRepositoryCommit returns the RepositoryTrackCommit associated given repository_commit on
     * the given repository_track. Returns NOT_FOUND if the RepositoryTrackCommit does not exist.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryTrackCommitService.GetRepositoryTrackCommitByRepositoryCommit
     */
    getRepositoryTrackCommitByRepositoryCommit: {
      name: "GetRepositoryTrackCommitByRepositoryCommit",
      I: GetRepositoryTrackCommitByRepositoryCommitRequest,
      O: GetRepositoryTrackCommitByRepositoryCommitResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListRepositoryTrackCommitsByRepositoryTrack lists the RepositoryTrackCommitS associated with a repository track,
     * ordered by their sequence id.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryTrackCommitService.ListRepositoryTrackCommitsByRepositoryTrack
     */
    listRepositoryTrackCommitsByRepositoryTrack: {
      name: "ListRepositoryTrackCommitsByRepositoryTrack",
      I: ListRepositoryTrackCommitsByRepositoryTrackRequest,
      O: ListRepositoryTrackCommitsByRepositoryTrackResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetRepositoryTrackCommitByReference returns the RepositoryTrackCommit associated with the given reference.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryTrackCommitService.GetRepositoryTrackCommitByReference
     */
    getRepositoryTrackCommitByReference: {
      name: "GetRepositoryTrackCommitByReference",
      I: GetRepositoryTrackCommitByReferenceRequest,
      O: GetRepositoryTrackCommitByReferenceResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

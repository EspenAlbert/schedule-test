# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabelIgnored Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058020000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 2.00s
[2026-07-11 00:55](#error-2026-07-11t0055110000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 3.03s
[2026-07-21 00:53](#error-2026-07-21t0053100000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.09s
[2026-07-23 00:49](#error-2026-07-23t0049380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 4.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:02+00:00
```
2026-07-09T00:58:02.4966930Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2026-07-09T00:58:24.4650371Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2026-07-09T00:58:26.4194015Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2026-07-09T00:58:26.4195370Z     resource_test.go:592: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-09T00:58:26.4195937Z         
2026-07-09T00:58:26.4196389Z         Error: error creating project: test-acc-tf-p-7069545492228305033
2026-07-09T00:58:26.4196786Z         
2026-07-09T00:58:26.4197161Z           with mongodbatlas_project.cluster_project,
2026-07-09T00:58:26.4197898Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-09T00:58:26.4198590Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-09T00:58:26.4198940Z         
2026-07-09T00:58:26.4199445Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-09T00:58:26.4200148Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-09T00:58:26.4200821Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-09T00:58:26.4201481Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-09T00:58:26.4201942Z         BadRequestDetail: 
2026-07-09T00:58:26.4702874Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (2.01s)
```

- 2026-07-10 PASS 9 seconds
- 2026-07-11

### Error 2026-07-11T00:55:11+00:00
```
2026-07-11T00:55:11.2762255Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2026-07-11T00:56:44.7388887Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2026-07-11T00:56:47.4979076Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2026-07-11T00:56:47.4980559Z     resource_test.go:592: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-11T00:56:47.4981636Z         
2026-07-11T00:56:47.4982587Z         Error: error creating project: test-acc-tf-p-6342314797946390920
2026-07-11T00:56:47.4983375Z         
2026-07-11T00:56:47.4984380Z           with mongodbatlas_project.cluster_project,
2026-07-11T00:56:47.4985879Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-11T00:56:47.4987345Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-11T00:56:47.4988085Z         
2026-07-11T00:56:47.4989117Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-11T00:56:47.4990503Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-11T00:56:47.4991896Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-11T00:56:47.4993274Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-11T00:56:47.4994890Z         BadRequestDetail: 
2026-07-11T00:56:47.6106982Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (3.27s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 6 seconds
- 2026-07-14 PASS 14 seconds
- 2026-07-15 PASS 16 seconds
- 2026-07-16 PASS 15 seconds
- 2026-07-17 PASS 5 seconds
- 2026-07-18 PASS 15 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:10+00:00
```
2026-07-21T00:53:10.0115400Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2026-07-21T00:53:23.4314508Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2026-07-21T00:53:25.2173709Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2026-07-21T00:53:25.2174446Z     resource_test.go:592: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-21T00:53:25.2174957Z         
2026-07-21T00:53:25.2175397Z         Error: error creating project: test-acc-tf-p-3669359454827349641
2026-07-21T00:53:25.2175780Z         
2026-07-21T00:53:25.2176149Z           with mongodbatlas_project.cluster_project,
2026-07-21T00:53:25.2176862Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-21T00:53:25.2177522Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-21T00:53:25.2177871Z         
2026-07-21T00:53:25.2178362Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T00:53:25.2179044Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T00:53:25.2179710Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T00:53:25.2180556Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T00:53:25.2181014Z         BadRequestDetail: 
2026-07-21T00:53:25.2852650Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (1.86s)
```

- 2026-07-22 PASS 9 seconds
- 2026-07-23

### Error 2026-07-23T00:49:38+00:00
```
2026-07-23T00:49:38.0410601Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2026-07-23T00:49:49.7218121Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2026-07-23T00:49:53.8705026Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2026-07-23T00:49:53.8705936Z     resource_test.go:592: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-23T00:49:53.8706589Z         
2026-07-23T00:49:53.8707057Z         Error: error creating project: test-acc-tf-p-1095721306551955268
2026-07-23T00:49:53.8707452Z         
2026-07-23T00:49:53.8707840Z           with mongodbatlas_project.cluster_project,
2026-07-23T00:49:53.8708568Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-23T00:49:53.8709244Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-23T00:49:53.8709610Z         
2026-07-23T00:49:53.8710117Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:49:53.8711073Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:49:53.8712008Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:49:53.8712704Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:49:53.8713157Z         BadRequestDetail: 
2026-07-23T00:49:53.9203207Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (4.20s)
```

- 2026-07-24 PASS 12 seconds
- 2026-07-25 PASS 8 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 4 seconds
- 2026-07-28 PASS 8 seconds
- 2026-07-29 PASS 5 seconds
- 2026-07-30 PASS 9 seconds
- 2026-07-31
  - PASS 8 seconds
  - PASS 9 seconds
- 2026-08-01 PASS 9 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 6 seconds
- 2026-08-04 PASS 4 seconds
- 2026-08-05 PASS 10 seconds
- 2026-08-06 PASS 8 seconds
- 2026-08-07 PASS 4 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 9 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 12 seconds
  - PASS 3 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 8 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 10 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 seconds
  - PASS 5 seconds
- 2026-07-30 PASS 10 seconds
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 4 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

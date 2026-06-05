# cluster/cluster/TestAccCluster_WithTags Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 7)
Success rate: 77.42%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:59](#error-2026-05-09t0059200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.00s
[2026-05-14 00:59](#error-2026-05-14t0059520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.10s
[2026-05-16 00:54](#error-2026-05-16t0054370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.07s
[2026-05-19 01:01](#error-2026-05-19t0101510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.08s
[2026-05-21 01:02](#error-2026-05-21t0102410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.03s
[2026-05-28 00:59](#error-2026-05-28t0059440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 3.01s
[2026-06-02 01:07](#error-2026-06-02t0107270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 45 minutes
  - PASS 58 minutes
- 2026-05-08 PASS 28 minutes
- 2026-05-09

### Error 2026-05-09T00:59:20+00:00
```
2026-05-09T00:59:20.7498782Z === RUN   TestAccCluster_WithTags
2026-05-09T01:05:11.5618080Z === CONT  TestAccCluster_WithTags
2026-05-09T01:06:25.4903863Z === NAME  TestAccCluster_WithTags
2026-05-09T01:06:25.4904490Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2026-05-09T01:06:25.4904981Z         
2026-05-09T01:06:25.4905459Z         Error: error creating project: test-acc-tf-p-1075940364462164515
2026-05-09T01:06:25.4905801Z         
2026-05-09T01:06:25.4906202Z           with mongodbatlas_project.cluster_project,
2026-05-09T01:06:25.4907117Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-05-09T01:06:25.4908109Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-05-09T01:06:25.4908626Z         
2026-05-09T01:06:25.4909500Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:06:25.4910621Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:06:25.4911340Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:06:25.5393864Z --- FAIL: TestAccCluster_WithTags (74.01s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 28 minutes
- 2026-05-12 PASS 23 minutes
- 2026-05-13 PASS 25 minutes
- 2026-05-14

### Error 2026-05-14T00:59:52+00:00
```
2026-05-14T00:59:52.0388010Z === RUN   TestAccCluster_WithTags
2026-05-14T00:59:58.2451451Z === CONT  TestAccCluster_WithTags
2026-05-14T01:01:08.1315299Z === NAME  TestAccCluster_WithTags
2026-05-14T01:01:08.1316255Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2026-05-14T01:01:08.1316960Z         
2026-05-14T01:01:08.1317405Z         Error: error creating project: test-acc-tf-p-3653064560964849809
2026-05-14T01:01:08.1318144Z         
2026-05-14T01:01:08.1318493Z           with mongodbatlas_project.cluster_project,
2026-05-14T01:01:08.1319485Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-05-14T01:01:08.1320572Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-05-14T01:01:08.1320916Z         
2026-05-14T01:01:08.1321389Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-14T01:01:08.1322044Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-14T01:01:08.1322640Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:01:08.1815229Z --- FAIL: TestAccCluster_WithTags (69.98s)
```

- 2026-05-15 PASS 25 minutes
- 2026-05-16

### Error 2026-05-16T00:54:37+00:00
```
2026-05-16T00:54:37.3710236Z === RUN   TestAccCluster_WithTags
2026-05-16T00:56:25.0949071Z === CONT  TestAccCluster_WithTags
2026-05-16T00:57:29.6290071Z === NAME  TestAccCluster_WithTags
2026-05-16T00:57:29.6290700Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2026-05-16T00:57:29.6291280Z         
2026-05-16T00:57:29.6291725Z         Error: error creating project: test-acc-tf-p-3108836543819927452
2026-05-16T00:57:29.6292142Z         
2026-05-16T00:57:29.6292561Z           with mongodbatlas_project.cluster_project,
2026-05-16T00:57:29.6293329Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-05-16T00:57:29.6294047Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-05-16T00:57:29.6294366Z         
2026-05-16T00:57:29.6295057Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T00:57:29.6295850Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T00:57:29.6296692Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:57:29.6852499Z --- FAIL: TestAccCluster_WithTags (64.70s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 30 minutes
- 2026-05-19

### Error 2026-05-19T01:01:51+00:00
```
2026-05-19T01:01:51.8456464Z === RUN   TestAccCluster_WithTags
2026-05-19T01:02:19.9946464Z === CONT  TestAccCluster_WithTags
2026-05-19T01:02:22.7590443Z    test_terraform_path=/home/runner/work/_temp/96be98c5-05f6-4660-b53a-58fef64936b9/terraform test_working_directory=/tmp/plugintest2956135229 test_step_number=1 test_name=TestAccCluster_RegionsConfig
2026-05-19T01:03:25.7073568Z === NAME  TestAccCluster_WithTags
2026-05-19T01:03:25.7074220Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2026-05-19T01:03:25.7074855Z         
2026-05-19T01:03:25.7075295Z         Error: error creating project: test-acc-tf-p-4687012158375527783
2026-05-19T01:03:25.7075655Z         
2026-05-19T01:03:25.7076171Z           with mongodbatlas_project.cluster_project,
2026-05-19T01:03:25.7077023Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-05-19T01:03:25.7077789Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-05-19T01:03:25.7078120Z         
2026-05-19T01:03:25.7078731Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:03:25.7079461Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:03:25.7080128Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:25.7575532Z --- FAIL: TestAccCluster_WithTags (65.84s)
```

- 2026-05-20 PASS 24 minutes
- 2026-05-21

### Error 2026-05-21T01:02:41+00:00
```
2026-05-21T01:02:41.4469973Z === RUN   TestAccCluster_WithTags
2026-05-21T01:02:45.7229815Z === CONT  TestAccCluster_WithTags
2026-05-21T01:03:53.9920962Z === NAME  TestAccCluster_WithTags
2026-05-21T01:03:53.9921853Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2026-05-21T01:03:53.9922391Z         
2026-05-21T01:03:53.9922949Z         Error: error creating project: test-acc-tf-p-4881685033854832873
2026-05-21T01:03:53.9923403Z         
2026-05-21T01:03:53.9923815Z           with mongodbatlas_project.cluster_project,
2026-05-21T01:03:53.9924659Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-05-21T01:03:53.9925431Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-05-21T01:03:53.9925847Z         
2026-05-21T01:03:53.9926372Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:03:53.9927286Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:03:53.9928019Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:03:54.0389818Z --- FAIL: TestAccCluster_WithTags (68.35s)
```

- 2026-05-22 PASS 44 minutes
- 2026-05-23 PASS 33 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 28 minutes
- 2026-05-26 PASS 26 minutes
- 2026-05-27 PASS 45 minutes
- 2026-05-28

### Error 2026-05-28T00:59:44+00:00
```
2026-05-28T00:59:44.8991150Z === RUN   TestAccCluster_WithTags
2026-05-28T01:01:02.3491914Z === CONT  TestAccCluster_WithTags
2026-05-28T01:01:05.4287355Z === NAME  TestAccCluster_WithTags
2026-05-28T01:01:05.4287923Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2026-05-28T01:01:05.4288318Z         
2026-05-28T01:01:05.4288789Z         Error: error creating project: test-acc-tf-p-2736613197371615622
2026-05-28T01:01:05.4289133Z         
2026-05-28T01:01:05.4289533Z           with mongodbatlas_project.cluster_project,
2026-05-28T01:01:05.4290256Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-05-28T01:01:05.4290917Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-05-28T01:01:05.4291403Z         
2026-05-28T01:01:05.4291933Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:01:05.4292726Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:01:05.4293466Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:01:05.4294061Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:01:05.4294462Z         BadRequestDetail: 
2026-05-28T01:01:05.4793140Z --- FAIL: TestAccCluster_WithTags (3.13s)
```

- 2026-05-29 PASS 31 minutes
- 2026-05-30 PASS 23 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 25 minutes
- 2026-06-02

### Error 2026-06-02T01:07:27+00:00
```
2026-06-02T01:07:27.2090185Z === RUN   TestAccCluster_WithTags
2026-06-02T01:07:53.1531176Z === CONT  TestAccCluster_WithTags
2026-06-02T01:09:01.1127238Z === NAME  TestAccCluster_WithTags
2026-06-02T01:09:01.1128253Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2026-06-02T01:09:01.1129141Z         
2026-06-02T01:09:01.1129829Z         Error: error creating project: test-acc-tf-p-4982003627235153314
2026-06-02T01:09:01.1130237Z         
2026-06-02T01:09:01.1130732Z           with mongodbatlas_project.cluster_project,
2026-06-02T01:09:01.1131650Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-06-02T01:09:01.1132518Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-06-02T01:09:01.1133006Z         
2026-06-02T01:09:01.1133796Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:09:01.1134495Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:09:01.1135107Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:09:01.1684410Z --- FAIL: TestAccCluster_WithTags (68.02s)
```

- 2026-06-03 PASS 27 minutes
- 2026-06-04 PASS 33 minutes
- 2026-06-05 PASS 28 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 29 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 29 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 28 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 24 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

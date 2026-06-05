# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-09 01:10](#error-2026-05-09t0110570000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/69fe899da336bb08c47c279c/clusters | dev | 188.02s
[2026-05-25 01:03](#error-2026-05-25t0103290000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/6a139fddbedd9b079d3cb8de/clusters | dev | 189.10s
[2026-05-28 01:02](#error-2026-05-28t0102470000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 43 minutes
- 2026-05-08 PASS 24 minutes
- 2026-05-09

### Error 2026-05-09T01:10:57+00:00
```
2026-05-09T01:10:57.7061639Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-05-09T01:14:55.8107563Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-05-09T01:18:03.3553510Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-05-09T01:18:03.3554144Z     resource_test.go:1094: Step 2/6 error: Error running apply: exit status 1
2026-05-09T01:18:03.3554802Z         
2026-05-09T01:18:03.3555072Z         Error: Error in create
2026-05-09T01:18:03.3555415Z         
2026-05-09T01:18:03.3555780Z           with mongodbatlas_advanced_cluster.test,
2026-05-09T01:18:03.3556885Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-09T01:18:03.3558024Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-09T01:18:03.3558527Z         
2026-05-09T01:18:03.3559112Z         cluster name: test-acc-tf-c-3201552822176443947, API error details:
2026-05-09T01:18:03.3559976Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fe899da336bb08c47c279c/clusters
2026-05-09T01:18:03.3560855Z         POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A
2026-05-09T01:18:03.3561700Z         cluster or serverless instance named test-acc-tf-c-3201552822176443947 is
2026-05-09T01:18:03.3562496Z         already present in group 69fe899da336bb08c47c279c. Reason: Bad Request.
2026-05-09T01:18:03.3563269Z         Params: [cluster or serverless instance test-acc-tf-c-3201552822176443947
2026-05-09T01:18:03.3615711Z         69fe899da336bb08c47c279c], BadRequestDetail: 
2026-05-09T01:18:03.4023228Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (188.22s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 27 minutes
- 2026-05-12 PASS 26 minutes
- 2026-05-13 PASS 23 minutes
- 2026-05-14 PASS 41 minutes
- 2026-05-15 PASS 20 minutes
- 2026-05-16 PASS 19 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 36 minutes
- 2026-05-19 PASS 18 minutes
- 2026-05-20 PASS 22 minutes
- 2026-05-21 PASS 21 minutes
- 2026-05-22 PASS 43 minutes
- 2026-05-23 PASS 28 minutes
- 2026-05-24: MISSING
- 2026-05-25

### Error 2026-05-25T01:03:29+00:00
```
2026-05-25T01:03:29.1781910Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-05-25T01:04:50.6854562Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-05-25T01:08:00.2892853Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-05-25T01:08:00.2893511Z     resource_test.go:1094: Step 2/6 error: Error running apply: exit status 1
2026-05-25T01:08:00.2893897Z         
2026-05-25T01:08:00.2894155Z         Error: Error in create
2026-05-25T01:08:00.2894501Z         
2026-05-25T01:08:00.2895015Z           with mongodbatlas_advanced_cluster.test,
2026-05-25T01:08:00.2895703Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-25T01:08:00.2896334Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-25T01:08:00.2896669Z         
2026-05-25T01:08:00.2897093Z         cluster name: test-acc-tf-c-1154091229059540411, API error details:
2026-05-25T01:08:00.2897813Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a139fddbedd9b079d3cb8de/clusters
2026-05-25T01:08:00.2898555Z         POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A
2026-05-25T01:08:00.2899200Z         cluster or serverless instance named test-acc-tf-c-1154091229059540411 is
2026-05-25T01:08:00.2900164Z         already present in group 6a139fddbedd9b079d3cb8de. Reason: Bad Request.
2026-05-25T01:08:00.2900816Z         Params: [cluster or serverless instance test-acc-tf-c-1154091229059540411
2026-05-25T01:08:00.2901727Z         6a139fddbedd9b079d3cb8de], BadRequestDetail: 
2026-05-25T01:08:00.3406439Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (189.99s)
```

- 2026-05-26 PASS 23 minutes
- 2026-05-27 PASS 59 minutes
- 2026-05-28

### Error 2026-05-28T01:02:47+00:00
```
2026-05-28T01:02:47.7634770Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-05-28T01:02:47.9890855Z     shared_resource.go:160: 
2026-05-28T01:02:47.9892135Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:47.9893983Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:02:47.9895798Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:02:47.9897776Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:02:47.9899654Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:02:47.9901576Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:1081
2026-05-28T01:02:47.9902416Z         	Error:      	Received unexpected error:
2026-05-28T01:02:47.9905446Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:47.9906989Z         	Test:       	TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-05-28T01:02:47.9909601Z         	Messages:   	Project creation failed: test-acc-tf-p-889817781804494547, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:47.9911689Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (0.23s)
```

- 2026-05-29 PASS 29 minutes
- 2026-05-30 PASS 17 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 32 minutes
- 2026-06-02 PASS 17 minutes
- 2026-06-03 PASS 39 minutes
- 2026-06-04 PASS 55 minutes
- 2026-06-05 PASS 26 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-17 00:59](#error-2026-05-17t0059550000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a0913073ddc9e3868e570b6/clusters | qa | out_of_capacity | 6.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 22 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17

### Error 2026-05-17T00:59:55+00:00
```
2026-05-17T00:59:55.5764603Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-05-17T01:03:23.9965179Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-05-17T01:03:30.8517947Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-05-17T01:03:30.8519006Z     resource_test.go:1094: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-17T01:03:30.8519726Z         
2026-05-17T01:03:30.8520004Z         Error: Error in create
2026-05-17T01:03:30.8520334Z         
2026-05-17T01:03:30.8520998Z           with mongodbatlas_advanced_cluster.test,
2026-05-17T01:03:30.8522005Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-17T01:03:30.8522788Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-17T01:03:30.8523584Z         
2026-05-17T01:03:30.8524685Z         cluster name: test-acc-tf-c-6281048725481001699, API error details:
2026-05-17T01:03:30.8525823Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a0913073ddc9e3868e570b6/clusters
2026-05-17T01:03:30.8526653Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-17T01:03:30.8527511Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-17T01:03:30.8528096Z         Conflict. Params: [], BadRequestDetail: 
2026-05-17T01:03:30.9180577Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (6.93s)
```

- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 21 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 19 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

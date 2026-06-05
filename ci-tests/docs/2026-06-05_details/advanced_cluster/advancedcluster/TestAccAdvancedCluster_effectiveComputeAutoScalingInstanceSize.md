# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-18 01:00](#error-2026-05-18t0100300000) |  | dev |  | 1699.09s
[2026-05-28 01:01](#error-2026-05-28t0101070000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s
[2026-06-02 01:12](#error-2026-06-02t0112210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.08s
[2026-06-03 01:14](#error-2026-06-03t0114470000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a1f8004d685fc5a33e61fd4/clusters | dev | out_of_capacity | 6.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 43 minutes
- 2026-05-08 PASS 22 minutes
- 2026-05-09 PASS 24 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 27 minutes
- 2026-05-12 PASS 21 minutes
- 2026-05-13 PASS 25 minutes
- 2026-05-14 PASS 54 minutes
- 2026-05-15 PASS 17 minutes
- 2026-05-16 PASS 18 minutes
- 2026-05-17: MISSING
- 2026-05-18

### Error 2026-05-18T01:00:30+00:00
```
2026-05-18T01:00:30.3667585Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-05-18T01:02:21.8639854Z === CONT  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-05-18T01:22:35.4769248Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-05-18T01:22:35.4770234Z     effective_fields_test.go:105: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2026-05-18T01:22:35.4770803Z         
2026-05-18T01:22:35.4771148Z         Error: error reading Advanced Configuration
2026-05-18T01:22:35.4771464Z         
2026-05-18T01:22:35.4772094Z           with data.mongodbatlas_advanced_clusters.test,
2026-05-18T01:22:35.4772955Z           on terraform_plugin_test.tf line 49, in data "mongodbatlas_advanced_clusters" "test":
2026-05-18T01:22:35.4773597Z           49: 		data "mongodbatlas_advanced_clusters" "test" {
2026-05-18T01:22:35.4773925Z         
2026-05-18T01:22:35.4774373Z         cluster name: test-acc-tf-c-8100024426106863646, API error details:
2026-05-18T01:22:35.4775344Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0a64ab6fb087b449da01ac/clusters/test-acc-tf-c-8100024426106863646/processArgs
2026-05-18T01:22:35.4776223Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-05-18T01:22:35.4776819Z         BadRequestDetail: 
2026-05-18T01:22:35.9969421Z   
2026-05-18T01:30:41.3165776Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize (1699.85s)
```

- 2026-05-19 PASS 19 minutes
- 2026-05-20 PASS 19 minutes
- 2026-05-21 PASS 21 minutes
- 2026-05-22 PASS 45 minutes
- 2026-05-23 PASS 27 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 23 minutes
- 2026-05-26 PASS 19 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:01:07+00:00
```
2026-05-28T01:01:07.8547328Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-05-28T01:01:08.6850104Z     shared_resource.go:160: 
2026-05-28T01:01:08.6851710Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:08.6854822Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:08.6857081Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:08.6859187Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:08.6860985Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:08.6862919Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-28T01:01:08.6864907Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:102
2026-05-28T01:01:08.6865923Z         	Error:      	Received unexpected error:
2026-05-28T01:01:08.6869036Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:08.6870607Z         	Test:       	TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-05-28T01:01:08.6873023Z         	Messages:   	Project creation failed: test-acc-tf-p-4001364225180324437, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:08.6874603Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize (0.83s)
```

- 2026-05-29 PASS 21 minutes
- 2026-05-30 PASS 18 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 42 minutes
- 2026-06-02

### Error 2026-06-02T01:12:21+00:00
```
2026-06-02T01:12:21.3315763Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-06-02T01:13:40.1630899Z     shared_resource.go:160: 
2026-06-02T01:13:40.1632491Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:13:40.1634890Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-06-02T01:13:40.1637337Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-06-02T01:13:40.1639718Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-06-02T01:13:40.1642032Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-06-02T01:13:40.1644372Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-06-02T01:13:40.1646769Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:102
2026-06-02T01:13:40.1647757Z         	Error:      	Received unexpected error:
2026-06-02T01:13:40.1650071Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:13:40.1651630Z         	Test:       	TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-06-02T01:13:40.1653536Z         	Messages:   	Project creation failed: test-acc-tf-p-6780676153663208622, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:13:40.1654863Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize (78.83s)
```

- 2026-06-03

### Error 2026-06-03T01:14:47+00:00
```
2026-06-03T01:14:47.3288812Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-06-03T01:16:23.4741339Z === CONT  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-06-03T01:16:29.8649912Z === NAME  TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-06-03T01:16:29.8651174Z     effective_fields_test.go:105: Step 1/2 error: Error running apply: exit status 1
2026-06-03T01:16:29.8652026Z         
2026-06-03T01:16:29.8652555Z         Error: Error in create
2026-06-03T01:16:29.8653104Z         
2026-06-03T01:16:29.8653845Z           with mongodbatlas_advanced_cluster.test,
2026-06-03T01:16:29.8655264Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-06-03T01:16:29.8656778Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-06-03T01:16:29.8657402Z         
2026-06-03T01:16:29.8658029Z         cluster name: test-acc-tf-c-2409700569601664510, API error details:
2026-06-03T01:16:29.8658979Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a1f8004d685fc5a33e61fd4/clusters
2026-06-03T01:16:29.8659783Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-06-03T01:16:29.8660534Z         region is currently out of capacity for the requested instance size. Reason:
2026-06-03T01:16:29.8661098Z         Conflict. Params: [], BadRequestDetail: 
2026-06-03T01:16:29.9288792Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize (6.88s)
```

- 2026-06-04 PASS 42 minutes
- 2026-06-05 PASS 24 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 24 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 20 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 24 minutes
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

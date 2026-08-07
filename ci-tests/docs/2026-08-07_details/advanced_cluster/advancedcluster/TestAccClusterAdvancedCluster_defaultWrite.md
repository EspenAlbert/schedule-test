# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_defaultWrite Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.10s
[2026-07-10 00:49](#error-2026-07-10t0049520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a5041b0e2d93fff09dc952f/clusters/test-acc-tf-c-4143702983119239755 | dev | flaky_500 | 4568.06s
[2026-07-21 00:53](#error-2026-07-21t0053070000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s
[2026-07-23 00:49](#error-2026-07-23t0049360000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.1124748Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2026-07-09T00:58:01.1051058Z     shared_resource.go:160: 
2026-07-09T00:58:01.1052605Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:01.1055418Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:58:01.1057605Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:58:01.1059749Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:58:01.1061970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:58:01.1063907Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:376
2026-07-09T00:58:01.1065199Z         	Error:      	Received unexpected error:
2026-07-09T00:58:01.1068224Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:01.1069681Z         	Test:       	TestAccClusterAdvancedCluster_defaultWrite
2026-07-09T00:58:01.1072100Z         	Messages:   	Project creation failed: test-acc-tf-p-8784162783974482311, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:01.1073675Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (0.99s)
```

- 2026-07-10

### Error 2026-07-10T00:49:52+00:00
```
2026-07-10T00:49:52.1612114Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2026-07-10T01:03:50.0394246Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2026-07-10T01:04:39.6229484Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2026-07-10T01:04:39.6231013Z     pre_check.go:46: Time before creating cluster: 2026-07-10T01:04:39.622708548Z, ProjectID: 6a5041b0e2d93fff09dc952f, Cluster name: test-acc-tf-c-5829030638185353448
2026-07-10T02:19:55.8924921Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2026-07-10T02:19:55.8925638Z     resource_test.go:399: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:19:55.8926158Z         
2026-07-10T02:19:55.8926588Z         Error: Error in delete
2026-07-10T02:19:55.8926869Z         
2026-07-10T02:19:55.8927328Z         cluster name: test-acc-tf-c-4143702983119239755, API error details:
2026-07-10T02:19:55.8928270Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041b0e2d93fff09dc952f/clusters/test-acc-tf-c-4143702983119239755
2026-07-10T02:19:55.8929412Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:19:55.8930077Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:19:55.8930526Z         BadRequestDetail: 
2026-07-10T02:19:55.8930890Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (4568.58s)
```

- 2026-07-11 PASS 36 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 56 minutes
- 2026-07-14 PASS an hour
- 2026-07-15 PASS 44 minutes
- 2026-07-16 PASS 2 hours
- 2026-07-17 PASS an hour
- 2026-07-18 PASS 44 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:07+00:00
```
2026-07-21T00:53:07.1334635Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2026-07-21T00:53:07.9388303Z     shared_resource.go:160: 
2026-07-21T00:53:07.9389690Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:07.9391791Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:07.9393558Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:07.9395725Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:07.9397478Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:07.9399296Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:376
2026-07-21T00:53:07.9400249Z         	Error:      	Received unexpected error:
2026-07-21T00:53:07.9403035Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:07.9404406Z         	Test:       	TestAccClusterAdvancedCluster_defaultWrite
2026-07-21T00:53:07.9406705Z         	Messages:   	Project creation failed: test-acc-tf-p-5404424304128036943, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:07.9408167Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (0.81s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:36+00:00
```
2026-07-23T00:49:36.6993147Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2026-07-23T00:49:37.1622962Z     shared_resource.go:160: 
2026-07-23T00:49:37.1625017Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:37.1627112Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:37.1629115Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:37.1631085Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:37.1633246Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:37.1635317Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:376
2026-07-23T00:49:37.1636195Z         	Error:      	Received unexpected error:
2026-07-23T00:49:37.1639240Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:37.1640793Z         	Test:       	TestAccClusterAdvancedCluster_defaultWrite
2026-07-23T00:49:37.1643502Z         	Messages:   	Project creation failed: test-acc-tf-p-5591728271755995590, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:37.1645168Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (0.47s)
```

- 2026-07-24 PASS 2 hours
- 2026-07-25 PASS 46 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS 2 hours
- 2026-07-29 PASS 52 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 37 minutes
  - PASS 32 minutes
- 2026-08-01 PASS 35 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 34 minutes
- 2026-08-04 PASS 38 minutes
- 2026-08-05 PASS 35 minutes
- 2026-08-06 PASS 34 minutes
- 2026-08-07 PASS 32 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 50 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 46 minutes
  - PASS 34 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 49 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 46 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 35 minutes
  - PASS 39 minutes
- 2026-07-30 PASS 36 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 33 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

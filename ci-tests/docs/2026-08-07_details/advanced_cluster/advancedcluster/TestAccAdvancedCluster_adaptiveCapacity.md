# advanced_cluster/advancedcluster/TestAccAdvancedCluster_adaptiveCapacity Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058190000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.02s
[2026-07-11 00:56](#error-2026-07-11t0056430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.03s
[2026-07-21 00:53](#error-2026-07-21t0053200000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s
[2026-07-23 00:49](#error-2026-07-23t0049460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:19+00:00
```
2026-07-09T00:58:19.8580210Z === RUN   TestAccAdvancedCluster_adaptiveCapacity
2026-07-09T00:58:21.0779045Z     shared_resource.go:160: 
2026-07-09T00:58:21.0781218Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:21.0784747Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:58:21.0787438Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:58:21.0789784Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:58:21.0792094Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:58:21.0794684Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:3120
2026-07-09T00:58:21.0795719Z         	Error:      	Received unexpected error:
2026-07-09T00:58:21.0798674Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:21.0800115Z         	Test:       	TestAccAdvancedCluster_adaptiveCapacity
2026-07-09T00:58:21.0802518Z         	Messages:   	Project creation failed: test-acc-tf-p-5164263124763481268, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:21.0804108Z --- FAIL: TestAccAdvancedCluster_adaptiveCapacity (1.22s)
```

- 2026-07-10 PASS 46 minutes
- 2026-07-11

### Error 2026-07-11T00:56:43+00:00
```
2026-07-11T00:56:43.0945690Z === RUN   TestAccAdvancedCluster_adaptiveCapacity
2026-07-11T00:56:43.3406131Z     shared_resource.go:160: 
2026-07-11T00:56:43.3407234Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:56:43.3409026Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:56:43.3410877Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:56:43.3412645Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:56:43.3415083Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:56:43.3416930Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:3120
2026-07-11T00:56:43.3417737Z         	Error:      	Received unexpected error:
2026-07-11T00:56:43.3420732Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:56:43.3422140Z         	Test:       	TestAccAdvancedCluster_adaptiveCapacity
2026-07-11T00:56:43.3424670Z         	Messages:   	Project creation failed: test-acc-tf-p-9169795325458289599, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:56:43.3426150Z --- FAIL: TestAccAdvancedCluster_adaptiveCapacity (0.25s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 29 minutes
- 2026-07-14 PASS 25 minutes
- 2026-07-15 PASS 30 minutes
- 2026-07-16 PASS 57 minutes
- 2026-07-17 PASS 35 minutes
- 2026-07-18 PASS 29 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:20+00:00
```
2026-07-21T00:53:20.1777109Z === RUN   TestAccAdvancedCluster_adaptiveCapacity
2026-07-21T00:53:20.4028181Z     shared_resource.go:160: 
2026-07-21T00:53:20.4030521Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:20.4032658Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:20.4034437Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:20.4036180Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:20.4037910Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:20.4039726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:3120
2026-07-21T00:53:20.4040660Z         	Error:      	Received unexpected error:
2026-07-21T00:53:20.4043438Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:20.4044796Z         	Test:       	TestAccAdvancedCluster_adaptiveCapacity
2026-07-21T00:53:20.4047072Z         	Messages:   	Project creation failed: test-acc-tf-p-5313768529718197230, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:20.4048520Z --- FAIL: TestAccAdvancedCluster_adaptiveCapacity (0.23s)
```

- 2026-07-22 PASS 43 minutes
- 2026-07-23

### Error 2026-07-23T00:49:46+00:00
```
2026-07-23T00:49:46.8453706Z === RUN   TestAccAdvancedCluster_adaptiveCapacity
2026-07-23T00:49:47.4015875Z     shared_resource.go:160: 
2026-07-23T00:49:47.4017428Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:47.4019309Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:47.4021187Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:47.4023408Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:47.4025252Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:47.4027175Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:3120
2026-07-23T00:49:47.4027985Z         	Error:      	Received unexpected error:
2026-07-23T00:49:47.4030791Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:47.4032370Z         	Test:       	TestAccAdvancedCluster_adaptiveCapacity
2026-07-23T00:49:47.4034746Z         	Messages:   	Project creation failed: test-acc-tf-p-2863117270391298189, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:47.4036515Z --- FAIL: TestAccAdvancedCluster_adaptiveCapacity (0.56s)
```

- 2026-07-24 PASS 48 minutes
- 2026-07-25 PASS 26 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 24 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 19 minutes
  - PASS 17 minutes
- 2026-08-01 PASS 18 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 19 minutes
- 2026-08-04 PASS 18 minutes
- 2026-08-05 PASS 17 minutes
- 2026-08-06 PASS 18 minutes
- 2026-08-07 PASS 15 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 24 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 26 minutes
  - PASS 17 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 21 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 19 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 15 minutes
  - PASS 21 minutes
- 2026-07-30 PASS 20 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 16 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

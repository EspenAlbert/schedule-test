# cluster/cluster/TestAccCluster_basicAWS_PausedToUnpaused Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:54](#error-2026-07-09t0054350000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.04s
[2026-07-21 00:52](#error-2026-07-21t0052320000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-07-23 00:48](#error-2026-07-23t0048240000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:54:35+00:00
```
2026-07-09T00:54:35.4373999Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-07-09T00:55:38.8789323Z     shared_resource.go:160: 
2026-07-09T00:55:38.8790894Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:55:38.8794459Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:55:38.8797339Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:55:38.8800355Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:55:38.8803652Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:55:38.8807085Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1237
2026-07-09T00:55:38.8808511Z         	Error:      	Received unexpected error:
2026-07-09T00:55:38.8811690Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:55:38.8813985Z         	Test:       	TestAccCluster_basicAWS_PausedToUnpaused
2026-07-09T00:55:38.8816930Z         	Messages:   	Project creation failed: test-acc-tf-p-9120786151413064105, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:55:38.8818664Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (63.44s)
```

- 2026-07-10 PASS an hour
- 2026-07-11 PASS 23 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 38 minutes
- 2026-07-14 PASS 37 minutes
- 2026-07-15 PASS 38 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 40 minutes
- 2026-07-18 PASS 35 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:32+00:00
```
2026-07-21T00:52:32.6439312Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-07-21T00:52:33.5424606Z     shared_resource.go:160: 
2026-07-21T00:52:33.5426646Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:33.5430732Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:52:33.5435445Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:52:33.5439405Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:52:33.5443033Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:52:33.5447041Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1237
2026-07-21T00:52:33.5448567Z         	Error:      	Received unexpected error:
2026-07-21T00:52:33.5454132Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:33.5457090Z         	Test:       	TestAccCluster_basicAWS_PausedToUnpaused
2026-07-21T00:52:33.5461755Z         	Messages:   	Project creation failed: test-acc-tf-p-1649120061393094096, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:33.5464635Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (0.90s)
```

- 2026-07-22 PASS 59 minutes
- 2026-07-23

### Error 2026-07-23T00:48:24+00:00
```
2026-07-23T00:48:24.4617327Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-07-23T00:48:24.6462940Z     shared_resource.go:160: 
2026-07-23T00:48:24.6464465Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:24.6467783Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:48:24.6470840Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:48:24.6474005Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:48:24.6476935Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:48:24.6480005Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1237
2026-07-23T00:48:24.6481343Z         	Error:      	Received unexpected error:
2026-07-23T00:48:24.6486229Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:24.6488502Z         	Test:       	TestAccCluster_basicAWS_PausedToUnpaused
2026-07-23T00:48:24.6492819Z         	Messages:   	Project creation failed: test-acc-tf-p-8182507335914277879, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:24.6495565Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (0.19s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 34 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 38 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 28 minutes
- 2026-08-01 PASS 23 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 24 minutes
- 2026-08-04 PASS 24 minutes
- 2026-08-05 PASS 25 minutes
- 2026-08-06 PASS 24 minutes
- 2026-08-07 PASS 23 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 39 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 32 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 42 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 34 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 26 minutes
  - PASS 31 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 24 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

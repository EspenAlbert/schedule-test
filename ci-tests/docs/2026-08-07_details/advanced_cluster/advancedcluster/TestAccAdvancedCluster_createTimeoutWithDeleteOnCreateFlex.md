# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058160000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.07s
[2026-07-21 00:53](#error-2026-07-21t0053170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.09s
[2026-07-23 00:49](#error-2026-07-23t0049440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:16+00:00
```
2026-07-09T00:58:16.8197068Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2026-07-09T00:58:16.8197746Z     resource_test.go:2946: Creating execution project (1): test-acc-tf-p-5443125153175138926
2026-07-09T00:58:17.5303972Z     resource_test.go:2946: 
2026-07-09T00:58:17.5305738Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:17.5308448Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:17.5310691Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:17.5313023Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:2946
2026-07-09T00:58:17.5313842Z         	Error:      	Received unexpected error:
2026-07-09T00:58:17.5317077Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:17.5318645Z         	Test:       	TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2026-07-09T00:58:17.5321118Z         	Messages:   	Project creation failed: test-acc-tf-p-5443125153175138926, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:17.5322769Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (0.71s)
```

- 2026-07-10 PASS 6 seconds
- 2026-07-11 PASS 4 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 5 seconds
- 2026-07-14 PASS 5 seconds
- 2026-07-15 PASS 5 seconds
- 2026-07-16 PASS 4 seconds
- 2026-07-17 PASS a second
- 2026-07-18 PASS 6 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:17+00:00
```
2026-07-21T00:53:17.4238681Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2026-07-21T00:53:17.4239359Z     resource_test.go:2946: Creating execution project (1): test-acc-tf-p-655468243696964590
2026-07-21T00:53:18.3093611Z     resource_test.go:2946: 
2026-07-21T00:53:18.3094842Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:18.3096611Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:18.3098390Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:18.3100481Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:2946
2026-07-21T00:53:18.3101748Z         	Error:      	Received unexpected error:
2026-07-21T00:53:18.3104567Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:18.3106021Z         	Test:       	TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2026-07-21T00:53:18.3108394Z         	Messages:   	Project creation failed: test-acc-tf-p-655468243696964590, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:18.3110082Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (0.89s)
```

- 2026-07-22 PASS 6 seconds
- 2026-07-23

### Error 2026-07-23T00:49:44+00:00
```
2026-07-23T00:49:44.8289337Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2026-07-23T00:49:44.8290013Z     resource_test.go:2946: Creating execution project (1): test-acc-tf-p-4220775866225829561
2026-07-23T00:49:45.0555627Z     resource_test.go:2946: 
2026-07-23T00:49:45.0557538Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:45.0560250Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:49:45.0563091Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:49:45.0565199Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:2946
2026-07-23T00:49:45.0566080Z         	Error:      	Received unexpected error:
2026-07-23T00:49:45.0569164Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:45.0570814Z         	Test:       	TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2026-07-23T00:49:45.0573491Z         	Messages:   	Project creation failed: test-acc-tf-p-4220775866225829561, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:45.0575116Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (0.23s)
```

- 2026-07-24 PASS 5 seconds
- 2026-07-25 PASS 4 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 seconds
- 2026-07-28 PASS 5 seconds
- 2026-07-29 PASS 7 seconds
- 2026-07-30 PASS 6 seconds
- 2026-07-31
  - PASS 6 seconds
  - PASS 7 seconds
- 2026-08-01 PASS a second
- 2026-08-02: MISSING
- 2026-08-03 PASS 7 seconds
- 2026-08-04 PASS 6 seconds
- 2026-08-05 PASS 5 seconds
- 2026-08-06 PASS 5 seconds
- 2026-08-07 PASS 4 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 6 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 6 seconds
  - PASS 7 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 7 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 7 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 5 seconds
  - PASS 5 seconds
- 2026-07-30 PASS 6 seconds
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 5 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

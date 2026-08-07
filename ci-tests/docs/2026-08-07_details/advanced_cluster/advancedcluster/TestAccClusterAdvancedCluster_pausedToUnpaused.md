# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pausedToUnpaused Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057560000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.00s
[2026-07-18 00:47](#error-2026-07-18t0047550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 106.06s
[2026-07-21 00:53](#error-2026-07-21t0053040000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.09s
[2026-07-23 00:49](#error-2026-07-23t0049340000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:56+00:00
```
2026-07-09T00:57:56.8248257Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2026-07-09T00:57:57.8363488Z     shared_resource.go:160: 
2026-07-09T00:57:57.8366344Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:57.8369632Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:57:57.8371562Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:57:57.8373428Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:57:57.8375431Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:57:57.8377355Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:247
2026-07-09T00:57:57.8378183Z         	Error:      	Received unexpected error:
2026-07-09T00:57:57.8381071Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:57.8382546Z         	Test:       	TestAccClusterAdvancedCluster_pausedToUnpaused
2026-07-09T00:57:57.8385075Z         	Messages:   	Project creation failed: test-acc-tf-p-6608861102113128525, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:57.8386691Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (1.01s)
```

- 2026-07-10 PASS 59 minutes
- 2026-07-11 PASS 29 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 48 minutes
- 2026-07-14 PASS 39 minutes
- 2026-07-15 PASS 38 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 37 minutes
- 2026-07-18

### Error 2026-07-18T00:47:55+00:00
```
2026-07-18T00:47:55.7664998Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2026-07-18T00:49:42.3964745Z     shared_resource.go:160: 
2026-07-18T00:49:42.3966226Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:49:42.3969794Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-18T00:49:42.3972963Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-18T00:49:42.3975604Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-18T00:49:42.3977766Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-18T00:49:42.3980158Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:247
2026-07-18T00:49:42.3981103Z         	Error:      	Received unexpected error:
2026-07-18T00:49:42.3983422Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:42.3984724Z         	Test:       	TestAccClusterAdvancedCluster_pausedToUnpaused
2026-07-18T00:49:42.3986622Z         	Messages:   	Project creation failed: test-acc-tf-p-8112843272526827119, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:42.3987873Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (106.63s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:04+00:00
```
2026-07-21T00:53:04.9638483Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2026-07-21T00:53:05.8955500Z     shared_resource.go:160: 
2026-07-21T00:53:05.8956748Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:05.8958737Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:05.8960821Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:05.8962600Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:05.8964331Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:05.8966197Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:247
2026-07-21T00:53:05.8966993Z         	Error:      	Received unexpected error:
2026-07-21T00:53:05.8969775Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:05.8971303Z         	Test:       	TestAccClusterAdvancedCluster_pausedToUnpaused
2026-07-21T00:53:05.8973619Z         	Messages:   	Project creation failed: test-acc-tf-p-3753064890257991333, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:05.8975546Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (0.93s)
```

- 2026-07-22 PASS 57 minutes
- 2026-07-23

### Error 2026-07-23T00:49:34+00:00
```
2026-07-23T00:49:34.7606600Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2026-07-23T00:49:35.4130430Z     shared_resource.go:160: 
2026-07-23T00:49:35.4132998Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:35.4135594Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:35.4137862Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:35.4139713Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:35.4141547Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:35.4143726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:247
2026-07-23T00:49:35.4144728Z         	Error:      	Received unexpected error:
2026-07-23T00:49:35.4147545Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:35.4149026Z         	Test:       	TestAccClusterAdvancedCluster_pausedToUnpaused
2026-07-23T00:49:35.4151418Z         	Messages:   	Project creation failed: test-acc-tf-p-8458162021899995571, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:35.4153137Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (0.65s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 39 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 39 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 31 minutes
  - PASS 27 minutes
- 2026-08-01 PASS 28 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 28 minutes
- 2026-08-04 PASS 27 minutes
- 2026-08-05 PASS 27 minutes
- 2026-08-06 PASS 26 minutes
- 2026-08-07 PASS 27 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 39 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 37 minutes
  - PASS 26 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 41 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 35 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 27 minutes
  - PASS 31 minutes
- 2026-07-30 PASS 27 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 26 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

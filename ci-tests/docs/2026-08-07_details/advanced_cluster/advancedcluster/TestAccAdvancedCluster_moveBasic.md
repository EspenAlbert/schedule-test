# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveBasic Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057500000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.02s
[2026-07-11 00:45](#error-2026-07-11t0045390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 113.03s
[2026-07-21 00:52](#error-2026-07-21t0052570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.02s
[2026-07-23 00:49](#error-2026-07-23t0049290000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:50+00:00
```
2026-07-09T00:57:50.0098144Z === RUN   TestAccAdvancedCluster_moveBasic
2026-07-09T00:57:51.1937715Z     shared_resource.go:160: 
2026-07-09T00:57:51.1940468Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:51.1943315Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:57:51.1946215Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:57:51.1948084Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:57:51.1949897Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:57:51.1969568Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:17
2026-07-09T00:57:51.1970479Z         	Error:      	Received unexpected error:
2026-07-09T00:57:51.1973378Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:51.1975403Z         	Test:       	TestAccAdvancedCluster_moveBasic
2026-07-09T00:57:51.1977804Z         	Messages:   	Project creation failed: test-acc-tf-p-4035687389583846324, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:51.1979361Z --- FAIL: TestAccAdvancedCluster_moveBasic (1.19s)
```

- 2026-07-10 PASS 40 minutes
- 2026-07-11

### Error 2026-07-11T00:45:39+00:00
```
2026-07-11T00:45:39.9787825Z === RUN   TestAccAdvancedCluster_moveBasic
2026-07-11T00:47:33.2629500Z     shared_resource.go:160: 
2026-07-11T00:47:33.2631660Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:47:33.2635171Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:47:33.2638563Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:47:33.2641965Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:47:33.2645510Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:47:33.2649302Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:17
2026-07-11T00:47:33.2651015Z         	Error:      	Received unexpected error:
2026-07-11T00:47:33.2655355Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:47:33.2659580Z         	Test:       	TestAccAdvancedCluster_moveBasic
2026-07-11T00:47:33.2662709Z         	Messages:   	Project creation failed: test-acc-tf-p-1408147846295766357, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:47:33.2665206Z --- FAIL: TestAccAdvancedCluster_moveBasic (113.29s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 22 minutes
- 2026-07-14 PASS 17 minutes
- 2026-07-15 PASS 22 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 27 minutes
- 2026-07-18 PASS 25 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:57+00:00
```
2026-07-21T00:52:57.9355020Z === RUN   TestAccAdvancedCluster_moveBasic
2026-07-21T00:52:59.1321333Z     shared_resource.go:160: 
2026-07-21T00:52:59.1322976Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:59.1325490Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:52:59.1327308Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:52:59.1329455Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:52:59.1331442Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:52:59.1333364Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:17
2026-07-21T00:52:59.1334180Z         	Error:      	Received unexpected error:
2026-07-21T00:52:59.1336946Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:59.1338281Z         	Test:       	TestAccAdvancedCluster_moveBasic
2026-07-21T00:52:59.1341010Z         	Messages:   	Project creation failed: test-acc-tf-p-8640424619476421135, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:59.1343245Z --- FAIL: TestAccAdvancedCluster_moveBasic (1.20s)
```

- 2026-07-22 PASS 28 minutes
- 2026-07-23

### Error 2026-07-23T00:49:29+00:00
```
2026-07-23T00:49:29.6474146Z === RUN   TestAccAdvancedCluster_moveBasic
2026-07-23T00:49:30.0715483Z     shared_resource.go:160: 
2026-07-23T00:49:30.0717274Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:30.0720134Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:30.0722731Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:30.0724743Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:30.0726703Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:30.0728831Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:17
2026-07-23T00:49:30.0729761Z         	Error:      	Received unexpected error:
2026-07-23T00:49:30.0732973Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:30.0735560Z         	Test:       	TestAccAdvancedCluster_moveBasic
2026-07-23T00:49:30.0740024Z         	Messages:   	Project creation failed: test-acc-tf-p-5633015277042319224, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:30.0741937Z --- FAIL: TestAccAdvancedCluster_moveBasic (0.43s)
```

- 2026-07-24 PASS 22 minutes
- 2026-07-25 PASS 22 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 23 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 18 minutes
  - PASS 18 minutes
- 2026-08-01 PASS 18 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 18 minutes
- 2026-08-04 PASS 17 minutes
- 2026-08-05 PASS 17 minutes
- 2026-08-06 PASS 16 minutes
- 2026-08-07 PASS 20 minutes

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
  - PASS 25 minutes
  - PASS 15 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 29 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 23 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 19 minutes
  - PASS 18 minutes
- 2026-07-30 PASS 16 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 17 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveFromUnsupportedSource Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.07s
[2026-07-21 00:52](#error-2026-07-21t0052590000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.06s
[2026-07-23 00:49](#error-2026-07-23t0049310000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:51+00:00
```
2026-07-09T00:57:51.9488172Z === RUN   TestAccAdvancedCluster_moveFromUnsupportedSource
2026-07-09T00:57:52.6974177Z     shared_resource.go:160: 
2026-07-09T00:57:52.6975931Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:52.6978117Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:57:52.6980268Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:57:52.6982404Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:57:52.6984744Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:57:52.6986802Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:69
2026-07-09T00:57:52.6987988Z         	Error:      	Received unexpected error:
2026-07-09T00:57:52.6990856Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:52.6992335Z         	Test:       	TestAccAdvancedCluster_moveFromUnsupportedSource
2026-07-09T00:57:52.6995044Z         	Messages:   	Project creation failed: test-acc-tf-p-4946965628942376435, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:52.6996670Z --- FAIL: TestAccAdvancedCluster_moveFromUnsupportedSource (0.75s)
```

- 2026-07-10 PASS 2 seconds
- 2026-07-11 PASS 6 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 6 seconds
- 2026-07-14 PASS 7 seconds
- 2026-07-15 PASS 5 seconds
- 2026-07-16 PASS 8 seconds
- 2026-07-17 PASS 7 seconds
- 2026-07-18 PASS 7 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:59+00:00
```
2026-07-21T00:52:59.6409763Z === RUN   TestAccAdvancedCluster_moveFromUnsupportedSource
2026-07-21T00:53:00.2479114Z     shared_resource.go:160: 
2026-07-21T00:53:00.2480623Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:00.2482411Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:00.2484190Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:00.2485928Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:00.2487674Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:00.2489900Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:69
2026-07-21T00:53:00.2490871Z         	Error:      	Received unexpected error:
2026-07-21T00:53:00.2494137Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:00.2495563Z         	Test:       	TestAccAdvancedCluster_moveFromUnsupportedSource
2026-07-21T00:53:00.2497876Z         	Messages:   	Project creation failed: test-acc-tf-p-3527481164102403162, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:00.2499767Z --- FAIL: TestAccAdvancedCluster_moveFromUnsupportedSource (0.61s)
```

- 2026-07-22 PASS 7 seconds
- 2026-07-23

### Error 2026-07-23T00:49:31+00:00
```
2026-07-23T00:49:31.0228027Z === RUN   TestAccAdvancedCluster_moveFromUnsupportedSource
2026-07-23T00:49:31.8541766Z     shared_resource.go:160: 
2026-07-23T00:49:31.8543794Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:31.8545733Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:31.8547544Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:31.8549336Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:31.8551328Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:31.8553631Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:69
2026-07-23T00:49:31.8554483Z         	Error:      	Received unexpected error:
2026-07-23T00:49:31.8557304Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:31.8558787Z         	Test:       	TestAccAdvancedCluster_moveFromUnsupportedSource
2026-07-23T00:49:31.8561189Z         	Messages:   	Project creation failed: test-acc-tf-p-4492158743592532759, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:31.8562946Z --- FAIL: TestAccAdvancedCluster_moveFromUnsupportedSource (0.83s)
```

- 2026-07-24 PASS 6 seconds
- 2026-07-25 PASS 4 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 11 seconds
- 2026-07-28 PASS 5 seconds
- 2026-07-29 PASS 7 seconds
- 2026-07-30 PASS 6 seconds
- 2026-07-31
  - PASS 6 seconds
  - PASS 7 seconds
- 2026-08-01 PASS 7 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 7 seconds
- 2026-08-04 PASS 7 seconds
- 2026-08-05 PASS 2 seconds
- 2026-08-06 PASS 5 seconds
- 2026-08-07 PASS 5 seconds

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
- 2026-07-19 PASS 6 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 2 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 5 seconds
  - PASS 6 seconds
- 2026-07-30 PASS 8 seconds
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 5 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

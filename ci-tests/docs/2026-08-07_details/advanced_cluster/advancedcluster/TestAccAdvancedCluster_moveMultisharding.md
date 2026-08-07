# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveMultisharding Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s
[2026-07-11 00:47](#error-2026-07-11t0047330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 119.02s
[2026-07-21 00:52](#error-2026-07-21t0052590000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s
[2026-07-23 00:49](#error-2026-07-23t0049300000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.10s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:51+00:00
```
2026-07-09T00:57:51.1979754Z === RUN   TestAccAdvancedCluster_moveMultisharding
2026-07-09T00:57:51.9465885Z     shared_resource.go:160: 
2026-07-09T00:57:51.9467232Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:51.9470101Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:57:51.9472340Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:57:51.9474224Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:57:51.9476276Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:57:51.9478330Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:43
2026-07-09T00:57:51.9479237Z         	Error:      	Received unexpected error:
2026-07-09T00:57:51.9482152Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:51.9483604Z         	Test:       	TestAccAdvancedCluster_moveMultisharding
2026-07-09T00:57:51.9486151Z         	Messages:   	Project creation failed: test-acc-tf-p-5200739650575993717, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:51.9487728Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (0.75s)
```

- 2026-07-10 PASS 46 minutes
- 2026-07-11

### Error 2026-07-11T00:47:33+00:00
```
2026-07-11T00:47:33.2665854Z === RUN   TestAccAdvancedCluster_moveMultisharding
2026-07-11T00:49:32.4621107Z     shared_resource.go:160: 
2026-07-11T00:49:32.4622253Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:49:32.4624511Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:49:32.4626312Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:49:32.4628087Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:49:32.4629933Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:49:32.4631911Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:43
2026-07-11T00:49:32.4632762Z         	Error:      	Received unexpected error:
2026-07-11T00:49:32.4634863Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:49:32.4635971Z         	Test:       	TestAccAdvancedCluster_moveMultisharding
2026-07-11T00:49:32.4637742Z         	Messages:   	Project creation failed: test-acc-tf-p-1040417090193084464, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:49:32.4638886Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (119.20s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 36 minutes
- 2026-07-14 PASS 35 minutes
- 2026-07-15 PASS 32 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 35 minutes
- 2026-07-18 PASS 33 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:59+00:00
```
2026-07-21T00:52:59.1343800Z === RUN   TestAccAdvancedCluster_moveMultisharding
2026-07-21T00:52:59.6390145Z     shared_resource.go:160: 
2026-07-21T00:52:59.6391510Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:59.6393327Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:52:59.6395089Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:52:59.6396824Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:52:59.6398546Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:52:59.6400564Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:43
2026-07-21T00:52:59.6401406Z         	Error:      	Received unexpected error:
2026-07-21T00:52:59.6404191Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:59.6405617Z         	Test:       	TestAccAdvancedCluster_moveMultisharding
2026-07-21T00:52:59.6407883Z         	Messages:   	Project creation failed: test-acc-tf-p-2615938230971146823, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:59.6409320Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (0.51s)
```

- 2026-07-22 PASS 57 minutes
- 2026-07-23

### Error 2026-07-23T00:49:30+00:00
```
2026-07-23T00:49:30.0742356Z === RUN   TestAccAdvancedCluster_moveMultisharding
2026-07-23T00:49:31.0203250Z     shared_resource.go:160: 
2026-07-23T00:49:31.0205655Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:31.0209175Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:31.0211145Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:31.0214082Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:31.0216069Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:31.0218237Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:43
2026-07-23T00:49:31.0219129Z         	Error:      	Received unexpected error:
2026-07-23T00:49:31.0222089Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:31.0223710Z         	Test:       	TestAccAdvancedCluster_moveMultisharding
2026-07-23T00:49:31.0226055Z         	Messages:   	Project creation failed: test-acc-tf-p-96062531606857898, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:31.0227587Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (0.95s)
```

- 2026-07-24 PASS 56 minutes
- 2026-07-25 PASS 34 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 38 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 26 minutes
  - PASS 20 minutes
- 2026-08-01 PASS 19 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 23 minutes
- 2026-08-04 PASS 20 minutes
- 2026-08-05 PASS 21 minutes
- 2026-08-06 PASS 19 minutes
- 2026-08-07 PASS 22 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 33 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 35 minutes
  - PASS 21 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 39 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 33 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 23 minutes
  - PASS 29 minutes
- 2026-07-30 PASS 23 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 22 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

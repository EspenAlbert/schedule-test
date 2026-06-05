# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveMultisharding Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-16 00:57](#error-2026-05-16t0057420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.10s
[2026-05-21 01:07](#error-2026-05-21t0107190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.04s
[2026-05-23 01:02](#error-2026-05-23t0102590000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 98.09s
[2026-05-28 01:01](#error-2026-05-28t0101190000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.05s
[2026-05-30 01:05](#error-2026-05-30t0105100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.10s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 43 minutes
- 2026-05-08 PASS 33 minutes
- 2026-05-09 PASS 29 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 28 minutes
- 2026-05-12 PASS 23 minutes
- 2026-05-13 PASS 26 minutes
- 2026-05-14 PASS 54 minutes
- 2026-05-15 PASS 45 minutes
- 2026-05-16

### Error 2026-05-16T00:57:42+00:00
```
2026-05-16T00:57:42.8946349Z === RUN   TestAccAdvancedCluster_moveMultisharding
2026-05-16T00:59:04.8759034Z     shared_resource.go:160: 
2026-05-16T00:59:04.8762328Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:59:04.8766107Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-16T00:59:04.8769092Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-16T00:59:04.8771200Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-16T00:59:04.8773369Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-16T00:59:04.8777253Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:43
2026-05-16T00:59:04.8779428Z         	Error:      	Received unexpected error:
2026-05-16T00:59:04.8783338Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:59:04.8784617Z         	Test:       	TestAccAdvancedCluster_moveMultisharding
2026-05-16T00:59:04.8786417Z         	Messages:   	Project creation failed: test-acc-tf-p-1383870714350583490, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:59:04.8787620Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (81.98s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 39 minutes
- 2026-05-19 PASS 25 minutes
- 2026-05-20 PASS 32 minutes
- 2026-05-21

### Error 2026-05-21T01:07:19+00:00
```
2026-05-21T01:07:19.8412970Z === RUN   TestAccAdvancedCluster_moveMultisharding
2026-05-21T01:08:42.2770897Z     shared_resource.go:160: 
2026-05-21T01:08:42.2773683Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:08:42.2776800Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-21T01:08:42.2778873Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-21T01:08:42.2780726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-21T01:08:42.2782627Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-21T01:08:42.2785306Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:43
2026-05-21T01:08:42.2786224Z         	Error:      	Received unexpected error:
2026-05-21T01:08:42.2788285Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:08:42.2789444Z         	Test:       	TestAccAdvancedCluster_moveMultisharding
2026-05-21T01:08:42.2791337Z         	Messages:   	Project creation failed: test-acc-tf-p-6946505076521925872, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:08:42.2792637Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (82.44s)
```

- 2026-05-22 PASS 49 minutes
- 2026-05-23

### Error 2026-05-23T01:02:59+00:00
```
2026-05-23T01:02:59.5043907Z === RUN   TestAccAdvancedCluster_moveMultisharding
2026-05-23T01:04:38.4006842Z     shared_resource.go:160: 
2026-05-23T01:04:38.4008350Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:04:38.4012108Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-23T01:04:38.4014729Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-23T01:04:38.4016787Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-23T01:04:38.4018884Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-23T01:04:38.4020846Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:43
2026-05-23T01:04:38.4021658Z         	Error:      	Received unexpected error:
2026-05-23T01:04:38.4023589Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:04:38.4024668Z         	Test:       	TestAccAdvancedCluster_moveMultisharding
2026-05-23T01:04:38.4026570Z         	Messages:   	Project creation failed: test-acc-tf-p-7138082266336621489, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:04:38.4027711Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (98.90s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 29 minutes
- 2026-05-26 PASS 23 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:01:19+00:00
```
2026-05-28T01:01:19.8881081Z === RUN   TestAccAdvancedCluster_moveMultisharding
2026-05-28T01:01:21.3653216Z     shared_resource.go:160: 
2026-05-28T01:01:21.3654828Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:21.3656752Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:21.3658853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:21.3660671Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:21.3662475Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:21.3664426Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:43
2026-05-28T01:01:21.3665300Z         	Error:      	Received unexpected error:
2026-05-28T01:01:21.3668438Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:21.3669867Z         	Test:       	TestAccAdvancedCluster_moveMultisharding
2026-05-28T01:01:21.3672183Z         	Messages:   	Project creation failed: test-acc-tf-p-794370082457074553, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:21.3674117Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (1.48s)
```

- 2026-05-29 PASS 23 minutes
- 2026-05-30

### Error 2026-05-30T01:05:10+00:00
```
2026-05-30T01:05:10.1415727Z === RUN   TestAccAdvancedCluster_moveMultisharding
2026-05-30T01:06:39.1043804Z     shared_resource.go:160: 
2026-05-30T01:06:39.1045099Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:06:39.1046960Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-30T01:06:39.1049066Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-30T01:06:39.1051756Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-30T01:06:39.1053870Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-30T01:06:39.1055826Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:43
2026-05-30T01:06:39.1056686Z         	Error:      	Received unexpected error:
2026-05-30T01:06:39.1058816Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:06:39.1059905Z         	Test:       	TestAccAdvancedCluster_moveMultisharding
2026-05-30T01:06:39.1061719Z         	Messages:   	Project creation failed: test-acc-tf-p-2140751066642481234, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:06:39.1062877Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (88.96s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 42 minutes
- 2026-06-02 PASS 19 minutes
- 2026-06-03 PASS 41 minutes
- 2026-06-04 PASS 42 minutes
- 2026-06-05 PASS 33 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 28 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 29 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 29 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 25 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

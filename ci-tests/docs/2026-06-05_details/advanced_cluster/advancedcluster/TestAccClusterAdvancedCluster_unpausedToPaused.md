# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_unpausedToPaused Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-08 00:54](#error-2026-05-08t0054530000) |  | dev |  | 1344.07s
[2026-05-09 00:59](#error-2026-05-09t0059360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 108.00s
[2026-05-26 02:10](#error-2026-05-26t0210500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.05s
[2026-05-28 01:01](#error-2026-05-28t0101270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.10s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 45 minutes
- 2026-05-08

### Error 2026-05-08T00:54:53+00:00
```
2026-05-08T00:54:53.7221352Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-05-08T00:56:14.1596291Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2026-05-08T00:56:44.1337286Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-05-08T00:56:44.1342193Z     pre_check.go:46: Time before creating cluster: 2026-05-08T00:56:44.133427858Z, ProjectID: 69fd3459085055a4bc25dc62, Cluster name: test-acc-tf-c-8308606808019351050
2026-05-08T01:13:06.2989269Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-05-08T01:13:06.2989994Z     resource_test.go:220: Step 2/4 error: Error running post-apply non-refresh plan: exit status 1
2026-05-08T01:13:06.2990714Z         
2026-05-08T01:13:06.2991056Z         Error: error reading Advanced Configuration
2026-05-08T01:13:06.2991471Z         
2026-05-08T01:13:06.2991979Z           with data.mongodbatlas_advanced_clusters.test,
2026-05-08T01:13:06.2992662Z           on terraform_plugin_test.tf line 41, in data "mongodbatlas_advanced_clusters" "test":
2026-05-08T01:13:06.2993412Z           41: 	data "mongodbatlas_advanced_clusters" "test" {
2026-05-08T01:13:06.2993725Z         
2026-05-08T01:13:06.2994406Z         cluster name: test-acc-tf-c-5385660966828678338, API error details:
2026-05-08T01:13:06.2995493Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fd3459085055a4bc25dc62/clusters/test-acc-tf-c-5385660966828678338/processArgs
2026-05-08T01:13:06.2996339Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-05-08T01:13:06.2997297Z         BadRequestDetail: 
2026-05-08T01:18:38.8288257Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (1344.69s)
```

- 2026-05-09

### Error 2026-05-09T00:59:36+00:00
```
2026-05-09T00:59:36.8499721Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-05-09T01:01:24.8522923Z     shared_resource.go:160: 
2026-05-09T01:01:24.8526533Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:01:24.8528592Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-09T01:01:24.8530360Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-09T01:01:24.8532519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-09T01:01:24.8534653Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-09T01:01:24.8536503Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:215
2026-05-09T01:01:24.8537299Z         	Error:      	Received unexpected error:
2026-05-09T01:01:24.8539204Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:01:24.8542136Z         	Test:       	TestAccClusterAdvancedCluster_unpausedToPaused
2026-05-09T01:01:24.8543905Z         	Messages:   	Project creation failed: test-acc-tf-p-8050176930797099746, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:01:24.8545291Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (108.00s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 30 minutes
- 2026-05-12 PASS 26 minutes
- 2026-05-13 PASS 25 minutes
- 2026-05-14 PASS 47 minutes
- 2026-05-15 PASS 21 minutes
- 2026-05-16 PASS 19 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 40 minutes
- 2026-05-19 PASS 22 minutes
- 2026-05-20 PASS 25 minutes
- 2026-05-21 PASS 24 minutes
- 2026-05-22 PASS 45 minutes
- 2026-05-23 PASS 29 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 26 minutes
- 2026-05-26

### Error 2026-05-26T02:10:50+00:00
```
2026-05-26T02:10:50.8409262Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-05-26T02:12:03.3744376Z     shared_resource.go:160: 
2026-05-26T02:12:03.3745297Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:12:03.3746713Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-26T02:12:03.3748617Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-26T02:12:03.3749991Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-26T02:12:03.3751330Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-26T02:12:03.3752730Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:215
2026-05-26T02:12:03.3753330Z         	Error:      	Received unexpected error:
2026-05-26T02:12:03.3754814Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:12:03.3755654Z         	Test:       	TestAccClusterAdvancedCluster_unpausedToPaused
2026-05-26T02:12:03.3757023Z         	Messages:   	Project creation failed: test-acc-tf-p-1452711997535696914, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:12:03.3757931Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (72.54s)
```

- 2026-05-27 PASS 54 minutes
- 2026-05-28

### Error 2026-05-28T01:01:27+00:00
```
2026-05-28T01:01:27.8143335Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-05-28T01:01:28.7744838Z     shared_resource.go:160: 
2026-05-28T01:01:28.7746182Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:28.7748679Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:28.7750501Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:28.7752273Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:28.7754036Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:28.7756315Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:216
2026-05-28T01:01:28.7757143Z         	Error:      	Received unexpected error:
2026-05-28T01:01:28.7760257Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:28.7762026Z         	Test:       	TestAccClusterAdvancedCluster_unpausedToPaused
2026-05-28T01:01:28.7764428Z         	Messages:   	Project creation failed: test-acc-tf-p-8323748871422552045, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:28.7765976Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (0.96s)
```

- 2026-05-29 PASS 27 minutes
- 2026-05-30 PASS 20 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 42 minutes
- 2026-06-02 PASS 19 minutes
- 2026-06-03 PASS 39 minutes
- 2026-06-04 PASS 46 minutes
- 2026-06-05 PASS 25 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 26 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 25 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 25 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 23 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

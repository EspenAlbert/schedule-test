# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_symmetricSharded Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058050000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-07-10 00:49](#error-2026-07-10t0049540000) |  | dev | timeout | 14930.04s
[2026-07-11 00:55](#error-2026-07-11t0055130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.06s
[2026-07-18 00:50](#error-2026-07-18t0050100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s
[2026-07-21 00:53](#error-2026-07-21t0053110000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.10s
[2026-07-23 00:49](#error-2026-07-23t0049390000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:05+00:00
```
2026-07-09T00:58:05.4725138Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-07-09T00:58:06.0752922Z     shared_resource.go:160: 
2026-07-09T00:58:06.0755305Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:06.0758719Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:58:06.0762197Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:58:06.0764214Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:58:06.0766234Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:58:06.0768294Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:654
2026-07-09T00:58:06.0769120Z         	Error:      	Received unexpected error:
2026-07-09T00:58:06.0771989Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:06.0773497Z         	Test:       	TestAccMockableAdvancedCluster_symmetricSharded
2026-07-09T00:58:06.0776090Z         	Messages:   	Project creation failed: test-acc-tf-p-1102958974586446151, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:06.0777707Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (0.61s)
```

- 2026-07-10

### Error 2026-07-10T00:49:54+00:00
```
2026-07-10T00:49:54.4625562Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-07-10T00:49:56.9580761Z     resource_test.go:657: Adding variable clusterName=test-acc-tf-c-547441620544666163
2026-07-10T00:49:56.9581495Z     resource_test.go:657: Adding variable groupId=6a5041b2aea6151790a3ceb8
2026-07-10T01:03:50.1776035Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-07-10T01:36:09.1885308Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-07-10T01:36:09.1886915Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-5974786560453213163
2026-07-10T01:36:09.4473288Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-6694676674322648226
2026-07-10T01:36:09.7122236Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-197977161256923560
2026-07-10T04:36:16.3419445Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-07-10T04:36:16.3420170Z     resource_test.go:657: Step 2/3 error: Error running apply: exit status 1
2026-07-10T04:36:16.3420588Z         
2026-07-10T04:36:16.3420868Z         Error: Error in update
2026-07-10T04:36:16.3421140Z         
2026-07-10T04:36:16.3421499Z           with mongodbatlas_advanced_cluster.test,
2026-07-10T04:36:16.3422556Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-10T04:36:16.3423420Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-07-10T04:36:16.3423768Z         
2026-07-10T04:36:16.3424396Z         cluster=test-acc-tf-c-547441620544666163 didn't reach desired state: IDLE,
2026-07-10T04:36:16.3425076Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-07-10T04:36:16.3425558Z         'UPDATING', timeout: 3h0m0s)
2026-07-10T05:12:37.4977684Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (14930.38s)
```

- 2026-07-11

### Error 2026-07-11T00:55:13+00:00
```
2026-07-11T00:55:13.1960838Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-07-11T00:55:14.7519397Z     shared_resource.go:160: 
2026-07-11T00:55:14.7521470Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:14.7524027Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:55:14.7526251Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:55:14.7528273Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:55:14.7530072Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:55:14.7531931Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:654
2026-07-11T00:55:14.7532751Z         	Error:      	Received unexpected error:
2026-07-11T00:55:14.7535868Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:14.7537394Z         	Test:       	TestAccMockableAdvancedCluster_symmetricSharded
2026-07-11T00:55:14.7539793Z         	Messages:   	Project creation failed: test-acc-tf-p-9060510264331625939, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:14.7541313Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (1.56s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS an hour
- 2026-07-14 PASS 2 hours
- 2026-07-15 PASS 2 hours
- 2026-07-16 PASS 3 hours
- 2026-07-17 PASS 2 hours
- 2026-07-18

### Error 2026-07-18T00:50:10+00:00
```
2026-07-18T00:50:10.1877287Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-07-18T00:51:14.2452319Z     shared_resource.go:160: 
2026-07-18T00:51:14.2454161Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:51:14.2457016Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-18T00:51:14.2459853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-18T00:51:14.2462470Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-18T00:51:14.2464527Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-18T00:51:14.2466635Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:654
2026-07-18T00:51:14.2467588Z         	Error:      	Received unexpected error:
2026-07-18T00:51:14.2470453Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:14.2471738Z         	Test:       	TestAccMockableAdvancedCluster_symmetricSharded
2026-07-18T00:51:14.2473617Z         	Messages:   	Project creation failed: test-acc-tf-p-2431289372539747350, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:14.2474881Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (64.06s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:11+00:00
```
2026-07-21T00:53:11.2253305Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-07-21T00:53:12.2166024Z     shared_resource.go:160: 
2026-07-21T00:53:12.2167627Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:12.2170724Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:12.2172805Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:12.2175391Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:12.2177589Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:12.2179734Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:654
2026-07-21T00:53:12.2180883Z         	Error:      	Received unexpected error:
2026-07-21T00:53:12.2184162Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:12.2185837Z         	Test:       	TestAccMockableAdvancedCluster_symmetricSharded
2026-07-21T00:53:12.2188546Z         	Messages:   	Project creation failed: test-acc-tf-p-2014484817946390364, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:12.2190816Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (0.99s)
```

- 2026-07-22 PASS 2 hours
- 2026-07-23

### Error 2026-07-23T00:49:39+00:00
```
2026-07-23T00:49:39.1140214Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-07-23T00:49:39.4218306Z     shared_resource.go:160: 
2026-07-23T00:49:39.4220442Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:39.4224275Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:39.4227026Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:39.4228999Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:39.4230941Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:39.4233381Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:654
2026-07-23T00:49:39.4234288Z         	Error:      	Received unexpected error:
2026-07-23T00:49:39.4237331Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:39.4238795Z         	Test:       	TestAccMockableAdvancedCluster_symmetricSharded
2026-07-23T00:49:39.4241157Z         	Messages:   	Project creation failed: test-acc-tf-p-4790662353886638788, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:39.4242960Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (0.31s)
```

- 2026-07-24 PASS 3 hours
- 2026-07-25 PASS an hour
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 hours
- 2026-07-28 PASS 3 hours
- 2026-07-29 PASS 2 hours
- 2026-07-30 PASS 2 hours
- 2026-07-31
  - PASS an hour
  - PASS an hour
- 2026-08-01 PASS an hour
- 2026-08-02: MISSING
- 2026-08-03 PASS an hour
- 2026-08-04 PASS an hour
- 2026-08-05 PASS 2 hours
- 2026-08-06 PASS an hour
- 2026-08-07 PASS an hour

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS an hour
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS an hour
  - PASS an hour
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS an hour
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS an hour
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS an hour
  - PASS an hour
- 2026-07-30 PASS an hour
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS an hour
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

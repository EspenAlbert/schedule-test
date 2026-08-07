# backup/onlinearchive/TestAccBackupRSOnlineArchiveWithProcessRegion Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:39](#error-2026-07-09t0139310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 125.06s
[2026-07-10 02:44](#error-2026-07-10t0244520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a504d34aea6151790a7c908/clusters/test-acc-tf-c-7160001617952408673 | dev | flaky_500 | 3917.04s
[2026-07-11 01:10](#error-2026-07-11t0110170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 119.04s
[2026-07-18 01:31](#error-2026-07-18t0131540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 113.02s
[2026-07-21 01:07](#error-2026-07-21t0107290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.02s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:39:31+00:00
```
2026-07-09T01:39:31.8765477Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-07-09T01:39:31.8766131Z     resource_test.go:169: Creating execution project (1): test-acc-tf-p-5322326120644697672
2026-07-09T01:39:31.8766660Z     resource_test.go:169: 
2026-07-09T01:39:31.8767863Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:39:31.8769700Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:39:31.8771527Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:39:31.8773488Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-09T01:39:31.8775367Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:169
2026-07-09T01:39:31.8776591Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:39:31.8777272Z         	Error:      	Received unexpected error:
2026-07-09T01:39:31.8779367Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:39:31.8780496Z         	Test:       	TestAccBackupRSOnlineArchiveWithProcessRegion
2026-07-09T01:39:31.8782342Z         	Messages:   	Project creation failed: test-acc-tf-p-5322326120644697672, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:39:31.8783605Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (125.65s)
```

- 2026-07-10

### Error 2026-07-10T02:44:52+00:00
```
2026-07-10T02:44:52.3111990Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-07-10T02:44:52.3116776Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-07-10T02:44:52.3127644Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-07-10T02:44:52.3128603Z     pre_check.go:46: Time before creating cluster: 2026-07-10T01:39:29.588365192Z, ProjectID: 6a504d34aea6151790a7c908, Cluster name: test-acc-tf-c-7160001617952408673
2026-07-10T02:44:52.3154021Z   
2026-07-10T02:44:52.3252137Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-07-10T02:44:52.3253042Z     resource_test.go:178: Step 1/4 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-07-10T02:44:52.3264779Z    test_name=TestAccBackupRSOnlineArchiveWithProcessRegion test_working_directory=/tmp/plugintest2879535972 test_terraform_path=/home/runner/work/_temp/62b646e2-959d-4a9c-a271-e341496bc744/terraform test_step_number=1
2026-07-10T02:44:52.3266024Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:44:52.3266514Z         
2026-07-10T02:44:52.3266796Z         Error: Error in delete
2026-07-10T02:44:52.3267075Z         
2026-07-10T02:44:52.3267533Z         cluster name: test-acc-tf-c-7160001617952408673, API error details:
2026-07-10T02:44:52.3268457Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a504d34aea6151790a7c908/clusters/test-acc-tf-c-7160001617952408673
2026-07-10T02:44:52.3269523Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:44:52.3270202Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:44:52.3270663Z         BadRequestDetail: 
2026-07-10T02:44:52.3271062Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (3917.41s)
```

- 2026-07-11

### Error 2026-07-11T01:10:17+00:00
```
2026-07-11T01:10:17.0099857Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-07-11T01:10:17.0100489Z     resource_test.go:169: Creating execution project (1): test-acc-tf-p-6000418345738740500
2026-07-11T01:10:17.0101001Z     resource_test.go:169: 
2026-07-11T01:10:17.0101924Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:10:17.0103717Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:10:17.0105521Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:10:17.0108257Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-11T01:10:17.0110117Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:169
2026-07-11T01:10:17.0111321Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T01:10:17.0111864Z         	Error:      	Received unexpected error:
2026-07-11T01:10:17.0113841Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:17.0114948Z         	Test:       	TestAccBackupRSOnlineArchiveWithProcessRegion
2026-07-11T01:10:17.0116952Z         	Messages:   	Project creation failed: test-acc-tf-p-6000418345738740500, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:17.0118307Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (119.42s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 50 minutes
- 2026-07-14 PASS 25 minutes
- 2026-07-15 PASS 30 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 39 minutes
- 2026-07-18

### Error 2026-07-18T01:31:54+00:00
```
2026-07-18T01:31:54.2760365Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-07-18T01:31:54.2761023Z     resource_test.go:169: Creating execution project (1): test-acc-tf-p-922976305222906205
2026-07-18T01:31:54.2761537Z     resource_test.go:169: 
2026-07-18T01:31:54.2762468Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:31:54.2764287Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:31:54.2766141Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:31:54.2767872Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-18T01:31:54.2770134Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:169
2026-07-18T01:31:54.2771650Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:31:54.2772194Z         	Error:      	Received unexpected error:
2026-07-18T01:31:54.2774137Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:31:54.2775278Z         	Test:       	TestAccBackupRSOnlineArchiveWithProcessRegion
2026-07-18T01:31:54.2777091Z         	Messages:   	Project creation failed: test-acc-tf-p-922976305222906205, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:31:54.2778345Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (113.16s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:07:29+00:00
```
2026-07-21T01:07:29.6390648Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-07-21T01:07:29.6392111Z     resource_test.go:169: Creating execution project (1): test-acc-tf-p-6289416793972874497
2026-07-21T01:07:29.6392964Z     resource_test.go:169: 
2026-07-21T01:07:29.6394490Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T01:07:29.6397590Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T01:07:29.6400689Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T01:07:29.6403777Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T01:07:29.6406931Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:169
2026-07-21T01:07:29.6408956Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T01:07:29.6409818Z         	Error:      	Received unexpected error:
2026-07-21T01:07:29.6413430Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:07:29.6415291Z         	Test:       	TestAccBackupRSOnlineArchiveWithProcessRegion
2026-07-21T01:07:29.6418350Z         	Messages:   	Project creation failed: test-acc-tf-p-6289416793972874497, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:07:29.6420382Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (80.18s)
```

- 2026-07-22 PASS 59 minutes
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8884280Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-07-23T00:50:22.8884970Z     resource_test.go:169: Creating execution project (1): test-acc-tf-p-6228353304795123593
2026-07-23T00:50:22.8885483Z     resource_test.go:169: 
2026-07-23T00:50:22.8886404Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8888348Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8890152Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8891870Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:50:22.8893716Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:169
2026-07-23T00:50:22.8895163Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:50:22.8895702Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8898918Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:50:22.8900406Z         	Test:       	TestAccBackupRSOnlineArchiveWithProcessRegion
2026-07-23T00:50:22.8902791Z         	Messages:   	Project creation failed: test-acc-tf-p-6228353304795123593, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:50:22.8904415Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (0.64s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 29 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 40 minutes
- 2026-07-30 PASS 58 minutes
- 2026-07-31 PASS 25 minutes
- 2026-08-01 PASS 19 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 22 minutes
- 2026-08-04 PASS 21 minutes
- 2026-08-05 PASS 20 minutes
- 2026-08-06 PASS 21 minutes
- 2026-08-07 PASS 19 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 28 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 20 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 27 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 26 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 19 minutes
  - PASS 22 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 18 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

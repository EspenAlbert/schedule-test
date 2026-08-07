# backup/onlinearchive/TestAccOnlineArchive_deleteOnCreateTimeout Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:39](#error-2026-07-09t0139310000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.02s
[2026-07-10 02:44](#error-2026-07-10t0244520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a504d34aea6151790a7c908/clusters/test-acc-tf-c-3949733896419281055 | dev | flaky_500 | 3901.03s
[2026-07-11 01:10](#error-2026-07-11t0110170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s
[2026-07-21 01:07](#error-2026-07-21t0107290000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.04s
[2026-08-06 01:18](#error-2026-08-06t0118480000) |  | dev |  | 1100.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:39:31+00:00
```
2026-07-09T01:39:31.8802164Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-07-09T01:39:31.8802787Z     resource_test.go:533: Creating execution project (1): test-acc-tf-p-3198100523387039231
2026-07-09T01:39:31.8803309Z     resource_test.go:533: 
2026-07-09T01:39:31.8804238Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:39:31.8806068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:39:31.8808314Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:39:31.8810066Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-09T01:39:31.8811936Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:533
2026-07-09T01:39:31.8813293Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:39:31.8813847Z         	Error:      	Received unexpected error:
2026-07-09T01:39:31.8816692Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:39:31.8818275Z         	Test:       	TestAccOnlineArchive_deleteOnCreateTimeout
2026-07-09T01:39:31.8821128Z         	Messages:   	Project creation failed: test-acc-tf-p-3198100523387039231, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:39:31.8823752Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1.22s)
```

- 2026-07-10

### Error 2026-07-10T02:44:52+00:00
```
2026-07-10T02:44:52.3113709Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-07-10T02:44:52.3115744Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-07-10T02:44:52.3118899Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-07-10T02:44:52.3122601Z     pre_check.go:46: Time before creating cluster: 2026-07-10T01:39:14.578675352Z, ProjectID: 6a504d34aea6151790a7c908, Cluster name: test-acc-tf-c-3949733896419281055
2026-07-10T02:44:52.3205709Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-07-10T02:44:52.3206577Z     resource_test.go:536: Step 1/2 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-07-10T02:44:52.3219145Z   
2026-07-10T02:44:52.3219661Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:44:52.3220149Z         
2026-07-10T02:44:52.3220544Z         Error: Error in delete
2026-07-10T02:44:52.3220827Z         
2026-07-10T02:44:52.3221505Z         cluster name: test-acc-tf-c-3949733896419281055, API error details:
2026-07-10T02:44:52.3222436Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a504d34aea6151790a7c908/clusters/test-acc-tf-c-3949733896419281055
2026-07-10T02:44:52.3223293Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:44:52.3223980Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:44:52.3224448Z         BadRequestDetail: 
2026-07-10T02:44:52.3224820Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (3901.27s)
```

- 2026-07-11

### Error 2026-07-11T01:10:17+00:00
```
2026-07-11T01:10:17.0136793Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-07-11T01:10:17.0137411Z     resource_test.go:533: Creating execution project (1): test-acc-tf-p-4481683774391932238
2026-07-11T01:10:17.0137913Z     resource_test.go:533: 
2026-07-11T01:10:17.0138830Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:10:17.0140614Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:10:17.0142409Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:10:17.0144114Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-11T01:10:17.0145941Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:533
2026-07-11T01:10:17.0147497Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T01:10:17.0148037Z         	Error:      	Received unexpected error:
2026-07-11T01:10:17.0149996Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:17.0151041Z         	Test:       	TestAccOnlineArchive_deleteOnCreateTimeout
2026-07-11T01:10:17.0152810Z         	Messages:   	Project creation failed: test-acc-tf-p-4481683774391932238, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:17.0154213Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (63.15s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 49 minutes
- 2026-07-14 PASS 21 minutes
- 2026-07-15 PASS 28 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 36 minutes
- 2026-07-18 PASS 40 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:07:29+00:00
```
2026-07-21T01:07:29.6451141Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-07-21T01:07:29.6452260Z     resource_test.go:533: Creating execution project (1): test-acc-tf-p-6556769176607110995
2026-07-21T01:07:29.6453075Z     resource_test.go:533: 
2026-07-21T01:07:29.6454623Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T01:07:29.6457714Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T01:07:29.6460794Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T01:07:29.6463884Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T01:07:29.6467049Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:533
2026-07-21T01:07:29.6469075Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T01:07:29.6469935Z         	Error:      	Received unexpected error:
2026-07-21T01:07:29.6475086Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T01:07:29.6477478Z         	Test:       	TestAccOnlineArchive_deleteOnCreateTimeout
2026-07-21T01:07:29.6481458Z         	Messages:   	Project creation failed: test-acc-tf-p-6556769176607110995, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T01:07:29.6484221Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (0.87s)
```

- 2026-07-22 PASS 58 minutes
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8925004Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-07-23T00:50:22.8925612Z     resource_test.go:533: Creating execution project (1): test-acc-tf-p-3177959966108435338
2026-07-23T00:50:22.8926123Z     resource_test.go:533: 
2026-07-23T00:50:22.8927184Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8928997Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8930798Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8932519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:50:22.8934514Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:533
2026-07-23T00:50:22.8935726Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:50:22.8936255Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8939317Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:50:22.8940762Z         	Test:       	TestAccOnlineArchive_deleteOnCreateTimeout
2026-07-23T00:50:22.8943119Z         	Messages:   	Project creation failed: test-acc-tf-p-3177959966108435338, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:50:22.8944693Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (0.43s)
```

- 2026-07-24 PASS 2 hours
- 2026-07-25 PASS 27 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 31 minutes
- 2026-07-30 PASS 54 minutes
- 2026-07-31 PASS 22 minutes
- 2026-08-01 PASS 17 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 18 minutes
- 2026-08-04 PASS 15 minutes
- 2026-08-05 PASS 16 minutes
- 2026-08-06

### Error 2026-08-06T01:18:48+00:00
```
2026-08-06T01:18:48.4891071Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-06T01:18:48.4892614Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-06T01:18:48.4894875Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-06T01:18:48.4895569Z     pre_check.go:46: Time before creating cluster: 2026-08-06T00:57:08.037378686Z, ProjectID: 6a73dbd7357372fed321f6c5, Cluster name: test-acc-tf-c-100727777596898314
2026-08-06T01:18:48.4910643Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-08-06T01:18:48.4911287Z     resource_test.go:536: Step 1/2 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-08-06T01:18:48.4914830Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1100.74s)
```

- 2026-08-07 PASS 18 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 25 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 17 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 24 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 24 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 16 minutes
  - PASS 20 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 16 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

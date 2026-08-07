# backup/onlinearchive/TestAccBackupRSOnlineArchive_ErrorMessages Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:39](#error-2026-07-09t0139310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 104.10s
[2026-07-10 02:44](#error-2026-07-10t0244520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a504d34aea6151790a7c908/clusters/test-acc-tf-c-5007321094641301393 | dev | flaky_500 | 3073.08s
[2026-07-11 01:10](#error-2026-07-11t0110170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.05s
[2026-07-21 01:07](#error-2026-07-21t0107290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.07s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:39:31+00:00
```
2026-07-09T01:39:31.8784092Z === RUN   TestAccBackupRSOnlineArchive_ErrorMessages
2026-07-09T01:39:31.8784718Z     resource_test.go:213: Creating execution project (1): test-acc-tf-p-3189561860189087308
2026-07-09T01:39:31.8785263Z     resource_test.go:213: 
2026-07-09T01:39:31.8786228Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:39:31.8788200Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:39:31.8790062Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:39:31.8791821Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-09T01:39:31.8793688Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:213
2026-07-09T01:39:31.8794913Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:39:31.8795460Z         	Error:      	Received unexpected error:
2026-07-09T01:39:31.8797546Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:39:31.8798665Z         	Test:       	TestAccBackupRSOnlineArchive_ErrorMessages
2026-07-09T01:39:31.8800470Z         	Messages:   	Project creation failed: test-acc-tf-p-3189561860189087308, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:39:31.8801710Z --- FAIL: TestAccBackupRSOnlineArchive_ErrorMessages (104.97s)
```

- 2026-07-10

### Error 2026-07-10T02:44:52+00:00
```
2026-07-10T02:44:52.3112885Z === RUN   TestAccBackupRSOnlineArchive_ErrorMessages
2026-07-10T02:44:52.3116252Z === CONT  TestAccBackupRSOnlineArchive_ErrorMessages
2026-07-10T02:44:52.3125901Z === NAME  TestAccBackupRSOnlineArchive_ErrorMessages
2026-07-10T02:44:52.3126850Z     pre_check.go:46: Time before creating cluster: 2026-07-10T01:39:24.585454271Z, ProjectID: 6a504d34aea6151790a7c908, Cluster name: test-acc-tf-c-5007321094641301393
2026-07-10T02:44:52.3154481Z === NAME  TestAccBackupRSOnlineArchive_ErrorMessages
2026-07-10T02:44:52.3155199Z     resource_test.go:219: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:44:52.3155724Z         
2026-07-10T02:44:52.3156009Z         Error: Error in delete
2026-07-10T02:44:52.3156290Z         
2026-07-10T02:44:52.3156756Z         cluster name: test-acc-tf-c-5007321094641301393, API error details:
2026-07-10T02:44:52.3157685Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a504d34aea6151790a7c908/clusters/test-acc-tf-c-5007321094641301393
2026-07-10T02:44:52.3158548Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:44:52.3159215Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:44:52.3159672Z         BadRequestDetail: 
2026-07-10T02:44:52.3160051Z --- FAIL: TestAccBackupRSOnlineArchive_ErrorMessages (3073.76s)
```

- 2026-07-11

### Error 2026-07-11T01:10:17+00:00
```
2026-07-11T01:10:17.0118779Z === RUN   TestAccBackupRSOnlineArchive_ErrorMessages
2026-07-11T01:10:17.0119402Z     resource_test.go:213: Creating execution project (1): test-acc-tf-p-1327513923142539184
2026-07-11T01:10:17.0119918Z     resource_test.go:213: 
2026-07-11T01:10:17.0120844Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:10:17.0122755Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:10:17.0124552Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:10:17.0126376Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-11T01:10:17.0128224Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:213
2026-07-11T01:10:17.0129442Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T01:10:17.0129980Z         	Error:      	Received unexpected error:
2026-07-11T01:10:17.0131942Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:17.0133106Z         	Test:       	TestAccBackupRSOnlineArchive_ErrorMessages
2026-07-11T01:10:17.0134926Z         	Messages:   	Project creation failed: test-acc-tf-p-1327513923142539184, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:17.0136332Z --- FAIL: TestAccBackupRSOnlineArchive_ErrorMessages (61.55s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 42 minutes
- 2026-07-14 PASS 20 minutes
- 2026-07-15 PASS 26 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 28 minutes
- 2026-07-18 PASS 37 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:07:29+00:00
```
2026-07-21T01:07:29.6421147Z === RUN   TestAccBackupRSOnlineArchive_ErrorMessages
2026-07-21T01:07:29.6422300Z     resource_test.go:213: Creating execution project (1): test-acc-tf-p-1022653997971257713
2026-07-21T01:07:29.6423126Z     resource_test.go:213: 
2026-07-21T01:07:29.6424655Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T01:07:29.6427759Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T01:07:29.6430853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T01:07:29.6433937Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T01:07:29.6437086Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:213
2026-07-21T01:07:29.6439133Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T01:07:29.6439992Z         	Error:      	Received unexpected error:
2026-07-21T01:07:29.6443469Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:07:29.6445254Z         	Test:       	TestAccBackupRSOnlineArchive_ErrorMessages
2026-07-21T01:07:29.6448257Z         	Messages:   	Project creation failed: test-acc-tf-p-1022653997971257713, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:07:29.6450439Z --- FAIL: TestAccBackupRSOnlineArchive_ErrorMessages (61.71s)
```

- 2026-07-22 PASS 57 minutes
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8904886Z === RUN   TestAccBackupRSOnlineArchive_ErrorMessages
2026-07-23T00:50:22.8905491Z     resource_test.go:213: Creating execution project (1): test-acc-tf-p-2540746285908261796
2026-07-23T00:50:22.8905993Z     resource_test.go:213: 
2026-07-23T00:50:22.8907057Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8908877Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8910677Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8912397Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:50:22.8914232Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:213
2026-07-23T00:50:22.8915445Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:50:22.8915976Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8919024Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:50:22.8920605Z         	Test:       	TestAccBackupRSOnlineArchive_ErrorMessages
2026-07-23T00:50:22.8922995Z         	Messages:   	Project creation failed: test-acc-tf-p-2540746285908261796, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:50:22.8924565Z --- FAIL: TestAccBackupRSOnlineArchive_ErrorMessages (0.82s)
```

- 2026-07-24 PASS 2 hours
- 2026-07-25 PASS 25 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 28 minutes
- 2026-07-30 PASS 55 minutes
- 2026-07-31 PASS 19 minutes
- 2026-08-01 PASS 16 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 15 minutes
- 2026-08-04 PASS 14 minutes
- 2026-08-05 PASS 15 minutes
- 2026-08-06 PASS 16 minutes
- 2026-08-07 PASS 15 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 23 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 16 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 21 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 22 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 15 minutes
  - PASS 19 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 15 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

# backup/onlinearchive/TestAccBackupRSOnlineArchiveWithProcessRegion Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 6)
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.01s
[2026-05-19 01:23](#error-2026-05-19t0123590000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 117.05s
[2026-05-28 01:18](#error-2026-05-28t0118420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-05-30 01:27](#error-2026-05-30t0127260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.03s
[2026-06-02 01:30](#error-2026-06-02t0130170000) | ONLINE_ARCHIVE_CONCURRENT_MODIFICATIONS /api/atlas/v2/groups/6a1e2d8233704dfc263ea548/clusters/test-acc-tf-c-4667479342153887657/onlineArchives | dev | flaky_500 | 1111.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS an hour
- 2026-05-08 PASS 40 minutes
- 2026-05-09

### Error 2026-05-09T01:25:50+00:00
```
2026-05-09T01:25:50.1265277Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-05-09T01:25:50.1265908Z     resource_test.go:169: Creating execution project (1): test-acc-tf-p-7896783368048636625
2026-05-09T01:25:50.1266416Z     resource_test.go:169: 
2026-05-09T01:25:50.1267356Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:25:50.1269234Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:25:50.1271100Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:25:50.1272891Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-09T01:25:50.1275140Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:169
2026-05-09T01:25:50.1276388Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:25:50.1276918Z         	Error:      	Received unexpected error:
2026-05-09T01:25:50.1278916Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1280066Z         	Test:       	TestAccBackupRSOnlineArchiveWithProcessRegion
2026-05-09T01:25:50.1281938Z         	Messages:   	Project creation failed: test-acc-tf-p-7896783368048636625, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1283392Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (65.11s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 33 minutes
- 2026-05-12 PASS 27 minutes
- 2026-05-13 PASS 32 minutes
- 2026-05-14 PASS 57 minutes
- 2026-05-15 PASS 29 minutes
- 2026-05-16 PASS 18 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 52 minutes
- 2026-05-19

### Error 2026-05-19T01:23:59+00:00
```
2026-05-19T01:23:59.3311411Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-05-19T01:23:59.3320838Z     resource_test.go:169: Creating execution project (1): test-acc-tf-p-8261604083776396379
2026-05-19T01:23:59.3321448Z     resource_test.go:169: 
2026-05-19T01:23:59.3322409Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:23:59.3324251Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:23:59.3326269Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:23:59.3328243Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-19T01:23:59.3330169Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:169
2026-05-19T01:23:59.3331398Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:23:59.3331918Z         	Error:      	Received unexpected error:
2026-05-19T01:23:59.3333912Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:59.3335032Z         	Test:       	TestAccBackupRSOnlineArchiveWithProcessRegion
2026-05-19T01:23:59.3336874Z         	Messages:   	Project creation failed: test-acc-tf-p-8261604083776396379, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:59.3338492Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (117.51s)
```

- 2026-05-20 PASS 37 minutes
- 2026-05-21 PASS 24 minutes
- 2026-05-22 PASS an hour
- 2026-05-23 PASS 23 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 32 minutes
- 2026-05-26 PASS 23 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:18:42+00:00
```
2026-05-28T01:18:42.4299660Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-05-28T01:18:42.4300303Z     resource_test.go:169: Creating execution project (1): test-acc-tf-p-7485477048266083808
2026-05-28T01:18:42.4301051Z     resource_test.go:169: 
2026-05-28T01:18:42.4302007Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:18:42.4303873Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:18:42.4305735Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:18:42.4307510Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T01:18:42.4309430Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:169
2026-05-28T01:18:42.4310670Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:18:42.4311444Z         	Error:      	Received unexpected error:
2026-05-28T01:18:42.4314366Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:18:42.4315853Z         	Test:       	TestAccBackupRSOnlineArchiveWithProcessRegion
2026-05-28T01:18:42.4318320Z         	Messages:   	Project creation failed: test-acc-tf-p-7485477048266083808, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:18:42.4320086Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (0.88s)
```

- 2026-05-29 PASS 42 minutes
- 2026-05-30

### Error 2026-05-30T01:27:26+00:00
```
2026-05-30T01:27:26.4194667Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-05-30T01:27:26.4195792Z     resource_test.go:169: Creating execution project (1): test-acc-tf-p-4253787441894477121
2026-05-30T01:27:26.4196689Z     resource_test.go:169: 
2026-05-30T01:27:26.4198580Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:27:26.4201912Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:27:26.4205584Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:27:26.4208828Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-30T01:27:26.4212280Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:169
2026-05-30T01:27:26.4214752Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:27:26.4215709Z         	Error:      	Received unexpected error:
2026-05-30T01:27:26.4219355Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:27:26.4223112Z         	Test:       	TestAccBackupRSOnlineArchiveWithProcessRegion
2026-05-30T01:27:26.4226718Z         	Messages:   	Project creation failed: test-acc-tf-p-4253787441894477121, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:27:26.4228930Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (69.27s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02

### Error 2026-06-02T01:30:17+00:00
```
2026-06-02T01:30:17.9613574Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-06-02T01:30:17.9617402Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-06-02T01:30:17.9621630Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-06-02T01:30:17.9622577Z     pre_check.go:46: Time before creating cluster: 2026-06-02T01:11:34.925336709Z, ProjectID: 6a1e2d8233704dfc263ea548, Cluster name: test-acc-tf-c-4667479342153887657
2026-06-02T01:30:17.9697128Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-06-02T01:30:17.9697701Z     resource_test.go:178: Step 2/4 error: Error running apply: exit status 1
2026-06-02T01:30:17.9698139Z         
2026-06-02T01:30:17.9700487Z         Error: error creating MongoDB Atlas Online Archive:: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a1e2d8233704dfc263ea548/clusters/test-acc-tf-c-4667479342153887657/onlineArchives POST: HTTP 400 Bad Request (Error code: "ONLINE_ARCHIVE_CONCURRENT_MODIFICATIONS") Detail: Too many concurrent operations were made to modify Online Archives. Please try again. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-06-02T01:30:17.9702104Z         
2026-06-02T01:30:17.9702500Z           with mongodbatlas_online_archive.users_archive,
2026-06-02T01:30:17.9703269Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_online_archive" "users_archive":
2026-06-02T01:30:17.9704011Z           42: 	resource "mongodbatlas_online_archive" "users_archive" {
2026-06-02T01:30:17.9704394Z         
2026-06-02T01:30:17.9705864Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (1111.62s)
```

- 2026-06-03 PASS 42 minutes
- 2026-06-04 PASS 41 minutes
- 2026-06-05 PASS 33 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-31 01:52](#error-2026-05-31t0152000000) | ONLINE_ARCHIVE_CONCURRENT_MODIFICATIONS /api/atlas/v2/groups/6a1b8e694b92bebf8ebc46dc/clusters/test-acc-tf-c-1559390868833240344/onlineArchives | qa | 983.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 21 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 24 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 21 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31

### Error 2026-05-31T01:52:00+00:00
```
2026-05-31T01:52:00.5152347Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2026-05-31T01:52:00.5155223Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-05-31T01:52:00.5159251Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-05-31T01:52:00.5160152Z     pre_check.go:46: Time before creating cluster: 2026-05-31T01:27:17.913885108Z, ProjectID: 6a1b8e694b92bebf8ebc46dc, Cluster name: test-acc-tf-c-1559390868833240344
2026-05-31T01:52:00.5178179Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2026-05-31T01:52:00.5178720Z     resource_test.go:178: Step 2/4 error: Error running apply: exit status 1
2026-05-31T01:52:00.5179114Z         
2026-05-31T01:52:00.5181164Z         Error: error creating MongoDB Atlas Online Archive:: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a1b8e694b92bebf8ebc46dc/clusters/test-acc-tf-c-1559390868833240344/onlineArchives POST: HTTP 400 Bad Request (Error code: "ONLINE_ARCHIVE_CONCURRENT_MODIFICATIONS") Detail: Too many concurrent operations were made to modify Online Archives. Please try again. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-05-31T01:52:00.5182698Z         
2026-05-31T01:52:00.5183079Z           with mongodbatlas_online_archive.users_archive,
2026-05-31T01:52:00.5183782Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_online_archive" "users_archive":
2026-05-31T01:52:00.5184448Z           42: 	resource "mongodbatlas_online_archive" "users_archive" {
2026-05-31T01:52:00.5184817Z         
2026-05-31T01:52:00.5194709Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (983.69s)
```

- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

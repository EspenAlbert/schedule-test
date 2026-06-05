# backup/onlinearchive/TestAccBackupRSOnlineArchiveBasic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 7)
Success rate: 76.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.03s
[2026-05-18 02:19](#error-2026-05-18t0219470000) |  | dev |  | 2943.01s
[2026-05-19 01:23](#error-2026-05-19t0123590000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.04s
[2026-05-28 01:18](#error-2026-05-28t0118420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-05-30 01:27](#error-2026-05-30t0127260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 92.04s
[2026-06-02 01:30](#error-2026-06-02t0130170000) | ONLINE_ARCHIVE_CONCURRENT_MODIFICATIONS /api/atlas/v2/groups/6a1e2d8233704dfc263ea548/clusters/test-acc-tf-c-1464974862588840043/onlineArchives | dev |  | 1191.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS an hour
- 2026-05-08 PASS 43 minutes
- 2026-05-09

### Error 2026-05-09T01:25:50+00:00
```
2026-05-09T01:25:50.1246686Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-05-09T01:25:50.1247276Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-3399989249331598756
2026-05-09T01:25:50.1247779Z     resource_test.go:123: 
2026-05-09T01:25:50.1248723Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:25:50.1250588Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:25:50.1252460Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:25:50.1254485Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-09T01:25:50.1256413Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:123
2026-05-09T01:25:50.1257659Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:25:50.1258194Z         	Error:      	Received unexpected error:
2026-05-09T01:25:50.1260304Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1261395Z         	Test:       	TestAccBackupRSOnlineArchiveBasic
2026-05-09T01:25:50.1263215Z         	Messages:   	Project creation failed: test-acc-tf-p-3399989249331598756, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1264838Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (81.30s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 36 minutes
- 2026-05-12 PASS 25 minutes
- 2026-05-13 PASS 31 minutes
- 2026-05-14 PASS 58 minutes
- 2026-05-15 PASS 27 minutes
- 2026-05-16 PASS 16 minutes
- 2026-05-17: MISSING
- 2026-05-18

### Error 2026-05-18T02:19:47+00:00
```
2026-05-18T02:19:47.2134897Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-05-18T02:19:47.2139354Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-05-18T02:19:47.2144272Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-05-18T02:19:47.2145148Z     pre_check.go:46: Time before creating cluster: 2026-05-18T01:25:48.108584989Z, ProjectID: 6a0a6a8acc0f7af42b3d9131, Cluster name: test-acc-tf-c-5677155518728549436
2026-05-18T02:19:47.2162780Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-05-18T02:19:47.2163554Z     resource_test.go:131: Step 1/3 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-05-18T02:19:47.2172506Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (2943.11s)
```

- 2026-05-19

### Error 2026-05-19T01:23:59+00:00
```
2026-05-19T01:23:59.3292122Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-05-19T01:23:59.3292721Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-1891122135354449359
2026-05-19T01:23:59.3293225Z     resource_test.go:123: 
2026-05-19T01:23:59.3294144Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:23:59.3295972Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:23:59.3297828Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:23:59.3299836Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-19T01:23:59.3301751Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:123
2026-05-19T01:23:59.3303242Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:23:59.3303850Z         	Error:      	Received unexpected error:
2026-05-19T01:23:59.3306010Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:59.3307231Z         	Test:       	TestAccBackupRSOnlineArchiveBasic
2026-05-19T01:23:59.3309498Z         	Messages:   	Project creation failed: test-acc-tf-p-1891122135354449359, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:59.3310861Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (76.39s)
```

- 2026-05-20 PASS 37 minutes
- 2026-05-21 PASS 26 minutes
- 2026-05-22 PASS an hour
- 2026-05-23 PASS 24 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 32 minutes
- 2026-05-26 PASS 23 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:18:42+00:00
```
2026-05-28T01:18:42.4278679Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-05-28T01:18:42.4279423Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-1389073700299482217
2026-05-28T01:18:42.4279954Z     resource_test.go:123: 
2026-05-28T01:18:42.4281167Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:18:42.4283081Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:18:42.4284949Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:18:42.4286726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T01:18:42.4288642Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:123
2026-05-28T01:18:42.4289897Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:18:42.4290574Z         	Error:      	Received unexpected error:
2026-05-28T01:18:42.4293755Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:18:42.4295199Z         	Test:       	TestAccBackupRSOnlineArchiveBasic
2026-05-28T01:18:42.4297629Z         	Messages:   	Project creation failed: test-acc-tf-p-1389073700299482217, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:18:42.4299214Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (0.61s)
```

- 2026-05-29 PASS 42 minutes
- 2026-05-30

### Error 2026-05-30T01:27:26+00:00
```
2026-05-30T01:27:26.4160678Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-05-30T01:27:26.4161741Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-5856819799653550770
2026-05-30T01:27:26.4162689Z     resource_test.go:123: 
2026-05-30T01:27:26.4164573Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:27:26.4167972Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:27:26.4171338Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:27:26.4174733Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-30T01:27:26.4178206Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:123
2026-05-30T01:27:26.4180446Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:27:26.4181419Z         	Error:      	Received unexpected error:
2026-05-30T01:27:26.4186469Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:27:26.4188350Z         	Test:       	TestAccBackupRSOnlineArchiveBasic
2026-05-30T01:27:26.4191595Z         	Messages:   	Project creation failed: test-acc-tf-p-5856819799653550770, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:27:26.4193895Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (92.40s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 54 minutes
- 2026-06-02

### Error 2026-06-02T01:30:17+00:00
```
2026-06-02T01:30:17.9612020Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-06-02T01:30:17.9612637Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-8627084349003442672
2026-06-02T01:30:17.9616581Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-06-02T01:30:17.9619929Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-06-02T01:30:17.9620841Z     pre_check.go:46: Time before creating cluster: 2026-06-02T01:11:29.922086594Z, ProjectID: 6a1e2d8233704dfc263ea548, Cluster name: test-acc-tf-c-1464974862588840043
2026-06-02T01:30:17.9674737Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-06-02T01:30:17.9675422Z     resource_test.go:131: Step 2/3 error: Error running apply: exit status 1
2026-06-02T01:30:17.9675841Z         
2026-06-02T01:30:17.9678179Z         Error: error creating MongoDB Atlas Online Archive:: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a1e2d8233704dfc263ea548/clusters/test-acc-tf-c-1464974862588840043/onlineArchives POST: HTTP 400 Bad Request (Error code: "ONLINE_ARCHIVE_CONCURRENT_MODIFICATIONS") Detail: Too many concurrent operations were made to modify Online Archives. Please try again. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-06-02T01:30:17.9680046Z         
2026-06-02T01:30:17.9680451Z           with mongodbatlas_online_archive.users_archive,
2026-06-02T01:30:17.9681235Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_online_archive" "users_archive":
2026-06-02T01:30:17.9681970Z           42: 	resource "mongodbatlas_online_archive" "users_archive" {
2026-06-02T01:30:17.9682511Z         
2026-06-02T01:30:17.9706345Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (1191.40s)
```

- 2026-06-03 PASS 41 minutes
- 2026-06-04 PASS 38 minutes
- 2026-06-05 PASS 32 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-31 01:52](#error-2026-05-31t0152000000) | ONLINE_ARCHIVE_CONCURRENT_MODIFICATIONS /api/atlas/v2/groups/6a1b8e694b92bebf8ebc46dc/clusters/test-acc-tf-c-4966607549152191538/onlineArchives | qa | 1160.05s

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
- 2026-05-24 PASS 22 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31

### Error 2026-05-31T01:52:00+00:00
```
2026-05-31T01:52:00.5151596Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-05-31T01:52:00.5155786Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-05-31T01:52:00.5157677Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-05-31T01:52:00.5158522Z     pre_check.go:46: Time before creating cluster: 2026-05-31T01:27:12.90984303Z, ProjectID: 6a1b8e694b92bebf8ebc46dc, Cluster name: test-acc-tf-c-4966607549152191538
2026-05-31T01:52:00.5248447Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-05-31T01:52:00.5248948Z     resource_test.go:131: Step 2/3 error: Error running apply: exit status 1
2026-05-31T01:52:00.5249331Z         
2026-05-31T01:52:00.5251349Z         Error: error creating MongoDB Atlas Online Archive:: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a1b8e694b92bebf8ebc46dc/clusters/test-acc-tf-c-4966607549152191538/onlineArchives POST: HTTP 400 Bad Request (Error code: "ONLINE_ARCHIVE_CONCURRENT_MODIFICATIONS") Detail: Too many concurrent operations were made to modify Online Archives. Please try again. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-05-31T01:52:00.5252784Z         
2026-05-31T01:52:00.5253157Z           with mongodbatlas_online_archive.users_archive,
2026-05-31T01:52:00.5253853Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_online_archive" "users_archive":
2026-05-31T01:52:00.5254528Z           42: 	resource "mongodbatlas_online_archive" "users_archive" {
2026-05-31T01:52:00.5254886Z         
2026-05-31T01:52:00.5262597Z    test_name=TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-05-31T01:52:00.5270633Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (1160.50s)
```

- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

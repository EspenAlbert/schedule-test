# backup/onlinearchive/TestAccOnlineArchive_deleteOnCreateTimeout Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s
[2026-05-18 02:19](#error-2026-05-18t0219470000) |  | dev |  | 3057.10s
[2026-05-28 01:18](#error-2026-05-28t0118420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-06-02 01:30](#error-2026-06-02t0130170000) | ONLINE_ARCHIVE_CONCURRENT_MODIFICATIONS /api/atlas/v2/groups/6a1e2d8233704dfc263ea548/clusters/test-acc-tf-c-1006836039756128861/onlineArchives | dev |  | 995.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS an hour
- 2026-05-08 PASS 40 minutes
- 2026-05-09

### Error 2026-05-09T01:25:50+00:00
```
2026-05-09T01:25:50.1302397Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-05-09T01:25:50.1302996Z     resource_test.go:533: Creating execution project (1): test-acc-tf-p-4005547590076321674
2026-05-09T01:25:50.1303507Z     resource_test.go:533: 
2026-05-09T01:25:50.1304774Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:25:50.1306661Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:25:50.1308537Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:25:50.1310321Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-09T01:25:50.1312233Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:533
2026-05-09T01:25:50.1313484Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:25:50.1314013Z         	Error:      	Received unexpected error:
2026-05-09T01:25:50.1316175Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1317284Z         	Test:       	TestAccOnlineArchive_deleteOnCreateTimeout
2026-05-09T01:25:50.1319137Z         	Messages:   	Project creation failed: test-acc-tf-p-4005547590076321674, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1320556Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (64.13s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 36 minutes
- 2026-05-12 PASS 23 minutes
- 2026-05-13 PASS 30 minutes
- 2026-05-14 PASS 57 minutes
- 2026-05-15 PASS 28 minutes
- 2026-05-16 PASS 17 minutes
- 2026-05-17: MISSING
- 2026-05-18

### Error 2026-05-18T02:19:47+00:00
```
2026-05-18T02:19:47.2137580Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-05-18T02:19:47.2139820Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-05-18T02:19:47.2142665Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-05-18T02:19:47.2143564Z     pre_check.go:46: Time before creating cluster: 2026-05-18T01:25:43.105572511Z, ProjectID: 6a0a6a8acc0f7af42b3d9131, Cluster name: test-acc-tf-c-7539754306301958979
2026-05-18T02:19:47.2171102Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-05-18T02:19:47.2171859Z     resource_test.go:536: Step 1/2 error: Check failed: unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-05-18T02:19:47.2176700Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (3057.99s)
```

- 2026-05-19 PASS 14 minutes
- 2026-05-20 PASS 36 minutes
- 2026-05-21 PASS 20 minutes
- 2026-05-22 PASS an hour
- 2026-05-23 PASS 21 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 31 minutes
- 2026-05-26 PASS 21 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:18:42+00:00
```
2026-05-28T01:18:42.4341618Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-05-28T01:18:42.4342235Z     resource_test.go:533: Creating execution project (1): test-acc-tf-p-1101570280842043594
2026-05-28T01:18:42.4342746Z     resource_test.go:533: 
2026-05-28T01:18:42.4343868Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:18:42.4346039Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:18:42.4348198Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:18:42.4350145Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T01:18:42.4352532Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:533
2026-05-28T01:18:42.4354016Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:18:42.4354559Z         	Error:      	Received unexpected error:
2026-05-28T01:18:42.4358192Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:18:42.4359826Z         	Test:       	TestAccOnlineArchive_deleteOnCreateTimeout
2026-05-28T01:18:42.4362758Z         	Messages:   	Project creation failed: test-acc-tf-p-1101570280842043594, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:18:42.4364512Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (0.92s)
```

- 2026-05-29 PASS 39 minutes
- 2026-05-30 PASS 17 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 58 minutes
- 2026-06-02

### Error 2026-06-02T01:30:17+00:00
```
2026-06-02T01:30:17.9615756Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-06-02T01:30:17.9617823Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-06-02T01:30:17.9623539Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-06-02T01:30:17.9624469Z     pre_check.go:46: Time before creating cluster: 2026-06-02T01:11:39.928903722Z, ProjectID: 6a1e2d8233704dfc263ea548, Cluster name: test-acc-tf-c-1006836039756128861
2026-06-02T01:30:17.9652565Z   
2026-06-02T01:30:17.9653172Z     resource_test.go:536: Step 2/2, expected an error with pattern, no match on: Error running apply: exit status 1
2026-06-02T01:30:17.9653720Z         
2026-06-02T01:30:17.9656417Z         Error: error creating MongoDB Atlas Online Archive:: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a1e2d8233704dfc263ea548/clusters/test-acc-tf-c-1006836039756128861/onlineArchives POST: HTTP 400 Bad Request (Error code: "ONLINE_ARCHIVE_CONCURRENT_MODIFICATIONS") Detail: Too many concurrent operations were made to modify Online Archives. Please try again. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-06-02T01:30:17.9658064Z         
2026-06-02T01:30:17.9658474Z           with mongodbatlas_online_archive.users_archive,
2026-06-02T01:30:17.9659259Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_online_archive" "users_archive":
2026-06-02T01:30:17.9660000Z           42: 	resource "mongodbatlas_online_archive" "users_archive" {
2026-06-02T01:30:17.9660394Z         
2026-06-02T01:30:17.9704717Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (995.78s)
```

- 2026-06-03 PASS 35 minutes
- 2026-06-04 PASS 41 minutes
- 2026-06-05 PASS 30 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-31 01:52](#error-2026-05-31t0152000000) | ONLINE_ARCHIVE_CONCURRENT_MODIFICATIONS /api/atlas/v2/groups/6a1b8e694b92bebf8ebc46dc/clusters/test-acc-tf-c-7930443781169959707/onlineArchives | qa | 1170.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 20 minutes
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
- 2026-05-24 PASS 20 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31

### Error 2026-05-31T01:52:00+00:00
```
2026-05-31T01:52:00.5153931Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2026-05-31T01:52:00.5156161Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2026-05-31T01:52:00.5160843Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-05-31T01:52:00.5161661Z     pre_check.go:46: Time before creating cluster: 2026-05-31T01:27:22.917459781Z, ProjectID: 6a1b8e694b92bebf8ebc46dc, Cluster name: test-acc-tf-c-7930443781169959707
2026-05-31T01:52:00.5227928Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2026-05-31T01:52:00.5228597Z     resource_test.go:536: Step 2/2, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-31T01:52:00.5229092Z         
2026-05-31T01:52:00.5231113Z         Error: error creating MongoDB Atlas Online Archive:: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a1b8e694b92bebf8ebc46dc/clusters/test-acc-tf-c-7930443781169959707/onlineArchives POST: HTTP 400 Bad Request (Error code: "ONLINE_ARCHIVE_CONCURRENT_MODIFICATIONS") Detail: Too many concurrent operations were made to modify Online Archives. Please try again. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-05-31T01:52:00.5232571Z         
2026-05-31T01:52:00.5232950Z           with mongodbatlas_online_archive.users_archive,
2026-05-31T01:52:00.5233760Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_online_archive" "users_archive":
2026-05-31T01:52:00.5234417Z           42: 	resource "mongodbatlas_online_archive" "users_archive" {
2026-05-31T01:52:00.5234777Z         
2026-05-31T01:52:00.5271074Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (1170.82s)
```

- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

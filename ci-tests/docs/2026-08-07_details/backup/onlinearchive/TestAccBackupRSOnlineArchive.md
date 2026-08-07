# backup/onlinearchive/TestAccBackupRSOnlineArchive Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:39](#error-2026-07-09t0139310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.07s
[2026-07-10 02:44](#error-2026-07-10t0244520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a504d34aea6151790a7c908/clusters/test-acc-tf-c-2158407781570673878 | dev | flaky_500 | 3906.01s
[2026-07-11 01:10](#error-2026-07-11t0110170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s
[2026-07-18 01:31](#error-2026-07-18t0131540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 96.06s
[2026-07-21 01:07](#error-2026-07-21t0107290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:39:31+00:00
```
2026-07-09T01:39:31.8722177Z === RUN   TestAccBackupRSOnlineArchive
2026-07-09T01:39:31.8722769Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-3011957929461209726
2026-07-09T01:39:31.8723289Z     resource_test.go:28: 
2026-07-09T01:39:31.8724226Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:39:31.8726064Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:39:31.8728112Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:39:31.8730407Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-09T01:39:31.8732279Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:28
2026-07-09T01:39:31.8733506Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:39:31.8734061Z         	Error:      	Received unexpected error:
2026-07-09T01:39:31.8736157Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:39:31.8737502Z         	Test:       	TestAccBackupRSOnlineArchive
2026-07-09T01:39:31.8739320Z         	Messages:   	Project creation failed: test-acc-tf-p-3011957929461209726, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:39:31.8740534Z --- FAIL: TestAccBackupRSOnlineArchive (84.72s)
```

- 2026-07-10

### Error 2026-07-10T02:44:52+00:00
```
2026-07-10T02:44:52.3109197Z === RUN   TestAccBackupRSOnlineArchive
2026-07-10T02:44:52.3115380Z === CONT  TestAccBackupRSOnlineArchive
2026-07-10T02:44:52.3123845Z === NAME  TestAccBackupRSOnlineArchive
2026-07-10T02:44:52.3125106Z     pre_check.go:46: Time before creating cluster: 2026-07-10T01:39:19.58238435Z, ProjectID: 6a504d34aea6151790a7c908, Cluster name: test-acc-tf-c-2158407781570673878
2026-07-10T02:44:52.3227990Z === NAME  TestAccBackupRSOnlineArchive
2026-07-10T02:44:52.3228808Z     resource_test.go:35: Step 1/7 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-07-10T02:44:52.3242463Z    test_terraform_path=/home/runner/work/_temp/62b646e2-959d-4a9c-a271-e341496bc744/terraform test_working_directory=/tmp/plugintest1515923565
2026-07-10T02:44:52.3243427Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:44:52.3243922Z         
2026-07-10T02:44:52.3244211Z         Error: Error in delete
2026-07-10T02:44:52.3244687Z         
2026-07-10T02:44:52.3245150Z         cluster name: test-acc-tf-c-2158407781570673878, API error details:
2026-07-10T02:44:52.3246083Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a504d34aea6151790a7c908/clusters/test-acc-tf-c-2158407781570673878
2026-07-10T02:44:52.3246937Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:44:52.3247608Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:44:52.3248077Z         BadRequestDetail: 
2026-07-10T02:44:52.3248412Z --- FAIL: TestAccBackupRSOnlineArchive (3906.13s)
```

- 2026-07-11

### Error 2026-07-11T01:10:17+00:00
```
2026-07-11T01:10:17.0063761Z === RUN   TestAccBackupRSOnlineArchive
2026-07-11T01:10:17.0064374Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-8695517560266382700
2026-07-11T01:10:17.0064879Z     resource_test.go:28: 
2026-07-11T01:10:17.0065804Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:10:17.0067790Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:10:17.0069625Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:10:17.0071335Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-11T01:10:17.0073177Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:28
2026-07-11T01:10:17.0074382Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T01:10:17.0074925Z         	Error:      	Received unexpected error:
2026-07-11T01:10:17.0077087Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:17.0078127Z         	Test:       	TestAccBackupRSOnlineArchive
2026-07-11T01:10:17.0079884Z         	Messages:   	Project creation failed: test-acc-tf-p-8695517560266382700, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:17.0081021Z --- FAIL: TestAccBackupRSOnlineArchive (62.52s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 50 minutes
- 2026-07-14 PASS 29 minutes
- 2026-07-15 PASS 31 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 39 minutes
- 2026-07-18

### Error 2026-07-18T01:31:54+00:00
```
2026-07-18T01:31:54.2718628Z === RUN   TestAccBackupRSOnlineArchive
2026-07-18T01:31:54.2719682Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-2660517285052681970
2026-07-18T01:31:54.2720676Z     resource_test.go:28: 
2026-07-18T01:31:54.2721951Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:31:54.2724583Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:31:54.2727127Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:31:54.2729553Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-18T01:31:54.2732620Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:28
2026-07-18T01:31:54.2734294Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:31:54.2735012Z         	Error:      	Received unexpected error:
2026-07-18T01:31:54.2737402Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:31:54.2738457Z         	Test:       	TestAccBackupRSOnlineArchive
2026-07-18T01:31:54.2740479Z         	Messages:   	Project creation failed: test-acc-tf-p-2660517285052681970, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:31:54.2741727Z --- FAIL: TestAccBackupRSOnlineArchive (96.63s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:07:29+00:00
```
2026-07-21T01:07:29.6328883Z === RUN   TestAccBackupRSOnlineArchive
2026-07-21T01:07:29.6329828Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-7861844613316889191
2026-07-21T01:07:29.6333122Z     resource_test.go:28: 
2026-07-21T01:07:29.6334705Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T01:07:29.6337805Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T01:07:29.6340907Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T01:07:29.6344009Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T01:07:29.6347150Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:28
2026-07-21T01:07:29.6349186Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T01:07:29.6350083Z         	Error:      	Received unexpected error:
2026-07-21T01:07:29.6353542Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:07:29.6355433Z         	Test:       	TestAccBackupRSOnlineArchive
2026-07-21T01:07:29.6358435Z         	Messages:   	Project creation failed: test-acc-tf-p-7861844613316889191, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:07:29.6360342Z --- FAIL: TestAccBackupRSOnlineArchive (62.28s)
```

- 2026-07-22 PASS 59 minutes
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8848915Z === RUN   TestAccBackupRSOnlineArchive
2026-07-23T00:50:22.8849486Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-8567670333609574533
2026-07-23T00:50:22.8849984Z     resource_test.go:28: 
2026-07-23T00:50:22.8850903Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8852695Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8854493Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8856210Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:50:22.8858287Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:28
2026-07-23T00:50:22.8859500Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:50:22.8860034Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8861963Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8862993Z         	Test:       	TestAccBackupRSOnlineArchive
2026-07-23T00:50:22.8864875Z         	Messages:   	Project creation failed: test-acc-tf-p-8567670333609574533, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8866068Z --- FAIL: TestAccBackupRSOnlineArchive (61.37s)
```

- 2026-07-24 PASS 2 hours
- 2026-07-25 PASS 29 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 38 minutes
- 2026-07-30 PASS 58 minutes
- 2026-07-31 PASS 25 minutes
- 2026-08-01 PASS 20 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 21 minutes
- 2026-08-04 PASS 19 minutes
- 2026-08-05 PASS 20 minutes
- 2026-08-06 PASS 21 minutes
- 2026-08-07 PASS 21 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 26 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 19 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 26 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 27 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 19 minutes
  - PASS 22 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 17 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

# backup/onlinearchive/TestAccBackupRSOnlineArchiveBasic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:39](#error-2026-07-09t0139310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 98.04s
[2026-07-10 02:44](#error-2026-07-10t0244520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a504d34aea6151790a7c908/clusters/test-acc-tf-c-6379248098745626002 | dev | flaky_500 | 3897.02s
[2026-07-11 01:10](#error-2026-07-11t0110170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.03s
[2026-07-18 01:31](#error-2026-07-18t0131540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 101.00s
[2026-07-21 01:07](#error-2026-07-21t0107290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.10s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:39:31+00:00
```
2026-07-09T01:39:31.8740931Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-07-09T01:39:31.8741549Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-3368616598408080381
2026-07-09T01:39:31.8742078Z     resource_test.go:123: 
2026-07-09T01:39:31.8743025Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:39:31.8744883Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:39:31.8746736Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:39:31.8754834Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-09T01:39:31.8756760Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:123
2026-07-09T01:39:31.8758337Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:39:31.8758896Z         	Error:      	Received unexpected error:
2026-07-09T01:39:31.8760896Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:39:31.8761980Z         	Test:       	TestAccBackupRSOnlineArchiveBasic
2026-07-09T01:39:31.8763774Z         	Messages:   	Project creation failed: test-acc-tf-p-3368616598408080381, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:39:31.8765027Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (98.41s)
```

- 2026-07-10

### Error 2026-07-10T02:44:52+00:00
```
2026-07-10T02:44:52.3110602Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-07-10T02:44:52.3115021Z === CONT  TestAccBackupRSOnlineArchiveBasic
2026-07-10T02:44:52.3117182Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-07-10T02:44:52.3118124Z     pre_check.go:46: Time before creating cluster: 2026-07-10T01:39:09.576276728Z, ProjectID: 6a504d34aea6151790a7c908, Cluster name: test-acc-tf-c-6379248098745626002
2026-07-10T02:44:52.3183281Z === NAME  TestAccBackupRSOnlineArchiveBasic
2026-07-10T02:44:52.3184137Z     resource_test.go:131: Step 1/3 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-07-10T02:44:52.3196867Z   
2026-07-10T02:44:52.3197381Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:44:52.3197871Z         
2026-07-10T02:44:52.3198149Z         Error: Error in delete
2026-07-10T02:44:52.3198432Z         
2026-07-10T02:44:52.3198897Z         cluster name: test-acc-tf-c-6379248098745626002, API error details:
2026-07-10T02:44:52.3199820Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a504d34aea6151790a7c908/clusters/test-acc-tf-c-6379248098745626002
2026-07-10T02:44:52.3200679Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:44:52.3201621Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:44:52.3202091Z         BadRequestDetail: 
2026-07-10T02:44:52.3202439Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (3897.18s)
```

- 2026-07-11

### Error 2026-07-11T01:10:17+00:00
```
2026-07-11T01:10:17.0081753Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-07-11T01:10:17.0082365Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-6754991157175426774
2026-07-11T01:10:17.0082877Z     resource_test.go:123: 
2026-07-11T01:10:17.0083802Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:10:17.0085594Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:10:17.0087745Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:10:17.0089489Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-11T01:10:17.0091354Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:123
2026-07-11T01:10:17.0092574Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T01:10:17.0093115Z         	Error:      	Received unexpected error:
2026-07-11T01:10:17.0095081Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:17.0096407Z         	Test:       	TestAccBackupRSOnlineArchiveBasic
2026-07-11T01:10:17.0098241Z         	Messages:   	Project creation failed: test-acc-tf-p-6754991157175426774, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:17.0099419Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (83.31s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 50 minutes
- 2026-07-14 PASS 29 minutes
- 2026-07-15 PASS 29 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 38 minutes
- 2026-07-18

### Error 2026-07-18T01:31:54+00:00
```
2026-07-18T01:31:54.2742136Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-07-18T01:31:54.2742756Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-9222631586425639428
2026-07-18T01:31:54.2743273Z     resource_test.go:123: 
2026-07-18T01:31:54.2744207Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:31:54.2746032Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:31:54.2747852Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:31:54.2749588Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-18T01:31:54.2751642Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:123
2026-07-18T01:31:54.2753057Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:31:54.2753594Z         	Error:      	Received unexpected error:
2026-07-18T01:31:54.2755548Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:31:54.2756628Z         	Test:       	TestAccBackupRSOnlineArchiveBasic
2026-07-18T01:31:54.2758415Z         	Messages:   	Project creation failed: test-acc-tf-p-9222631586425639428, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:31:54.2759629Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (101.04s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:07:29+00:00
```
2026-07-21T01:07:29.6360952Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-07-21T01:07:29.6362047Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-929062732429763712
2026-07-21T01:07:29.6362891Z     resource_test.go:123: 
2026-07-21T01:07:29.6364414Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T01:07:29.6367484Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T01:07:29.6370576Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T01:07:29.6373671Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T01:07:29.6376828Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:123
2026-07-21T01:07:29.6378897Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T01:07:29.6379762Z         	Error:      	Received unexpected error:
2026-07-21T01:07:29.6383232Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:07:29.6384950Z         	Test:       	TestAccBackupRSOnlineArchiveBasic
2026-07-21T01:07:29.6387976Z         	Messages:   	Project creation failed: test-acc-tf-p-929062732429763712, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:07:29.6389964Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (62.99s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8866451Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-07-23T00:50:22.8867188Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-7994642253770963174
2026-07-23T00:50:22.8867692Z     resource_test.go:123: 
2026-07-23T00:50:22.8868604Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8870399Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8872201Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8873918Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:50:22.8875755Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:123
2026-07-23T00:50:22.8877232Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:50:22.8877768Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8879693Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8880740Z         	Test:       	TestAccBackupRSOnlineArchiveBasic
2026-07-23T00:50:22.8882502Z         	Messages:   	Project creation failed: test-acc-tf-p-7994642253770963174, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8883703Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (62.35s)
```

- 2026-07-24 PASS 2 hours
- 2026-07-25 PASS 28 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 38 minutes
- 2026-07-30 PASS 57 minutes
- 2026-07-31 PASS 24 minutes
- 2026-08-01 PASS 19 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 21 minutes
- 2026-08-04 PASS 20 minutes
- 2026-08-05 PASS 19 minutes
- 2026-08-06 PASS 20 minutes
- 2026-08-07 PASS 21 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 27 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 19 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 25 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 25 minutes
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

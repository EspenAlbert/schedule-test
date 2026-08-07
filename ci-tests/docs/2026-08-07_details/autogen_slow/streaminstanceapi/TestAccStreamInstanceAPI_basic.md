# autogen_slow/streaminstanceapi/TestAccStreamInstanceAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:36](#error-2026-07-09t0136440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.01s
[2026-07-11 00:54](#error-2026-07-11t0054050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s
[2026-07-16 01:58](#error-2026-07-16t0158490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.03s
[2026-07-21 01:42](#error-2026-07-21t0142120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.06s
[2026-07-23 02:04](#error-2026-07-23t0204190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:36:44+00:00
```
2026-07-09T01:36:44.3038371Z === RUN   TestAccStreamInstanceAPI_basic
2026-07-09T01:36:44.3039021Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-7507540308642376440
2026-07-09T01:36:44.3039589Z     resource_test.go:21: 
2026-07-09T01:36:44.3040573Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:36:44.3042581Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:36:44.3044480Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:36:44.3046726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-07-09T01:36:44.3047629Z         	Error:      	Received unexpected error:
2026-07-09T01:36:44.3049662Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:36:44.3050756Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-07-09T01:36:44.3052590Z         	Messages:   	Project creation failed: test-acc-tf-p-7507540308642376440, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:36:44.3053831Z --- FAIL: TestAccStreamInstanceAPI_basic (66.07s)
```

- 2026-07-10 PASS 5 seconds
- 2026-07-11

### Error 2026-07-11T00:54:05+00:00
```
2026-07-11T00:54:05.8118240Z === RUN   TestAccStreamInstanceAPI_basic
2026-07-11T00:54:05.8119277Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-5274917239981686376
2026-07-11T00:54:05.8120166Z     resource_test.go:21: 
2026-07-11T00:54:05.8121886Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:05.8125394Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:05.8128997Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:05.8132700Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-07-11T00:54:05.8134441Z         	Error:      	Received unexpected error:
2026-07-11T00:54:05.8138382Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:05.8140435Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-07-11T00:54:05.8143848Z         	Messages:   	Project creation failed: test-acc-tf-p-5274917239981686376, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:05.8146217Z --- FAIL: TestAccStreamInstanceAPI_basic (61.60s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 5 seconds
- 2026-07-14 PASS 7 seconds
- 2026-07-15 PASS 6 seconds
- 2026-07-16

### Error 2026-07-16T01:58:49+00:00
```
2026-07-16T01:58:49.2909426Z === RUN   TestAccStreamInstanceAPI_basic
2026-07-16T01:58:49.2910183Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-474747234699461645
2026-07-16T01:58:49.2910699Z     resource_test.go:21: 
2026-07-16T01:58:49.2912073Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T01:58:49.2914285Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T01:58:49.2916426Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T01:58:49.2918650Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-07-16T01:58:49.2919516Z         	Error:      	Received unexpected error:
2026-07-16T01:58:49.2922026Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T01:58:49.2923154Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-07-16T01:58:49.2925019Z         	Messages:   	Project creation failed: test-acc-tf-p-474747234699461645, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T01:58:49.2926222Z --- FAIL: TestAccStreamInstanceAPI_basic (72.35s)
```

- 2026-07-17 PASS 5 seconds
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:42:12+00:00
```
2026-07-21T01:42:12.8332102Z === RUN   TestAccStreamInstanceAPI_basic
2026-07-21T01:42:12.8333080Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-1350240527934571489
2026-07-21T01:42:12.8333856Z     resource_test.go:21: 
2026-07-21T01:42:12.8334843Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T01:42:12.8336961Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T01:42:12.8339117Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T01:42:12.8341142Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-07-21T01:42:12.8342037Z         	Error:      	Received unexpected error:
2026-07-21T01:42:12.8344117Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:42:12.8345186Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-07-21T01:42:12.8347024Z         	Messages:   	Project creation failed: test-acc-tf-p-1350240527934571489, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:42:12.8348475Z --- FAIL: TestAccStreamInstanceAPI_basic (68.64s)
```

- 2026-07-22 PASS 5 seconds
- 2026-07-23

### Error 2026-07-23T02:04:19+00:00
```
2026-07-23T02:04:19.8647241Z === RUN   TestAccStreamInstanceAPI_basic
2026-07-23T02:04:19.8647831Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-7983539312945362249
2026-07-23T02:04:19.8648340Z     resource_test.go:21: 
2026-07-23T02:04:19.8649266Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T02:04:19.8651258Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T02:04:19.8653358Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T02:04:19.8655314Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streaminstanceapi/resource_test.go:21
2026-07-23T02:04:19.8656152Z         	Error:      	Received unexpected error:
2026-07-23T02:04:19.8658150Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T02:04:19.8659174Z         	Test:       	TestAccStreamInstanceAPI_basic
2026-07-23T02:04:19.8661088Z         	Messages:   	Project creation failed: test-acc-tf-p-7983539312945362249, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T02:04:19.8662238Z --- FAIL: TestAccStreamInstanceAPI_basic (66.21s)
```

- 2026-07-24 PASS 3 seconds
- 2026-07-25 PASS 4 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 6 seconds
- 2026-07-28 PASS 5 seconds
- 2026-07-29 PASS 3 seconds
- 2026-07-30 PASS 4 seconds
- 2026-07-31 PASS 4 seconds
- 2026-08-01 PASS 3 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 4 seconds
- 2026-08-04 PASS 5 seconds
- 2026-08-05 PASS 5 seconds
- 2026-08-06 PASS 5 seconds
- 2026-08-07 PASS 4 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 4 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 4 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 6 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 4 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 seconds
  - PASS 4 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

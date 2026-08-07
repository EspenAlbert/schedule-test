# autogen_slow/pushbasedlogexportapi/TestAccPushBasedLogExportAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:36](#error-2026-07-09t0136440000) |  | dev | flaky_500 | 38.06s
[2026-07-11 00:48](#error-2026-07-11t0048400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.02s
[2026-07-16 00:49](#error-2026-07-16t0049450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.06s
[2026-07-21 00:49](#error-2026-07-21t0049090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.00s
[2026-07-23 02:04](#error-2026-07-23t0204190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:36:44+00:00
```
2026-07-09T01:36:44.2709815Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-07-09T01:36:44.2710985Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-6488933827799258955
2026-07-09T01:36:44.2711933Z     resource_test.go:21: 
2026-07-09T01:36:44.2713725Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:36:44.2717349Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:36:44.2720827Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:36:44.2724931Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-07-09T01:36:44.2729136Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-07-09T01:36:44.2731564Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:36:44.2732600Z         	Error:      	Received unexpected error:
2026-07-09T01:36:44.2734408Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T01:36:44.2735716Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-07-09T01:36:44.2737716Z         	Messages:   	Project creation failed: test-acc-tf-p-6488933827799258955, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T01:36:44.2739147Z --- FAIL: TestAccPushBasedLogExportAPI_basic (38.64s)
```

- 2026-07-10 PASS a minute
- 2026-07-11

### Error 2026-07-11T00:48:40+00:00
```
2026-07-11T00:48:40.9362807Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-07-11T00:48:40.9363403Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-8392502327723766922
2026-07-11T00:48:40.9363901Z     resource_test.go:21: 
2026-07-11T00:48:40.9364826Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:48:40.9366958Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:48:40.9368832Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:48:40.9370865Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-07-11T00:48:40.9372974Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-07-11T00:48:40.9374255Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:48:40.9374786Z         	Error:      	Received unexpected error:
2026-07-11T00:48:40.9376998Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:48:40.9378217Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-07-11T00:48:40.9380022Z         	Messages:   	Project creation failed: test-acc-tf-p-8392502327723766922, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:48:40.9381249Z --- FAIL: TestAccPushBasedLogExportAPI_basic (86.17s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a minute
- 2026-07-14 PASS 2 minutes
- 2026-07-15 PASS a minute
- 2026-07-16

### Error 2026-07-16T00:49:45+00:00
```
2026-07-16T00:49:45.2090369Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-07-16T00:49:45.2091012Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-975122654689904994
2026-07-16T00:49:45.2091528Z     resource_test.go:21: 
2026-07-16T00:49:45.2092903Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:49:45.2094905Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:49:45.2096846Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:49:45.2098998Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-07-16T00:49:45.2101433Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-07-16T00:49:45.2103260Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-16T00:49:45.2103828Z         	Error:      	Received unexpected error:
2026-07-16T00:49:45.2106000Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:45.2107098Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-07-16T00:49:45.2109003Z         	Messages:   	Project creation failed: test-acc-tf-p-975122654689904994, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:45.2110371Z --- FAIL: TestAccPushBasedLogExportAPI_basic (67.58s)
```

- 2026-07-17 PASS a minute
- 2026-07-18 PASS 2 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:49:09+00:00
```
2026-07-21T00:49:09.3716959Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-07-21T00:49:09.3717540Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-4373066020671958808
2026-07-21T00:49:09.3718150Z     resource_test.go:21: 
2026-07-21T00:49:09.3719087Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:49:09.3720933Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:49:09.3722748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:49:09.3724734Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-07-21T00:49:09.3726968Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-07-21T00:49:09.3728330Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:49:09.3728889Z         	Error:      	Received unexpected error:
2026-07-21T00:49:09.3730911Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:09.3731931Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-07-21T00:49:09.3733706Z         	Messages:   	Project creation failed: test-acc-tf-p-4373066020671958808, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:09.3734835Z --- FAIL: TestAccPushBasedLogExportAPI_basic (67.03s)
```

- 2026-07-22 PASS a minute
- 2026-07-23

### Error 2026-07-23T02:04:19+00:00
```
2026-07-23T02:04:19.8405260Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-07-23T02:04:19.8405859Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-8406704930425406538
2026-07-23T02:04:19.8406377Z     resource_test.go:21: 
2026-07-23T02:04:19.8407327Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T02:04:19.8409183Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T02:04:19.8411213Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T02:04:19.8413229Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-07-23T02:04:19.8415264Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-07-23T02:04:19.8416503Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T02:04:19.8417046Z         	Error:      	Received unexpected error:
2026-07-23T02:04:19.8419074Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T02:04:19.8420255Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-07-23T02:04:19.8422042Z         	Messages:   	Project creation failed: test-acc-tf-p-8406704930425406538, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T02:04:19.8423222Z --- FAIL: TestAccPushBasedLogExportAPI_basic (62.18s)
```

- 2026-07-24 PASS a minute
- 2026-07-25 PASS a minute
- 2026-07-26: MISSING
- 2026-07-27 PASS a minute
- 2026-07-28 PASS a minute
- 2026-07-29 PASS a minute
- 2026-07-30 PASS a minute
- 2026-07-31 PASS a minute
- 2026-08-01 PASS a minute
- 2026-08-02: MISSING
- 2026-08-03 PASS a minute
- 2026-08-04 PASS a minute
- 2026-08-05 PASS a minute
- 2026-08-06 PASS a minute
- 2026-08-07 PASS a minute

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a minute
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a minute
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS a minute
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a minute
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a minute
  - PASS a minute
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a minute
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

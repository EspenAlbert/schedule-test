# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:43](#error-2026-07-11t0043160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s
[2026-07-18 00:41](#error-2026-07-18t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 102.04s
[2026-07-21 00:44](#error-2026-07-21t0044410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 101.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 3 minutes
- 2026-07-10 PASS a minute
- 2026-07-11

### Error 2026-07-11T00:43:16+00:00
```
2026-07-11T00:43:16.7804757Z === RUN   TestAccPushBasedLogExport_basic
2026-07-11T00:43:16.7809242Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-3820926153691801925
2026-07-11T00:44:18.6923770Z     resource_test.go:24: 
2026-07-11T00:44:18.6926894Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:44:18.6931920Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:44:18.6936547Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:44:18.6940367Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-07-11T00:44:18.6942882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-07-11T00:44:18.6944382Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:44:18.6945009Z         	Error:      	Received unexpected error:
2026-07-11T00:44:18.6947435Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:18.6948583Z         	Test:       	TestAccPushBasedLogExport_basic
2026-07-11T00:44:18.6950444Z         	Messages:   	Project creation failed: test-acc-tf-p-3820926153691801925, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:18.6951750Z --- FAIL: TestAccPushBasedLogExport_basic (61.91s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a minute
- 2026-07-14 PASS 2 minutes
- 2026-07-15 PASS a minute
- 2026-07-16 PASS a minute
- 2026-07-17 PASS a minute
- 2026-07-18

### Error 2026-07-18T00:41:24+00:00
```
2026-07-18T00:41:24.7964751Z === RUN   TestAccPushBasedLogExport_basic
2026-07-18T00:41:24.7967336Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-898527264483279539
2026-07-18T00:43:07.2125809Z     resource_test.go:24: 
2026-07-18T00:43:07.2129569Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:43:07.2134076Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:43:07.2136902Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:43:07.2140234Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-07-18T00:43:07.2142584Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-07-18T00:43:07.2144023Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T00:43:07.2144619Z         	Error:      	Received unexpected error:
2026-07-18T00:43:07.2146928Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:43:07.2148252Z         	Test:       	TestAccPushBasedLogExport_basic
2026-07-18T00:43:07.2150643Z         	Messages:   	Project creation failed: test-acc-tf-p-898527264483279539, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:43:07.2151973Z --- FAIL: TestAccPushBasedLogExport_basic (102.42s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:44:41+00:00
```
2026-07-21T00:44:41.2869424Z === RUN   TestAccPushBasedLogExport_basic
2026-07-21T00:44:41.2870615Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-4284865940108958488
2026-07-21T00:46:22.8351460Z     resource_test.go:24: 
2026-07-21T00:46:22.8354070Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:46:22.8357040Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:46:22.8358882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:46:22.8360852Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2026-07-21T00:46:22.8363077Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2026-07-21T00:46:22.8364296Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:46:22.8364836Z         	Error:      	Received unexpected error:
2026-07-21T00:46:22.8366774Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:46:22.8367813Z         	Test:       	TestAccPushBasedLogExport_basic
2026-07-21T00:46:22.8369521Z         	Messages:   	Project creation failed: test-acc-tf-p-4284865940108958488, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:46:22.8370645Z --- FAIL: TestAccPushBasedLogExport_basic (101.55s)
```

- 2026-07-22 PASS a minute
- 2026-07-23 PASS 4 minutes
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

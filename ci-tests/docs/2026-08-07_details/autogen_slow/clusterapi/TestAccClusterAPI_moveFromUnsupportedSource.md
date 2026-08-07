# autogen_slow/clusterapi/TestAccClusterAPI_moveFromUnsupportedSource Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:48](#error-2026-07-11t0048400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.04s
[2026-07-16 00:49](#error-2026-07-16t0049450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 95.08s
[2026-07-18 00:46](#error-2026-07-18t0046020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.08s
[2026-07-21 00:49](#error-2026-07-21t0049090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS a minute
- 2026-07-10 PASS 2 seconds
- 2026-07-11

### Error 2026-07-11T00:48:40+00:00
```
2026-07-11T00:48:40.9320249Z === RUN   TestAccClusterAPI_moveFromUnsupportedSource
2026-07-11T00:48:40.9320844Z     move_test.go:43: Creating execution project (1): test-acc-tf-p-3037508013043308256
2026-07-11T00:48:40.9321319Z     move_test.go:43: 
2026-07-11T00:48:40.9322256Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:48:40.9324145Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:48:40.9326302Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:48:40.9328200Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:43
2026-07-11T00:48:40.9329001Z         	Error:      	Received unexpected error:
2026-07-11T00:48:40.9331001Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:48:40.9332110Z         	Test:       	TestAccClusterAPI_moveFromUnsupportedSource
2026-07-11T00:48:40.9333950Z         	Messages:   	Project creation failed: test-acc-tf-p-3037508013043308256, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:48:40.9335197Z --- FAIL: TestAccClusterAPI_moveFromUnsupportedSource (77.38s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 2 seconds
- 2026-07-14 PASS 4 seconds
- 2026-07-15 PASS 3 seconds
- 2026-07-16

### Error 2026-07-16T00:49:45+00:00
```
2026-07-16T00:49:45.2024455Z === RUN   TestAccClusterAPI_moveFromUnsupportedSource
2026-07-16T00:49:45.2025075Z     move_test.go:43: Creating execution project (1): test-acc-tf-p-700391474771854582
2026-07-16T00:49:45.2025578Z     move_test.go:43: 
2026-07-16T00:49:45.2026554Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:49:45.2028520Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:49:45.2030519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:49:45.2032763Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:43
2026-07-16T00:49:45.2033588Z         	Error:      	Received unexpected error:
2026-07-16T00:49:45.2035766Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:45.2036902Z         	Test:       	TestAccClusterAPI_moveFromUnsupportedSource
2026-07-16T00:49:45.2038846Z         	Messages:   	Project creation failed: test-acc-tf-p-700391474771854582, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:45.2040123Z --- FAIL: TestAccClusterAPI_moveFromUnsupportedSource (95.83s)
```

- 2026-07-17 PASS 3 seconds
- 2026-07-18

### Error 2026-07-18T00:46:02+00:00
```
2026-07-18T00:46:02.0618435Z === RUN   TestAccClusterAPI_moveFromUnsupportedSource
2026-07-18T00:46:02.0619032Z     move_test.go:43: Creating execution project (1): test-acc-tf-p-4410079430289823385
2026-07-18T00:46:02.0619517Z     move_test.go:43: 
2026-07-18T00:46:02.0620435Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:46:02.0622283Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:46:02.0624351Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:46:02.0626237Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:43
2026-07-18T00:46:02.0627034Z         	Error:      	Received unexpected error:
2026-07-18T00:46:02.0629032Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:46:02.0630140Z         	Test:       	TestAccClusterAPI_moveFromUnsupportedSource
2026-07-18T00:46:02.0631970Z         	Messages:   	Project creation failed: test-acc-tf-p-4410079430289823385, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:46:02.0633209Z --- FAIL: TestAccClusterAPI_moveFromUnsupportedSource (62.82s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:49:09+00:00
```
2026-07-21T00:49:09.3670976Z === RUN   TestAccClusterAPI_moveFromUnsupportedSource
2026-07-21T00:49:09.3671584Z     move_test.go:43: Creating execution project (1): test-acc-tf-p-7713684411177760189
2026-07-21T00:49:09.3672056Z     move_test.go:43: 
2026-07-21T00:49:09.3672993Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:49:09.3674868Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:49:09.3676693Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:49:09.3678665Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:43
2026-07-21T00:49:09.3679459Z         	Error:      	Received unexpected error:
2026-07-21T00:49:09.3681474Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:09.3682548Z         	Test:       	TestAccClusterAPI_moveFromUnsupportedSource
2026-07-21T00:49:09.3684339Z         	Messages:   	Project creation failed: test-acc-tf-p-7713684411177760189, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:09.3685497Z --- FAIL: TestAccClusterAPI_moveFromUnsupportedSource (64.26s)
```

- 2026-07-22 PASS 3 seconds
- 2026-07-23 PASS 3 seconds
- 2026-07-24 PASS 2 seconds
- 2026-07-25 PASS 2 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 4 seconds
- 2026-07-28 PASS 3 seconds
- 2026-07-29 PASS 2 seconds
- 2026-07-30 PASS 2 seconds
- 2026-07-31 PASS 2 seconds
- 2026-08-01 PASS 3 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 2 seconds
- 2026-08-04 PASS 2 seconds
- 2026-08-05 PASS 3 seconds
- 2026-08-06 PASS 2 seconds
- 2026-08-07 PASS 3 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 3 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 3 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 3 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 2 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 2 seconds
  - PASS 3 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 2 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

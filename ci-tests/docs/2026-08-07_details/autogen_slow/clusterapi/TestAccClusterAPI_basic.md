# autogen_slow/clusterapi/TestAccClusterAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:48](#error-2026-07-11t0048400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-07-16 00:49](#error-2026-07-16t0049450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.10s
[2026-07-18 00:46](#error-2026-07-18t0046020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.08s
[2026-07-21 00:49](#error-2026-07-21t0049090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s
[2026-08-05 01:01](#error-2026-08-05t0101160000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a72870cd41c9a0a0fdaaa6a/clusters | dev | out_of_capacity | 1.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 44 minutes
- 2026-07-10 PASS 50 minutes
- 2026-07-11

### Error 2026-07-11T00:48:40+00:00
```
2026-07-11T00:48:40.9335794Z === RUN   TestAccClusterAPI_basic
2026-07-11T00:48:40.9336372Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-3049206751739466869
2026-07-11T00:48:40.9336881Z     resource_test.go:18: 
2026-07-11T00:48:40.9337811Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:48:40.9339670Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:48:40.9341544Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:48:40.9343465Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/resource_test.go:18
2026-07-11T00:48:40.9344282Z         	Error:      	Received unexpected error:
2026-07-11T00:48:40.9346559Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:48:40.9347759Z         	Test:       	TestAccClusterAPI_basic
2026-07-11T00:48:40.9349604Z         	Messages:   	Project creation failed: test-acc-tf-p-3049206751739466869, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:48:40.9350789Z --- FAIL: TestAccClusterAPI_basic (62.13s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 45 minutes
- 2026-07-14 PASS 35 minutes
- 2026-07-15 PASS 36 minutes
- 2026-07-16

### Error 2026-07-16T00:49:45+00:00
```
2026-07-16T00:49:45.2040540Z === RUN   TestAccClusterAPI_basic
2026-07-16T00:49:45.2041105Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-736687510694065636
2026-07-16T00:49:45.2041788Z     resource_test.go:18: 
2026-07-16T00:49:45.2042892Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:49:45.2044833Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:49:45.2046795Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:49:45.2048782Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/resource_test.go:18
2026-07-16T00:49:45.2049606Z         	Error:      	Received unexpected error:
2026-07-16T00:49:45.2052601Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:45.2053683Z         	Test:       	TestAccClusterAPI_basic
2026-07-16T00:49:45.2055568Z         	Messages:   	Project creation failed: test-acc-tf-p-736687510694065636, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:45.2056767Z --- FAIL: TestAccClusterAPI_basic (80.97s)
```

- 2026-07-17 PASS 43 minutes
- 2026-07-18

### Error 2026-07-18T00:46:02+00:00
```
2026-07-18T00:46:02.0633892Z === RUN   TestAccClusterAPI_basic
2026-07-18T00:46:02.0634473Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-2325826266397898100
2026-07-18T00:46:02.0634979Z     resource_test.go:18: 
2026-07-18T00:46:02.0635905Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:46:02.0637934Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:46:02.0639778Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:46:02.0641695Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/resource_test.go:18
2026-07-18T00:46:02.0642511Z         	Error:      	Received unexpected error:
2026-07-18T00:46:02.0645189Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:46:02.0646206Z         	Test:       	TestAccClusterAPI_basic
2026-07-18T00:46:02.0647989Z         	Messages:   	Project creation failed: test-acc-tf-p-2325826266397898100, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:46:02.0649176Z --- FAIL: TestAccClusterAPI_basic (63.79s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:49:09+00:00
```
2026-07-21T00:49:09.3685893Z === RUN   TestAccClusterAPI_basic
2026-07-21T00:49:09.3686466Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-6212924645185213678
2026-07-21T00:49:09.3686964Z     resource_test.go:18: 
2026-07-21T00:49:09.3688001Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:49:09.3689830Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:49:09.3691857Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:49:09.3693746Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/resource_test.go:18
2026-07-21T00:49:09.3694540Z         	Error:      	Received unexpected error:
2026-07-21T00:49:09.3696554Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:09.3697521Z         	Test:       	TestAccClusterAPI_basic
2026-07-21T00:49:09.3699370Z         	Messages:   	Project creation failed: test-acc-tf-p-6212924645185213678, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:09.3700474Z --- FAIL: TestAccClusterAPI_basic (63.55s)
```

- 2026-07-22 PASS 45 minutes
- 2026-07-23 PASS an hour
- 2026-07-24 PASS an hour
- 2026-07-25 PASS 35 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 39 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 32 minutes
- 2026-08-01 PASS 27 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 29 minutes
- 2026-08-04 PASS 26 minutes
- 2026-08-05

### Error 2026-08-05T01:01:16+00:00
```
2026-08-05T01:01:16.6914978Z === RUN   TestAccClusterAPI_basic
2026-08-05T01:01:16.6917257Z === CONT  TestAccClusterAPI_basic
2026-08-05T01:01:16.6930681Z === NAME  TestAccClusterAPI_basic
2026-08-05T01:01:16.6932878Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2026-08-05T01:01:16.6933555Z         
2026-08-05T01:01:16.6933970Z         Error: Error calling API in Create
2026-08-05T01:01:16.6934341Z         
2026-08-05T01:01:16.6934726Z           with mongodbatlas_cluster_api.test,
2026-08-05T01:01:16.6935398Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-08-05T01:01:16.6936040Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-08-05T01:01:16.6936440Z         
2026-08-05T01:01:16.6937030Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a72870cd41c9a0a0fdaaa6a/clusters
2026-08-05T01:01:16.6938032Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-08-05T01:01:16.6938738Z         region is currently out of capacity for the requested instance size. Reason:
2026-08-05T01:01:16.6939337Z         Conflict. Params: [], BadRequestDetail: 
2026-08-05T01:01:16.6939712Z --- FAIL: TestAccClusterAPI_basic (1.26s)
```

- 2026-08-06 PASS 29 minutes
- 2026-08-07 PASS 32 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 38 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 37 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 41 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 34 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 27 minutes
  - PASS 29 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 26 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

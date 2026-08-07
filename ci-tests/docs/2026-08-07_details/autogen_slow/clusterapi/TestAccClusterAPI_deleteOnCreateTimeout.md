# autogen_slow/clusterapi/TestAccClusterAPI_deleteOnCreateTimeout Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-18 00:46](#error-2026-07-18t0046020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.04s
[2026-07-21 00:49](#error-2026-07-21t0049090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s
[2026-07-23 02:04](#error-2026-07-23t0204190000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a61641fa10926eab1f4ff69/clusters | dev | out_of_capacity | 5.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 17 seconds
- 2026-07-10 PASS 11 seconds
- 2026-07-11 PASS 38 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 12 seconds
- 2026-07-14 PASS 12 seconds
- 2026-07-15 PASS 12 seconds
- 2026-07-16 PASS 50 seconds
- 2026-07-17 PASS 12 seconds
- 2026-07-18

### Error 2026-07-18T00:46:02+00:00
```
2026-07-18T00:46:02.0649548Z === RUN   TestAccClusterAPI_deleteOnCreateTimeout
2026-07-18T00:46:02.0650157Z     resource_test.go:57: Creating execution project (1): test-acc-tf-p-7914106077029902277
2026-07-18T00:46:02.0650659Z     resource_test.go:57: 
2026-07-18T00:46:02.0651595Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:46:02.0653864Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:46:02.0655786Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:46:02.0657724Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/resource_test.go:57
2026-07-18T00:46:02.0658545Z         	Error:      	Received unexpected error:
2026-07-18T00:46:02.0660554Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:46:02.0661652Z         	Test:       	TestAccClusterAPI_deleteOnCreateTimeout
2026-07-18T00:46:02.0663675Z         	Messages:   	Project creation failed: test-acc-tf-p-7914106077029902277, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:46:02.0664915Z --- FAIL: TestAccClusterAPI_deleteOnCreateTimeout (77.43s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:49:09+00:00
```
2026-07-21T00:49:09.3700849Z === RUN   TestAccClusterAPI_deleteOnCreateTimeout
2026-07-21T00:49:09.3701450Z     resource_test.go:57: Creating execution project (1): test-acc-tf-p-4657958904823554748
2026-07-21T00:49:09.3701941Z     resource_test.go:57: 
2026-07-21T00:49:09.3702868Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:49:09.3704865Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:49:09.3706689Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:49:09.3708807Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/resource_test.go:57
2026-07-21T00:49:09.3709612Z         	Error:      	Received unexpected error:
2026-07-21T00:49:09.3711615Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:09.3712648Z         	Test:       	TestAccClusterAPI_deleteOnCreateTimeout
2026-07-21T00:49:09.3714426Z         	Messages:   	Project creation failed: test-acc-tf-p-4657958904823554748, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:09.3715578Z --- FAIL: TestAccClusterAPI_deleteOnCreateTimeout (62.70s)
```

- 2026-07-22 PASS 12 seconds
- 2026-07-23

### Error 2026-07-23T02:04:19+00:00
```
2026-07-23T02:04:19.8365430Z === RUN   TestAccClusterAPI_deleteOnCreateTimeout
2026-07-23T02:04:19.8367264Z === CONT  TestAccClusterAPI_deleteOnCreateTimeout
2026-07-23T02:04:19.8395245Z === NAME  TestAccClusterAPI_deleteOnCreateTimeout
2026-07-23T02:04:19.8395988Z     resource_test.go:60: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-23T02:04:19.8396517Z         
2026-07-23T02:04:19.8396842Z         Error: Error calling API in Create
2026-07-23T02:04:19.8397154Z         
2026-07-23T02:04:19.8397493Z           with mongodbatlas_cluster_api.test,
2026-07-23T02:04:19.8398178Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-07-23T02:04:19.8398818Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-07-23T02:04:19.8399157Z         
2026-07-23T02:04:19.8399709Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a61641fa10926eab1f4ff69/clusters
2026-07-23T02:04:19.8400630Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-07-23T02:04:19.8401349Z         region is currently out of capacity for the requested instance size. Reason:
2026-07-23T02:04:19.8401893Z         Conflict. Params: [], BadRequestDetail: 
2026-07-23T02:04:19.8402310Z --- FAIL: TestAccClusterAPI_deleteOnCreateTimeout (5.09s)
```

- 2026-07-24 PASS 11 seconds
- 2026-07-25 PASS 12 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 12 seconds
- 2026-07-28 PASS 12 seconds
- 2026-07-29 PASS 11 seconds
- 2026-07-30 PASS 12 seconds
- 2026-07-31 PASS 12 seconds
- 2026-08-01 PASS 11 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 11 seconds
- 2026-08-04 PASS 11 seconds
- 2026-08-05 PASS 12 seconds
- 2026-08-06 PASS 12 seconds
- 2026-08-07 PASS 12 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 11 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 12 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 12 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 11 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 12 seconds
  - PASS 12 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 11 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

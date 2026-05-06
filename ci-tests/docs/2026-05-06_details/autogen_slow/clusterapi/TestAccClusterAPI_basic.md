# autogen_slow/clusterapi/TestAccClusterAPI_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:51](#error-2026-04-16t0051280000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0326a1ec945fedc720d11/clusters | dev | out_of_capacity | 1.03s
[2026-04-30 01:00](#error-2026-04-30t0100090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 46 minutes
- 2026-04-08 PASS 27 minutes
- 2026-04-09 PASS 33 minutes
- 2026-04-10 PASS 43 minutes
- 2026-04-11 PASS 25 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 32 minutes
- 2026-04-14 PASS 25 minutes
- 2026-04-15 PASS 29 minutes
- 2026-04-16

### Error 2026-04-16T00:51:28+00:00
```
2026-04-16T00:51:28.4990826Z === RUN   TestAccClusterAPI_basic
2026-04-16T00:51:28.4992714Z === CONT  TestAccClusterAPI_basic
2026-04-16T00:51:28.5056416Z === NAME  TestAccClusterAPI_basic
2026-04-16T00:51:28.5057020Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2026-04-16T00:51:28.5057501Z         
2026-04-16T00:51:28.5057871Z         Error: Error calling API in Create
2026-04-16T00:51:28.5058213Z         
2026-04-16T00:51:28.5058607Z           with mongodbatlas_cluster_api.test,
2026-04-16T00:51:28.5059753Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2026-04-16T00:51:28.5060530Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2026-04-16T00:51:28.5060929Z         
2026-04-16T00:51:28.5061613Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326a1ec945fedc720d11/clusters
2026-04-16T00:51:28.5062534Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:51:28.5064116Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:51:28.5064796Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:51:28.5065218Z --- FAIL: TestAccClusterAPI_basic (1.27s)
```

- 2026-04-17 PASS 26 minutes
- 2026-04-18 PASS 32 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 23 minutes
- 2026-04-21 PASS 31 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 38 minutes
- 2026-04-24 PASS 27 minutes
- 2026-04-25 PASS 26 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 29 minutes
- 2026-04-28 PASS 27 minutes
- 2026-04-29 PASS 29 minutes
- 2026-04-30

### Error 2026-04-30T01:00:09+00:00
```
2026-04-30T01:00:09.4735226Z === RUN   TestAccClusterAPI_basic
2026-04-30T01:00:09.4735761Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-8007012056259294902
2026-04-30T01:00:09.4736521Z     resource_test.go:18: 
2026-04-30T01:00:09.4737427Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:00:09.4739238Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:00:09.4741019Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:00:09.4742870Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/resource_test.go:18
2026-04-30T01:00:09.4743650Z         	Error:      	Received unexpected error:
2026-04-30T01:00:09.4745588Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:00:09.4747110Z         	Test:       	TestAccClusterAPI_basic
2026-04-30T01:00:09.4748841Z         	Messages:   	Project creation failed: test-acc-tf-p-8007012056259294902, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:00:09.4749979Z --- FAIL: TestAccClusterAPI_basic (62.05s)
```

- 2026-05-01 PASS 28 minutes
- 2026-05-02 PASS 25 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 28 minutes
- 2026-05-05 PASS 45 minutes
- 2026-05-06 PASS 42 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 25 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 26 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 26 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 26 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 31 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 27 minutes
- 2026-05-04 PASS 26 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 26 minutes

# stream/streamaccountdetails/TestAccStreamAccountDetailsDS_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-23 00:46](#error-2026-07-23t0046040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s
[2026-08-03 00:51](#error-2026-08-03t0051590000) |  | dev | flaky_client | 285.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 26 minutes
- 2026-07-10 PASS 31 minutes
- 2026-07-11 PASS 15 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 17 minutes
- 2026-07-14 PASS 16 minutes
- 2026-07-15 PASS 19 minutes
- 2026-07-16 PASS 53 minutes
- 2026-07-17 PASS 15 minutes
- 2026-07-18 PASS 17 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 14 minutes
- 2026-07-22 PASS 30 minutes
- 2026-07-23

### Error 2026-07-23T00:46:04+00:00
```
2026-07-23T00:46:04.9975653Z === RUN   TestAccStreamAccountDetailsDS_basic
2026-07-23T00:46:04.9978539Z     data_source_test.go:19: Creating execution project (1): test-acc-tf-p-2929717946184161404
2026-07-23T00:46:04.9979464Z     data_source_test.go:19: 
2026-07-23T00:46:04.9980600Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:46:04.9982496Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:46:04.9984306Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:46:04.9986067Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:46:04.9988935Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamaccountdetails/data_source_test.go:19
2026-07-23T00:46:04.9990225Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:46:04.9990807Z         	Error:      	Received unexpected error:
2026-07-23T00:46:04.9992754Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:04.9993833Z         	Test:       	TestAccStreamAccountDetailsDS_basic
2026-07-23T00:46:04.9995592Z         	Messages:   	Project creation failed: test-acc-tf-p-2929717946184161404, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:04.9997097Z --- FAIL: TestAccStreamAccountDetailsDS_basic (62.30s)
```

- 2026-07-24 PASS 23 minutes
- 2026-07-25 PASS 15 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS 52 minutes
- 2026-07-29 PASS 17 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 15 minutes
- 2026-08-01 PASS 15 minutes
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 4 minutes

### Error 2026-08-03T00:51:59+00:00
```
2026-08-03T00:51:59.9902270Z === RUN   TestAccStreamAccountDetailsDS_basic
2026-08-03T00:51:59.9903580Z     data_source_test.go:19: Creating execution project (1): test-acc-tf-p-519495879516101479
2026-08-03T00:51:59.9905447Z === CONT  TestAccStreamAccountDetailsDS_basic
2026-08-03T00:51:59.9907101Z     pre_check.go:46: Time before creating cluster: 2026-08-03T00:46:47.711460012Z, ProjectID: 6a6fe4f0aa9e3c145b65ed3c, Cluster name: test-acc-tf-c-2574775423375646318
2026-08-03T00:51:59.9928444Z    test_name=TestAccStreamAccountDetailsDS_basic test_terraform_path=/home/runner/work/_temp/15c4ca8d-89c8-44b4-a2b6-45595e5990a6/terraform
2026-08-03T00:51:59.9929940Z     data_source_test.go:21: Step 1/1 error: Error running apply: exit status 1
2026-08-03T00:51:59.9930671Z         
2026-08-03T00:51:59.9931172Z         Error: Error in create
2026-08-03T00:51:59.9931641Z         
2026-08-03T00:51:59.9932340Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-08-03T00:51:59.9933712Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-08-03T00:51:59.9935182Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-08-03T00:51:59.9936056Z         
2026-08-03T00:51:59.9936960Z         cluster=test-acc-tf-c-2574775423375646318 didn't reach desired state: IDLE,
2026-08-03T00:51:59.9937758Z         error: Get
2026-08-03T00:51:59.9939133Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe4f0aa9e3c145b65ed3c/clusters/test-acc-tf-c-2574775423375646318":
2026-08-03T00:51:59.9940348Z         dial tcp 3.228.247.77:443: i/o timeout
2026-08-03T00:51:59.9941007Z --- FAIL: TestAccStreamAccountDetailsDS_basic (285.07s)
```

  - PASS 15 minutes
  - PASS 15 minutes
- 2026-08-04 PASS 13 minutes
- 2026-08-05 PASS 15 minutes
- 2026-08-06 PASS 15 minutes
- 2026-08-07 PASS 19 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 17 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 14 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 19 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 14 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 14 minutes
  - PASS 15 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 14 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

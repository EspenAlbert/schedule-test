# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveBasic Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:42](#error-2026-04-11t0042420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s
[2026-04-14 00:49](#error-2026-04-14t0049520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.07s
[2026-04-16 00:50](#error-2026-04-16t0050520000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0326c8379397d109cbc5b/clusters | dev | out_of_capacity | 29.03s
[2026-05-05 00:51](#error-2026-05-05t0051180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 49 minutes
- 2026-04-08 PASS 20 minutes
- 2026-04-09 PASS 25 minutes
- 2026-04-10 PASS 26 minutes
- 2026-04-11

### Error 2026-04-11T00:42:42+00:00
```
2026-04-11T00:42:42.9256687Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-04-11T00:43:45.7990761Z     shared_resource.go:160: 
2026-04-11T00:43:45.7992363Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:43:45.7994923Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-11T00:43:45.7997117Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-11T00:43:45.7999093Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-11T00:43:45.8000923Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-11T00:43:45.8003234Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-04-11T00:43:45.8005289Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:14
2026-04-11T00:43:45.8006121Z         	Error:      	Received unexpected error:
2026-04-11T00:43:45.8008121Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:43:45.8009210Z         	Test:       	TestAccAdvancedCluster_effectiveBasic
2026-04-11T00:43:45.8011018Z         	Messages:   	Project creation failed: test-acc-tf-p-8042720006295337036, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:43:45.8012453Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (62.88s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 18 minutes
- 2026-04-14

### Error 2026-04-14T00:49:52+00:00
```
2026-04-14T00:49:52.2015332Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-04-14T00:51:16.9181791Z     shared_resource.go:160: 
2026-04-14T00:51:16.9186574Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-14T00:51:16.9189853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-14T00:51:16.9193895Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-14T00:51:16.9196756Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-14T00:51:16.9200067Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-14T00:51:16.9203019Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-04-14T00:51:16.9205393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:14
2026-04-14T00:51:16.9206489Z         	Error:      	Received unexpected error:
2026-04-14T00:51:16.9208745Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:51:16.9210029Z         	Test:       	TestAccAdvancedCluster_effectiveBasic
2026-04-14T00:51:16.9212265Z         	Messages:   	Project creation failed: test-acc-tf-p-4046467709263689112, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:51:16.9213714Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (84.72s)
```

- 2026-04-15 PASS 14 minutes
- 2026-04-16

### Error 2026-04-16T00:50:52+00:00
```
2026-04-16T00:50:52.0921025Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-04-16T00:54:53.9826768Z === CONT  TestAccAdvancedCluster_effectiveBasic
2026-04-16T00:54:59.5664342Z === NAME  TestAccAdvancedCluster_effectiveBasic
2026-04-16T00:54:59.5757280Z     effective_fields_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:54:59.5794832Z         
2026-04-16T00:54:59.5814993Z         Error: Error in create
2026-04-16T00:54:59.5895802Z         
2026-04-16T00:54:59.5957561Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.6021570Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.6096820Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.6118113Z         
2026-04-16T00:54:59.6136473Z         cluster name: test-acc-tf-c-2901787361621736112, API error details:
2026-04-16T00:54:59.6138274Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326c8379397d109cbc5b/clusters
2026-04-16T00:54:59.6140448Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:54:59.6142182Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:54:59.6143841Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:54:59.6359858Z    test_terraform_path=/home/runner/work/_temp/b00f7911-dfb1-455b-abe5-62efc714635b/terraform test_working_directory=/tmp/plugintest2309454038 test_step_number=1 test_name=TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-04-16T00:54:59.6629906Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (29.26s)
```

- 2026-04-17 PASS 15 minutes
- 2026-04-18 PASS 32 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 26 minutes
- 2026-04-22 PASS 39 minutes
- 2026-04-23 PASS 34 minutes
- 2026-04-24 PASS 15 minutes
- 2026-04-25 PASS 21 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 17 minutes
- 2026-04-28 PASS 18 minutes
- 2026-04-29 PASS 17 minutes
- 2026-04-30 PASS 27 minutes
- 2026-05-01 PASS 14 minutes
- 2026-05-02 PASS 18 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 18 minutes
- 2026-05-05

### Error 2026-05-05T00:51:18+00:00
```
2026-05-05T00:51:18.4056276Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-05-05T00:52:25.7005403Z     shared_resource.go:160: 
2026-05-05T00:52:25.7008915Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:52:25.7011365Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-05T00:52:25.7013501Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-05T00:52:25.7016084Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-05T00:52:25.7018201Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-05T00:52:25.7020424Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-05T00:52:25.7023009Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:14
2026-05-05T00:52:25.7023851Z         	Error:      	Received unexpected error:
2026-05-05T00:52:25.7025706Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:52:25.7026828Z         	Test:       	TestAccAdvancedCluster_effectiveBasic
2026-05-05T00:52:25.7028519Z         	Messages:   	Project creation failed: test-acc-tf-p-5775953201304524533, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:52:25.7029774Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (67.29s)
```

- 2026-05-06 PASS 29 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 16 minutes
  - PASS 14 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 15 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 15 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 21 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 18 minutes
- 2026-05-04 PASS 16 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 19 minutes

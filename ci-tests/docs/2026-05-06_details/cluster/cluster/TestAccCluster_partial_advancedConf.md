# cluster/cluster/TestAccCluster_partial_advancedConf Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 2)
Success rate: 94.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:50](#error-2026-04-16t0050580000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e0325d1ec945fedc71bf72/clusters | dev | out_of_capacity | 30.08s
[2026-04-30 00:56](#error-2026-04-30t0056180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 50 minutes
- 2026-04-08 PASS 21 minutes
- 2026-04-09 PASS 36 minutes
- 2026-04-10 PASS 30 minutes
- 2026-04-11 PASS 20 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 29 minutes
- 2026-04-14 PASS 20 minutes
- 2026-04-15 PASS 27 minutes
- 2026-04-16

### Error 2026-04-16T00:50:58+00:00
```
2026-04-16T00:50:58.7658493Z === RUN   TestAccCluster_partial_advancedConf
2026-04-16T00:53:12.0767393Z === CONT  TestAccCluster_partial_advancedConf
2026-04-16T00:53:42.0833928Z === NAME  TestAccCluster_partial_advancedConf
2026-04-16T00:53:42.0835667Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:53:42.083044404Z, ProjectID: 69e0325d1ec945fedc71bf72, Cluster name: test-acc-tf-c-3458458260660729992
2026-04-16T00:53:42.8415435Z   
2026-04-16T00:53:42.8416016Z     resource_cluster_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:53:42.8416474Z         
2026-04-16T00:53:42.8418298Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69e0325d1ec945fedc71bf72/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-16T00:53:42.8419743Z         
2026-04-16T00:53:42.8420079Z           with mongodbatlas_cluster.test,
2026-04-16T00:53:42.8420750Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-04-16T00:53:42.8421360Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-04-16T00:53:42.8421689Z         
2026-04-16T00:53:42.8861676Z --- FAIL: TestAccCluster_partial_advancedConf (30.81s)
```

- 2026-04-17 PASS 23 minutes
- 2026-04-18 PASS 29 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 21 minutes
- 2026-04-21 PASS 29 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 29 minutes
- 2026-04-24 PASS 23 minutes
- 2026-04-25 PASS 20 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 24 minutes
- 2026-04-28 PASS 24 minutes
- 2026-04-29 PASS 26 minutes
- 2026-04-30

### Error 2026-04-30T00:56:18+00:00
```
2026-04-30T00:56:18.2673494Z === RUN   TestAccCluster_partial_advancedConf
2026-04-30T00:57:20.3970680Z     shared_resource.go:160: 
2026-04-30T00:57:20.3974438Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:57:20.3979704Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-30T00:57:20.3982072Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-30T00:57:20.3984109Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-30T00:57:20.3985920Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-30T00:57:20.3987829Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:87
2026-04-30T00:57:20.3989850Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:83
2026-04-30T00:57:20.3992265Z         	Error:      	Received unexpected error:
2026-04-30T00:57:20.3998784Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:20.4001051Z         	Test:       	TestAccCluster_partial_advancedConf
2026-04-30T00:57:20.4002793Z         	Messages:   	Project creation failed: test-acc-tf-p-8831483113344415903, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:20.4004185Z --- FAIL: TestAccCluster_partial_advancedConf (62.13s)
```

- 2026-05-01 PASS 26 minutes
- 2026-05-02 PASS 20 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 26 minutes
- 2026-05-05 PASS 41 minutes
- 2026-05-06 PASS 24 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 22 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 23 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 22 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 24 minutes
  - PASS 19 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 26 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 23 minutes
- 2026-05-04 PASS 22 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 23 minutes

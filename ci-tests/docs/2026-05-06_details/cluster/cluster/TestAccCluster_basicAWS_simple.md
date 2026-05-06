# cluster/cluster/TestAccCluster_basicAWS_simple Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 2)
Success rate: 94.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:50](#error-2026-04-16t0050370000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e0325d1ec945fedc71bf72/clusters | dev | out_of_capacity | 26.09s
[2026-04-30 00:55](#error-2026-04-30t0055140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 43 minutes
- 2026-04-08 PASS 19 minutes
- 2026-04-09 PASS 36 minutes
- 2026-04-10 PASS 27 minutes
- 2026-04-11 PASS 15 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 25 minutes
- 2026-04-14 PASS 15 minutes
- 2026-04-15 PASS 18 minutes
- 2026-04-16

### Error 2026-04-16T00:50:37+00:00
```
2026-04-16T00:50:37.6412623Z === RUN   TestAccCluster_basicAWS_simple
2026-04-16T00:53:12.0719264Z === CONT  TestAccCluster_basicAWS_simple
2026-04-16T00:53:17.0714993Z === NAME  TestAccCluster_basicAWS_simple
2026-04-16T00:53:17.0716445Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:53:17.071178633Z, ProjectID: 69e0325d1ec945fedc71bf72, Cluster name: test-acc-tf-c-4590552530042057824
2026-04-16T00:53:17.8129270Z   
2026-04-16T00:53:17.8130438Z     resource_cluster_test.go:29: Step 1/3 error: Error running apply: exit status 1
2026-04-16T00:53:17.8131048Z         
2026-04-16T00:53:17.8132696Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69e0325d1ec945fedc71bf72/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-16T00:53:17.8133893Z         
2026-04-16T00:53:17.8134282Z           with mongodbatlas_cluster.test,
2026-04-16T00:53:17.8135040Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-04-16T00:53:17.8135679Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-04-16T00:53:17.8136011Z         
2026-04-16T00:53:17.8604588Z --- FAIL: TestAccCluster_basicAWS_simple (26.91s)
```

- 2026-04-17 PASS 18 minutes
- 2026-04-18 PASS 22 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 16 minutes
- 2026-04-21 PASS 22 minutes
- 2026-04-22 PASS 58 minutes
- 2026-04-23 PASS 29 minutes
- 2026-04-24 PASS 23 minutes
- 2026-04-25 PASS 17 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 18 minutes
- 2026-04-28 PASS 20 minutes
- 2026-04-29 PASS 17 minutes
- 2026-04-30

### Error 2026-04-30T00:55:14+00:00
```
2026-04-30T00:55:14.6486860Z === RUN   TestAccCluster_basicAWS_simple
2026-04-30T00:56:18.2645689Z     shared_resource.go:160: 
2026-04-30T00:56:18.2650568Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:56:18.2654998Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-30T00:56:18.2657453Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-30T00:56:18.2659842Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-30T00:56:18.2662077Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-30T00:56:18.2664257Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:34
2026-04-30T00:56:18.2666165Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:29
2026-04-30T00:56:18.2666936Z         	Error:      	Received unexpected error:
2026-04-30T00:56:18.2668865Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:56:18.2669913Z         	Test:       	TestAccCluster_basicAWS_simple
2026-04-30T00:56:18.2671657Z         	Messages:   	Project creation failed: test-acc-tf-p-6088162094395322455, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:56:18.2672812Z --- FAIL: TestAccCluster_basicAWS_simple (63.62s)
```

- 2026-05-01 PASS 37 minutes
- 2026-05-02 PASS 17 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 23 minutes
- 2026-05-05 PASS 39 minutes
- 2026-05-06 PASS 24 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 19 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 21 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 16 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 20 minutes
  - PASS 15 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 25 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 21 minutes
- 2026-05-04 PASS 19 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 18 minutes

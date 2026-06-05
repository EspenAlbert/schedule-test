# cluster/cluster/TestAccCluster_Global Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 21) FAIL(x 10)
Success rate: 67.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:58](#error-2026-05-09t0058140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.03s
[2026-05-15 00:57](#error-2026-05-15t0057010000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a066f5a649b96da6eba8120/clusters | dev | out_of_capacity | 2.06s
[2026-05-16 00:54](#error-2026-05-16t0054370000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a07c0267d024d2d1e5b113b/clusters | dev | out_of_capacity | 2.10s
[2026-05-18 01:00](#error-2026-05-18t0100210000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a0a64a36fb087b449d99103/clusters | dev | out_of_capacity | 2.04s
[2026-05-19 01:01](#error-2026-05-19t0101510000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a0bb63e04055db6de67fe9a/clusters | dev | out_of_capacity | 3.02s
[2026-05-20 01:02](#error-2026-05-20t0102530000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a0d083bb1175fa927460d93/clusters | dev | out_of_capacity | 2.10s
[2026-05-21 01:02](#error-2026-05-21t0102410000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a0e59ae29c1c445d41806b7/clusters | dev | out_of_capacity | 2.07s
[2026-05-23 01:02](#error-2026-05-23t0102020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.08s
[2026-05-28 00:59](#error-2026-05-28t0059440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.02s
[2026-05-30 01:03](#error-2026-05-30t0103160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 45 minutes
  - PASS 54 minutes
- 2026-05-08 PASS 29 minutes
- 2026-05-09

### Error 2026-05-09T00:58:14+00:00
```
2026-05-09T00:58:14.4779606Z === RUN   TestAccCluster_Global
2026-05-09T00:59:20.7364429Z     shared_resource.go:160: 
2026-05-09T00:59:20.7368620Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:59:20.7374531Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-09T00:59:20.7376542Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-09T00:59:20.7378726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-09T00:59:20.7381152Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-09T00:59:20.7386168Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:588
2026-05-09T00:59:20.7388939Z         	Error:      	Received unexpected error:
2026-05-09T00:59:20.7391501Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:59:20.7392607Z         	Test:       	TestAccCluster_Global
2026-05-09T00:59:20.7394207Z         	Messages:   	Project creation failed: test-acc-tf-p-9178937253670759632, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:59:20.7497771Z --- FAIL: TestAccCluster_Global (66.26s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 23 minutes
- 2026-05-12 PASS 19 minutes
- 2026-05-13 PASS 20 minutes
- 2026-05-14 PASS 43 minutes
- 2026-05-15

### Error 2026-05-15T00:57:01+00:00
```
2026-05-15T00:57:01.4111653Z === RUN   TestAccCluster_Global
2026-05-15T00:57:03.8380532Z === CONT  TestAccCluster_Global
2026-05-15T00:57:06.3828593Z === NAME  TestAccCluster_Global
2026-05-15T00:57:06.3829105Z     resource_cluster_test.go:590: Step 1/1 error: Error running apply: exit status 1
2026-05-15T00:57:06.3829637Z         
2026-05-15T00:57:06.3831653Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a066f5a649b96da6eba8120/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-15T00:57:06.3832848Z         
2026-05-15T00:57:06.3833267Z           with mongodbatlas_cluster.test,
2026-05-15T00:57:06.3833889Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-05-15T00:57:06.3834646Z           12: 		resource "mongodbatlas_cluster" test {
2026-05-15T00:57:06.3834954Z         
2026-05-15T00:57:06.4523063Z --- FAIL: TestAccCluster_Global (2.61s)
```

- 2026-05-16

### Error 2026-05-16T00:54:37+00:00
```
2026-05-16T00:54:37.3706958Z === RUN   TestAccCluster_Global
2026-05-16T00:56:25.0593453Z === CONT  TestAccCluster_Global
2026-05-16T00:56:27.8975794Z === NAME  TestAccCluster_Global
2026-05-16T00:56:27.8976576Z     resource_cluster_test.go:590: Step 1/1 error: Error running apply: exit status 1
2026-05-16T00:56:27.8977062Z         
2026-05-16T00:56:27.8979034Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a07c0267d024d2d1e5b113b/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-16T00:56:27.8980097Z         
2026-05-16T00:56:27.8980467Z           with mongodbatlas_cluster.test,
2026-05-16T00:56:27.8981082Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-05-16T00:56:27.8981901Z           12: 		resource "mongodbatlas_cluster" test {
2026-05-16T00:56:27.8982213Z         
2026-05-16T00:56:27.9495134Z --- FAIL: TestAccCluster_Global (2.97s)
```

- 2026-05-17: MISSING
- 2026-05-18

### Error 2026-05-18T01:00:21+00:00
```
2026-05-18T01:00:21.6928549Z === RUN   TestAccCluster_Global
2026-05-18T01:00:24.5739974Z === CONT  TestAccCluster_Global
2026-05-18T01:00:26.8858490Z === NAME  TestAccCluster_Global
2026-05-18T01:00:26.8859433Z     resource_cluster_test.go:590: Step 1/1 error: Error running apply: exit status 1
2026-05-18T01:00:26.8859974Z         
2026-05-18T01:00:26.8861661Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a0a64a36fb087b449d99103/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-18T01:00:26.8862785Z         
2026-05-18T01:00:26.8863097Z           with mongodbatlas_cluster.test,
2026-05-18T01:00:26.8863831Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-05-18T01:00:26.8864502Z           12: 		resource "mongodbatlas_cluster" test {
2026-05-18T01:00:26.8864804Z         
2026-05-18T01:00:26.9403388Z --- FAIL: TestAccCluster_Global (2.37s)
```

- 2026-05-19

### Error 2026-05-19T01:01:51+00:00
```
2026-05-19T01:01:51.8453405Z === RUN   TestAccCluster_Global
2026-05-19T01:02:19.9130613Z === CONT  TestAccCluster_Global
2026-05-19T01:02:23.0975799Z === NAME  TestAccCluster_Global
2026-05-19T01:02:23.0976383Z     resource_cluster_test.go:590: Step 1/1 error: Error running apply: exit status 1
2026-05-19T01:02:23.0977044Z         
2026-05-19T01:02:23.0978636Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a0bb63e04055db6de67fe9a/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-19T01:02:23.0980199Z         
2026-05-19T01:02:23.0980703Z           with mongodbatlas_cluster.test,
2026-05-19T01:02:23.0981757Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-05-19T01:02:23.0982725Z           12: 		resource "mongodbatlas_cluster" test {
2026-05-19T01:02:23.0983222Z         
2026-05-19T01:02:23.1518186Z --- FAIL: TestAccCluster_Global (3.24s)
```

- 2026-05-20

### Error 2026-05-20T01:02:53+00:00
```
2026-05-20T01:02:53.0521975Z === RUN   TestAccCluster_Global
2026-05-20T01:02:54.9795798Z === CONT  TestAccCluster_Global
2026-05-20T01:02:57.9049823Z === NAME  TestAccCluster_Global
2026-05-20T01:02:57.9050360Z     resource_cluster_test.go:590: Step 1/1 error: Error running apply: exit status 1
2026-05-20T01:02:57.9050812Z         
2026-05-20T01:02:57.9052353Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a0d083bb1175fa927460d93/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-20T01:02:57.9053324Z         
2026-05-20T01:02:57.9053643Z           with mongodbatlas_cluster.test,
2026-05-20T01:02:57.9054261Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-05-20T01:02:57.9054823Z           12: 		resource "mongodbatlas_cluster" test {
2026-05-20T01:02:57.9055121Z         
2026-05-20T01:02:57.9583560Z --- FAIL: TestAccCluster_Global (2.98s)
```

- 2026-05-21

### Error 2026-05-21T01:02:41+00:00
```
2026-05-21T01:02:41.4463845Z === RUN   TestAccCluster_Global
2026-05-21T01:02:45.6935671Z === CONT  TestAccCluster_Global
2026-05-21T01:02:48.3297793Z === NAME  TestAccCluster_Global
2026-05-21T01:02:48.3318941Z     resource_cluster_test.go:590: Step 1/1 error: Error running apply: exit status 1
2026-05-21T01:02:48.3319526Z         
2026-05-21T01:02:48.3320927Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a0e59ae29c1c445d41806b7/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-21T01:02:48.3322161Z         
2026-05-21T01:02:48.3322493Z           with mongodbatlas_cluster.test,
2026-05-21T01:02:48.3323144Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-05-21T01:02:48.3323731Z           12: 		resource "mongodbatlas_cluster" test {
2026-05-21T01:02:48.3324042Z         
2026-05-21T01:02:48.3789762Z --- FAIL: TestAccCluster_Global (2.69s)
```

- 2026-05-22 PASS 32 minutes
- 2026-05-23

### Error 2026-05-23T01:02:02+00:00
```
2026-05-23T01:02:02.9839401Z === RUN   TestAccCluster_Global
2026-05-23T01:03:27.8100948Z     shared_resource.go:160: 
2026-05-23T01:03:27.8125011Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:03:27.8127854Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-23T01:03:27.8129697Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-23T01:03:27.8131452Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-23T01:03:27.8133209Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-23T01:03:27.8135052Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:588
2026-05-23T01:03:27.8135824Z         	Error:      	Received unexpected error:
2026-05-23T01:03:27.8137998Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:03:27.8139320Z         	Test:       	TestAccCluster_Global
2026-05-23T01:03:27.8141015Z         	Messages:   	Project creation failed: test-acc-tf-p-727226351971560144, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:03:27.8142138Z --- FAIL: TestAccCluster_Global (84.83s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 20 minutes
- 2026-05-26 PASS 20 minutes
- 2026-05-27 PASS 47 minutes
- 2026-05-28

### Error 2026-05-28T00:59:44+00:00
```
2026-05-28T00:59:44.8970504Z === RUN   TestAccCluster_Global
2026-05-28T00:59:44.8970898Z     shared_resource.go:160: 
2026-05-28T00:59:44.8971833Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T00:59:44.8973858Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T00:59:44.8975889Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T00:59:44.8978989Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T00:59:44.8980738Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T00:59:44.8982793Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:588
2026-05-28T00:59:44.8983627Z         	Error:      	Received unexpected error:
2026-05-28T00:59:44.8985426Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:44.8986462Z         	Test:       	TestAccCluster_Global
2026-05-28T00:59:44.8988073Z         	Messages:   	Project creation failed: test-acc-tf-p-2740086675466700831, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:44.8989785Z --- FAIL: TestAccCluster_Global (67.24s)
```

- 2026-05-29 PASS 20 minutes
- 2026-05-30

### Error 2026-05-30T01:03:16+00:00
```
2026-05-30T01:03:16.6996433Z === RUN   TestAccCluster_Global
2026-05-30T01:04:42.4433932Z     shared_resource.go:160: 
2026-05-30T01:04:42.4436205Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:04:42.4440545Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-30T01:04:42.4444877Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-30T01:04:42.4448482Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-30T01:04:42.4451938Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-30T01:04:42.4455578Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:588
2026-05-30T01:04:42.4457482Z         	Error:      	Received unexpected error:
2026-05-30T01:04:42.4461328Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:04:42.4463195Z         	Test:       	TestAccCluster_Global
2026-05-30T01:04:42.4466590Z         	Messages:   	Project creation failed: test-acc-tf-p-2535051968002520227, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:04:42.4469471Z --- FAIL: TestAccCluster_Global (85.75s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 39 minutes
- 2026-06-02 PASS 18 minutes
- 2026-06-03 PASS 33 minutes
- 2026-06-04 PASS 48 minutes
- 2026-06-05 PASS 19 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 23 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 19 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 23 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 18 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

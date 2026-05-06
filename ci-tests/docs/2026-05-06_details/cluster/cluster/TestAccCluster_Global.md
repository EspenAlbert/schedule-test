# cluster/cluster/TestAccCluster_Global Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:44](#error-2026-04-07t0044480000) |  | dev | timeout | 11680.06s
[2026-04-09 00:40](#error-2026-04-09t0040190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s
[2026-04-10 00:44](#error-2026-04-10t0044290000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69d847eb399332cee384ab3b/clusters | dev | out_of_capacity | 2.05s
[2026-04-16 00:53](#error-2026-04-16t0053080000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e032be1ec945fedc72a160/clusters | dev | out_of_capacity | 2.04s
[2026-05-05 00:53](#error-2026-05-05t0053380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 90.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:44:48+00:00
```
2026-04-07T00:44:48.2036980Z === RUN   TestAccCluster_Global
2026-04-07T00:45:08.0074566Z === CONT  TestAccCluster_Global
2026-04-07T03:59:48.6223002Z === NAME  TestAccCluster_Global
2026-04-07T03:59:48.6223662Z     resource_cluster_test.go:590: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T03:59:48.6224181Z         
2026-04-07T03:59:48.6225133Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-4682278989225280879): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2026-04-07T03:59:48.6225826Z         
2026-04-07T03:59:48.6226050Z --- FAIL: TestAccCluster_Global (11680.62s)
```

- 2026-04-08 PASS 21 minutes
- 2026-04-09

### Error 2026-04-09T00:40:19+00:00
```
2026-04-09T00:40:19.7031965Z === RUN   TestAccCluster_Global
2026-04-09T00:41:21.8877620Z     shared_resource.go:160: 
2026-04-09T00:41:21.8879847Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:41:21.8884512Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-09T00:41:21.8887282Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-09T00:41:21.8889730Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-09T00:41:21.8892405Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-09T00:41:21.8894299Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:588
2026-04-09T00:41:21.8895119Z         	Error:      	Received unexpected error:
2026-04-09T00:41:21.8897058Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:41:21.8898471Z         	Test:       	TestAccCluster_Global
2026-04-09T00:41:21.8900224Z         	Messages:   	Project creation failed: test-acc-tf-p-6111035369661196240, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:41:21.8901693Z --- FAIL: TestAccCluster_Global (62.19s)
```

- 2026-04-10

### Error 2026-04-10T00:44:29+00:00
```
2026-04-10T00:44:29.3127055Z === RUN   TestAccCluster_Global
2026-04-10T00:44:33.9584492Z === CONT  TestAccCluster_Global
2026-04-10T00:44:36.3629125Z   
2026-04-10T00:44:36.3629826Z     resource_cluster_test.go:590: Step 1/1 error: Error running apply: exit status 1
2026-04-10T00:44:36.3630249Z         
2026-04-10T00:44:36.3632277Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69d847eb399332cee384ab3b/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-10T00:44:36.3633718Z         
2026-04-10T00:44:36.3634118Z           with mongodbatlas_cluster.test,
2026-04-10T00:44:36.3634768Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-04-10T00:44:36.3635560Z           12: 		resource "mongodbatlas_cluster" test {
2026-04-10T00:44:36.3654983Z         
2026-04-10T00:44:36.4137602Z --- FAIL: TestAccCluster_Global (2.51s)
```

- 2026-04-11 PASS 15 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 22 minutes
- 2026-04-14 PASS 20 minutes
- 2026-04-15 PASS 22 minutes
- 2026-04-16

### Error 2026-04-16T00:53:08+00:00
```
2026-04-16T00:53:08.4134910Z === RUN   TestAccCluster_Global
2026-04-16T00:53:12.1696853Z === CONT  TestAccCluster_Global
2026-04-16T00:53:14.4132883Z === NAME  TestAccCluster_Global
2026-04-16T00:53:14.4134511Z     resource_cluster_test.go:590: Step 1/1 error: Error running apply: exit status 1
2026-04-16T00:53:14.4135741Z         
2026-04-16T00:53:14.4139280Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69e032be1ec945fedc72a160/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-16T00:53:14.4160677Z         
2026-04-16T00:53:14.4161228Z           with mongodbatlas_cluster.test,
2026-04-16T00:53:14.4162360Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-04-16T00:53:14.4163897Z           12: 		resource "mongodbatlas_cluster" test {
2026-04-16T00:53:14.4164452Z         
2026-04-16T00:53:14.4876255Z --- FAIL: TestAccCluster_Global (2.40s)
```

- 2026-04-17 PASS 18 minutes
- 2026-04-18 PASS 26 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 18 minutes
- 2026-04-21 PASS 23 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 27 minutes
- 2026-04-24 PASS 20 minutes
- 2026-04-25 PASS 18 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 22 minutes
- 2026-04-28 PASS 21 minutes
- 2026-04-29 PASS 22 minutes
- 2026-04-30 PASS 33 minutes
- 2026-05-01 PASS 24 minutes
- 2026-05-02 PASS 19 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 18 minutes
- 2026-05-05

### Error 2026-05-05T00:53:38+00:00
```
2026-05-05T00:53:38.2224526Z === RUN   TestAccCluster_Global
2026-05-05T00:55:08.4086758Z     shared_resource.go:160: 
2026-05-05T00:55:08.4088548Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:55:08.4092149Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-05T00:55:08.4095472Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-05T00:55:08.4097788Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-05T00:55:08.4099634Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-05T00:55:08.4101520Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:588
2026-05-05T00:55:08.4102794Z         	Error:      	Received unexpected error:
2026-05-05T00:55:08.4104751Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:55:08.4106101Z         	Test:       	TestAccCluster_Global
2026-05-05T00:55:08.4107840Z         	Messages:   	Project creation failed: test-acc-tf-p-8528696854898874138, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:55:08.4108981Z --- FAIL: TestAccCluster_Global (90.19s)
```

- 2026-05-06 PASS 42 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 24 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 22 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 24 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 19 minutes
  - PASS 16 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 29 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 23 minutes
- 2026-05-04 PASS 19 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 25 minutes

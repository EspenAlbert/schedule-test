# cluster/cluster/TestAccCluster_ProviderRegionName Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:44](#error-2026-04-07t0044480000) |  | dev | timeout | 12851.09s
[2026-04-09 00:39](#error-2026-04-09t0039130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.01s
[2026-04-16 00:52](#error-2026-04-16t0052140000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e032be1ec945fedc72a160/clusters | dev | out_of_capacity | 56.08s
[2026-05-05 00:52](#error-2026-05-05t0052260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:44:48+00:00
```
2026-04-07T00:44:48.2035569Z === RUN   TestAccCluster_ProviderRegionName
2026-04-07T00:45:08.0008043Z === CONT  TestAccCluster_ProviderRegionName
2026-04-07T04:19:19.9150306Z === NAME  TestAccCluster_ProviderRegionName
2026-04-07T04:19:19.9151010Z     resource_cluster_test.go:544: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:19:19.9151526Z         
2026-04-07T04:19:19.9152474Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-3674707659888198696): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2026-04-07T04:19:19.9153188Z         
2026-04-07T04:19:19.9153460Z --- FAIL: TestAccCluster_ProviderRegionName (12851.92s)
```

- 2026-04-08 PASS 38 minutes
- 2026-04-09

### Error 2026-04-09T00:39:13+00:00
```
2026-04-09T00:39:13.5823702Z === RUN   TestAccCluster_ProviderRegionName
2026-04-09T00:40:19.7009039Z     shared_resource.go:160: 
2026-04-09T00:40:19.7011064Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:40:19.7014739Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-09T00:40:19.7017918Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-09T00:40:19.7019916Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-09T00:40:19.7022010Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-09T00:40:19.7024313Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:522
2026-04-09T00:40:19.7025156Z         	Error:      	Received unexpected error:
2026-04-09T00:40:19.7027088Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:19.7028370Z         	Test:       	TestAccCluster_ProviderRegionName
2026-04-09T00:40:19.7030125Z         	Messages:   	Project creation failed: test-acc-tf-p-4388691252922825406, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:19.7031596Z --- FAIL: TestAccCluster_ProviderRegionName (66.12s)
```

- 2026-04-10 PASS 56 minutes
- 2026-04-11 PASS 37 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 42 minutes
- 2026-04-14 PASS 41 minutes
- 2026-04-15 PASS 41 minutes
- 2026-04-16

### Error 2026-04-16T00:52:14+00:00
```
2026-04-16T00:52:14.0073797Z === RUN   TestAccCluster_ProviderRegionName
2026-04-16T00:53:12.0798272Z === CONT  TestAccCluster_ProviderRegionName
2026-04-16T00:53:14.4446706Z === NAME  TestAccCluster_ProviderRegionName
2026-04-16T00:53:14.4447688Z     resource_cluster_test.go:544: Step 2/3 error: Error running apply: exit status 1
2026-04-16T00:53:14.4448464Z         
2026-04-16T00:53:14.4451240Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69e032be1ec945fedc72a160/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-16T00:53:14.4453090Z         
2026-04-16T00:53:14.4453678Z           with mongodbatlas_cluster.multi_region,
2026-04-16T00:53:14.4457194Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2026-04-16T00:53:14.4459389Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2026-04-16T00:53:14.4460011Z         
2026-04-16T00:53:14.5065103Z --- FAIL: TestAccCluster_ProviderRegionName (56.84s)
```

- 2026-04-17 PASS 38 minutes
- 2026-04-18 PASS 42 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 36 minutes
- 2026-04-21 PASS 39 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 49 minutes
- 2026-04-24 PASS 37 minutes
- 2026-04-25 PASS 35 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 40 minutes
- 2026-04-28 PASS 45 minutes
- 2026-04-29 PASS 44 minutes
- 2026-04-30 PASS 56 minutes
- 2026-05-01 PASS 43 minutes
- 2026-05-02 PASS 34 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 41 minutes
- 2026-05-05

### Error 2026-05-05T00:52:26+00:00
```
2026-05-05T00:52:26.0809929Z === RUN   TestAccCluster_ProviderRegionName
2026-05-05T00:53:38.2200362Z     shared_resource.go:160: 
2026-05-05T00:53:38.2202013Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:53:38.2205383Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-05T00:53:38.2207565Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-05T00:53:38.2210861Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-05T00:53:38.2214586Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-05T00:53:38.2216566Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:522
2026-05-05T00:53:38.2217727Z         	Error:      	Received unexpected error:
2026-05-05T00:53:38.2219708Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:38.2220825Z         	Test:       	TestAccCluster_ProviderRegionName
2026-05-05T00:53:38.2222926Z         	Messages:   	Project creation failed: test-acc-tf-p-3809679574653717568, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:38.2224192Z --- FAIL: TestAccCluster_ProviderRegionName (72.14s)
```

- 2026-05-06 PASS 58 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 39 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 38 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 30 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 38 minutes
  - PASS 36 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 38 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 38 minutes
- 2026-05-04 PASS an hour
- 2026-05-05: MISSING
- 2026-05-06 PASS 39 minutes

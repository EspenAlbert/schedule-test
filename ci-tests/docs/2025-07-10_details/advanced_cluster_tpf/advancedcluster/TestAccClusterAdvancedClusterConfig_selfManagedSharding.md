# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedSharding Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-05-28 12:04](#error-2025-05-28t1204460000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6836d100e6404f5026cf1f75/clusters | qa | out_of_capacity | 5.05s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4d7c939f274132515df/clusters | dev | flaky_500 | 5.10s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 16 minutes
- 2025-04-13 PASS 28 minutes
- 2025-04-14 PASS 15 minutes
- 2025-04-15 PASS 14 minutes
- 2025-04-16
  - PASS 15 minutes
  - PASS 20 minutes
- 2025-04-17 PASS 16 minutes
- 2025-04-18 PASS 15 minutes
- 2025-04-19 PASS 18 minutes
- 2025-04-20 PASS 18 minutes
- 2025-04-21 PASS 20 minutes
- 2025-04-22 PASS 14 minutes
- 2025-04-23 PASS 12 minutes
- 2025-04-24 PASS 16 minutes
- 2025-04-25 PASS 14 minutes
- 2025-04-26 PASS 15 minutes
- 2025-04-27 PASS 21 minutes
- 2025-04-28 PASS 14 minutes
- 2025-04-29 PASS 15 minutes
- 2025-04-30 PASS 16 minutes
- 2025-05-01
  - PASS 13 minutes
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 13 minutes
- 2025-05-02 PASS 21 minutes
- 2025-05-03 PASS 15 minutes
- 2025-05-04 PASS 14 minutes
- 2025-05-05 PASS 15 minutes
- 2025-05-06 PASS 20 minutes
- 2025-05-07 PASS 15 minutes
- 2025-05-08 PASS 17 minutes
- 2025-05-09 PASS 19 minutes
- 2025-05-10 PASS 13 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.7932878Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-11T00:30:01.7933413Z     shared_resource.go:84: 
2025-05-11T00:30:01.7934311Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7936032Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7937941Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7939693Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7941884Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:733
2025-05-11T00:30:01.7942706Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7943729Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7944377Z         	Test:       	TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-11T00:30:01.7945451Z         	Messages:   	Project creation failed: test-acc-tf-p-7359742738877530951, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7946207Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (0.02s)
```

- 2025-05-12 PASS 17 minutes
- 2025-05-13
  - PASS 16 minutes
  - PASS 15 minutes
- 2025-05-14 PASS 18 minutes
- 2025-05-15 PASS 15 minutes
- 2025-05-16 PASS 16 minutes
- 2025-05-17 PASS 15 minutes
- 2025-05-18 PASS 15 minutes
- 2025-05-19 PASS 14 minutes
- 2025-05-20 PASS 15 minutes
- 2025-05-21
  - PASS 16 minutes
  - PASS 13 minutes
- 2025-05-22 PASS 16 minutes
- 2025-05-23 PASS 18 minutes
- 2025-05-24 PASS 15 minutes
- 2025-05-25 PASS 26 minutes
- 2025-05-26 PASS 15 minutes
- 2025-05-27 PASS 17 minutes
- 2025-05-28
  - PASS 14 minutes
  - FAIL 5 seconds

### Error 2025-05-28T12:04:46+00:00
```
2025-05-28T12:04:46.9791792Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-28T12:04:46.9834220Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-28T12:04:46.9875072Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-05-28T12:04:46.9875809Z     resource_advanced_cluster_test.go:744: Step 1/3 error: Error running apply: exit status 1
2025-05-28T12:04:46.9876341Z         
2025-05-28T12:04:46.9876593Z         Error: Error in create
2025-05-28T12:04:46.9876835Z         
2025-05-28T12:04:46.9877155Z           with mongodbatlas_advanced_cluster.test,
2025-05-28T12:04:46.9877806Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-28T12:04:46.9878397Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-05-28T12:04:46.9878812Z         
2025-05-28T12:04:46.9879221Z         cluster name: test-acc-tf-c-4613698556196945694, API error details:
2025-05-28T12:04:46.9880204Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6836d100e6404f5026cf1f75/clusters
2025-05-28T12:04:46.9880978Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-05-28T12:04:46.9882020Z         region is currently out of capacity for the requested instance size. Reason:
2025-05-28T12:04:46.9882531Z         Conflict. Params: [], BadRequestDetail: 
2025-05-28T12:04:46.9896566Z   
2025-05-28T12:04:46.9904913Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (5.51s)
```

  - PASS 18 minutes
- 2025-05-29 PASS 29 minutes
- 2025-05-30
  - PASS an hour
  - PASS 14 minutes
- 2025-05-31 PASS 16 minutes
- 2025-06-01
  - PASS 12 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 16 minutes
  - PASS 14 minutes
- 2025-06-02
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 13 minutes
- 2025-06-03 PASS 16 minutes
- 2025-06-04 PASS 15 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5885797Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-05T00:35:38.5956436Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-05T00:35:38.6192853Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2025-06-05T00:35:38.6193569Z     resource_advanced_cluster_test.go:744: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:38.6194087Z         
2025-06-05T00:35:38.6194339Z         Error: Error in create
2025-06-05T00:35:38.6194621Z         
2025-06-05T00:35:38.6195004Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6195932Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6196645Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6196958Z         
2025-06-05T00:35:38.6197520Z         cluster name: test-acc-tf-c-4296540970871698316, API error details:
2025-06-05T00:35:38.6198539Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d7c939f274132515df/clusters
2025-06-05T00:35:38.6199506Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6200210Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6200657Z         BadRequestDetail: 
2025-06-05T00:35:38.6209133Z   
2025-06-05T00:35:38.6394720Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (5.99s)
```

- 2025-06-06 PASS 15 minutes
- 2025-06-07 PASS 24 minutes
- 2025-06-08 PASS 15 minutes
- 2025-06-09 PASS 16 minutes
- 2025-06-10 PASS 32 minutes
- 2025-06-11
  - PASS 17 minutes
  - PASS 17 minutes
- 2025-06-12 PASS 15 minutes
- 2025-06-13 PASS 16 minutes
- 2025-06-14 PASS 21 minutes
- 2025-06-15 PASS 13 minutes
- 2025-06-16 PASS 20 minutes
- 2025-06-17 PASS 15 minutes
- 2025-06-18
  - PASS 19 minutes
  - PASS 15 minutes
- 2025-06-19 PASS 42 minutes
- 2025-06-20 PASS 17 minutes
- 2025-06-21 PASS 16 minutes
- 2025-06-22 PASS 14 minutes
- 2025-06-23 PASS 15 minutes
- 2025-06-24 PASS 30 minutes
- 2025-06-25 PASS 16 minutes
- 2025-06-26
  - PASS 21 minutes
  - PASS 13 minutes
- 2025-06-27 PASS 14 minutes
- 2025-06-28 PASS 15 minutes
- 2025-06-29 PASS 18 minutes
- 2025-06-30 PASS 17 minutes
- 2025-07-01
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 18 minutes
- 2025-07-02 PASS 14 minutes
- 2025-07-03 PASS 19 minutes
- 2025-07-04 PASS 18 minutes
- 2025-07-05 PASS 15 minutes
- 2025-07-06 PASS 16 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 14 minutes
- 2025-07-09 PASS 14 minutes
- 2025-07-10 PASS 14 minutes
# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_pausedToUnpaused Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-05-28 12:04](#error-2025-05-28t1204460000) |  | qa |  | 917.07s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4d6161ca93c1f05303e/clusters | dev | flaky_500 | 40.08s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 25 minutes
- 2025-04-13 PASS 28 minutes
- 2025-04-14 PASS 23 minutes
- 2025-04-15 PASS 22 minutes
- 2025-04-16
  - PASS 25 minutes
  - PASS 31 minutes
- 2025-04-17 PASS 27 minutes
- 2025-04-18 PASS 25 minutes
- 2025-04-19 PASS 26 minutes
- 2025-04-20 PASS 24 minutes
- 2025-04-21 PASS 30 minutes
- 2025-04-22 PASS 26 minutes
- 2025-04-23 PASS 26 minutes
- 2025-04-24 PASS 26 minutes
- 2025-04-25 PASS 28 minutes
- 2025-04-26 PASS 23 minutes
- 2025-04-27 PASS 27 minutes
- 2025-04-28 PASS 23 minutes
- 2025-04-29 PASS 25 minutes
- 2025-04-30 PASS 30 minutes
- 2025-05-01
  - PASS 25 minutes
  - PASS 26 minutes
  - PASS 25 minutes
  - PASS 25 minutes
  - PASS 24 minutes
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-05-02 PASS 27 minutes
- 2025-05-03 PASS 24 minutes
- 2025-05-04 PASS 24 minutes
- 2025-05-05 PASS 24 minutes
- 2025-05-06 PASS 28 minutes
- 2025-05-07 PASS 29 minutes
- 2025-05-08 PASS 29 minutes
- 2025-05-09 PASS 26 minutes
- 2025-05-10 PASS 26 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.7827497Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-11T00:30:01.7827850Z     shared_resource.go:84: 
2025-05-11T00:30:01.7828826Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7830573Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7832496Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7834221Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7836187Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:335
2025-05-11T00:30:01.7837002Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7837871Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7838611Z         	Test:       	TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-11T00:30:01.7839639Z         	Messages:   	Project creation failed: test-acc-tf-p-4859201525905831580, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7840360Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (0.02s)
```

- 2025-05-12 PASS 27 minutes
- 2025-05-13
  - PASS 26 minutes
  - PASS 24 minutes
- 2025-05-14 PASS 27 minutes
- 2025-05-15 PASS 25 minutes
- 2025-05-16 PASS 25 minutes
- 2025-05-17 PASS 24 minutes
- 2025-05-18 PASS 24 minutes
- 2025-05-19 PASS 27 minutes
- 2025-05-20 PASS 26 minutes
- 2025-05-21
  - PASS 26 minutes
  - PASS 22 minutes
- 2025-05-22 PASS 27 minutes
- 2025-05-23 PASS 23 minutes
- 2025-05-24 PASS 23 minutes
- 2025-05-25 PASS 34 minutes
- 2025-05-26 PASS 25 minutes
- 2025-05-27 PASS 25 minutes
- 2025-05-28
  - PASS 22 minutes
  - FAIL 15 minutes

### Error 2025-05-28T12:04:46+00:00
```
2025-05-28T12:04:46.9782678Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-28T12:04:46.9830603Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-28T12:04:46.9940220Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-28T12:04:46.9941068Z     pre_check.go:40: Time before creating cluster: 2025-05-28T09:03:56.037904623Z, ProjectID: 6836d0fdd000797dbe921ab2, Cluster name: test-acc-tf-c-5388938651088140519
2025-05-28T12:04:47.0055003Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-05-28T12:04:47.0055576Z     resource_advanced_cluster_test.go:342: Step 1/5 error: Error running apply: exit status 1
2025-05-28T12:04:47.0055982Z         
2025-05-28T12:04:47.0056268Z         Error: error resolving container IDs
2025-05-28T12:04:47.0056534Z         
2025-05-28T12:04:47.0056848Z           with mongodbatlas_advanced_cluster.test,
2025-05-28T12:04:47.0057481Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-28T12:04:47.0058066Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-05-28T12:04:47.0058364Z         
2025-05-28T12:04:47.0058803Z         cluster name = test-acc-tf-c-5388938651088140519, error details: (503 Service
2025-05-28T12:04:47.0059410Z         Unavailable) failed to decode response body: undefined response type
2025-05-28T12:04:47.0059877Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (917.67s)
```

  - PASS 27 minutes
- 2025-05-29 PASS 29 minutes
- 2025-05-30
  - PASS an hour
  - PASS 32 minutes
- 2025-05-31 PASS 25 minutes
- 2025-06-01
  - PASS 23 minutes
  - PASS 23 minutes
  - PASS 24 minutes
  - PASS 22 minutes
  - PASS 23 minutes
- 2025-06-02
  - PASS 23 minutes
  - PASS 26 minutes
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-06-03 PASS 25 minutes
- 2025-06-04 PASS 25 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5876302Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-05T00:35:38.5947419Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-05T00:35:38.6717581Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-06-05T00:35:38.6718362Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:30:06.016792531Z, ProjectID: 6840e4d6161ca93c1f05303e, Cluster name: test-acc-tf-c-3350460911748810959
2025-06-05T00:35:38.6724146Z    test_working_directory=/tmp/plugintest2694626881 test_name=TestAccClusterAdvancedCluster_pausedToUnpaused test_step_number=1 test_terraform_path=/home/runner/work/_temp/42fd3dfc-6af2-4f11-bf4e-9449f43560eb/terraform
2025-06-05T00:35:38.6724489Z     resource_advanced_cluster_test.go:342: Step 1/5 error: Error running apply: exit status 1
2025-06-05T00:35:38.6724585Z         
2025-06-05T00:35:38.6724735Z         Error: Error in create
2025-06-05T00:35:38.6724820Z         
2025-06-05T00:35:38.6725044Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6725489Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6725758Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6725853Z         
2025-06-05T00:35:38.6726166Z         cluster name: test-acc-tf-c-3350460911748810959, API error details:
2025-06-05T00:35:38.6726570Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d6161ca93c1f05303e/clusters
2025-06-05T00:35:38.6726926Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6727213Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6727352Z         BadRequestDetail: 
2025-06-05T00:35:38.6727548Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (40.82s)
```

- 2025-06-06 PASS 27 minutes
- 2025-06-07 PASS 30 minutes
- 2025-06-08 PASS 26 minutes
- 2025-06-09 PASS 27 minutes
- 2025-06-10 PASS 45 minutes
- 2025-06-11
  - PASS 26 minutes
  - PASS 31 minutes
- 2025-06-12 PASS 27 minutes
- 2025-06-13 PASS 29 minutes
- 2025-06-14 PASS 28 minutes
- 2025-06-15 PASS 24 minutes
- 2025-06-16 PASS 30 minutes
- 2025-06-17 PASS 25 minutes
- 2025-06-18
  - PASS 27 minutes
  - PASS 24 minutes
- 2025-06-19 PASS 53 minutes
- 2025-06-20 PASS 26 minutes
- 2025-06-21 PASS 24 minutes
- 2025-06-22 PASS 35 minutes
- 2025-06-23 PASS 23 minutes
- 2025-06-24 PASS 33 minutes
- 2025-06-25 PASS 22 minutes
- 2025-06-26
  - PASS 25 minutes
  - PASS 21 minutes
- 2025-06-27 PASS 25 minutes
- 2025-06-28 PASS 23 minutes
- 2025-06-29 PASS 28 minutes
- 2025-06-30 PASS 29 minutes
- 2025-07-01
  - PASS 25 minutes
  - PASS 25 minutes
  - PASS 24 minutes
  - PASS 26 minutes
  - PASS 27 minutes
- 2025-07-02 PASS 26 minutes
- 2025-07-03 PASS 25 minutes
- 2025-07-04 PASS 25 minutes
- 2025-07-05 PASS 24 minutes
- 2025-07-06 PASS 24 minutes
- 2025-07-07 PASS 24 minutes
- 2025-07-08 PASS 28 minutes
- 2025-07-09 PASS 23 minutes
- 2025-07-10 PASS 24 minutes
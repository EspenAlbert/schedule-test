# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_sharedTier_flexUpgrade Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4c7161ca93c1f052870/clusters | dev | flaky_500 | 5.08s
[2025-07-10 04:28](#error-2025-07-10t0428210000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 22,36,73 | dev | real_test_failure | 220.07s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 5 minutes
- 2025-04-13 PASS 4 minutes
- 2025-04-14 PASS 4 minutes
- 2025-04-15 PASS 4 minutes
- 2025-04-16
  - PASS 5 minutes
  - PASS 4 minutes
- 2025-04-17 PASS 4 minutes
- 2025-04-18 PASS 5 minutes
- 2025-04-19 PASS 5 minutes
- 2025-04-20 PASS 4 minutes
- 2025-04-21 PASS 4 minutes
- 2025-04-22 PASS 5 minutes
- 2025-04-23 PASS 4 minutes
- 2025-04-24 PASS 5 minutes
- 2025-04-25 PASS 4 minutes
- 2025-04-26 PASS 4 minutes
- 2025-04-27 PASS 4 minutes
- 2025-04-28 PASS 5 minutes
- 2025-04-29 PASS 5 minutes
- 2025-04-30 PASS 5 minutes
- 2025-05-01
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-05-02 PASS 5 minutes
- 2025-05-03 PASS 5 minutes
- 2025-05-04 PASS 4 minutes
- 2025-05-05 PASS 4 minutes
- 2025-05-06 PASS 4 minutes
- 2025-05-07 PASS 4 minutes
- 2025-05-08 PASS 4 minutes
- 2025-05-09 PASS 5 minutes
- 2025-05-10 PASS 6 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.7754371Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-05-11T00:30:01.7754739Z     shared_resource.go:84: 
2025-05-11T00:30:01.7755616Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7757339Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7759065Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7760778Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7762933Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:124
2025-05-11T00:30:01.7765199Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:157
2025-05-11T00:30:01.7766019Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7766880Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7767463Z         	Test:       	TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-05-11T00:30:01.7768507Z         	Messages:   	Project creation failed: test-acc-tf-p-8355285713487585302, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7769343Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (0.02s)
```

- 2025-05-12 PASS 4 minutes
- 2025-05-13
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-05-14 PASS 5 minutes
- 2025-05-15 PASS 5 minutes
- 2025-05-16 PASS 5 minutes
- 2025-05-17 PASS 4 minutes
- 2025-05-18 PASS 4 minutes
- 2025-05-19 PASS 5 minutes
- 2025-05-20 PASS 4 minutes
- 2025-05-21
  - PASS 5 minutes
  - PASS 4 minutes
- 2025-05-22 PASS 4 minutes
- 2025-05-23 PASS 5 minutes
- 2025-05-24 PASS 4 minutes
- 2025-05-25 PASS 4 minutes
- 2025-05-26 PASS 5 minutes
- 2025-05-27 PASS 4 minutes
- 2025-05-28
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-05-29 PASS 5 minutes
- 2025-05-30
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-05-31 PASS 5 minutes
- 2025-06-01
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-06-02
  - PASS 4 minutes
  - PASS 5 minutes
  - PASS 5 minutes
  - PASS 4 minutes
- 2025-06-03 PASS 4 minutes
- 2025-06-04 PASS 5 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5850846Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-06-05T00:35:38.5851700Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:08.845338811Z, ProjectID: 6840e4c7161ca93c1f052870, Cluster name: test-acc-tf-c-1200956510402431474
2025-06-05T00:35:38.5863978Z   
2025-06-05T00:35:38.5864416Z     resource_advanced_cluster_test.go:160: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:35:38.5864829Z         
2025-06-05T00:35:38.5865081Z         Error: Error in create
2025-06-05T00:35:38.5865321Z         
2025-06-05T00:35:38.5865642Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.5866281Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.5866870Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.5867177Z         
2025-06-05T00:35:38.5867588Z         cluster name: test-acc-tf-c-1200956510402431474, API error details:
2025-06-05T00:35:38.5868440Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c7161ca93c1f052870/clusters
2025-06-05T00:35:38.5869133Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.5869714Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.5870099Z         BadRequestDetail: 
2025-06-05T00:35:38.5870428Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (5.77s)
```

- 2025-06-06 PASS 8 minutes
- 2025-06-07 PASS 4 minutes
- 2025-06-08 PASS 4 minutes
- 2025-06-09 PASS 4 minutes
- 2025-06-10 PASS 5 minutes
- 2025-06-11
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-06-12 PASS 6 minutes
- 2025-06-13 PASS 4 minutes
- 2025-06-14 PASS 6 minutes
- 2025-06-15 PASS 5 minutes
- 2025-06-16 PASS 6 minutes
- 2025-06-17 PASS 6 minutes
- 2025-06-18
  - PASS 7 minutes
  - PASS 5 minutes
- 2025-06-19 PASS 6 minutes
- 2025-06-20 PASS 5 minutes
- 2025-06-21 PASS 4 minutes
- 2025-06-22 PASS 5 minutes
- 2025-06-23 PASS 5 minutes
- 2025-06-24 PASS 5 minutes
- 2025-06-25 PASS 5 minutes
- 2025-06-26
  - PASS 4 minutes
  - PASS 5 minutes
- 2025-06-27 PASS 5 minutes
- 2025-06-28 PASS 4 minutes
- 2025-06-29 PASS 4 minutes
- 2025-06-30 PASS 5 minutes
- 2025-07-01
  - PASS 4 minutes
  - PASS 5 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 5 minutes
- 2025-07-02 PASS 5 minutes
- 2025-07-03 PASS 5 minutes
- 2025-07-04 PASS 5 minutes
- 2025-07-05 PASS 5 minutes
- 2025-07-06 PASS 4 minutes
- 2025-07-07 PASS 5 minutes
- 2025-07-08 PASS 5 minutes
- 2025-07-09 PASS 4 minutes
- 2025-07-10

### Error 2025-07-10T04:28:21+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-10T04:28:21.976000+00:00-TestAccAdvancedCluster_sharedTier_flexUpgrade',confidence=1.0,ts_when='an hour ago')
CheckFailure for advanced_cluster.test at Step: 2 Checks: 22,36,73
```
2025-07-10T04:28:21.9767904Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-07-10T04:28:21.9769540Z     pre_check.go:40: Time before creating cluster: 2025-07-10T03:30:54.164278113Z, ProjectID: 686f096b964afc762c202a8e, Cluster name: test-acc-tf-c-3258063938174301848
2025-07-10T04:28:21.9779928Z   
2025-07-10T04:28:21.9782171Z     resource_advanced_cluster_test.go:160: Step 2/2 error: Check failed: Check 22/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-07-10T04:28:21.9784982Z         Check 36/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-07-10T04:28:21.9787040Z         Check 73/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-10T04:28:21.9788036Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (220.66s)
```

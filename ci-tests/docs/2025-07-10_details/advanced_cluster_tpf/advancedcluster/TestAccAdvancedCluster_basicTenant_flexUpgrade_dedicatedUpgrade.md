# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4c7161ca93c1f052870/clusters | dev | flaky_500 | 6.01s
[2025-07-10 04:28](#error-2025-07-10t0428210000) |  | dev | timeout | 10875.07s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 19 minutes
- 2025-04-13 PASS 25 minutes
- 2025-04-14 PASS 17 minutes
- 2025-04-15 PASS 19 minutes
- 2025-04-16
  - PASS 19 minutes
  - PASS 25 minutes
- 2025-04-17 PASS 19 minutes
- 2025-04-18 PASS 19 minutes
- 2025-04-19 PASS 19 minutes
- 2025-04-20 PASS 21 minutes
- 2025-04-21 PASS 19 minutes
- 2025-04-22 PASS 17 minutes
- 2025-04-23 PASS 21 minutes
- 2025-04-24 PASS 18 minutes
- 2025-04-25 PASS 19 minutes
- 2025-04-26 PASS 20 minutes
- 2025-04-27 PASS 21 minutes
- 2025-04-28 PASS 17 minutes
- 2025-04-29 PASS 19 minutes
- 2025-04-30 PASS 20 minutes
- 2025-05-01
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 19 minutes
- 2025-05-02 PASS 19 minutes
- 2025-05-03 PASS 18 minutes
- 2025-05-04 PASS 18 minutes
- 2025-05-05 PASS 18 minutes
- 2025-05-06 PASS 18 minutes
- 2025-05-07 PASS 20 minutes
- 2025-05-08 PASS 19 minutes
- 2025-05-09 PASS 19 minutes
- 2025-05-10 PASS 19 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.7734937Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-05-11T00:30:01.7735770Z     shared_resource.go:84: 
2025-05-11T00:30:01.7737461Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7740818Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7743577Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7745346Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7747327Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:124
2025-05-11T00:30:01.7749448Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:153
2025-05-11T00:30:01.7750258Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7751132Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7752033Z         	Test:       	TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-05-11T00:30:01.7753121Z         	Messages:   	Project creation failed: test-acc-tf-p-139796547105852253, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7753908Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (0.02s)
```

- 2025-05-12 PASS 18 minutes
- 2025-05-13
  - PASS 19 minutes
  - PASS 17 minutes
- 2025-05-14 PASS 19 minutes
- 2025-05-15 PASS 20 minutes
- 2025-05-16 PASS 18 minutes
- 2025-05-17 PASS 19 minutes
- 2025-05-18 PASS 20 minutes
- 2025-05-19 PASS 20 minutes
- 2025-05-20 PASS 20 minutes
- 2025-05-21
  - PASS 20 minutes
  - PASS 18 minutes
- 2025-05-22 PASS 24 minutes
- 2025-05-23 PASS 19 minutes
- 2025-05-24 PASS 21 minutes
- 2025-05-25 PASS 22 minutes
- 2025-05-26 PASS 20 minutes
- 2025-05-27 PASS 19 minutes
- 2025-05-28
  - PASS 32 minutes
  - PASS 19 minutes
  - PASS 21 minutes
- 2025-05-29 PASS 20 minutes
- 2025-05-30
  - PASS 17 minutes
  - PASS 19 minutes
- 2025-05-31 PASS 19 minutes
- 2025-06-01
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-06-02
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 21 minutes
  - PASS 18 minutes
- 2025-06-03 PASS 20 minutes
- 2025-06-04 PASS 18 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5829948Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-06-05T00:35:38.5830867Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:02.734786632Z, ProjectID: 6840e4c7161ca93c1f052870, Cluster name: test-acc-tf-c-4779469448114362715
2025-06-05T00:35:38.5843715Z   
2025-06-05T00:35:38.5844163Z     resource_advanced_cluster_test.go:156: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:38.5844572Z         
2025-06-05T00:35:38.5844828Z         Error: Error in create
2025-06-05T00:35:38.5845069Z         
2025-06-05T00:35:38.5845393Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.5846041Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.5846624Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.5846929Z         
2025-06-05T00:35:38.5847347Z         cluster name: test-acc-tf-c-4779469448114362715, API error details:
2025-06-05T00:35:38.5848040Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c7161ca93c1f052870/clusters
2025-06-05T00:35:38.5849003Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.5849581Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.5849973Z         BadRequestDetail: 
2025-06-05T00:35:38.5850373Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (6.11s)
```

- 2025-06-06 PASS 20 minutes
- 2025-06-07 PASS 20 minutes
- 2025-06-08 PASS 18 minutes
- 2025-06-09 PASS 19 minutes
- 2025-06-10 PASS 32 minutes
- 2025-06-11
  - PASS 21 minutes
  - PASS 18 minutes
- 2025-06-12 PASS 21 minutes
- 2025-06-13 PASS 23 minutes
- 2025-06-14 PASS 23 minutes
- 2025-06-15 PASS 21 minutes
- 2025-06-16 PASS 25 minutes
- 2025-06-17 PASS 18 minutes
- 2025-06-18
  - PASS 20 minutes
  - PASS 19 minutes
- 2025-06-19 PASS 26 minutes
- 2025-06-20 PASS 21 minutes
- 2025-06-21 PASS 22 minutes
- 2025-06-22 PASS 22 minutes
- 2025-06-23 PASS 20 minutes
- 2025-06-24 PASS 20 minutes
- 2025-06-25 PASS 19 minutes
- 2025-06-26
  - PASS 26 minutes
  - PASS 19 minutes
- 2025-06-27 PASS 20 minutes
- 2025-06-28 PASS 21 minutes
- 2025-06-29 PASS 25 minutes
- 2025-06-30 PASS 20 minutes
- 2025-07-01
  - PASS 18 minutes
  - PASS 20 minutes
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 19 minutes
- 2025-07-02 PASS 20 minutes
- 2025-07-03 PASS 19 minutes
- 2025-07-04 PASS 30 minutes
- 2025-07-05 PASS 19 minutes
- 2025-07-06 PASS 17 minutes
- 2025-07-07 PASS 19 minutes
- 2025-07-08 PASS 21 minutes
- 2025-07-09 PASS 23 minutes
- 2025-07-10

### Error 2025-07-10T04:28:21+00:00
```
2025-07-10T04:28:21.9739521Z === RUN   TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade
2025-07-10T04:28:21.9741309Z     pre_check.go:40: Time before creating cluster: 2025-07-10T00:29:38.506849219Z, ProjectID: 686f096b964afc762c202a8e, Cluster name: test-acc-tf-c-3439852545736574355
2025-07-10T04:28:21.9757425Z    test_working_directory=/tmp/plugintest993467233 test_step_number=2 test_name=TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade test_terraform_path=/home/runner/work/_temp/0240f3b0-a8c0-47f9-9b6c-80b34a4178d7/terraform
2025-07-10T04:28:21.9759507Z     resource_advanced_cluster_test.go:156: Step 2/3 error: Error running apply: exit status 1
2025-07-10T04:28:21.9760210Z         
2025-07-10T04:28:21.9761116Z         Error: error upgrading to a flex cluster: test-acc-tf-c-3439852545736574355
2025-07-10T04:28:21.9761753Z         
2025-07-10T04:28:21.9762290Z           with mongodbatlas_advanced_cluster.test,
2025-07-10T04:28:21.9763417Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-10T04:28:21.9764441Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-10T04:28:21.9764959Z         
2025-07-10T04:28:21.9765711Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-07-10T04:28:21.9766412Z         timeout: 3h0m0s)
2025-07-10T04:28:21.9767089Z --- FAIL: TestAccAdvancedCluster_basicTenant_flexUpgrade_dedicatedUpgrade (10875.65s)
```

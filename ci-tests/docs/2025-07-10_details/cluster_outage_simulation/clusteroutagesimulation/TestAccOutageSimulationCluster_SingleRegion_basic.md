# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_SingleRegion_basic Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 110) FAIL(x 4)
Success rate: 96.49%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-01 04:51](#error-2025-05-01t0451550000) |  | dev |  | 853.06s
[2025-05-11 00:29](#error-2025-05-11t0029410000) |  | qa |  | 0.00s
[2025-05-30 00:37](#error-2025-05-30t0037540000) |  | dev |  | 3749.04s
[2025-06-05 00:28](#error-2025-06-05t0028450000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4b9161ca93c1f051d06/clusters/test-acc-tf-c-5365681198474183453 | dev | flaky_500 | 191.01s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 23 minutes
- 2025-04-13 PASS 27 minutes
- 2025-04-14 PASS 23 minutes
- 2025-04-15 PASS 23 minutes
- 2025-04-16
  - PASS 23 minutes
  - PASS 28 minutes
- 2025-04-17 PASS 24 minutes
- 2025-04-18 PASS 23 minutes
- 2025-04-19 PASS 25 minutes
- 2025-04-20 PASS 25 minutes
- 2025-04-21 PASS 22 minutes
- 2025-04-22 PASS 22 minutes
- 2025-04-23 PASS 22 minutes
- 2025-04-24 PASS 23 minutes
- 2025-04-25 PASS 23 minutes
- 2025-04-26 PASS 22 minutes
- 2025-04-27 PASS 21 minutes
- 2025-04-28 PASS 21 minutes
- 2025-04-29 PASS 22 minutes
- 2025-04-30
  - PASS 23 minutes
  - PASS 24 minutes
- 2025-05-01
  - PASS 23 minutes
  - PASS 25 minutes
  - PASS 23 minutes
  - FAIL 14 minutes

### Error 2025-05-01T04:51:55+00:00
```
2025-05-01T04:51:55.3329734Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-01T04:51:55.3337132Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-01T04:52:05.3386407Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-01T04:52:05.3390568Z     pre_check.go:40: Time before creating cluster: 2025-05-01T04:52:05.338349658Z, ProjectID: 6812fdeaed10397068f84bea, Cluster name: test-acc-tf-c-3502490030876237040
2025-05-01T05:01:57.6935327Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-01T05:01:57.6936089Z     resource_cluster_outage_simulation_test.go:20: Step 1/1 error: Error running apply: exit status 1
2025-05-01T05:01:57.6936629Z         
2025-05-01T05:01:57.6938041Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (6812fdeaed10397068f84bea), Cluster (test-acc-tf-c-3502490030876237040): (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-01T05:01:57.6939419Z         
2025-05-01T05:01:57.6939868Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-05-01T05:01:57.6940804Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-05-01T05:01:57.6941534Z           39: 			resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-05-01T05:01:57.6941894Z         
2025-05-01T05:06:08.9326872Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (853.60s)
```

  - PASS 23 minutes
  - PASS 22 minutes
  - PASS 22 minutes
- 2025-05-02 PASS 23 minutes
- 2025-05-03 PASS 23 minutes
- 2025-05-04 PASS 23 minutes
- 2025-05-05 PASS 22 minutes
- 2025-05-06 PASS 24 minutes
- 2025-05-07 PASS 23 minutes
- 2025-05-08 PASS 24 minutes
- 2025-05-09 PASS 25 minutes
- 2025-05-10 PASS 22 minutes
- 2025-05-11

### Error 2025-05-11T00:29:41+00:00
```
2025-05-11T00:29:41.0168073Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-11T00:29:41.0168728Z     resource_cluster_outage_simulation_test.go:20: Creating execution project: test-acc-tf-p-8622139675347831780
2025-05-11T00:29:41.0228440Z     resource_cluster_outage_simulation_test.go:20: 
2025-05-11T00:29:41.0229780Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:41.0231660Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:41.0233413Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:41.0235853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_cluster_outage_simulation_test.go:31
2025-05-11T00:29:41.0238304Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_cluster_outage_simulation_test.go:20
2025-05-11T00:29:41.0239242Z         	Error:      	Received unexpected error:
2025-05-11T00:29:41.0240141Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:41.0240745Z         	Test:       	TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-11T00:29:41.0241972Z         	Messages:   	Project creation failed: test-acc-tf-p-8622139675347831780, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:41.0242721Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (0.01s)
```

- 2025-05-12 PASS 24 minutes
- 2025-05-13
  - PASS 23 minutes
  - PASS 22 minutes
- 2025-05-14 PASS 32 minutes
- 2025-05-15 PASS 25 minutes
- 2025-05-16 PASS 23 minutes
- 2025-05-17 PASS 23 minutes
- 2025-05-18 PASS 23 minutes
- 2025-05-19 PASS 22 minutes
- 2025-05-20 PASS 21 minutes
- 2025-05-21 PASS 22 minutes
- 2025-05-22 PASS 22 minutes
- 2025-05-23 PASS 29 minutes
- 2025-05-24 PASS 23 minutes
- 2025-05-25 PASS 24 minutes
- 2025-05-26 PASS 23 minutes
- 2025-05-27 PASS 22 minutes
- 2025-05-28
  - PASS 35 minutes
  - PASS 26 minutes
- 2025-05-29 PASS 28 minutes
- 2025-05-30
  - FAIL an hour

### Error 2025-05-30T00:37:54+00:00
```
2025-05-30T00:37:54.2162216Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-30T00:37:54.2170978Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-30T00:38:04.2193631Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-30T00:38:04.2195847Z     pre_check.go:40: Time before creating cluster: 2025-05-30T00:38:04.219105312Z, ProjectID: 6838fde0633e350548a5825a, Cluster name: test-acc-tf-c-2439609549135003094
2025-05-30T01:40:23.5994526Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-05-30T01:40:23.5996859Z     resource_cluster_outage_simulation_test.go:20: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-30T01:40:23.5997425Z         
2025-05-30T01:40:23.5998371Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (6838fde0633e350548a5825a), Cluster (test-acc-tf-c-2439609549135003094): context deadline exceeded
2025-05-30T01:40:23.5999055Z         
2025-05-30T01:40:23.5999374Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (3749.38s)
```

  - PASS 22 minutes
- 2025-05-31 PASS 24 minutes
- 2025-06-01
  - PASS 23 minutes
  - PASS 21 minutes
  - PASS 22 minutes
  - PASS 20 minutes
  - PASS 21 minutes
  - PASS 20 minutes
- 2025-06-02
  - PASS 22 minutes
  - PASS 24 minutes
  - PASS 22 minutes
- 2025-06-03 PASS 23 minutes
- 2025-06-04 PASS 23 minutes
- 2025-06-05

### Error 2025-06-05T00:28:45+00:00
```
2025-06-05T00:28:45.5767050Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-05T00:28:45.5776197Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-05T00:28:55.5844734Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-05T00:28:55.5847261Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:28:55.58418991Z, ProjectID: 6840e4b9161ca93c1f051d06, Cluster name: test-acc-tf-c-5365681198474183453
2025-06-05T00:31:56.6585730Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2025-06-05T00:31:56.6586390Z     resource_cluster_outage_simulation_test.go:20: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:31:56.6586846Z         
2025-06-05T00:31:56.6588775Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9161ca93c1f051d06/clusters/test-acc-tf-c-5365681198474183453 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:56.6590094Z         
2025-06-05T00:31:56.6590461Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:31:56.6591172Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:31:56.6591830Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:31:56.6592169Z         
2025-06-05T00:31:56.7068488Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (191.13s)
```

- 2025-06-06 PASS 22 minutes
- 2025-06-07 PASS 25 minutes
- 2025-06-08 PASS 23 minutes
- 2025-06-09 PASS 22 minutes
- 2025-06-10 PASS 33 minutes
- 2025-06-11
  - PASS 22 minutes
  - PASS 24 minutes
- 2025-06-12 PASS 23 minutes
- 2025-06-13 PASS 24 minutes
- 2025-06-14 PASS 23 minutes
- 2025-06-15 PASS 24 minutes
- 2025-06-16 PASS 23 minutes
- 2025-06-17 PASS 23 minutes
- 2025-06-18 PASS 22 minutes
- 2025-06-19 PASS 30 minutes
- 2025-06-20 PASS 24 minutes
- 2025-06-21 PASS 25 minutes
- 2025-06-22 PASS 22 minutes
- 2025-06-23 PASS 22 minutes
- 2025-06-24 PASS 22 minutes
- 2025-06-25 PASS 23 minutes
- 2025-06-26 PASS 23 minutes
- 2025-06-27 PASS 21 minutes
- 2025-06-28 PASS 22 minutes
- 2025-06-29 PASS 22 minutes
- 2025-06-30 PASS 25 minutes
- 2025-07-01
  - PASS 22 minutes
  - PASS 23 minutes
  - PASS 21 minutes
  - PASS 21 minutes
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-07-02 PASS 23 minutes
- 2025-07-03 PASS 21 minutes
- 2025-07-04 PASS 24 minutes
- 2025-07-05 PASS 22 minutes
- 2025-07-06 PASS 23 minutes
- 2025-07-07 PASS 21 minutes
- 2025-07-08 PASS 23 minutes
- 2025-07-09 PASS 22 minutes
- 2025-07-10 PASS 21 minutes
# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_SingleRegion_basic Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 110) FAIL(x 4)
Success rate: 96.49%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-01 04:51](#error-2025-05-01t0451530000) |  | dev |  | 861.05s
[2025-05-11 00:29](#error-2025-05-11t0029400000) |  | qa |  | 0.03s
[2025-05-30 00:37](#error-2025-05-30t0037520000) |  | dev |  | 3752.05s
[2025-06-05 00:28](#error-2025-06-05t0028410000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4b9161ca93c1f051d06/clusters/test-acc-tf-c-487810405676557839 | dev | flaky_500 | 192.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 24 minutes
- 2025-04-13 PASS 28 minutes
- 2025-04-14 PASS 21 minutes
- 2025-04-15 PASS 22 minutes
- 2025-04-16
  - PASS 24 minutes
  - PASS 29 minutes
- 2025-04-17 PASS 24 minutes
- 2025-04-18 PASS 23 minutes
- 2025-04-19 PASS 23 minutes
- 2025-04-20 PASS 24 minutes
- 2025-04-21 PASS 22 minutes
- 2025-04-22 PASS 23 minutes
- 2025-04-23 PASS 23 minutes
- 2025-04-24 PASS 22 minutes
- 2025-04-25 PASS 23 minutes
- 2025-04-26 PASS 22 minutes
- 2025-04-27 PASS 22 minutes
- 2025-04-28 PASS 23 minutes
- 2025-04-29 PASS 23 minutes
- 2025-04-30
  - PASS 22 minutes
  - PASS 26 minutes
- 2025-05-01
  - PASS 24 minutes
  - PASS 22 minutes
  - PASS 25 minutes
  - FAIL 14 minutes

### Error 2025-05-01T04:51:53+00:00
```
2025-05-01T04:51:53.7699704Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2025-05-01T04:51:53.7702667Z     resource_cluster_outage_simulation_migration_test.go:10: Creating execution project: test-acc-tf-p-6994127927245394947
2025-05-01T04:51:55.3336276Z === CONT  TestMigOutageSimulationCluster_SingleRegion_basic
2025-05-01T04:52:00.3379187Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-05-01T04:52:00.3381173Z     pre_check.go:40: Time before creating cluster: 2025-05-01T04:52:00.337594756Z, ProjectID: 6812fdeaed10397068f84bea, Cluster name: test-acc-tf-c-1754508436921385576
2025-05-01T05:01:53.6302481Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-05-01T05:01:53.6303627Z     resource_cluster_outage_simulation_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-05-01T05:01:53.6304522Z         
2025-05-01T05:01:53.6305036Z         Error: error reading advanced cluster
2025-05-01T05:01:53.6305523Z         
2025-05-01T05:01:53.6306158Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-05-01T05:01:53.6306877Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-05-01T05:01:53.6307532Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-05-01T05:01:53.6307860Z         
2025-05-01T05:01:53.6308304Z         cluster name test-acc-tf-c-1754508436921385576. API error detail (503 Service
2025-05-01T05:01:53.6308919Z         Unavailable) failed to decode response body: undefined response type
2025-05-01T05:01:57.6934211Z    test_name=TestAccOutageSimulationCluster_SingleRegion_basic test_terraform_path=/home/runner/work/_temp/c08d65e5-a0b8-4840-9d07-439027ed7dce/terraform test_working_directory=/tmp/plugintest102509122
2025-05-01T05:06:15.2901408Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (861.52s)
```

  - PASS 23 minutes
  - PASS 23 minutes
  - PASS 22 minutes
- 2025-05-02 PASS 25 minutes
- 2025-05-03 PASS 21 minutes
- 2025-05-04 PASS 23 minutes
- 2025-05-05 PASS 24 minutes
- 2025-05-06 PASS 24 minutes
- 2025-05-07 PASS 22 minutes
- 2025-05-08 PASS 25 minutes
- 2025-05-09 PASS 25 minutes
- 2025-05-10 PASS 23 minutes
- 2025-05-11

### Error 2025-05-11T00:29:40+00:00
```
2025-05-11T00:29:40.6864358Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2025-05-11T00:29:40.6865908Z     resource_cluster_outage_simulation_migration_test.go:10: Creating execution project: test-acc-tf-p-3787798800185954898
2025-05-11T00:29:41.0083168Z     resource_cluster_outage_simulation_migration_test.go:10: 
2025-05-11T00:29:41.0084874Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:41.0088291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:41.0091563Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:41.0094141Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_cluster_outage_simulation_test.go:31
2025-05-11T00:29:41.0098199Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_cluster_outage_simulation_migration_test.go:10
2025-05-11T00:29:41.0099426Z         	Error:      	Received unexpected error:
2025-05-11T00:29:41.0100313Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:41.0100934Z         	Test:       	TestMigOutageSimulationCluster_SingleRegion_basic
2025-05-11T00:29:41.0101959Z         	Messages:   	Project creation failed: test-acc-tf-p-3787798800185954898, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:41.0102702Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (0.32s)
```

- 2025-05-12 PASS 22 minutes
- 2025-05-13
  - PASS 25 minutes
  - PASS 24 minutes
- 2025-05-14 PASS 25 minutes
- 2025-05-15 PASS 26 minutes
- 2025-05-16 PASS 23 minutes
- 2025-05-17 PASS 23 minutes
- 2025-05-18 PASS 23 minutes
- 2025-05-19 PASS 22 minutes
- 2025-05-20 PASS 21 minutes
- 2025-05-21 PASS 23 minutes
- 2025-05-22 PASS 24 minutes
- 2025-05-23 PASS 23 minutes
- 2025-05-24 PASS 22 minutes
- 2025-05-25 PASS 24 minutes
- 2025-05-26 PASS 25 minutes
- 2025-05-27 PASS 24 minutes
- 2025-05-28
  - PASS 36 minutes
  - PASS 26 minutes
- 2025-05-29 PASS 29 minutes
- 2025-05-30
  - FAIL an hour

### Error 2025-05-30T00:37:52+00:00
```
2025-05-30T00:37:52.0837906Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2025-05-30T00:37:52.0844689Z     resource_cluster_outage_simulation_migration_test.go:10: Creating execution project: test-acc-tf-p-7337394579462987771
2025-05-30T00:37:54.2170164Z === CONT  TestMigOutageSimulationCluster_SingleRegion_basic
2025-05-30T00:37:59.2183475Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-05-30T00:37:59.2185248Z     pre_check.go:40: Time before creating cluster: 2025-05-30T00:37:59.216859232Z, ProjectID: 6838fde0633e350548a5825a, Cluster name: test-acc-tf-c-4198222788254270585
2025-05-30T01:40:24.5903839Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-05-30T01:40:24.5905381Z     resource_cluster_outage_simulation_migration_test.go:10: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-30T01:40:24.5906377Z         
2025-05-30T01:40:24.5908039Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (6838fde0633e350548a5825a), Cluster (test-acc-tf-c-4198222788254270585): context deadline exceeded
2025-05-30T01:40:24.5909447Z         
2025-05-30T01:40:24.6017548Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (3752.52s)
```

  - PASS 23 minutes
- 2025-05-31 PASS 23 minutes
- 2025-06-01
  - PASS 21 minutes
  - PASS 22 minutes
  - PASS 22 minutes
  - PASS 22 minutes
  - PASS 22 minutes
  - PASS 23 minutes
- 2025-06-02
  - PASS 23 minutes
  - PASS 24 minutes
  - PASS 23 minutes
- 2025-06-03 PASS 22 minutes
- 2025-06-04 PASS 25 minutes
- 2025-06-05

### Error 2025-06-05T00:28:41+00:00
```
2025-06-05T00:28:41.6925930Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2025-06-05T00:28:41.6926859Z     resource_cluster_outage_simulation_migration_test.go:10: Creating execution project: test-acc-tf-p-1037984530584151612
2025-06-05T00:28:45.5775769Z === CONT  TestMigOutageSimulationCluster_SingleRegion_basic
2025-06-05T00:28:50.5820652Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-06-05T00:28:50.5822955Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:28:50.581446709Z, ProjectID: 6840e4b9161ca93c1f051d06, Cluster name: test-acc-tf-c-487810405676557839
2025-06-05T00:31:53.8781485Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-06-05T00:31:53.8783802Z     resource_cluster_outage_simulation_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:31:53.8784567Z         
2025-06-05T00:31:53.8787785Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9161ca93c1f051d06/clusters/test-acc-tf-c-487810405676557839 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:53.8789269Z         
2025-06-05T00:31:53.8789655Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:31:53.8790366Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:31:53.8791020Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:31:53.8791369Z         
2025-06-05T00:31:54.0581844Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (192.36s)
```

- 2025-06-06 PASS 23 minutes
- 2025-06-07 PASS 25 minutes
- 2025-06-08 PASS 23 minutes
- 2025-06-09 PASS 22 minutes
- 2025-06-10 PASS 33 minutes
- 2025-06-11
  - PASS 24 minutes
  - PASS 22 minutes
- 2025-06-12 PASS 23 minutes
- 2025-06-13 PASS 25 minutes
- 2025-06-14 PASS 25 minutes
- 2025-06-15 PASS 26 minutes
- 2025-06-16 PASS 23 minutes
- 2025-06-17 PASS 24 minutes
- 2025-06-18 PASS 23 minutes
- 2025-06-19 PASS 30 minutes
- 2025-06-20 PASS 23 minutes
- 2025-06-21 PASS 24 minutes
- 2025-06-22 PASS 25 minutes
- 2025-06-23 PASS 22 minutes
- 2025-06-24 PASS 22 minutes
- 2025-06-25 PASS 22 minutes
- 2025-06-26 PASS 22 minutes
- 2025-06-27 PASS 22 minutes
- 2025-06-28 PASS 21 minutes
- 2025-06-29 PASS 23 minutes
- 2025-06-30 PASS 25 minutes
- 2025-07-01
  - PASS 22 minutes
  - PASS 23 minutes
  - PASS 23 minutes
  - PASS 21 minutes
  - PASS 23 minutes
  - PASS 22 minutes
- 2025-07-02 PASS 25 minutes
- 2025-07-03 PASS 23 minutes
- 2025-07-04 PASS 24 minutes
- 2025-07-05 PASS 21 minutes
- 2025-07-06 PASS 22 minutes
- 2025-07-07 PASS 22 minutes
- 2025-07-08 PASS 24 minutes
- 2025-07-09 PASS 21 minutes
- 2025-07-10 PASS 22 minutes
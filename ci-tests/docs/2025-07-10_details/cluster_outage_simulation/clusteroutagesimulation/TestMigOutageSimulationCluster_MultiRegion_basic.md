# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_MultiRegion_basic Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 2)
Success rate: 98.25%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029410000) |  | qa |  | 0.00s
[2025-06-05 00:28](#error-2025-06-05t0028450000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4b9161ca93c1f051d06/clusters/test-acc-tf-c-6697572253799224346 | dev | flaky_500 | 203.01s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 28 minutes
- 2025-04-13 PASS 32 minutes
- 2025-04-14 PASS 26 minutes
- 2025-04-15 PASS 27 minutes
- 2025-04-16
  - PASS 26 minutes
  - PASS 32 minutes
- 2025-04-17 PASS 24 minutes
- 2025-04-18 PASS 31 minutes
- 2025-04-19 PASS 27 minutes
- 2025-04-20 PASS 28 minutes
- 2025-04-21 PASS 27 minutes
- 2025-04-22 PASS 26 minutes
- 2025-04-23 PASS 30 minutes
- 2025-04-24 PASS 27 minutes
- 2025-04-25 PASS 27 minutes
- 2025-04-26 PASS 30 minutes
- 2025-04-27 PASS 31 minutes
- 2025-04-28 PASS 22 minutes
- 2025-04-29 PASS 25 minutes
- 2025-04-30
  - PASS 31 minutes
  - PASS 29 minutes
- 2025-05-01
  - PASS 27 minutes
  - PASS 28 minutes
  - PASS 23 minutes
  - PASS 26 minutes
  - PASS 27 minutes
  - PASS 27 minutes
  - PASS 23 minutes
- 2025-05-02 PASS 23 minutes
- 2025-05-03 PASS 25 minutes
- 2025-05-04 PASS 24 minutes
- 2025-05-05 PASS 27 minutes
- 2025-05-06 PASS 27 minutes
- 2025-05-07 PASS 25 minutes
- 2025-05-08 PASS 24 minutes
- 2025-05-09 PASS 24 minutes
- 2025-05-10 PASS 31 minutes
- 2025-05-11

### Error 2025-05-11T00:29:41+00:00
```
2025-05-11T00:29:41.0103414Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2025-05-11T00:29:41.0104732Z     resource_cluster_outage_simulation_migration_test.go:14: Creating execution project: test-acc-tf-p-573519159922599391
2025-05-11T00:29:41.0151000Z     resource_cluster_outage_simulation_migration_test.go:14: 
2025-05-11T00:29:41.0153397Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:41.0156275Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:41.0158517Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:41.0161068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_cluster_outage_simulation_test.go:78
2025-05-11T00:29:41.0163431Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_cluster_outage_simulation_migration_test.go:14
2025-05-11T00:29:41.0164338Z         	Error:      	Received unexpected error:
2025-05-11T00:29:41.0165322Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:41.0165922Z         	Test:       	TestMigOutageSimulationCluster_MultiRegion_basic
2025-05-11T00:29:41.0166932Z         	Messages:   	Project creation failed: test-acc-tf-p-573519159922599391, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:41.0167651Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (0.01s)
```

- 2025-05-12 PASS 30 minutes
- 2025-05-13
  - PASS 29 minutes
  - PASS 27 minutes
- 2025-05-14 PASS 39 minutes
- 2025-05-15 PASS 25 minutes
- 2025-05-16 PASS 25 minutes
- 2025-05-17 PASS 24 minutes
- 2025-05-18 PASS 28 minutes
- 2025-05-19 PASS 26 minutes
- 2025-05-20 PASS 29 minutes
- 2025-05-21 PASS 30 minutes
- 2025-05-22 PASS 22 minutes
- 2025-05-23 PASS 29 minutes
- 2025-05-24 PASS 28 minutes
- 2025-05-25 PASS 29 minutes
- 2025-05-26 PASS 25 minutes
- 2025-05-27 PASS 23 minutes
- 2025-05-28
  - PASS 47 minutes
  - PASS 25 minutes
- 2025-05-29 PASS 26 minutes
- 2025-05-30
  - PASS 41 minutes
  - PASS 24 minutes
- 2025-05-31 PASS 22 minutes
- 2025-06-01
  - PASS 29 minutes
  - PASS 25 minutes
  - PASS 30 minutes
  - PASS 28 minutes
  - PASS 27 minutes
  - PASS 29 minutes
- 2025-06-02
  - PASS 23 minutes
  - PASS 25 minutes
  - PASS 24 minutes
- 2025-06-03 PASS 22 minutes
- 2025-06-04 PASS 22 minutes
- 2025-06-05

### Error 2025-06-05T00:28:45+00:00
```
2025-06-05T00:28:45.5762900Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2025-06-05T00:28:45.5776855Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2025-06-05T00:29:05.5907062Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-06-05T00:29:05.5908460Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:05.590403875Z, ProjectID: 6840e4b9161ca93c1f051d06, Cluster name: test-acc-tf-c-6697572253799224346
2025-06-05T00:31:53.8780767Z    test_name=TestMigOutageSimulationCluster_SingleRegion_basic test_terraform_path=/home/runner/work/_temp/adef3639-125a-4e49-bc62-38a9d8568522/terraform
2025-06-05T00:32:08.4931429Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-06-05T00:32:08.4932119Z     resource_cluster_outage_simulation_migration_test.go:14: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:32:08.4932612Z         
2025-06-05T00:32:08.4934289Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9161ca93c1f051d06/clusters/test-acc-tf-c-6697572253799224346 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:08.4935840Z         
2025-06-05T00:32:08.4936213Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:32:08.4936918Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:32:08.4937571Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:32:08.4937908Z         
2025-06-05T00:32:08.6738746Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (203.10s)
```

- 2025-06-06 PASS 27 minutes
- 2025-06-07 PASS 23 minutes
- 2025-06-08 PASS 27 minutes
- 2025-06-09 PASS 27 minutes
- 2025-06-10 PASS 38 minutes
- 2025-06-11
  - PASS 22 minutes
  - PASS 29 minutes
- 2025-06-12 PASS 26 minutes
- 2025-06-13 PASS 30 minutes
- 2025-06-14 PASS 33 minutes
- 2025-06-15 PASS 24 minutes
- 2025-06-16 PASS 32 minutes
- 2025-06-17 PASS 24 minutes
- 2025-06-18 PASS 33 minutes
- 2025-06-19 PASS 46 minutes
- 2025-06-20 PASS 29 minutes
- 2025-06-21 PASS 24 minutes
- 2025-06-22 PASS 27 minutes
- 2025-06-23 PASS 22 minutes
- 2025-06-24 PASS 30 minutes
- 2025-06-25 PASS 24 minutes
- 2025-06-26 PASS 31 minutes
- 2025-06-27 PASS 23 minutes
- 2025-06-28 PASS 24 minutes
- 2025-06-29 PASS 28 minutes
- 2025-06-30 PASS 31 minutes
- 2025-07-01
  - PASS 24 minutes
  - PASS 23 minutes
  - PASS 26 minutes
  - PASS 28 minutes
  - PASS 28 minutes
  - PASS 28 minutes
- 2025-07-02 PASS 23 minutes
- 2025-07-03 PASS 27 minutes
- 2025-07-04 PASS 37 minutes
- 2025-07-05 PASS 29 minutes
- 2025-07-06 PASS 25 minutes
- 2025-07-07 PASS 28 minutes
- 2025-07-08 PASS 25 minutes
- 2025-07-09 PASS 26 minutes
- 2025-07-10 PASS 31 minutes
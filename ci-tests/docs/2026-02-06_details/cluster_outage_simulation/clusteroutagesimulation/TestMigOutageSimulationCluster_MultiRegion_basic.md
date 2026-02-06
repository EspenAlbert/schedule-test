# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_MultiRegion_basic Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 17) FAIL(x 3)
Success rate: 85.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 00:38](#error-2026-02-02t0038330000) |  | dev | timeout | 10817.05s
[2026-02-04 00:35](#error-2026-02-04t0035340000) |  | dev | timeout | 10822.03s
[2026-02-06 00:36](#error-2026-02-06t0036110000) |  | dev | flaky_client | 1366.03s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 50 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 43 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 49 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 53 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 50 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 50 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 50 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 51 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 48 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 51 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:33+00:00
```
2026-02-02T00:38:33.5672867Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2026-02-02T00:38:33.5695945Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2026-02-02T00:38:48.5778771Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2026-02-02T00:38:48.5780246Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:38:48.577384164Z, ProjectID: 697ff207197cc66080b02fe5, Cluster name: test-acc-tf-c-8703830590537417613
2026-02-02T03:38:50.9000167Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2026-02-02T03:38:50.9000721Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:38:50.9001110Z         
2026-02-02T03:38:50.9001352Z         Error: Error in create
2026-02-02T03:38:50.9001591Z         
2026-02-02T03:38:50.9001924Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-02T03:38:50.9002573Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-02T03:38:50.9003193Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-02T03:38:50.9003514Z         
2026-02-02T03:38:50.9003937Z         cluster=test-acc-tf-c-8703830590537417613 didn't reach desired state: IDLE,
2026-02-02T03:38:50.9004376Z         error: context deadline exceeded
2026-02-02T03:38:51.0712064Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (10817.50s)
```

- 2026-02-03: MISSING
- 2026-02-04

### Error 2026-02-04T00:35:34+00:00
```
2026-02-04T00:35:34.4282838Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2026-02-04T00:35:34.4305123Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2026-02-04T00:35:54.4389308Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2026-02-04T00:35:54.4390822Z     pre_check.go:46: Time before creating cluster: 2026-02-04T00:35:54.438679852Z, ProjectID: 698294544e657829c5739105, Cluster name: test-acc-tf-c-2054280282441849037
2026-02-04T03:35:56.6117196Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2026-02-04T03:35:56.6117795Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-02-04T03:35:56.6118213Z         
2026-02-04T03:35:56.6118461Z         Error: Error in create
2026-02-04T03:35:56.6118705Z         
2026-02-04T03:35:56.6119068Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-04T03:35:56.6119802Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-04T03:35:56.6121462Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-04T03:35:56.6122002Z         
2026-02-04T03:35:56.6122749Z         cluster=test-acc-tf-c-2054280282441849037 didn't reach desired state: IDLE,
2026-02-04T03:35:56.6123516Z         error: context deadline exceeded
2026-02-04T03:35:56.7668719Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (10822.34s)
```

- 2026-02-05: MISSING
- 2026-02-06

### Error 2026-02-06T00:36:11+00:00
```
2026-02-06T00:36:11.3192459Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2026-02-06T00:36:11.3215034Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2026-02-06T00:36:36.3305992Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2026-02-06T00:36:36.3310083Z     pre_check.go:46: Time before creating cluster: 2026-02-06T00:36:36.330255622Z, ProjectID: 6985377813125e9acd97d881, Cluster name: test-acc-tf-c-754507269472774624
2026-02-06T00:58:57.4502097Z    test_name=TestMigOutageSimulationCluster_MultiRegion_basic test_terraform_path=/home/runner/work/_temp/1db544dd-00b9-4a5d-b6c3-386705902327/terraform test_working_directory=/tmp/plugintest2217297492 test_step_number=1
2026-02-06T00:58:57.4503565Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-02-06T00:58:57.4504094Z         
2026-02-06T00:58:57.4504616Z         Error: Error in create
2026-02-06T00:58:57.4504928Z         
2026-02-06T00:58:57.4505369Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-06T00:58:57.4506282Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-06T00:58:57.4507341Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-06T00:58:57.4507774Z         
2026-02-06T00:58:57.4508330Z         cluster=test-acc-tf-c-754507269472774624 didn't reach desired state: IDLE,
2026-02-06T00:58:57.4508847Z         error: Get
2026-02-06T00:58:57.4509742Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985377813125e9acd97d881/clusters/test-acc-tf-c-754507269472774624":
2026-02-06T00:58:57.4510638Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-02-06T00:58:57.6198943Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (1366.30s)
```


## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 49 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 53 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 48 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 44 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 54 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 51 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 51 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING

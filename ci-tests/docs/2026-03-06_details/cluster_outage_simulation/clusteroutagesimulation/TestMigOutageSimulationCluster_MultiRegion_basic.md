# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_MultiRegion_basic Test Details
# Found 21 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-06 00:36](#error-2026-02-06t0036110000) |  | dev | flaky_client | 1366.03s

### Timeline
- 2026-02-04: MISSING
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

- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09 PASS 57 minutes
- 2026-02-10: MISSING
- 2026-02-11 PASS 57 minutes
- 2026-02-12: MISSING
- 2026-02-13 PASS 54 minutes
- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16 PASS 54 minutes
- 2026-02-17: MISSING
- 2026-02-18 PASS 58 minutes
- 2026-02-19: MISSING
- 2026-02-20 PASS 56 minutes
- 2026-02-21: MISSING
- 2026-02-22: MISSING
- 2026-02-23 PASS an hour
- 2026-02-24: MISSING
- 2026-02-25 PASS 54 minutes
- 2026-02-26: MISSING
- 2026-02-27 PASS 56 minutes
- 2026-02-28: MISSING
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 51 minutes
  - PASS 52 minutes
- 2026-03-03: MISSING
- 2026-03-04 PASS 50 minutes
- 2026-03-05: MISSING
- 2026-03-06 PASS an hour

## QA Environment
### Timeline
- 2026-02-04 PASS 51 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 49 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 48 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 49 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 50 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 54 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 47 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING

# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_MultiRegion_basic Test Details
# Found 19 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 16) FAIL(x 3)
Success rate: 84.21%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-15 00:33](#error-2025-12-15t0033050000) |  | dev | flaky_client | 756.06s
[2025-12-26 00:31](#error-2025-12-26t0031340000) |  | dev | timeout | 2840.03s
[2026-01-07 00:30](#error-2026-01-07t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928d59b8466ea71ab9b/clusters | dev | flaky_500 | 27.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 42 minutes
  - PASS 48 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 52 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15

### Error 2025-12-15T00:33:05+00:00
```
2025-12-15T00:33:05.9149093Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2025-12-15T00:33:05.9173319Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2025-12-15T00:33:25.9320450Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-12-15T00:33:25.9322413Z     pre_check.go:46: Time before creating cluster: 2025-12-15T00:33:25.931735997Z, ProjectID: 693f573ec539633e0c05f886, Cluster name: test-acc-tf-c-8811783228518102461
2025-12-15T00:45:42.3667045Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-12-15T00:45:42.3668065Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-12-15T00:45:42.3668751Z         
2025-12-15T00:45:42.3669188Z         Error: Error in create
2025-12-15T00:45:42.3669608Z         
2025-12-15T00:45:42.3670239Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-12-15T00:45:42.3671786Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-12-15T00:45:42.3673018Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-12-15T00:45:42.3673629Z         
2025-12-15T00:45:42.3674463Z         cluster=test-acc-tf-c-8811783228518102461 didn't reach desired state: IDLE,
2025-12-15T00:45:42.3675170Z         error: Get
2025-12-15T00:45:42.3676763Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/693f573ec539633e0c05f886/clusters/test-acc-tf-c-8811783228518102461":
2025-12-15T00:45:42.3678094Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-12-15T00:45:42.5255788Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (756.61s)
```

- 2025-12-16: MISSING
- 2025-12-17 PASS 50 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 53 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 51 minutes
- 2025-12-23: MISSING
- 2025-12-24
  - PASS 51 minutes
  - PASS 46 minutes
- 2025-12-25: MISSING
- 2025-12-26

### Error 2025-12-26T00:31:34+00:00
```
2025-12-26T00:31:34.1167121Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2025-12-26T00:31:34.1195098Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2025-12-26T00:31:59.1306982Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-12-26T00:31:59.1308904Z     pre_check.go:46: Time before creating cluster: 2025-12-26T00:31:59.130393603Z, ProjectID: 694dd7633c56b04a86bfed40, Cluster name: test-acc-tf-c-6517404314350659598
2025-12-26T01:18:54.4023219Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-12-26T01:18:54.4024603Z     resource_migration_test.go:16: Error running post-test destroy, there may be dangling resources: exit status 1
2025-12-26T01:18:54.4025464Z         
2025-12-26T01:18:54.4027499Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (694dd7633c56b04a86bfed40), Cluster (test-acc-tf-c-6517404314350659598): timeout while waiting for state to become 'DELETED' (timeout: 25m0s)
2025-12-26T01:18:54.4028919Z         
2025-12-26T01:18:54.4122791Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (2840.29s)
```

- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 48 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 49 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 50 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:30:35+00:00
```
2026-01-07T00:30:35.1355032Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2026-01-07T00:30:35.1378735Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2026-01-07T00:31:00.1495318Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2026-01-07T00:31:00.1497131Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:31:00.14921664Z, ProjectID: 695da928d59b8466ea71ab9b, Cluster name: test-acc-tf-c-7172168438386741974
2026-01-07T00:31:02.3426364Z    test_name=TestMigOutageSimulationCluster_MultiRegion_basic test_terraform_path=/home/runner/work/_temp/a896fadb-8253-4c26-a06b-ba4b15439ff9/terraform test_working_directory=/tmp/plugintest3528644876 test_step_number=1
2026-01-07T00:31:02.3427509Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:31:02.3427914Z         
2026-01-07T00:31:02.3428176Z         Error: Error in create
2026-01-07T00:31:02.3428422Z         
2026-01-07T00:31:02.3428814Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:31:02.3429564Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:31:02.3430258Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:31:02.3430587Z         
2026-01-07T00:31:02.3431024Z         cluster name: test-acc-tf-c-7172168438386741974, API error details:
2026-01-07T00:31:02.3431734Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928d59b8466ea71ab9b/clusters
2026-01-07T00:31:02.3432455Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:02.3433057Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:02.3433456Z         BadRequestDetail: 
2026-01-07T00:31:02.5005977Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (27.36s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 46 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 46 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 48 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 46 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 49 minutes

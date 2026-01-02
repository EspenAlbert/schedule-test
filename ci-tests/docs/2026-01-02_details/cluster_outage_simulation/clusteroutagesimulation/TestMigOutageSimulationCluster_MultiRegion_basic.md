# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_MultiRegion_basic Test Details
# Found 19 TestRuns in dev, qa from 2025-12-05 to 2026-01-02 from master branch: 1 unique tests, PASS(x 16) FAIL(x 3)
Success rate: 84.21%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-05 00:30](#error-2025-12-05t0030330000) |  | dev | timeout | 7931.04s
[2025-12-15 00:33](#error-2025-12-15t0033050000) |  | dev | flaky_client | 756.06s
[2025-12-26 00:31](#error-2025-12-26t0031340000) |  | dev | timeout | 2840.03s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05

### Error 2025-12-05T00:30:33+00:00
```
2025-12-05T00:30:33.7155026Z === RUN   TestMigOutageSimulationCluster_MultiRegion_basic
2025-12-05T00:30:33.7176808Z === CONT  TestMigOutageSimulationCluster_MultiRegion_basic
2025-12-05T00:30:53.7313480Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-12-05T00:30:53.7315549Z     pre_check.go:46: Time before creating cluster: 2025-12-05T00:30:53.730960197Z, ProjectID: 693227a76643ab70ba784fb4, Cluster name: test-acc-tf-c-4019379972456189752
2025-12-05T02:42:45.0640153Z === NAME  TestMigOutageSimulationCluster_MultiRegion_basic
2025-12-05T02:42:45.0641047Z     resource_migration_test.go:16: Error running post-test destroy, there may be dangling resources: exit status 1
2025-12-05T02:42:45.0641548Z         
2025-12-05T02:42:45.0642693Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (693227a76643ab70ba784fb4), Cluster (test-acc-tf-c-4019379972456189752): timeout while waiting for state to become 'DELETED' (timeout: 25m0s)
2025-12-05T02:42:45.0643499Z         
2025-12-05T02:42:45.0737744Z --- FAIL: TestMigOutageSimulationCluster_MultiRegion_basic (7931.36s)
```

- 2025-12-06: MISSING
- 2025-12-07: MISSING
- 2025-12-08 PASS 45 minutes
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

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 45 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 50 minutes
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

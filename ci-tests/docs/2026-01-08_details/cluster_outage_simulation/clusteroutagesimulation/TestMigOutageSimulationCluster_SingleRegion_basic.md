# cluster_outage_simulation/clusteroutagesimulation/TestMigOutageSimulationCluster_SingleRegion_basic Test Details
# Found 19 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 16) FAIL(x 3)
Success rate: 84.21%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-15 00:33](#error-2025-12-15t0033020000) |  | dev | flaky_client | 2679.03s
[2026-01-07 00:30](#error-2026-01-07t0030310000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928d59b8466ea71ab9b/clusters/test-acc-tf-c-5607185691887595111 | dev | flaky_500 | 41.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 44 minutes
  - PASS 43 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 42 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15

### Error 2025-12-15T00:33:02+00:00
```
2025-12-15T00:33:02.5218660Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2025-12-15T00:33:02.5220056Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-443624120624179773
2025-12-15T00:33:05.9171221Z === CONT  TestMigOutageSimulationCluster_SingleRegion_basic
2025-12-15T00:33:15.9250705Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-12-15T00:33:15.9252535Z     pre_check.go:46: Time before creating cluster: 2025-12-15T00:33:15.924757833Z, ProjectID: 693f573ec539633e0c05f886, Cluster name: test-acc-tf-c-7049872054886188578
2025-12-15T00:50:06.8118604Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-12-15T00:50:06.8119363Z     resource_migration_test.go:11: Step 1/2 error: Error running post-apply non-refresh plan: exit status 1
2025-12-15T00:50:06.8119880Z         
2025-12-15T00:50:06.8122050Z         Error: error getting MongoDB Atlas Cluster Outage Simulation for Project (693f573ec539633e0c05f886), Cluster (test-acc-tf-c-7049872054886188578): Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/693f573ec539633e0c05f886/clusters/test-acc-tf-c-7049872054886188578/outageSimulation": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-12-15T00:50:06.8123309Z         
2025-12-15T00:50:06.8123713Z           with data.mongodbatlas_cluster_outage_simulation.test,
2025-12-15T00:50:06.8124450Z           on terraform_plugin_test.tf line 50, in data "mongodbatlas_cluster_outage_simulation" "test":
2025-12-15T00:50:06.8125431Z           50: 			data "mongodbatlas_cluster_outage_simulation" "test" {
2025-12-15T00:50:06.8125768Z         
2025-12-15T01:17:41.8359037Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (2679.31s)
```

- 2025-12-16: MISSING
- 2025-12-17 PASS 42 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 43 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 45 minutes
- 2025-12-23: MISSING
- 2025-12-24
  - PASS 43 minutes
  - PASS 43 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 42 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 43 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 43 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 42 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:30:31+00:00
```
2026-01-07T00:30:31.8065306Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2026-01-07T00:30:31.8068794Z     resource_migration_test.go:11: Creating execution project (1): test-acc-tf-p-6506544591571144179
2026-01-07T00:30:35.1375310Z === CONT  TestMigOutageSimulationCluster_SingleRegion_basic
2026-01-07T00:30:40.1417744Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2026-01-07T00:30:40.1419850Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:30:40.141482384Z, ProjectID: 695da928d59b8466ea71ab9b, Cluster name: test-acc-tf-c-5607185691887595111
2026-01-07T00:31:12.9622277Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2026-01-07T00:31:12.9622885Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:31:12.9623282Z         
2026-01-07T00:31:12.9623549Z         Error: Error in create
2026-01-07T00:31:12.9623799Z         
2026-01-07T00:31:12.9624180Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:31:12.9625172Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:31:12.9625862Z           15: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:31:12.9626193Z         
2026-01-07T00:31:12.9626674Z         cluster=test-acc-tf-c-5607185691887595111 didn't reach desired state: IDLE,
2026-01-07T00:31:12.9627077Z         error:
2026-01-07T00:31:12.9627848Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928d59b8466ea71ab9b/clusters/test-acc-tf-c-5607185691887595111
2026-01-07T00:31:12.9628715Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:12.9629329Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:12.9629725Z         BadRequestDetail: 
2026-01-07T00:31:13.1156608Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (41.31s)
```

- 2026-01-08: MISSING

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-28 00:34](#error-2025-12-28t0034550000) |  | qa | timeout | 2389.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 41 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 40 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28

### Error 2025-12-28T00:34:55+00:00
```
2025-12-28T00:34:55.7031546Z === RUN   TestMigOutageSimulationCluster_SingleRegion_basic
2025-12-28T00:34:55.7032660Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-942952621386209520
2025-12-28T00:34:58.8466412Z === CONT  TestMigOutageSimulationCluster_SingleRegion_basic
2025-12-28T00:35:03.8508504Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-12-28T00:35:03.8512471Z     pre_check.go:46: Time before creating cluster: 2025-12-28T00:35:03.850517242Z, ProjectID: 69507b2f9072aa22167ab01d, Cluster name: test-acc-tf-c-2658599620897909854
2025-12-28T01:14:45.1266821Z === NAME  TestMigOutageSimulationCluster_SingleRegion_basic
2025-12-28T01:14:45.1267785Z     resource_migration_test.go:11: Error running post-test destroy, there may be dangling resources: exit status 1
2025-12-28T01:14:45.1268536Z         
2025-12-28T01:14:45.1270195Z         Error: error ending MongoDB Atlas Cluster Outage Simulation for Project (69507b2f9072aa22167ab01d), Cluster (test-acc-tf-c-2658599620897909854): timeout while waiting for state to become 'DELETED' (timeout: 25m0s)
2025-12-28T01:14:45.1270942Z         
2025-12-28T01:14:45.1328724Z --- FAIL: TestMigOutageSimulationCluster_SingleRegion_basic (2389.43s)
```

- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 40 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 41 minutes

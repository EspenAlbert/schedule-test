# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pausedToUnpaused Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 42) FAIL(x 2)
Success rate: 95.45%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-09 00:27](#error-2025-10-09t0027240000) | OPERATION_INVALID_UNHEALTHY_NODES /api/atlas/v2/groups/68e70169c2a3cd1693045abd/clusters/test-acc-tf-c-6939515114978947261 | dev | 8852.02s
[2025-10-14 00:27](#error-2025-10-14t0027350000) |  | dev | 45.08s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 29 minutes
- 2025-09-24 PASS 28 minutes
- 2025-09-25 PASS 27 minutes
- 2025-09-26 PASS 24 minutes
- 2025-09-27 PASS 27 minutes
- 2025-09-28 PASS 26 minutes
- 2025-09-29
  - PASS 33 minutes
  - PASS 22 minutes
- 2025-09-30
  - PASS 28 minutes
  - PASS 26 minutes
  - PASS 27 minutes
  - PASS 24 minutes
  - PASS 22 minutes
- 2025-10-01
  - PASS 24 minutes
  - PASS 23 minutes
  - PASS 31 minutes
  - PASS 24 minutes
  - PASS 35 minutes
  - PASS 24 minutes
  - PASS 33 minutes
  - PASS 25 minutes
- 2025-10-02 PASS 29 minutes
- 2025-10-03 PASS 26 minutes
- 2025-10-04 PASS 31 minutes
- 2025-10-05 PASS 25 minutes
- 2025-10-06 PASS 25 minutes
- 2025-10-07 PASS 25 minutes
- 2025-10-08 PASS 27 minutes
- 2025-10-09

### Error 2025-10-09T00:27:24+00:00
```
2025-10-09T00:27:24.8839571Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-10-09T00:35:20.1644127Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-10-09T00:35:40.1630589Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-10-09T00:35:40.1632783Z     pre_check.go:36: Time before creating cluster: 2025-10-09T00:35:40.162764866Z, ProjectID: 68e70169c2a3cd1693045abd, Cluster name: test-acc-tf-c-6939515114978947261
2025-10-09T03:02:52.3126688Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-10-09T03:02:52.3128077Z     resource_test.go:263: Step 1/5 error: Error running apply: exit status 1
2025-10-09T03:02:52.3128558Z         
2025-10-09T03:02:52.3128881Z         Error: Error in pause after create
2025-10-09T03:02:52.3129236Z         
2025-10-09T03:02:52.3129556Z           with mongodbatlas_advanced_cluster.test,
2025-10-09T03:02:52.3130955Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-09T03:02:52.3131652Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-09T03:02:52.3131996Z         
2025-10-09T03:02:52.3132469Z         cluster name: test-acc-tf-c-6939515114978947261, API error details:
2025-10-09T03:02:52.3133639Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e70169c2a3cd1693045abd/clusters/test-acc-tf-c-6939515114978947261
2025-10-09T03:02:52.3134499Z         PATCH: HTTP 400 Bad Request (Error code: "OPERATION_INVALID_UNHEALTHY_NODES")
2025-10-09T03:02:52.3135135Z         Detail: The operation cannot begin because monitoring indicates these nodes
2025-10-09T03:02:52.3135623Z         are not in the primary or secondary state:
2025-10-09T03:02:52.3136055Z         atlas-ovk1pd-shard-00-02.xdpmw2.mongodb-dev.net,
2025-10-09T03:02:52.3136501Z         atlas-ovk1pd-shard-00-01.xdpmw2.mongodb-dev.net,
2025-10-09T03:02:52.3136936Z         atlas-ovk1pd-shard-00-00.xdpmw2.mongodb-dev.net,
2025-10-09T03:02:52.3137868Z         atlas-ovk1pd-shard-00-03.xdpmw2.mongodb-dev.net. Reason: Bad Request. Params:
2025-10-09T03:02:52.3138881Z         [atlas-ovk1pd-shard-00-02.xdpmw2.mongodb-dev.net,
2025-10-09T03:02:52.3139344Z         atlas-ovk1pd-shard-00-01.xdpmw2.mongodb-dev.net,
2025-10-09T03:02:52.3139779Z         atlas-ovk1pd-shard-00-00.xdpmw2.mongodb-dev.net,
2025-10-09T03:02:52.3140316Z         atlas-ovk1pd-shard-00-03.xdpmw2.mongodb-dev.net], BadRequestDetail: 
2025-10-09T03:02:52.3657472Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (8852.20s)
```

- 2025-10-10 PASS 29 minutes
- 2025-10-11 PASS 28 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 28 minutes
- 2025-10-14

### Error 2025-10-14T00:27:35+00:00
```
2025-10-14T00:27:35.7984416Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-10-14T00:29:30.8086603Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-10-14T00:30:15.8008158Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-10-14T00:30:15.8009417Z     pre_check.go:36: Time before creating cluster: 2025-10-14T00:30:15.800283686Z, ProjectID: 68ed98f423d6454f35a937f2, Cluster name: test-acc-tf-c-6948571456900984048
2025-10-14T00:30:16.5548876Z   
2025-10-14T00:30:16.5549323Z     resource_test.go:263: Step 1/5 error: Error running apply: exit status 1
2025-10-14T00:30:16.5549665Z         
2025-10-14T00:30:16.5549927Z         Error: Error in create
2025-10-14T00:30:16.5550200Z         
2025-10-14T00:30:16.5550509Z           with mongodbatlas_advanced_cluster.test,
2025-10-14T00:30:16.5551158Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-14T00:30:16.5551853Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-14T00:30:16.5552145Z         
2025-10-14T00:30:16.5552519Z         cluster name: test-acc-tf-c-6948571456900984048, API error details:
2025-10-14T00:30:16.5553132Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ed98f423d6454f35a937f2/clusters
2025-10-14T00:30:16.5553621Z         POST: HTTP 403 Forbidden (Error code:
2025-10-14T00:30:16.5554074Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-14T00:30:16.5554749Z         Configuration. Contains selections that are unavailable due to your
2025-10-14T00:30:16.5555284Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-14T00:30:16.5555657Z         BadRequestDetail: 
2025-10-14T00:30:16.5971842Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (45.79s)
```

- 2025-10-15 PASS 25 minutes
- 2025-10-16 PASS 36 minutes
- 2025-10-17 PASS 27 minutes
- 2025-10-18 PASS 24 minutes
- 2025-10-19 PASS 24 minutes
- 2025-10-20
  - PASS an hour
  - PASS 23 minutes
- 2025-10-21 PASS 26 minutes
- 2025-10-22
  - PASS 36 minutes
  - PASS 25 minutes
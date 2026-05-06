# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:46](#error-2026-04-07t0046590000) |  | dev | timeout | 11851.02s
[2026-04-16 00:51](#error-2026-04-16t0051230000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e033621ec945fedc73f04c/clusters | dev | out_of_capacity | 10.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:46:59+00:00
```
2026-04-07T00:46:59.0534641Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-04-07T00:48:53.8002107Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-04-07T04:06:24.6870068Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-04-07T04:06:24.6871020Z     resource_test.go:125: Step 2/3 error: Error running apply: exit status 1
2026-04-07T04:06:24.6871428Z         
2026-04-07T04:06:24.6871865Z         Error: Error in delete
2026-04-07T04:06:24.6872225Z         
2026-04-07T04:06:24.6872690Z         cluster=test-acc-tf-c-5439671112907314705 didn't reach desired state:
2026-04-07T04:06:24.6873478Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2026-04-07T04:06:24.6873959Z         state: 'DELETING', timeout: 3h0m0s)
2026-04-07T04:06:25.1030154Z    test_name=TestAccClusterAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/c220ded5-e5bd-48d4-b24e-d60744dcbe91/terraform
2026-04-07T04:06:25.1031146Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:06:25.1031606Z         
2026-04-07T04:06:25.1031865Z         Error: Error in delete
2026-04-07T04:06:25.1032115Z         
2026-04-07T04:06:25.1032533Z         cluster name: test-acc-tf-c-5439671112907314705, API error details:
2026-04-07T04:06:25.1033407Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d4547a3fd310071a846070/clusters/test-acc-tf-c-5439671112907314705
2026-04-07T04:06:25.1034075Z         DELETE: HTTP 400 Bad Request (Error code:
2026-04-07T04:06:25.1034541Z         "CLUSTER_ALREADY_REQUESTED_DELETION") Detail: The cluster
2026-04-07T04:06:25.1035140Z         test-acc-tf-c-5439671112907314705 has already been requested for deletion.
2026-04-07T04:06:25.1036012Z         Reason: Bad Request. Params: [test-acc-tf-c-5439671112907314705],
2026-04-07T04:06:25.1036443Z         BadRequestDetail: 
2026-04-07T04:06:25.1036834Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (11851.25s)
```

- 2026-04-08 PASS 47 minutes
- 2026-04-09 PASS 54 minutes
- 2026-04-10 PASS an hour
- 2026-04-11 PASS 37 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 45 minutes
- 2026-04-14 PASS 40 minutes
- 2026-04-15 PASS 44 minutes
- 2026-04-16

### Error 2026-04-16T00:51:23+00:00
```
2026-04-16T00:51:23.5132590Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-04-16T00:54:54.3832669Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-04-16T00:55:03.4450159Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-04-16T00:55:03.4450929Z     resource_test.go:125: Step 1/3 error: Error running apply: exit status 1
2026-04-16T00:55:03.4451322Z         
2026-04-16T00:55:03.4451574Z         Error: Error in create
2026-04-16T00:55:03.4451817Z         
2026-04-16T00:55:03.4452145Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:55:03.4452960Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:55:03.4453624Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:55:03.4453954Z         
2026-04-16T00:55:03.4454601Z         cluster name: test-acc-tf-c-2307844294044621602, API error details:
2026-04-16T00:55:03.4455310Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e033621ec945fedc73f04c/clusters
2026-04-16T00:55:03.4456053Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:55:03.4456745Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:55:03.4457267Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:55:04.1956687Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (10.21s)
```

- 2026-04-17 PASS 49 minutes
- 2026-04-18 PASS 50 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 53 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS an hour
- 2026-04-24 PASS 43 minutes
- 2026-04-25 PASS 39 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 43 minutes
- 2026-04-28 PASS 49 minutes
- 2026-04-29 PASS 54 minutes
- 2026-04-30 PASS an hour
- 2026-05-01 PASS 41 minutes
- 2026-05-02 PASS 37 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 45 minutes
- 2026-05-05 PASS an hour
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 39 minutes
  - PASS 36 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 36 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 38 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 49 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 45 minutes
- 2026-05-04 PASS 43 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 44 minutes

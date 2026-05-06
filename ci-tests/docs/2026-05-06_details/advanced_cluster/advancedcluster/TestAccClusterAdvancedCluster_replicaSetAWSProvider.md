# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetAWSProvider Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:46](#error-2026-04-07t0046590000) |  | dev | timeout | 14194.00s
[2026-04-10 00:44](#error-2026-04-10t0044300000) |  | dev | timeout | 11975.03s
[2026-04-16 00:51](#error-2026-04-16t0051230000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032838379397d109d0bb0/clusters | dev | out_of_capacity | 20.09s
[2026-05-05 00:55](#error-2026-05-05t0055420000) |  | dev | timeout | 12314.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:46:59+00:00
```
2026-04-07T00:46:59.0533754Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-04-07T00:48:53.8002807Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-04-07T00:49:48.7896664Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-04-07T00:49:48.7898630Z     pre_check.go:46: Time before creating cluster: 2026-04-07T00:49:48.789421732Z, ProjectID: 69d453a6425cee31650be884, Cluster name: test-acc-tf-c-1283091060175923981
2026-04-07T04:45:27.8262019Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-04-07T04:45:27.8262718Z     resource_test.go:74: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:45:27.8263192Z         
2026-04-07T04:45:27.8263436Z         Error: Error in delete
2026-04-07T04:45:27.8263676Z         
2026-04-07T04:45:27.8264100Z         cluster=test-acc-tf-c-1283091060175923981 didn't reach desired state:
2026-04-07T04:45:27.8264731Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2026-04-07T04:45:27.8265197Z         state: 'DELETING', timeout: 3h0m0s)
2026-04-07T04:45:27.8265611Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (14194.03s)
```

- 2026-04-08 PASS 59 minutes
- 2026-04-09 PASS an hour
- 2026-04-10

### Error 2026-04-10T00:44:30+00:00
```
2026-04-10T00:44:30.2012751Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-04-10T00:46:02.8485563Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-04-10T00:46:52.2408437Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-04-10T00:46:52.2409963Z     pre_check.go:46: Time before creating cluster: 2026-04-10T00:46:52.240527578Z, ProjectID: 69d847eb399332cee384ab3c, Cluster name: test-acc-tf-c-8929187004868246305
2026-04-10T04:03:36.0506592Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-04-10T04:03:36.0507612Z     resource_test.go:74: Step 2/4 error: Error running apply: exit status 1
2026-04-10T04:03:36.0508165Z         
2026-04-10T04:03:36.0508704Z         Error: Error in update
2026-04-10T04:03:36.0508995Z         
2026-04-10T04:03:36.0509558Z           with mongodbatlas_advanced_cluster.test,
2026-04-10T04:03:36.0510600Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-10T04:03:36.0511551Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-10T04:03:36.0511876Z         
2026-04-10T04:03:36.0512441Z         cluster=test-acc-tf-c-8929187004868246305 didn't reach desired state: IDLE,
2026-04-10T04:03:36.0513379Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-04-10T04:03:36.0513846Z         'UPDATING', timeout: 3h0m0s)
2026-04-10T04:05:37.5958680Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11975.33s)
```

- 2026-04-11 PASS 52 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS an hour
- 2026-04-14 PASS 57 minutes
- 2026-04-15 PASS 57 minutes
- 2026-04-16

### Error 2026-04-16T00:51:23+00:00
```
2026-04-16T00:51:23.5131653Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-04-16T00:54:54.1512518Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-04-16T00:55:13.9981562Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-04-16T00:55:13.9983873Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:55:13.997851922Z, ProjectID: 69e032838379397d109d0bb0, Cluster name: test-acc-tf-c-8804662042508464777
2026-04-16T00:55:14.8043839Z   
2026-04-16T00:55:14.8045174Z     resource_test.go:74: Step 1/4 error: Error running apply: exit status 1
2026-04-16T00:55:14.8045865Z         
2026-04-16T00:55:14.8046288Z         Error: Error in create
2026-04-16T00:55:14.8046642Z         
2026-04-16T00:55:14.8047156Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:55:14.8048399Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:55:14.8049541Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:55:14.8050103Z         
2026-04-16T00:55:14.8050858Z         cluster name: test-acc-tf-c-8804662042508464777, API error details:
2026-04-16T00:55:14.8052152Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032838379397d109d0bb0/clusters
2026-04-16T00:55:14.8053463Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:55:14.8054940Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:55:14.8055863Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:55:14.8508284Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (20.86s)
```

- 2026-04-17 PASS 59 minutes
- 2026-04-18 PASS an hour
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS an hour
- 2026-04-22 PASS an hour
- 2026-04-23 PASS an hour
- 2026-04-24 PASS 59 minutes
- 2026-04-25 PASS 55 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS an hour
- 2026-04-28 PASS 59 minutes
- 2026-04-29 PASS an hour
- 2026-04-30 PASS an hour
- 2026-05-01 PASS an hour
- 2026-05-02 PASS 59 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS an hour
- 2026-05-05

### Error 2026-05-05T00:55:42+00:00
```
2026-05-05T00:55:42.5613046Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-05-05T00:59:28.9210044Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-05-05T01:00:18.2949400Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-05-05T01:00:18.2951562Z     pre_check.go:46: Time before creating cluster: 2026-05-05T01:00:18.294649754Z, ProjectID: 69f93fcc6d9c7064609d7eb6, Cluster name: test-acc-tf-c-1612339071772365139
2026-05-05T04:22:10.4577826Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-05-05T04:22:10.4578690Z     resource_test.go:74: Step 2/4 error: Error running apply: exit status 1
2026-05-05T04:22:10.4579199Z         
2026-05-05T04:22:10.4579536Z         Error: Error in update
2026-05-05T04:22:10.4579792Z         
2026-05-05T04:22:10.4580118Z           with mongodbatlas_advanced_cluster.test,
2026-05-05T04:22:10.4580746Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-05T04:22:10.4581645Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-05T04:22:10.4581961Z         
2026-05-05T04:22:10.4582408Z         cluster=test-acc-tf-c-1612339071772365139 didn't reach desired state: IDLE,
2026-05-05T04:22:10.4583000Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-05-05T04:22:10.4583419Z         'UPDATING', timeout: 3h0m0s)
2026-05-05T04:24:43.1237792Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (12314.84s)
```

- 2026-05-06 PASS 2 hours

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 54 minutes
  - PASS 56 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 54 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 54 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS an hour
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 58 minutes
- 2026-05-04 PASS 56 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 58 minutes

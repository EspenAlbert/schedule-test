# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_atlasCluster Test Details
# Found 42 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-28 00:45](#error-2025-09-28t0045020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68d88177e664a15fb5ae594d/clusters | qa | out_of_capacity | 914.10s
[2025-09-30 07:54](#error-2025-09-30t0754050000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68db89bbbb7b8c0d70347b34/clusters | qa | out_of_capacity | 735.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 16 minutes
- 2025-09-24 PASS 17 minutes
- 2025-09-25 PASS 15 minutes
- 2025-09-26 PASS 16 minutes
- 2025-09-27 PASS 17 minutes
- 2025-09-28

### Error 2025-09-28T00:45:02+00:00
```
2025-09-28T00:45:02.1014660Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-09-28T00:45:02.1018412Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-28T00:45:02.1041139Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-28T00:45:02.1042503Z     pre_check.go:32: Time before creating cluster: 2025-09-28T00:29:51.765657499Z, ProjectID: 68d88177e664a15fb5ae594d, Cluster name: test-acc-tf-c-3971850509605678102
2025-09-28T00:45:02.1070891Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-28T00:45:02.1071538Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2025-09-28T00:45:02.1071991Z         
2025-09-28T00:45:02.1072242Z         Error: Error in create
2025-09-28T00:45:02.1072489Z         
2025-09-28T00:45:02.1072844Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-28T00:45:02.1073532Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-28T00:45:02.1074181Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-28T00:45:02.1074529Z         
2025-09-28T00:45:02.1074941Z         cluster name: test-acc-tf-c-3971850509605678102, API error details:
2025-09-28T00:45:02.1075600Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68d88177e664a15fb5ae594d/clusters
2025-09-28T00:45:02.1076448Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-09-28T00:45:02.1077225Z         region is currently out of capacity for the requested instance size. Reason:
2025-09-28T00:45:02.1077726Z         Conflict. Params: [], BadRequestDetail: 
2025-09-28T00:45:02.1078125Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (914.96s)
```

- 2025-09-29 PASS 14 minutes
- 2025-09-30
  - PASS 15 minutes
  - FAIL 12 minutes

### Error 2025-09-30T07:54:05+00:00
```
2025-09-30T07:54:05.3664237Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-09-30T07:54:05.3668514Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-30T07:54:05.3669768Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-30T07:54:05.3671084Z     pre_check.go:32: Time before creating cluster: 2025-09-30T07:41:54.375879388Z, ProjectID: 68db89bbbb7b8c0d70347b34, Cluster name: test-acc-tf-c-9201676691842177787
2025-09-30T07:54:05.3715546Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-30T07:54:05.3716740Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2025-09-30T07:54:05.3717479Z         
2025-09-30T07:54:05.3718183Z         Error: Error in create
2025-09-30T07:54:05.3718614Z         
2025-09-30T07:54:05.3719220Z           with mongodbatlas_advanced_cluster.cluster2,
2025-09-30T07:54:05.3720378Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_advanced_cluster" "cluster2":
2025-09-30T07:54:05.3721395Z           39: resource "mongodbatlas_advanced_cluster" "cluster2" {
2025-09-30T07:54:05.3721959Z         
2025-09-30T07:54:05.3722678Z         cluster name: test-acc-tf-c-3958644362169273890, API error details:
2025-09-30T07:54:05.3723849Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68db89bbbb7b8c0d70347b34/clusters
2025-09-30T07:54:05.3724981Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-09-30T07:54:05.3726301Z         region is currently out of capacity for the requested instance size. Reason:
2025-09-30T07:54:05.3727086Z         Conflict. Params: [], BadRequestDetail: 
2025-09-30T07:54:05.3727691Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (735.58s)
```

  - PASS 12 minutes
  - PASS 12 minutes
- 2025-10-01
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 18 minutes
  - PASS 13 minutes
  - PASS 12 minutes
- 2025-10-02 PASS 12 minutes
- 2025-10-03 PASS 14 minutes
- 2025-10-04 PASS 22 minutes
- 2025-10-05 PASS 30 minutes
- 2025-10-06 PASS 13 minutes
- 2025-10-07 PASS 14 minutes
- 2025-10-08 PASS 15 minutes
- 2025-10-09 PASS 22 minutes
- 2025-10-10 PASS 18 minutes
- 2025-10-11 PASS 16 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 17 minutes
- 2025-10-14 PASS 16 minutes
- 2025-10-15 PASS 13 minutes
- 2025-10-16 PASS 21 minutes
- 2025-10-17 PASS 17 minutes
- 2025-10-18 PASS 15 minutes
- 2025-10-19 PASS 13 minutes
- 2025-10-20
  - PASS 31 minutes
  - PASS 11 minutes
- 2025-10-21 PASS 14 minutes
- 2025-10-22
  - PASS 18 minutes
  - PASS 12 minutes
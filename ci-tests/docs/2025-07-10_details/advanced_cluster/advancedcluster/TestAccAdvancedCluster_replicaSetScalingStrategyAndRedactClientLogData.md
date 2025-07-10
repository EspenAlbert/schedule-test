# advanced_cluster/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 4)
Success rate: 96.52%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030100000) |  | qa |  | 2.00s
[2025-06-05 00:35](#error-2025-06-05t0035390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 7.01s
[2025-06-22 01:03](#error-2025-06-22t0103370000) | UNEXPECTED_ERROR /api/atlas/v2/groups/685756c8ab82446d9bfb37e3/limits | qa | flaky_500 | 1833.04s
[2025-07-06 01:01](#error-2025-07-06t0101220000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869cb2a690ae45e168c00ac/limits | qa | flaky_500 | 1321.09s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 30 minutes
- 2025-04-13 PASS 37 minutes
- 2025-04-14 PASS 30 minutes
- 2025-04-15 PASS 40 minutes
- 2025-04-16
  - PASS 27 minutes
  - PASS 35 minutes
- 2025-04-17 PASS 32 minutes
- 2025-04-18 PASS 30 minutes
- 2025-04-19 PASS 31 minutes
- 2025-04-20 PASS 30 minutes
- 2025-04-21 PASS 29 minutes
- 2025-04-22 PASS 30 minutes
- 2025-04-23 PASS 31 minutes
- 2025-04-24 PASS 27 minutes
- 2025-04-25 PASS 30 minutes
- 2025-04-26 PASS 31 minutes
- 2025-04-27 PASS 34 minutes
- 2025-04-28 PASS 30 minutes
- 2025-04-29 PASS 30 minutes
- 2025-04-30 PASS 36 minutes
- 2025-05-01
  - PASS 31 minutes
  - PASS 33 minutes
  - PASS 30 minutes
  - PASS 31 minutes
  - PASS 30 minutes
  - PASS 29 minutes
  - PASS 29 minutes
- 2025-05-02 PASS 33 minutes
- 2025-05-03 PASS 30 minutes
- 2025-05-04 PASS 31 minutes
- 2025-05-05 PASS 28 minutes
- 2025-05-06 PASS 30 minutes
- 2025-05-07 PASS 31 minutes
- 2025-05-08 PASS 32 minutes
- 2025-05-09 PASS 34 minutes
- 2025-05-10 PASS 29 minutes
- 2025-05-11

### Error 2025-05-11T00:30:10+00:00
```
2025-05-11T00:30:10.8419201Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-05-11T00:30:11.3736374Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-05-11T00:30:13.2819834Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-05-11T00:30:13.2821238Z     resource_advanced_cluster_test.go:1005: Step 1/5 error: Error running apply: exit status 1
2025-05-11T00:30:13.2821979Z         
2025-05-11T00:30:13.2822693Z         Error: error creating project: test-acc-tf-p-2305752764368245192
2025-05-11T00:30:13.2832807Z         
2025-05-11T00:30:13.2833463Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:13.2834654Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:13.2835772Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:13.2841585Z         
2025-05-11T00:30:13.2842467Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:13.2843178Z         type
2025-05-11T00:30:13.2852516Z    test_name=TestAccClusterAdvancedCluster_withTags test_terraform_path=/home/runner/work/_temp/eb045558-e650-44ba-970b-b66bff02e4fd/terraform
2025-05-11T00:30:13.3970489Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (2.03s)
```

- 2025-05-12 PASS 30 minutes
- 2025-05-13
  - PASS 31 minutes
  - PASS 30 minutes
- 2025-05-14 PASS 33 minutes
- 2025-05-15 PASS 34 minutes
- 2025-05-16 PASS 30 minutes
- 2025-05-17 PASS 31 minutes
- 2025-05-18 PASS 33 minutes
- 2025-05-19 PASS 29 minutes
- 2025-05-20 PASS 30 minutes
- 2025-05-21 PASS 29 minutes
- 2025-05-22 PASS 29 minutes
- 2025-05-23 PASS 29 minutes
- 2025-05-24 PASS 29 minutes
- 2025-05-25 PASS 32 minutes
- 2025-05-26 PASS 30 minutes
- 2025-05-27 PASS 29 minutes
- 2025-05-28
  - PASS 29 minutes
  - PASS 29 minutes
  - PASS 31 minutes
- 2025-05-29
  - PASS 37 minutes
  - PASS 30 minutes
- 2025-05-30
  - PASS an hour
  - PASS 33 minutes
- 2025-05-31 PASS 28 minutes
- 2025-06-01
  - PASS 29 minutes
  - PASS 31 minutes
  - PASS 31 minutes
  - PASS 29 minutes
  - PASS 30 minutes
  - PASS 31 minutes
- 2025-06-02
  - PASS 29 minutes
  - PASS 29 minutes
  - PASS 29 minutes
- 2025-06-03 PASS 30 minutes
- 2025-06-04 PASS 30 minutes
- 2025-06-05

### Error 2025-06-05T00:35:39+00:00
```
2025-06-05T00:35:39.9458272Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-05T00:35:42.8647346Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-05T00:35:49.8680765Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-05T00:35:49.8681834Z     resource_advanced_cluster_test.go:1008: Step 1/5 error: Error running apply: exit status 1
2025-06-05T00:35:49.8682385Z         
2025-06-05T00:35:49.8682935Z         Error: error creating project: test-acc-tf-p-5129644388981848344
2025-06-05T00:35:49.8683514Z         
2025-06-05T00:35:49.8683856Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:49.8685532Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:49.8686522Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:49.8686920Z         
2025-06-05T00:35:49.8687522Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:49.8688313Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:49.8688921Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:49.9302281Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (7.09s)
```

- 2025-06-06 PASS 32 minutes
- 2025-06-07 PASS 28 minutes
- 2025-06-08 PASS 31 minutes
- 2025-06-09 PASS 39 minutes
- 2025-06-10 PASS 32 minutes
- 2025-06-11
  - PASS 31 minutes
  - PASS 33 minutes
- 2025-06-12 PASS 30 minutes
- 2025-06-13 PASS 31 minutes
- 2025-06-14 PASS 52 minutes
- 2025-06-15 PASS 31 minutes
- 2025-06-16 PASS 31 minutes
- 2025-06-17 PASS 29 minutes
- 2025-06-18
  - PASS 35 minutes
  - PASS 30 minutes
- 2025-06-19 PASS an hour
- 2025-06-20 PASS 31 minutes
- 2025-06-21 PASS 30 minutes
- 2025-06-22

### Error 2025-06-22T01:03:37+00:00
```
2025-06-22T01:03:37.8782625Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-22T01:05:07.8962864Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-22T01:31:29.3920120Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-22T01:31:29.3920856Z     resource_advanced_cluster_test.go:1008: Step 4/5 error: Error running pre-apply plan: exit status 1
2025-06-22T01:31:29.3921406Z         
2025-06-22T01:31:29.3921990Z         Error: error when getting project properties after create
2025-06-22T01:31:29.3922312Z         
2025-06-22T01:31:29.3922725Z           with mongodbatlas_project.cluster_project,
2025-06-22T01:31:29.3923520Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-22T01:31:29.3924205Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-22T01:31:29.3924501Z         
2025-06-22T01:31:29.3924929Z         error getting project (685756c8ab82446d9bfb37e3): error getting project's
2025-06-22T01:31:29.3925359Z         limits (685756c8ab82446d9bfb37e3):
2025-06-22T01:31:29.3925903Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/685756c8ab82446d9bfb37e3/limits
2025-06-22T01:31:29.3926544Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T01:31:29.3929189Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T01:31:29.3930064Z         BadRequestDetail: 
2025-06-22T01:35:41.2725983Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1833.38s)
```

- 2025-06-23 PASS 27 minutes
- 2025-06-24 PASS 36 minutes
- 2025-06-25 PASS 31 minutes
- 2025-06-26 PASS 33 minutes
- 2025-06-27 PASS 29 minutes
- 2025-06-28 PASS 30 minutes
- 2025-06-29 PASS 31 minutes
- 2025-06-30 PASS 32 minutes
- 2025-07-01
  - PASS 28 minutes
  - PASS 33 minutes
  - PASS 30 minutes
  - PASS 34 minutes
  - PASS 35 minutes
- 2025-07-02 PASS 29 minutes
- 2025-07-03 PASS 30 minutes
- 2025-07-04 PASS 29 minutes
- 2025-07-05 PASS 30 minutes
- 2025-07-06

### Error 2025-07-06T01:01:22+00:00
```
2025-07-06T01:01:22.8596985Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-06T01:02:29.8492135Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-06T01:21:28.2918621Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-06T01:21:28.2919396Z     resource_advanced_cluster_test.go:1008: Step 2/5 error: Error running post-apply refresh plan: exit status 1
2025-07-06T01:21:28.2919877Z         
2025-07-06T01:21:28.2920382Z         Error: error when getting project properties after create
2025-07-06T01:21:28.2920707Z         
2025-07-06T01:21:28.2921034Z           with mongodbatlas_project.cluster_project,
2025-07-06T01:21:28.2921905Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-06T01:21:28.2922635Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-06T01:21:28.2922947Z         
2025-07-06T01:21:28.2923370Z         error getting project (6869cb2a690ae45e168c00ac): error getting project's
2025-07-06T01:21:28.2923814Z         limits (6869cb2a690ae45e168c00ac):
2025-07-06T01:21:28.2924654Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869cb2a690ae45e168c00ac/limits
2025-07-06T01:21:28.2925316Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T01:21:28.2925875Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T01:21:28.2926257Z         BadRequestDetail: 
2025-07-06T01:24:31.7021752Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1321.88s)
```

- 2025-07-07 PASS 28 minutes
- 2025-07-08 PASS 29 minutes
- 2025-07-09 PASS 32 minutes
- 2025-07-10 PASS 29 minutes
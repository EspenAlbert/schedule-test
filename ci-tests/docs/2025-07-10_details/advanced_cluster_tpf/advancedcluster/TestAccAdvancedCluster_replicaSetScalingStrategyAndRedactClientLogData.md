# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 1.08s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 6.04s
[2025-06-29 02:02](#error-2025-06-29t0202460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860911856291349dce6fa21/limits | qa | flaky_500 | 1527.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 30 minutes
- 2025-04-13 PASS 33 minutes
- 2025-04-14 PASS 29 minutes
- 2025-04-15 PASS 54 minutes
- 2025-04-16
  - PASS 29 minutes
  - PASS 32 minutes
- 2025-04-17 PASS 31 minutes
- 2025-04-18 PASS 30 minutes
- 2025-04-19 PASS 30 minutes
- 2025-04-20 PASS 31 minutes
- 2025-04-21 PASS 32 minutes
- 2025-04-22 PASS 29 minutes
- 2025-04-23 PASS 30 minutes
- 2025-04-24 PASS 29 minutes
- 2025-04-25 PASS 31 minutes
- 2025-04-26 PASS 30 minutes
- 2025-04-27 PASS 32 minutes
- 2025-04-28 PASS 29 minutes
- 2025-04-29 PASS 29 minutes
- 2025-04-30 PASS 31 minutes
- 2025-05-01
  - PASS 29 minutes
  - PASS 31 minutes
  - PASS 29 minutes
  - PASS 29 minutes
  - PASS 28 minutes
  - PASS 29 minutes
  - PASS 31 minutes
- 2025-05-02 PASS 33 minutes
- 2025-05-03 PASS 30 minutes
- 2025-05-04 PASS 30 minutes
- 2025-05-05 PASS 27 minutes
- 2025-05-06 PASS 29 minutes
- 2025-05-07 PASS 28 minutes
- 2025-05-08 PASS 30 minutes
- 2025-05-09 PASS 34 minutes
- 2025-05-10 PASS 29 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.8050145Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-05-11T00:30:01.8181121Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-05-11T00:30:01.8196048Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-05-11T00:30:01.8196722Z     resource_advanced_cluster_test.go:1005: Step 1/5 error: Error running apply: exit status 1
2025-05-11T00:30:01.8197133Z         
2025-05-11T00:30:01.8197537Z         Error: error creating project: test-acc-tf-p-4013317142172644802
2025-05-11T00:30:01.8197882Z         
2025-05-11T00:30:01.8198218Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:01.8199013Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:01.8199618Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:01.8199924Z         
2025-05-11T00:30:01.8200511Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:01.8200901Z         type
2025-05-11T00:30:01.8210006Z   
2025-05-11T00:30:01.8287106Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1.84s)
```

- 2025-05-12 PASS 29 minutes
- 2025-05-13
  - PASS 29 minutes
  - PASS 28 minutes
- 2025-05-14 PASS 33 minutes
- 2025-05-15 PASS 32 minutes
- 2025-05-16 PASS 29 minutes
- 2025-05-17 PASS 29 minutes
- 2025-05-18 PASS 30 minutes
- 2025-05-19 PASS 30 minutes
- 2025-05-20 PASS 31 minutes
- 2025-05-21
  - PASS 31 minutes
  - PASS 28 minutes
- 2025-05-22 PASS 29 minutes
- 2025-05-23 PASS 30 minutes
- 2025-05-24 PASS 29 minutes
- 2025-05-25 PASS 32 minutes
- 2025-05-26 PASS 30 minutes
- 2025-05-27 PASS 28 minutes
- 2025-05-28
  - PASS 29 minutes
  - PASS 29 minutes
  - PASS 32 minutes
- 2025-05-29 PASS 36 minutes
- 2025-05-30
  - PASS an hour
  - PASS 36 minutes
- 2025-05-31 PASS 29 minutes
- 2025-06-01
  - PASS 32 minutes
  - PASS 30 minutes
  - PASS 28 minutes
  - PASS 29 minutes
  - PASS 30 minutes
- 2025-06-02
  - PASS 28 minutes
  - PASS 29 minutes
  - PASS 29 minutes
  - PASS 30 minutes
- 2025-06-03 PASS 29 minutes
- 2025-06-04 PASS 29 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5902155Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-05T00:35:38.5954189Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-05T00:35:38.6449771Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-05T00:35:38.6450985Z     resource_advanced_cluster_test.go:1008: Step 1/5 error: Error running apply: exit status 1
2025-06-05T00:35:38.6451698Z         
2025-06-05T00:35:38.6452411Z         Error: error creating project: test-acc-tf-p-9012785754503785633
2025-06-05T00:35:38.6453013Z         
2025-06-05T00:35:38.6453624Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:38.6454838Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:38.6455946Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:38.6456486Z         
2025-06-05T00:35:38.6457299Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:38.6458595Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:38.6459640Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:38.6471518Z    test_name=TestMigAdvancedCluster_symmetricGeoShardedOldSchema test_terraform_path=/home/runner/work/_temp/42fd3dfc-6af2-4f11-bf4e-9449f43560eb/terraform test_working_directory=/tmp/plugintest3818403274
2025-06-05T00:35:38.6485270Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (6.39s)
```

- 2025-06-06 PASS 31 minutes
- 2025-06-07 PASS 29 minutes
- 2025-06-08 PASS 29 minutes
- 2025-06-09 PASS 34 minutes
- 2025-06-10 PASS 41 minutes
- 2025-06-11
  - PASS 31 minutes
  - PASS 32 minutes
- 2025-06-12 PASS 32 minutes
- 2025-06-13 PASS 31 minutes
- 2025-06-14 PASS 29 minutes
- 2025-06-15 PASS 30 minutes
- 2025-06-16 PASS 46 minutes
- 2025-06-17 PASS 31 minutes
- 2025-06-18
  - PASS 31 minutes
  - PASS 28 minutes
- 2025-06-19 PASS 59 minutes
- 2025-06-20 PASS 34 minutes
- 2025-06-21 PASS 30 minutes
- 2025-06-22 PASS 33 minutes
- 2025-06-23 PASS 29 minutes
- 2025-06-24 PASS 31 minutes
- 2025-06-25 PASS 30 minutes
- 2025-06-26
  - PASS 29 minutes
  - PASS 28 minutes
- 2025-06-27 PASS 29 minutes
- 2025-06-28 PASS 30 minutes
- 2025-06-29

### Error 2025-06-29T02:02:46+00:00
```
2025-06-29T02:02:46.2866223Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-29T02:02:46.2901009Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-29T02:02:46.3107069Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-29T02:02:46.3107814Z     resource_advanced_cluster_test.go:1008: Step 2/5 error: Error running post-apply refresh plan: exit status 1
2025-06-29T02:02:46.3108275Z         
2025-06-29T02:02:46.3108641Z         Error: error when getting project properties after create
2025-06-29T02:02:46.3108959Z         
2025-06-29T02:02:46.3109284Z           with mongodbatlas_project.cluster_project,
2025-06-29T02:02:46.3109923Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-29T02:02:46.3110763Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-06-29T02:02:46.3111068Z         
2025-06-29T02:02:46.3111496Z         error getting project (6860911856291349dce6fa21): error getting project's
2025-06-29T02:02:46.3111923Z         limits (6860911856291349dce6fa21):
2025-06-29T02:02:46.3112468Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860911856291349dce6fa21/limits
2025-06-29T02:02:46.3113117Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T02:02:46.3113675Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T02:02:46.3114048Z         BadRequestDetail: 
2025-06-29T02:02:46.3143840Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1527.39s)
```

- 2025-06-30 PASS 31 minutes
- 2025-07-01
  - PASS 30 minutes
  - PASS 28 minutes
  - PASS 29 minutes
  - PASS 30 minutes
  - PASS 57 minutes
- 2025-07-02 PASS 30 minutes
- 2025-07-03 PASS 29 minutes
- 2025-07-04 PASS 30 minutes
- 2025-07-05 PASS 30 minutes
- 2025-07-06 PASS 30 minutes
- 2025-07-07 PASS 29 minutes
- 2025-07-08 PASS 29 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10 PASS 30 minutes
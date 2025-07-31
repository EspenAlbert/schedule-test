# advanced_cluster/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3) TIMEOUT
Success rate: 90.32%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 01:01](#error-2025-07-06t0101220000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869cb2a690ae45e168c00ac/limits | qa | flaky_500 | 1321.09s
[2025-07-11 03:39](#error-2025-07-11t0339380000) |  | dev |  | 6532.00s
[2025-07-20 01:01](#error-2025-07-20t0101020000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c4005426db7026b5b480d/limits | qa | flaky_500 | 1221.08s
[2025-07-23 11:39](#error-2025-07-23t1139480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6880ca3dfc917074205c0eff/limits | qa | flaky_500 | 1424.07s

## Timeline
- 2025-07-01: MISSING
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
- 2025-07-11

### Error 2025-07-11T03:39:38+00:00
```
2025-07-11T03:39:38.5445972Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-11T03:41:02.0285423Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-11T05:29:53.6605858Z 		TestAccAdvancedCluster_moveNotSupportedLegacySchema (1h48m52s)
2025-07-11T05:29:53.6607114Z 		TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1h48m52s)
2025-07-11T05:29:53.6608584Z 		TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1h48m52s)
```

- 2025-07-12 PASS 32 minutes
- 2025-07-13 PASS 38 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 31 minutes
- 2025-07-16 PASS 28 minutes
- 2025-07-17 PASS 32 minutes
- 2025-07-18 PASS 40 minutes
- 2025-07-19 PASS 29 minutes
- 2025-07-20

### Error 2025-07-20T01:01:02+00:00
```
2025-07-20T01:01:02.4832935Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-20T01:01:52.4082305Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-20T01:18:32.3006189Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-20T01:18:32.3007071Z     resource_advanced_cluster_test.go:1008: Step 3/5 error: Error running pre-apply plan: exit status 1
2025-07-20T01:18:32.3007515Z         
2025-07-20T01:18:32.3007942Z         Error: error when getting project properties after create
2025-07-20T01:18:32.3008474Z         
2025-07-20T01:18:32.3008806Z           with mongodbatlas_project.cluster_project,
2025-07-20T01:18:32.3009457Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-20T01:18:32.3010081Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-20T01:18:32.3010395Z         
2025-07-20T01:18:32.3010830Z         error getting project (687c4005426db7026b5b480d): error getting project's
2025-07-20T01:18:32.3011266Z         limits (687c4005426db7026b5b480d):
2025-07-20T01:18:32.3011823Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c4005426db7026b5b480d/limits
2025-07-20T01:18:32.3012475Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T01:18:32.3013031Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T01:18:32.3013405Z         BadRequestDetail: 
2025-07-20T01:22:14.1940201Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1221.79s)
```

- 2025-07-21 PASS 30 minutes
- 2025-07-22 PASS 28 minutes
- 2025-07-23
  - PASS 29 minutes
  - FAIL 23 minutes

### Error 2025-07-23T11:39:48+00:00
```
2025-07-23T11:39:48.6038100Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-23T11:40:40.7036379Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-23T11:57:31.9473758Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-23T11:57:31.9474523Z     resource_advanced_cluster_test.go:1008: Step 2/5 error: Error running post-apply refresh plan: exit status 1
2025-07-23T11:57:31.9475110Z         
2025-07-23T11:57:31.9475583Z         Error: error when getting project properties after create
2025-07-23T11:57:31.9476113Z         
2025-07-23T11:57:31.9476447Z           with mongodbatlas_project.cluster_project,
2025-07-23T11:57:31.9477226Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-23T11:57:31.9478034Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-23T11:57:31.9478350Z         
2025-07-23T11:57:31.9478797Z         error getting project (6880ca3dfc917074205c0eff): error getting project's
2025-07-23T11:57:31.9479245Z         limits (6880ca3dfc917074205c0eff):
2025-07-23T11:57:31.9479814Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6880ca3dfc917074205c0eff/limits
2025-07-23T11:57:31.9480465Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T11:57:31.9481040Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T11:57:31.9481658Z         BadRequestDetail: 
2025-07-23T12:04:25.4214614Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1424.72s)
```

  - PASS 28 minutes
  - PASS 31 minutes
- 2025-07-24 PASS 30 minutes
- 2025-07-25 PASS 30 minutes
- 2025-07-26 PASS 34 minutes
- 2025-07-27 PASS 36 minutes
- 2025-07-28 PASS 39 minutes
- 2025-07-29 PASS 40 minutes
- 2025-07-30 PASS 33 minutes
- 2025-07-31 PASS 39 minutes
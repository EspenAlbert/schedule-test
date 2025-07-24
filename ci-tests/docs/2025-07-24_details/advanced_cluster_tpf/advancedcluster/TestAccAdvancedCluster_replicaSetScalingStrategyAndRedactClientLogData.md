# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 32) FAIL(x 5)
Success rate: 86.49%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 02:02](#error-2025-06-29t0202460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860911856291349dce6fa21/limits | qa | flaky_500 | 1527.04s
[2025-07-10 14:35](#error-2025-07-10t1435500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fc0f0fd583001f9eee8df/limits | qa | flaky_500 | 37.06s
[2025-07-13 02:11](#error-2025-07-13t0211000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6873058a006d8d55bbaa4fc0/limits | qa | flaky_500 | 37.00s
[2025-07-20 03:59](#error-2025-07-20t0359090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3f54426db7026b5b4305/limits | qa | flaky_500 | 1502.05s
[2025-07-23 17:30](#error-2025-07-23t1730380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68810ea4612d2a23cda4b189/limits | qa | flaky_500 | 977.08s

## Timeline
- 2025-06-24: MISSING
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
- 2025-07-10
  - PASS 30 minutes
  - FAIL 37 seconds

### Error 2025-07-10T14:35:50+00:00
```
2025-07-10T14:35:50.7772616Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-10T14:35:50.7811455Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-10T14:35:50.7991250Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-10T14:35:50.7992046Z     resource_advanced_cluster_test.go:1008: Step 1/5 error: Error running apply: exit status 1
2025-07-10T14:35:50.7992461Z         
2025-07-10T14:35:50.7992926Z         Error: error when getting project properties after create
2025-07-10T14:35:50.7993235Z         
2025-07-10T14:35:50.7993671Z           with mongodbatlas_project.cluster_project,
2025-07-10T14:35:50.7994417Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-10T14:35:50.7995077Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-10T14:35:50.7995414Z         
2025-07-10T14:35:50.7996083Z         error getting project (686fc0f0fd583001f9eee8df): error getting project's
2025-07-10T14:35:50.7996535Z         limits (686fc0f0fd583001f9eee8df):
2025-07-10T14:35:50.7997210Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fc0f0fd583001f9eee8df/limits
2025-07-10T14:35:50.7997973Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T14:35:50.7998786Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T14:35:50.7999285Z         BadRequestDetail: 
2025-07-10T14:35:50.8000706Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (37.62s)
```

- 2025-07-11: MISSING
- 2025-07-12 PASS 30 minutes
- 2025-07-13

### Error 2025-07-13T02:11:00+00:00
```
2025-07-13T02:11:00.2210919Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-13T02:11:00.2255536Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-13T02:11:00.2358968Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-13T02:11:00.2359790Z     resource_advanced_cluster_test.go:1008: Step 1/5 error: Error running apply: exit status 1
2025-07-13T02:11:00.2360274Z         
2025-07-13T02:11:00.2360701Z         Error: error when getting project properties after create
2025-07-13T02:11:00.2361015Z         
2025-07-13T02:11:00.2361339Z           with mongodbatlas_project.cluster_project,
2025-07-13T02:11:00.2361966Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-13T02:11:00.2362545Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-13T02:11:00.2362849Z         
2025-07-13T02:11:00.2363269Z         error getting project (6873058a006d8d55bbaa4fc0): error getting project's
2025-07-13T02:11:00.2363844Z         limits (6873058a006d8d55bbaa4fc0):
2025-07-13T02:11:00.2364392Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6873058a006d8d55bbaa4fc0/limits
2025-07-13T02:11:00.2365031Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T02:11:00.2365589Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T02:11:00.2365958Z         BadRequestDetail: 
2025-07-13T02:11:00.2366387Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (37.02s)
```

- 2025-07-14: MISSING
- 2025-07-15 PASS 31 minutes
- 2025-07-16 PASS 31 minutes
- 2025-07-17 PASS 28 minutes
- 2025-07-18 PASS 31 minutes
- 2025-07-19 PASS 31 minutes
- 2025-07-20

### Error 2025-07-20T03:59:09+00:00
```
2025-07-20T03:59:09.1110079Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-20T03:59:09.1134557Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-20T03:59:09.1316170Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-20T03:59:09.1316859Z     resource_advanced_cluster_test.go:1008: Step 4/5 error: Error running pre-apply plan: exit status 1
2025-07-20T03:59:09.1317288Z         
2025-07-20T03:59:09.1317649Z         Error: error when getting project properties after create
2025-07-20T03:59:09.1317962Z         
2025-07-20T03:59:09.1318280Z           with mongodbatlas_project.cluster_project,
2025-07-20T03:59:09.1318912Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-20T03:59:09.1319498Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-20T03:59:09.1319798Z         
2025-07-20T03:59:09.1320212Z         error getting project (687c3f54426db7026b5b4305): error getting project's
2025-07-20T03:59:09.1320641Z         limits (687c3f54426db7026b5b4305):
2025-07-20T03:59:09.1321179Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3f54426db7026b5b4305/limits
2025-07-20T03:59:09.1321824Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T03:59:09.1322371Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T03:59:09.1322740Z         BadRequestDetail: 
2025-07-20T03:59:09.1344857Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1502.50s)
```

- 2025-07-21 PASS 30 minutes
- 2025-07-22 PASS 29 minutes
- 2025-07-23
  - PASS 30 minutes
  - PASS 31 minutes
  - PASS 29 minutes
  - FAIL 16 minutes

### Error 2025-07-23T17:30:38+00:00
```
2025-07-23T17:30:38.7624776Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-23T17:30:38.7688127Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-23T17:30:38.7880888Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-07-23T17:30:38.7881626Z     resource_advanced_cluster_test.go:1008: Step 1/5 error: Error running post-apply refresh plan: exit status 1
2025-07-23T17:30:38.7882089Z         
2025-07-23T17:30:38.7882450Z         Error: error when getting project properties after create
2025-07-23T17:30:38.7882765Z         
2025-07-23T17:30:38.7883096Z           with mongodbatlas_project.cluster_project,
2025-07-23T17:30:38.7883727Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-23T17:30:38.7884309Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-23T17:30:38.7884610Z         
2025-07-23T17:30:38.7885032Z         error getting project (68810ea4612d2a23cda4b189): error getting project's
2025-07-23T17:30:38.7885471Z         limits (68810ea4612d2a23cda4b189):
2025-07-23T17:30:38.7886029Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68810ea4612d2a23cda4b189/limits
2025-07-23T17:30:38.7886677Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T17:30:38.7887231Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T17:30:38.7887602Z         BadRequestDetail: 
2025-07-23T17:30:38.7900573Z   
2025-07-23T17:30:38.7921686Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (977.76s)
```

- 2025-07-24 PASS 30 minutes
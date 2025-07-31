# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 01:46](#error-2025-07-06t0146530000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c9c87267b5775b68563f/limits | qa | flaky_500 | 825.06s
[2025-07-10 14:35](#error-2025-07-10t1435500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fc0ef006d8d55bb9e954d/limits | qa | flaky_500 | 37.00s
[2025-07-13 02:11](#error-2025-07-13t0211000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6873058a006d8d55bbaa5004/limits | qa | flaky_500 | 37.03s
[2025-07-20 03:59](#error-2025-07-20t0359090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3f53426db7026b5b420a/limits | qa | flaky_500 | 956.05s
[2025-07-23 17:30](#error-2025-07-23t1730380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68810ea493a06a13914bc36a/limits | qa | flaky_500 | 923.07s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 14 minutes
- 2025-07-03 PASS 15 minutes
- 2025-07-04 PASS 19 minutes
- 2025-07-05 PASS 15 minutes
- 2025-07-06

### Error 2025-07-06T01:46:53+00:00
```
2025-07-06T01:46:53.5857465Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-07-06T01:46:53.5911754Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-07-06T01:46:53.6022080Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-07-06T01:46:53.6022698Z     resource_advanced_cluster_test.go:664: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-06T01:46:53.6023151Z         
2025-07-06T01:46:53.6023518Z         Error: error when getting project properties after create
2025-07-06T01:46:53.6023832Z         
2025-07-06T01:46:53.6024159Z           with mongodbatlas_project.cluster_project,
2025-07-06T01:46:53.6024800Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-06T01:46:53.6025389Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-06T01:46:53.6025687Z         
2025-07-06T01:46:53.6026113Z         error getting project (6869c9c87267b5775b68563f): error getting project's
2025-07-06T01:46:53.6026577Z         limits (6869c9c87267b5775b68563f):
2025-07-06T01:46:53.6027126Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c9c87267b5775b68563f/limits
2025-07-06T01:46:53.6028102Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T01:46:53.6028669Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T01:46:53.6029044Z         BadRequestDetail: 
2025-07-06T01:46:53.6094927Z --- FAIL: TestAccClusterAdvancedCluster_withTags (825.57s)
```

- 2025-07-07 PASS 14 minutes
- 2025-07-08 PASS 14 minutes
- 2025-07-09 PASS 15 minutes
- 2025-07-10
  - PASS 15 minutes
  - FAIL 37 seconds

### Error 2025-07-10T14:35:50+00:00
```
2025-07-10T14:35:50.7752944Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-07-10T14:35:50.7799110Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-07-10T14:35:50.7866586Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-07-10T14:35:50.7867134Z     resource_advanced_cluster_test.go:664: Step 1/4 error: Error running apply: exit status 1
2025-07-10T14:35:50.7867539Z         
2025-07-10T14:35:50.7867902Z         Error: error when getting project properties after create
2025-07-10T14:35:50.7868216Z         
2025-07-10T14:35:50.7868544Z           with mongodbatlas_project.cluster_project,
2025-07-10T14:35:50.7869179Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-10T14:35:50.7869761Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-10T14:35:50.7870065Z         
2025-07-10T14:35:50.7870495Z         error getting project (686fc0ef006d8d55bb9e954d): error getting project's
2025-07-10T14:35:50.7870943Z         limits (686fc0ef006d8d55bb9e954d):
2025-07-10T14:35:50.7871499Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fc0ef006d8d55bb9e954d/limits
2025-07-10T14:35:50.7872139Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T14:35:50.7872695Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T14:35:50.7873065Z         BadRequestDetail: 
2025-07-10T14:35:50.7885680Z   
2025-07-10T14:35:50.7892906Z --- FAIL: TestAccClusterAdvancedCluster_withTags (37.04s)
```

- 2025-07-11: MISSING
- 2025-07-12 PASS 18 minutes
- 2025-07-13

### Error 2025-07-13T02:11:00+00:00
```
2025-07-13T02:11:00.2192634Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-07-13T02:11:00.2257106Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-07-13T02:11:00.2439329Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-07-13T02:11:00.2439863Z     resource_advanced_cluster_test.go:664: Step 1/4 error: Error running apply: exit status 1
2025-07-13T02:11:00.2440261Z         
2025-07-13T02:11:00.2440618Z         Error: error when getting project properties after create
2025-07-13T02:11:00.2440930Z         
2025-07-13T02:11:00.2441255Z           with mongodbatlas_project.cluster_project,
2025-07-13T02:11:00.2441882Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-13T02:11:00.2442470Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-13T02:11:00.2442770Z         
2025-07-13T02:11:00.2443193Z         error getting project (6873058a006d8d55bbaa5004): error getting project's
2025-07-13T02:11:00.2443620Z         limits (6873058a006d8d55bbaa5004):
2025-07-13T02:11:00.2444159Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6873058a006d8d55bbaa5004/limits
2025-07-13T02:11:00.2444793Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T02:11:00.2445347Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T02:11:00.2445715Z         BadRequestDetail: 
2025-07-13T02:11:00.2446728Z --- FAIL: TestAccClusterAdvancedCluster_withTags (37.30s)
```

- 2025-07-14: MISSING
- 2025-07-15 PASS 15 minutes
- 2025-07-16 PASS 14 minutes
- 2025-07-17 PASS 14 minutes
- 2025-07-18 PASS 14 minutes
- 2025-07-19 PASS 14 minutes
- 2025-07-20

### Error 2025-07-20T03:59:09+00:00
```
2025-07-20T03:59:09.1092032Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-07-20T03:59:09.1147270Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-07-20T03:59:09.1249154Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-07-20T03:59:09.1249763Z     resource_advanced_cluster_test.go:664: Step 3/4 error: Error running post-apply refresh plan: exit status 1
2025-07-20T03:59:09.1250212Z         
2025-07-20T03:59:09.1250571Z         Error: error when getting project properties after create
2025-07-20T03:59:09.1250883Z         
2025-07-20T03:59:09.1251211Z           with mongodbatlas_project.cluster_project,
2025-07-20T03:59:09.1251837Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-20T03:59:09.1252555Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-20T03:59:09.1252961Z         
2025-07-20T03:59:09.1253380Z         error getting project (687c3f53426db7026b5b420a): error getting project's
2025-07-20T03:59:09.1253811Z         limits (687c3f53426db7026b5b420a):
2025-07-20T03:59:09.1254355Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3f53426db7026b5b420a/limits
2025-07-20T03:59:09.1254985Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T03:59:09.1255532Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T03:59:09.1255904Z         BadRequestDetail: 
2025-07-20T03:59:09.1272076Z --- FAIL: TestAccClusterAdvancedCluster_withTags (956.55s)
```

- 2025-07-21 PASS 13 minutes
- 2025-07-22 PASS 13 minutes
- 2025-07-23
  - PASS 13 minutes
  - PASS 17 minutes
  - PASS 14 minutes
  - FAIL 15 minutes

### Error 2025-07-23T17:30:38+00:00
```
2025-07-23T17:30:38.7591924Z === RUN   TestAccClusterAdvancedCluster_withTags
2025-07-23T17:30:38.7663371Z === CONT  TestAccClusterAdvancedCluster_withTags
2025-07-23T17:30:38.7857971Z === NAME  TestAccClusterAdvancedCluster_withTags
2025-07-23T17:30:38.7858583Z     resource_advanced_cluster_test.go:664: Step 2/4 error: Error running post-apply refresh plan: exit status 1
2025-07-23T17:30:38.7859043Z         
2025-07-23T17:30:38.7859414Z         Error: error when getting project properties after create
2025-07-23T17:30:38.7859889Z         
2025-07-23T17:30:38.7860219Z           with mongodbatlas_project.cluster_project,
2025-07-23T17:30:38.7860861Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-23T17:30:38.7861445Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-23T17:30:38.7861748Z         
2025-07-23T17:30:38.7862171Z         error getting project (68810ea493a06a13914bc36a): error getting project's
2025-07-23T17:30:38.7862613Z         limits (68810ea493a06a13914bc36a):
2025-07-23T17:30:38.7863159Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68810ea493a06a13914bc36a/limits
2025-07-23T17:30:38.7863798Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T17:30:38.7864354Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T17:30:38.7864727Z         BadRequestDetail: 
2025-07-23T17:30:38.7919318Z --- FAIL: TestAccClusterAdvancedCluster_withTags (923.70s)
```

- 2025-07-24 PASS 14 minutes
- 2025-07-25 PASS 15 minutes
- 2025-07-26 PASS 19 minutes
- 2025-07-27 PASS 19 minutes
- 2025-07-28 PASS 18 minutes
- 2025-07-29 PASS 17 minutes
- 2025-07-30 PASS 16 minutes
- 2025-07-31 PASS 24 minutes
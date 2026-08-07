# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058020000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 2.06s
[2026-07-11 00:55](#error-2026-07-11t0055110000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 4.02s
[2026-07-21 00:53](#error-2026-07-21t0053100000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.10s
[2026-07-23 00:49](#error-2026-07-23t0049380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:02+00:00
```
2026-07-09T00:58:02.4966100Z === RUN   TestAccClusterAdvancedCluster_withLabels
2026-07-09T00:58:24.4651766Z === CONT  TestAccClusterAdvancedCluster_withLabels
2026-07-09T00:58:26.9772200Z === NAME  TestAccClusterAdvancedCluster_withLabels
2026-07-09T00:58:26.9782461Z     resource_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-07-09T00:58:26.9783066Z         
2026-07-09T00:58:26.9783513Z         Error: error creating project: test-acc-tf-p-558543806450292925
2026-07-09T00:58:26.9783998Z         
2026-07-09T00:58:26.9784549Z           with mongodbatlas_project.cluster_project,
2026-07-09T00:58:26.9785491Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-09T00:58:26.9786232Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-09T00:58:26.9786868Z         
2026-07-09T00:58:26.9787500Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-09T00:58:26.9788263Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-09T00:58:26.9789080Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-09T00:58:26.9789855Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-09T00:58:26.9790336Z         BadRequestDetail: 
2026-07-09T00:58:26.9807927Z   
2026-07-09T00:58:27.0494481Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (2.59s)
```

- 2026-07-10 PASS 46 minutes
- 2026-07-11

### Error 2026-07-11T00:55:11+00:00
```
2026-07-11T00:55:11.2760983Z === RUN   TestAccClusterAdvancedCluster_withLabels
2026-07-11T00:56:44.7975183Z === CONT  TestAccClusterAdvancedCluster_withLabels
2026-07-11T00:56:48.4897626Z === NAME  TestAccClusterAdvancedCluster_withLabels
2026-07-11T00:56:48.4898831Z     resource_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-07-11T00:56:48.4899760Z         
2026-07-11T00:56:48.4900674Z         Error: error creating project: test-acc-tf-p-4983614275427934796
2026-07-11T00:56:48.4901531Z         
2026-07-11T00:56:48.4902297Z           with mongodbatlas_project.cluster_project,
2026-07-11T00:56:48.4903965Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-11T00:56:48.4905402Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-11T00:56:48.4906213Z         
2026-07-11T00:56:48.4907297Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-11T00:56:48.4908767Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-11T00:56:48.4910240Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-11T00:56:48.4911733Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-11T00:56:48.4912785Z         BadRequestDetail: 
2026-07-11T00:56:48.5578796Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (4.21s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 22 minutes
- 2026-07-14 PASS 23 minutes
- 2026-07-15 PASS 22 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 27 minutes
- 2026-07-18 PASS 27 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:10+00:00
```
2026-07-21T00:53:10.0114634Z === RUN   TestAccClusterAdvancedCluster_withLabels
2026-07-21T00:53:23.4310603Z === CONT  TestAccClusterAdvancedCluster_withLabels
2026-07-21T00:53:25.3339085Z === NAME  TestAccClusterAdvancedCluster_withLabels
2026-07-21T00:53:25.3339656Z     resource_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-07-21T00:53:25.3340285Z         
2026-07-21T00:53:25.3340736Z         Error: error creating project: test-acc-tf-p-1753664307414925939
2026-07-21T00:53:25.3341114Z         
2026-07-21T00:53:25.3341477Z           with mongodbatlas_project.cluster_project,
2026-07-21T00:53:25.3342190Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-21T00:53:25.3342978Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-21T00:53:25.3343335Z         
2026-07-21T00:53:25.3343833Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T00:53:25.3344514Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T00:53:25.3345192Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T00:53:25.3345841Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T00:53:25.3346284Z         BadRequestDetail: 
2026-07-21T00:53:25.3660899Z   
2026-07-21T00:53:25.3887855Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (1.96s)
```

- 2026-07-22 PASS 38 minutes
- 2026-07-23

### Error 2026-07-23T00:49:38+00:00
```
2026-07-23T00:49:38.0409821Z === RUN   TestAccClusterAdvancedCluster_withLabels
2026-07-23T00:49:49.7219834Z === CONT  TestAccClusterAdvancedCluster_withLabels
2026-07-23T00:49:50.4452592Z   diagnostic_detail=
2026-07-23T00:49:50.4493705Z   
2026-07-23T00:49:51.8719997Z === NAME  TestAccClusterAdvancedCluster_withLabels
2026-07-23T00:49:51.8720593Z     resource_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-07-23T00:49:51.8721016Z         
2026-07-23T00:49:51.8721458Z         Error: error creating project: test-acc-tf-p-8085205386268576892
2026-07-23T00:49:51.8722091Z         
2026-07-23T00:49:51.8722483Z           with mongodbatlas_project.cluster_project,
2026-07-23T00:49:51.8723232Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-23T00:49:51.8723936Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-23T00:49:51.8724299Z         
2026-07-23T00:49:51.8724821Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:49:51.8725537Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:49:51.8726213Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:49:51.8726886Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:49:51.8727349Z         BadRequestDetail: 
2026-07-23T00:49:51.9221781Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (2.20s)
```

- 2026-07-24 PASS 56 minutes
- 2026-07-25 PASS 27 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 24 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 18 minutes
  - PASS 16 minutes
- 2026-08-01 PASS 17 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 16 minutes
- 2026-08-04 PASS 17 minutes
- 2026-08-05 PASS 16 minutes
- 2026-08-06 PASS 17 minutes
- 2026-08-07 PASS 18 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 24 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 29 minutes
  - PASS 16 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 30 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 29 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 18 minutes
  - PASS 20 minutes
- 2026-07-30 PASS 17 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 18 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

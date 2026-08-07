# cluster/cluster/TestAccCluster_create_RedactClientLogData Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:55](#error-2026-07-09t0055380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.08s
[2026-07-11 00:43](#error-2026-07-11t0043200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.02s
[2026-07-16 00:43](#error-2026-07-16t0043220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.08s
[2026-07-21 00:52](#error-2026-07-21t0052330000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.03s
[2026-07-23 00:48](#error-2026-07-23t0048240000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:55:38+00:00
```
2026-07-09T00:55:38.8820525Z === RUN   TestAccCluster_create_RedactClientLogData
2026-07-09T00:55:38.8825777Z === CONT  TestAccCluster_create_RedactClientLogData
2026-07-09T00:56:56.6103851Z === NAME  TestAccCluster_create_RedactClientLogData
2026-07-09T00:56:56.6104792Z     resource_cluster_test.go:1321: Step 1/1 error: Error running apply: exit status 1
2026-07-09T00:56:56.6105449Z         
2026-07-09T00:56:56.6105992Z         Error: error creating project: test-acc-tf-p-3684505775586964503
2026-07-09T00:56:56.6106374Z         
2026-07-09T00:56:56.6106701Z           with mongodbatlas_project.test,
2026-07-09T00:56:56.6107415Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T00:56:56.6108072Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T00:56:56.6108588Z         
2026-07-09T00:56:56.6109372Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:56:56.6110057Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:56:56.6110673Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:56:56.6568801Z --- FAIL: TestAccCluster_create_RedactClientLogData (77.78s)
```

- 2026-07-10 PASS 47 minutes
- 2026-07-11

### Error 2026-07-11T00:43:20+00:00
```
2026-07-11T00:43:20.5969977Z === RUN   TestAccCluster_create_RedactClientLogData
2026-07-11T00:43:20.5974901Z === CONT  TestAccCluster_create_RedactClientLogData
2026-07-11T00:44:43.7491100Z === NAME  TestAccCluster_create_RedactClientLogData
2026-07-11T00:44:43.7491954Z     resource_cluster_test.go:1321: Step 1/1 error: Error running apply: exit status 1
2026-07-11T00:44:43.7492543Z         
2026-07-11T00:44:43.7493064Z         Error: error creating project: test-acc-tf-p-3191440108487672830
2026-07-11T00:44:43.7493521Z         
2026-07-11T00:44:43.7493941Z           with mongodbatlas_project.test,
2026-07-11T00:44:43.7494805Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:44:43.7495608Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:44:43.7496052Z         
2026-07-11T00:44:43.7496516Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:44:43.7497177Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:44:43.7497726Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:43.7956932Z --- FAIL: TestAccCluster_create_RedactClientLogData (83.20s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 25 minutes
- 2026-07-14 PASS 25 minutes
- 2026-07-15 PASS 26 minutes
- 2026-07-16

### Error 2026-07-16T00:43:22+00:00
```
2026-07-16T00:43:22.3451712Z === RUN   TestAccCluster_create_RedactClientLogData
2026-07-16T00:43:22.3734336Z === CONT  TestAccCluster_create_RedactClientLogData
2026-07-16T00:44:42.1114315Z === NAME  TestAccCluster_create_RedactClientLogData
2026-07-16T00:44:42.1115050Z     resource_cluster_test.go:1321: Step 1/1 error: Error running apply: exit status 1
2026-07-16T00:44:42.1115921Z         
2026-07-16T00:44:42.1116512Z         Error: error creating project: test-acc-tf-p-5825904837549005901
2026-07-16T00:44:42.1117013Z         
2026-07-16T00:44:42.1117450Z           with mongodbatlas_project.test,
2026-07-16T00:44:42.1118231Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:44:42.1118961Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:44:42.1119388Z         
2026-07-16T00:44:42.1120001Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:44:42.1120788Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:44:42.1121512Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:42.1616132Z --- FAIL: TestAccCluster_create_RedactClientLogData (79.81s)
```

- 2026-07-17 PASS 36 minutes
- 2026-07-18 PASS 21 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:33+00:00
```
2026-07-21T00:52:33.5496275Z === RUN   TestAccCluster_create_RedactClientLogData
2026-07-21T00:52:33.5640407Z === CONT  TestAccCluster_create_RedactClientLogData
2026-07-21T00:52:34.7776685Z === NAME  TestAccCluster_create_RedactClientLogData
2026-07-21T00:52:34.7777734Z     resource_cluster_test.go:1321: Step 1/1 error: Error running apply: exit status 1
2026-07-21T00:52:34.7778551Z         
2026-07-21T00:52:34.7779354Z         Error: error creating project: test-acc-tf-p-8872286720849487909
2026-07-21T00:52:34.7780026Z         
2026-07-21T00:52:34.7780575Z           with mongodbatlas_project.test,
2026-07-21T00:52:34.7781715Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:52:34.7782796Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:52:34.7783357Z         
2026-07-21T00:52:34.7784260Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T00:52:34.7785552Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T00:52:34.7796942Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T00:52:34.7797657Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T00:52:34.7798116Z         BadRequestDetail: 
2026-07-21T00:52:34.8266123Z --- FAIL: TestAccCluster_create_RedactClientLogData (1.28s)
```

- 2026-07-22 PASS 39 minutes
- 2026-07-23

### Error 2026-07-23T00:48:24+00:00
```
2026-07-23T00:48:24.6497562Z === RUN   TestAccCluster_create_RedactClientLogData
2026-07-23T00:48:24.6643609Z === CONT  TestAccCluster_create_RedactClientLogData
2026-07-23T00:48:26.2130177Z   
2026-07-23T00:48:26.3740482Z === NAME  TestAccCluster_create_RedactClientLogData
2026-07-23T00:48:26.3741469Z     resource_cluster_test.go:1321: Step 1/1 error: Error running apply: exit status 1
2026-07-23T00:48:26.3742346Z         
2026-07-23T00:48:26.3743069Z         Error: error creating project: test-acc-tf-p-2358462604096968804
2026-07-23T00:48:26.3743685Z         
2026-07-23T00:48:26.3744203Z           with mongodbatlas_project.test,
2026-07-23T00:48:26.3745253Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:48:26.3746577Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:48:26.3747146Z         
2026-07-23T00:48:26.3748003Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:48:26.3749149Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:48:26.3750249Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:48:26.3751321Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:48:26.3752184Z         BadRequestDetail: 
2026-07-23T00:48:26.4380672Z --- FAIL: TestAccCluster_create_RedactClientLogData (1.78s)
```

- 2026-07-24 PASS 31 minutes
- 2026-07-25 PASS 24 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS 55 minutes
- 2026-07-29 PASS 26 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 19 minutes
- 2026-08-01 PASS 19 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 19 minutes
- 2026-08-04 PASS 19 minutes
- 2026-08-05 PASS 18 minutes
- 2026-08-06 PASS 17 minutes
- 2026-08-07 PASS 20 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 25 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 22 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 29 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 21 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 18 minutes
  - PASS 26 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 19 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

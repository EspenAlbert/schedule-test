# cluster/cluster/TestAccCluster_create_RedactClientLogData Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 7)
Success rate: 77.42%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:05](#error-2026-05-09t0105110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.07s
[2026-05-12 00:53](#error-2026-05-12t0053140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.06s
[2026-05-16 00:56](#error-2026-05-16t0056250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.05s
[2026-05-19 01:02](#error-2026-05-19t0102190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 99.09s
[2026-05-26 02:08](#error-2026-05-26t0208170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.00s
[2026-05-28 01:01](#error-2026-05-28t0101020000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.08s
[2026-05-30 01:05](#error-2026-05-30t0105570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 38 minutes
  - PASS 53 minutes
- 2026-05-08 PASS 22 minutes
- 2026-05-09

### Error 2026-05-09T01:05:11+00:00
```
2026-05-09T01:05:11.5359098Z === RUN   TestAccCluster_create_RedactClientLogData
2026-05-09T01:05:11.5616723Z === CONT  TestAccCluster_create_RedactClientLogData
2026-05-09T01:06:23.1326049Z === NAME  TestAccCluster_create_RedactClientLogData
2026-05-09T01:06:23.1326841Z     resource_cluster_test.go:1344: Step 1/1 error: Error running apply: exit status 1
2026-05-09T01:06:23.1327525Z         
2026-05-09T01:06:23.1328169Z         Error: error creating project: test-acc-tf-p-3854356991802312914
2026-05-09T01:06:23.1328686Z         
2026-05-09T01:06:23.1329237Z           with mongodbatlas_project.test,
2026-05-09T01:06:23.1329841Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T01:06:23.1330430Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T01:06:23.1330845Z         
2026-05-09T01:06:23.1331290Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:06:23.1331888Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:06:23.1332443Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:06:23.1831252Z --- FAIL: TestAccCluster_create_RedactClientLogData (71.66s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 23 minutes
- 2026-05-12

### Error 2026-05-12T00:53:14+00:00
```
2026-05-12T00:53:14.1897260Z === RUN   TestAccCluster_create_RedactClientLogData
2026-05-12T00:53:14.2184590Z === CONT  TestAccCluster_create_RedactClientLogData
2026-05-12T00:54:19.7049224Z === NAME  TestAccCluster_create_RedactClientLogData
2026-05-12T00:54:19.7052151Z     resource_cluster_test.go:1344: Step 1/1 error: Error running apply: exit status 1
2026-05-12T00:54:19.7053026Z         
2026-05-12T00:54:19.7053716Z         Error: error creating project: test-acc-tf-p-6848991612146817043
2026-05-12T00:54:19.7054160Z         
2026-05-12T00:54:19.7054479Z           with mongodbatlas_project.test,
2026-05-12T00:54:19.7055125Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-12T00:54:19.7055846Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-12T00:54:19.7056254Z         
2026-05-12T00:54:19.7057056Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-12T00:54:19.7057788Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-12T00:54:19.7058392Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T00:54:19.7607959Z --- FAIL: TestAccCluster_create_RedactClientLogData (65.57s)
```

- 2026-05-13 PASS 20 minutes
- 2026-05-14 PASS 43 minutes
- 2026-05-15 PASS 19 minutes
- 2026-05-16

### Error 2026-05-16T00:56:25+00:00
```
2026-05-16T00:56:25.0038457Z === RUN   TestAccCluster_create_RedactClientLogData
2026-05-16T00:56:25.0851314Z === CONT  TestAccCluster_create_RedactClientLogData
2026-05-16T00:57:52.3988185Z === NAME  TestAccCluster_create_RedactClientLogData
2026-05-16T00:57:52.3988954Z     resource_cluster_test.go:1344: Step 1/1 error: Error running apply: exit status 1
2026-05-16T00:57:52.3989512Z         
2026-05-16T00:57:52.3989927Z         Error: error creating project: test-acc-tf-p-1455405546402661969
2026-05-16T00:57:52.3990418Z         
2026-05-16T00:57:52.3990714Z           with mongodbatlas_project.test,
2026-05-16T00:57:52.3991370Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T00:57:52.3992334Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T00:57:52.3992789Z         
2026-05-16T00:57:52.3993252Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T00:57:52.3993892Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T00:57:52.3994475Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:57:52.4497387Z --- FAIL: TestAccCluster_create_RedactClientLogData (87.47s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 24 minutes
- 2026-05-19

### Error 2026-05-19T01:02:19+00:00
```
2026-05-19T01:02:19.9119872Z === RUN   TestAccCluster_create_RedactClientLogData
2026-05-19T01:02:19.9275379Z === CONT  TestAccCluster_create_RedactClientLogData
2026-05-19T01:03:59.8096084Z === NAME  TestAccCluster_create_RedactClientLogData
2026-05-19T01:03:59.8096952Z     resource_cluster_test.go:1344: Step 1/1 error: Error running apply: exit status 1
2026-05-19T01:03:59.8097430Z         
2026-05-19T01:03:59.8098167Z         Error: error creating project: test-acc-tf-p-5177543686992983385
2026-05-19T01:03:59.8098587Z         
2026-05-19T01:03:59.8099045Z           with mongodbatlas_project.test,
2026-05-19T01:03:59.8099843Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:03:59.8100622Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:03:59.8100954Z         
2026-05-19T01:03:59.8101463Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:03:59.8102166Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:03:59.8102754Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:59.8683030Z --- FAIL: TestAccCluster_create_RedactClientLogData (99.95s)
```

- 2026-05-20 PASS 18 minutes
- 2026-05-21 PASS 25 minutes
- 2026-05-22 PASS 40 minutes
- 2026-05-23 PASS 29 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 21 minutes
- 2026-05-26

### Error 2026-05-26T02:08:17+00:00
```
2026-05-26T02:08:17.4836568Z === RUN   TestAccCluster_create_RedactClientLogData
2026-05-26T02:08:17.4852019Z === CONT  TestAccCluster_create_RedactClientLogData
2026-05-26T02:09:23.4247064Z === NAME  TestAccCluster_create_RedactClientLogData
2026-05-26T02:09:23.4247957Z     resource_cluster_test.go:1321: Step 1/1 error: Error running apply: exit status 1
2026-05-26T02:09:23.4248897Z         
2026-05-26T02:09:23.4249574Z         Error: error creating project: test-acc-tf-p-1405801452840323033
2026-05-26T02:09:23.4250144Z         
2026-05-26T02:09:23.4250613Z           with mongodbatlas_project.test,
2026-05-26T02:09:23.4251496Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:09:23.4252075Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:09:23.4252481Z         
2026-05-26T02:09:23.4253003Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:09:23.4254075Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:09:23.4254679Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:09:23.4803303Z --- FAIL: TestAccCluster_create_RedactClientLogData (66.00s)
```

- 2026-05-27 PASS 47 minutes
- 2026-05-28

### Error 2026-05-28T01:01:02+00:00
```
2026-05-28T01:01:02.3487349Z === RUN   TestAccCluster_create_RedactClientLogData
2026-05-28T01:01:02.3496833Z === CONT  TestAccCluster_create_RedactClientLogData
2026-05-28T01:01:03.7917788Z   
2026-05-28T01:01:05.1072248Z === NAME  TestAccCluster_create_RedactClientLogData
2026-05-28T01:01:05.1073170Z     resource_cluster_test.go:1321: Step 1/1 error: Error running apply: exit status 1
2026-05-28T01:01:05.1073807Z         
2026-05-28T01:01:05.1074719Z         Error: error creating project: test-acc-tf-p-1686786413526574868
2026-05-28T01:01:05.1075092Z         
2026-05-28T01:01:05.1075380Z           with mongodbatlas_project.test,
2026-05-28T01:01:05.1075948Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T01:01:05.1076618Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:01:05.1077033Z         
2026-05-28T01:01:05.1077495Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:01:05.1078122Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:01:05.1078734Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:01:05.1079347Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:01:05.1079751Z         BadRequestDetail: 
2026-05-28T01:01:05.1594711Z --- FAIL: TestAccCluster_create_RedactClientLogData (2.81s)
```

- 2026-05-29 PASS 23 minutes
- 2026-05-30

### Error 2026-05-30T01:05:57+00:00
```
2026-05-30T01:05:57.0085032Z === RUN   TestAccCluster_create_RedactClientLogData
2026-05-30T01:05:57.0099240Z === CONT  TestAccCluster_create_RedactClientLogData
2026-05-30T01:07:03.9857399Z === NAME  TestAccCluster_create_RedactClientLogData
2026-05-30T01:07:03.9858086Z     resource_cluster_test.go:1321: Step 1/1 error: Error running apply: exit status 1
2026-05-30T01:07:03.9858537Z         
2026-05-30T01:07:03.9858987Z         Error: error creating project: test-acc-tf-p-4668556469142252876
2026-05-30T01:07:03.9859391Z         
2026-05-30T01:07:03.9859862Z           with mongodbatlas_project.test,
2026-05-30T01:07:03.9860885Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:07:03.9861521Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:07:03.9861852Z         
2026-05-30T01:07:03.9862344Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:07:03.9863018Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:07:03.9863632Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:07:04.0355323Z --- FAIL: TestAccCluster_create_RedactClientLogData (67.03s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 20 minutes
- 2026-06-02 PASS 19 minutes
- 2026-06-03 PASS 25 minutes
- 2026-06-04 PASS 33 minutes
- 2026-06-05 PASS 26 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 22 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 21 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 23 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 22 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

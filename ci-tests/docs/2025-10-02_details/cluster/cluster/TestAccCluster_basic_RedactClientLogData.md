# cluster/cluster/TestAccCluster_basic_RedactClientLogData Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL(x 5)
Success rate: 88.10%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:28](#error-2025-09-07t0028560000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1cadf5af52d2d4d4ed4/limits | qa | flaky_500 | 1250.04s
[2025-09-08 09:32](#error-2025-09-08t0932230000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a90cddbf4f6e499b28/limits | qa | flaky_500 | 33.09s
[2025-09-14 00:28](#error-2025-09-14t0028420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c3cd444485797b2040e/limits | qa | flaky_500 | 35.03s
[2025-09-15 06:20](#error-2025-09-15t0620470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b041fe60767b7f9afddd/limits | qa | flaky_500 | 34.07s
[2025-09-21 00:29](#error-2025-09-21t0029260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf46e8bd1cb41a3e7042c4/limits | qa | flaky_500 | 1285.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 35 minutes
- 2025-09-04 PASS 27 minutes
- 2025-09-05 PASS 24 minutes
- 2025-09-06 PASS 29 minutes
- 2025-09-07

### Error 2025-09-07T00:28:56+00:00
```
2025-09-07T00:28:56.4807897Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-09-07T00:28:56.4846231Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-09-07T00:44:54.7207483Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-09-07T00:44:54.7208220Z     resource_cluster_test.go:1328: Step 3/4 error: Error running post-apply refresh plan: exit status 1
2025-09-07T00:44:54.7208855Z         
2025-09-07T00:44:54.7209285Z         Error: error when getting project properties after create
2025-09-07T00:44:54.7209650Z         
2025-09-07T00:44:54.7210178Z           with mongodbatlas_project.test,
2025-09-07T00:44:54.7210862Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:44:54.7211577Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:44:54.7211960Z         
2025-09-07T00:44:54.7212402Z         error getting project (68bcd1cadf5af52d2d4d4ed4): error getting project's
2025-09-07T00:44:54.7212854Z         limits (68bcd1cadf5af52d2d4d4ed4):
2025-09-07T00:44:54.7213423Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1cadf5af52d2d4d4ed4/limits
2025-09-07T00:44:54.7214072Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:44:54.7214629Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:44:54.7214998Z         BadRequestDetail: 
2025-09-07T00:49:46.8795793Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1250.40s)
```

- 2025-09-08
  - PASS 31 minutes
  - FAIL 33 seconds

### Error 2025-09-08T09:32:23+00:00
```
2025-09-08T09:32:23.8306941Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-09-08T09:32:23.8316617Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-09-08T09:32:57.7125671Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-09-08T09:32:57.7126224Z     resource_cluster_test.go:1328: Step 1/4 error: Error running apply: exit status 1
2025-09-08T09:32:57.7126801Z         
2025-09-08T09:32:57.7127308Z         Error: error when getting project properties after create
2025-09-08T09:32:57.7127638Z         
2025-09-08T09:32:57.7128195Z           with mongodbatlas_project.test,
2025-09-08T09:32:57.7128792Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-08T09:32:57.7129327Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-08T09:32:57.7129607Z         
2025-09-08T09:32:57.7130050Z         error getting project (68bea2a90cddbf4f6e499b28): error getting project's
2025-09-08T09:32:57.7130517Z         limits (68bea2a90cddbf4f6e499b28):
2025-09-08T09:32:57.7131088Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a90cddbf4f6e499b28/limits
2025-09-08T09:32:57.7131754Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:32:57.7132443Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:32:57.7133277Z         BadRequestDetail: 
2025-09-08T09:32:57.7562595Z --- FAIL: TestAccCluster_basic_RedactClientLogData (33.93s)
```

  - PASS 25 minutes
- 2025-09-09 PASS 30 minutes
- 2025-09-10 PASS 26 minutes
- 2025-09-11 PASS 29 minutes
- 2025-09-12 PASS 23 minutes
- 2025-09-13 PASS 26 minutes
- 2025-09-14

### Error 2025-09-14T00:28:42+00:00
```
2025-09-14T00:28:42.3138643Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-09-14T00:28:42.3246219Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-09-14T00:29:17.5557982Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-09-14T00:29:17.5558627Z     resource_cluster_test.go:1328: Step 1/4 error: Error running apply: exit status 1
2025-09-14T00:29:17.5559102Z         
2025-09-14T00:29:17.5559525Z         Error: error when getting project properties after create
2025-09-14T00:29:17.5559937Z         
2025-09-14T00:29:17.5560358Z           with mongodbatlas_project.test,
2025-09-14T00:29:17.5561059Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:29:17.5561598Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:29:17.5561884Z         
2025-09-14T00:29:17.5562325Z         error getting project (68c60c3cd444485797b2040e): error getting project's
2025-09-14T00:29:17.5562776Z         limits (68c60c3cd444485797b2040e):
2025-09-14T00:29:17.5563347Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c3cd444485797b2040e/limits
2025-09-14T00:29:17.5563999Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:29:17.5564574Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:29:17.5565341Z         BadRequestDetail: 
2025-09-14T00:29:17.6108567Z --- FAIL: TestAccCluster_basic_RedactClientLogData (35.29s)
```

- 2025-09-15
  - PASS 19 minutes
  - FAIL 34 seconds

### Error 2025-09-15T06:20:47+00:00
```
2025-09-15T06:20:47.5489665Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-09-15T06:20:47.5517810Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-09-15T06:21:22.1981431Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-09-15T06:21:22.1982089Z     resource_cluster_test.go:1328: Step 1/4 error: Error running apply: exit status 1
2025-09-15T06:21:22.1982501Z         
2025-09-15T06:21:22.1982953Z         Error: error when getting project properties after create
2025-09-15T06:21:22.1983276Z         
2025-09-15T06:21:22.1983662Z           with mongodbatlas_project.test,
2025-09-15T06:21:22.1984345Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:21:22.1985016Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:21:22.1985333Z         
2025-09-15T06:21:22.1985776Z         error getting project (68c7b041fe60767b7f9afddd): error getting project's
2025-09-15T06:21:22.1986219Z         limits (68c7b041fe60767b7f9afddd):
2025-09-15T06:21:22.1986783Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b041fe60767b7f9afddd/limits
2025-09-15T06:21:22.1987432Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:21:22.1988000Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:21:22.1988378Z         BadRequestDetail: 
2025-09-15T06:21:22.2467548Z --- FAIL: TestAccCluster_basic_RedactClientLogData (34.70s)
```

- 2025-09-16 PASS 24 minutes
- 2025-09-17 PASS 23 minutes
- 2025-09-18 PASS 27 minutes
- 2025-09-19 PASS 22 minutes
- 2025-09-20 PASS 22 minutes
- 2025-09-21

### Error 2025-09-21T00:29:26+00:00
```
2025-09-21T00:29:26.8683066Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-09-21T00:29:26.8775794Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-09-21T00:47:20.9693821Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-09-21T00:47:20.9694729Z     resource_cluster_test.go:1328: Step 4/4 error: Error running post-apply refresh plan: exit status 1
2025-09-21T00:47:20.9695187Z         
2025-09-21T00:47:20.9695684Z         Error: error when getting project properties after create
2025-09-21T00:47:20.9696010Z         
2025-09-21T00:47:20.9696451Z           with mongodbatlas_project.test,
2025-09-21T00:47:20.9697230Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:47:20.9697817Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:47:20.9698160Z         
2025-09-21T00:47:20.9698653Z         error getting project (68cf46e8bd1cb41a3e7042c4): error getting project's
2025-09-21T00:47:20.9699158Z         limits (68cf46e8bd1cb41a3e7042c4):
2025-09-21T00:47:20.9700371Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf46e8bd1cb41a3e7042c4/limits
2025-09-21T00:47:20.9701356Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:47:20.9702039Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:47:20.9702444Z         BadRequestDetail: 
2025-09-21T00:50:52.7401446Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1285.88s)
```

- 2025-09-22 PASS 22 minutes
- 2025-09-23 PASS 22 minutes
- 2025-09-24 PASS 21 minutes
- 2025-09-25 PASS 23 minutes
- 2025-09-26 PASS 22 minutes
- 2025-09-27 PASS 24 minutes
- 2025-09-28 PASS 25 minutes
- 2025-09-29 PASS 21 minutes
- 2025-09-30
  - PASS 26 minutes
  - PASS 21 minutes
  - PASS 21 minutes
- 2025-10-01
  - PASS 19 minutes
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 20 minutes
  - PASS 21 minutes
  - PASS 19 minutes
  - PASS 21 minutes
- 2025-10-02 PASS 27 minutes
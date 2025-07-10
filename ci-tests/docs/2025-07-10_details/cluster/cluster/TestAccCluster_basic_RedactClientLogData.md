# cluster/cluster/TestAccCluster_basic_RedactClientLogData Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 4)
Success rate: 96.55%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029400000) |  | qa |  | 0.08s
[2025-06-05 00:28](#error-2025-06-05t0028480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 4.06s
[2025-06-22 00:31](#error-2025-06-22t0031440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574ef3ab82446d9bfb0ae2/limits | qa | flaky_500 | 1056.01s
[2025-07-06 00:32](#error-2025-07-06t0032040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4067267b5775b682ef3/limits | qa | flaky_500 | 35.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 18 minutes
- 2025-04-13 PASS 23 minutes
- 2025-04-14 PASS 19 minutes
- 2025-04-15 PASS 19 minutes
- 2025-04-16
  - PASS 19 minutes
  - PASS 25 minutes
- 2025-04-17 PASS 20 minutes
- 2025-04-18 PASS 20 minutes
- 2025-04-19 PASS 19 minutes
- 2025-04-20 PASS 20 minutes
- 2025-04-21 PASS 18 minutes
- 2025-04-22 PASS 17 minutes
- 2025-04-23 PASS 19 minutes
- 2025-04-24 PASS 18 minutes
- 2025-04-25 PASS 20 minutes
- 2025-04-26 PASS 19 minutes
- 2025-04-27 PASS 21 minutes
- 2025-04-28 PASS 19 minutes
- 2025-04-29 PASS 18 minutes
- 2025-04-30 PASS 19 minutes
- 2025-05-01
  - PASS 20 minutes
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-05-02 PASS 19 minutes
- 2025-05-03 PASS 21 minutes
- 2025-05-04 PASS 19 minutes
- 2025-05-05 PASS 18 minutes
- 2025-05-06 PASS 20 minutes
- 2025-05-07 PASS 20 minutes
- 2025-05-08 PASS 21 minutes
- 2025-05-09 PASS 19 minutes
- 2025-05-10 PASS 19 minutes
- 2025-05-11

### Error 2025-05-11T00:29:40+00:00
```
2025-05-11T00:29:40.4130487Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-05-11T00:29:40.4136892Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-05-11T00:29:41.0950837Z    test_terraform_path=/home/runner/work/_temp/f215a5cc-9627-4933-9b0a-857bb4fb3697/terraform
2025-05-11T00:29:41.0952094Z     resource_cluster_test.go:1328: Step 1/4 error: Error running apply: exit status 1
2025-05-11T00:29:41.0952801Z         
2025-05-11T00:29:41.0953776Z         Error: error creating project: test-acc-tf-p-5682575487582693582
2025-05-11T00:29:41.0954615Z         
2025-05-11T00:29:41.0955348Z           with mongodbatlas_project.test,
2025-05-11T00:29:41.0956588Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:41.0957553Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:41.0958013Z         
2025-05-11T00:29:41.0960642Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:41.0961388Z         type
2025-05-11T00:29:41.1079895Z   
2025-05-11T00:29:41.1910724Z --- FAIL: TestAccCluster_basic_RedactClientLogData (0.78s)
```

- 2025-05-12 PASS 19 minutes
- 2025-05-13
  - PASS 19 minutes
  - PASS 20 minutes
- 2025-05-14 PASS 19 minutes
- 2025-05-15 PASS 19 minutes
- 2025-05-16 PASS 20 minutes
- 2025-05-17 PASS 18 minutes
- 2025-05-18 PASS 21 minutes
- 2025-05-19 PASS 21 minutes
- 2025-05-20 PASS 20 minutes
- 2025-05-21 PASS 20 minutes
- 2025-05-22 PASS 20 minutes
- 2025-05-23 PASS 24 minutes
- 2025-05-24 PASS 19 minutes
- 2025-05-25 PASS 20 minutes
- 2025-05-26 PASS 18 minutes
- 2025-05-27 PASS 18 minutes
- 2025-05-28
  - PASS 29 minutes
  - PASS 19 minutes
  - PASS 20 minutes
  - PASS 19 minutes
- 2025-05-29
  - PASS 24 minutes
  - PASS 18 minutes
- 2025-05-30
  - PASS 18 minutes
  - PASS 19 minutes
- 2025-05-31 PASS 19 minutes
- 2025-06-01
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 17 minutes
- 2025-06-02
  - PASS 17 minutes
  - PASS 20 minutes
  - PASS 18 minutes
- 2025-06-03 PASS 18 minutes
- 2025-06-04 PASS 20 minutes
- 2025-06-05

### Error 2025-06-05T00:28:48+00:00
```
2025-06-05T00:28:48.8418928Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-06-05T00:28:48.8427136Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-06-05T00:28:53.4198168Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-06-05T00:28:53.4198773Z     resource_cluster_test.go:1328: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:28:53.4199179Z         
2025-06-05T00:28:53.4199600Z         Error: error creating project: test-acc-tf-p-7224364317003897636
2025-06-05T00:28:53.4202432Z         
2025-06-05T00:28:53.4202769Z           with mongodbatlas_project.test,
2025-06-05T00:28:53.4203377Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:28:53.4204278Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:28:53.4204755Z         
2025-06-05T00:28:53.4205239Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:28:53.4206657Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:28:53.4207357Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:28:53.4654843Z --- FAIL: TestAccCluster_basic_RedactClientLogData (4.62s)
```

- 2025-06-06 PASS 18 minutes
- 2025-06-07 PASS 20 minutes
- 2025-06-08 PASS 19 minutes
- 2025-06-09 PASS 18 minutes
- 2025-06-10 PASS 26 minutes
- 2025-06-11
  - PASS 18 minutes
  - PASS 19 minutes
- 2025-06-12 PASS 19 minutes
- 2025-06-13 PASS 20 minutes
- 2025-06-14 PASS 18 minutes
- 2025-06-15 PASS 20 minutes
- 2025-06-16 PASS 19 minutes
- 2025-06-17 PASS 19 minutes
- 2025-06-18 PASS 19 minutes
- 2025-06-19 PASS 20 minutes
- 2025-06-20 PASS 18 minutes
- 2025-06-21 PASS 20 minutes
- 2025-06-22

### Error 2025-06-22T00:31:44+00:00
```
2025-06-22T00:31:44.8705931Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-06-22T00:31:44.8742477Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-06-22T00:45:48.5524267Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-06-22T00:45:48.5525260Z     resource_cluster_test.go:1328: Step 4/4 error: Error running pre-apply plan: exit status 1
2025-06-22T00:45:48.5525982Z         
2025-06-22T00:45:48.5526632Z         Error: error when getting project properties after create
2025-06-22T00:45:48.5527207Z         
2025-06-22T00:45:48.5527733Z           with mongodbatlas_project.test,
2025-06-22T00:45:48.5528833Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T00:45:48.5529974Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:45:48.5530491Z         
2025-06-22T00:45:48.5531281Z         error getting project (68574ef3ab82446d9bfb0ae2): error getting project's
2025-06-22T00:45:48.5532066Z         limits (68574ef3ab82446d9bfb0ae2):
2025-06-22T00:45:48.5533060Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574ef3ab82446d9bfb0ae2/limits
2025-06-22T00:45:48.5534194Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:45:48.5535267Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:45:48.5535955Z         BadRequestDetail: 
2025-06-22T00:49:21.0110662Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1056.14s)
```

- 2025-06-23 PASS 17 minutes
- 2025-06-24 PASS 18 minutes
- 2025-06-25 PASS 16 minutes
- 2025-06-26 PASS 19 minutes
- 2025-06-27 PASS 18 minutes
- 2025-06-28 PASS 18 minutes
- 2025-06-29 PASS 20 minutes
- 2025-06-30 PASS 17 minutes
- 2025-07-01
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 19 minutes
  - PASS 19 minutes
  - PASS 19 minutes
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 20 minutes
- 2025-07-04 PASS 27 minutes
- 2025-07-05 PASS 18 minutes
- 2025-07-06

### Error 2025-07-06T00:32:04+00:00
```
2025-07-06T00:32:04.2080161Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-07-06T00:32:04.2361045Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-07-06T00:32:39.5965241Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-07-06T00:32:39.5965960Z     resource_cluster_test.go:1328: Step 1/4 error: Error running apply: exit status 1
2025-07-06T00:32:39.5966528Z         
2025-07-06T00:32:39.5967146Z         Error: error when getting project properties after create
2025-07-06T00:32:39.5967663Z         
2025-07-06T00:32:39.5968068Z           with mongodbatlas_project.test,
2025-07-06T00:32:39.5968986Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:32:39.5969920Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:32:39.5970392Z         
2025-07-06T00:32:39.5971145Z         error getting project (6869c4067267b5775b682ef3): error getting project's
2025-07-06T00:32:39.5971918Z         limits (6869c4067267b5775b682ef3):
2025-07-06T00:32:39.5972902Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4067267b5775b682ef3/limits
2025-07-06T00:32:39.5974638Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:32:39.5975710Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:32:39.5976503Z         BadRequestDetail: 
2025-07-06T00:32:39.6166676Z    test_name=TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade test_terraform_path=/home/runner/work/_temp/ee2efe6e-5413-4a4c-86ff-22a83f95e688/terraform test_working_directory=/tmp/plugintest3697541764
2025-07-06T00:32:39.6520075Z --- FAIL: TestAccCluster_basic_RedactClientLogData (35.44s)
```

- 2025-07-07 PASS 18 minutes
- 2025-07-08 PASS 18 minutes
- 2025-07-09 PASS 19 minutes
- 2025-07-10 PASS 18 minutes
# cluster/cluster/TestAccCluster_basic_RedactClientLogData Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 4)
Success rate: 89.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-20 13:58](#error-2025-08-20t1358350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d48df98188003c998aa6/limits | qa | flaky_500 | 2871.04s
[2025-08-24 00:30](#error-2025-08-24t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d2e4192cd1cc589c501/limits | qa | flaky_500 | 33.09s
[2025-08-31 00:29](#error-2025-08-31t0029480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b3977e7e07f9709daeb5ca/limits | qa | flaky_500 | 1156.01s
[2025-09-01 00:30](#error-2025-09-01t0030200000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 26 minutes
- 2025-08-07 PASS 39 minutes
- 2025-08-08 PASS 25 minutes
- 2025-08-09 PASS 29 minutes
- 2025-08-10 PASS 32 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 26 minutes
  - PASS 25 minutes
- 2025-08-13 PASS 27 minutes
- 2025-08-14 PASS 27 minutes
- 2025-08-15 PASS 19 minutes
- 2025-08-16 PASS 47 minutes
- 2025-08-17 PASS 37 minutes
- 2025-08-18 PASS 28 minutes
- 2025-08-19 PASS 27 minutes
- 2025-08-20
  - PASS 21 minutes
  - FAIL 47 minutes

### Error 2025-08-20T13:58:35+00:00
```
2025-08-20T13:58:35.3841315Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-08-20T13:58:35.3853743Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-08-20T14:44:15.3213891Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-08-20T14:44:15.3214683Z     resource_cluster_test.go:1328: Step 4/4 error: Error running post-apply refresh plan: exit status 1
2025-08-20T14:44:15.3215315Z         
2025-08-20T14:44:15.3215805Z         Error: error when getting project properties after create
2025-08-20T14:44:15.3216212Z         
2025-08-20T14:44:15.3216502Z           with mongodbatlas_project.test,
2025-08-20T14:44:15.3217173Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-20T14:44:15.3217722Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-20T14:44:15.3218373Z         
2025-08-20T14:44:15.3218873Z         error getting project (68a5d48df98188003c998aa6): error getting project's
2025-08-20T14:44:15.3219384Z         limits (68a5d48df98188003c998aa6):
2025-08-20T14:44:15.3220332Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d48df98188003c998aa6/limits
2025-08-20T14:44:15.3221133Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-20T14:44:15.3222089Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-20T14:44:15.3222494Z         BadRequestDetail: 
2025-08-20T14:46:26.7636600Z --- FAIL: TestAccCluster_basic_RedactClientLogData (2871.38s)
```

- 2025-08-21 PASS 21 minutes
- 2025-08-22 PASS 24 minutes
- 2025-08-23 PASS 25 minutes
- 2025-08-24

### Error 2025-08-24T00:30:35+00:00
```
2025-08-24T00:30:35.9501574Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-08-24T00:30:35.9513211Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-08-24T00:31:09.8193855Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-08-24T00:31:09.8194540Z     resource_cluster_test.go:1328: Step 1/4 error: Error running apply: exit status 1
2025-08-24T00:31:09.8195074Z         
2025-08-24T00:31:09.8195560Z         Error: error when getting project properties after create
2025-08-24T00:31:09.8195893Z         
2025-08-24T00:31:09.8196277Z           with mongodbatlas_project.test,
2025-08-24T00:31:09.8196948Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:31:09.8197496Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:31:09.8197867Z         
2025-08-24T00:31:09.8198488Z         error getting project (68aa5d2e4192cd1cc589c501): error getting project's
2025-08-24T00:31:09.8199108Z         limits (68aa5d2e4192cd1cc589c501):
2025-08-24T00:31:09.8199792Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d2e4192cd1cc589c501/limits
2025-08-24T00:31:09.8200454Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:31:09.8201024Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:31:09.8201409Z         BadRequestDetail: 
2025-08-24T00:31:09.8646567Z --- FAIL: TestAccCluster_basic_RedactClientLogData (33.91s)
```

- 2025-08-25 PASS 21 minutes
- 2025-08-26 PASS 26 minutes
- 2025-08-27 PASS 32 minutes
- 2025-08-28 PASS 27 minutes
- 2025-08-29 PASS 35 minutes
- 2025-08-30 PASS 24 minutes
- 2025-08-31

### Error 2025-08-31T00:29:48+00:00
```
2025-08-31T00:29:48.6568359Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-08-31T00:29:48.6737646Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-08-31T00:42:40.8910937Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-08-31T00:42:40.8911659Z     resource_cluster_test.go:1328: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-08-31T00:42:40.8912442Z         
2025-08-31T00:42:40.8912940Z         Error: error when getting project properties after create
2025-08-31T00:42:40.8913441Z         
2025-08-31T00:42:40.8913823Z           with mongodbatlas_project.test,
2025-08-31T00:42:40.8914661Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-31T00:42:40.8915213Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-31T00:42:40.8915506Z         
2025-08-31T00:42:40.8915950Z         error getting project (68b3977e7e07f9709daeb5ca): error getting project's
2025-08-31T00:42:40.8916401Z         limits (68b3977e7e07f9709daeb5ca):
2025-08-31T00:42:40.8916972Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b3977e7e07f9709daeb5ca/limits
2025-08-31T00:42:40.8917635Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:42:40.8918205Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:42:40.8918601Z         BadRequestDetail: 
2025-08-31T00:49:04.7792874Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1156.11s)
```

- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:20+00:00
```
2025-09-01T00:30:20.6335950Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-09-01T00:30:20.6342694Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-09-01T00:30:21.4311744Z   
2025-09-01T00:30:21.4623247Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-09-01T00:30:21.4624324Z     resource_cluster_test.go:1328: Step 1/4 error: Error running apply: exit status 1
2025-09-01T00:30:21.4625057Z         
2025-09-01T00:30:21.4625771Z         Error: error creating project: test-acc-tf-p-7338404893303602749
2025-09-01T00:30:21.4626284Z         
2025-09-01T00:30:21.4626793Z           with mongodbatlas_project.test,
2025-09-01T00:30:21.4627875Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:30:21.4628850Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:30:21.4629352Z         
2025-09-01T00:30:21.4630220Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:21.4631425Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:21.4632933Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:21.4634394Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:21.4635160Z         BadRequestDetail: 
2025-09-01T00:30:21.4787367Z    test_working_directory=/tmp/plugintest1741415221 test_terraform_path=/home/runner/work/_temp/b2a14d8b-71bf-4b90-8b36-841539cb7fdc/terraform
2025-09-01T00:30:21.5391751Z --- FAIL: TestAccCluster_basic_RedactClientLogData (0.91s)
```

  - PASS an hour
  - PASS an hour
  - PASS 24 minutes
  - PASS 23 minutes
  - PASS 28 minutes
  - PASS 24 minutes
  - PASS 22 minutes
- 2025-09-02 PASS 31 minutes
- 2025-09-03 PASS 35 minutes
- 2025-09-04 PASS 27 minutes
# cluster/cluster/TestAccCluster_basic_RedactClientLogData Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 8)
Success rate: 74.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:05](#error-2026-05-09t0105110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.05s
[2026-05-14 00:59](#error-2026-05-14t0059580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.06s
[2026-05-16 00:56](#error-2026-05-16t0056240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 96.05s
[2026-05-19 01:02](#error-2026-05-19t0102190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.04s
[2026-05-21 01:02](#error-2026-05-21t0102450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.02s
[2026-05-28 01:01](#error-2026-05-28t0101020000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.02s
[2026-05-30 01:05](#error-2026-05-30t0105570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.08s
[2026-06-02 01:07](#error-2026-06-02t0107530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 38 minutes
  - PASS 56 minutes
- 2026-05-08 PASS 38 minutes
- 2026-05-09

### Error 2026-05-09T01:05:11+00:00
```
2026-05-09T01:05:11.5278345Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-05-09T01:05:11.5614746Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-05-09T01:06:21.9301283Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-05-09T01:06:21.9302200Z     resource_cluster_test.go:1304: Step 1/4 error: Error running apply: exit status 1
2026-05-09T01:06:21.9303071Z         
2026-05-09T01:06:21.9303855Z         Error: error creating project: test-acc-tf-p-7691037083920452769
2026-05-09T01:06:21.9304518Z         
2026-05-09T01:06:21.9305445Z           with mongodbatlas_project.test,
2026-05-09T01:06:21.9306392Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T01:06:21.9307043Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T01:06:21.9307454Z         
2026-05-09T01:06:21.9307939Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:06:21.9308804Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:06:21.9309773Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:06:21.9803372Z --- FAIL: TestAccCluster_basic_RedactClientLogData (70.45s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 32 minutes
- 2026-05-12 PASS 25 minutes
- 2026-05-13 PASS 27 minutes
- 2026-05-14

### Error 2026-05-14T00:59:58+00:00
```
2026-05-14T00:59:58.1990775Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-05-14T00:59:58.2001111Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-05-14T01:01:14.7998998Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-05-14T01:01:14.7999583Z     resource_cluster_test.go:1304: Step 1/4 error: Error running apply: exit status 1
2026-05-14T01:01:14.8000013Z         
2026-05-14T01:01:14.8000450Z         Error: error creating project: test-acc-tf-p-8088903682532848289
2026-05-14T01:01:14.8000824Z         
2026-05-14T01:01:14.8001124Z           with mongodbatlas_project.test,
2026-05-14T01:01:14.8001752Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-14T01:01:14.8002329Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-14T01:01:14.8002628Z         
2026-05-14T01:01:14.8003106Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-14T01:01:14.8003769Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-14T01:01:14.8004370Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:01:14.8488819Z --- FAIL: TestAccCluster_basic_RedactClientLogData (76.65s)
```

- 2026-05-15 PASS 27 minutes
- 2026-05-16

### Error 2026-05-16T00:56:24+00:00
```
2026-05-16T00:56:24.9922903Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-05-16T00:56:25.0932922Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-05-16T00:58:01.4287092Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-05-16T00:58:01.4288035Z     resource_cluster_test.go:1304: Step 1/4 error: Error running apply: exit status 1
2026-05-16T00:58:01.4288727Z         
2026-05-16T00:58:01.4289320Z         Error: error creating project: test-acc-tf-p-278842943654382517
2026-05-16T00:58:01.4289681Z         
2026-05-16T00:58:01.4289975Z           with mongodbatlas_project.test,
2026-05-16T00:58:01.4290813Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T00:58:01.4291382Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T00:58:01.4291672Z         
2026-05-16T00:58:01.4292135Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T00:58:01.4292766Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T00:58:01.4293346Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:01.4785210Z --- FAIL: TestAccCluster_basic_RedactClientLogData (96.50s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 33 minutes
- 2026-05-19

### Error 2026-05-19T01:02:19+00:00
```
2026-05-19T01:02:19.9118339Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-05-19T01:02:19.9406260Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-05-19T01:03:24.2410982Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-05-19T01:03:24.2411876Z     resource_cluster_test.go:1304: Step 1/4 error: Error running apply: exit status 1
2026-05-19T01:03:24.2412500Z         
2026-05-19T01:03:24.2413190Z         Error: error creating project: test-acc-tf-p-8598839101536529533
2026-05-19T01:03:24.2413741Z         
2026-05-19T01:03:24.2414475Z           with mongodbatlas_project.test,
2026-05-19T01:03:24.2415265Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:03:24.2415864Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:03:24.2416170Z         
2026-05-19T01:03:24.2416643Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:03:24.2417299Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:03:24.2417885Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:24.2899485Z --- FAIL: TestAccCluster_basic_RedactClientLogData (64.38s)
```

- 2026-05-20 PASS 24 minutes
- 2026-05-21

### Error 2026-05-21T01:02:45+00:00
```
2026-05-21T01:02:45.6931274Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-05-21T01:02:45.7512269Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-05-21T01:03:55.8429999Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-05-21T01:03:55.8430903Z     resource_cluster_test.go:1304: Step 1/4 error: Error running apply: exit status 1
2026-05-21T01:03:55.8431731Z         
2026-05-21T01:03:55.8432379Z         Error: error creating project: test-acc-tf-p-6987558635126756368
2026-05-21T01:03:55.8432821Z         
2026-05-21T01:03:55.8433145Z           with mongodbatlas_project.test,
2026-05-21T01:03:55.8433780Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:03:55.8434429Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:03:55.8434792Z         
2026-05-21T01:03:55.8435295Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:03:55.8436244Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:03:55.8436981Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:03:55.8913453Z --- FAIL: TestAccCluster_basic_RedactClientLogData (70.20s)
```

- 2026-05-22 PASS 44 minutes
- 2026-05-23 PASS 37 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 28 minutes
- 2026-05-26 PASS 25 minutes
- 2026-05-27 PASS 54 minutes
- 2026-05-28

### Error 2026-05-28T01:01:02+00:00
```
2026-05-28T01:01:02.3486228Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-05-28T01:01:02.3490942Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-05-28T01:01:04.5306773Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-05-28T01:01:04.5307743Z     resource_cluster_test.go:1281: Step 1/4 error: Error running apply: exit status 1
2026-05-28T01:01:04.5308422Z         
2026-05-28T01:01:04.5309149Z         Error: error creating project: test-acc-tf-p-4699407062096857611
2026-05-28T01:01:04.5309751Z         
2026-05-28T01:01:04.5310231Z           with mongodbatlas_project.test,
2026-05-28T01:01:04.5311212Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T01:01:04.5312276Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:01:04.5312791Z         
2026-05-28T01:01:04.5313601Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:01:04.5314751Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:01:04.5315860Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:01:04.5316924Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:01:04.5317601Z         BadRequestDetail: 
2026-05-28T01:01:04.5833036Z --- FAIL: TestAccCluster_basic_RedactClientLogData (2.24s)
```

- 2026-05-29 PASS 32 minutes
- 2026-05-30

### Error 2026-05-30T01:05:57+00:00
```
2026-05-30T01:05:57.0083247Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-05-30T01:05:57.0101742Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-05-30T01:07:18.7925501Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-05-30T01:07:18.7926148Z     resource_cluster_test.go:1281: Step 1/4 error: Error running apply: exit status 1
2026-05-30T01:07:18.7926752Z         
2026-05-30T01:07:18.7927528Z         Error: error creating project: test-acc-tf-p-5218674366028621740
2026-05-30T01:07:18.7928138Z         
2026-05-30T01:07:18.7928527Z           with mongodbatlas_project.test,
2026-05-30T01:07:18.7929399Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:07:18.7930011Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:07:18.7930351Z         
2026-05-30T01:07:18.7930851Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:07:18.7931532Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:07:18.7932154Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:07:18.8409194Z --- FAIL: TestAccCluster_basic_RedactClientLogData (81.83s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 33 minutes
- 2026-06-02

### Error 2026-06-02T01:07:53+00:00
```
2026-06-02T01:07:53.1495545Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-06-02T01:07:53.1537084Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-06-02T01:09:20.7363668Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-06-02T01:09:20.7364649Z     resource_cluster_test.go:1281: Step 1/4 error: Error running apply: exit status 1
2026-06-02T01:09:20.7365371Z         
2026-06-02T01:09:20.7366145Z         Error: error creating project: test-acc-tf-p-4486944390187985457
2026-06-02T01:09:20.7366781Z         
2026-06-02T01:09:20.7367319Z           with mongodbatlas_project.test,
2026-06-02T01:09:20.7368538Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:09:20.7369538Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:09:20.7370074Z         
2026-06-02T01:09:20.7370899Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:09:20.7372044Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:09:20.7373093Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:09:20.7860146Z --- FAIL: TestAccCluster_basic_RedactClientLogData (87.63s)
```

- 2026-06-03 PASS 33 minutes
- 2026-06-04 PASS 54 minutes
- 2026-06-05 PASS 28 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 30 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 26 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 28 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 25 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

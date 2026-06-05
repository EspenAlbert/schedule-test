# project/project/TestAccProject_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 22) FAIL(x 9)
Success rate: 70.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:56](#error-2026-05-09t0056550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.05s
[2026-05-16 00:55](#error-2026-05-16t0055420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 97.09s
[2026-05-19 01:03](#error-2026-05-19t0103150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.08s
[2026-05-21 01:04](#error-2026-05-21t0104310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.03s
[2026-05-23 01:02](#error-2026-05-23t0102270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.10s
[2026-05-26 02:10](#error-2026-05-26t0210570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.07s
[2026-05-28 00:58](#error-2026-05-28t0058340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.08s
[2026-05-30 01:02](#error-2026-05-30t0102110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.01s
[2026-06-02 01:12](#error-2026-06-02t0112190000) |  | dev |  | 200.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 5 minutes
  - PASS 3 minutes
- 2026-05-08 PASS 7 minutes
- 2026-05-09

### Error 2026-05-09T00:56:55+00:00
```
2026-05-09T00:56:55.2636662Z === RUN   TestAccProject_basic
2026-05-09T00:56:55.2668946Z === CONT  TestAccProject_basic
2026-05-09T00:56:55.2755637Z === NAME  TestAccProject_basic
2026-05-09T00:56:55.2756140Z     resource_project_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-05-09T00:56:55.2756547Z         
2026-05-09T00:56:55.2757303Z         Error: error creating project: test-acc-tf-p-92935376865111139
2026-05-09T00:56:55.2757673Z         
2026-05-09T00:56:55.2757979Z           with mongodbatlas_project.test,
2026-05-09T00:56:55.2758591Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:56:55.2759160Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:56:55.2759464Z         
2026-05-09T00:56:55.2759924Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:56:55.2760572Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:56:55.2761160Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:56:55.2761685Z --- FAIL: TestAccProject_basic (72.46s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 4 minutes
- 2026-05-12 PASS 5 minutes
- 2026-05-13 PASS 4 minutes
- 2026-05-14 PASS 5 minutes
- 2026-05-15 PASS 3 minutes
- 2026-05-16

### Error 2026-05-16T00:55:42+00:00
```
2026-05-16T00:55:42.7282991Z === RUN   TestAccProject_basic
2026-05-16T00:55:42.7294248Z === CONT  TestAccProject_basic
2026-05-16T00:55:42.7435959Z === NAME  TestAccProject_basic
2026-05-16T00:55:42.7436463Z     resource_project_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-05-16T00:55:42.7436866Z         
2026-05-16T00:55:42.7437296Z         Error: error creating project: test-acc-tf-p-6945706671557741248
2026-05-16T00:55:42.7437660Z         
2026-05-16T00:55:42.7437969Z           with mongodbatlas_project.test,
2026-05-16T00:55:42.7438581Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T00:55:42.7439155Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T00:55:42.7439456Z         
2026-05-16T00:55:42.7439930Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T00:55:42.7440714Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T00:55:42.7441312Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:42.7441694Z --- FAIL: TestAccProject_basic (97.86s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 4 minutes
- 2026-05-19

### Error 2026-05-19T01:03:15+00:00
```
2026-05-19T01:03:15.0627357Z === RUN   TestAccProject_basic
2026-05-19T01:03:15.0638658Z === CONT  TestAccProject_basic
2026-05-19T01:03:15.0705487Z === NAME  TestAccProject_basic
2026-05-19T01:03:15.0705998Z     resource_project_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-05-19T01:03:15.0706421Z         
2026-05-19T01:03:15.0706864Z         Error: error creating project: test-acc-tf-p-4395456886002111741
2026-05-19T01:03:15.0707240Z         
2026-05-19T01:03:15.0707556Z           with mongodbatlas_project.test,
2026-05-19T01:03:15.0708179Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:03:15.0708756Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:03:15.0709077Z         
2026-05-19T01:03:15.0709559Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:03:15.0710212Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:03:15.0710973Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:15.0711373Z --- FAIL: TestAccProject_basic (68.85s)
```

- 2026-05-20 PASS 6 minutes
- 2026-05-21

### Error 2026-05-21T01:04:31+00:00
```
2026-05-21T01:04:31.9138396Z === RUN   TestAccProject_basic
2026-05-21T01:04:31.9154970Z === CONT  TestAccProject_basic
2026-05-21T01:04:31.9205749Z === NAME  TestAccProject_basic
2026-05-21T01:04:31.9206245Z     resource_project_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-05-21T01:04:31.9206746Z         
2026-05-21T01:04:31.9207291Z         Error: error creating project: test-acc-tf-p-8689355890480384305
2026-05-21T01:04:31.9207665Z         
2026-05-21T01:04:31.9208082Z           with mongodbatlas_project.test,
2026-05-21T01:04:31.9208746Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:04:31.9209482Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:04:31.9209791Z         
2026-05-21T01:04:31.9210520Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:04:31.9211464Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:04:31.9212656Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:31.9213336Z --- FAIL: TestAccProject_basic (68.31s)
```

- 2026-05-22 PASS 5 minutes
- 2026-05-23

### Error 2026-05-23T01:02:27+00:00
```
2026-05-23T01:02:27.0933737Z === RUN   TestAccProject_basic
2026-05-23T01:02:27.0947773Z === CONT  TestAccProject_basic
2026-05-23T01:02:27.1039798Z === NAME  TestAccProject_basic
2026-05-23T01:02:27.1040310Z     resource_project_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-05-23T01:02:27.1040723Z         
2026-05-23T01:02:27.1041148Z         Error: error creating project: test-acc-tf-p-4393572213315533138
2026-05-23T01:02:27.1041510Z         
2026-05-23T01:02:27.1041816Z           with mongodbatlas_project.test,
2026-05-23T01:02:27.1042437Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:02:27.1043012Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:02:27.1043321Z         
2026-05-23T01:02:27.1043793Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:02:27.1044448Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:02:27.1045049Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:27.1045440Z --- FAIL: TestAccProject_basic (71.97s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 3 minutes
- 2026-05-26

### Error 2026-05-26T02:10:57+00:00
```
2026-05-26T02:10:57.1889242Z === RUN   TestAccProject_basic
2026-05-26T02:10:57.1900170Z === CONT  TestAccProject_basic
2026-05-26T02:10:57.1956917Z === NAME  TestAccProject_basic
2026-05-26T02:10:57.1957414Z     resource_project_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-05-26T02:10:57.1957813Z         
2026-05-26T02:10:57.1958438Z         Error: error creating project: test-acc-tf-p-3580242143100336329
2026-05-26T02:10:57.1958794Z         
2026-05-26T02:10:57.1959092Z           with mongodbatlas_project.test,
2026-05-26T02:10:57.1959701Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:10:57.1960281Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:10:57.1960578Z         
2026-05-26T02:10:57.1961040Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:10:57.1961694Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:10:57.1962281Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:57.1963067Z --- FAIL: TestAccProject_basic (69.66s)
```

- 2026-05-27 PASS 8 minutes
- 2026-05-28

### Error 2026-05-28T00:58:34+00:00
```
2026-05-28T00:58:34.1575107Z === RUN   TestAccProject_basic
2026-05-28T00:58:34.1604606Z === CONT  TestAccProject_basic
2026-05-28T00:58:34.1674447Z === NAME  TestAccProject_basic
2026-05-28T00:58:34.1674971Z     resource_project_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-05-28T00:58:34.1675384Z         
2026-05-28T00:58:34.1675808Z         Error: error creating project: test-acc-tf-p-5352459173700204916
2026-05-28T00:58:34.1676191Z         
2026-05-28T00:58:34.1676499Z           with mongodbatlas_project.test,
2026-05-28T00:58:34.1677344Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T00:58:34.1677936Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T00:58:34.1678253Z         
2026-05-28T00:58:34.1678734Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T00:58:34.1679392Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T00:58:34.1680004Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:58:34.1690984Z    test_terraform_path=/home/runner/work/_temp/c3dcaafc-40b4-4a81-a401-7f402cdf42d1/terraform test_working_directory=/tmp/plugintest540232221
2026-05-28T00:58:34.1697670Z --- FAIL: TestAccProject_basic (67.84s)
```

- 2026-05-29 PASS 4 minutes
- 2026-05-30

### Error 2026-05-30T01:02:11+00:00
```
2026-05-30T01:02:11.3443459Z === RUN   TestAccProject_basic
2026-05-30T01:02:11.3455213Z === CONT  TestAccProject_basic
2026-05-30T01:02:11.3554728Z === NAME  TestAccProject_basic
2026-05-30T01:02:11.3555294Z     resource_project_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-05-30T01:02:11.3555741Z         
2026-05-30T01:02:11.3556189Z         Error: error creating project: test-acc-tf-p-5245599256128626833
2026-05-30T01:02:11.3556576Z         
2026-05-30T01:02:11.3556897Z           with mongodbatlas_project.test,
2026-05-30T01:02:11.3557544Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:02:11.3558152Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:02:11.3558483Z         
2026-05-30T01:02:11.3558984Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:02:11.3559677Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:02:11.3560464Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:11.3560888Z --- FAIL: TestAccProject_basic (75.08s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 4 minutes
- 2026-06-02

### Error 2026-06-02T01:12:19+00:00
```
2026-06-02T01:12:19.2426801Z === RUN   TestAccProject_basic
2026-06-02T01:12:19.2442804Z === CONT  TestAccProject_basic
2026-06-02T01:12:19.2710668Z === NAME  TestAccProject_basic
2026-06-02T01:12:19.2711650Z     resource_project_test.go:564: Step 1/4 error: Error running apply: exit status 1
2026-06-02T01:12:19.2712354Z         
2026-06-02T01:12:19.2713070Z         Error: error creating project: test-acc-tf-p-614046579363125713
2026-06-02T01:12:19.2713698Z         
2026-06-02T01:12:19.2714222Z           with mongodbatlas_project.test,
2026-06-02T01:12:19.2715272Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:19.2716250Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:12:19.2716783Z         
2026-06-02T01:12:19.2717155Z         Post
2026-06-02T01:12:19.2718154Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups?projectOwnerId=5e4bc367c6b0f41bb9bbb178":
2026-06-02T01:12:19.2719357Z         read tcp 10.1.0.154:41720->3.228.247.77:443: read: connection timed out
2026-06-02T01:12:19.2730175Z   
2026-06-02T01:12:19.2740040Z --- FAIL: TestAccProject_basic (200.78s)
```

- 2026-06-03 PASS 3 minutes
- 2026-06-04 PASS 5 minutes
- 2026-06-05 PASS 3 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 3 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 6 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 6 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 7 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

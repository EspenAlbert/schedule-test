# project/projectinvitation/TestAccProjectDSProjectInvitation_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 21) FAIL(x 10)
Success rate: 67.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 01:00](#error-2026-05-07t0100230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.02s
[2026-05-09 00:57](#error-2026-05-09t0057580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.03s
[2026-05-12 00:59](#error-2026-05-12t0059160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.05s
[2026-05-19 01:03](#error-2026-05-19t0103150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.01s
[2026-05-21 01:05](#error-2026-05-21t0105200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.01s
[2026-05-23 01:02](#error-2026-05-23t0102270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.05s
[2026-05-26 02:11](#error-2026-05-26t0211020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.06s
[2026-05-28 01:00](#error-2026-05-28t0100070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 105.03s
[2026-05-30 01:02](#error-2026-05-30t0102340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.02s
[2026-06-02 01:12](#error-2026-06-02t0112190000) |  | dev |  | 199.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - FAIL a minute

### Error 2026-05-07T01:00:23+00:00
```
2026-05-07T01:00:23.5625805Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-05-07T01:00:23.5636745Z   
2026-05-07T01:00:23.5637252Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-05-07T01:00:23.5637714Z         
2026-05-07T01:00:23.5638140Z         Error: error creating project: test-acc-tf-p-7206442474964106601
2026-05-07T01:00:23.5638505Z         
2026-05-07T01:00:23.5638807Z           with mongodbatlas_project.test,
2026-05-07T01:00:23.5639423Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-07T01:00:23.5639999Z           13: 		resource "mongodbatlas_project" "test" {
2026-05-07T01:00:23.5640305Z         
2026-05-07T01:00:23.5640782Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-07T01:00:23.5641439Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-07T01:00:23.5642029Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-07T01:00:23.5642477Z --- FAIL: TestAccProjectDSProjectInvitation_basic (65.15s)
```

  - PASS 9 seconds
- 2026-05-08 PASS 10 seconds
- 2026-05-09

### Error 2026-05-09T00:57:58+00:00
```
2026-05-09T00:57:58.8357333Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-05-09T00:57:58.8371456Z   
2026-05-09T00:57:58.8371971Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-05-09T00:57:58.8372448Z         
2026-05-09T00:57:58.8372869Z         Error: error creating project: test-acc-tf-p-1528284639127164806
2026-05-09T00:57:58.8373230Z         
2026-05-09T00:57:58.8373530Z           with mongodbatlas_project.test,
2026-05-09T00:57:58.8374136Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-09T00:57:58.8374723Z           13: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:57:58.8375019Z         
2026-05-09T00:57:58.8375479Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:57:58.8376126Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:57:58.8377013Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:57:58.8377503Z --- FAIL: TestAccProjectDSProjectInvitation_basic (89.33s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 6 seconds
- 2026-05-12

### Error 2026-05-12T00:59:16+00:00
```
2026-05-12T00:59:16.8760027Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-05-12T00:59:16.8771329Z   
2026-05-12T00:59:16.8771856Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-05-12T00:59:16.8772327Z         
2026-05-12T00:59:16.8772871Z         Error: error creating project: test-acc-tf-p-6274514339340078292
2026-05-12T00:59:16.8773379Z         
2026-05-12T00:59:16.8773704Z           with mongodbatlas_project.test,
2026-05-12T00:59:16.8774328Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-12T00:59:16.8775053Z           13: 		resource "mongodbatlas_project" "test" {
2026-05-12T00:59:16.8775380Z         
2026-05-12T00:59:16.8775861Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-12T00:59:16.8776513Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-12T00:59:16.8777115Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T00:59:16.8777584Z --- FAIL: TestAccProjectDSProjectInvitation_basic (64.46s)
```

- 2026-05-13 PASS 8 seconds
- 2026-05-14 PASS 39 seconds
- 2026-05-15 PASS 7 seconds
- 2026-05-16 PASS 50 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 6 seconds
- 2026-05-19

### Error 2026-05-19T01:03:15+00:00
```
2026-05-19T01:03:15.0765537Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-05-19T01:03:15.0776858Z   
2026-05-19T01:03:15.0777356Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-05-19T01:03:15.0777821Z         
2026-05-19T01:03:15.0778363Z         Error: error creating project: test-acc-tf-p-1479897183129711020
2026-05-19T01:03:15.0778745Z         
2026-05-19T01:03:15.0779066Z           with mongodbatlas_project.test,
2026-05-19T01:03:15.0779689Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-19T01:03:15.0780279Z           13: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:03:15.0780586Z         
2026-05-19T01:03:15.0781172Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:03:15.0781836Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:03:15.0782486Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:15.0783134Z --- FAIL: TestAccProjectDSProjectInvitation_basic (68.13s)
```

- 2026-05-20 PASS 8 seconds
- 2026-05-21

### Error 2026-05-21T01:05:20+00:00
```
2026-05-21T01:05:20.6639612Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-05-21T01:05:20.6652322Z    test_terraform_path=/home/runner/work/_temp/497b9824-ac21-40ab-b082-78bb5fc4c80f/terraform test_name=TestAccProjectDSProjectInvitation_basic test_working_directory=/tmp/plugintest1656075523 test_step_number=1
2026-05-21T01:05:20.6653521Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-05-21T01:05:20.6653998Z         
2026-05-21T01:05:20.6654425Z         Error: error creating project: test-acc-tf-p-1646725022522166496
2026-05-21T01:05:20.6654804Z         
2026-05-21T01:05:20.6655106Z           with mongodbatlas_project.test,
2026-05-21T01:05:20.6655718Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-21T01:05:20.6656309Z           13: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:05:20.6656622Z         
2026-05-21T01:05:20.6657093Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:05:20.6657925Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:05:20.6658549Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:20.6659003Z --- FAIL: TestAccProjectDSProjectInvitation_basic (68.10s)
```

- 2026-05-22 PASS 8 seconds
- 2026-05-23

### Error 2026-05-23T01:02:27+00:00
```
2026-05-23T01:02:27.1105304Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-05-23T01:02:27.1116402Z    test_step_number=1
2026-05-23T01:02:27.1116930Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-05-23T01:02:27.1117515Z         
2026-05-23T01:02:27.1117941Z         Error: error creating project: test-acc-tf-p-8868493163411075879
2026-05-23T01:02:27.1118305Z         
2026-05-23T01:02:27.1118608Z           with mongodbatlas_project.test,
2026-05-23T01:02:27.1119223Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-23T01:02:27.1119808Z           13: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:02:27.1120113Z         
2026-05-23T01:02:27.1120590Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:02:27.1121242Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:02:27.1121841Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:27.1122288Z --- FAIL: TestAccProjectDSProjectInvitation_basic (73.53s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 7 seconds
- 2026-05-26

### Error 2026-05-26T02:11:02+00:00
```
2026-05-26T02:11:02.8818518Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-05-26T02:11:02.8832813Z   
2026-05-26T02:11:02.8833326Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-05-26T02:11:02.8833799Z         
2026-05-26T02:11:02.8834238Z         Error: error creating project: test-acc-tf-p-8854254462332234414
2026-05-26T02:11:02.8834607Z         
2026-05-26T02:11:02.8834906Z           with mongodbatlas_project.test,
2026-05-26T02:11:02.8835526Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-26T02:11:02.8836118Z           13: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:11:02.8836430Z         
2026-05-26T02:11:02.8836907Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:11:02.8837564Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:11:02.8838493Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:11:02.8838960Z --- FAIL: TestAccProjectDSProjectInvitation_basic (68.56s)
```

- 2026-05-27 PASS 8 seconds
- 2026-05-28

### Error 2026-05-28T01:00:07+00:00
```
2026-05-28T01:00:07.4380014Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-05-28T01:00:07.4393448Z   
2026-05-28T01:00:07.4393989Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-05-28T01:00:07.4394474Z         
2026-05-28T01:00:07.4394913Z         Error: error creating project: test-acc-tf-p-4393456994653091073
2026-05-28T01:00:07.4395286Z         
2026-05-28T01:00:07.4395597Z           with mongodbatlas_project.test,
2026-05-28T01:00:07.4396219Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-28T01:00:07.4396806Z           13: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:00:07.4397530Z         
2026-05-28T01:00:07.4398030Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T01:00:07.4398696Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T01:00:07.4399312Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:07.4399778Z --- FAIL: TestAccProjectDSProjectInvitation_basic (105.32s)
```

- 2026-05-29 PASS 6 seconds
- 2026-05-30

### Error 2026-05-30T01:02:34+00:00
```
2026-05-30T01:02:34.9331321Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-05-30T01:02:34.9343964Z   
2026-05-30T01:02:34.9344506Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-05-30T01:02:34.9345012Z         
2026-05-30T01:02:34.9345466Z         Error: error creating project: test-acc-tf-p-2130289816346564074
2026-05-30T01:02:34.9345857Z         
2026-05-30T01:02:34.9346346Z           with mongodbatlas_project.test,
2026-05-30T01:02:34.9347005Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-30T01:02:34.9347621Z           13: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:02:34.9347945Z         
2026-05-30T01:02:34.9348444Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:02:34.9349130Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:02:34.9349949Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:34.9350499Z --- FAIL: TestAccProjectDSProjectInvitation_basic (71.24s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 6 seconds
- 2026-06-02

### Error 2026-06-02T01:12:19+00:00
```
2026-06-02T01:12:19.2842477Z === RUN   TestAccProjectDSProjectInvitation_basic
2026-06-02T01:12:19.2859464Z   
2026-06-02T01:12:19.2860305Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-06-02T01:12:19.2861241Z         
2026-06-02T01:12:19.2861968Z         Error: error creating project: test-acc-tf-p-50527551344950436
2026-06-02T01:12:19.2862606Z         
2026-06-02T01:12:19.2863139Z           with mongodbatlas_project.test,
2026-06-02T01:12:19.2864223Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:19.2865244Z           13: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:12:19.2865782Z         
2026-06-02T01:12:19.2866533Z         Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": read tcp
2026-06-02T01:12:19.2867519Z         10.1.0.154:37912->3.231.133.249:443: read: connection timed out
2026-06-02T01:12:19.2868326Z --- FAIL: TestAccProjectDSProjectInvitation_basic (199.70s)
```

- 2026-06-03 PASS 6 seconds
- 2026-06-04 PASS 54 seconds
- 2026-06-05 PASS 7 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 6 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 9 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 10 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 10 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

# project/projectinvitation/TestAccProjectRSProjectInvitation_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 8)
Success rate: 74.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:57](#error-2026-05-09t0057580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.01s
[2026-05-16 00:55](#error-2026-05-16t0055580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s
[2026-05-19 01:03](#error-2026-05-19t0103150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.04s
[2026-05-21 01:05](#error-2026-05-21t0105200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.08s
[2026-05-23 01:02](#error-2026-05-23t0102270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.06s
[2026-05-28 01:00](#error-2026-05-28t0100070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.01s
[2026-05-30 01:02](#error-2026-05-30t0102340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s
[2026-06-02 01:12](#error-2026-06-02t0112190000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 49 seconds
  - PASS 13 seconds
- 2026-05-08 PASS 13 seconds
- 2026-05-09

### Error 2026-05-09T00:57:58+00:00
```
2026-05-09T00:57:58.8378082Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-05-09T00:57:58.8389585Z   
2026-05-09T00:57:58.8390053Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-09T00:57:58.8390493Z         
2026-05-09T00:57:58.8390914Z         Error: error creating project: test-acc-tf-p-5836673132693746147
2026-05-09T00:57:58.8391275Z         
2026-05-09T00:57:58.8391567Z           with mongodbatlas_project.test,
2026-05-09T00:57:58.8392170Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:57:58.8392735Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:57:58.8393029Z         
2026-05-09T00:57:58.8393635Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:57:58.8394275Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:57:58.8394860Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:57:58.8395297Z --- FAIL: TestAccProjectRSProjectInvitation_basic (77.11s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 10 seconds
- 2026-05-12 PASS a minute
- 2026-05-13 PASS 9 seconds
- 2026-05-14 PASS a minute
- 2026-05-15 PASS 9 seconds
- 2026-05-16

### Error 2026-05-16T00:55:58+00:00
```
2026-05-16T00:55:58.8135570Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-05-16T00:55:58.8146213Z    test_name=TestAccProjectRSProjectInvitation_basic test_terraform_path=/home/runner/work/_temp/ab143a40-7085-4e19-b09d-c0e73c0179ce/terraform test_working_directory=/tmp/plugintest2334001621 test_step_number=1
2026-05-16T00:55:58.8147406Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-16T00:55:58.8148276Z         
2026-05-16T00:55:58.8148722Z         Error: error creating project: test-acc-tf-p-6163812811186566394
2026-05-16T00:55:58.8149090Z         
2026-05-16T00:55:58.8149401Z           with mongodbatlas_project.test,
2026-05-16T00:55:58.8150027Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T00:55:58.8150608Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T00:55:58.8150921Z         
2026-05-16T00:55:58.8151400Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T00:55:58.8152052Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T00:55:58.8152659Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:58.8153109Z --- FAIL: TestAccProjectRSProjectInvitation_basic (63.49s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 10 seconds
- 2026-05-19

### Error 2026-05-19T01:03:15+00:00
```
2026-05-19T01:03:15.0783752Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-05-19T01:03:15.0794792Z    test_working_directory=/tmp/plugintest1462780129 test_step_number=1 test_name=TestAccProjectRSProjectInvitation_basic
2026-05-19T01:03:15.0795630Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-19T01:03:15.0796080Z         
2026-05-19T01:03:15.0796518Z         Error: error creating project: test-acc-tf-p-2562936894381529142
2026-05-19T01:03:15.0796887Z         
2026-05-19T01:03:15.0797198Z           with mongodbatlas_project.test,
2026-05-19T01:03:15.0797819Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:03:15.0798402Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:03:15.0798722Z         
2026-05-19T01:03:15.0799196Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:03:15.0799848Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:03:15.0800448Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:15.0801015Z --- FAIL: TestAccProjectRSProjectInvitation_basic (63.38s)
```

- 2026-05-20 PASS 14 seconds
- 2026-05-21

### Error 2026-05-21T01:05:20+00:00
```
2026-05-21T01:05:20.6659407Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-05-21T01:05:20.6670880Z    test_name=TestAccProjectRSProjectInvitation_basic
2026-05-21T01:05:20.6671488Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-21T01:05:20.6671938Z         
2026-05-21T01:05:20.6672346Z         Error: error creating project: test-acc-tf-p-5936224621456886143
2026-05-21T01:05:20.6672707Z         
2026-05-21T01:05:20.6673164Z           with mongodbatlas_project.test,
2026-05-21T01:05:20.6673780Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:05:20.6674357Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:05:20.6674667Z         
2026-05-21T01:05:20.6675130Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:05:20.6675831Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:05:20.6676433Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:20.6676881Z --- FAIL: TestAccProjectRSProjectInvitation_basic (69.83s)
```

- 2026-05-22 PASS 14 seconds
- 2026-05-23

### Error 2026-05-23T01:02:27+00:00
```
2026-05-23T01:02:27.1122691Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-05-23T01:02:27.1133651Z    test_working_directory=/tmp/plugintest495607328
2026-05-23T01:02:27.1134241Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-23T01:02:27.1134691Z         
2026-05-23T01:02:27.1135111Z         Error: error creating project: test-acc-tf-p-7343737851116909773
2026-05-23T01:02:27.1135473Z         
2026-05-23T01:02:27.1135888Z           with mongodbatlas_project.test,
2026-05-23T01:02:27.1136510Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:02:27.1137092Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:02:27.1137394Z         
2026-05-23T01:02:27.1137860Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:02:27.1138517Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:02:27.1139109Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:27.1139560Z --- FAIL: TestAccProjectRSProjectInvitation_basic (69.56s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 8 seconds
- 2026-05-26 PASS a minute
- 2026-05-27 PASS 10 seconds
- 2026-05-28

### Error 2026-05-28T01:00:07+00:00
```
2026-05-28T01:00:07.4400203Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-05-28T01:00:07.4411690Z    test_name=TestAccProjectRSProjectInvitation_basic
2026-05-28T01:00:07.4412435Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-28T01:00:07.4412908Z         
2026-05-28T01:00:07.4413333Z         Error: error creating project: test-acc-tf-p-6349633479620494191
2026-05-28T01:00:07.4413701Z         
2026-05-28T01:00:07.4414011Z           with mongodbatlas_project.test,
2026-05-28T01:00:07.4414628Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T01:00:07.4415217Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:00:07.4415525Z         
2026-05-28T01:00:07.4416000Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T01:00:07.4416667Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T01:00:07.4418258Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:07.4418743Z --- FAIL: TestAccProjectRSProjectInvitation_basic (80.14s)
```

- 2026-05-29 PASS 10 seconds
- 2026-05-30

### Error 2026-05-30T01:02:34+00:00
```
2026-05-30T01:02:34.9350966Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-05-30T01:02:34.9362648Z    test_step_number=1
2026-05-30T01:02:34.9363181Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-30T01:02:34.9363657Z         
2026-05-30T01:02:34.9364100Z         Error: error creating project: test-acc-tf-p-8480217957332925519
2026-05-30T01:02:34.9364630Z         
2026-05-30T01:02:34.9364949Z           with mongodbatlas_project.test,
2026-05-30T01:02:34.9365593Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:02:34.9366203Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:02:34.9366527Z         
2026-05-30T01:02:34.9367021Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:02:34.9367705Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:02:34.9368324Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:34.9368792Z --- FAIL: TestAccProjectRSProjectInvitation_basic (62.85s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 9 seconds
- 2026-06-02

### Error 2026-06-02T01:12:19+00:00
```
2026-06-02T01:12:19.2869039Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-06-02T01:12:19.2884736Z    test_terraform_path=/home/runner/work/_temp/d52bcfdd-1092-46f3-b235-9e0bc163766d/terraform test_step_number=1 test_name=TestAccProjectRSProjectInvitation_basic test_working_directory=/tmp/plugintest1676664841
2026-06-02T01:12:19.2886735Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-06-02T01:12:19.2887513Z         
2026-06-02T01:12:19.2888250Z         Error: error creating project: test-acc-tf-p-3975620969876409602
2026-06-02T01:12:19.2888889Z         
2026-06-02T01:12:19.2889420Z           with mongodbatlas_project.test,
2026-06-02T01:12:19.2890481Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:19.2891621Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:12:19.2892172Z         
2026-06-02T01:12:19.2892925Z         Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": dial tcp
2026-06-02T01:12:19.2893703Z         23.23.86.210:443: i/o timeout
2026-06-02T01:12:19.2894305Z --- FAIL: TestAccProjectRSProjectInvitation_basic (5.32s)
```

- 2026-06-03 PASS 9 seconds
- 2026-06-04 PASS 33 seconds
- 2026-06-05 PASS 8 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 9 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 14 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 14 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 16 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

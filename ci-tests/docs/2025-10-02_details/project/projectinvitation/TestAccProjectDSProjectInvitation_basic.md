# project/projectinvitation/TestAccProjectDSProjectInvitation_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:39](#error-2025-09-07t0039140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1d78704811492b53f3c/limits | qa | flaky_500 | 33.08s
[2025-09-14 01:13](#error-2025-09-14t0113050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c4c1411d835e95b4055/limits | qa | flaky_500 | 33.02s
[2025-09-15 07:06](#error-2025-09-15t0706190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b04ed444485797b5e628/limits | qa | flaky_500 | 35.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 6 seconds
- 2025-09-04 PASS 7 seconds
- 2025-09-05 PASS 5 seconds
- 2025-09-06 PASS 9 seconds
- 2025-09-07

### Error 2025-09-07T00:39:14+00:00
```
2025-09-07T00:39:14.4430107Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-09-07T00:39:14.4442360Z    test_step_number=1 test_name=TestAccProjectDSProjectInvitation_basic
2025-09-07T00:39:14.4442999Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2025-09-07T00:39:14.4443415Z         
2025-09-07T00:39:14.4443795Z         Error: error when getting project properties after create
2025-09-07T00:39:14.4444114Z         
2025-09-07T00:39:14.4444407Z           with mongodbatlas_project.test,
2025-09-07T00:39:14.4444995Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-09-07T00:39:14.4445534Z           13: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:39:14.4445822Z         
2025-09-07T00:39:14.4446260Z         error getting project (68bcd1d78704811492b53f3c): error getting project's
2025-09-07T00:39:14.4446705Z         limits (68bcd1d78704811492b53f3c):
2025-09-07T00:39:14.4447267Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d78704811492b53f3c/limits
2025-09-07T00:39:14.4447937Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:39:14.4448525Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:39:14.4448912Z         BadRequestDetail: 
2025-09-07T00:39:14.4449230Z --- FAIL: TestAccProjectDSProjectInvitation_basic (33.76s)
```

- 2025-09-08
  - PASS 5 seconds
  - PASS 19 seconds
  - PASS 5 seconds
- 2025-09-09 PASS 9 seconds
- 2025-09-10 PASS 5 seconds
- 2025-09-11 PASS 9 seconds
- 2025-09-12 PASS 9 seconds
- 2025-09-13 PASS 7 seconds
- 2025-09-14

### Error 2025-09-14T01:13:05+00:00
```
2025-09-14T01:13:05.0050792Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-09-14T01:13:05.0065142Z   
2025-09-14T01:13:05.0065630Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2025-09-14T01:13:05.0066089Z         
2025-09-14T01:13:05.0066478Z         Error: error when getting project properties after create
2025-09-14T01:13:05.0066827Z         
2025-09-14T01:13:05.0067126Z           with mongodbatlas_project.test,
2025-09-14T01:13:05.0067741Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-09-14T01:13:05.0068320Z           13: 		resource "mongodbatlas_project" "test" {
2025-09-14T01:13:05.0068620Z         
2025-09-14T01:13:05.0069081Z         error getting project (68c60c4c1411d835e95b4055): error getting project's
2025-09-14T01:13:05.0069568Z         limits (68c60c4c1411d835e95b4055):
2025-09-14T01:13:05.0070166Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c4c1411d835e95b4055/limits
2025-09-14T01:13:05.0070988Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T01:13:05.0071600Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T01:13:05.0072003Z         BadRequestDetail: 
2025-09-14T01:13:05.0072340Z --- FAIL: TestAccProjectDSProjectInvitation_basic (33.24s)
```

- 2025-09-15
  - PASS 6 seconds
  - FAIL 35 seconds

### Error 2025-09-15T07:06:19+00:00
```
2025-09-15T07:06:19.6800958Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-09-15T07:06:19.6813846Z   
2025-09-15T07:06:19.6814317Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2025-09-15T07:06:19.6814749Z         
2025-09-15T07:06:19.6815132Z         Error: error when getting project properties after create
2025-09-15T07:06:19.6815458Z         
2025-09-15T07:06:19.6815765Z           with mongodbatlas_project.test,
2025-09-15T07:06:19.6816356Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-09-15T07:06:19.6816899Z           13: 		resource "mongodbatlas_project" "test" {
2025-09-15T07:06:19.6817190Z         
2025-09-15T07:06:19.6817641Z         error getting project (68c7b04ed444485797b5e628): error getting project's
2025-09-15T07:06:19.6818094Z         limits (68c7b04ed444485797b5e628):
2025-09-15T07:06:19.6818664Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04ed444485797b5e628/limits
2025-09-15T07:06:19.6819324Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T07:06:19.6819902Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T07:06:19.6820300Z         BadRequestDetail: 
2025-09-15T07:06:19.6820628Z --- FAIL: TestAccProjectDSProjectInvitation_basic (35.70s)
```

- 2025-09-16 PASS 8 seconds
- 2025-09-17 PASS 7 seconds
- 2025-09-18 PASS 7 seconds
- 2025-09-19 PASS 7 seconds
- 2025-09-20 PASS 7 seconds
- 2025-09-21 PASS 7 seconds
- 2025-09-22 PASS 9 seconds
- 2025-09-23 PASS 5 seconds
- 2025-09-24 PASS 8 seconds
- 2025-09-25 PASS 8 seconds
- 2025-09-26 PASS 5 seconds
- 2025-09-27 PASS 7 seconds
- 2025-09-28 PASS 8 seconds
- 2025-09-29 PASS 5 seconds
- 2025-09-30
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 5 seconds
- 2025-10-01
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 5 seconds
  - PASS 7 seconds
- 2025-10-02 PASS 7 seconds
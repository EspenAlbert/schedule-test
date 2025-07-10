# assume_role/provider/TestAccSTSAssumeRole_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 109) FAIL(x 4)
Success rate: 96.46%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029450000) |  | qa |  | 1.01s
[2025-06-05 00:28](#error-2025-06-05t0028370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 2.10s
[2025-06-22 00:31](#error-2025-06-22t0031370000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574eeaaf7a0954e84ad599/limits | qa | flaky_500 | 34.04s
[2025-07-06 00:31](#error-2025-07-06t0031550000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c3fd690ae45e168bc9c8/limits | qa | flaky_500 | 35.07s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 7 seconds
- 2025-04-13 PASS 6 seconds
- 2025-04-14 PASS 6 seconds
- 2025-04-15 PASS 8 seconds
- 2025-04-16
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-04-17 PASS 6 seconds
- 2025-04-18 PASS 14 seconds
- 2025-04-19 PASS 6 seconds
- 2025-04-20 PASS 7 seconds
- 2025-04-21 PASS 12 seconds
- 2025-04-22 PASS 6 seconds
- 2025-04-23 PASS 6 seconds
- 2025-04-24 PASS 6 seconds
- 2025-04-25 PASS 6 seconds
- 2025-04-26 PASS 7 seconds
- 2025-04-27 PASS 11 seconds
- 2025-04-28 PASS 12 seconds
- 2025-04-29 PASS 8 seconds
- 2025-04-30
  - PASS 7 seconds
  - PASS 11 seconds
- 2025-05-01
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-02 PASS 6 seconds
- 2025-05-03 PASS 6 seconds
- 2025-05-04 PASS 7 seconds
- 2025-05-05 PASS 8 seconds
- 2025-05-06 PASS 12 seconds
- 2025-05-07 PASS 8 seconds
- 2025-05-08 PASS 6 seconds
- 2025-05-09 PASS 7 seconds
- 2025-05-10 PASS 6 seconds
- 2025-05-11

### Error 2025-05-11T00:29:45+00:00
```
2025-05-11T00:29:45.4004789Z === RUN   TestAccSTSAssumeRole_basic
2025-05-11T00:29:45.4007033Z === CONT  TestAccSTSAssumeRole_basic
2025-05-11T00:29:46.5006620Z   
2025-05-11T00:29:46.5007681Z     provider_authentication_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:46.5008521Z         
2025-05-11T00:29:46.5009436Z         Error: error creating project: test-acc-tf-p-3442444906220781428
2025-05-11T00:29:46.5010155Z         
2025-05-11T00:29:46.5010856Z           with mongodbatlas_project.test,
2025-05-11T00:29:46.5012188Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:46.5013648Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:46.5014173Z         
2025-05-11T00:29:46.5015015Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:46.5015683Z         type
2025-05-11T00:29:46.5491043Z --- FAIL: TestAccSTSAssumeRole_basic (1.15s)
```

- 2025-05-12 PASS 6 seconds
- 2025-05-13
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-05-14 PASS 7 seconds
- 2025-05-15 PASS 7 seconds
- 2025-05-16 PASS 10 seconds
- 2025-05-17 PASS 7 seconds
- 2025-05-18 PASS 6 seconds
- 2025-05-19 PASS 11 seconds
- 2025-05-20 PASS 6 seconds
- 2025-05-21 PASS 6 seconds
- 2025-05-22 PASS 8 seconds
- 2025-05-23 PASS 12 seconds
- 2025-05-24 PASS 8 seconds
- 2025-05-25 PASS 10 seconds
- 2025-05-26 PASS 9 seconds
- 2025-05-27 PASS 6 seconds
- 2025-05-28
  - PASS 9 seconds
  - PASS 10 seconds
- 2025-05-29 PASS 13 seconds
- 2025-05-30 PASS 11 seconds
- 2025-05-31 PASS 9 seconds
- 2025-06-01
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-06-02
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-06-03 PASS 12 seconds
- 2025-06-04 PASS 6 seconds
- 2025-06-05

### Error 2025-06-05T00:28:37+00:00
```
2025-06-05T00:28:37.9119474Z === RUN   TestAccSTSAssumeRole_basic
2025-06-05T00:28:37.9120196Z === CONT  TestAccSTSAssumeRole_basic
2025-06-05T00:28:40.8202703Z    test_step_number=1
2025-06-05T00:28:40.8203707Z     provider_authentication_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:28:40.8204496Z         
2025-06-05T00:28:40.8205263Z         Error: error creating project: test-acc-tf-p-985070352928772751
2025-06-05T00:28:40.8205911Z         
2025-06-05T00:28:40.8206478Z           with mongodbatlas_project.test,
2025-06-05T00:28:40.8207824Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:28:40.8208828Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:28:40.8209391Z         
2025-06-05T00:28:40.8210231Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:28:40.8211407Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:28:40.8212028Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:28:40.8695683Z --- FAIL: TestAccSTSAssumeRole_basic (2.96s)
```

- 2025-06-06 PASS 6 seconds
- 2025-06-07 PASS 7 seconds
- 2025-06-08 PASS 6 seconds
- 2025-06-09 PASS 11 seconds
- 2025-06-10 PASS 11 seconds
- 2025-06-11
  - PASS 7 seconds
  - PASS 12 seconds
- 2025-06-12 PASS 6 seconds
- 2025-06-13 PASS 10 seconds
- 2025-06-14 PASS 11 seconds
- 2025-06-15 PASS 7 seconds
- 2025-06-16 PASS 8 seconds
- 2025-06-17 PASS 12 seconds
- 2025-06-18 PASS 8 seconds
- 2025-06-19 PASS 7 seconds
- 2025-06-20 PASS 6 seconds
- 2025-06-21 PASS 7 seconds
- 2025-06-22

### Error 2025-06-22T00:31:37+00:00
```
2025-06-22T00:31:37.7912978Z === RUN   TestAccSTSAssumeRole_basic
2025-06-22T00:31:37.7914166Z === CONT  TestAccSTSAssumeRole_basic
2025-06-22T00:32:12.1647613Z    test_name=TestAccSTSAssumeRole_basic test_working_directory=/tmp/plugintest2243663720
2025-06-22T00:32:12.1648914Z     provider_authentication_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:32:12.1649632Z         
2025-06-22T00:32:12.1650292Z         Error: error when getting project properties after create
2025-06-22T00:32:12.1650849Z         
2025-06-22T00:32:12.1651361Z           with mongodbatlas_project.test,
2025-06-22T00:32:12.1652417Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T00:32:12.1653368Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:32:12.1653872Z         
2025-06-22T00:32:12.1654648Z         error getting project (68574eeaaf7a0954e84ad599): error getting project's
2025-06-22T00:32:12.1655369Z         limits (68574eeaaf7a0954e84ad599):
2025-06-22T00:32:12.1656448Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eeaaf7a0954e84ad599/limits
2025-06-22T00:32:12.1657454Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:32:12.1658148Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:32:12.1658607Z         BadRequestDetail: 
2025-06-22T00:32:12.2104642Z --- FAIL: TestAccSTSAssumeRole_basic (34.42s)
```

- 2025-06-23 PASS 6 seconds
- 2025-06-24 PASS 9 seconds
- 2025-06-25 PASS 10 seconds
- 2025-06-26 PASS 12 seconds
- 2025-06-27 PASS 10 seconds
- 2025-06-28 PASS 14 seconds
- 2025-06-29 PASS 7 seconds
- 2025-06-30 PASS 9 seconds
- 2025-07-01
  - PASS 6 seconds
  - PASS 13 seconds
  - PASS 6 seconds
  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 6 seconds
- 2025-07-02 PASS 12 seconds
- 2025-07-03 PASS 11 seconds
- 2025-07-04 PASS 11 seconds
- 2025-07-05 PASS 6 seconds
- 2025-07-06

### Error 2025-07-06T00:31:55+00:00
```
2025-07-06T00:31:55.8285718Z === RUN   TestAccSTSAssumeRole_basic
2025-07-06T00:31:55.8289324Z === CONT  TestAccSTSAssumeRole_basic
2025-07-06T00:32:30.5783612Z   
2025-07-06T00:32:30.5784653Z     provider_authentication_test.go:18: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:32:30.5785377Z         
2025-07-06T00:32:30.5786025Z         Error: error when getting project properties after create
2025-07-06T00:32:30.5786514Z         
2025-07-06T00:32:30.5786902Z           with mongodbatlas_project.test,
2025-07-06T00:32:30.5787729Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:32:30.5788508Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:32:30.5788811Z         
2025-07-06T00:32:30.5789387Z         error getting project (6869c3fd690ae45e168bc9c8): error getting project's
2025-07-06T00:32:30.5789957Z         limits (6869c3fd690ae45e168bc9c8):
2025-07-06T00:32:30.5790552Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c3fd690ae45e168bc9c8/limits
2025-07-06T00:32:30.5791701Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:32:30.5792347Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:32:30.5792743Z         BadRequestDetail: 
2025-07-06T00:32:31.5029098Z --- FAIL: TestAccSTSAssumeRole_basic (35.67s)
```

- 2025-07-07 PASS 6 seconds
- 2025-07-08 PASS 10 seconds
- 2025-07-09 PASS 6 seconds
- 2025-07-10 PASS 12 seconds
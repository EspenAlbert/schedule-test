# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:49](#error-2025-09-07t0049530000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1c7df5af52d2d4d43f7/limits | qa | flaky_500 | 35.04s
[2025-09-08 09:32](#error-2025-09-08t0932520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a20cddbf4f6e498a89/limits | qa | flaky_500 | 33.04s
[2025-09-14 00:29](#error-2025-09-14t0029100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c341411d835e95b1a1f/limits | qa | flaky_500 | 33.02s
[2025-09-15 06:21](#error-2025-09-15t0621250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b041fe60767b7f9affa4/limits | qa | flaky_500 | 33.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute
- 2025-09-05 PASS a minute
- 2025-09-06 PASS a minute
- 2025-09-07

### Error 2025-09-07T00:49:53+00:00
```
2025-09-07T00:49:53.5656652Z === RUN   TestAccBackupCompliancePolicy_basic
2025-09-07T00:49:53.5671158Z === CONT  TestAccBackupCompliancePolicy_basic
2025-09-07T00:49:53.5700405Z === NAME  TestAccBackupCompliancePolicy_basic
2025-09-07T00:49:53.5701877Z     resource_backup_compliance_policy_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:49:53.5702950Z         
2025-09-07T00:49:53.5703905Z         Error: error when getting project properties after create
2025-09-07T00:49:53.5704749Z         
2025-09-07T00:49:53.5705588Z           with mongodbatlas_project.test,
2025-09-07T00:49:53.5707164Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:49:53.5708427Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:49:53.5709406Z         
2025-09-07T00:49:53.5710498Z         error getting project (68bcd1c7df5af52d2d4d43f7): error getting project's
2025-09-07T00:49:53.5711605Z         limits (68bcd1c7df5af52d2d4d43f7):
2025-09-07T00:49:53.5712902Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1c7df5af52d2d4d43f7/limits
2025-09-07T00:49:53.5714369Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:49:53.5715859Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:49:53.5716826Z         BadRequestDetail: 
2025-09-07T00:49:53.5717638Z --- FAIL: TestAccBackupCompliancePolicy_basic (35.41s)
```

- 2025-09-08
  - PASS a minute
  - FAIL 33 seconds

### Error 2025-09-08T09:32:52+00:00
```
2025-09-08T09:32:52.4132917Z === RUN   TestAccBackupCompliancePolicy_basic
2025-09-08T09:32:52.4142604Z === CONT  TestAccBackupCompliancePolicy_basic
2025-09-08T09:32:52.4157043Z    test_working_directory=/tmp/plugintest3245814260
2025-09-08T09:32:52.4223755Z === NAME  TestAccBackupCompliancePolicy_basic
2025-09-08T09:32:52.4224436Z     resource_backup_compliance_policy_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:32:52.4224956Z         
2025-09-08T09:32:52.4225410Z         Error: error when getting project properties after create
2025-09-08T09:32:52.4225813Z         
2025-09-08T09:32:52.4226181Z           with mongodbatlas_project.test,
2025-09-08T09:32:52.4226855Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-08T09:32:52.4227475Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-08T09:32:52.4227840Z         
2025-09-08T09:32:52.4228364Z         error getting project (68bea2a20cddbf4f6e498a89): error getting project's
2025-09-08T09:32:52.4228908Z         limits (68bea2a20cddbf4f6e498a89):
2025-09-08T09:32:52.4229572Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a20cddbf4f6e498a89/limits
2025-09-08T09:32:52.4230329Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:32:52.4230987Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:32:52.4231667Z         BadRequestDetail: 
2025-09-08T09:32:52.4246256Z   
2025-09-08T09:32:52.4254815Z --- FAIL: TestAccBackupCompliancePolicy_basic (33.41s)
```

  - PASS a minute
- 2025-09-09 PASS a minute
- 2025-09-10 PASS a minute
- 2025-09-11 PASS a minute
- 2025-09-12 PASS a minute
- 2025-09-13 PASS a minute
- 2025-09-14

### Error 2025-09-14T00:29:10+00:00
```
2025-09-14T00:29:10.3496993Z === RUN   TestAccBackupCompliancePolicy_basic
2025-09-14T00:29:10.3508674Z === CONT  TestAccBackupCompliancePolicy_basic
2025-09-14T00:29:10.3523499Z === NAME  TestAccBackupCompliancePolicy_basic
2025-09-14T00:29:10.3524286Z     resource_backup_compliance_policy_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:29:10.3524813Z         
2025-09-14T00:29:10.3525275Z         Error: error when getting project properties after create
2025-09-14T00:29:10.3525672Z         
2025-09-14T00:29:10.3526031Z           with mongodbatlas_project.test,
2025-09-14T00:29:10.3526855Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:29:10.3527782Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:29:10.3528280Z         
2025-09-14T00:29:10.3528811Z         error getting project (68c60c341411d835e95b1a1f): error getting project's
2025-09-14T00:29:10.3529345Z         limits (68c60c341411d835e95b1a1f):
2025-09-14T00:29:10.3530132Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c341411d835e95b1a1f/limits
2025-09-14T00:29:10.3530886Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:29:10.3531541Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:29:10.3532009Z         BadRequestDetail: 
2025-09-14T00:29:10.3532388Z --- FAIL: TestAccBackupCompliancePolicy_basic (33.20s)
```

- 2025-09-15
  - PASS a minute
  - FAIL 33 seconds

### Error 2025-09-15T06:21:25+00:00
```
2025-09-15T06:21:25.1152263Z === RUN   TestAccBackupCompliancePolicy_basic
2025-09-15T06:21:25.1160048Z === CONT  TestAccBackupCompliancePolicy_basic
2025-09-15T06:21:25.1202073Z === NAME  TestAccBackupCompliancePolicy_basic
2025-09-15T06:21:25.1202760Z     resource_backup_compliance_policy_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:21:25.1203273Z         
2025-09-15T06:21:25.1203722Z         Error: error when getting project properties after create
2025-09-15T06:21:25.1204122Z         
2025-09-15T06:21:25.1204483Z           with mongodbatlas_project.test,
2025-09-15T06:21:25.1205156Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:21:25.1205769Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:21:25.1206131Z         
2025-09-15T06:21:25.1206651Z         error getting project (68c7b041fe60767b7f9affa4): error getting project's
2025-09-15T06:21:25.1207179Z         limits (68c7b041fe60767b7f9affa4):
2025-09-15T06:21:25.1208109Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b041fe60767b7f9affa4/limits
2025-09-15T06:21:25.1208863Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:21:25.1209621Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:21:25.1210083Z         BadRequestDetail: 
2025-09-15T06:21:25.1210448Z --- FAIL: TestAccBackupCompliancePolicy_basic (33.92s)
```

- 2025-09-16 PASS a minute
- 2025-09-17 PASS a minute
- 2025-09-18 PASS a minute
- 2025-09-19 PASS a minute
- 2025-09-20 PASS a minute
- 2025-09-21 PASS a minute
- 2025-09-22 PASS a minute
- 2025-09-23 PASS a minute
- 2025-09-24 PASS a minute
- 2025-09-25 PASS a minute
- 2025-09-26 PASS a minute
- 2025-09-27 PASS a minute
- 2025-09-28 PASS a minute
- 2025-09-29 PASS a minute
- 2025-09-30
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-02 PASS a minute
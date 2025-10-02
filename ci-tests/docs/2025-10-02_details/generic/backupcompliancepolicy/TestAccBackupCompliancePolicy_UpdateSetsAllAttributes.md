# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_UpdateSetsAllAttributes Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:49](#error-2025-09-07t0049530000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1c7df5af52d2d4d43f5/limits | qa | flaky_500 | 66.01s
[2025-09-08 09:32](#error-2025-09-08t0932520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a20cddbf4f6e498ade/limits | qa | flaky_500 | 33.05s
[2025-09-14 00:29](#error-2025-09-14t0029100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c341411d835e95b1a21/limits | qa | flaky_500 | 34.06s
[2025-09-15 06:21](#error-2025-09-15t0621250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b041d444485797b5d426/limits | qa | flaky_500 | 33.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute
- 2025-09-05 PASS a minute
- 2025-09-06 PASS a minute
- 2025-09-07

### Error 2025-09-07T00:49:53+00:00
```
2025-09-07T00:49:53.5665351Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-09-07T00:49:53.5669404Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-09-07T00:49:53.5747966Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-09-07T00:49:53.5749853Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-09-07T00:49:53.5751025Z         
2025-09-07T00:49:53.5752022Z         Error: error when getting project properties after create
2025-09-07T00:49:53.5752883Z         
2025-09-07T00:49:53.5753693Z           with mongodbatlas_project.test,
2025-09-07T00:49:53.5755027Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:49:53.5756280Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:49:53.5757062Z         
2025-09-07T00:49:53.5758144Z         error getting project (68bcd1c7df5af52d2d4d43f5): error getting project's
2025-09-07T00:49:53.5759434Z         limits (68bcd1c7df5af52d2d4d43f5):
2025-09-07T00:49:53.5760901Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1c7df5af52d2d4d43f5/limits
2025-09-07T00:49:53.5762400Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:49:53.5763722Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:49:53.5764692Z         BadRequestDetail: 
2025-09-07T00:49:53.5765624Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (66.06s)
```

- 2025-09-08
  - PASS a minute
  - FAIL 33 seconds

### Error 2025-09-08T09:32:52+00:00
```
2025-09-08T09:32:52.4138936Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-09-08T09:32:52.4141542Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-09-08T09:32:52.4246617Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-09-08T09:32:52.4247352Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:32:52.4247869Z         
2025-09-08T09:32:52.4248319Z         Error: error when getting project properties after create
2025-09-08T09:32:52.4248719Z         
2025-09-08T09:32:52.4249083Z           with mongodbatlas_project.test,
2025-09-08T09:32:52.4249749Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-08T09:32:52.4250381Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-08T09:32:52.4250747Z         
2025-09-08T09:32:52.4251381Z         error getting project (68bea2a20cddbf4f6e498ade): error getting project's
2025-09-08T09:32:52.4251929Z         limits (68bea2a20cddbf4f6e498ade):
2025-09-08T09:32:52.4252581Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a20cddbf4f6e498ade/limits
2025-09-08T09:32:52.4253330Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:32:52.4253980Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:32:52.4254442Z         BadRequestDetail: 
2025-09-08T09:32:52.4255333Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (33.45s)
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
2025-09-14T00:29:10.3505533Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-09-14T00:29:10.3508223Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-09-14T00:29:10.3633149Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-09-14T00:29:10.3633930Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:29:10.3634567Z         
2025-09-14T00:29:10.3635014Z         Error: error when getting project properties after create
2025-09-14T00:29:10.3635422Z         
2025-09-14T00:29:10.3635782Z           with mongodbatlas_project.test,
2025-09-14T00:29:10.3636449Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:29:10.3637058Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:29:10.3637524Z         
2025-09-14T00:29:10.3638044Z         error getting project (68c60c341411d835e95b1a21): error getting project's
2025-09-14T00:29:10.3638570Z         limits (68c60c341411d835e95b1a21):
2025-09-14T00:29:10.3639208Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c341411d835e95b1a21/limits
2025-09-14T00:29:10.3639946Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:29:10.3640594Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:29:10.3641058Z         BadRequestDetail: 
2025-09-14T00:29:10.3641962Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (34.62s)
```

- 2025-09-15
  - PASS a minute
  - FAIL 33 seconds

### Error 2025-09-15T06:21:25+00:00
```
2025-09-15T06:21:25.1156970Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-09-15T06:21:25.1159593Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-09-15T06:21:25.1177437Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-09-15T06:21:25.1178412Z     resource_backup_compliance_policy_test.go:129: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:21:25.1178942Z         
2025-09-15T06:21:25.1179392Z         Error: error when getting project properties after create
2025-09-15T06:21:25.1179793Z         
2025-09-15T06:21:25.1180154Z           with mongodbatlas_project.test,
2025-09-15T06:21:25.1181008Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:21:25.1181751Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:21:25.1182122Z         
2025-09-15T06:21:25.1182642Z         error getting project (68c7b041d444485797b5d426): error getting project's
2025-09-15T06:21:25.1183167Z         limits (68c7b041d444485797b5d426):
2025-09-15T06:21:25.1183819Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b041d444485797b5d426/limits
2025-09-15T06:21:25.1184584Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:21:25.1185251Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:21:25.1185718Z         BadRequestDetail: 
2025-09-15T06:21:25.1186162Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (33.68s)
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
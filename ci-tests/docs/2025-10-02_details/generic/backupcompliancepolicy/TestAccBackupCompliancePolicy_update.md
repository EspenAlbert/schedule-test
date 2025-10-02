# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_update Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL(x 5)
Success rate: 88.10%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:49](#error-2025-09-07t0049530000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1c7df5af52d2d4d43f6/limits | qa | flaky_500 | 100.05s
[2025-09-08 09:32](#error-2025-09-08t0932520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a20cddbf4f6e498ae1/limits | qa | flaky_500 | 34.02s
[2025-09-14 00:29](#error-2025-09-14t0029100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c341411d835e95b1ab3/limits | qa | flaky_500 | 34.06s
[2025-09-15 06:21](#error-2025-09-15t0621250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b041d444485797b5d427/limits | qa | flaky_500 | 35.00s
[2025-09-21 00:43](#error-2025-09-21t0043240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf46debd1cb41a3e70296c/limits | qa | flaky_500 | 111.10s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute
- 2025-09-05 PASS a minute
- 2025-09-06 PASS a minute
- 2025-09-07

### Error 2025-09-07T00:49:53+00:00
```
2025-09-07T00:49:53.5658339Z === RUN   TestAccBackupCompliancePolicy_update
2025-09-07T00:49:53.5670336Z === CONT  TestAccBackupCompliancePolicy_update
2025-09-07T00:49:53.5794182Z === NAME  TestAccBackupCompliancePolicy_update
2025-09-07T00:49:53.5795636Z     resource_backup_compliance_policy_test.go:35: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-09-07T00:49:53.5796787Z         
2025-09-07T00:49:53.5797741Z         Error: error when getting project properties after create
2025-09-07T00:49:53.5798595Z         
2025-09-07T00:49:53.5799559Z           with mongodbatlas_project.test,
2025-09-07T00:49:53.5800913Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-07T00:49:53.5802133Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:49:53.5802925Z         
2025-09-07T00:49:53.5803989Z         error getting project (68bcd1c7df5af52d2d4d43f6): error getting project's
2025-09-07T00:49:53.5805094Z         limits (68bcd1c7df5af52d2d4d43f6):
2025-09-07T00:49:53.5806405Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1c7df5af52d2d4d43f6/limits
2025-09-07T00:49:53.5807894Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:49:53.5809383Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:49:53.5810349Z         BadRequestDetail: 
2025-09-07T00:49:53.5811159Z --- FAIL: TestAccBackupCompliancePolicy_update (100.45s)
```

- 2025-09-08
  - PASS a minute
  - FAIL 34 seconds

### Error 2025-09-08T09:32:52+00:00
```
2025-09-08T09:32:52.4134451Z === RUN   TestAccBackupCompliancePolicy_update
2025-09-08T09:32:52.4140816Z === CONT  TestAccBackupCompliancePolicy_update
2025-09-08T09:32:52.4269788Z === NAME  TestAccBackupCompliancePolicy_update
2025-09-08T09:32:52.4270467Z     resource_backup_compliance_policy_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:32:52.4270982Z         
2025-09-08T09:32:52.4271728Z         Error: error when getting project properties after create
2025-09-08T09:32:52.4272143Z         
2025-09-08T09:32:52.4272515Z           with mongodbatlas_project.test,
2025-09-08T09:32:52.4273189Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-08T09:32:52.4273804Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-08T09:32:52.4274175Z         
2025-09-08T09:32:52.4274700Z         error getting project (68bea2a20cddbf4f6e498ae1): error getting project's
2025-09-08T09:32:52.4275241Z         limits (68bea2a20cddbf4f6e498ae1):
2025-09-08T09:32:52.4275895Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a20cddbf4f6e498ae1/limits
2025-09-08T09:32:52.4276646Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:32:52.4277301Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:32:52.4277763Z         BadRequestDetail: 
2025-09-08T09:32:52.4278173Z --- FAIL: TestAccBackupCompliancePolicy_update (34.20s)
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
2025-09-14T00:29:10.3498642Z === RUN   TestAccBackupCompliancePolicy_update
2025-09-14T00:29:10.3507755Z === CONT  TestAccBackupCompliancePolicy_update
2025-09-14T00:29:10.3611271Z === NAME  TestAccBackupCompliancePolicy_update
2025-09-14T00:29:10.3611995Z     resource_backup_compliance_policy_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:29:10.3612509Z         
2025-09-14T00:29:10.3612955Z         Error: error when getting project properties after create
2025-09-14T00:29:10.3613354Z         
2025-09-14T00:29:10.3613713Z           with mongodbatlas_project.test,
2025-09-14T00:29:10.3614385Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:29:10.3614999Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:29:10.3615360Z         
2025-09-14T00:29:10.3615865Z         error getting project (68c60c341411d835e95b1ab3): error getting project's
2025-09-14T00:29:10.3616386Z         limits (68c60c341411d835e95b1ab3):
2025-09-14T00:29:10.3617021Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c341411d835e95b1ab3/limits
2025-09-14T00:29:10.3617888Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:29:10.3618541Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:29:10.3619001Z         BadRequestDetail: 
2025-09-14T00:29:10.3632455Z    test_working_directory=/tmp/plugintest3259868745 test_name=TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-09-14T00:29:10.3641436Z --- FAIL: TestAccBackupCompliancePolicy_update (34.61s)
```

- 2025-09-15
  - PASS a minute
  - FAIL 35 seconds

### Error 2025-09-15T06:21:25+00:00
```
2025-09-15T06:21:25.1153820Z === RUN   TestAccBackupCompliancePolicy_update
2025-09-15T06:21:25.1159143Z === CONT  TestAccBackupCompliancePolicy_update
2025-09-15T06:21:25.1264735Z === NAME  TestAccBackupCompliancePolicy_update
2025-09-15T06:21:25.1265430Z     resource_backup_compliance_policy_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:21:25.1265941Z         
2025-09-15T06:21:25.1266395Z         Error: error when getting project properties after create
2025-09-15T06:21:25.1266793Z         
2025-09-15T06:21:25.1267153Z           with mongodbatlas_project.test,
2025-09-15T06:21:25.1267934Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:21:25.1268551Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:21:25.1268912Z         
2025-09-15T06:21:25.1269426Z         error getting project (68c7b041d444485797b5d427): error getting project's
2025-09-15T06:21:25.1269949Z         limits (68c7b041d444485797b5d427):
2025-09-15T06:21:25.1270594Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b041d444485797b5d427/limits
2025-09-15T06:21:25.1271332Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:21:25.1271985Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:21:25.1272448Z         BadRequestDetail: 
2025-09-15T06:21:25.1272829Z --- FAIL: TestAccBackupCompliancePolicy_update (35.03s)
```

- 2025-09-16 PASS a minute
- 2025-09-17 PASS a minute
- 2025-09-18 PASS a minute
- 2025-09-19 PASS a minute
- 2025-09-20 PASS a minute
- 2025-09-21

### Error 2025-09-21T00:43:24+00:00
```
2025-09-21T00:43:24.4036559Z === RUN   TestAccBackupCompliancePolicy_update
2025-09-21T00:43:24.4043951Z === CONT  TestAccBackupCompliancePolicy_update
2025-09-21T00:43:24.4066629Z === NAME  TestAccBackupCompliancePolicy_update
2025-09-21T00:43:24.4067899Z     resource_backup_compliance_policy_test.go:35: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-09-21T00:43:24.4068561Z         
2025-09-21T00:43:24.4069130Z         Error: error when getting project properties after create
2025-09-21T00:43:24.4069633Z         
2025-09-21T00:43:24.4070011Z           with mongodbatlas_project.test,
2025-09-21T00:43:24.4070793Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:43:24.4071667Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:43:24.4072142Z         
2025-09-21T00:43:24.4072717Z         error getting project (68cf46debd1cb41a3e70296c): error getting project's
2025-09-21T00:43:24.4073329Z         limits (68cf46debd1cb41a3e70296c):
2025-09-21T00:43:24.4074097Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf46debd1cb41a3e70296c/limits
2025-09-21T00:43:24.4074963Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:43:24.4075731Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:43:24.4076301Z         BadRequestDetail: 
2025-09-21T00:43:24.4076728Z --- FAIL: TestAccBackupCompliancePolicy_update (111.99s)
```

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
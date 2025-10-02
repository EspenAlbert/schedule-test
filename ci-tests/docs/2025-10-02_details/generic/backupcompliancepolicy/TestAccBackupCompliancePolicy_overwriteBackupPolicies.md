# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_overwriteBackupPolicies Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL(x 5)
Success rate: 88.10%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-08 09:32](#error-2025-09-08t0932520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a2341d8a498776144a/limits | qa | flaky_500 | 32.08s
[2025-09-10 00:33](#error-2025-09-10t0033430000) |  | dev | flaky_client | 402.08s
[2025-09-14 00:29](#error-2025-09-14t0029100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c341411d835e95b1aac/limits | qa | flaky_500 | 33.09s
[2025-09-15 06:21](#error-2025-09-15t0621250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b041fe60767b7f9affa6/limits | qa | flaky_500 | 34.01s
[2025-09-21 00:43](#error-2025-09-21t0043240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf46de5ccc8c4417186c51/limits | qa | flaky_500 | 846.10s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 35 minutes
- 2025-09-04 PASS 16 minutes
- 2025-09-05 PASS 17 minutes
- 2025-09-06 PASS 20 minutes
- 2025-09-07 PASS 20 minutes
- 2025-09-08
  - PASS 23 minutes
  - FAIL 32 seconds

### Error 2025-09-08T09:32:52+00:00
```
2025-09-08T09:32:52.4135979Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-08T09:32:52.4140355Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-08T09:32:52.4157522Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-08T09:32:52.4158373Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:32:52.4158905Z         
2025-09-08T09:32:52.4159359Z         Error: error when getting project properties after create
2025-09-08T09:32:52.4159758Z         
2025-09-08T09:32:52.4160111Z           with mongodbatlas_project.test,
2025-09-08T09:32:52.4160944Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-08T09:32:52.4161966Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-08T09:32:52.4162339Z         
2025-09-08T09:32:52.4162858Z         error getting project (68bea2a2341d8a498776144a): error getting project's
2025-09-08T09:32:52.4163388Z         limits (68bea2a2341d8a498776144a):
2025-09-08T09:32:52.4164051Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a2341d8a498776144a/limits
2025-09-08T09:32:52.4164946Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:32:52.4165600Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:32:52.4166065Z         BadRequestDetail: 
2025-09-08T09:32:52.4166510Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (32.77s)
```

  - PASS 18 minutes
- 2025-09-09 PASS 18 minutes
- 2025-09-10

### Error 2025-09-10T00:33:43+00:00
```
2025-09-10T00:33:43.0673103Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-10T00:33:43.0683063Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-10T00:33:43.0708284Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-10T00:33:43.0709508Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2025-09-10T00:33:43.0710740Z         
2025-09-10T00:33:43.0711327Z         Error: Error in create
2025-09-10T00:33:43.0711682Z         
2025-09-10T00:33:43.0712133Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-10T00:33:43.0712962Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-10T00:33:43.0713728Z           25: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-10T00:33:43.0714162Z         
2025-09-10T00:33:43.0714707Z         cluster=test-acc-tf-c-375168556206962222 didn't reach desired state: IDLE,
2025-09-10T00:33:43.0715348Z         error: Get
2025-09-10T00:33:43.0716195Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c0c5d53fcb0812ccf276bb/clusters/test-acc-tf-c-375168556206962222":
2025-09-10T00:33:43.0717016Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-09-10T00:33:43.0730199Z   
2025-09-10T00:33:43.0731177Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-10T00:33:43.0732209Z         
2025-09-10T00:33:43.0732936Z         Error: error when destroying resource
2025-09-10T00:33:43.0733379Z         
2025-09-10T00:33:43.0733830Z         error deleting project (68c0c5d53fcb0812ccf276bb):
2025-09-10T00:33:43.0734547Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c0c5d53fcb0812ccf276bb
2025-09-10T00:33:43.0735150Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-10T00:33:43.0735811Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-09-10T00:33:43.0736568Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-09-10T00:33:43.0737135Z         Params: [], BadRequestDetail: 
2025-09-10T00:33:43.0737671Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (402.79s)
```

- 2025-09-11 PASS 19 minutes
- 2025-09-12 PASS 15 minutes
- 2025-09-13 PASS 18 minutes
- 2025-09-14

### Error 2025-09-14T00:29:10+00:00
```
2025-09-14T00:29:10.3502925Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-14T00:29:10.3506986Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-14T00:29:10.3587118Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-14T00:29:10.3587944Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:29:10.3588455Z         
2025-09-14T00:29:10.3589067Z         Error: error when getting project properties after create
2025-09-14T00:29:10.3589615Z         
2025-09-14T00:29:10.3590259Z           with mongodbatlas_project.test,
2025-09-14T00:29:10.3591202Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:29:10.3591821Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:29:10.3592185Z         
2025-09-14T00:29:10.3592703Z         error getting project (68c60c341411d835e95b1aac): error getting project's
2025-09-14T00:29:10.3593234Z         limits (68c60c341411d835e95b1aac):
2025-09-14T00:29:10.3593871Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c341411d835e95b1aac/limits
2025-09-14T00:29:10.3594611Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:29:10.3595263Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:29:10.3595739Z         BadRequestDetail: 
2025-09-14T00:29:10.3596188Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (33.85s)
```

- 2025-09-15
  - PASS 13 minutes
  - FAIL 34 seconds

### Error 2025-09-15T06:21:25+00:00
```
2025-09-15T06:21:25.1154719Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-15T06:21:25.1158680Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-15T06:21:25.1224852Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-15T06:21:25.1225573Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:21:25.1226084Z         
2025-09-15T06:21:25.1226533Z         Error: error when getting project properties after create
2025-09-15T06:21:25.1226943Z         
2025-09-15T06:21:25.1227312Z           with mongodbatlas_project.test,
2025-09-15T06:21:25.1228105Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:21:25.1228722Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:21:25.1229079Z         
2025-09-15T06:21:25.1229596Z         error getting project (68c7b041fe60767b7f9affa6): error getting project's
2025-09-15T06:21:25.1230131Z         limits (68c7b041fe60767b7f9affa6):
2025-09-15T06:21:25.1230780Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b041fe60767b7f9affa6/limits
2025-09-15T06:21:25.1231523Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:21:25.1232178Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:21:25.1232641Z         BadRequestDetail: 
2025-09-15T06:21:25.1233083Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (34.11s)
```

- 2025-09-16 PASS 17 minutes
- 2025-09-17 PASS 15 minutes
- 2025-09-18 PASS 20 minutes
- 2025-09-19 PASS 14 minutes
- 2025-09-20 PASS 14 minutes
- 2025-09-21

### Error 2025-09-21T00:43:24+00:00
```
2025-09-21T00:43:24.4038308Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-21T00:43:24.4044935Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-21T00:43:24.4109845Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-21T00:43:24.4110689Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-09-21T00:43:24.4111270Z         
2025-09-21T00:43:24.4111733Z         Error: error when getting project properties after create
2025-09-21T00:43:24.4112155Z         
2025-09-21T00:43:24.4112545Z           with mongodbatlas_project.test,
2025-09-21T00:43:24.4113540Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:43:24.4114182Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:43:24.4114561Z         
2025-09-21T00:43:24.4115089Z         error getting project (68cf46de5ccc8c4417186c51): error getting project's
2025-09-21T00:43:24.4115634Z         limits (68cf46de5ccc8c4417186c51):
2025-09-21T00:43:24.4116296Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf46de5ccc8c4417186c51/limits
2025-09-21T00:43:24.4117406Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:43:24.4118086Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:43:24.4118564Z         BadRequestDetail: 
2025-09-21T00:43:24.4119029Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (846.98s)
```

- 2025-09-22 PASS 17 minutes
- 2025-09-23 PASS 14 minutes
- 2025-09-24 PASS 15 minutes
- 2025-09-25 PASS 17 minutes
- 2025-09-26 PASS 19 minutes
- 2025-09-27 PASS 15 minutes
- 2025-09-28 PASS 15 minutes
- 2025-09-29 PASS 14 minutes
- 2025-09-30
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 12 minutes
- 2025-10-01
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 14 minutes
  - PASS 13 minutes
- 2025-10-02 PASS 14 minutes
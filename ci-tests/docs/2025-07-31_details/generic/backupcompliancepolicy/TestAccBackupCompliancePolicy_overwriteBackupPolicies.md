# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_overwriteBackupPolicies Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 25) FAIL(x 7)
Success rate: 78.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:46](#error-2025-07-06t0046500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4027267b5775b682a2d/limits | qa | flaky_500 | 888.06s
[2025-07-10 13:08](#error-2025-07-10t1308520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbafffd583001f9eeb3c9/limits | qa | flaky_500 | 33.03s
[2025-07-11 03:52](#error-2025-07-11t0352360000) |  | dev | timeout | 12176.10s
[2025-07-14 03:31](#error-2025-07-14t0331030000) |  | dev | timeout | 10805.06s
[2025-07-20 00:34](#error-2025-07-20t0034050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3935426db7026b5b158e/limits | qa | flaky_500 | 32.07s
[2025-07-27 00:48](#error-2025-07-27t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573d8ef1f7377717a88ee/limits | qa | flaky_500 | 916.02s
[2025-07-31 00:31](#error-2025-07-31t0031500000) | ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/688ab92885f3692162ff2d14/clusters | dev | flaky_500 | 6.05s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 13 minutes
- 2025-07-03 PASS 14 minutes
- 2025-07-04 PASS 16 minutes
- 2025-07-05 PASS 10 minutes
- 2025-07-06

### Error 2025-07-06T00:46:50+00:00
```
2025-07-06T00:46:50.0775802Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-06T00:46:50.0782386Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-06T00:46:50.1028930Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-06T00:46:50.1030549Z     resource_backup_compliance_policy_test.go:82: Step 2/2, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-07-06T00:46:50.1031683Z         
2025-07-06T00:46:50.1032455Z         Error: error when getting project properties after create
2025-07-06T00:46:50.1033312Z         
2025-07-06T00:46:50.1033930Z           with mongodbatlas_project.test,
2025-07-06T00:46:50.1035113Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:46:50.1036200Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:46:50.1036801Z         
2025-07-06T00:46:50.1037692Z         error getting project (6869c4027267b5775b682a2d): error getting project's
2025-07-06T00:46:50.1038621Z         limits (6869c4027267b5775b682a2d):
2025-07-06T00:46:50.1039748Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4027267b5775b682a2d/limits
2025-07-06T00:46:50.1041249Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:46:50.1042402Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:46:50.1043367Z         BadRequestDetail: 
2025-07-06T00:46:50.1044136Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (888.58s)
```

- 2025-07-07 PASS 12 minutes
- 2025-07-08 PASS 13 minutes
- 2025-07-09 PASS 14 minutes
- 2025-07-10
  - PASS 12 minutes
  - FAIL 33 seconds

### Error 2025-07-10T13:08:52+00:00
```
2025-07-10T13:08:52.8108353Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-10T13:08:52.8117552Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-10T13:08:52.8131192Z    test_name=TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand test_terraform_path=/home/runner/work/_temp/ae2baaac-55e9-4a4a-a024-f9e26d4d8097/terraform test_working_directory=/tmp/plugintest832767432 test_step_number=1
2025-07-10T13:08:52.8158190Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-10T13:08:52.8159014Z     resource_backup_compliance_policy_test.go:82: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:08:52.8159531Z         
2025-07-10T13:08:52.8159981Z         Error: error when getting project properties after create
2025-07-10T13:08:52.8160379Z         
2025-07-10T13:08:52.8160741Z           with mongodbatlas_project.test,
2025-07-10T13:08:52.8161406Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:08:52.8162015Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:08:52.8162369Z         
2025-07-10T13:08:52.8162875Z         error getting project (686fbafffd583001f9eeb3c9): error getting project's
2025-07-10T13:08:52.8163407Z         limits (686fbafffd583001f9eeb3c9):
2025-07-10T13:08:52.8164050Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbafffd583001f9eeb3c9/limits
2025-07-10T13:08:52.8164955Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:08:52.8165610Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:08:52.8166252Z         BadRequestDetail: 
2025-07-10T13:08:52.8166696Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (33.27s)
```

- 2025-07-11

### Error 2025-07-11T03:52:36+00:00
```
2025-07-11T03:52:36.8520902Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-11T03:52:36.8527699Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-11T03:52:36.8564593Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-11T03:52:36.8566241Z     resource_backup_compliance_policy_test.go:82: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-11T03:52:36.8567300Z         
2025-07-11T03:52:36.8569122Z         Error: error deleting advanced cluster (test-acc-tf-c-9076774598304207851): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2025-07-11T03:52:36.8570387Z         
2025-07-11T03:52:36.8571088Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (12176.98s)
```

- 2025-07-12 PASS 13 minutes
- 2025-07-13 PASS 13 minutes
- 2025-07-14

### Error 2025-07-14T03:31:03+00:00
```
2025-07-14T03:31:03.4551840Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-14T03:31:03.4566341Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-14T03:31:03.4738007Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-14T03:31:03.4738728Z     resource_backup_compliance_policy_test.go:82: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:03.4739231Z         
2025-07-14T03:31:03.4740015Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:03.4740814Z         
2025-07-14T03:31:03.4741247Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-14T03:31:03.4742033Z           on terraform_plugin_test.tf line 26, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-14T03:31:03.4742763Z           26: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-14T03:31:03.4743169Z         
2025-07-14T03:31:03.4755248Z    test_name=TestAccBackupCompliancePolicy_overwriteBackupPolicies test_terraform_path=/home/runner/work/_temp/af655888-6006-4c8b-907b-c20f5854a7b2/terraform
2025-07-14T03:31:03.4756269Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T03:31:03.4756778Z         
2025-07-14T03:31:03.4757146Z         Error: error when destroying resource
2025-07-14T03:31:03.4757638Z         
2025-07-14T03:31:03.4758052Z         error deleting project (68744fc252cba864e5f0fa7a):
2025-07-14T03:31:03.4758716Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fc252cba864e5f0fa7a
2025-07-14T03:31:03.4759285Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-14T03:31:03.4759903Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-07-14T03:31:03.4760715Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-07-14T03:31:03.4761235Z         Params: [], BadRequestDetail: 
2025-07-14T03:31:03.4761728Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (10805.59s)
```

- 2025-07-15 PASS 12 minutes
- 2025-07-16 PASS 13 minutes
- 2025-07-17 PASS 12 minutes
- 2025-07-18 PASS 17 minutes
- 2025-07-19 PASS 12 minutes
- 2025-07-20

### Error 2025-07-20T00:34:05+00:00
```
2025-07-20T00:34:05.9412314Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-20T00:34:05.9420855Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-20T00:34:05.9451898Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-20T00:34:05.9453352Z     resource_backup_compliance_policy_test.go:82: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:34:05.9454372Z         
2025-07-20T00:34:05.9454870Z         Error: error when getting project properties after create
2025-07-20T00:34:05.9455294Z         
2025-07-20T00:34:05.9455668Z           with mongodbatlas_project.test,
2025-07-20T00:34:05.9456556Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-20T00:34:05.9457445Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-20T00:34:05.9457816Z         
2025-07-20T00:34:05.9458352Z         error getting project (687c3935426db7026b5b158e): error getting project's
2025-07-20T00:34:05.9458899Z         limits (687c3935426db7026b5b158e):
2025-07-20T00:34:05.9459563Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3935426db7026b5b158e/limits
2025-07-20T00:34:05.9460326Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:34:05.9460992Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:34:05.9461468Z         BadRequestDetail: 
2025-07-20T00:34:05.9461930Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (32.70s)
```

- 2025-07-21 PASS 11 minutes
- 2025-07-22 PASS 11 minutes
- 2025-07-23
  - PASS 11 minutes
  - PASS 13 minutes
- 2025-07-24 PASS 12 minutes
- 2025-07-25 PASS 14 minutes
- 2025-07-26 PASS 11 minutes
- 2025-07-27

### Error 2025-07-27T00:48:43+00:00
```
2025-07-27T00:48:43.7212549Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-27T00:48:43.7222219Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-27T00:48:43.7368318Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-27T00:48:43.7369776Z     resource_backup_compliance_policy_test.go:82: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-27T00:48:43.7370992Z         
2025-07-27T00:48:43.7371893Z         Error: error when getting project properties after create
2025-07-27T00:48:43.7372631Z         
2025-07-27T00:48:43.7373291Z           with mongodbatlas_project.test,
2025-07-27T00:48:43.7374523Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-27T00:48:43.7375675Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-27T00:48:43.7376342Z         
2025-07-27T00:48:43.7377283Z         error getting project (688573d8ef1f7377717a88ee): error getting project's
2025-07-27T00:48:43.7378238Z         limits (688573d8ef1f7377717a88ee):
2025-07-27T00:48:43.7379424Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573d8ef1f7377717a88ee/limits
2025-07-27T00:48:43.7380965Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T00:48:43.7382180Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T00:48:43.7383035Z         BadRequestDetail: 
2025-07-27T00:48:43.7383849Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (916.20s)
```

- 2025-07-28 PASS 14 minutes
- 2025-07-29 PASS 13 minutes
- 2025-07-30 PASS 13 minutes
- 2025-07-31

### Error 2025-07-31T00:31:50+00:00
```
2025-07-31T00:31:50.5491762Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-31T00:31:50.5500358Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-31T00:31:50.5528457Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-31T00:31:50.5529837Z     resource_backup_compliance_policy_test.go:82: Step 1/2 error: Error running apply: exit status 1
2025-07-31T00:31:50.5530701Z         
2025-07-31T00:31:50.5533689Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/688ab92885f3692162ff2d14/clusters POST: HTTP 400 Bad Request (Error code: "ATLAS_CLUSTER_VERSION_DEPRECATED") Detail: MongoDB version is deprecated in Atlas. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-31T00:31:50.5536061Z         
2025-07-31T00:31:50.5536779Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-31T00:31:50.5538150Z           on terraform_plugin_test.tf line 26, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-31T00:31:50.5539705Z           26: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-31T00:31:50.5540434Z         
2025-07-31T00:31:50.5541105Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (6.50s)
```

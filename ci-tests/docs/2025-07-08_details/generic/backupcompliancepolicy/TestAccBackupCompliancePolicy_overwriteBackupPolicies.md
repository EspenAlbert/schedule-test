# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_overwriteBackupPolicies Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 12 minutes
```
2025-07-01T08:46:21.8498004Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-01T08:46:21.8504898Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-01T08:46:21.8529195Z --- PASS: TestAccBackupCompliancePolicy_overwriteBackupPolicies (771.27s)
```
### 2025-07-02
#### PASS 13 minutes
```
2025-07-02T00:42:41.6683816Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-02T00:42:41.6688532Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-02T00:42:41.6703993Z --- PASS: TestAccBackupCompliancePolicy_overwriteBackupPolicies (832.24s)
```
### 2025-07-03
#### PASS 14 minutes
```
2025-07-03T00:43:41.3462043Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-03T00:43:41.3469527Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-03T00:43:41.3487525Z --- PASS: TestAccBackupCompliancePolicy_overwriteBackupPolicies (857.47s)
```
### 2025-07-04
#### PASS 16 minutes
```
2025-07-04T00:45:35.9908874Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-04T00:45:35.9916869Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-04T00:45:35.9933791Z --- PASS: TestAccBackupCompliancePolicy_overwriteBackupPolicies (997.98s)
```
### 2025-07-05
#### PASS 10 minutes
```
2025-07-05T00:38:37.6785095Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-05T00:38:37.6791783Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-05T00:38:37.6814444Z --- PASS: TestAccBackupCompliancePolicy_overwriteBackupPolicies (641.46s)
```
### 2025-07-06
#### FAIL 14 minutes
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
### 2025-07-07
#### PASS 12 minutes
```
2025-07-07T00:43:47.0840992Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-07T00:43:47.0844982Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-07T00:43:47.0858217Z --- PASS: TestAccBackupCompliancePolicy_overwriteBackupPolicies (741.87s)
```
### 2025-07-08
#### PASS 13 minutes
```
2025-07-08T00:43:11.4294208Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-08T00:43:11.4300705Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-07-08T00:43:11.4324007Z --- PASS: TestAccBackupCompliancePolicy_overwriteBackupPolicies (833.77s)
```
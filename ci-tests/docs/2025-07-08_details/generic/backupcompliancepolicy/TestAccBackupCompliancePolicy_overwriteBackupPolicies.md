# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_overwriteBackupPolicies Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 13 minutes
### 2025-07-03
#### PASS 14 minutes
### 2025-07-04
#### PASS 16 minutes
### 2025-07-05
#### PASS 10 minutes
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
### 2025-07-08
#### PASS 13 minutes
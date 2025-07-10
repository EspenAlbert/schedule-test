# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_overwriteBackupPolicies Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029530000) |  | qa |  | 1.03s
[2025-06-05 00:28](#error-2025-06-05t0028560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 2.04s
[2025-07-06 00:46](#error-2025-07-06t0046500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4027267b5775b682a2d/limits | qa | flaky_500 | 888.06s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 13 minutes
- 2025-04-13 PASS 17 minutes
- 2025-04-14 PASS 12 minutes
- 2025-04-15 PASS 14 minutes
- 2025-04-16
  - PASS 12 minutes
  - PASS 18 minutes
- 2025-04-17 PASS 10 minutes
- 2025-04-18 PASS 13 minutes
- 2025-04-19 PASS 15 minutes
- 2025-04-20 PASS 15 minutes
- 2025-04-21 PASS 12 minutes
- 2025-04-22 PASS 14 minutes
- 2025-04-23 PASS 13 minutes
- 2025-04-24 PASS 12 minutes
- 2025-04-25 PASS 13 minutes
- 2025-04-26 PASS 15 minutes
- 2025-04-27 PASS 14 minutes
- 2025-04-28 PASS 13 minutes
- 2025-04-29 PASS 13 minutes
- 2025-04-30
  - PASS 13 minutes
  - PASS 14 minutes
- 2025-05-01
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 13 minutes
  - PASS 11 minutes
  - PASS 12 minutes
- 2025-05-02 PASS 15 minutes
- 2025-05-03 PASS 14 minutes
- 2025-05-04 PASS 13 minutes
- 2025-05-05 PASS 11 minutes
- 2025-05-06 PASS 13 minutes
- 2025-05-07 PASS 16 minutes
- 2025-05-08 PASS 17 minutes
- 2025-05-09 PASS 14 minutes
- 2025-05-10 PASS 15 minutes
- 2025-05-11

### Error 2025-05-11T00:29:53+00:00
```
2025-05-11T00:29:53.7314151Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-05-11T00:29:53.7317950Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-05-11T00:29:53.7396327Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-05-11T00:29:53.7397050Z     resource_backup_compliance_policy_test.go:81: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:53.7397557Z         
2025-05-11T00:29:53.7398032Z         Error: error creating project: test-acc-tf-p-4911800753547204747
2025-05-11T00:29:53.7398448Z         
2025-05-11T00:29:53.7398806Z           with mongodbatlas_project.test,
2025-05-11T00:29:53.7399616Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:53.7400242Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:53.7400613Z         
2025-05-11T00:29:53.7401385Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:53.7401855Z         type
2025-05-11T00:29:53.7403852Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (1.26s)
```

- 2025-05-12 PASS 13 minutes
- 2025-05-13
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-05-14 PASS 15 minutes
- 2025-05-15 PASS 14 minutes
- 2025-05-16 PASS 13 minutes
- 2025-05-17 PASS 14 minutes
- 2025-05-18 PASS 13 minutes
- 2025-05-19 PASS 13 minutes
- 2025-05-20 PASS 13 minutes
- 2025-05-21 PASS 13 minutes
- 2025-05-22 PASS 11 minutes
- 2025-05-23 PASS 14 minutes
- 2025-05-24 PASS 14 minutes
- 2025-05-25 PASS 15 minutes
- 2025-05-26 PASS 15 minutes
- 2025-05-27
  - PASS 14 minutes
  - PASS 12 minutes
- 2025-05-28
  - PASS 15 minutes
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-05-29
  - PASS 13 minutes
  - PASS 11 minutes
- 2025-05-30 PASS 25 minutes
- 2025-05-31 PASS 12 minutes
- 2025-06-01
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 12 minutes
  - PASS 14 minutes
  - PASS 11 minutes
- 2025-06-02
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-06-03 PASS 12 minutes
- 2025-06-04 PASS 13 minutes
- 2025-06-05

### Error 2025-06-05T00:28:56+00:00
```
2025-06-05T00:28:56.4030353Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-06-05T00:28:56.4037593Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-06-05T00:28:56.4127977Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-06-05T00:28:56.4129437Z     resource_backup_compliance_policy_test.go:81: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:28:56.4130555Z         
2025-06-05T00:28:56.4131450Z         Error: error creating project: test-acc-tf-p-6477745912189552474
2025-06-05T00:28:56.4132245Z         
2025-06-05T00:28:56.4132929Z           with mongodbatlas_project.test,
2025-06-05T00:28:56.4134218Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:28:56.4135383Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:28:56.4136087Z         
2025-06-05T00:28:56.4137086Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:28:56.4138426Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:28:56.4139815Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:28:56.4140865Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (2.36s)
```

- 2025-06-06 PASS 12 minutes
- 2025-06-07 PASS 14 minutes
- 2025-06-08 PASS 12 minutes
- 2025-06-09 PASS 11 minutes
- 2025-06-10 PASS 21 minutes
- 2025-06-11
  - PASS 12 minutes
  - PASS 13 minutes
- 2025-06-12 PASS 13 minutes
- 2025-06-13 PASS 13 minutes
- 2025-06-14 PASS 13 minutes
- 2025-06-15 PASS 13 minutes
- 2025-06-16 PASS 14 minutes
- 2025-06-17 PASS 11 minutes
- 2025-06-18 PASS 12 minutes
- 2025-06-19 PASS 13 minutes
- 2025-06-20 PASS 14 minutes
- 2025-06-21 PASS 14 minutes
- 2025-06-22 PASS 12 minutes
- 2025-06-23 PASS 12 minutes
- 2025-06-24 PASS 12 minutes
- 2025-06-25 PASS 12 minutes
- 2025-06-26 PASS 12 minutes
- 2025-06-27 PASS 13 minutes
- 2025-06-28 PASS 12 minutes
- 2025-06-29 PASS 14 minutes
- 2025-06-30 PASS 13 minutes
- 2025-07-01
  - PASS 11 minutes
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 12 minutes
  - PASS 12 minutes
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
- 2025-07-10 PASS 12 minutes
# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_overwriteBackupPolicies Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:46](#error-2026-04-07t0046400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.08s
[2026-04-09 00:40](#error-2026-04-09t0040200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.05s
[2026-04-16 00:51](#error-2026-04-16t0051510000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0325a1ec945fedc71992d/clusters | dev | out_of_capacity | 64.05s
[2026-04-25 00:48](#error-2026-04-25t0048390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.01s
[2026-04-28 00:55](#error-2026-04-28t0055370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:46:40+00:00
```
2026-04-07T00:46:40.4683944Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-04-07T00:46:40.4692015Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-04-07T00:46:40.4717025Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-04-07T00:46:40.4718522Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-04-07T00:46:40.4719493Z         
2026-04-07T00:46:40.4720361Z         Error: error creating project: test-acc-tf-p-1173514183025423601
2026-04-07T00:46:40.4721302Z         
2026-04-07T00:46:40.4721953Z           with mongodbatlas_project.test,
2026-04-07T00:46:40.4723218Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-07T00:46:40.4724390Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-07T00:46:40.4725062Z         
2026-04-07T00:46:40.4726288Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-07T00:46:40.4727646Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-07T00:46:40.4728814Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:46:40.4729834Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (62.81s)
```

- 2026-04-08 PASS 14 minutes
- 2026-04-09

### Error 2026-04-09T00:40:20+00:00
```
2026-04-09T00:40:20.3243113Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-04-09T00:40:20.3251908Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-04-09T00:40:20.3324572Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-04-09T00:40:20.3325332Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-04-09T00:40:20.3325884Z         
2026-04-09T00:40:20.3326497Z         Error: error creating project: test-acc-tf-p-3020825169448864243
2026-04-09T00:40:20.3326942Z         
2026-04-09T00:40:20.3327307Z           with mongodbatlas_project.test,
2026-04-09T00:40:20.3327993Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:20.3328640Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:20.3329022Z         
2026-04-09T00:40:20.3329566Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:20.3330298Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:20.3331120Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:20.3331695Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (68.49s)
```

- 2026-04-10 PASS 25 minutes
- 2026-04-11 PASS 16 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 16 minutes
- 2026-04-14 PASS 16 minutes
- 2026-04-15 PASS 18 minutes
- 2026-04-16

### Error 2026-04-16T00:51:51+00:00
```
2026-04-16T00:51:51.1570224Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-04-16T00:51:51.1576539Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-04-16T00:51:51.1593748Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-04-16T00:51:51.1595137Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:51:51.1596125Z         
2026-04-16T00:51:51.1596623Z         Error: Error in create
2026-04-16T00:51:51.1596948Z         
2026-04-16T00:51:51.1597452Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T00:51:51.1598285Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T00:51:51.1599452Z           25: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T00:51:51.1599890Z         
2026-04-16T00:51:51.1600394Z         cluster name: test-acc-tf-c-2648315597105868112, API error details:
2026-04-16T00:51:51.1601184Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325a1ec945fedc71992d/clusters
2026-04-16T00:51:51.1601997Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:51:51.1602755Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:51:51.1603353Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:51:51.1603870Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (64.46s)
```

- 2026-04-17 PASS 17 minutes
- 2026-04-18 PASS 26 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 14 minutes
- 2026-04-21 PASS 19 minutes
- 2026-04-22
  - PASS 58 minutes
  - PASS 14 minutes
- 2026-04-23 PASS 27 minutes
- 2026-04-24 PASS 17 minutes
- 2026-04-25

### Error 2026-04-25T00:48:39+00:00
```
2026-04-25T00:48:39.8075855Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-04-25T00:48:39.8081363Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-04-25T00:48:39.8099826Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-04-25T00:48:39.8100981Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-04-25T00:48:39.8101868Z         
2026-04-25T00:48:39.8102839Z         Error: error creating project: test-acc-tf-p-6725034990062054895
2026-04-25T00:48:39.8103325Z         
2026-04-25T00:48:39.8104076Z           with mongodbatlas_project.test,
2026-04-25T00:48:39.8104985Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-25T00:48:39.8105991Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-25T00:48:39.8106644Z         
2026-04-25T00:48:39.8107422Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-25T00:48:39.8108426Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-25T00:48:39.8109591Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-25T00:48:39.8110421Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (65.09s)
```

- 2026-04-26: MISSING
- 2026-04-27 PASS 18 minutes
- 2026-04-28

### Error 2026-04-28T00:55:37+00:00
```
2026-04-28T00:55:37.5411870Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-04-28T00:55:37.5420639Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-04-28T00:55:37.5477825Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-04-28T00:55:37.5479144Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-04-28T00:55:37.5480122Z         
2026-04-28T00:55:37.5480959Z         Error: error creating project: test-acc-tf-p-8002486181918267327
2026-04-28T00:55:37.5481699Z         
2026-04-28T00:55:37.5482309Z           with mongodbatlas_project.test,
2026-04-28T00:55:37.5483680Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-28T00:55:37.5484767Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-28T00:55:37.5485422Z         
2026-04-28T00:55:37.5486476Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-28T00:55:37.5487741Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-28T00:55:37.5488899Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-28T00:55:37.5489876Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (64.67s)
```

- 2026-04-29 PASS 18 minutes
- 2026-04-30 PASS 28 minutes
- 2026-05-01 PASS 16 minutes
- 2026-05-02 PASS 16 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 17 minutes
- 2026-05-05 PASS 26 minutes
- 2026-05-06 PASS 20 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 16 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 17 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 16 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 19 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 18 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 15 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 15 minutes

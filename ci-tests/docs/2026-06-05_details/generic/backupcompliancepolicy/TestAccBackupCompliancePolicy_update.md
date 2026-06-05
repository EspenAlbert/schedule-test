# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_update Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-23 01:00](#error-2026-05-23t0100540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.03s
[2026-05-30 01:16](#error-2026-05-30t0116430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS a minute
- 2026-05-08 PASS a minute
- 2026-05-09 PASS 2 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS a minute
- 2026-05-12 PASS a minute
- 2026-05-13 PASS a minute
- 2026-05-14 PASS a minute
- 2026-05-15 PASS a minute
- 2026-05-16 PASS a minute
- 2026-05-17: MISSING
- 2026-05-18 PASS a minute
- 2026-05-19 PASS a minute
- 2026-05-20 PASS a minute
- 2026-05-21 PASS 2 minutes
- 2026-05-22 PASS a minute
- 2026-05-23

### Error 2026-05-23T01:00:54+00:00
```
2026-05-23T01:00:54.9075974Z === RUN   TestAccBackupCompliancePolicy_update
2026-05-23T01:00:54.9086475Z === CONT  TestAccBackupCompliancePolicy_update
2026-05-23T01:00:54.9099411Z    test_name=TestAccBackupCompliancePolicy_overwriteBackupPolicies test_terraform_path=/home/runner/work/_temp/0df89f75-4f98-412b-a810-64847eae07c1/terraform
2026-05-23T01:00:54.9145367Z === NAME  TestAccBackupCompliancePolicy_update
2026-05-23T01:00:54.9146107Z     resource_backup_compliance_policy_test.go:35: Step 1/2 error: Error running apply: exit status 1
2026-05-23T01:00:54.9146682Z         
2026-05-23T01:00:54.9147206Z         Error: error creating project: test-acc-tf-p-1843158412246116735
2026-05-23T01:00:54.9147677Z         
2026-05-23T01:00:54.9148073Z           with mongodbatlas_project.test,
2026-05-23T01:00:54.9148799Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:00:54.9149480Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:00:54.9149889Z         
2026-05-23T01:00:54.9150466Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:00:54.9151238Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:00:54.9151944Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:00:54.9152811Z --- FAIL: TestAccBackupCompliancePolicy_update (94.28s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS a minute
- 2026-05-26 PASS 2 minutes
- 2026-05-27 PASS a minute
- 2026-05-28 PASS a minute
- 2026-05-29 PASS a minute
- 2026-05-30

### Error 2026-05-30T01:16:43+00:00
```
2026-05-30T01:16:43.1409722Z === RUN   TestAccBackupCompliancePolicy_update
2026-05-30T01:16:43.1417887Z === CONT  TestAccBackupCompliancePolicy_update
2026-05-30T01:16:43.1432648Z   
2026-05-30T01:16:43.1455831Z === NAME  TestAccBackupCompliancePolicy_update
2026-05-30T01:16:43.1456637Z     resource_backup_compliance_policy_test.go:35: Step 1/2 error: Error running apply: exit status 1
2026-05-30T01:16:43.1457511Z         
2026-05-30T01:16:43.1458145Z         Error: error creating project: test-acc-tf-p-6358369057391516058
2026-05-30T01:16:43.1458669Z         
2026-05-30T01:16:43.1459121Z           with mongodbatlas_project.test,
2026-05-30T01:16:43.1459916Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:16:43.1460653Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:16:43.1461305Z         
2026-05-30T01:16:43.1461937Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:16:43.1462826Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:16:43.1463593Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:16:43.1464177Z --- FAIL: TestAccBackupCompliancePolicy_update (74.46s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS a minute
- 2026-06-02 PASS a minute
- 2026-06-03 PASS a minute
- 2026-06-04 PASS a minute
- 2026-06-05 PASS a minute

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a minute
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a minute
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS a minute
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a minute
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

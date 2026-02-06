# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_overwriteBackupPolicies Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:35](#error-2026-01-31t0335560000) |  | dev | timeout | 10849.09s
[2026-02-02 03:39](#error-2026-02-02t0339090000) |  | dev | timeout | 10838.00s
[2026-02-03 00:40](#error-2026-02-03t0040310000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5b2e54ee9959026f9/clusters | dev | out_of_capacity | 7.04s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 17 minutes
- 2026-01-09 PASS 21 minutes
- 2026-01-10 PASS 14 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 17 minutes
- 2026-01-13 PASS 23 minutes
- 2026-01-14 PASS 17 minutes
- 2026-01-15 PASS 19 minutes
- 2026-01-16 PASS 16 minutes
- 2026-01-17 PASS 14 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 14 minutes
- 2026-01-20 PASS 16 minutes
- 2026-01-21 PASS 16 minutes
- 2026-01-22 PASS 17 minutes
- 2026-01-23 PASS 13 minutes
- 2026-01-24 PASS 17 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 16 minutes
- 2026-01-27 PASS 18 minutes
- 2026-01-28 PASS 15 minutes
- 2026-01-29 PASS 40 minutes
- 2026-01-30 PASS 22 minutes
- 2026-01-31

### Error 2026-01-31T03:35:56+00:00
```
2026-01-31T03:35:56.7584090Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-01-31T03:35:56.7589219Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-01-31T03:35:56.7604535Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-01-31T03:35:56.7605332Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:35:56.7606082Z         
2026-01-31T03:35:56.7606424Z         Error: Error in create
2026-01-31T03:35:56.7606739Z         
2026-01-31T03:35:56.7607173Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:35:56.7608155Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:35:56.7608949Z           25: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:35:56.7609378Z         
2026-01-31T03:35:56.7609926Z         cluster=test-acc-tf-c-1014719285903062416 didn't reach desired state: IDLE,
2026-01-31T03:35:56.7610497Z         error: context deadline exceeded
2026-01-31T03:35:56.7611008Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (10849.93s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:39:09+00:00
```
2026-02-02T03:39:09.2616409Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-02-02T03:39:09.2623114Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-02-02T03:39:09.2651196Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-02-02T03:39:09.2652627Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:39:09.2653567Z         
2026-02-02T03:39:09.2654103Z         Error: Error in create
2026-02-02T03:39:09.2654628Z         
2026-02-02T03:39:09.2655351Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-02T03:39:09.2656752Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-02T03:39:09.2658079Z           25: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-02T03:39:09.2658799Z         
2026-02-02T03:39:09.2659715Z         cluster=test-acc-tf-c-8721469372870864819 didn't reach desired state: IDLE,
2026-02-02T03:39:09.2660772Z         error: context deadline exceeded
2026-02-02T03:39:09.2661631Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (10838.03s)
```

- 2026-02-03

### Error 2026-02-03T00:40:31+00:00
```
2026-02-03T00:40:31.6456023Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-02-03T00:40:31.6464744Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-02-03T00:40:31.6481734Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2026-02-03T00:40:31.6482559Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:40:31.6483164Z         
2026-02-03T00:40:31.6483498Z         Error: Error in create
2026-02-03T00:40:31.6483825Z         
2026-02-03T00:40:31.6484544Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:31.6485392Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:31.6486187Z           25: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:31.6486624Z         
2026-02-03T00:40:31.6487132Z         cluster name: test-acc-tf-c-5691203585941074402, API error details:
2026-02-03T00:40:31.6488097Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5b2e54ee9959026f9/clusters
2026-02-03T00:40:31.6488929Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:31.6489703Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:31.6490321Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:31.6490848Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (7.44s)
```

- 2026-02-04 PASS 18 minutes
- 2026-02-05 PASS 16 minutes
- 2026-02-06 PASS 17 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 12 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 14 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 12 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 14 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 16 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 16 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 11 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING

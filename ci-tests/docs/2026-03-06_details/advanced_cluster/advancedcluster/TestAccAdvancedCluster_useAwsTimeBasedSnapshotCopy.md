# advanced_cluster/advancedcluster/TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy Test Details
# Found 19 TestRuns in dev, qa from 2026-02-19 to 2026-03-06 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:40](#error-2026-02-24t0040000000) |  | dev | flaky_500 | 959.04s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16: MISSING
- 2026-02-17: MISSING
- 2026-02-18: MISSING
- 2026-02-19 PASS 29 minutes
- 2026-02-20 PASS 23 minutes
- 2026-02-21 PASS 21 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T00:40:00+00:00
```
2026-02-24T00:40:00.5450629Z === RUN   TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy
2026-02-24T00:40:00.5540656Z === CONT  TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy
2026-02-24T00:40:35.5551621Z === NAME  TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy
2026-02-24T00:40:35.5553812Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:40:35.55492946Z, ProjectID: 699cf2bb8dfec41eaa859d9c, Cluster name: test-acc-tf-c-1548093984470511922
2026-02-24T00:55:59.8444706Z === NAME  TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy
2026-02-24T00:55:59.8445717Z     resource_test.go:2990: Step 1/4 error: Error running apply: exit status 1
2026-02-24T00:55:59.8446421Z         
2026-02-24T00:55:59.8446941Z         Error: error resolving container IDs
2026-02-24T00:55:59.8447444Z         
2026-02-24T00:55:59.8448033Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:55:59.8449284Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:55:59.8450460Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:55:59.8451015Z         
2026-02-24T00:55:59.8451835Z         cluster name = test-acc-tf-c-1548093984470511922, error details: (503 Service
2026-02-24T00:55:59.8453147Z         Unavailable) failed to decode response body: undefined response type
2026-02-24T00:55:59.8569794Z   
2026-02-24T00:55:59.9164442Z --- FAIL: TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy (959.36s)
```

- 2026-02-25 PASS 19 minutes
- 2026-02-26 PASS 28 minutes
- 2026-02-27 PASS 18 minutes
- 2026-02-28 PASS 17 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 18 minutes
  - PASS 17 minutes
- 2026-03-03 PASS 19 minutes
- 2026-03-04 PASS 20 minutes
- 2026-03-05 PASS 30 minutes
- 2026-03-06 PASS 21 minutes

## QA Environment
### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16: MISSING
- 2026-02-17: MISSING
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 17 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 23 minutes
- 2026-03-02 PASS 14 minutes
- 2026-03-03 PASS 18 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING

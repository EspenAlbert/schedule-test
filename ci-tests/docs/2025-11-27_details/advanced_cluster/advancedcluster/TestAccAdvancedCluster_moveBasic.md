# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveBasic Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028110000) |  | dev | timeout | 11531.08s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 18 minutes
- 2025-10-30

### Error 2025-10-30T00:28:11+00:00
```
2025-10-30T00:28:11.5646077Z === RUN   TestAccAdvancedCluster_moveBasic
2025-10-30T00:29:52.4606024Z === CONT  TestAccAdvancedCluster_moveBasic
2025-10-30T03:42:02.5108387Z === NAME  TestAccAdvancedCluster_moveBasic
2025-10-30T03:42:02.5109256Z     move_upgrade_state_test.go:19: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:42:02.5109878Z         
2025-10-30T03:42:02.5110147Z         Error: Error in delete
2025-10-30T03:42:02.5110399Z         
2025-10-30T03:42:02.5110820Z         cluster=test-acc-tf-c-2965237823689840786 didn't reach desired state:
2025-10-30T03:42:02.5111438Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T03:42:02.5112133Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:42:02.5112475Z --- FAIL: TestAccAdvancedCluster_moveBasic (11531.75s)
```

- 2025-10-31 PASS 16 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 15 minutes
- 2025-11-04 PASS 15 minutes
- 2025-11-05
  - PASS 14 minutes
  - PASS 15 minutes
- 2025-11-06 PASS 21 minutes
- 2025-11-07 PASS 16 minutes
- 2025-11-08 PASS 42 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 13 minutes
- 2025-11-11 PASS 15 minutes
- 2025-11-12 PASS 15 minutes
- 2025-11-13 PASS 29 minutes
- 2025-11-14 PASS 19 minutes
- 2025-11-15 PASS 16 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 17 minutes
- 2025-11-18 PASS 15 minutes
- 2025-11-19
  - PASS 14 minutes
  - PASS 12 minutes
- 2025-11-20
  - PASS 20 minutes
  - PASS 12 minutes
- 2025-11-21 PASS 13 minutes
- 2025-11-22 PASS 14 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 14 minutes
- 2025-11-25 PASS 18 minutes
- 2025-11-26 PASS 13 minutes
- 2025-11-27 PASS 20 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-02 00:29](#error-2025-11-02t0029340000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v1.0/groups/6906a5ee5ace12378d295167/clusters | qa | 7.05s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:29:34+00:00
```
2025-11-02T00:29:34.5769110Z === RUN   TestAccAdvancedCluster_moveBasic
2025-11-02T00:31:20.5635289Z === CONT  TestAccAdvancedCluster_moveBasic
2025-11-02T00:31:25.1981365Z === NAME  TestAccAdvancedCluster_moveBasic
2025-11-02T00:31:25.1985200Z     move_upgrade_state_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-11-02T00:31:25.1989316Z         
2025-11-02T00:31:25.1997413Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/6906a5ee5ace12378d295167/clusters: 403 (request "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies.
2025-11-02T00:31:25.1999859Z         
2025-11-02T00:31:25.2000368Z           with mongodbatlas_cluster.old,
2025-11-02T00:31:25.2001342Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-11-02T00:31:25.2022757Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-11-02T00:31:25.2024342Z         
2025-11-02T00:31:25.6218703Z --- FAIL: TestAccAdvancedCluster_moveBasic (7.48s)
```

- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 11 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 14 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 14 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 13 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING

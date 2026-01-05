# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetAWSProvider Test Details
# Found 7 TestRuns in dev, qa from 2025-12-30 to 2026-01-05 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-31 00:32](#error-2025-12-31t0032080000) |  | dev | timeout | 11690.10s

### Timeline
- 2025-12-29: MISSING
- 2025-12-30 PASS 52 minutes
- 2025-12-31

### Error 2025-12-31T00:32:08+00:00
```
2025-12-31T00:32:08.6246552Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-31T00:33:50.5544923Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-31T00:34:15.5646558Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-31T00:34:15.5648946Z     pre_check.go:46: Time before creating cluster: 2025-12-31T00:34:15.564303117Z, ProjectID: 69546f0318a9ce5f47bc712d, Cluster name: test-acc-tf-c-1095090175047136059
2025-12-31T03:46:07.6250728Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-31T03:46:07.6251645Z     resource_test.go:114: Step 2/4 error: Error running apply: exit status 1
2025-12-31T03:46:07.6252109Z         
2025-12-31T03:46:07.6252369Z         Error: Error in update
2025-12-31T03:46:07.6252630Z         
2025-12-31T03:46:07.6252958Z           with mongodbatlas_advanced_cluster.test,
2025-12-31T03:46:07.6253719Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-12-31T03:46:07.6254566Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-12-31T03:46:07.6254897Z         
2025-12-31T03:46:07.6255357Z         cluster=test-acc-tf-c-1095090175047136059 didn't reach desired state: IDLE,
2025-12-31T03:46:07.6255969Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-12-31T03:46:07.6256386Z         'UPDATING', timeout: 3h0m0s)
2025-12-31T03:48:41.5248671Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11690.97s)
```

- 2026-01-01 PASS 55 minutes
- 2026-01-02 PASS 59 minutes
- 2026-01-03 PASS 56 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS an hour

## QA Environment
### Timeline
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 55 minutes
- 2026-01-05: MISSING

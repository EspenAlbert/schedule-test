# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetAWSProvider Test Details
# Found 34 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL(x 4)
Success rate: 88.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-08 00:31](#error-2025-12-08t0031240000) |  | dev | timeout | 11561.03s
[2025-12-13 00:30](#error-2025-12-13t0030060000) |  | dev | flaky_client | 3751.09s
[2025-12-15 00:33](#error-2025-12-15t0033190000) |  | dev | timeout | 11709.06s
[2025-12-31 00:32](#error-2025-12-31t0032080000) |  | dev | timeout | 11690.10s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04
  - PASS an hour
  - PASS 55 minutes
  - PASS 54 minutes
- 2025-12-05 PASS an hour
- 2025-12-06 PASS 57 minutes
- 2025-12-07: MISSING
- 2025-12-08

### Error 2025-12-08T00:31:24+00:00
```
2025-12-08T00:31:24.1238529Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-08T00:33:10.9430769Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-08T00:33:35.9719853Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-08T00:33:35.9720933Z     pre_check.go:46: Time before creating cluster: 2025-12-08T00:33:35.97171204Z, ProjectID: 69361c57ca99750d9ebe3aa9, Cluster name: test-acc-tf-c-5646123259574381989
2025-12-08T03:43:19.2698271Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-08T03:43:19.2699177Z     resource_test.go:114: Step 2/4 error: Error running apply: exit status 1
2025-12-08T03:43:19.2699745Z         
2025-12-08T03:43:19.2700118Z         Error: Error in update
2025-12-08T03:43:19.2700448Z         
2025-12-08T03:43:19.2700880Z           with mongodbatlas_advanced_cluster.test,
2025-12-08T03:43:19.2701473Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-12-08T03:43:19.2702020Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-12-08T03:43:19.2702483Z         
2025-12-08T03:43:19.2703173Z         cluster=test-acc-tf-c-5646123259574381989 didn't reach desired state: IDLE,
2025-12-08T03:43:19.2703741Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-12-08T03:43:19.2704146Z         'UPDATING', timeout: 3h0m0s)
2025-12-08T03:45:52.1949320Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11561.26s)
```

- 2025-12-09 PASS 55 minutes
- 2025-12-10
  - PASS an hour
  - PASS 56 minutes
- 2025-12-11 PASS 58 minutes
- 2025-12-12 PASS an hour
- 2025-12-13

### Error 2025-12-13T00:30:06+00:00
```
2025-12-13T00:30:06.1204873Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-13T00:31:44.5028347Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-13T00:32:24.4993184Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-13T00:32:24.4995195Z     pre_check.go:46: Time before creating cluster: 2025-12-13T00:32:24.499016184Z, ProjectID: 693cb38901541832febc4195, Cluster name: test-acc-tf-c-1919306958738250193
2025-12-13T01:31:42.8509247Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-13T01:31:42.8509831Z     resource_test.go:114: Step 2/4 error: Error running apply: exit status 1
2025-12-13T01:31:42.8510492Z         
2025-12-13T01:31:42.8510945Z         Error: Error in update
2025-12-13T01:31:42.8511204Z         
2025-12-13T01:31:42.8511534Z           with mongodbatlas_advanced_cluster.test,
2025-12-13T01:31:42.8512458Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-12-13T01:31:42.8513069Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-12-13T01:31:42.8513379Z         
2025-12-13T01:31:42.8513833Z         cluster=test-acc-tf-c-1919306958738250193 didn't reach desired state: IDLE,
2025-12-13T01:31:42.8514507Z         error: Get
2025-12-13T01:31:42.8515263Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/693cb38901541832febc4195/clusters/test-acc-tf-c-1919306958738250193":
2025-12-13T01:31:42.8515975Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-12-13T01:34:16.4338922Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (3751.93s)
```

- 2025-12-14: MISSING
- 2025-12-15

### Error 2025-12-15T00:33:19+00:00
```
2025-12-15T00:33:19.0035199Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-15T00:35:04.0389195Z === CONT  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-15T00:35:29.0555274Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-15T00:35:29.0557056Z     pre_check.go:46: Time before creating cluster: 2025-12-15T00:35:29.05528868Z, ProjectID: 693f574ade63462733325a2f, Cluster name: test-acc-tf-c-8854673644223959733
2025-12-15T03:46:10.1125489Z === NAME  TestAccClusterAdvancedCluster_replicaSetAWSProvider
2025-12-15T03:46:10.1126190Z     resource_test.go:114: Step 2/4 error: Error running apply: exit status 1
2025-12-15T03:46:10.1126854Z         
2025-12-15T03:46:10.1127265Z         Error: Error in update
2025-12-15T03:46:10.1127559Z         
2025-12-15T03:46:10.1127938Z           with mongodbatlas_advanced_cluster.test,
2025-12-15T03:46:10.1128661Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-12-15T03:46:10.1129337Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-12-15T03:46:10.1129734Z         
2025-12-15T03:46:10.1130371Z         cluster=test-acc-tf-c-8854673644223959733 didn't reach desired state: IDLE,
2025-12-15T03:46:10.1130966Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-12-15T03:46:10.1131376Z         'UPDATING', timeout: 3h0m0s)
2025-12-15T03:50:13.6474000Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (11709.61s)
```

- 2025-12-16 PASS 55 minutes
- 2025-12-17 PASS an hour
- 2025-12-18 PASS 57 minutes
- 2025-12-19 PASS an hour
- 2025-12-20 PASS 57 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS an hour
- 2025-12-23 PASS 58 minutes
- 2025-12-24 PASS an hour
- 2025-12-25 PASS an hour
- 2025-12-26 PASS 58 minutes
- 2025-12-27 PASS 59 minutes
- 2025-12-28: MISSING
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

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 48 minutes
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 51 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 52 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 54 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 51 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 52 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
